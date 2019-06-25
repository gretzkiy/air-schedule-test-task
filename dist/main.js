/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if ( true && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {}
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */
  function primitiveHasOwnProperty (primitive, propName) {  
    return (
      primitive != null
      && typeof primitive !== 'object'
      && primitive.hasOwnProperty
      && primitive.hasOwnProperty(propName)
    );
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          intermediateValue = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = (
                hasProperty(intermediateValue, names[index]) 
                || primitiveHasOwnProperty(intermediateValue, names[index])
              );

            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];

          /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) {
          value = intermediateValue;
          break;
        }

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
    var tokens = cache[cacheKey];

    if (tokens == null)
      tokens = cache[cacheKey] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `tags` argument is given here it must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   */
  Writer.prototype.render = function render (template, view, partials, tags) {
    var tokens = this.parse(template, tags);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template, tags);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, tags) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, tags);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials, tags) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value, tags), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '3.0.1';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer. If the optional `tags` argument is given here it must be an
   * array with two string values: the opening and closing tags used in the
   * template (e.g. [ "<%", "%>" ]). The default is to mustache.tags.
   */
  mustache.render = function render (template, view, partials, tags) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials, tags);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_DepartureView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/DepartureView */ "./src/views/DepartureView.js");
/* harmony import */ var _views_ArrivalView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ArrivalView */ "./src/views/ArrivalView.js");
/* harmony import */ var _views_SearchView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/SearchView */ "./src/views/SearchView.js");
/* harmony import */ var _views_DelaysView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/DelaysView */ "./src/views/DelaysView.js");
/* harmony import */ var _modules_Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Router */ "./src/modules/Router.js");
/* harmony import */ var _templates_base_mustache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/base.mustache */ "./src/templates/base.mustache");
/* harmony import */ var _templates_base_mustache__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_base_mustache__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_search_mustache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/search.mustache */ "./src/templates/search.mustache");
/* harmony import */ var _templates_search_mustache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_search_mustache__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_clock_mustache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/clock.mustache */ "./src/templates/clock.mustache");
/* harmony import */ var _templates_clock_mustache__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_clock_mustache__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_Clock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Clock */ "./src/modules/Clock.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_10__);












// eslint-disable-next-line no-console
if (window.location.hostname !== 'localhost') console.log = () => { };

const root = document.getElementById('root');

const navSection = document.createElement('section');
navSection.dataset.sectionName = 'nav';

const div = document.createElement('div');
div.innerHTML = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(_templates_base_mustache__WEBPACK_IMPORTED_MODULE_6___default.a, {}, {
    search: _templates_search_mustache__WEBPACK_IMPORTED_MODULE_7___default.a,
    clock: _templates_clock_mustache__WEBPACK_IMPORTED_MODULE_8___default.a,
});

navSection.appendChild(div.firstChild);
root.appendChild(navSection);

window.router = new _modules_Router__WEBPACK_IMPORTED_MODULE_5__["default"](root);
window.router
    .register('/', _views_DepartureView__WEBPACK_IMPORTED_MODULE_1__["default"])
    .register('/departure', _views_DepartureView__WEBPACK_IMPORTED_MODULE_1__["default"])
    .register('/arrival', _views_ArrivalView__WEBPACK_IMPORTED_MODULE_2__["default"])
    .register('/delays', _views_DelaysView__WEBPACK_IMPORTED_MODULE_4__["default"])
    .register('/search', _views_SearchView__WEBPACK_IMPORTED_MODULE_3__["default"]);

window.router.start();

const searchButton = document.getElementsByClassName('search__button')[0];
searchButton.addEventListener('click', event => {
    event.preventDefault();
    const searchInput = document.getElementsByClassName('search__input')[0];
    const searchQuery = searchInput.value;
    searchInput.value = '';
    window.router.open('/search', searchQuery);
});

Object(_modules_Clock__WEBPACK_IMPORTED_MODULE_9__["default"])('clock');


/***/ }),

/***/ "./src/modules/Clock.js":
/*!******************************!*\
  !*** ./src/modules/Clock.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startClock; });
function checkTime(_i) {
    let i = _i;
    if (i < 10) {
        i = `0${i}`;
    }
    return i;
}

function startClock(divId) {
    const today = new Date();
    const hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById(divId).innerHTML = `${hh}:${mm}:${ss}`;
    setTimeout(() => {
        startClock(divId);
    }, 500);
}


/***/ }),

