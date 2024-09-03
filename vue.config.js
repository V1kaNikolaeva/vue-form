const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: `/vue-form/`,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/_variables.sass" 
        @import "@/assets/styles/_common.sass"
        `,
      },
    },
  },
})
