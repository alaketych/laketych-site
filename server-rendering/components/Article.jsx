import React from 'react'
import { Link } from '../routes/index'

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

// function Article({ post }) {
//     return (
//         <div className="article ">
//             <div className="article__inner">
//                 <Link route='post' params={{ slug: post.id}}>
//                     <a href="/" className="article__title">{ post.title }</a>
//                 </Link>
//                 <p className="article__description">
//                     <a className="article__category" href="/">{ post.body }</a>
//                 </p>
//             </div>
//         </div>
//     )
// }

export default Article