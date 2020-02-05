import React from 'react';

import '../variables.css';
import '../styles.css';

function CustomApp({ Component, pageProps }) {
    return <Component { ...pageProps } />
};

export default CustomApp;