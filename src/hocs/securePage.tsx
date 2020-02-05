import React from 'react';

import defaultPage from './defaultPage';

/**
 * Secure Page High Order Component (HOC) 
 * Set the logic for user permission to access the page.
 * Similar to defaultPage hoc, but mainly focussed on
 * permissions logic.
 * 
 * Will also use the defaultPage to pass the default
 * parameters and default wrappers, like context, etc…
 */
export default function(Page) {
    function SecurePage(props) {
        return (
            <Page { ...props } />
        );
    };

    SecurePage.getInitialProps = async (ctx) => {
        const props = Page.getInitialProps && await Page.getInitialProps(ctx) || {};
        return props;
    };

    return defaultPage(SecurePage);
};
