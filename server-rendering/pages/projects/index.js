import React from 'react'
import { getProjects } from '../api/controllers/fetching'
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
                                    description={ project.description }
                                    className="content"
                                    photo={ null }
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
    const response = await getProjects()
    const json = await response.json()

    return {
        props: {
            projects: json
        }
    }
}

export default Projects