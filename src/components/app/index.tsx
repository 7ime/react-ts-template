import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import classnames from 'classnames'
import Header from '../common/header'
import {routers} from '@routing/router'
import {IRouting} from '@routing/model'
import css from './index.module.scss'
import Routes from '@routing/routes'
import Loader from '../ui/loaders/components/loader'
import {useDispatch} from 'react-redux'
import {UiAction} from '@store/ui'
import {WebNotificationAction} from '@store/web-notification'
import ThemeContext from '@components/context/theme-context'

const getLoaderElem = () => {
    return (
        <div>
            <Loader/>
        </div>
    )
}

const App = () => {
    const dispatch = useDispatch()
    const theme = React.useContext(ThemeContext)

    React.useEffect(() => {
        dispatch(UiAction.removePreloader())
        dispatch(WebNotificationAction.requestPermission())
    }, [])

    const isLogged = true

    const classNames = classnames(css.app, css[theme])

    return (
        <div className={classNames}>
            <div className={css.content}>
                <div className={css.header}>
                    <Header />
                </div>
                <React.Suspense fallback={getLoaderElem()}>
                    <Switch>
                        {routers.map((router: IRouting.Router) => {
                            const {
                                component,
                                path,
                                exact,
                                checkAuth = false
                            } = router

                            if (!checkAuth || checkAuth && isLogged) {
                                return (
                                    <Route key={path} path={path} exact={exact} component={component}/>
                                )
                            }

                            return null
                        })}
                        <Redirect from='*' to={Routes.home.root()} exact/>
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    )
}

export default App
