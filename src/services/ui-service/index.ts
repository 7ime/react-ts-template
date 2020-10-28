import {IUiService} from './model'

export default class UiService implements IUiService {

    removePreloader(): boolean {
        const node = document.querySelector('#preloader')

        if (node && node.parentNode) {
            return !!(node.parentNode.removeChild(node))
        }

        return false
    }
}
