import React from 'react';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Page() {
    return (
        <Layout>
            <SEO title="Next.js Boilerplate Releases" />
            <h1>Releases</h1>
            <p>All releases listed:</p>

            <h2>Initial release (1.0.0):</h2>
            <dl>
                <dt>Folders organization;</dt>
                <dd>
                    <ul>
                        <li><strong>/src</strong> and <strong>/public</strong> main folders;</li>
                        <li><strong>/src/components</strong> to organize components</li>
                        <li><strong>/src/hocs</strong> get the default hight order components</li>
                        <li><strong>/src/hooks</strong> to organize hooks</li>
                        <li><strong>/src/pages</strong> to create pages</li>
                    </ul>
                </dd>

                <dt>High order components for default pages and secure pages;</dt>
                <dd>
                    <ul>
                        <li><code>defaultPage</code> to add custom wrappers and default props to all pages;</li>
                        <li><code>securePage</code> to authentication logic;</li>
                    </ul>
                </dd>

                <dt>TypeScript setup;</dt>
                <dd>
                    <ul>
                        <li>Install node and react types;</li>
                        <li>Add tsconfig.json;</li>
                    </ul>
                </dd>

                <dt>CSS setup;</dt>
                <dd>
                    <ul>
                        <li>Custom <code>_app.tsx</code> to call global styles;</li>
                        <li>[Component].module.css to modular css;</li>
                        <li>Add minimal styles to header;</li>
                    </ul>
                </dd>

                <dt>Global Context</dt>
                <dd>
                    <ul>
                        <li>Added in <code>defaultPage</code> HOC, you can send data to global context thru default page hoc.</li>
                        <li>To get information in a easier way, you can import useApplicationContext;</li>
                    </ul>
                </dd>
                
                <dt>SEO</dt>
                <dd>
                    <ul>
                        <li>Created SEO component;</li>
                        <li>Add favicons generated with favicons.io</li>
                    </ul>
                </dd>
            </dl>
        </Layout>
    );
};

Page.getInitialProps = () => {
    return {
        pageType: 'releases'
    };
};

export default defaultPage(Page);