/***/ "./src/modules/Router.js":
/*!*******************************!*\
  !*** ./src/modules/Router.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
class Router {
    constructor(root) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = {};
        this.root = root;

        Router.__instance = this;
    }

    /**
     * @param {string} path
     * @param {BaseView} View
     */
    register(path, View) {
        this.routes[path] = {
            View,
            view: null,
            el: null,
        };
        return this;
    }

    open(path, params) {
        const route = this.routes[path];

        if (!route) {
            this.open('/');
            return;
        }

        if (route.View === null) {
            this.open('/');
            return;
        }

        if (window.location.pathname !== path) {
            window.history.pushState(
                null,
                '',
                path,
            );
        }

        const { View } = route;
        let { view, el } = route;

        if (!el) {
            el = document.createElement('section');
            this.root.appendChild(el);
        }

        if (!view) {
            view = new View(el);
        }

        if (!view.active) {
            Object.values(this.routes).forEach(({ view }) => {
                if (view && view.active) {
                    view.hide();
                }
            });
        }
        view.show(params);
        this.routes[path] = { View, view, el };
    }

    start() {
        this.root.addEventListener('click', event => {
            if (!(event.target instanceof HTMLAnchorElement)) {
                return;
            }

            event.preventDefault();
            const link = event.target;

            console.log({
                pathname: link.pathname,
            });

            this.open(link.pathname);
        });

        window.addEventListener('popstate', () => {
            const currentPath = window.location.pathname;
            this.open(currentPath);
        });

        const currentPath = window.location.pathname;

        this.open(currentPath);
    }
}


/***/ }),

/***/ "./src/modules/Schedule.js":
/*!*********************************!*\
  !*** ./src/modules/Schedule.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Schedule; });
class Schedule {
    constructor() {
        if (Schedule.__instance) {
            return Schedule.__instance;
        }

        this.schedule = {
            departure: null,
            arrival: null,
        };

        Schedule.__instance = this;
    }

    getSchedule(event) {
        if (this.schedule[event]) {
            console.log('Schedule from cache.');
            return Promise.resolve(this.schedule[event]);
        }

        console.log('Performing api request.');
        return Schedule.downloadSchedule(event)
            .then(response => response.json())
            .then(data => {
                this.schedule[event] = data.schedule;
                return this.schedule[event];
            })
            .catch(error => {
                console.log(error);
            });
    }

    // ввиду отсутствия в api расписания информации о задержках,
    //     они генерируются случайным образом, если время уже прошло
    getDelays() {
        const depDelays = new Promise(resolve => {
            const delays = [];
            const timeNow = new Date();

            if (this.schedule.departure) {
                this.schedule.departure.forEach(flight => {
                    const timeDep = new Date(flight.departure);
                    const isDelayed = Math.floor(Math.random() * 2) === 1;
                    if (timeNow - timeDep > 0 && isDelayed) {
                        delays.push(flight);
                    }
                });
                resolve(delays);
            } else {
                Schedule.downloadSchedule('departure')
                    .then(response => response.json())
                    .then(data => {
                        this.schedule.departure = data.schedule;
                        this.schedule.departure.forEach(flight => {
                            const timeDep = new Date(flight.departure);
                            const isDelayed = Math.floor(Math.random() * 2) === 1;
                            if (timeNow - timeDep > 0 && isDelayed) {
                                delays.push(flight);
                            }
                        });
                        resolve(delays);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        const arrDelays = new Promise(resolve => {
            const delays = [];
            const timeNow = new Date();

            if (this.schedule.arrival) {
                this.schedule.arrival.forEach(flight => {
                    const timeArr = new Date(flight.departure);
                    const isDelayed = Math.floor(Math.random() * 2) === 1;
                    if (timeNow - timeArr > 0 && isDelayed) {
                        delays.push(flight);
                    }
                });
                resolve(delays);
            } else {
                Schedule.downloadSchedule('arrival')
                    .then(response => response.json())
                    .then(data => {
                        this.schedule.arrival = data.schedule;
                        this.schedule.arrival.forEach(flight => {
                            const timeArr = new Date(flight.departure);
                            const isDelayed = Math.floor(Math.random() * 2) === 1;
                            if (timeNow - timeArr > 0 && isDelayed) {
                                delays.push(flight);
                            }
                        });
                        resolve(delays);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        return Promise.all([depDelays, arrDelays]);
    }

    search(_query) {
        const query = _query.replace(/\s/g, '').toLowerCase();

        const depSearch = new Promise(resolve => {
            const results = [];

            if (this.schedule.departure) {
                this.schedule.departure.forEach(flight => {
                    if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                        results.push(flight);
                    }
                });
                resolve(results);
            } else {
                Schedule.downloadSchedule('departure')
                    .then(response => response.json())
                    .then(data => {
                        this.schedule.departure = data.schedule;
                        this.schedule.departure.forEach(flight => {
                            if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                                results.push(flight);
                            }
                        });
                        resolve(results);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        const arrSearch = new Promise(resolve => {
            const results = [];

            if (this.schedule.arrival) {
                this.schedule.arrival.forEach(flight => {
                    if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                        results.push(flight);
                    }
                });
                resolve(results);
            } else {
                Schedule.downloadSchedule('arrival')
                    .then(response => response.json())
                    .then(data => {
                        this.schedule.arrival = data.schedule;
                        this.schedule.arrival.forEach(flight => {
                            if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                                results.push(flight);
                            }
                        });
                        resolve(results);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        return Promise.all([depSearch, arrSearch]);
    }

    static downloadSchedule(event) {
        const url = `/api?event=${event}`;

        return fetch(url, {
            method: 'GET',
        });
    }
}


/***/ }),

