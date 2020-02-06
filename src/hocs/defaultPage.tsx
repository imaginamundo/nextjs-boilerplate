import React from 'react';

import { IContext } from '../interfaces/context';

import { ContextProvider } from '../hooks/appContext';

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
        const contextProps: IContext = {
            pageType: props.pageType,
            path: props.path
        };

        return (
            <ContextProvider { ...contextProps }>
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
