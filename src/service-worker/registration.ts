import runtime from 'serviceworker-webpack-plugin/lib/runtime'

export const registrationServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        return runtime.register()
    }
}
