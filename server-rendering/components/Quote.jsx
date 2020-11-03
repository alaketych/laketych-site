import React from 'react'
import Link from 'next/link'
// import bman from '../assets/images/bman.png'

function Quore({ feedback, client, company, companyURL }) {
    return (
        <section className="block sepia center stripes slanted-both-sides huge-padding">
            <div className="wrapper">
                <blockquote className="quote">

                    <div className="quote__inner">
                        <p className="quote__txt">
                            { feedback }
                        </p>
                    </div>

                    <cite className="quote__meta">
                        {/* <img className="quote__avatar" src={ bman } alt="feedback" /> */}
                        <strong className="quote__client-name">
                            { client }
                        </strong>
                        <p className="quote__client-company">
                        <Link href={ companyURL }>
                            <a className="link" target="_blank" rel="noopener noreferrer">{ company }</a>
                        </Link>

                        </p>
                    </cite>
            </blockquote>
            </div>
        </section>
    )
}

export default Quore