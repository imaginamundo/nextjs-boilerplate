import React from 'react';

function Contributors() {
    const contributorsList = [
        {
            name: 'Diogo Fernandes',
            url: 'https://github.com/imaginamundo'
        }
    ];

    return (
        <div className="contributors">
            {
                contributorsList.map(((contributor, index) => (
                    <div className="contributor" key={ `contributor-${ index }` }>
                        <p>
                            <strong>{ contributor.name }</strong>
                            <br />
                            <a href={ contributor.url }>
                                { contributor.url }
                            </a>
                        </p>
                    </div>
                )))
            }
        </div>
    );
};

export default Contributors;