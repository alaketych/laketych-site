
import React from 'react'
import photo from '../assets/images/g.webp'
import { PageTitle, Article } from '../components/_index'

function Blog() {
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
                        />

                        <Article
                            photo={ photo }
                            article="Building GraqhQL server"
                            category="Programming"
                            date="25th September, 2020"
                            textPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic eaque. Perferendis, asperiores. Iste omnis architecto modi culpa dicta, hic quasi nihil eius autem earum tempore, corporis commodi, provident fuga?"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog