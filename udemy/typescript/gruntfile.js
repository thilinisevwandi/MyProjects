module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.initConfig({
        ts: {
            main: {
                src: ['hello.ts'],
                dest:'javascript/'
            }
        }
    })

    grunt.registerTask('default' , ['ts'])
}