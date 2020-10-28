import * as React from 'react'
import css from './index.module.scss'
import {useTranslation} from 'react-i18next'
import {EI18nNameSpaces} from '@constants/i18n'
import {useDispatch, useSelector} from 'react-redux'
import {WebNotificationAction, WebNotificationSelector} from '@store/web-notification'
import Button from '@components/ui/buttons/components/button'

const HomePresentation = () => {
    const {t} = useTranslation()
    const canShowNotifications = useSelector(WebNotificationSelector.canShow)
    const dispatch = useDispatch()

    const handleClick = React.useCallback(() => {
        dispatch(WebNotificationAction.showNotification({
            title: 'Hello Javascript',
            options: {
                icon: 'https://www.cozyroc.com/sites/default/files/styles/thumb_40x40/public/product/javascript.png?itok=1iphSbrz',
                body: 'The Notification interface of the Notifications API is used to configure and display desktop notifications to the user.'
            }
        }))
    }, [])

    return (
        <div className={css.homePresentation}>
            <div className={css.title}>{t(`${EI18nNameSpaces.welcome}:title`, {name: 'world'})}</div>
            {
                canShowNotifications && <Button type={'primary'} onClick={handleClick}>Show HTML5 Notification</Button>
            }
        </div>
    )
}

export default HomePresentation
