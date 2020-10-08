import * as React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

import css from './index.module.scss'
import Routes from '@routing/routes'
import {IRouting} from '@routing/model'

interface IProps extends IRouting.Props {

}

const Header = (props: IProps) => {
    return (
        <div className={css.header}>
            <div className={'container'}>
                <div className={css.menu}>
                    <NavLink to={Routes.home.root()}
                             exact
                             activeClassName={css.is_active}
                             className={css.link}
                    >Home Page</NavLink>
                    <NavLink to={Routes.restApi.root()}
                             activeClassName={css.is_active}
                             className={css.link}
                    >Rest Api</NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
