import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <header className="header dark ">
            <div className="wrapper">
                <div className="logo">
                    <Link href="/">
                        <a className="link">Alexandr Laketych</a>
                    </Link>
                </div>

                <ul className="navigation">
                    <li className="item">
                        <Link href='/projects'>
                            <a className="link">Projects</a>
                        </Link>
                    </li>

                    <li className="item">
                        <Link href='/about'>
                            <a className="link">About</a>
                        </Link>
                    </li>

                    <li className="item">
                        <Link href='/contact'>
                            <a className="link">Contact</a>
                        </Link>
                    </li>

                    <li className="item">
                        <Link href='/blog'>
                            <a className="link">Blog</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header