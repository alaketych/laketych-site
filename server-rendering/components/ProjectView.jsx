import React from 'react'
import classNames from 'classnames'
import { Button } from './_index'

function Project({ className, photo, title, preview, link, github_link, stack, development }) {
    return (
        <div className="project-view huge-padding">
            <div className={classNames(`project-view__${className}`)}>
                <div className="overlay">
                    <img className="project-view__layout" src={ photo } alt=""></img>
                </div>

                <div className="substance">
                    <h3 className="title">{ title }</h3>
                    <h3 className="description">{ preview }</h3>

                    <ul className="list spacing-tiny-top">
                        <li className="item">
                            <svg className="item__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 1 0 2 0zM6 18h8v2H6v-2z"></path>
                            </svg>
                            <p className="text-large">Web Design</p>
                        </li>

                        <li className="item">
                        <svg className="item__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path>
                        </svg>
                        <p className="text-large">FullStack Development</p>
                        </li>
                    </ul>

                    <div className="array">
                        <Button
                            className="foreground"
                            label="View Details"
                            link={ `/projects/${ link }` }
                        />

                        <Button
                            className="foreground"
                            label="View Code"
                            link={ github_link }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project