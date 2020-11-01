import React from 'react'
import { getProject } from '../api/controllers/fetching'
import { PageTitle, Button } from '../../components/_index'

function ProjectPage({ project }) {
    return (
        <div className="App">
            <PageTitle
                title={ project.title }
                description={ project.preview }
            />

            <section className="block huge-spacing">
                <div className="wrapper">
                    <img className="project-view__layout center" src={ project.photo } alt={ project.photo }/>

                    <div className="content center">
                        <h3 className="title-section massive-top-margin">about project</h3>
                        <div className="divider" />
                        <div class="description small-padding">
                            <p>{ project.description }</p>
                        </div>

                        <Button
                            label="View code"
                            className="foreground"
                            link={ project.githublink }
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const response = await getProject(query.project)
    const json = await response.json()

    return {
        props: {
            project: json[0]
        }
    }
}

export default ProjectPage