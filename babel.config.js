module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: [
    ['@babel/proposal-decorators', {
      decoratorsBeforeExport: true,
    }],
    '@babel/proposal-class-properties',
    '@babel/proposal-private-methods',
  ],
};
