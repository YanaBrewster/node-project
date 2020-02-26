module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // grunt uglify
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },
    // grunt-contrib-watch v1.1.0
    watch: {
      all: {
        files: ['sass/style.scss','css/style.css', 'public/js/script.js'],
        tasks: ['sass','csslint','jshint'],

      },
    },
    // grunt-contrib-jshint
    jshint: {
      all: ['Gruntfile.js', 'js/script.js'],
      options:{
        esversion: 6
      }
    }
  });

  // Load the plugin that provides tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['watch'], ['jshint']);
  grunt.registerTask('ugly', ['uglify']);
};
