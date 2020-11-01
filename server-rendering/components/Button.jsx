import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

function Button({ label, className, link }) {
    return (
        <Link href={ link }>
            <a className="button-link">
                <button className={classNames('button small-spacing', className)}>
                    { label }
                </button>
            </a>
        </Link>
    )
}

export default Button