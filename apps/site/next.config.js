const withNx = require('@nrwl/next/plugins/with-nx');
const withBundleAnalyzer = require('@next/bundle-analyzer');

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

  webpack: (config, { webpack, isServer }) => {
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
