module.exports = function (grunt) {

    /*
    Avviando Stellaris da Steam, la cartella di installazione del mod è:
        - Windows: %USERPROFILE%\Documents\Paradox Interactive\Stellaris\mod\
        - GNU/Linux: ~/.local/share/Paradox Interactive/Stellaris/mod/
        - Mac: ~/Documents/Paradox Interactive/Stellaris/mod/
    */
    const os = require('os');
    let testingModFolder = os.homedir() + '/.local/share/Paradox Interactive/Stellaris/mod';
    if (os.platform() === "win32" || process.platform === "darwin") {
        testingModFolder = os.homedir() + '/Documents/Paradox Interactive/Stellaris/mod';
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            init: ['build/**'],
            complete: ['build/dist/*', '!build/dist/<%= pkg.name %>-<%= pkg.version %>.zip']
        },
        copy: {
            release:
            {
                expand: true,
                cwd: 'src/mod',
                src: '**',
                dest: 'build/'
            },
            complete:
            {
                src: 'src/resources/stellaris-italian-translation-release.mod',
                dest: 'build/dist/stellaris-italian-translation.mod'
            },
            dev:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'src/mod',
                        src: '**',
                        dest: 'build/dist/stellaris-italian-translation'
                    },
                    {
                        src: 'src/resources/stellaris-italian-translation-dev.mod',
                        dest: 'build/dist/stellaris-italian-translation.mod'
                    },
                    {
                        src: 'src/resources/logo.jpg',
                        dest: 'build/dist/stellaris-italian-translation/logo.jpg'
                    }
                ]
            },
            testing: {
                expand: true,
                cwd: 'build/dist',
                src: '**',
                dest: testingModFolder
            }
        },
        compress: {
            build: {
                options: {
                    archive: 'build/dist/<%= pkg.name %>.zip'
                },
                files: [
                    { expand: 'true', cwd: 'build', src: ['**'], dest: './' }
                ]
            },
            release: {
                options: {
                    archive: 'build/dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [
                    { expand: 'true', cwd: 'build/dist', src: ['**'], dest: './' }
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean:init', 'copy:release', 'compress:build', 'copy:complete', 'compress:release', 'clean:complete']);
    grunt.registerTask('dev', ['clean:init', 'copy:dev', 'copy:testing']);

};