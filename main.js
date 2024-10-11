/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
  display: none; /* hides the modal from view by default*/
  position: fixed; /* keeps the modal in one place */
  z-index: 2; /* positions the modal on top of all other elements on the screen */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* 40% opacity black - other elements can still be seen */
  flex-direction: column; /* these flexbox rules center the content on the screen */
  align-items: center;
  justify-content: center;
}

/* box that contains all the content and images */
.modal-content {
  background-color: white; /* update the colors and font sizes as you like */
  color: black;
  text-align: center;
  font-size: 3rem;
  display: flex; /* adds flexbox to center all items */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  font-size: 20px;
}

.project-div {
  background-color: #d0d5db;
  margin: 5px;
  padding: 10px;
}

.todo-div {
  background-color: white;
  margin: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa,EAAE,wCAAwC;EACvD,eAAe,EAAE,iCAAiC;EAClD,UAAU,EAAE,mEAAmE;EAC/E,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B;;;;;GAKC,EAAE,yDAAyD;EAC5D,sBAAsB,EAAE,yDAAyD;EACjF,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,iDAAiD;AACjD;EACE,uBAAuB,EAAE,iDAAiD;EAC1E,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,aAAa,EAAE,qCAAqC;EACpD,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd","sourcesContent":[".modal {\r\n  display: none; /* hides the modal from view by default*/\r\n  position: fixed; /* keeps the modal in one place */\r\n  z-index: 2; /* positions the modal on top of all other elements on the screen */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  background-color: rgba(\r\n    0,\r\n    0,\r\n    0,\r\n    0.4\r\n  ); /* 40% opacity black - other elements can still be seen */\r\n  flex-direction: column; /* these flexbox rules center the content on the screen */\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* box that contains all the content and images */\r\n.modal-content {\r\n  background-color: white; /* update the colors and font sizes as you like */\r\n  color: black;\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  display: flex; /* adds flexbox to center all items */\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nlabel {\r\n  font-size: 20px;\r\n}\r\n\r\n.project-div {\r\n  background-color: #d0d5db;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.todo-div {\r\n  background-color: white;\r\n  margin: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app-item.js":
/*!*************************!*\
  !*** ./src/app-item.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createApp(projects = []) {
  const addProject = (project) => {
    project.setIndex(projects.length);
    projects.push(project);
  };

  const reassignProjectIndices = () => {
    for (let i = 0; i < projects.length; i++) {
      projects[i].setIndex(i);
    }
  };

  const removeProject = (index) => {
    projects.splice(index, 1);
    reassignProjectIndices();
  };

  const getProjects = () => projects;

  const getProject = (index) => projects[index];

  return { addProject, removeProject, getProjects, getProject };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApp);


/***/ }),

/***/ "./src/project-item.js":
/*!*****************************!*\
  !*** ./src/project-item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createProject(title, todos = []) {
  let index = -1;

  const addTodoItem = (todoItem) => {
    todoItem.setIndex(todos.length);
    todos.push(todoItem);
  };

  const reassignTodoIndices = () => {
    for (let i = 0; i < todos.length; i++) {
      todos[i].setIndex(i);
    }
  };

  const removeTodoItem = (index) => {
    todos.splice(index, 1);
    reassignTodoIndices();
  };

  const setIndex = (newIndex) => {
    index = newIndex;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getIndex = () => index;
  const getTitle = () => title;

  const getTodoItems = () => todos;

  const getTodoItem = (todoIndex) => todos[todoIndex];

  return {
    addTodoItem,
    removeTodoItem,
    setTitle,
    getTitle,
    setIndex,
    getIndex,
    getTodoItems,
    getTodoItem,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createToDoItem(
  title,
  description = "",
  dueDate = "",
  isComplete = false,
  priority = "",
  notes = ""
) {
  let index = -1;

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const toggleIsComplete = () => {
    isComplete = !isComplete;
  };

  const setIsComplete = (newIsComplete) => {
    isComplete = newIsComplete;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const setNotes = (newNotes) => {
    notes = newNotes;
  };

  const setIndex = (newIndex) => {
    index = newIndex;
  };

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getIsComplete = () => isComplete;
  const getPriority = () => priority;
  const getNotes = () => notes;
  const getIndex = () => index;

  return {
    setTitle,
    getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    toggleIsComplete,
    getIsComplete,
    setIsComplete,
    setPriority,
    getPriority,
    setNotes,
    getNotes,
    setIndex,
    getIndex,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDoItem);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-item */ "./src/project-item.js");
/* harmony import */ var _app_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-item */ "./src/app-item.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function writeLocalStorage(projects) {
  localStorage.clear();

  const projectsForJSON = {};
  for (const project of projects) {
    const projectTodosForJSON = project.getTodoItems().map((todo) => ({
      title: todo.getTitle(),
      description: todo.getDescription(),
      dueDate: todo.getDueDate(),
      isComplete: todo.getIsComplete(),
      priority: todo.getPriority(),
      notes: todo.getNotes(),
    }));
    projectsForJSON[project.getTitle()] = projectTodosForJSON;
  }

  localStorage.setItem("projects", JSON.stringify(projectsForJSON));
}

// projects {
// 0: title, array of todos
// 1: title, array of todos...
// }

