import React from 'react';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import Error from '../components/Error';

function Page({ path, statusCode }) {
    return (
        <Layout>
            <Error statusCode={ statusCode } path={ path } />
        </Layout>
    );
};

Page.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        pageType: 'error',
        statusCode
    };
};

export default defaultPage(Page);