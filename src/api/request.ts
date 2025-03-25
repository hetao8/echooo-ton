import type { RequestFunctionParams } from 'yapi-to-typescript'
import Axios from "@/api/axios";
export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: 'prod' | 'dev' | 'mock' | string,
}

export default function request<TResponseData>(
    payload: RequestFunctionParams,
    options: RequestOptions = {
      server: process.env.NODE_ENV,
    },
): Promise<TResponseData> {
  return new Promise<TResponseData>((resolve, reject) => {
    const baseUrl = options.server === 'mock'
        ? payload.mockUrl : options.server === 'dev'
            ? payload.devUrl: payload.prodUrl
    const url = `${baseUrl}${payload.path}`
    console.log(url);
    Axios.request({
      url: url,
      method: payload.method,
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
      data: payload.data || {}
    }).then(res => {
      const { data } = res;
      resolve(data.data);
    }).catch(e => reject(e));
  })
}