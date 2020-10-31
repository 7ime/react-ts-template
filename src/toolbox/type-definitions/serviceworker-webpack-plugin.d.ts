declare module 'serviceworker-webpack-plugin/lib/runtime' {
    export function register(): Promise<ServiceWorkerRegistration>
}
