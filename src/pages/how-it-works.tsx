import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pokemon from '../components/Pokemon';

function Page() {
    const clientSideRequest = {
        importHook: 
`import { useHttp } from '../hooks/http';`,
        withHook: 
`import React from 'react'; 
import { useHttp } from '../hooks/http';

function ComponentThatWillMakeAClientSideRequest() {
  // Get the requisition and return the data, error (if there's any) and loading state;
  const [ data, error, loading ] = useHttp('https://pokeapi.co/api/v2/pokemon/squirtle/');

  return (
    <div>
        JSON.parse(data);
    </div>
  );
};

export default ComponentThatWillMakeAClientSideRequest;`
    };

    return (
        <Layout>
            <SEO
                title="Next.js Boilerplate How It Works"
                description="How this project works."
            />
            <h1>How it Works (In progress…)</h1>

            <h2 id="client-side-request">Client side request</h2>
            <p>There is a hook in the folder <code>/src/hooks/http</code>.</p>
            <p>To use it you can import the hook on your component.</p>
            <SyntaxHighlighter language="javascript">
                { clientSideRequest.importHook }
            </SyntaxHighlighter>
            <p>You can only use it at the top level from a function, like:</p>
            <SyntaxHighlighter language="javascript">
                { clientSideRequest.withHook }
            </SyntaxHighlighter>
            <p>We have an example component at <code>/src/components/Pokemon.tsx</code>, that will do this:</p>
            <Pokemon />
    
            <ul>
                <li>Folders structure;</li>
                <li>Styling (with CSS);</li>
                <li>Customize layout;</li>
                <li>How to use useContextApplication;</li>
                <li>pageType initialProp;</li>
                <li>Modify assets;</li>
                <li>defaultPage and securePage;</li>
                <li>Client side request;</li>
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