/***/ "./src/templates/base.mustache":
/*!*************************************!*\
  !*** ./src/templates/base.mustache ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n    {{> clock }}\n    <div class=\"search\">\n        {{> search }}\n    </div>\n    <div class=\"container\">\n        <h1><a href=\"/arrival\">Прилет</a></h1>\n        <h1><a href=\"/departure\">Вылет</a></h1>\n        <h1><a href=\"/delays\">Задержки</a></h1>\n    </div>\n</div>";

/***/ }),

/***/ "./src/templates/clock.mustache":
/*!**************************************!*\
  !*** ./src/templates/clock.mustache ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"clock__timer\" id=\"clock\">\n    </div>\n</div>";

/***/ }),

/***/ "./src/templates/schedule.mustache":
/*!*****************************************!*\
  !*** ./src/templates/schedule.mustache ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table border=\"1\">\n        <tr>\n            <th>Время</th>\n            <th>Направление</th>\n            <th>Номер рейса</th>\n        </tr>\n        {{#flights}}\n        <tr>\n            <th>{{#departure}}{{formatDate}}{{/departure}}{{#arrival}}{{formatDate}}{{/arrival}}</th>\n            <th>{{thread.short_title}}</th>\n            <th>{{thread.number}}</th>\n        </tr>\n        {{/flights}}\n    </table>\n</div>";

/***/ }),

/***/ "./src/templates/search.mustache":
/*!***************************************!*\
  !*** ./src/templates/search.mustache ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"search__form\">\n    <input class=\"search__input\" type=\"text\" placeholder=\"Поиск по номеру рейса\">\n    <button class=\"search__button\">Поиск</button>\n</form> ";

/***/ }),

/***/ "./src/views/ArrivalView.js":
/*!**********************************!*\
  !*** ./src/views/ArrivalView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuView; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseView */ "./src/views/BaseView.js");
/* harmony import */ var _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Schedule */ "./src/modules/Schedule.js");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/schedule.mustache */ "./src/templates/schedule.mustache");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__);





class MenuView extends _BaseView__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        this.el.innerHTML = '';

        const arrivalSection = document.createElement('section');
        arrivalSection.dataset.sectionName = 'arrival';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Загрузка</div>';
        arrivalSection.appendChild(divLoad.firstChild);
        this.el.appendChild(arrivalSection);

        const scheduler = new _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"]();
        scheduler.getSchedule('arrival')
            .then(schedule => {
                const viewData = {
                    flights: schedule,
                    formatDate() {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    },
                };

                const div = document.createElement('div');
                div.innerHTML = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a, viewData);
                arrivalSection.innerHTML = '';
                arrivalSection.appendChild(div.firstChild);

                this.el.appendChild(arrivalSection);
            })
            .catch(error => {
                console.log(error);
            });

        mustache__WEBPACK_IMPORTED_MODULE_0___default.a.parse(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a);
    }
}


/***/ }),

/***/ "./src/views/BaseView.js":
/*!*******************************!*\
  !*** ./src/views/BaseView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseView; });
class BaseView {
    constructor(el) {
        this.el = el;

        this.el.dataset.view = this.constructor.name;
        this.el.hidden = true;
    }

    get active() {
        return !this.el.hidden;
    }

    hide() {
        this.el.hidden = true;
    }

    show(params) {
        this.render(params);
        this.el.hidden = false;
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        throw new Error('This method must be impemented!');
    }
}


/***/ }),

/***/ "./src/views/DelaysView.js":
/*!*********************************!*\
  !*** ./src/views/DelaysView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuView; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseView */ "./src/views/BaseView.js");
/* harmony import */ var _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Schedule */ "./src/modules/Schedule.js");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/schedule.mustache */ "./src/templates/schedule.mustache");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__);





