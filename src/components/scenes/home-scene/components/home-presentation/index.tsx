import * as React from 'react'
import css from './index.module.scss'
import {useTranslation} from 'react-i18next'
import Ecosystem from '@components/common/ecosystem'
import Settings from '@components/common/settings'

const HomePresentation = () => {
    const {t} = useTranslation()

    return (
        <div className={css.homePresentation}>
            <h4 className={css.title}>{t('welcome:title')}</h4>
            <Ecosystem/>
            <div className={css.settings}>
                <Settings/>
            </div>
        </div>
    )
}

export default HomePresentation
