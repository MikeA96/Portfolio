(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[179],{

/***/ 949:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/jsx.js
var jsx = __webpack_require__(135);
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(205);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(585);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(754);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(550);
;// CONCATENATED MODULE: ./src/components/home/home.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //put iframe of website on site

var _ref = /*#__PURE__*/jsx_default()("div", {
  className: "home__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h1", {
  className: "home__header"
}, void 0, "MICHAEL ALLAN"));

var _ref2 = /*#__PURE__*/jsx_default()("div", {
  className: "home__lightning--wrapper"
}, void 0, /*#__PURE__*/jsx_default()("iframe", {
  src: "giphy.gif",
  width: "480",
  height: "480",
  frameBorder: "0",
  className: "home__lightning",
  scrolling: "no"
}), /*#__PURE__*/jsx_default()("iframe", {
  src: "giphy.gif",
  width: "480",
  height: "480",
  frameBorder: "0",
  className: "home__lightning",
  scrolling: "no"
}));

var _ref3 = /*#__PURE__*/jsx_default()("ul", {
  className: "home__list--wrapper"
}, void 0, /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/about",
  className: "home__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "home__list"
}, void 0, "ABOUT", /*#__PURE__*/jsx_default()("span", {
  className: "home__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "ABOUT")), /*#__PURE__*/jsx_default()("span", {
  className: "home__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "ABOUT")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/work",
  className: "home__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "home__list"
}, void 0, "WORK", /*#__PURE__*/jsx_default()("span", {
  className: "home__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "WORK")), /*#__PURE__*/jsx_default()("span", {
  className: "home__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "WORK")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/contact",
  className: "home__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "home__list"
}, void 0, "CONTACT", /*#__PURE__*/jsx_default()("span", {
  className: "home__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "CONTACT")), /*#__PURE__*/jsx_default()("span", {
  className: "home__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "CONTACT")))));

var Home = /*#__PURE__*/function (_Component) {
  inherits_default()(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    classCallCheck_default()(this, Home);

    return _super.apply(this, arguments);
  }

  createClass_default()(Home, [{
    key: "render",
    value: function render() {
      var history = this.props.history;
      return /*#__PURE__*/react.createElement(react.Fragment, null, _ref, _ref2, _ref3);
    }
  }]);

  return Home;
}(react.Component);

/* harmony default export */ const home = (Home);
;// CONCATENATED MODULE: ./src/components/about/about.js







function about_createSuper(Derived) { var hasNativeReflectConstruct = about_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function about_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var about_ref = /*#__PURE__*/jsx_default()("div", {
  className: "about"
}, void 0, /*#__PURE__*/jsx_default()("ul", {
  className: "return__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("div", {
  className: "nav"
}, void 0, /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "HOME", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "HOME")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "HOME")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/contact",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "CONTACT", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "CONTACT")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "CONTACT")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/work",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "WORK", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "WORK")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "WORK")))))), /*#__PURE__*/jsx_default()("div", {
  className: "about__heading"
}, void 0, /*#__PURE__*/jsx_default()("h1", {
  className: "about__title"
}, void 0, "Michael Allan"), /*#__PURE__*/jsx_default()("h3", {
  className: "about__sub-title"
}, void 0, "Web Developer")), /*#__PURE__*/jsx_default()("div", {
  className: "about__description"
}, void 0, "I was first introduced to the field of web development by a friend and was instantly hooked! I have been seeking a career I am truly engaged in and this is the right fit for me. I am confident my problem solving skills and tenacity will be an asset in a Web Developer position."), /*#__PURE__*/jsx_default()("div", {
  className: "about__layout"
}, void 0, /*#__PURE__*/jsx_default()("div", {
  className: "about__experience--wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h3", {
  className: "about__experience"
}, void 0, "Experience"), /*#__PURE__*/jsx_default()("div", {
  className: "experience__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h4", {
  className: "experience__title"
}, void 0, "Research Assistant | Explorer Research "), /*#__PURE__*/jsx_default()("p", {
  className: "experience__sub-title"
}, void 0, "May 2017 - March 2020, Mississauga ON :"), /*#__PURE__*/jsx_default()("ul", {
  className: "experience__list"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Assisted in data colection, and in-store research with a focus on biometric technology."), /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Travelled within and outside Canada to conduct sruveys in-store."), /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Organized the warehouse and constructed shelving in Mississauga and Montreal to mimic in-store settings for surveys."))), /*#__PURE__*/jsx_default()("div", {
  className: "experience__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h4", {
  className: "experience__title"
}, void 0, " Labourer  |  DC Electrical Contractors"), /*#__PURE__*/jsx_default()("p", {
  className: "experience__sub-title"
}, void 0, "  November 2018 -June 2019,  Mississauga, ON"), /*#__PURE__*/jsx_default()("ul", {
  className: "experience__list"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Helped other Apprentices and Journeyman Electricians in their daily duties."), /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Ran wiring throughout houses and commercial sites."), /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Installed plugs, fans, and overhead fixtures as well as made supply runs and cleaned."))), /*#__PURE__*/jsx_default()("div", {
  className: "experience__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h4", {
  className: "experience__title"
}, void 0, "Program Director  | Arrowhead Camp"), /*#__PURE__*/jsx_default()("p", {
  className: "experience__sub-title"
}, void 0, "  Summer 2013-2016, Dwight, ON"), /*#__PURE__*/jsx_default()("ul", {
  className: "experience__list"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Organized and supervised all events that took place at camp during non-activity time, as well as all all-day events."), /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Supervised, planned and implemented the biking and nature program."), /*#__PURE__*/jsx_default()("li", {
  className: "experience__item"
}, void 0, "Taught children how to mountain bike which entailed riding on trails, teaching proper form, and teaching children how to bike.")))), /*#__PURE__*/jsx_default()("div", {
  className: "about__education"
}, void 0, /*#__PURE__*/jsx_default()("h3", {
  className: "about__education--title"
}, void 0, "Education"), /*#__PURE__*/jsx_default()("div", {
  className: "about__education--wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h4", {
  className: "education__title"
}, void 0, "Brainstation | Diploma, Web Development"), /*#__PURE__*/jsx_default()("p", {
  className: "education__sub-title"
}, void 0, "SEP - DEC  2020, ONTARIO, CA"), /*#__PURE__*/jsx_default()("h4", {
  className: "education__title"
}, void 0, "Queen\u2019s University |   Bachelor of Arts in Philosophy"), /*#__PURE__*/jsx_default()("p", {
  className: "education__sub-title"
}, void 0, " 2014 - 2018,  KINGSTON, ON"), /*#__PURE__*/jsx_default()("h4", {
  className: "education__title"
}, void 0, "Ursula Franklin Academy   |  High-School Diploma"), /*#__PURE__*/jsx_default()("p", {
  className: "education__sub-title"
}, void 0, "2010 -   2014, ONTARIO, CA")))), /*#__PURE__*/jsx_default()("div", {
  className: "about__skills"
}, void 0, /*#__PURE__*/jsx_default()("h3", {
  className: "skills__title"
}, void 0, "Skills"), /*#__PURE__*/jsx_default()("p", {
  className: "skills__sub-title"
}, void 0, "HTML5, CSS, JavaScript, React, DOM API\u2019s, Node.js, Express.js, JWT, SQL, MongoDB")));

