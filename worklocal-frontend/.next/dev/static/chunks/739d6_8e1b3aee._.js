(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_without_holes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr);
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array
]);
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_spread
]);
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_consumable_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _to_consumable_array(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_extends
]);
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_object_destructuring_empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_destructuring_empty
]);
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, key, source[key]);
        });
    }
    return target;
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread_props
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
}),
"[project]/worklocal-frontend/node_modules/redux/es/redux.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__DO_NOT_USE__ActionTypes",
    ()=>ActionTypes,
    "applyMiddleware",
    ()=>applyMiddleware,
    "bindActionCreators",
    ()=>bindActionCreators,
    "combineReducers",
    ()=>combineReducers,
    "compose",
    ()=>compose,
    "createStore",
    ()=>createStore,
    "legacy_createStore",
    ()=>legacy_createStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
;
;
;
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if ((typeof obj === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj)) !== 'object' || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val);
    switch(type){
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
            {
                return type;
            }
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch(constructorName){
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val, Error) || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val, Date)) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val);
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
    }
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        }
        if (typeof action.type === 'undefined') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Reducers may not dispatch actions.');
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        }
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if ((typeof observer === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(observer)) !== 'object' || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                }
                function observeState() {
                    if (observer.next) {
                        observer.next(getState());
                    }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
    }
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }
    if (!isPlainObject(inputState)) {
        return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    }
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === 'undefined') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        }
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
        }
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === 'undefined') {
                warning("No reducer provided for key \"" + key + "\"");
            }
        }
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        unexpectedKeyCache = {};
    }
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) {
            state = {};
        }
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        var hasChanged = false;
        var nextState = {};
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    if ((typeof actionCreators === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(actionCreators)) !== 'object' || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++){
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return function(arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
        middlewares[_key] = arguments[_key];
    }
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_call_check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
;
function _class_call_check(instance, Constructor) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Constructor)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_create_class
]);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
;
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ __turbopack_context__.s([
    "invariant",
    ()=>invariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function invariant(condition, format) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    if (isProduction()) //TURBOPACK unreachable
    ;
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1 // we don't care about invariant's own frame
        ;
        throw error;
    }
}
function isProduction() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'production';
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ __turbopack_context__.s([
    "get",
    ()=>get,
    "intersection",
    ()=>intersection,
    "isObject",
    ()=>isObject,
    "isString",
    ()=>isString,
    "without",
    ()=>without,
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function get(obj, path, defaultValue) {
    return path.split('.').reduce(function(a, c) {
        return a && a[c] ? a[c] : defaultValue || null;
    }, obj);
}
function without(items, item) {
    return items.filter(function(i) {
        return i !== item;
    });
}
function isString(input) {
    return typeof input === 'string';
}
function isObject(input) {
    return (typeof input === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(input)) === 'object';
}
function xor(itemsA, itemsB) {
    var map = new Map();
    var insertItem = function(item) {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    var result = [];
    map.forEach(function(count, key) {
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
function intersection(itemsA, itemsB) {
    return itemsA.filter(function(t) {
        return itemsB.indexOf(t) > -1;
    });
} //# sourceMappingURL=js_utils.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BEGIN_DRAG",
    ()=>BEGIN_DRAG,
    "DROP",
    ()=>DROP,
    "END_DRAG",
    ()=>END_DRAG,
    "HOVER",
    ()=>HOVER,
    "INIT_COORDS",
    ()=>INIT_COORDS,
    "PUBLISH_DRAG_SOURCE",
    ()=>PUBLISH_DRAG_SOURCE
]);
var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG'; //# sourceMappingURL=types.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setClientOffset",
    ()=>setClientOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
;
function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INIT_COORDS"],
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
} //# sourceMappingURL=setClientOffset.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBeginDrag",
    ()=>createBeginDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$local$2f$setClientOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
;
;
;
;
var ResetCoordinatesAction = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INIT_COORDS"],
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag() {
        var sourceIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            publishSource: true
        };
        var _options_publishSource = options.publishSource, publishSource = _options_publishSource === void 0 ? true : _options_publishSource, clientOffset = options.clientOffset, getSourceClientOffset = options.getSourceClientOffset;
        var monitor = manager.getMonitor();
        var registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$local$2f$setClientOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setClientOffset"])(clientOffset));
        verifyInvariants(sourceIds, monitor, registry);
        // Get the draggable source
        var sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        var sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$local$2f$setClientOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setClientOffset"])(clientOffset, sourceClientOffset));
        var source = registry.getSource(sourceId);
        var item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        var itemType = registry.getSourceType(sourceId);
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGIN_DRAG"],
            payload: {
                itemType: itemType,
                item: item,
                sourceId: sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants(sourceIds, monitor, registry) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    var sourceId = null;
    for(var i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
} //# sourceMappingURL=beginDrag.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/drop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDrop",
    ()=>createDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
;
;
;
function createDrop(manager) {
    return function drop() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var monitor = manager.getMonitor();
        var registry = manager.getRegistry();
        verifyInvariants(monitor);
        var targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach(function(targetId, index) {
            var dropResult = determineDropResult(targetId, index, registry, monitor);
            var action = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DROP"],
                payload: {
                    dropResult: _objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(monitor.isDragging(), 'Cannot call drop while not dragging.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    var target = registry.getTarget(targetId);
    var dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof dropResult === 'undefined' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
} //# sourceMappingURL=drop.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEndDrag",
    ()=>createEndDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
;
;
function createEndDrag(manager) {
    return function endDrag() {
        var monitor = manager.getMonitor();
        var registry = manager.getRegistry();
        verifyIsDragging(monitor);
        var sourceId = monitor.getSourceId();
        if (sourceId != null) {
            var source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_DRAG"]
        };
    };
}
function verifyIsDragging(monitor) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
} //# sourceMappingURL=endDrag.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/matchesType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchesType",
    ()=>matchesType
]);
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some(function(t) {
        return t === draggedItemType;
    }) : targetType === draggedItemType;
} //# sourceMappingURL=matchesType.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/hover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHover",
    ()=>createHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/matchesType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
;
;
;
function createHover(manager) {
    return function hover(targetIdsArg) {
        var clientOffset = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).clientOffset;
        verifyTargetIdsIsArray(targetIdsArg);
        var targetIds = targetIdsArg.slice(0);
        var monitor = manager.getMonitor();
        var registry = manager.getRegistry();
        var draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOVER"],
            payload: {
                targetIds: targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(monitor.isDragging(), 'Cannot call hover while not dragging.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(var i = 0; i < targetIds.length; i++){
        var targetId = targetIds[i];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        var target = registry.getTarget(targetId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(var i = targetIds.length - 1; i >= 0; i--){
        var targetId = targetIds[i];
        var targetType = registry.getTargetType(targetId);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesType"])(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        var target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
} //# sourceMappingURL=hover.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPublishDragSource",
    ()=>createPublishDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
;
function createPublishDragSource(manager) {
    return function publishDragSource() {
        var monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISH_DRAG_SOURCE"]
            };
        }
        return;
    };
} //# sourceMappingURL=publishDragSource.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDragDropActions",
    ()=>createDragDropActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$beginDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/drop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$endDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/hover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$publishDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js [app-client] (ecmascript)");
;
;
;
;
;
;
function createDragDropActions(manager) {
    return {
        beginDrag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$beginDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBeginDrag"])(manager),
        publishDragSource: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$publishDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublishDragSource"])(manager),
        hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHover"])(manager),
        drop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDrop"])(manager),
        endDrag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$endDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEndDrag"])(manager)
    };
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragDropManagerImpl",
    ()=>DragDropManagerImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/index.js [app-client] (ecmascript) <locals>");
;
;
;
var DragDropManagerImpl = /*#__PURE__*/ function() {
    "use strict";
    function DragDropManagerImpl(store, monitor) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DragDropManagerImpl);
        this.isSetUp = false;
        this.handleRefCountChange = function() {
            var shouldSetUp = _this.store.getState().refCount > 0;
            if (_this.backend) {
                if (shouldSetUp && !_this.isSetUp) {
                    _this.backend.setup();
                    _this.isSetUp = true;
                } else if (!shouldSetUp && _this.isSetUp) {
                    _this.backend.teardown();
                    _this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DragDropManagerImpl, [
        {
            key: "receiveBackend",
            value: function receiveBackend(backend) {
                this.backend = backend;
            }
        },
        {
            key: "getMonitor",
            value: function getMonitor() {
                return this.monitor;
            }
        },
        {
            key: "getBackend",
            value: function getBackend() {
                return this.backend;
            }
        },
        {
            key: "getRegistry",
            value: function getRegistry() {
                return this.monitor.registry;
            }
        },
        {
            key: "getActions",
            value: function getActions() {
                /* eslint-disable-next-line @typescript-eslint/no-this-alias */ var manager = this;
                var dispatch = this.store.dispatch;
                function bindActionCreator(actionCreator) {
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var action = actionCreator.apply(manager, args);
                        if (typeof action !== 'undefined') {
                            dispatch(action);
                        }
                    };
                }
                var actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDragDropActions"])(this);
                return Object.keys(actions).reduce(function(boundActions, key) {
                    var action = actions[key];
                    boundActions[key] = bindActionCreator(action);
                    return boundActions;
                }, {});
            }
        },
        {
            key: "dispatch",
            value: function dispatch(action) {
                this.store.dispatch(action);
            }
        }
    ]);
    return DragDropManagerImpl;
} //# sourceMappingURL=DragDropManagerImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/coords.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ __turbopack_context__.s([
    "add",
    ()=>add,
    "getDifferenceFromInitialOffset",
    ()=>getDifferenceFromInitialOffset,
    "getSourceClientOffset",
    ()=>getSourceClientOffset,
    "subtract",
    ()=>subtract
]);
function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function getSourceClientOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
} //# sourceMappingURL=coords.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/dirtiness.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL",
    ()=>ALL,
    "NONE",
    ()=>NONE,
    "areDirty",
    ()=>areDirty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)");
;
var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    var commonIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersection"])(handlerIds, dirtyIds);
    return commonIds.length > 0;
} //# sourceMappingURL=dirtiness.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragDropMonitorImpl",
    ()=>DragDropMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$coords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/coords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/dirtiness.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/matchesType.js [app-client] (ecmascript)");
;
;
;
;
;
;
var DragDropMonitorImpl = /*#__PURE__*/ function() {
    "use strict";
    function DragDropMonitorImpl(store, registry) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DragDropMonitorImpl);
        this.store = store;
        this.registry = registry;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DragDropMonitorImpl, [
        {
            key: "subscribeToStateChange",
            value: function subscribeToStateChange(listener) {
                var _this = this;
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var handlerIds = options.handlerIds;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof listener === 'function', 'listener must be a function.');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
                var prevStateId = this.store.getState().stateId;
                var handleChange = function() {
                    var state = _this.store.getState();
                    var currentStateId = state.stateId;
                    try {
                        var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areDirty"])(state.dirtyHandlerIds, handlerIds);
                        if (!canSkipListener) {
                            listener();
                        }
                    } finally{
                        prevStateId = currentStateId;
                    }
                };
                return this.store.subscribe(handleChange);
            }
        },
        {
            key: "subscribeToOffsetChange",
            value: function subscribeToOffsetChange(listener) {
                var _this = this;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof listener === 'function', 'listener must be a function.');
                var previousState = this.store.getState().dragOffset;
                var handleChange = function() {
                    var nextState = _this.store.getState().dragOffset;
                    if (nextState === previousState) {
                        return;
                    }
                    previousState = nextState;
                    listener();
                };
                return this.store.subscribe(handleChange);
            }
        },
        {
            key: "canDragSource",
            value: function canDragSource(sourceId) {
                if (!sourceId) {
                    return false;
                }
                var source = this.registry.getSource(sourceId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(source, "Expected to find a valid source. sourceId=".concat(sourceId));
                if (this.isDragging()) {
                    return false;
                }
                return source.canDrag(this, sourceId);
            }
        },
        {
            key: "canDropOnTarget",
            value: function canDropOnTarget(targetId) {
                // undefined on initial render
                if (!targetId) {
                    return false;
                }
                var target = this.registry.getTarget(targetId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(target, "Expected to find a valid target. targetId=".concat(targetId));
                if (!this.isDragging() || this.didDrop()) {
                    return false;
                }
                var targetType = this.registry.getTargetType(targetId);
                var draggedItemType = this.getItemType();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesType"])(targetType, draggedItemType) && target.canDrop(this, targetId);
            }
        },
        {
            key: "isDragging",
            value: function isDragging() {
                return Boolean(this.getItemType());
            }
        },
        {
            key: "isDraggingSource",
            value: function isDraggingSource(sourceId) {
                // undefined on initial render
                if (!sourceId) {
                    return false;
                }
                var source = this.registry.getSource(sourceId, true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(source, "Expected to find a valid source. sourceId=".concat(sourceId));
                if (!this.isDragging() || !this.isSourcePublic()) {
                    return false;
                }
                var sourceType = this.registry.getSourceType(sourceId);
                var draggedItemType = this.getItemType();
                if (sourceType !== draggedItemType) {
                    return false;
                }
                return source.isDragging(this, sourceId);
            }
        },
        {
            key: "isOverTarget",
            value: function isOverTarget(targetId) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    shallow: false
                };
                // undefined on initial render
                if (!targetId) {
                    return false;
                }
                var shallow = options.shallow;
                if (!this.isDragging()) {
                    return false;
                }
                var targetType = this.registry.getTargetType(targetId);
                var draggedItemType = this.getItemType();
                if (draggedItemType && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesType"])(targetType, draggedItemType)) {
                    return false;
                }
                var targetIds = this.getTargetIds();
                if (!targetIds.length) {
                    return false;
                }
                var index = targetIds.indexOf(targetId);
                if (shallow) {
                    return index === targetIds.length - 1;
                } else {
                    return index > -1;
                }
            }
        },
        {
            key: "getItemType",
            value: function getItemType() {
                return this.store.getState().dragOperation.itemType;
            }
        },
        {
            key: "getItem",
            value: function getItem() {
                return this.store.getState().dragOperation.item;
            }
        },
        {
            key: "getSourceId",
            value: function getSourceId() {
                return this.store.getState().dragOperation.sourceId;
            }
        },
        {
            key: "getTargetIds",
            value: function getTargetIds() {
                return this.store.getState().dragOperation.targetIds;
            }
        },
        {
            key: "getDropResult",
            value: function getDropResult() {
                return this.store.getState().dragOperation.dropResult;
            }
        },
        {
            key: "didDrop",
            value: function didDrop() {
                return this.store.getState().dragOperation.didDrop;
            }
        },
        {
            key: "isSourcePublic",
            value: function isSourcePublic() {
                return Boolean(this.store.getState().dragOperation.isSourcePublic);
            }
        },
        {
            key: "getInitialClientOffset",
            value: function getInitialClientOffset() {
                return this.store.getState().dragOffset.initialClientOffset;
            }
        },
        {
            key: "getInitialSourceClientOffset",
            value: function getInitialSourceClientOffset() {
                return this.store.getState().dragOffset.initialSourceClientOffset;
            }
        },
        {
            key: "getClientOffset",
            value: function getClientOffset() {
                return this.store.getState().dragOffset.clientOffset;
            }
        },
        {
            key: "getSourceClientOffset",
            value: function getSourceClientOffset() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$coords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSourceClientOffset"])(this.store.getState().dragOffset);
            }
        },
        {
            key: "getDifferenceFromInitialOffset",
            value: function getDifferenceFromInitialOffset() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$coords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifferenceFromInitialOffset"])(this.store.getState().dragOffset);
            }
        }
    ]);
    return DragDropMonitorImpl;
} //# sourceMappingURL=DragDropMonitorImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/makeRequestCall.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeRequestCall",
    ()=>makeRequestCall,
    "makeRequestCallFromMutationObserver",
    ()=>makeRequestCallFromMutationObserver,
    "makeRequestCallFromTimer",
    ()=>makeRequestCallFromTimer
]);
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ var scope = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
var makeRequestCall = typeof BrowserMutationObserver === 'function' ? // They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer; //# sourceMappingURL=makeRequestCall.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/AsapQueue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsapQueue",
    ()=>AsapQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */ var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$makeRequestCall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/makeRequestCall.js [app-client] (ecmascript)");
