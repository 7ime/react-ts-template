import * as React from 'react'

import {ETheme} from '@constants/theme'

const ThemeContext = React.createContext(ETheme.light)

ThemeContext.displayName = 'ThemeContext'

export default ThemeContext
