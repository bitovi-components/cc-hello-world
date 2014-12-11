System.config({
	baseURL: "./",
	map: {
		"jquery/jquery": "jquery",
		"can/util/util.js": "can/util/jquery/jquery.js",
		util: "bower_components/component-utils"
	},
	paths: {
		jquery: "bower_components/jquery/dist/jquery.js",
		mocha: "bower_components/mocha/mocha.js",
		"can/*": "bower_components/canjs/*.js",
		can: "bower_components/canjs/can.js"
	},
    meta: {
        jquery: { exports: "jQuery" },
        mocha: { exports: "mocha" }
    },
	ext: {
		css: "bower_components/steal/css",
		less: "bower_components/steal/less",
		stache: "can/view/stache/system"
	}
});
System.buildConfig = {
	map: {
		"can/util/util": "can/util/domless/domless"
	}
};
