export enum ETheme {
    light = 'theme-light',
    dark = 'theme-dark'
}

export enum ETypesThemes {
    custom = 'custom',
    system = 'system'
}

export const PREFERS_COLOR_SCHEME = {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)'
}

export const LOCAL_STORAGE_THEME_KEY = 'THEME_KEY'
export const LOCAL_STORAGE_PRIORITY_THEME_KEY = 'PRIORITY_THEME_KEY'
