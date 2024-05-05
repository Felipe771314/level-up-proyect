import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Define una nueva interfaz extendida de AxiosRequestConfig para incluir la propiedad cache
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  cache?: any; // Puedes definir el tipo de la propiedad cache según sea necesario
}

interface CacheEntry {
  response: AxiosResponse;
  timestamp: number;
}

class AxiosCaching {
  private instance: AxiosInstance;
  private cache: Map<string, CacheEntry>;

  constructor(config: CustomAxiosRequestConfig = {}) {
    this.instance = axios.create(config);
    this.cache = new Map();

    // Interceptores de respuestas
    this.instance.interceptors.response.use(
      this.handleResponse.bind(this),
      this.handleResponseError.bind(this)
    );
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    // Implementar lógica de caché aquí
    const cacheKey = response.config.url || '';
    this.cache.set(cacheKey, {
      response,
      timestamp: Date.now(),
    });
    return response;
  }

  private handleResponseError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }

  enableCaching(): void {
    // Habilitar la caché
    this.instance.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        config.cache = {
          maxAge: 60 * 1000, // 1 minuto por defecto, ajustable según sea necesario
        };
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  disableCaching(): void {
    // Deshabilitar la caché
    this.instance.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        delete config.cache;
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  clearCache(): void {
    // Limpiar toda la caché
    this.cache.clear();
  }

  clearCacheEntry(url: string): void {
    // Limpiar una entrada específica de la caché
    this.cache.delete(url);
  }

  getCacheEntry(url: string): AxiosResponse | undefined {
    // Obtener una entrada de la caché específica
    const cacheEntry = this.cache.get(url);
    return cacheEntry ? cacheEntry.response : undefined;
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}

export default AxiosCaching;