;
;
;
var AsapQueue = /*#__PURE__*/ function() {
    "use strict";
    function AsapQueue() {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AsapQueue);
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = function() {
            var q = _this.queue;
            while(_this.index < q.length){
                var currentIndex = _this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                _this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (_this.index > _this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(var scan = 0, newLength = q.length - _this.index; scan < newLength; scan++){
                        q[scan] = q[scan + _this.index];
                    }
                    q.length -= _this.index;
                    _this.index = 0;
                }
            }
            q.length = 0;
            _this.index = 0;
            _this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = function(err) {
            _this.pendingErrors.push(err);
            _this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$makeRequestCall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRequestCall"])(this.flush);
        this.requestErrorThrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$makeRequestCall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRequestCallFromTimer"])(function() {
            // Throw first error
            if (_this.pendingErrors.length) {
                throw _this.pendingErrors.shift();
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AsapQueue, [
        {
            // Use the fastest means possible to execute a task in its own turn, with
            // priority over other events including IO, animation, reflow, and redraw
            // events in browsers.
            //
            // An exception thrown by a task will permanently interrupt the processing of
            // subsequent tasks. The higher level `asap` function ensures that if an
            // exception is thrown by a task, that the task queue will continue flushing as
            // soon as possible, but if you use `rawAsap` directly, you are responsible to
            // either ensure that no exceptions are thrown from your task, or to manually
            // call `rawAsap.requestFlush` if an exception is thrown.
            key: "enqueueTask",
            value: function enqueueTask(task) {
                var _this = this, q = _this.queue, requestFlush = _this.requestFlush;
                if (!q.length) {
                    requestFlush();
                    this.flushing = true;
                }
                // Equivalent to push, but avoids a function call.
                q[q.length] = task;
            }
        }
    ]);
    return AsapQueue;
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
 //# sourceMappingURL=AsapQueue.js.map
();
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/RawTask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// `call`, just like a function.
__turbopack_context__.s([
    "RawTask",
    ()=>RawTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var RawTask = /*#__PURE__*/ function() {
    "use strict";
    function RawTask(onError, release) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, RawTask);
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RawTask, [
        {
            key: "call",
            value: function call() {
                try {
                    this.task && this.task();
                } catch (error) {
                    this.onError(error);
                } finally{
                    this.task = null;
                    this.release(this);
                }
            }
        }
    ]);
    return RawTask;
} //# sourceMappingURL=RawTask.js.map
();
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/TaskFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskFactory",
    ()=>TaskFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$RawTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/RawTask.js [app-client] (ecmascript)");
;
;
;
var TaskFactory = /*#__PURE__*/ function() {
    "use strict";
    function TaskFactory(onError) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, TaskFactory);
        this.onError = onError;
        this.freeTasks = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(TaskFactory, [
        {
            key: "create",
            value: function create(task) {
                var tasks = this.freeTasks;
                var t1 = tasks.length ? tasks.pop() : new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$RawTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawTask"](this.onError, function(t) {
                    return tasks[tasks.length] = t;
                });
                t1.task = task;
                return t1;
            }
        }
    ]);
    return TaskFactory;
} //# sourceMappingURL=TaskFactory.js.map
();
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/asap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asap",
    ()=>asap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$AsapQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/AsapQueue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$TaskFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/TaskFactory.js [app-client] (ecmascript)");
;
;
var asapQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$AsapQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsapQueue"]();
var taskFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$TaskFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskFactory"](asapQueue.registerPendingError);
function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
} //# sourceMappingURL=asap.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=types.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/asap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$AsapQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/AsapQueue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$TaskFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/TaskFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/types.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADD_SOURCE",
    ()=>ADD_SOURCE,
    "ADD_TARGET",
    ()=>ADD_TARGET,
    "REMOVE_SOURCE",
    ()=>REMOVE_SOURCE,
    "REMOVE_TARGET",
    ()=>REMOVE_TARGET,
    "addSource",
    ()=>addSource,
    "addTarget",
    ()=>addTarget,
    "removeSource",
    ()=>removeSource,
    "removeTarget",
    ()=>removeTarget
]);
var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId: sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId: targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId: sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId: targetId
        }
    };
} //# sourceMappingURL=registry.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/contracts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSourceContract",
    ()=>validateSourceContract,
    "validateTargetContract",
    ()=>validateTargetContract,
    "validateType",
    ()=>validateType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
;
;
function validateSourceContract(source) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof target.hover === 'function', 'Expected hover to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach(function(t) {
            return validateType(t, false);
        });
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof type === 'string' || (typeof type === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
} //# sourceMappingURL=contracts.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/interfaces.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandlerRole",
    ()=>HandlerRole
]);
var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {})); //# sourceMappingURL=interfaces.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/getNextUniqueId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextUniqueId",
    ()=>getNextUniqueId
]);
var nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
} //# sourceMappingURL=getNextUniqueId.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandlerRegistryImpl",
    ()=>HandlerRegistryImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/asap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/interfaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$getNextUniqueId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/getNextUniqueId.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function getNextHandlerId(role) {
    var id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$getNextUniqueId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextUniqueId"])().toString();
    switch(role){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE:
            return "S".concat(id);
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET:
            return "T".concat(id);
        default:
            throw new Error("Unknown Handler Role: ".concat(role));
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE;
        case 'T':
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET;
        default:
            throw new Error("Cannot parse handler ID: ".concat(handlerId));
    }
}
function mapContainsValue(map, searchValue) {
    var entries = map.entries();
    var isDone = false;
    do {
        var _entries_next = entries.next(), done = _entries_next.done, _entries_next_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_entries_next.value, 2), value = _entries_next_value[1];
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
var HandlerRegistryImpl = /*#__PURE__*/ function() {
    "use strict";
    function HandlerRegistryImpl(store) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, HandlerRegistryImpl);
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HandlerRegistryImpl, [
        {
            key: "addSource",
            value: function addSource(type, source) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateType"])(type);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSourceContract"])(source);
                var sourceId = this.addHandler(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE, type, source);
                this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSource"])(sourceId));
                return sourceId;
            }
        },
        {
            key: "addTarget",
            value: function addTarget(type, target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateType"])(type, true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTargetContract"])(target);
                var targetId = this.addHandler(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET, type, target);
                this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTarget"])(targetId));
                return targetId;
            }
        },
        {
            key: "containsHandler",
            value: function containsHandler(handler) {
                return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
            }
        },
        {
            key: "getSource",
            value: function getSource(sourceId) {
                var includePinned = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.isSourceId(sourceId), 'Expected a valid source ID.');
                var isPinned = includePinned && sourceId === this.pinnedSourceId;
                var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
                return source;
            }
        },
        {
            key: "getTarget",
            value: function getTarget(targetId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.isTargetId(targetId), 'Expected a valid target ID.');
                return this.dropTargets.get(targetId);
            }
        },
        {
            key: "getSourceType",
            value: function getSourceType(sourceId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.isSourceId(sourceId), 'Expected a valid source ID.');
                return this.types.get(sourceId);
            }
        },
        {
            key: "getTargetType",
            value: function getTargetType(targetId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.isTargetId(targetId), 'Expected a valid target ID.');
                return this.types.get(targetId);
            }
        },
        {
            key: "isSourceId",
            value: function isSourceId(handlerId) {
                var role = parseRoleFromHandlerId(handlerId);
                return role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE;
            }
        },
        {
            key: "isTargetId",
            value: function isTargetId(handlerId) {
                var role = parseRoleFromHandlerId(handlerId);
                return role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET;
            }
        },
        {
            key: "removeSource",
            value: function removeSource(sourceId) {
                var _this = this;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.getSource(sourceId), 'Expected an existing source.');
                this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeSource"])(sourceId));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asap"])(function() {
                    _this.dragSources.delete(sourceId);
                    _this.types.delete(sourceId);
                });
            }
        },
        {
            key: "removeTarget",
            value: function removeTarget(targetId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.getTarget(targetId), 'Expected an existing target.');
                this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTarget"])(targetId));
                this.dropTargets.delete(targetId);
                this.types.delete(targetId);
            }
        },
        {
            key: "pinSource",
            value: function pinSource(sourceId) {
                var source = this.getSource(sourceId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(source, 'Expected an existing source.');
                this.pinnedSourceId = sourceId;
                this.pinnedSource = source;
            }
        },
        {
            key: "unpinSource",
            value: function unpinSource() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(this.pinnedSource, 'No source is pinned at the time.');
                this.pinnedSourceId = null;
                this.pinnedSource = null;
            }
        },
        {
            key: "addHandler",
            value: function addHandler(role, type, handler) {
                var id = getNextHandlerId(role);
                this.types.set(id, type);
                if (role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE) {
                    this.dragSources.set(id, handler);
                } else if (role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET) {
                    this.dropTargets.set(id, handler);
                }
                return id;
            }
        }
    ]);
    return HandlerRegistryImpl;
} //# sourceMappingURL=HandlerRegistryImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/equality.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areArraysEqual",
    ()=>areArraysEqual,
    "areCoordsEqual",
    ()=>areCoordsEqual,
    "strictEquality",
    ()=>strictEquality
]);
var strictEquality = function(a, b) {
    return a === b;
};
function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
function areArraysEqual(a, b) {
    var isEqual = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : strictEquality;
    if (a.length !== b.length) {
        return false;
    }
    for(var i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=equality.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/dirtiness.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/equality.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)");
;
;
;
;
;
function reduce() {
    var _state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NONE"], action = arguments.length > 1 ? arguments[1] : void 0;
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOVER"]:
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_TARGET"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REMOVE_TARGET"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REMOVE_SOURCE"]:
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NONE"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGIN_DRAG"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISH_DRAG_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_DRAG"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DROP"]:
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL"];
    }
    var _action_payload = action.payload, _action_payload_targetIds = _action_payload.targetIds, targetIds = _action_payload_targetIds === void 0 ? [] : _action_payload_targetIds, _action_payload_prevTargetIds = _action_payload.prevTargetIds, prevTargetIds = _action_payload_prevTargetIds === void 0 ? [] : _action_payload_prevTargetIds;
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xor"])(targetIds, prevTargetIds);
    var didChange = result.length > 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areArraysEqual"])(targetIds, prevTargetIds);
    if (!didChange) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NONE"];
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    var innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
} //# sourceMappingURL=dirtyHandlerIds.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOffset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/equality.js [app-client] (ecmascript)");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
;
;
var initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;
    var payload = action.payload;
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INIT_COORDS"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGIN_DRAG"]:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOVER"]:
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areCoordsEqual"])(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return _objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_DRAG"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DROP"]:
            return initialState;
        default:
            return state;
    }
} //# sourceMappingURL=dragOffset.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOperation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
;
;
;
var initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;
    var payload = action.payload;
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGIN_DRAG"]:
            return _objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISH_DRAG_SOURCE"]:
            return _objectSpread({}, state, {
                isSourcePublic: true
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOVER"]:
            return _objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REMOVE_TARGET"]:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return _objectSpread({}, state, {
                targetIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["without"])(state.targetIds, payload.targetId)
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DROP"]:
            return _objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_DRAG"]:
            return _objectSpread({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
} //# sourceMappingURL=dragOperation.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/refCount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-client] (ecmascript)");
;
function reduce() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, action = arguments.length > 1 ? arguments[1] : void 0;
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_TARGET"]:
            return state + 1;
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REMOVE_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REMOVE_TARGET"]:
            return state - 1;
        default:
            return state;
    }
} //# sourceMappingURL=refCount.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/stateId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
function reduce() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return state + 1;
} //# sourceMappingURL=stateId.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dirtyHandlerIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOffset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOperation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$refCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/refCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$stateId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/stateId.js [app-client] (ecmascript)");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
;
;
;
;
;
;
function reduce() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dirtyHandlerIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread({}, action.payload, {
                prevTargetIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(state.dragOffset, action),
        refCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$refCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(state.refCount, action),
        dragOperation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(state.dragOperation, action),
        stateId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$stateId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(state.stateId)
    };
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/createDragDropManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDragDropManager",
    ()=>createDragDropManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/redux/es/redux.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropManagerImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$HandlerRegistryImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/index.js [app-client] (ecmascript)");
;
;
;
;
;
function createDragDropManager(backendFactory) {
    var globalContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined, backendOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, debugMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var store = makeStoreInstance(debugMode);
    var monitor = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropMonitorImpl"](store, new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$HandlerRegistryImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandlerRegistryImpl"](store));
    var manager = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropManagerImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropManagerImpl"](store, monitor);
    var backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"], debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
} //# sourceMappingURL=createDragDropManager.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DndContext",
    ()=>DndContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var DndContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    dragDropManager: undefined
}); //# sourceMappingURL=DndContext.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DndProvider",
    ()=>DndProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$createDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/createDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndContext.js [app-client] (ecmascript)");
;
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
;
;
;
var refCount = 0;
var INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function DndProvider(_param) {
    var children = _param.children, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    var _getDndContextValue // memoized from props
     = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getDndContextValue(props), 2), manager = _getDndContextValue[0], isGlobalInstance = _getDndContextValue[1];
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DndProvider.DndProvider.useEffect": function() {
            if (isGlobalInstance) {
                var context = getGlobalContext();
                ++refCount;
                return ({
                    "DndProvider.DndProvider.useEffect": function() {
                        if (--refCount === 0) {
                            context[INSTANCE_SYM] = null;
                        }
                    }
                })["DndProvider.DndProvider.useEffect"];
            }
            return;
        }
    }["DndProvider.DndProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"].Provider, {
        value: manager,
        children: children
    });
});
;
function getDndContextValue(props) {
    if ('manager' in props) {
        var manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    var manager1 = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    var isGlobalInstance = !props.context;
    return [
        manager1,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getGlobalContext(), options = arguments.length > 2 ? arguments[2] : void 0, debugMode = arguments.length > 3 ? arguments[3] : void 0;
    var ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$createDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDragDropManager"])(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
} //# sourceMappingURL=DndProvider.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// cheap lodash replacements
__turbopack_context__.s([
    "memoize",
    ()=>memoize,
    "union",
    ()=>union,
    "without",
    ()=>without
]);
function memoize(fn) {
    var result = null;
    var memoized = function() {
        if (result == null) {
            result = fn();
        }
        return result;
    };
    return memoized;
}
function without(items, item) {
    return items.filter(function(i) {
        return i !== item;
    });
}
function union(itemsA, itemsB) {
    var set = new Set();
    var insertItem = function(item) {
        return set.add(item);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    var result = [];
    set.forEach(function(key) {
        return result.push(key);
    });
    return result;
} //# sourceMappingURL=js_utils.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterLeaveCounter",
    ()=>EnterLeaveCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js [app-client] (ecmascript)");
;
;
;
var EnterLeaveCounter = /*#__PURE__*/ function() {
    "use strict";
    function EnterLeaveCounter(isNodeInDocument) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, EnterLeaveCounter);
        this.entered = [];
        this.isNodeInDocument = isNodeInDocument;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EnterLeaveCounter, [
        {
            key: "enter",
            value: function enter(enteringNode) {
                var _this = this;
                var previousLength = this.entered.length;
                var isNodeEntered = function(node) {
                    return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
                };
                this.entered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])(this.entered.filter(isNodeEntered), [
                    enteringNode
                ]);
                return previousLength === 0 && this.entered.length > 0;
            }
        },
        {
            key: "leave",
            value: function leave(leavingNode) {
                var previousLength = this.entered.length;
                this.entered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["without"])(this.entered.filter(this.isNodeInDocument), leavingNode);
                return previousLength > 0 && this.entered.length === 0;
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.entered = [];
            }
        }
    ]);
    return EnterLeaveCounter;
} //# sourceMappingURL=EnterLeaveCounter.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDragSource",
    ()=>NativeDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var NativeDragSource = /*#__PURE__*/ function() {
    "use strict";
    function NativeDragSource(config) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NativeDragSource);
        this.config = config;
        this.item = {};
        this.initializeExposedProperties();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NativeDragSource, [
        {
            key: "initializeExposedProperties",
            value: function initializeExposedProperties() {
                var _this = this;
                Object.keys(this.config.exposeProperties).forEach(function(property) {
                    Object.defineProperty(_this.item, property, {
                        configurable: true,
                        enumerable: true,
                        get: function get() {
                            // eslint-disable-next-line no-console
                            console.warn("Browser doesn't allow reading \"".concat(property, '" until the drop event.'));
                            return null;
                        }
                    });
                });
            }
        },
        {
            key: "loadDataTransfer",
            value: function loadDataTransfer(dataTransfer) {
                var _this = this;
                if (dataTransfer) {
                    var newProperties = {};
                    Object.keys(this.config.exposeProperties).forEach(function(property) {
                        var propertyFn = _this.config.exposeProperties[property];
                        if (propertyFn != null) {
                            newProperties[property] = {
                                value: propertyFn(dataTransfer, _this.config.matchesTypes),
                                configurable: true,
                                enumerable: true
                            };
                        }
                    });
                    Object.defineProperties(this.item, newProperties);
                }
            }
        },
        {
            key: "canDrag",
            value: function canDrag() {
                return true;
            }
        },
        {
            key: "beginDrag",
            value: function beginDrag() {
                return this.item;
            }
        },
        {
            key: "isDragging",
            value: function isDragging(monitor, handle) {
                return handle === monitor.getSourceId();
            }
        },
        {
            key: "endDrag",
            value: function endDrag() {
            // empty
            }
        }
    ]);
    return NativeDragSource;
} //# sourceMappingURL=NativeDragSource.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILE",
    ()=>FILE,
    "HTML",
    ()=>HTML,
    "TEXT",
    ()=>TEXT,
    "URL",
    ()=>URL
]);
var FILE = '__NATIVE_FILE__';
var URL = '__NATIVE_URL__';
var TEXT = '__NATIVE_TEXT__';
var HTML = '__NATIVE_HTML__'; //# sourceMappingURL=NativeTypes.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataFromDataTransfer",
    ()=>getDataFromDataTransfer
]);
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    var result = typesToTry.reduce(function(resultSoFar, typeToTry) {
        return resultSoFar || dataTransfer.getData(typeToTry);
    }, '');
    return result != null ? result : defaultValue;
} //# sourceMappingURL=getDataFromDataTransfer.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nativeTypesConfig",
    ()=>nativeTypesConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js [app-client] (ecmascript)");
