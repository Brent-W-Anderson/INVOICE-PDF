import classNames from 'classnames'
import React from 'react'

import generics from '../../styles/generics/generics.module.scss'

import style from './Login.module.scss'

const Login: React.FC = () => {
    return (
        <div
            className={classNames(
                generics.page,
                generics.inline,
                generics['space-around'],
                generics['padding-20-horizontal'],
                generics['gap-20']
            )}
        >
            <h3 className={generics['text-center']}>Login</h3>

            <div className={classNames(style.login, generics.paper)}>
                <p>Username</p>
                <p>Password</p>
            </div>
        </div>
    )
}

export default Login
