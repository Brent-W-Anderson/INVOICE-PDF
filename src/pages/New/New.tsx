import classNames from 'classnames'
import React from 'react'

import generics from '../../styles/generics/generics.module.scss'

import style from './New.module.scss'

const New: React.FC = () => {
    return (
        <div
            id="NEW-INVOICE-PAGE"
            className={classNames(
                generics.page,
                generics.inline,
                generics['space-around'],
                generics['padding-20-horizontal'],
                generics['gap-20']
            )}
        >
            <h3 className={generics['text-center']}>New Invoice</h3>

            <div className={classNames(style.new, generics.paper)}>
                <p className={generics['text-center']}>Invoice Title Here!</p>
            </div>
        </div>
    )
}

export default New