;
;
;
var _obj;
var nativeTypesConfig = (_obj = {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE"], {
    exposeProperties: {
        files: function(dataTransfer) {
            return Array.prototype.slice.call(dataTransfer.files);
        },
        items: function(dataTransfer) {
            return dataTransfer.items;
        },
        dataTransfer: function(dataTransfer) {
            return dataTransfer;
        }
    },
    matchesTypes: [
        'Files'
    ]
}), (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML"], {
    exposeProperties: {
        html: function(dataTransfer, matchesTypes) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, '');
        },
        dataTransfer: function(dataTransfer) {
            return dataTransfer;
        }
    },
    matchesTypes: [
        'Html',
        'text/html'
    ]
}), (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URL"], {
    exposeProperties: {
        urls: function(dataTransfer, matchesTypes) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, '').split('\n');
        },
        dataTransfer: function(dataTransfer) {
            return dataTransfer;
        }
    },
    matchesTypes: [
        'Url',
        'text/uri-list'
    ]
}), (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT"], {
    exposeProperties: {
        text: function(dataTransfer, matchesTypes) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, '');
        },
        dataTransfer: function(dataTransfer) {
            return dataTransfer;
        }
    },
    matchesTypes: [
        'Text',
        'text/plain'
    ]
}), _obj); //# sourceMappingURL=nativeTypesConfig.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNativeDragSource",
    ()=>createNativeDragSource,
    "matchNativeItemType",
    ()=>matchNativeItemType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$NativeDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js [app-client] (ecmascript)");
;
;
function createNativeDragSource(type, dataTransfer) {
    var config = __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeTypesConfig"][type];
    if (!config) {
        throw new Error("native type ".concat(type, " has no configuration"));
    }
    var result = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$NativeDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDragSource"](config);
    result.loadDataTransfer(dataTransfer);
    return result;
}
function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
        return null;
    }
    var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeTypesConfig"]).filter(function(nativeItemType) {
        var typeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeTypesConfig"][nativeItemType];
        if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
            return false;
        }
        return typeConfig.matchesTypes.some(function(t) {
            return dataTransferTypes.indexOf(t) > -1;
        });
    })[0] || null;
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/BrowserDetector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFirefox",
    ()=>isFirefox,
    "isSafari",
    ()=>isSafari
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js [app-client] (ecmascript)");
;
var isFirefox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"])(function() {
    return /firefox/i.test(navigator.userAgent);
});
var isSafari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"])(function() {
    return Boolean(window.safari);
}); //# sourceMappingURL=BrowserDetector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonotonicInterpolant",
    ()=>MonotonicInterpolant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var MonotonicInterpolant = /*#__PURE__*/ function() {
    "use strict";
    function MonotonicInterpolant(xs, ys) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MonotonicInterpolant);
        var length = xs.length;
        // Rearrange xs and ys so that xs is sorted
        var indexes = [];
        for(var i = 0; i < length; i++){
            indexes.push(i);
        }
        indexes.sort(function(a, b) {
            return xs[a] < xs[b] ? -1 : 1;
        });
        // Get consecutive differences and slopes
        var dys = [];
        var dxs = [];
        var ms = [];
        var dx;
        var dy;
        for(var i1 = 0; i1 < length - 1; i1++){
            dx = xs[i1 + 1] - xs[i1];
            dy = ys[i1 + 1] - ys[i1];
            dxs.push(dx);
            dys.push(dy);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        var c1s = [
            ms[0]
        ];
        for(var i2 = 0; i2 < dxs.length - 1; i2++){
            var m2 = ms[i2];
            var mNext = ms[i2 + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            } else {
                dx = dxs[i2];
                var dxNext = dxs[i2 + 1];
                var common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        var c2s = [];
        var c3s = [];
        var m;
        for(var i3 = 0; i3 < c1s.length - 1; i3++){
            m = ms[i3];
            var c1 = c1s[i3];
            var invDx = 1 / dxs[i3];
            var common1 = c1 + c1s[i3 + 1] - m - m;
            c2s.push((m - c1 - common1) * invDx);
            c3s.push(common1 * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MonotonicInterpolant, [
        {
            key: "interpolate",
            value: function interpolate(x) {
                var _this = this, xs = _this.xs, ys = _this.ys, c1s = _this.c1s, c2s = _this.c2s, c3s = _this.c3s;
                // The rightmost point in the dataset should give an exact result
                var i = xs.length - 1;
                if (x === xs[i]) {
                    return ys[i];
                }
                // Search for the interval x is in, returning the corresponding y if x is one of the original xs
                var low = 0;
                var high = c3s.length - 1;
                var mid;
                while(low <= high){
                    mid = Math.floor(0.5 * (low + high));
                    var xHere = xs[mid];
                    if (xHere < x) {
                        low = mid + 1;
                    } else if (xHere > x) {
                        high = mid - 1;
                    } else {
                        return ys[mid];
                    }
                }
                i = Math.max(0, high);
                // Interpolate
                var diff = x - xs[i];
                var diffSq = diff * diff;
                return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
            }
        }
    ]);
    return MonotonicInterpolant;
} //# sourceMappingURL=MonotonicInterpolant.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OffsetUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDragPreviewOffset",
    ()=>getDragPreviewOffset,
    "getEventClientOffset",
    ()=>getEventClientOffset,
    "getNodeClientOffset",
    ()=>getNodeClientOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/BrowserDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$MonotonicInterpolant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js [app-client] (ecmascript)");
;
;
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    var _el_getBoundingClientRect = el.getBoundingClientRect(), top = _el_getBoundingClientRect.top, left = _el_getBoundingClientRect.left;
    return {
        x: left,
        y: top
    };
}
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function isImageNode(node) {
    var ref;
    return node.nodeName === 'IMG' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"])() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return {
        dragPreviewWidth: dragPreviewWidth,
        dragPreviewHeight: dragPreviewHeight
    };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    var isImage = isImageNode(dragPreview);
    var dragPreviewNode = isImage ? sourceNode : dragPreview;
    var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    var offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
    var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
    var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth, dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;
    var calculateYOffset = function() {
        var interpolantY = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$MonotonicInterpolant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonotonicInterpolant"]([
            0,
            0.5,
            1
        ], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
        ]);
        var y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    var calculateXOffset = function() {
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        var interpolantX = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$MonotonicInterpolant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonotonicInterpolant"]([
            0,
            0.5,
            1
        ], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
    var isManualOffsetX = offsetX === 0 || offsetX;
    var isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset()
    };
} //# sourceMappingURL=OffsetUtils.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OptionsReader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionsReader",
    ()=>OptionsReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var OptionsReader = /*#__PURE__*/ function() {
    "use strict";
    function OptionsReader(globalContext, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, OptionsReader);
        this.ownerDocument = null;
        this.globalContext = globalContext;
        this.optionsArgs = options;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(OptionsReader, [
        {
            key: "window",
            get: function get() {
                if (this.globalContext) {
                    return this.globalContext;
                } else if (typeof window !== 'undefined') {
                    return window;
                }
                return undefined;
            }
        },
        {
            key: "document",
            get: function get() {
                var ref;
                if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
                    return this.globalContext.document;
                } else if (this.window) {
                    return this.window.document;
                } else {
                    return undefined;
                }
            }
        },
        {
            key: "rootElement",
            get: function get() {
                var ref;
                return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
            }
        }
    ]);
    return OptionsReader;
} //# sourceMappingURL=OptionsReader.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML5BackendImpl",
    ()=>HTML5BackendImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$EnterLeaveCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OffsetUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OptionsReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OptionsReader.js [app-client] (ecmascript)");
