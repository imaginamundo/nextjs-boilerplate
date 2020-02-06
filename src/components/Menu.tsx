import React from 'react';
import Link from 'next/link';

import { useAppContext } from '../hooks/appContext';

import styles from './Menu.module.css';

function Menu() {
    const context = useAppContext();

    const menuItems = [
        {
            label: 'How it works',
            href: '/how-it-works',
            active: false
        },
        {
            label: 'Dependencies',
            href: '/dependencies',
            active: false
        },
        {
            label: 'Releases',
            href: '/releases',
            active: false
        },
        {
            label: 'Contributors',
            href: '/contributors',
            active: false
        }
    ]
        .map((item) => {
            if (item.href === context.path) item.active = true;
            return item;
        });

    console.log(menuItems);

    return (
        <nav className={ styles.menu }>
            { 
                menuItems.map((item, index) => {
                    const linkClasses = [ styles.menuItem ];
                    if (item.active) linkClasses.push(styles.menuItemActive);

                    return (
                        <Link
                            key={ `menu-item-${ index }` }
                            href={ item.href }
                        >
                            <a className={ linkClasses.join(' ') }>
                                { item.label }
                            </a>
                        </Link>
                    );
                })
            }
        </nav>
    );
};

export default Menu;