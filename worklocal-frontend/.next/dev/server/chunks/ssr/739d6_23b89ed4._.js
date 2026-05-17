module.exports = [
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-ssr] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-ssr] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
}),
"[project]/worklocal-frontend/node_modules/redux/es/redux.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
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
    if (typeof obj !== 'object' || obj === null) return false;
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
    var type = typeof val;
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
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val;
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
                if (typeof observer !== 'object' || observer === null) {
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
    if (typeof actionCreators !== 'object' || actionCreators === null) {
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}
;
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
function invariant(condition, format, ...args) {
    if (isProduction()) //TURBOPACK unreachable
    ;
    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            let argIndex = 0;
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
    return typeof process !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'production';
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
function get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null, obj);
}
function without(items, item) {
    return items.filter((i)=>i !== item);
}
function isString(input) {
    return typeof input === 'string';
}
function isObject(input) {
    return typeof input === 'object';
}
function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1);
} //# sourceMappingURL=js_utils.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG'; //# sourceMappingURL=types.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setClientOffset",
    ()=>setClientOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
;
function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_COORDS"],
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
} //# sourceMappingURL=setClientOffset.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBeginDrag",
    ()=>createBeginDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$local$2f$setClientOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
;
;
;
;
const ResetCoordinatesAction = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_COORDS"],
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource = true, clientOffset, getSourceClientOffset } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$local$2f$setClientOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClientOffset"])(clientOffset));
        verifyInvariants(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$local$2f$setClientOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClientOffset"])(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEGIN_DRAG"],
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants(sourceIds, monitor, registry) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
} //# sourceMappingURL=beginDrag.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/drop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDrop",
    ()=>createDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
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
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DROP"],
                payload: {
                    dropResult: _objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(monitor.isDragging(), 'Cannot call drop while not dragging.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof dropResult === 'undefined' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
} //# sourceMappingURL=drop.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEndDrag",
    ()=>createEndDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
;
;
function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_DRAG"]
        };
    };
}
function verifyIsDragging(monitor) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
} //# sourceMappingURL=endDrag.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/matchesType.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchesType",
    ()=>matchesType
]);
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType) : targetType === draggedItemType;
} //# sourceMappingURL=matchesType.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/hover.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHover",
    ()=>createHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/matchesType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
;
;
;
function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOVER"],
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(monitor.isDragging(), 'Cannot call hover while not dragging.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesType"])(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
} //# sourceMappingURL=hover.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPublishDragSource",
    ()=>createPublishDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
;
function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISH_DRAG_SOURCE"]
            };
        }
        return;
    };
} //# sourceMappingURL=publishDragSource.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDragDropActions",
    ()=>createDragDropActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$beginDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$drop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/drop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$endDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$hover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/hover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$publishDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function createDragDropActions(manager) {
    return {
        beginDrag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$beginDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBeginDrag"])(manager),
        publishDragSource: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$publishDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublishDragSource"])(manager),
        hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$hover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHover"])(manager),
        drop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$drop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDrop"])(manager),
        endDrag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$endDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEndDrag"])(manager)
    };
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragDropManagerImpl",
    ()=>DragDropManagerImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/index.js [app-ssr] (ecmascript) <locals>");
;
class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDragDropActions"])(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
} //# sourceMappingURL=DragDropManagerImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/coords.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
    const { clientOffset, initialClientOffset } = state;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
} //# sourceMappingURL=coords.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/dirtiness.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL",
    ()=>ALL,
    "NONE",
    ()=>NONE,
    "areDirty",
    ()=>areDirty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)");
;
const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    const commonIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["intersection"])(handlerIds, dirtyIds);
    return commonIds.length > 0;
} //# sourceMappingURL=dirtiness.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragDropMonitorImpl",
    ()=>DragDropMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$coords$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/coords.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/dirtiness.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/matchesType.js [app-ssr] (ecmascript)");
;
;
;
;
class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof listener === 'function', 'listener must be a function.');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areDirty"])(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                    listener();
                }
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const target = this.registry.getTarget(targetId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesType"])(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const { shallow } = options;
        if (!this.isDragging()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$matchesType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesType"])(targetType, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        } else {
            return index > -1;
        }
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$coords$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSourceClientOffset"])(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$coords$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDifferenceFromInitialOffset"])(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
} //# sourceMappingURL=DragDropMonitorImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/makeRequestCall.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
/* globals self */ const scope = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
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
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // They are implemented in all modern browsers.
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
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/AsapQueue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsapQueue",
    ()=>AsapQueue
]);
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */ var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$makeRequestCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/makeRequestCall.js [app-ssr] (ecmascript)");
;
class AsapQueue {
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
    enqueueTask(task) {
        const { queue: q, requestFlush } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
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
        this.flush = ()=>{
            const { queue: q } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$makeRequestCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRequestCall"])(this.flush);
        this.requestErrorThrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$makeRequestCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRequestCallFromTimer"])(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
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
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/RawTask.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// `call`, just like a function.
__turbopack_context__.s([
    "RawTask",
    ()=>RawTask
]);
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
} //# sourceMappingURL=RawTask.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/TaskFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskFactory",
    ()=>TaskFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$RawTask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/RawTask.js [app-ssr] (ecmascript)");
;
class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$RawTask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTask"](this.onError, (t)=>tasks[tasks.length] = t);
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
} //# sourceMappingURL=TaskFactory.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/asap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asap",
    ()=>asap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$AsapQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/AsapQueue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$TaskFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/TaskFactory.js [app-ssr] (ecmascript)");
;
;
const asapQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$AsapQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AsapQueue"]();
const taskFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$TaskFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TaskFactory"](asapQueue.registerPendingError);
function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
} //# sourceMappingURL=asap.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=types.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$asap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/asap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$AsapQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/AsapQueue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$TaskFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/TaskFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/types.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
} //# sourceMappingURL=registry.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/contracts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSourceContract",
    ()=>validateSourceContract,
    "validateTargetContract",
    ()=>validateTargetContract,
    "validateType",
    ()=>validateType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