;
;
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
;
;
;
;
;
var HTML5BackendImpl = /*#__PURE__*/ function() {
    "use strict";
    function HTML5BackendImpl(manager, globalContext, options) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, HTML5BackendImpl);
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.lastClientOffset = null;
        this.hoverRafId = null;
        this.getSourceClientOffset = function(sourceId) {
            var source = _this.sourceNodes.get(sourceId);
            return source && (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeClientOffset"])(source) || null;
        };
        this.endDragNativeItem = function() {
            if (!_this.isDraggingNativeItem()) {
                return;
            }
            _this.actions.endDrag();
            if (_this.currentNativeHandle) {
                _this.registry.removeSource(_this.currentNativeHandle);
            }
            _this.currentNativeHandle = null;
            _this.currentNativeSource = null;
        };
        this.isNodeInDocument = function(node) {
            // Check the node either in the main document or in the current context
            return Boolean(node && _this.document && _this.document.body && _this.document.body.contains(node));
        };
        this.endDragIfSourceWasRemovedFromDOM = function() {
            var node = _this.currentDragSourceNode;
            if (node == null || _this.isNodeInDocument(node)) {
                return;
            }
            if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
                _this.actions.endDrag();
            }
            _this.cancelHover();
        };
        this.scheduleHover = function(dragOverTargetIds) {
            if (_this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                _this.hoverRafId = requestAnimationFrame(function() {
                    if (_this.monitor.isDragging()) {
                        _this.actions.hover(dragOverTargetIds || [], {
                            clientOffset: _this.lastClientOffset
                        });
                    }
                    _this.hoverRafId = null;
                });
            }
        };
        this.cancelHover = function() {
            if (_this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(_this.hoverRafId);
                _this.hoverRafId = null;
            }
        };
        this.handleTopDragStartCapture = function() {
            _this.clearCurrentDragSourceNode();
            _this.dragStartSourceIds = [];
        };
        this.handleTopDragStart = function(e) {
            if (e.defaultPrevented) {
                return;
            }
            var dragStartSourceIds = _this.dragStartSourceIds;
            _this.dragStartSourceIds = null;
            var clientOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e);
            // Avoid crashing if we missed a drop event or our previous drag died
            if (_this.monitor.isDragging()) {
                _this.actions.endDrag();
                _this.cancelHover();
            }
            // Don't publish the source just yet (see why below)
            _this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: _this.getSourceClientOffset,
                clientOffset: clientOffset
            });
            var dataTransfer = e.dataTransfer;
            var nativeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchNativeItemType"])(dataTransfer);
            if (_this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                    // Use custom drag image if user specifies it.
                    // If child drag source refuses drag but parent agrees,
                    // use parent's node as drag image. Neither works in IE though.
                    var sourceId = _this.monitor.getSourceId();
                    var sourceNode = _this.sourceNodes.get(sourceId);
                    var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;
                    if (dragPreview) {
                        var _this_getCurrentSourcePreviewNodeOptions = _this.getCurrentSourcePreviewNodeOptions(), anchorX = _this_getCurrentSourcePreviewNodeOptions.anchorX, anchorY = _this_getCurrentSourcePreviewNodeOptions.anchorY, offsetX = _this_getCurrentSourcePreviewNodeOptions.offsetX, offsetY = _this_getCurrentSourcePreviewNodeOptions.offsetY;
                        var anchorPoint = {
                            anchorX: anchorX,
                            anchorY: anchorY
                        };
                        var offsetPoint = {
                            offsetX: offsetX,
                            offsetY: offsetY
                        };
                        var dragPreviewOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDragPreviewOffset"])(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                    }
                }
                try {
                    // Firefox won't drag without setting data
                    dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
                } catch (err) {
                // IE doesn't support MIME types in setData
                }
                // Store drag source node so we can check whether
                // it is removed from DOM and trigger endDrag manually.
                _this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                var captureDraggingState = _this.getCurrentSourcePreviewNodeOptions().captureDraggingState;
                if (!captureDraggingState) {
                    // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(function() {
                        return _this.actions.publishDragSource();
                    }, 0);
                } else {
                    // In some cases the user may want to override this behavior, e.g.
                    // to work around IE not supporting custom drag previews.
                    //
                    // When using a custom drag layer, the only way to prevent
                    // the default drag preview from drawing in IE is to screenshot
                    // the dragging state in which the node itself has zero opacity
                    // and height. In this case, though, returning null from render()
                    // will abruptly end the dragging, which is not obvious.
                    //
                    // This is the reason such behavior is strictly opt-in.
                    _this.actions.publishDragSource();
                }
            } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                _this.beginDragNativeItem(nativeType);
            } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                // Just let it drag. It's a native type (URL or text) and will be picked up in
                // dragenter handler.
                return;
            } else {
                // If by this time no drag source reacted, tell browser not to drag.
                e.preventDefault();
            }
        };
        this.handleTopDragEndCapture = function() {
            if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                _this.actions.endDrag();
            }
            _this.cancelHover();
        };
        this.handleTopDragEnterCapture = function(e) {
            _this.dragEnterTargetIds = [];
            if (_this.isDraggingNativeItem()) {
                var ref;
                (ref = _this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
            var isFirstEnter = _this.enterLeaveCounter.enter(e.target);
            if (!isFirstEnter || _this.monitor.isDragging()) {
                return;
            }
            var dataTransfer = e.dataTransfer;
            var nativeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchNativeItemType"])(dataTransfer);
            if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                _this.beginDragNativeItem(nativeType, dataTransfer);
            }
        };
        this.handleTopDragEnter = function(e) {
            var dragEnterTargetIds = _this.dragEnterTargetIds;
            _this.dragEnterTargetIds = [];
            if (!_this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
            }
            _this.altKeyPressed = e.altKey;
            // If the target changes position as the result of `dragenter`, `dragover` might still
            // get dispatched despite target being no longer there. The easy solution is to check
            // whether there actually is a target before firing `hover`.
            if (dragEnterTargetIds.length > 0) {
                _this.actions.hover(dragEnterTargetIds, {
                    clientOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e)
                });
            }
            var canDrop = dragEnterTargetIds.some(function(targetId) {
                return _this.monitor.canDropOnTarget(targetId);
            });
            if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
                }
            }
        };
        this.handleTopDragOverCapture = function(e) {
            _this.dragOverTargetIds = [];
            if (_this.isDraggingNativeItem()) {
                var ref;
                (ref = _this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
        };
        this.handleTopDragOver = function(e) {
            var dragOverTargetIds = _this.dragOverTargetIds;
            _this.dragOverTargetIds = [];
            if (!_this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
                return;
            }
            _this.altKeyPressed = e.altKey;
            _this.lastClientOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e);
            _this.scheduleHover(dragOverTargetIds);
            var canDrop = (dragOverTargetIds || []).some(function(targetId) {
                return _this.monitor.canDropOnTarget(targetId);
            });
            if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
                }
            } else if (_this.isDraggingNativeItem()) {
                // Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault();
            } else {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
            }
        };
        this.handleTopDragLeaveCapture = function(e) {
            if (_this.isDraggingNativeItem()) {
                e.preventDefault();
            }
            var isLastLeave = _this.enterLeaveCounter.leave(e.target);
            if (!isLastLeave) {
                return;
            }
            if (_this.isDraggingNativeItem()) {
                setTimeout(function() {
                    return _this.endDragNativeItem();
                }, 0);
            }
            _this.cancelHover();
        };
        this.handleTopDropCapture = function(e) {
            _this.dropTargetIds = [];
            if (_this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = _this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchNativeItemType"])(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
            }
            _this.enterLeaveCounter.reset();
        };
        this.handleTopDrop = function(e) {
            var dropTargetIds = _this.dropTargetIds;
            _this.dropTargetIds = [];
            _this.actions.hover(dropTargetIds, {
                clientOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e)
            });
            _this.actions.drop({
                dropEffect: _this.getCurrentDropEffect()
            });
            if (_this.isDraggingNativeItem()) {
                _this.endDragNativeItem();
            } else if (_this.monitor.isDragging()) {
                _this.actions.endDrag();
            }
            _this.cancelHover();
        };
        this.handleSelectStart = function(e) {
            var target = e.target;
            // Only IE requires us to explicitly say
            // we want drag drop operation to start
            if (typeof target.dragDrop !== 'function') {
                return;
            }
            // Inputs and textareas should be selectable
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }
            // For other targets, ask IE
            // to enable drag and drop
            e.preventDefault();
            target.dragDrop();
        };
        this.options = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OptionsReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsReader"](globalContext, options);
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.enterLeaveCounter = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$EnterLeaveCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnterLeaveCounter"](this.isNodeInDocument);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HTML5BackendImpl, [
        {
            /**
	 * Generate profiling statistics for the HTML5Backend.
	 */ key: "profile",
            value: function profile() {
                var ref, ref1;
                return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
                };
            }
        },
        {
            key: "window",
            get: // public for test
            function get() {
                return this.options.window;
            }
        },
        {
            key: "document",
            get: function get() {
                return this.options.document;
            }
        },
        {
            key: "rootElement",
            get: /**
	 * Get the root element to use for event subscriptions
	 */ function get() {
                return this.options.rootElement;
            }
        },
        {
            key: "setup",
            value: function setup() {
                var root = this.rootElement;
                if (root === undefined) {
                    return;
                }
                if (root.__isReactDndBackendSetUp) {
                    throw new Error('Cannot have two HTML5 backends at the same time.');
                }
                root.__isReactDndBackendSetUp = true;
                this.addEventListeners(root);
            }
        },
        {
            key: "teardown",
            value: function teardown() {
                var root = this.rootElement;
                if (root === undefined) {
                    return;
                }
                root.__isReactDndBackendSetUp = false;
                this.removeEventListeners(this.rootElement);
                this.clearCurrentDragSourceNode();
                if (this.asyncEndDragFrameId) {
                    var ref;
                    (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
                }
            }
        },
        {
            key: "connectDragPreview",
            value: function connectDragPreview(sourceId, node, options) {
                var _this = this;
                this.sourcePreviewNodeOptions.set(sourceId, options);
                this.sourcePreviewNodes.set(sourceId, node);
                return function() {
                    _this.sourcePreviewNodes.delete(sourceId);
                    _this.sourcePreviewNodeOptions.delete(sourceId);
                };
            }
        },
        {
            key: "connectDragSource",
            value: function connectDragSource(sourceId, node, options) {
                var _this = this;
                this.sourceNodes.set(sourceId, node);
                this.sourceNodeOptions.set(sourceId, options);
                var handleDragStart = function(e) {
                    return _this.handleDragStart(e, sourceId);
                };
                var handleSelectStart = function(e) {
                    return _this.handleSelectStart(e);
                };
                node.setAttribute('draggable', 'true');
                node.addEventListener('dragstart', handleDragStart);
                node.addEventListener('selectstart', handleSelectStart);
                return function() {
                    _this.sourceNodes.delete(sourceId);
                    _this.sourceNodeOptions.delete(sourceId);
                    node.removeEventListener('dragstart', handleDragStart);
                    node.removeEventListener('selectstart', handleSelectStart);
                    node.setAttribute('draggable', 'false');
                };
            }
        },
        {
            key: "connectDropTarget",
            value: function connectDropTarget(targetId, node) {
                var _this = this;
                var handleDragEnter = function(e) {
                    return _this.handleDragEnter(e, targetId);
                };
                var handleDragOver = function(e) {
                    return _this.handleDragOver(e, targetId);
                };
                var handleDrop = function(e) {
                    return _this.handleDrop(e, targetId);
                };
                node.addEventListener('dragenter', handleDragEnter);
                node.addEventListener('dragover', handleDragOver);
                node.addEventListener('drop', handleDrop);
                return function() {
                    node.removeEventListener('dragenter', handleDragEnter);
                    node.removeEventListener('dragover', handleDragOver);
                    node.removeEventListener('drop', handleDrop);
                };
            }
        },
        {
            key: "addEventListeners",
            value: function addEventListeners(target) {
                // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
                if (!target.addEventListener) {
                    return;
                }
                target.addEventListener('dragstart', this.handleTopDragStart);
                target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
                target.addEventListener('dragend', this.handleTopDragEndCapture, true);
                target.addEventListener('dragenter', this.handleTopDragEnter);
                target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
                target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
                target.addEventListener('dragover', this.handleTopDragOver);
                target.addEventListener('dragover', this.handleTopDragOverCapture, true);
                target.addEventListener('drop', this.handleTopDrop);
                target.addEventListener('drop', this.handleTopDropCapture, true);
            }
        },
        {
            key: "removeEventListeners",
            value: function removeEventListeners(target) {
                // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
                if (!target.removeEventListener) {
                    return;
                }
                target.removeEventListener('dragstart', this.handleTopDragStart);
                target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
                target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
                target.removeEventListener('dragenter', this.handleTopDragEnter);
                target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
                target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
                target.removeEventListener('dragover', this.handleTopDragOver);
                target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
                target.removeEventListener('drop', this.handleTopDrop);
                target.removeEventListener('drop', this.handleTopDropCapture, true);
            }
        },
        {
            key: "getCurrentSourceNodeOptions",
            value: function getCurrentSourceNodeOptions() {
                var sourceId = this.monitor.getSourceId();
                var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
                return _objectSpread({
                    dropEffect: this.altKeyPressed ? 'copy' : 'move'
                }, sourceNodeOptions || {});
            }
        },
        {
            key: "getCurrentDropEffect",
            value: function getCurrentDropEffect() {
                if (this.isDraggingNativeItem()) {
                    // It makes more sense to default to 'copy' for native resources
                    return 'copy';
                }
                return this.getCurrentSourceNodeOptions().dropEffect;
            }
        },
        {
            key: "getCurrentSourcePreviewNodeOptions",
            value: function getCurrentSourcePreviewNodeOptions() {
                var sourceId = this.monitor.getSourceId();
                var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
                return _objectSpread({
                    anchorX: 0.5,
                    anchorY: 0.5,
                    captureDraggingState: false
                }, sourcePreviewNodeOptions || {});
            }
        },
        {
            key: "isDraggingNativeItem",
            value: function isDraggingNativeItem() {
                var itemType = this.monitor.getItemType();
                return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__).some(function(key) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[key] === itemType;
                });
            }
        },
        {
            key: "beginDragNativeItem",
            value: function beginDragNativeItem(type, dataTransfer) {
                this.clearCurrentDragSourceNode();
                this.currentNativeSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNativeDragSource"])(type, dataTransfer);
                this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
                this.actions.beginDrag([
                    this.currentNativeHandle
                ]);
            }
        },
        {
            key: "setCurrentDragSourceNode",
            value: function setCurrentDragSourceNode(node) {
                var _this = this;
                this.clearCurrentDragSourceNode();
                this.currentDragSourceNode = node;
                // A timeout of > 0 is necessary to resolve Firefox issue referenced
                // See:
                //   * https://github.com/react-dnd/react-dnd/pull/928
                //   * https://github.com/react-dnd/react-dnd/issues/869
                var MOUSE_MOVE_TIMEOUT = 1000;
                // Receiving a mouse event in the middle of a dragging operation
                // means it has ended and the drag source node disappeared from DOM,
                // so the browser didn't dispatch the dragend event.
                //
                // We need to wait before we start listening for mousemove events.
                // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
                // immediately in some browsers.
                //
                // See:
                //   * https://github.com/react-dnd/react-dnd/pull/928
                //   * https://github.com/react-dnd/react-dnd/issues/869
                //
                this.mouseMoveTimeoutTimer = setTimeout(function() {
                    var ref;
                    return (ref = _this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', _this.endDragIfSourceWasRemovedFromDOM, true);
                }, MOUSE_MOVE_TIMEOUT);
            }
        },
        {
            key: "clearCurrentDragSourceNode",
            value: function clearCurrentDragSourceNode() {
                if (this.currentDragSourceNode) {
                    this.currentDragSourceNode = null;
                    if (this.rootElement) {
                        var ref;
                        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
                        this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
                    }
                    this.mouseMoveTimeoutTimer = null;
                    return true;
                }
                return false;
            }
        },
        {
            key: "handleDragStart",
            value: function handleDragStart(e, sourceId) {
                if (e.defaultPrevented) {
                    return;
                }
                if (!this.dragStartSourceIds) {
                    this.dragStartSourceIds = [];
                }
                this.dragStartSourceIds.unshift(sourceId);
            }
        },
        {
            key: "handleDragEnter",
            value: function handleDragEnter(_e, targetId) {
                this.dragEnterTargetIds.unshift(targetId);
            }
        },
        {
            key: "handleDragOver",
            value: function handleDragOver(_e, targetId) {
                if (this.dragOverTargetIds === null) {
                    this.dragOverTargetIds = [];
                }
                this.dragOverTargetIds.unshift(targetId);
            }
        },
        {
            key: "handleDrop",
            value: function handleDrop(_e, targetId) {
                this.dropTargetIds.unshift(targetId);
            }
        }
    ]);
    return HTML5BackendImpl;
} //# sourceMappingURL=HTML5BackendImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML5Backend",
    ()=>HTML5Backend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$HTML5BackendImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-client] (ecmascript)");
;
;
;
;
var HTML5Backend = function createBackend(manager, context, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$HTML5BackendImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML5BackendImpl"](manager, context, options);
}; //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/fast-deep-equal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/worklocal-frontend/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && (typeof a === "undefined" ? "undefined" : _type_of._(a)) == 'object' && (typeof b === "undefined" ? "undefined" : _type_of._(b)) == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]; //# sourceMappingURL=useIsomorphicLayoutEffect.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollector",
    ()=>useCollector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/fast-deep-equal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
;
function useCollector(monitor, collect, onUpdate) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCollector._useState.useState": function() {
            return collect(monitor);
        }
    }["useCollector._useState.useState"]), 2), collected = _useState[0], setCollected = _useState[1];
    var updateCollected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCollector.useCallback[updateCollected]": function() {
            var nextValue = collect(monitor);
            // This needs to be a deep-equality check because some monitor-collected values
            // include XYCoord objects that may be equivalent, but do not have instance equality.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(collected, nextValue)) {
                setCollected(nextValue);
                if (onUpdate) {
                    onUpdate();
                }
            }
        }
    }["useCollector.useCallback[updateCollected]"], [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(updateCollected);
    return [
        collected,
        updateCollected
    ];
} //# sourceMappingURL=useCollector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useMonitorOutput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMonitorOutput",
    ()=>useMonitorOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
function useMonitorOutput(monitor, collect, onCollect) {
    var _useCollector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollector"])(monitor, collect, onCollect), 2), collected = _useCollector[0], updateCollected = _useCollector[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function subscribeToMonitorStateChange() {
        var handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
} //# sourceMappingURL=useMonitorOutput.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollectedProps",
    ()=>useCollectedProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useMonitorOutput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useMonitorOutput.js [app-client] (ecmascript)");
;
function useCollectedProps(collector, monitor, connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useMonitorOutput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitorOutput"])(monitor, collector || ({
        "useCollectedProps.useMonitorOutput": function() {
            return {};
        }
    })["useCollectedProps.useMonitorOutput"], {
        "useCollectedProps.useMonitorOutput": function() {
            return connector.reconnect();
        }
    }["useCollectedProps.useMonitorOutput"]);
} //# sourceMappingURL=useCollectedProps.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOptionalFactory",
    ()=>useOptionalFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useOptionalFactory(arg, deps) {
    var memoDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(deps || []);
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOptionalFactory.useMemo": function() {
            return typeof arg === 'function' ? arg() : arg;
        }
    }["useOptionalFactory.useMemo"], memoDeps);
} //# sourceMappingURL=useOptionalFactory.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/connectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectDragPreview",
    ()=>useConnectDragPreview,
    "useConnectDragSource",
    ()=>useConnectDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useConnectDragSource(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConnectDragSource.useMemo": function() {
            return connector.hooks.dragSource();
        }
    }["useConnectDragSource.useMemo"], [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConnectDragPreview.useMemo": function() {
            return connector.hooks.dragPreview();
        }
    }["useConnectDragPreview.useMemo"], [
        connector
    ]);
} //# sourceMappingURL=connectors.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/shallowequal/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function shallowEqual(objA, objB, compare, compareContext) {
    var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if ((typeof objA === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(objA)) !== 'object' || !objA || (typeof objB === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(objB)) !== 'object' || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/isRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRef",
    ()=>isRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function isRef(obj) {
    return obj !== null && (typeof obj === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj)) === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current');
} //# sourceMappingURL=isRef.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapConnectorHooks",
    ()=>wrapConnectorHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    var displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return function() {
        var elementOrNode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        // When passed a node, call the hook straight away.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(elementOrNode)) {
            var node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        var element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        var ref = options ? function(node) {
            return hook(node, options);
        } : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    var wrappedHooks = {};
    Object.keys(hooks).forEach(function(key) {
        var hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            var wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = function() {
                return wrappedHook;
            };
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else {
        ref.current = node;
    }
}
function cloneWithRef(element, newRef) {
    var previousRef = element.ref;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
            ref: newRef
        });
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
            ref: function(node) {
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
} //# sourceMappingURL=wrapConnectorHooks.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/SourceConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceConnector",
    ()=>SourceConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/shallowequal/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/isRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-client] (ecmascript)");
;
;
;
;
;
var SourceConnector = /*#__PURE__*/ function() {
    "use strict";
    function SourceConnector(backend) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SourceConnector);
        this.hooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConnectorHooks"])({
            dragSource: function(node, options) {
                _this.clearDragSource();
                _this.dragSourceOptions = options || null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    _this.dragSourceRef = node;
                } else {
                    _this.dragSourceNode = node;
                }
                _this.reconnectDragSource();
            },
            dragPreview: function(node, options) {
                _this.clearDragPreview();
                _this.dragPreviewOptions = options || null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    _this.dragPreviewRef = node;
                } else {
                    _this.dragPreviewNode = node;
                }
                _this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SourceConnector, [
        {
            key: "receiveHandlerId",
            value: function receiveHandlerId(newHandlerId) {
                if (this.handlerId === newHandlerId) {
                    return;
                }
                this.handlerId = newHandlerId;
                this.reconnect();
            }
        },
        {
            key: "connectTarget",
            get: function get() {
                return this.dragSource;
            }
        },
        {
            key: "dragSourceOptions",
            get: function get() {
                return this.dragSourceOptionsInternal;
            },
            set: function set(options) {
                this.dragSourceOptionsInternal = options;
            }
        },
        {
            key: "dragPreviewOptions",
            get: function get() {
                return this.dragPreviewOptionsInternal;
            },
            set: function set(options) {
                this.dragPreviewOptionsInternal = options;
            }
        },
        {
            key: "reconnect",
            value: function reconnect() {
                var didChange = this.reconnectDragSource();
                this.reconnectDragPreview(didChange);
            }
        },
        {
            key: "reconnectDragSource",
            value: function reconnectDragSource() {
                var dragSource = this.dragSource;
                // if nothing has changed then don't resubscribe
                var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
                if (didChange) {
                    this.disconnectDragSource();
                }
                if (!this.handlerId) {
                    return didChange;
                }
                if (!dragSource) {
                    this.lastConnectedDragSource = dragSource;
                    return didChange;
                }
                if (didChange) {
                    this.lastConnectedHandlerId = this.handlerId;
                    this.lastConnectedDragSource = dragSource;
                    this.lastConnectedDragSourceOptions = this.dragSourceOptions;
                    this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
                }
                return didChange;
            }
        },
        {
            key: "reconnectDragPreview",
            value: function reconnectDragPreview() {
                var forceDidChange = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var dragPreview = this.dragPreview;
                // if nothing has changed then don't resubscribe
                var didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
                if (didChange) {
                    this.disconnectDragPreview();
                }
                if (!this.handlerId) {
                    return;
                }
                if (!dragPreview) {
                    this.lastConnectedDragPreview = dragPreview;
                    return;
                }
                if (didChange) {
                    this.lastConnectedHandlerId = this.handlerId;
                    this.lastConnectedDragPreview = dragPreview;
                    this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
                    this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
                }
            }
        },
        {
            key: "didHandlerIdChange",
            value: function didHandlerIdChange() {
                return this.lastConnectedHandlerId !== this.handlerId;
            }
        },
        {
            key: "didConnectedDragSourceChange",
            value: function didConnectedDragSourceChange() {
                return this.lastConnectedDragSource !== this.dragSource;
            }
        },
        {
            key: "didConnectedDragPreviewChange",
            value: function didConnectedDragPreviewChange() {
                return this.lastConnectedDragPreview !== this.dragPreview;
            }
        },
        {
            key: "didDragSourceOptionsChange",
            value: function didDragSourceOptionsChange() {
                return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
            }
        },
        {
            key: "didDragPreviewOptionsChange",
            value: function didDragPreviewOptionsChange() {
                return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
            }
        },
        {
            key: "disconnectDragSource",
            value: function disconnectDragSource() {
                if (this.dragSourceUnsubscribe) {
                    this.dragSourceUnsubscribe();
                    this.dragSourceUnsubscribe = undefined;
                }
            }
        },
        {
            key: "disconnectDragPreview",
            value: function disconnectDragPreview() {
                if (this.dragPreviewUnsubscribe) {
                    this.dragPreviewUnsubscribe();
                    this.dragPreviewUnsubscribe = undefined;
                    this.dragPreviewNode = null;
                    this.dragPreviewRef = null;
                }
            }
        },
        {
            key: "dragSource",
            get: function get() {
                return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
            }
        },
        {
            key: "dragPreview",
            get: function get() {
                return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
            }
        },
        {
            key: "clearDragSource",
            value: function clearDragSource() {
                this.dragSourceNode = null;
                this.dragSourceRef = null;
            }
        },
        {
            key: "clearDragPreview",
            value: function clearDragPreview() {
                this.dragPreviewNode = null;
                this.dragPreviewRef = null;
            }
        }
    ]);
    return SourceConnector;
} //# sourceMappingURL=SourceConnector.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragDropManager",
    ()=>useDragDropManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndContext.js [app-client] (ecmascript)");
