import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'
import Switch from '@components/ui/switches/components/switch'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import {ETheme} from '@constants/theme'
import {UiAction} from '@store/ui'

const Settings = () => {
    const theme = React.useContext(ThemeContext)
    const {t} = useTranslation()
    const dispatch = useDispatch()

    const classNames = classnames(css.settings, css[theme])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const theme = event.target.checked ? ETheme.dark : ETheme.light

        dispatch(UiAction.setTheme(theme))
    }, [])

    return (
        <div className={classNames}>
            <Segment parentClass={css.segment}>

                <div className={css.box}>
                    <div className={css.title}>{t('settings:enableCustomTheme')}</div>
                    <Switch enabled={theme === ETheme.dark} type={'secondary'} onChange={handleChange}/>
                </div>
            </Segment>
        </div>
    )
}

export default React.memo(Settings)
