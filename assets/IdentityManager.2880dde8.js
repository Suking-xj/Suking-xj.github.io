var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
import { ae as e, af as y, dt as e$1, ag as i$2, du as L, dv as o$1, dw as s$3, dx as p$3, dy as n, dz as e$2, dA as a$2, av as n$1, dB as s$4, d8 as p$4, dC as $, ds as e$3, dD as U, bI as h, bN as B, al as v, aa as s$5, ao as b$1, dE as E, aj as U$1, dF as b$2, aD as r, ar as s$6, dG as z, dH as A, dI as t$1, dJ as T, dK as C$1, dL as n$2 } from "./vendor.74d5941c.js";
const l$1 = { base: "esri-identity-form", group: "esri-identity-form__group", label: "esri-identity-form__label", footer: "esri-identity-form__footer", esriInput: "esri-input", esriButton: "esri-button", esriButtonSecondary: "esri-button--secondary" }, p$2 = "ArcGIS Online";
let a$1 = class extends L {
  constructor(s2, e2) {
    super(s2, e2), this._usernameInputNode = null, this._passwordInputNode = null, this.messages = null, this.signingIn = false, this.server = null, this.resource = null, this.error = null, this.oAuthPrompt = false;
  }
  render() {
    const { error: s2, server: e2, resource: t2, signingIn: i2, oAuthPrompt: u, messages: a2 } = this, d2 = o$1("div", { class: l$1.group }, s$3(u ? a2.oAuthInfo : a2.info, { server: /\.arcgis\.com/i.test(e2) ? p$2 : e2, resource: `(${t2 || a2.lblItem})` })), c = u ? null : o$1("div", { class: l$1.group }, o$1("label", { class: l$1.label }, a2.lblUser, o$1("input", { value: "", required: true, autocomplete: "off", spellcheck: false, type: "text", bind: this, afterCreate: p$3, "data-node-ref": "_usernameInputNode", class: l$1.esriInput }))), m = u ? null : o$1("div", { class: l$1.group }, o$1("label", { class: l$1.label }, a2.lblPwd, o$1("input", { value: "", required: true, type: "password", bind: this, afterCreate: p$3, "data-node-ref": "_passwordInputNode", class: l$1.esriInput }))), h2 = o$1("div", { class: this.classes(l$1.group, l$1.footer) }, o$1("input", { type: "submit", disabled: !!i2, value: i2 ? a2.lblSigning : a2.lblOk, class: l$1.esriButton }), o$1("input", { type: "button", value: a2.lblCancel, bind: this, onclick: this._cancel, class: this.classes(l$1.esriButton, l$1.esriButtonSecondary) })), b2 = s2 ? o$1("div", null, s2.details && s2.details.httpStatus ? a2.invalidUser : a2.noAuthService) : null;
    return o$1("form", { class: l$1.base, bind: this, onsubmit: this._submit }, d2, b2, c, m, h2);
  }
  _cancel() {
    this._set("signingIn", false), this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(s2) {
    s2.preventDefault(), this._set("signingIn", true);
    const e2 = this.oAuthPrompt ? {} : { username: this._usernameInputNode && this._usernameInputNode.value, password: this._passwordInputNode && this._passwordInputNode.value };
    this.emit("submit", e2);
  }
};
e([y(), e$1("esri/identity/t9n/identity")], a$1.prototype, "messages", void 0), e([y()], a$1.prototype, "signingIn", void 0), e([y()], a$1.prototype, "server", void 0), e([y()], a$1.prototype, "resource", void 0), e([y()], a$1.prototype, "error", void 0), e([y()], a$1.prototype, "oAuthPrompt", void 0), a$1 = e([i$2("esri.identity.IdentityForm")], a$1);
var d$1 = a$1;
/*!
* tabbable 5.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var matches = typeof Element === "undefined" ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var isContentEditable = function isContentEditable2(node) {
  return node.contentEditable === "true";
};
var getTabindex = function getTabindex2(node) {
  var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (isContentEditable(node)) {
    return 0;
  }
  if ((node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a2, b2) {
  return a2.tabIndex === b2.tabIndex ? a2.documentOrder - b2.documentOrder : a2.tabIndex - b2.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r2 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r2;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i2 = 0; i2 < nodes.length; i2++) {
    if (nodes[i2].checked && nodes[i2].form === form) {
      return nodes[i2];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || node.ownerDocument;
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isHidden = function isHidden2(node, displayCheck) {
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full") {
    while (node) {
      if (getComputedStyle(node).display === "none") {
        return true;
      }
      node = node.parentElement;
    }
  } else if (displayCheck === "non-zero-area") {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || isDetailsWithSummary(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }
  return true;
};
var tabbable = function tabbable2(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  candidates.forEach(function(candidate, i2) {
    var candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i2,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a2) {
    return a2.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
/*!
* focus-trap 6.3.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var activeFocusDelay;
var activeFocusTraps = function() {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }
      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e2) {
  return e2.key === "Escape" || e2.key === "Esc" || e2.keyCode === 27;
};
var isTabEvent = function isTabEvent2(e2) {
  return e2.key === "Tab" || e2.keyCode === 9;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var findIndex = function findIndex2(arr, fn) {
  var idx = -1;
  arr.every(function(value, i2) {
    if (fn(value)) {
      idx = i2;
      return false;
    }
    return true;
  });
  return idx;
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = document;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);
  var state = {
    containers: [],
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap;
  var containersContain = function containersContain2(element) {
    return state.containers.some(function(container) {
      return container.contains(element);
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var optionValue = config[optionName];
    if (!optionValue) {
      return null;
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }
    if (typeof optionValue === "function") {
      node = optionValue();
      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node;
    if (getNodeForOption("initialFocus") !== null) {
      node = getNodeForOption("initialFocus");
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption("fallbackFocus");
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.tabbableGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container);
      if (tabbableNodes.length > 0) {
        return {
          container,
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }
      return void 0;
    }).filter(function(group) {
      return !!group;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
  };
  var tryFocus = function tryFocus2(node) {
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus2(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus");
    return node ? node : previousActiveElement;
  };
  var checkPointerDown = function checkPointerDown2(e2) {
    if (containersContain(e2.target)) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e2)) {
      trap.deactivate({
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(e2.target)
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e2)) {
      return;
    }
    e2.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(e2) {
    var targetContained = containersContain(e2.target);
    if (targetContained || e2.target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = e2.target;
      }
    } else {
      e2.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };
  var checkTab = function checkTab2(e2) {
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findIndex(state.tabbableGroups, function(_ref) {
        var container = _ref.container;
        return container.contains(e2.target);
      });
      if (containerIndex < 0) {
        if (e2.shiftKey) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e2.shiftKey) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return e2.target === firstTabbableNode;
        });
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return e2.target === lastTabbableNode;
        });
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    if (destinationNode) {
      e2.preventDefault();
      tryFocus(destinationNode);
    }
  };
  var checkKey = function checkKey2(e2) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e2)) {
      e2.preventDefault();
      trap.deactivate();
      return;
    }
    if (isTabEvent(e2)) {
      checkTab(e2);
      return;
    }
  };
  var checkClick = function checkClick2(e2) {
    if (valueOrHandler(config.clickOutsideDeactivates, e2)) {
      return;
    }
    if (containersContain(e2.target)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e2)) {
      return;
    }
    e2.preventDefault();
    e2.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trap);
    activeFocusDelay = config.delayInitialFocus ? delay(function() {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkKey, true);
    return trap;
  };
  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      updateTabbableNodes();
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;
      if (onActivate) {
        onActivate();
      }
      addListeners();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== void 0 ? deactivateOptions.onDeactivate : config.onDeactivate;
      if (onDeactivate) {
        onDeactivate();
      }
      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== void 0 ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;
      if (returnFocus) {
        delay(function() {
          tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
        });
      }
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }
      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }
      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      return this;
    }
  };
  trap.updateContainerElements(elements);
  return trap;
};
const l = { base: "esri-identity-modal", open: "esri-identity-modal--open", closed: "esri-identity-modal--closed", title: "esri-identity-modal__title", dialog: "esri-identity-modal__dialog", content: "esri-identity-modal__content", closeButton: "esri-identity-modal__close-button", iconClose: "esri-icon-close" };
let d = class extends L {
  constructor(t2, e2) {
    super(t2, e2), this.container = document.createElement("div"), this.content = null, this.open = false, this._close = () => {
      this.open = false;
    }, document.body.appendChild(this.container), this.own(this.watch("open", () => this._toggleFocusTrap()));
  }
  destroy() {
    this._destroyFocusTrap();
  }
  render() {
    const t2 = this.id, { open: e2, content: o2, title: s2, messages: i2 } = this, n2 = e2 && !!o2, a2 = { [l.open]: n2, [l.closed]: !n2 }, c = o$1("button", { class: l.closeButton, "aria-label": i2.close, title: i2.close, bind: this, onclick: this._close }, o$1("span", { "aria-hidden": "true", class: l.iconClose })), d2 = `${t2}_title`, p2 = `${t2}_content`, u = s2 ? o$1("h1", { id: d2, class: l.title }, s2) : null, m = n2 ? o$1("div", { bind: this, class: l.dialog, role: "dialog", "aria-labelledby": d2, "aria-describedby": p2, afterCreate: this._createFocusTrap }, c, u, this._renderContent(p2)) : null;
    return o$1("div", { tabIndex: -1, class: this.classes(l.base, a2) }, m);
  }
  _destroyFocusTrap() {
    var t2;
    (t2 = this._focusTrap) == null || t2.deactivate({ onDeactivate: null }), this._focusTrap = null;
  }
  _toggleFocusTrap() {
    const { _focusTrap: t2, open: e2 } = this;
    t2 && (e2 ? t2.activate() : t2.deactivate());
  }
  _createFocusTrap(t2) {
    this._destroyFocusTrap();
    const o2 = requestAnimationFrame(() => {
      this._focusTrap = createFocusTrap(t2, { initialFocus: "input", onDeactivate: this._close }), this._toggleFocusTrap();
    });
    this.own(n(() => cancelAnimationFrame(o2)));
  }
  _renderContent(t2) {
    const e2 = this.content;
    return typeof e2 == "string" ? o$1("div", { class: l.content, id: t2, innerHTML: e2 }) : e$2(e2) ? o$1("div", { class: l.content, id: t2 }, e2.render()) : e2 instanceof HTMLElement ? o$1("div", { class: l.content, id: t2, bind: e2, afterCreate: this._attachToNode }) : null;
  }
  _attachToNode(t2) {
    const e2 = this;
    t2.appendChild(e2);
  }
};
e([y({ readOnly: true })], d.prototype, "container", void 0), e([y()], d.prototype, "content", void 0), e([y()], d.prototype, "open", void 0), e([y(), e$1("esri/t9n/common")], d.prototype, "messages", void 0), e([y({ aliasOf: "messages.auth.signIn" })], d.prototype, "title", void 0), d = e([i$2("esri.identity.IdentityModal")], d);
var p$1 = d;
const t = "esriJSAPIOAuth";
class s$2 {
  constructor(t2, s2) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.expires = null, this.ssl = null, this.token = null, this.userId = null, this.oAuthInfo = t2, this.storage = s2, this._init();
  }
  isValid() {
    let t2 = false;
    if (this.oAuthInfo && this.token && this.userId) {
      const s2 = Date.now();
      if (this.expires > s2) {
        (this.expires - s2) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (t2 = true);
      }
    }
    return t2;
  }
  save() {
    if (!this.storage)
      return;
    const s2 = this._load(), e2 = this.oAuthInfo;
    if (e2 && e2.authNamespace && e2.portalUrl) {
      let o2 = s2[e2.authNamespace];
      o2 || (o2 = s2[e2.authNamespace] = {}), o2[e2.portalUrl] = { appId: this.appId = e2.appId, expires: this.expires, ssl: this.ssl, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(t, JSON.stringify(s2));
      } catch (i2) {
        console.log(i2);
      }
    }
  }
  destroy() {
    const s2 = this._load(), e2 = this.oAuthInfo;
    if (e2 && e2.appId && e2.portalUrl && this.token && this.expires > Date.now()) {
      const t2 = e2.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", s3 = new FormData();
      if (s3.append("f", "json"), s3.append("auth_token", this.token), s3.append("client_id", e2.appId), s3.append("token_type_hint", "access_token"), typeof navigator.sendBeacon == "function")
        navigator.sendBeacon(t2, s3);
      else {
        const e3 = new XMLHttpRequest();
        e3.open("POST", t2), e3.send(s3);
      }
    }
    if (e2 && e2.authNamespace && e2.portalUrl && this.storage) {
      const o2 = s2[e2.authNamespace];
      if (o2) {
        delete o2[e2.portalUrl];
        try {
          this.storage.setItem(t, JSON.stringify(s2));
        } catch (i2) {
          console.log(i2);
        }
      }
    }
    e2 && (e2._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t2 = this._load(), s2 = this.oAuthInfo;
    if (s2 && s2.authNamespace && s2.portalUrl) {
      let e2 = t2[s2.authNamespace];
      e2 && (e2 = e2[s2.portalUrl], e2 && (this.appId = e2.appId, this.expires = e2.expires, this.ssl = e2.ssl, this.token = e2.token, this.userId = e2.userId));
    }
  }
  _load() {
    let s2 = {};
    if (this.storage) {
      const i2 = this.storage.getItem(t);
      if (i2)
        try {
          s2 = JSON.parse(i2);
        } catch (e2) {
          console.log(e2);
        }
    }
    return s2;
  }
}
s$2.prototype.declaredClass = "esri.identity.OAuthCredential";
var p;
let s$1 = p = class extends a$2 {
  constructor(o2) {
    super(o2), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return p.fromJSON(this.toJSON());
  }
};
e([y({ json: { write: true } })], s$1.prototype, "appId", void 0), e([y({ json: { write: true } })], s$1.prototype, "authNamespace", void 0), e([y({ json: { write: true } })], s$1.prototype, "expiration", void 0), e([y({ json: { write: true } })], s$1.prototype, "forceLogin", void 0), e([y({ json: { write: true } })], s$1.prototype, "forceUserId", void 0), e([y({ json: { write: true } })], s$1.prototype, "locale", void 0), e([y({ json: { write: true } })], s$1.prototype, "minTimeUntilExpiration", void 0), e([y({ json: { write: true } })], s$1.prototype, "popup", void 0), e([y({ json: { write: true } })], s$1.prototype, "popupCallbackUrl", void 0), e([y({ json: { write: true } })], s$1.prototype, "popupWindowFeatures", void 0), e([y({ json: { write: true } })], s$1.prototype, "portalUrl", void 0), e([y({ json: { write: true } })], s$1.prototype, "preserveUrlHash", void 0), e([y({ json: { write: true } })], s$1.prototype, "userId", void 0), s$1 = p = e([i$2("esri.identity.OAuthInfo")], s$1);
var i$1 = s$1;
let s = class extends a$2 {
  constructor(r2) {
    super(r2), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
e([y({ json: { write: true } })], s.prototype, "adminTokenServiceUrl", void 0), e([y({ json: { write: true } })], s.prototype, "currentVersion", void 0), e([y({ json: { write: true } })], s.prototype, "hasPortal", void 0), e([y({ json: { write: true } })], s.prototype, "hasServer", void 0), e([y({ json: { write: true } })], s.prototype, "owningSystemUrl", void 0), e([y({ json: { write: true } })], s.prototype, "owningTenant", void 0), e([y({ json: { write: true } })], s.prototype, "server", void 0), e([y({ json: { write: true } })], s.prototype, "shortLivedTokenValidity", void 0), e([y({ json: { write: true } })], s.prototype, "tokenServiceUrl", void 0), e([y({ json: { write: true } })], s.prototype, "webTierAuth", void 0), s = e([i$2("esri.identity.ServerInfo")], s);
var i = s;
const R = {}, b = (e2) => {
  const t2 = new $(e2.owningSystemUrl).host, s2 = new $(e2.server).host, r2 = /.+\.arcgis\.com$/i;
  return r2.test(t2) && r2.test(s2);
}, P = (e2, t2) => !!(b(e2) && t2 && t2.some((t3) => t3.test(e2.server)));
let C = null, D = null;
try {
  C = window.localStorage, D = window.sessionStorage;
} catch (e2) {
}
let j = class extends n$1 {
  constructor() {
    super(), this._portalConfig = e$3.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this.defaultOAuthInfo = null, this.defaultTokenValidity = 60, this.dialog = null, this.formConstructor = d$1, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appUrlObj = U(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthHash = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi, this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getOAuthHash(), window.addEventListener("pageshow", (e2) => {
      this._pageShowHandler(e2);
    });
  }
  registerServers(e2) {
    const t2 = this.serverInfos;
    t2 ? (e2 = e2.filter((e3) => !this.findServerInfo(e3.server)), this.serverInfos = t2.concat(e2)) : this.serverInfos = e2, e2.forEach((e3) => {
      e3.owningSystemUrl && this._portals.push(e3.owningSystemUrl), e3.hasPortal && this._portals.push(e3.server);
    });
  }
  registerOAuthInfos(e2) {
    const t2 = this.oAuthInfos;
    if (t2) {
      for (const s2 of e2) {
        const e3 = this.findOAuthInfo(s2.portalUrl);
        e3 && t2.splice(t2.indexOf(e3), 1);
      }
      this.oAuthInfos = t2.concat(e2);
    } else
      this.oAuthInfos = e2;
  }
  registerToken(e2) {
    e2 = __spreadValues({}, e2);
    const t2 = this._sanitizeUrl(e2.server), s2 = this._isServerRsrc(t2);
    let r2, i$12 = this.findServerInfo(t2), o2 = true;
    i$12 || (i$12 = new i(), i$12.server = this._getServerInstanceRoot(t2), s2 ? i$12.hasServer = true : (i$12.tokenServiceUrl = this._getTokenSvcUrl(t2), i$12.hasPortal = true), this.registerServers([i$12])), r2 = this._findCredential(t2), r2 ? (delete e2.server, Object.assign(r2, e2), o2 = false) : (r2 = new q({ userId: e2.userId, server: i$12.server, token: e2.token, expires: e2.expires, ssl: e2.ssl, scope: s2 ? "server" : "portal" }), r2.resources = [t2], this.credentials.push(r2)), r2.emitTokenChange(false), o2 || r2.refreshServerTokens();
  }
  toJSON() {
    return p$4({ serverInfos: this.serverInfos.map((e2) => e2.toJSON()), oAuthInfos: this.oAuthInfos.map((e2) => e2.toJSON()), credentials: this.credentials.map((e2) => e2.toJSON()) });
  }
  initialize(e2) {
    if (!e2)
      return;
    typeof e2 == "string" && (e2 = JSON.parse(e2));
    const t2 = e2.serverInfos, s2 = e2.oAuthInfos, r2 = e2.credentials;
    if (t2) {
      const e3 = [];
      t2.forEach((t3) => {
        t3.server && t3.tokenServiceUrl && e3.push(t3.declaredClass ? t3 : new i(t3));
      }), e3.length && this.registerServers(e3);
    }
    if (s2) {
      const e3 = [];
      s2.forEach((t3) => {
        t3.appId && e3.push(t3.declaredClass ? t3 : new i$1(t3));
      }), e3.length && this.registerOAuthInfos(e3);
    }
    r2 && r2.forEach((e3) => {
      e3.server && e3.token && e3.expires && e3.expires > Date.now() && ((e3 = e3.declaredClass ? e3 : new q(e3)).emitTokenChange(), this.credentials.push(e3));
    });
  }
  findServerInfo(e2) {
    let t2;
    e2 = this._sanitizeUrl(e2);
    for (const s2 of this.serverInfos)
      if (this._hasSameServerInstance(s2.server, e2)) {
        t2 = s2;
        break;
      }
    return t2;
  }
  findOAuthInfo(e2) {
    let t2;
    e2 = this._sanitizeUrl(e2);
    for (const s2 of this.oAuthInfos)
      if (this._hasSameServerInstance(s2.portalUrl, e2)) {
        t2 = s2;
        break;
      }
    return t2;
  }
  findCredential(e2, t2) {
    let s2;
    e2 = this._sanitizeUrl(e2);
    const r2 = this._isServerRsrc(e2) ? "server" : "portal";
    if (t2) {
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && t2 === i2.userId && i2.scope === r2) {
          s2 = i2;
          break;
        }
    } else
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && this._getIdenticalSvcIdx(e2, i2) !== -1 && i2.scope === r2) {
          s2 = i2;
          break;
        }
    return s2;
  }
  getCredential(e2, t2) {
    let s2, r2, i$12 = true;
    t2 && (s2 = !!t2.token, r2 = t2.error, i$12 = t2.prompt !== false), t2 = __spreadValues({}, t2), e2 = this._sanitizeUrl(e2);
    const o2 = h(), n2 = B();
    if (t2.signal && v(t2.signal, () => {
      o2.abort();
    }), v(o2, () => {
      n2.reject(new s$5("identity-manager:user-aborted", "ABORTED"));
    }), b$1(o2))
      return n2.promise;
    t2.signal = o2.signal;
    const h$1 = this._isAdminResource(e2), c = s2 ? this.findCredential(e2) : null;
    let d2;
    if (c && r2 && r2.details && r2.details.httpStatus === 498)
      c.destroy();
    else if (c)
      return d2 = new s$5("identity-manager:not-authorized", "You are currently signed in as: '" + c.userId + "'. You do not have access to this resource: " + e2, { error: r2 }), n2.reject(d2), n2.promise;
    const u = this._findCredential(e2, t2);
    if (u)
      return n2.resolve(u), n2.promise;
    let p2 = this.findServerInfo(e2);
    if (p2)
      !p2.hasServer && this._isServerRsrc(e2) && (p2._restInfoPms = this._getTokenSvcUrl(e2), p2.hasServer = true);
    else {
      const t3 = this._getTokenSvcUrl(e2);
      if (!t3)
        return d2 = new s$5("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), n2.reject(d2), n2.promise;
      p2 = new i(), p2.server = this._getServerInstanceRoot(e2), typeof t3 == "string" ? (p2.tokenServiceUrl = t3, p2.hasPortal = true) : (p2._restInfoPms = t3, p2.hasServer = true), this.registerServers([p2]);
    }
    return p2.hasPortal && p2._selfReq === void 0 && (i$12 || E(p2.tokenServiceUrl, window.location.origin) || this._gwDomains.some((e3) => e3.tokenServiceUrl === p2.tokenServiceUrl)) && (p2._selfReq = { owningTenant: t2 && t2.owningTenant, selfDfd: this._getPortalSelf(p2.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e2) }), this._enqueue(e2, p2, t2, n2, h$1);
  }
  getResourceName(e2) {
    return this._isRESTService(e2) ? e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e2) && e2.replace(this._gwUser, "$1") || this._gwItem.test(e2) && e2.replace(this._gwItem, "$1") || this._gwGroup.test(e2) && e2.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e2, t2, s2) {
    const r2 = this._rePortalTokenSvc.test(e2.tokenServiceUrl), i2 = new $(window.location.href.toLowerCase()), o2 = e2.shortLivedTokenValidity;
    let n2, h2, d2, u, p2, _, f, g;
    t2 && (g = this.tokenValidity || o2 || this.defaultTokenValidity, g > o2 && o2 > 0 && (g = o2)), s2 && (n2 = s2.isAdmin, h2 = s2.serverUrl, d2 = s2.token, _ = s2.signal, f = s2.ssl, e2.customParameters = s2.customParameters), n2 ? u = e2.adminTokenServiceUrl : (u = e2.tokenServiceUrl, p2 = new $(u.toLowerCase()), e2.webTierAuth && s2 && s2.serverUrl && !f && i2.scheme === "http" && (E(i2.uri, u, true) || p2.scheme === "https" && i2.host === p2.host && i2.port === "7080" && p2.port === "7443") && (u = u.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const m = __spreadValues({ query: __spreadValues({ request: "getToken", username: t2 == null ? void 0 : t2.username, password: t2 == null ? void 0 : t2.password, serverUrl: h2, token: d2, expiration: g, referer: n2 || r2 ? window.location.host : null, client: n2 ? "referer" : null, f: "json" }, e2.customParameters), method: "post", authMode: "anonymous", useProxy: this._useProxy(e2, s2), signal: _ }, s2 == null ? void 0 : s2.ioArgs);
    r2 || (m.withCredentials = false);
    return U$1(u, m).then((s3) => {
      const r3 = s3.data;
      if (!r3 || !r3.token)
        return new s$5("identity-manager:authentication-failed", "Unable to generate token");
      const i3 = e2.server;
      return R[i3] || (R[i3] = {}), t2 && (R[i3][t2.username] = t2.password), r3.validity = g, r3;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e2) {
    return this.checkAppAccess(e2, "").then((e3) => e3.credential);
  }
  checkAppAccess(e2, t2, s2) {
    let r2 = false;
    return this.getCredential(e2, { prompt: false }).then((i2) => {
      let o2;
      const n2 = { f: "json" };
      if (i2.scope === "portal")
        if (t2 && (this._doPortalSignIn(e2) || s2 && s2.force))
          o2 = i2.server + "/sharing/rest/oauth2/validateAppAccess", n2.client_id = t2;
        else {
          if (!i2.token)
            return { credential: i2 };
          o2 = i2.server + "/sharing/rest";
        }
      else {
        if (!i2.token)
          return { credential: i2 };
        o2 = i2.server + "/rest/services";
      }
      return i2.token && (n2.token = i2.token), U$1(o2, { query: n2, authMode: "anonymous" }).then((e3) => {
        if (e3.data.valid === false)
          throw new s$5("identity-manager:not-authorized", `You are currently signed in as: '${i2.userId}'.`, e3.data);
        return r2 = !!e3.data.viewOnlyUserTypeApp, { credential: i2 };
      }).catch((e3) => {
        if (e3.name === "identity-manager:not-authorized")
          throw e3;
        const t3 = e3.details && e3.details.httpStatus;
        if (t3 === 498)
          throw i2.destroy(), new s$5("identity-manager:not-authenticated", "User is not signed in.");
        if (t3 === 400)
          throw new s$5("identity-manager:invalid-request");
        return { credential: i2 };
      });
    }).then((e3) => ({ credential: e3.credential, viewOnly: r2 }));
  }
  setOAuthResponseHash(e2) {
    var t2;
    const s2 = this._oAuthDfd;
    if (this._oAuthDfd = null, !s2 || !e2)
      return;
    clearInterval(this._oAuthIntervalId), (t2 = this._oAuthOnHashHandle) == null || t2.remove(), e2.charAt(0) === "#" && (e2 = e2.substring(1));
    const r2 = b$2(e2);
    if (r2.error) {
      const e3 = r2.error === "access_denied", t3 = new s$5(e3 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", e3 ? "ABORTED" : "OAuth: " + r2.error + " - " + r2.error_description);
      s2.reject(t3);
    } else {
      const e3 = s2.sinfo_, t3 = s2.oinfo_, i2 = t3._oAuthCred, o2 = new q({ userId: r2.username, server: e3.server, token: r2.access_token, expires: Date.now() + 1e3 * Number(r2.expires_in), ssl: r2.ssl === "true", _oAuthCred: i2 });
      t3.userId = o2.userId, i2.storage = r2.persist ? C : D, i2.token = o2.token, i2.expires = o2.expires, i2.userId = o2.userId, i2.ssl = o2.ssl, i2.save(), s2.resolve(o2);
    }
  }
  setOAuthRedirectionHandler(e2) {
    this._oAuthRedirectFunc = e2;
  }
  setProtocolErrorHandler(e2) {
    this._protocolFunc = e2;
  }
  signIn(e2, t2, s2 = {}) {
    const r2 = B(), i2 = () => {
      var e3, t3, s3, r3, i3;
      (e3 = h2) == null || e3.remove(), (t3 = l2) == null || t3.remove(), (s3 = c) == null || s3.remove(), (r3 = n2) == null || r3.destroy(), (i3 = this.dialog) == null || i3.destroy(), this.dialog = n2 = h2 = l2 = c = null;
    }, o2 = () => {
      i2(), this._oAuthDfd = null, r2.reject(new s$5("identity-manager:user-aborted", "ABORTED"));
    };
    s2.signal && v(s2.signal, () => {
      o2();
    });
    let n2 = new this.formConstructor();
    n2.resource = this.getResourceName(e2), n2.server = t2.server, this.dialog = new p$1(), this.dialog.content = n2, this.dialog.open = true, this.emit("dialog-create");
    let h2 = n2.on("cancel", o2), l2 = this.dialog.watch("open", o2), c = n2.on("submit", (e3) => {
      this.generateToken(t2, e3, { isAdmin: s2.isAdmin, signal: s2.signal }).then((o3) => {
        i2();
        const n3 = new q({ userId: e3.username, server: t2.server, token: o3.token, expires: o3.expires != null ? Number(o3.expires) : null, ssl: !!o3.ssl, isAdmin: s2.isAdmin, validity: o3.validity });
        r2.resolve(n3);
      }).catch((e4) => {
        n2.error = e4, n2.signingIn = false;
      });
    });
    return r2.promise;
  }
  oAuthSignIn(e2, t2, s2, r2) {
    this._oAuthDfd = B();
    const i2 = this._oAuthDfd;
    r2 != null && r2.signal && v(r2.signal, () => {
      const e3 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e3 && !e3.closed ? e3.close() : this.dialog && h2();
    }), i2.resUrl_ = e2, i2.sinfo_ = t2, i2.oinfo_ = s2;
    const o2 = !r2 || r2.oAuthPopupConfirmation !== false;
    if (!s2.popup || !o2)
      return this._doOAuthSignIn(e2, t2, s2), i2.promise;
    const n2 = new this.formConstructor();
    n2.oAuthPrompt = true, n2.server = t2.server, this.dialog = new p$1(), this.dialog.content = n2, this.dialog.open = true, this.emit("dialog-create");
    const h2 = () => {
      u(), this._oAuthDfd = null, i2.reject(new s$5("identity-manager:user-aborted", "ABORTED"));
    }, l2 = n2.on("cancel", h2), c = this.dialog.watch("open", h2), d2 = n2.on("submit", () => {
      u(), this._doOAuthSignIn(e2, t2, s2);
    }), u = () => {
      l2.remove(), c.remove(), d2.remove(), n2.destroy(), this.dialog.destroy(), this.dialog = null;
    };
    return i2.promise;
  }
  destroyCredentials() {
    if (this.credentials) {
      this.credentials.slice().forEach((e2) => {
        e2.destroy();
      });
    }
    this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e2 = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = r(window, "message", (t2) => {
      var s2;
      if ((t2.origin === window.location.origin || t2.origin.endsWith(".arcgis.com")) && ((s2 = t2.data) == null ? void 0 : s2.type) === "arcgis:auth:requestCredential") {
        const s3 = t2.source;
        this.getCredential(e2).then((e3) => {
          s3.postMessage({ type: "arcgis:auth:credential", credential: { expires: e3.expires, server: e3.server, ssl: e3.ssl, token: e3.token, userId: e3.userId } }, t2.origin);
        }).catch((e3) => {
          s3.postMessage({ type: "arcgis:auth:error", error: { name: e3.name, message: e3.message } }, t2.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthHash() {
    let e2 = window.location.hash;
    if (e2) {
      e2.charAt(0) === "#" && (e2 = e2.substring(1));
      const t2 = b$2(e2);
      let s2 = false;
      if (t2.access_token && t2.expires_in && t2.state && t2.hasOwnProperty("username"))
        try {
          t2.state = JSON.parse(t2.state), typeof t2.state == "object" && t2.state.portalUrl && (this._oAuthHash = t2, s2 = true);
        } catch (e3) {
        }
      else
        t2.error && t2.error_description && (console.log("IdentityManager OAuth Error: ", t2.error, " - ", t2.error_description), t2.error === "access_denied" && (s2 = true));
      s2 && (window.location.hash = typeof t2.state == "object" && t2.state.hash || "");
    }
  }
  _pageShowHandler(e2) {
    if (e2.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const e3 = new s$5("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(e3);
    }
  }
  _findCredential(e2, t2) {
    let s2, r2, i2, o2, n2 = -1;
    const a2 = t2 && t2.token, h2 = t2 && t2.resource, l2 = this._isServerRsrc(e2) ? "server" : "portal", c = this.credentials.filter((t3) => this._hasSameServerInstance(t3.server, e2) && t3.scope === l2);
    if (e2 = h2 || e2, c.length)
      if (c.length === 1) {
        if (s2 = c[0], o2 = this.findServerInfo(s2.server), r2 = o2 && o2.owningSystemUrl, i2 = r2 && this.findCredential(r2, s2.userId), n2 = this._getIdenticalSvcIdx(e2, s2), !a2)
          return n2 === -1 && s2.resources.push(e2), this._addResource(e2, i2), s2;
        n2 !== -1 && (s2.resources.splice(n2, 1), this._removeResource(e2, i2));
      } else {
        let t3, s3;
        if (c.some((a3) => (s3 = this._getIdenticalSvcIdx(e2, a3), s3 !== -1 && (t3 = a3, o2 = this.findServerInfo(t3.server), r2 = o2 && o2.owningSystemUrl, i2 = r2 && this.findCredential(r2, t3.userId), n2 = s3, true))), a2)
          t3 && (t3.resources.splice(n2, 1), this._removeResource(e2, i2));
        else if (t3)
          return this._addResource(e2, i2), t3;
      }
  }
  _findOAuthInfo(e2) {
    let t2 = this.findOAuthInfo(e2);
    if (!t2) {
      for (const s2 of this.oAuthInfos)
        if (this._isIdProvider(s2.portalUrl, e2)) {
          t2 = s2;
          break;
        }
    }
    return t2;
  }
  _addResource(e2, t2) {
    t2 && this._getIdenticalSvcIdx(e2, t2) === -1 && t2.resources.push(e2);
  }
  _removeResource(e2, t2) {
    let s2 = -1;
    t2 && (s2 = this._getIdenticalSvcIdx(e2, t2), s2 > -1 && t2.resources.splice(s2, 1));
  }
  _useProxy(e2, t2) {
    return t2 && t2.isAdmin && !E(e2.adminTokenServiceUrl, window.location.href) || !this._isPortalDomain(e2.tokenServiceUrl) && String(e2.currentVersion) === "10.1" && !E(e2.tokenServiceUrl, window.location.href);
  }
  _getOrigin(e2) {
    const t2 = new $(e2);
    return t2.scheme + "://" + t2.host + (t2.port != null ? ":" + t2.port : "");
  }
  _getServerInstanceRoot(e2) {
    const t2 = e2.toLowerCase();
    let s2 = t2.indexOf(this._agsRest);
    return s2 === -1 && this._isAdminResource(e2) && (s2 = this._agsAdmin.test(e2) ? e2.replace(this._agsAdmin, "$1").length : e2.search(this._adminSvcs)), s2 === -1 && (s2 = t2.indexOf("/sharing")), s2 === -1 && t2.substr(-1) === "/" && (s2 = t2.length - 1), s2 > -1 ? e2.substring(0, s2) : e2;
  }
  _hasSameServerInstance(e2, t2) {
    return e2.substr(-1) === "/" && (e2 = e2.slice(0, -1)), e2 = e2.toLowerCase(), t2 = this._getServerInstanceRoot(t2).toLowerCase(), e2 = this._normalizeAGOLorgDomain(e2), t2 = this._normalizeAGOLorgDomain(t2), (e2 = e2.substr(e2.indexOf(":"))) === (t2 = t2.substr(t2.indexOf(":")));
  }
  _normalizeAGOLorgDomain(e2) {
    const t2 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, s2 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, r2 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return t2.test(e2) ? e2 = e2.replace(t2, "https://www.arcgis.com") : s2.test(e2) ? e2 = e2.replace(s2, "https://devext.arcgis.com") : r2.test(e2) && (e2 = e2.replace(r2, "https://qaext.arcgis.com")), e2;
  }
  _sanitizeUrl(e2) {
    const t2 = (s$6.request.proxyUrl || "").toLowerCase(), s2 = t2 ? e2.toLowerCase().indexOf(t2 + "?") : -1;
    return s2 !== -1 && (e2 = e2.substring(s2 + t2.length + 1)), e2 = z(e2), U(e2).path;
  }
  _isRESTService(e2) {
    return e2.indexOf(this._agsRest) > -1;
  }
  _isAdminResource(e2) {
    return this._agsAdmin.test(e2) || this._adminSvcs.test(e2);
  }
  _isServerRsrc(e2) {
    return this._isRESTService(e2) || this._isAdminResource(e2);
  }
  _isIdenticalService(e2, t2) {
    let s2;
    if (this._isRESTService(e2) && this._isRESTService(t2)) {
      const r2 = this._getSuffix(e2).toLowerCase(), i2 = this._getSuffix(t2).toLowerCase();
      if (s2 = r2 === i2, !s2) {
        const e3 = /(.*)\/(MapServer|FeatureServer).*/gi;
        s2 = r2.replace(e3, "$1") === i2.replace(e3, "$1");
      }
    } else
      this._isAdminResource(e2) && this._isAdminResource(t2) ? s2 = true : this._isServerRsrc(e2) || this._isServerRsrc(t2) || !this._isPortalDomain(e2) || (s2 = true);
    return s2;
  }
  _isPortalDomain(e2) {
    const t2 = new $(e2.toLowerCase()), s2 = this._portalConfig;
    let r2 = this._gwDomains.some((e3) => e3.regex.test(t2.uri));
    return !r2 && s2 && (r2 = this._hasSameServerInstance(this._getServerInstanceRoot(s2.restBaseUrl), t2.uri)), r2 || s$6.portalUrl && (r2 = E(t2, s$6.portalUrl, true)), r2 || (r2 = this._portals.some((e3) => this._hasSameServerInstance(e3, t2.uri))), r2 = r2 || this._agsPortal.test(t2.path), r2;
  }
  _isIdProvider(e2, t2) {
    let s2 = -1, r2 = -1;
    this._gwDomains.forEach((i3, o2) => {
      s2 === -1 && i3.regex.test(e2) && (s2 = o2), r2 === -1 && i3.regex.test(t2) && (r2 = o2);
    });
    let i2 = false;
    if (s2 > -1 && r2 > -1 && (s2 === 0 || s2 === 4 ? r2 !== 0 && r2 !== 4 || (i2 = true) : s2 === 1 ? r2 !== 1 && r2 !== 2 || (i2 = true) : s2 === 2 ? r2 === 2 && (i2 = true) : s2 === 3 && r2 === 3 && (i2 = true)), !i2) {
      const s3 = this.findServerInfo(t2), r3 = s3 && s3.owningSystemUrl;
      r3 && b(s3) && this._isPortalDomain(r3) && this._isIdProvider(e2, r3) && (i2 = true);
    }
    return i2;
  }
  _getIdenticalSvcIdx(e2, t2) {
    let s2 = -1;
    for (let r2 = 0; r2 < t2.resources.length; r2++) {
      const i2 = t2.resources[r2];
      if (this._isIdenticalService(e2, i2)) {
        s2 = r2;
        break;
      }
    }
    return s2;
  }
  _getSuffix(e2) {
    return e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e2) {
    let t2, s2, r2;
    if (this._isRESTService(e2) || this._isAdminResource(e2)) {
      const r3 = this._getServerInstanceRoot(e2);
      return t2 = r3 + "/admin/generateToken", s2 = U$1(e2 = r3 + "/rest/info", { query: { f: "json" } }).then((e3) => e3.data), { adminUrl: t2, promise: s2 };
    }
    if (this._isPortalDomain(e2)) {
      let t3 = "";
      if (this._gwDomains.some((s3) => (s3.regex.test(e2) && (t3 = s3.tokenServiceUrl), !!t3)), t3 || this._portals.some((s3) => (this._hasSameServerInstance(s3, e2) && (t3 = s3 + this._gwTokenUrl), !!t3)), t3 || (r2 = e2.toLowerCase().indexOf("/sharing"), r2 !== -1 && (t3 = e2.substring(0, r2) + this._gwTokenUrl)), t3 || (t3 = this._getOrigin(e2) + this._gwTokenUrl), t3) {
        const s3 = new $(e2).port;
        /^http:\/\//i.test(e2) && s3 === "7080" && (t3 = t3.replace(/:7080/i, ":7443")), t3 = t3.replace(/http:/i, "https:");
      }
      return t3;
    }
    if (e2.toLowerCase().indexOf("premium.arcgisonline.com") !== -1)
      return "https://premium.arcgisonline.com/server/tokens";
  }
  _exchangeToken(e2, t2, s2) {
    return U$1(`${e2}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: t2, token: s2 } }).then((e3) => e3.data.token);
  }
  _getPlatformSelf(e2, t2) {
    return U$1(`${e2}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": t2, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json" }, withCredentials: true }).then((e3) => e3.data);
  }
  _getPortalSelf(e2, t2) {
    let s2;
    if (this._gwDomains.some((t3) => (t3.regex.test(e2) && (s2 = t3.customBaseUrl), !!s2)), s2)
      return Promise.resolve({ allSSL: true, currentVersion: "4.4", customBaseUrl: s2, portalMode: "multitenant", supportsOAuth: true });
    window.location.protocol === "https:" ? e2 = e2.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t2) && (e2 = e2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return U$1(e2, { query: { f: "json" }, authMode: "anonymous", withCredentials: true }).then((e3) => e3.data);
  }
  _doPortalSignIn(e2) {
    const t2 = this._portalConfig, s2 = window.location.href, r2 = this.findServerInfo(e2);
    return !(!t2 && !this._isPortalDomain(s2) || !(r2 ? r2.hasPortal || r2.owningSystemUrl && this._isPortalDomain(r2.owningSystemUrl) : this._isPortalDomain(e2)) || !(this._isIdProvider(s2, e2) || t2 && (this._hasSameServerInstance(this._getServerInstanceRoot(t2.restBaseUrl), e2) || this._isIdProvider(t2.restBaseUrl, e2)) || E(s2, e2, true)));
  }
  _checkProtocol(e2, t2, s2, r2) {
    let i2 = true;
    const o2 = r2 ? t2.adminTokenServiceUrl : t2.tokenServiceUrl;
    if (o2.trim().toLowerCase().indexOf("https:") === 0 && window.location.href.toLowerCase().indexOf("https:") !== 0 && A(o2) && (i2 = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e2, serverInfo: t2 }), !i2)) {
      s2(new s$5("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return i2;
  }
  _enqueue(e2, t2, s2, r2, i2, o2) {
    return r2 || (r2 = B()), r2.resUrl_ = e2, r2.sinfo_ = t2, r2.options_ = s2, r2.admin_ = i2, r2.refresh_ = o2, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e2), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(r2)) : this._xoReqs.push(r2) : this._doSignIn(r2), r2.promise;
  }
  _doSignIn(e2) {
    this._busy = e2, this._rejectOnPersistedPageShow = false;
    const t2 = (t3) => {
      const s3 = e2.options_ && e2.options_.resource, r2 = e2.resUrl_, i3 = e2.refresh_;
      let o3 = false;
      this.credentials.indexOf(t3) === -1 && (i3 && this.credentials.indexOf(i3) !== -1 ? (i3.userId = t3.userId, i3.token = t3.token, i3.expires = t3.expires, i3.validity = t3.validity, i3.ssl = t3.ssl, i3.creationTime = t3.creationTime, o3 = true, t3 = i3) : this.credentials.push(t3)), t3.resources || (t3.resources = []), t3.resources.push(s3 || r2), t3.scope = this._isServerRsrc(r2) ? "server" : "portal", t3.emitTokenChange();
      const n3 = this._soReqs, a2 = {};
      this._soReqs = [], n3.forEach((e3) => {
        if (!this._isIdenticalService(r2, e3.resUrl_)) {
          const s4 = this._getSuffix(e3.resUrl_);
          a2[s4] || (a2[s4] = true, t3.resources.push(e3.resUrl_));
        }
      }), e2.resolve(t3), n3.forEach((e3) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(r2), e3.resUrl_) ? e3.resolve(t3) : this._soReqs.push(e3);
      }), this._busy = e2.resUrl_ = e2.sinfo_ = e2.refresh_ = null, o3 || this.emit("credential-create", { credential: t3 }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s2 = (t3) => {
      e2.reject(t3), this._busy = e2.resUrl_ = e2.sinfo_ = e2.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, i2 = (r$1, i3, o3, n3) => {
      var h3, c2;
      const d2 = e2.sinfo_, u = !e2.options_ || e2.options_.prompt !== false, p2 = d2.hasPortal && this._findOAuthInfo(e2.resUrl_);
      let _, f;
      if (r$1)
        t2(new q({ userId: r$1, server: d2.server, token: o3 || null, expires: n3 != null ? Number(n3) : null, ssl: !!i3 }));
      else if (window !== window.parent && (h3 = this._appUrlObj.query) != null && h3["arcgis-auth-origin"] && (c2 = this._appUrlObj.query) != null && c2["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e2.resUrl_)) {
        var m;
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const r$12 = r(window, "message", (e3) => {
          e3.source === window.parent && e3.data && (e3.data.type === "arcgis:auth:credential" ? (r$12.remove(), t2(new q(e3.data.credential))) : e3.data.type === "arcgis:auth:error" && (r$12.remove(), s2(s$5.fromJSON(e3.data.error))));
        });
        v((m = e2.options_) == null ? void 0 : m.signal, () => {
          r$12.remove();
        });
      } else if (p2) {
        let r2 = p2._oAuthCred;
        if (!r2) {
          const e3 = new s$2(p2, C), t3 = new s$2(p2, D);
          e3.isValid() && t3.isValid() ? e3.expires > t3.expires ? (r2 = e3, t3.destroy()) : (r2 = t3, e3.destroy()) : r2 = e3.isValid() ? e3 : t3, p2._oAuthCred = r2;
        }
        if (r2.isValid())
          _ = new q({ userId: r2.userId, server: d2.server, token: r2.token, expires: r2.expires, ssl: r2.ssl, _oAuthCred: r2 }), p2.appId !== r2.appId && this._doPortalSignIn(e2.resUrl_) ? e2._pendingDfd = this._exchangeToken(_.server, p2.appId, _.token).then((e3) => {
            _.token = e3, r2.token = e3, r2.save(), t2(_);
          }).catch(() => {
            t2(_);
          }) : t2(_);
        else if (this._oAuthHash && this._hasSameServerInstance(p2.portalUrl, this._oAuthHash.state.portalUrl)) {
          const e3 = this._oAuthHash;
          _ = new q({ userId: e3.username, server: d2.server, token: e3.access_token, expires: Date.now() + 1e3 * Number(e3.expires_in), ssl: e3.ssl === "true", oAuthState: e3.state, _oAuthCred: r2 }), p2.userId = _.userId, r2.storage = e3.persist ? C : D, r2.token = _.token, r2.expires = _.expires, r2.userId = _.userId, r2.ssl = _.ssl, r2.save(), this._oAuthHash = null, t2(_);
        } else {
          const r3 = () => {
            u ? e2._pendingDfd = this.oAuthSignIn(e2.resUrl_, d2, p2, e2.options_).then(t2, s2) : (f = new s$5("identity-manager:not-authenticated", "User is not signed in."), s2(f));
          };
          this._doPortalSignIn(e2.resUrl_) ? e2._pendingDfd = this._getPlatformSelf(d2.server, p2.appId).then(({ portalUrl: e3, token: s3, username: i4 }) => {
            !e3 || E(e3, window.location.origin, true) ? (_ = new q({ server: d2.server, userId: i4, token: s3 }), t2(_)) : r3();
          }).catch(r3) : r3();
        }
      } else if (u) {
        if (this._checkProtocol(e2.resUrl_, d2, s2, e2.admin_)) {
          let r2 = e2.options_;
          e2.admin_ && (r2 = r2 || {}, r2.isAdmin = true), e2._pendingDfd = this.signIn(e2.resUrl_, d2, r2).then(t2, s2);
        }
      } else
        f = new s$5("identity-manager:not-authenticated", "User is not signed in."), s2(f);
    }, o2 = () => {
      const r2 = e2.sinfo_, i3 = r2.owningSystemUrl, o3 = e2.options_;
      let n3, a2, h3, l2;
      if (o3 && (n3 = o3.token, a2 = o3.error, h3 = o3.prompt), l2 = this._findCredential(i3, { token: n3, resource: e2.resUrl_ }), !l2) {
        for (const e3 of this.credentials)
          if (this._isIdProvider(i3, e3.server)) {
            l2 = e3;
            break;
          }
      }
      if (l2) {
        const i4 = this.findCredential(e2.resUrl_, l2.userId);
        if (i4)
          t2(i4);
        else if (P(r2, this._legacyFed)) {
          const e3 = l2.toJSON();
          e3.server = r2.server, e3.resources = null, t2(new q(e3));
        } else {
          (e2._pendingDfd = this.generateToken(this.findServerInfo(l2.server), null, { serverUrl: e2.resUrl_, token: l2.token, signal: e2.options_.signal, ssl: l2.ssl })).then((s3) => {
            t2(new q({ userId: l2.userId, server: r2.server, token: s3.token, expires: s3.expires != null ? Number(s3.expires) : null, ssl: !!s3.ssl, isAdmin: e2.admin_, validity: s3.validity }));
          }, s2);
        }
      } else {
        this._busy = null, n3 && (e2.options_.token = null);
        (e2._pendingDfd = this.getCredential(i3.replace(/\/?$/, "/sharing"), { resource: e2.resUrl_, owningTenant: r2.owningTenant, signal: e2.options_.signal, token: n3, error: a2, prompt: h3 })).then(() => {
          this._enqueue(e2.resUrl_, e2.sinfo_, e2.options_, e2, e2.admin_);
        }, (e3) => {
          s2(e3);
        });
      }
    };
    this._errbackFunc = s2;
    const n2 = e2.sinfo_.owningSystemUrl, h2 = this._isServerRsrc(e2.resUrl_), c = e2.sinfo_._restInfoPms;
    c ? c.promise.then((t3) => {
      const s3 = e2.sinfo_;
      if (s3._restInfoPms) {
        s3.adminTokenServiceUrl = s3._restInfoPms.adminUrl, s3._restInfoPms = null, s3.tokenServiceUrl = t$1("authInfo.tokenServicesUrl", t3) || t$1("authInfo.tokenServiceUrl", t3) || t$1("tokenServiceUrl", t3), s3.shortLivedTokenValidity = t$1("authInfo.shortLivedTokenValidity", t3), s3.currentVersion = t3.currentVersion, s3.owningTenant = t3.owningTenant;
        const e3 = s3.owningSystemUrl = t3.owningSystemUrl;
        e3 && this._portals.push(e3);
      }
      h2 && s3.owningSystemUrl ? o2() : i2();
    }, () => {
      e2.sinfo_._restInfoPms = null;
      const t3 = new s$5("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      s2(t3);
    }) : h2 && n2 ? o2() : e2.sinfo_._selfReq ? e2.sinfo_._selfReq.selfDfd.then((t3) => {
      const s3 = {};
      let r2, i3, o3, n3;
      return t3 && (r2 = t3.user && t3.user.username, s3.username = r2, s3.allSSL = t3.allSSL, i3 = t3.supportsOAuth, o3 = t3.currentVersion, t3.portalMode === "multitenant" && (n3 = t3.customBaseUrl)), e2.sinfo_.webTierAuth = !!r2, r2 && this.normalizeWebTierAuth ? this.generateToken(e2.sinfo_, null, { ssl: s3.allSSL }).catch(() => null).then((e3) => (s3.portalToken = e3 && e3.token, s3.tokenExpiration = e3 && e3.expires, s3)) : !r2 && i3 && parseFloat(o3) >= 4.4 && !this._findOAuthInfo(e2.resUrl_) ? this._generateOAuthInfo({ portalUrl: e2.sinfo_.server, customBaseUrl: n3, owningTenant: e2.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => s3) : s3;
    }).catch(() => null).then((t3) => {
      e2.sinfo_._selfReq = null, t3 ? i2(t3.username, t3.allSSL, t3.portalToken, t3.tokenExpiration) : i2();
    }) : i2();
  }
  _generateOAuthInfo(e2) {
    let t2, s2, r2 = e2.portalUrl;
    const i2 = e2.customBaseUrl, o2 = e2.owningTenant, n2 = !this.defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (n2) {
      s2 = window.location.href;
      let e3 = s2.indexOf("?");
      e3 > -1 && (s2 = s2.slice(0, e3)), e3 = s2.search(/\/(apps|home)\//), s2 = e3 > -1 ? s2.slice(0, e3) : null;
    }
    return n2 && s2 ? (this._hasTestedIfAppIsOnPortal = true, t2 = U$1(s2 + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this.defaultOAuthInfo = new i$1({ appId: "arcgisonline", popupCallbackUrl: s2 + "/home/oauth-callback.html" });
    })) : t2 = Promise.resolve(), t2.then(() => {
      if (this.defaultOAuthInfo)
        return r2 = r2.replace(/^http:/i, "https:"), U$1(r2 + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: o2, client_id: this.defaultOAuthInfo.appId, redirect_uri: T(this.defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((e3) => {
          if (e3.data.valid) {
            const t3 = this.defaultOAuthInfo.clone();
            e3.data.urlKey && i2 ? t3.portalUrl = "https://" + e3.data.urlKey.toLowerCase() + "." + i2 : t3.portalUrl = r2, t3.popup = window !== window.top || !(E(r2, window.location.origin) || this._gwDomains.some((e4) => e4.regex.test(r2) && e4.regex.test(window.location.origin))), this.oAuthInfos.push(t3);
          }
        });
    });
  }
  _doOAuthSignIn(e2, s2, r$1) {
    const i2 = { portalUrl: r$1.portalUrl };
    !r$1.popup && r$1.preserveUrlHash && window.location.hash && (i2.hash = window.location.hash);
    const o2 = { client_id: r$1.appId, response_type: "token", state: JSON.stringify(i2), expiration: r$1.expiration, locale: r$1.locale, redirect_uri: r$1.popup ? T(r$1.popupCallbackUrl) : window.location.href.replace(/#.*$/, "") };
    r$1.forceLogin && (o2.force_login = true), r$1.forceUserId && r$1.userId && (o2.prepopulatedusername = r$1.userId), !r$1.popup && this._doPortalSignIn(e2) && (o2.redirectToUserOrgUrl = true);
    const n2 = r$1.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", h2 = n2 + "?" + C$1(o2);
    if (r$1.popup) {
      const e3 = window.open(h2, "esriJSAPIOAuth", r$1.popupWindowFeatures);
      if (e3)
        e3.focus(), this._oAuthDfd.oAuthWin_ = e3, this._oAuthIntervalId = setInterval(() => {
          if (e3.closed) {
            clearInterval(this._oAuthIntervalId), this._oAuthOnHashHandle.remove();
            const e4 = this._oAuthDfd;
            if (e4) {
              const t2 = new s$5("identity-manager:user-aborted", "ABORTED");
              e4.reject(t2);
            }
          }
        }, 500), this._oAuthOnHashHandle = r(e$3, "arcgis:auth:hash", (e4) => {
          this.setOAuthResponseHash(e4.detail);
        });
      else {
        const e4 = new s$5("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e4);
      }
    } else
      this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: o2, authorizeUrl: n2, resourceUrl: e2, serverInfo: s2, oAuthInfo: r$1 }) : window.location.href = h2;
  }
};
j = e([i$2("esri.identity.IdentityManagerBase")], j);
let q = class extends n$1.EventedAccessor {
  constructor(e2) {
    super(e2), this._oAuthCred = null, this.tokenRefreshBuffer = 2, e2 && e2._oAuthCred && (this._oAuthCred = e2._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], this.creationTime == null && (this.creationTime = Date.now());
  }
  refreshToken() {
    const e2 = s$4.findServerInfo(this.server), t2 = e2 && e2.owningSystemUrl, s2 = !!t2 && this.scope === "server", r2 = s2 && P(e2, s$4._legacyFed), i2 = e2.webTierAuth, o2 = i2 && s$4.normalizeWebTierAuth, n2 = R[this.server], a2 = n2 && n2[this.userId];
    let h2, l2 = this.resources && this.resources[0], c = s2 && s$4.findServerInfo(t2), d2 = { username: this.userId, password: a2 };
    if (i2 && !o2)
      return;
    s2 && !c && s$4.serverInfos.some((e3) => (s$4._isIdProvider(t2, e3.server) && (c = e3), !!c));
    const u = c && s$4.findCredential(c.server, this.userId);
    if (!s2 || u) {
      if (!r2) {
        if (s2)
          h2 = { serverUrl: l2, token: u && u.token, ssl: u && u.ssl };
        else if (o2)
          d2 = null, h2 = { ssl: this.ssl };
        else {
          if (!a2) {
            let t3;
            return l2 && (l2 = s$4._sanitizeUrl(l2), this._enqueued = 1, t3 = s$4._enqueue(l2, e2, null, null, this.isAdmin, this), t3.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), t3;
          }
          this.isAdmin && (h2 = { isAdmin: true });
        }
        return s$4.generateToken(s2 ? c : e2, s2 ? null : d2, h2).then((e3) => {
          this.token = e3.token, this.expires = e3.expires != null ? Number(e3.expires) : null, this.creationTime = Date.now(), this.validity = e3.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      u.refreshToken();
    }
  }
  refreshServerTokens() {
    this.scope === "portal" && s$4.credentials.forEach((e2) => {
      const t2 = s$4.findServerInfo(e2.server), s2 = t2 && t2.owningSystemUrl;
      e2 !== this && e2.userId === this.userId && s2 && e2.scope === "server" && (s$4._hasSameServerInstance(this.server, s2) || s$4._isIdProvider(s2, this.server)) && (P(t2, s$4._legacyFed) ? (e2.token = this.token, e2.expires = this.expires, e2.creationTime = this.creationTime, e2.validity = this.validity, e2.emitTokenChange()) : e2.refreshToken());
    });
  }
  emitTokenChange(e2) {
    clearTimeout(this._refreshTimer);
    const t2 = this.server && s$4.findServerInfo(this.server), s2 = t2 && t2.owningSystemUrl, r2 = s2 && s$4.findServerInfo(s2);
    e2 === false || s2 && this.scope !== "portal" && (!r2 || !r2.webTierAuth || s$4.normalizeWebTierAuth) || this.expires == null && this.validity == null || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e2 = s$4.credentials.indexOf(this);
    e2 > -1 && s$4.credentials.splice(e2, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e2 = p$4({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), t2 = this.resources;
    return t2 && t2.length > 0 && (e2.resources = t2.slice()), e2;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e2 = 6e4 * this.tokenRefreshBuffer, t2 = __pow(2, 31) - 1;
    let s2 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    s2 < 0 ? s2 = 0 : s2 > t2 && (s2 = t2), this._refreshTimer = setTimeout(this.refreshToken.bind(this), s2 > e2 ? s2 - e2 : s2);
  }
};
e([y()], q.prototype, "creationTime", void 0), e([y()], q.prototype, "expires", void 0), e([y()], q.prototype, "isAdmin", void 0), e([y()], q.prototype, "oAuthState", void 0), e([y()], q.prototype, "resources", void 0), e([y()], q.prototype, "scope", void 0), e([y()], q.prototype, "server", void 0), e([y()], q.prototype, "ssl", void 0), e([y()], q.prototype, "token", void 0), e([y()], q.prototype, "tokenRefreshBuffer", void 0), e([y()], q.prototype, "userId", void 0), e([y()], q.prototype, "validity", void 0), q = e([i$2("esri.identity.Credential")], q);
let o = class extends j {
};
o = e([i$2("esri.identity.IdentityManager")], o);
const a = new o();
n$2(a);
export default a;
