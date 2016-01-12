'use strict'

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    clean: {
      dev: {
        src: 'build/'
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', 'css/*.css', 'css/*.css.map', 'views/**/*.html', 'components/*.html', 'components/*.js', 'images/*.*', 'data/*.*'],
        dest: 'build/',
        filter: 'isFile'
      },
      strap: {
        expand: true,
        cwd: 'bower_components',
        src: ['**/*'],
        dest:'build/bower_components',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },

      angulartest: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['test/angular/**/*test.js'],
        dest: 'test/angular-testbundl.js'
      },

      simplemocha: {
        server: {
          src: ['test/mocha/api/**/*.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'app/css/core.css': 'app/sass/core.scss'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    express: {
      dev: {
        options: {
          options: 'server.js',
          background: true
        }
      }
    },

    watch: {
      angulartest: {
        files: ['app/js/**/*.js', 'app/index.html', 'app/views/**/*.html'],
        tasks: ['browserify:angulartest', 'karma:unit'],
        options: {
          spawn: false
        }
      },
      express: {
        files: ['app/js/**/*.js', 'app/index.html', 'app/views/**/*.html', 'app/sass/*.scss', 'server.js', 'models/*.js', 'routes/*.js'],
        tasks: ['buildtest', 'express:dev'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'sass', 'browserify:dev', 'copy:dev', 'copy:strap']);
  grunt.registerTask('angulartest', ['browserify:angulartest', 'karma:unit']);
  grunt.registerTask('angulartestwatch', ['angulartest', 'watch:angulartest']);
  grunt.registerTask('test', ['angulartest', 'simplemocha']);
  grunt.registerTask('buildtest', ['test', 'build:dev']);
  grunt.registerTask('default', ['test', 'watch:express']);
  grunt.registerTask('build', ['clean:dev', 'sass', 'browserify:dev', 'copy:dev', 'copy:strap', 'watch:express']);
};
