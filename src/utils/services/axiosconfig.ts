import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface CustomAxiosConfig {
  baseURL?: string;
  timeout?: number;
  headers?: any;
  // Otras opciones de configuración que desees permitir
}

class AxiosConfig {
  private static instance: AxiosInstance | null = null;

  static getInstance(config: CustomAxiosConfig = {}): AxiosInstance {
    if (!AxiosConfig.instance) {
      const defaultConfig: AxiosRequestConfig = {
        baseURL: config.baseURL || 'https://rickandmortyapi.com/api',
        timeout: config.timeout || 5000,
        headers: config.headers || {},
      };

      AxiosConfig.instance = axios.create(defaultConfig);

      // Interceptores de solicitudes y respuestas
      AxiosConfig.instance.interceptors.request.use(AxiosConfig.handleRequest);
      AxiosConfig.instance.interceptors.response.use(AxiosConfig.handleResponse, AxiosConfig.handleResponseError);
    }

    return AxiosConfig.instance;
  }

  private static handleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    // Aquí puedes agregar lógica para modificar la configuración de la solicitud
    // antes de que se envíe al servidor, por ejemplo, agregar un token de autorización
    return config;
  }

  private static handleResponse(response: AxiosResponse): AxiosResponse {
    // Aquí puedes agregar lógica para transformar la respuesta antes de que sea
    // entregada al código que realizó la solicitud, por ejemplo, convertir datos
    // específicos en un formato diferente o realizar validaciones adicionales
    return response;
  }

  private static handleResponseError(error: AxiosError): Promise<AxiosError> {
    // Aquí puedes agregar lógica para manejar los errores de respuesta, por ejemplo,
    // mostrar un mensaje de error al usuario o realizar acciones específicas según el error
    return Promise.reject(error);
  }

  async get(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    // Realizar la solicitud GET
    const cacheKey = url + JSON.stringify(config);
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      // Devolver la respuesta almacenada en caché si está disponible
      const response = JSON.parse(cachedData);
      return Promise.resolve(response);
    } else {
      // Realizar la solicitud si no hay datos en caché y almacenar la respuesta en caché
      const response = await AxiosConfig.instance!.get(url, config);
      localStorage.setItem(cacheKey, JSON.stringify(response.data));
      return response;
    }
  }

  async post(url: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    // Realizar la solicitud POST
    return AxiosConfig.instance!.post(url, data, config);
  }

  // Puedes agregar métodos adicionales para otras operaciones como PUT, DELETE, etc.
}

export default AxiosConfig;
