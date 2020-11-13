import * as React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import classnames from 'classnames'

import css from './index.module.scss'
import Routes from '@routing/routes'
import {IRouting} from '@routing/model'
import ThemeContext from '@components/context/theme-context'

interface IProps extends IRouting.Props {

}

const Header = (props: IProps) => {
    const theme = React.useContext(ThemeContext)

    const classNames = classnames(css.header, css[theme])

    return (
        <div className={classNames}>
            <div className={'container'}>
                <div className={css.menu}>
                    <NavLink to={Routes.home.root()}
                             exact
                             activeClassName={css.is_active}
                             className={css.link}
                    ><span>Home</span></NavLink>
                    <NavLink to={Routes.restApi.root()}
                             activeClassName={css.is_active}
                             className={css.link}
                    ><span>Rest Api</span></NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
