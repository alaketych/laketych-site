import React from 'react'
import Link from 'next/link'

function DefaultMenu() {
    return (
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
                <Link href='/posts'>
                    <a className="link">Blog</a>
                </Link>
            </li>
        </ul>
    )
}

export default DefaultMenu