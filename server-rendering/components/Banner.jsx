import React from 'react'
import Button from './Button'

function Banner({ title, description, children }) {
    return (
        <section className="banner dark slanted-bottom huge-padding">
            <div className="wrapper">
                <div className="content">
                    <h1 className="super-title">{ title }</h1>

                    <h3 className="description-section">{ description }</h3>

                    <Button
                        className="big-button huge-spacing"
                        label="View projects"
                        link="/projects"
                    />
                </div>

               { children }

            </div>
        </section>
    )
}

export default Banner