import * as React from 'react'
import {useSelector} from 'react-redux'
import {UiSelector} from '@store/ui'
import ThemeContext from '@components/context/theme-context'

const Theme: React.FC = (props) => {
    const theme = useSelector(UiSelector.getTheme)

    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Theme
