module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	grunt.config.init({
		pkg: grunt.file.readJSON("package.json"),
		stealBuild: {
			default: {
				options: {
					system: {
						config: __dirname + "/stealconfig.js",
						main: "cc-hello-world",
						bundlesPath: "./dist/"
					},
					buildOptions: {
						minify: true,
						bundlesteal: grunt.option("standalone")
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
			}
		}
	});
	grunt.registerTask("serve", ["connect:server:keepalive"]);
};
