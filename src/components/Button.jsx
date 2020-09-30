import React from 'react'
import classNames from 'classnames'

function Button({ label, className }) {
    return (
        <button className={classNames('button', className)}>
            { label }
        </button>
    )
}

export default Button