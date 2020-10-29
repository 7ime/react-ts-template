const getScriptName = (prefix: string): string => {
    const script: HTMLScriptElement | null = document.querySelector(`script[src*=${prefix}]`)

    if (script) {
        return script.src
    }

    return prefix + '.js'
}

export const registrationServiceWorker = () => {
    if ('serviceWorker' in navigator) {

        window.addEventListener('load', () => {
            navigator.serviceWorker.register(getScriptName('serviceWorker'))
        })
    }
}
