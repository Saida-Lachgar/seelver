import axios from 'axios';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import ResponseError from './errors';
import { RawResponseError } from 'src/types/errors';

const requester = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { Accept: 'application/ld+json' },
});

const onFulfilled = (_request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const request = { ..._request };
  const { params } = _request;

  if (params) {
    Object.keys(params).forEach((name) => {
      if (params[name] === true) {
        params[name] = '1';
      }
      if (params[name] === false) {
        params[name] = '0';
      }
    });
    request.params = params;
  }

  // const token = Cookies.get('accessToken');
  // if (token) {
  //   request.headers.Authorization = `Bearer ${token}`;
  // }
  return request;
};

const onResponseError = (error: unknown) => {
  if (axios.isCancel(error)) {
    return Promise.reject();
  }

  if (!axios.isAxiosError(error) || !(error as AxiosError).response) {
    return Promise.reject(error);
  }

  const { status, data } = error.response as AxiosResponse<RawResponseError>;
  const { 'hydra:description': message } = data;


  if ([400, 423].includes(status)) {
    return Promise.resolve({ data, status });
  }

  return Promise.reject(
    new ResponseError(status, message),
  );
};

requester.interceptors.request.use(onFulfilled, (error) => Promise.reject(error));
requester.interceptors.response.use(undefined, onResponseError);

export default requester;
