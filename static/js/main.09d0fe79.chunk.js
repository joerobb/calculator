(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Code_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Code_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Code_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Code_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Code_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),react_dom__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__),_Header_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_Buttons_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),App=function(_Component){function App(){var _this;return Object(_Code_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(_Code_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Code_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this)),_this.onClick=function(e){"="===e?_this.calculate():"AC"===e?_this.reset():_this.setState({result:_this.state.result+e})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(_Code_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Code_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons_js__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App,null),document.getElementById("root")),__webpack_exports__.a=App},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),o=_(3),c=_(5),l=_(0),u=_.n(l),s=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props.result;return u.a.createElement("div",{className:"result"},u.a.createElement("p",null,e))}}]),t}(l.Component);t.a=s},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),o=_(3),c=_(5),l=_(0),u=_.n(l),s=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"buttons"},u.a.createElement("div",{classname:"buttonRow"},u.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),u.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),u.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),u.a.createElement("button",{name:" - ",onClick:function(t){return e.props.onClick(t.target.name)}},"-")),u.a.createElement("div",{classname:"buttonRow"},u.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),u.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),u.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),u.a.createElement("button",{name:" * ",onClick:function(t){return e.props.onClick(t.target.name)}},"x")),u.a.createElement("div",{classname:"buttonRow"},u.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),u.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),u.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),u.a.createElement("button",{name:" / ",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7")),u.a.createElement("div",{classname:"buttonRow"},u.a.createElement("button",{name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),u.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),u.a.createElement("button",{name:"AC",onClick:function(t){return e.props.onClick(t.target.name)}},"AC"),u.a.createElement("button",{name:" + ",onClick:function(t){return e.props.onClick(t.target.name)}},"+")),u.a.createElement("div",{classname:"buttonRow"},u.a.createElement("button",{className:"wider",name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"=")))}}]),t}(l.Component);t.a=s},function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(6),o=_.n(r),c=(_(16),_(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.09d0fe79.chunk.js.map