import React from 'react';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contributors from '../components/Contributors';

function Page() {
    return (
        <Layout>
            <SEO
                title="Next.js Boilerplate Contributors"
                description="List of all contributors to the project."
            />
            <h1>Contributors</h1>
            <Contributors />
        </Layout>
    );
};

Page.getInitialProps = () => {
    return {
        pageType: 'contributors'
    }
};

export default defaultPage(Page);