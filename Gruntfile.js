module.exports = function (grunt) {
    grunt.initConfig({
        //Task 1
        browserify: {
            forArithmetic: {
                src: [],
                dest: 'dist/arithmetic.browserified.js',
                options: {
                    require: ['arithmetics']
                }
            }
        },
        //Task 2
        concat: {
            'dist/bundle.js': ['dist/arithmetic.browserified.js', 'dev/my-script.js']
        }
    });
    grunt.registerTask('default', ['browserify','concat']);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');
};
