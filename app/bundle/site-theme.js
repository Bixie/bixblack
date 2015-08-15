/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6)
	module.exports.template = __webpack_require__(7)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = {

	        section: {
	            label: 'Theme',
	            icon: 'pk-icon-large-brush',
	            priority: 15
	        },

	        data: function () {
	            return window.$theme;
	        },

	        filters: {
	            themeStyles: function (value) {
	                var vm = this;
	                return value.map(function (style) {
	                    return {value: style, text: vm.$trans(_.startCase(style))}
	                });
	            }
	        },

	        methods: {


	            save: function(e) {
	                e.preventDefault();

	                var config = _.omit(this.config, ['positions', 'menus', 'widget', 'styles']);

	                this.$http.post('admin/system/settings/config', {name: this.name, config: config}, function () {
	                    UIkit.notify(this.$trans('Settings saved.'), '');
	                }).error(function (data) {
	                    UIkit.notify(data, 'danger');
	                });

	            }

	        }

	    };

	    window.Site.components['site-theme'] = module.exports;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n        <div data-uk-margin>\n            <h2 class=\"uk-margin-remove\">{{ 'Theme' | trans }}</h2>\n        </div>\n        <div data-uk-margin>\n            <button class=\"uk-button uk-button-primary\" v-on=\"click: save\">{{ 'Save' | trans }}</button>\n        </div>\n    </div>\n\n    <div class=\"uk-form uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Style' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select class=\"uk-form-width-large\" v-model=\"config.style\" options=\"options.styles | themeStyles\"></select>\n            </div>\n        </div>\n\n    </div>";

/***/ }
/******/ ]);