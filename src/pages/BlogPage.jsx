import React, { useState } from 'react'

function Blog() {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={ darkTheme ? 'publication dark-theme' : 'publication light-theme' }>
            <div className="publication__inner">
                <div className="publication__up">
                </div>

                <div className="container">
                    <div className="publication__header">
                        <h3 className="publication__published-name">Alexandr Laketych</h3>
                        <h4 className="publication__published-date">27 September, 2020</h4>
                    </div>

                    <div className="publication__view">
                        <div className="publication__name">Building GraqhQL server</div>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <p className="publication__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum alias suscipit accusamus nihil, assumenda quibusdam placeat iusto dicta eligendi animi eius rerum repellat ad aut, laudantium earum libero iure?</p>
                        <a class="publication__link" href="localhost:3000/" target="_blank" rel="noopener noreferrer">интервью</a>
                    </div>
                </div>

                <div className="publication__vision">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        onClick={ () => setDarkTheme(prevTheme => !prevTheme) }
                        width="30" height="30" viewBox="-6 -6 12 12">
                            <defs>
                                <mask id="a">
                                    <rect width="10" height="10" x="-5" y="-5" fill="#fff"/>
                                    <circle cx="3" r="5"/>
                                </mask>
                            </defs>
                        <circle r="5" fill="currentColor" mask="url(#a)" transform="rotate(-23)"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40" viewBox="0 0 18 18">
                            <path fill="currentColor" d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Blog