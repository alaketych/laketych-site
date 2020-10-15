import React from 'react'
import { PageTitle, ProjectView } from '../components/_index'

function Projects() {
    return (
        <div className="App">
            <PageTitle
                title="My Projects"
                description="If you’d like to chat about a project please fill in the form below and I’ll get back within 1 day."
            />

            <section className="block spacing-tiny-top">
                <div className="wrapper">
                    <ProjectView className="content"/>
                    <ProjectView className="content-reversed"/>
                    <ProjectView className="content"/>
                </div>
            </section>
        </div>
    )
}

export default Projects