import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header dark ">
            <div className="wrapper">
                <div className="logo">
                    <a className="link" href="/">
                        Alexandr Laketych
                    </a>
                </div>

                <ul className="navigation">
                    <li className="item">
                        <Link className="link" to='/projects'>Projects</Link>
                    </li>

                    <li className="item">
                        <Link className="link" to='/about'>About</Link>
                    </li>

                    <li className="item">
                        <Link className="link" to='/contact'>Contact</Link>
                    </li>

                    <li className="item">
                        <Link className="link" to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header