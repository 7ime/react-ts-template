export const arrayIndexInRange = (arr: unknown[], index: number): boolean => {
    return index >= arr.length - 1 && index < arr.length
}
