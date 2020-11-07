import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNewspaper, faFolder, faAddressCard, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

function BottomMenu() {
    return (
        <ul className="bottom-menu">
            <li className="menu-item">
                <Link href='/projects'>
                    <FontAwesomeIcon icon={ faFolder }></FontAwesomeIcon>
                </Link>
            </li>

            <li className="menu-item">
                <Link href='/about'>
                    <FontAwesomeIcon icon={ faInfoCircle }></FontAwesomeIcon>
                </Link>
            </li>

            <li className="menu-item">
                <Link href='/contact'>
                    <FontAwesomeIcon icon={ faAddressCard }></FontAwesomeIcon>
                </Link>
            </li>

            <li className="menu-item">
                <Link href='/posts'>
                    <FontAwesomeIcon icon={ faNewspaper }></FontAwesomeIcon>
                </Link>
            </li>
        </ul>
    )
}

export default BottomMenu