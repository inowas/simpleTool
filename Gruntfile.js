module.exports = function (grunt) {
  //Initializing the configuration object
  grunt.initConfig({
    // Task configuration
    less: {
      development: {
        options: {
          compress: true, //minifying the result
        },
        files: {
          //compiling main.less into style.css
          './dist/css/style.min.css': './src/less/main.less'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: './dist/css/style.min.css'
      }
    },
    copy: {
      html: {
        expand: true,
        src: './src/*.html',
        dest: './dist/',
        flatten: true
      },
      img: {
        expand: true,
        src: './src/img/*',
        dest: './dist/img/',
        flatten: true
      }
    },
    watch: {
      less: {
        //watched files
        files: ['./src/less/*.less'],
        //tasks to run
        tasks: ['less', 'postcss'],
        options: {
          livereload: true
        }
      },
      copy: {
        //watched files
        files: ['./src/*.html'],
        //tasks to run
        tasks: ['copy'],
        options: {
          livereload: true
        }
      }
    }
  });
  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-postcss');
  // Task definition
  grunt.registerTask('default', ['watch']);
};
