export const merge = <T>(source: T, partial: Partial<T> = {}): T => {
    return {
        ...source,
        ...partial
    }
}
