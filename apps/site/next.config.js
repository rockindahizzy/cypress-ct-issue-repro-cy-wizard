const withNx = require('@nrwl/next/plugins/with-nx');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const path = require("path");
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function isProduction() {
  return process.env.ENVIRONMENT === 'prod';
}

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  productionBrowserSourceMaps: !isProduction(),
  poweredByHeader: false,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  webpack: (config, { webpack, isServer, defaultLoaders }) => {

    const buildPlugin = config.plugins.find(p => p.constructor.name  === 'BuildManifestPlugin')

    if(buildPlugin && buildPlugin.buildId.includes('cypress')) {
      config.resolve.plugins = [
        new TsConfigPathsPlugin({
          configFile: './tsconfig.json',
          extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
          mainFields: ['es2015', 'module', 'main'],
        }),
      ];

      config.module.rules.push({
        test: /\.([jt])sx?$/,
        include: [
          path.join(__dirname, '..', '..', 'libs')
        ],
        exclude: /node_modules/,
        use: [defaultLoaders.babel],
      });

      config.module.rules.push({
        include:[
          path.join(__dirname, '..', '..', 'libs')
        ],
        exclude: /node_modules/,
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      });
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
};

module.exports = () => {
  const plugins = [
    withNx,
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
  return config;
};
