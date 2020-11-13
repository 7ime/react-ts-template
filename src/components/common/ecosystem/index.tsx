import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'

import typescriptIcon from '@images/icons/typescript.png'
import javascriptIcon from '@images/icons/javascript.png'
import webpackIcon from '@images/icons/webpack.svg'
import babelIcon from '@images/icons/babel.png'
import jestIcon from '@images/icons/jest.png'
import reactIcon from '@images/icons/react.png'
import reduxIcon from '@images/icons/redux.svg'
import reduxSagaIcon from '@images/icons/redux-saga.png'
import sassIcon from '@images/icons/sass.png'
import storybookIcon from '@images/icons/storybook.png'
import eslintIcon from '@images/icons/eslint.svg'
import cssIcon from '@images/icons/css.png'

const links = [
    {
        title: 'Typescript',
        link: 'https://typescriptlang.org/',
        icon: typescriptIcon
    },
    {
        title: 'React.js',
        link: 'https://reactjs.org/',
        icon: reactIcon,
    },
    {
        title: 'Redux',
        link: 'https://redux.js.org/',
        icon: reduxIcon,
    },
    {
        title: 'Redux Toolkit',
        link: 'https://redux-toolkit.js.org/',
        icon: reduxIcon,
    },
    {
        title: 'Reselect',
        link: 'https://github.com/reduxjs/reselect',
        icon: reduxIcon,
    },
    {
        title: 'Redux Saga',
        link: '',
        icon: reduxSagaIcon,
    },
    {
        title: 'React Router',
        link: 'https://reactrouter.com/',
        icon: reactIcon,
    },
    {
        title: 'Webpack',
        link: 'https://webpack.js.org/',
        icon: webpackIcon,
    },
    {
        title: 'Babel',
        link: 'https://babeljs.io/',
        icon: babelIcon,
    },
    {
        title: 'ES Lint',
        link: 'https://eslint.org/',
        icon: eslintIcon,
    },
    {
        title: 'Jest',
        link: 'https://jestjs.io/',
        icon: jestIcon,
    },
    {
        title: 'Redux saga test plan',
        link: 'https://github.com/jfairbank/redux-saga-test-plan',
        icon: reduxSagaIcon,
    },
    {
        title: 'Axios',
        link: 'https://github.com/axios/axios',
        icon: javascriptIcon,
    },
    {
        title: 'Axios mock adapter',
        link: 'https://github.com/ctimmerm/axios-mock-adapter',
        icon: javascriptIcon,
    },
    {
        title: 'Lodash',
        link: 'https://lodash.com/',
        icon: javascriptIcon,
    },
    {
        title: 'I18next',
        link: 'https://www.i18next.com/',
        icon: javascriptIcon,
    },
    {
        title: 'CSS Modules',
        link: 'https://github.com/css-modules/css-modules',
        icon: cssIcon,
    },
    {
        title: 'Sass',
        link: 'https://sass-lang.com/',
        icon: sassIcon,
    },
    {
        title: 'Storybook',
        link: 'https://storybook.js.org/',
        icon: storybookIcon,
    },
    {
        title: 'React detect device',
        link: 'https://github.com/duskload/react-device-detect',
        icon: reactIcon,
    }
]


const Ecosystem = () => {
    const theme = React.useContext(ThemeContext)

    const classNames = classnames(css.ecosystem, css[theme])

    return (
        <div className={classNames}>
            <Segment>
                <div className={css.list}>
                    {links.map(link => {
                        return (
                            <a key={link.link} className={css.item} href={link.link} target='_blank' rel='noreferrer'>
                                <span className={css.iconWrapper}>
                                    <span className={css.icon} style={{
                                        backgroundImage: `url(${link.icon})`
                                    }} />
                                </span>

                                <span className={css.title}>{link.title}</span>
                            </a>
                        )
                    })}
                </div>
            </Segment>
        </div>
    )
}

export default React.memo(Ecosystem)
