const path = require('path')

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ],
    config.module.rules.push({
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')],
      exclude: [path.resolve(__dirname, '..', 'shared/node_modules')],
    })
    return config
  },
}
