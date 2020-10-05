import React from 'react'

function Banner({ title, description }) {
    return (
        <section className="banner dark slanted-bottom bottom-padding-supahuge">
            <div className="wrapper">
                <div className="content center center-text">
                    <h1 className="super-title">{ title }</h1>
                    <h3 className="description-section">{ description }</h3>
                </div>
            </div>
        </section>
    )
}

export default Banner