module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      dist: {
        options: {
          style: 'compact',
          precision: 8,
        },
        files: {
          'dist/css/main.css': 'src/sass/main.scss',
        },
      },
      minify: {
        options: {
          style: 'compressed',
          precision: 8,
        },
        files: {
          'dist/css/main.min.css': 'src/sass/main.scss',
        },
      },
    },

    styledown: {
      build: {
        files: {
          'dist/_complex.html': ['src/styleguide/complex.md'],
          'dist/_basics.html': ['src/styleguide/basics.md'],
        },
        options: {
          title: 'Style Guide',
          css: [
            'css/main.css',
            'css/styleguide.css',
          ],
          js: [
            'js/jquery-1.11.3.min.js',
            'js/isotope.pkgd.min.js',
            'js/typeahead.bundle.min.js',
            'js/jquery.placeholder.min.js',
            'js/main.js',
            'js/styleguide.js',
          ],
          body:
            '<div style="margin: 2rem;">' +
            '<h2>BaByliss</h2><h1>Style guide</h1>' +
            '<div sg-content></div>' +
            '<p class=center>&copy; Trepka</p></div>',
        },
      },
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['> 1%']}),
        ],
      },
      dist: {
        src: 'dist/css/*.css',
      },
    },

    watch: {
      options: {
        livereload: true,
      },
      htmls: {
        files: ['dist/*.html'],
      },
      markdown: {
        files: ['src/**/*.md'],
        tasks: ['styledown'],
      },
      scripts: {
        files: ['dist/**/*.js'],
      },
      styles: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass', 'postcss'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-styledown');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass', 'postcss', 'styledown', 'watch']);
};
