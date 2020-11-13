import * as React from 'react'
import css from './index.module.scss'
import {useTranslation} from 'react-i18next'
import {EI18nNameSpaces} from '@constants/i18n'
import Ecosystem from '@components/common/ecosystem'

const HomePresentation = () => {
    const {t} = useTranslation()

    return (
        <div className={css.homePresentation}>
            <h4 className={css.title}>{t(`${EI18nNameSpaces.welcome}:title`)}</h4>
            <Ecosystem/>
        </div>
    )
}

export default HomePresentation
