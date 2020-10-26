import React from 'react'
import { getPosts } from './api/controllers/fetching'
import { PageTitle } from '../components/_index'
import { Article, Button } from '../components/_index'

function About({ posts }) {
    return (
        <div className="App">
            <PageTitle
                title="About Me"
                description="Find out who I am, where I'm from and what I'm doing for living"
            />

            <section className="block medium-space-top">
                <div className="wrapper">
                    <div className="content center">
                        <h3 className="title-section small-padding">Who I am</h3>
                        <div className="description">
                            <p className="doc">
                                My name is Alexandr and I live in Kyiv, Ukraine.
                            </p>

                            <p className="doc">
                                I have always loved creating something out of nothing. When I was little I started with lego-modeling, moved on to sewing my own clothes and creating jewelry, and then I found the digital world where it was possible to create anything! I started creating anything and everything; logos, digital design work, even tried 3D models, and finally websites.
                            </p>

                            <p className="doc">
                                Today I primarily create websites. I also work with web development both front-end and back-end, specifically with ReactJS and NodeJS as well.
                            </p>

                            <p className="doc">
                                My web-journey began early, just me working on my own. In later years, I have also received formal education as I studied web technology at the university to help me to widen and deepen my knowledge.
                            </p>

                            <p className="doc">
                                Besides, programming I love spending time with friends, can often be found together going out catching the latest movie, staying in playing games table games or planning a trip to someplace I've never been before.
                            </p>

                            <p className="doc">
                                Althought I'm big fan of sport activities such as basketball, football and tennis, even table tennis. Sport is a great way to get your mind off things and is also a great way to express yourself. It can work your whole body after hard coding :).
                            </p>

                            <p className="doc">
                                I graduated from university National Aviation University, which is situated in Kyiv. Where I studied system programming and got some knowledge about OOP languages. While I was at university I worked part time as a invigilaton who helped to conduct exam in British Council Office. That helped me to further hone in my english skills. When I'm not at work I'm usually working on a new pet-project from home which could be anything to updating one of my project or to create a new CRM/CMS application.
                            </p>

                            <p className="doc">
                                Before studing myselft web development I was insipred by C# language and wanted to link my future job with WPF. However, web developing trends started to displace desktop application. Therefore, I was aimed at developing for web apps. Starting from ASP.NET to custom NodeJS server and React(NextJS) framework.
                            </p>

                            <p className="doc">
                                Finally, my job involves doing what I love, developing new websites/applications, developing content management systems (CMS) and customer relationship management (CRM) applications.
                            </p>

                            <p className="doc">
                                If you want to know more or have any questions, please don’t hesitate to contact me.
                            </p>
                        </div>


                        <h3 className="title-section small-padding">Technology stack</h3>



                        <div className="array">
                            <Button
                                className="foreground"
                                label="download resume"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="block spacing-tiny-top medium-space-top">
                <div className="wrapper">
                    <h3 className="title-section">From my blog</h3>
                    <div className="divider"></div>

                    <div className="array huge-spacing">
                        {
                            posts.map(post => {
                                return (
                                    <Article
                                        key={ post.id }
                                        article={ post.title }
                                        textPreview={ post.body }
                                    />
                                )
                            })
                        }
                    </div>

                    <Button
                        className="foreground center"
                        label="View more posts"
                    />
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

export default About