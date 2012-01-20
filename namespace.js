/**
 * I declare a namespace if it doesn't already exist.
 *
 * Usage:
 *
 *     var ns = namespace('com.mycompany.mypackage');
 *
 * ...and then:
 *
 * <code>
 *     ns.myfunction = function() { ... };
 *     ns.myfunction();
 * </code>
 *
 * OR:
 *
 * <code>
 *     com.mycompany.mypackage.myfunction = function() { ... };
 *     com.mycompany.mypackage.myfunction();
 * </code>
 *
 * @param {String} ns The namespace to create/use
 * @param {Object} [parent] The parent object onto which this namespace will be attached.
 * @return {Object} The namespace object you specify in the ns param
 * @type Boolean
 */
function namespace(ns, parent) {

	if(!parent) {
		parent = window;
	} else {
		// Parent must be an object
		if(typeof(parent) != 'object') {
			return false;
		}
	}

	var names = ns.split('.');

	if(!names.length) {
		return true;
	}

	var name = names[0];

	if(!parent[name]) {
		parent[name] = {};
	}

	if(names.length > 1) {
		names.shift();
		return namespace(names.join('.'), parent[name]);
	}

	return parent[name];
}