;
;
;
function useDragDropManager() {
    var dragDropManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"]).dragDropManager;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
} //# sourceMappingURL=useDragDropManager.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSourceConnector",
    ()=>useDragSourceConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$SourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/SourceConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
;
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    var manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    var connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragSourceConnector.useMemo[connector]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$SourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SourceConnector"](manager.getBackend());
        }
    }["useDragSourceConnector.useMemo[connector]"], [
        manager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDragSourceConnector.useIsomorphicLayoutEffect": function() {
            connector.dragSourceOptions = dragSourceOptions || null;
            connector.reconnect();
            return ({
                "useDragSourceConnector.useIsomorphicLayoutEffect": function() {
                    return connector.disconnectDragSource();
                }
            })["useDragSourceConnector.useIsomorphicLayoutEffect"];
        }
    }["useDragSourceConnector.useIsomorphicLayoutEffect"], [
        connector,
        dragSourceOptions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDragSourceConnector.useIsomorphicLayoutEffect": function() {
            connector.dragPreviewOptions = dragPreviewOptions || null;
            connector.reconnect();
            return ({
                "useDragSourceConnector.useIsomorphicLayoutEffect": function() {
                    return connector.disconnectDragPreview();
                }
            })["useDragSourceConnector.useIsomorphicLayoutEffect"];
        }
    }["useDragSourceConnector.useIsomorphicLayoutEffect"], [
        connector,
        dragPreviewOptions
    ]);
    return connector;
} //# sourceMappingURL=useDragSourceConnector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragSourceMonitorImpl",
    ()=>DragSourceMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
;
;
;
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /*#__PURE__*/ function() {
    "use strict";
    function DragSourceMonitorImpl(manager) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DragSourceMonitorImpl);
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DragSourceMonitorImpl, [
        {
            key: "receiveHandlerId",
            value: function receiveHandlerId(sourceId) {
                this.sourceId = sourceId;
            }
        },
        {
            key: "getHandlerId",
            value: function getHandlerId() {
                return this.sourceId;
            }
        },
        {
            key: "canDrag",
            value: function canDrag() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
                try {
                    isCallingCanDrag = true;
                    return this.internalMonitor.canDragSource(this.sourceId);
                } finally{
                    isCallingCanDrag = false;
                }
            }
        },
        {
            key: "isDragging",
            value: function isDragging() {
                if (!this.sourceId) {
                    return false;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
                try {
                    isCallingIsDragging = true;
                    return this.internalMonitor.isDraggingSource(this.sourceId);
                } finally{
                    isCallingIsDragging = false;
                }
            }
        },
        {
            key: "subscribeToStateChange",
            value: function subscribeToStateChange(listener, options) {
                return this.internalMonitor.subscribeToStateChange(listener, options);
            }
        },
        {
            key: "isDraggingSource",
            value: function isDraggingSource(sourceId) {
                return this.internalMonitor.isDraggingSource(sourceId);
            }
        },
        {
            key: "isOverTarget",
            value: function isOverTarget(targetId, options) {
                return this.internalMonitor.isOverTarget(targetId, options);
            }
        },
        {
            key: "getTargetIds",
            value: function getTargetIds() {
                return this.internalMonitor.getTargetIds();
            }
        },
        {
            key: "isSourcePublic",
            value: function isSourcePublic() {
                return this.internalMonitor.isSourcePublic();
            }
        },
        {
            key: "getSourceId",
            value: function getSourceId() {
                return this.internalMonitor.getSourceId();
            }
        },
        {
            key: "subscribeToOffsetChange",
            value: function subscribeToOffsetChange(listener) {
                return this.internalMonitor.subscribeToOffsetChange(listener);
            }
        },
        {
            key: "canDragSource",
            value: function canDragSource(sourceId) {
                return this.internalMonitor.canDragSource(sourceId);
            }
        },
        {
            key: "canDropOnTarget",
            value: function canDropOnTarget(targetId) {
                return this.internalMonitor.canDropOnTarget(targetId);
            }
        },
        {
            key: "getItemType",
            value: function getItemType() {
                return this.internalMonitor.getItemType();
            }
        },
        {
            key: "getItem",
            value: function getItem() {
                return this.internalMonitor.getItem();
            }
        },
        {
            key: "getDropResult",
            value: function getDropResult() {
                return this.internalMonitor.getDropResult();
            }
        },
        {
            key: "didDrop",
            value: function didDrop() {
                return this.internalMonitor.didDrop();
            }
        },
        {
            key: "getInitialClientOffset",
            value: function getInitialClientOffset() {
                return this.internalMonitor.getInitialClientOffset();
            }
        },
        {
            key: "getInitialSourceClientOffset",
            value: function getInitialSourceClientOffset() {
                return this.internalMonitor.getInitialSourceClientOffset();
            }
        },
        {
            key: "getSourceClientOffset",
            value: function getSourceClientOffset() {
                return this.internalMonitor.getSourceClientOffset();
            }
        },
        {
            key: "getClientOffset",
            value: function getClientOffset() {
                return this.internalMonitor.getClientOffset();
            }
        },
        {
            key: "getDifferenceFromInitialOffset",
            value: function getDifferenceFromInitialOffset() {
                return this.internalMonitor.getDifferenceFromInitialOffset();
            }
        }
    ]);
    return DragSourceMonitorImpl;
} //# sourceMappingURL=DragSourceMonitorImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSourceMonitor",
    ()=>useDragSourceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DragSourceMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
;
;
;
function useDragSourceMonitor() {
    var manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragSourceMonitor.useMemo": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DragSourceMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragSourceMonitorImpl"](manager);
        }
    }["useDragSourceMonitor.useMemo"], [
        manager
    ]);
} //# sourceMappingURL=useDragSourceMonitor.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/registration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerSource",
    ()=>registerSource,
    "registerTarget",
    ()=>registerTarget
]);
function registerTarget(type, target, manager) {
    var registry = manager.getRegistry();
    var targetId = registry.addTarget(type, target);
    return [
        targetId,
        function() {
            return registry.removeTarget(targetId);
        }
    ];
}
function registerSource(type, source, manager) {
    var registry = manager.getRegistry();
    var sourceId = registry.addSource(type, source);
    return [
        sourceId,
        function() {
            return registry.removeSource(sourceId);
        }
    ];
} //# sourceMappingURL=registration.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragSourceImpl",
    ()=>DragSourceImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var DragSourceImpl = /*#__PURE__*/ function() {
    "use strict";
    function DragSourceImpl(spec, monitor, connector) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DragSourceImpl);
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DragSourceImpl, [
        {
            key: "beginDrag",
            value: function beginDrag() {
                var spec = this.spec;
                var monitor = this.monitor;
                var result = null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(spec.item) === 'object') {
                    result = spec.item;
                } else if (typeof spec.item === 'function') {
                    result = spec.item(monitor);
                } else {
                    result = {};
                }
                return result !== null && result !== void 0 ? result : null;
            }
        },
        {
            key: "canDrag",
            value: function canDrag() {
                var spec = this.spec;
                var monitor = this.monitor;
                if (typeof spec.canDrag === 'boolean') {
                    return spec.canDrag;
                } else if (typeof spec.canDrag === 'function') {
                    return spec.canDrag(monitor);
                } else {
                    return true;
                }
            }
        },
        {
            key: "isDragging",
            value: function isDragging(globalMonitor, target) {
                var spec = this.spec;
                var monitor = this.monitor;
                var isDragging = spec.isDragging;
                return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
            }
        },
        {
            key: "endDrag",
            value: function endDrag() {
                var spec = this.spec;
                var monitor = this.monitor;
                var connector = this.connector;
                var end = spec.end;
                if (end) {
                    end(monitor.getItem(), monitor);
                }
                connector.reconnect();
            }
        }
    ]);
    return DragSourceImpl;
} //# sourceMappingURL=DragSourceImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSource",
    ()=>useDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$DragSourceImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js [app-client] (ecmascript)");
;
;
function useDragSource(spec, monitor, connector) {
    var handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragSource.useMemo[handler]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$DragSourceImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragSourceImpl"](spec, monitor, connector);
        }
    }["useDragSource.useMemo[handler]"], [
        monitor,
        connector
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDragSource.useEffect": function() {
            handler.spec = spec;
        }
    }["useDragSource.useEffect"], [
        spec
    ]);
    return handler;
} //# sourceMappingURL=useDragSource.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragType",
    ()=>useDragType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useDragType(spec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragType.useMemo": function() {
            var result = spec.type;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(result != null, 'spec.type must be defined');
            return result;
        }
    }["useDragType.useMemo"], [
        spec
    ]);
} //# sourceMappingURL=useDragType.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredDragSource",
    ()=>useRegisteredDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/registration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js [app-client] (ecmascript)");
;
;
;
;
;
;
function useRegisteredDragSource(spec, monitor, connector) {
    var manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    var handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragSource"])(spec, monitor, connector);
    var itemType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragType"])(spec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function registerDragSource() {
        if (itemType != null) {
            var _registerSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSource"])(itemType, handler, manager), 2), handlerId = _registerSource[0], unregister = _registerSource[1];
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
} //# sourceMappingURL=useRegisteredDragSource.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrag",
    ()=>useDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/connectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useRegisteredDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function useDrag(specArg, deps) {
    var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalFactory"])(specArg, deps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
    var monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragSourceMonitor"])();
    var connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragSourceConnector"])(spec.options, spec.previewOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useRegisteredDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredDragSource"])(spec, monitor, connector);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollectedProps"])(spec.collect, monitor, connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectDragSource"])(connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectDragPreview"])(connector)
    ];
} //# sourceMappingURL=useDrag.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/connectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectDropTarget",
    ()=>useConnectDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useConnectDropTarget(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConnectDropTarget.useMemo": function() {
            return connector.hooks.dropTarget();
        }
    }["useConnectDropTarget.useMemo"], [
        connector
    ]);
} //# sourceMappingURL=connectors.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/TargetConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TargetConnector",
    ()=>TargetConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/shallowequal/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/isRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-client] (ecmascript)");
;
;
;
;
;
var TargetConnector = /*#__PURE__*/ function() {
    "use strict";
    function TargetConnector(backend) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, TargetConnector);
        this.hooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConnectorHooks"])({
            dropTarget: function(node, options) {
                _this.clearDropTarget();
                _this.dropTargetOptions = options;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    _this.dropTargetRef = node;
                } else {
                    _this.dropTargetNode = node;
                }
                _this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(TargetConnector, [
        {
            key: "connectTarget",
            get: function get() {
                return this.dropTarget;
            }
        },
        {
            key: "reconnect",
            value: function reconnect() {
                // if nothing has changed then don't resubscribe
                var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                if (didChange) {
                    this.disconnectDropTarget();
                }
                var dropTarget = this.dropTarget;
                if (!this.handlerId) {
                    return;
                }
                if (!dropTarget) {
                    this.lastConnectedDropTarget = dropTarget;
                    return;
                }
                if (didChange) {
                    this.lastConnectedHandlerId = this.handlerId;
                    this.lastConnectedDropTarget = dropTarget;
                    this.lastConnectedDropTargetOptions = this.dropTargetOptions;
                    this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
                }
            }
        },
        {
            key: "receiveHandlerId",
            value: function receiveHandlerId(newHandlerId) {
                if (newHandlerId === this.handlerId) {
                    return;
                }
                this.handlerId = newHandlerId;
                this.reconnect();
            }
        },
        {
            key: "dropTargetOptions",
            get: function get() {
                return this.dropTargetOptionsInternal;
            },
            set: function set(options) {
                this.dropTargetOptionsInternal = options;
            }
        },
        {
            key: "didHandlerIdChange",
            value: function didHandlerIdChange() {
                return this.lastConnectedHandlerId !== this.handlerId;
            }
        },
        {
            key: "didDropTargetChange",
            value: function didDropTargetChange() {
                return this.lastConnectedDropTarget !== this.dropTarget;
            }
        },
        {
            key: "didOptionsChange",
            value: function didOptionsChange() {
                return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
            }
        },
        {
            key: "disconnectDropTarget",
            value: function disconnectDropTarget() {
                if (this.unsubscribeDropTarget) {
                    this.unsubscribeDropTarget();
                    this.unsubscribeDropTarget = undefined;
                }
            }
        },
        {
            key: "dropTarget",
            get: function get() {
                return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
            }
        },
        {
            key: "clearDropTarget",
            value: function clearDropTarget() {
                this.dropTargetRef = null;
                this.dropTargetNode = null;
            }
        }
    ]);
    return TargetConnector;
} //# sourceMappingURL=TargetConnector.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTargetConnector",
    ()=>useDropTargetConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$TargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/TargetConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
;
function useDropTargetConnector(options) {
    var manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    var connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropTargetConnector.useMemo[connector]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$TargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetConnector"](manager.getBackend());
        }
    }["useDropTargetConnector.useMemo[connector]"], [
        manager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDropTargetConnector.useIsomorphicLayoutEffect": function() {
            connector.dropTargetOptions = options || null;
            connector.reconnect();
            return ({
                "useDropTargetConnector.useIsomorphicLayoutEffect": function() {
                    return connector.disconnectDropTarget();
                }
            })["useDropTargetConnector.useIsomorphicLayoutEffect"];
        }
    }["useDropTargetConnector.useIsomorphicLayoutEffect"], [
        options
    ]);
    return connector;
} //# sourceMappingURL=useDropTargetConnector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropTargetMonitorImpl",
    ()=>DropTargetMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
