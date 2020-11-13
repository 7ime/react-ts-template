import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'
import Switch from '@components/ui/switches/components/switch'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {ETheme} from '@constants/theme'
import {UiAction, UiSelector} from '@store/ui'
import {EI18nLanguages} from '@constants/i18n'

const Settings = () => {
    const theme = React.useContext(ThemeContext)
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const language = useSelector(UiSelector.getLanguage)

    const classNames = classnames(css.settings, css[theme])

    const handleChangeTheme = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const theme = event.target.checked ? ETheme.dark : ETheme.light

        dispatch(UiAction.setTheme(theme))
    }, [])

    const handleChangeLanguage = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const language = event.target.checked ? EI18nLanguages.RU : EI18nLanguages.EN

        dispatch(UiAction.changeLanguage(language))
    }, [])

    return (
        <div className={classNames}>
            <Segment parentClass={css.segment}>
                <div className={css.box}>
                    <div className={css.title}>{t('settings:enableCustomTheme')}</div>
                    <Switch enabled={theme === ETheme.dark} type={'secondary'} onChange={handleChangeTheme}/>
                </div>
            </Segment>
            <Segment parentClass={classnames(css.segment, css.segmentLast)}>
                <div className={css.box}>
                    <div className={css.title}>{t('settings:enableSystemTheme')}</div>
                    <Switch enabled={theme === ETheme.dark} type={'secondary'} onChange={handleChangeTheme}/>
                </div>
            </Segment>

            {
                language && (
                    <Segment parentClass={css.segmentIndented}>
                        <div className={css.box}>
                            <div className={css.title}>{t('settings:enableRussianLanguage')}</div>
                            <Switch enabled={language === EI18nLanguages.RU} type={'secondary'} onChange={handleChangeLanguage}/>
                        </div>
                    </Segment>
                )
            }
        </div>
    )
}

export default React.memo(Settings)
