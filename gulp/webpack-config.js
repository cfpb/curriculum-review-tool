/* ==========================================================================
   Settings for webpack JavaScript bundling system.
   ========================================================================== */


const BROWSER_LIST = require( './browser-list-config' );
const webpack = require( 'webpack' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );


/* Constants
   const COMMON_BUNDLE_NAME = 'tdp.js'; */

/* Commmon webpack 'module' option used in each configuration.
   Runs code through Babel and uses global supported browser list. */
const COMMON_MODULE_CONFIG = {
  rules: [ {
    test: /\.js$/,

    /* The `exclude` rule is a double negative.
        It excludes all of `node_modules/` but it then un-excludes modules that
        start with `cf-` and `cfpb-` (CF components and cfpb-chart-builder).
        Regex test: https://regex101.com/r/zizz3V/5 */
    exclude: {
      test: /node_modules/,
      exclude: /node_modules\/(?:cf\-.+|cfpb\-.+)/
    },
    use: {
      loader: 'babel-loader?cacheDirectory=true',
      options: {
        presets: [ [ '@babel/preset-env', {
          targets: {
            browsers: BROWSER_LIST.LAST_2_IE_8_UP
          },
          debug: false
        } ] ]
      }
    }
  } ]
};

/* Set warnings to true to show linter-style warnings.
   Set mangle to false and beautify to true to debug the output code. */
const COMMON_MINIFICATION_CONFIG = new TerserWebpackPlugin( {
  parallel: true,
  terserOptions: {
    ie8: false,
    ecma: 5,
    warnings: false,
    mangle: true,
    output: {
      comments: false,
      beautify: false
    }
  }
} );


/* const COMMON_CHUNK_CONFIG = new webpack.optimize.CommonsChunkPlugin( {
   name: COMMON_BUNDLE_NAME
   } ); */


const commonConf = {
  module: COMMON_MODULE_CONFIG,
  output: {
    filename: '[name]'
  },
  optimization: {
    minimizer: [
      // COMMON_MINIFICATION_CONFIG
    ]
  }
};

const modernConf = {
  cache: true,
  mode: 'production',
  module: COMMON_MODULE_CONFIG,
  output: {
    filename: 'tdp.js'
  },
  plugins: [
    // COMMON_CHUNK_CONFIG
  ],
  optimization: {
    minimizer: [
      // COMMON_MINIFICATION_CONFIG
    ]
  }
};


module.exports = {
  commonConf,
  modernConf
};