;
;
;
var isCallingCanDrop = false;
var DropTargetMonitorImpl = /*#__PURE__*/ function() {
    "use strict";
    function DropTargetMonitorImpl(manager) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DropTargetMonitorImpl);
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DropTargetMonitorImpl, [
        {
            key: "receiveHandlerId",
            value: function receiveHandlerId(targetId) {
                this.targetId = targetId;
            }
        },
        {
            key: "getHandlerId",
            value: function getHandlerId() {
                return this.targetId;
            }
        },
        {
            key: "subscribeToStateChange",
            value: function subscribeToStateChange(listener, options) {
                return this.internalMonitor.subscribeToStateChange(listener, options);
            }
        },
        {
            key: "canDrop",
            value: function canDrop() {
                // Cut out early if the target id has not been set. This should prevent errors
                // where the user has an older version of dnd-core like in
                // https://github.com/react-dnd/react-dnd/issues/1310
                if (!this.targetId) {
                    return false;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
                try {
                    isCallingCanDrop = true;
                    return this.internalMonitor.canDropOnTarget(this.targetId);
                } finally{
                    isCallingCanDrop = false;
                }
            }
        },
        {
            key: "isOver",
            value: function isOver(options) {
                if (!this.targetId) {
                    return false;
                }
                return this.internalMonitor.isOverTarget(this.targetId, options);
            }
        },
        {
            key: "getItemType",
            value: function getItemType() {
                return this.internalMonitor.getItemType();
            }
        },
        {
            key: "getItem",
            value: function getItem() {
                return this.internalMonitor.getItem();
            }
        },
        {
            key: "getDropResult",
            value: function getDropResult() {
                return this.internalMonitor.getDropResult();
            }
        },
        {
            key: "didDrop",
            value: function didDrop() {
                return this.internalMonitor.didDrop();
            }
        },
        {
            key: "getInitialClientOffset",
            value: function getInitialClientOffset() {
                return this.internalMonitor.getInitialClientOffset();
            }
        },
        {
            key: "getInitialSourceClientOffset",
            value: function getInitialSourceClientOffset() {
                return this.internalMonitor.getInitialSourceClientOffset();
            }
        },
        {
            key: "getSourceClientOffset",
            value: function getSourceClientOffset() {
                return this.internalMonitor.getSourceClientOffset();
            }
        },
        {
            key: "getClientOffset",
            value: function getClientOffset() {
                return this.internalMonitor.getClientOffset();
            }
        },
        {
            key: "getDifferenceFromInitialOffset",
            value: function getDifferenceFromInitialOffset() {
                return this.internalMonitor.getDifferenceFromInitialOffset();
            }
        }
    ]);
    return DropTargetMonitorImpl;
} //# sourceMappingURL=DropTargetMonitorImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTargetMonitor",
    ()=>useDropTargetMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DropTargetMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
;
;
;
function useDropTargetMonitor() {
    var manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropTargetMonitor.useMemo": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DropTargetMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropTargetMonitorImpl"](manager);
        }
    }["useDropTargetMonitor.useMemo"], [
        manager
    ]);
} //# sourceMappingURL=useDropTargetMonitor.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccept",
    ()=>useAccept
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useAccept(spec) {
    var accept = spec.accept;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAccept.useMemo": function() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(spec.accept != null, 'accept must be defined');
            return Array.isArray(accept) ? accept : [
                accept
            ];
        }
    }["useAccept.useMemo"], [
        accept
    ]);
} //# sourceMappingURL=useAccept.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropTargetImpl",
    ()=>DropTargetImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var DropTargetImpl = /*#__PURE__*/ function() {
    "use strict";
    function DropTargetImpl(spec, monitor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DropTargetImpl);
        this.spec = spec;
        this.monitor = monitor;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DropTargetImpl, [
        {
            key: "canDrop",
            value: function canDrop() {
                var spec = this.spec;
                var monitor = this.monitor;
                return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
            }
        },
        {
            key: "hover",
            value: function hover() {
                var spec = this.spec;
                var monitor = this.monitor;
                if (spec.hover) {
                    spec.hover(monitor.getItem(), monitor);
                }
            }
        },
        {
            key: "drop",
            value: function drop() {
                var spec = this.spec;
                var monitor = this.monitor;
                if (spec.drop) {
                    return spec.drop(monitor.getItem(), monitor);
                }
                return;
            }
        }
    ]);
    return DropTargetImpl;
} //# sourceMappingURL=DropTargetImpl.js.map
();
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTarget",
    ()=>useDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$DropTargetImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js [app-client] (ecmascript)");
;
;
function useDropTarget(spec, monitor) {
    var dropTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropTarget.useMemo[dropTarget]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$DropTargetImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropTargetImpl"](spec, monitor);
        }
    }["useDropTarget.useMemo[dropTarget]"], [
        monitor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDropTarget.useEffect": function() {
            dropTarget.spec = spec;
        }
    }["useDropTarget.useEffect"], [
        spec
    ]);
    return dropTarget;
} //# sourceMappingURL=useDropTarget.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredDropTarget",
    ()=>useRegisteredDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/registration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useAccept$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js [app-client] (ecmascript)");
;
;
;
;
;
;
function useRegisteredDropTarget(spec, monitor, connector) {
    var manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    var dropTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropTarget"])(spec, monitor);
    var accept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useAccept$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccept"])(spec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function registerDropTarget() {
        var _registerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTarget"])(accept, dropTarget, manager), 2), handlerId = _registerTarget[0], unregister = _registerTarget[1];
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map({
            "useRegisteredDropTarget.useIsomorphicLayoutEffect": function(a) {
                return a.toString();
            }
        }["useRegisteredDropTarget.useIsomorphicLayoutEffect"]).join('|')
    ]);
} //# sourceMappingURL=useRegisteredDropTarget.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrop",
    ()=>useDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/connectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useRegisteredDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js [app-client] (ecmascript)");
;
;
;
;
;
;
function useDrop(specArg, deps) {
    var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalFactory"])(specArg, deps);
    var monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropTargetMonitor"])();
    var connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropTargetConnector"])(spec.options);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useRegisteredDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredDropTarget"])(spec, monitor, connector);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollectedProps"])(spec.collect, monitor, connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectDropTarget"])(connector)
    ];
} //# sourceMappingURL=useDrop.js.map
}),
"[project]/worklocal-frontend/node_modules/react-tag-input/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEYS",
    ()=>KEYS,
    "SEPARATORS",
    ()=>SEPARATORS,
    "WithContext",
    ()=>WithContext,
    "WithOutContext",
    ()=>ReactTagsWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_destructuring_empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_object_destructuring_empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// src/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-client] (ecmascript)");
// src/components/RemoveComponent.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// node_modules/classnames/index.js
var require_classnames = __commonJS({
    "node_modules/classnames/index.js": function(exports2, module2) {
        (function() {
            "use strict";
            var hasOwn = {}.hasOwnProperty;
            var nativeCodeString = "[native code]";
            function classNames() {
                var classes = [];
                for(var i = 0; i < arguments.length; i++){
                    var arg = arguments[i];
                    if (!arg) continue;
                    var argType = typeof arg === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arg);
                    if (argType === "string" || argType === "number") {
                        classes.push(arg);
                    } else if (Array.isArray(arg)) {
                        if (arg.length) {
                            var inner = classNames.apply(null, arg);
                            if (inner) {
                                classes.push(inner);
                            }
                        }
                    } else if (argType === "object") {
                        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                            classes.push(arg.toString());
                            continue;
                        }
                        for(var key in arg){
                            if (hasOwn.call(arg, key) && arg[key]) {
                                classes.push(key);
                            }
                        }
                    }
                }
                return classes.join(" ");
            }
            if (typeof module2 !== "undefined" && module2.exports) {
                classNames.default = classNames;
                module2.exports = classNames;
            } else if (typeof define === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(define.amd) === "object" && define.amd) {
                ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                    return classNames;
                }());
            } else {
                window.classNames = classNames;
            }
        })();
    }
});
;
;
// src/components/SingleTag.tsx
var import_classnames = __toESM(require_classnames(), 1);
;
;
// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(/*TURBOPACK member replacement*/ __turbopack_context__.g)) == "object" && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
var freeGlobal_default = freeGlobal;
// node_modules/lodash-es/_root.js
var freeSelf = (typeof self === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(self)) == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;
// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;
// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = void 0;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
var getRawTag_default = getRawTag;
// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
    return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;
// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
    if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;
// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
    return value != null && (typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value)) == "object";
}
var isObjectLike_default = isObjectLike;
// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
    return (typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value)) == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;
// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
var arrayMap_default = arrayMap;
// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;
// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
    if (typeof value == "string") {
        return value;
    }
    if (isArray_default(value)) {
        return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
        return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;
// node_modules/lodash-es/isObject.js
function isObject(value) {
    var type = typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value);
    return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;
// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
    if (!isObject_default(value)) {
        return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;
// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;
// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
var toSource_default = toSource;
// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
        return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;
// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
    return object == null ? void 0 : object[key];
}
var getValue_default = getValue;
// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;
// node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;
// node_modules/lodash-es/noop.js
function noop() {}
var noop_default = noop;
// node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
var baseFindIndex_default = baseFindIndex;
// node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
    return value !== value;
}
var baseIsNaN_default = baseIsNaN;
// node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) {
            return index;
        }
    }
    return -1;
}
var strictIndexOf_default = strictIndexOf;
// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;
// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;
// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
    var type = typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value);
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var isIndex_default = isIndex;
// node_modules/lodash-es/eq.js
function eq(value, other) {
    return value === other || value !== value && other !== other;
}
var eq_default = eq;
// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;
// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;
// node_modules/lodash-es/_isPrototype.js
var objectProto4 = Object.prototype;
function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
}
var isPrototype_default = isPrototype;
// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
var baseTimes_default = baseTimes;
// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;
// node_modules/lodash-es/isArguments.js
var objectProto5 = Object.prototype;
var hasOwnProperty3 = objectProto5.hasOwnProperty;
var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
    return arguments;
}()) ? baseIsArguments_default : function isArguments(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;
// node_modules/lodash-es/stubFalse.js
function stubFalse() {
    return false;
}
var stubFalse_default = stubFalse;
// node_modules/lodash-es/isBuffer.js
var freeExports = (("TURBOPACK compile-time truthy", 1) ? "undefined" : "TURBOPACK unreachable") == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && (("TURBOPACK compile-time truthy", 1) ? "undefined" : "TURBOPACK unreachable") == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0;
var nativeIsBuffer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;
// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;
// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
var baseUnary_default = baseUnary;
// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = (("TURBOPACK compile-time truthy", 1) ? "undefined" : "TURBOPACK unreachable") == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && (("TURBOPACK compile-time truthy", 1) ? "undefined" : "TURBOPACK unreachable") == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
    try {
        var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
var nodeUtil_default = nodeUtil;
// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;
// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for(var key in value){
        if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex_default(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
var arrayLikeKeys_default = arrayLikeKeys;
// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
var overArg_default = overArg;
// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;
// node_modules/lodash-es/_baseKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function baseKeys(object) {
    if (!isPrototype_default(object)) {
        return nativeKeys_default(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty5.call(object, key) && key != "constructor") {
            result.push(key);
        }
    }
    return result;
}
var baseKeys_default = baseKeys;
// node_modules/lodash-es/keys.js
function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;
// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;
// node_modules/lodash-es/_hashClear.js
function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
}
var hashClear_default = hashClear;
// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
var hashDelete_default = hashDelete;
// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty6.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;
// node_modules/lodash-es/_hashHas.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty7.call(data, key);
}
var hashHas_default = hashHas;
// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
}
var hashSet_default = hashSet;
// node_modules/lodash-es/_Hash.js
function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
var listCacheClear_default = listCacheClear;
// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq_default(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
var assocIndexOf_default = assocIndexOf;
// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice.call(data, index, 1);
    }
    --this.size;
    return true;
}
var listCacheDelete_default = listCacheDelete;
// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;
// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;
// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else {
        data[index][1] = value;
    }
    return this;
}
var listCacheSet_default = listCacheSet;
// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;
// node_modules/lodash-es/_Map.js
var Map = getNative_default(root_default, "Map");
var Map_default = Map;
// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash_default(),
        "map": new (Map_default || ListCache_default)(),
        "string": new Hash_default()
    };
}
var mapCacheClear_default = mapCacheClear;
// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
    var type = typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value);
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;
// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
var mapCacheDelete_default = mapCacheDelete;
// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;
// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;
// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
var mapCacheSet_default = mapCacheSet;
// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;
// node_modules/lodash-es/toString.js
function toString(value) {
    return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;
// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length){
        array[offset + index] = values[index];
    }
    return array;
}
var arrayPush_default = arrayPush;
// node_modules/lodash-es/_basePropertyOf.js
function basePropertyOf(object) {
    return function(key) {
        return object == null ? void 0 : object[key];
    };
}
var basePropertyOf_default = basePropertyOf;
// node_modules/lodash-es/_stackClear.js
function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
}
var stackClear_default = stackClear;
// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
var stackDelete_default = stackDelete;
// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
    return this.__data__.get(key);
}
var stackGet_default = stackGet;
// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
    return this.__data__.has(key);
}
var stackHas_default = stackHas;
// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
    var data = this.__data__;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(data, ListCache_default)) {
        var pairs = data.__data__;
        if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
var stackSet_default = stackSet;
// node_modules/lodash-es/_Stack.js
function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;
// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
var arrayFilter_default = arrayFilter;
// node_modules/lodash-es/stubArray.js
function stubArray() {
    return [];
}
var stubArray_default = stubArray;
// node_modules/lodash-es/_getSymbols.js
var objectProto10 = Object.prototype;
var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function getSymbols(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable2.call(object, symbol);
    });
};
var getSymbols_default = getSymbols;
// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;
// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;
// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;
// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;
// node_modules/lodash-es/_Set.js
var Set = getNative_default(root_default, "Set");
var Set_default = Set;
// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function getTag(value) {
        var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
        if (ctorString) {
            switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag2;
                case mapCtorString:
                    return mapTag2;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag2;
                case weakMapCtorString:
                    return weakMapTag2;
            }
        }
        return result;
    };
}
var getTag_default = getTag;
// node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;
// node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
}
var setCacheAdd_default = setCacheAdd;
// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
    return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;
// node_modules/lodash-es/_SetCache.js
function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while(++index < length){
        this.add(values[index]);
    }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;
// node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}
var arraySome_default = arraySome;
// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
    return cache.has(key);
}
var cacheHas_default = cacheHas;
// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
            if (compared) {
                continue;
            }
            result = false;
            break;
        }
        if (seen) {
            if (!arraySome_default(other, function(othValue2, othIndex) {
                if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                }
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
var equalArrays_default = equalArrays;
// node_modules/lodash-es/_mapToArray.js
function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
var mapToArray_default = mapToArray;
// node_modules/lodash-es/_setToArray.js
function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
var setToArray_default = setToArray;
// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag3:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
            }
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag2:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
                return false;
            }
            return true;
        case boolTag2:
        case dateTag2:
        case numberTag2:
            return eq_default(+object, +other);
        case errorTag2:
            return object.name == other.name && object.message == other.message;
        case regexpTag2:
        case stringTag2:
            return object == other + "";
        case mapTag3:
            var convert = mapToArray_default;
        case setTag3:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
            convert || (convert = setToArray_default);
            if (object.size != other.size && !isPartial) {
                return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
                return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG2;
            stack.set(object, other);
            var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag2:
            if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
    }
    return false;
}
var equalByTag_default = equalByTag;
// node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto11 = Object.prototype;
var hasOwnProperty8 = objectProto11.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
        return false;
    }
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
            return false;
        }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(objCtor, objCtor) && typeof othCtor == "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(othCtor, othCtor))) {
            result = false;
        }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