function readLocalStorage() {
  const projectsJSON = localStorage.getItem("projects");

  console.log(projectsJSON);
  if (projectsJSON) {
    const projectsData = JSON.parse(projectsJSON);
    const projects = [];

    // Iterate over each project data in the parsed JSON
    let index = 0;
    for (const projectTitle in projectsData) {
      if (projectsData.hasOwnProperty(projectTitle)) {
        const projectTodosData = projectsData[projectTitle];
        const todos = projectTodosData.map((todoData) => {
          return (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__["default"])(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.isComplete,
            todoData.priority,
            todoData.notes
          );
        });
        const project = (0,_project_item__WEBPACK_IMPORTED_MODULE_1__["default"])(projectTitle, todos);
        project.setIndex(index);
        index += 1;
        projects.push(project);
      }
    }

    return projects;
  } else {
    // If no projects data found in local storage, return an empty array
    return [];
  }
}

if (storageAvailable("localStorage")) {
  readLocalStorage();
} else {
  console.log("ERROR: no local storage.");
}

function getUserControls() {
  const app = (0,_app_item__WEBPACK_IMPORTED_MODULE_2__["default"])(readLocalStorage());

  // Project Interaction
  const getProjects = () => app.getProjects();

  const getProject = (index) => app.getProject(index);

  const addProject = (title, todos) => {
    app.addProject((0,_project_item__WEBPACK_IMPORTED_MODULE_1__["default"])(title, todos));
  };

  const removeProject = (index) => {
    app.removeProject(index);
  };

  // Todo Item Interaction
  const getTodoItems = (projectIndex) =>
    app.getProject(projectIndex).getTodoItems();

  const getTodoItem = (projectIndex, todoIndex) =>
    app.getProject(projectIndex).getTodoItem(todoIndex);

  const addTodoItem = (
    projectIndex,
    title,
    description,
    dueDate,
    isComplete = false,
    priority,
    notes
  ) => {
    const project = getProject(projectIndex);
    project.addTodoItem(
      (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, isComplete, priority, notes)
    );
  };

  const removeTodoItem = (projectIndex, todoIndex) => {
    const project = app.getProject(projectIndex);
    project.removeTodoItem(todoIndex);
  };

  return {
    getProjects,
    getProject,
    addProject,
    removeProject,

    getTodoItems,
    getTodoItem,
    addTodoItem,
    removeTodoItem,
  };
}

// user can create a project or todo item, user can select which project it goes in

