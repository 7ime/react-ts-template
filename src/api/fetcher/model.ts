export interface IFetcher {
    addHeader(name: string, value: string): void
    deleteHeader(name: string): void

    get<T>(url: string, body?: any): Promise<T>
    post<T>(url: string, body?: any): Promise<T>
    put<T>(url: string, body?: any): Promise<T>
    delete<T>(url: string, body?: any): Promise<T>
}
