import {IUiService} from './model'

export default class UiService implements IUiService {

    removePreloader(): boolean {
        const node = document.querySelector('#preloader')

        return !!(node && node.parentNode && node.parentNode.removeChild(node))
    }
}
