webpackHotUpdate("static/development/pages/campaigns/show.js",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Ethereum/campaign */ "./Ethereum/campaign.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
















var CampaignShow =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CampaignShow, _Component);

  function CampaignShow() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CampaignShow);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CampaignShow).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          balance = _this$props.balance,
          manager = _this$props.manager,
          minimumContribution = _this$props.minimumContribution,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount;
      var items = [{
        header: 'Address of Manager',
        meta: manager,
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: 'Minimum Contribution (wei)',
        meta: minimumContribution,
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: 'Number of Requests',
        meta: requestsCount,
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign'
      }, {
        header: _Ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-1226269473"
      }, "Campaign Details"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 10
      }, this.renderCards()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        address: this.props.address
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-1226269473"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true
      }, "View Requests")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1226269473"
      }, "body{background:radial-gradient(circle at 20% 20%,#004d00,#00264d);font:11px menlo;color:#fff;}"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var campaign, summary;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = Object(_Ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__["default"])(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

/***/ })

})