class MenuView extends _BaseView__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        this.el.innerHTML = '';

        const delaysSection = document.createElement('section');
        delaysSection.dataset.sectionName = 'delays';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Загрузка</div>';
        delaysSection.appendChild(divLoad.firstChild);
        this.el.appendChild(delaysSection);

        const scheduler = new _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"]();
        scheduler.getDelays()
            .then(_delays => {
                const delays = _delays[0].concat(_delays[1]);
                const viewData = {
                    flights: delays,
                    formatDate() {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    },
                };

                const div = document.createElement('div');
                div.innerHTML = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a, viewData);
                delaysSection.innerHTML = '';
                delaysSection.appendChild(div.firstChild);

                this.el.appendChild(delaysSection);
            })
            .catch(error => {
                console.log(error);
            });

        mustache__WEBPACK_IMPORTED_MODULE_0___default.a.parse(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a);
    }
}


/***/ }),

/***/ "./src/views/DepartureView.js":
/*!************************************!*\
  !*** ./src/views/DepartureView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuView; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseView */ "./src/views/BaseView.js");
/* harmony import */ var _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Schedule */ "./src/modules/Schedule.js");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/schedule.mustache */ "./src/templates/schedule.mustache");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__);





class MenuView extends _BaseView__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        this.el.innerHTML = '';

        const departureSection = document.createElement('section');
        departureSection.dataset.sectionName = 'departure';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Загрузка</div>';
        departureSection.appendChild(divLoad.firstChild);
        this.el.appendChild(departureSection);

        const scheduler = new _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"]();
        scheduler.getSchedule('departure')
            .then(schedule => {
                const viewData = {
                    flights: schedule,
                    formatDate() {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    },
                };

                const div = document.createElement('div');
                div.innerHTML = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a, viewData);
                departureSection.innerHTML = '';
                departureSection.appendChild(div.firstChild);

                this.el.appendChild(departureSection);
            })
            .catch(error => {
                console.log(error);
            });

        mustache__WEBPACK_IMPORTED_MODULE_0___default.a.parse(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a);
    }
}


/***/ }),

/***/ "./src/views/SearchView.js":
/*!*********************************!*\
  !*** ./src/views/SearchView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchView; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseView */ "./src/views/BaseView.js");
/* harmony import */ var _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Schedule */ "./src/modules/Schedule.js");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/schedule.mustache */ "./src/templates/schedule.mustache");
/* harmony import */ var _templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3__);





class SearchView extends _BaseView__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render(params) {
        this.el.innerHTML = '';

        const searchSection = document.createElement('section');
        searchSection.dataset.sectionName = 'search';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Выполняется поиск</div>';
        searchSection.appendChild(divLoad.firstChild);
        this.el.appendChild(searchSection);

        if (!params) {
            const searchParams = new URLSearchParams(window.location.href.split('?')[1]);
            // eslint-disable-next-line no-param-reassign
            params = searchParams.get('search');
        }

        const scheduler = new _modules_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"]();
        if (params) {
            scheduler.search(params)
                .then(_results => {
                    const results = _results[0].concat(_results[1]);
                    if (results.length > 0) {
                        const viewData = {
                            flights: results,
                            formatDate() {
                                const time = new Date(this);
                                const localTime = time.toLocaleString('ru');
                                return localTime;
                            },
                        };

                        // eslint-disable-next-line no-shadow
                        const div = document.createElement('div');
                        div.innerHTML = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a, viewData);
                        searchSection.innerHTML = `<div class="message">Результаты поиска по запросу &nbsp<b>${params}</b>:</div>`;
                        searchSection.appendChild(div.firstChild);

                        this.el.appendChild(searchSection);
                    } else {
                        this.noEntriesFound(searchSection, params);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            this.noEntriesFound(searchSection, params);
        }

        mustache__WEBPACK_IMPORTED_MODULE_0___default.a.parse(_templates_schedule_mustache__WEBPACK_IMPORTED_MODULE_3___default.a);
    }

    noEntriesFound(searchSection, params) {
        const div = document.createElement('div');
        if (/^\s+$/.test(params) || !params) {
            div.innerHTML = '<div class="message">Пустой поисковый запрос</div>';
        } else {
            div.innerHTML = `<div class="message">По запросу &nbsp<b>${params}</b>&nbsp ничего не нашлось</div>`;
        }
        // eslint-disable-next-line no-param-reassign
        searchSection.innerHTML = '';
        searchSection.appendChild(div.firstChild);

        this.el.appendChild(searchSection);
    }

    hide() {
        super.hide();
        this.el.innerHTML = '';
    }
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map