import React from 'react'

function Article({ photo, article, category, date, textPreview }) {
    return (
        <div className="article ">
            <a href="/" className="article__thumb">
                <img src={ photo } alt=""/>
            </a>

            <div className="article__inner">
                <a href="/" className="article__title">{ article }</a>
                <p className="article__description">
                    <a className="article__category" href="/">{ category }</a>
                    <span className="fade">/</span>
                    { date }
                </p>

                <div className="article__preview">{ textPreview }</div>
            </div>
        </div>
    )
}

export default Article