/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'https://docs.valleysound.xyz/mock/57' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = 'data' as any

/**
 * 接口 [代币管理↗](https://docs.valleysound.xyz/project/57/interface/api/3265) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/manager`
 * @更新时间 `2023-07-04 18:41:48`
 */
export interface ServiceTokenTokenManagerRequest {
  /**
   * 钱包
   */
  wallet: string
  /**
   * 链id
   */
  chainId: string
}

/**
 * 接口 [代币管理↗](https://docs.valleysound.xyz/project/57/interface/api/3265) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/manager`
 * @更新时间 `2023-07-04 18:41:48`
 */
export interface ServiceTokenTokenManagerResponse {
  show: {
    id: number
    coingeckoId: string
    symbol: string
    chainId: number
    address: string
    name: string
    balance: string
    decimals: string
    logo: string
    high: string
    low: string
    price24hChangePercent: string
    price: string
    totalAmount: string
    isAdded: boolean
    addedTime: number
    lastUpdatedTime: number
    gmtCreate: null
    gmtUpdate: null
    isSupportFee: boolean
    zkInternalId: null
  }[]
  hide: {
    id: number
    coingeckoId: string
    symbol: string
    chainId: number
    address: string
    name: string
    balance: string
    decimals: string
    logo: string
    high: string
    low: string
    price24hChangePercent: string
    price: string
    totalAmount: string
    isAdded: boolean
    addedTime: number
    lastUpdatedTime: number
    gmtCreate: null
    gmtUpdate: null
    isSupportFee: boolean
    zkInternalId: null
  }[]
}

/**
 * 接口 [代币管理↗](https://docs.valleysound.xyz/project/57/interface/api/3265) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/manager`
 * @更新时间 `2023-07-04 18:41:48`
 */
type ServiceTokenTokenManagerRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/manager',
    'data',
    string,
    'wallet' | 'chainId',
    false
  >
>

/**
 * 接口 [代币管理↗](https://docs.valleysound.xyz/project/57/interface/api/3265) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/manager`
 * @更新时间 `2023-07-04 18:41:48`
 */
const serviceTokenTokenManagerRequestConfig: ServiceTokenTokenManagerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/manager',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['wallet', 'chainId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenManager',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [代币管理↗](https://docs.valleysound.xyz/project/57/interface/api/3265) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/manager`
 * @更新时间 `2023-07-04 18:41:48`
 */
export const serviceTokenTokenManager = /*#__PURE__*/ (
  requestData: ServiceTokenTokenManagerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenManagerResponse>(prepare(serviceTokenTokenManagerRequestConfig, requestData), ...args)
}

serviceTokenTokenManager.requestConfig = serviceTokenTokenManagerRequestConfig

/**
 * 接口 [添加自定义代币↗](https://docs.valleysound.xyz/project/57/interface/api/3273) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/addCustomerToken`
 * @更新时间 `2023-07-06 10:57:38`
 */
export interface ServiceTokenTokenAddCustomerTokenRequest {
  chainId: string
  wallet: string
  address: string
  symbol: string
}

/**
 * 接口 [添加自定义代币↗](https://docs.valleysound.xyz/project/57/interface/api/3273) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/addCustomerToken`
 * @更新时间 `2023-07-06 10:57:38`
 */
export interface ServiceTokenTokenAddCustomerTokenResponse {}

/**
 * 接口 [添加自定义代币↗](https://docs.valleysound.xyz/project/57/interface/api/3273) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/addCustomerToken`
 * @更新时间 `2023-07-06 10:57:38`
 */
type ServiceTokenTokenAddCustomerTokenRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/addCustomerToken',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 [添加自定义代币↗](https://docs.valleysound.xyz/project/57/interface/api/3273) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/addCustomerToken`
 * @更新时间 `2023-07-06 10:57:38`
 */
const serviceTokenTokenAddCustomerTokenRequestConfig: ServiceTokenTokenAddCustomerTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/addCustomerToken',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenAddCustomerToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [添加自定义代币↗](https://docs.valleysound.xyz/project/57/interface/api/3273) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/addCustomerToken`
 * @更新时间 `2023-07-06 10:57:38`
 */
export const serviceTokenTokenAddCustomerToken = /*#__PURE__*/ (
  requestData: ServiceTokenTokenAddCustomerTokenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenAddCustomerTokenResponse>(
    prepare(serviceTokenTokenAddCustomerTokenRequestConfig, requestData),
    ...args,
  )
}

serviceTokenTokenAddCustomerToken.requestConfig = serviceTokenTokenAddCustomerTokenRequestConfig

