import React from 'react'

function Banner({ title, description, children, }) {
    return (
        <section className="banner dark slanted-bottom huge-padding">
            <div className="wrapper">
                <div className="content">
                    <h1 className="super-title">{ title }</h1>

                    <h3 className="description-section">{ description }</h3>

                    <button className="button big-button huge-spacing">View Projects</button>
                </div>

               { children }

            </div>
        </section>
    )
}

export default Banner