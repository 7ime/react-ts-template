export type IAction<T, P = undefined> = {
    type: T
} & (P extends undefined ? {} : {
    payload: P
})

