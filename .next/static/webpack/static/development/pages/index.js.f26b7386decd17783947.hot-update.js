webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

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
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Ethereum_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Ethereum/factory */ "./Ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Ethereum_campaign__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Ethereum/campaign */ "./Ethereum/campaign.js");

















var CampaignIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CampaignIndex, _Component);

  function CampaignIndex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CampaignIndex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(CampaignIndex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _this = this;

      console.log("Begin");
      console.log(Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.campaigns));
      console.log(this.props.campaigns);
      console.log(this.props.campaigns.get(this.props.addresses[0]));
      console.log("I shouldn't be here", this.props.addresses, this.props.campaigns);
      var items = this.props.addresses.map(function (address) {
        var header = _this.props.campaigns.get(address);

        return {
          header: header,
          meta: address,
          color: 'green',
          description: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
            route: "/campaigns/".concat(address)
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "View Campaign")),
          fluid: true
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          color: 'white'
        },
        className: "jsx-1226269473"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-1226269473"
      }, "Open Campaigns"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "/campaigns/new"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-1226269473"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        floated: "right",
        content: "Create Campaign",
        icon: "add circle",
        primary: true
      }))), this.renderCampaigns()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1226269473"
      }, "body{background:radial-gradient(circle at 20% 20%,#004d00,#00264d);font:11px menlo;color:#fff;}"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var campaigns, addresses, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, address, campaign;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaigns = {};
                _context.next = 3;
                return _Ethereum_factory__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getDeployedCampaigns().call();

              case 3:
                addresses = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;
                _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(addresses);

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 20;
                  break;
                }

                address = _step.value;
                _context.next = 13;
                return Object(_Ethereum_campaign__WEBPACK_IMPORTED_MODULE_15__["default"])(address);

              case 13:
                campaign = _context.sent;
                _context.next = 16;
                return campaign.methods.campaignTitle().call();

              case 16:
                campaigns[address] = _context.sent;

              case 17:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 29:
                _context.prev = 29;

                if (!_didIteratorError) {
                  _context.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context.finish(29);

              case 33:
                return _context.finish(26);

              case 34:
                console.log(campaigns.get(addresses[0]));
                return _context.abrupt("return", {
                  campaigns: campaigns,
                  addresses: addresses
                });

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 22, 26, 34], [27,, 29, 33]]);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

/***/ })

})