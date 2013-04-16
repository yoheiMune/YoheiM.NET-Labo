'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function(connect, point) {
	return connect.static(path.resolve(point));
};


module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');

	grunt.initConfig({

		connect: {
			livereload: {
				options: {
					port: 9001,
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, '.')];
					}
				}
			}
		},
		regarde: {
			fred: {
				files: '*.html',
				tasks: ['livereload']
			}
		}

	});


	grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
	// grunt.registerTask('default', ['livereload-start']);
	// grunt.registerTask('default', []);
};
