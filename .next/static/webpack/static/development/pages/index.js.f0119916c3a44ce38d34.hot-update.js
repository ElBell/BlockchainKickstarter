webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Ethereum_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Ethereum/factory */ "./Ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);














var CampaignIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CampaignIndex, _Component);

  function CampaignIndex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CampaignIndex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CampaignIndex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          color: 'green',
          description: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            route: "/campaigns/".concat(address)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "View Campaign")),
          fluid: true
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          color: 'green'
        },
        className: "jsx-3742846030"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3742846030"
      }, "Open Campaigns"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/campaigns/new"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-3742846030"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        floated: "right",
        content: "Create Campaign",
        icon: "add circle",
        primary: true
      }))), this.renderCampaigns()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("linearGradient", {
        id: "linear-gradient",
        gradientUnits: "userSpaceOnUse",
        x1: "1041.6901",
        y1: "169.485",
        x2: "1383.9301",
        y2: "169.485",
        gradientTransform: "matrix(1 0 0 -1 -761.14 398.97)",
        className: "jsx-3742846030"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("stop", {
        offset: "14%",
        stopColor: "#2f343b",
        stopOpacity: "0%",
        className: "jsx-3742846030"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("stop", {
        offset: "43%",
        stopColor: "#337082",
        stopOpacity: "41%",
        className: "jsx-3742846030"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("stop", {
        offset: "67%",
        stopColor: "#369fb9",
        stopOpacity: "73%",
        className: "jsx-3742846030"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("stop", {
        offset: "79%",
        stopColor: "#37b1cf",
        stopOpacity: "85%",
        className: "jsx-3742846030"
      }), "        "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3742846030"
      }, "body{fill: font:11px menlo;color:#fff;}"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var campaigns;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Ethereum_factory__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", {
                  campaigns: campaigns
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

/***/ })

})