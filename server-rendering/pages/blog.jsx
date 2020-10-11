
import React from 'react'
import fetch from 'isomorphic-unfetch'
import photo from '../assets/images/g.webp'
import { PageTitle, Article } from '../components/_index'

function Blog({ props }) {
    console.warn(props)
    return (
        <div className="App">
            <PageTitle
                title="My Blog"
                description="Behind the scenes of products I’ve built, projects I’ve worked on and more."
            />

            <section className="block spacing-tiny-top">
                <div className="wrapper">
                    <h3 className="title-section spacing-tiny-top">FEATURED PROJECT</h3>
                    <div className="divider"></div>

                    <div className="array wrap small-spacing">
                        {/* <Article
                            photo={ photo }
                            article="Building GraqhQL server"
                            category="Programming"
                            date="25th September, 2020"
                            textPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic eaque. Perferendis, asperiores. Iste omnis architecto modi culpa dicta, hic quasi nihil eius autem earum tempore, corporis commodi, provident fuga?"
                        />

                        <Article
                            photo={ photo }
                            article="Building GraqhQL server"
                            category="Programming"
                            date="25th September, 2020"
                            textPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic eaque. Perferendis, asperiores. Iste omnis architecto modi culpa dicta, hic quasi nihil eius autem earum tempore, corporis commodi, provident fuga?"
                        />

                        <Article
                            photo={ photo }
                            article="Building GraqhQL server"
                            category="Programming"
                            date="25th September, 2020"
                            textPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic eaque. Perferendis, asperiores. Iste omnis architecto modi culpa dicta, hic quasi nihil eius autem earum tempore, corporis commodi, provident fuga?"
                        />

                        <Article
                            photo={ photo }
                            article="Building GraqhQL server"
                            category="Programming"
                            date="25th September, 2020"
                            textPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic eaque. Perferendis, asperiores. Iste omnis architecto modi culpa dicta, hic quasi nihil eius autem earum tempore, corporis commodi, provident fuga?"
                        /> */}

                        {
                            props.map(post => {
                                return <li key={post.id}>{ post.employee_name }</li>
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const result = await fetch('http://codeytek.com/wp-json/wp/v2/posts')
    const postData = await result.json()

    return {
        props:  postData
    }
}


export default Blog