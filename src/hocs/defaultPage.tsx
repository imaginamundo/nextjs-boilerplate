import React from 'react';

import { ContextProvider } from '../hooks/useApplicationContext';

/**
 * Default Page High Order Component (HOC) 
 * Here you can set a wrapper and send default properties
 * to every page that uses this HOC
 */
export default function(Page) {
    function DefaultPage(props) {
        /**
         * Any prop passed to ContextProvider will be in the hook useContext
         */
        return (
            <ContextProvider
                pageType={ props.pageType }
                path={ props.path }
            >
                <Page { ...props } />
            </ContextProvider>
        );
    };

    DefaultPage.getInitialProps = async (ctx) => {
        const props = Page.getInitialProps && await Page.getInitialProps(ctx) || {};

        props.path = ctx.asPath;

        return props;
    };

    return DefaultPage;
};
