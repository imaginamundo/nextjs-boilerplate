import React from 'react';
import Link from 'next/link';

import Menu from './Menu';

import styles from './Header.module.css';

function Header() {
    return (
        <header className={ styles.header }>
            <Link href="/">
                <a className={ styles.headerLogo }>
                    <strong>Next.js Boilerplate</strong>
                </a>
            </Link>
            <Menu />
        </header>
    );
};

export default Header;