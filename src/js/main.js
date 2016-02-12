var App = console.log('test browserify');

// browserify uses commonjs pattern (module.exports at bottom) to define
// what the file exports. Goes through all utilized files and wraps it up
// into its own context. Therefore, the exported objects will not be global
module.exports = App;
