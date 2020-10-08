export const merge = <T extends Object>(source: T, partial: Partial<T> = {}): T => {
    return {
        ...source,
        ...partial
    }
}