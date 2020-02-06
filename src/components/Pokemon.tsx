import React from 'react';
import { useRequest } from '../hooks/request';

function Pokemon({ pokemon = 'squirtle' }) {
    const [ data, error, loading ] = useRequest(`https://pokeapi.co/api/v2/pokemon/${ pokemon }/`);

    return (
        <div style={ { textAlign: 'center' } }>
            {
                loading &&
                <pre>Loading…</pre>
            }
            {
                data &&
                <>
                    <pre>Pokémon { data.species.name[0].toUpperCase() + data.species.name.slice(1) } loaded</pre>
                    <img src={ data.sprites.front_default } alt={ data.species.name } />
                </>
            }
            {
                error &&
                <pre>Something wront happened :(</pre>
            }
        </div>
    );
};

export default Pokemon;