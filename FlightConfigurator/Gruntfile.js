module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'src/client/js/**/*.js'],
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				node: true,
				undef: true,
				validthis: true,
				esversion: 6,
				globals: {
					jQuery: true,
					"$": true,
					"ol": true,
					"module": true,
					"console": true,
					"Handlebars": true,
				},
			},
		},
		copy: {
			build: {
				files: [
					{
						expand: true,
						src: 'config.json',
						dest: 'public/'
					}
				]
			},
			prod: {
				files: [
					{
						src: 'src/client/index.html',
						dest: 'public/index.html',
					},
				],
			},
			server: {
				files: [
      		{
						expand: true,
						cwd: 'src/server/',
						src: ['**'],
						dest: 'dist/server/'
					},
				],
			},
			dev: {
				files: [
					{
						src: 'tmp/js/vendor.js',
						dest: 'public/js/vendor.js',
					},
					{
						src: 'src/client/index-dev.html',
						dest: 'public/index.html'
					},
				],
			},
		},
	  less: {
	    prod: {
	      options: {
	        style: 'expanded'
	      },
	      files: {
	        'tmp/css/style.css': 'src/client/css/style.less',
	      }
	    },
			dev: {
	      options: {
					sourceMap: true,
					sourceMapFileInline: true,
	        style: 'expanded'
	      },
	      files: {
	        'public/css/app.css': 'src/client/css/style.less',
	      }
			}
	  },
		browserify: {
			prod: {
				files: {
					'tmp/js/app.js': ['src/client/js/app.js'],
				},
				options: {
					"transform": [["babelify", { "presets": ["es2015", "react"] }]],
				},
			},
			dev: {
				files: {
					'public/js/app.js': ['src/client/js/app.js'],
				},
				options: {
					browserifyOptions: {
						debug: true,
					},
					"transform": [["babelify", { "presets": ["es2015", "react"] }]],
					watch: true,
					keepAlive: true,
				},
			},
		},
		concat: {
			build : {
				files: {
					'tmp/js/vendor.js': [
						'node_modules/jquery/dist/jquery.js',
						'node_modules/bootstrap/dist/js/bootstrap.js',
						'node_modules/moment/moment.js'
					],
				},
			},
		},
 	 	uglify: {
			options: {
					mangle: {
						except: ['jQuery', 'initialize'],
					},
			},
			prod: {
				src: [ 'tmp/js/vendor.js', 'tmp/js/app.js' ],
				dest: 'public/js/app.js',
			},
		},
		cssmin: {
			prod: {
				src: [
					'node_modules/bootstrap/dist/css/bootstrap.css',
					'node_modules/bootstrap-daterangepicker/daterangepicker.css',
					'node_modules/openlayers/css/ol.css',
					'node_modules/font-awesome/css/font-awesome.css',
					'tmp/css/style.css'
				],
				dest: 'public/css/app.css',
			},
			dev: {
				src: [
					'node_modules/bootstrap/dist/css/bootstrap.css',
					'node_modules/bootstrap-daterangepicker/daterangepicker.css',
					'node_modules/openlayers/css/ol.css',
					'node_modules/font-awesome/css/font-awesome.css',
				],
				dest: 'public/css/vendor.css',
			}
		},
		watch: {
			'css': {
				files: ['src/client/**/*.less'],
				tasks: ['less:dev'],
			},
			'livereload': {
				files: ['public/**/*'],
		    options: {
		      livereload: true
		    },
			}
		},
		execute: {
			dev: {
				src: ['dist/server/server.js']
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			dev: {
				tasks: ['browserify:dev', 'watch:css', 'watch:livereload', 'execute:dev']
			}
		}
	});

	// JIT Grunt requires
	require('jit-grunt')(grunt);

	grunt.task.registerTask('check', ['jshint:all']);
	grunt.task.registerTask('build', ['copy:build', 'concat:build', 'copy:server']);
	grunt.task.registerTask('prod', ['build', 'browserify:prod', 'less:prod', 'copy:prod', 'uglify:prod', 'cssmin:prod']);
	grunt.task.registerTask('dev:build', ['build', 'less:dev', 'cssmin:dev', 'copy:dev']);
	grunt.task.registerTask('dev:watch', ['concurrent:dev']);
	grunt.task.registerTask('dev', ['dev:build', 'dev:watch']);
	grunt.task.registerTask('default', ['dev']);

};
