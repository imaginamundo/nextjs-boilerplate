import React from 'react';

import styles from './Error.module.css';

function Error({
    statusCode,
    path
}) {
    const errorMessages = {
        error404: `Page ${ path } not found.`,
        error500: 'Something went wrong.'
    };

    return (
        <div className={ styles.error }>
            <h1>{ statusCode }</h1>
            <p>{ errorMessages[`error${ statusCode }`] }</p>
        </div>
    );
};

export default Error;