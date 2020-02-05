import React from 'react';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Page() {
    return (
        <Layout>
            <SEO title="Next.js Boilerplate Dependencies" />

            <h1>Dependencies</h1>
            <p>We are currently using the basic dependencies for a project with Next.js, TypeScript and Jest.</p>

            <h2>Default dependencies</h2>
            <ul>
                <li>next <i>9.2.1</i>;</li>
                <li>react <i>16.12.0</i>;</li>
                <li>react-dom <i>16.12.0</i>;</li>
                <li>isomortphic-unfetch <i>3.0.0</i>;</li>
            </ul>

            <h2>Developer dependencies</h2>
            <p>For TypeScript:</p>
            <ul>
                <li>typescript <i>3.7.5</i></li>
                <li>@types/node <i>13.7.0</i></li>
                <li>@types/react <i>16.9.19</i></li>
            </ul>

            <p>For test:</p>
            <ul>
                <li>jest <i>25.1.0</i></li>
                <li>babel-jest <i>25.1.0</i></li>
                <li>react-test-renderer <i>16.12.0</i></li>
                <li>@testing-library/react <i>9.4.0</i></li>
                <li>@testing-library/jest-dom <i>5.1.1</i></li>
                <li>identity-obj-proxy <i>3.0.0</i></li>
            </ul>
        </Layout>
    );
};

Page.getInitialProps = () => {
    return {
        pageType: 'dependencies'
    };
};

export default defaultPage(Page);