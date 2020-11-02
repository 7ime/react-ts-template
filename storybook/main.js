const customConfig = require('../configs/webpack/storybook.config.js')();

module.exports = {
    stories: ['../src/**/*.stories.@(tsx|ts)'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        '@storybook/addon-actions',
        '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-viewport'
    ],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: customConfig.module.rules
            },
            resolve: {
                ...config.resolve,
                alias: Object.assign({}, config.resolve.alias, customConfig.resolve.alias)
            },
            plugins: config.plugins.concat(customConfig.plugins)
        };
    }
};

