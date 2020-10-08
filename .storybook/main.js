const customConfig = require('../configs/webpack/storybook.config.js')();

module.exports = {
    stories: ['../src/**/*.stories.@(tsx|ts)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        }
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

