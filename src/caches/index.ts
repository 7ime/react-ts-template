import Paths from '@api/paths'
import Routes from '@routing/routes'

export const NAMES_CACHES = {
    static: 'static',
    pages: 'pages',
    posts: 'posts',
}

export const URLS_TO_CACHE = {
    [NAMES_CACHES.static]: [
        'main.bundle.js'
    ],
    [NAMES_CACHES.pages]: [
        Routes.restApi.root()
    ],
    [NAMES_CACHES.posts]: [
        Paths.JsonPlaceholder.getPosts()
    ]
}
