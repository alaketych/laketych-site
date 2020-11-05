import React from 'react'
import { PageTitle, ContactingForm, Service } from '../components/_index'

function Contact() {
    return (
        <div className="App">
            <PageTitle
                title="Contact Me"
                description="If you’d like to chat about a project please fill in the form below and I’ll get back within 1 day."
            />

            <section className="block huge-spacing">
                <div className="wrapper">
                    <div className="array">
                    <Service
                        className="huge-spacing"
                        title="Available"
                        description="I’m currently taking on new projects!"
                    />

                    <ContactingForm /></div>
                </div>
            </section>
        </div>
    )
}

export default Contact