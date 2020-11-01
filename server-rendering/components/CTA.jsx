import React from 'react'
import Link from 'next/link'
import { Button } from './_index'

function CTA() {
    return (
        <section className="block dark slanted-top huge-padding">
          <div className="wrapper">
              <div className="array huge-spacing ordering-col" id="cta">
                  <div className="substance">
                      <h3 className="description-section">Do you have some project?</h3>
                      <h3 className="description">Have a project you'd like to discuss?</h3>

                      <Button
                          className="big-button small-spacing"
                          label="Get in touch"
                          link="/contact"
                      />
                  </div>

                  <div className="substance">
                      <ul className="list ordering-col text-large">
                          <li className="item">
                              <svg className="item__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
                              </svg>


                              <Link href="mailto:alaketych@ukr.net">
                                  <a className="link">alaketych@ukr.net</a>
                              </Link>
                          </li>

                          <li className="item">
                              <svg className="item__img" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508"/>
                              </svg>

                              <a href="/" className="link">linkedin</a>
                          </li>

                          <li className="item">
                              <svg className="item__img" viewBox="71 71 370 370">
                                  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                              </svg>

                              <a href="/" className="link">github</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default CTA