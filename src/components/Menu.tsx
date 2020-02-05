import React from 'react';
import Link from 'next/link';

import { useApplicationContext } from '../hooks/useApplicationContext';

import styles from './Menu.module.css';

function Menu() {
    const context = useApplicationContext();

    type MenuItem = {
        label: string,
        href: string,
        active?: boolean
    };

    const menuItems: MenuItem[] = [
        {
            label: 'How it works',
            href: '/how-it-works'
        },
        {
            label: 'Dependencies',
            href: '/dependencies'
        },
        {
            label: 'Releases',
            href: '/releases'
        },
        {
            label: 'Contributors',
            href: '/contributors'
        }
    ]
        .map((item: MenuItem) => {
            // TODO: Fix TypeScript
            // if (item.href === context.path) item.active = true;
            item.active = true;
            return item;
        });

    return (
        <nav className={ styles.menu }>
            { 
                menuItems.map((item, index) => (
                    <Link
                        key={ `menu-item-${ index }` }
                        href={ item.href }
                    >
                        <a className={ styles.menuItem }>
                            { item.label }
                        </a>
                    </Link>
                ))
            }
        </nav>
    );
};

export default Menu;