var equalObjects_default = equalObjects;
// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag3 = "[object Object]";
var objectProto12 = Object.prototype;
var hasOwnProperty9 = objectProto12.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
    objTag = objTag == argsTag3 ? objectTag3 : objTag;
    othTag = othTag == argsTag3 ? objectTag3 : othTag;
    var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer_default(object)) //TURBOPACK unreachable
    ;
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack_default());
        return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
        var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack_default());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) {
        return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;
// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
        return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;
// node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (comparator(value, array[index])) {
            return true;
        }
    }
    return false;
}
var arrayIncludesWith_default = arrayIncludesWith;
// node_modules/lodash-es/_escapeHtmlChar.js
var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};
var escapeHtmlChar = basePropertyOf_default(htmlEscapes);
var escapeHtmlChar_default = escapeHtmlChar;
// node_modules/lodash-es/escape.js
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape(string) {
    string = toString_default(string);
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar_default) : string;
}
var escape_default = escape;
// node_modules/lodash-es/escapeRegExp.js
var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = RegExp(reRegExpChar2.source);
function escapeRegExp(string) {
    string = toString_default(string);
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
}
var escapeRegExp_default = escapeRegExp;
// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
    return baseIsEqual_default(value, other);
}
var isEqual_default = isEqual;
// node_modules/lodash-es/_createSet.js
var INFINITY2 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([
    ,
    -0
]))[1] == INFINITY2) ? noop_default : function createSet(values) {
    return new Set_default(values);
};
var createSet_default = createSet;
// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE2 = 200;
function baseUniq(array, iteratee, comparator) {
    var index = -1, includes = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
    if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith_default;
    } else if (length >= LARGE_ARRAY_SIZE2) {
        var set = iteratee ? null : createSet_default(array);
        if (set) {
            return setToArray_default(set);
        }
        isCommon = false;
        includes = cacheHas_default;
        seen = new SetCache_default();
    } else {
        seen = iteratee ? [] : result;
    }
    outer: while(++index < length){
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while(seenIndex--){
                if (seen[seenIndex] === computed) {
                    continue outer;
                }
            }
            if (iteratee) {
                seen.push(computed);
            }
            result.push(value);
        } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
                seen.push(computed);
            }
            result.push(value);
        }
    }
    return result;
}
var baseUniq_default = baseUniq;
// node_modules/lodash-es/uniq.js
function uniq(array) {
    return array && array.length ? baseUniq_default(array) : [];
}
var uniq_default = uniq;
// src/components/constants.ts
var KEYS = {
    ENTER: [
        10,
        13
    ],
    TAB: 9,
    BACKSPACE: 8,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    ESCAPE: 27,
    SPACE: 32,
    COMMA: 188
};
var SEPARATORS = {
    ENTER: "Enter",
    TAB: "Tab",
    COMMA: ",",
    SPACE: " ",
    SEMICOLON: ";"
};
var DEFAULT_PLACEHOLDER = "Press enter to add new tag";
var DEFAULT_LABEL_FIELD = "text";
var DEFAULT_CLASSNAMES = {
    tags: "ReactTags__tags",
    tagInput: "ReactTags__tagInput",
    tagInputField: "ReactTags__tagInputField",
    selected: "ReactTags__selected",
    tag: "ReactTags__tag",
    remove: "ReactTags__remove",
    suggestions: "ReactTags__suggestions",
    activeSuggestion: "ReactTags__activeSuggestion",
    editTagInput: "ReactTags__editTagInput",
    editTagInputField: "ReactTags__editTagInputField",
    clearAll: "ReactTags__clearAll"
};
var INPUT_FIELD_POSITIONS = {
    INLINE: "inline",
    TOP: "top",
    BOTTOM: "bottom"
};
var ERRORS = {
    TAG_LIMIT: "Tag limit reached!"
};
// src/components/utils.ts
function buildRegExpFromDelimiters(delimiters) {
    var delimiterChars = delimiters.map(function(delimiter) {
        var chrCode = delimiter - 48 * Math.floor(delimiter / 48);
        return String.fromCharCode(96 <= delimiter ? chrCode : delimiter);
    }).join("");
    var escapedDelimiterChars = escapeRegExp_default(delimiterChars);
    return new RegExp("[".concat(escapedDelimiterChars, "]+"));
}
function getKeyCodeFromSeparator(separator) {
    switch(separator){
        case SEPARATORS.ENTER:
            return [
                10,
                13
            ];
        case SEPARATORS.TAB:
            return 9;
        case SEPARATORS.COMMA:
            return 188;
        case SEPARATORS.SPACE:
            return 32;
        case SEPARATORS.SEMICOLON:
            return 186;
        default:
            return 0;
    }
}
function canDrag(params) {
    var moveTag = params.moveTag, readOnly = params.readOnly, allowDragDrop = params.allowDragDrop;
    return moveTag !== void 0 && !readOnly && allowDragDrop;
}
function canDrop(params) {
    var readOnly = params.readOnly, allowDragDrop = params.allowDragDrop;
    return !readOnly && allowDragDrop;
}
;
var RemoveComponent = function(props) {
    var readOnly = props.readOnly, removeComponent = props.removeComponent, onRemove = props.onRemove, className = props.className, tag = props.tag, index = props.index;
    var onKeydown = function(event) {
        if (KEYS.ENTER.includes(event.keyCode) || event.keyCode === KEYS.SPACE) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (event.keyCode === KEYS.BACKSPACE) {
            onRemove(event);
        }
    };
    if (readOnly) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {});
    }
    var ariaLabel = "Tag at index ".concat(index, " with value ").concat(tag.id, " focussed. Press backspace to remove");
    if (removeComponent) {
        var Component = removeComponent;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            "data-testid": "remove",
            onRemove: onRemove,
            onKeyDown: onKeydown,
            className: className,
            "aria-label": ariaLabel,
            tag: tag,
            index: index
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        "data-testid": "remove",
        onClick: onRemove,
        onKeyDown: onKeydown,
        className: className,
        type: "button",
        "aria-label": ariaLabel,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            height: "12",
            width: "12",
            fill: "#fff",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            })
        })
    });
};
var RemoveComponent_default = RemoveComponent;
;
var ItemTypes = {
    TAG: "tag"
};
var SingleTag = function(props) {
    var tagRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _props_readOnly = props.readOnly, readOnly = _props_readOnly === void 0 ? false : _props_readOnly, tag = props.tag, classNames = props.classNames, index = props.index, moveTag = props.moveTag, _props_allowDragDrop = props.allowDragDrop, allowDragDrop = _props_allowDragDrop === void 0 ? true : _props_allowDragDrop, _props_labelField = props.labelField, labelField = _props_labelField === void 0 ? "text" : _props_labelField, tags = props.tags;
    var _useDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrag"])({
        "SingleTag._useDrag.useDrag": function() {
            return {
                type: ItemTypes.TAG,
                collect: ({
                    "SingleTag._useDrag.useDrag": function(monitor) {
                        return {
                            isDragging: !!monitor.isDragging()
                        };
                    }
                })["SingleTag._useDrag.useDrag"],
                item: props,
                canDrag: ({
                    "SingleTag._useDrag.useDrag": function() {
                        return canDrag({
                            moveTag: moveTag,
                            readOnly: readOnly,
                            allowDragDrop: allowDragDrop
                        });
                    }
                })["SingleTag._useDrag.useDrag"]
            };
        }
    }["SingleTag._useDrag.useDrag"], [
        tags
    ]), 2), isDragging = _useDrag[0].isDragging, drag = _useDrag[1];
    var _useDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrop"])({
        "SingleTag._useDrop.useDrop": function() {
            return {
                accept: ItemTypes.TAG,
                drop: ({
                    "SingleTag._useDrop.useDrop": function(item) {
                        var _props_moveTag;
                        var dragIndex = item.index;
                        var hoverIndex = index;
                        if (dragIndex === hoverIndex) {
                            return;
                        }
                        props === null || props === void 0 ? void 0 : (_props_moveTag = props.moveTag) === null || _props_moveTag === void 0 ? void 0 : _props_moveTag.call(props, dragIndex, hoverIndex);
                    }
                })["SingleTag._useDrop.useDrop"],
                canDrop: ({
                    "SingleTag._useDrop.useDrop": function(item) {
                        return canDrop(item);
                    }
                })["SingleTag._useDrop.useDrop"]
            };
        }
    }["SingleTag._useDrop.useDrop"], [
        tags
    ]), 2), drop = _useDrop[1];
    drag(drop(tagRef));
    var label = props.tag[labelField];
    var _tag_className = tag.className, className = _tag_className === void 0 ? "" : _tag_className;
    var opacity = isDragging ? 0 : 1;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        ref: tagRef,
        className: (0, import_classnames.default)("tag-wrapper", classNames.tag, className),
        style: {
            opacity: opacity,
            cursor: canDrag({
                moveTag: moveTag,
                readOnly: readOnly,
                allowDragDrop: allowDragDrop
            }) ? "move" : "auto"
        },
        "data-testid": "tag",
        onClick: props.onTagClicked,
        onTouchStart: props.onTagClicked,
        children: [
            label,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RemoveComponent_default, {
                tag: props.tag,
                className: classNames.remove,
                removeComponent: props.removeComponent,
                onRemove: props.onDelete,
                readOnly: readOnly,
                index: index
            })
        ]
    });
};
;
;
var ClearAllTags = function(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        "aria-label": props["aria-label"],
        className: props.classNames.clearAll,
        onClick: props.onClick,
        children: "Clear all"
    });
};
var ClearAllTags_default = ClearAllTags;
;
;
var maybeScrollSuggestionIntoView = function(suggestionEl, suggestionsContainer) {
    var containerHeight = suggestionsContainer.offsetHeight;
    var suggestionHeight = suggestionEl.offsetHeight;
    var relativeSuggestionTop = suggestionEl.offsetTop - suggestionsContainer.scrollTop;
    if (relativeSuggestionTop + suggestionHeight >= containerHeight) {
        suggestionsContainer.scrollTop += relativeSuggestionTop - containerHeight + suggestionHeight;
    } else if (relativeSuggestionTop < 0) {
        suggestionsContainer.scrollTop += relativeSuggestionTop;
    }
};
var shouldRenderSuggestions = function(query, minQueryLength, isFocused, shouldRenderSuggestionsCb) {
    if (typeof shouldRenderSuggestionsCb === "function") {
        return shouldRenderSuggestionsCb(query);
    }
    return query.length >= minQueryLength && isFocused;
};
var SuggestionsComp = function(props) {
    var suggestionsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
    var labelField = props.labelField, minQueryLength = props.minQueryLength, isFocused = props.isFocused, classNames = props.classNames, selectedIndex = props.selectedIndex, query = props.query;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuggestionsComp.useEffect": function() {
            if (!suggestionsContainerRef.current) {
                return;
            }
            var activeSuggestion = suggestionsContainerRef.current.querySelector(".".concat(classNames.activeSuggestion));
            if (activeSuggestion) {
                maybeScrollSuggestionIntoView(activeSuggestion, suggestionsContainerRef.current);
            }
        }
    }["SuggestionsComp.useEffect"], [
        selectedIndex
    ]);
    var markIt = function(tag, query2) {
        var escapedRegex = query2.trim().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
        var labelValue = tag[labelField];
        return {
            __html: labelValue.replace(RegExp(escapedRegex, "gi"), function(x) {
                return "<mark>".concat(escape_default(x), "</mark>");
            })
        };
    };
    var renderSuggestion = function(tag, query2) {
        if (typeof props.renderSuggestion === "function") {
            return props.renderSuggestion(tag, query2);
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            dangerouslySetInnerHTML: markIt(tag, query2)
        });
    };
    var suggestions = props.suggestions.map(function(tag, index) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
            onMouseDown: props.handleClick.bind(null, index),
            onTouchStart: props.handleClick.bind(null, index),
            onMouseOver: props.handleHover.bind(null, index),
            className: index === props.selectedIndex ? props.classNames.activeSuggestion : "",
            children: renderSuggestion(tag, props.query)
        }, index);
    });
    if (suggestions.length === 0 || !shouldRenderSuggestions(query, minQueryLength || 2, isFocused, props.shouldRenderSuggestions)) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: suggestionsContainerRef,
        className: classNames.suggestions,
        "data-testid": "suggestions",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
            children: [
                " ",
                suggestions,
                " "
            ]
        })
    });
};
var arePropsEqual = function(prevProps, nextProps) {
    var query = nextProps.query, _nextProps_minQueryLength = nextProps.minQueryLength, minQueryLength = _nextProps_minQueryLength === void 0 ? 2 : _nextProps_minQueryLength, isFocused = nextProps.isFocused, suggestions = nextProps.suggestions;
    var _prevProps_minQueryLength;
    if (prevProps.isFocused === isFocused && isEqual_default(prevProps.suggestions, suggestions) && shouldRenderSuggestions(query, minQueryLength, isFocused, nextProps.shouldRenderSuggestions) === shouldRenderSuggestions(prevProps.query, (_prevProps_minQueryLength = prevProps.minQueryLength) !== null && _prevProps_minQueryLength !== void 0 ? _prevProps_minQueryLength : 2, prevProps.isFocused, prevProps.shouldRenderSuggestions) && prevProps.selectedIndex === nextProps.selectedIndex) {
        return true;
    }
    return false;
};
var Suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(SuggestionsComp, arePropsEqual);
var Suggestions_default = Suggestions;
// src/components/ReactTags.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
;
var ReactTags = function(props) {
    var autofocus = props.autofocus, autoFocus = props.autoFocus, readOnly = props.readOnly, labelField = props.labelField, allowDeleteFromEmptyInput = props.allowDeleteFromEmptyInput, allowAdditionFromPaste = props.allowAdditionFromPaste, allowDragDrop = props.allowDragDrop, minQueryLength = props.minQueryLength, shouldRenderSuggestions2 = props.shouldRenderSuggestions, removeComponent = props.removeComponent, autocomplete = props.autocomplete, inline = props.inline, maxTags = props.maxTags, allowUnique = props.allowUnique, editable = props.editable, placeholder = props.placeholder, delimiters = props.delimiters, separators = props.separators, tags = props.tags, inputFieldPosition = props.inputFieldPosition, inputProps = props.inputProps, classNames = props.classNames, maxLength = props.maxLength, inputValue = props.inputValue, clearAll = props.clearAll, ariaAttrs = props.ariaAttrs;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.suggestions), 2), suggestions = _useState[0], setSuggestions = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), 2), query = _useState1[0], setQuery = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isFocused = _useState2[0], setIsFocused = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1), 2), selectedIndex = _useState3[0], setSelectedIndex = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), selectionMode = _useState4[0], setSelectionMode = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), 2), ariaLiveStatus = _useState5[0], setAriaLiveStatus = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1), 2), currentEditIndex = _useState6[0], setCurrentEditIndex = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), 2), error = _useState7[0], setError = _useState7[1];
    var reactTagsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
    var textInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tagInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactTags.useEffect2": function() {
            if (delimiters.length) {
                console.warn("[Deprecation] The delimiters prop is deprecated and will be removed in v7.x.x, please use separators instead. If you have any concerns regarding this, please share your thoughts in https://github.com/react-tags/react-tags/issues/960");
            }
        }
    }["ReactTags.useEffect2"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactTags.useEffect2": function() {
            if (typeof inline !== "undefined") {
                console.warn("[Deprecation] The inline attribute is deprecated and will be removed in v7.x.x, please use inputFieldPosition instead.");
            }
        }
    }["ReactTags.useEffect2"], [
        inline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactTags.useEffect2": function() {
            if (typeof autofocus !== "undefined") {
                console.warn("[Deprecated] autofocus prop will be removed in 7.x so please migrate to autoFocus prop.");
            }
            if ((autofocus || autoFocus && autofocus !== false) && !readOnly) {
                resetAndFocusInput();
            }
        }
    }["ReactTags.useEffect2"], [
        autoFocus,
        autoFocus,
        readOnly
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactTags.useEffect2": function() {
            updateSuggestions();
        }
    }["ReactTags.useEffect2"], [
        query,
        props.suggestions
    ]);
    var filteredSuggestions = function(query2) {
        var updatedSuggestions = props.suggestions.slice();
        if (allowUnique) {
            var existingTags = tags.map(function(tag) {
                return tag.id.trim().toLowerCase();
            });
            updatedSuggestions = updatedSuggestions.filter(function(suggestion) {
                return !existingTags.includes(suggestion.id.toLowerCase());
            });
        }
        if (props.handleFilterSuggestions) {
            return props.handleFilterSuggestions(query2, updatedSuggestions);
        }
        var exactSuggestions = updatedSuggestions.filter(function(item) {
            return getQueryIndex(query2, item) === 0;
        });
        var partialSuggestions = updatedSuggestions.filter(function(item) {
            return getQueryIndex(query2, item) > 0;
        });
        return exactSuggestions.concat(partialSuggestions);
    };
    var getQueryIndex = function(query2, item) {
        return item[labelField].toLowerCase().indexOf(query2.toLowerCase());
    };
    var resetAndFocusInput = function() {
        setQuery("");
        if (!textInput.current) {
            return;
        }
        textInput.current.value = "";
        textInput.current.focus();
    };
    var handleDelete = function(index, event) {
        var _props_handleDelete;
        event.preventDefault();
        event.stopPropagation();
        var currentTags = tags.slice();
        if (currentTags.length === 0) {
            return;
        }
        setError("");
        props === null || props === void 0 ? void 0 : (_props_handleDelete = props.handleDelete) === null || _props_handleDelete === void 0 ? void 0 : _props_handleDelete.call(props, index, event);
        updateAriaLiveStatus(index, currentTags);
    };
    var updateAriaLiveStatus = function(index, tags2) {
        if (!(reactTagsRef === null || reactTagsRef === void 0 ? void 0 : reactTagsRef.current)) {
            return;
        }
        var tagRemoveButtons = reactTagsRef.current.querySelectorAll(".ReactTags__remove");
        var ariaLiveStatus2 = "";
        if (index === 0 && tags2.length > 1) {
            ariaLiveStatus2 = "Tag at index ".concat(index, " with value ").concat(tags2[index].id, " deleted. Tag at index 0 with value ").concat(tags2[1].id, " focussed. Press backspace to remove");
            tagRemoveButtons[0].focus();
        } else if (index > 0) {
            ariaLiveStatus2 = "Tag at index ".concat(index, " with value ").concat(tags2[index].id, " deleted. Tag at index ").concat(index - 1, " with value ").concat(tags2[index - 1].id, " focussed. Press backspace to remove");
            tagRemoveButtons[index - 1].focus();
        } else {
            var _textInput_current;
            ariaLiveStatus2 = "Tag at index ".concat(index, " with value ").concat(tags2[index].id, " deleted. Input focussed. Press enter to add a new tag");
            (_textInput_current = textInput.current) === null || _textInput_current === void 0 ? void 0 : _textInput_current.focus();
        }
        setAriaLiveStatus(ariaLiveStatus2);
    };
    var handleTagClick = function(index, tag, event) {
        var _props_handleTagClick;
        if (readOnly) {
            return;
        }
        if (editable) {
            var _tagInput_current;
            setCurrentEditIndex(index);
            setQuery(tag[labelField]);
            (_tagInput_current = tagInput.current) === null || _tagInput_current === void 0 ? void 0 : _tagInput_current.focus();
        }
        (_props_handleTagClick = props.handleTagClick) === null || _props_handleTagClick === void 0 ? void 0 : _props_handleTagClick.call(props, index, event);
    };
    var handleChange = function(event) {
        if (props.handleInputChange) {
            props.handleInputChange(event.target.value, event);
        }
        var query2 = event.target.value.trim();
        setQuery(query2);
    };
    var updateSuggestions = function() {
        var newSuggestions = filteredSuggestions(query);
        setSuggestions(newSuggestions);
        setSelectedIndex(selectedIndex >= newSuggestions.length ? newSuggestions.length - 1 : selectedIndex);
    };
    var handleFocus = function(event) {
        var value = event.target.value;
        if (props.handleInputFocus) {
            props.handleInputFocus(value, event);
        }
        setIsFocused(true);
    };
    var handleBlur = function(event) {
        var value = event.target.value;
        if (props.handleInputBlur) {
            props.handleInputBlur(value, event);
            if (textInput.current) {
                textInput.current.value = "";
            }
        }
        setIsFocused(false);
        setCurrentEditIndex(-1);
    };
    var handleKeyDown = function(event) {
        var nativeEvent = event.nativeEvent;
        if (nativeEvent.isComposing) {
            return;
        }
        if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            setSelectedIndex(-1);
            setSelectionMode(false);
            setSuggestions([]);
            setCurrentEditIndex(-1);
        }
        if ((separators.indexOf(event.key) !== -1 || delimiters.indexOf(event.keyCode) !== -1) && !event.shiftKey) {
            if (event.keyCode !== KEYS.TAB || query !== "") {
                event.preventDefault();
            }
            var _obj;
            var selectedQuery = selectionMode && selectedIndex !== -1 ? suggestions[selectedIndex] : (_obj = {
                id: query.trim()
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, labelField, query.trim()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "className", ""), _obj);
            if (Object.keys(selectedQuery)) {
                addTag(selectedQuery);
            }
        }
        if (event.key === "Backspace" && query === "" && (allowDeleteFromEmptyInput || inputFieldPosition === INPUT_FIELD_POSITIONS.INLINE)) {
            handleDelete(tags.length - 1, event);
        }
        if (event.keyCode === KEYS.UP_ARROW) {
            event.preventDefault();
            setSelectedIndex(selectedIndex <= 0 ? suggestions.length - 1 : selectedIndex - 1);
            setSelectionMode(true);
        }
        if (event.keyCode === KEYS.DOWN_ARROW) {
            event.preventDefault();
            setSelectionMode(true);
            suggestions.length === 0 ? setSelectedIndex(-1) : setSelectedIndex((selectedIndex + 1) % suggestions.length);
        }
    };
    var tagLimitReached = function() {
        return maxTags && tags.length >= maxTags;
    };
    var handlePaste = function(event) {
        if (!allowAdditionFromPaste) {
            return;
        }
        if (tagLimitReached()) {
            setError(ERRORS.TAG_LIMIT);
            resetAndFocusInput();
            return;
        }
        setError("");
        event.preventDefault();
        var clipboardData = event.clipboardData || window.clipboardData;
        var clipboardText = clipboardData.getData("text");
        var tmp = props.maxLength, maxLength2 = tmp === void 0 ? clipboardText.length : tmp;
        var maxTextLength = Math.min(maxLength2, clipboardText.length);
        var pastedText = clipboardData.getData("text").substr(0, maxTextLength);
        var keycodes = delimiters;
        if (separators.length) {
            keycodes = [];
            separators.forEach(function(separator) {
                var keycode = getKeyCodeFromSeparator(separator);
                if (Array.isArray(keycode)) {
                    keycodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keycodes).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keycode));
                } else {
                    keycodes.push(keycode);
                }
            });
        }
        var delimiterRegExp = buildRegExpFromDelimiters(keycodes);
        var tags2 = pastedText.split(delimiterRegExp).map(function(tag) {
            return tag.trim();
        });
        uniq_default(tags2).forEach(function(tag) {
            var _obj;
            return addTag((_obj = {
                id: tag.trim()
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, labelField, tag.trim()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "className", ""), _obj));
        });
    };
    var addTag = function(tag) {
        var _props_handleAddition;
        if (!tag.id || !tag[labelField]) {
            return;
        }
        if (currentEditIndex === -1) {
            if (tagLimitReached()) {
                setError(ERRORS.TAG_LIMIT);
                resetAndFocusInput();
                return;
            }
            setError("");
        }
        var existingKeys = tags.map(function(tag2) {
            return tag2.id.toLowerCase();
        });
        if (allowUnique && existingKeys.indexOf(tag.id.trim().toLowerCase()) >= 0) {
            return;
        }
        if (autocomplete) {
            var possibleMatches = filteredSuggestions(tag[labelField]);
            console.warn("[Deprecation] The autocomplete prop will be removed in 7.x to simplify the integration and make it more intutive. If you have any concerns regarding this, please share your thoughts in https://github.com/react-tags/react-tags/issues/949");
            if (autocomplete === 1 && possibleMatches.length === 1 || autocomplete === true && possibleMatches.length) {
                tag = possibleMatches[0];
            }
        }
        if (currentEditIndex !== -1 && props.onTagUpdate) props.onTagUpdate(currentEditIndex, tag);
        else props === null || props === void 0 ? void 0 : (_props_handleAddition = props.handleAddition) === null || _props_handleAddition === void 0 ? void 0 : _props_handleAddition.call(props, tag);
        setQuery("");
        setSelectionMode(false);
        setSelectedIndex(-1);
        setCurrentEditIndex(-1);
        resetAndFocusInput();
    };
    var handleSuggestionClick = function(index) {
        addTag(suggestions[index]);
    };
    var handleClearAll = function() {
        if (props.onClearAll) {
            props.onClearAll();
        }
        setError("");
        resetAndFocusInput();
    };
    var handleSuggestionHover = function(index) {
        setSelectedIndex(index);
        setSelectionMode(true);
    };
    var moveTag = function(dragIndex, hoverIndex) {
        var _props_handleDrag;
        var dragTag = tags[dragIndex];
        props === null || props === void 0 ? void 0 : (_props_handleDrag = props.handleDrag) === null || _props_handleDrag === void 0 ? void 0 : _props_handleDrag.call(props, dragTag, dragIndex, hoverIndex);
    };
    var getTagItems = function() {
        var allClassNames2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, DEFAULT_CLASSNAMES, props.classNames);
        return tags.map(function(tag, index) {
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: currentEditIndex === index ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: allClassNames2.editTagInput,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        ref: function(input) {
                            tagInput.current = input;
                        },
                        onFocus: handleFocus,
                        value: query,
                        onChange: handleChange,
                        onKeyDown: handleKeyDown,
                        onBlur: handleBlur,
                        className: allClassNames2.editTagInputField,
                        onPaste: handlePaste,
                        "data-testid": "tag-edit"
                    })
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SingleTag, {
                    index: index,
                    tag: tag,
                    tags: tags,
                    labelField: labelField,
                    onDelete: function(event) {
                        return handleDelete(index, event);
                    },
                    moveTag: allowDragDrop ? moveTag : void 0,
                    removeComponent: removeComponent,
                    onTagClicked: function(event) {
                        return handleTagClick(index, tag, event);
                    },
                    readOnly: readOnly,
                    classNames: allClassNames2,
                    allowDragDrop: allowDragDrop
                })
            }, index);
        });
    };
    var tagItems = getTagItems();
    var allClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, DEFAULT_CLASSNAMES, classNames);
    var inputName = props.name, inputId = props.id;
    var position = inline === false ? INPUT_FIELD_POSITIONS.BOTTOM : inputFieldPosition;
    var tagsComponent = !readOnly ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: allClassNames.tagInput,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, inputProps), {
                ref: function(input) {
                    textInput.current = input;
                },
                className: allClassNames.tagInputField,
                type: "text",
                placeholder: placeholder,
                "aria-label": placeholder,
                onFocus: handleFocus,
                onBlur: handleBlur,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                onPaste: handlePaste,
                name: inputName,
                id: inputId,
                maxLength: maxLength,
                value: inputValue,
                "data-automation": "input",
                "data-testid": "input"
            })),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Suggestions_default, {
                query: query.trim(),
                suggestions: suggestions,
                labelField: labelField,
                selectedIndex: selectedIndex,
                handleClick: handleSuggestionClick,
                handleHover: handleSuggestionHover,
                minQueryLength: minQueryLength,
                shouldRenderSuggestions: shouldRenderSuggestions2,
                isFocused: isFocused,
                classNames: allClassNames,
                renderSuggestion: props.renderSuggestion
            }),
            clearAll && tags.length > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ClearAllTags_default, {
                "aria-label": ariaAttrs === null || ariaAttrs === void 0 ? void 0 : ariaAttrs.clearAllLabel,
                classNames: allClassNames,
                onClick: handleClearAll
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                "data-testid": "error",
                className: "ReactTags__error",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        height: "24",
                        width: "24",
                        fill: "#e03131",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        })
                    }),
                    error
                ]
            })
        ]
    }) : null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, import_classnames2.default)(allClassNames.tags, "react-tags-wrapper"),
        ref: reactTagsRef,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                role: "alert",
                className: "sr-only",
                style: {
                    position: "absolute",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    margin: "-1px",
                    padding: 0,
                    width: "1px",
                    height: "1px",
                    border: 0
                },
                children: ariaLiveStatus
            }),
            position === INPUT_FIELD_POSITIONS.TOP && tagsComponent,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: allClassNames.selected,
                children: [
                    tagItems,
                    position === INPUT_FIELD_POSITIONS.INLINE && tagsComponent
                ]
            }),
            position === INPUT_FIELD_POSITIONS.BOTTOM && tagsComponent
        ]
    });
};
var ReactTags_default = ReactTags;
;
var ReactTagsWrapper = function(props) {
    var _props_delimiters;
    var _props_placeholder = props.placeholder, placeholder = _props_placeholder === void 0 ? DEFAULT_PLACEHOLDER : _props_placeholder, _props_labelField = props.labelField, labelField = _props_labelField === void 0 ? DEFAULT_LABEL_FIELD : _props_labelField, _props_suggestions = props.suggestions, suggestions = _props_suggestions === void 0 ? [] : _props_suggestions, _props_delimiters1 = props.// Set delimeters to empty array if not provided
    delimiters, delimiters = _props_delimiters1 === void 0 ? [] : _props_delimiters1, _props_separators = props.// Set separators to empty array if delimiters is provided
    separators, separators = _props_separators === void 0 ? ((_props_delimiters = props.delimiters) === null || _props_delimiters === void 0 ? void 0 : _props_delimiters.length) ? [] : [
        SEPARATORS.ENTER,
        SEPARATORS.TAB
    ] : _props_separators, autofocus = props.autofocus, _props_autoFocus = props.autoFocus, autoFocus = _props_autoFocus === void 0 ? true : _props_autoFocus, inline = props.inline, _props_inputFieldPosition = props.// TODO= Remove in v7.x.x
    inputFieldPosition, inputFieldPosition = _props_inputFieldPosition === void 0 ? "inline" : _props_inputFieldPosition, _props_allowDeleteFromEmptyInput = props.allowDeleteFromEmptyInput, allowDeleteFromEmptyInput = _props_allowDeleteFromEmptyInput === void 0 ? false : _props_allowDeleteFromEmptyInput, _props_allowAdditionFromPaste = props.allowAdditionFromPaste, allowAdditionFromPaste = _props_allowAdditionFromPaste === void 0 ? true : _props_allowAdditionFromPaste, _props_autocomplete = props.autocomplete, autocomplete = _props_autocomplete === void 0 ? false : _props_autocomplete, _props_readOnly = props.readOnly, readOnly = _props_readOnly === void 0 ? false : _props_readOnly, _props_allowUnique = props.allowUnique, allowUnique = _props_allowUnique === void 0 ? true : _props_allowUnique, _props_allowDragDrop = props.allowDragDrop, allowDragDrop = _props_allowDragDrop === void 0 ? true : _props_allowDragDrop, _props_tags = props.tags, tags = _props_tags === void 0 ? [] : _props_tags, _props_inputProps = props.inputProps, inputProps = _props_inputProps === void 0 ? {} : _props_inputProps, _props_editable = props.editable, editable = _props_editable === void 0 ? false : _props_editable, _props_clearAll = props.clearAll, clearAll = _props_clearAll === void 0 ? false : _props_clearAll, _props_ariaAttrs = props.ariaAttrs, ariaAttrs = _props_ariaAttrs === void 0 ? {
        clearAllLabel: "clear all tags"
    } : _props_ariaAttrs, handleDelete = props.handleDelete, handleAddition = props.handleAddition, onTagUpdate = props.onTagUpdate, handleDrag = props.handleDrag, handleFilterSuggestions = props.handleFilterSuggestions, handleTagClick = props.handleTagClick, handleInputChange = props.handleInputChange, handleInputFocus = props.handleInputFocus, handleInputBlur = props.handleInputBlur, minQueryLength = props.minQueryLength, shouldRenderSuggestions2 = props.shouldRenderSuggestions, removeComponent = props.removeComponent, onClearAll = props.onClearAll, classNames = props.classNames, name = props.name, id = props.id, maxLength = props.maxLength, inputValue = props.inputValue, maxTags = props.maxTags, renderSuggestion = props.renderSuggestion;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ReactTags_default, {
        placeholder: placeholder,
        labelField: labelField,
        suggestions: suggestions,
        delimiters: delimiters,
        separators: separators,
        autofocus: autofocus,
        autoFocus: autoFocus,
        inline: inline,
        inputFieldPosition: inputFieldPosition,
        allowDeleteFromEmptyInput: allowDeleteFromEmptyInput,
        allowAdditionFromPaste: allowAdditionFromPaste,
        autocomplete: autocomplete,
        readOnly: readOnly,
        allowUnique: allowUnique,
        allowDragDrop: allowDragDrop,
        tags: tags,
        inputProps: inputProps,
        editable: editable,
        clearAll: clearAll,
        ariaAttrs: ariaAttrs,
        handleDelete: handleDelete,
        handleAddition: handleAddition,
        onTagUpdate: onTagUpdate,
        handleDrag: handleDrag,
        handleFilterSuggestions: handleFilterSuggestions,
        handleTagClick: handleTagClick,
        handleInputChange: handleInputChange,
        handleInputFocus: handleInputFocus,
        handleInputBlur: handleInputBlur,
        minQueryLength: minQueryLength,
        shouldRenderSuggestions: shouldRenderSuggestions2,
        removeComponent: removeComponent,
        onClearAll: onClearAll,
        classNames: classNames,
        name: name,
        id: id,
        maxLength: maxLength,
        inputValue: inputValue,
        maxTags: maxTags,
        renderSuggestion: renderSuggestion
    });
};
var WithContext = function(_0) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_destructuring_empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_0), props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, _0);
    return(// @ts-ignore
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndProvider"], {
        backend: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML5Backend"],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ReactTagsWrapper, (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props))
    }));
};
;
 /*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/  //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=739d6_8e1b3aee._.js.map