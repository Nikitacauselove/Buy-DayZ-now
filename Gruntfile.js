module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                src: 'src/index.html',
                dest: 'build/main.html'
            },
            fonts: {
                expand: true,
                cwd: 'src',
                src: 'fonts/*',
                dest: 'build/'
            },
            images: {
                expand: true,
                cwd: 'src',
                src: 'images/*',
                dest: 'build/'
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: ['node_modules/normalize.css/normalize.css', 'src/index.css'],
                    dest: 'build/main.css',
                }]
            }
        },
        uglify: {
            build: {
                src: 'src/index.js',
                dest: 'build/main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'cssmin', 'uglify']);
};