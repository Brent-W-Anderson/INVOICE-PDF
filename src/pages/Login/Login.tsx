import React from 'react'

import generics from '../../styles/generics/generics.module.scss'

const Login: React.FC = () => {
    return (
        <div className={generics['border-rounded']}>
            <h1 className={generics['text-center']}>Login here!</h1>
        </div>
    )
}

export default Login
