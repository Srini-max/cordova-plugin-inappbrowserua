var replace = require("replace");
var path = require("path");

// Patch for these issues, on top of git master:
//    https://issues.apache.org/jira/projects/CB/issues/CB-13990
// Until a new version is published to npm with the fixes

module.exports = function(context) {

	var iosFile = path.resolve(context.opts.projectRoot + "/platforms/ios/Fareclock/Plugins/cordova-plugin-inappbrowser", "CDVUIInAppBrowser.m");

	var filesToPatch = [
		iosFile,
		path.resolve(context.opts.projectRoot + "/platforms/android/app/src/main/java/org/apache/cordova/inappbrowser", "InAppBrowser.java")
	];

	replace({
	    regex: "\"OverrideUserAgent\"",
	    replacement: "\"InAppBrowserOverrideUserAgent\"",
	    paths: filesToPatch,
	    recursive: false,
	    silent: true,
	});
};