function createUI() {
  const userControls = getUserControls();

  // Create Header UI
  const projectsH1 = document.createElement("h1");
  projectsH1.textContent = "My Projects:";

  const projectsDiv = document.createElement("div");
  projectsDiv.className = "projects";

  const createProjectBtn = document.createElement("button");
  createProjectBtn.id = "create-project-btn";
  createProjectBtn.textContent = "Create Project";

  const elements = [projectsH1, createProjectBtn, projectsDiv];
  elements.forEach((element) => {
    document.body.appendChild(element);
  });

  // Create Default Project
  // userControls.addProject("Default", []);
  // userControls.addTodoItem(
  //   0,
  //   "Test #1",
  //   "A test todo-item",
  //   "1/1/2022",
  //   false,
  //   "high",
  //   "do l"
  // );

  function createProjectForm() {
    let currProjectIndex = -1;
    let newProject = true;

    // Create elements for form
    const modalDiv = document.createElement("div");
    modalDiv.style.display = "none";
    modalDiv.className = "modal";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title...";
    titleInput.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    const elements = [titleLabel, titleInput, submitBtn];

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    elements.forEach((element) => {
      modalContent.appendChild(element);
    });

    modalDiv.appendChild(modalContent);

    const setFields = (newProjectIndex, title) => {
      currProjectIndex = newProjectIndex;
      titleInput.value = title;
      newProject = false;
    };

    // Create functions for outside access
    const toggleModal = () => {
      modalDiv.style.display =
        modalDiv.style.display == "none" ? "flex" : "none";
    };

    submitBtn.addEventListener("click", () => {
      if (titleInput.value !== "" && newProject) {
        userControls.addProject(titleInput.value, []);
      } else if (titleInput.value !== "value" && !newProject) {
        const project = userControls.getProject(currProjectIndex);
        project.setTitle(titleInput.value);
      }
      titleInput.value = "";
      modalDiv.style.display = "none";
      currProjectIndex = -1;
      newProject = true;
      regenerateProjectsDiv();
    });

    document.body.appendChild(modalDiv);

    return { toggleModal, setFields };
  }

  function createTodoItemForm() {
    let currProjectIndex = -1;
    let currTodoIndex = -1;
    let newTodo = true;

    // Create elements for form
    const modalDiv = document.createElement("div");
    modalDiv.style.display = "none";
    modalDiv.className = "modal";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title...";
    titleInput.required = true;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Enter description...";

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Title: ";
    const dueDateInput = document.createElement("input");
    dueDateInput.placeholder = "Enter due date...";

    const isCompleteLabel = document.createElement("label");
    isCompleteLabel.textContent = "Is Complete: ";
    const isCompleteInput = document.createElement("input");
    isCompleteInput.type = "checkbox";
    isCompleteInput.checked = true;

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    const priorityInput = document.createElement("input");
    priorityInput.placeholder = "Enter priority...";

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes: ";
    const notesInput = document.createElement("input");
    notesInput.placeholder = "Enter notes...";

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    const elements = [
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionInput,
      dueDateLabel,
      dueDateInput,
      isCompleteLabel,
      isCompleteInput,
      priorityLabel,
      priorityInput,
      notesLabel,
      notesInput,
      submitBtn,
    ];

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    elements.forEach((element) => {
      modalContent.appendChild(element);
    });

    modalDiv.appendChild(modalContent);

    const setFields = (
      newCurrTodoIndex,
      title,
      description,
      dueDate,
      isComplete,
      priority,
      notes
    ) => {
      newTodo = false;
      currTodoIndex = newCurrTodoIndex;
      titleInput.value = title;
      descriptionInput.value = description;
      dueDateInput.value = dueDate;
      isCompleteInput.checked = isComplete;
      priorityInput.value = priority;
      notesInput.value = notes;
    };

    // Create functions for outside access
    const toggleModal = () => {
      modalDiv.style.display =
        modalDiv.style.display == "none" ? "flex" : "none";
    };

    const setProjectIndex = (newIndex) => {
      currProjectIndex = newIndex;
    };

    const inputs = [
      titleInput,
      descriptionInput,
      dueDateInput,
      priorityInput,
      notesInput,
    ];

    submitBtn.addEventListener("click", () => {
      if (titleInput.value !== "" && newTodo) {
        userControls.addTodoItem(
          currProjectIndex,
          titleInput.value,
          descriptionInput.value,
          dueDateInput.value,
          isCompleteInput.checked,
          priorityInput.value,
          notesInput.value
        );
      } else if (!newTodo) {
        const todoItem = userControls.getTodoItem(
          currProjectIndex,
          currTodoIndex
        );
        todoItem.setTitle(titleInput.value);
        todoItem.setDescription(descriptionInput.value);
        todoItem.setDueDate(dueDateInput.value);
        todoItem.setIsComplete(isCompleteInput.checked);
        todoItem.setPriority(priorityInput.value);
        todoItem.setNotes(notesInput.value);
      }
      newTodo = true;
      inputs.forEach((input) => (input.value = ""));
      modalDiv.style.display = "none";
      currProjectIndex = -1;
      currTodoIndex = -1;
      regenerateProjectsDiv();
    });

    document.body.appendChild(modalDiv);

    return { setProjectIndex, toggleModal, setFields };
  }

  const projectForm = createProjectForm();
  const todoItemForm = createTodoItemForm();

  createProjectBtn.addEventListener("click", () => {
    projectForm.toggleModal();
  });

  function regenerateProjectsDiv() {
    projectsDiv.innerHTML = "";
    const projects = userControls.getProjects();

    projects.forEach((project) => {
      const projectContent = document.createElement("div");
      projectContent.className = "project-div";

      const projectTitleH1 = document.createElement("h1");
      projectTitleH1.textContent = project.getTitle();

      const createTodoItemBtn = document.createElement("button");
      createTodoItemBtn.addEventListener("click", () => {
        todoItemForm.setProjectIndex(project.getIndex());
        console.log(project.getIndex());
        todoItemForm.toggleModal();
      });
      createTodoItemBtn.textContent = "Create To-Do";

      const editProjectBtn = document.createElement("button");
      editProjectBtn.addEventListener("click", () => {
        projectForm.setFields(project.getIndex(), project.getTitle());
        projectForm.toggleModal();
      });
      editProjectBtn.textContent = "Edit Project";

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.addEventListener("click", () => {
        userControls.removeProject(project.getIndex());
        regenerateProjectsDiv();
      });
      deleteProjectBtn.textContent = "Delete Project";

      const todos = project.getTodoItems();
      const todoElements = todos.map((todo) => {
        const todoElement = document.createElement("div");
        todoElement.className = "todo-div";

        const todoTitleH2 = document.createElement("h2");
        todoTitleH2.textContent = todo.getTitle();
        todoElement.appendChild(todoTitleH2);

        const todoDueDate = document.createElement("p");
        todoDueDate.textContent = todo.getDueDate();
        todoElement.appendChild(todoDueDate);

        const todoIsComplete = document.createElement("input");
        todoIsComplete.type = "checkbox";
        todoIsComplete.checked = todo.getIsComplete();

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.addEventListener("click", () => {
          userControls.removeTodoItem(project.getIndex(), todo.getIndex());
          regenerateProjectsDiv();
        });
        deleteTodoBtn.textContent = "Delete Todo";

        const editTodoBtn = document.createElement("button");
        editTodoBtn.textContent = "Edit Todo";

        const elements = [
          todoTitleH2,
          todoDueDate,
          todoIsComplete,
          editTodoBtn,
          deleteTodoBtn,
        ];
        elements.forEach((element) => {
          todoElement.appendChild(element);
        });

        todoIsComplete.addEventListener("click", () => {
          todo.toggleIsComplete();
          todoIsComplete.checked = todo.getIsComplete();
          console.log(todo.getIsComplete());
        });

        editTodoBtn.addEventListener("click", () => {
          todoItemForm.setProjectIndex(project.getIndex());
          todoItemForm.setFields(
            todo.getIndex(),
            todo.getTitle(),
            todo.getDescription(),
            todo.getDueDate(),
            todo.getIsComplete(),
            todo.getPriority(),
            todo.getNotes()
          );
          todoItemForm.toggleModal();
        });

        return todoElement;
      });

      const elements = [
        projectTitleH1,
        createTodoItemBtn,
        editProjectBtn,
        deleteProjectBtn,
        ...todoElements,
      ];
      elements.forEach((element) => {
        projectContent.appendChild(element);
      });

      projectsDiv.appendChild(projectContent);
    });
  }

  regenerateProjectsDiv();
  // Create Todo Items

  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    const projects = userControls.getProjects();
    writeLocalStorage(projects);
  });
}

