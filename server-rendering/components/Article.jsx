import React from 'react'
import Link from 'next/link'

function Article({ photo, article, category, publicationDate, textPreview, link }) {
    return (
        <div className="article">
            <Link href={ `/posts/${ link }` }>
                <a className="article__thumb">
                    <img src={ photo } alt=""/>
                </a>
            </Link>

            <div className="article__inner">
                <Link href={ `/posts/${ link }` }>
                    <a href="/" className="article__title">{ article }</a>
                </Link>

                <p className="article__description">
                    <a className="article__category" href="/">{ category }</a>
                    <span className="fade">/</span>
                    { publicationDate }
                </p>

                <div className="article__preview">{ textPreview }</div>
            </div>
        </div>
    )
}

export default Article