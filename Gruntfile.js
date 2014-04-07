module.exports = function(grunt) {
    'use strict';

    //display times
    require('time-grunt')(grunt);

    //load npm tasks
    require('load-grunt-tasks')(grunt);

    var port = 4444;

    // Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),        
        
        connect : {
            dev : {
                options: {
                    port: port,
                    base: '.',
                    livereload: true
                }
            } 
        },
        
        watch : {
            dev : {
                files : ['js/**/*.js', 'css/**/*.css', 'index.html'],
                options: {
                    livereload : true
                }
            }
        },

        open : {
            dev : {
                path : 'http://localhost:' + port,
                app : 'firefox -p dev -no-remote'
            }
        },

        qunit : {
            dist : ['test/**/*.html']
        }
    });

    grunt.registerTask('dev', ['connect:dev', 'open:dev', 'watch:dev']);
    grunt.registerTask('test', ['qunit']);
};
