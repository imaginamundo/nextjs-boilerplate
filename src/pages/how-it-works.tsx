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
            <h1>How it Works (In progress…)</h1>
            <ul>
                <li>Folders structure;</li>
                <li>Styling (with CSS);</li>
                <li>Customize layout;</li>
                <li>How to use useContextApplication;</li>
                <li>pageType initialProp;</li>
                <li>Modify assets;</li>
                <li>defaultPage and securePage;</li>
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