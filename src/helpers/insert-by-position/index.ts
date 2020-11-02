import {EPosition} from '@constants/shared'
import {isNumber} from '../is-number'

export const insertByPosition = (arr: number[], id: number, anchor?: number, position?: EPosition) => {
    if (isNumber(anchor) && position) {
        return arr.reduce((prev: number[], item) => {
            if (item === anchor) {
                switch (position) {
                    case EPosition.BEFORE: {
                        return [...prev, id, item]
                    }
                    case EPosition.AFTER: {
                        return [...prev, item, id]
                    }
                }
            }

            return [...prev, item]
        }, [])
    }

    return [
        ...arr.slice(),
        id
    ]
}
