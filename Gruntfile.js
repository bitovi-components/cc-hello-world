module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	grunt.loadNpmTasks("testee");
	grunt.loadNpmTasks("steal-tools");
	grunt.config.init({
		pkg: grunt.file.readJSON("package.json"),
		stealBuild: {
			demo: {
				options: {
					system: {
						config: __dirname + "/stealconfig.js",
						main: "demo",
						bundlesPath: "./dist/"
					},
					buildOptions: {
						minify: true,
						bundleSteal: !grunt.option("standalone")
					}
				}
			},
			component: {
				options: {
					system: {
						config: __dirname + "/stealconfig.js",
						main: "cc-hello-world",
						bundlesPath: "./dist/"
					},
					buildOptions: {
						minify: true,
						bundleSteal: false
					}
				}
			}
		},
		connect: {
			server: {
				options: {
					hostname: "localhost",
					port: grunt.option("port") || 8125,
					debug: true
				}
			},
			test: {
				options: {
					hostname: "localhost",
					port: 3996,
					debug: false
				}
			}
		},
		testee: {
			phantom: ["test.html"]
		}
	});
	grunt.registerTask("build", ["stealBuild:demo", "stealBuild:component"]);
	grunt.registerTask("test", ["connect:test", "testee:phantom"]);
	grunt.registerTask("serve", ["connect:server:keepalive"]);
};
