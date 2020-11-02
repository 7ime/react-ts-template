export default class CSSModules {
    static extractClassNamesForArray = (classNames: string[], css: {[key: string]: string}): string[] => {
        return classNames.map((className) => {
            return className in css ? css[className] : ''
        })
    }
}