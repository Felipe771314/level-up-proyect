import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface CustomAxiosConfig {
  baseURL?: string;
  timeout?: number;
  headers?: any;
  // Otras opciones de configuración que desees permitir
}

class AxiosConfig {
  private static instance: AxiosInstance;

  private constructor(config: AxiosRequestConfig) {
    AxiosConfig.instance = axios.create(config);

    // Interceptores de solicitudes y respuestas
    AxiosConfig.instance.interceptors.request.use(AxiosConfig.handleRequest);
    AxiosConfig.instance.interceptors.response.use(AxiosConfig.handleResponse, AxiosConfig.handleResponseError);
  }

  static getInstance(config: CustomAxiosConfig = {}): AxiosInstance {
    if (!AxiosConfig.instance) {
      const defaultConfig: AxiosRequestConfig = {
        baseURL: config.baseURL || 'https://rickandmortyapi.com/api',
        timeout: config.timeout || 5000,
        headers: config.headers || {},
      };

      new AxiosConfig(defaultConfig);
    }

    return AxiosConfig.instance;
  }

  private static handleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    // Verificar si config.headers existe antes de intentar acceder a él
    if (config.headers) {
      // Agregar lógica de autorización u otros ajustes de solicitud aquí
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      // Manipulación de encabezados
      config.headers['Content-Type'] = 'application/json';
    }

    // Verificar si config.data existe antes de intentar acceder a él
    if (config.data) {
      // Codificación de datos
      config.data = JSON.stringify(config.data);
    }

    // Verificar si config.params existe antes de intentar acceder a él
    if (config.params) {
      // Agregar un parámetro personalizado
      config.params = {
        ...config.params,
        apiKey: 'your_api_key_here'
      };
    } else {
      // Si config.params no existe, inicializarlo con el parámetro personalizado
      config.params = {
        apiKey: 'your_api_key_here'
      };
    }

    // Log de solicitud
    console.log('Solicitud enviada:', config);

    return config;
  }

  private static handleResponse(response: AxiosResponse): AxiosResponse {
    // Agregar lógica de transformación de datos de respuesta aquí
    return response;
  }

  private static handleResponseError(error: AxiosError): Promise<AxiosError> {
    // Agregar lógica de manejo de errores de respuesta aquí
    return Promise.reject(error);
  }
}

export default AxiosConfig;