createUI();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FwcC1pdGVtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC1pdGVtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogaGlkZXMgdGhlIG1vZGFsIGZyb20gdmlldyBieSBkZWZhdWx0Ki9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIGtlZXBzIHRoZSBtb2RhbCBpbiBvbmUgcGxhY2UgKi9cclxuICB6LWluZGV4OiAyOyAvKiBwb3NpdGlvbnMgdGhlIG1vZGFsIG9uIHRvcCBvZiBhbGwgb3RoZXIgZWxlbWVudHMgb24gdGhlIHNjcmVlbiAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXHJcbiAgICAwLFxyXG4gICAgMCxcclxuICAgIDAsXHJcbiAgICAwLjRcclxuICApOyAvKiA0MCUgb3BhY2l0eSBibGFjayAtIG90aGVyIGVsZW1lbnRzIGNhbiBzdGlsbCBiZSBzZWVuICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogdGhlc2UgZmxleGJveCBydWxlcyBjZW50ZXIgdGhlIGNvbnRlbnQgb24gdGhlIHNjcmVlbiAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIGJveCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgY29udGVudCBhbmQgaW1hZ2VzICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogdXBkYXRlIHRoZSBjb2xvcnMgYW5kIGZvbnQgc2l6ZXMgYXMgeW91IGxpa2UgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4OyAvKiBhZGRzIGZsZXhib3ggdG8gY2VudGVyIGFsbCBpdGVtcyAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnByb2plY3QtZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkNWRiO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50b2RvLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWEsRUFBRSx3Q0FBd0M7RUFDdkQsZUFBZSxFQUFFLGlDQUFpQztFQUNsRCxVQUFVLEVBQUUsbUVBQW1FO0VBQy9FLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5Qjs7Ozs7R0FLQyxFQUFFLHlEQUF5RDtFQUM1RCxzQkFBc0IsRUFBRSx5REFBeUQ7RUFDakYsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRSx1QkFBdUIsRUFBRSxpREFBaUQ7RUFDMUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYSxFQUFFLHFDQUFxQztFQUNwRCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIGhpZGVzIHRoZSBtb2RhbCBmcm9tIHZpZXcgYnkgZGVmYXVsdCovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIGtlZXBzIHRoZSBtb2RhbCBpbiBvbmUgcGxhY2UgKi9cXHJcXG4gIHotaW5kZXg6IDI7IC8qIHBvc2l0aW9ucyB0aGUgbW9kYWwgb24gdG9wIG9mIGFsbCBvdGhlciBlbGVtZW50cyBvbiB0aGUgc2NyZWVuICovXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxyXFxuICAgIDAsXFxyXFxuICAgIDAsXFxyXFxuICAgIDAsXFxyXFxuICAgIDAuNFxcclxcbiAgKTsgLyogNDAlIG9wYWNpdHkgYmxhY2sgLSBvdGhlciBlbGVtZW50cyBjYW4gc3RpbGwgYmUgc2VlbiAqL1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogdGhlc2UgZmxleGJveCBydWxlcyBjZW50ZXIgdGhlIGNvbnRlbnQgb24gdGhlIHNjcmVlbiAqL1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBib3ggdGhhdCBjb250YWlucyBhbGwgdGhlIGNvbnRlbnQgYW5kIGltYWdlcyAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiB1cGRhdGUgdGhlIGNvbG9ycyBhbmQgZm9udCBzaXplcyBhcyB5b3UgbGlrZSAqL1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDsgLyogYWRkcyBmbGV4Ym94IHRvIGNlbnRlciBhbGwgaXRlbXMgKi9cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQ1ZGI7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVBcHAocHJvamVjdHMgPSBbXSkge1xyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5zZXRJbmRleChwcm9qZWN0cy5sZW5ndGgpO1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWFzc2lnblByb2plY3RJbmRpY2VzID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBwcm9qZWN0c1tpXS5zZXRJbmRleChpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcmVhc3NpZ25Qcm9qZWN0SW5kaWNlcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3QgPSAoaW5kZXgpID0+IHByb2plY3RzW2luZGV4XTtcclxuXHJcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3QgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXBwO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0b2RvcyA9IFtdKSB7XHJcbiAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9JdGVtID0gKHRvZG9JdGVtKSA9PiB7XHJcbiAgICB0b2RvSXRlbS5zZXRJbmRleCh0b2Rvcy5sZW5ndGgpO1xyXG4gICAgdG9kb3MucHVzaCh0b2RvSXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVhc3NpZ25Ub2RvSW5kaWNlcyA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG9kb3NbaV0uc2V0SW5kZXgoaSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVG9kb0l0ZW0gPSAoaW5kZXgpID0+IHtcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICByZWFzc2lnblRvZG9JbmRpY2VzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0SW5kZXggPSAobmV3SW5kZXgpID0+IHtcclxuICAgIGluZGV4ID0gbmV3SW5kZXg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcclxuICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SW5kZXggPSAoKSA9PiBpbmRleDtcclxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xyXG5cclxuICBjb25zdCBnZXRUb2RvSXRlbXMgPSAoKSA9PiB0b2RvcztcclxuXHJcbiAgY29uc3QgZ2V0VG9kb0l0ZW0gPSAodG9kb0luZGV4KSA9PiB0b2Rvc1t0b2RvSW5kZXhdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9kb0l0ZW0sXHJcbiAgICByZW1vdmVUb2RvSXRlbSxcclxuICAgIHNldFRpdGxlLFxyXG4gICAgZ2V0VGl0bGUsXHJcbiAgICBzZXRJbmRleCxcclxuICAgIGdldEluZGV4LFxyXG4gICAgZ2V0VG9kb0l0ZW1zLFxyXG4gICAgZ2V0VG9kb0l0ZW0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcclxuIiwiZnVuY3Rpb24gY3JlYXRlVG9Eb0l0ZW0oXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxyXG4gIGR1ZURhdGUgPSBcIlwiLFxyXG4gIGlzQ29tcGxldGUgPSBmYWxzZSxcclxuICBwcmlvcml0eSA9IFwiXCIsXHJcbiAgbm90ZXMgPSBcIlwiXHJcbikge1xyXG4gIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcclxuICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUlzQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICBpc0NvbXBsZXRlID0gIWlzQ29tcGxldGU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0SXNDb21wbGV0ZSA9IChuZXdJc0NvbXBsZXRlKSA9PiB7XHJcbiAgICBpc0NvbXBsZXRlID0gbmV3SXNDb21wbGV0ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xyXG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXROb3RlcyA9IChuZXdOb3RlcykgPT4ge1xyXG4gICAgbm90ZXMgPSBuZXdOb3RlcztcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRJbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgaW5kZXggPSBuZXdJbmRleDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xyXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XHJcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XHJcbiAgY29uc3QgZ2V0SXNDb21wbGV0ZSA9ICgpID0+IGlzQ29tcGxldGU7XHJcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcclxuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzO1xyXG4gIGNvbnN0IGdldEluZGV4ID0gKCkgPT4gaW5kZXg7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXRUaXRsZSxcclxuICAgIGdldFRpdGxlLFxyXG4gICAgc2V0RGVzY3JpcHRpb24sXHJcbiAgICBnZXREZXNjcmlwdGlvbixcclxuICAgIHNldER1ZURhdGUsXHJcbiAgICBnZXREdWVEYXRlLFxyXG4gICAgdG9nZ2xlSXNDb21wbGV0ZSxcclxuICAgIGdldElzQ29tcGxldGUsXHJcbiAgICBzZXRJc0NvbXBsZXRlLFxyXG4gICAgc2V0UHJpb3JpdHksXHJcbiAgICBnZXRQcmlvcml0eSxcclxuICAgIHNldE5vdGVzLFxyXG4gICAgZ2V0Tm90ZXMsXHJcbiAgICBzZXRJbmRleCxcclxuICAgIGdldEluZGV4LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvRG9JdGVtO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlVG9Eb0l0ZW0gZnJvbSBcIi4vdG9kby1pdGVtXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QtaXRlbVwiO1xyXG5pbXBvcnQgY3JlYXRlQXBwIGZyb20gXCIuL2FwcC1pdGVtXCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgbGV0IHN0b3JhZ2U7XHJcbiAgdHJ5IHtcclxuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XHJcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXHJcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcclxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgc3RvcmFnZSAmJlxyXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzRm9ySlNPTiA9IHt9O1xyXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgcHJvamVjdFRvZG9zRm9ySlNPTiA9IHByb2plY3QuZ2V0VG9kb0l0ZW1zKCkubWFwKCh0b2RvKSA9PiAoe1xyXG4gICAgICB0aXRsZTogdG9kby5nZXRUaXRsZSgpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdG9kby5nZXREZXNjcmlwdGlvbigpLFxyXG4gICAgICBkdWVEYXRlOiB0b2RvLmdldER1ZURhdGUoKSxcclxuICAgICAgaXNDb21wbGV0ZTogdG9kby5nZXRJc0NvbXBsZXRlKCksXHJcbiAgICAgIHByaW9yaXR5OiB0b2RvLmdldFByaW9yaXR5KCksXHJcbiAgICAgIG5vdGVzOiB0b2RvLmdldE5vdGVzKCksXHJcbiAgICB9KSk7XHJcbiAgICBwcm9qZWN0c0ZvckpTT05bcHJvamVjdC5nZXRUaXRsZSgpXSA9IHByb2plY3RUb2Rvc0ZvckpTT047XHJcbiAgfVxyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzRm9ySlNPTikpO1xyXG59XHJcblxyXG4vLyBwcm9qZWN0cyB7XHJcbi8vIDA6IHRpdGxlLCBhcnJheSBvZiB0b2Rvc1xyXG4vLyAxOiB0aXRsZSwgYXJyYXkgb2YgdG9kb3MuLi5cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gcmVhZExvY2FsU3RvcmFnZSgpIHtcclxuICBjb25zdCBwcm9qZWN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9qZWN0c0pTT04pO1xyXG4gIGlmIChwcm9qZWN0c0pTT04pIHtcclxuICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UocHJvamVjdHNKU09OKTtcclxuICAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggcHJvamVjdCBkYXRhIGluIHRoZSBwYXJzZWQgSlNPTlxyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAoY29uc3QgcHJvamVjdFRpdGxlIGluIHByb2plY3RzRGF0YSkge1xyXG4gICAgICBpZiAocHJvamVjdHNEYXRhLmhhc093blByb3BlcnR5KHByb2plY3RUaXRsZSkpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3NEYXRhID0gcHJvamVjdHNEYXRhW3Byb2plY3RUaXRsZV07XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0VG9kb3NEYXRhLm1hcCgodG9kb0RhdGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBjcmVhdGVUb0RvSXRlbShcclxuICAgICAgICAgICAgdG9kb0RhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHRvZG9EYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0b2RvRGF0YS5kdWVEYXRlLFxyXG4gICAgICAgICAgICB0b2RvRGF0YS5pc0NvbXBsZXRlLFxyXG4gICAgICAgICAgICB0b2RvRGF0YS5wcmlvcml0eSxcclxuICAgICAgICAgICAgdG9kb0RhdGEubm90ZXNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLCB0b2Rvcyk7XHJcbiAgICAgICAgcHJvamVjdC5zZXRJbmRleChpbmRleCk7XHJcbiAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBJZiBubyBwcm9qZWN0cyBkYXRhIGZvdW5kIGluIGxvY2FsIHN0b3JhZ2UsIHJldHVybiBhbiBlbXB0eSBhcnJheVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcclxuICByZWFkTG9jYWxTdG9yYWdlKCk7XHJcbn0gZWxzZSB7XHJcbiAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbG9jYWwgc3RvcmFnZS5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJDb250cm9scygpIHtcclxuICBjb25zdCBhcHAgPSBjcmVhdGVBcHAocmVhZExvY2FsU3RvcmFnZSgpKTtcclxuXHJcbiAgLy8gUHJvamVjdCBJbnRlcmFjdGlvblxyXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gYXBwLmdldFByb2plY3RzKCk7XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3QgPSAoaW5kZXgpID0+IGFwcC5nZXRQcm9qZWN0KGluZGV4KTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgdG9kb3MpID0+IHtcclxuICAgIGFwcC5hZGRQcm9qZWN0KGNyZWF0ZVByb2plY3QodGl0bGUsIHRvZG9zKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG4gICAgYXBwLnJlbW92ZVByb2plY3QoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIC8vIFRvZG8gSXRlbSBJbnRlcmFjdGlvblxyXG4gIGNvbnN0IGdldFRvZG9JdGVtcyA9IChwcm9qZWN0SW5kZXgpID0+XHJcbiAgICBhcHAuZ2V0UHJvamVjdChwcm9qZWN0SW5kZXgpLmdldFRvZG9JdGVtcygpO1xyXG5cclxuICBjb25zdCBnZXRUb2RvSXRlbSA9IChwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkgPT5cclxuICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3RJbmRleCkuZ2V0VG9kb0l0ZW0odG9kb0luZGV4KTtcclxuXHJcbiAgY29uc3QgYWRkVG9kb0l0ZW0gPSAoXHJcbiAgICBwcm9qZWN0SW5kZXgsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGlzQ29tcGxldGUgPSBmYWxzZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJbmRleCk7XHJcbiAgICBwcm9qZWN0LmFkZFRvZG9JdGVtKFxyXG4gICAgICBjcmVhdGVUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlzQ29tcGxldGUsIHByaW9yaXR5LCBub3RlcylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVG9kb0l0ZW0gPSAocHJvamVjdEluZGV4LCB0b2RvSW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBhcHAuZ2V0UHJvamVjdChwcm9qZWN0SW5kZXgpO1xyXG4gICAgcHJvamVjdC5yZW1vdmVUb2RvSXRlbSh0b2RvSW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRQcm9qZWN0cyxcclxuICAgIGdldFByb2plY3QsXHJcbiAgICBhZGRQcm9qZWN0LFxyXG4gICAgcmVtb3ZlUHJvamVjdCxcclxuXHJcbiAgICBnZXRUb2RvSXRlbXMsXHJcbiAgICBnZXRUb2RvSXRlbSxcclxuICAgIGFkZFRvZG9JdGVtLFxyXG4gICAgcmVtb3ZlVG9kb0l0ZW0sXHJcbiAgfTtcclxufVxyXG5cclxuLy8gdXNlciBjYW4gY3JlYXRlIGEgcHJvamVjdCBvciB0b2RvIGl0ZW0sIHVzZXIgY2FuIHNlbGVjdCB3aGljaCBwcm9qZWN0IGl0IGdvZXMgaW5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVVJKCkge1xyXG4gIGNvbnN0IHVzZXJDb250cm9scyA9IGdldFVzZXJDb250cm9scygpO1xyXG5cclxuICAvLyBDcmVhdGUgSGVhZGVyIFVJXHJcbiAgY29uc3QgcHJvamVjdHNIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBwcm9qZWN0c0gxLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0czpcIjtcclxuXHJcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RzRGl2LmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIjtcclxuXHJcbiAgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY3JlYXRlUHJvamVjdEJ0bi5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnRuXCI7XHJcbiAgY3JlYXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcclxuXHJcbiAgY29uc3QgZWxlbWVudHMgPSBbcHJvamVjdHNIMSwgY3JlYXRlUHJvamVjdEJ0biwgcHJvamVjdHNEaXZdO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENyZWF0ZSBEZWZhdWx0IFByb2plY3RcclxuICAvLyB1c2VyQ29udHJvbHMuYWRkUHJvamVjdChcIkRlZmF1bHRcIiwgW10pO1xyXG4gIC8vIHVzZXJDb250cm9scy5hZGRUb2RvSXRlbShcclxuICAvLyAgIDAsXHJcbiAgLy8gICBcIlRlc3QgIzFcIixcclxuICAvLyAgIFwiQSB0ZXN0IHRvZG8taXRlbVwiLFxyXG4gIC8vICAgXCIxLzEvMjAyMlwiLFxyXG4gIC8vICAgZmFsc2UsXHJcbiAgLy8gICBcImhpZ2hcIixcclxuICAvLyAgIFwiZG8gbFwiXHJcbiAgLy8gKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBsZXQgY3VyclByb2plY3RJbmRleCA9IC0xO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSB0cnVlO1xyXG5cclxuICAgIC8vIENyZWF0ZSBlbGVtZW50cyBmb3IgZm9ybVxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbW9kYWxEaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGl0bGUuLi5cIjtcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW3RpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIHN1Ym1pdEJ0bl07XHJcblxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSBcIm1vZGFsLWNvbnRlbnRcIjtcclxuXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsRGl2LmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcblxyXG4gICAgY29uc3Qgc2V0RmllbGRzID0gKG5ld1Byb2plY3RJbmRleCwgdGl0bGUpID0+IHtcclxuICAgICAgY3VyclByb2plY3RJbmRleCA9IG5ld1Byb2plY3RJbmRleDtcclxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgICBuZXdQcm9qZWN0ID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSBmdW5jdGlvbnMgZm9yIG91dHNpZGUgYWNjZXNzXHJcbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgdXNlckNvbnRyb2xzLmFkZFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSwgW10pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRpdGxlSW5wdXQudmFsdWUgIT09IFwidmFsdWVcIiAmJiAhbmV3UHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB1c2VyQ29udHJvbHMuZ2V0UHJvamVjdChjdXJyUHJvamVjdEluZGV4KTtcclxuICAgICAgICBwcm9qZWN0LnNldFRpdGxlKHRpdGxlSW5wdXQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGN1cnJQcm9qZWN0SW5kZXggPSAtMTtcclxuICAgICAgbmV3UHJvamVjdCA9IHRydWU7XHJcbiAgICAgIHJlZ2VuZXJhdGVQcm9qZWN0c0RpdigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbERpdik7XHJcblxyXG4gICAgcmV0dXJuIHsgdG9nZ2xlTW9kYWwsIHNldEZpZWxkcyB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1Gb3JtKCkge1xyXG4gICAgbGV0IGN1cnJQcm9qZWN0SW5kZXggPSAtMTtcclxuICAgIGxldCBjdXJyVG9kb0luZGV4ID0gLTE7XHJcbiAgICBsZXQgbmV3VG9kbyA9IHRydWU7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGZvciBmb3JtXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtb2RhbERpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XHJcblxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0aXRsZS4uLlwiO1xyXG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBkZXNjcmlwdGlvbi4uLlwiO1xyXG5cclxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBkdWUgZGF0ZS4uLlwiO1xyXG5cclxuICAgIGNvbnN0IGlzQ29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGlzQ29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiSXMgQ29tcGxldGU6IFwiO1xyXG4gICAgY29uc3QgaXNDb21wbGV0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaXNDb21wbGV0ZUlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBpc0NvbXBsZXRlSW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcclxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwcmlvcml0eUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcmlvcml0eS4uLlwiO1xyXG5cclxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlczogXCI7XHJcbiAgICBjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbm90ZXNJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgbm90ZXMuLi5cIjtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtcclxuICAgICAgdGl0bGVMYWJlbCxcclxuICAgICAgdGl0bGVJbnB1dCxcclxuICAgICAgZGVzY3JpcHRpb25MYWJlbCxcclxuICAgICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgICAgZHVlRGF0ZUxhYmVsLFxyXG4gICAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICAgIGlzQ29tcGxldGVMYWJlbCxcclxuICAgICAgaXNDb21wbGV0ZUlucHV0LFxyXG4gICAgICBwcmlvcml0eUxhYmVsLFxyXG4gICAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgICBub3Rlc0xhYmVsLFxyXG4gICAgICBub3Rlc0lucHV0LFxyXG4gICAgICBzdWJtaXRCdG4sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gXCJtb2RhbC1jb250ZW50XCI7XHJcblxyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbERpdi5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHNldEZpZWxkcyA9IChcclxuICAgICAgbmV3Q3VyclRvZG9JbmRleCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkdWVEYXRlLFxyXG4gICAgICBpc0NvbXBsZXRlLFxyXG4gICAgICBwcmlvcml0eSxcclxuICAgICAgbm90ZXNcclxuICAgICkgPT4ge1xyXG4gICAgICBuZXdUb2RvID0gZmFsc2U7XHJcbiAgICAgIGN1cnJUb2RvSW5kZXggPSBuZXdDdXJyVG9kb0luZGV4O1xyXG4gICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XHJcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZTtcclxuICAgICAgaXNDb21wbGV0ZUlucHV0LmNoZWNrZWQgPSBpc0NvbXBsZXRlO1xyXG4gICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSBub3RlcztcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGZ1bmN0aW9ucyBmb3Igb3V0c2lkZSBhY2Nlc3NcclxuICAgIGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0UHJvamVjdEluZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICAgIGN1cnJQcm9qZWN0SW5kZXggPSBuZXdJbmRleDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5wdXRzID0gW1xyXG4gICAgICB0aXRsZUlucHV0LFxyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICAgIG5vdGVzSW5wdXQsXHJcbiAgICBdO1xyXG5cclxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBuZXdUb2RvKSB7XHJcbiAgICAgICAgdXNlckNvbnRyb2xzLmFkZFRvZG9JdGVtKFxyXG4gICAgICAgICAgY3VyclByb2plY3RJbmRleCxcclxuICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxyXG4gICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZUlucHV0LmNoZWNrZWQsXHJcbiAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIW5ld1RvZG8pIHtcclxuICAgICAgICBjb25zdCB0b2RvSXRlbSA9IHVzZXJDb250cm9scy5nZXRUb2RvSXRlbShcclxuICAgICAgICAgIGN1cnJQcm9qZWN0SW5kZXgsXHJcbiAgICAgICAgICBjdXJyVG9kb0luZGV4XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b2RvSXRlbS5zZXRUaXRsZSh0aXRsZUlucHV0LnZhbHVlKTtcclxuICAgICAgICB0b2RvSXRlbS5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbklucHV0LnZhbHVlKTtcclxuICAgICAgICB0b2RvSXRlbS5zZXREdWVEYXRlKGR1ZURhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgdG9kb0l0ZW0uc2V0SXNDb21wbGV0ZShpc0NvbXBsZXRlSW5wdXQuY2hlY2tlZCk7XHJcbiAgICAgICAgdG9kb0l0ZW0uc2V0UHJpb3JpdHkocHJpb3JpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgdG9kb0l0ZW0uc2V0Tm90ZXMobm90ZXNJbnB1dC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3VG9kbyA9IHRydWU7XHJcbiAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gKGlucHV0LnZhbHVlID0gXCJcIikpO1xyXG4gICAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGN1cnJQcm9qZWN0SW5kZXggPSAtMTtcclxuICAgICAgY3VyclRvZG9JbmRleCA9IC0xO1xyXG4gICAgICByZWdlbmVyYXRlUHJvamVjdHNEaXYoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxEaXYpO1xyXG5cclxuICAgIHJldHVybiB7IHNldFByb2plY3RJbmRleCwgdG9nZ2xlTW9kYWwsIHNldEZpZWxkcyB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4gIGNvbnN0IHRvZG9JdGVtRm9ybSA9IGNyZWF0ZVRvZG9JdGVtRm9ybSgpO1xyXG5cclxuICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwcm9qZWN0Rm9ybS50b2dnbGVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByZWdlbmVyYXRlUHJvamVjdHNEaXYoKSB7XHJcbiAgICBwcm9qZWN0c0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VyQ29udHJvbHMuZ2V0UHJvamVjdHMoKTtcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvamVjdENvbnRlbnQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWRpdlwiO1xyXG5cclxuICAgICAgY29uc3QgcHJvamVjdFRpdGxlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgIHByb2plY3RUaXRsZUgxLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG5cclxuICAgICAgY29uc3QgY3JlYXRlVG9kb0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBjcmVhdGVUb2RvSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRvZG9JdGVtRm9ybS5zZXRQcm9qZWN0SW5kZXgocHJvamVjdC5nZXRJbmRleCgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldEluZGV4KCkpO1xyXG4gICAgICAgIHRvZG9JdGVtRm9ybS50b2dnbGVNb2RhbCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgY3JlYXRlVG9kb0l0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUby1Eb1wiO1xyXG5cclxuICAgICAgY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RGb3JtLnNldEZpZWxkcyhwcm9qZWN0LmdldEluZGV4KCksIHByb2plY3QuZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0udG9nZ2xlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGVkaXRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdXNlckNvbnRyb2xzLnJlbW92ZVByb2plY3QocHJvamVjdC5nZXRJbmRleCgpKTtcclxuICAgICAgICByZWdlbmVyYXRlUHJvamVjdHNEaXYoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XHJcblxyXG4gICAgICBjb25zdCB0b2RvcyA9IHByb2plY3QuZ2V0VG9kb0l0ZW1zKCk7XHJcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc05hbWUgPSBcInRvZG8tZGl2XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRvZG9UaXRsZUgyLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xyXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9UaXRsZUgyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xyXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0lzQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdG9kb0lzQ29tcGxldGUudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICB0b2RvSXNDb21wbGV0ZS5jaGVja2VkID0gdG9kby5nZXRJc0NvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIHVzZXJDb250cm9scy5yZW1vdmVUb2RvSXRlbShwcm9qZWN0LmdldEluZGV4KCksIHRvZG8uZ2V0SW5kZXgoKSk7XHJcbiAgICAgICAgICByZWdlbmVyYXRlUHJvamVjdHNEaXYoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGUgVG9kb1wiO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZWRpdFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgVG9kb1wiO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtcclxuICAgICAgICAgIHRvZG9UaXRsZUgyLFxyXG4gICAgICAgICAgdG9kb0R1ZURhdGUsXHJcbiAgICAgICAgICB0b2RvSXNDb21wbGV0ZSxcclxuICAgICAgICAgIGVkaXRUb2RvQnRuLFxyXG4gICAgICAgICAgZGVsZXRlVG9kb0J0bixcclxuICAgICAgICBdO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2RvSXNDb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdG9kby50b2dnbGVJc0NvbXBsZXRlKCk7XHJcbiAgICAgICAgICB0b2RvSXNDb21wbGV0ZS5jaGVja2VkID0gdG9kby5nZXRJc0NvbXBsZXRlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmdldElzQ29tcGxldGUoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVkaXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0b2RvSXRlbUZvcm0uc2V0UHJvamVjdEluZGV4KHByb2plY3QuZ2V0SW5kZXgoKSk7XHJcbiAgICAgICAgICB0b2RvSXRlbUZvcm0uc2V0RmllbGRzKFxyXG4gICAgICAgICAgICB0b2RvLmdldEluZGV4KCksXHJcbiAgICAgICAgICAgIHRvZG8uZ2V0VGl0bGUoKSxcclxuICAgICAgICAgICAgdG9kby5nZXREZXNjcmlwdGlvbigpLFxyXG4gICAgICAgICAgICB0b2RvLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgdG9kby5nZXRJc0NvbXBsZXRlKCksXHJcbiAgICAgICAgICAgIHRvZG8uZ2V0UHJpb3JpdHkoKSxcclxuICAgICAgICAgICAgdG9kby5nZXROb3RlcygpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdG9kb0l0ZW1Gb3JtLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvRWxlbWVudDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtcclxuICAgICAgICBwcm9qZWN0VGl0bGVIMSxcclxuICAgICAgICBjcmVhdGVUb2RvSXRlbUJ0bixcclxuICAgICAgICBlZGl0UHJvamVjdEJ0bixcclxuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLFxyXG4gICAgICAgIC4uLnRvZG9FbGVtZW50cyxcclxuICAgICAgXTtcclxuICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVnZW5lcmF0ZVByb2plY3RzRGl2KCk7XHJcbiAgLy8gQ3JlYXRlIFRvZG8gSXRlbXNcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VyQ29udHJvbHMuZ2V0UHJvamVjdHMoKTtcclxuICAgIHdyaXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcclxuICB9KTtcclxufVxyXG5cclxuY3JlYXRlVUkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9