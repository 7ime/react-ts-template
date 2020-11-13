import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'
import Switch from '@components/ui/switches/components/switch'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {ETheme, ETypesThemes} from '@constants/theme'
import {UiAction, UiSelector} from '@store/ui'
import {EI18nLanguages} from '@constants/i18n'

const Settings = () => {
    const theme = React.useContext(ThemeContext)
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const language = useSelector(UiSelector.getLanguage)
    const priorityTheme = useSelector(UiSelector.getPriorityTheme)
    const prioritizedSystemTheme = priorityTheme === ETypesThemes.system

    const classNames = classnames(css.settings, css[theme])

    const handleChangeCustomTheme = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const theme = event.target.checked ? ETheme.dark : ETheme.light

        dispatch(UiAction.setCustomTheme(theme))
    }, [])

    const handleChangeLanguage = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const language = event.target.checked ? EI18nLanguages.RU : EI18nLanguages.EN

        dispatch(UiAction.changeLanguage(language))
    }, [])

    const handleChangeSystemTheme = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const priority = event.target.checked ? ETypesThemes.system : ETypesThemes.custom

        dispatch(UiAction.setPriorityTheme(priority))
    }, [])

    return (
        <div className={classNames}>
            <Segment parentClass={css.segment}>
                <div className={css.box}>
                    <div className={css.title}>{t('settings:enableCustomTheme')}</div>
                    <Switch enabled={!prioritizedSystemTheme && theme === ETheme.dark}
                            disabled={prioritizedSystemTheme}
                            type={'secondary'} onChange={handleChangeCustomTheme}/>
                </div>
            </Segment>

            <Segment parentClass={classnames(css.segment, css.segmentLast)}>
                <div className={css.box}>
                    <div className={css.title}>{t('settings:enableSystemTheme')}</div>
                    <Switch enabled={prioritizedSystemTheme} type={'secondary'} onChange={handleChangeSystemTheme}/>
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
