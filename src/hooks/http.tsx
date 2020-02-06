import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

export function useHttp(uri, options = {}) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(uri, options)
            .then(res => {
                if (res.ok) return res.json();
                throw res;
            })
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return [ data, error, loading ];
}