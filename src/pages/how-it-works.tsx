import React from 'react';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Page() {
    return (
        <Layout>
            <SEO
                title="Next.js Boilerplate How It Works"
                description="How this project works."
            />
            <h1>In progress…</h1>
            <ul>
                <li>How to use useContextApplication;</li>
                <li>Customize layout;</li>
                <li>Modify assets;</li>
            </ul>
        </Layout>
    );
};

Page.getInitialProps = () => {
    return {
        pageType: 'howItWorks'
    }
};

export default defaultPage(Page);