/**
 * 接口 [根据地址获取erc20信息↗](https://docs.valleysound.xyz/project/57/interface/api/3281) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/getTokenInfo`
 * @更新时间 `2023-07-06 10:51:16`
 */
export interface ServiceTokenTokenGetTokenInfoRequest {
  address: string
  chainId: string
  wallet: string
}

/**
 * 接口 [根据地址获取erc20信息↗](https://docs.valleysound.xyz/project/57/interface/api/3281) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/getTokenInfo`
 * @更新时间 `2023-07-06 10:51:16`
 */
export interface ServiceTokenTokenGetTokenInfoResponse {
  /**
   * 符号名
   */
  symbol: string
}

/**
 * 接口 [根据地址获取erc20信息↗](https://docs.valleysound.xyz/project/57/interface/api/3281) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/getTokenInfo`
 * @更新时间 `2023-07-06 10:51:16`
 */
type ServiceTokenTokenGetTokenInfoRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/getTokenInfo',
    'data',
    string,
    'address' | 'chainId' | 'wallet',
    false
  >
>

/**
 * 接口 [根据地址获取erc20信息↗](https://docs.valleysound.xyz/project/57/interface/api/3281) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/getTokenInfo`
 * @更新时间 `2023-07-06 10:51:16`
 */
const serviceTokenTokenGetTokenInfoRequestConfig: ServiceTokenTokenGetTokenInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/getTokenInfo',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['address', 'chainId', 'wallet'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenGetTokenInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据地址获取erc20信息↗](https://docs.valleysound.xyz/project/57/interface/api/3281) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `GET /service-token/token/getTokenInfo`
 * @更新时间 `2023-07-06 10:51:16`
 */
export const serviceTokenTokenGetTokenInfo = /*#__PURE__*/ (
  requestData: ServiceTokenTokenGetTokenInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenGetTokenInfoResponse>(
    prepare(serviceTokenTokenGetTokenInfoRequestConfig, requestData),
    ...args,
  )
}

serviceTokenTokenGetTokenInfo.requestConfig = serviceTokenTokenGetTokenInfoRequestConfig

/**
 * 接口 [总资产↗](https://docs.valleysound.xyz/project/57/interface/api/3289) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/totalAssets`
 * @更新时间 `2023-07-19 10:19:32`
 */
export interface ServiceTokenTokenTotalAssetsRequest {
  list: {
    /**
     * 链id
     */
    chainId: number
    /**
     * 钱包地址
     */
    address: string
    /**
     * btc钱包需要上传btc余额
     */
    btcBalance?: string
  }[]
}

/**
 * 接口 [总资产↗](https://docs.valleysound.xyz/project/57/interface/api/3289) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/totalAssets`
 * @更新时间 `2023-07-19 10:19:32`
 */
export interface ServiceTokenTokenTotalAssetsResponse {
  /**
   * 代币数量
   */
  tokenAmount: string
  /**
   * 链数量
   */
  chainAmount: string
  /**
   * nft数量
   */
  nftAmount: string
  defiAmount: string
  /**
   * 总资产（usd）
   */
  totalAssets: string
  /**
   * 24小时涨跌
   */
  assetsChange24h: string
  /**
   * 24小时涨跌幅
   */
  assetsChangePercentage24h: string
  detail: {
    /**
     * 代币数量
     */
    tokenAmount: string
    /**
     * 钱包数量
     */
    walletAmount: string
    /**
     * nft数量
     */
    nftAmount: string
    /**
     * 总资产（usd）
     */
    totalAssets: string
    /**
     * 24小时涨跌
     */
    assetsChange24h: string
    /**
     * 24小时涨跌幅
     */
    assetsChangePercentage24h: string
    chainId: number
    wallets: {
      /**
       * 钱包
       */
      wallet: string
      /**
       * 总资产（usd）
       */
      totalAssets: string
      assetsChange24h: string
      assetsChangePercentage24h: string
    }[]
  }[]
}

/**
 * 接口 [总资产↗](https://docs.valleysound.xyz/project/57/interface/api/3289) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/totalAssets`
 * @更新时间 `2023-07-19 10:19:32`
 */
type ServiceTokenTokenTotalAssetsRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/totalAssets',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 [总资产↗](https://docs.valleysound.xyz/project/57/interface/api/3289) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/totalAssets`
 * @更新时间 `2023-07-19 10:19:32`
 */
