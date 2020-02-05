import React from 'react';
import Head from 'next/head';

type Props = {
    title?: string,
    description?: string,
    robots?: string
};

function SEO({
    title = 'Next.js Boilerplate',
    description,
    robots = 'index, follow'
}: Props) {
    return (
        <Head>
            <title>{ title }</title>
            {
                description &&
                <meta
                    name="description"
                    content={ description }
                />
            }
            <meta
                name="robots"
                content={ robots }
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="theme-color" content="#ffffff"></meta>
            {/**
              * Favicons generated with favicons.io
              */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/app.webmanifest" />
        </Head>
    );
};

export default SEO;