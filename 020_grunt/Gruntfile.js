


module.exports = function(grunt) {


	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-compass');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-mincss');
	// grunt.loadNpmTasks('grunt-exec');
	// grunt.loadNpmTasks('grunt-replace');
	// grunt.loadNpmTasks('grunt-ssh');

	// // 自作タスク
	// grunt.loadNpmTasks('grunt-compass-multiple');


	//
	grunt.initConfig({




// 			//----------------------------------------------------
// 			// watch
// 			//----------------------------------------------------
// 			watch: {
// 				css : {
// 					files: [
// 					        	'page/css/cmn/mxm.css/src/*.scss',
// 					        	'page/css/mixin.scss/src/*.scss',
// 					        	'page/css/orgn/scss/*.scss',
// 					        	'../stat/**/*.html',
// 					        	'page/js/**/*.js',
// 					        	'template/**/*.html',
// 					        	'../../moggmon-web/src/main/webapp/WEB-INF/views/tutorial/*.ftl'
// 					        ],
// 					tasks: ['concat:tmplateHTML', 'concat:css', 'concat:cssMixin','compassMultiple:all', 'concat:jsEquip', 'concat:jsDeck', 'concat:jsRing', 'concat:jsShop', 'concat:jsAvatar', 'concat:jsTutorial', 'concat:jsEquip', 'concat:jsMypage', 'concat:js', 'exec:rsync', 'exec:rsync2']
// 				},
// 				html : {
// 					files: [
// 					        	'../stat/**/*.html'
// 					        ],
// 					tasks: ['exec:rsync']
// 				},
// 				js : {
// 					files: [
// 								'page/js/cmn/mxm.js/src/*.js',
// 					        	'page/js/orgn/*.js'
// 					        ],
// 					tasks: ['concat:js']
// 				},
// 				ftl:{
// 					files: [
// 								'../../moggmon-web/src/main/webapp/WEB-INF/views/**/*.ftl'
// 					        ],
// 					tasks: ['concat:ftl']
// 				},
// 				rsync:{
// 					files: [
// 					        	'page/css/cmn/mxm.css/src/*.scss',
// 					        	'page/css/orgn/*.scss',
// 								'page/js/cmn/mxm.js/src/*.js',
// 					        	'page/js/orgn/*.js',
// 								'../../moggmon-web/src/main/webapp/WEB-INF/views/**/*.ftl'
// 					        ],
// 					tasks: ['concat:css','compass','concat:js','concat:ftl','exec']
// 				}
// 			},






// 			//----------------------------------------------------
// 			// concat
// 			//----------------------------------------------------
// 			concat: {

// 				css : {
// 					src : [
// 					       'page/css/cmn/mxm.css/src/*.scss'
// 					       ],
// 					dest : 'page/css/cmn/mxm.css/_temp/mxm.scss'
// 				},

// 				cssMixin : {
// 					src : [
// 					       'page/css/mixin.scss/src/*.scss'
// 					       ],
// 					dest : 'page/css/mixin.scss/_temp/_mixin.scss'
// 				},
// 				tmplateHTML: {
// 					src: ['template/parts/*.html'],
// 					dest: 'template/index.html'
// 				},
// 				js : {
// 					src : [
// 					       'page/js/cmn/mxm.js/src/*'
// 					       ],
// 					dest : '../stat/page/js/cmn/mxm.js'
// 				},
// 				jsDeck : {
// 					src : ['page/js/orgn/deck.js'],
// 					dest : '../stat/page/js/orgn/deck.js'
// 				},
// 				jsEquip : {
// 					src : ['page/js/orgn/equip.js'],
// 					dest : '../stat/page/js/orgn/equip.js'
// 				},
// 				jsRing : {
// 					src : ['page/js/orgn/ring.js'],
// 					dest : '../stat/page/js/orgn/ring.js'
// 				},
// 				jsShop : {
// 					src : ['page/js/orgn/shop.js'],
// 					dest : '../stat/page/js/orgn/shop.js'
// 				},
// 				jsAvatar : {
// 					src : ['page/js/orgn/avatar.js'],
// 					dest : '../stat/page/js/orgn/avatar.js'
// 				},
// 				jsTutorial : {
// 					src : ['page/js/orgn/tutorial/*.js'],
// 					dest : '../stat/page/js/orgn/tutorial.js'
// 				},
// 				jsEquip : {
// 					src : ['page/js/orgn/equip/*.js'],
// 					dest : '../stat/page/js/orgn/equip.js'
// 				},
// 				jsMypage : {
// 					src : ['page/js/orgn/mypage.js/src/*.js'],
// 					dest : '../stat/page/js/orgn/mypage.js'
// 				},

// 				ftl : '../../moggmon-web/src/main/webapp/WEB-INF/views/**/*.ftl'
// 			},




// 			//----------------------------------------------------
// 			// JS
// 			//----------------------------------------------------

// 			//--------------------------
// 			// JS hint
// 			//--------------------------
// 			jshint: {

// 			    options: {

// 			      //ループブロックと条件ブロックを常に中括弧で囲うことを強制します
// 			      curly: true,

// 			      //明示的に宣言されていない変数の使用を禁止します｡打ち間違いやメモリリークを発見するのに大変便利です
// 			      undef: true,

// 			      //変数が利用されていない場合に警告します
// 			      unused: true,

// 			      //セミコロンがない場合に警告を出さないようにします
// 			      asi: true,

// 			      //[]表記に対する警告を出さないようにします
// 			      sub : true,

// 			      //Missing space after 'function' エラーを無くす
// 			      white : false,

// 			      //consoleや alertを定義済みにします
// 			      devel : true,

// 			      //タブとスペースを混ぜて見た目を整えている場合に警告を出さないようにします
// 			      smarttabs : true,

// 			      //ブラウザのグローバルオブジェクトを定義済みとします
// 			      browser : true,

// 			      //細かいエラー
// 			      /*
// 			      lastsemic : true,
// 			      laxcomma : true,
// 			      loopfunc : true,
// 				  */

// 			      //
// 			      globals: {
// 			        jQuery: true,
// 			        mxm : true,
// 			        $ : true
// 			      }

// 			    },

// 			    uses_defaults: ['page/js/cmn/mxm.js/src/*.js']

// 			},



// 			//--------------------------
// 			// JS min
// 			//--------------------------
// 			uglify : {

// 				options: {
// 					mangle: {toplevel: false},
// 					squeeze: {dead_code: false},
// 					codegen: {quote_keys: true}
// 				},

// 				dist : {
// 					src : ['../stat/page/js/cmn/mxm.js'],
// 					dest : '../stat/page/js/cmn/mxm.min.js'
// 				}

// 			},








// 			//----------------------------------------------------
// 			// CSS
// 			//----------------------------------------------------

// 			//--------------------------
// 			// CSS compass
// 			//--------------------------
// 			compass: {
// 				options : {
// 		        	imagesDir: '',
// 		        	// asset_cache_buster: 'none',
// 		        	time: true
// 				},
// 			    cmn : {
// 			      options: {
// 			        sassDir:        'page/css/cmn/mxm.css/_temp/',
// 			        cssDir: '../stat/page/css/cmn/'
// 			      }
// 			    },

// 			    orgn : {
// 			      options: {
// 			        sassDir:        'page/css/orgn/scss',
// 			        cssDir: '../stat/page/css/orgn/'
// 			      }
// 			    }

// 			},


// 			//--------------------------
// 			// CSS min
// 			//--------------------------
// 			mincss: {
// 			  compress: {
// 			    files: {
// 			      '../stat/page/css/cmn/mxm.min.css' : [
// 			            '../stat/page/css/cmn/mxm.css'
// 			      ]
// 			    }
// 			  }
// 			},


// 			//--------------------------
// 			// Replace：ローカルとサーバー上で静的ファイルの場所が違うので、CSS内のパスをローカル用に書き換える
// 			//--------------------------
// 			replace: {
// 				imgPathInCSSReplace: {
// 					variables: {
// 						'http://stg.stat.sp.ameba.jp/mxm/ver01/': '/static/'
// 					},
// 					files: {
// 						'../static/page/css/': ['**/.css']
// 					}
// 				}
// 			},


// 			//--------------------------
// 			// exec
// 			//--------------------------
// 			exec:{
// 				login:{
// 					command: "./grunt-rsync.sh",
// 					stdout: true
// 				},
// 				rsync:{
// 					command: "rsync -av /Users/munesada_yohei/Documents/workspace/mogg_monster/moggmon_static/stat/ /Users/munesada_yohei/Documents/workspace/mogg_monster/moggmon_static/static/",
// 					stdout: true
// 				},
// 				rsync2:{
// 					command: "rsync -av /Users/munesada_yohei/Documents/workspace/mogg_monster/moggmon_static/ /Users/munesada_yohei/Dropbox/03_workspace_biz/mogg_monster/moggmon_static/",
// 					stdout: true
// 				}
// 			},

// 			//--------------------------
// 			// SFTP
// 			//--------------------------
// 			sftp: {
// 				tutorialJS: {
// 					files: {
// 						'../stat/page/js/orgn/': '../stat/page/js/orgn/tutorial.js'
// 					},
// 					options: {
// 						path: '/usr/local/ameba_sg_moggmon_static/stat/page/js/orgn/',
// 						host: '172.28.152.80',
// 						username: 'munesada_yohei',
// 						password: 'ym56909885A',
// 						srcBasePath: '../stat/page/js/orgn/',
// 					}
// 				},
// 				tutorialCSS: {
// 					files: {
// 						'../stat/page/css/orgn/': '../stat/page/css/orgn/tutorial.css'
// 					},
// 					options: {
// 						path: '/usr/local/ameba_sg_moggmon_static/stat/page/css/orgn/',
// 						host: '172.28.152.80',
// 						username: 'munesada_yohei',
// 						password: 'ym56909885A',
// 						srcBasePath: '../stat/page/css/orgn/',
// 					}
// 				},
// 				tutorialFtls: {
// 					files: {
// 						'../../moggmon-web/src/main/webapp/WEB-INF/views/tutorial/': '../../moggmon-web/src/main/webapp/WEB-INF/views/tutorial/*.ftl'
// 					},
// 					options: {
// 						path: '/usr/local/jetty/webapp/WEB-INF/views/tutorial/',
// 						host: '172.28.152.80',
// 						username: 'munesada_yohei',
// 						password: 'ym56909885A',
// 						srcBasePath: '../../moggmon-web/src/main/webapp/WEB-INF/views/tutorial/',
// 					}
// 				},
// 			},





// 			//--------------------------
// 			// compass comile at multi threads.
// 			//--------------------------
// 			compassMultiple: {
// 				options : {
// 		        	imagesDir: '../stat100/ver01',
// 		        	time: true,
// 				},
// /*
// 		    cmn : {
// 		      options: {
// 		        sassDir: 'page/css/cmn/mxm.css/_temp/',
// 		        cssDir: '../stat/page/css/cmn/'
// 		      }
// 		    },
// 		    orgn : {
// 		      options: {
// 		        sassDir: 'page/css/orgn/scss',
// 		        cssDir: '../stat/page/css/orgn/'
// 		      }
// 		    },
// */
// 		    all: {
// 		    	options: {
// 		    		multiple: [
// 		    			{
// 			    			// common
// 				        sassDir: 'page/css/cmn/mxm.css/_temp/',
// 				        cssDir: '../stat/page/css/cmn/'
// 		    			},{
// 		    				// orginal
// 				        sassDir: 'page/css/orgn/scss',
// 				        cssDir: '../stat/page/css/orgn/'
// 		    			}
// 		    		]
// 		    	}
// 		    },
// /*
// 				foo: [1,2,3],
// 				bar: 'hello world',
// 				baz: false
// */
// 			},









	});


	grunt.registerTask('default', []);

	// grunt.registerTask('default', ['concat', 'compass', 'exec']);

	// grunt.registerTask('markup', ['watch:css']);













};