var About = /*#__PURE__*/function (_Component) {
  inherits_default()(About, _Component);

  var _super = about_createSuper(About);

  function About() {
    classCallCheck_default()(this, About);

    return _super.apply(this, arguments);
  }

  createClass_default()(About, [{
    key: "render",
    value: function render() {
      return about_ref;
    }
  }]);

  return About;
}(react.Component);

/* harmony default export */ const about = (About);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(506);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
;// CONCATENATED MODULE: ./src/components/contact/contact.js









function contact_createSuper(Derived) { var hasNativeReflectConstruct = contact_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function contact_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var contact_ref = /*#__PURE__*/jsx_default()("ul", {
  className: "return__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("div", {
  className: "nav"
}, void 0, /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "HOME", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "HOME")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "HOME")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/about",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "ABOUT", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "ABOUT")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "ABOUT")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/work",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "WORK", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "WORK")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "WORK"))))));

var contact_ref2 = /*#__PURE__*/jsx_default()("img", {
  src: "LI-Logo.png",
  className: "linkedIn"
});

var contact_ref3 = /*#__PURE__*/jsx_default()("img", {
  src: "iconfinder_gmail_1220367.png",
  className: "gmail"
});

var _ref4 = /*#__PURE__*/jsx_default()("img", {
  src: "GitHub_Logo_White.png",
  className: "gitHub"
});

