import {
    isWindows, isBrowser, isMobile, isOpera, isMacOs, isSafari, isAndroid, isIOS, isChrome, isFirefox, isYandex
} from 'react-device-detect'

export const devices = Object.freeze(
    {
        browser: isBrowser,
        mobile: isMobile,

        opera: isOpera,
        safari: isSafari,
        chrome: isChrome,
        firefox: isFirefox,
        yandex: isYandex,

        windows: isWindows,
        macOS: isMacOs,
        linux: !isWindows && !isMacOs,

        android: isAndroid,
        ios: isIOS,
    }
)
