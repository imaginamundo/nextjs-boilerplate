import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

export function useRequest(uri, options = {}) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        let current = true;

        if (current) {
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
        };

        // Cleanup (old component will unmount)
        return () => {
            current = false;
        };
    }, []);

    return [ data, error, loading ];
};