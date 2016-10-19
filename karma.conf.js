// module.exports = function(config) {
//   config.set({
//     basePath: '',
//     // client: {
//     //   mocha: {
//     //     reporter: 'spec',
//     //     ui: 'bdd'
//     //   }
//     // },
//     frameworks: ['jasmine'],
//     files: [
//       'tests.webpack.js' //just load this file
//     ],
//     proxies: {
//       '/app/images/': 'http://localhost:9876/app/images/'
//     },
//     // preprocessors: {
//     //   'tests/**/*': ['webpack']
//     // },
//     preprocessors: {
//       'tests.webpack.js': ['webpack']//just load this file
//       // 'tests/components/index.test.js': ['babel']
//     },
//     babelPreprocessor: {
//       options: {
//         presets: ['es2015'],
//         sourceMap: 'inline',
//         plugins: ["transform-es2015-modules-umd"]
//       },
//       filename: function (file) {
//         return file.originalPath.replace(/\.js$/, '.js');
//       },
//       sourceFileName: function (file) {
//         return file.originalPath;
//       }
//     },
//     webpack: require('./webpack.config'),
//     webpackMiddleware: {
//       noInfo: true,
//       stats: {
//         colors: true
//       }
//     },
//     webpack: {
//       devtool: 'inline-source-map', //just do inline source maps instead of the default
//       module: {
//         loaders: [
//           {
//             test: /\.jsx?$/,
//             exclude: /(node_modules|bower_components)/,
//             loader: 'babel-loader',
//             exclude: [/node_modules/],
//           }
//         ]
//       },
//       externals: {
//         jsdom: 'window',
//         'react/lib/ExecutionEnvironment': true,
//         'react/lib/ReactContext': 'window',
//         'text-encoding': 'window'
//       }
//     },
//     reporters: ['spec'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     browsers: ['PhantomJS'],
//     captureTimeout: 60000,
//     singleRun: false,
//     plugins: [
//     require('karma-jasmine'),
//     require('karma-spec-reporter'),
//     // require('karma-chrome-launcher'),
//     // require('karma-firefox-launcher'),
//     require('karma-babel-preprocessor'),
//     require('karma-requirejs'),
//     require('karma-phantomjs-launcher'),
//     require('karma-webpack')]
//   });
// };

// V2

// var webpack = require('webpack');

// module.exports = function (config) {
//   config.set({
//     browsers: [ 'PhantomJS' ], //run in Chrome
//     singleRun: false, //just run once by default
//     frameworks: [ 'jasmine' ], //use the mocha test framework
//     files: [
//       'tests.webpack.js' //just load this file
//     ],
//     preprocessors: {
//       'tests.webpack.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
//     },
//     reporters: [ 'dots' ], //report results in this format
//     webpack: { //kind of a copy of your webpack config
//       devtool: 'inline-source-map', //just do inline source maps instead of the default
//       module: {
//         loaders: [
//           { test: /\.js$/, loader: 'babel-loader' }
//         ]
//       },
//       externals: {
//         jsdom: 'window',
//         'react/lib/ExecutionEnvironment': true,
//         'react/lib/ReactContext': 'window',
//         'text-encoding': 'window'
//       }
//     },
//     // webpackServer: {
//     //   noInfo: true //please don't spam the console when running in karma!
//     // },
//     plugins: [
//     require('karma-jasmine'),
//     // require('karma-spec-reporter'),
//     // require('karma-chrome-launcher'),
//     // require('karma-firefox-launcher'),
//     // require('karma-babel-preprocessor'),
//     // require('karma-requirejs'),
//     require('karma-phantomjs-launcher'),
//     require('karma-webpack')
//     ],
//   })
// };

// V2

// var webpackConfig = require('./webpack.config');
// webpackConfig.module.loaders = [
//   {
//     test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
//     loader: 'babel-loader'
//   }
// ];
// webpackConfig.module.postLoaders = [{
//   test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
//   loader: 'istanbul-instrumenter'
// }];

// var webpack = require('webpack');

// module.exports = function (config) {
//   config.set({
//     browsers: [ 'PhantomJS' ], //run in Chrome
//     singleRun: false, //just run once by default
//     frameworks: [ 'jasmine' ], //use the mocha test framework
//     files: [
//       'tests.webpack.js', //just load this file
//       'tests/components/index.test.js'
//     ],
//     preprocessors: {
//       'tests.webpack.js': [ 'babel' ], //preprocess with webpack and our sourcemap loader
//       'tests/components/index.test.js': [ 'babel' ]
//     },
//     babelPreprocessor: {
//       options: {
//         presets: ['es2015'],
//         sourceMap: 'inline',
//       },
//       filename: function (file) {
//         return file.originalPath.replace(/\.jsx$/, '.js');
//       },
//       sourceFileName: function (file) {
//         return file.originalPath;
//       }
//     },
//     reporters: [ 'spec' ], //report results in this format
//     // coverage what is that???
//     webpack: { //kind of a copy of your webpack config
//       devtool: 'inline-source-map',
//       module: {
//         loaders: [
//           { test: /\.js$/, loader: 'babel-loader' }
//         ]
//       }
//     },
//     webpackServer: {
//       noInfo: false //please don't spam the console when running in karma!
//     },
//     plugins: [
//     require('karma-jasmine'),
//     require('karma-spec-reporter'),
//     // require('karma-chrome-launcher'),
//     // require('karma-firefox-launcher'),
//     require('karma-babel-preprocessor'),
//     require('karma-requirejs'),
//     require('karma-phantomjs-launcher'),
//     require('karma-webpack')]
//   });
// };


var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ 'PhantomJS' ],

    singleRun: false,

    frameworks: [ 'jasmine' ],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack' ]
    },

    reporters: [ 'spec' ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
          {
            test: /\.json$/,
            loader: 'json',
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackServer: {
      noInfo: true
    },

    plugins: [
      require('karma-spec-reporter'),
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher')
    ]

  });
};