const serviceTokenTokenTotalAssetsRequestConfig: ServiceTokenTokenTotalAssetsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/totalAssets',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenTotalAssets',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [总资产↗](https://docs.valleysound.xyz/project/57/interface/api/3289) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/totalAssets`
 * @更新时间 `2023-07-19 10:19:32`
 */
export const serviceTokenTokenTotalAssets = /*#__PURE__*/ (
  requestData: ServiceTokenTokenTotalAssetsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenTotalAssetsResponse>(
    prepare(serviceTokenTokenTotalAssetsRequestConfig, requestData),
    ...args,
  )
}

serviceTokenTokenTotalAssets.requestConfig = serviceTokenTokenTotalAssetsRequestConfig

/**
 * 接口 [财富全景↗](https://docs.valleysound.xyz/project/57/interface/api/3297) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/assetStatistics`
 * @更新时间 `2023-07-07 10:10:28`
 */
export interface ServiceTokenTokenAssetStatisticsRequest {
  list: {
    /**
     * 链id
     */
    chainId: number
    /**
     * 钱包地址
     */
    address: string
    /**
     * btc余额
     */
    btcBalance: string
  }[]
}

/**
 * 接口 [财富全景↗](https://docs.valleysound.xyz/project/57/interface/api/3297) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/assetStatistics`
 * @更新时间 `2023-07-07 10:10:28`
 */
export interface ServiceTokenTokenAssetStatisticsResponse {
  statistics: {
    /**
     * 代币资产（usd）
     */
    tokenAssets: string
    /**
     * 理财资产（usd）
     */
    defiAssets: string
    /**
     * nft数量
     */
    nftAmount: string
    /**
     * 总资产（usd）
     */
    totalAssets: string
    /**
     * 昨日收益
     */
    yesterdayProfit: string
  }
  detail: {
    /**
     * 链id
     */
    chainId: string
    /**
     * 占比
     */
    rate: string
    /**
     * 资产数量
     */
    amount: string
  }[]
}

/**
 * 接口 [财富全景↗](https://docs.valleysound.xyz/project/57/interface/api/3297) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/assetStatistics`
 * @更新时间 `2023-07-07 10:10:28`
 */
type ServiceTokenTokenAssetStatisticsRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/assetStatistics',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 [财富全景↗](https://docs.valleysound.xyz/project/57/interface/api/3297) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/assetStatistics`
 * @更新时间 `2023-07-07 10:10:28`
 */
const serviceTokenTokenAssetStatisticsRequestConfig: ServiceTokenTokenAssetStatisticsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/assetStatistics',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenAssetStatistics',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [财富全景↗](https://docs.valleysound.xyz/project/57/interface/api/3297) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/assetStatistics`
 * @更新时间 `2023-07-07 10:10:28`
 */
export const serviceTokenTokenAssetStatistics = /*#__PURE__*/ (
  requestData: ServiceTokenTokenAssetStatisticsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenAssetStatisticsResponse>(
    prepare(serviceTokenTokenAssetStatisticsRequestConfig, requestData),
    ...args,
  )
}

serviceTokenTokenAssetStatistics.requestConfig = serviceTokenTokenAssetStatisticsRequestConfig

/**
 * 接口 [代币资产↗](https://docs.valleysound.xyz/project/57/interface/api/3305) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/tokenAssets`
 * @更新时间 `2023-07-11 11:40:03`
 */
export interface ServiceTokenTokenTokenAssetsRequest {
  list: {
    /**
     * 链id
     */
    chainId: number
    /**
     * 钱包地址
     */
    address: string
    /**
     * btc余额
     */
    btcBalance: string
  }[]
}

/**
 * 接口 [代币资产↗](https://docs.valleysound.xyz/project/57/interface/api/3305) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/tokenAssets`
 * @更新时间 `2023-07-11 11:40:03`
 */
export interface ServiceTokenTokenTokenAssetsResponse {
  statistics: {
    /**
     * 总资产（usd）
     */
    totalAssets: string
    /**
     * 代币数量
     */
    tokenAmount: string
    /**
     * 累计收益（usd）
     */
    totalProfit: string
    /**
     * 昨日收益
     */
    yesterdayProfit: string
  }
  detail: {
    /**
     * 链id
     */
    chainId: string
    /**
     * 符号
     */
    symbol: string
    /**
     * 余额
     */
    balance: string
    /**
     * 图标
     */
    logo: string
    /**
     * 总资产usd
     */
    totalAmount: string
    /**
     * 占比
     */
    rate: string
    /**
     * 是否多链
     */
    isMultiChain: string
    wallets: {
      id: number
      wallet: string
      coingeckoId: string
      symbol: string
      chainId: number
      address: string
      name: string
      balance: string
      decimals: string
      logo: string
      high: string
      low: string
      price24hChangePercent: string
      price: string
      totalAmount: string
      isAdded: boolean
      addedTime: number
      lastUpdatedTime: number
      gmtCreate: null
      gmtUpdate: null
      isSupportFee: boolean
      zkInternalId: null
    }[]
  }[]
}

/**
 * 接口 [代币资产↗](https://docs.valleysound.xyz/project/57/interface/api/3305) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/tokenAssets`
 * @更新时间 `2023-07-11 11:40:03`
 */
type ServiceTokenTokenTokenAssetsRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/tokenAssets',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 [代币资产↗](https://docs.valleysound.xyz/project/57/interface/api/3305) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/tokenAssets`
 * @更新时间 `2023-07-11 11:40:03`
 */
const serviceTokenTokenTokenAssetsRequestConfig: ServiceTokenTokenTokenAssetsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/tokenAssets',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenTokenAssets',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [代币资产↗](https://docs.valleysound.xyz/project/57/interface/api/3305) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/tokenAssets`
 * @更新时间 `2023-07-11 11:40:03`
 */
export const serviceTokenTokenTokenAssets = /*#__PURE__*/ (
  requestData: ServiceTokenTokenTokenAssetsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenTokenAssetsResponse>(
    prepare(serviceTokenTokenTokenAssetsRequestConfig, requestData),
    ...args,
  )
}

serviceTokenTokenTokenAssets.requestConfig = serviceTokenTokenTokenAssetsRequestConfig

/**
 * 接口 [设置支付密码入金记录↗](https://docs.valleysound.xyz/project/57/interface/api/3409) 的 **请求类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/checkPayPassword`
 * @更新时间 `2023-07-18 18:59:03`
 */
export interface ServiceTokenTokenCheckPayPasswordRequest {
  code: number
  message: string
  data: {
    chainId: number
    amount: string
    token: {
      id: number
      coingeckoId: string
      symbol: string
      chainId: number
      name: string
      gmtCreate: number[]
      gmtUpdate: number[]
      address: string
      decimals: string
      logo: string
      hot: number
      type: number
      isDefault: number
      isSupportFee: number
      zkInternalId: null
      sort: number
      marketCapRank: number
      isPermit: number
      isVipToken: number
      isEoaToken: number
      isZkEthMap: number
      isSwapFee: number
      isDeleted: number
      isDefi: number
      defiTokenAddress: null
      defiProcotol: null
      btcBalance: null
    }
    isNeedSetPay: boolean
  }
  traceId: string
  placeholder: null
}

/**
 * 接口 [设置支付密码入金记录↗](https://docs.valleysound.xyz/project/57/interface/api/3409) 的 **返回类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/checkPayPassword`
 * @更新时间 `2023-07-18 18:59:03`
 */
export interface ServiceTokenTokenCheckPayPasswordResponse {
  /**
   * 链id
   */
  token: {}
  /**
   * 金额
   */
  amount: string
  /**
   * 是否满足入金要求
   */
  isNeedSetPay: boolean
}

/**
 * 接口 [设置支付密码入金记录↗](https://docs.valleysound.xyz/project/57/interface/api/3409) 的 **请求配置的类型**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/checkPayPassword`
 * @更新时间 `2023-07-18 18:59:03`
 */
type ServiceTokenTokenCheckPayPasswordRequestConfig = Readonly<
  RequestConfig<
    'https://docs.valleysound.xyz/mock/57',
    '',
    '',
    '/service-token/token/checkPayPassword',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 [设置支付密码入金记录↗](https://docs.valleysound.xyz/project/57/interface/api/3409) 的 **请求配置**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/checkPayPassword`
 * @更新时间 `2023-07-18 18:59:03`
 */
const serviceTokenTokenCheckPayPasswordRequestConfig: ServiceTokenTokenCheckPayPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/service-token/token/checkPayPassword',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'serviceTokenTokenCheckPayPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [设置支付密码入金记录↗](https://docs.valleysound.xyz/project/57/interface/api/3409) 的 **请求函数**
 *
 * @分类 [0730↗](https://docs.valleysound.xyz/project/57/interface/api/cat_1045)
 * @请求头 `POST /service-token/token/checkPayPassword`
 * @更新时间 `2023-07-18 18:59:03`
 */
export const serviceTokenTokenCheckPayPassword = /*#__PURE__*/ (
  requestData: ServiceTokenTokenCheckPayPasswordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ServiceTokenTokenCheckPayPasswordResponse>(
    prepare(serviceTokenTokenCheckPayPasswordRequestConfig, requestData),
    ...args,
  )
}

serviceTokenTokenCheckPayPassword.requestConfig = serviceTokenTokenCheckPayPasswordRequestConfig

/* prettier-ignore-end */
