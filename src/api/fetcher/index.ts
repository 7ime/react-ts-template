import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import {IFetcher} from './model'
import MockAdapter from 'axios-mock-adapter'
import {EHTTPMethods} from '@constants/shared'

export const axiosMockAdapter = new MockAdapter(axios, {onNoMatch: 'passthrough'})

class Fetcher implements IFetcher{
    private readonly axios: AxiosInstance

    private headers: Record<string, string> = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }

    constructor() {
        this.axios = axios.create({
            withCredentials: false,
            responseType: 'json'
        })
    }

    addHeader(name: string, value: string): void {
        this.headers[name] = value
    }

    deleteHeader(name: string): void {
        delete this.headers[name]
    }

    get = async<T>(url: string, body: any = {}): Promise<T> => {
        return this.invokeRequest(this.shapeRequestConfig(url, body, EHTTPMethods.get))
    }

    post = async<T>(url: string, body: any = {}): Promise<T> => {
        return this.invokeRequest(this.shapeRequestConfig(url, body, EHTTPMethods.post))
    }

    put = async<T>(url: string, body: any = {}): Promise<T> => {
        return this.invokeRequest(this.shapeRequestConfig(url, body, EHTTPMethods.put))
    }

    delete = async<T>(url: string, body: any = {}): Promise<T> => {
        return this.invokeRequest(this.shapeRequestConfig(url, body, EHTTPMethods.delete))
    }

    private shapeRequestConfig(url: string, body: any, method: EHTTPMethods): AxiosRequestConfig {
        return {
            url,
            method,
            headers: this.headers,
            data: body
        }
    }

    private invokeRequest = async<T>(config: AxiosRequestConfig): Promise<T> => {
        const response = await this.axios(config)

        return response.data
    }
}

const fetcher = new Fetcher()

export default fetcher
