'use strict';

steal.config({
  map: {
    'jquery/jquery': 'jquery'
  },
  paths: {
    'steal/*' : '../*.js',
    '@traceur': 'traceur/traceur.js',
    'can/*': 'bower_components/canjs/*.js',
    'jquery': 'bower_components/jquery/dist/jquery.js'
  },
  meta: {
    jquery: {
      exports: 'jQuery',
      format: 'global'
    }
  },

  ext: {
    'mustache': 'can/view/mustache/system'
  }
});

System.buildConfig = {map: {'can/util/util' : 'can/util/domless/domless'}};
