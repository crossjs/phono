/**
 * Description: Gruntfile.js
 * Author: crossjs <liwenfu@crossjs.com>
 * Date: 2014-12-23 16:28:54
 */

'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    server: {
      develop: {
        options: {
          config: false,
          release: false
        }
      }
    },

    jshint: {
      files: ['index.js', 'src/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    exec: {
      'spm-publish': 'spm publish',
      'spm-test': 'spm test'
    }

  });

  grunt.registerTask('test', ['jshint','exec:spm-test']);

  grunt.registerTask('publish', ['test', 'exec:spm-publish']);

  grunt.registerTask('default', ['server']);

};
