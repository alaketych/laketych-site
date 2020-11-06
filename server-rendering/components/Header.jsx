import React from 'react'
import Link from 'next/link'
import { Menu, SideMenu, BottomMenu } from './Menu/_index'

function Header() {
    return (
        <header className="header dark ">
            <div className="wrapper">
                <div className="logo">
                    <Link href="/">
                        <a className="link">Alexandr Laketych</a>
                    </Link>
                </div>

                <Menu />
                <SideMenu />
            </div>

            <BottomMenu />
        </header>
    )
}

export default Header