import React from 'react'
import { PrismaClient } from '@prisma/client'
import { PageTitle, ProjectView } from '../../components/_index'

function Projects({ projects }) {
    return (
        <div className="App">
            <PageTitle
                title="My Projects"
                description="If you’d like to chat about a project please fill in the form below and I’ll get back within 1 day."
            />

            <section className="block spacing-tiny-top">
                <div className="wrapper">
                    {
                        projects.map(project => {
                            return (
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
        </div>
    )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const projects = await prisma.project.findMany()

    return {
        props: {
            projects
        }
    }
}

export default Projects