var _ref5 = /*#__PURE__*/jsx_default()("div", {
  className: "linkedIn__title--wrapper"
}, void 0, /*#__PURE__*/jsx_default()("a", {
  className: "contact_title",
  href: "https://www.linkedin.com/in/michael-allan-480a961a1"
}, void 0, "https://www.linkedin.com/in/michael-allan-480a961a1"));

var _ref6 = /*#__PURE__*/jsx_default()("div", {
  className: "gmail__title--wrapper"
}, void 0, /*#__PURE__*/jsx_default()("h1", {
  className: "contact_title"
}, void 0, "michaelAllan96@gmail.com"));

var _ref7 = /*#__PURE__*/jsx_default()("div", {
  className: "gitHub__title--wrapper"
}, void 0, /*#__PURE__*/jsx_default()("a", {
  href: "https://github.com/MikeA96",
  className: "contact_title"
}, void 0, "https://github.com/MikeA96"));

var Contact = /*#__PURE__*/function (_Component) {
  inherits_default()(Contact, _Component);

  var _super = contact_createSuper(Contact);

  function Contact() {
    var _this;

    classCallCheck_default()(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      linkedIn: "linkedIn__wrapper",
      gmail: "gmail__wrapper",
      gitHub: "gitHub__wrapper"
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleLinkedIn", function (event) {
      event.preventDefault();

      if (_this.state.linkedIn === "linkedIn__wrapper") {
        _this.setState({
          linkedIn: "linkedIn__hover"
        });
      } else {
        _this.setState({
          linkedIn: "linkedIn__wrapper"
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleGmail", function (event) {
      event.preventDefault();

      if (_this.state.gmail === "gmail__wrapper") {
        _this.setState({
          gmail: "gmail__hover"
        });
      } else {
        _this.setState({
          gmail: "gmail__wrapper"
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleGitHub", function (event) {
      event.preventDefault();

      if (_this.state.gitHub === "gitHub__wrapper") {
        _this.setState({
          gitHub: "gitHub__hover"
        });
      } else {
        _this.setState({
          gitHub: "gitHub__wrapper"
        });
      }
    });

    return _this;
  }

  createClass_default()(Contact, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/jsx_default()("div", {
        className: "test"
      }, void 0, contact_ref, /*#__PURE__*/jsx_default()("div", {
        className: this.state.linkedIn,
        onClick: this.handleLinkedIn
      }, void 0, contact_ref2), /*#__PURE__*/jsx_default()("div", {
        className: this.state.gmail,
        onClick: this.handleGmail
      }, void 0, contact_ref3), /*#__PURE__*/jsx_default()("div", {
        className: this.state.gitHub,
        onClick: this.handleGitHub
      }, void 0, _ref4), _ref5, _ref6, _ref7);
    }
  }]);

  return Contact;
}(react.Component);

/* harmony default export */ const contact = (Contact);
;// CONCATENATED MODULE: ./src/components/work/work.js









function work_createSuper(Derived) { var hasNativeReflectConstruct = work_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function work_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var work_ref = /*#__PURE__*/jsx_default()("ul", {
  className: "return__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("div", {
  className: "nav"
}, void 0, /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "HOME", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "HOME")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "HOME")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/about",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "ABOUT", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "ABOUT")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "ABOUT")))), /*#__PURE__*/jsx_default()(react_router_dom/* Link */.rU, {
  to: "/contact",
  className: "return__link"
}, void 0, /*#__PURE__*/jsx_default()("li", {
  className: "return__list"
}, void 0, "CONTACT", /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "CONTACT")), /*#__PURE__*/jsx_default()("span", {
  className: "return__span"
}, void 0, /*#__PURE__*/jsx_default()("span", {}, void 0, "CONTACT"))))));

