module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./electron/client/index.js")}({"./electron/client/actions/counter.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increment=function(){return{type:n}},t.decrement=function(){return{type:o}};var n=t.INCREMENT_COUNTER="INCREMENT_COUNTER",o=t.DECREMENT_COUNTER="DECREMENT_COUNTER"},"./electron/client/components/Counter/Counter.css":function(e,t){e.exports={backButton:"Counter__backButton__3GiJ0",counter:"Counter__counter__1Cfc3",btnGroup:"Counter__btnGroup__2npKO",btn:"Counter__btn__AWfkV"}},"./electron/client/components/Counter/Counter.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("react"),u=a(o),c=a(r("./electron/client/components/Counter/Counter.css"));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.increment,r=e.decrement,n=e.counter;return u.default.createElement("div",null,u.default.createElement("div",{className:"counter "+c.default.counter,"data-tid":"counter"},n),u.default.createElement("div",{className:c.default.btnGroup},u.default.createElement("button",{className:c.default.btn,onClick:t,"data-tclass":"btn"},u.default.createElement("i",{className:"fa fa-plus"})),u.default.createElement("button",{className:c.default.btn,onClick:r,"data-tclass":"btn"},u.default.createElement("i",{className:"fa fa-minus"}))))}}]),t}();t.default=l},"./electron/client/containers/CounterPage.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("redux"),o=r("react-redux"),u=a(r("./electron/client/components/Counter/Counter.js")),c=a(r("./electron/client/actions/counter.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.connect)(function(e){return{counter:e.counter}},function(e){return(0,n.bindActionCreators)(c.default,e)})(u.default)},"./electron/client/containers/Root.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("react"),u=l(o),c=r("react-redux"),a=l(r("./electron/client/containers/CounterPage.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){return u.default.createElement(c.Provider,{store:this.props.store},u.default.createElement(a.default,null))}}]),t}();t.default=i},"./electron/client/index.js":function(e,t,r){"use strict";var n=i(r("react")),o=r("react-dom"),u=r("react-hot-loader"),c=r("electron-redux"),a=i(r("./electron/client/containers/Root.js")),l=i(r("./electron/shared/store/configureStore.js"));function i(e){return e&&e.__esModule?e:{default:e}}var f=(0,c.getInitialStateRenderer)(),s=(0,l.default)(f,"renderer");(0,o.render)(n.default.createElement(u.AppContainer,null,n.default.createElement(a.default,{store:s})),document.getElementById("root"))},"./electron/client/reducers/counter.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{counter:0};switch(arguments[1].type){case n.INCREMENT_COUNTER:return e+1;case n.DECREMENT_COUNTER:return e-1;default:return e}};var n=r("./electron/client/actions/counter.js")},"./electron/client/reducers/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("redux"),u=r("./electron/client/reducers/counter.js"),c=(n=u)&&n.__esModule?n:{default:n};var a=(0,o.combineReducers)({counter:c.default});t.default=a},"./electron/shared/store/configureStore.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("redux"),o=l(r("redux-thunk")),u=r("redux-logger"),c=r("electron-redux"),a=l(r("./electron/client/reducers/index.js"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",r=[];r.push(o.default);var l=(0,u.createLogger)({level:"info",collapsed:!0});r.push(l),"renderer"===t&&r.push(c.forwardToMain),"main"===t&&r.push(c.triggerAlias,c.forwardToRenderer);var i=[n.applyMiddleware.apply(void 0,r)],f=n.compose.apply(void 0,i),s=(0,n.createStore)(a.default,e,f);return"main"===t?(0,c.replayActionMain)(s):(0,c.replayActionRenderer)(s),s}},"electron-redux":function(e,t){e.exports=require("electron-redux")},react:function(e,t){e.exports=require("react")},"react-dom":function(e,t){e.exports=require("react-dom")},"react-hot-loader":function(e,t){e.exports=require("react-hot-loader")},"react-redux":function(e,t){e.exports=require("react-redux")},redux:function(e,t){e.exports=require("redux")},"redux-logger":function(e,t){e.exports=require("redux-logger")},"redux-thunk":function(e,t){e.exports=require("redux-thunk")}});
//# sourceMappingURL=main.js.map