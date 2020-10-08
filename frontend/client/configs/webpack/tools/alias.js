const {resolvePath} = require('./helpers');
const paths = require('./paths');

module.exports = {
    '@fonts': resolvePath(paths.source + '/shared/fonts'),
    '@images': resolvePath(paths.source + '/shared/images'),
    '@styles': resolvePath(paths.source + '/shared/styles'),
    '@components': resolvePath(paths.source + '/components'),
    '@api': resolvePath(paths.source + '/api'),
    '@constants': resolvePath(paths.source + '/constants'),
    '@entities': resolvePath(paths.source + '/entities'),
    '@helpers': resolvePath(paths.source + '/helpers'),
    '@models': resolvePath(paths.source + '/models'),
    '@modules': resolvePath(paths.source + '/modules'),
    '@routing': resolvePath(paths.source + '/routing'),
    '@services': resolvePath(paths.source + '/services'),
    '@store': resolvePath(paths.source + '/store'),
    '@toolbox': resolvePath(paths.source + '/toolbox'),
    '@i18n': resolvePath(paths.source + '/i18n'),
    '@__tests__': resolvePath(paths.source + '/__tests__')
};
