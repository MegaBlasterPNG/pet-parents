module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': 'hsl(141, 70%, 48%)',
            // 'link-color': '#1DA57A',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};