var work_ref2 = /*#__PURE__*/jsx_default()("h1", {
  className: "work__heading"
}, void 0, "FirstEdition");

var work_ref3 = /*#__PURE__*/jsx_default()("h3", {
  className: "work__sub-heading"
}, void 0, "A Website for People to Post Their Creative Work, recieve likes, comments, as well as meaningful Edits (If not loaded yet, just refresh the page)");

var work_ref4 = /*#__PURE__*/jsx_default()("div", {
  className: "iframe__wrapper"
}, void 0, /*#__PURE__*/jsx_default()("iframe", defineProperty_default()({
  src: "https://mikesfirstedition.herokuapp.com/",
  height: "100%",
  width: "100%",
  title: "FirstEdition",
  frameBorder: "0",
  overflow: "scroll",
  "z-index": "1"
}, "title", "A Website for People to Post Their Creative Work, recieve likes, comments, as well as meaningful Edits")));

var Work = /*#__PURE__*/function (_Component) {
  inherits_default()(Work, _Component);

  var _super = work_createSuper(Work);

  function Work() {
    var _this;

    classCallCheck_default()(this, Work);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      header: "work__heading--wrapper"
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hideBlurb", function () {
      _this.setState({
        header: "work__heading--hide"
      });
    });

    return _this;
  }

  createClass_default()(Work, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/jsx_default()("div", {
        className: "work"
      }, void 0, work_ref, /*#__PURE__*/jsx_default()("div", {
        className: this.state.header
      }, void 0, work_ref2, work_ref3, /*#__PURE__*/jsx_default()("h4", {
        onClick: this.hideBlurb
      }, void 0, "Click to hide blurb")), work_ref4);
    }
  }]);

  return Work;
}(react.Component);

/* harmony default export */ const work = (Work);
;// CONCATENATED MODULE: ./src/App.js







function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var App_ref = /*#__PURE__*/jsx_default()(react_router_dom/* BrowserRouter */.VK, {}, void 0, /*#__PURE__*/jsx_default()(react_router/* Switch */.rs, {}, void 0, /*#__PURE__*/jsx_default()(react_router/* Route */.AW, {
  path: "/",
  exact: true,
  component: home
}), /*#__PURE__*/jsx_default()(react_router/* Route */.AW, {
  path: "/about",
  exact: true,
  component: about
}), /*#__PURE__*/jsx_default()(react_router/* Route */.AW, {
  path: "/contact",
  exact: true,
  component: contact
}), /*#__PURE__*/jsx_default()(react_router/* Route */.AW, {
  path: "/work",
  exact: true,
  component: work
})));

var App = /*#__PURE__*/function (_Component) {
  inherits_default()(App, _Component);

  var _super = App_createSuper(App);

  function App() {
    classCallCheck_default()(this, App);

    return _super.apply(this, arguments);
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return App_ref;
    }
  }]);

  return App;
}(react.Component);

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.js





/*ReactDOM.render(<h3>React App</h3>, document.getElementById("root"));
if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js");
      });
    }*/

var wrapper = document.getElementById('root');
wrapper ? react_dom.render( /*#__PURE__*/jsx_default()(src_App, {}), wrapper) : null;

/***/ })

},
0,[[949,666,578,616,852,905,532,190,805,373,461]]]);