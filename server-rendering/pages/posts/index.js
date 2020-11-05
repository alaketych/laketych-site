import React from 'react'
import { PrismaClient } from '@prisma/client'
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
                                        link="1"
                                        category={ null }
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
    const prisma = new PrismaClient()
    const posts = await prisma.article.findMany({})

    return {
        props: {
            posts
        }
    }
}

export default Posts
