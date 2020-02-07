import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import defaultPage from '../hocs/defaultPage';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pokemon from '../components/Pokemon';

function Page() {
    return (
        <Layout>
            <SEO
                title="Next.js Boilerplate How It Works"
                description="How this project works."
            />
            <h1>How it Works (In progress…)</h1>

            <h2 id="client-side-request">Client side request</h2>
            <p>There is a hook in the folder <code>/src/hooks/request</code>.</p>
            <p>To use it you can import the hook on your component.</p>
            <SyntaxHighlighter language="javascript">
                { `import { useRequest } from '../hooks/request';` }
            </SyntaxHighlighter>
            <p>You can only use it at the top level from a function, like:</p>
            <SyntaxHighlighter language="javascript">
{
`import React from 'react'; 
import { useRequest } from '../hooks/request';

function ComponentThatWillMakeAClientSideRequest() {
  // Get the requisition and return the data, error (if there's any) and loading state;
  const [ data, error, loading ] = useRequest('https://pokeapi.co/api/v2/pokemon/squirtle/');

  return (
    <div>
        JSON.parse(data);
    </div>
  );
};

export default ComponentThatWillMakeAClientSideRequest;`
}
            </SyntaxHighlighter>
            <p>We have an example component at <code>/src/components/Pokemon.tsx</code>, that will do this:</p>
            <Pokemon />

            <h3 id="client-side-request_get-initial-props">Get Initial Props</h3>
            <p>You can also use <code>getInitialProps</code> to fetch data on client, but when you are fetching data on <code>getInitialProps</code> you can also fetch data on the server side.</p>
            <p><code>getInitialProps</code> will get the information from the client when the transition to a page occurs on the client side.</p>
            <p>For more information read the <a href="https://nextjs.org/docs/api-reference/data-fetching/getInitialProps" target="_blank">Next.js Documentation on <code>getInitialProps</code></a>.</p>

            <h2 id="server-side-request">Server Side Request</h2>
            <p>As stated on <a href="#client-side-request_get-initial-props">Client Side Request - Get Initial Props</a>, you can use it to create a first data requirement to the page, like:</p>
            <SyntaxHighlighter language="javascript">
{
`import React from 'react'; 
/**
 * Isomorphic unfetch it's a good dependency to use the same
 * method (fetch) in the server (node) and on the client (browser)
 */
import fetch from 'isomorphic-unfetch'; 

import defaultPage from '../hoc/defaultPage'; 

/**
 * The data that we got getInitialProps is returned in this
 * function Page, like we would got passing a prop to a component
 */
function Page({ data }) {
  // Will console the data we got on getInitialProps
  console.log(data)
  return (
    <>
      <h1>Hello page with server data</h1>
      <pre>JSON.parse(data);</pre>
    </>
  );
};

Page.getInitialProps = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle/');
    // What you return here, will be sent to Page in the function parameter
    return {
        pageType: 'serverRequest',
        data
    };
};

export default defaultPage(Page);`
}
            </SyntaxHighlighter>
            <p>There's an important behavior to be careful about this.</p>
            <p>When you transition between pages on the client side (using the component { '<Link />'} from <code>next/link</code>, all the code executed on getInitialProps will be done on the client. If you want to verify where this execution is made, you can use a conditional using <code>context</code> param from <code>getInitialProps</code>, like this:</p>
            <SyntaxHighlighter language="javascript">
{
`Page.getInitialProps = (context) => {
    if (context.req) {
        console.log('Request made on Server Side');
    } else {
        console.log('Request made on Client Side');
    }

    return {};
};`
}
            </SyntaxHighlighter>
            <p>For more information read the <a href="https://nextjs.org/docs/api-reference/data-fetching/getInitialProps" target="_blank">Next.js Documentation on <code>getInitialProps</code></a> and <a href="https://nextjs.org/docs/api-reference/next/link" target="_blank">Next.js Documentation on Link Component</a>.</p>

            <h2 id="high-order-components">High Order Components (Hocs)</h2>
            <p>High order component it's a component that wrap every page, it's an action that you would also repeat on every page. This project have two default hocs, defaultPage and securePage, but if you need more, you can create others or modify the current ones.</p>
            <p>Our hocs for defaultPage and securePage are only based on <a href="https://nextjs.org/docs/basic-features/pages">Next.js pages</a>.</p>
            <h3>defaultPage hoc</h3>
            <p>Default page hoc is the default hoc for a non authenticated page, in this project the <a href="#application-context">Application Context</a> around the application is built here.</p>
            <p>Here you can add logic to do every type of default action that every page needs.</p>

            <h3>securePage hoc</h3>
            <p>This hoc is created to only receive authentication and permissions logic, usually block an user to see a page that he is not allowed to see.</p>

            <h3>Using hocs on pages</h3>
            <p>First you import the hoc on your page file, then, when exporting the page, use the function sending the page as a parameter, like this:</p>
            <SyntaxHighlighter language="javascript">
{
`import React from 'react'; 

import defaultPage from '../hoc/defaultPage'; 

function Page() {
  return (
    <h1>My page :D</h1>
  );
};

Page.getInitialProps = () => {
    return {
        pageType: 'usingHocs',
    };
};

// Exporting the Page component, with the defaultPage hoc
export default defaultPage(Page);`
}
            </SyntaxHighlighter>
            <h2 id="page-type-on-get-initial-props">Page Type on Get Initial Props</h2>
            <p>Page type is used to create an "id" for each page, using it you can make it easier to use an analytics application, create betters A/B tests, and have the control of what is happening.</p>
            <p>You can identify it on <code>defaultPage</code> hoc, and add spefic operations for each page type.</p>
            <p>Here it's how you send the <code>pageType</code> to initial props:</p>
            <SyntaxHighlighter language="javascript">
{
`Page.getInitialProps = () => {
    return {
        pageType: 'nameOfPage'
    };
};`
}
            </SyntaxHighlighter>

            <h2 id="application-context">Application Context</h2>
            <p>By default, we created the context around the whole application. It's good to pass information that you may need everywhere. The default information that we send to the send to the context is the url path, and the page type.</p>
            <p>You can create you own contexts to avoid props drilling or modify the existing one that is here.</p>
            <p>For more information read the <a href="https://pt-br.reactjs.org/docs/context.html" target="_blank">React Context Documention</a>.</p>
            
            <h3>Add data to application context</h3>
            <p>To add information to application context, you need to open the defaultPage hoc, this file have a constant called <code>contextProps</code>. To pass the information to the context, just add other key to the object and update it's interface.</p>

            <h3>Get data from application context</h3>
            <p>Import the hook use <code>useAppContext</code> from appContext, then this hook (that is a function) will return the current application context, like this:</p>
            <SyntaxHighlighter language="javascript">
            {
`import React from 'react'; 

// Import the hook
import { useAppContext } from '../hooks/appContext';

function SomeComponent() {
  // Get the context values
  const context = useAppContext();
  return (
    // ...
  );
};

Page.getInitialProps = () => {
    return {
        pageType: 'usingHocs',
    };
};

export default SomeComponent;`
}
            </SyntaxHighlighter>

            <ul>
                <li>Folders structure;</li>
                <li>Styling (with CSS);</li>
                <li>Customize layout;</li>
                <li>Modify assets;</li>
                <li>Debugging with Visual Studio Code;</li>
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