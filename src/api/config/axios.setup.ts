import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    async (error) => {
      return await Promise.reject(error);
    },
  );
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response;
    },
    async (error) => await Promise.reject(error),
  );

  return axiosInstance;
};

export interface ApiInterface {
  get: <T>(
    url: string,
    queryParams?: object | undefined,
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    body: object,
    queryParams?: object | undefined,
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    url: string,
    body: object,
    queryParams?: object | undefined,
  ) => Promise<AxiosResponse<T>>;
  patch: <T>(
    url: string,
    body: object,
    queryParams?: object | undefined,
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(url: string, id: number) => Promise<AxiosResponse<T>>;
}

export const CreateInstance = (
  axiosRequestConfiguration: AxiosRequestConfig,
): ApiInterface => {
  const axiosInstance = initialization(axiosRequestConfiguration);

  const get = async <T>(
    url: string,
    queryParams?: object,
  ): Promise<AxiosResponse<T>> =>
    await axiosInstance.get<T>(url, { params: queryParams });

  const post = async <T>(
    url: string,
    body: object,
    queryParams?: object,
  ): Promise<AxiosResponse<T>> =>
    await axiosInstance.post<T>(url, body, { params: queryParams });

  const put = async <T>(
    url: string,
    body: object,
    queryParams?: object,
  ): Promise<AxiosResponse<T>> =>
    await axiosInstance.put<T>(url, body, { params: queryParams });

  const patch = async <T>(
    url: string,
    body: object,
    queryParams?: object,
  ): Promise<AxiosResponse<T>> =>
    await axiosInstance.patch<T>(url, body, { params: queryParams });

  const deleteR = async <T>(
    url: string,
    id: number,
  ): Promise<AxiosResponse<T>> => await axiosInstance.delete(`${url}/${id}`);

  return { get, post, put, patch, delete: deleteR };
};
