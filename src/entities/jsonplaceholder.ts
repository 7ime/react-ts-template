export namespace IJsonPlaceholder {
    export interface ModelDTO {
        id: number
        title: string
        body: string
        userId: number
    }

    export interface Model extends ModelDTO {

    }

    export interface Create {
        title: string
        body: string
        userId: number
    }

    export interface Update extends ModelDTO {

    }
}