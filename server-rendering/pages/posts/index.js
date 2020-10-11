
import React from 'react'
import { getPosts } from '../api/controllers/fetching'
import photo from '../../assets/images/g.webp'
import { PageTitle, Article } from '../../components/_index'
import Link from 'next/link'

function Blog({ posts }) {
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
                        {
                            posts.map(object => {
                                return (
                                    <Article
                                        key={object.id}
                                        article={object.title}
                                        textPreview={object.body}
                                    />
                                )
                            })
                        }
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
                    </div>
                </div>
            </section>
        </div>
    )
}

Blog.getInitialProps = async ({ req }) => {
    const response = await getPosts()
    const json = await response.json()
    return { posts: json }
}

export default Blog