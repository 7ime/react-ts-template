import Paths from '@api/paths'
import Routes from '@routing/routes'

export enum ENamesCashes {
    static = 'static',
    pages = 'pages',
    posts = 'posts',
}

export const URLS_TO_CACHE = {
    static: [
        'main.bundle.js'
    ],
    pages: [
        Routes.restApi.root()
    ],
    posts: [
        Paths.JsonPlaceholder.getPosts()
    ]
}
