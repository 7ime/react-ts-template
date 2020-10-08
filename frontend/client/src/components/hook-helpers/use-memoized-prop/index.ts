import * as React from 'react'

export const useMemoizedProp = <T>(prop: T): T => {
    return React.useMemo(() => prop, [])
}
