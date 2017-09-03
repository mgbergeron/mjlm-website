module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        /* grab the Bootstrap js and combine it with my custom scripts
        The goal is to limit the number of http requests to increase load time
         */
        concat: {
            options: {
                stripBanners: false,
                sourceMap: true,
                banner: '',
            },
            scripts: {
                src: ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/js/functions.js'],
                dest: 'build/js/scripts.js',
            },
        },

        /* Now minify the scripts */
        uglify: {
            scripts: {
                src: ['build/js/scripts.js'], //input
                dest: 'build/js/scripts.min.js' //output
            },
        },




        /* Convert the Sass into CSS */
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/css/style.css': 'src/sass/style.scss'
                }
            }
        },


        /* Make sure the CSS accounts for browser inconsistency */
        postcss: {
            options: {
                map: true,
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
                    require('postcss-flexbugs-fixes'),
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'build/css/*.css'
            }
        },


        /* Auto Update the scripts and styles when working */
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['src/sass/*.scss'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false,
                },
            },
        },

    });
    // END GRUNT


    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss']);

};