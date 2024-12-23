const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    typescript: {
      tsconfigFile: "./tsconfig.json",
    },
    postcss: true,
  }),
};
