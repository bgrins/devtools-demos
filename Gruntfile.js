
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        browser: true,
        sub: true,
        undef: true,
        unused: true
      },
      all: ['shared/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);

};