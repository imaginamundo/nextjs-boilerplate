const withPlugins = require('next-compose-plugins');

const nextConfig = {
    poweredByHeader: false,
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/how-it-works': { page: '/how-it-works' },
            '/dependencies': { page: '/dependencies' },
            '/releases': { page: '/releases' },
            '/contributors': { page: '/contributors' }
        };
    }
};

module.exports = withPlugins([ ], nextConfig);

