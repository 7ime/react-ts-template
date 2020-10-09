import fetcher from '@api/fetcher'

export const injectPropertyFetcher = (target: any, propertyKey: string): void => {
    target[propertyKey] = fetcher
}
