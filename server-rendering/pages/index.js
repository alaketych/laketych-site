import React from 'react'
import dynamic from 'next/dynamic'
import { PrismaClient } from '@prisma/client'
import { Banner, Button, Quote, Article, Service, ProjectView } from '../components/_index'

dynamic(
    () => import('@lottiefiles/lottie-player'), { ssr: false }
)

function Home({ projects, articles }) {
    return (
        <div className="App">
            <Banner
                title="Hi, I'm Alexandr"
                description="A web developer from Kyiv, Ukraine. I create bespoke websites to help people go further online.">

                <lottie-player
                    src="https://assets1.lottiefiles.com/private_files/lf30_WdTEui.json"
                    loop
                    autoplay
                    speed="0.75"
                    renderer="svg"
                />
            </Banner>

            <section className="block huge-spacing">
                <div className="wrapper">
                    <h3 className="title-section">FEATURED PROJECT</h3>
                    <div className="divider"></div>
                    {
                        projects.map(project => {
                            return(
                                <ProjectView
                                    key={ project.id }
                                    title={ project.title }
                                    photo={ project.photo }
                                    preview={ project.preview }

                                    className="content"

                                    link="2"
                                    github_link={ project.githublink }
                                    //className="content-reversed"
                                />
                            )
                        })
                    }
                </div>
            </section>


            <Quote
                client="Sergej Mason"
                company="Tix24"
                companyURL="https://tix24.com.ua/"
                feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit debitis explicabo obcaecati itaque consectetur, quod eaque minima distinctio culpa numquam ex amet, provident consequatur, dolor reprehenderit vitae mollitia nulla vero!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit debitis explicabo obcaecati itaque consectetur, quod eaque minima distinctio culpa numquam ex amet, provident consequatur, dolor reprehenderit vitae mollitia nulla vero!"
            />

            <section className="block spacing-tiny-top">
                <div className="wrapper">
                    <h3 className="title-section">My services</h3>
                    <div className="divider"></div>

                    <div className="array huge-spacing">
                        <Service
                            title="Web design"
                            description="A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website."
                            svgPath="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"
                        />

                        <Service
                            title="Web development"
                            description="A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website."
                            svgPath="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 1 0 2 0zM6 18h8v2H6v-2z"
                        />
                    </div>

                    <Button
                        className="foreground center"
                        label="Discover more"
                        link="/about"
                    />
                </div>
            </section>

            <Quote
                client="Sergej Mason"
                company="Tix24"
                companyURL="https://tix24.com.ua/"
                feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit debitis explicabo obcaecati itaque consectetur, quod eaque minima distinctio culpa numquam ex amet, provident consequatur, dolor reprehenderit vitae mollitia nulla vero!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit debitis explicabo obcaecati itaque consectetur, quod eaque minima distinctio culpa numquam ex amet, provident consequatur, dolor reprehenderit vitae mollitia nulla vero!"
            />

            <section className="block spacing-tiny-top">
                <div className="wrapper">
                    <h3 className="title-section">From my blog</h3>
                    <div className="divider"></div>

                    <div className="array huge-spacing">
                        {
                            articles.map(article => {
                                return (
                                    <Article
                                        key={ article.id }
                                        link="2"
                                        article={ article.title }
                                        textPreview={ article.body }
                                        category={ null }
                                        publicationDate={ article.publicationDate }
                                    />
                                )
                            })
                        }
                    </div>

                    <Button
                        className="foreground center"
                        label="View more posts"
                        link="/posts"
                    />
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()

    const articles = await prisma.article.findMany({})
    const projects = await prisma.project.findMany({})

    return {
        props: {
            articles,
            projects
        }
    }
}

export default Home