import React from 'react';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Page() {
    const toDoList = [
        {
            label: 'TypeScript all the way;',
            checked: false
        },
        {
            label: 'Offline PWA support;',
            checked: false
        },
        {
            label: 'Error on demand via initialProps',
            checked: false
        },
        {
            label: 'Github pages',
            checked: false
        }
    ];

    return (
        <Layout>
            <SEO
                description="A Boilerplate for a PWA web application with TypeScript and tests."
            />
            <h1>Hello Next.js Boilerplate</h1>
            <p>This is a boilerplate for Next.js using almost no dependencies beside the ones that Next.js requires.</p>
            <p>
                <a href="https://github.com/imaginamundo/nextjs-boilerplate" target="_blank">
                    Github
                </a>
            </p>

            <h2>Requirements</h2>
            <ul>
                <li>Node 10 or later;</li>
                <li>MacOS, Windows and Linux;</li>
            </ul>

            <h2>Main features:</h2>
            <ul>
                <li>Server side rendering;</li>
                <li>Client side page transitions;</li>
                <li>Custom context around the whole application;</li>
                <li>Access context using <code>useApplicationContext</code> hook;</li>
                <li>Easy SEO component;</li>
                <li>Custom error page that matches Layout;</li>
                <li>TypeScript configuration;</li>
                <li>Jest / React Testing library configured for TS;</li>
            </ul>

            <h2>To do list:</h2>
            {
                toDoList.map((item, index) => (
                    <p key={ `todo-item-${ index }` }>
                        <label>
                            <input type="checkbox" checked={ item.checked } disabled />
                            { ' ' }
                            { item.label }
                        </label>
                    </p>
                ))
            }
        </Layout>
    );
};

Page.getInitialProps = () => {
    return {
        pageType: 'index'
    };
};
 
export default defaultPage(Page);