;
function validateSourceContract(source) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof target.hover === 'function', 'Expected hover to be a function.');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false));
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
} //# sourceMappingURL=contracts.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/interfaces.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/getNextUniqueId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextUniqueId",
    ()=>getNextUniqueId
]);
let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
} //# sourceMappingURL=getNextUniqueId.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandlerRegistryImpl",
    ()=>HandlerRegistryImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$asap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/asap/dist/asap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/contracts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/interfaces.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$getNextUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/getNextUniqueId.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getNextHandlerId(role) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$getNextUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextUniqueId"])().toString();
    switch(role){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE:
            return `S${id}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE;
        case 'T':
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done, value: [, value] } = entries.next();
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateType"])(type);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSourceContract"])(source);
        const sourceId = this.addHandler(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE, type, source);
        this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSource"])(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateType"])(type, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTargetContract"])(target);
        const targetId = this.addHandler(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET, type, target);
        this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTarget"])(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET;
    }
    removeSource(sourceId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSource"])(sourceId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$asap$2f$dist$2f$asap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asap"])(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeTarget"])(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].SOURCE) {
            this.dragSources.set(id, handler);
        } else if (role === __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRole"].TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
} //# sourceMappingURL=HandlerRegistryImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/equality.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areArraysEqual",
    ()=>areArraysEqual,
    "areCoordsEqual",
    ()=>areCoordsEqual,
    "strictEquality",
    ()=>strictEquality
]);
const strictEquality = (a, b)=>a === b;
function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=equality.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/dirtiness.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/equality.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function reduce(_state = __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"], action) {
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOVER"]:
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADD_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADD_TARGET"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REMOVE_TARGET"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REMOVE_SOURCE"]:
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEGIN_DRAG"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISH_DRAG_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_DRAG"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DROP"]:
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL"];
    }
    const { targetIds = [], prevTargetIds = [] } = action.payload;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xor"])(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areArraysEqual"])(targetIds, prevTargetIds);
    if (!didChange) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$dirtiness$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
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
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOffset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/equality.js [app-ssr] (ecmascript)");
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
const initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce(state = initialState, action) {
    const { payload } = action;
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_COORDS"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEGIN_DRAG"]:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOVER"]:
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$equality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areCoordsEqual"])(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return _objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_DRAG"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DROP"]:
            return initialState;
        default:
            return state;
    }
} //# sourceMappingURL=dragOffset.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/dragDrop/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)");
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
const initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce(state = initialState, action) {
    const { payload } = action;
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEGIN_DRAG"]:
            return _objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISH_DRAG_SOURCE"]:
            return _objectSpread({}, state, {
                isSourcePublic: true
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOVER"]:
            return _objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REMOVE_TARGET"]:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return _objectSpread({}, state, {
                targetIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["without"])(state.targetIds, payload.targetId)
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DROP"]:
            return _objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$dragDrop$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_DRAG"]:
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
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/refCount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/actions/registry.js [app-ssr] (ecmascript)");
;
function reduce(state = 0, action) {
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADD_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADD_TARGET"]:
            return state + 1;
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REMOVE_SOURCE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$actions$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REMOVE_TARGET"]:
            return state - 1;
        default:
            return state;
    }
} //# sourceMappingURL=refCount.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/stateId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
function reduce(state = 0) {
    return state + 1;
} //# sourceMappingURL=stateId.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduce",
    ()=>reduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/utils/js_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dirtyHandlerIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/dragOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$refCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/refCount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$stateId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/stateId.js [app-ssr] (ecmascript)");
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
function reduce(state = {}, action) {
    return {
        dirtyHandlerIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dirtyHandlerIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread({}, action.payload, {
                prevTargetIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])(state.dragOffset, action),
        refCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$refCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])(state.refCount, action),
        dragOperation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$dragOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])(state.dragOperation, action),
        stateId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$stateId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])(state.stateId)
    };
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/dnd-core/dist/createDragDropManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDragDropManager",
    ()=>createDragDropManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/redux/es/redux.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropManagerImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropMonitorImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$HandlerRegistryImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/reducers/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropMonitorImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragDropMonitorImpl"](store, new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$HandlerRegistryImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandlerRegistryImpl"](store));
    const manager = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$classes$2f$DragDropManagerImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragDropManagerImpl"](store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$reducers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"], debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
} //# sourceMappingURL=createDragDropManager.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DndContext",
    ()=>DndContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DndContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    dragDropManager: undefined
}); //# sourceMappingURL=DndContext.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DndProvider",
    ()=>DndProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$createDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/dnd-core/dist/createDragDropManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndContext.js [app-ssr] (ecmascript)");
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
let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function DndProvider(_param) {
    var { children } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) {
                    context[INSTANCE_SYM] = null;
                }
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"].Provider, {
        value: manager,
        children: children
    });
});
;
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$dnd$2d$core$2f$dist$2f$createDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDragDropManager"])(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
} //# sourceMappingURL=DndProvider.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    let result = null;
    const memoized = ()=>{
        if (result == null) {
            result = fn();
        }
        return result;
    };
    return memoized;
}
function without(items, item) {
    return items.filter((i)=>i !== item);
}
function union(itemsA, itemsB) {
    const set = new Set();
    const insertItem = (item)=>set.add(item);
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    set.forEach((key)=>result.push(key));
    return result;
} //# sourceMappingURL=js_utils.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterLeaveCounter",
    ()=>EnterLeaveCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js [app-ssr] (ecmascript)");
;
class EnterLeaveCounter {
    enter(enteringNode) {
        const previousLength = this.entered.length;
        const isNodeEntered = (node)=>this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
        this.entered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["union"])(this.entered.filter(isNodeEntered), [
            enteringNode
        ]);
        return previousLength === 0 && this.entered.length > 0;
    }
    leave(leavingNode) {
        const previousLength = this.entered.length;
        this.entered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["without"])(this.entered.filter(this.isNodeInDocument), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    }
    reset() {
        this.entered = [];
    }
    constructor(isNodeInDocument){
        this.entered = [];
        this.isNodeInDocument = isNodeInDocument;
    }
} //# sourceMappingURL=EnterLeaveCounter.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDragSource",
    ()=>NativeDragSource
]);
class NativeDragSource {
    initializeExposedProperties() {
        Object.keys(this.config.exposeProperties).forEach((property)=>{
            Object.defineProperty(this.item, property, {
                configurable: true,
                enumerable: true,
                get () {
                    // eslint-disable-next-line no-console
                    console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
                    return null;
                }
            });
        });
    }
    loadDataTransfer(dataTransfer) {
        if (dataTransfer) {
            const newProperties = {};
            Object.keys(this.config.exposeProperties).forEach((property)=>{
                const propertyFn = this.config.exposeProperties[property];
                if (propertyFn != null) {
                    newProperties[property] = {
                        value: propertyFn(dataTransfer, this.config.matchesTypes),
                        configurable: true,
                        enumerable: true
                    };
                }
            });
            Object.defineProperties(this.item, newProperties);
        }
    }
    canDrag() {
        return true;
    }
    beginDrag() {
        return this.item;
    }
    isDragging(monitor, handle) {
        return handle === monitor.getSourceId();
    }
    endDrag() {
    // empty
    }
    constructor(config){
        this.config = config;
        this.item = {};
        this.initializeExposedProperties();
    }
} //# sourceMappingURL=NativeDragSource.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const FILE = '__NATIVE_FILE__';
const URL = '__NATIVE_URL__';
const TEXT = '__NATIVE_TEXT__';
const HTML = '__NATIVE_HTML__'; //# sourceMappingURL=NativeTypes.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataFromDataTransfer",
    ()=>getDataFromDataTransfer
]);
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    const result = typesToTry.reduce((resultSoFar, typeToTry)=>resultSoFar || dataTransfer.getData(typeToTry), '');
    return result != null ? result : defaultValue;
} //# sourceMappingURL=getDataFromDataTransfer.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nativeTypesConfig",
    ()=>nativeTypesConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js [app-ssr] (ecmascript)");
;
;
const nativeTypesConfig = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FILE"]]: {
        exposeProperties: {
            files: (dataTransfer)=>Array.prototype.slice.call(dataTransfer.files),
            items: (dataTransfer)=>dataTransfer.items,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Files'
        ]
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HTML"]]: {
        exposeProperties: {
            html: (dataTransfer, matchesTypes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, ''),
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Html',
            'text/html'
        ]
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URL"]]: {
        exposeProperties: {
            urls: (dataTransfer, matchesTypes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, '').split('\n'),
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Url',
            'text/uri-list'
        ]
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"]]: {
        exposeProperties: {
            text: (dataTransfer, matchesTypes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$getDataFromDataTransfer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, ''),
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Text',
            'text/plain'
        ]
    }
}; //# sourceMappingURL=nativeTypesConfig.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNativeDragSource",
    ()=>createNativeDragSource,
    "matchNativeItemType",
    ()=>matchNativeItemType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$NativeDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js [app-ssr] (ecmascript)");
;
;
function createNativeDragSource(type, dataTransfer) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nativeTypesConfig"][type];
    if (!config) {
        throw new Error(`native type ${type} has no configuration`);
    }
    const result = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$NativeDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDragSource"](config);
    result.loadDataTransfer(dataTransfer);
    return result;
}
function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
        return null;
    }
    const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nativeTypesConfig"]).filter((nativeItemType)=>{
        const typeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$nativeTypesConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nativeTypesConfig"][nativeItemType];
        if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
            return false;
        }
        return typeConfig.matchesTypes.some((t)=>dataTransferTypes.indexOf(t) > -1);
    })[0] || null;
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/BrowserDetector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFirefox",
    ()=>isFirefox,
    "isSafari",
    ()=>isSafari
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/utils/js_utils.js [app-ssr] (ecmascript)");
;
const isFirefox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(()=>/firefox/i.test(navigator.userAgent));
const isSafari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$utils$2f$js_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(()=>Boolean(window.safari)); //# sourceMappingURL=BrowserDetector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonotonicInterpolant",
    ()=>MonotonicInterpolant
]);
class MonotonicInterpolant {
    interpolate(x) {
        const { xs, ys, c1s, c2s, c3s } = this;
        // The rightmost point in the dataset should give an exact result
        let i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        let low = 0;
        let high = c3s.length - 1;
        let mid;
        while(low <= high){
            mid = Math.floor(0.5 * (low + high));
            const xHere = xs[mid];
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
        const diff = x - xs[i];
        const diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
    constructor(xs, ys){
        const { length } = xs;
        // Rearrange xs and ys so that xs is sorted
        const indexes = [];
        for(let i = 0; i < length; i++){
            indexes.push(i);
        }
        indexes.sort((a, b)=>xs[a] < xs[b] ? -1 : 1);
        // Get consecutive differences and slopes
        const dys = [];
        const dxs = [];
        const ms = [];
        let dx;
        let dy;
        for(let i1 = 0; i1 < length - 1; i1++){
            dx = xs[i1 + 1] - xs[i1];
            dy = ys[i1 + 1] - ys[i1];
            dxs.push(dx);
            dys.push(dy);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        const c1s = [
            ms[0]
        ];
        for(let i2 = 0; i2 < dxs.length - 1; i2++){
            const m2 = ms[i2];
            const mNext = ms[i2 + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            } else {
                dx = dxs[i2];
                const dxNext = dxs[i2 + 1];
                const common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        const c2s = [];
        const c3s = [];
        let m;
        for(let i3 = 0; i3 < c1s.length - 1; i3++){
            m = ms[i3];
            const c1 = c1s[i3];
            const invDx = 1 / dxs[i3];
            const common = c1 + c1s[i3 + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
} //# sourceMappingURL=MonotonicInterpolant.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OffsetUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDragPreviewOffset",
    ()=>getDragPreviewOffset,
    "getEventClientOffset",
    ()=>getEventClientOffset,
    "getNodeClientOffset",
    ()=>getNodeClientOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/BrowserDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$MonotonicInterpolant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js [app-ssr] (ecmascript)");
;
;
const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    const { top, left } = el.getBoundingClientRect();
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
    return node.nodeName === 'IMG' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFirefox"])() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSafari"])() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return {
        dragPreviewWidth,
        dragPreviewHeight
    };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    const isImage = isImageNode(dragPreview);
    const dragPreviewNode = isImage ? sourceNode : dragPreview;
    const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    const offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
    const { anchorX, anchorY } = anchorPoint;
    const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
    const calculateYOffset = ()=>{
        const interpolantY = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$MonotonicInterpolant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonotonicInterpolant"]([
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
        let y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$BrowserDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSafari"])() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    const calculateXOffset = ()=>{
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        const interpolantX = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$MonotonicInterpolant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonotonicInterpolant"]([
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
    const { offsetX, offsetY } = offsetPoint;
    const isManualOffsetX = offsetX === 0 || offsetX;
    const isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset()
    };
} //# sourceMappingURL=OffsetUtils.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OptionsReader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionsReader",
    ()=>OptionsReader
]);
class OptionsReader {
    get window() {
        if (this.globalContext) {
            return this.globalContext;
        } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return undefined;
    }
    get document() {
        var ref;
        if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
            return this.globalContext.document;
        } else if (this.window) {
            return this.window.document;
        } else {
            return undefined;
        }
    }
    get rootElement() {
        var ref;
        return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
    }
    constructor(globalContext, options){
        this.ownerDocument = null;
        this.globalContext = globalContext;
        this.optionsArgs = options;
    }
} //# sourceMappingURL=OptionsReader.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML5BackendImpl",
    ()=>HTML5BackendImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$EnterLeaveCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OffsetUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OptionsReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/OptionsReader.js [app-ssr] (ecmascript)");
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
class HTML5BackendImpl {
    /**
	 * Generate profiling statistics for the HTML5Backend.
	 */ profile() {
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
    // public for test
    get window() {
        return this.options.window;
    }
    get document() {
        return this.options.document;
    }
    /**
	 * Get the root element to use for event subscriptions
	 */ get rootElement() {
        return this.options.rootElement;
    }
    setup() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        if (root.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        root.__isReactDndBackendSetUp = true;
        this.addEventListeners(root);
    }
    teardown() {
        const root = this.rootElement;
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
    connectDragPreview(sourceId, node, options) {
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return ()=>{
            this.sourcePreviewNodes.delete(sourceId);
            this.sourcePreviewNodeOptions.delete(sourceId);
        };
    }
    connectDragSource(sourceId, node, options) {
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        const handleDragStart = (e)=>this.handleDragStart(e, sourceId);
        const handleSelectStart = (e)=>this.handleSelectStart(e);
        node.setAttribute('draggable', 'true');
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return ()=>{
            this.sourceNodes.delete(sourceId);
            this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', 'false');
        };
    }
    connectDropTarget(targetId, node) {
        const handleDragEnter = (e)=>this.handleDragEnter(e, targetId);
        const handleDragOver = (e)=>this.handleDragOver(e, targetId);
        const handleDrop = (e)=>this.handleDrop(e, targetId);
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return ()=>{
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    }
    addEventListeners(target) {
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
    removeEventListeners(target) {
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
    getCurrentSourceNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return _objectSpread({
            dropEffect: this.altKeyPressed ? 'copy' : 'move'
        }, sourceNodeOptions || {});
    }
    getCurrentDropEffect() {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    }
    getCurrentSourcePreviewNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return _objectSpread({
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false
        }, sourcePreviewNodeOptions || {});
    }
    isDraggingNativeItem() {
        const itemType = this.monitor.getItemType();
        return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__).some((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[key] === itemType);
    }
    beginDragNativeItem(type, dataTransfer) {
        this.clearCurrentDragSourceNode();
        this.currentNativeSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNativeDragSource"])(type, dataTransfer);
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([
            this.currentNativeHandle
        ]);
    }
    setCurrentDragSourceNode(node) {
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        const MOUSE_MOVE_TIMEOUT = 1000;
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
        this.mouseMoveTimeoutTimer = setTimeout(()=>{
            var ref;
            return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }, MOUSE_MOVE_TIMEOUT);
    }
    clearCurrentDragSourceNode() {
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
    handleDragStart(e, sourceId) {
        if (e.defaultPrevented) {
            return;
        }
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    }
    handleDragEnter(_e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    }
    handleDragOver(_e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    }
    handleDrop(_e, targetId) {
        this.dropTargetIds.unshift(targetId);
    }
    constructor(manager, globalContext, options){
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
        this.getSourceClientOffset = (sourceId)=>{
            const source = this.sourceNodes.get(sourceId);
            return source && (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeClientOffset"])(source) || null;
        };
        this.endDragNativeItem = ()=>{
            if (!this.isDraggingNativeItem()) {
                return;
            }
            this.actions.endDrag();
            if (this.currentNativeHandle) {
                this.registry.removeSource(this.currentNativeHandle);
            }
            this.currentNativeHandle = null;
            this.currentNativeSource = null;
        };
        this.isNodeInDocument = (node)=>{
            // Check the node either in the main document or in the current context
            return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
        };
        this.endDragIfSourceWasRemovedFromDOM = ()=>{
            const node = this.currentDragSourceNode;
            if (node == null || this.isNodeInDocument(node)) {
                return;
            }
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.scheduleHover = (dragOverTargetIds)=>{
            if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                this.hoverRafId = requestAnimationFrame(()=>{
                    if (this.monitor.isDragging()) {
                        this.actions.hover(dragOverTargetIds || [], {
                            clientOffset: this.lastClientOffset
                        });
                    }
                    this.hoverRafId = null;
                });
            }
        };
        this.cancelHover = ()=>{
            if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.hoverRafId);
                this.hoverRafId = null;
            }
        };
        this.handleTopDragStartCapture = ()=>{
            this.clearCurrentDragSourceNode();
            this.dragStartSourceIds = [];
        };
        this.handleTopDragStart = (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            const { dragStartSourceIds } = this;
            this.dragStartSourceIds = null;
            const clientOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e);
            // Avoid crashing if we missed a drop event or our previous drag died
            if (this.monitor.isDragging()) {
                this.actions.endDrag();
                this.cancelHover();
            }
            // Don't publish the source just yet (see why below)
            this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: this.getSourceClientOffset,
                clientOffset
            });
            const { dataTransfer } = e;
            const nativeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchNativeItemType"])(dataTransfer);
            if (this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                    // Use custom drag image if user specifies it.
                    // If child drag source refuses drag but parent agrees,
                    // use parent's node as drag image. Neither works in IE though.
                    const sourceId = this.monitor.getSourceId();
                    const sourceNode = this.sourceNodes.get(sourceId);
                    const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                    if (dragPreview) {
                        const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
                        const anchorPoint = {
                            anchorX,
                            anchorY
                        };
                        const offsetPoint = {
                            offsetX,
                            offsetY
                        };
                        const dragPreviewOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDragPreviewOffset"])(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
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
                this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
                if (!captureDraggingState) {
                    // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(()=>this.actions.publishDragSource(), 0);
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
                    this.actions.publishDragSource();
                }
            } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType);
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
        this.handleTopDragEndCapture = ()=>{
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleTopDragEnterCapture = (e)=>{
            this.dragEnterTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
            const isFirstEnter = this.enterLeaveCounter.enter(e.target);
            if (!isFirstEnter || this.monitor.isDragging()) {
                return;
            }
            const { dataTransfer } = e;
            const nativeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchNativeItemType"])(dataTransfer);
            if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                this.beginDragNativeItem(nativeType, dataTransfer);
            }
        };
        this.handleTopDragEnter = (e)=>{
            const { dragEnterTargetIds } = this;
            this.dragEnterTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
            }
            this.altKeyPressed = e.altKey;
            // If the target changes position as the result of `dragenter`, `dragover` might still
            // get dispatched despite target being no longer there. The easy solution is to check
            // whether there actually is a target before firing `hover`.
            if (dragEnterTargetIds.length > 0) {
                this.actions.hover(dragEnterTargetIds, {
                    clientOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e)
                });
            }
            const canDrop = dragEnterTargetIds.some((targetId)=>this.monitor.canDropOnTarget(targetId));
            if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            }
        };
        this.handleTopDragOverCapture = (e)=>{
            this.dragOverTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
        };
        this.handleTopDragOver = (e)=>{
            const { dragOverTargetIds } = this;
            this.dragOverTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
                return;
            }
            this.altKeyPressed = e.altKey;
            this.lastClientOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e);
            this.scheduleHover(dragOverTargetIds);
            const canDrop = (dragOverTargetIds || []).some((targetId)=>this.monitor.canDropOnTarget(targetId));
            if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            } else if (this.isDraggingNativeItem()) {
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
        this.handleTopDragLeaveCapture = (e)=>{
            if (this.isDraggingNativeItem()) {
                e.preventDefault();
            }
            const isLastLeave = this.enterLeaveCounter.leave(e.target);
            if (!isLastLeave) {
                return;
            }
            if (this.isDraggingNativeItem()) {
                setTimeout(()=>this.endDragNativeItem(), 0);
            }
            this.cancelHover();
        };
        this.handleTopDropCapture = (e)=>{
            this.dropTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeDragSources$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchNativeItemType"])(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
            }
            this.enterLeaveCounter.reset();
        };
        this.handleTopDrop = (e)=>{
            const { dropTargetIds } = this;
            this.dropTargetIds = [];
            this.actions.hover(dropTargetIds, {
                clientOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OffsetUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventClientOffset"])(e)
            });
            this.actions.drop({
                dropEffect: this.getCurrentDropEffect()
            });
            if (this.isDraggingNativeItem()) {
                this.endDragNativeItem();
            } else if (this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleSelectStart = (e)=>{
            const target = e.target;
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
        this.options = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$OptionsReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsReader"](globalContext, options);
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.enterLeaveCounter = new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$EnterLeaveCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterLeaveCounter"](this.isNodeInDocument);
    }
} //# sourceMappingURL=HTML5BackendImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML5Backend",
    ()=>HTML5Backend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$HTML5BackendImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$NativeTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/NativeTypes.js [app-ssr] (ecmascript)");
;
;
;
;
const HTML5Backend = function createBackend(manager, context, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$HTML5BackendImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HTML5BackendImpl"](manager, context, options);
}; //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/fast-deep-equal/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
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
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"]; //# sourceMappingURL=useIsomorphicLayoutEffect.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollector",
    ()=>useCollector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/fast-deep-equal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)");
;
;
;
function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>collect(monitor));
    const updateCollected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const nextValue = collect(monitor);
        // This needs to be a deep-equality check because some monitor-collected values
        // include XYCoord objects that may be equivalent, but do not have instance equality.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(collected, nextValue)) {
            setCollected(nextValue);
            if (onUpdate) {
                onUpdate();
            }
        }
    }, [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(updateCollected);
    return [
        collected,
        updateCollected
    ];
} //# sourceMappingURL=useCollector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useMonitorOutput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMonitorOutput",
    ()=>useMonitorOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)");
;
;
function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCollector"])(monitor, collect, onCollect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
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
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollectedProps",
    ()=>useCollectedProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useMonitorOutput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useMonitorOutput.js [app-ssr] (ecmascript)");
;
function useCollectedProps(collector, monitor, connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useMonitorOutput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMonitorOutput"])(monitor, collector || (()=>({})), ()=>connector.reconnect());
} //# sourceMappingURL=useCollectedProps.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOptionalFactory",
    ()=>useOptionalFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return typeof arg === 'function' ? arg() : arg;
    }, memoDeps);
} //# sourceMappingURL=useOptionalFactory.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/connectors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectDragPreview",
    ()=>useConnectDragPreview,
    "useConnectDragSource",
    ()=>useConnectDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useConnectDragSource(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>connector.hooks.dragSource(), [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>connector.hooks.dragPreview(), [
        connector
    ]);
} //# sourceMappingURL=connectors.js.map
}),
"[project]/worklocal-frontend/node_modules/@react-dnd/shallowequal/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual
]);
function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=index.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/isRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRef",
    ()=>isRef
]);
function isRef(obj) {
    return obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current');
} //# sourceMappingURL=isRef.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapConnectorHooks",
    ()=>wrapConnectorHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options) : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook;
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
    const previousRef = element.ref;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
            ref: newRef
        });
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
            ref: (node)=>{
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
} //# sourceMappingURL=wrapConnectorHooks.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/SourceConnector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceConnector",
    ()=>SourceConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/shallowequal/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/isRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-ssr] (ecmascript)");
;
;
;
class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
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
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
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
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConnectorHooks"])({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    this.dragSourceRef = node;
                } else {
                    this.dragSourceNode = node;
                }
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    this.dragPreviewRef = node;
                } else {
                    this.dragPreviewNode = node;
                }
                this.reconnectDragPreview();
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
} //# sourceMappingURL=SourceConnector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragDropManager",
    ()=>useDragDropManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndContext.js [app-ssr] (ecmascript)");
;
;
;
function useDragDropManager() {
    const { dragDropManager } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
} //# sourceMappingURL=useDragDropManager.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSourceConnector",
    ()=>useDragSourceConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$SourceConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/SourceConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)");
;
;
;
;
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$SourceConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SourceConnector"](manager.getBackend()), [
        manager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        connector.dragSourceOptions = dragSourceOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragSource();
    }, [
        connector,
        dragSourceOptions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        connector.dragPreviewOptions = dragPreviewOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragPreview();
    }, [
        connector,
        dragPreviewOptions
    ]);
    return connector;
} //# sourceMappingURL=useDragSourceConnector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragSourceMonitorImpl",
    ()=>DragSourceMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
;
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) {
            return false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
} //# sourceMappingURL=DragSourceMonitorImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSourceMonitor",
    ()=>useDragSourceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DragSourceMonitorImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)");
;
;
;
function useDragSourceMonitor() {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DragSourceMonitorImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragSourceMonitorImpl"](manager), [
        manager
    ]);
} //# sourceMappingURL=useDragSourceMonitor.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/registration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerSource",
    ()=>registerSource,
    "registerTarget",
    ()=>registerTarget
]);
function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
} //# sourceMappingURL=registration.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragSourceImpl",
    ()=>DragSourceImpl
]);
class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') {
            result = spec.item;
        } else if (typeof spec.item === 'function') {
            result = spec.item(monitor);
        } else {
            result = {};
        }
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') {
            return spec.canDrag;
        } else if (typeof spec.canDrag === 'function') {
            return spec.canDrag(monitor);
        } else {
            return true;
        }
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end } = spec;
        if (end) {
            end(monitor.getItem(), monitor);
        }
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
} //# sourceMappingURL=DragSourceImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSource",
    ()=>useDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$DragSourceImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js [app-ssr] (ecmascript)");
;
;
function useDragSource(spec, monitor, connector) {
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$DragSourceImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragSourceImpl"](spec, monitor, connector), [
        monitor,
        connector
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handler.spec = spec;
    }, [
        spec
    ]);
    return handler;
} //# sourceMappingURL=useDragSource.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragType",
    ()=>useDragType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function useDragType(spec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = spec.type;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(result != null, 'spec.type must be defined');
        return result;
    }, [
        spec
    ]);
} //# sourceMappingURL=useDragType.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredDragSource",
    ()=>useRegisteredDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/registration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js [app-ssr] (ecmascript)");
;
;
;
;
;
function useRegisteredDragSource(spec, monitor, connector) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragSource"])(spec, monitor, connector);
    const itemType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragType"])(spec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerSource"])(itemType, handler, manager);
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
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrag",
    ()=>useDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/connectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useRegisteredDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function useDrag(specArg, deps) {
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOptionalFactory"])(specArg, deps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragSourceMonitor"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragSourceConnector"])(spec.options, spec.previewOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useRegisteredDragSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegisteredDragSource"])(spec, monitor, connector);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCollectedProps"])(spec.collect, monitor, connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnectDragSource"])(connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnectDragPreview"])(connector)
    ];
} //# sourceMappingURL=useDrag.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/connectors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectDropTarget",
    ()=>useConnectDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useConnectDropTarget(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>connector.hooks.dropTarget(), [
        connector
    ]);
} //# sourceMappingURL=connectors.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/TargetConnector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TargetConnector",
    ()=>TargetConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/shallowequal/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/isRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-ssr] (ecmascript)");
;
;
;
class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) {
            this.disconnectDropTarget();
        }
        const dropTarget = this.dropTarget;
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
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConnectorHooks"])({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    this.dropTargetRef = node;
                } else {
                    this.dropTargetNode = node;
                }
                this.reconnect();
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
} //# sourceMappingURL=TargetConnector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTargetConnector",
    ()=>useDropTargetConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$TargetConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/TargetConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)");
;
;
;
;
function useDropTargetConnector(options) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$TargetConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TargetConnector"](manager.getBackend()), [
        manager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        connector.dropTargetOptions = options || null;
        connector.reconnect();
        return ()=>connector.disconnectDropTarget();
    }, [
        options
    ]);
    return connector;
} //# sourceMappingURL=useDropTargetConnector.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropTargetMonitorImpl",
    ()=>DropTargetMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
;
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) {
            return false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) {
            return false;
        }
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
} //# sourceMappingURL=DropTargetMonitorImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTargetMonitor",
    ()=>useDropTargetMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DropTargetMonitorImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)");
;
;
;
function useDropTargetMonitor() {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DropTargetMonitorImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropTargetMonitorImpl"](manager), [
        manager
    ]);
} //# sourceMappingURL=useDropTargetMonitor.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccept",
    ()=>useAccept
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/@react-dnd/invariant/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function useAccept(spec) {
    const { accept } = spec;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(spec.accept != null, 'accept must be defined');
        return Array.isArray(accept) ? accept : [
            accept
        ];
    }, [
        accept
    ]);
} //# sourceMappingURL=useAccept.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropTargetImpl",
    ()=>DropTargetImpl
]);
class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) {
            spec.hover(monitor.getItem(), monitor);
        }
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) {
            return spec.drop(monitor.getItem(), monitor);
        }
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
} //# sourceMappingURL=DropTargetImpl.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTarget",
    ()=>useDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$DropTargetImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js [app-ssr] (ecmascript)");
;
;
function useDropTarget(spec, monitor) {
    const dropTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$DropTargetImpl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropTargetImpl"](spec, monitor), [
        monitor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dropTarget.spec = spec;
    }, [
        spec
    ]);
    return dropTarget;
} //# sourceMappingURL=useDropTarget.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredDropTarget",
    ()=>useRegisteredDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/internals/registration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useAccept$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js [app-ssr] (ecmascript)");
;
;
;
;
;
function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const dropTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDropTarget"])(spec, monitor);
    const accept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useAccept$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccept"])(spec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function registerDropTarget() {
        const [handlerId, unregister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerTarget"])(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map((a)=>a.toString()).join('|')
    ]);
} //# sourceMappingURL=useRegisteredDropTarget.js.map
}),
"[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrop",
    ()=>useDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$connectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/connectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useRegisteredDropTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function useDrop(specArg, deps) {
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOptionalFactory"])(specArg, deps);
    const monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDropTargetMonitor"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDropTargetConnector"])(spec.options);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useRegisteredDropTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegisteredDropTarget"])(spec, monitor, connector);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCollectedProps"])(spec.collect, monitor, connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$connectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnectDropTarget"])(connector)
    ];
} //# sourceMappingURL=useDrop.js.map
}),
"[project]/worklocal-frontend/node_modules/react-tag-input/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
// src/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/core/DndProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd-html5-backend/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-ssr] (ecmascript)");
// src/components/RemoveComponent.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/worklocal-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
// node_modules/classnames/index.js
var require_classnames = __commonJS({
    "node_modules/classnames/index.js" (exports2, module2) {
        (function() {
            "use strict";
            var hasOwn = {}.hasOwnProperty;
            var nativeCodeString = "[native code]";
            function classNames() {
                var classes = [];
                for(var i = 0; i < arguments.length; i++){
                    var arg = arguments[i];
                    if (!arg) continue;
                    var argType = typeof arg;
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
            } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
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
var freeGlobal = ("TURBOPACK compile-time value", "object") == "object" && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
var freeGlobal_default = freeGlobal;
// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
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
    return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;
// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
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
    var type = typeof value;
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
    var type = typeof value;
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
}()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;
// node_modules/lodash-es/stubFalse.js
function stubFalse() {
    return false;
}
var stubFalse_default = stubFalse;
// node_modules/lodash-es/isBuffer.js
var freeExports = ("TURBOPACK compile-time value", "undefined") == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && ("TURBOPACK compile-time value", "undefined") == "object" && module && !module.nodeType && module;
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
var freeExports2 = ("TURBOPACK compile-time value", "undefined") == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && ("TURBOPACK compile-time value", "undefined") == "object" && module && !module.nodeType && module;
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
    var type = typeof value;
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
    if (data instanceof ListCache_default) {
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
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
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
    getTag = function(value) {
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
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
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
]))[1] == INFINITY2) ? noop_default : function(values) {
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
    const delimiterChars = delimiters.map((delimiter)=>{
        const chrCode = delimiter - 48 * Math.floor(delimiter / 48);
        return String.fromCharCode(96 <= delimiter ? chrCode : delimiter);
    }).join("");
    const escapedDelimiterChars = escapeRegExp_default(delimiterChars);
    return new RegExp(`[${escapedDelimiterChars}]+`);
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
    const { moveTag, readOnly, allowDragDrop } = params;
    return moveTag !== void 0 && !readOnly && allowDragDrop;
}
function canDrop(params) {
    const { readOnly, allowDragDrop } = params;
    return !readOnly && allowDragDrop;
}
;
var RemoveComponent = (props)=>{
    const { readOnly, removeComponent, onRemove, className, tag, index } = props;
    const onKeydown = (event)=>{
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
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {});
    }
    const ariaLabel = `Tag at index ${index} with value ${tag.id} focussed. Press backspace to remove`;
    if (removeComponent) {
        const Component = removeComponent;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            "data-testid": "remove",
            onRemove,
            onKeyDown: onKeydown,
            className,
            "aria-label": ariaLabel,
            tag,
            index
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        "data-testid": "remove",
        onClick: onRemove,
        onKeyDown: onKeydown,
        className,
        type: "button",
        "aria-label": ariaLabel,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            height: "12",
            width: "12",
            fill: "#fff",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
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
var SingleTag = (props)=>{
    const tagRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { readOnly = false, tag, classNames, index, moveTag, allowDragDrop = true, labelField = "text", tags } = props;
    const [{ isDragging }, drag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDrag"])(()=>({
            type: ItemTypes.TAG,
            collect: (monitor)=>({
                    isDragging: !!monitor.isDragging()
                }),
            item: props,
            canDrag: ()=>canDrag({
                    moveTag,
                    readOnly,
                    allowDragDrop
                })
        }), [
        tags
    ]);
    const [, drop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDrop"])(()=>({
            accept: ItemTypes.TAG,
            drop: (item)=>{
                const dragIndex = item.index;
                const hoverIndex = index;
                if (dragIndex === hoverIndex) {
                    return;
                }
                props?.moveTag?.(dragIndex, hoverIndex);
            },
            canDrop: (item)=>canDrop(item)
        }), [
        tags
    ]);
    drag(drop(tagRef));
    const label = props.tag[labelField];
    const { className = "" } = tag;
    const opacity = isDragging ? 0 : 1;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        ref: tagRef,
        className: (0, import_classnames.default)("tag-wrapper", classNames.tag, className),
        style: {
            opacity,
            cursor: canDrag({
                moveTag,
                readOnly,
                allowDragDrop
            }) ? "move" : "auto"
        },
        "data-testid": "tag",
        onClick: props.onTagClicked,
        onTouchStart: props.onTagClicked,
        children: [
            label,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RemoveComponent_default, {
                tag: props.tag,
                className: classNames.remove,
                removeComponent: props.removeComponent,
                onRemove: props.onDelete,
                readOnly,
                index
            })
        ]
    });
};
;
;
var ClearAllTags = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        "aria-label": props["aria-label"],
        className: props.classNames.clearAll,
        onClick: props.onClick,
        children: "Clear all"
    });
};
var ClearAllTags_default = ClearAllTags;
;
;
var maybeScrollSuggestionIntoView = (suggestionEl, suggestionsContainer)=>{
    const containerHeight = suggestionsContainer.offsetHeight;
    const suggestionHeight = suggestionEl.offsetHeight;
    const relativeSuggestionTop = suggestionEl.offsetTop - suggestionsContainer.scrollTop;
    if (relativeSuggestionTop + suggestionHeight >= containerHeight) {
        suggestionsContainer.scrollTop += relativeSuggestionTop - containerHeight + suggestionHeight;
    } else if (relativeSuggestionTop < 0) {
        suggestionsContainer.scrollTop += relativeSuggestionTop;
    }
};
var shouldRenderSuggestions = (query, minQueryLength, isFocused, shouldRenderSuggestionsCb)=>{
    if (typeof shouldRenderSuggestionsCb === "function") {
        return shouldRenderSuggestionsCb(query);
    }
    return query.length >= minQueryLength && isFocused;
};
var SuggestionsComp = (props)=>{
    const suggestionsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])();
    const { labelField, minQueryLength, isFocused, classNames, selectedIndex, query } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!suggestionsContainerRef.current) {
            return;
        }
        const activeSuggestion = suggestionsContainerRef.current.querySelector(`.${classNames.activeSuggestion}`);
        if (activeSuggestion) {
            maybeScrollSuggestionIntoView(activeSuggestion, suggestionsContainerRef.current);
        }
    }, [
        selectedIndex
    ]);
    const markIt = (tag, query2)=>{
        const escapedRegex = query2.trim().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
        const { [labelField]: labelValue } = tag;
        return {
            __html: labelValue.replace(RegExp(escapedRegex, "gi"), (x)=>{
                return `<mark>${escape_default(x)}</mark>`;
            })
        };
    };
    const renderSuggestion = (tag, query2)=>{
        if (typeof props.renderSuggestion === "function") {
            return props.renderSuggestion(tag, query2);
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            dangerouslySetInnerHTML: markIt(tag, query2)
        });
    };
    const suggestions = props.suggestions.map((tag, index)=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("li", {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: suggestionsContainerRef,
        className: classNames.suggestions,
        "data-testid": "suggestions",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
            children: [
                " ",
                suggestions,
                " "
            ]
        })
    });
};
var arePropsEqual = (prevProps, nextProps)=>{
    const { query, minQueryLength = 2, isFocused, suggestions } = nextProps;
    if (prevProps.isFocused === isFocused && isEqual_default(prevProps.suggestions, suggestions) && shouldRenderSuggestions(query, minQueryLength, isFocused, nextProps.shouldRenderSuggestions) === shouldRenderSuggestions(prevProps.query, prevProps.minQueryLength ?? 2, prevProps.isFocused, prevProps.shouldRenderSuggestions) && prevProps.selectedIndex === nextProps.selectedIndex) {
        return true;
    }
    return false;
};
var Suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(SuggestionsComp, arePropsEqual);
var Suggestions_default = Suggestions;
// src/components/ReactTags.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
;
var ReactTags = (props)=>{
    const { autofocus, autoFocus, readOnly, labelField, allowDeleteFromEmptyInput, allowAdditionFromPaste, allowDragDrop, minQueryLength, shouldRenderSuggestions: shouldRenderSuggestions2, removeComponent, autocomplete, inline, maxTags, allowUnique, editable, placeholder, delimiters, separators, tags, inputFieldPosition, inputProps, classNames, maxLength, inputValue, clearAll, ariaAttrs } = props;
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.suggestions);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [selectionMode, setSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ariaLiveStatus, setAriaLiveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentEditIndex, setCurrentEditIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const reactTagsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])();
    const textInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tagInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (delimiters.length) {
            console.warn("[Deprecation] The delimiters prop is deprecated and will be removed in v7.x.x, please use separators instead. If you have any concerns regarding this, please share your thoughts in https://github.com/react-tags/react-tags/issues/960");
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof inline !== "undefined") {
            console.warn("[Deprecation] The inline attribute is deprecated and will be removed in v7.x.x, please use inputFieldPosition instead.");
        }
    }, [
        inline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof autofocus !== "undefined") {
            console.warn("[Deprecated] autofocus prop will be removed in 7.x so please migrate to autoFocus prop.");
        }
        if ((autofocus || autoFocus && autofocus !== false) && !readOnly) {
            resetAndFocusInput();
        }
    }, [
        autoFocus,
        autoFocus,
        readOnly
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        updateSuggestions();
    }, [
        query,
        props.suggestions
    ]);
    const filteredSuggestions = (query2)=>{
        let updatedSuggestions = props.suggestions.slice();
        if (allowUnique) {
            const existingTags = tags.map((tag)=>tag.id.trim().toLowerCase());
            updatedSuggestions = updatedSuggestions.filter((suggestion)=>!existingTags.includes(suggestion.id.toLowerCase()));
        }
        if (props.handleFilterSuggestions) {
            return props.handleFilterSuggestions(query2, updatedSuggestions);
        }
        const exactSuggestions = updatedSuggestions.filter((item)=>getQueryIndex(query2, item) === 0);
        const partialSuggestions = updatedSuggestions.filter((item)=>getQueryIndex(query2, item) > 0);
        return exactSuggestions.concat(partialSuggestions);
    };
    const getQueryIndex = (query2, item)=>{
        return item[labelField].toLowerCase().indexOf(query2.toLowerCase());
    };
    const resetAndFocusInput = ()=>{
        setQuery("");
        if (!textInput.current) {
            return;
        }
        textInput.current.value = "";
        textInput.current.focus();
    };
    const handleDelete = (index, event)=>{
        event.preventDefault();
        event.stopPropagation();
        const currentTags = tags.slice();
        if (currentTags.length === 0) {
            return;
        }
        setError("");
        props?.handleDelete?.(index, event);
        updateAriaLiveStatus(index, currentTags);
    };
    const updateAriaLiveStatus = (index, tags2)=>{
        if (!reactTagsRef?.current) {
            return;
        }
        const tagRemoveButtons = reactTagsRef.current.querySelectorAll(".ReactTags__remove");
        let ariaLiveStatus2 = "";
        if (index === 0 && tags2.length > 1) {
            ariaLiveStatus2 = `Tag at index ${index} with value ${tags2[index].id} deleted. Tag at index 0 with value ${tags2[1].id} focussed. Press backspace to remove`;
            tagRemoveButtons[0].focus();
        } else if (index > 0) {
            ariaLiveStatus2 = `Tag at index ${index} with value ${tags2[index].id} deleted. Tag at index ${index - 1} with value ${tags2[index - 1].id} focussed. Press backspace to remove`;
            tagRemoveButtons[index - 1].focus();
        } else {
            ariaLiveStatus2 = `Tag at index ${index} with value ${tags2[index].id} deleted. Input focussed. Press enter to add a new tag`;
            textInput.current?.focus();
        }
        setAriaLiveStatus(ariaLiveStatus2);
    };
    const handleTagClick = (index, tag, event)=>{
        if (readOnly) {
            return;
        }
        if (editable) {
            setCurrentEditIndex(index);
            setQuery(tag[labelField]);
            tagInput.current?.focus();
        }
        props.handleTagClick?.(index, event);
    };
    const handleChange = (event)=>{
        if (props.handleInputChange) {
            props.handleInputChange(event.target.value, event);
        }
        const query2 = event.target.value.trim();
        setQuery(query2);
    };
    const updateSuggestions = ()=>{
        const newSuggestions = filteredSuggestions(query);
        setSuggestions(newSuggestions);
        setSelectedIndex(selectedIndex >= newSuggestions.length ? newSuggestions.length - 1 : selectedIndex);
    };
    const handleFocus = (event)=>{
        const value = event.target.value;
        if (props.handleInputFocus) {
            props.handleInputFocus(value, event);
        }
        setIsFocused(true);
    };
    const handleBlur = (event)=>{
        const value = event.target.value;
        if (props.handleInputBlur) {
            props.handleInputBlur(value, event);
            if (textInput.current) {
                textInput.current.value = "";
            }
        }
        setIsFocused(false);
        setCurrentEditIndex(-1);
    };
    const handleKeyDown = (event)=>{
        const nativeEvent = event.nativeEvent;
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
            const selectedQuery = selectionMode && selectedIndex !== -1 ? suggestions[selectedIndex] : {
                id: query.trim(),
                [labelField]: query.trim(),
                className: ""
            };
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
    const tagLimitReached = ()=>{
        return maxTags && tags.length >= maxTags;
    };
    const handlePaste = (event)=>{
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
        const clipboardData = event.clipboardData || window.clipboardData;
        const clipboardText = clipboardData.getData("text");
        const { maxLength: maxLength2 = clipboardText.length } = props;
        const maxTextLength = Math.min(maxLength2, clipboardText.length);
        const pastedText = clipboardData.getData("text").substr(0, maxTextLength);
        let keycodes = delimiters;
        if (separators.length) {
            keycodes = [];
            separators.forEach((separator)=>{
                const keycode = getKeyCodeFromSeparator(separator);
                if (Array.isArray(keycode)) {
                    keycodes = [
                        ...keycodes,
                        ...keycode
                    ];
                } else {
                    keycodes.push(keycode);
                }
            });
        }
        const delimiterRegExp = buildRegExpFromDelimiters(keycodes);
        const tags2 = pastedText.split(delimiterRegExp).map((tag)=>tag.trim());
        uniq_default(tags2).forEach((tag)=>addTag({
                id: tag.trim(),
                [labelField]: tag.trim(),
                className: ""
            }));
    };
    const addTag = (tag)=>{
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
        const existingKeys = tags.map((tag2)=>tag2.id.toLowerCase());
        if (allowUnique && existingKeys.indexOf(tag.id.trim().toLowerCase()) >= 0) {
            return;
        }
        if (autocomplete) {
            const possibleMatches = filteredSuggestions(tag[labelField]);
            console.warn("[Deprecation] The autocomplete prop will be removed in 7.x to simplify the integration and make it more intutive. If you have any concerns regarding this, please share your thoughts in https://github.com/react-tags/react-tags/issues/949");
            if (autocomplete === 1 && possibleMatches.length === 1 || autocomplete === true && possibleMatches.length) {
                tag = possibleMatches[0];
            }
        }
        if (currentEditIndex !== -1 && props.onTagUpdate) props.onTagUpdate(currentEditIndex, tag);
        else props?.handleAddition?.(tag);
        setQuery("");
        setSelectionMode(false);
        setSelectedIndex(-1);
        setCurrentEditIndex(-1);
        resetAndFocusInput();
    };
    const handleSuggestionClick = (index)=>{
        addTag(suggestions[index]);
    };
    const handleClearAll = ()=>{
        if (props.onClearAll) {
            props.onClearAll();
        }
        setError("");
        resetAndFocusInput();
    };
    const handleSuggestionHover = (index)=>{
        setSelectedIndex(index);
        setSelectionMode(true);
    };
    const moveTag = (dragIndex, hoverIndex)=>{
        const dragTag = tags[dragIndex];
        props?.handleDrag?.(dragTag, dragIndex, hoverIndex);
    };
    const getTagItems = ()=>{
        const allClassNames2 = {
            ...DEFAULT_CLASSNAMES,
            ...props.classNames
        };
        return tags.map((tag, index)=>{
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: currentEditIndex === index ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: allClassNames2.editTagInput,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        ref: (input)=>{
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
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SingleTag, {
                    index,
                    tag,
                    tags,
                    labelField,
                    onDelete: (event)=>handleDelete(index, event),
                    moveTag: allowDragDrop ? moveTag : void 0,
                    removeComponent,
                    onTagClicked: (event)=>handleTagClick(index, tag, event),
                    readOnly,
                    classNames: allClassNames2,
                    allowDragDrop
                })
            }, index);
        });
    };
    const tagItems = getTagItems();
    const allClassNames = {
        ...DEFAULT_CLASSNAMES,
        ...classNames
    };
    const { name: inputName, id: inputId } = props;
    const position = inline === false ? INPUT_FIELD_POSITIONS.BOTTOM : inputFieldPosition;
    const tagsComponent = !readOnly ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: allClassNames.tagInput,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                ...inputProps,
                ref: (input)=>{
                    textInput.current = input;
                },
                className: allClassNames.tagInputField,
                type: "text",
                placeholder,
                "aria-label": placeholder,
                onFocus: handleFocus,
                onBlur: handleBlur,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                onPaste: handlePaste,
                name: inputName,
                id: inputId,
                maxLength,
                value: inputValue,
                "data-automation": "input",
                "data-testid": "input"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Suggestions_default, {
                query: query.trim(),
                suggestions,
                labelField,
                selectedIndex,
                handleClick: handleSuggestionClick,
                handleHover: handleSuggestionHover,
                minQueryLength,
                shouldRenderSuggestions: shouldRenderSuggestions2,
                isFocused,
                classNames: allClassNames,
                renderSuggestion: props.renderSuggestion
            }),
            clearAll && tags.length > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ClearAllTags_default, {
                "aria-label": ariaAttrs?.clearAllLabel,
                classNames: allClassNames,
                onClick: handleClearAll
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                "data-testid": "error",
                className: "ReactTags__error",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        height: "24",
                        width: "24",
                        fill: "#e03131",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        })
                    }),
                    error
                ]
            })
        ]
    }) : null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, import_classnames2.default)(allClassNames.tags, "react-tags-wrapper"),
        ref: reactTagsRef,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
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
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
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
var ReactTagsWrapper = (props)=>{
    const { placeholder = DEFAULT_PLACEHOLDER, labelField = DEFAULT_LABEL_FIELD, suggestions = [], // Set delimeters to empty array if not provided
    delimiters = [], // Set separators to empty array if delimiters is provided
    separators = props.delimiters?.length ? [] : [
        SEPARATORS.ENTER,
        SEPARATORS.TAB
    ], autofocus, autoFocus = true, inline, // TODO= Remove in v7.x.x
    inputFieldPosition = "inline", allowDeleteFromEmptyInput = false, allowAdditionFromPaste = true, autocomplete = false, readOnly = false, allowUnique = true, allowDragDrop = true, tags = [], inputProps = {}, editable = false, clearAll = false, ariaAttrs = {
        clearAllLabel: "clear all tags"
    }, handleDelete, handleAddition, onTagUpdate, handleDrag, handleFilterSuggestions, handleTagClick, handleInputChange, handleInputFocus, handleInputBlur, minQueryLength, shouldRenderSuggestions: shouldRenderSuggestions2, removeComponent, onClearAll, classNames, name, id, maxLength, inputValue, maxTags, renderSuggestion } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ReactTags_default, {
        placeholder,
        labelField,
        suggestions,
        delimiters,
        separators,
        autofocus,
        autoFocus,
        inline,
        inputFieldPosition,
        allowDeleteFromEmptyInput,
        allowAdditionFromPaste,
        autocomplete,
        readOnly,
        allowUnique,
        allowDragDrop,
        tags,
        inputProps,
        editable,
        clearAll,
        ariaAttrs,
        handleDelete,
        handleAddition,
        onTagUpdate,
        handleDrag,
        handleFilterSuggestions,
        handleTagClick,
        handleInputChange,
        handleInputFocus,
        handleInputBlur,
        minQueryLength,
        shouldRenderSuggestions: shouldRenderSuggestions2,
        removeComponent,
        onClearAll,
        classNames,
        name,
        id,
        maxLength,
        inputValue,
        maxTags,
        renderSuggestion
    });
};
var WithContext = ({ ...props })=>// @ts-ignore
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndProvider"], {
        backend: __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML5Backend"],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$worklocal$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ReactTagsWrapper, {
            ...props
        })
    });
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
];

//# sourceMappingURL=739d6_23b89ed4._.js.map