import React from 'react'
import { getPosts } from '../api/controllers/fetching'
import { PageTitle, Article } from '../../components/_index'

function Posts({ posts }) {
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

                    <div className="array wrap small-padding">
                        {
                            posts.map(post => {
                                return (
                                    <Article
                                        key={ post.id }
                                        article={ post.title }
                                        textPreview={ post.content }
                                        link="2"
                                        category={ null }
                                        publicationDate={ post.publicationDate }
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const response = await getPosts()
    const json = await response.json()

    return {
        props: {
            posts: json
        }
    }
}

export default Posts
