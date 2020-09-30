import React from 'react'
import classNames from 'classnames'

function Service({ title, description, svgPath, className }) {
    return (
        <div className={classNames('service')}>
            <svg className="service__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d={ svgPath }></path>
            </svg>

            <h3 className="title">{ title }</h3>
            <p className="description">{ description }</p>
        </div>
    )
}

export default Service