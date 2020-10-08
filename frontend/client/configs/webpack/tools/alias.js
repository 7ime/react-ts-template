const {resolvePath} = require('./helpers');
const paths = require('./paths');

module.exports = {
    '@fonts': resolvePath(paths.source + '/assets/fonts'),
    '@images': resolvePath(paths.source + '/assets/images'),
    '@styles': resolvePath(paths.source + '/assets/styles'),
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
