function sM(l, s) {
  for (var f = 0; f < s.length; f++) {
    const p = s[f];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const m in p)
        if (m !== "default" && !(m in l)) {
          const g = Object.getOwnPropertyDescriptor(p, m);
          g && Object.defineProperty(l, m, g.get ? g : {
            enumerable: !0,
            get: () => p[m]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
function Qv(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var iC = { exports: {} }, Uv = {}, oC = { exports: {} }, $t = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function cM() {
  if (Ub)
    return $t;
  Ub = 1;
  var l = Symbol.for("react.element"), s = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), v = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), O = Symbol.iterator;
  function U(L) {
    return L === null || typeof L != "object" ? null : (L = O && L[O] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, $ = {};
  function Q(L, W, he) {
    this.props = L, this.context = W, this.refs = $, this.updater = he || V;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(L, W) {
    if (typeof L != "object" && typeof L != "function" && L != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, W, "setState");
  }, Q.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = Q.prototype;
  function ie(L, W, he) {
    this.props = L, this.context = W, this.refs = $, this.updater = he || V;
  }
  var ae = ie.prototype = new pe();
  ae.constructor = ie, B(ae, Q.prototype), ae.isPureReactComponent = !0;
  var ce = Array.isArray, J = Object.prototype.hasOwnProperty, _e = { current: null }, Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function vt(L, W, he) {
    var me, Re = {}, we = null, ke = null;
    if (W != null)
      for (me in W.ref !== void 0 && (ke = W.ref), W.key !== void 0 && (we = "" + W.key), W)
        J.call(W, me) && !Me.hasOwnProperty(me) && (Re[me] = W[me]);
    var Ae = arguments.length - 2;
    if (Ae === 1)
      Re.children = he;
    else if (1 < Ae) {
      for (var Ue = Array(Ae), Ie = 0; Ie < Ae; Ie++)
        Ue[Ie] = arguments[Ie + 2];
      Re.children = Ue;
    }
    if (L && L.defaultProps)
      for (me in Ae = L.defaultProps, Ae)
        Re[me] === void 0 && (Re[me] = Ae[me]);
    return { $$typeof: l, type: L, key: we, ref: ke, props: Re, _owner: _e.current };
  }
  function Wt(L, W) {
    return { $$typeof: l, type: L.type, key: W, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function xt(L) {
    return typeof L == "object" && L !== null && L.$$typeof === l;
  }
  function gt(L) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(he) {
      return W[he];
    });
  }
  var Kt = /\/+/g;
  function Ye(L, W) {
    return typeof L == "object" && L !== null && L.key != null ? gt("" + L.key) : W.toString(36);
  }
  function tt(L, W, he, me, Re) {
    var we = typeof L;
    (we === "undefined" || we === "boolean") && (L = null);
    var ke = !1;
    if (L === null)
      ke = !0;
    else
      switch (we) {
        case "string":
        case "number":
          ke = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case l:
            case s:
              ke = !0;
          }
      }
    if (ke)
      return ke = L, Re = Re(ke), L = me === "" ? "." + Ye(ke, 0) : me, ce(Re) ? (he = "", L != null && (he = L.replace(Kt, "$&/") + "/"), tt(Re, W, he, "", function(Ie) {
        return Ie;
      })) : Re != null && (xt(Re) && (Re = Wt(Re, he + (!Re.key || ke && ke.key === Re.key ? "" : ("" + Re.key).replace(Kt, "$&/") + "/") + L)), W.push(Re)), 1;
    if (ke = 0, me = me === "" ? "." : me + ":", ce(L))
      for (var Ae = 0; Ae < L.length; Ae++) {
        we = L[Ae];
        var Ue = me + Ye(we, Ae);
        ke += tt(we, W, he, Ue, Re);
      }
    else if (Ue = U(L), typeof Ue == "function")
      for (L = Ue.call(L), Ae = 0; !(we = L.next()).done; )
        we = we.value, Ue = me + Ye(we, Ae++), ke += tt(we, W, he, Ue, Re);
    else if (we === "object")
      throw W = String(L), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function Ot(L, W, he) {
    if (L == null)
      return L;
    var me = [], Re = 0;
    return tt(L, me, "", "", function(we) {
      return W.call(he, we, Re++);
    }), me;
  }
  function at(L) {
    if (L._status === -1) {
      var W = L._result;
      W = W(), W.then(function(he) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = he);
      }, function(he) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = he);
      }), L._status === -1 && (L._status = 0, L._result = W);
    }
    if (L._status === 1)
      return L._result.default;
    throw L._result;
  }
  var Oe = { current: null }, se = { transition: null }, Ve = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: se, ReactCurrentOwner: _e };
  function I() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $t.Children = { map: Ot, forEach: function(L, W, he) {
    Ot(L, function() {
      W.apply(this, arguments);
    }, he);
  }, count: function(L) {
    var W = 0;
    return Ot(L, function() {
      W++;
    }), W;
  }, toArray: function(L) {
    return Ot(L, function(W) {
      return W;
    }) || [];
  }, only: function(L) {
    if (!xt(L))
      throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, $t.Component = Q, $t.Fragment = f, $t.Profiler = m, $t.PureComponent = ie, $t.StrictMode = p, $t.Suspense = b, $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, $t.act = I, $t.cloneElement = function(L, W, he) {
    if (L == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var me = B({}, L.props), Re = L.key, we = L.ref, ke = L._owner;
    if (W != null) {
      if (W.ref !== void 0 && (we = W.ref, ke = _e.current), W.key !== void 0 && (Re = "" + W.key), L.type && L.type.defaultProps)
        var Ae = L.type.defaultProps;
      for (Ue in W)
        J.call(W, Ue) && !Me.hasOwnProperty(Ue) && (me[Ue] = W[Ue] === void 0 && Ae !== void 0 ? Ae[Ue] : W[Ue]);
    }
    var Ue = arguments.length - 2;
    if (Ue === 1)
      me.children = he;
    else if (1 < Ue) {
      Ae = Array(Ue);
      for (var Ie = 0; Ie < Ue; Ie++)
        Ae[Ie] = arguments[Ie + 2];
      me.children = Ae;
    }
    return { $$typeof: l, type: L.type, key: Re, ref: we, props: me, _owner: ke };
  }, $t.createContext = function(L) {
    return L = { $$typeof: v, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: g, _context: L }, L.Consumer = L;
  }, $t.createElement = vt, $t.createFactory = function(L) {
    var W = vt.bind(null, L);
    return W.type = L, W;
  }, $t.createRef = function() {
    return { current: null };
  }, $t.forwardRef = function(L) {
    return { $$typeof: x, render: L };
  }, $t.isValidElement = xt, $t.lazy = function(L) {
    return { $$typeof: k, _payload: { _status: -1, _result: L }, _init: at };
  }, $t.memo = function(L, W) {
    return { $$typeof: w, type: L, compare: W === void 0 ? null : W };
  }, $t.startTransition = function(L) {
    var W = se.transition;
    se.transition = {};
    try {
      L();
    } finally {
      se.transition = W;
    }
  }, $t.unstable_act = I, $t.useCallback = function(L, W) {
    return Oe.current.useCallback(L, W);
  }, $t.useContext = function(L) {
    return Oe.current.useContext(L);
  }, $t.useDebugValue = function() {
  }, $t.useDeferredValue = function(L) {
    return Oe.current.useDeferredValue(L);
  }, $t.useEffect = function(L, W) {
    return Oe.current.useEffect(L, W);
  }, $t.useId = function() {
    return Oe.current.useId();
  }, $t.useImperativeHandle = function(L, W, he) {
    return Oe.current.useImperativeHandle(L, W, he);
  }, $t.useInsertionEffect = function(L, W) {
    return Oe.current.useInsertionEffect(L, W);
  }, $t.useLayoutEffect = function(L, W) {
    return Oe.current.useLayoutEffect(L, W);
  }, $t.useMemo = function(L, W) {
    return Oe.current.useMemo(L, W);
  }, $t.useReducer = function(L, W, he) {
    return Oe.current.useReducer(L, W, he);
  }, $t.useRef = function(L) {
    return Oe.current.useRef(L);
  }, $t.useState = function(L) {
    return Oe.current.useState(L);
  }, $t.useSyncExternalStore = function(L, W, he) {
    return Oe.current.useSyncExternalStore(L, W, he);
  }, $t.useTransition = function() {
    return Oe.current.useTransition();
  }, $t.version = "18.3.1", $t;
}
var Hv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Hv.exports;
var jb;
function fM() {
  return jb || (jb = 1, function(l, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = "18.3.1", p = Symbol.for("react.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Q = Symbol.iterator, pe = "@@iterator";
      function ie(R) {
        if (R === null || typeof R != "object")
          return null;
        var A = Q && R[Q] || R[pe];
        return typeof A == "function" ? A : null;
      }
      var ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, J = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Me = {}, vt = null;
      function Wt(R) {
        vt = R;
      }
      Me.setExtraStackFrame = function(R) {
        vt = R;
      }, Me.getCurrentStack = null, Me.getStackAddendum = function() {
        var R = "";
        vt && (R += vt);
        var A = Me.getCurrentStack;
        return A && (R += A() || ""), R;
      };
      var xt = !1, gt = !1, Kt = !1, Ye = !1, tt = !1, Ot = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: _e
      };
      Ot.ReactDebugCurrentFrame = Me, Ot.ReactCurrentActQueue = J;
      function at(R) {
        {
          for (var A = arguments.length, ee = new Array(A > 1 ? A - 1 : 0), re = 1; re < A; re++)
            ee[re - 1] = arguments[re];
          se("warn", R, ee);
        }
      }
      function Oe(R) {
        {
          for (var A = arguments.length, ee = new Array(A > 1 ? A - 1 : 0), re = 1; re < A; re++)
            ee[re - 1] = arguments[re];
          se("error", R, ee);
        }
      }
      function se(R, A, ee) {
        {
          var re = Ot.ReactDebugCurrentFrame, Te = re.getStackAddendum();
          Te !== "" && (A += "%s", ee = ee.concat([Te]));
          var st = ee.map(function(je) {
            return String(je);
          });
          st.unshift("Warning: " + A), Function.prototype.apply.call(console[R], console, st);
        }
      }
      var Ve = {};
      function I(R, A) {
        {
          var ee = R.constructor, re = ee && (ee.displayName || ee.name) || "ReactClass", Te = re + "." + A;
          if (Ve[Te])
            return;
          Oe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", A, re), Ve[Te] = !0;
        }
      }
      var L = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(R) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(R, A, ee) {
          I(R, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(R, A, ee, re) {
          I(R, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(R, A, ee, re) {
          I(R, "setState");
        }
      }, W = Object.assign, he = {};
      Object.freeze(he);
      function me(R, A, ee) {
        this.props = R, this.context = A, this.refs = he, this.updater = ee || L;
      }
      me.prototype.isReactComponent = {}, me.prototype.setState = function(R, A) {
        if (typeof R != "object" && typeof R != "function" && R != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, A, "setState");
      }, me.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate");
      };
      {
        var Re = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, we = function(R, A) {
          Object.defineProperty(me.prototype, R, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", A[0], A[1]);
            }
          });
        };
        for (var ke in Re)
          Re.hasOwnProperty(ke) && we(ke, Re[ke]);
      }
      function Ae() {
      }
      Ae.prototype = me.prototype;
      function Ue(R, A, ee) {
        this.props = R, this.context = A, this.refs = he, this.updater = ee || L;
      }
      var Ie = Ue.prototype = new Ae();
      Ie.constructor = Ue, W(Ie, me.prototype), Ie.isPureReactComponent = !0;
      function Pt() {
        var R = {
          current: null
        };
        return Object.seal(R), R;
      }
      var xe = Array.isArray;
      function Lt(R) {
        return xe(R);
      }
      function rn(R) {
        {
          var A = typeof Symbol == "function" && Symbol.toStringTag, ee = A && R[Symbol.toStringTag] || R.constructor.name || "Object";
          return ee;
        }
      }
      function yt(R) {
        try {
          return bn(R), !1;
        } catch {
          return !0;
        }
      }
      function bn(R) {
        return "" + R;
      }
      function gn(R) {
        if (yt(R))
          return Oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(R)), bn(R);
      }
      function Nr(R, A, ee) {
        var re = R.displayName;
        if (re)
          return re;
        var Te = A.displayName || A.name || "";
        return Te !== "" ? ee + "(" + Te + ")" : ee;
      }
      function Lr(R) {
        return R.displayName || "Context";
      }
      function Qn(R) {
        if (R == null)
          return null;
        if (typeof R.tag == "number" && Oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
          return R.displayName || R.name || null;
        if (typeof R == "string")
          return R;
        switch (R) {
          case g:
            return "Fragment";
          case m:
            return "Portal";
          case x:
            return "Profiler";
          case v:
            return "StrictMode";
          case O:
            return "Suspense";
          case U:
            return "SuspenseList";
        }
        if (typeof R == "object")
          switch (R.$$typeof) {
            case w:
              var A = R;
              return Lr(A) + ".Consumer";
            case b:
              var ee = R;
              return Lr(ee._context) + ".Provider";
            case k:
              return Nr(R, R.render, "ForwardRef");
            case V:
              var re = R.displayName || null;
              return re !== null ? re : Qn(R.type) || "Memo";
            case B: {
              var Te = R, st = Te._payload, je = Te._init;
              try {
                return Qn(je(st));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ur = Object.prototype.hasOwnProperty, Mr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, Ar, tr;
      tr = {};
      function Ct(R) {
        if (ur.call(R, "ref")) {
          var A = Object.getOwnPropertyDescriptor(R, "ref").get;
          if (A && A.isReactWarning)
            return !1;
        }
        return R.ref !== void 0;
      }
      function an(R) {
        if (ur.call(R, "key")) {
          var A = Object.getOwnPropertyDescriptor(R, "key").get;
          if (A && A.isReactWarning)
            return !1;
        }
        return R.key !== void 0;
      }
      function cr(R, A) {
        var ee = function() {
          sr || (sr = !0, Oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        ee.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ee,
          configurable: !0
        });
      }
      function Ri(R, A) {
        var ee = function() {
          Ar || (Ar = !0, Oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        ee.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ee,
          configurable: !0
        });
      }
      function Ta(R) {
        if (typeof R.ref == "string" && _e.current && R.__self && _e.current.stateNode !== R.__self) {
          var A = Qn(_e.current.type);
          tr[A] || (Oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A, R.ref), tr[A] = !0);
        }
      }
      var De = function(R, A, ee, re, Te, st, je) {
        var lt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: R,
          key: A,
          ref: ee,
          props: je,
          // Record the component responsible for creating this element.
          _owner: st
        };
        return lt._store = {}, Object.defineProperty(lt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(lt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.defineProperty(lt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Te
        }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
      };
      function nt(R, A, ee) {
        var re, Te = {}, st = null, je = null, lt = null, Mt = null;
        if (A != null) {
          Ct(A) && (je = A.ref, Ta(A)), an(A) && (gn(A.key), st = "" + A.key), lt = A.__self === void 0 ? null : A.__self, Mt = A.__source === void 0 ? null : A.__source;
          for (re in A)
            ur.call(A, re) && !Mr.hasOwnProperty(re) && (Te[re] = A[re]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          Te.children = ee;
        else if (qt > 1) {
          for (var En = Array(qt), pn = 0; pn < qt; pn++)
            En[pn] = arguments[pn + 2];
          Object.freeze && Object.freeze(En), Te.children = En;
        }
        if (R && R.defaultProps) {
          var Cn = R.defaultProps;
          for (re in Cn)
            Te[re] === void 0 && (Te[re] = Cn[re]);
        }
        if (st || je) {
          var Tn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && cr(Te, Tn), je && Ri(Te, Tn);
        }
        return De(R, st, je, lt, Mt, _e.current, Te);
      }
      function Dt(R, A) {
        var ee = De(R.type, A, R.ref, R._self, R._source, R._owner, R.props);
        return ee;
      }
      function tn(R, A, ee) {
        if (R == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var re, Te = W({}, R.props), st = R.key, je = R.ref, lt = R._self, Mt = R._source, qt = R._owner;
        if (A != null) {
          Ct(A) && (je = A.ref, qt = _e.current), an(A) && (gn(A.key), st = "" + A.key);
          var En;
          R.type && R.type.defaultProps && (En = R.type.defaultProps);
          for (re in A)
            ur.call(A, re) && !Mr.hasOwnProperty(re) && (A[re] === void 0 && En !== void 0 ? Te[re] = En[re] : Te[re] = A[re]);
        }
        var pn = arguments.length - 2;
        if (pn === 1)
          Te.children = ee;
        else if (pn > 1) {
          for (var Cn = Array(pn), Tn = 0; Tn < pn; Tn++)
            Cn[Tn] = arguments[Tn + 2];
          Te.children = Cn;
        }
        return De(R.type, st, je, lt, Mt, qt, Te);
      }
      function on(R) {
        return typeof R == "object" && R !== null && R.$$typeof === p;
      }
      var In = ".", An = ":";
      function Ur(R) {
        var A = /[=:]/g, ee = {
          "=": "=0",
          ":": "=2"
        }, re = R.replace(A, function(Te) {
          return ee[Te];
        });
        return "$" + re;
      }
      var dn = !1, Vr = /\/+/g;
      function ln(R) {
        return R.replace(Vr, "$&/");
      }
      function un(R, A) {
        return typeof R == "object" && R !== null && R.key != null ? (gn(R.key), Ur("" + R.key)) : A.toString(36);
      }
      function ci(R, A, ee, re, Te) {
        var st = typeof R;
        (st === "undefined" || st === "boolean") && (R = null);
        var je = !1;
        if (R === null)
          je = !0;
        else
          switch (st) {
            case "string":
            case "number":
              je = !0;
              break;
            case "object":
              switch (R.$$typeof) {
                case p:
                case m:
                  je = !0;
              }
          }
        if (je) {
          var lt = R, Mt = Te(lt), qt = re === "" ? In + un(lt, 0) : re;
          if (Lt(Mt)) {
            var En = "";
            qt != null && (En = ln(qt) + "/"), ci(Mt, A, En, "", function(Ad) {
              return Ad;
            });
          } else
            Mt != null && (on(Mt) && (Mt.key && (!lt || lt.key !== Mt.key) && gn(Mt.key), Mt = Dt(
              Mt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              ee + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Mt.key && (!lt || lt.key !== Mt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ln("" + Mt.key) + "/"
              ) : "") + qt
            )), A.push(Mt));
          return 1;
        }
        var pn, Cn, Tn = 0, Vt = re === "" ? In : re + An;
        if (Lt(R))
          for (var Qi = 0; Qi < R.length; Qi++)
            pn = R[Qi], Cn = Vt + un(pn, Qi), Tn += ci(pn, A, ee, Cn, Te);
        else {
          var hu = ie(R);
          if (typeof hu == "function") {
            var xs = R;
            hu === xs.entries && (dn || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), dn = !0);
            for (var Md = hu.call(xs), vi, bs = 0; !(vi = Md.next()).done; )
              pn = vi.value, Cn = Vt + un(pn, bs++), Tn += ci(pn, A, ee, Cn, Te);
          } else if (st === "object") {
            var ws = String(R);
            throw new Error("Objects are not valid as a React child (found: " + (ws === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : ws) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Tn;
      }
      function Fa(R, A, ee) {
        if (R == null)
          return R;
        var re = [], Te = 0;
        return ci(R, re, "", "", function(st) {
          return A.call(ee, st, Te++);
        }), re;
      }
      function bo(R) {
        var A = 0;
        return Fa(R, function() {
          A++;
        }), A;
      }
      function dl(R, A, ee) {
        Fa(R, function() {
          A.apply(this, arguments);
        }, ee);
      }
      function au(R) {
        return Fa(R, function(A) {
          return A;
        }) || [];
      }
      function Yi(R) {
        if (!on(R))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return R;
      }
      function wo(R) {
        var A = {
          $$typeof: w,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: R,
          _currentValue2: R,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        A.Provider = {
          $$typeof: b,
          _context: A
        };
        var ee = !1, re = !1, Te = !1;
        {
          var st = {
            $$typeof: w,
            _context: A
          };
          Object.defineProperties(st, {
            Provider: {
              get: function() {
                return re || (re = !0, Oe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), A.Provider;
              },
              set: function(je) {
                A.Provider = je;
              }
            },
            _currentValue: {
              get: function() {
                return A._currentValue;
              },
              set: function(je) {
                A._currentValue = je;
              }
            },
            _currentValue2: {
              get: function() {
                return A._currentValue2;
              },
              set: function(je) {
                A._currentValue2 = je;
              }
            },
            _threadCount: {
              get: function() {
                return A._threadCount;
              },
              set: function(je) {
                A._threadCount = je;
              }
            },
            Consumer: {
              get: function() {
                return ee || (ee = !0, Oe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), A.Consumer;
              }
            },
            displayName: {
              get: function() {
                return A.displayName;
              },
              set: function(je) {
                Te || (at("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", je), Te = !0);
              }
            }
          }), A.Consumer = st;
        }
        return A._currentRenderer = null, A._currentRenderer2 = null, A;
      }
      var xa = -1, Ti = 0, ba = 1, fi = 2;
      function $r(R) {
        if (R._status === xa) {
          var A = R._result, ee = A();
          if (ee.then(function(st) {
            if (R._status === Ti || R._status === xa) {
              var je = R;
              je._status = ba, je._result = st;
            }
          }, function(st) {
            if (R._status === Ti || R._status === xa) {
              var je = R;
              je._status = fi, je._result = st;
            }
          }), R._status === xa) {
            var re = R;
            re._status = Ti, re._result = ee;
          }
        }
        if (R._status === ba) {
          var Te = R._result;
          return Te === void 0 && Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Te), "default" in Te || Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Te), Te.default;
        } else
          throw R._result;
      }
      function wa(R) {
        var A = {
          // We use these fields to store the result.
          _status: xa,
          _result: R
        }, ee = {
          $$typeof: B,
          _payload: A,
          _init: $r
        };
        {
          var re, Te;
          Object.defineProperties(ee, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(st) {
                Oe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = st, Object.defineProperty(ee, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Te;
              },
              set: function(st) {
                Oe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Te = st, Object.defineProperty(ee, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return ee;
      }
      function xi(R) {
        R != null && R.$$typeof === V ? Oe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof R != "function" ? Oe("forwardRef requires a render function but was given %s.", R === null ? "null" : typeof R) : R.length !== 0 && R.length !== 2 && Oe("forwardRef render functions accept exactly two parameters: props and ref. %s", R.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), R != null && (R.defaultProps != null || R.propTypes != null) && Oe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var A = {
          $$typeof: k,
          render: R
        };
        {
          var ee;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(re) {
              ee = re, !R.name && !R.displayName && (R.displayName = re);
            }
          });
        }
        return A;
      }
      var bi;
      bi = Symbol.for("react.module.reference");
      function j(R) {
        return !!(typeof R == "string" || typeof R == "function" || R === g || R === x || tt || R === v || R === O || R === U || Ye || R === $ || xt || gt || Kt || typeof R == "object" && R !== null && (R.$$typeof === B || R.$$typeof === V || R.$$typeof === b || R.$$typeof === w || R.$$typeof === k || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        R.$$typeof === bi || R.getModuleId !== void 0));
      }
      function ye(R, A) {
        j(R) || Oe("memo: The first argument must be a component. Instead received: %s", R === null ? "null" : typeof R);
        var ee = {
          $$typeof: V,
          type: R,
          compare: A === void 0 ? null : A
        };
        {
          var re;
          Object.defineProperty(ee, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return re;
            },
            set: function(Te) {
              re = Te, !R.name && !R.displayName && (R.displayName = Te);
            }
          });
        }
        return ee;
      }
      function Ce() {
        var R = ae.current;
        return R === null && Oe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), R;
      }
      function Je(R) {
        var A = Ce();
        if (R._context !== void 0) {
          var ee = R._context;
          ee.Consumer === R ? Oe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : ee.Provider === R && Oe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return A.useContext(R);
      }
      function Ut(R) {
        var A = Ce();
        return A.useState(R);
      }
      function Ht(R, A, ee) {
        var re = Ce();
        return re.useReducer(R, A, ee);
      }
      function ut(R) {
        var A = Ce();
        return A.useRef(R);
      }
      function kt(R, A) {
        var ee = Ce();
        return ee.useEffect(R, A);
      }
      function Gn(R, A) {
        var ee = Ce();
        return ee.useInsertionEffect(R, A);
      }
      function Sn(R, A) {
        var ee = Ce();
        return ee.useLayoutEffect(R, A);
      }
      function wn(R, A) {
        var ee = Ce();
        return ee.useCallback(R, A);
      }
      function jr(R, A) {
        var ee = Ce();
        return ee.useMemo(R, A);
      }
      function wi(R, A, ee) {
        var re = Ce();
        return re.useImperativeHandle(R, A, ee);
      }
      function Qt(R, A) {
        {
          var ee = Ce();
          return ee.useDebugValue(R, A);
        }
      }
      function fr() {
        var R = Ce();
        return R.useTransition();
      }
      function Ir(R) {
        var A = Ce();
        return A.useDeferredValue(R);
      }
      function Nt() {
        var R = Ce();
        return R.useId();
      }
      function Pa(R, A, ee) {
        var re = Ce();
        return re.useSyncExternalStore(R, A, ee);
      }
      var _o = 0, iu, Oo, aa, Es, Yr, Cs, Rs;
      function Nc() {
      }
      Nc.__reactDisabledLog = !0;
      function ou() {
        {
          if (_o === 0) {
            iu = console.log, Oo = console.info, aa = console.warn, Es = console.error, Yr = console.group, Cs = console.groupCollapsed, Rs = console.groupEnd;
            var R = {
              configurable: !0,
              enumerable: !0,
              value: Nc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: R,
              log: R,
              warn: R,
              error: R,
              group: R,
              groupCollapsed: R,
              groupEnd: R
            });
          }
          _o++;
        }
      }
      function Do() {
        {
          if (_o--, _o === 0) {
            var R = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: W({}, R, {
                value: iu
              }),
              info: W({}, R, {
                value: Oo
              }),
              warn: W({}, R, {
                value: aa
              }),
              error: W({}, R, {
                value: Es
              }),
              group: W({}, R, {
                value: Yr
              }),
              groupCollapsed: W({}, R, {
                value: Cs
              }),
              groupEnd: W({}, R, {
                value: Rs
              })
            });
          }
          _o < 0 && Oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = Ot.ReactCurrentDispatcher, Wr;
      function ko(R, A, ee) {
        {
          if (Wr === void 0)
            try {
              throw Error();
            } catch (Te) {
              var re = Te.stack.trim().match(/\n( *(at )?)/);
              Wr = re && re[1] || "";
            }
          return `
` + Wr + R;
        }
      }
      var No = !1, Lo;
      {
        var lu = typeof WeakMap == "function" ? WeakMap : Map;
        Lo = new lu();
      }
      function uu(R, A) {
        if (!R || No)
          return "";
        {
          var ee = Lo.get(R);
          if (ee !== void 0)
            return ee;
        }
        var re;
        No = !0;
        var Te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var st;
        st = di.current, di.current = null, ou();
        try {
          if (A) {
            var je = function() {
              throw Error();
            };
            if (Object.defineProperty(je.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(je, []);
              } catch (Vt) {
                re = Vt;
              }
              Reflect.construct(R, [], je);
            } else {
              try {
                je.call();
              } catch (Vt) {
                re = Vt;
              }
              R.call(je.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Vt) {
              re = Vt;
            }
            R();
          }
        } catch (Vt) {
          if (Vt && re && typeof Vt.stack == "string") {
            for (var lt = Vt.stack.split(`
`), Mt = re.stack.split(`
`), qt = lt.length - 1, En = Mt.length - 1; qt >= 1 && En >= 0 && lt[qt] !== Mt[En]; )
              En--;
            for (; qt >= 1 && En >= 0; qt--, En--)
              if (lt[qt] !== Mt[En]) {
                if (qt !== 1 || En !== 1)
                  do
                    if (qt--, En--, En < 0 || lt[qt] !== Mt[En]) {
                      var pn = `
` + lt[qt].replace(" at new ", " at ");
                      return R.displayName && pn.includes("<anonymous>") && (pn = pn.replace("<anonymous>", R.displayName)), typeof R == "function" && Lo.set(R, pn), pn;
                    }
                  while (qt >= 1 && En >= 0);
                break;
              }
          }
        } finally {
          No = !1, di.current = st, Do(), Error.prepareStackTrace = Te;
        }
        var Cn = R ? R.displayName || R.name : "", Tn = Cn ? ko(Cn) : "";
        return typeof R == "function" && Lo.set(R, Tn), Tn;
      }
      function Wi(R, A, ee) {
        return uu(R, !1);
      }
      function Ld(R) {
        var A = R.prototype;
        return !!(A && A.isReactComponent);
      }
      function _i(R, A, ee) {
        if (R == null)
          return "";
        if (typeof R == "function")
          return uu(R, Ld(R));
        if (typeof R == "string")
          return ko(R);
        switch (R) {
          case O:
            return ko("Suspense");
          case U:
            return ko("SuspenseList");
        }
        if (typeof R == "object")
          switch (R.$$typeof) {
            case k:
              return Wi(R.render);
            case V:
              return _i(R.type, A, ee);
            case B: {
              var re = R, Te = re._payload, st = re._init;
              try {
                return _i(st(Te), A, ee);
              } catch {
              }
            }
          }
        return "";
      }
      var Gt = {}, su = Ot.ReactDebugCurrentFrame;
      function pl(R) {
        if (R) {
          var A = R._owner, ee = _i(R.type, R._source, A ? A.type : null);
          su.setExtraStackFrame(ee);
        } else
          su.setExtraStackFrame(null);
      }
      function cu(R, A, ee, re, Te) {
        {
          var st = Function.call.bind(ur);
          for (var je in R)
            if (st(R, je)) {
              var lt = void 0;
              try {
                if (typeof R[je] != "function") {
                  var Mt = Error((re || "React class") + ": " + ee + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Mt.name = "Invariant Violation", Mt;
                }
                lt = R[je](A, je, re, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (qt) {
                lt = qt;
              }
              lt && !(lt instanceof Error) && (pl(Te), Oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", ee, je, typeof lt), pl(null)), lt instanceof Error && !(lt.message in Gt) && (Gt[lt.message] = !0, pl(Te), Oe("Failed %s type: %s", ee, lt.message), pl(null));
            }
        }
      }
      function Bt(R) {
        if (R) {
          var A = R._owner, ee = _i(R.type, R._source, A ? A.type : null);
          Wt(ee);
        } else
          Wt(null);
      }
      var fu;
      fu = !1;
      function du() {
        if (_e.current) {
          var R = Qn(_e.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
      function St(R) {
        if (R !== void 0) {
          var A = R.fileName.replace(/^.*[\\\/]/, ""), ee = R.lineNumber;
          return `

Check your code at ` + A + ":" + ee + ".";
        }
        return "";
      }
      function vl(R) {
        return R != null ? St(R.__source) : "";
      }
      var Un = {};
      function ia(R) {
        var A = du();
        if (!A) {
          var ee = typeof R == "string" ? R : R.displayName || R.name;
          ee && (A = `

Check the top-level render call using <` + ee + ">.");
        }
        return A;
      }
      function qr(R, A) {
        if (!(!R._store || R._store.validated || R.key != null)) {
          R._store.validated = !0;
          var ee = ia(A);
          if (!Un[ee]) {
            Un[ee] = !0;
            var re = "";
            R && R._owner && R._owner !== _e.current && (re = " It was passed a child from " + Qn(R._owner.type) + "."), Bt(R), Oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, re), Bt(null);
          }
        }
      }
      function Mo(R, A) {
        if (typeof R == "object") {
          if (Lt(R))
            for (var ee = 0; ee < R.length; ee++) {
              var re = R[ee];
              on(re) && qr(re, A);
            }
          else if (on(R))
            R._store && (R._store.validated = !0);
          else if (R) {
            var Te = ie(R);
            if (typeof Te == "function" && Te !== R.entries)
              for (var st = Te.call(R), je; !(je = st.next()).done; )
                on(je.value) && qr(je.value, A);
          }
        }
      }
      function Pn(R) {
        {
          var A = R.type;
          if (A == null || typeof A == "string")
            return;
          var ee;
          if (typeof A == "function")
            ee = A.propTypes;
          else if (typeof A == "object" && (A.$$typeof === k || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          A.$$typeof === V))
            ee = A.propTypes;
          else
            return;
          if (ee) {
            var re = Qn(A);
            cu(ee, R.props, "prop", re, R);
          } else if (A.PropTypes !== void 0 && !fu) {
            fu = !0;
            var Te = Qn(A);
            Oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
          }
          typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && Oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function sn(R) {
        {
          for (var A = Object.keys(R.props), ee = 0; ee < A.length; ee++) {
            var re = A[ee];
            if (re !== "children" && re !== "key") {
              Bt(R), Oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Bt(null);
              break;
            }
          }
          R.ref !== null && (Bt(R), Oe("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
        }
      }
      function Lc(R, A, ee) {
        var re = j(R);
        if (!re) {
          var Te = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = vl(A);
          st ? Te += st : Te += du();
          var je;
          R === null ? je = "null" : Lt(R) ? je = "array" : R !== void 0 && R.$$typeof === p ? (je = "<" + (Qn(R.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : je = typeof R, Oe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, Te);
        }
        var lt = nt.apply(this, arguments);
        if (lt == null)
          return lt;
        if (re)
          for (var Mt = 2; Mt < arguments.length; Mt++)
            Mo(arguments[Mt], R);
        return R === g ? sn(lt) : Pn(lt), lt;
      }
      var oa = !1;
      function dr(R) {
        var A = Lc.bind(null, R);
        return A.type = R, oa || (oa = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(A, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: R
            }), R;
          }
        }), A;
      }
      function Oi(R, A, ee) {
        for (var re = tn.apply(this, arguments), Te = 2; Te < arguments.length; Te++)
          Mo(arguments[Te], re.type);
        return Pn(re), re;
      }
      function Mc(R, A) {
        var ee = ce.transition;
        ce.transition = {};
        var re = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          R();
        } finally {
          if (ce.transition = ee, ee === null && re._updatedFibers) {
            var Te = re._updatedFibers.size;
            Te > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), re._updatedFibers.clear();
          }
        }
      }
      var qi = !1, Ao = null;
      function Ac(R) {
        if (Ao === null)
          try {
            var A = ("require" + Math.random()).slice(0, 7), ee = l && l[A];
            Ao = ee.call(l, "timers").setImmediate;
          } catch {
            Ao = function(Te) {
              qi === !1 && (qi = !0, typeof MessageChannel > "u" && Oe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var st = new MessageChannel();
              st.port1.onmessage = Te, st.port2.postMessage(void 0);
            };
          }
        return Ao(R);
      }
      var Ha = 0, Uo = !1;
      function Ki(R) {
        {
          var A = Ha;
          Ha++, J.current === null && (J.current = []);
          var ee = J.isBatchingLegacy, re;
          try {
            if (J.isBatchingLegacy = !0, re = R(), !ee && J.didScheduleLegacyUpdate) {
              var Te = J.current;
              Te !== null && (J.didScheduleLegacyUpdate = !1, zo(Te));
            }
          } catch (Cn) {
            throw Ba(A), Cn;
          } finally {
            J.isBatchingLegacy = ee;
          }
          if (re !== null && typeof re == "object" && typeof re.then == "function") {
            var st = re, je = !1, lt = {
              then: function(Cn, Tn) {
                je = !0, st.then(function(Vt) {
                  Ba(A), Ha === 0 ? pu(Vt, Cn, Tn) : Cn(Vt);
                }, function(Vt) {
                  Ba(A), Tn(Vt);
                });
              }
            };
            return !Uo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              je || (Uo = !0, Oe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), lt;
          } else {
            var Mt = re;
            if (Ba(A), Ha === 0) {
              var qt = J.current;
              qt !== null && (zo(qt), J.current = null);
              var En = {
                then: function(Cn, Tn) {
                  J.current === null ? (J.current = [], pu(Mt, Cn, Tn)) : Cn(Mt);
                }
              };
              return En;
            } else {
              var pn = {
                then: function(Cn, Tn) {
                  Cn(Mt);
                }
              };
              return pn;
            }
          }
        }
      }
      function Ba(R) {
        R !== Ha - 1 && Oe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ha = R;
      }
      function pu(R, A, ee) {
        {
          var re = J.current;
          if (re !== null)
            try {
              zo(re), Ac(function() {
                re.length === 0 ? (J.current = null, A(R)) : pu(R, A, ee);
              });
            } catch (Te) {
              ee(Te);
            }
          else
            A(R);
        }
      }
      var jo = !1;
      function zo(R) {
        if (!jo) {
          jo = !0;
          var A = 0;
          try {
            for (; A < R.length; A++) {
              var ee = R[A];
              do
                ee = ee(!0);
              while (ee !== null);
            }
            R.length = 0;
          } catch (re) {
            throw R = R.slice(A + 1), re;
          } finally {
            jo = !1;
          }
        }
      }
      var hl = Lc, vu = Oi, Ts = dr, pi = {
        map: Fa,
        forEach: dl,
        count: bo,
        toArray: au,
        only: Yi
      };
      s.Children = pi, s.Component = me, s.Fragment = g, s.Profiler = x, s.PureComponent = Ue, s.StrictMode = v, s.Suspense = O, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ot, s.act = Ki, s.cloneElement = vu, s.createContext = wo, s.createElement = hl, s.createFactory = Ts, s.createRef = Pt, s.forwardRef = xi, s.isValidElement = on, s.lazy = wa, s.memo = ye, s.startTransition = Mc, s.unstable_act = Ki, s.useCallback = wn, s.useContext = Je, s.useDebugValue = Qt, s.useDeferredValue = Ir, s.useEffect = kt, s.useId = Nt, s.useImperativeHandle = wi, s.useInsertionEffect = Gn, s.useLayoutEffect = Sn, s.useMemo = jr, s.useReducer = Ht, s.useRef = ut, s.useState = Ut, s.useSyncExternalStore = Pa, s.useTransition = fr, s.version = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Hv, Hv.exports)), Hv.exports;
}
process.env.NODE_ENV === "production" ? oC.exports = cM() : oC.exports = fM();
var N = oC.exports;
const To = /* @__PURE__ */ Qv(N), dM = /* @__PURE__ */ sM({
  __proto__: null,
  default: To
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zb;
function pM() {
  if (zb)
    return Uv;
  zb = 1;
  var l = N, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(x, b, w) {
    var k, O = {}, U = null, V = null;
    w !== void 0 && (U = "" + w), b.key !== void 0 && (U = "" + b.key), b.ref !== void 0 && (V = b.ref);
    for (k in b)
      p.call(b, k) && !g.hasOwnProperty(k) && (O[k] = b[k]);
    if (x && x.defaultProps)
      for (k in b = x.defaultProps, b)
        O[k] === void 0 && (O[k] = b[k]);
    return { $$typeof: s, type: x, key: U, ref: V, props: O, _owner: m.current };
  }
  return Uv.Fragment = f, Uv.jsx = v, Uv.jsxs = v, Uv;
}
var jv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fb;
function vM() {
  return Fb || (Fb = 1, process.env.NODE_ENV !== "production" && function() {
    var l = N, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), x = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), B = Symbol.iterator, $ = "@@iterator";
    function Q(j) {
      if (j === null || typeof j != "object")
        return null;
      var ye = B && j[B] || j[$];
      return typeof ye == "function" ? ye : null;
    }
    var pe = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ie(j) {
      {
        for (var ye = arguments.length, Ce = new Array(ye > 1 ? ye - 1 : 0), Je = 1; Je < ye; Je++)
          Ce[Je - 1] = arguments[Je];
        ae("error", j, Ce);
      }
    }
    function ae(j, ye, Ce) {
      {
        var Je = pe.ReactDebugCurrentFrame, Ut = Je.getStackAddendum();
        Ut !== "" && (ye += "%s", Ce = Ce.concat([Ut]));
        var Ht = Ce.map(function(ut) {
          return String(ut);
        });
        Ht.unshift("Warning: " + ye), Function.prototype.apply.call(console[j], console, Ht);
      }
    }
    var ce = !1, J = !1, _e = !1, Me = !1, vt = !1, Wt;
    Wt = Symbol.for("react.module.reference");
    function xt(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === p || j === g || vt || j === m || j === w || j === k || Me || j === V || ce || J || _e || typeof j == "object" && j !== null && (j.$$typeof === U || j.$$typeof === O || j.$$typeof === v || j.$$typeof === x || j.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === Wt || j.getModuleId !== void 0));
    }
    function gt(j, ye, Ce) {
      var Je = j.displayName;
      if (Je)
        return Je;
      var Ut = ye.displayName || ye.name || "";
      return Ut !== "" ? Ce + "(" + Ut + ")" : Ce;
    }
    function Kt(j) {
      return j.displayName || "Context";
    }
    function Ye(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case p:
          return "Fragment";
        case f:
          return "Portal";
        case g:
          return "Profiler";
        case m:
          return "StrictMode";
        case w:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case x:
            var ye = j;
            return Kt(ye) + ".Consumer";
          case v:
            var Ce = j;
            return Kt(Ce._context) + ".Provider";
          case b:
            return gt(j, j.render, "ForwardRef");
          case O:
            var Je = j.displayName || null;
            return Je !== null ? Je : Ye(j.type) || "Memo";
          case U: {
            var Ut = j, Ht = Ut._payload, ut = Ut._init;
            try {
              return Ye(ut(Ht));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, Ot = 0, at, Oe, se, Ve, I, L, W;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function me() {
      {
        if (Ot === 0) {
          at = console.log, Oe = console.info, se = console.warn, Ve = console.error, I = console.group, L = console.groupCollapsed, W = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        Ot++;
      }
    }
    function Re() {
      {
        if (Ot--, Ot === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, j, {
              value: at
            }),
            info: tt({}, j, {
              value: Oe
            }),
            warn: tt({}, j, {
              value: se
            }),
            error: tt({}, j, {
              value: Ve
            }),
            group: tt({}, j, {
              value: I
            }),
            groupCollapsed: tt({}, j, {
              value: L
            }),
            groupEnd: tt({}, j, {
              value: W
            })
          });
        }
        Ot < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = pe.ReactCurrentDispatcher, ke;
    function Ae(j, ye, Ce) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (Ut) {
            var Je = Ut.stack.trim().match(/\n( *(at )?)/);
            ke = Je && Je[1] || "";
          }
        return `
` + ke + j;
      }
    }
    var Ue = !1, Ie;
    {
      var Pt = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new Pt();
    }
    function xe(j, ye) {
      if (!j || Ue)
        return "";
      {
        var Ce = Ie.get(j);
        if (Ce !== void 0)
          return Ce;
      }
      var Je;
      Ue = !0;
      var Ut = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ht;
      Ht = we.current, we.current = null, me();
      try {
        if (ye) {
          var ut = function() {
            throw Error();
          };
          if (Object.defineProperty(ut.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ut, []);
            } catch (fr) {
              Je = fr;
            }
            Reflect.construct(j, [], ut);
          } else {
            try {
              ut.call();
            } catch (fr) {
              Je = fr;
            }
            j.call(ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fr) {
            Je = fr;
          }
          j();
        }
      } catch (fr) {
        if (fr && Je && typeof fr.stack == "string") {
          for (var kt = fr.stack.split(`
`), Gn = Je.stack.split(`
`), Sn = kt.length - 1, wn = Gn.length - 1; Sn >= 1 && wn >= 0 && kt[Sn] !== Gn[wn]; )
            wn--;
          for (; Sn >= 1 && wn >= 0; Sn--, wn--)
            if (kt[Sn] !== Gn[wn]) {
              if (Sn !== 1 || wn !== 1)
                do
                  if (Sn--, wn--, wn < 0 || kt[Sn] !== Gn[wn]) {
                    var jr = `
` + kt[Sn].replace(" at new ", " at ");
                    return j.displayName && jr.includes("<anonymous>") && (jr = jr.replace("<anonymous>", j.displayName)), typeof j == "function" && Ie.set(j, jr), jr;
                  }
                while (Sn >= 1 && wn >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, we.current = Ht, Re(), Error.prepareStackTrace = Ut;
      }
      var wi = j ? j.displayName || j.name : "", Qt = wi ? Ae(wi) : "";
      return typeof j == "function" && Ie.set(j, Qt), Qt;
    }
    function Lt(j, ye, Ce) {
      return xe(j, !1);
    }
    function rn(j) {
      var ye = j.prototype;
      return !!(ye && ye.isReactComponent);
    }
    function yt(j, ye, Ce) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return xe(j, rn(j));
      if (typeof j == "string")
        return Ae(j);
      switch (j) {
        case w:
          return Ae("Suspense");
        case k:
          return Ae("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case b:
            return Lt(j.render);
          case O:
            return yt(j.type, ye, Ce);
          case U: {
            var Je = j, Ut = Je._payload, Ht = Je._init;
            try {
              return yt(Ht(Ut), ye, Ce);
            } catch {
            }
          }
        }
      return "";
    }
    var bn = Object.prototype.hasOwnProperty, gn = {}, Nr = pe.ReactDebugCurrentFrame;
    function Lr(j) {
      if (j) {
        var ye = j._owner, Ce = yt(j.type, j._source, ye ? ye.type : null);
        Nr.setExtraStackFrame(Ce);
      } else
        Nr.setExtraStackFrame(null);
    }
    function Qn(j, ye, Ce, Je, Ut) {
      {
        var Ht = Function.call.bind(bn);
        for (var ut in j)
          if (Ht(j, ut)) {
            var kt = void 0;
            try {
              if (typeof j[ut] != "function") {
                var Gn = Error((Je || "React class") + ": " + Ce + " type `" + ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Gn.name = "Invariant Violation", Gn;
              }
              kt = j[ut](ye, ut, Je, Ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Sn) {
              kt = Sn;
            }
            kt && !(kt instanceof Error) && (Lr(Ut), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Je || "React class", Ce, ut, typeof kt), Lr(null)), kt instanceof Error && !(kt.message in gn) && (gn[kt.message] = !0, Lr(Ut), ie("Failed %s type: %s", Ce, kt.message), Lr(null));
          }
      }
    }
    var ur = Array.isArray;
    function Mr(j) {
      return ur(j);
    }
    function sr(j) {
      {
        var ye = typeof Symbol == "function" && Symbol.toStringTag, Ce = ye && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return Ce;
      }
    }
    function Ar(j) {
      try {
        return tr(j), !1;
      } catch {
        return !0;
      }
    }
    function tr(j) {
      return "" + j;
    }
    function Ct(j) {
      if (Ar(j))
        return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(j)), tr(j);
    }
    var an = pe.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ri, Ta, De;
    De = {};
    function nt(j) {
      if (bn.call(j, "ref")) {
        var ye = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Dt(j) {
      if (bn.call(j, "key")) {
        var ye = Object.getOwnPropertyDescriptor(j, "key").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function tn(j, ye) {
      if (typeof j.ref == "string" && an.current && ye && an.current.stateNode !== ye) {
        var Ce = Ye(an.current.type);
        De[Ce] || (ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ye(an.current.type), j.ref), De[Ce] = !0);
      }
    }
    function on(j, ye) {
      {
        var Ce = function() {
          Ri || (Ri = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        Ce.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: Ce,
          configurable: !0
        });
      }
    }
    function In(j, ye) {
      {
        var Ce = function() {
          Ta || (Ta = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        Ce.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: Ce,
          configurable: !0
        });
      }
    }
    var An = function(j, ye, Ce, Je, Ut, Ht, ut) {
      var kt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: j,
        key: ye,
        ref: Ce,
        props: ut,
        // Record the component responsible for creating this element.
        _owner: Ht
      };
      return kt._store = {}, Object.defineProperty(kt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(kt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.defineProperty(kt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ut
      }), Object.freeze && (Object.freeze(kt.props), Object.freeze(kt)), kt;
    };
    function Ur(j, ye, Ce, Je, Ut) {
      {
        var Ht, ut = {}, kt = null, Gn = null;
        Ce !== void 0 && (Ct(Ce), kt = "" + Ce), Dt(ye) && (Ct(ye.key), kt = "" + ye.key), nt(ye) && (Gn = ye.ref, tn(ye, Ut));
        for (Ht in ye)
          bn.call(ye, Ht) && !cr.hasOwnProperty(Ht) && (ut[Ht] = ye[Ht]);
        if (j && j.defaultProps) {
          var Sn = j.defaultProps;
          for (Ht in Sn)
            ut[Ht] === void 0 && (ut[Ht] = Sn[Ht]);
        }
        if (kt || Gn) {
          var wn = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          kt && on(ut, wn), Gn && In(ut, wn);
        }
        return An(j, kt, Gn, Ut, Je, an.current, ut);
      }
    }
    var dn = pe.ReactCurrentOwner, Vr = pe.ReactDebugCurrentFrame;
    function ln(j) {
      if (j) {
        var ye = j._owner, Ce = yt(j.type, j._source, ye ? ye.type : null);
        Vr.setExtraStackFrame(Ce);
      } else
        Vr.setExtraStackFrame(null);
    }
    var un;
    un = !1;
    function ci(j) {
      return typeof j == "object" && j !== null && j.$$typeof === s;
    }
    function Fa() {
      {
        if (dn.current) {
          var j = Ye(dn.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function bo(j) {
      return "";
    }
    var dl = {};
    function au(j) {
      {
        var ye = Fa();
        if (!ye) {
          var Ce = typeof j == "string" ? j : j.displayName || j.name;
          Ce && (ye = `

Check the top-level render call using <` + Ce + ">.");
        }
        return ye;
      }
    }
    function Yi(j, ye) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var Ce = au(ye);
        if (dl[Ce])
          return;
        dl[Ce] = !0;
        var Je = "";
        j && j._owner && j._owner !== dn.current && (Je = " It was passed a child from " + Ye(j._owner.type) + "."), ln(j), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ce, Je), ln(null);
      }
    }
    function wo(j, ye) {
      {
        if (typeof j != "object")
          return;
        if (Mr(j))
          for (var Ce = 0; Ce < j.length; Ce++) {
            var Je = j[Ce];
            ci(Je) && Yi(Je, ye);
          }
        else if (ci(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var Ut = Q(j);
          if (typeof Ut == "function" && Ut !== j.entries)
            for (var Ht = Ut.call(j), ut; !(ut = Ht.next()).done; )
              ci(ut.value) && Yi(ut.value, ye);
        }
      }
    }
    function xa(j) {
      {
        var ye = j.type;
        if (ye == null || typeof ye == "string")
          return;
        var Ce;
        if (typeof ye == "function")
          Ce = ye.propTypes;
        else if (typeof ye == "object" && (ye.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ye.$$typeof === O))
          Ce = ye.propTypes;
        else
          return;
        if (Ce) {
          var Je = Ye(ye);
          Qn(Ce, j.props, "prop", Je, j);
        } else if (ye.PropTypes !== void 0 && !un) {
          un = !0;
          var Ut = Ye(ye);
          ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ut || "Unknown");
        }
        typeof ye.getDefaultProps == "function" && !ye.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ti(j) {
      {
        for (var ye = Object.keys(j.props), Ce = 0; Ce < ye.length; Ce++) {
          var Je = ye[Ce];
          if (Je !== "children" && Je !== "key") {
            ln(j), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Je), ln(null);
            break;
          }
        }
        j.ref !== null && (ln(j), ie("Invalid attribute `ref` supplied to `React.Fragment`."), ln(null));
      }
    }
    var ba = {};
    function fi(j, ye, Ce, Je, Ut, Ht) {
      {
        var ut = xt(j);
        if (!ut) {
          var kt = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (kt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Gn = bo();
          Gn ? kt += Gn : kt += Fa();
          var Sn;
          j === null ? Sn = "null" : Mr(j) ? Sn = "array" : j !== void 0 && j.$$typeof === s ? (Sn = "<" + (Ye(j.type) || "Unknown") + " />", kt = " Did you accidentally export a JSX literal instead of a component?") : Sn = typeof j, ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Sn, kt);
        }
        var wn = Ur(j, ye, Ce, Ut, Ht);
        if (wn == null)
          return wn;
        if (ut) {
          var jr = ye.children;
          if (jr !== void 0)
            if (Je)
              if (Mr(jr)) {
                for (var wi = 0; wi < jr.length; wi++)
                  wo(jr[wi], j);
                Object.freeze && Object.freeze(jr);
              } else
                ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wo(jr, j);
        }
        if (bn.call(ye, "key")) {
          var Qt = Ye(j), fr = Object.keys(ye).filter(function(Pa) {
            return Pa !== "key";
          }), Ir = fr.length > 0 ? "{key: someKey, " + fr.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ba[Qt + Ir]) {
            var Nt = fr.length > 0 ? "{" + fr.join(": ..., ") + ": ...}" : "{}";
            ie(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ir, Qt, Nt, Qt), ba[Qt + Ir] = !0;
          }
        }
        return j === p ? Ti(wn) : xa(wn), wn;
      }
    }
    function $r(j, ye, Ce) {
      return fi(j, ye, Ce, !0);
    }
    function wa(j, ye, Ce) {
      return fi(j, ye, Ce, !1);
    }
    var xi = wa, bi = $r;
    jv.Fragment = p, jv.jsx = xi, jv.jsxs = bi;
  }()), jv;
}
process.env.NODE_ENV === "production" ? iC.exports = pM() : iC.exports = vM();
var X = iC.exports, lC = { exports: {} }, li = {}, Wy = { exports: {} }, H0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pb;
function hM() {
  return Pb || (Pb = 1, function(l) {
    function s(se, Ve) {
      var I = se.length;
      se.push(Ve);
      e:
        for (; 0 < I; ) {
          var L = I - 1 >>> 1, W = se[L];
          if (0 < m(W, Ve))
            se[L] = Ve, se[I] = W, I = L;
          else
            break e;
        }
    }
    function f(se) {
      return se.length === 0 ? null : se[0];
    }
    function p(se) {
      if (se.length === 0)
        return null;
      var Ve = se[0], I = se.pop();
      if (I !== Ve) {
        se[0] = I;
        e:
          for (var L = 0, W = se.length, he = W >>> 1; L < he; ) {
            var me = 2 * (L + 1) - 1, Re = se[me], we = me + 1, ke = se[we];
            if (0 > m(Re, I))
              we < W && 0 > m(ke, Re) ? (se[L] = ke, se[we] = I, L = we) : (se[L] = Re, se[me] = I, L = me);
            else if (we < W && 0 > m(ke, I))
              se[L] = ke, se[we] = I, L = we;
            else
              break e;
          }
      }
      return Ve;
    }
    function m(se, Ve) {
      var I = se.sortIndex - Ve.sortIndex;
      return I !== 0 ? I : se.id - Ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      l.unstable_now = function() {
        return g.now();
      };
    } else {
      var v = Date, x = v.now();
      l.unstable_now = function() {
        return v.now() - x;
      };
    }
    var b = [], w = [], k = 1, O = null, U = 3, V = !1, B = !1, $ = !1, Q = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ae(se) {
      for (var Ve = f(w); Ve !== null; ) {
        if (Ve.callback === null)
          p(w);
        else if (Ve.startTime <= se)
          p(w), Ve.sortIndex = Ve.expirationTime, s(b, Ve);
        else
          break;
        Ve = f(w);
      }
    }
    function ce(se) {
      if ($ = !1, ae(se), !B)
        if (f(b) !== null)
          B = !0, at(J);
        else {
          var Ve = f(w);
          Ve !== null && Oe(ce, Ve.startTime - se);
        }
    }
    function J(se, Ve) {
      B = !1, $ && ($ = !1, pe(vt), vt = -1), V = !0;
      var I = U;
      try {
        for (ae(Ve), O = f(b); O !== null && (!(O.expirationTime > Ve) || se && !gt()); ) {
          var L = O.callback;
          if (typeof L == "function") {
            O.callback = null, U = O.priorityLevel;
            var W = L(O.expirationTime <= Ve);
            Ve = l.unstable_now(), typeof W == "function" ? O.callback = W : O === f(b) && p(b), ae(Ve);
          } else
            p(b);
          O = f(b);
        }
        if (O !== null)
          var he = !0;
        else {
          var me = f(w);
          me !== null && Oe(ce, me.startTime - Ve), he = !1;
        }
        return he;
      } finally {
        O = null, U = I, V = !1;
      }
    }
    var _e = !1, Me = null, vt = -1, Wt = 5, xt = -1;
    function gt() {
      return !(l.unstable_now() - xt < Wt);
    }
    function Kt() {
      if (Me !== null) {
        var se = l.unstable_now();
        xt = se;
        var Ve = !0;
        try {
          Ve = Me(!0, se);
        } finally {
          Ve ? Ye() : (_e = !1, Me = null);
        }
      } else
        _e = !1;
    }
    var Ye;
    if (typeof ie == "function")
      Ye = function() {
        ie(Kt);
      };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), Ot = tt.port2;
      tt.port1.onmessage = Kt, Ye = function() {
        Ot.postMessage(null);
      };
    } else
      Ye = function() {
        Q(Kt, 0);
      };
    function at(se) {
      Me = se, _e || (_e = !0, Ye());
    }
    function Oe(se, Ve) {
      vt = Q(function() {
        se(l.unstable_now());
      }, Ve);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(se) {
      se.callback = null;
    }, l.unstable_continueExecution = function() {
      B || V || (B = !0, at(J));
    }, l.unstable_forceFrameRate = function(se) {
      0 > se || 125 < se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Wt = 0 < se ? Math.floor(1e3 / se) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, l.unstable_getFirstCallbackNode = function() {
      return f(b);
    }, l.unstable_next = function(se) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = U;
      }
      var I = U;
      U = Ve;
      try {
        return se();
      } finally {
        U = I;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(se, Ve) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var I = U;
      U = se;
      try {
        return Ve();
      } finally {
        U = I;
      }
    }, l.unstable_scheduleCallback = function(se, Ve, I) {
      var L = l.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? L + I : L) : I = L, se) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = I + W, se = { id: k++, callback: Ve, priorityLevel: se, startTime: I, expirationTime: W, sortIndex: -1 }, I > L ? (se.sortIndex = I, s(w, se), f(b) === null && se === f(w) && ($ ? (pe(vt), vt = -1) : $ = !0, Oe(ce, I - L))) : (se.sortIndex = W, s(b, se), B || V || (B = !0, at(J))), se;
    }, l.unstable_shouldYield = gt, l.unstable_wrapCallback = function(se) {
      var Ve = U;
      return function() {
        var I = U;
        U = Ve;
        try {
          return se.apply(this, arguments);
        } finally {
          U = I;
        }
      };
    };
  }(H0)), H0;
}
var B0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function mM() {
  return Hb || (Hb = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, f = !1, p = 5;
      function m(De, nt) {
        var Dt = De.length;
        De.push(nt), x(De, nt, Dt);
      }
      function g(De) {
        return De.length === 0 ? null : De[0];
      }
      function v(De) {
        if (De.length === 0)
          return null;
        var nt = De[0], Dt = De.pop();
        return Dt !== nt && (De[0] = Dt, b(De, Dt, 0)), nt;
      }
      function x(De, nt, Dt) {
        for (var tn = Dt; tn > 0; ) {
          var on = tn - 1 >>> 1, In = De[on];
          if (w(In, nt) > 0)
            De[on] = nt, De[tn] = In, tn = on;
          else
            return;
        }
      }
      function b(De, nt, Dt) {
        for (var tn = Dt, on = De.length, In = on >>> 1; tn < In; ) {
          var An = (tn + 1) * 2 - 1, Ur = De[An], dn = An + 1, Vr = De[dn];
          if (w(Ur, nt) < 0)
            dn < on && w(Vr, Ur) < 0 ? (De[tn] = Vr, De[dn] = nt, tn = dn) : (De[tn] = Ur, De[An] = nt, tn = An);
          else if (dn < on && w(Vr, nt) < 0)
            De[tn] = Vr, De[dn] = nt, tn = dn;
          else
            return;
        }
      }
      function w(De, nt) {
        var Dt = De.sortIndex - nt.sortIndex;
        return Dt !== 0 ? Dt : De.id - nt.id;
      }
      var k = 1, O = 2, U = 3, V = 4, B = 5;
      function $(De, nt) {
      }
      var Q = typeof performance == "object" && typeof performance.now == "function";
      if (Q) {
        var pe = performance;
        l.unstable_now = function() {
          return pe.now();
        };
      } else {
        var ie = Date, ae = ie.now();
        l.unstable_now = function() {
          return ie.now() - ae;
        };
      }
      var ce = 1073741823, J = -1, _e = 250, Me = 5e3, vt = 1e4, Wt = ce, xt = [], gt = [], Kt = 1, Ye = null, tt = U, Ot = !1, at = !1, Oe = !1, se = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(De) {
        for (var nt = g(gt); nt !== null; ) {
          if (nt.callback === null)
            v(gt);
          else if (nt.startTime <= De)
            v(gt), nt.sortIndex = nt.expirationTime, m(xt, nt);
          else
            return;
          nt = g(gt);
        }
      }
      function W(De) {
        if (Oe = !1, L(De), !at)
          if (g(xt) !== null)
            at = !0, Ct(he);
          else {
            var nt = g(gt);
            nt !== null && an(W, nt.startTime - De);
          }
      }
      function he(De, nt) {
        at = !1, Oe && (Oe = !1, cr()), Ot = !0;
        var Dt = tt;
        try {
          var tn;
          if (!f)
            return me(De, nt);
        } finally {
          Ye = null, tt = Dt, Ot = !1;
        }
      }
      function me(De, nt) {
        var Dt = nt;
        for (L(Dt), Ye = g(xt); Ye !== null && !s && !(Ye.expirationTime > Dt && (!De || Lr())); ) {
          var tn = Ye.callback;
          if (typeof tn == "function") {
            Ye.callback = null, tt = Ye.priorityLevel;
            var on = Ye.expirationTime <= Dt, In = tn(on);
            Dt = l.unstable_now(), typeof In == "function" ? Ye.callback = In : Ye === g(xt) && v(xt), L(Dt);
          } else
            v(xt);
          Ye = g(xt);
        }
        if (Ye !== null)
          return !0;
        var An = g(gt);
        return An !== null && an(W, An.startTime - Dt), !1;
      }
      function Re(De, nt) {
        switch (De) {
          case k:
          case O:
          case U:
          case V:
          case B:
            break;
          default:
            De = U;
        }
        var Dt = tt;
        tt = De;
        try {
          return nt();
        } finally {
          tt = Dt;
        }
      }
      function we(De) {
        var nt;
        switch (tt) {
          case k:
          case O:
          case U:
            nt = U;
            break;
          default:
            nt = tt;
            break;
        }
        var Dt = tt;
        tt = nt;
        try {
          return De();
        } finally {
          tt = Dt;
        }
      }
      function ke(De) {
        var nt = tt;
        return function() {
          var Dt = tt;
          tt = nt;
          try {
            return De.apply(this, arguments);
          } finally {
            tt = Dt;
          }
        };
      }
      function Ae(De, nt, Dt) {
        var tn = l.unstable_now(), on;
        if (typeof Dt == "object" && Dt !== null) {
          var In = Dt.delay;
          typeof In == "number" && In > 0 ? on = tn + In : on = tn;
        } else
          on = tn;
        var An;
        switch (De) {
          case k:
            An = J;
            break;
          case O:
            An = _e;
            break;
          case B:
            An = Wt;
            break;
          case V:
            An = vt;
            break;
          case U:
          default:
            An = Me;
            break;
        }
        var Ur = on + An, dn = {
          id: Kt++,
          callback: nt,
          priorityLevel: De,
          startTime: on,
          expirationTime: Ur,
          sortIndex: -1
        };
        return on > tn ? (dn.sortIndex = on, m(gt, dn), g(xt) === null && dn === g(gt) && (Oe ? cr() : Oe = !0, an(W, on - tn))) : (dn.sortIndex = Ur, m(xt, dn), !at && !Ot && (at = !0, Ct(he))), dn;
      }
      function Ue() {
      }
      function Ie() {
        !at && !Ot && (at = !0, Ct(he));
      }
      function Pt() {
        return g(xt);
      }
      function xe(De) {
        De.callback = null;
      }
      function Lt() {
        return tt;
      }
      var rn = !1, yt = null, bn = -1, gn = p, Nr = -1;
      function Lr() {
        var De = l.unstable_now() - Nr;
        return !(De < gn);
      }
      function Qn() {
      }
      function ur(De) {
        if (De < 0 || De > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        De > 0 ? gn = Math.floor(1e3 / De) : gn = p;
      }
      var Mr = function() {
        if (yt !== null) {
          var De = l.unstable_now();
          Nr = De;
          var nt = !0, Dt = !0;
          try {
            Dt = yt(nt, De);
          } finally {
            Dt ? sr() : (rn = !1, yt = null);
          }
        } else
          rn = !1;
      }, sr;
      if (typeof I == "function")
        sr = function() {
          I(Mr);
        };
      else if (typeof MessageChannel < "u") {
        var Ar = new MessageChannel(), tr = Ar.port2;
        Ar.port1.onmessage = Mr, sr = function() {
          tr.postMessage(null);
        };
      } else
        sr = function() {
          se(Mr, 0);
        };
      function Ct(De) {
        yt = De, rn || (rn = !0, sr());
      }
      function an(De, nt) {
        bn = se(function() {
          De(l.unstable_now());
        }, nt);
      }
      function cr() {
        Ve(bn), bn = -1;
      }
      var Ri = Qn, Ta = null;
      l.unstable_IdlePriority = B, l.unstable_ImmediatePriority = k, l.unstable_LowPriority = V, l.unstable_NormalPriority = U, l.unstable_Profiling = Ta, l.unstable_UserBlockingPriority = O, l.unstable_cancelCallback = xe, l.unstable_continueExecution = Ie, l.unstable_forceFrameRate = ur, l.unstable_getCurrentPriorityLevel = Lt, l.unstable_getFirstCallbackNode = Pt, l.unstable_next = we, l.unstable_pauseExecution = Ue, l.unstable_requestPaint = Ri, l.unstable_runWithPriority = Re, l.unstable_scheduleCallback = Ae, l.unstable_shouldYield = Lr, l.unstable_wrapCallback = ke, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(B0)), B0;
}
var Bb;
function Nw() {
  return Bb || (Bb = 1, process.env.NODE_ENV === "production" ? Wy.exports = hM() : Wy.exports = mM()), Wy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function yM() {
  if (Vb)
    return li;
  Vb = 1;
  var l = N, s = Nw();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), m = {};
  function g(n, r) {
    v(n, r), v(n + "Capture", r);
  }
  function v(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++)
      p.add(r[n]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), b = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, O = {};
  function U(n) {
    return b.call(O, n) ? !0 : b.call(k, n) ? !1 : w.test(n) ? O[n] = !0 : (k[n] = !0, !1);
  }
  function V(n, r, o, c) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function B(n, r, o, c) {
    if (r === null || typeof r > "u" || V(n, r, o, c))
      return !0;
    if (c)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function $(n, r, o, c, h, S, T) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = S, this.removeEmptyString = T;
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Q[n] = new $(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Q[r] = new $(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Q[n] = new $(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Q[n] = new $(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Q[n] = new $(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Q[n] = new $(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Q[n] = new $(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Q[n] = new $(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Q[n] = new $(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var pe = /[\-:]([a-z])/g;
  function ie(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      pe,
      ie
    );
    Q[r] = new $(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(pe, ie);
    Q[r] = new $(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(pe, ie);
    Q[r] = new $(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Q[n] = new $(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Q.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Q[n] = new $(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ae(n, r, o, c) {
    var h = Q.hasOwnProperty(r) ? Q[r] : null;
    (h !== null ? h.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, o, h, c) && (o = null), c || h === null ? U(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, c = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var ce = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = Symbol.for("react.element"), _e = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), Wt = Symbol.for("react.profiler"), xt = Symbol.for("react.provider"), gt = Symbol.for("react.context"), Kt = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), se = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = se && n[se] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var I = Object.assign, L;
  function W(n) {
    if (L === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        L = r && r[1] || "";
      }
    return `
` + L + n;
  }
  var he = !1;
  function me(n, r) {
    if (!n || he)
      return "";
    he = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (te) {
            var c = te;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (te) {
            c = te;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (te) {
          c = te;
        }
        n();
      }
    } catch (te) {
      if (te && c && typeof te.stack == "string") {
        for (var h = te.stack.split(`
`), S = c.stack.split(`
`), T = h.length - 1, M = S.length - 1; 1 <= T && 0 <= M && h[T] !== S[M]; )
          M--;
        for (; 1 <= T && 0 <= M; T--, M--)
          if (h[T] !== S[M]) {
            if (T !== 1 || M !== 1)
              do
                if (T--, M--, 0 > M || h[T] !== S[M]) {
                  var z = `
` + h[T].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= T && 0 <= M);
            break;
          }
      }
    } finally {
      he = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? W(n) : "";
  }
  function Re(n) {
    switch (n.tag) {
      case 5:
        return W(n.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = me(n.type, !1), n;
      case 11:
        return n = me(n.type.render, !1), n;
      case 1:
        return n = me(n.type, !0), n;
      default:
        return "";
    }
  }
  function we(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Me:
        return "Fragment";
      case _e:
        return "Portal";
      case Wt:
        return "Profiler";
      case vt:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case gt:
          return (n.displayName || "Context") + ".Consumer";
        case xt:
          return (n._context.displayName || "Context") + ".Provider";
        case Kt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ot:
          return r = n.displayName || null, r !== null ? r : we(n.type) || "Memo";
        case at:
          r = n._payload, n = n._init;
          try {
            return we(n(r));
          } catch {
          }
      }
    return null;
  }
  function ke(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return we(r);
      case 8:
        return r === vt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ae(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ue(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ie(n) {
    var r = Ue(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get, S = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(T) {
        c = "" + T, S.call(this, T);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(T) {
        c = "" + T;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Pt(n) {
    n._valueTracker || (n._valueTracker = Ie(n));
  }
  function xe(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), c = "";
    return n && (c = Ue(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Lt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rn(n, r) {
    var o = r.checked;
    return I({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function yt(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    o = Ae(r.value != null ? r.value : o), n._wrapperState = { initialChecked: c, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function bn(n, r) {
    r = r.checked, r != null && ae(n, "checked", r, !1);
  }
  function gn(n, r) {
    bn(n, r);
    var o = Ae(r.value), c = r.type;
    if (o != null)
      c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Lr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Lr(n, r.type, Ae(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Nr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Lr(n, r, o) {
    (r !== "number" || Lt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Qn = Array.isArray;
  function ur(n, r, o, c) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < o.length; h++)
        r["$" + o[h]] = !0;
      for (o = 0; o < n.length; o++)
        h = r.hasOwnProperty("$" + n[o].value), n[o].selected !== h && (n[o].selected = h), h && c && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ae(o), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === o) {
          n[h].selected = !0, c && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Mr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return I({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function sr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(f(92));
        if (Qn(o)) {
          if (1 < o.length)
            throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Ae(o) };
  }
  function Ar(n, r) {
    var o = Ae(r.value), c = Ae(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c);
  }
  function tr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ct(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function an(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ct(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cr, Ri = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, c, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, c, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ta(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var De = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, nt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(De).forEach(function(n) {
    nt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), De[r] = De[n];
    });
  });
  function Dt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || De.hasOwnProperty(n) && De[n] ? ("" + r).trim() : r + "px";
  }
  function tn(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var c = o.indexOf("--") === 0, h = Dt(o, r[o], c);
        o === "float" && (o = "cssFloat"), c ? n.setProperty(o, h) : n[o] = h;
      }
  }
  var on = I({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function In(n, r) {
    if (r) {
      if (on[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(f(62));
    }
  }
  function An(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ur = null;
  function dn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Vr = null, ln = null, un = null;
  function ci(n) {
    if (n = zs(n)) {
      if (typeof Vr != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = it(r), Vr(n.stateNode, n.type, r));
    }
  }
  function Fa(n) {
    ln ? un ? un.push(n) : un = [n] : ln = n;
  }
  function bo() {
    if (ln) {
      var n = ln, r = un;
      if (un = ln = null, ci(n), r)
        for (n = 0; n < r.length; n++)
          ci(r[n]);
    }
  }
  function dl(n, r) {
    return n(r);
  }
  function au() {
  }
  var Yi = !1;
  function wo(n, r, o) {
    if (Yi)
      return n(r, o);
    Yi = !0;
    try {
      return dl(n, r, o);
    } finally {
      Yi = !1, (ln !== null || un !== null) && (au(), bo());
    }
  }
  function xa(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var c = it(o);
    if (c === null)
      return null;
    o = c[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(f(231, r, typeof o));
    return o;
  }
  var Ti = !1;
  if (x)
    try {
      var ba = {};
      Object.defineProperty(ba, "passive", { get: function() {
        Ti = !0;
      } }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
    } catch {
      Ti = !1;
    }
  function fi(n, r, o, c, h, S, T, M, z) {
    var te = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, te);
    } catch (ge) {
      this.onError(ge);
    }
  }
  var $r = !1, wa = null, xi = !1, bi = null, j = { onError: function(n) {
    $r = !0, wa = n;
  } };
  function ye(n, r, o, c, h, S, T, M, z) {
    $r = !1, wa = null, fi.apply(j, arguments);
  }
  function Ce(n, r, o, c, h, S, T, M, z) {
    if (ye.apply(this, arguments), $r) {
      if ($r) {
        var te = wa;
        $r = !1, wa = null;
      } else
        throw Error(f(198));
      xi || (xi = !0, bi = te);
    }
  }
  function Je(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Ut(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ht(n) {
    if (Je(n) !== n)
      throw Error(f(188));
  }
  function ut(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Je(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, c = r; ; ) {
      var h = o.return;
      if (h === null)
        break;
      var S = h.alternate;
      if (S === null) {
        if (c = h.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (h.child === S.child) {
        for (S = h.child; S; ) {
          if (S === o)
            return Ht(h), n;
          if (S === c)
            return Ht(h), r;
          S = S.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== c.return)
        o = h, c = S;
      else {
        for (var T = !1, M = h.child; M; ) {
          if (M === o) {
            T = !0, o = h, c = S;
            break;
          }
          if (M === c) {
            T = !0, c = h, o = S;
            break;
          }
          M = M.sibling;
        }
        if (!T) {
          for (M = S.child; M; ) {
            if (M === o) {
              T = !0, o = S, c = h;
              break;
            }
            if (M === c) {
              T = !0, c = S, o = h;
              break;
            }
            M = M.sibling;
          }
          if (!T)
            throw Error(f(189));
        }
      }
      if (o.alternate !== c)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : r;
  }
  function kt(n) {
    return n = ut(n), n !== null ? Gn(n) : null;
  }
  function Gn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Gn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Sn = s.unstable_scheduleCallback, wn = s.unstable_cancelCallback, jr = s.unstable_shouldYield, wi = s.unstable_requestPaint, Qt = s.unstable_now, fr = s.unstable_getCurrentPriorityLevel, Ir = s.unstable_ImmediatePriority, Nt = s.unstable_UserBlockingPriority, Pa = s.unstable_NormalPriority, _o = s.unstable_LowPriority, iu = s.unstable_IdlePriority, Oo = null, aa = null;
  function Es(n) {
    if (aa && typeof aa.onCommitFiberRoot == "function")
      try {
        aa.onCommitFiberRoot(Oo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Yr = Math.clz32 ? Math.clz32 : Nc, Cs = Math.log, Rs = Math.LN2;
  function Nc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Cs(n) / Rs | 0) | 0;
  }
  var ou = 64, Do = 4194304;
  function di(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Wr(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var c = 0, h = n.suspendedLanes, S = n.pingedLanes, T = o & 268435455;
    if (T !== 0) {
      var M = T & ~h;
      M !== 0 ? c = di(M) : (S &= T, S !== 0 && (c = di(S)));
    } else
      T = o & ~h, T !== 0 ? c = di(T) : S !== 0 && (c = di(S));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & h) && (h = c & -c, S = r & -r, h >= S || h === 16 && (S & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        o = 31 - Yr(r), h = 1 << o, c |= n[o], r &= ~h;
    return c;
  }
  function ko(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function No(n, r) {
    for (var o = n.suspendedLanes, c = n.pingedLanes, h = n.expirationTimes, S = n.pendingLanes; 0 < S; ) {
      var T = 31 - Yr(S), M = 1 << T, z = h[T];
      z === -1 ? (!(M & o) || M & c) && (h[T] = ko(M, r)) : z <= r && (n.expiredLanes |= M), S &= ~M;
    }
  }
  function Lo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var n = ou;
    return ou <<= 1, !(ou & 4194240) && (ou = 64), n;
  }
  function uu(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Wi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Yr(r), n[r] = o;
  }
  function Ld(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var h = 31 - Yr(o), S = 1 << h;
      r[h] = 0, c[h] = -1, n[h] = -1, o &= ~S;
    }
  }
  function _i(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var c = 31 - Yr(o), h = 1 << c;
      h & r | n[c] & r && (n[c] |= r), o &= ~h;
    }
  }
  var Gt = 0;
  function su(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var pl, cu, Bt, fu, du, St = !1, vl = [], Un = null, ia = null, qr = null, Mo = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map(), sn = [], Lc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function oa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        ia = null;
        break;
      case "mouseover":
      case "mouseout":
        qr = null;
        break;
      case "pointerover":
      case "pointerout":
        Mo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pn.delete(r.pointerId);
    }
  }
  function dr(n, r, o, c, h, S) {
    return n === null || n.nativeEvent !== S ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: S, targetContainers: [h] }, r !== null && (r = zs(r), r !== null && cu(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function Oi(n, r, o, c, h) {
    switch (r) {
      case "focusin":
        return Un = dr(Un, n, r, o, c, h), !0;
      case "dragenter":
        return ia = dr(ia, n, r, o, c, h), !0;
      case "mouseover":
        return qr = dr(qr, n, r, o, c, h), !0;
      case "pointerover":
        var S = h.pointerId;
        return Mo.set(S, dr(Mo.get(S) || null, n, r, o, c, h)), !0;
      case "gotpointercapture":
        return S = h.pointerId, Pn.set(S, dr(Pn.get(S) || null, n, r, o, c, h)), !0;
    }
    return !1;
  }
  function Mc(n) {
    var r = $a(n.target);
    if (r !== null) {
      var o = Je(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Ut(o), r !== null) {
            n.blockedOn = r, du(n.priority, function() {
              Bt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function qi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = vu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var c = new o.constructor(o.type, o);
        Ur = c, o.target.dispatchEvent(c), Ur = null;
      } else
        return r = zs(o), r !== null && cu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Ao(n, r, o) {
    qi(n) && o.delete(r);
  }
  function Ac() {
    St = !1, Un !== null && qi(Un) && (Un = null), ia !== null && qi(ia) && (ia = null), qr !== null && qi(qr) && (qr = null), Mo.forEach(Ao), Pn.forEach(Ao);
  }
  function Ha(n, r) {
    n.blockedOn === r && (n.blockedOn = null, St || (St = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Ac)));
  }
  function Uo(n) {
    function r(h) {
      return Ha(h, n);
    }
    if (0 < vl.length) {
      Ha(vl[0], n);
      for (var o = 1; o < vl.length; o++) {
        var c = vl[o];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (Un !== null && Ha(Un, n), ia !== null && Ha(ia, n), qr !== null && Ha(qr, n), Mo.forEach(r), Pn.forEach(r), o = 0; o < sn.length; o++)
      c = sn[o], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < sn.length && (o = sn[0], o.blockedOn === null); )
      Mc(o), o.blockedOn === null && sn.shift();
  }
  var Ki = ce.ReactCurrentBatchConfig, Ba = !0;
  function pu(n, r, o, c) {
    var h = Gt, S = Ki.transition;
    Ki.transition = null;
    try {
      Gt = 1, zo(n, r, o, c);
    } finally {
      Gt = h, Ki.transition = S;
    }
  }
  function jo(n, r, o, c) {
    var h = Gt, S = Ki.transition;
    Ki.transition = null;
    try {
      Gt = 4, zo(n, r, o, c);
    } finally {
      Gt = h, Ki.transition = S;
    }
  }
  function zo(n, r, o, c) {
    if (Ba) {
      var h = vu(n, r, o, c);
      if (h === null)
        $c(n, r, c, hl, o), oa(n, c);
      else if (Oi(h, n, r, o, c))
        c.stopPropagation();
      else if (oa(n, c), r & 4 && -1 < Lc.indexOf(n)) {
        for (; h !== null; ) {
          var S = zs(h);
          if (S !== null && pl(S), S = vu(n, r, o, c), S === null && $c(n, r, c, hl, o), S === h)
            break;
          h = S;
        }
        h !== null && c.stopPropagation();
      } else
        $c(n, r, c, null, o);
    }
  }
  var hl = null;
  function vu(n, r, o, c) {
    if (hl = null, n = dn(c), n = $a(n), n !== null)
      if (r = Je(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Ut(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return hl = n, null;
  }
  function Ts(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (fr()) {
          case Ir:
            return 1;
          case Nt:
            return 4;
          case Pa:
          case _o:
            return 16;
          case iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pi = null, R = null, A = null;
  function ee() {
    if (A)
      return A;
    var n, r = R, o = r.length, c, h = "value" in pi ? pi.value : pi.textContent, S = h.length;
    for (n = 0; n < o && r[n] === h[n]; n++)
      ;
    var T = o - n;
    for (c = 1; c <= T && r[o - c] === h[S - c]; c++)
      ;
    return A = h.slice(n, 1 < c ? 1 - c : void 0);
  }
  function re(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Te() {
    return !0;
  }
  function st() {
    return !1;
  }
  function je(n) {
    function r(o, c, h, S, T) {
      this._reactName = o, this._targetInst = h, this.type = c, this.nativeEvent = S, this.target = T, this.currentTarget = null;
      for (var M in n)
        n.hasOwnProperty(M) && (o = n[M], this[M] = o ? o(S) : S[M]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Te : st, this.isPropagationStopped = st, this;
    }
    return I(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Te);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Te);
    }, persist: function() {
    }, isPersistent: Te }), r;
  }
  var lt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Mt = je(lt), qt = I({}, lt, { view: 0, detail: 0 }), En = je(qt), pn, Cn, Tn, Vt = I({}, qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Tn && (Tn && n.type === "mousemove" ? (pn = n.screenX - Tn.screenX, Cn = n.screenY - Tn.screenY) : Cn = pn = 0, Tn = n), pn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Cn;
  } }), Qi = je(Vt), hu = I({}, Vt, { dataTransfer: 0 }), xs = je(hu), Md = I({}, qt, { relatedTarget: 0 }), vi = je(Md), bs = I({}, lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ws = je(bs), Ad = I({}, lt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), yg = je(Ad), gg = I({}, lt, { data: 0 }), Ud = je(gg), jd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ih(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ah[n]) ? !!r[n] : !1;
  }
  function zd() {
    return ih;
  }
  var Gi = I({}, qt, { key: function(n) {
    if (n.key) {
      var r = jd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = re(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(n) {
    return n.type === "keypress" ? re(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? re(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Sg = je(Gi), Fd = I({}, Vt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Uc = je(Fd), Pd = I({}, qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Eg = je(Pd), jc = I({}, lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), oh = je(jc), la = I({}, Vt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xi = je(la), Xn = [9, 13, 27, 32], hi = x && "CompositionEvent" in window, ml = null;
  x && "documentMode" in document && (ml = document.documentMode);
  var zc = x && "TextEvent" in window && !ml, lh = x && (!hi || ml && 8 < ml && 11 >= ml), mu = " ", uh = !1;
  function sh(n, r) {
    switch (n) {
      case "keyup":
        return Xn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var yu = !1;
  function Cg(n, r) {
    switch (n) {
      case "compositionend":
        return Fc(r);
      case "keypress":
        return r.which !== 32 ? null : (uh = !0, mu);
      case "textInput":
        return n = r.data, n === mu && uh ? null : n;
      default:
        return null;
    }
  }
  function Rg(n, r) {
    if (yu)
      return n === "compositionend" || !hi && sh(n, r) ? (n = ee(), A = R = pi = null, yu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ch = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ch[n.type] : r === "textarea";
  }
  function dh(n, r, o, c) {
    Fa(c), r = As(r, "onChange"), 0 < r.length && (o = new Mt("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
  }
  var _s = null, gu = null;
  function Su(n) {
    Vc(n, 0);
  }
  function Eu(n) {
    var r = Ru(n);
    if (xe(r))
      return n;
  }
  function ph(n, r) {
    if (n === "change")
      return r;
  }
  var Hd = !1;
  if (x) {
    var Bd;
    if (x) {
      var Vd = "oninput" in document;
      if (!Vd) {
        var vh = document.createElement("div");
        vh.setAttribute("oninput", "return;"), Vd = typeof vh.oninput == "function";
      }
      Bd = Vd;
    } else
      Bd = !1;
    Hd = Bd && (!document.documentMode || 9 < document.documentMode);
  }
  function hh() {
    _s && (_s.detachEvent("onpropertychange", mh), gu = _s = null);
  }
  function mh(n) {
    if (n.propertyName === "value" && Eu(gu)) {
      var r = [];
      dh(r, gu, n, dn(n)), wo(Su, r);
    }
  }
  function Tg(n, r, o) {
    n === "focusin" ? (hh(), _s = r, gu = o, _s.attachEvent("onpropertychange", mh)) : n === "focusout" && hh();
  }
  function xg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Eu(gu);
  }
  function bg(n, r) {
    if (n === "click")
      return Eu(r);
  }
  function yh(n, r) {
    if (n === "input" || n === "change")
      return Eu(r);
  }
  function wg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Va = typeof Object.is == "function" ? Object.is : wg;
  function Os(n, r) {
    if (Va(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), c = Object.keys(r);
    if (o.length !== c.length)
      return !1;
    for (c = 0; c < o.length; c++) {
      var h = o[c];
      if (!b.call(r, h) || !Va(n[h], r[h]))
        return !1;
    }
    return !0;
  }
  function gh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Sh(n, r) {
    var o = gh(n);
    n = 0;
    for (var c; o; ) {
      if (o.nodeType === 3) {
        if (c = n + o.textContent.length, n <= r && c >= r)
          return { node: o, offset: r - n };
        n = c;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = gh(o);
    }
  }
  function Eh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Eh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Pc() {
    for (var n = window, r = Lt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Lt(n.document);
    }
    return r;
  }
  function Ji(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Hc(n) {
    var r = Pc(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Eh(o.ownerDocument.documentElement, o)) {
      if (c !== null && Ji(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = o.textContent.length, S = Math.min(c.start, h);
          c = c.end === void 0 ? S : Math.min(c.end, h), !n.extend && S > c && (h = c, c = S, S = h), h = Sh(o, S);
          var T = Sh(
            o,
            c
          );
          h && T && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== T.node || n.focusOffset !== T.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), S > c ? (n.addRange(r), n.extend(T.node, T.offset)) : (r.setEnd(T.node, T.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ch = x && "documentMode" in document && 11 >= document.documentMode, mi = null, $d = null, Ds = null, Id = !1;
  function Rh(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Id || mi == null || mi !== Lt(c) || (c = mi, "selectionStart" in c && Ji(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), Ds && Os(Ds, c) || (Ds = c, c = As($d, "onSelect"), 0 < c.length && (r = new Mt("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = mi)));
  }
  function Bc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var yl = { animationend: Bc("Animation", "AnimationEnd"), animationiteration: Bc("Animation", "AnimationIteration"), animationstart: Bc("Animation", "AnimationStart"), transitionend: Bc("Transition", "TransitionEnd") }, Yd = {}, Wd = {};
  x && (Wd = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function pr(n) {
    if (Yd[n])
      return Yd[n];
    if (!yl[n])
      return n;
    var r = yl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Wd)
        return Yd[n] = r[o];
    return n;
  }
  var qd = pr("animationend"), Th = pr("animationiteration"), xh = pr("animationstart"), bh = pr("transitionend"), wh = /* @__PURE__ */ new Map(), _h = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Zi(n, r) {
    wh.set(n, r), g(r, [n]);
  }
  for (var ks = 0; ks < _h.length; ks++) {
    var gl = _h[ks], _g = gl.toLowerCase(), Ns = gl[0].toUpperCase() + gl.slice(1);
    Zi(_g, "on" + Ns);
  }
  Zi(qd, "onAnimationEnd"), Zi(Th, "onAnimationIteration"), Zi(xh, "onAnimationStart"), Zi("dblclick", "onDoubleClick"), Zi("focusin", "onFocus"), Zi("focusout", "onBlur"), Zi(bh, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), g("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), g("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), g("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), g("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Og = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));
  function Oh(n, r, o) {
    var c = n.type || "unknown-event";
    n.currentTarget = o, Ce(c, r, void 0, n), n.currentTarget = null;
  }
  function Vc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var c = n[o], h = c.event;
      c = c.listeners;
      e: {
        var S = void 0;
        if (r)
          for (var T = c.length - 1; 0 <= T; T--) {
            var M = c[T], z = M.instance, te = M.currentTarget;
            if (M = M.listener, z !== S && h.isPropagationStopped())
              break e;
            Oh(h, M, te), S = z;
          }
        else
          for (T = 0; T < c.length; T++) {
            if (M = c[T], z = M.instance, te = M.currentTarget, M = M.listener, z !== S && h.isPropagationStopped())
              break e;
            Oh(h, M, te), S = z;
          }
      }
    }
    if (xi)
      throw n = bi, xi = !1, bi = null, n;
  }
  function Rn(n, r) {
    var o = r[ep];
    o === void 0 && (o = r[ep] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    o.has(c) || (Dh(r, n, 2, !1), o.add(c));
  }
  function Fo(n, r, o) {
    var c = 0;
    r && (c |= 4), Dh(o, n, c, r);
  }
  var eo = "_reactListening" + Math.random().toString(36).slice(2);
  function Cu(n) {
    if (!n[eo]) {
      n[eo] = !0, p.forEach(function(o) {
        o !== "selectionchange" && (Og.has(o) || Fo(o, !1, n), Fo(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[eo] || (r[eo] = !0, Fo("selectionchange", !1, r));
    }
  }
  function Dh(n, r, o, c) {
    switch (Ts(r)) {
      case 1:
        var h = pu;
        break;
      case 4:
        h = jo;
        break;
      default:
        h = zo;
    }
    o = h.bind(null, r, o, n), h = void 0, !Ti || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), c ? h !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: h }) : n.addEventListener(r, o, !0) : h !== void 0 ? n.addEventListener(r, o, { passive: h }) : n.addEventListener(r, o, !1);
  }
  function $c(n, r, o, c, h) {
    var S = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var T = c.tag;
          if (T === 3 || T === 4) {
            var M = c.stateNode.containerInfo;
            if (M === h || M.nodeType === 8 && M.parentNode === h)
              break;
            if (T === 4)
              for (T = c.return; T !== null; ) {
                var z = T.tag;
                if ((z === 3 || z === 4) && (z = T.stateNode.containerInfo, z === h || z.nodeType === 8 && z.parentNode === h))
                  return;
                T = T.return;
              }
            for (; M !== null; ) {
              if (T = $a(M), T === null)
                return;
              if (z = T.tag, z === 5 || z === 6) {
                c = S = T;
                continue e;
              }
              M = M.parentNode;
            }
          }
          c = c.return;
        }
    wo(function() {
      var te = S, ge = dn(o), Se = [];
      e: {
        var ve = wh.get(n);
        if (ve !== void 0) {
          var Pe = Mt, We = n;
          switch (n) {
            case "keypress":
              if (re(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Pe = Sg;
              break;
            case "focusin":
              We = "focus", Pe = vi;
              break;
            case "focusout":
              We = "blur", Pe = vi;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = vi;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Pe = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Pe = xs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Pe = Eg;
              break;
            case qd:
            case Th:
            case xh:
              Pe = ws;
              break;
            case bh:
              Pe = oh;
              break;
            case "scroll":
              Pe = En;
              break;
            case "wheel":
              Pe = Xi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Pe = yg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = Uc;
          }
          var Qe = (r & 4) !== 0, qn = !Qe && n === "scroll", Y = Qe ? ve !== null ? ve + "Capture" : null : ve;
          Qe = [];
          for (var P = te, G; P !== null; ) {
            G = P;
            var be = G.stateNode;
            if (G.tag === 5 && be !== null && (G = be, Y !== null && (be = xa(P, Y), be != null && Qe.push(Ms(P, be, G)))), qn)
              break;
            P = P.return;
          }
          0 < Qe.length && (ve = new Pe(ve, We, null, o, ge), Se.push({ event: ve, listeners: Qe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ve = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", ve && o !== Ur && (We = o.relatedTarget || o.fromElement) && ($a(We) || We[to]))
            break e;
          if ((Pe || ve) && (ve = ge.window === ge ? ge : (ve = ge.ownerDocument) ? ve.defaultView || ve.parentWindow : window, Pe ? (We = o.relatedTarget || o.toElement, Pe = te, We = We ? $a(We) : null, We !== null && (qn = Je(We), We !== qn || We.tag !== 5 && We.tag !== 6) && (We = null)) : (Pe = null, We = te), Pe !== We)) {
            if (Qe = Qi, be = "onMouseLeave", Y = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (Qe = Uc, be = "onPointerLeave", Y = "onPointerEnter", P = "pointer"), qn = Pe == null ? ve : Ru(Pe), G = We == null ? ve : Ru(We), ve = new Qe(be, P + "leave", Pe, o, ge), ve.target = qn, ve.relatedTarget = G, be = null, $a(ge) === te && (Qe = new Qe(Y, P + "enter", We, o, ge), Qe.target = G, Qe.relatedTarget = qn, be = Qe), qn = be, Pe && We)
              t: {
                for (Qe = Pe, Y = We, P = 0, G = Qe; G; G = Sl(G))
                  P++;
                for (G = 0, be = Y; be; be = Sl(be))
                  G++;
                for (; 0 < P - G; )
                  Qe = Sl(Qe), P--;
                for (; 0 < G - P; )
                  Y = Sl(Y), G--;
                for (; P--; ) {
                  if (Qe === Y || Y !== null && Qe === Y.alternate)
                    break t;
                  Qe = Sl(Qe), Y = Sl(Y);
                }
                Qe = null;
              }
            else
              Qe = null;
            Pe !== null && Kd(Se, ve, Pe, Qe, !1), We !== null && qn !== null && Kd(Se, qn, We, Qe, !0);
          }
        }
        e: {
          if (ve = te ? Ru(te) : window, Pe = ve.nodeName && ve.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && ve.type === "file")
            var Xe = ph;
          else if (fh(ve))
            if (Hd)
              Xe = yh;
            else {
              Xe = xg;
              var ct = Tg;
            }
          else
            (Pe = ve.nodeName) && Pe.toLowerCase() === "input" && (ve.type === "checkbox" || ve.type === "radio") && (Xe = bg);
          if (Xe && (Xe = Xe(n, te))) {
            dh(Se, Xe, o, ge);
            break e;
          }
          ct && ct(n, ve, te), n === "focusout" && (ct = ve._wrapperState) && ct.controlled && ve.type === "number" && Lr(ve, "number", ve.value);
        }
        switch (ct = te ? Ru(te) : window, n) {
          case "focusin":
            (fh(ct) || ct.contentEditable === "true") && (mi = ct, $d = te, Ds = null);
            break;
          case "focusout":
            Ds = $d = mi = null;
            break;
          case "mousedown":
            Id = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Id = !1, Rh(Se, o, ge);
            break;
          case "selectionchange":
            if (Ch)
              break;
          case "keydown":
          case "keyup":
            Rh(Se, o, ge);
        }
        var qe;
        if (hi)
          e: {
            switch (n) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break e;
              case "compositionend":
                ft = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break e;
            }
            ft = void 0;
          }
        else
          yu ? sh(n, o) && (ft = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ft = "onCompositionStart");
        ft && (lh && o.locale !== "ko" && (yu || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && yu && (qe = ee()) : (pi = ge, R = "value" in pi ? pi.value : pi.textContent, yu = !0)), ct = As(te, ft), 0 < ct.length && (ft = new Ud(ft, n, null, o, ge), Se.push({ event: ft, listeners: ct }), qe ? ft.data = qe : (qe = Fc(o), qe !== null && (ft.data = qe)))), (qe = zc ? Cg(n, o) : Rg(n, o)) && (te = As(te, "onBeforeInput"), 0 < te.length && (ge = new Ud("onBeforeInput", "beforeinput", null, o, ge), Se.push({ event: ge, listeners: te }), ge.data = qe));
      }
      Vc(Se, r);
    });
  }
  function Ms(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function As(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var h = n, S = h.stateNode;
      h.tag === 5 && S !== null && (h = S, S = xa(n, o), S != null && c.unshift(Ms(n, S, h)), S = xa(n, r), S != null && c.push(Ms(n, S, h))), n = n.return;
    }
    return c;
  }
  function Sl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Kd(n, r, o, c, h) {
    for (var S = r._reactName, T = []; o !== null && o !== c; ) {
      var M = o, z = M.alternate, te = M.stateNode;
      if (z !== null && z === c)
        break;
      M.tag === 5 && te !== null && (M = te, h ? (z = xa(o, S), z != null && T.unshift(Ms(o, z, M))) : h || (z = xa(o, S), z != null && T.push(Ms(o, z, M)))), o = o.return;
    }
    T.length !== 0 && n.push({ event: r, listeners: T });
  }
  var Qd = /\r\n?/g, Dg = /\u0000|\uFFFD/g;
  function Gd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Qd, `
`).replace(Dg, "");
  }
  function Ic(n, r, o) {
    if (r = Gd(r), Gd(n) !== r && o)
      throw Error(f(425));
  }
  function Yc() {
  }
  var Xd = null, El = null;
  function Us(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0, kh = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Zd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jd < "u" ? function(n) {
    return Jd.resolve(null).then(n).catch(kg);
  } : Cl;
  function kg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Po(n, r) {
    var o = r, c = 0;
    do {
      var h = o.nextSibling;
      if (n.removeChild(o), h && h.nodeType === 8)
        if (o = h.data, o === "/$") {
          if (c === 0) {
            n.removeChild(h), Uo(r);
            return;
          }
          c--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || c++;
      o = h;
    } while (o);
    Uo(r);
  }
  function yi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function js(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ho = Math.random().toString(36).slice(2), Di = "__reactFiber$" + Ho, Rl = "__reactProps$" + Ho, to = "__reactContainer$" + Ho, ep = "__reactEvents$" + Ho, Ng = "__reactListeners$" + Ho, tp = "__reactHandles$" + Ho;
  function $a(n) {
    var r = n[Di];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[to] || o[Di]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = js(n); n !== null; ) {
            if (o = n[Di])
              return o;
            n = js(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function zs(n) {
    return n = n[Di] || n[to], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ru(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function it(n) {
    return n[Rl] || null;
  }
  var Bo = [], _n = -1;
  function wt(n) {
    return { current: n };
  }
  function nn(n) {
    0 > _n || (n.current = Bo[_n], Bo[_n] = null, _n--);
  }
  function cn(n, r) {
    _n++, Bo[_n] = n.current, n.current = r;
  }
  var ki = {}, ht = wt(ki), Hn = wt(!1), ua = ki;
  function Ia(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ki;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var h = {}, S;
    for (S in o)
      h[S] = r[S];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ya() {
    nn(Hn), nn(ht);
  }
  function Vo(n, r, o) {
    if (ht.current !== ki)
      throw Error(f(168));
    cn(ht, r), cn(Hn, o);
  }
  function Fs(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return o;
    c = c.getChildContext();
    for (var h in c)
      if (!(h in r))
        throw Error(f(108, ke(n) || "Unknown", h));
    return I({}, o, c);
  }
  function Wc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ki, ua = ht.current, cn(ht, n), cn(Hn, Hn.current), !0;
  }
  function Nh(n, r, o) {
    var c = n.stateNode;
    if (!c)
      throw Error(f(169));
    o ? (n = Fs(n, r, ua), c.__reactInternalMemoizedMergedChildContext = n, nn(Hn), nn(ht), cn(ht, n)) : nn(Hn), cn(Hn, o);
  }
  var _a = null, vr = !1, Ps = !1;
  function np(n) {
    _a === null ? _a = [n] : _a.push(n);
  }
  function rp(n) {
    vr = !0, np(n);
  }
  function sa() {
    if (!Ps && _a !== null) {
      Ps = !0;
      var n = 0, r = Gt;
      try {
        var o = _a;
        for (Gt = 1; n < o.length; n++) {
          var c = o[n];
          do
            c = c(!0);
          while (c !== null);
        }
        _a = null, vr = !1;
      } catch (h) {
        throw _a !== null && (_a = _a.slice(n + 1)), Sn(Ir, sa), h;
      } finally {
        Gt = r, Ps = !1;
      }
    }
    return null;
  }
  var $o = [], ca = 0, Tl = null, Tu = 0, fa = [], zr = 0, Wa = null, Er = 1, no = "";
  function Oa(n, r) {
    $o[ca++] = Tu, $o[ca++] = Tl, Tl = n, Tu = r;
  }
  function ap(n, r, o) {
    fa[zr++] = Er, fa[zr++] = no, fa[zr++] = Wa, Wa = n;
    var c = Er;
    n = no;
    var h = 32 - Yr(c) - 1;
    c &= ~(1 << h), o += 1;
    var S = 32 - Yr(r) + h;
    if (30 < S) {
      var T = h - h % 5;
      S = (c & (1 << T) - 1).toString(32), c >>= T, h -= T, Er = 1 << 32 - Yr(r) + h | o << h | c, no = S + n;
    } else
      Er = 1 << S | o << h | c, no = n;
  }
  function qc(n) {
    n.return !== null && (Oa(n, 1), ap(n, 1, 0));
  }
  function ip(n) {
    for (; n === Tl; )
      Tl = $o[--ca], $o[ca] = null, Tu = $o[--ca], $o[ca] = null;
    for (; n === Wa; )
      Wa = fa[--zr], fa[zr] = null, no = fa[--zr], fa[zr] = null, Er = fa[--zr], fa[zr] = null;
  }
  var Da = null, da = null, On = !1, qa = null;
  function op(n, r) {
    var o = ti(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Lh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Da = n, da = yi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Da = n, da = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Wa !== null ? { id: Er, overflow: no } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ti(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Da = n, da = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Kc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Qc(n) {
    if (On) {
      var r = da;
      if (r) {
        var o = r;
        if (!Lh(n, r)) {
          if (Kc(n))
            throw Error(f(418));
          r = yi(o.nextSibling);
          var c = Da;
          r && Lh(n, r) ? op(c, o) : (n.flags = n.flags & -4097 | 2, On = !1, Da = n);
        }
      } else {
        if (Kc(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, On = !1, Da = n;
      }
    }
  }
  function Mh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Da = n;
  }
  function Gc(n) {
    if (n !== Da)
      return !1;
    if (!On)
      return Mh(n), On = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Us(n.type, n.memoizedProps)), r && (r = da)) {
      if (Kc(n))
        throw Ah(), Error(f(418));
      for (; r; )
        op(n, r), r = yi(r.nextSibling);
    }
    if (Mh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                da = yi(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        da = null;
      }
    } else
      da = Da ? yi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ah() {
    for (var n = da; n; )
      n = yi(n.nextSibling);
  }
  function jn() {
    da = Da = null, On = !1;
  }
  function lp(n) {
    qa === null ? qa = [n] : qa.push(n);
  }
  var Xc = ce.ReactCurrentBatchConfig;
  function xl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var c = o.stateNode;
        }
        if (!c)
          throw Error(f(147, n));
        var h = c, S = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === S ? r.ref : (r = function(T) {
          var M = h.refs;
          T === null ? delete M[S] : M[S] = T;
        }, r._stringRef = S, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function Ni(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Jc(n) {
    function r(Y, P) {
      if (n) {
        var G = Y.deletions;
        G === null ? (Y.deletions = [P], Y.flags |= 16) : G.push(P);
      }
    }
    function o(Y, P) {
      if (!n)
        return null;
      for (; P !== null; )
        r(Y, P), P = P.sibling;
      return null;
    }
    function c(Y, P) {
      for (Y = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? Y.set(P.key, P) : Y.set(P.index, P), P = P.sibling;
      return Y;
    }
    function h(Y, P) {
      return Y = Xo(Y, P), Y.index = 0, Y.sibling = null, Y;
    }
    function S(Y, P, G) {
      return Y.index = G, n ? (G = Y.alternate, G !== null ? (G = G.index, G < P ? (Y.flags |= 2, P) : G) : (Y.flags |= 2, P)) : (Y.flags |= 1048576, P);
    }
    function T(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function M(Y, P, G, be) {
      return P === null || P.tag !== 6 ? (P = Hf(G, Y.mode, be), P.return = Y, P) : (P = h(P, G), P.return = Y, P);
    }
    function z(Y, P, G, be) {
      var Xe = G.type;
      return Xe === Me ? ge(Y, P, G.props.children, be, G.key) : P !== null && (P.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === at && Uh(Xe) === P.type) ? (be = h(P, G.props), be.ref = xl(Y, P, G), be.return = Y, be) : (be = Ff(G.type, G.key, G.props, null, Y.mode, be), be.ref = xl(Y, P, G), be.return = Y, be);
    }
    function te(Y, P, G, be) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== G.containerInfo || P.stateNode.implementation !== G.implementation ? (P = rc(G, Y.mode, be), P.return = Y, P) : (P = h(P, G.children || []), P.return = Y, P);
    }
    function ge(Y, P, G, be, Xe) {
      return P === null || P.tag !== 7 ? (P = Pl(G, Y.mode, be, Xe), P.return = Y, P) : (P = h(P, G), P.return = Y, P);
    }
    function Se(Y, P, G) {
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return P = Hf("" + P, Y.mode, G), P.return = Y, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case J:
            return G = Ff(P.type, P.key, P.props, null, Y.mode, G), G.ref = xl(Y, null, P), G.return = Y, G;
          case _e:
            return P = rc(P, Y.mode, G), P.return = Y, P;
          case at:
            var be = P._init;
            return Se(Y, be(P._payload), G);
        }
        if (Qn(P) || Ve(P))
          return P = Pl(P, Y.mode, G, null), P.return = Y, P;
        Ni(Y, P);
      }
      return null;
    }
    function ve(Y, P, G, be) {
      var Xe = P !== null ? P.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return Xe !== null ? null : M(Y, P, "" + G, be);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case J:
            return G.key === Xe ? z(Y, P, G, be) : null;
          case _e:
            return G.key === Xe ? te(Y, P, G, be) : null;
          case at:
            return Xe = G._init, ve(
              Y,
              P,
              Xe(G._payload),
              be
            );
        }
        if (Qn(G) || Ve(G))
          return Xe !== null ? null : ge(Y, P, G, be, null);
        Ni(Y, G);
      }
      return null;
    }
    function Pe(Y, P, G, be, Xe) {
      if (typeof be == "string" && be !== "" || typeof be == "number")
        return Y = Y.get(G) || null, M(P, Y, "" + be, Xe);
      if (typeof be == "object" && be !== null) {
        switch (be.$$typeof) {
          case J:
            return Y = Y.get(be.key === null ? G : be.key) || null, z(P, Y, be, Xe);
          case _e:
            return Y = Y.get(be.key === null ? G : be.key) || null, te(P, Y, be, Xe);
          case at:
            var ct = be._init;
            return Pe(Y, P, G, ct(be._payload), Xe);
        }
        if (Qn(be) || Ve(be))
          return Y = Y.get(G) || null, ge(P, Y, be, Xe, null);
        Ni(P, be);
      }
      return null;
    }
    function We(Y, P, G, be) {
      for (var Xe = null, ct = null, qe = P, ft = P = 0, or = null; qe !== null && ft < G.length; ft++) {
        qe.index > ft ? (or = qe, qe = null) : or = qe.sibling;
        var Xt = ve(Y, qe, G[ft], be);
        if (Xt === null) {
          qe === null && (qe = or);
          break;
        }
        n && qe && Xt.alternate === null && r(Y, qe), P = S(Xt, P, ft), ct === null ? Xe = Xt : ct.sibling = Xt, ct = Xt, qe = or;
      }
      if (ft === G.length)
        return o(Y, qe), On && Oa(Y, ft), Xe;
      if (qe === null) {
        for (; ft < G.length; ft++)
          qe = Se(Y, G[ft], be), qe !== null && (P = S(qe, P, ft), ct === null ? Xe = qe : ct.sibling = qe, ct = qe);
        return On && Oa(Y, ft), Xe;
      }
      for (qe = c(Y, qe); ft < G.length; ft++)
        or = Pe(qe, Y, ft, G[ft], be), or !== null && (n && or.alternate !== null && qe.delete(or.key === null ? ft : or.key), P = S(or, P, ft), ct === null ? Xe = or : ct.sibling = or, ct = or);
      return n && qe.forEach(function(so) {
        return r(Y, so);
      }), On && Oa(Y, ft), Xe;
    }
    function Qe(Y, P, G, be) {
      var Xe = Ve(G);
      if (typeof Xe != "function")
        throw Error(f(150));
      if (G = Xe.call(G), G == null)
        throw Error(f(151));
      for (var ct = Xe = null, qe = P, ft = P = 0, or = null, Xt = G.next(); qe !== null && !Xt.done; ft++, Xt = G.next()) {
        qe.index > ft ? (or = qe, qe = null) : or = qe.sibling;
        var so = ve(Y, qe, Xt.value, be);
        if (so === null) {
          qe === null && (qe = or);
          break;
        }
        n && qe && so.alternate === null && r(Y, qe), P = S(so, P, ft), ct === null ? Xe = so : ct.sibling = so, ct = so, qe = or;
      }
      if (Xt.done)
        return o(
          Y,
          qe
        ), On && Oa(Y, ft), Xe;
      if (qe === null) {
        for (; !Xt.done; ft++, Xt = G.next())
          Xt = Se(Y, Xt.value, be), Xt !== null && (P = S(Xt, P, ft), ct === null ? Xe = Xt : ct.sibling = Xt, ct = Xt);
        return On && Oa(Y, ft), Xe;
      }
      for (qe = c(Y, qe); !Xt.done; ft++, Xt = G.next())
        Xt = Pe(qe, Y, ft, Xt.value, be), Xt !== null && (n && Xt.alternate !== null && qe.delete(Xt.key === null ? ft : Xt.key), P = S(Xt, P, ft), ct === null ? Xe = Xt : ct.sibling = Xt, ct = Xt);
      return n && qe.forEach(function(Qg) {
        return r(Y, Qg);
      }), On && Oa(Y, ft), Xe;
    }
    function qn(Y, P, G, be) {
      if (typeof G == "object" && G !== null && G.type === Me && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case J:
            e: {
              for (var Xe = G.key, ct = P; ct !== null; ) {
                if (ct.key === Xe) {
                  if (Xe = G.type, Xe === Me) {
                    if (ct.tag === 7) {
                      o(Y, ct.sibling), P = h(ct, G.props.children), P.return = Y, Y = P;
                      break e;
                    }
                  } else if (ct.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === at && Uh(Xe) === ct.type) {
                    o(Y, ct.sibling), P = h(ct, G.props), P.ref = xl(Y, ct, G), P.return = Y, Y = P;
                    break e;
                  }
                  o(Y, ct);
                  break;
                } else
                  r(Y, ct);
                ct = ct.sibling;
              }
              G.type === Me ? (P = Pl(G.props.children, Y.mode, be, G.key), P.return = Y, Y = P) : (be = Ff(G.type, G.key, G.props, null, Y.mode, be), be.ref = xl(Y, P, G), be.return = Y, Y = be);
            }
            return T(Y);
          case _e:
            e: {
              for (ct = G.key; P !== null; ) {
                if (P.key === ct)
                  if (P.tag === 4 && P.stateNode.containerInfo === G.containerInfo && P.stateNode.implementation === G.implementation) {
                    o(Y, P.sibling), P = h(P, G.children || []), P.return = Y, Y = P;
                    break e;
                  } else {
                    o(Y, P);
                    break;
                  }
                else
                  r(Y, P);
                P = P.sibling;
              }
              P = rc(G, Y.mode, be), P.return = Y, Y = P;
            }
            return T(Y);
          case at:
            return ct = G._init, qn(Y, P, ct(G._payload), be);
        }
        if (Qn(G))
          return We(Y, P, G, be);
        if (Ve(G))
          return Qe(Y, P, G, be);
        Ni(Y, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, P !== null && P.tag === 6 ? (o(Y, P.sibling), P = h(P, G), P.return = Y, Y = P) : (o(Y, P), P = Hf(G, Y.mode, be), P.return = Y, Y = P), T(Y)) : o(Y, P);
    }
    return qn;
  }
  var xu = Jc(!0), jh = Jc(!1), ro = wt(null), nr = null, Ne = null, Ka = null;
  function ka() {
    Ka = Ne = nr = null;
  }
  function up(n) {
    var r = ro.current;
    nn(ro), n._currentValue = r;
  }
  function sp(n, r, o) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function bu(n, r) {
    nr = n, Ka = Ne = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ha = !0), n.firstContext = null);
  }
  function Qa(n) {
    var r = n._currentValue;
    if (Ka !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ne === null) {
        if (nr === null)
          throw Error(f(308));
        Ne = n, nr.dependencies = { lanes: 0, firstContext: n };
      } else
        Ne = Ne.next = n;
    return r;
  }
  var bl = null;
  function Jn(n) {
    bl === null ? bl = [n] : bl.push(n);
  }
  function zh(n, r, o, c) {
    var h = r.interleaved;
    return h === null ? (o.next = o, Jn(r)) : (o.next = h.next, h.next = o), r.interleaved = o, ao(n, c);
  }
  function ao(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Io = !1;
  function Zc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function pa(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yo(n, r, o) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, zt & 2) {
      var h = c.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), c.pending = r, ao(n, o);
    }
    return h = c.interleaved, h === null ? (r.next = r, Jn(c)) : (r.next = h.next, h.next = r), c.interleaved = r, ao(n, o);
  }
  function ef(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, _i(n, o);
    }
  }
  function Fh(n, r) {
    var o = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var h = null, S = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var T = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          S === null ? h = S = T : S = S.next = T, o = o.next;
        } while (o !== null);
        S === null ? h = S = r : S = S.next = r;
      } else
        h = S = r;
      o = { baseState: c.baseState, firstBaseUpdate: h, lastBaseUpdate: S, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function tf(n, r, o, c) {
    var h = n.updateQueue;
    Io = !1;
    var S = h.firstBaseUpdate, T = h.lastBaseUpdate, M = h.shared.pending;
    if (M !== null) {
      h.shared.pending = null;
      var z = M, te = z.next;
      z.next = null, T === null ? S = te : T.next = te, T = z;
      var ge = n.alternate;
      ge !== null && (ge = ge.updateQueue, M = ge.lastBaseUpdate, M !== T && (M === null ? ge.firstBaseUpdate = te : M.next = te, ge.lastBaseUpdate = z));
    }
    if (S !== null) {
      var Se = h.baseState;
      T = 0, ge = te = z = null, M = S;
      do {
        var ve = M.lane, Pe = M.eventTime;
        if ((c & ve) === ve) {
          ge !== null && (ge = ge.next = {
            eventTime: Pe,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var We = n, Qe = M;
            switch (ve = r, Pe = o, Qe.tag) {
              case 1:
                if (We = Qe.payload, typeof We == "function") {
                  Se = We.call(Pe, Se, ve);
                  break e;
                }
                Se = We;
                break e;
              case 3:
                We.flags = We.flags & -65537 | 128;
              case 0:
                if (We = Qe.payload, ve = typeof We == "function" ? We.call(Pe, Se, ve) : We, ve == null)
                  break e;
                Se = I({}, Se, ve);
                break e;
              case 2:
                Io = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, ve = h.effects, ve === null ? h.effects = [M] : ve.push(M));
        } else
          Pe = { eventTime: Pe, lane: ve, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, ge === null ? (te = ge = Pe, z = Se) : ge = ge.next = Pe, T |= ve;
        if (M = M.next, M === null) {
          if (M = h.shared.pending, M === null)
            break;
          ve = M, M = ve.next, ve.next = null, h.lastBaseUpdate = ve, h.shared.pending = null;
        }
      } while (!0);
      if (ge === null && (z = Se), h.baseState = z, h.firstBaseUpdate = te, h.lastBaseUpdate = ge, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          T |= h.lane, h = h.next;
        while (h !== r);
      } else
        S === null && (h.shared.lanes = 0);
      Ul |= T, n.lanes = T, n.memoizedState = Se;
    }
  }
  function Ph(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], h = c.callback;
        if (h !== null) {
          if (c.callback = null, c = o, typeof h != "function")
            throw Error(f(191, h));
          h.call(c);
        }
      }
  }
  var Hs = {}, gi = wt(Hs), _u = wt(Hs), Bs = wt(Hs);
  function wl(n) {
    if (n === Hs)
      throw Error(f(174));
    return n;
  }
  function cp(n, r) {
    switch (cn(Bs, r), cn(_u, n), cn(gi, Hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : an(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = an(r, n);
    }
    nn(gi), cn(gi, r);
  }
  function Ou() {
    nn(gi), nn(_u), nn(Bs);
  }
  function Hh(n) {
    wl(Bs.current);
    var r = wl(gi.current), o = an(r, n.type);
    r !== o && (cn(_u, n), cn(gi, o));
  }
  function fp(n) {
    _u.current === n && (nn(gi), nn(_u));
  }
  var Ln = wt(0);
  function nf(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var rf = [];
  function dp() {
    for (var n = 0; n < rf.length; n++)
      rf[n]._workInProgressVersionPrimary = null;
    rf.length = 0;
  }
  var af = ce.ReactCurrentDispatcher, Vs = ce.ReactCurrentBatchConfig, Ge = 0, Ze = null, mt = null, At = null, Na = !1, Du = !1, $s = 0, Lg = 0;
  function Fr() {
    throw Error(f(321));
  }
  function Is(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Va(n[o], r[o]))
        return !1;
    return !0;
  }
  function de(n, r, o, c, h, S) {
    if (Ge = S, Ze = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, af.current = n === null || n.memoizedState === null ? Mg : xn, n = o(c, h), Du) {
      S = 0;
      do {
        if (Du = !1, $s = 0, 25 <= S)
          throw Error(f(301));
        S += 1, At = mt = null, r.updateQueue = null, af.current = Ef, n = o(c, h);
      } while (Du);
    }
    if (af.current = Pr, r = mt !== null && mt.next !== null, Ge = 0, At = mt = Ze = null, Na = !1, r)
      throw Error(f(300));
    return n;
  }
  function Zn() {
    var n = $s !== 0;
    return $s = 0, n;
  }
  function rt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return At === null ? Ze.memoizedState = At = n : At = At.next = n, At;
  }
  function Cr() {
    if (mt === null) {
      var n = Ze.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = mt.next;
    var r = At === null ? Ze.memoizedState : At.next;
    if (r !== null)
      At = r, mt = n;
    else {
      if (n === null)
        throw Error(f(310));
      mt = n, n = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }, At === null ? Ze.memoizedState = At = n : At = At.next = n;
    }
    return At;
  }
  function La(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function io(n) {
    var r = Cr(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = mt, h = c.baseQueue, S = o.pending;
    if (S !== null) {
      if (h !== null) {
        var T = h.next;
        h.next = S.next, S.next = T;
      }
      c.baseQueue = h = S, o.pending = null;
    }
    if (h !== null) {
      S = h.next, c = c.baseState;
      var M = T = null, z = null, te = S;
      do {
        var ge = te.lane;
        if ((Ge & ge) === ge)
          z !== null && (z = z.next = { lane: 0, action: te.action, hasEagerState: te.hasEagerState, eagerState: te.eagerState, next: null }), c = te.hasEagerState ? te.eagerState : n(c, te.action);
        else {
          var Se = {
            lane: ge,
            action: te.action,
            hasEagerState: te.hasEagerState,
            eagerState: te.eagerState,
            next: null
          };
          z === null ? (M = z = Se, T = c) : z = z.next = Se, Ze.lanes |= ge, Ul |= ge;
        }
        te = te.next;
      } while (te !== null && te !== S);
      z === null ? T = c : z.next = M, Va(c, r.memoizedState) || (ha = !0), r.memoizedState = c, r.baseState = T, r.baseQueue = z, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      h = n;
      do
        S = h.lane, Ze.lanes |= S, Ul |= S, h = h.next;
      while (h !== n);
    } else
      h === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ga(n) {
    var r = Cr(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, h = o.pending, S = r.memoizedState;
    if (h !== null) {
      o.pending = null;
      var T = h = h.next;
      do
        S = n(S, T.action), T = T.next;
      while (T !== h);
      Va(S, r.memoizedState) || (ha = !0), r.memoizedState = S, r.baseQueue === null && (r.baseState = S), o.lastRenderedState = S;
    }
    return [S, c];
  }
  function ku() {
  }
  function _l(n, r) {
    var o = Ze, c = Cr(), h = r(), S = !Va(c.memoizedState, h);
    if (S && (c.memoizedState = h, ha = !0), c = c.queue, Ys(lf.bind(null, o, c, n), [n]), c.getSnapshot !== r || S || At !== null && At.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ol(9, of.bind(null, o, c, h, r), void 0, null), Vn === null)
        throw Error(f(349));
      Ge & 30 || Nu(o, r, h);
    }
    return h;
  }
  function Nu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ze.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function of(n, r, o, c) {
    r.value = o, r.getSnapshot = c, uf(r) && sf(n);
  }
  function lf(n, r, o) {
    return o(function() {
      uf(r) && sf(n);
    });
  }
  function uf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Va(n, o);
    } catch {
      return !0;
    }
  }
  function sf(n) {
    var r = ao(n, 1);
    r !== null && zn(r, n, 1, -1);
  }
  function cf(n) {
    var r = rt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: La, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ws.bind(null, Ze, n), [r.memoizedState, n];
  }
  function Ol(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = Ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ze.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function ff() {
    return Cr().memoizedState;
  }
  function Lu(n, r, o, c) {
    var h = rt();
    Ze.flags |= n, h.memoizedState = Ol(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Mu(n, r, o, c) {
    var h = Cr();
    c = c === void 0 ? null : c;
    var S = void 0;
    if (mt !== null) {
      var T = mt.memoizedState;
      if (S = T.destroy, c !== null && Is(c, T.deps)) {
        h.memoizedState = Ol(r, o, S, c);
        return;
      }
    }
    Ze.flags |= n, h.memoizedState = Ol(1 | r, o, S, c);
  }
  function df(n, r) {
    return Lu(8390656, 8, n, r);
  }
  function Ys(n, r) {
    return Mu(2048, 8, n, r);
  }
  function pf(n, r) {
    return Mu(4, 2, n, r);
  }
  function vf(n, r) {
    return Mu(4, 4, n, r);
  }
  function hf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function mf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Mu(4, 4, hf.bind(null, r, n), o);
  }
  function Au() {
  }
  function Dl(n, r) {
    var o = Cr();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && Is(r, c[1]) ? c[0] : (o.memoizedState = [n, r], n);
  }
  function yf(n, r) {
    var o = Cr();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && Is(r, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function gf(n, r, o) {
    return Ge & 21 ? (Va(o, r) || (o = lu(), Ze.lanes |= o, Ul |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ha = !0), n.memoizedState = o);
  }
  function pp(n, r) {
    var o = Gt;
    Gt = o !== 0 && 4 > o ? o : 4, n(!0);
    var c = Vs.transition;
    Vs.transition = {};
    try {
      n(!1), r();
    } finally {
      Gt = o, Vs.transition = c;
    }
  }
  function Sf() {
    return Cr().memoizedState;
  }
  function Bh(n, r, o) {
    var c = uo(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, vp(n))
      Uu(r, o);
    else if (o = zh(n, r, o, c), o !== null) {
      var h = yr();
      zn(o, n, c, h), Wo(o, r, c);
    }
  }
  function Ws(n, r, o) {
    var c = uo(n), h = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (vp(n))
      Uu(r, h);
    else {
      var S = n.alternate;
      if (n.lanes === 0 && (S === null || S.lanes === 0) && (S = r.lastRenderedReducer, S !== null))
        try {
          var T = r.lastRenderedState, M = S(T, o);
          if (h.hasEagerState = !0, h.eagerState = M, Va(M, T)) {
            var z = r.interleaved;
            z === null ? (h.next = h, Jn(r)) : (h.next = z.next, z.next = h), r.interleaved = h;
            return;
          }
        } catch {
        } finally {
        }
      o = zh(n, r, h, c), o !== null && (h = yr(), zn(o, n, c, h), Wo(o, r, c));
    }
  }
  function vp(n) {
    var r = n.alternate;
    return n === Ze || r !== null && r === Ze;
  }
  function Uu(n, r) {
    Du = Na = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Wo(n, r, o) {
    if (o & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, _i(n, o);
    }
  }
  var Pr = { readContext: Qa, useCallback: Fr, useContext: Fr, useEffect: Fr, useImperativeHandle: Fr, useInsertionEffect: Fr, useLayoutEffect: Fr, useMemo: Fr, useReducer: Fr, useRef: Fr, useState: Fr, useDebugValue: Fr, useDeferredValue: Fr, useTransition: Fr, useMutableSource: Fr, useSyncExternalStore: Fr, useId: Fr, unstable_isNewReconciler: !1 }, Mg = { readContext: Qa, useCallback: function(n, r) {
    return rt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Qa, useEffect: df, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Lu(
      4194308,
      4,
      hf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Lu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Lu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = rt();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var c = rt();
    return r = o !== void 0 ? o(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = Bh.bind(null, Ze, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = rt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: cf, useDebugValue: Au, useDeferredValue: function(n) {
    return rt().memoizedState = n;
  }, useTransition: function() {
    var n = cf(!1), r = n[0];
    return n = pp.bind(null, n[1]), rt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = Ze, h = rt();
    if (On) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), Vn === null)
        throw Error(f(349));
      Ge & 30 || Nu(c, r, o);
    }
    h.memoizedState = o;
    var S = { value: o, getSnapshot: r };
    return h.queue = S, df(lf.bind(
      null,
      c,
      S,
      n
    ), [n]), c.flags |= 2048, Ol(9, of.bind(null, c, S, o, r), void 0, null), o;
  }, useId: function() {
    var n = rt(), r = Vn.identifierPrefix;
    if (On) {
      var o = no, c = Er;
      o = (c & ~(1 << 32 - Yr(c) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = $s++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Lg++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, xn = {
    readContext: Qa,
    useCallback: Dl,
    useContext: Qa,
    useEffect: Ys,
    useImperativeHandle: mf,
    useInsertionEffect: pf,
    useLayoutEffect: vf,
    useMemo: yf,
    useReducer: io,
    useRef: ff,
    useState: function() {
      return io(La);
    },
    useDebugValue: Au,
    useDeferredValue: function(n) {
      var r = Cr();
      return gf(r, mt.memoizedState, n);
    },
    useTransition: function() {
      var n = io(La)[0], r = Cr().memoizedState;
      return [n, r];
    },
    useMutableSource: ku,
    useSyncExternalStore: _l,
    useId: Sf,
    unstable_isNewReconciler: !1
  }, Ef = { readContext: Qa, useCallback: Dl, useContext: Qa, useEffect: Ys, useImperativeHandle: mf, useInsertionEffect: pf, useLayoutEffect: vf, useMemo: yf, useReducer: Ga, useRef: ff, useState: function() {
    return Ga(La);
  }, useDebugValue: Au, useDeferredValue: function(n) {
    var r = Cr();
    return mt === null ? r.memoizedState = n : gf(r, mt.memoizedState, n);
  }, useTransition: function() {
    var n = Ga(La)[0], r = Cr().memoizedState;
    return [n, r];
  }, useMutableSource: ku, useSyncExternalStore: _l, useId: Sf, unstable_isNewReconciler: !1 };
  function va(n, r) {
    if (n && n.defaultProps) {
      r = I({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function kl(n, r, o, c) {
    r = n.memoizedState, o = o(c, r), o = o == null ? r : I({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Nl = { isMounted: function(n) {
    return (n = n._reactInternals) ? Je(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = yr(), h = uo(n), S = pa(c, h);
    S.payload = r, o != null && (S.callback = o), r = Yo(n, S, h), r !== null && (zn(r, n, h, c), ef(r, n, h));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = yr(), h = uo(n), S = pa(c, h);
    S.tag = 1, S.payload = r, o != null && (S.callback = o), r = Yo(n, S, h), r !== null && (zn(r, n, h, c), ef(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = yr(), c = uo(n), h = pa(o, c);
    h.tag = 2, r != null && (h.callback = r), r = Yo(n, h, c), r !== null && (zn(r, n, c, o), ef(r, n, c));
  } };
  function Vh(n, r, o, c, h, S, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, S, T) : r.prototype && r.prototype.isPureReactComponent ? !Os(o, c) || !Os(h, S) : !0;
  }
  function $h(n, r, o) {
    var c = !1, h = ki, S = r.contextType;
    return typeof S == "object" && S !== null ? S = Qa(S) : (h = Nn(r) ? ua : ht.current, c = r.contextTypes, S = (c = c != null) ? Ia(n, h) : ki), r = new r(o, S), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Nl, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = S), r;
  }
  function Ih(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && Nl.enqueueReplaceState(r, r.state, null);
  }
  function hp(n, r, o, c) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = {}, Zc(n);
    var S = r.contextType;
    typeof S == "object" && S !== null ? h.context = Qa(S) : (S = Nn(r) ? ua : ht.current, h.context = Ia(n, S)), h.state = n.memoizedState, S = r.getDerivedStateFromProps, typeof S == "function" && (kl(n, r, S, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && Nl.enqueueReplaceState(h, h.state, null), tf(n, o, h, c), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function qo(n, r) {
    try {
      var o = "", c = r;
      do
        o += Re(c), c = c.return;
      while (c);
      var h = o;
    } catch (S) {
      h = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function mp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function qs(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Yh = typeof WeakMap == "function" ? WeakMap : Map;
  function Wh(n, r, o) {
    o = pa(-1, o), o.tag = 3, o.payload = { element: null };
    var c = r.value;
    return o.callback = function() {
      Lf || (Lf = !0, bp = c), qs(n, r);
    }, o;
  }
  function qh(n, r, o) {
    o = pa(-1, o), o.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = r.value;
      o.payload = function() {
        return c(h);
      }, o.callback = function() {
        qs(n, r);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (o.callback = function() {
      qs(n, r), typeof c != "function" && (Za === null ? Za = /* @__PURE__ */ new Set([this]) : Za.add(this));
      var T = r.stack;
      this.componentDidCatch(r.value, { componentStack: T !== null ? T : "" });
    }), o;
  }
  function Ks(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Yh();
      var h = /* @__PURE__ */ new Set();
      c.set(r, h);
    } else
      h = c.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(r, h));
    h.has(o) || (h.add(o), n = $g.bind(null, n, r, o), r.then(n, n));
  }
  function Kh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function yp(n, r, o, c, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = pa(-1, 1), r.tag = 2, Yo(o, r, 1))), o.lanes |= 1), n);
  }
  var Qh = ce.ReactCurrentOwner, ha = !1;
  function Yn(n, r, o, c) {
    r.child = n === null ? jh(r, null, o, c) : xu(r, n.child, o, c);
  }
  function ju(n, r, o, c, h) {
    o = o.render;
    var S = r.ref;
    return bu(r, h), c = de(n, r, o, c, S, h), o = Zn(), n !== null && !ha ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Wn(n, r, h)) : (On && o && qc(r), r.flags |= 1, Yn(n, r, c, h), r.child);
  }
  function Ko(n, r, o, c, h) {
    if (n === null) {
      var S = o.type;
      return typeof S == "function" && !kp(S) && S.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = S, Cf(n, r, S, c, h)) : (n = Ff(o.type, null, c, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (S = n.child, !(n.lanes & h)) {
      var T = S.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Os, o(T, c) && n.ref === r.ref)
        return Wn(n, r, h);
    }
    return r.flags |= 1, n = Xo(S, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Cf(n, r, o, c, h) {
    if (n !== null) {
      var S = n.memoizedProps;
      if (Os(S, c) && n.ref === r.ref)
        if (ha = !1, r.pendingProps = c = S, (n.lanes & h) !== 0)
          n.flags & 131072 && (ha = !0);
        else
          return r.lanes = n.lanes, Wn(n, r, h);
    }
    return bt(n, r, o, c, h);
  }
  function ma(n, r, o) {
    var c = r.pendingProps, h = c.children, S = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, cn(Wu, ya), ya |= o;
      else {
        if (!(o & 1073741824))
          return n = S !== null ? S.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, cn(Wu, ya), ya |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = S !== null ? S.baseLanes : o, cn(Wu, ya), ya |= c;
      }
    else
      S !== null ? (c = S.baseLanes | o, r.memoizedState = null) : c = o, cn(Wu, ya), ya |= c;
    return Yn(n, r, h, o), r.child;
  }
  function Ll(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bt(n, r, o, c, h) {
    var S = Nn(o) ? ua : ht.current;
    return S = Ia(r, S), bu(r, h), o = de(n, r, o, c, S, h), c = Zn(), n !== null && !ha ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Wn(n, r, h)) : (On && c && qc(r), r.flags |= 1, Yn(n, r, o, h), r.child);
  }
  function Qs(n, r, o, c, h) {
    if (Nn(o)) {
      var S = !0;
      Wc(r);
    } else
      S = !1;
    if (bu(r, h), r.stateNode === null)
      Xs(n, r), $h(r, o, c), hp(r, o, c, h), c = !0;
    else if (n === null) {
      var T = r.stateNode, M = r.memoizedProps;
      T.props = M;
      var z = T.context, te = o.contextType;
      typeof te == "object" && te !== null ? te = Qa(te) : (te = Nn(o) ? ua : ht.current, te = Ia(r, te));
      var ge = o.getDerivedStateFromProps, Se = typeof ge == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      Se || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (M !== c || z !== te) && Ih(r, T, c, te), Io = !1;
      var ve = r.memoizedState;
      T.state = ve, tf(r, c, T, h), z = r.memoizedState, M !== c || ve !== z || Hn.current || Io ? (typeof ge == "function" && (kl(r, o, ge, c), z = r.memoizedState), (M = Io || Vh(r, o, M, c, ve, z, te)) ? (Se || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = z), T.props = c, T.state = z, T.context = te, c = M) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      T = r.stateNode, wu(n, r), M = r.memoizedProps, te = r.type === r.elementType ? M : va(r.type, M), T.props = te, Se = r.pendingProps, ve = T.context, z = o.contextType, typeof z == "object" && z !== null ? z = Qa(z) : (z = Nn(o) ? ua : ht.current, z = Ia(r, z));
      var Pe = o.getDerivedStateFromProps;
      (ge = typeof Pe == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (M !== Se || ve !== z) && Ih(r, T, c, z), Io = !1, ve = r.memoizedState, T.state = ve, tf(r, c, T, h);
      var We = r.memoizedState;
      M !== Se || ve !== We || Hn.current || Io ? (typeof Pe == "function" && (kl(r, o, Pe, c), We = r.memoizedState), (te = Io || Vh(r, o, te, c, ve, We, z) || !1) ? (ge || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(c, We, z), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(c, We, z)), typeof T.componentDidUpdate == "function" && (r.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || M === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = We), T.props = c, T.state = We, T.context = z, c = te) : (typeof T.componentDidUpdate != "function" || M === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Rf(n, r, o, c, S, h);
  }
  function Rf(n, r, o, c, h, S) {
    Ll(n, r);
    var T = (r.flags & 128) !== 0;
    if (!c && !T)
      return h && Nh(r, o, !1), Wn(n, r, S);
    c = r.stateNode, Qh.current = r;
    var M = T && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && T ? (r.child = xu(r, n.child, null, S), r.child = xu(r, null, M, S)) : Yn(n, r, M, S), r.memoizedState = c.state, h && Nh(r, o, !0), r.child;
  }
  function Ag(n) {
    var r = n.stateNode;
    r.pendingContext ? Vo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vo(n, r.context, !1), cp(n, r.containerInfo);
  }
  function Gh(n, r, o, c, h) {
    return jn(), lp(h), r.flags |= 256, Yn(n, r, o, c), r.child;
  }
  var Gs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ml(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Xh(n, r, o) {
    var c = r.pendingProps, h = Ln.current, S = !1, T = (r.flags & 128) !== 0, M;
    if ((M = T) || (M = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), M ? (S = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), cn(Ln, h & 1), n === null)
      return Qc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (T = c.children, n = c.fallback, S ? (c = r.mode, S = r.child, T = { mode: "hidden", children: T }, !(c & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = T) : S = Pf(T, c, 0, null), n = Pl(n, c, o, null), S.return = r, n.return = r, S.sibling = n, r.child = S, r.child.memoizedState = Ml(o), r.memoizedState = Gs, n) : Tf(r, T));
    if (h = n.memoizedState, h !== null && (M = h.dehydrated, M !== null))
      return gp(n, r, T, c, M, h, o);
    if (S) {
      S = c.fallback, T = r.mode, h = n.child, M = h.sibling;
      var z = { mode: "hidden", children: c.children };
      return !(T & 1) && r.child !== h ? (c = r.child, c.childLanes = 0, c.pendingProps = z, r.deletions = null) : (c = Xo(h, z), c.subtreeFlags = h.subtreeFlags & 14680064), M !== null ? S = Xo(M, S) : (S = Pl(S, T, o, null), S.flags |= 2), S.return = r, c.return = r, c.sibling = S, r.child = c, c = S, S = r.child, T = n.child.memoizedState, T = T === null ? Ml(o) : { baseLanes: T.baseLanes | o, cachePool: null, transitions: T.transitions }, S.memoizedState = T, S.childLanes = n.childLanes & ~o, r.memoizedState = Gs, c;
    }
    return S = n.child, n = S.sibling, c = Xo(S, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function Tf(n, r) {
    return r = Pf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xf(n, r, o, c) {
    return c !== null && lp(c), xu(r, n.child, null, o), n = Tf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function gp(n, r, o, c, h, S, T) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = mp(Error(f(422))), xf(n, r, T, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (S = c.fallback, h = r.mode, c = Pf({ mode: "visible", children: c.children }, h, 0, null), S = Pl(S, h, T, null), S.flags |= 2, c.return = r, S.return = r, c.sibling = S, r.child = c, r.mode & 1 && xu(r, n.child, null, T), r.child.memoizedState = Ml(T), r.memoizedState = Gs, S);
    if (!(r.mode & 1))
      return xf(n, r, T, null);
    if (h.data === "$!") {
      if (c = h.nextSibling && h.nextSibling.dataset, c)
        var M = c.dgst;
      return c = M, S = Error(f(419)), c = mp(S, c, void 0), xf(n, r, T, c);
    }
    if (M = (T & n.childLanes) !== 0, ha || M) {
      if (c = Vn, c !== null) {
        switch (T & -T) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = h & (c.suspendedLanes | T) ? 0 : h, h !== 0 && h !== S.retryLane && (S.retryLane = h, ao(n, h), zn(c, n, h, -1));
      }
      return nc(), c = mp(Error(f(421))), xf(n, r, T, c);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Dp.bind(null, n), h._reactRetry = r, null) : (n = S.treeContext, da = yi(h.nextSibling), Da = r, On = !0, qa = null, n !== null && (fa[zr++] = Er, fa[zr++] = no, fa[zr++] = Wa, Er = n.id, no = n.overflow, Wa = r), r = Tf(r, c.children), r.flags |= 4096, r);
  }
  function Jh(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), sp(n.return, r, o);
  }
  function bf(n, r, o, c, h) {
    var S = n.memoizedState;
    S === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: h } : (S.isBackwards = r, S.rendering = null, S.renderingStartTime = 0, S.last = c, S.tail = o, S.tailMode = h);
  }
  function Sp(n, r, o) {
    var c = r.pendingProps, h = c.revealOrder, S = c.tail;
    if (Yn(n, r, c.children, o), c = Ln.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Jh(n, o, r);
            else if (n.tag === 19)
              Jh(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      c &= 1;
    }
    if (cn(Ln, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (o = r.child, h = null; o !== null; )
            n = o.alternate, n !== null && nf(n) === null && (h = o), o = o.sibling;
          o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), bf(r, !1, h, o, S);
          break;
        case "backwards":
          for (o = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && nf(n) === null) {
              r.child = h;
              break;
            }
            n = h.sibling, h.sibling = o, o = h, h = n;
          }
          bf(r, !0, o, null, S);
          break;
        case "together":
          bf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Xs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Wn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ul |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = Xo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Xo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function oo(n, r, o) {
    switch (r.tag) {
      case 3:
        Ag(r), jn();
        break;
      case 5:
        Hh(r);
        break;
      case 1:
        Nn(r.type) && Wc(r);
        break;
      case 4:
        cp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, h = r.memoizedProps.value;
        cn(ro, c._currentValue), c._currentValue = h;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (cn(Ln, Ln.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Xh(n, r, o) : (cn(Ln, Ln.current & 1), n = Wn(n, r, o), n !== null ? n.sibling : null);
        cn(Ln, Ln.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return Sp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), cn(Ln, Ln.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ma(n, r, o);
    }
    return Wn(n, r, o);
  }
  var Li, zu, Fu, Xa;
  Li = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, zu = function() {
  }, Fu = function(n, r, o, c) {
    var h = n.memoizedProps;
    if (h !== c) {
      n = r.stateNode, wl(gi.current);
      var S = null;
      switch (o) {
        case "input":
          h = rn(n, h), c = rn(n, c), S = [];
          break;
        case "select":
          h = I({}, h, { value: void 0 }), c = I({}, c, { value: void 0 }), S = [];
          break;
        case "textarea":
          h = Mr(n, h), c = Mr(n, c), S = [];
          break;
        default:
          typeof h.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Yc);
      }
      In(o, c);
      var T;
      o = null;
      for (te in h)
        if (!c.hasOwnProperty(te) && h.hasOwnProperty(te) && h[te] != null)
          if (te === "style") {
            var M = h[te];
            for (T in M)
              M.hasOwnProperty(T) && (o || (o = {}), o[T] = "");
          } else
            te !== "dangerouslySetInnerHTML" && te !== "children" && te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && te !== "autoFocus" && (m.hasOwnProperty(te) ? S || (S = []) : (S = S || []).push(te, null));
      for (te in c) {
        var z = c[te];
        if (M = h != null ? h[te] : void 0, c.hasOwnProperty(te) && z !== M && (z != null || M != null))
          if (te === "style")
            if (M) {
              for (T in M)
                !M.hasOwnProperty(T) || z && z.hasOwnProperty(T) || (o || (o = {}), o[T] = "");
              for (T in z)
                z.hasOwnProperty(T) && M[T] !== z[T] && (o || (o = {}), o[T] = z[T]);
            } else
              o || (S || (S = []), S.push(
                te,
                o
              )), o = z;
          else
            te === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, M = M ? M.__html : void 0, z != null && M !== z && (S = S || []).push(te, z)) : te === "children" ? typeof z != "string" && typeof z != "number" || (S = S || []).push(te, "" + z) : te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && (m.hasOwnProperty(te) ? (z != null && te === "onScroll" && Rn("scroll", n), S || M === z || (S = [])) : (S = S || []).push(te, z));
      }
      o && (S = S || []).push("style", o);
      var te = S;
      (r.updateQueue = te) && (r.flags |= 4);
    }
  }, Xa = function(n, r, o, c) {
    o !== c && (r.flags |= 4);
  };
  function Bn(n, r) {
    if (!On)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var c = null; o !== null; )
            o.alternate !== null && (c = o), o = o.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function Hr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, c = 0;
    if (r)
      for (var h = n.child; h !== null; )
        o |= h.lanes | h.childLanes, c |= h.subtreeFlags & 14680064, c |= h.flags & 14680064, h.return = n, h = h.sibling;
    else
      for (h = n.child; h !== null; )
        o |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= c, n.childLanes = o, r;
  }
  function Ug(n, r, o) {
    var c = r.pendingProps;
    switch (ip(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Hr(r), null;
      case 1:
        return Nn(r.type) && Ya(), Hr(r), null;
      case 3:
        return c = r.stateNode, Ou(), nn(Hn), nn(ht), dp(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (Gc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, qa !== null && (wp(qa), qa = null))), zu(n, r), Hr(r), null;
      case 5:
        fp(r);
        var h = wl(Bs.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Fu(n, r, o, c, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(f(166));
            return Hr(r), null;
          }
          if (n = wl(gi.current), Gc(r)) {
            c = r.stateNode, o = r.type;
            var S = r.memoizedProps;
            switch (c[Di] = r, c[Rl] = S, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Rn("cancel", c), Rn("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                Rn("load", c);
                break;
              case "video":
              case "audio":
                for (h = 0; h < Ls.length; h++)
                  Rn(Ls[h], c);
                break;
              case "source":
                Rn("error", c);
                break;
              case "img":
              case "image":
              case "link":
                Rn(
                  "error",
                  c
                ), Rn("load", c);
                break;
              case "details":
                Rn("toggle", c);
                break;
              case "input":
                yt(c, S), Rn("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!S.multiple }, Rn("invalid", c);
                break;
              case "textarea":
                sr(c, S), Rn("invalid", c);
            }
            In(o, S), h = null;
            for (var T in S)
              if (S.hasOwnProperty(T)) {
                var M = S[T];
                T === "children" ? typeof M == "string" ? c.textContent !== M && (S.suppressHydrationWarning !== !0 && Ic(c.textContent, M, n), h = ["children", M]) : typeof M == "number" && c.textContent !== "" + M && (S.suppressHydrationWarning !== !0 && Ic(
                  c.textContent,
                  M,
                  n
                ), h = ["children", "" + M]) : m.hasOwnProperty(T) && M != null && T === "onScroll" && Rn("scroll", c);
              }
            switch (o) {
              case "input":
                Pt(c), Nr(c, S, !0);
                break;
              case "textarea":
                Pt(c), tr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (c.onclick = Yc);
            }
            c = h, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            T = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ct(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = T.createElement(o, { is: c.is }) : (n = T.createElement(o), o === "select" && (T = n, c.multiple ? T.multiple = !0 : c.size && (T.size = c.size))) : n = T.createElementNS(n, o), n[Di] = r, n[Rl] = c, Li(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (T = An(o, c), o) {
                case "dialog":
                  Rn("cancel", n), Rn("close", n), h = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Rn("load", n), h = c;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < Ls.length; h++)
                    Rn(Ls[h], n);
                  h = c;
                  break;
                case "source":
                  Rn("error", n), h = c;
                  break;
                case "img":
                case "image":
                case "link":
                  Rn(
                    "error",
                    n
                  ), Rn("load", n), h = c;
                  break;
                case "details":
                  Rn("toggle", n), h = c;
                  break;
                case "input":
                  yt(n, c), h = rn(n, c), Rn("invalid", n);
                  break;
                case "option":
                  h = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, h = I({}, c, { value: void 0 }), Rn("invalid", n);
                  break;
                case "textarea":
                  sr(n, c), h = Mr(n, c), Rn("invalid", n);
                  break;
                default:
                  h = c;
              }
              In(o, h), M = h;
              for (S in M)
                if (M.hasOwnProperty(S)) {
                  var z = M[S];
                  S === "style" ? tn(n, z) : S === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && Ri(n, z)) : S === "children" ? typeof z == "string" ? (o !== "textarea" || z !== "") && Ta(n, z) : typeof z == "number" && Ta(n, "" + z) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (m.hasOwnProperty(S) ? z != null && S === "onScroll" && Rn("scroll", n) : z != null && ae(n, S, z, T));
                }
              switch (o) {
                case "input":
                  Pt(n), Nr(n, c, !1);
                  break;
                case "textarea":
                  Pt(n), tr(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + Ae(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, S = c.value, S != null ? ur(n, !!c.multiple, S, !1) : c.defaultValue != null && ur(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Yc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Hr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Xa(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = wl(Bs.current), wl(gi.current), Gc(r)) {
            if (c = r.stateNode, o = r.memoizedProps, c[Di] = r, (S = c.nodeValue !== o) && (n = Da, n !== null))
              switch (n.tag) {
                case 3:
                  Ic(c.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ic(c.nodeValue, o, (n.mode & 1) !== 0);
              }
            S && (r.flags |= 4);
          } else
            c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[Di] = r, r.stateNode = c;
        }
        return Hr(r), null;
      case 13:
        if (nn(Ln), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (On && da !== null && r.mode & 1 && !(r.flags & 128))
            Ah(), jn(), r.flags |= 98560, S = !1;
          else if (S = Gc(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!S)
                throw Error(f(318));
              if (S = r.memoizedState, S = S !== null ? S.dehydrated : null, !S)
                throw Error(f(317));
              S[Di] = r;
            } else
              jn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Hr(r), S = !1;
          } else
            qa !== null && (wp(qa), qa = null), S = !0;
          if (!S)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ln.current & 1 ? ar === 0 && (ar = 3) : nc())), r.updateQueue !== null && (r.flags |= 4), Hr(r), null);
      case 4:
        return Ou(), zu(n, r), n === null && Cu(r.stateNode.containerInfo), Hr(r), null;
      case 10:
        return up(r.type._context), Hr(r), null;
      case 17:
        return Nn(r.type) && Ya(), Hr(r), null;
      case 19:
        if (nn(Ln), S = r.memoizedState, S === null)
          return Hr(r), null;
        if (c = (r.flags & 128) !== 0, T = S.rendering, T === null)
          if (c)
            Bn(S, !1);
          else {
            if (ar !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (T = nf(n), T !== null) {
                  for (r.flags |= 128, Bn(S, !1), c = T.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; )
                    S = o, n = c, S.flags &= 14680066, T = S.alternate, T === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = T.childLanes, S.lanes = T.lanes, S.child = T.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = T.memoizedProps, S.memoizedState = T.memoizedState, S.updateQueue = T.updateQueue, S.type = T.type, n = T.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return cn(Ln, Ln.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            S.tail !== null && Qt() > Ku && (r.flags |= 128, c = !0, Bn(S, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = nf(T), n !== null) {
              if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Bn(S, !0), S.tail === null && S.tailMode === "hidden" && !T.alternate && !On)
                return Hr(r), null;
            } else
              2 * Qt() - S.renderingStartTime > Ku && o !== 1073741824 && (r.flags |= 128, c = !0, Bn(S, !1), r.lanes = 4194304);
          S.isBackwards ? (T.sibling = r.child, r.child = T) : (o = S.last, o !== null ? o.sibling = T : r.child = T, S.last = T);
        }
        return S.tail !== null ? (r = S.tail, S.rendering = r, S.tail = r.sibling, S.renderingStartTime = Qt(), r.sibling = null, o = Ln.current, cn(Ln, c ? o & 1 | 2 : o & 1), r) : (Hr(r), null);
      case 22:
      case 23:
        return jf(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? ya & 1073741824 && (Hr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Hr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function jg(n, r) {
    switch (ip(r), r.tag) {
      case 1:
        return Nn(r.type) && Ya(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ou(), nn(Hn), nn(ht), dp(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return fp(r), null;
      case 13:
        if (nn(Ln), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          jn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nn(Ln), null;
      case 4:
        return Ou(), null;
      case 10:
        return up(r.type._context), null;
      case 22:
      case 23:
        return jf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pu = !1, Rr = !1, wf = typeof WeakSet == "function" ? WeakSet : Set, $e = null;
  function Hu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (c) {
          $n(n, r, c);
        }
      else
        o.current = null;
  }
  function Ep(n, r, o) {
    try {
      o();
    } catch (c) {
      $n(n, r, c);
    }
  }
  var _f = !1;
  function zg(n, r) {
    if (Xd = Ba, n = Pc(), Ji(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var h = c.anchorOffset, S = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType, S.nodeType;
            } catch {
              o = null;
              break e;
            }
            var T = 0, M = -1, z = -1, te = 0, ge = 0, Se = n, ve = null;
            t:
              for (; ; ) {
                for (var Pe; Se !== o || h !== 0 && Se.nodeType !== 3 || (M = T + h), Se !== S || c !== 0 && Se.nodeType !== 3 || (z = T + c), Se.nodeType === 3 && (T += Se.nodeValue.length), (Pe = Se.firstChild) !== null; )
                  ve = Se, Se = Pe;
                for (; ; ) {
                  if (Se === n)
                    break t;
                  if (ve === o && ++te === h && (M = T), ve === S && ++ge === c && (z = T), (Pe = Se.nextSibling) !== null)
                    break;
                  Se = ve, ve = Se.parentNode;
                }
                Se = Pe;
              }
            o = M === -1 || z === -1 ? null : { start: M, end: z };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (El = { focusedElem: n, selectionRange: o }, Ba = !1, $e = r; $e !== null; )
      if (r = $e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, $e = n;
      else
        for (; $e !== null; ) {
          r = $e;
          try {
            var We = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (We !== null) {
                    var Qe = We.memoizedProps, qn = We.memoizedState, Y = r.stateNode, P = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? Qe : va(r.type, Qe), qn);
                    Y.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var G = r.stateNode.containerInfo;
                  G.nodeType === 1 ? G.textContent = "" : G.nodeType === 9 && G.documentElement && G.removeChild(G.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (be) {
            $n(r, r.return, be);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, $e = n;
            break;
          }
          $e = r.return;
        }
    return We = _f, _f = !1, We;
  }
  function Bu(n, r, o) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var h = c = c.next;
      do {
        if ((h.tag & n) === n) {
          var S = h.destroy;
          h.destroy = void 0, S !== void 0 && Ep(r, o, S);
        }
        h = h.next;
      } while (h !== c);
    }
  }
  function Of(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var c = o.create;
          o.destroy = c();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Df(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Zh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Zh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Di], delete r[Rl], delete r[ep], delete r[Ng], delete r[tp])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Cp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function em(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Cp(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Js(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Yc));
    else if (c !== 4 && (n = n.child, n !== null))
      for (Js(n, r, o), n = n.sibling; n !== null; )
        Js(n, r, o), n = n.sibling;
  }
  function Vu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (Vu(n, r, o), n = n.sibling; n !== null; )
        Vu(n, r, o), n = n.sibling;
  }
  var Mn = null, hr = !1;
  function Kr(n, r, o) {
    for (o = o.child; o !== null; )
      $u(n, r, o), o = o.sibling;
  }
  function $u(n, r, o) {
    if (aa && typeof aa.onCommitFiberUnmount == "function")
      try {
        aa.onCommitFiberUnmount(Oo, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Rr || Hu(o, r);
      case 6:
        var c = Mn, h = hr;
        Mn = null, Kr(n, r, o), Mn = c, hr = h, Mn !== null && (hr ? (n = Mn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Mn.removeChild(o.stateNode));
        break;
      case 18:
        Mn !== null && (hr ? (n = Mn, o = o.stateNode, n.nodeType === 8 ? Po(n.parentNode, o) : n.nodeType === 1 && Po(n, o), Uo(n)) : Po(Mn, o.stateNode));
        break;
      case 4:
        c = Mn, h = hr, Mn = o.stateNode.containerInfo, hr = !0, Kr(n, r, o), Mn = c, hr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rr && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          h = c = c.next;
          do {
            var S = h, T = S.destroy;
            S = S.tag, T !== void 0 && (S & 2 || S & 4) && Ep(o, r, T), h = h.next;
          } while (h !== c);
        }
        Kr(n, r, o);
        break;
      case 1:
        if (!Rr && (Hu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
          } catch (M) {
            $n(o, r, M);
          }
        Kr(n, r, o);
        break;
      case 21:
        Kr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Rr = (c = Rr) || o.memoizedState !== null, Kr(n, r, o), Rr = c) : Kr(n, r, o);
        break;
      default:
        Kr(n, r, o);
    }
  }
  function Iu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new wf()), r.forEach(function(c) {
        var h = Ig.bind(null, n, c);
        o.has(c) || (o.add(c), c.then(h, h));
      });
    }
  }
  function mr(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var c = 0; c < o.length; c++) {
        var h = o[c];
        try {
          var S = n, T = r, M = T;
          e:
            for (; M !== null; ) {
              switch (M.tag) {
                case 5:
                  Mn = M.stateNode, hr = !1;
                  break e;
                case 3:
                  Mn = M.stateNode.containerInfo, hr = !0;
                  break e;
                case 4:
                  Mn = M.stateNode.containerInfo, hr = !0;
                  break e;
              }
              M = M.return;
            }
          if (Mn === null)
            throw Error(f(160));
          $u(S, T, h), Mn = null, hr = !1;
          var z = h.alternate;
          z !== null && (z.return = null), h.return = null;
        } catch (te) {
          $n(h, r, te);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        tm(r, n), r = r.sibling;
  }
  function tm(n, r) {
    var o = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mr(r, n), Mi(n), c & 4) {
          try {
            Bu(3, n, n.return), Of(3, n);
          } catch (Qe) {
            $n(n, n.return, Qe);
          }
          try {
            Bu(5, n, n.return);
          } catch (Qe) {
            $n(n, n.return, Qe);
          }
        }
        break;
      case 1:
        mr(r, n), Mi(n), c & 512 && o !== null && Hu(o, o.return);
        break;
      case 5:
        if (mr(r, n), Mi(n), c & 512 && o !== null && Hu(o, o.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Ta(h, "");
          } catch (Qe) {
            $n(n, n.return, Qe);
          }
        }
        if (c & 4 && (h = n.stateNode, h != null)) {
          var S = n.memoizedProps, T = o !== null ? o.memoizedProps : S, M = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              M === "input" && S.type === "radio" && S.name != null && bn(h, S), An(M, T);
              var te = An(M, S);
              for (T = 0; T < z.length; T += 2) {
                var ge = z[T], Se = z[T + 1];
                ge === "style" ? tn(h, Se) : ge === "dangerouslySetInnerHTML" ? Ri(h, Se) : ge === "children" ? Ta(h, Se) : ae(h, ge, Se, te);
              }
              switch (M) {
                case "input":
                  gn(h, S);
                  break;
                case "textarea":
                  Ar(h, S);
                  break;
                case "select":
                  var ve = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!S.multiple;
                  var Pe = S.value;
                  Pe != null ? ur(h, !!S.multiple, Pe, !1) : ve !== !!S.multiple && (S.defaultValue != null ? ur(
                    h,
                    !!S.multiple,
                    S.defaultValue,
                    !0
                  ) : ur(h, !!S.multiple, S.multiple ? [] : "", !1));
              }
              h[Rl] = S;
            } catch (Qe) {
              $n(n, n.return, Qe);
            }
        }
        break;
      case 6:
        if (mr(r, n), Mi(n), c & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          h = n.stateNode, S = n.memoizedProps;
          try {
            h.nodeValue = S;
          } catch (Qe) {
            $n(n, n.return, Qe);
          }
        }
        break;
      case 3:
        if (mr(r, n), Mi(n), c & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Uo(r.containerInfo);
          } catch (Qe) {
            $n(n, n.return, Qe);
          }
        break;
      case 4:
        mr(r, n), Mi(n);
        break;
      case 13:
        mr(r, n), Mi(n), h = n.child, h.flags & 8192 && (S = h.memoizedState !== null, h.stateNode.isHidden = S, !S || h.alternate !== null && h.alternate.memoizedState !== null || (Nf = Qt())), c & 4 && Iu(n);
        break;
      case 22:
        if (ge = o !== null && o.memoizedState !== null, n.mode & 1 ? (Rr = (te = Rr) || ge, mr(r, n), Rr = te) : mr(r, n), Mi(n), c & 8192) {
          if (te = n.memoizedState !== null, (n.stateNode.isHidden = te) && !ge && n.mode & 1)
            for ($e = n, ge = n.child; ge !== null; ) {
              for (Se = $e = ge; $e !== null; ) {
                switch (ve = $e, Pe = ve.child, ve.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bu(4, ve, ve.return);
                    break;
                  case 1:
                    Hu(ve, ve.return);
                    var We = ve.stateNode;
                    if (typeof We.componentWillUnmount == "function") {
                      c = ve, o = ve.return;
                      try {
                        r = c, We.props = r.memoizedProps, We.state = r.memoizedState, We.componentWillUnmount();
                      } catch (Qe) {
                        $n(c, o, Qe);
                      }
                    }
                    break;
                  case 5:
                    Hu(ve, ve.return);
                    break;
                  case 22:
                    if (ve.memoizedState !== null) {
                      nm(Se);
                      continue;
                    }
                }
                Pe !== null ? (Pe.return = ve, $e = Pe) : nm(Se);
              }
              ge = ge.sibling;
            }
          e:
            for (ge = null, Se = n; ; ) {
              if (Se.tag === 5) {
                if (ge === null) {
                  ge = Se;
                  try {
                    h = Se.stateNode, te ? (S = h.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (M = Se.stateNode, z = Se.memoizedProps.style, T = z != null && z.hasOwnProperty("display") ? z.display : null, M.style.display = Dt("display", T));
                  } catch (Qe) {
                    $n(n, n.return, Qe);
                  }
                }
              } else if (Se.tag === 6) {
                if (ge === null)
                  try {
                    Se.stateNode.nodeValue = te ? "" : Se.memoizedProps;
                  } catch (Qe) {
                    $n(n, n.return, Qe);
                  }
              } else if ((Se.tag !== 22 && Se.tag !== 23 || Se.memoizedState === null || Se === n) && Se.child !== null) {
                Se.child.return = Se, Se = Se.child;
                continue;
              }
              if (Se === n)
                break e;
              for (; Se.sibling === null; ) {
                if (Se.return === null || Se.return === n)
                  break e;
                ge === Se && (ge = null), Se = Se.return;
              }
              ge === Se && (ge = null), Se.sibling.return = Se.return, Se = Se.sibling;
            }
        }
        break;
      case 19:
        mr(r, n), Mi(n), c & 4 && Iu(n);
        break;
      case 21:
        break;
      default:
        mr(
          r,
          n
        ), Mi(n);
    }
  }
  function Mi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Cp(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (c.tag) {
          case 5:
            var h = c.stateNode;
            c.flags & 32 && (Ta(h, ""), c.flags &= -33);
            var S = em(n);
            Vu(n, S, h);
            break;
          case 3:
          case 4:
            var T = c.stateNode.containerInfo, M = em(n);
            Js(n, M, T);
            break;
          default:
            throw Error(f(161));
        }
      } catch (z) {
        $n(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Fg(n, r, o) {
    $e = n, Rp(n);
  }
  function Rp(n, r, o) {
    for (var c = (n.mode & 1) !== 0; $e !== null; ) {
      var h = $e, S = h.child;
      if (h.tag === 22 && c) {
        var T = h.memoizedState !== null || Pu;
        if (!T) {
          var M = h.alternate, z = M !== null && M.memoizedState !== null || Rr;
          M = Pu;
          var te = Rr;
          if (Pu = T, (Rr = z) && !te)
            for ($e = h; $e !== null; )
              T = $e, z = T.child, T.tag === 22 && T.memoizedState !== null ? Tp(h) : z !== null ? (z.return = T, $e = z) : Tp(h);
          for (; S !== null; )
            $e = S, Rp(S), S = S.sibling;
          $e = h, Pu = M, Rr = te;
        }
        Yu(n);
      } else
        h.subtreeFlags & 8772 && S !== null ? (S.return = h, $e = S) : Yu(n);
    }
  }
  function Yu(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Rr || Of(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !Rr)
                  if (o === null)
                    c.componentDidMount();
                  else {
                    var h = r.elementType === r.type ? o.memoizedProps : va(r.type, o.memoizedProps);
                    c.componentDidUpdate(h, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var S = r.updateQueue;
                S !== null && Ph(r, S, c);
                break;
              case 3:
                var T = r.updateQueue;
                if (T !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Ph(r, T, o);
                }
                break;
              case 5:
                var M = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = M;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && o.focus();
                      break;
                    case "img":
                      z.src && (o.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var te = r.alternate;
                  if (te !== null) {
                    var ge = te.memoizedState;
                    if (ge !== null) {
                      var Se = ge.dehydrated;
                      Se !== null && Uo(Se);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(f(163));
            }
          Rr || r.flags & 512 && Df(r);
        } catch (ve) {
          $n(r, r.return, ve);
        }
      }
      if (r === n) {
        $e = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, $e = o;
        break;
      }
      $e = r.return;
    }
  }
  function nm(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r === n) {
        $e = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, $e = o;
        break;
      }
      $e = r.return;
    }
  }
  function Tp(n) {
    for (; $e !== null; ) {
      var r = $e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Of(4, r);
            } catch (z) {
              $n(r, o, z);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var h = r.return;
              try {
                c.componentDidMount();
              } catch (z) {
                $n(r, h, z);
              }
            }
            var S = r.return;
            try {
              Df(r);
            } catch (z) {
              $n(r, S, z);
            }
            break;
          case 5:
            var T = r.return;
            try {
              Df(r);
            } catch (z) {
              $n(r, T, z);
            }
        }
      } catch (z) {
        $n(r, r.return, z);
      }
      if (r === n) {
        $e = null;
        break;
      }
      var M = r.sibling;
      if (M !== null) {
        M.return = r.return, $e = M;
        break;
      }
      $e = r.return;
    }
  }
  var Pg = Math.ceil, Al = ce.ReactCurrentDispatcher, kf = ce.ReactCurrentOwner, Ja = ce.ReactCurrentBatchConfig, zt = 0, Vn = null, Dn = null, rr = 0, ya = 0, Wu = wt(0), ar = 0, Zs = null, Ul = 0, qu = 0, xp = 0, Qo = null, Br = null, Nf = 0, Ku = 1 / 0, lo = null, Lf = !1, bp = null, Za = null, Qu = !1, ei = null, Mf = 0, ec = 0, Af = null, tc = -1, jl = 0;
  function yr() {
    return zt & 6 ? Qt() : tc !== -1 ? tc : tc = Qt();
  }
  function uo(n) {
    return n.mode & 1 ? zt & 2 && rr !== 0 ? rr & -rr : Xc.transition !== null ? (jl === 0 && (jl = lu()), jl) : (n = Gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ts(n.type)), n) : 1;
  }
  function zn(n, r, o, c) {
    if (50 < ec)
      throw ec = 0, Af = null, Error(f(185));
    Wi(n, o, c), (!(zt & 2) || n !== Vn) && (n === Vn && (!(zt & 2) && (qu |= o), ar === 4 && Ai(n, rr)), ir(n, c), o === 1 && zt === 0 && !(r.mode & 1) && (Ku = Qt() + 500, vr && sa()));
  }
  function ir(n, r) {
    var o = n.callbackNode;
    No(n, r);
    var c = Wr(n, n === Vn ? rr : 0);
    if (c === 0)
      o !== null && wn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && wn(o), r === 1)
        n.tag === 0 ? rp(Gu.bind(null, n)) : np(Gu.bind(null, n)), Zd(function() {
          !(zt & 6) && sa();
        }), o = null;
      else {
        switch (su(c)) {
          case 1:
            o = Ir;
            break;
          case 4:
            o = Nt;
            break;
          case 16:
            o = Pa;
            break;
          case 536870912:
            o = iu;
            break;
          default:
            o = Pa;
        }
        o = cm(o, Uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Uf(n, r) {
    if (tc = -1, jl = 0, zt & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (Xu() && n.callbackNode !== o)
      return null;
    var c = Wr(n, n === Vn ? rr : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = zf(n, c);
    else {
      r = c;
      var h = zt;
      zt |= 2;
      var S = am();
      (Vn !== n || rr !== r) && (lo = null, Ku = Qt() + 500, Fl(n, r));
      do
        try {
          Bg();
          break;
        } catch (M) {
          rm(n, M);
        }
      while (!0);
      ka(), Al.current = S, zt = h, Dn !== null ? r = 0 : (Vn = null, rr = 0, r = ar);
    }
    if (r !== 0) {
      if (r === 2 && (h = Lo(n), h !== 0 && (c = h, r = zl(n, h))), r === 1)
        throw o = Zs, Fl(n, 0), Ai(n, c), ir(n, Qt()), o;
      if (r === 6)
        Ai(n, c);
      else {
        if (h = n.current.alternate, !(c & 30) && !_p(h) && (r = zf(n, c), r === 2 && (S = Lo(n), S !== 0 && (c = S, r = zl(n, S))), r === 1))
          throw o = Zs, Fl(n, 0), Ai(n, c), ir(n, Qt()), o;
        switch (n.finishedWork = h, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Go(n, Br, lo);
            break;
          case 3:
            if (Ai(n, c), (c & 130023424) === c && (r = Nf + 500 - Qt(), 10 < r)) {
              if (Wr(n, 0) !== 0)
                break;
              if (h = n.suspendedLanes, (h & c) !== c) {
                yr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = Cl(Go.bind(null, n, Br, lo), r);
              break;
            }
            Go(n, Br, lo);
            break;
          case 4:
            if (Ai(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, h = -1; 0 < c; ) {
              var T = 31 - Yr(c);
              S = 1 << T, T = r[T], T > h && (h = T), c &= ~S;
            }
            if (c = h, c = Qt() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * Pg(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Cl(Go.bind(null, n, Br, lo), c);
              break;
            }
            Go(n, Br, lo);
            break;
          case 5:
            Go(n, Br, lo);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return ir(n, Qt()), n.callbackNode === o ? Uf.bind(null, n) : null;
  }
  function zl(n, r) {
    var o = Qo;
    return n.current.memoizedState.isDehydrated && (Fl(n, r).flags |= 256), n = zf(n, r), n !== 2 && (r = Br, Br = o, r !== null && wp(r)), n;
  }
  function wp(n) {
    Br === null ? Br = n : Br.push.apply(Br, n);
  }
  function _p(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var c = 0; c < o.length; c++) {
            var h = o[c], S = h.getSnapshot;
            h = h.value;
            try {
              if (!Va(S(), h))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ai(n, r) {
    for (r &= ~xp, r &= ~qu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Yr(r), c = 1 << o;
      n[o] = -1, r &= ~c;
    }
  }
  function Gu(n) {
    if (zt & 6)
      throw Error(f(327));
    Xu();
    var r = Wr(n, 0);
    if (!(r & 1))
      return ir(n, Qt()), null;
    var o = zf(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = Lo(n);
      c !== 0 && (r = c, o = zl(n, c));
    }
    if (o === 1)
      throw o = Zs, Fl(n, 0), Ai(n, r), ir(n, Qt()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Go(n, Br, lo), ir(n, Qt()), null;
  }
  function Op(n, r) {
    var o = zt;
    zt |= 1;
    try {
      return n(r);
    } finally {
      zt = o, zt === 0 && (Ku = Qt() + 500, vr && sa());
    }
  }
  function Ui(n) {
    ei !== null && ei.tag === 0 && !(zt & 6) && Xu();
    var r = zt;
    zt |= 1;
    var o = Ja.transition, c = Gt;
    try {
      if (Ja.transition = null, Gt = 1, n)
        return n();
    } finally {
      Gt = c, Ja.transition = o, zt = r, !(zt & 6) && sa();
    }
  }
  function jf() {
    ya = Wu.current, nn(Wu);
  }
  function Fl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, kh(o)), Dn !== null)
      for (o = Dn.return; o !== null; ) {
        var c = o;
        switch (ip(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && Ya();
            break;
          case 3:
            Ou(), nn(Hn), nn(ht), dp();
            break;
          case 5:
            fp(c);
            break;
          case 4:
            Ou();
            break;
          case 13:
            nn(Ln);
            break;
          case 19:
            nn(Ln);
            break;
          case 10:
            up(c.type._context);
            break;
          case 22:
          case 23:
            jf();
        }
        o = o.return;
      }
    if (Vn = n, Dn = n = Xo(n.current, null), rr = ya = r, ar = 0, Zs = null, xp = qu = Ul = 0, Br = Qo = null, bl !== null) {
      for (r = 0; r < bl.length; r++)
        if (o = bl[r], c = o.interleaved, c !== null) {
          o.interleaved = null;
          var h = c.next, S = o.pending;
          if (S !== null) {
            var T = S.next;
            S.next = h, c.next = T;
          }
          o.pending = c;
        }
      bl = null;
    }
    return n;
  }
  function rm(n, r) {
    do {
      var o = Dn;
      try {
        if (ka(), af.current = Pr, Na) {
          for (var c = Ze.memoizedState; c !== null; ) {
            var h = c.queue;
            h !== null && (h.pending = null), c = c.next;
          }
          Na = !1;
        }
        if (Ge = 0, At = mt = Ze = null, Du = !1, $s = 0, kf.current = null, o === null || o.return === null) {
          ar = 1, Zs = r, Dn = null;
          break;
        }
        e: {
          var S = n, T = o.return, M = o, z = r;
          if (r = rr, M.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var te = z, ge = M, Se = ge.tag;
            if (!(ge.mode & 1) && (Se === 0 || Se === 11 || Se === 15)) {
              var ve = ge.alternate;
              ve ? (ge.updateQueue = ve.updateQueue, ge.memoizedState = ve.memoizedState, ge.lanes = ve.lanes) : (ge.updateQueue = null, ge.memoizedState = null);
            }
            var Pe = Kh(T);
            if (Pe !== null) {
              Pe.flags &= -257, yp(Pe, T, M, S, r), Pe.mode & 1 && Ks(S, te, r), r = Pe, z = te;
              var We = r.updateQueue;
              if (We === null) {
                var Qe = /* @__PURE__ */ new Set();
                Qe.add(z), r.updateQueue = Qe;
              } else
                We.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                Ks(S, te, r), nc();
                break e;
              }
              z = Error(f(426));
            }
          } else if (On && M.mode & 1) {
            var qn = Kh(T);
            if (qn !== null) {
              !(qn.flags & 65536) && (qn.flags |= 256), yp(qn, T, M, S, r), lp(qo(z, M));
              break e;
            }
          }
          S = z = qo(z, M), ar !== 4 && (ar = 2), Qo === null ? Qo = [S] : Qo.push(S), S = T;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, r &= -r, S.lanes |= r;
                var Y = Wh(S, z, r);
                Fh(S, Y);
                break e;
              case 1:
                M = z;
                var P = S.type, G = S.stateNode;
                if (!(S.flags & 128) && (typeof P.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (Za === null || !Za.has(G)))) {
                  S.flags |= 65536, r &= -r, S.lanes |= r;
                  var be = qh(S, M, r);
                  Fh(S, be);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        om(o);
      } catch (Xe) {
        r = Xe, Dn === o && o !== null && (Dn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function am() {
    var n = Al.current;
    return Al.current = Pr, n === null ? Pr : n;
  }
  function nc() {
    (ar === 0 || ar === 3 || ar === 2) && (ar = 4), Vn === null || !(Ul & 268435455) && !(qu & 268435455) || Ai(Vn, rr);
  }
  function zf(n, r) {
    var o = zt;
    zt |= 2;
    var c = am();
    (Vn !== n || rr !== r) && (lo = null, Fl(n, r));
    do
      try {
        Hg();
        break;
      } catch (h) {
        rm(n, h);
      }
    while (!0);
    if (ka(), zt = o, Al.current = c, Dn !== null)
      throw Error(f(261));
    return Vn = null, rr = 0, ar;
  }
  function Hg() {
    for (; Dn !== null; )
      im(Dn);
  }
  function Bg() {
    for (; Dn !== null && !jr(); )
      im(Dn);
  }
  function im(n) {
    var r = sm(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? om(n) : Dn = r, kf.current = null;
  }
  function om(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = jg(o, r), o !== null) {
          o.flags &= 32767, Dn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ar = 6, Dn = null;
          return;
        }
      } else if (o = Ug(o, r, ya), o !== null) {
        Dn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Dn = r;
        return;
      }
      Dn = r = n;
    } while (r !== null);
    ar === 0 && (ar = 5);
  }
  function Go(n, r, o) {
    var c = Gt, h = Ja.transition;
    try {
      Ja.transition = null, Gt = 1, Vg(n, r, o, c);
    } finally {
      Ja.transition = h, Gt = c;
    }
    return null;
  }
  function Vg(n, r, o, c) {
    do
      Xu();
    while (ei !== null);
    if (zt & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var h = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var S = o.lanes | o.childLanes;
    if (Ld(n, S), n === Vn && (Dn = Vn = null, rr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Qu || (Qu = !0, cm(Pa, function() {
      return Xu(), null;
    })), S = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || S) {
      S = Ja.transition, Ja.transition = null;
      var T = Gt;
      Gt = 1;
      var M = zt;
      zt |= 4, kf.current = null, zg(n, o), tm(o, n), Hc(El), Ba = !!Xd, El = Xd = null, n.current = o, Fg(o), wi(), zt = M, Gt = T, Ja.transition = S;
    } else
      n.current = o;
    if (Qu && (Qu = !1, ei = n, Mf = h), S = n.pendingLanes, S === 0 && (Za = null), Es(o.stateNode), ir(n, Qt()), r !== null)
      for (c = n.onRecoverableError, o = 0; o < r.length; o++)
        h = r[o], c(h.value, { componentStack: h.stack, digest: h.digest });
    if (Lf)
      throw Lf = !1, n = bp, bp = null, n;
    return Mf & 1 && n.tag !== 0 && Xu(), S = n.pendingLanes, S & 1 ? n === Af ? ec++ : (ec = 0, Af = n) : ec = 0, sa(), null;
  }
  function Xu() {
    if (ei !== null) {
      var n = su(Mf), r = Ja.transition, o = Gt;
      try {
        if (Ja.transition = null, Gt = 16 > n ? 16 : n, ei === null)
          var c = !1;
        else {
          if (n = ei, ei = null, Mf = 0, zt & 6)
            throw Error(f(331));
          var h = zt;
          for (zt |= 4, $e = n.current; $e !== null; ) {
            var S = $e, T = S.child;
            if ($e.flags & 16) {
              var M = S.deletions;
              if (M !== null) {
                for (var z = 0; z < M.length; z++) {
                  var te = M[z];
                  for ($e = te; $e !== null; ) {
                    var ge = $e;
                    switch (ge.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bu(8, ge, S);
                    }
                    var Se = ge.child;
                    if (Se !== null)
                      Se.return = ge, $e = Se;
                    else
                      for (; $e !== null; ) {
                        ge = $e;
                        var ve = ge.sibling, Pe = ge.return;
                        if (Zh(ge), ge === te) {
                          $e = null;
                          break;
                        }
                        if (ve !== null) {
                          ve.return = Pe, $e = ve;
                          break;
                        }
                        $e = Pe;
                      }
                  }
                }
                var We = S.alternate;
                if (We !== null) {
                  var Qe = We.child;
                  if (Qe !== null) {
                    We.child = null;
                    do {
                      var qn = Qe.sibling;
                      Qe.sibling = null, Qe = qn;
                    } while (Qe !== null);
                  }
                }
                $e = S;
              }
            }
            if (S.subtreeFlags & 2064 && T !== null)
              T.return = S, $e = T;
            else
              e:
                for (; $e !== null; ) {
                  if (S = $e, S.flags & 2048)
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bu(9, S, S.return);
                    }
                  var Y = S.sibling;
                  if (Y !== null) {
                    Y.return = S.return, $e = Y;
                    break e;
                  }
                  $e = S.return;
                }
          }
          var P = n.current;
          for ($e = P; $e !== null; ) {
            T = $e;
            var G = T.child;
            if (T.subtreeFlags & 2064 && G !== null)
              G.return = T, $e = G;
            else
              e:
                for (T = P; $e !== null; ) {
                  if (M = $e, M.flags & 2048)
                    try {
                      switch (M.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Of(9, M);
                      }
                    } catch (Xe) {
                      $n(M, M.return, Xe);
                    }
                  if (M === T) {
                    $e = null;
                    break e;
                  }
                  var be = M.sibling;
                  if (be !== null) {
                    be.return = M.return, $e = be;
                    break e;
                  }
                  $e = M.return;
                }
          }
          if (zt = h, sa(), aa && typeof aa.onPostCommitFiberRoot == "function")
            try {
              aa.onPostCommitFiberRoot(Oo, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Gt = o, Ja.transition = r;
      }
    }
    return !1;
  }
  function lm(n, r, o) {
    r = qo(o, r), r = Wh(n, r, 1), n = Yo(n, r, 1), r = yr(), n !== null && (Wi(n, 1, r), ir(n, r));
  }
  function $n(n, r, o) {
    if (n.tag === 3)
      lm(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          lm(r, n, o);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Za === null || !Za.has(c))) {
            n = qo(o, n), n = qh(r, n, 1), r = Yo(r, n, 1), n = yr(), r !== null && (Wi(r, 1, n), ir(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function $g(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = yr(), n.pingedLanes |= n.suspendedLanes & o, Vn === n && (rr & o) === o && (ar === 4 || ar === 3 && (rr & 130023424) === rr && 500 > Qt() - Nf ? Fl(n, 0) : xp |= o), ir(n, r);
  }
  function um(n, r) {
    r === 0 && (n.mode & 1 ? (r = Do, Do <<= 1, !(Do & 130023424) && (Do = 4194304)) : r = 1);
    var o = yr();
    n = ao(n, r), n !== null && (Wi(n, r, o), ir(n, o));
  }
  function Dp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), um(n, o);
  }
  function Ig(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, h = n.memoizedState;
        h !== null && (o = h.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    c !== null && c.delete(r), um(n, o);
  }
  var sm;
  sm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Hn.current)
        ha = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return ha = !1, oo(n, r, o);
        ha = !!(n.flags & 131072);
      }
    else
      ha = !1, On && r.flags & 1048576 && ap(r, Tu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        Xs(n, r), n = r.pendingProps;
        var h = Ia(r, ht.current);
        bu(r, o), h = de(null, r, c, n, h, o);
        var S = Zn();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(c) ? (S = !0, Wc(r)) : S = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Zc(r), h.updater = Nl, r.stateNode = h, h._reactInternals = r, hp(r, c, n, o), r = Rf(null, r, c, !0, S, o)) : (r.tag = 0, On && S && qc(r), Yn(null, r, h, o), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (Xs(n, r), n = r.pendingProps, h = c._init, c = h(c._payload), r.type = c, h = r.tag = Yg(c), n = va(c, n), h) {
            case 0:
              r = bt(null, r, c, n, o);
              break e;
            case 1:
              r = Qs(null, r, c, n, o);
              break e;
            case 11:
              r = ju(null, r, c, n, o);
              break e;
            case 14:
              r = Ko(null, r, c, va(c.type, n), o);
              break e;
          }
          throw Error(f(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : va(c, h), bt(n, r, c, h, o);
      case 1:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : va(c, h), Qs(n, r, c, h, o);
      case 3:
        e: {
          if (Ag(r), n === null)
            throw Error(f(387));
          c = r.pendingProps, S = r.memoizedState, h = S.element, wu(n, r), tf(r, c, null, o);
          var T = r.memoizedState;
          if (c = T.element, S.isDehydrated)
            if (S = { element: c, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, r.updateQueue.baseState = S, r.memoizedState = S, r.flags & 256) {
              h = qo(Error(f(423)), r), r = Gh(n, r, c, o, h);
              break e;
            } else if (c !== h) {
              h = qo(Error(f(424)), r), r = Gh(n, r, c, o, h);
              break e;
            } else
              for (da = yi(r.stateNode.containerInfo.firstChild), Da = r, On = !0, qa = null, o = jh(r, null, c, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (jn(), c === h) {
              r = Wn(n, r, o);
              break e;
            }
            Yn(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Hh(r), n === null && Qc(r), c = r.type, h = r.pendingProps, S = n !== null ? n.memoizedProps : null, T = h.children, Us(c, h) ? T = null : S !== null && Us(c, S) && (r.flags |= 32), Ll(n, r), Yn(n, r, T, o), r.child;
      case 6:
        return n === null && Qc(r), null;
      case 13:
        return Xh(n, r, o);
      case 4:
        return cp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = xu(r, null, c, o) : Yn(n, r, c, o), r.child;
      case 11:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : va(c, h), ju(n, r, c, h, o);
      case 7:
        return Yn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Yn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Yn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, h = r.pendingProps, S = r.memoizedProps, T = h.value, cn(ro, c._currentValue), c._currentValue = T, S !== null)
            if (Va(S.value, T)) {
              if (S.children === h.children && !Hn.current) {
                r = Wn(n, r, o);
                break e;
              }
            } else
              for (S = r.child, S !== null && (S.return = r); S !== null; ) {
                var M = S.dependencies;
                if (M !== null) {
                  T = S.child;
                  for (var z = M.firstContext; z !== null; ) {
                    if (z.context === c) {
                      if (S.tag === 1) {
                        z = pa(-1, o & -o), z.tag = 2;
                        var te = S.updateQueue;
                        if (te !== null) {
                          te = te.shared;
                          var ge = te.pending;
                          ge === null ? z.next = z : (z.next = ge.next, ge.next = z), te.pending = z;
                        }
                      }
                      S.lanes |= o, z = S.alternate, z !== null && (z.lanes |= o), sp(
                        S.return,
                        o,
                        r
                      ), M.lanes |= o;
                      break;
                    }
                    z = z.next;
                  }
                } else if (S.tag === 10)
                  T = S.type === r.type ? null : S.child;
                else if (S.tag === 18) {
                  if (T = S.return, T === null)
                    throw Error(f(341));
                  T.lanes |= o, M = T.alternate, M !== null && (M.lanes |= o), sp(T, o, r), T = S.sibling;
                } else
                  T = S.child;
                if (T !== null)
                  T.return = S;
                else
                  for (T = S; T !== null; ) {
                    if (T === r) {
                      T = null;
                      break;
                    }
                    if (S = T.sibling, S !== null) {
                      S.return = T.return, T = S;
                      break;
                    }
                    T = T.return;
                  }
                S = T;
              }
          Yn(n, r, h.children, o), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, c = r.pendingProps.children, bu(r, o), h = Qa(h), c = c(h), r.flags |= 1, Yn(n, r, c, o), r.child;
      case 14:
        return c = r.type, h = va(c, r.pendingProps), h = va(c.type, h), Ko(n, r, c, h, o);
      case 15:
        return Cf(n, r, r.type, r.pendingProps, o);
      case 17:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : va(c, h), Xs(n, r), r.tag = 1, Nn(c) ? (n = !0, Wc(r)) : n = !1, bu(r, o), $h(r, c, h), hp(r, c, h, o), Rf(null, r, c, !0, n, o);
      case 19:
        return Sp(n, r, o);
      case 22:
        return ma(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function cm(n, r) {
    return Sn(n, r);
  }
  function fm(n, r, o, c) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ti(n, r, o, c) {
    return new fm(n, r, o, c);
  }
  function kp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Yg(n) {
    if (typeof n == "function")
      return kp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Kt)
        return 11;
      if (n === Ot)
        return 14;
    }
    return 2;
  }
  function Xo(n, r) {
    var o = n.alternate;
    return o === null ? (o = ti(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ff(n, r, o, c, h, S) {
    var T = 2;
    if (c = n, typeof n == "function")
      kp(n) && (T = 1);
    else if (typeof n == "string")
      T = 5;
    else
      e:
        switch (n) {
          case Me:
            return Pl(o.children, h, S, r);
          case vt:
            T = 8, h |= 8;
            break;
          case Wt:
            return n = ti(12, o, r, h | 2), n.elementType = Wt, n.lanes = S, n;
          case Ye:
            return n = ti(13, o, r, h), n.elementType = Ye, n.lanes = S, n;
          case tt:
            return n = ti(19, o, r, h), n.elementType = tt, n.lanes = S, n;
          case Oe:
            return Pf(o, h, S, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case xt:
                  T = 10;
                  break e;
                case gt:
                  T = 9;
                  break e;
                case Kt:
                  T = 11;
                  break e;
                case Ot:
                  T = 14;
                  break e;
                case at:
                  T = 16, c = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = ti(T, o, r, h), r.elementType = n, r.type = c, r.lanes = S, r;
  }
  function Pl(n, r, o, c) {
    return n = ti(7, n, c, r), n.lanes = o, n;
  }
  function Pf(n, r, o, c) {
    return n = ti(22, n, c, r), n.elementType = Oe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Hf(n, r, o) {
    return n = ti(6, n, null, r), n.lanes = o, n;
  }
  function rc(n, r, o) {
    return r = ti(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ac(n, r, o, c, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = c, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Np(n, r, o, c, h, S, T, M, z) {
    return n = new ac(n, r, o, M, z), r === 1 ? (r = 1, S === !0 && (r |= 8)) : r = 0, S = ti(3, null, null, r), n.current = S, S.stateNode = n, S.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zc(S), n;
  }
  function dm(n, r, o) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: o };
  }
  function Lp(n) {
    if (!n)
      return ki;
    n = n._reactInternals;
    e: {
      if (Je(n) !== n || n.tag !== 1)
        throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Nn(o))
        return Fs(n, o, r);
    }
    return r;
  }
  function Mp(n, r, o, c, h, S, T, M, z) {
    return n = Np(o, c, !0, n, h, S, T, M, z), n.context = Lp(null), o = n.current, c = yr(), h = uo(o), S = pa(c, h), S.callback = r ?? null, Yo(o, S, h), n.current.lanes = h, Wi(n, h, c), ir(n, c), n;
  }
  function Bf(n, r, o, c) {
    var h = r.current, S = yr(), T = uo(h);
    return o = Lp(o), r.context === null ? r.context = o : r.pendingContext = o, r = pa(S, T), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = Yo(h, r, T), n !== null && (zn(n, h, T, S), ef(n, h, T)), T;
  }
  function ic(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function pm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Ap(n, r) {
    pm(n, r), (n = n.alternate) && pm(n, r);
  }
  function Wg() {
    return null;
  }
  var Up = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Vf(n) {
    this._internalRoot = n;
  }
  oc.prototype.render = Vf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Bf(n, r, null, null);
  }, oc.prototype.unmount = Vf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ui(function() {
        Bf(null, n, null, null);
      }), r[to] = null;
    }
  };
  function oc(n) {
    this._internalRoot = n;
  }
  oc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = fu();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < sn.length && r !== 0 && r < sn[o].priority; o++)
        ;
      sn.splice(o, 0, n), o === 0 && Mc(n);
    }
  };
  function Jo(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function $f(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vm() {
  }
  function qg(n, r, o, c, h) {
    if (h) {
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var te = ic(T);
          S.call(te);
        };
      }
      var T = Mp(r, c, n, 0, null, !1, !1, "", vm);
      return n._reactRootContainer = T, n[to] = T.current, Cu(n.nodeType === 8 ? n.parentNode : n), Ui(), T;
    }
    for (; h = n.lastChild; )
      n.removeChild(h);
    if (typeof c == "function") {
      var M = c;
      c = function() {
        var te = ic(z);
        M.call(te);
      };
    }
    var z = Np(n, 0, !1, null, null, !1, !1, "", vm);
    return n._reactRootContainer = z, n[to] = z.current, Cu(n.nodeType === 8 ? n.parentNode : n), Ui(function() {
      Bf(r, z, o, c);
    }), z;
  }
  function If(n, r, o, c, h) {
    var S = o._reactRootContainer;
    if (S) {
      var T = S;
      if (typeof h == "function") {
        var M = h;
        h = function() {
          var z = ic(T);
          M.call(z);
        };
      }
      Bf(r, T, n, h);
    } else
      T = qg(o, r, n, h, c);
    return ic(T);
  }
  pl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = di(r.pendingLanes);
          o !== 0 && (_i(r, o | 1), ir(r, Qt()), !(zt & 6) && (Ku = Qt() + 500, sa()));
        }
        break;
      case 13:
        Ui(function() {
          var c = ao(n, 1);
          if (c !== null) {
            var h = yr();
            zn(c, n, 1, h);
          }
        }), Ap(n, 1);
    }
  }, cu = function(n) {
    if (n.tag === 13) {
      var r = ao(n, 134217728);
      if (r !== null) {
        var o = yr();
        zn(r, n, 134217728, o);
      }
      Ap(n, 134217728);
    }
  }, Bt = function(n) {
    if (n.tag === 13) {
      var r = uo(n), o = ao(n, r);
      if (o !== null) {
        var c = yr();
        zn(o, n, r, c);
      }
      Ap(n, r);
    }
  }, fu = function() {
    return Gt;
  }, du = function(n, r) {
    var o = Gt;
    try {
      return Gt = n, r();
    } finally {
      Gt = o;
    }
  }, Vr = function(n, r, o) {
    switch (r) {
      case "input":
        if (gn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var c = o[r];
            if (c !== n && c.form === n.form) {
              var h = it(c);
              if (!h)
                throw Error(f(90));
              xe(c), gn(c, h);
            }
          }
        }
        break;
      case "textarea":
        Ar(n, o);
        break;
      case "select":
        r = o.value, r != null && ur(n, !!o.multiple, r, !1);
    }
  }, dl = Op, au = Ui;
  var Kg = { usingClientEntryPoint: !1, Events: [zs, Ru, it, Fa, bo, Op] }, lc = { findFiberByHostInstance: $a, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hm = { bundleType: lc.bundleType, version: lc.version, rendererPackageName: lc.rendererPackageName, rendererConfig: lc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = kt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: lc.findFiberByHostInstance || Wg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yf.isDisabled && Yf.supportsFiber)
      try {
        Oo = Yf.inject(hm), aa = Yf;
      } catch {
      }
  }
  return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kg, li.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jo(r))
      throw Error(f(200));
    return dm(n, r, null, o);
  }, li.createRoot = function(n, r) {
    if (!Jo(n))
      throw Error(f(299));
    var o = !1, c = "", h = Up;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Np(n, 1, !1, null, null, o, !1, c, h), n[to] = r.current, Cu(n.nodeType === 8 ? n.parentNode : n), new Vf(r);
  }, li.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = kt(r), n = n === null ? null : n.stateNode, n;
  }, li.flushSync = function(n) {
    return Ui(n);
  }, li.hydrate = function(n, r, o) {
    if (!$f(r))
      throw Error(f(200));
    return If(null, n, r, !0, o);
  }, li.hydrateRoot = function(n, r, o) {
    if (!Jo(n))
      throw Error(f(405));
    var c = o != null && o.hydratedSources || null, h = !1, S = "", T = Up;
    if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (S = o.identifierPrefix), o.onRecoverableError !== void 0 && (T = o.onRecoverableError)), r = Mp(r, null, n, 1, o ?? null, h, !1, S, T), n[to] = r.current, Cu(n), c)
      for (n = 0; n < c.length; n++)
        o = c[n], h = o._getVersion, h = h(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, h] : r.mutableSourceEagerHydrationData.push(
          o,
          h
        );
    return new oc(r);
  }, li.render = function(n, r, o) {
    if (!$f(r))
      throw Error(f(200));
    return If(null, n, r, !1, o);
  }, li.unmountComponentAtNode = function(n) {
    if (!$f(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Ui(function() {
      If(null, null, n, !1, function() {
        n._reactRootContainer = null, n[to] = null;
      });
    }), !0) : !1;
  }, li.unstable_batchedUpdates = Op, li.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!$f(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return If(n, r, o, !1, c);
  }, li.version = "18.3.1-next-f1338f8080-20240426", li;
}
var ui = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $b;
function gM() {
  return $b || ($b = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = N, s = Nw(), f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function m(e) {
      p = e;
    }
    function g(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("warn", e, a);
      }
    }
    function v(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("error", e, a);
      }
    }
    function x(e, t, a) {
      {
        var i = f.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var d = a.map(function(y) {
          return String(y);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var b = 0, w = 1, k = 2, O = 3, U = 4, V = 5, B = 6, $ = 7, Q = 8, pe = 9, ie = 10, ae = 11, ce = 12, J = 13, _e = 14, Me = 15, vt = 16, Wt = 17, xt = 18, gt = 19, Kt = 21, Ye = 22, tt = 23, Ot = 24, at = 25, Oe = !0, se = !1, Ve = !1, I = !1, L = !1, W = !0, he = !1, me = !0, Re = !0, we = !0, ke = !0, Ae = /* @__PURE__ */ new Set(), Ue = {}, Ie = {};
    function Pt(e, t) {
      xe(e, t), xe(e + "Capture", t);
    }
    function xe(e, t) {
      Ue[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ue[e] = t;
      {
        var a = e.toLowerCase();
        Ie[a] = e, e === "onDoubleClick" && (Ie.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ae.add(t[i]);
    }
    var Lt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rn = Object.prototype.hasOwnProperty;
    function yt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function bn(e) {
      try {
        return gn(e), !1;
      } catch {
        return !0;
      }
    }
    function gn(e) {
      return "" + e;
    }
    function Nr(e, t) {
      if (bn(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), gn(e);
    }
    function Lr(e) {
      if (bn(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), gn(e);
    }
    function Qn(e, t) {
      if (bn(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), gn(e);
    }
    function ur(e, t) {
      if (bn(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), gn(e);
    }
    function Mr(e) {
      if (bn(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), gn(e);
    }
    function sr(e) {
      if (bn(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", yt(e)), gn(e);
    }
    var Ar = 0, tr = 1, Ct = 2, an = 3, cr = 4, Ri = 5, Ta = 6, De = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", nt = De + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Dt = new RegExp("^[" + De + "][" + nt + "]*$"), tn = {}, on = {};
    function In(e) {
      return rn.call(on, e) ? !0 : rn.call(tn, e) ? !1 : Dt.test(e) ? (on[e] = !0, !0) : (tn[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function An(e, t, a) {
      return t !== null ? t.type === Ar : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ur(e, t, a, i) {
      if (a !== null && a.type === Ar)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function dn(e, t, a, i) {
      if (t === null || typeof t > "u" || Ur(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case an:
            return !t;
          case cr:
            return t === !1;
          case Ri:
            return isNaN(t);
          case Ta:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Vr(e) {
      return un.hasOwnProperty(e) ? un[e] : null;
    }
    function ln(e, t, a, i, u, d, y) {
      this.acceptsBooleans = t === Ct || t === an || t === cr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = y;
    }
    var un = {}, ci = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ci.forEach(function(e) {
      un[e] = new ln(
        e,
        Ar,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      un[t] = new ln(
        t,
        tr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      un[e] = new ln(
        e,
        Ct,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      un[e] = new ln(
        e,
        Ct,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        an,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        an,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        cr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        Ta,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      un[e] = new ln(
        e,
        Ri,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fa = /[\-\:]([a-z])/g, bo = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, bo);
      un[t] = new ln(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, bo);
      un[t] = new ln(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, bo);
      un[t] = new ln(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      un[e] = new ln(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var dl = "xlinkHref";
    un[dl] = new ln(
      "xlinkHref",
      tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      un[e] = new ln(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var au = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Yi = !1;
    function wo(e) {
      !Yi && au.test(e) && (Yi = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function xa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Nr(a, t), i.sanitizeURL && wo("" + a);
        var d = i.attributeName, y = null;
        if (i.type === cr) {
          if (e.hasAttribute(d)) {
            var E = e.getAttribute(d);
            return E === "" ? !0 : dn(t, a, i, !1) ? E : E === "" + a ? a : E;
          }
        } else if (e.hasAttribute(d)) {
          if (dn(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === an)
            return a;
          y = e.getAttribute(d);
        }
        return dn(t, a, i, !1) ? y === null ? a : y : y === "" + a ? a : y;
      }
    }
    function Ti(e, t, a, i) {
      {
        if (!In(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Nr(a, t), u === "" + a ? a : u;
      }
    }
    function ba(e, t, a, i) {
      var u = Vr(t);
      if (!An(t, u, i)) {
        if (dn(t, a, u, i) && (a = null), i || u === null) {
          if (In(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (Nr(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var y = u.mustUseProperty;
        if (y) {
          var E = u.propertyName;
          if (a === null) {
            var C = u.type;
            e[E] = C === an ? !1 : "";
          } else
            e[E] = a;
          return;
        }
        var _ = u.attributeName, D = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(_);
        else {
          var H = u.type, F;
          H === an || H === cr && a === !0 ? F = "" : (Nr(a, _), F = "" + a, u.sanitizeURL && wo(F.toString())), D ? e.setAttributeNS(D, _, F) : e.setAttribute(_, F);
        }
      }
    }
    var fi = Symbol.for("react.element"), $r = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xi = Symbol.for("react.strict_mode"), bi = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), ye = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), Ht = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), kt = Symbol.for("react.scope"), Gn = Symbol.for("react.debug_trace_mode"), Sn = Symbol.for("react.offscreen"), wn = Symbol.for("react.legacy_hidden"), jr = Symbol.for("react.cache"), wi = Symbol.for("react.tracing_marker"), Qt = Symbol.iterator, fr = "@@iterator";
    function Ir(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qt && e[Qt] || e[fr];
      return typeof t == "function" ? t : null;
    }
    var Nt = Object.assign, Pa = 0, _o, iu, Oo, aa, Es, Yr, Cs;
    function Rs() {
    }
    Rs.__reactDisabledLog = !0;
    function Nc() {
      {
        if (Pa === 0) {
          _o = console.log, iu = console.info, Oo = console.warn, aa = console.error, Es = console.group, Yr = console.groupCollapsed, Cs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Rs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Pa++;
      }
    }
    function ou() {
      {
        if (Pa--, Pa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Nt({}, e, {
              value: _o
            }),
            info: Nt({}, e, {
              value: iu
            }),
            warn: Nt({}, e, {
              value: Oo
            }),
            error: Nt({}, e, {
              value: aa
            }),
            group: Nt({}, e, {
              value: Es
            }),
            groupCollapsed: Nt({}, e, {
              value: Yr
            }),
            groupEnd: Nt({}, e, {
              value: Cs
            })
          });
        }
        Pa < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Do = f.ReactCurrentDispatcher, di;
    function Wr(e, t, a) {
      {
        if (di === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            di = i && i[1] || "";
          }
        return `
` + di + e;
      }
    }
    var ko = !1, No;
    {
      var Lo = typeof WeakMap == "function" ? WeakMap : Map;
      No = new Lo();
    }
    function lu(e, t) {
      if (!e || ko)
        return "";
      {
        var a = No.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ko = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Do.current, Do.current = null, Nc();
      try {
        if (t) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (ne) {
              i = ne;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (ne) {
              i = ne;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            i = ne;
          }
          e();
        }
      } catch (ne) {
        if (ne && i && typeof ne.stack == "string") {
          for (var E = ne.stack.split(`
`), C = i.stack.split(`
`), _ = E.length - 1, D = C.length - 1; _ >= 1 && D >= 0 && E[_] !== C[D]; )
            D--;
          for (; _ >= 1 && D >= 0; _--, D--)
            if (E[_] !== C[D]) {
              if (_ !== 1 || D !== 1)
                do
                  if (_--, D--, D < 0 || E[_] !== C[D]) {
                    var H = `
` + E[_].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && No.set(e, H), H;
                  }
                while (_ >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        ko = !1, Do.current = d, ou(), Error.prepareStackTrace = u;
      }
      var F = e ? e.displayName || e.name : "", Z = F ? Wr(F) : "";
      return typeof e == "function" && No.set(e, Z), Z;
    }
    function uu(e, t, a) {
      return lu(e, !0);
    }
    function Wi(e, t, a) {
      return lu(e, !1);
    }
    function Ld(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _i(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, Ld(e));
      if (typeof e == "string")
        return Wr(e);
      switch (e) {
        case Je:
          return Wr("Suspense");
        case Ut:
          return Wr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ce:
            return Wi(e.render);
          case Ht:
            return _i(e.type, t, a);
          case ut: {
            var i = e, u = i._payload, d = i._init;
            try {
              return _i(d(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case V:
          return Wr(e.type);
        case vt:
          return Wr("Lazy");
        case J:
          return Wr("Suspense");
        case gt:
          return Wr("SuspenseList");
        case b:
        case k:
        case Me:
          return Wi(e.type);
        case ae:
          return Wi(e.type.render);
        case w:
          return uu(e.type);
        default:
          return "";
      }
    }
    function su(e) {
      try {
        var t = "", a = e;
        do
          t += Gt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function pl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function cu(e) {
      return e.displayName || "Context";
    }
    function Bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case wa:
          return "Fragment";
        case $r:
          return "Portal";
        case bi:
          return "Profiler";
        case xi:
          return "StrictMode";
        case Je:
          return "Suspense";
        case Ut:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ye:
            var t = e;
            return cu(t) + ".Consumer";
          case j:
            var a = e;
            return cu(a._context) + ".Provider";
          case Ce:
            return pl(e, e.render, "ForwardRef");
          case Ht:
            var i = e.displayName || null;
            return i !== null ? i : Bt(e.type) || "Memo";
          case ut: {
            var u = e, d = u._payload, y = u._init;
            try {
              return Bt(y(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function du(e) {
      return e.displayName || "Context";
    }
    function St(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ot:
          return "Cache";
        case pe:
          var i = a;
          return du(i) + ".Consumer";
        case ie:
          var u = a;
          return du(u._context) + ".Provider";
        case xt:
          return "DehydratedFragment";
        case ae:
          return fu(a, a.render, "ForwardRef");
        case $:
          return "Fragment";
        case V:
          return a;
        case U:
          return "Portal";
        case O:
          return "Root";
        case B:
          return "Text";
        case vt:
          return Bt(a);
        case Q:
          return a === xi ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case ce:
          return "Profiler";
        case Kt:
          return "Scope";
        case J:
          return "Suspense";
        case gt:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        case w:
        case b:
        case Wt:
        case k:
        case _e:
        case Me:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vl = f.ReactDebugCurrentFrame, Un = null, ia = !1;
    function qr() {
      {
        if (Un === null)
          return null;
        var e = Un._debugOwner;
        if (e !== null && typeof e < "u")
          return St(e);
      }
      return null;
    }
    function Mo() {
      return Un === null ? "" : su(Un);
    }
    function Pn() {
      vl.getCurrentStack = null, Un = null, ia = !1;
    }
    function sn(e) {
      vl.getCurrentStack = e === null ? null : Mo, Un = e, ia = !1;
    }
    function Lc() {
      return Un;
    }
    function oa(e) {
      ia = e;
    }
    function dr(e) {
      return "" + e;
    }
    function Oi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return sr(e), e;
        default:
          return "";
      }
    }
    var Mc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qi(e, t) {
      Mc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ao(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ac(e) {
      return e._valueTracker;
    }
    function Ha(e) {
      e._valueTracker = null;
    }
    function Uo(e) {
      var t = "";
      return e && (Ao(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ki(e) {
      var t = Ao(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      sr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(E) {
            sr(E), i = "" + E, d.call(this, E);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var y = {
          getValue: function() {
            return i;
          },
          setValue: function(E) {
            sr(E), i = "" + E;
          },
          stopTracking: function() {
            Ha(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Ba(e) {
      Ac(e) || (e._valueTracker = Ki(e));
    }
    function pu(e) {
      if (!e)
        return !1;
      var t = Ac(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Uo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function jo(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var zo = !1, hl = !1, vu = !1, Ts = !1;
    function pi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function R(e, t) {
      var a = e, i = t.checked, u = Nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function A(e, t) {
      qi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hl && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component", t.type), hl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !zo && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component", t.type), zo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oi(t.value != null ? t.value : i),
        controlled: pi(t)
      };
    }
    function ee(e, t) {
      var a = e, i = t.checked;
      i != null && ba(a, "checked", i, !1);
    }
    function re(e, t) {
      var a = e;
      {
        var i = pi(t);
        !a._wrapperState.controlled && i && !Ts && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ts = !0), a._wrapperState.controlled && !i && !vu && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vu = !0);
      }
      ee(e, t);
      var u = Oi(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = dr(u)) : a.value !== dr(u) && (a.value = dr(u));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? lt(a, t.type, u) : t.hasOwnProperty("defaultValue") && lt(a, t.type, Oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Te(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var y = dr(i._wrapperState.initialValue);
        a || y !== i.value && (i.value = y), i.defaultValue = y;
      }
      var E = i.name;
      E !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, E !== "" && (i.name = E);
    }
    function st(e, t) {
      var a = e;
      re(a, t), je(a, t);
    }
    function je(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Nr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var y = u[d];
          if (!(y === e || y.form !== e.form)) {
            var E = Lm(y);
            if (!E)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            pu(y), re(y, E);
          }
        }
      }
    }
    function lt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || jo(e.ownerDocument) !== e) && (a == null ? e.defaultValue = dr(e._wrapperState.initialValue) : e.defaultValue !== dr(a) && (e.defaultValue = dr(a)));
    }
    var Mt = !1, qt = !1, En = !1;
    function pn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? l.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || qt || (qt = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (En || (En = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Mt && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Mt = !0);
    }
    function Cn(e, t) {
      t.value != null && e.setAttribute("value", dr(Oi(t.value)));
    }
    var Tn = Array.isArray;
    function Vt(e) {
      return Tn(e);
    }
    var Qi;
    Qi = !1;
    function hu() {
      var e = qr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var xs = ["value", "defaultValue"];
    function Md(e) {
      {
        qi("select", e);
        for (var t = 0; t < xs.length; t++) {
          var a = xs[t];
          if (e[a] != null) {
            var i = Vt(e[a]);
            e.multiple && !i ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hu()) : !e.multiple && i && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hu());
          }
        }
      }
    }
    function vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var d = a, y = {}, E = 0; E < d.length; E++)
          y["$" + d[E]] = !0;
        for (var C = 0; C < u.length; C++) {
          var _ = y.hasOwnProperty("$" + u[C].value);
          u[C].selected !== _ && (u[C].selected = _), _ && i && (u[C].defaultSelected = !0);
        }
      } else {
        for (var D = dr(Oi(a)), H = null, F = 0; F < u.length; F++) {
          if (u[F].value === D) {
            u[F].selected = !0, i && (u[F].defaultSelected = !0);
            return;
          }
          H === null && !u[F].disabled && (H = u[F]);
        }
        H !== null && (H.selected = !0);
      }
    }
    function bs(e, t) {
      return Nt({}, t, {
        value: void 0
      });
    }
    function ws(e, t) {
      var a = e;
      Md(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qi && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qi = !0);
    }
    function Ad(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vi(a, !!t.multiple, i, !1) : t.defaultValue != null && vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function yg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vi(a, !!t.multiple, t.defaultValue, !0) : vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function gg(e, t) {
      var a = e, i = t.value;
      i != null && vi(a, !!t.multiple, i, !1);
    }
    var Ud = !1;
    function jd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: dr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rh(e, t) {
      var a = e;
      qi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ud && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component"), Ud = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Vt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), i = d;
      }
      a._wrapperState = {
        initialValue: Oi(i)
      };
    }
    function ah(e, t) {
      var a = e, i = Oi(t.value), u = Oi(t.defaultValue);
      if (i != null) {
        var d = dr(i);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      u != null && (a.defaultValue = dr(u));
    }
    function ih(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function zd(e, t) {
      ah(e, t);
    }
    var Gi = "http://www.w3.org/1999/xhtml", Sg = "http://www.w3.org/1998/Math/MathML", Fd = "http://www.w3.org/2000/svg";
    function Uc(e) {
      switch (e) {
        case "svg":
          return Fd;
        case "math":
          return Sg;
        default:
          return Gi;
      }
    }
    function Pd(e, t) {
      return e == null || e === Gi ? Uc(t) : e === Fd && t === "foreignObject" ? Gi : e;
    }
    var Eg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, jc, oh = Eg(function(e, t) {
      if (e.namespaceURI === Fd && !("innerHTML" in e)) {
        jc = jc || document.createElement("div"), jc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = jc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), la = 1, Xi = 3, Xn = 8, hi = 9, ml = 11, zc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, lh = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, mu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function uh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(mu).forEach(function(e) {
      sh.forEach(function(t) {
        mu[uh(t, e)] = mu[e];
      });
    });
    function Fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(mu.hasOwnProperty(e) && mu[e]) ? t + "px" : (ur(t, e), ("" + t).trim());
    }
    var yu = /([A-Z])/g, Cg = /^ms-/;
    function Rg(e) {
      return e.replace(yu, "-$1").toLowerCase().replace(Cg, "-ms-");
    }
    var ch = function() {
    };
    {
      var fh = /^(?:webkit|moz|o)[A-Z]/, dh = /^-ms-/, _s = /-(.)/g, gu = /;\s*$/, Su = {}, Eu = {}, ph = !1, Hd = !1, Bd = function(e) {
        return e.replace(_s, function(t, a) {
          return a.toUpperCase();
        });
      }, Vd = function(e) {
        Su.hasOwnProperty(e) && Su[e] || (Su[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Bd(e.replace(dh, "ms-"))
        ));
      }, vh = function(e) {
        Su.hasOwnProperty(e) && Su[e] || (Su[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hh = function(e, t) {
        Eu.hasOwnProperty(t) && Eu[t] || (Eu[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gu, "")));
      }, mh = function(e, t) {
        ph || (ph = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Tg = function(e, t) {
        Hd || (Hd = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ch = function(e, t) {
        e.indexOf("-") > -1 ? Vd(e) : fh.test(e) ? vh(e) : gu.test(t) && hh(e, t), typeof t == "number" && (isNaN(t) ? mh(e, t) : isFinite(t) || Tg(e, t));
      };
    }
    var xg = ch;
    function bg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var d = i.indexOf("--") === 0;
              t += a + (d ? i : Rg(i)) + ":", t += Fc(i, u, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function yh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || xg(i, t[i]);
          var d = Fc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function wg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Va(e) {
      var t = {};
      for (var a in e)
        for (var i = lh[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Os(e, t) {
      {
        if (!t)
          return;
        var a = Va(e), i = Va(t), u = {};
        for (var d in a) {
          var y = a[d], E = i[d];
          if (E && y !== E) {
            var C = y + "," + E;
            if (u[C])
              continue;
            u[C] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", wg(e[y]) ? "Removing" : "Updating", y, E);
          }
        }
      }
    }
    var gh = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Sh = Nt({
      menuitem: !0
    }, gh), Eh = "__html";
    function Pc(e, t) {
      if (t) {
        if (Sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Eh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ji(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Hc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ch = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, mi = {}, $d = new RegExp("^(aria)-[" + nt + "]*$"), Ds = new RegExp("^(aria)[A-Z][" + nt + "]*$");
    function Id(e, t) {
      {
        if (rn.call(mi, t) && mi[t])
          return !0;
        if (Ds.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ch.hasOwnProperty(a) ? a : null;
          if (i == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), mi[t] = !0, !0;
          if (t !== i)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), mi[t] = !0, !0;
        }
        if ($d.test(t)) {
          var u = t.toLowerCase(), d = Ch.hasOwnProperty(u) ? u : null;
          if (d == null)
            return mi[t] = !0, !1;
          if (t !== d)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), mi[t] = !0, !0;
        }
      }
      return !0;
    }
    function Rh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Id(e, i);
          u || a.push(i);
        }
        var d = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Bc(e, t) {
      Ji(e, t) || Rh(e, t);
    }
    var yl = !1;
    function Yd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yl && (yl = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Wd = function() {
    };
    {
      var pr = {}, qd = /^on./, Th = /^on[^A-Z]/, xh = new RegExp("^(aria)-[" + nt + "]*$"), bh = new RegExp("^(aria)[A-Z][" + nt + "]*$");
      Wd = function(e, t, a, i) {
        if (rn.call(pr, t) && pr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, y = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var E = y.hasOwnProperty(u) ? y[u] : null;
          if (E != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, E), pr[t] = !0, !0;
          if (qd.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (qd.test(t))
          return Th.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if (xh.test(t) || bh.test(t))
          return !0;
        if (u === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (u === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), pr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var C = Vr(t), _ = C !== null && C.type === Ar;
        if (Hc.hasOwnProperty(u)) {
          var D = Hc[u];
          if (D !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, D), pr[t] = !0, !0;
        } else if (!_ && t !== u)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), pr[t] = !0, !0;
        return typeof a == "boolean" && Ur(t, a, C, !1) ? (a ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), pr[t] = !0, !0) : _ ? !0 : Ur(t, a, C, !1) ? (pr[t] = !0, !1) : ((a === "false" || a === "true") && C !== null && C.type === an && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), pr[t] = !0), !0);
      };
    }
    var wh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var d = Wd(e, u, t[u], a);
          d || i.push(u);
        }
        var y = i.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : i.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function _h(e, t, a) {
      Ji(e, t) || wh(e, t, a);
    }
    var Zi = 1, ks = 2, gl = 4, _g = Zi | ks | gl, Ns = null;
    function Ls(e) {
      Ns !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ns = e;
    }
    function Og() {
      Ns === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ns = null;
    }
    function Oh(e) {
      return e === Ns;
    }
    function Vc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Xi ? t.parentNode : t;
    }
    var Rn = null, Fo = null, eo = null;
    function Cu(e) {
      var t = es(e);
      if (t) {
        if (typeof Rn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Lm(a);
          Rn(t.stateNode, t.type, i);
        }
      }
    }
    function Dh(e) {
      Rn = e;
    }
    function $c(e) {
      Fo ? eo ? eo.push(e) : eo = [e] : Fo = e;
    }
    function Ms() {
      return Fo !== null || eo !== null;
    }
    function As() {
      if (Fo) {
        var e = Fo, t = eo;
        if (Fo = null, eo = null, Cu(e), t)
          for (var a = 0; a < t.length; a++)
            Cu(t[a]);
      }
    }
    var Sl = function(e, t) {
      return e(t);
    }, Kd = function() {
    }, Qd = !1;
    function Dg() {
      var e = Ms();
      e && (Kd(), As());
    }
    function Gd(e, t, a) {
      if (Qd)
        return e(t, a);
      Qd = !0;
      try {
        return Sl(e, t, a);
      } finally {
        Qd = !1, Dg();
      }
    }
    function Ic(e, t, a) {
      Sl = e, Kd = a;
    }
    function Yc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Xd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Yc(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Lm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Xd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Us = !1;
    if (Lt)
      try {
        var Cl = {};
        Object.defineProperty(Cl, "passive", {
          get: function() {
            Us = !0;
          }
        }), window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
      } catch {
        Us = !1;
      }
    function kh(e, t, a, i, u, d, y, E, C) {
      var _ = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, _);
      } catch (D) {
        this.onError(D);
      }
    }
    var Jd = kh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Zd = document.createElement("react");
      Jd = function(t, a, i, u, d, y, E, C, _) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var D = document.createEvent("Event"), H = !1, F = !0, Z = window.event, ne = Object.getOwnPropertyDescriptor(window, "event");
        function oe() {
          Zd.removeEventListener(le, ot, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Z);
        }
        var ze = Array.prototype.slice.call(arguments, 3);
        function ot() {
          H = !0, oe(), a.apply(i, ze), F = !1;
        }
        var et, Yt = !1, Ft = !1;
        function q(K) {
          if (et = K.error, Yt = !0, et === null && K.colno === 0 && K.lineno === 0 && (Ft = !0), K.defaultPrevented && et != null && typeof et == "object")
            try {
              et._suppressLogging = !0;
            } catch {
            }
        }
        var le = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", q), Zd.addEventListener(le, ot, !1), D.initEvent(le, !1, !1), Zd.dispatchEvent(D), ne && Object.defineProperty(window, "event", ne), H && F && (Yt ? Ft && (et = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : et = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(et)), window.removeEventListener("error", q), !H)
          return oe(), kh.apply(this, arguments);
      };
    }
    var kg = Jd, Po = !1, yi = null, js = !1, Ho = null, Di = {
      onError: function(e) {
        Po = !0, yi = e;
      }
    };
    function Rl(e, t, a, i, u, d, y, E, C) {
      Po = !1, yi = null, kg.apply(Di, arguments);
    }
    function to(e, t, a, i, u, d, y, E, C) {
      if (Rl.apply(this, arguments), Po) {
        var _ = tp();
        js || (js = !0, Ho = _);
      }
    }
    function ep() {
      if (js) {
        var e = Ho;
        throw js = !1, Ho = null, e;
      }
    }
    function Ng() {
      return Po;
    }
    function tp() {
      if (Po) {
        var e = yi;
        return Po = !1, yi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $a(e) {
      return e._reactInternals;
    }
    function zs(e) {
      return e._reactInternals !== void 0;
    }
    function Ru(e, t) {
      e._reactInternals = t;
    }
    var it = (
      /*                      */
      0
    ), Bo = (
      /*                */
      1
    ), _n = (
      /*                    */
      2
    ), wt = (
      /*                       */
      4
    ), nn = (
      /*                */
      16
    ), cn = (
      /*                 */
      32
    ), ki = (
      /*                     */
      64
    ), ht = (
      /*                   */
      128
    ), Hn = (
      /*            */
      256
    ), ua = (
      /*                          */
      512
    ), Ia = (
      /*                     */
      1024
    ), Nn = (
      /*                      */
      2048
    ), Ya = (
      /*                    */
      4096
    ), Vo = (
      /*                   */
      8192
    ), Fs = (
      /*             */
      16384
    ), Wc = Nn | wt | ki | ua | Ia | Fs, Nh = (
      /*               */
      32767
    ), _a = (
      /*                   */
      32768
    ), vr = (
      /*                */
      65536
    ), Ps = (
      /* */
      131072
    ), np = (
      /*                       */
      1048576
    ), rp = (
      /*                    */
      2097152
    ), sa = (
      /*                 */
      4194304
    ), $o = (
      /*                */
      8388608
    ), ca = (
      /*               */
      16777216
    ), Tl = (
      /*              */
      33554432
    ), Tu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      wt | Ia | 0
    ), fa = _n | wt | nn | cn | ua | Ya | Vo, zr = wt | ki | ua | Vo, Wa = Nn | nn, Er = sa | $o | rp, no = f.ReactCurrentOwner;
    function Oa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (_n | Ya)) !== it && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? a : null;
    }
    function ap(e) {
      if (e.tag === J) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function qc(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function ip(e) {
      return Oa(e) === e;
    }
    function Da(e) {
      {
        var t = no.current;
        if (t !== null && t.tag === w) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", St(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = $a(e);
      return u ? Oa(u) === u : !1;
    }
    function da(e) {
      if (Oa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function On(e) {
      var t = e.alternate;
      if (!t) {
        var a = Oa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var d = i.return;
        if (d === null)
          break;
        var y = d.alternate;
        if (y === null) {
          var E = d.return;
          if (E !== null) {
            i = u = E;
            continue;
          }
          break;
        }
        if (d.child === y.child) {
          for (var C = d.child; C; ) {
            if (C === i)
              return da(d), e;
            if (C === u)
              return da(d), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = d, u = y;
        else {
          for (var _ = !1, D = d.child; D; ) {
            if (D === i) {
              _ = !0, i = d, u = y;
              break;
            }
            if (D === u) {
              _ = !0, u = d, i = y;
              break;
            }
            D = D.sibling;
          }
          if (!_) {
            for (D = y.child; D; ) {
              if (D === i) {
                _ = !0, i = y, u = d;
                break;
              }
              if (D === u) {
                _ = !0, u = y, i = d;
                break;
              }
              D = D.sibling;
            }
            if (!_)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qa(e) {
      var t = On(e);
      return t !== null ? op(t) : null;
    }
    function op(e) {
      if (e.tag === V || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = op(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Lh(e) {
      var t = On(e);
      return t !== null ? Kc(t) : null;
    }
    function Kc(e) {
      if (e.tag === V || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== U) {
          var a = Kc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Qc = s.unstable_scheduleCallback, Mh = s.unstable_cancelCallback, Gc = s.unstable_shouldYield, Ah = s.unstable_requestPaint, jn = s.unstable_now, lp = s.unstable_getCurrentPriorityLevel, Xc = s.unstable_ImmediatePriority, xl = s.unstable_UserBlockingPriority, Ni = s.unstable_NormalPriority, Uh = s.unstable_LowPriority, Jc = s.unstable_IdlePriority, xu = s.unstable_yieldValue, jh = s.unstable_setDisableYieldValue, ro = null, nr = null, Ne = null, Ka = !1, ka = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function up(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Re && (e = Nt({}, e, {
          getLaneLabelMap: ao,
          injectProfilingHooks: zh
        })), ro = t.inject(e), nr = t;
      } catch (a) {
        v("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function sp(e, t) {
      if (nr && typeof nr.onScheduleFiberRoot == "function")
        try {
          nr.onScheduleFiberRoot(ro, e, t);
        } catch (a) {
          Ka || (Ka = !0, v("React instrumentation encountered an error: %s", a));
        }
    }
    function bu(e, t) {
      if (nr && typeof nr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ht) === ht;
          if (we) {
            var i;
            switch (t) {
              case Wn:
                i = Xc;
                break;
              case oo:
                i = xl;
                break;
              case Li:
                i = Ni;
                break;
              case zu:
                i = Jc;
                break;
              default:
                i = Ni;
                break;
            }
            nr.onCommitFiberRoot(ro, e, i, a);
          }
        } catch (u) {
          Ka || (Ka = !0, v("React instrumentation encountered an error: %s", u));
        }
    }
    function Qa(e) {
      if (nr && typeof nr.onPostCommitFiberRoot == "function")
        try {
          nr.onPostCommitFiberRoot(ro, e);
        } catch (t) {
          Ka || (Ka = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function bl(e) {
      if (nr && typeof nr.onCommitFiberUnmount == "function")
        try {
          nr.onCommitFiberUnmount(ro, e);
        } catch (t) {
          Ka || (Ka = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Jn(e) {
      if (typeof xu == "function" && (jh(e), m(e)), nr && typeof nr.setStrictMode == "function")
        try {
          nr.setStrictMode(ro, e);
        } catch (t) {
          Ka || (Ka = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function zh(e) {
      Ne = e;
    }
    function ao() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Is; a++) {
          var i = Mg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Io(e) {
      Ne !== null && typeof Ne.markCommitStarted == "function" && Ne.markCommitStarted(e);
    }
    function Zc() {
      Ne !== null && typeof Ne.markCommitStopped == "function" && Ne.markCommitStopped();
    }
    function wu(e) {
      Ne !== null && typeof Ne.markComponentRenderStarted == "function" && Ne.markComponentRenderStarted(e);
    }
    function pa() {
      Ne !== null && typeof Ne.markComponentRenderStopped == "function" && Ne.markComponentRenderStopped();
    }
    function Yo(e) {
      Ne !== null && typeof Ne.markComponentPassiveEffectMountStarted == "function" && Ne.markComponentPassiveEffectMountStarted(e);
    }
    function ef() {
      Ne !== null && typeof Ne.markComponentPassiveEffectMountStopped == "function" && Ne.markComponentPassiveEffectMountStopped();
    }
    function Fh(e) {
      Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStarted == "function" && Ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function tf() {
      Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStopped == "function" && Ne.markComponentPassiveEffectUnmountStopped();
    }
    function Ph(e) {
      Ne !== null && typeof Ne.markComponentLayoutEffectMountStarted == "function" && Ne.markComponentLayoutEffectMountStarted(e);
    }
    function Hs() {
      Ne !== null && typeof Ne.markComponentLayoutEffectMountStopped == "function" && Ne.markComponentLayoutEffectMountStopped();
    }
    function gi(e) {
      Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStarted == "function" && Ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function _u() {
      Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStopped == "function" && Ne.markComponentLayoutEffectUnmountStopped();
    }
    function Bs(e, t, a) {
      Ne !== null && typeof Ne.markComponentErrored == "function" && Ne.markComponentErrored(e, t, a);
    }
    function wl(e, t, a) {
      Ne !== null && typeof Ne.markComponentSuspended == "function" && Ne.markComponentSuspended(e, t, a);
    }
    function cp(e) {
      Ne !== null && typeof Ne.markLayoutEffectsStarted == "function" && Ne.markLayoutEffectsStarted(e);
    }
    function Ou() {
      Ne !== null && typeof Ne.markLayoutEffectsStopped == "function" && Ne.markLayoutEffectsStopped();
    }
    function Hh(e) {
      Ne !== null && typeof Ne.markPassiveEffectsStarted == "function" && Ne.markPassiveEffectsStarted(e);
    }
    function fp() {
      Ne !== null && typeof Ne.markPassiveEffectsStopped == "function" && Ne.markPassiveEffectsStopped();
    }
    function Ln(e) {
      Ne !== null && typeof Ne.markRenderStarted == "function" && Ne.markRenderStarted(e);
    }
    function nf() {
      Ne !== null && typeof Ne.markRenderYielded == "function" && Ne.markRenderYielded();
    }
    function rf() {
      Ne !== null && typeof Ne.markRenderStopped == "function" && Ne.markRenderStopped();
    }
    function dp(e) {
      Ne !== null && typeof Ne.markRenderScheduled == "function" && Ne.markRenderScheduled(e);
    }
    function af(e, t) {
      Ne !== null && typeof Ne.markForceUpdateScheduled == "function" && Ne.markForceUpdateScheduled(e, t);
    }
    function Vs(e, t) {
      Ne !== null && typeof Ne.markStateUpdateScheduled == "function" && Ne.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), Ze = (
      /*                 */
      1
    ), mt = (
      /*                    */
      2
    ), At = (
      /*               */
      8
    ), Na = (
      /*              */
      16
    ), Du = Math.clz32 ? Math.clz32 : Fr, $s = Math.log, Lg = Math.LN2;
    function Fr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - ($s(t) / Lg | 0) | 0;
    }
    var Is = 31, de = (
      /*                        */
      0
    ), Zn = (
      /*                          */
      0
    ), rt = (
      /*                        */
      1
    ), Cr = (
      /*    */
      2
    ), La = (
      /*             */
      4
    ), io = (
      /*            */
      8
    ), Ga = (
      /*                     */
      16
    ), ku = (
      /*                */
      32
    ), _l = (
      /*                       */
      4194240
    ), Nu = (
      /*                        */
      64
    ), of = (
      /*                        */
      128
    ), lf = (
      /*                        */
      256
    ), uf = (
      /*                        */
      512
    ), sf = (
      /*                        */
      1024
    ), cf = (
      /*                        */
      2048
    ), Ol = (
      /*                        */
      4096
    ), ff = (
      /*                        */
      8192
    ), Lu = (
      /*                        */
      16384
    ), Mu = (
      /*                       */
      32768
    ), df = (
      /*                       */
      65536
    ), Ys = (
      /*                       */
      131072
    ), pf = (
      /*                       */
      262144
    ), vf = (
      /*                       */
      524288
    ), hf = (
      /*                       */
      1048576
    ), mf = (
      /*                       */
      2097152
    ), Au = (
      /*                            */
      130023424
    ), Dl = (
      /*                             */
      4194304
    ), yf = (
      /*                             */
      8388608
    ), gf = (
      /*                             */
      16777216
    ), pp = (
      /*                             */
      33554432
    ), Sf = (
      /*                             */
      67108864
    ), Bh = Dl, Ws = (
      /*          */
      134217728
    ), vp = (
      /*                          */
      268435455
    ), Uu = (
      /*               */
      268435456
    ), Wo = (
      /*                        */
      536870912
    ), Pr = (
      /*                   */
      1073741824
    );
    function Mg(e) {
      {
        if (e & rt)
          return "Sync";
        if (e & Cr)
          return "InputContinuousHydration";
        if (e & La)
          return "InputContinuous";
        if (e & io)
          return "DefaultHydration";
        if (e & Ga)
          return "Default";
        if (e & ku)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & Au)
          return "Retry";
        if (e & Ws)
          return "SelectiveHydration";
        if (e & Uu)
          return "IdleHydration";
        if (e & Wo)
          return "Idle";
        if (e & Pr)
          return "Offscreen";
      }
    }
    var xn = -1, Ef = Nu, va = Dl;
    function kl(e) {
      switch (Yn(e)) {
        case rt:
          return rt;
        case Cr:
          return Cr;
        case La:
          return La;
        case io:
          return io;
        case Ga:
          return Ga;
        case ku:
          return ku;
        case Nu:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Ol:
        case ff:
        case Lu:
        case Mu:
        case df:
        case Ys:
        case pf:
        case vf:
        case hf:
        case mf:
          return e & _l;
        case Dl:
        case yf:
        case gf:
        case pp:
        case Sf:
          return e & Au;
        case Ws:
          return Ws;
        case Uu:
          return Uu;
        case Wo:
          return Wo;
        case Pr:
          return Pr;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Nl(e, t) {
      var a = e.pendingLanes;
      if (a === de)
        return de;
      var i = de, u = e.suspendedLanes, d = e.pingedLanes, y = a & vp;
      if (y !== de) {
        var E = y & ~u;
        if (E !== de)
          i = kl(E);
        else {
          var C = y & d;
          C !== de && (i = kl(C));
        }
      } else {
        var _ = a & ~u;
        _ !== de ? i = kl(_) : d !== de && (i = kl(d));
      }
      if (i === de)
        return de;
      if (t !== de && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === de) {
        var D = Yn(i), H = Yn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          D >= H || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          D === Ga && (H & _l) !== de
        )
          return t;
      }
      (i & La) !== de && (i |= a & Ga);
      var F = e.entangledLanes;
      if (F !== de)
        for (var Z = e.entanglements, ne = i & F; ne > 0; ) {
          var oe = Ko(ne), ze = 1 << oe;
          i |= Z[oe], ne &= ~ze;
        }
      return i;
    }
    function Vh(e, t) {
      for (var a = e.eventTimes, i = xn; t > 0; ) {
        var u = Ko(t), d = 1 << u, y = a[u];
        y > i && (i = y), t &= ~d;
      }
      return i;
    }
    function $h(e, t) {
      switch (e) {
        case rt:
        case Cr:
        case La:
          return t + 250;
        case io:
        case Ga:
        case ku:
        case Nu:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Ol:
        case ff:
        case Lu:
        case Mu:
        case df:
        case Ys:
        case pf:
        case vf:
        case hf:
        case mf:
          return t + 5e3;
        case Dl:
        case yf:
        case gf:
        case pp:
        case Sf:
          return xn;
        case Ws:
        case Uu:
        case Wo:
        case Pr:
          return xn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), xn;
      }
    }
    function Ih(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, y = a; y > 0; ) {
        var E = Ko(y), C = 1 << E, _ = d[E];
        _ === xn ? ((C & i) === de || (C & u) !== de) && (d[E] = $h(C, t)) : _ <= t && (e.expiredLanes |= C), y &= ~C;
      }
    }
    function hp(e) {
      return kl(e.pendingLanes);
    }
    function qo(e) {
      var t = e.pendingLanes & ~Pr;
      return t !== de ? t : t & Pr ? Pr : de;
    }
    function mp(e) {
      return (e & rt) !== de;
    }
    function qs(e) {
      return (e & vp) !== de;
    }
    function Yh(e) {
      return (e & Au) === e;
    }
    function Wh(e) {
      var t = rt | La | Ga;
      return (e & t) === de;
    }
    function qh(e) {
      return (e & _l) === e;
    }
    function Ks(e, t) {
      var a = Cr | La | io | Ga;
      return (t & a) !== de;
    }
    function Kh(e, t) {
      return (t & e.expiredLanes) !== de;
    }
    function yp(e) {
      return (e & _l) !== de;
    }
    function Qh() {
      var e = Ef;
      return Ef <<= 1, (Ef & _l) === de && (Ef = Nu), e;
    }
    function ha() {
      var e = va;
      return va <<= 1, (va & Au) === de && (va = Dl), e;
    }
    function Yn(e) {
      return e & -e;
    }
    function ju(e) {
      return Yn(e);
    }
    function Ko(e) {
      return 31 - Du(e);
    }
    function Cf(e) {
      return Ko(e);
    }
    function ma(e, t) {
      return (e & t) !== de;
    }
    function Ll(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function Qs(e, t) {
      return e & ~t;
    }
    function Rf(e, t) {
      return e & t;
    }
    function Ag(e) {
      return e;
    }
    function Gh(e, t) {
      return e !== Zn && e < t ? e : t;
    }
    function Gs(e) {
      for (var t = [], a = 0; a < Is; a++)
        t.push(e);
      return t;
    }
    function Ml(e, t, a) {
      e.pendingLanes |= t, t !== Wo && (e.suspendedLanes = de, e.pingedLanes = de);
      var i = e.eventTimes, u = Cf(t);
      i[u] = a;
    }
    function Xh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ko(i), d = 1 << u;
        a[u] = xn, i &= ~d;
      }
    }
    function Tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function xf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = de, e.pingedLanes = de, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, d = e.expirationTimes, y = a; y > 0; ) {
        var E = Ko(y), C = 1 << E;
        i[E] = de, u[E] = xn, d[E] = xn, y &= ~C;
      }
    }
    function gp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var d = Ko(u), y = 1 << d;
        // Is this one of the newly entangled lanes?
        y & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), u &= ~y;
      }
    }
    function Jh(e, t) {
      var a = Yn(t), i;
      switch (a) {
        case La:
          i = Cr;
          break;
        case Ga:
          i = io;
          break;
        case Nu:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Ol:
        case ff:
        case Lu:
        case Mu:
        case df:
        case Ys:
        case pf:
        case vf:
        case hf:
        case mf:
        case Dl:
        case yf:
        case gf:
        case pp:
        case Sf:
          i = ku;
          break;
        case Wo:
          i = Uu;
          break;
        default:
          i = Zn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Zn ? Zn : i;
    }
    function bf(e, t, a) {
      if (ka)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Cf(a), d = 1 << u, y = i[u];
          y.add(t), a &= ~d;
        }
    }
    function Sp(e, t) {
      if (ka)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Cf(t), d = 1 << u, y = a[u];
          y.size > 0 && (y.forEach(function(E) {
            var C = E.alternate;
            (C === null || !i.has(C)) && i.add(E);
          }), y.clear()), t &= ~d;
        }
    }
    function Xs(e, t) {
      return null;
    }
    var Wn = rt, oo = La, Li = Ga, zu = Wo, Fu = Zn;
    function Xa() {
      return Fu;
    }
    function Bn(e) {
      Fu = e;
    }
    function Hr(e, t) {
      var a = Fu;
      try {
        return Fu = e, t();
      } finally {
        Fu = a;
      }
    }
    function Ug(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function jg(e, t) {
      return e > t ? e : t;
    }
    function Pu(e, t) {
      return e !== 0 && e < t;
    }
    function Rr(e) {
      var t = Yn(e);
      return Pu(Wn, t) ? Pu(oo, t) ? qs(t) ? Li : zu : oo : Wn;
    }
    function wf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var $e;
    function Hu(e) {
      $e = e;
    }
    function Ep(e) {
      $e(e);
    }
    var _f;
    function zg(e) {
      _f = e;
    }
    var Bu;
    function Of(e) {
      Bu = e;
    }
    var Df;
    function Zh(e) {
      Df = e;
    }
    var Cp;
    function em(e) {
      Cp = e;
    }
    var Js = !1, Vu = [], Mn = null, hr = null, Kr = null, $u = /* @__PURE__ */ new Map(), Iu = /* @__PURE__ */ new Map(), mr = [], tm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Mi(e) {
      return tm.indexOf(e) > -1;
    }
    function Fg(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Rp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Mn = null;
          break;
        case "dragenter":
        case "dragleave":
          hr = null;
          break;
        case "mouseover":
        case "mouseout":
          Kr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          $u.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Iu.delete(i);
          break;
        }
      }
    }
    function Yu(e, t, a, i, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var y = Fg(t, a, i, u, d);
        if (t !== null) {
          var E = es(t);
          E !== null && _f(E);
        }
        return y;
      }
      e.eventSystemFlags |= i;
      var C = e.targetContainers;
      return u !== null && C.indexOf(u) === -1 && C.push(u), e;
    }
    function nm(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return Mn = Yu(Mn, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var y = u;
          return hr = Yu(hr, e, t, a, i, y), !0;
        }
        case "mouseover": {
          var E = u;
          return Kr = Yu(Kr, e, t, a, i, E), !0;
        }
        case "pointerover": {
          var C = u, _ = C.pointerId;
          return $u.set(_, Yu($u.get(_) || null, e, t, a, i, C)), !0;
        }
        case "gotpointercapture": {
          var D = u, H = D.pointerId;
          return Iu.set(H, Yu(Iu.get(H) || null, e, t, a, i, D)), !0;
        }
      }
      return !1;
    }
    function Tp(e) {
      var t = cc(e.target);
      if (t !== null) {
        var a = Oa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === J) {
            var u = ap(a);
            if (u !== null) {
              e.blockedOn = u, Cp(e.priority, function() {
                Bu(a);
              });
              return;
            }
          } else if (i === O) {
            var d = a.stateNode;
            if (wf(d)) {
              e.blockedOn = qc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Pg(e) {
      for (var t = Df(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < mr.length && Pu(t, mr[i].priority); i++)
        ;
      mr.splice(i, 0, a), i === 0 && Tp(a);
    }
    function Al(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Br(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          Ls(d), u.target.dispatchEvent(d), Og();
        } else {
          var y = es(i);
          return y !== null && _f(y), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function kf(e, t, a) {
      Al(e) && a.delete(t);
    }
    function Ja() {
      Js = !1, Mn !== null && Al(Mn) && (Mn = null), hr !== null && Al(hr) && (hr = null), Kr !== null && Al(Kr) && (Kr = null), $u.forEach(kf), Iu.forEach(kf);
    }
    function zt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Js || (Js = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Ja)));
    }
    function Vn(e) {
      if (Vu.length > 0) {
        zt(Vu[0], e);
        for (var t = 1; t < Vu.length; t++) {
          var a = Vu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Mn !== null && zt(Mn, e), hr !== null && zt(hr, e), Kr !== null && zt(Kr, e);
      var i = function(E) {
        return zt(E, e);
      };
      $u.forEach(i), Iu.forEach(i);
      for (var u = 0; u < mr.length; u++) {
        var d = mr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; mr.length > 0; ) {
        var y = mr[0];
        if (y.blockedOn !== null)
          break;
        Tp(y), y.blockedOn === null && mr.shift();
      }
    }
    var Dn = f.ReactCurrentBatchConfig, rr = !0;
    function ya(e) {
      rr = !!e;
    }
    function Wu() {
      return rr;
    }
    function ar(e, t, a) {
      var i = Nf(t), u;
      switch (i) {
        case Wn:
          u = Zs;
          break;
        case oo:
          u = Ul;
          break;
        case Li:
        default:
          u = qu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Zs(e, t, a, i) {
      var u = Xa(), d = Dn.transition;
      Dn.transition = null;
      try {
        Bn(Wn), qu(e, t, a, i);
      } finally {
        Bn(u), Dn.transition = d;
      }
    }
    function Ul(e, t, a, i) {
      var u = Xa(), d = Dn.transition;
      Dn.transition = null;
      try {
        Bn(oo), qu(e, t, a, i);
      } finally {
        Bn(u), Dn.transition = d;
      }
    }
    function qu(e, t, a, i) {
      rr && xp(e, t, a, i);
    }
    function xp(e, t, a, i) {
      var u = Br(e, t, a, i);
      if (u === null) {
        nS(e, t, i, Qo, a), Rp(e, i);
        return;
      }
      if (nm(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Rp(e, i), t & gl && Mi(e)) {
        for (; u !== null; ) {
          var d = es(u);
          d !== null && Ep(d);
          var y = Br(e, t, a, i);
          if (y === null && nS(e, t, i, Qo, a), y === u)
            break;
          u = y;
        }
        u !== null && i.stopPropagation();
        return;
      }
      nS(e, t, i, null, a);
    }
    var Qo = null;
    function Br(e, t, a, i) {
      Qo = null;
      var u = Vc(i), d = cc(u);
      if (d !== null) {
        var y = Oa(d);
        if (y === null)
          d = null;
        else {
          var E = y.tag;
          if (E === J) {
            var C = ap(y);
            if (C !== null)
              return C;
            d = null;
          } else if (E === O) {
            var _ = y.stateNode;
            if (wf(_))
              return qc(y);
            d = null;
          } else
            y !== d && (d = null);
        }
      }
      return Qo = d, null;
    }
    function Nf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Wn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return oo;
        case "message": {
          var t = lp();
          switch (t) {
            case Xc:
              return Wn;
            case xl:
              return oo;
            case Ni:
            case Uh:
              return Li;
            case Jc:
              return zu;
            default:
              return Li;
          }
        }
        default:
          return Li;
      }
    }
    function Ku(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function lo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Lf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function bp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Za = null, Qu = null, ei = null;
    function Mf(e) {
      return Za = e, Qu = tc(), !0;
    }
    function ec() {
      Za = null, Qu = null, ei = null;
    }
    function Af() {
      if (ei)
        return ei;
      var e, t = Qu, a = t.length, i, u = tc(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var y = a - e;
      for (i = 1; i <= y && t[a - i] === u[d - i]; i++)
        ;
      var E = i > 1 ? 1 - i : void 0;
      return ei = u.slice(e, E), ei;
    }
    function tc() {
      return "value" in Za ? Za.value : Za.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function yr() {
      return !0;
    }
    function uo() {
      return !1;
    }
    function zn(e) {
      function t(a, i, u, d, y) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = d, this.target = y, this.currentTarget = null;
        for (var E in e)
          if (e.hasOwnProperty(E)) {
            var C = e[E];
            C ? this[E] = C(d) : this[E] = d[E];
          }
        var _ = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return _ ? this.isDefaultPrevented = yr : this.isDefaultPrevented = uo, this.isPropagationStopped = uo, this;
      }
      return Nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: yr
      }), t;
    }
    var ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Uf = zn(ir), zl = Nt({}, ir, {
      view: 0,
      detail: 0
    }), wp = zn(zl), _p, Ai, Gu;
    function Op(e) {
      e !== Gu && (Gu && e.type === "mousemove" ? (_p = e.screenX - Gu.screenX, Ai = e.screenY - Gu.screenY) : (_p = 0, Ai = 0), Gu = e);
    }
    var Ui = Nt({}, zl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Dp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Op(e), _p);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ai;
      }
    }), jf = zn(Ui), Fl = Nt({}, Ui, {
      dataTransfer: 0
    }), rm = zn(Fl), am = Nt({}, zl, {
      relatedTarget: 0
    }), nc = zn(am), zf = Nt({}, ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hg = zn(zf), Bg = Nt({}, ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), im = zn(Bg), om = Nt({}, ir, {
      data: 0
    }), Go = zn(om), Vg = Go, Xu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, lm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function $n(e) {
      if (e.key) {
        var t = Xu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? lm[e.keyCode] || "Unidentified" : "";
    }
    var $g = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function um(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = $g[e];
      return i ? !!a[i] : !1;
    }
    function Dp(e) {
      return um;
    }
    var Ig = Nt({}, zl, {
      key: $n,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Dp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), sm = zn(Ig), cm = Nt({}, Ui, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), fm = zn(cm), ti = Nt({}, zl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Dp
    }), kp = zn(ti), Yg = Nt({}, ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xo = zn(Yg), Ff = Nt({}, Ui, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Pl = zn(Ff), Pf = [9, 13, 27, 32], Hf = 229, rc = Lt && "CompositionEvent" in window, ac = null;
    Lt && "documentMode" in document && (ac = document.documentMode);
    var Np = Lt && "TextEvent" in window && !ac, dm = Lt && (!rc || ac && ac > 8 && ac <= 11), Lp = 32, Mp = String.fromCharCode(Lp);
    function Bf() {
      Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ic = !1;
    function pm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ap(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wg(e, t) {
      return e === "keydown" && t.keyCode === Hf;
    }
    function Up(e, t) {
      switch (e) {
        case "keyup":
          return Pf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Vf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function oc(e) {
      return e.locale === "ko";
    }
    var Jo = !1;
    function $f(e, t, a, i, u) {
      var d, y;
      if (rc ? d = Ap(t) : Jo ? Up(t, i) && (d = "onCompositionEnd") : Wg(t, i) && (d = "onCompositionStart"), !d)
        return null;
      dm && !oc(i) && (!Jo && d === "onCompositionStart" ? Jo = Mf(u) : d === "onCompositionEnd" && Jo && (y = Af()));
      var E = Sm(a, d);
      if (E.length > 0) {
        var C = new Go(d, t, null, i, u);
        if (e.push({
          event: C,
          listeners: E
        }), y)
          C.data = y;
        else {
          var _ = Vf(i);
          _ !== null && (C.data = _);
        }
      }
    }
    function vm(e, t) {
      switch (e) {
        case "compositionend":
          return Vf(t);
        case "keypress":
          var a = t.which;
          return a !== Lp ? null : (ic = !0, Mp);
        case "textInput":
          var i = t.data;
          return i === Mp && ic ? null : i;
        default:
          return null;
      }
    }
    function qg(e, t) {
      if (Jo) {
        if (e === "compositionend" || !rc && Up(e, t)) {
          var a = Af();
          return ec(), Jo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return dm && !oc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function If(e, t, a, i, u) {
      var d;
      if (Np ? d = vm(t, i) : d = qg(t, i), !d)
        return null;
      var y = Sm(a, "onBeforeInput");
      if (y.length > 0) {
        var E = new Vg("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: E,
          listeners: y
        }), E.data = d;
      }
    }
    function Kg(e, t, a, i, u, d, y) {
      $f(e, t, a, i, u), If(e, t, a, i, u);
    }
    var lc = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function hm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!lc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Yf(e) {
      if (!Lt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      $c(i);
      var u = Sm(t, "onChange");
      if (u.length > 0) {
        var d = new Uf("onChange", "change", null, a, i);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function S(e) {
      var t = [];
      r(t, c, e, Vc(e)), Gd(T, t);
    }
    function T(e) {
      dR(e, 0);
    }
    function M(e) {
      var t = Xf(e);
      if (pu(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var te = !1;
    Lt && (te = Yf("input") && (!document.documentMode || document.documentMode > 9));
    function ge(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", ve);
    }
    function Se() {
      o && (o.detachEvent("onpropertychange", ve), o = null, c = null);
    }
    function ve(e) {
      e.propertyName === "value" && M(c) && S(e);
    }
    function Pe(e, t, a) {
      e === "focusin" ? (Se(), ge(t, a)) : e === "focusout" && Se();
    }
    function We(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return M(c);
    }
    function Qe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function qn(e, t) {
      if (e === "click")
        return M(t);
    }
    function Y(e, t) {
      if (e === "input" || e === "change")
        return M(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || lt(e, "number", e.value);
    }
    function G(e, t, a, i, u, d, y) {
      var E = a ? Xf(a) : window, C, _;
      if (h(E) ? C = z : hm(E) ? te ? C = Y : (C = We, _ = Pe) : Qe(E) && (C = qn), C) {
        var D = C(t, a);
        if (D) {
          r(e, D, i, u);
          return;
        }
      }
      _ && _(t, E, a), t === "focusout" && P(E);
    }
    function be() {
      xe("onMouseEnter", ["mouseout", "mouseover"]), xe("onMouseLeave", ["mouseout", "mouseover"]), xe("onPointerEnter", ["pointerout", "pointerover"]), xe("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Xe(e, t, a, i, u, d, y) {
      var E = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (E && !Oh(i)) {
        var _ = i.relatedTarget || i.fromElement;
        if (_ && (cc(_) || Qp(_)))
          return;
      }
      if (!(!C && !E)) {
        var D;
        if (u.window === u)
          D = u;
        else {
          var H = u.ownerDocument;
          H ? D = H.defaultView || H.parentWindow : D = window;
        }
        var F, Z;
        if (C) {
          var ne = i.relatedTarget || i.toElement;
          if (F = a, Z = ne ? cc(ne) : null, Z !== null) {
            var oe = Oa(Z);
            (Z !== oe || Z.tag !== V && Z.tag !== B) && (Z = null);
          }
        } else
          F = null, Z = a;
        if (F !== Z) {
          var ze = jf, ot = "onMouseLeave", et = "onMouseEnter", Yt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ze = fm, ot = "onPointerLeave", et = "onPointerEnter", Yt = "pointer");
          var Ft = F == null ? D : Xf(F), q = Z == null ? D : Xf(Z), le = new ze(ot, Yt + "leave", F, i, u);
          le.target = Ft, le.relatedTarget = q;
          var K = null, Ee = cc(u);
          if (Ee === a) {
            var Be = new ze(et, Yt + "enter", Z, i, u);
            Be.target = q, Be.relatedTarget = Ft, K = Be;
          }
          B_(e, le, K, F, Z);
        }
      }
    }
    function ct(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var qe = typeof Object.is == "function" ? Object.is : ct;
    function ft(e, t) {
      if (qe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!rn.call(t, d) || !qe(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function or(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Xt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function so(e, t) {
      for (var a = or(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Xi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = or(Xt(a));
      }
    }
    function Qg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, d = i.anchorOffset, y = i.focusNode, E = i.focusOffset;
      try {
        u.nodeType, y.nodeType;
      } catch {
        return null;
      }
      return C_(e, u, d, y, E);
    }
    function C_(e, t, a, i, u) {
      var d = 0, y = -1, E = -1, C = 0, _ = 0, D = e, H = null;
      e:
        for (; ; ) {
          for (var F = null; D === t && (a === 0 || D.nodeType === Xi) && (y = d + a), D === i && (u === 0 || D.nodeType === Xi) && (E = d + u), D.nodeType === Xi && (d += D.nodeValue.length), (F = D.firstChild) !== null; )
            H = D, D = F;
          for (; ; ) {
            if (D === e)
              break e;
            if (H === t && ++C === a && (y = d), H === i && ++_ === u && (E = d), (F = D.nextSibling) !== null)
              break;
            D = H, H = D.parentNode;
          }
          D = F;
        }
      return y === -1 || E === -1 ? null : {
        start: y,
        end: E
      };
    }
    function R_(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), d = e.textContent.length, y = Math.min(t.start, d), E = t.end === void 0 ? y : Math.min(t.end, d);
        if (!u.extend && y > E) {
          var C = E;
          E = y, y = C;
        }
        var _ = so(e, y), D = so(e, E);
        if (_ && D) {
          if (u.rangeCount === 1 && u.anchorNode === _.node && u.anchorOffset === _.offset && u.focusNode === D.node && u.focusOffset === D.offset)
            return;
          var H = a.createRange();
          H.setStart(_.node, _.offset), u.removeAllRanges(), y > E ? (u.addRange(H), u.extend(D.node, D.offset)) : (H.setEnd(D.node, D.offset), u.addRange(H));
        }
      }
    }
    function eR(e) {
      return e && e.nodeType === Xi;
    }
    function tR(e, t) {
      return !e || !t ? !1 : e === t ? !0 : eR(e) ? !1 : eR(t) ? tR(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function T_(e) {
      return e && e.ownerDocument && tR(e.ownerDocument.documentElement, e);
    }
    function x_(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function nR() {
      for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
        if (x_(t))
          e = t.contentWindow;
        else
          return t;
        t = jo(e.document);
      }
      return t;
    }
    function Gg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function b_() {
      var e = nR();
      return {
        focusedElem: e,
        selectionRange: Gg(e) ? __(e) : null
      };
    }
    function w_(e) {
      var t = nR(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && T_(a)) {
        i !== null && Gg(a) && O_(a, i);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === la && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var y = 0; y < u.length; y++) {
          var E = u[y];
          E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
        }
      }
    }
    function __(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Qg(e), t || {
        start: 0,
        end: 0
      };
    }
    function O_(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : R_(e, t);
    }
    var D_ = Lt && "documentMode" in document && document.documentMode <= 11;
    function k_() {
      Pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Wf = null, Xg = null, jp = null, Jg = !1;
    function N_(e) {
      if ("selectionStart" in e && Gg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function L_(e) {
      return e.window === e ? e.document : e.nodeType === hi ? e : e.ownerDocument;
    }
    function rR(e, t, a) {
      var i = L_(a);
      if (!(Jg || Wf == null || Wf !== jo(i))) {
        var u = N_(Wf);
        if (!jp || !ft(jp, u)) {
          jp = u;
          var d = Sm(Xg, "onSelect");
          if (d.length > 0) {
            var y = new Uf("onSelect", "select", null, t, a);
            e.push({
              event: y,
              listeners: d
            }), y.target = Wf;
          }
        }
      }
    }
    function M_(e, t, a, i, u, d, y) {
      var E = a ? Xf(a) : window;
      switch (t) {
        case "focusin":
          (hm(E) || E.contentEditable === "true") && (Wf = E, Xg = a, jp = null);
          break;
        case "focusout":
          Wf = null, Xg = null, jp = null;
          break;
        case "mousedown":
          Jg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jg = !1, rR(e, i, u);
          break;
        case "selectionchange":
          if (D_)
            break;
        case "keydown":
        case "keyup":
          rR(e, i, u);
      }
    }
    function mm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var qf = {
      animationend: mm("Animation", "AnimationEnd"),
      animationiteration: mm("Animation", "AnimationIteration"),
      animationstart: mm("Animation", "AnimationStart"),
      transitionend: mm("Transition", "TransitionEnd")
    }, Zg = {}, aR = {};
    Lt && (aR = document.createElement("div").style, "AnimationEvent" in window || (delete qf.animationend.animation, delete qf.animationiteration.animation, delete qf.animationstart.animation), "TransitionEvent" in window || delete qf.transitionend.transition);
    function ym(e) {
      if (Zg[e])
        return Zg[e];
      if (!qf[e])
        return e;
      var t = qf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in aR)
          return Zg[e] = t[a];
      return e;
    }
    var iR = ym("animationend"), oR = ym("animationiteration"), lR = ym("animationstart"), uR = ym("transitionend"), sR = /* @__PURE__ */ new Map(), cR = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ju(e, t) {
      sR.set(e, t), Pt(t, [e]);
    }
    function A_() {
      for (var e = 0; e < cR.length; e++) {
        var t = cR[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ju(a, "on" + i);
      }
      Ju(iR, "onAnimationEnd"), Ju(oR, "onAnimationIteration"), Ju(lR, "onAnimationStart"), Ju("dblclick", "onDoubleClick"), Ju("focusin", "onFocus"), Ju("focusout", "onBlur"), Ju(uR, "onTransitionEnd");
    }
    function U_(e, t, a, i, u, d, y) {
      var E = sR.get(t);
      if (E !== void 0) {
        var C = Uf, _ = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            C = sm;
            break;
          case "focusin":
            _ = "focus", C = nc;
            break;
          case "focusout":
            _ = "blur", C = nc;
            break;
          case "beforeblur":
          case "afterblur":
            C = nc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = jf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = rm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = kp;
            break;
          case iR:
          case oR:
          case lR:
            C = Hg;
            break;
          case uR:
            C = Xo;
            break;
          case "scroll":
            C = wp;
            break;
          case "wheel":
            C = Pl;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = im;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = fm;
            break;
        }
        var D = (d & gl) !== 0;
        {
          var H = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = P_(a, E, i.type, D, H);
          if (F.length > 0) {
            var Z = new C(E, _, null, i, u);
            e.push({
              event: Z,
              listeners: F
            });
          }
        }
      }
    }
    A_(), be(), n(), k_(), Bf();
    function j_(e, t, a, i, u, d, y) {
      U_(e, t, a, i, u, d);
      var E = (d & _g) === 0;
      E && (Xe(e, t, a, i, u), G(e, t, a, i, u), M_(e, t, a, i, u), Kg(e, t, a, i, u));
    }
    var zp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], eS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(zp));
    function fR(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, to(i, t, void 0, e), e.currentTarget = null;
    }
    function z_(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], y = d.instance, E = d.currentTarget, C = d.listener;
          if (y !== i && e.isPropagationStopped())
            return;
          fR(e, C, E), i = y;
        }
      else
        for (var _ = 0; _ < t.length; _++) {
          var D = t[_], H = D.instance, F = D.currentTarget, Z = D.listener;
          if (H !== i && e.isPropagationStopped())
            return;
          fR(e, Z, F), i = H;
        }
    }
    function dR(e, t) {
      for (var a = (t & gl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], d = u.event, y = u.listeners;
        z_(d, y, a);
      }
      ep();
    }
    function F_(e, t, a, i, u) {
      var d = Vc(a), y = [];
      j_(y, e, i, a, d, t), dR(y, t);
    }
    function Fn(e, t) {
      eS.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = vD(t), u = V_(e);
      i.has(u) || (pR(t, e, ks, a), i.add(u));
    }
    function tS(e, t, a) {
      eS.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gl), pR(a, e, i, t);
    }
    var gm = "_reactListening" + Math.random().toString(36).slice(2);
    function Fp(e) {
      if (!e[gm]) {
        e[gm] = !0, Ae.forEach(function(a) {
          a !== "selectionchange" && (eS.has(a) || tS(a, !1, e), tS(a, !0, e));
        });
        var t = e.nodeType === hi ? e : e.ownerDocument;
        t !== null && (t[gm] || (t[gm] = !0, tS("selectionchange", !1, t)));
      }
    }
    function pR(e, t, a, i, u) {
      var d = ar(e, t, a), y = void 0;
      Us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, i ? y !== void 0 ? Lf(e, t, d, y) : lo(e, t, d) : y !== void 0 ? bp(e, t, d, y) : Ku(e, t, d);
    }
    function vR(e, t) {
      return e === t || e.nodeType === Xn && e.parentNode === t;
    }
    function nS(e, t, a, i, u) {
      var d = i;
      if (!(t & Zi) && !(t & ks)) {
        var y = u;
        if (i !== null) {
          var E = i;
          e:
            for (; ; ) {
              if (E === null)
                return;
              var C = E.tag;
              if (C === O || C === U) {
                var _ = E.stateNode.containerInfo;
                if (vR(_, y))
                  break;
                if (C === U)
                  for (var D = E.return; D !== null; ) {
                    var H = D.tag;
                    if (H === O || H === U) {
                      var F = D.stateNode.containerInfo;
                      if (vR(F, y))
                        return;
                    }
                    D = D.return;
                  }
                for (; _ !== null; ) {
                  var Z = cc(_);
                  if (Z === null)
                    return;
                  var ne = Z.tag;
                  if (ne === V || ne === B) {
                    E = d = Z;
                    continue e;
                  }
                  _ = _.parentNode;
                }
              }
              E = E.return;
            }
        }
      }
      Gd(function() {
        return F_(e, t, a, d);
      });
    }
    function Pp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function P_(e, t, a, i, u, d) {
      for (var y = t !== null ? t + "Capture" : null, E = i ? y : t, C = [], _ = e, D = null; _ !== null; ) {
        var H = _, F = H.stateNode, Z = H.tag;
        if (Z === V && F !== null && (D = F, E !== null)) {
          var ne = El(_, E);
          ne != null && C.push(Pp(_, ne, D));
        }
        if (u)
          break;
        _ = _.return;
      }
      return C;
    }
    function Sm(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var d = u, y = d.stateNode, E = d.tag;
        if (E === V && y !== null) {
          var C = y, _ = El(u, a);
          _ != null && i.unshift(Pp(u, _, C));
          var D = El(u, t);
          D != null && i.push(Pp(u, D, C));
        }
        u = u.return;
      }
      return i;
    }
    function Kf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== V);
      return e || null;
    }
    function H_(e, t) {
      for (var a = e, i = t, u = 0, d = a; d; d = Kf(d))
        u++;
      for (var y = 0, E = i; E; E = Kf(E))
        y++;
      for (; u - y > 0; )
        a = Kf(a), u--;
      for (; y - u > 0; )
        i = Kf(i), y--;
      for (var C = u; C--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Kf(a), i = Kf(i);
      }
      return null;
    }
    function hR(e, t, a, i, u) {
      for (var d = t._reactName, y = [], E = a; E !== null && E !== i; ) {
        var C = E, _ = C.alternate, D = C.stateNode, H = C.tag;
        if (_ !== null && _ === i)
          break;
        if (H === V && D !== null) {
          var F = D;
          if (u) {
            var Z = El(E, d);
            Z != null && y.unshift(Pp(E, Z, F));
          } else if (!u) {
            var ne = El(E, d);
            ne != null && y.push(Pp(E, ne, F));
          }
        }
        E = E.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function B_(e, t, a, i, u) {
      var d = i && u ? H_(i, u) : null;
      i !== null && hR(e, t, i, d, !1), u !== null && a !== null && hR(e, a, u, d, !0);
    }
    function V_(e, t) {
      return e + "__bubble";
    }
    var ni = !1, Hp = "dangerouslySetInnerHTML", Em = "suppressContentEditableWarning", Zu = "suppressHydrationWarning", mR = "autoFocus", uc = "children", sc = "style", Cm = "__html", rS, Rm, Bp, yR, Tm, gR, SR;
    rS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rm = function(e, t) {
      Bc(e, t), Yd(e, t), _h(e, t, {
        registrationNameDependencies: Ue,
        possibleRegistrationNames: Ie
      });
    }, gR = Lt && !document.documentMode, Bp = function(e, t, a) {
      if (!ni) {
        var i = xm(a), u = xm(t);
        u !== i && (ni = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, yR = function(e) {
      if (!ni) {
        ni = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Tm = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, SR = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var $_ = /\r\n?/g, I_ = /\u0000|\uFFFD/g;
    function xm(e) {
      Mr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace($_, `
`).replace(I_, "");
    }
    function bm(e, t, a, i) {
      var u = xm(t), d = xm(e);
      if (d !== u && (i && (ni || (ni = !0, v('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && Oe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function ER(e) {
      return e.nodeType === hi ? e : e.ownerDocument;
    }
    function Y_() {
    }
    function wm(e) {
      e.onclick = Y_;
    }
    function W_(e, t, a, i, u) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var y = i[d];
          if (d === sc)
            y && Object.freeze(y), yh(t, y);
          else if (d === Hp) {
            var E = y ? y[Cm] : void 0;
            E != null && oh(t, E);
          } else if (d === uc)
            if (typeof y == "string") {
              var C = e !== "textarea" || y !== "";
              C && zc(t, y);
            } else
              typeof y == "number" && zc(t, "" + y);
          else
            d === Em || d === Zu || d === mR || (Ue.hasOwnProperty(d) ? y != null && (typeof y != "function" && Tm(d, y), d === "onScroll" && Fn("scroll", t)) : y != null && ba(t, d, y, u));
        }
    }
    function q_(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], y = t[u + 1];
        d === sc ? yh(e, y) : d === Hp ? oh(e, y) : d === uc ? zc(e, y) : ba(e, d, y, i);
      }
    }
    function K_(e, t, a, i) {
      var u, d = ER(a), y, E = i;
      if (E === Gi && (E = Uc(e)), E === Gi) {
        if (u = Ji(e, t), !u && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = d.createElement("div");
          C.innerHTML = "<script><\/script>";
          var _ = C.firstChild;
          y = C.removeChild(_);
        } else if (typeof t.is == "string")
          y = d.createElement(e, {
            is: t.is
          });
        else if (y = d.createElement(e), e === "select") {
          var D = y;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        y = d.createElementNS(E, e);
      return E === Gi && !u && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !rn.call(rS, e) && (rS[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function Q_(e, t) {
      return ER(t).createTextNode(e);
    }
    function G_(e, t, a, i) {
      var u = Ji(t, a);
      Rm(t, a);
      var d;
      switch (t) {
        case "dialog":
          Fn("cancel", e), Fn("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Fn("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var y = 0; y < zp.length; y++)
            Fn(zp[y], e);
          d = a;
          break;
        case "source":
          Fn("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          Fn("error", e), Fn("load", e), d = a;
          break;
        case "details":
          Fn("toggle", e), d = a;
          break;
        case "input":
          A(e, a), d = R(e, a), Fn("invalid", e);
          break;
        case "option":
          pn(e, a), d = a;
          break;
        case "select":
          ws(e, a), d = bs(e, a), Fn("invalid", e);
          break;
        case "textarea":
          rh(e, a), d = jd(e, a), Fn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Pc(t, d), W_(t, e, i, d, u), t) {
        case "input":
          Ba(e), Te(e, a, !1);
          break;
        case "textarea":
          Ba(e), ih(e);
          break;
        case "option":
          Cn(e, a);
          break;
        case "select":
          Ad(e, a);
          break;
        default:
          typeof d.onClick == "function" && wm(e);
          break;
      }
    }
    function X_(e, t, a, i, u) {
      Rm(t, i);
      var d = null, y, E;
      switch (t) {
        case "input":
          y = R(e, a), E = R(e, i), d = [];
          break;
        case "select":
          y = bs(e, a), E = bs(e, i), d = [];
          break;
        case "textarea":
          y = jd(e, a), E = jd(e, i), d = [];
          break;
        default:
          y = a, E = i, typeof y.onClick != "function" && typeof E.onClick == "function" && wm(e);
          break;
      }
      Pc(t, E);
      var C, _, D = null;
      for (C in y)
        if (!(E.hasOwnProperty(C) || !y.hasOwnProperty(C) || y[C] == null))
          if (C === sc) {
            var H = y[C];
            for (_ in H)
              H.hasOwnProperty(_) && (D || (D = {}), D[_] = "");
          } else
            C === Hp || C === uc || C === Em || C === Zu || C === mR || (Ue.hasOwnProperty(C) ? d || (d = []) : (d = d || []).push(C, null));
      for (C in E) {
        var F = E[C], Z = y != null ? y[C] : void 0;
        if (!(!E.hasOwnProperty(C) || F === Z || F == null && Z == null))
          if (C === sc)
            if (F && Object.freeze(F), Z) {
              for (_ in Z)
                Z.hasOwnProperty(_) && (!F || !F.hasOwnProperty(_)) && (D || (D = {}), D[_] = "");
              for (_ in F)
                F.hasOwnProperty(_) && Z[_] !== F[_] && (D || (D = {}), D[_] = F[_]);
            } else
              D || (d || (d = []), d.push(C, D)), D = F;
          else if (C === Hp) {
            var ne = F ? F[Cm] : void 0, oe = Z ? Z[Cm] : void 0;
            ne != null && oe !== ne && (d = d || []).push(C, ne);
          } else
            C === uc ? (typeof F == "string" || typeof F == "number") && (d = d || []).push(C, "" + F) : C === Em || C === Zu || (Ue.hasOwnProperty(C) ? (F != null && (typeof F != "function" && Tm(C, F), C === "onScroll" && Fn("scroll", e)), !d && Z !== F && (d = [])) : (d = d || []).push(C, F));
      }
      return D && (Os(D, E[sc]), (d = d || []).push(sc, D)), d;
    }
    function J_(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ee(e, u);
      var d = Ji(a, i), y = Ji(a, u);
      switch (q_(e, t, d, y), a) {
        case "input":
          re(e, u);
          break;
        case "textarea":
          ah(e, u);
          break;
        case "select":
          yg(e, u);
          break;
      }
    }
    function Z_(e) {
      {
        var t = e.toLowerCase();
        return Hc.hasOwnProperty(t) && Hc[t] || null;
      }
    }
    function eO(e, t, a, i, u, d, y) {
      var E, C;
      switch (E = Ji(t, a), Rm(t, a), t) {
        case "dialog":
          Fn("cancel", e), Fn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Fn("load", e);
          break;
        case "video":
        case "audio":
          for (var _ = 0; _ < zp.length; _++)
            Fn(zp[_], e);
          break;
        case "source":
          Fn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Fn("error", e), Fn("load", e);
          break;
        case "details":
          Fn("toggle", e);
          break;
        case "input":
          A(e, a), Fn("invalid", e);
          break;
        case "option":
          pn(e, a);
          break;
        case "select":
          ws(e, a), Fn("invalid", e);
          break;
        case "textarea":
          rh(e, a), Fn("invalid", e);
          break;
      }
      Pc(t, a);
      {
        C = /* @__PURE__ */ new Set();
        for (var D = e.attributes, H = 0; H < D.length; H++) {
          var F = D[H].name.toLowerCase();
          switch (F) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              C.add(D[H].name);
          }
        }
      }
      var Z = null;
      for (var ne in a)
        if (a.hasOwnProperty(ne)) {
          var oe = a[ne];
          if (ne === uc)
            typeof oe == "string" ? e.textContent !== oe && (a[Zu] !== !0 && bm(e.textContent, oe, d, y), Z = [uc, oe]) : typeof oe == "number" && e.textContent !== "" + oe && (a[Zu] !== !0 && bm(e.textContent, oe, d, y), Z = [uc, "" + oe]);
          else if (Ue.hasOwnProperty(ne))
            oe != null && (typeof oe != "function" && Tm(ne, oe), ne === "onScroll" && Fn("scroll", e));
          else if (y && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof E == "boolean") {
            var ze = void 0, ot = E && he ? null : Vr(ne);
            if (a[Zu] !== !0) {
              if (!(ne === Em || ne === Zu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              ne === "value" || ne === "checked" || ne === "selected")) {
                if (ne === Hp) {
                  var et = e.innerHTML, Yt = oe ? oe[Cm] : void 0;
                  if (Yt != null) {
                    var Ft = SR(e, Yt);
                    Ft !== et && Bp(ne, et, Ft);
                  }
                } else if (ne === sc) {
                  if (C.delete(ne), gR) {
                    var q = bg(oe);
                    ze = e.getAttribute("style"), q !== ze && Bp(ne, ze, q);
                  }
                } else if (E && !he)
                  C.delete(ne.toLowerCase()), ze = Ti(e, ne, oe), oe !== ze && Bp(ne, ze, oe);
                else if (!An(ne, ot, E) && !dn(ne, oe, ot, E)) {
                  var le = !1;
                  if (ot !== null)
                    C.delete(ot.attributeName), ze = xa(e, ne, oe, ot);
                  else {
                    var K = i;
                    if (K === Gi && (K = Uc(t)), K === Gi)
                      C.delete(ne.toLowerCase());
                    else {
                      var Ee = Z_(ne);
                      Ee !== null && Ee !== ne && (le = !0, C.delete(Ee)), C.delete(ne);
                    }
                    ze = Ti(e, ne, oe);
                  }
                  var Be = he;
                  !Be && oe !== ze && !le && Bp(ne, ze, oe);
                }
              }
            }
          }
        }
      switch (y && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && a[Zu] !== !0 && yR(C), t) {
        case "input":
          Ba(e), Te(e, a, !0);
          break;
        case "textarea":
          Ba(e), ih(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && wm(e);
          break;
      }
      return Z;
    }
    function tO(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function aS(e, t) {
      {
        if (ni)
          return;
        ni = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function iS(e, t) {
      {
        if (ni)
          return;
        ni = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function oS(e, t, a) {
      {
        if (ni)
          return;
        ni = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function lS(e, t) {
      {
        if (t === "" || ni)
          return;
        ni = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function nO(e, t, a) {
      switch (t) {
        case "input":
          st(e, a);
          return;
        case "textarea":
          zd(e, a);
          return;
        case "select":
          gg(e, a);
          return;
      }
    }
    var Vp = function() {
    }, $p = function() {
    };
    {
      var rO = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], CR = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], aO = CR.concat(["button"]), iO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], RR = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      $p = function(e, t) {
        var a = Nt({}, e || RR), i = {
          tag: t
        };
        return CR.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), aO.indexOf(t) !== -1 && (a.pTagInButtonScope = null), rO.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var oO = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return iO.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, lO = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, TR = {};
      Vp = function(e, t, a) {
        a = a || RR;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = oO(e, u) ? null : i, y = d ? null : lO(e, a), E = d || y;
        if (E) {
          var C = E.tag, _ = !!d + "|" + e + "|" + C;
          if (!TR[_]) {
            TR[_] = !0;
            var D = e, H = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", H = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", d) {
              var F = "";
              C === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, C, H, F);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, C);
          }
        }
      };
    }
    var _m = "suppressHydrationWarning", Om = "$", Dm = "/$", Ip = "$?", Yp = "$!", uO = "style", uS = null, sS = null;
    function sO(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case hi:
        case ml: {
          t = i === hi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Pd(null, "");
          break;
        }
        default: {
          var d = i === Xn ? e.parentNode : e, y = d.namespaceURI || null;
          t = d.tagName, a = Pd(y, t);
          break;
        }
      }
      {
        var E = t.toLowerCase(), C = $p(null, E);
        return {
          namespace: a,
          ancestorInfo: C
        };
      }
    }
    function cO(e, t, a) {
      {
        var i = e, u = Pd(i.namespace, t), d = $p(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function aF(e) {
      return e;
    }
    function fO(e) {
      uS = Wu(), sS = b_();
      var t = null;
      return ya(!1), t;
    }
    function dO(e) {
      w_(sS), ya(uS), uS = null, sS = null;
    }
    function pO(e, t, a, i, u) {
      var d;
      {
        var y = i;
        if (Vp(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var E = "" + t.children, C = $p(y.ancestorInfo, e);
          Vp(null, E, C);
        }
        d = y.namespace;
      }
      var _ = K_(e, t, a, d);
      return Kp(u, _), yS(_, t), _;
    }
    function vO(e, t) {
      e.appendChild(t);
    }
    function hO(e, t, a, i, u) {
      switch (G_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function mO(e, t, a, i, u, d) {
      {
        var y = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var E = "" + i.children, C = $p(y.ancestorInfo, t);
          Vp(null, E, C);
        }
      }
      return X_(e, t, a, i);
    }
    function cS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yO(e, t, a, i) {
      {
        var u = a;
        Vp(null, e, u.ancestorInfo);
      }
      var d = Q_(e, t);
      return Kp(i, d), d;
    }
    function gO() {
      var e = window.event;
      return e === void 0 ? Li : Nf(e.type);
    }
    var fS = typeof setTimeout == "function" ? setTimeout : void 0, SO = typeof clearTimeout == "function" ? clearTimeout : void 0, dS = -1, xR = typeof Promise == "function" ? Promise : void 0, EO = typeof queueMicrotask == "function" ? queueMicrotask : typeof xR < "u" ? function(e) {
      return xR.resolve(null).then(e).catch(CO);
    } : fS;
    function CO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function RO(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function TO(e, t, a, i, u, d) {
      J_(e, t, a, i, u), yS(e, u);
    }
    function bR(e) {
      zc(e, "");
    }
    function xO(e, t, a) {
      e.nodeValue = a;
    }
    function bO(e, t) {
      e.appendChild(t);
    }
    function wO(e, t) {
      var a;
      e.nodeType === Xn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && wm(a);
    }
    function _O(e, t, a) {
      e.insertBefore(t, a);
    }
    function OO(e, t, a) {
      e.nodeType === Xn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function DO(e, t) {
      e.removeChild(t);
    }
    function kO(e, t) {
      e.nodeType === Xn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function pS(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Xn) {
          var d = u.data;
          if (d === Dm)
            if (i === 0) {
              e.removeChild(u), Vn(t);
              return;
            } else
              i--;
          else
            (d === Om || d === Ip || d === Yp) && i++;
        }
        a = u;
      } while (a);
      Vn(t);
    }
    function NO(e, t) {
      e.nodeType === Xn ? pS(e.parentNode, t) : e.nodeType === la && pS(e, t), Vn(e);
    }
    function LO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function MO(e) {
      e.nodeValue = "";
    }
    function AO(e, t) {
      e = e;
      var a = t[uO], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Fc("display", i);
    }
    function UO(e, t) {
      e.nodeValue = t;
    }
    function jO(e) {
      e.nodeType === la ? e.textContent = "" : e.nodeType === hi && e.documentElement && e.removeChild(e.documentElement);
    }
    function zO(e, t, a) {
      return e.nodeType !== la || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function FO(e, t) {
      return t === "" || e.nodeType !== Xi ? null : e;
    }
    function PO(e) {
      return e.nodeType !== Xn ? null : e;
    }
    function wR(e) {
      return e.data === Ip;
    }
    function vS(e) {
      return e.data === Yp;
    }
    function HO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function BO(e, t) {
      e._reactRetry = t;
    }
    function km(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === la || t === Xi)
          break;
        if (t === Xn) {
          var a = e.data;
          if (a === Om || a === Yp || a === Ip)
            break;
          if (a === Dm)
            return null;
        }
      }
      return e;
    }
    function Wp(e) {
      return km(e.nextSibling);
    }
    function VO(e) {
      return km(e.firstChild);
    }
    function $O(e) {
      return km(e.firstChild);
    }
    function IO(e) {
      return km(e.nextSibling);
    }
    function YO(e, t, a, i, u, d, y) {
      Kp(d, e), yS(e, a);
      var E;
      {
        var C = u;
        E = C.namespace;
      }
      var _ = (d.mode & Ze) !== Ge;
      return eO(e, t, a, E, i, _, y);
    }
    function WO(e, t, a, i) {
      return Kp(a, e), a.mode & Ze, tO(e, t);
    }
    function qO(e, t) {
      Kp(t, e);
    }
    function KO(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Xn) {
          var i = t.data;
          if (i === Dm) {
            if (a === 0)
              return Wp(t);
            a--;
          } else
            (i === Om || i === Yp || i === Ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function _R(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Xn) {
          var i = t.data;
          if (i === Om || i === Yp || i === Ip) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Dm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function QO(e) {
      Vn(e);
    }
    function GO(e) {
      Vn(e);
    }
    function XO(e) {
      return e !== "head" && e !== "body";
    }
    function JO(e, t, a, i) {
      var u = !0;
      bm(t.nodeValue, a, i, u);
    }
    function ZO(e, t, a, i, u, d) {
      if (t[_m] !== !0) {
        var y = !0;
        bm(i.nodeValue, u, d, y);
      }
    }
    function eD(e, t) {
      t.nodeType === la ? aS(e, t) : t.nodeType === Xn || iS(e, t);
    }
    function tD(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === la ? aS(a, t) : t.nodeType === Xn || iS(a, t));
      }
    }
    function nD(e, t, a, i, u) {
      (u || t[_m] !== !0) && (i.nodeType === la ? aS(a, i) : i.nodeType === Xn || iS(a, i));
    }
    function rD(e, t, a) {
      oS(e, t);
    }
    function aD(e, t) {
      lS(e, t);
    }
    function iD(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && oS(i, t);
      }
    }
    function oD(e, t) {
      {
        var a = e.parentNode;
        a !== null && lS(a, t);
      }
    }
    function lD(e, t, a, i, u, d) {
      (d || t[_m] !== !0) && oS(a, i);
    }
    function uD(e, t, a, i, u) {
      (u || t[_m] !== !0) && lS(a, i);
    }
    function sD(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function cD(e) {
      Fp(e);
    }
    var Qf = Math.random().toString(36).slice(2), Gf = "__reactFiber$" + Qf, hS = "__reactProps$" + Qf, qp = "__reactContainer$" + Qf, mS = "__reactEvents$" + Qf, fD = "__reactListeners$" + Qf, dD = "__reactHandles$" + Qf;
    function pD(e) {
      delete e[Gf], delete e[hS], delete e[mS], delete e[fD], delete e[dD];
    }
    function Kp(e, t) {
      t[Gf] = e;
    }
    function Nm(e, t) {
      t[qp] = e;
    }
    function OR(e) {
      e[qp] = null;
    }
    function Qp(e) {
      return !!e[qp];
    }
    function cc(e) {
      var t = e[Gf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[qp] || a[Gf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = _R(e); u !== null; ) {
              var d = u[Gf];
              if (d)
                return d;
              u = _R(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function es(e) {
      var t = e[Gf] || e[qp];
      return t && (t.tag === V || t.tag === B || t.tag === J || t.tag === O) ? t : null;
    }
    function Xf(e) {
      if (e.tag === V || e.tag === B)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lm(e) {
      return e[hS] || null;
    }
    function yS(e, t) {
      e[hS] = t;
    }
    function vD(e) {
      var t = e[mS];
      return t === void 0 && (t = e[mS] = /* @__PURE__ */ new Set()), t;
    }
    var DR = {}, kR = f.ReactDebugCurrentFrame;
    function Mm(e) {
      if (e) {
        var t = e._owner, a = _i(e.type, e._source, t ? t.type : null);
        kR.setExtraStackFrame(a);
      } else
        kR.setExtraStackFrame(null);
    }
    function co(e, t, a, i, u) {
      {
        var d = Function.call.bind(rn);
        for (var y in e)
          if (d(e, y)) {
            var E = void 0;
            try {
              if (typeof e[y] != "function") {
                var C = Error((i || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              E = e[y](t, y, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              E = _;
            }
            E && !(E instanceof Error) && (Mm(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, y, typeof E), Mm(null)), E instanceof Error && !(E.message in DR) && (DR[E.message] = !0, Mm(u), v("Failed %s type: %s", a, E.message), Mm(null));
          }
      }
    }
    var gS = [], Am;
    Am = [];
    var Hl = -1;
    function ts(e) {
      return {
        current: e
      };
    }
    function ga(e, t) {
      if (Hl < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Am[Hl] && v("Unexpected Fiber popped."), e.current = gS[Hl], gS[Hl] = null, Am[Hl] = null, Hl--;
    }
    function Sa(e, t, a) {
      Hl++, gS[Hl] = e.current, Am[Hl] = a, e.current = t;
    }
    var SS;
    SS = {};
    var Si = {};
    Object.freeze(Si);
    var Bl = ts(Si), Zo = ts(!1), ES = Si;
    function Jf(e, t, a) {
      return a && el(t) ? ES : Bl.current;
    }
    function NR(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Zf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Si;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var y in i)
          d[y] = t[y];
        {
          var E = St(e) || "Unknown";
          co(i, d, "context", E);
        }
        return u && NR(e, t, d), d;
      }
    }
    function Um() {
      return Zo.current;
    }
    function el(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function jm(e) {
      ga(Zo, e), ga(Bl, e);
    }
    function CS(e) {
      ga(Zo, e), ga(Bl, e);
    }
    function LR(e, t, a) {
      {
        if (Bl.current !== Si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Sa(Bl, t, e), Sa(Zo, a, e);
      }
    }
    function MR(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = St(e) || "Unknown";
            SS[d] || (SS[d] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var y = i.getChildContext();
        for (var E in y)
          if (!(E in u))
            throw new Error((St(e) || "Unknown") + '.getChildContext(): key "' + E + '" is not defined in childContextTypes.');
        {
          var C = St(e) || "Unknown";
          co(u, y, "child context", C);
        }
        return Nt({}, a, y);
      }
    }
    function zm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Si;
        return ES = Bl.current, Sa(Bl, a, e), Sa(Zo, Zo.current, e), !0;
      }
    }
    function AR(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = MR(e, t, ES);
          i.__reactInternalMemoizedMergedChildContext = u, ga(Zo, e), ga(Bl, e), Sa(Bl, u, e), Sa(Zo, a, e);
        } else
          ga(Zo, e), Sa(Zo, a, e);
      }
    }
    function hD(e) {
      {
        if (!ip(e) || e.tag !== w)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case w: {
              var a = t.type;
              if (el(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ns = 0, Fm = 1, Vl = null, RS = !1, TS = !1;
    function UR(e) {
      Vl === null ? Vl = [e] : Vl.push(e);
    }
    function mD(e) {
      RS = !0, UR(e);
    }
    function jR() {
      RS && rs();
    }
    function rs() {
      if (!TS && Vl !== null) {
        TS = !0;
        var e = 0, t = Xa();
        try {
          var a = !0, i = Vl;
          for (Bn(Wn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Vl = null, RS = !1;
        } catch (d) {
          throw Vl !== null && (Vl = Vl.slice(e + 1)), Qc(Xc, rs), d;
        } finally {
          Bn(t), TS = !1;
        }
      }
      return null;
    }
    var ed = [], td = 0, Pm = null, Hm = 0, ji = [], zi = 0, fc = null, $l = 1, Il = "";
    function yD(e) {
      return pc(), (e.flags & np) !== it;
    }
    function gD(e) {
      return pc(), Hm;
    }
    function SD() {
      var e = Il, t = $l, a = t & ~ED(t);
      return a.toString(32) + e;
    }
    function dc(e, t) {
      pc(), ed[td++] = Hm, ed[td++] = Pm, Pm = e, Hm = t;
    }
    function zR(e, t, a) {
      pc(), ji[zi++] = $l, ji[zi++] = Il, ji[zi++] = fc, fc = e;
      var i = $l, u = Il, d = Bm(i) - 1, y = i & ~(1 << d), E = a + 1, C = Bm(t) + d;
      if (C > 30) {
        var _ = d - d % 5, D = (1 << _) - 1, H = (y & D).toString(32), F = y >> _, Z = d - _, ne = Bm(t) + Z, oe = E << Z, ze = oe | F, ot = H + u;
        $l = 1 << ne | ze, Il = ot;
      } else {
        var et = E << d, Yt = et | y, Ft = u;
        $l = 1 << C | Yt, Il = Ft;
      }
    }
    function xS(e) {
      pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        dc(e, a), zR(e, a, i);
      }
    }
    function Bm(e) {
      return 32 - Du(e);
    }
    function ED(e) {
      return 1 << Bm(e) - 1;
    }
    function bS(e) {
      for (; e === Pm; )
        Pm = ed[--td], ed[td] = null, Hm = ed[--td], ed[td] = null;
      for (; e === fc; )
        fc = ji[--zi], ji[zi] = null, Il = ji[--zi], ji[zi] = null, $l = ji[--zi], ji[zi] = null;
    }
    function CD() {
      return pc(), fc !== null ? {
        id: $l,
        overflow: Il
      } : null;
    }
    function RD(e, t) {
      pc(), ji[zi++] = $l, ji[zi++] = Il, ji[zi++] = fc, $l = t.id, Il = t.overflow, fc = e;
    }
    function pc() {
      Gr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Qr = null, Fi = null, fo = !1, vc = !1, as = null;
    function TD() {
      fo && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function FR() {
      vc = !0;
    }
    function xD() {
      return vc;
    }
    function bD(e) {
      var t = e.stateNode.containerInfo;
      return Fi = $O(t), Qr = e, fo = !0, as = null, vc = !1, !0;
    }
    function wD(e, t, a) {
      return Fi = IO(t), Qr = e, fo = !0, as = null, vc = !1, a !== null && RD(e, a), !0;
    }
    function PR(e, t) {
      switch (e.tag) {
        case O: {
          eD(e.stateNode.containerInfo, t);
          break;
        }
        case V: {
          var a = (e.mode & Ze) !== Ge;
          nD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case J: {
          var i = e.memoizedState;
          i.dehydrated !== null && tD(i.dehydrated, t);
          break;
        }
      }
    }
    function HR(e, t) {
      PR(e, t);
      var a = kL();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= nn) : i.push(a);
    }
    function wS(e, t) {
      {
        if (vc)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case V:
                var i = t.type;
                t.pendingProps, rD(a, i);
                break;
              case B:
                var u = t.pendingProps;
                aD(a, u);
                break;
            }
            break;
          }
          case V: {
            var d = e.type, y = e.memoizedProps, E = e.stateNode;
            switch (t.tag) {
              case V: {
                var C = t.type, _ = t.pendingProps, D = (e.mode & Ze) !== Ge;
                lD(
                  d,
                  y,
                  E,
                  C,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
              case B: {
                var H = t.pendingProps, F = (e.mode & Ze) !== Ge;
                uD(
                  d,
                  y,
                  E,
                  H,
                  // TODO: Delete this argument when we remove the legacy root API.
                  F
                );
                break;
              }
            }
            break;
          }
          case J: {
            var Z = e.memoizedState, ne = Z.dehydrated;
            if (ne !== null)
              switch (t.tag) {
                case V:
                  var oe = t.type;
                  t.pendingProps, iD(ne, oe);
                  break;
                case B:
                  var ze = t.pendingProps;
                  oD(ne, ze);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function BR(e, t) {
      t.flags = t.flags & ~Ya | _n, wS(e, t);
    }
    function VR(e, t) {
      switch (e.tag) {
        case V: {
          var a = e.type;
          e.pendingProps;
          var i = zO(t, a);
          return i !== null ? (e.stateNode = i, Qr = e, Fi = VO(i), !0) : !1;
        }
        case B: {
          var u = e.pendingProps, d = FO(t, u);
          return d !== null ? (e.stateNode = d, Qr = e, Fi = null, !0) : !1;
        }
        case J: {
          var y = PO(t);
          if (y !== null) {
            var E = {
              dehydrated: y,
              treeContext: CD(),
              retryLane: Pr
            };
            e.memoizedState = E;
            var C = NL(y);
            return C.return = e, e.child = C, Qr = e, Fi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function _S(e) {
      return (e.mode & Ze) !== Ge && (e.flags & ht) === it;
    }
    function OS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function DS(e) {
      if (fo) {
        var t = Fi;
        if (!t) {
          _S(e) && (wS(Qr, e), OS()), BR(Qr, e), fo = !1, Qr = e;
          return;
        }
        var a = t;
        if (!VR(e, t)) {
          _S(e) && (wS(Qr, e), OS()), t = Wp(a);
          var i = Qr;
          if (!t || !VR(e, t)) {
            BR(Qr, e), fo = !1, Qr = e;
            return;
          }
          HR(i, a);
        }
      }
    }
    function _D(e, t, a) {
      var i = e.stateNode, u = !vc, d = YO(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function OD(e) {
      var t = e.stateNode, a = e.memoizedProps, i = WO(t, a, e);
      if (i) {
        var u = Qr;
        if (u !== null)
          switch (u.tag) {
            case O: {
              var d = u.stateNode.containerInfo, y = (u.mode & Ze) !== Ge;
              JO(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
            case V: {
              var E = u.type, C = u.memoizedProps, _ = u.stateNode, D = (u.mode & Ze) !== Ge;
              ZO(
                E,
                C,
                _,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                D
              );
              break;
            }
          }
      }
      return i;
    }
    function DD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      qO(a, e);
    }
    function kD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return KO(a);
    }
    function $R(e) {
      for (var t = e.return; t !== null && t.tag !== V && t.tag !== O && t.tag !== J; )
        t = t.return;
      Qr = t;
    }
    function Vm(e) {
      if (e !== Qr)
        return !1;
      if (!fo)
        return $R(e), fo = !0, !1;
      if (e.tag !== O && (e.tag !== V || XO(e.type) && !cS(e.type, e.memoizedProps))) {
        var t = Fi;
        if (t)
          if (_S(e))
            IR(e), OS();
          else
            for (; t; )
              HR(e, t), t = Wp(t);
      }
      return $R(e), e.tag === J ? Fi = kD(e) : Fi = Qr ? Wp(e.stateNode) : null, !0;
    }
    function ND() {
      return fo && Fi !== null;
    }
    function IR(e) {
      for (var t = Fi; t; )
        PR(e, t), t = Wp(t);
    }
    function nd() {
      Qr = null, Fi = null, fo = !1, vc = !1;
    }
    function YR() {
      as !== null && (Fx(as), as = null);
    }
    function Gr() {
      return fo;
    }
    function kS(e) {
      as === null ? as = [e] : as.push(e);
    }
    var LD = f.ReactCurrentBatchConfig, MD = null;
    function AD() {
      return LD.transition;
    }
    var po = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var UD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & At && (t = a), a = a.return;
        return t;
      }, hc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Gp = [], Xp = [], Jp = [], Zp = [], ev = [], tv = [], mc = /* @__PURE__ */ new Set();
      po.recordUnsafeLifecycleWarnings = function(e, t) {
        mc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & At && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & At && typeof t.UNSAFE_componentWillReceiveProps == "function" && Zp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ev.push(e), e.mode & At && typeof t.UNSAFE_componentWillUpdate == "function" && tv.push(e));
      }, po.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(F) {
          e.add(St(F) || "Component"), mc.add(F.type);
        }), Gp = []);
        var t = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(F) {
          t.add(St(F) || "Component"), mc.add(F.type);
        }), Xp = []);
        var a = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(F) {
          a.add(St(F) || "Component"), mc.add(F.type);
        }), Jp = []);
        var i = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(F) {
          i.add(St(F) || "Component"), mc.add(F.type);
        }), Zp = []);
        var u = /* @__PURE__ */ new Set();
        ev.length > 0 && (ev.forEach(function(F) {
          u.add(St(F) || "Component"), mc.add(F.type);
        }), ev = []);
        var d = /* @__PURE__ */ new Set();
        if (tv.length > 0 && (tv.forEach(function(F) {
          d.add(St(F) || "Component"), mc.add(F.type);
        }), tv = []), t.size > 0) {
          var y = hc(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (i.size > 0) {
          var E = hc(i);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, E);
        }
        if (d.size > 0) {
          var C = hc(d);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var _ = hc(e);
          g(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (a.size > 0) {
          var D = hc(a);
          g(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (u.size > 0) {
          var H = hc(u);
          g(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, H);
        }
      };
      var $m = /* @__PURE__ */ new Map(), WR = /* @__PURE__ */ new Set();
      po.recordLegacyContextWarning = function(e, t) {
        var a = UD(e);
        if (a === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!WR.has(e.type)) {
          var i = $m.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], $m.set(a, i)), i.push(e));
        }
      }, po.flushLegacyContextWarning = function() {
        $m.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(St(d) || "Component"), WR.add(d.type);
            });
            var u = hc(i);
            try {
              sn(a), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Pn();
            }
          }
        });
      }, po.discardPendingWarnings = function() {
        Gp = [], Xp = [], Jp = [], Zp = [], ev = [], tv = [], $m = /* @__PURE__ */ new Map();
      };
    }
    var NS, LS, MS, AS, US, qR = function(e, t) {
    };
    NS = !1, LS = !1, MS = {}, AS = {}, US = {}, qR = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = St(t) || "Component";
        AS[a] || (AS[a] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function jD(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function nv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & At || me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== w) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !jD(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = St(e) || "Component";
          MS[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), MS[u] = !0);
        }
        if (a._owner) {
          var d = a._owner, y;
          if (d) {
            var E = d;
            if (E.tag !== w)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = E.stateNode;
          }
          if (!y)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = y;
          Qn(i, "ref");
          var _ = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === _)
            return t.ref;
          var D = function(H) {
            var F = C.refs;
            H === null ? delete F[_] : F[_] = H;
          };
          return D._stringRef = _, D;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Im(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ym(e) {
      {
        var t = St(e) || "Component";
        if (US[t])
          return;
        US[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function KR(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function QR(e) {
      function t(q, le) {
        if (e) {
          var K = q.deletions;
          K === null ? (q.deletions = [le], q.flags |= nn) : K.push(le);
        }
      }
      function a(q, le) {
        if (!e)
          return null;
        for (var K = le; K !== null; )
          t(q, K), K = K.sibling;
        return null;
      }
      function i(q, le) {
        for (var K = /* @__PURE__ */ new Map(), Ee = le; Ee !== null; )
          Ee.key !== null ? K.set(Ee.key, Ee) : K.set(Ee.index, Ee), Ee = Ee.sibling;
        return K;
      }
      function u(q, le) {
        var K = bc(q, le);
        return K.index = 0, K.sibling = null, K;
      }
      function d(q, le, K) {
        if (q.index = K, !e)
          return q.flags |= np, le;
        var Ee = q.alternate;
        if (Ee !== null) {
          var Be = Ee.index;
          return Be < le ? (q.flags |= _n, le) : Be;
        } else
          return q.flags |= _n, le;
      }
      function y(q) {
        return e && q.alternate === null && (q.flags |= _n), q;
      }
      function E(q, le, K, Ee) {
        if (le === null || le.tag !== B) {
          var Be = k0(K, q.mode, Ee);
          return Be.return = q, Be;
        } else {
          var Fe = u(le, K);
          return Fe.return = q, Fe;
        }
      }
      function C(q, le, K, Ee) {
        var Be = K.type;
        if (Be === wa)
          return D(q, le, K.props.children, Ee, K.key);
        if (le !== null && (le.elementType === Be || // Keep this check inline so it only runs on the false path:
        eb(le, K) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Be == "object" && Be !== null && Be.$$typeof === ut && KR(Be) === le.type)) {
          var Fe = u(le, K.props);
          return Fe.ref = nv(q, le, K), Fe.return = q, Fe._debugSource = K._source, Fe._debugOwner = K._owner, Fe;
        }
        var pt = D0(K, q.mode, Ee);
        return pt.ref = nv(q, le, K), pt.return = q, pt;
      }
      function _(q, le, K, Ee) {
        if (le === null || le.tag !== U || le.stateNode.containerInfo !== K.containerInfo || le.stateNode.implementation !== K.implementation) {
          var Be = N0(K, q.mode, Ee);
          return Be.return = q, Be;
        } else {
          var Fe = u(le, K.children || []);
          return Fe.return = q, Fe;
        }
      }
      function D(q, le, K, Ee, Be) {
        if (le === null || le.tag !== $) {
          var Fe = hs(K, q.mode, Ee, Be);
          return Fe.return = q, Fe;
        } else {
          var pt = u(le, K);
          return pt.return = q, pt;
        }
      }
      function H(q, le, K) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var Ee = k0("" + le, q.mode, K);
          return Ee.return = q, Ee;
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case fi: {
              var Be = D0(le, q.mode, K);
              return Be.ref = nv(q, null, le), Be.return = q, Be;
            }
            case $r: {
              var Fe = N0(le, q.mode, K);
              return Fe.return = q, Fe;
            }
            case ut: {
              var pt = le._payload, Rt = le._init;
              return H(q, Rt(pt), K);
            }
          }
          if (Vt(le) || Ir(le)) {
            var hn = hs(le, q.mode, K, null);
            return hn.return = q, hn;
          }
          Im(q, le);
        }
        return typeof le == "function" && Ym(q), null;
      }
      function F(q, le, K, Ee) {
        var Be = le !== null ? le.key : null;
        if (typeof K == "string" && K !== "" || typeof K == "number")
          return Be !== null ? null : E(q, le, "" + K, Ee);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case fi:
              return K.key === Be ? C(q, le, K, Ee) : null;
            case $r:
              return K.key === Be ? _(q, le, K, Ee) : null;
            case ut: {
              var Fe = K._payload, pt = K._init;
              return F(q, le, pt(Fe), Ee);
            }
          }
          if (Vt(K) || Ir(K))
            return Be !== null ? null : D(q, le, K, Ee, null);
          Im(q, K);
        }
        return typeof K == "function" && Ym(q), null;
      }
      function Z(q, le, K, Ee, Be) {
        if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") {
          var Fe = q.get(K) || null;
          return E(le, Fe, "" + Ee, Be);
        }
        if (typeof Ee == "object" && Ee !== null) {
          switch (Ee.$$typeof) {
            case fi: {
              var pt = q.get(Ee.key === null ? K : Ee.key) || null;
              return C(le, pt, Ee, Be);
            }
            case $r: {
              var Rt = q.get(Ee.key === null ? K : Ee.key) || null;
              return _(le, Rt, Ee, Be);
            }
            case ut:
              var hn = Ee._payload, Jt = Ee._init;
              return Z(q, le, K, Jt(hn), Be);
          }
          if (Vt(Ee) || Ir(Ee)) {
            var lr = q.get(K) || null;
            return D(le, lr, Ee, Be, null);
          }
          Im(le, Ee);
        }
        return typeof Ee == "function" && Ym(le), null;
      }
      function ne(q, le, K) {
        {
          if (typeof q != "object" || q === null)
            return le;
          switch (q.$$typeof) {
            case fi:
            case $r:
              qR(q, K);
              var Ee = q.key;
              if (typeof Ee != "string")
                break;
              if (le === null) {
                le = /* @__PURE__ */ new Set(), le.add(Ee);
                break;
              }
              if (!le.has(Ee)) {
                le.add(Ee);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ee);
              break;
            case ut:
              var Be = q._payload, Fe = q._init;
              ne(Fe(Be), le, K);
              break;
          }
        }
        return le;
      }
      function oe(q, le, K, Ee) {
        for (var Be = null, Fe = 0; Fe < K.length; Fe++) {
          var pt = K[Fe];
          Be = ne(pt, Be, q);
        }
        for (var Rt = null, hn = null, Jt = le, lr = 0, Zt = 0, er = null; Jt !== null && Zt < K.length; Zt++) {
          Jt.index > Zt ? (er = Jt, Jt = null) : er = Jt.sibling;
          var Ca = F(q, Jt, K[Zt], Ee);
          if (Ca === null) {
            Jt === null && (Jt = er);
            break;
          }
          e && Jt && Ca.alternate === null && t(q, Jt), lr = d(Ca, lr, Zt), hn === null ? Rt = Ca : hn.sibling = Ca, hn = Ca, Jt = er;
        }
        if (Zt === K.length) {
          if (a(q, Jt), Gr()) {
            var ra = Zt;
            dc(q, ra);
          }
          return Rt;
        }
        if (Jt === null) {
          for (; Zt < K.length; Zt++) {
            var Ci = H(q, K[Zt], Ee);
            Ci !== null && (lr = d(Ci, lr, Zt), hn === null ? Rt = Ci : hn.sibling = Ci, hn = Ci);
          }
          if (Gr()) {
            var ja = Zt;
            dc(q, ja);
          }
          return Rt;
        }
        for (var za = i(q, Jt); Zt < K.length; Zt++) {
          var Ra = Z(za, q, Zt, K[Zt], Ee);
          Ra !== null && (e && Ra.alternate !== null && za.delete(Ra.key === null ? Zt : Ra.key), lr = d(Ra, lr, Zt), hn === null ? Rt = Ra : hn.sibling = Ra, hn = Ra);
        }
        if (e && za.forEach(function(Cd) {
          return t(q, Cd);
        }), Gr()) {
          var Xl = Zt;
          dc(q, Xl);
        }
        return Rt;
      }
      function ze(q, le, K, Ee) {
        var Be = Ir(K);
        if (typeof Be != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          K[Symbol.toStringTag] === "Generator" && (LS || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), LS = !0), K.entries === Be && (NS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), NS = !0);
          var Fe = Be.call(K);
          if (Fe)
            for (var pt = null, Rt = Fe.next(); !Rt.done; Rt = Fe.next()) {
              var hn = Rt.value;
              pt = ne(hn, pt, q);
            }
        }
        var Jt = Be.call(K);
        if (Jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var lr = null, Zt = null, er = le, Ca = 0, ra = 0, Ci = null, ja = Jt.next(); er !== null && !ja.done; ra++, ja = Jt.next()) {
          er.index > ra ? (Ci = er, er = null) : Ci = er.sibling;
          var za = F(q, er, ja.value, Ee);
          if (za === null) {
            er === null && (er = Ci);
            break;
          }
          e && er && za.alternate === null && t(q, er), Ca = d(za, Ca, ra), Zt === null ? lr = za : Zt.sibling = za, Zt = za, er = Ci;
        }
        if (ja.done) {
          if (a(q, er), Gr()) {
            var Ra = ra;
            dc(q, Ra);
          }
          return lr;
        }
        if (er === null) {
          for (; !ja.done; ra++, ja = Jt.next()) {
            var Xl = H(q, ja.value, Ee);
            Xl !== null && (Ca = d(Xl, Ca, ra), Zt === null ? lr = Xl : Zt.sibling = Xl, Zt = Xl);
          }
          if (Gr()) {
            var Cd = ra;
            dc(q, Cd);
          }
          return lr;
        }
        for (var Av = i(q, er); !ja.done; ra++, ja = Jt.next()) {
          var ul = Z(Av, q, ra, ja.value, Ee);
          ul !== null && (e && ul.alternate !== null && Av.delete(ul.key === null ? ra : ul.key), Ca = d(ul, Ca, ra), Zt === null ? lr = ul : Zt.sibling = ul, Zt = ul);
        }
        if (e && Av.forEach(function(uM) {
          return t(q, uM);
        }), Gr()) {
          var lM = ra;
          dc(q, lM);
        }
        return lr;
      }
      function ot(q, le, K, Ee) {
        if (le !== null && le.tag === B) {
          a(q, le.sibling);
          var Be = u(le, K);
          return Be.return = q, Be;
        }
        a(q, le);
        var Fe = k0(K, q.mode, Ee);
        return Fe.return = q, Fe;
      }
      function et(q, le, K, Ee) {
        for (var Be = K.key, Fe = le; Fe !== null; ) {
          if (Fe.key === Be) {
            var pt = K.type;
            if (pt === wa) {
              if (Fe.tag === $) {
                a(q, Fe.sibling);
                var Rt = u(Fe, K.props.children);
                return Rt.return = q, Rt._debugSource = K._source, Rt._debugOwner = K._owner, Rt;
              }
            } else if (Fe.elementType === pt || // Keep this check inline so it only runs on the false path:
            eb(Fe, K) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof pt == "object" && pt !== null && pt.$$typeof === ut && KR(pt) === Fe.type) {
              a(q, Fe.sibling);
              var hn = u(Fe, K.props);
              return hn.ref = nv(q, Fe, K), hn.return = q, hn._debugSource = K._source, hn._debugOwner = K._owner, hn;
            }
            a(q, Fe);
            break;
          } else
            t(q, Fe);
          Fe = Fe.sibling;
        }
        if (K.type === wa) {
          var Jt = hs(K.props.children, q.mode, Ee, K.key);
          return Jt.return = q, Jt;
        } else {
          var lr = D0(K, q.mode, Ee);
          return lr.ref = nv(q, le, K), lr.return = q, lr;
        }
      }
      function Yt(q, le, K, Ee) {
        for (var Be = K.key, Fe = le; Fe !== null; ) {
          if (Fe.key === Be)
            if (Fe.tag === U && Fe.stateNode.containerInfo === K.containerInfo && Fe.stateNode.implementation === K.implementation) {
              a(q, Fe.sibling);
              var pt = u(Fe, K.children || []);
              return pt.return = q, pt;
            } else {
              a(q, Fe);
              break;
            }
          else
            t(q, Fe);
          Fe = Fe.sibling;
        }
        var Rt = N0(K, q.mode, Ee);
        return Rt.return = q, Rt;
      }
      function Ft(q, le, K, Ee) {
        var Be = typeof K == "object" && K !== null && K.type === wa && K.key === null;
        if (Be && (K = K.props.children), typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case fi:
              return y(et(q, le, K, Ee));
            case $r:
              return y(Yt(q, le, K, Ee));
            case ut:
              var Fe = K._payload, pt = K._init;
              return Ft(q, le, pt(Fe), Ee);
          }
          if (Vt(K))
            return oe(q, le, K, Ee);
          if (Ir(K))
            return ze(q, le, K, Ee);
          Im(q, K);
        }
        return typeof K == "string" && K !== "" || typeof K == "number" ? y(ot(q, le, "" + K, Ee)) : (typeof K == "function" && Ym(q), a(q, le));
      }
      return Ft;
    }
    var rd = QR(!0), GR = QR(!1);
    function zD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = bc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = bc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function FD(e, t) {
      for (var a = e.child; a !== null; )
        bL(a, t), a = a.sibling;
    }
    var jS = ts(null), zS;
    zS = {};
    var Wm = null, ad = null, FS = null, qm = !1;
    function Km() {
      Wm = null, ad = null, FS = null, qm = !1;
    }
    function XR() {
      qm = !0;
    }
    function JR() {
      qm = !1;
    }
    function ZR(e, t, a) {
      Sa(jS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== zS && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = zS;
    }
    function PS(e, t) {
      var a = jS.current;
      ga(jS, t), e._currentValue = a;
    }
    function HS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ll(i.childLanes, t) ? u !== null && !Ll(u.childLanes, t) && (u.childLanes = bt(u.childLanes, t)) : (i.childLanes = bt(i.childLanes, t), u !== null && (u.childLanes = bt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PD(e, t, a) {
      HD(e, t, a);
    }
    function HD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, d = i.dependencies;
        if (d !== null) {
          u = i.child;
          for (var y = d.firstContext; y !== null; ) {
            if (y.context === t) {
              if (i.tag === w) {
                var E = ju(a), C = Yl(xn, E);
                C.tag = Gm;
                var _ = i.updateQueue;
                if (_ !== null) {
                  var D = _.shared, H = D.pending;
                  H === null ? C.next = C : (C.next = H.next, H.next = C), D.pending = C;
                }
              }
              i.lanes = bt(i.lanes, a);
              var F = i.alternate;
              F !== null && (F.lanes = bt(F.lanes, a)), HS(i.return, a, e), d.lanes = bt(d.lanes, a);
              break;
            }
            y = y.next;
          }
        } else if (i.tag === ie)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === xt) {
          var Z = i.return;
          if (Z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Z.lanes = bt(Z.lanes, a);
          var ne = Z.alternate;
          ne !== null && (ne.lanes = bt(ne.lanes, a)), HS(Z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var oe = u.sibling;
            if (oe !== null) {
              oe.return = u.return, u = oe;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function id(e, t) {
      Wm = e, ad = null, FS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ma(a.lanes, t) && yv(), a.firstContext = null);
      }
    }
    function gr(e) {
      qm && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (FS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (ad === null) {
          if (Wm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ad = a, Wm.dependencies = {
            lanes: de,
            firstContext: a
          };
        } else
          ad = ad.next = a;
      }
      return t;
    }
    var yc = null;
    function BS(e) {
      yc === null ? yc = [e] : yc.push(e);
    }
    function BD() {
      if (yc !== null) {
        for (var e = 0; e < yc.length; e++) {
          var t = yc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = i, a.next = d;
            }
            t.pending = a;
          }
        }
        yc = null;
      }
    }
    function eT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, BS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qm(e, i);
    }
    function VD(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, BS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function $D(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, BS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qm(e, i);
    }
    function ri(e, t) {
      return Qm(e, t);
    }
    var ID = Qm;
    function Qm(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (_n | Ya)) !== it && Gx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = bt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (u.flags & (_n | Ya)) !== it && Gx(e), i = u, u = u.return;
      if (i.tag === O) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var tT = 0, nT = 1, Gm = 2, VS = 3, Xm = !1, $S, Jm;
    $S = !1, Jm = null;
    function IS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: de
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function rT(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Yl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: tT,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function is(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jm === u && !$S && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), $S = !0), VN()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, ID(e, a);
      } else
        return $D(e, u, t, a);
    }
    function Zm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (yp(a)) {
          var d = u.lanes;
          d = Rf(d, e.pendingLanes);
          var y = bt(d, a);
          u.lanes = y, gp(e, y);
        }
      }
    }
    function YS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var d = null, y = null, E = a.firstBaseUpdate;
          if (E !== null) {
            var C = E;
            do {
              var _ = {
                eventTime: C.eventTime,
                lane: C.lane,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null
              };
              y === null ? d = y = _ : (y.next = _, y = _), C = C.next;
            } while (C !== null);
            y === null ? d = y = t : (y.next = t, y = t);
          } else
            d = y = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: y,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var D = a.lastBaseUpdate;
      D === null ? a.firstBaseUpdate = t : D.next = t, a.lastBaseUpdate = t;
    }
    function YD(e, t, a, i, u, d) {
      switch (a.tag) {
        case nT: {
          var y = a.payload;
          if (typeof y == "function") {
            XR();
            var E = y.call(d, i, u);
            {
              if (e.mode & At) {
                Jn(!0);
                try {
                  y.call(d, i, u);
                } finally {
                  Jn(!1);
                }
              }
              JR();
            }
            return E;
          }
          return y;
        }
        case VS:
          e.flags = e.flags & ~vr | ht;
        case tT: {
          var C = a.payload, _;
          if (typeof C == "function") {
            XR(), _ = C.call(d, i, u);
            {
              if (e.mode & At) {
                Jn(!0);
                try {
                  C.call(d, i, u);
                } finally {
                  Jn(!1);
                }
              }
              JR();
            }
          } else
            _ = C;
          return _ == null ? i : Nt({}, i, _);
        }
        case Gm:
          return Xm = !0, i;
      }
      return i;
    }
    function ey(e, t, a, i) {
      var u = e.updateQueue;
      Xm = !1, Jm = u.shared;
      var d = u.firstBaseUpdate, y = u.lastBaseUpdate, E = u.shared.pending;
      if (E !== null) {
        u.shared.pending = null;
        var C = E, _ = C.next;
        C.next = null, y === null ? d = _ : y.next = _, y = C;
        var D = e.alternate;
        if (D !== null) {
          var H = D.updateQueue, F = H.lastBaseUpdate;
          F !== y && (F === null ? H.firstBaseUpdate = _ : F.next = _, H.lastBaseUpdate = C);
        }
      }
      if (d !== null) {
        var Z = u.baseState, ne = de, oe = null, ze = null, ot = null, et = d;
        do {
          var Yt = et.lane, Ft = et.eventTime;
          if (Ll(i, Yt)) {
            if (ot !== null) {
              var le = {
                eventTime: Ft,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Zn,
                tag: et.tag,
                payload: et.payload,
                callback: et.callback,
                next: null
              };
              ot = ot.next = le;
            }
            Z = YD(e, u, et, Z, t, a);
            var K = et.callback;
            if (K !== null && // If the update was already committed, we should not queue its
            // callback again.
            et.lane !== Zn) {
              e.flags |= ki;
              var Ee = u.effects;
              Ee === null ? u.effects = [et] : Ee.push(et);
            }
          } else {
            var q = {
              eventTime: Ft,
              lane: Yt,
              tag: et.tag,
              payload: et.payload,
              callback: et.callback,
              next: null
            };
            ot === null ? (ze = ot = q, oe = Z) : ot = ot.next = q, ne = bt(ne, Yt);
          }
          if (et = et.next, et === null) {
            if (E = u.shared.pending, E === null)
              break;
            var Be = E, Fe = Be.next;
            Be.next = null, et = Fe, u.lastBaseUpdate = Be, u.shared.pending = null;
          }
        } while (!0);
        ot === null && (oe = Z), u.baseState = oe, u.firstBaseUpdate = ze, u.lastBaseUpdate = ot;
        var pt = u.shared.interleaved;
        if (pt !== null) {
          var Rt = pt;
          do
            ne = bt(ne, Rt.lane), Rt = Rt.next;
          while (Rt !== pt);
        } else
          d === null && (u.shared.lanes = de);
        Dv(ne), e.lanes = ne, e.memoizedState = Z;
      }
      Jm = null;
    }
    function WD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function aT() {
      Xm = !1;
    }
    function ty() {
      return Xm;
    }
    function iT(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u], y = d.callback;
          y !== null && (d.callback = null, WD(y, a));
        }
    }
    var rv = {}, os = ts(rv), av = ts(rv), ny = ts(rv);
    function ry(e) {
      if (e === rv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function oT() {
      var e = ry(ny.current);
      return e;
    }
    function WS(e, t) {
      Sa(ny, t, e), Sa(av, e, e), Sa(os, rv, e);
      var a = sO(t);
      ga(os, e), Sa(os, a, e);
    }
    function od(e) {
      ga(os, e), ga(av, e), ga(ny, e);
    }
    function qS() {
      var e = ry(os.current);
      return e;
    }
    function lT(e) {
      ry(ny.current);
      var t = ry(os.current), a = cO(t, e.type);
      t !== a && (Sa(av, e, e), Sa(os, a, e));
    }
    function KS(e) {
      av.current === e && (ga(os, e), ga(av, e));
    }
    var qD = 0, uT = 1, sT = 1, iv = 2, vo = ts(qD);
    function QS(e, t) {
      return (e & t) !== 0;
    }
    function ld(e) {
      return e & uT;
    }
    function GS(e, t) {
      return e & uT | t;
    }
    function KD(e, t) {
      return e | t;
    }
    function ls(e, t) {
      Sa(vo, t, e);
    }
    function ud(e) {
      ga(vo, e);
    }
    function QD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ay(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === J) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || wR(i) || vS(i))
              return t;
          }
        } else if (t.tag === gt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ht) !== it;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ai = (
      /*   */
      0
    ), Tr = (
      /* */
      1
    ), tl = (
      /*  */
      2
    ), xr = (
      /*    */
      4
    ), Xr = (
      /*   */
      8
    ), XS = [];
    function JS() {
      for (var e = 0; e < XS.length; e++) {
        var t = XS[e];
        t._workInProgressVersionPrimary = null;
      }
      XS.length = 0;
    }
    function GD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var He = f.ReactCurrentDispatcher, ov = f.ReactCurrentBatchConfig, ZS, sd;
    ZS = /* @__PURE__ */ new Set();
    var gc = de, vn = null, br = null, wr = null, iy = !1, lv = !1, uv = 0, XD = 0, JD = 25, ue = null, Pi = null, us = -1, eE = !1;
    function fn() {
      {
        var e = ue;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function Le() {
      {
        var e = ue;
        Pi !== null && (us++, Pi[us] !== e && ZD(e));
      }
    }
    function cd(e) {
      e != null && !Vt(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ue, typeof e);
    }
    function ZD(e) {
      {
        var t = St(vn);
        if (!ZS.has(t) && (ZS.add(t), Pi !== null)) {
          for (var a = "", i = 30, u = 0; u <= us; u++) {
            for (var d = Pi[u], y = u === us ? e : d, E = u + 1 + ". " + d; E.length < i; )
              E += " ";
            E += y + `
`, a += E;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ea() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function tE(e, t) {
      if (eE)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ue), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ue, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!qe(e[a], t[a]))
          return !1;
      return !0;
    }
    function fd(e, t, a, i, u, d) {
      gc = d, vn = t, Pi = e !== null ? e._debugHookTypes : null, us = -1, eE = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = de, e !== null && e.memoizedState !== null ? He.current = NT : Pi !== null ? He.current = kT : He.current = DT;
      var y = a(i, u);
      if (lv) {
        var E = 0;
        do {
          if (lv = !1, uv = 0, E >= JD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          E += 1, eE = !1, br = null, wr = null, t.updateQueue = null, us = -1, He.current = LT, y = a(i, u);
        } while (lv);
      }
      He.current = gy, t._debugHookTypes = Pi;
      var C = br !== null && br.next !== null;
      if (gc = de, vn = null, br = null, wr = null, ue = null, Pi = null, us = -1, e !== null && (e.flags & Er) !== (t.flags & Er) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ze) !== Ge && v("Internal React error: Expected static flag was missing. Please notify the React team."), iy = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function dd() {
      var e = uv !== 0;
      return uv = 0, e;
    }
    function cT(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Na) !== Ge ? t.flags &= ~(Tl | ca | Nn | wt) : t.flags &= ~(Nn | wt), e.lanes = Qs(e.lanes, a);
    }
    function fT() {
      if (He.current = gy, iy) {
        for (var e = vn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        iy = !1;
      }
      gc = de, vn = null, br = null, wr = null, Pi = null, us = -1, ue = null, xT = !1, lv = !1, uv = 0;
    }
    function nl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return wr === null ? vn.memoizedState = wr = e : wr = wr.next = e, wr;
    }
    function Hi() {
      var e;
      if (br === null) {
        var t = vn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = br.next;
      var a;
      if (wr === null ? a = vn.memoizedState : a = wr.next, a !== null)
        wr = a, a = wr.next, br = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        br = e;
        var i = {
          memoizedState: br.memoizedState,
          baseState: br.baseState,
          baseQueue: br.baseQueue,
          queue: br.queue,
          next: null
        };
        wr === null ? vn.memoizedState = wr = i : wr = wr.next = i;
      }
      return wr;
    }
    function dT() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function nE(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function rE(e, t, a) {
      var i = nl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = d;
      var y = d.dispatch = rk.bind(null, vn, d);
      return [i.memoizedState, y];
    }
    function aE(e, t, a) {
      var i = Hi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = br, y = d.baseQueue, E = u.pending;
      if (E !== null) {
        if (y !== null) {
          var C = y.next, _ = E.next;
          y.next = _, E.next = C;
        }
        d.baseQueue !== y && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = y = E, u.pending = null;
      }
      if (y !== null) {
        var D = y.next, H = d.baseState, F = null, Z = null, ne = null, oe = D;
        do {
          var ze = oe.lane;
          if (Ll(gc, ze)) {
            if (ne !== null) {
              var et = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Zn,
                action: oe.action,
                hasEagerState: oe.hasEagerState,
                eagerState: oe.eagerState,
                next: null
              };
              ne = ne.next = et;
            }
            if (oe.hasEagerState)
              H = oe.eagerState;
            else {
              var Yt = oe.action;
              H = e(H, Yt);
            }
          } else {
            var ot = {
              lane: ze,
              action: oe.action,
              hasEagerState: oe.hasEagerState,
              eagerState: oe.eagerState,
              next: null
            };
            ne === null ? (Z = ne = ot, F = H) : ne = ne.next = ot, vn.lanes = bt(vn.lanes, ze), Dv(ze);
          }
          oe = oe.next;
        } while (oe !== null && oe !== D);
        ne === null ? F = H : ne.next = Z, qe(H, i.memoizedState) || yv(), i.memoizedState = H, i.baseState = F, i.baseQueue = ne, u.lastRenderedState = H;
      }
      var Ft = u.interleaved;
      if (Ft !== null) {
        var q = Ft;
        do {
          var le = q.lane;
          vn.lanes = bt(vn.lanes, le), Dv(le), q = q.next;
        } while (q !== Ft);
      } else
        y === null && (u.lanes = de);
      var K = u.dispatch;
      return [i.memoizedState, K];
    }
    function iE(e, t, a) {
      var i = Hi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, y = u.pending, E = i.memoizedState;
      if (y !== null) {
        u.pending = null;
        var C = y.next, _ = C;
        do {
          var D = _.action;
          E = e(E, D), _ = _.next;
        } while (_ !== C);
        qe(E, i.memoizedState) || yv(), i.memoizedState = E, i.baseQueue === null && (i.baseState = E), u.lastRenderedState = E;
      }
      return [E, d];
    }
    function iF(e, t, a) {
    }
    function oF(e, t, a) {
    }
    function oE(e, t, a) {
      var i = vn, u = nl(), d, y = Gr();
      if (y) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), sd || d !== a() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), sd = !0);
      } else {
        if (d = t(), !sd) {
          var E = t();
          qe(d, E) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
        }
        var C = zy();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ks(C, gc) || pT(i, t, d);
      }
      u.memoizedState = d;
      var _ = {
        value: d,
        getSnapshot: t
      };
      return u.queue = _, cy(hT.bind(null, i, _, e), [e]), i.flags |= Nn, sv(Tr | Xr, vT.bind(null, i, _, d, t), void 0, null), d;
    }
    function oy(e, t, a) {
      var i = vn, u = Hi(), d = t();
      if (!sd) {
        var y = t();
        qe(d, y) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
      }
      var E = u.memoizedState, C = !qe(E, d);
      C && (u.memoizedState = d, yv());
      var _ = u.queue;
      if (fv(hT.bind(null, i, _, e), [e]), _.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wr !== null && wr.memoizedState.tag & Tr) {
        i.flags |= Nn, sv(Tr | Xr, vT.bind(null, i, _, d, t), void 0, null);
        var D = zy();
        if (D === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ks(D, gc) || pT(i, t, d);
      }
      return d;
    }
    function pT(e, t, a) {
      e.flags |= Fs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = vn.updateQueue;
      if (u === null)
        u = dT(), vn.updateQueue = u, u.stores = [i];
      else {
        var d = u.stores;
        d === null ? u.stores = [i] : d.push(i);
      }
    }
    function vT(e, t, a, i) {
      t.value = a, t.getSnapshot = i, mT(t) && yT(e);
    }
    function hT(e, t, a) {
      var i = function() {
        mT(t) && yT(e);
      };
      return a(i);
    }
    function mT(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !qe(a, i);
      } catch {
        return !0;
      }
    }
    function yT(e) {
      var t = ri(e, rt);
      t !== null && kr(t, e, rt, xn);
    }
    function ly(e) {
      var t = nl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: nE,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ak.bind(null, vn, a);
      return [t.memoizedState, i];
    }
    function lE(e) {
      return aE(nE);
    }
    function uE(e) {
      return iE(nE);
    }
    function sv(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = vn.updateQueue;
      if (d === null)
        d = dT(), vn.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var y = d.lastEffect;
        if (y === null)
          d.lastEffect = u.next = u;
        else {
          var E = y.next;
          y.next = u, u.next = E, d.lastEffect = u;
        }
      }
      return u;
    }
    function sE(e) {
      var t = nl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function uy(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function cv(e, t, a, i) {
      var u = nl(), d = i === void 0 ? null : i;
      vn.flags |= e, u.memoizedState = sv(Tr | t, a, void 0, d);
    }
    function sy(e, t, a, i) {
      var u = Hi(), d = i === void 0 ? null : i, y = void 0;
      if (br !== null) {
        var E = br.memoizedState;
        if (y = E.destroy, d !== null) {
          var C = E.deps;
          if (tE(d, C)) {
            u.memoizedState = sv(t, a, y, d);
            return;
          }
        }
      }
      vn.flags |= e, u.memoizedState = sv(Tr | t, a, y, d);
    }
    function cy(e, t) {
      return (vn.mode & Na) !== Ge ? cv(Tl | Nn | $o, Xr, e, t) : cv(Nn | $o, Xr, e, t);
    }
    function fv(e, t) {
      return sy(Nn, Xr, e, t);
    }
    function cE(e, t) {
      return cv(wt, tl, e, t);
    }
    function fy(e, t) {
      return sy(wt, tl, e, t);
    }
    function fE(e, t) {
      var a = wt;
      return a |= sa, (vn.mode & Na) !== Ge && (a |= ca), cv(a, xr, e, t);
    }
    function dy(e, t) {
      return sy(wt, xr, e, t);
    }
    function gT(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function dE(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = wt;
      return u |= sa, (vn.mode & Na) !== Ge && (u |= ca), cv(u, xr, gT.bind(null, t, e), i);
    }
    function py(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sy(wt, xr, gT.bind(null, t, e), i);
    }
    function ek(e, t) {
    }
    var vy = ek;
    function pE(e, t) {
      var a = nl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hy(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (tE(i, d))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function vE(e, t) {
      var a = nl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function my(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (tE(i, d))
          return u[0];
      }
      var y = e();
      return a.memoizedState = [y, i], y;
    }
    function hE(e) {
      var t = nl();
      return t.memoizedState = e, e;
    }
    function ST(e) {
      var t = Hi(), a = br, i = a.memoizedState;
      return CT(t, i, e);
    }
    function ET(e) {
      var t = Hi();
      if (br === null)
        return t.memoizedState = e, e;
      var a = br.memoizedState;
      return CT(t, a, e);
    }
    function CT(e, t, a) {
      var i = !Wh(gc);
      if (i) {
        if (!qe(a, t)) {
          var u = Qh();
          vn.lanes = bt(vn.lanes, u), Dv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, yv()), e.memoizedState = a, a;
    }
    function tk(e, t, a) {
      var i = Xa();
      Bn(Ug(i, oo)), e(!0);
      var u = ov.transition;
      ov.transition = {};
      var d = ov.transition;
      ov.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Bn(i), ov.transition = u, u === null && d._updatedFibers) {
          var y = d._updatedFibers.size;
          y > 10 && g("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function mE() {
      var e = ly(!1), t = e[0], a = e[1], i = tk.bind(null, a), u = nl();
      return u.memoizedState = i, [t, i];
    }
    function RT() {
      var e = lE(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function TT() {
      var e = uE(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var xT = !1;
    function nk() {
      return xT;
    }
    function yE() {
      var e = nl(), t = zy(), a = t.identifierPrefix, i;
      if (Gr()) {
        var u = SD();
        i = ":" + a + "R" + u;
        var d = uv++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var y = XD++;
        i = ":" + a + "r" + y.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function yy() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function rk(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ps(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (bT(e))
        wT(t, u);
      else {
        var d = eT(e, t, u, i);
        if (d !== null) {
          var y = Ua();
          kr(d, e, i, y), _T(d, t, i);
        }
      }
      OT(e, i);
    }
    function ak(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ps(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (bT(e))
        wT(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === de && (d === null || d.lanes === de)) {
          var y = t.lastRenderedReducer;
          if (y !== null) {
            var E;
            E = He.current, He.current = ho;
            try {
              var C = t.lastRenderedState, _ = y(C, a);
              if (u.hasEagerState = !0, u.eagerState = _, qe(_, C)) {
                VD(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              He.current = E;
            }
          }
        }
        var D = eT(e, t, u, i);
        if (D !== null) {
          var H = Ua();
          kr(D, e, i, H), _T(D, t, i);
        }
      }
      OT(e, i);
    }
    function bT(e) {
      var t = e.alternate;
      return e === vn || t !== null && t === vn;
    }
    function wT(e, t) {
      lv = iy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function _T(e, t, a) {
      if (yp(a)) {
        var i = t.lanes;
        i = Rf(i, e.pendingLanes);
        var u = bt(i, a);
        t.lanes = u, gp(e, u);
      }
    }
    function OT(e, t, a) {
      Vs(e, t);
    }
    var gy = {
      readContext: gr,
      useCallback: Ea,
      useContext: Ea,
      useEffect: Ea,
      useImperativeHandle: Ea,
      useInsertionEffect: Ea,
      useLayoutEffect: Ea,
      useMemo: Ea,
      useReducer: Ea,
      useRef: Ea,
      useState: Ea,
      useDebugValue: Ea,
      useDeferredValue: Ea,
      useTransition: Ea,
      useMutableSource: Ea,
      useSyncExternalStore: Ea,
      useId: Ea,
      unstable_isNewReconciler: se
    }, DT = null, kT = null, NT = null, LT = null, rl = null, ho = null, Sy = null;
    {
      var gE = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Et = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      DT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", fn(), cd(t), pE(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", fn(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", fn(), cd(t), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", fn(), cd(a), dE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", fn(), cd(t), cE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", fn(), cd(t), fE(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", fn(), cd(t);
          var a = He.current;
          He.current = rl;
          try {
            return vE(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", fn();
          var i = He.current;
          He.current = rl;
          try {
            return rE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", fn(), sE(e);
        },
        useState: function(e) {
          ue = "useState", fn();
          var t = He.current;
          He.current = rl;
          try {
            return ly(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", fn(), void 0;
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", fn(), hE(e);
        },
        useTransition: function() {
          return ue = "useTransition", fn(), mE();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", fn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", fn(), oE(e, t, a);
        },
        useId: function() {
          return ue = "useId", fn(), yE();
        },
        unstable_isNewReconciler: se
      }, kT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Le(), pE(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Le(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Le(), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Le(), dE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Le(), cE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Le(), fE(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Le();
          var a = He.current;
          He.current = rl;
          try {
            return vE(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Le();
          var i = He.current;
          He.current = rl;
          try {
            return rE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Le(), sE(e);
        },
        useState: function(e) {
          ue = "useState", Le();
          var t = He.current;
          He.current = rl;
          try {
            return ly(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Le(), void 0;
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Le(), hE(e);
        },
        useTransition: function() {
          return ue = "useTransition", Le(), mE();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Le(), oE(e, t, a);
        },
        useId: function() {
          return ue = "useId", Le(), yE();
        },
        unstable_isNewReconciler: se
      }, NT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Le(), hy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Le(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Le(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Le(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Le(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Le(), dy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Le();
          var a = He.current;
          He.current = ho;
          try {
            return my(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Le();
          var i = He.current;
          He.current = ho;
          try {
            return aE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Le(), uy();
        },
        useState: function(e) {
          ue = "useState", Le();
          var t = He.current;
          He.current = ho;
          try {
            return lE(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Le(), vy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Le(), ST(e);
        },
        useTransition: function() {
          return ue = "useTransition", Le(), RT();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Le(), oy(e, t);
        },
        useId: function() {
          return ue = "useId", Le(), yy();
        },
        unstable_isNewReconciler: se
      }, LT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Le(), hy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Le(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Le(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Le(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Le(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Le(), dy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Le();
          var a = He.current;
          He.current = Sy;
          try {
            return my(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Le();
          var i = He.current;
          He.current = Sy;
          try {
            return iE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Le(), uy();
        },
        useState: function(e) {
          ue = "useState", Le();
          var t = He.current;
          He.current = Sy;
          try {
            return uE(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Le(), vy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Le(), ET(e);
        },
        useTransition: function() {
          return ue = "useTransition", Le(), TT();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Le(), oy(e, t);
        },
        useId: function() {
          return ue = "useId", Le(), yy();
        },
        unstable_isNewReconciler: se
      }, rl = {
        readContext: function(e) {
          return gE(), gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Et(), fn(), pE(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Et(), fn(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Et(), fn(), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Et(), fn(), dE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Et(), fn(), cE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Et(), fn(), fE(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Et(), fn();
          var a = He.current;
          He.current = rl;
          try {
            return vE(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Et(), fn();
          var i = He.current;
          He.current = rl;
          try {
            return rE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Et(), fn(), sE(e);
        },
        useState: function(e) {
          ue = "useState", Et(), fn();
          var t = He.current;
          He.current = rl;
          try {
            return ly(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Et(), fn(), void 0;
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Et(), fn(), hE(e);
        },
        useTransition: function() {
          return ue = "useTransition", Et(), fn(), mE();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Et(), fn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Et(), fn(), oE(e, t, a);
        },
        useId: function() {
          return ue = "useId", Et(), fn(), yE();
        },
        unstable_isNewReconciler: se
      }, ho = {
        readContext: function(e) {
          return gE(), gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Et(), Le(), hy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Et(), Le(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Et(), Le(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Et(), Le(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Et(), Le(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Et(), Le(), dy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Et(), Le();
          var a = He.current;
          He.current = ho;
          try {
            return my(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Et(), Le();
          var i = He.current;
          He.current = ho;
          try {
            return aE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Et(), Le(), uy();
        },
        useState: function(e) {
          ue = "useState", Et(), Le();
          var t = He.current;
          He.current = ho;
          try {
            return lE(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Et(), Le(), vy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Et(), Le(), ST(e);
        },
        useTransition: function() {
          return ue = "useTransition", Et(), Le(), RT();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Et(), Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Et(), Le(), oy(e, t);
        },
        useId: function() {
          return ue = "useId", Et(), Le(), yy();
        },
        unstable_isNewReconciler: se
      }, Sy = {
        readContext: function(e) {
          return gE(), gr(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Et(), Le(), hy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Et(), Le(), gr(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Et(), Le(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Et(), Le(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Et(), Le(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Et(), Le(), dy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Et(), Le();
          var a = He.current;
          He.current = ho;
          try {
            return my(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Et(), Le();
          var i = He.current;
          He.current = ho;
          try {
            return iE(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Et(), Le(), uy();
        },
        useState: function(e) {
          ue = "useState", Et(), Le();
          var t = He.current;
          He.current = ho;
          try {
            return uE(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Et(), Le(), vy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Et(), Le(), ET(e);
        },
        useTransition: function() {
          return ue = "useTransition", Et(), Le(), TT();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Et(), Le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Et(), Le(), oy(e, t);
        },
        useId: function() {
          return ue = "useId", Et(), Le(), yy();
        },
        unstable_isNewReconciler: se
      };
    }
    var ss = s.unstable_now, MT = 0, Ey = -1, dv = -1, Cy = -1, SE = !1, Ry = !1;
    function AT() {
      return SE;
    }
    function ik() {
      Ry = !0;
    }
    function ok() {
      SE = !1, Ry = !1;
    }
    function lk() {
      SE = Ry, Ry = !1;
    }
    function UT() {
      return MT;
    }
    function jT() {
      MT = ss();
    }
    function EE(e) {
      dv = ss(), e.actualStartTime < 0 && (e.actualStartTime = ss());
    }
    function zT(e) {
      dv = -1;
    }
    function Ty(e, t) {
      if (dv >= 0) {
        var a = ss() - dv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), dv = -1;
      }
    }
    function al(e) {
      if (Ey >= 0) {
        var t = ss() - Ey;
        Ey = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ce:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function CE(e) {
      if (Cy >= 0) {
        var t = ss() - Cy;
        Cy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ce:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function il() {
      Ey = ss();
    }
    function RE() {
      Cy = ss();
    }
    function TE(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function mo(e, t) {
      if (e && e.defaultProps) {
        var a = Nt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var xE = {}, bE, wE, _E, OE, DE, FT, xy, kE, NE, LE, pv;
    {
      bE = /* @__PURE__ */ new Set(), wE = /* @__PURE__ */ new Set(), _E = /* @__PURE__ */ new Set(), OE = /* @__PURE__ */ new Set(), kE = /* @__PURE__ */ new Set(), DE = /* @__PURE__ */ new Set(), NE = /* @__PURE__ */ new Set(), LE = /* @__PURE__ */ new Set(), pv = /* @__PURE__ */ new Set();
      var PT = /* @__PURE__ */ new Set();
      xy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          PT.has(a) || (PT.add(a), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, FT = function(e, t) {
        if (t === void 0) {
          var a = Bt(e) || "Component";
          DE.has(a) || (DE.add(a), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(xE, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(xE);
    }
    function ME(e, t, a, i) {
      var u = e.memoizedState, d = a(i, u);
      {
        if (e.mode & At) {
          Jn(!0);
          try {
            d = a(i, u);
          } finally {
            Jn(!1);
          }
        }
        FT(t, d);
      }
      var y = d == null ? u : Nt({}, u, d);
      if (e.memoizedState = y, e.lanes === de) {
        var E = e.updateQueue;
        E.baseState = y;
      }
    }
    var AE = {
      isMounted: Da,
      enqueueSetState: function(e, t, a) {
        var i = $a(e), u = Ua(), d = ps(i), y = Yl(u, d);
        y.payload = t, a != null && (xy(a, "setState"), y.callback = a);
        var E = is(i, y, d);
        E !== null && (kr(E, i, d, u), Zm(E, i, d)), Vs(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = $a(e), u = Ua(), d = ps(i), y = Yl(u, d);
        y.tag = nT, y.payload = t, a != null && (xy(a, "replaceState"), y.callback = a);
        var E = is(i, y, d);
        E !== null && (kr(E, i, d, u), Zm(E, i, d)), Vs(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = $a(e), i = Ua(), u = ps(a), d = Yl(i, u);
        d.tag = Gm, t != null && (xy(t, "forceUpdate"), d.callback = t);
        var y = is(a, d, u);
        y !== null && (kr(y, a, u, i), Zm(y, a, u)), af(a, u);
      }
    };
    function HT(e, t, a, i, u, d, y) {
      var E = e.stateNode;
      if (typeof E.shouldComponentUpdate == "function") {
        var C = E.shouldComponentUpdate(i, d, y);
        {
          if (e.mode & At) {
            Jn(!0);
            try {
              C = E.shouldComponentUpdate(i, d, y);
            } finally {
              Jn(!1);
            }
          }
          C === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Bt(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ft(a, i) || !ft(u, d) : !0;
    }
    function uk(e, t, a) {
      var i = e.stateNode;
      {
        var u = Bt(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !pv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & At) === Ge && (pv.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !pv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & At) === Ge && (pv.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !NE.has(t) && (NE.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var y = i.props !== a;
        i.props !== void 0 && y && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !_E.has(t) && (_E.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Bt(t))), typeof i.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var E = i.state;
        E && (typeof E != "object" || Vt(E)) && v("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function BT(e, t) {
      t.updater = AE, e.stateNode = t, Ru(t, e), t._reactInternalInstance = xE;
    }
    function VT(e, t, a) {
      var i = !1, u = Si, d = Si, y = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === ye && y._context === void 0
        );
        if (!E && !LE.has(t)) {
          LE.add(t);
          var C = "";
          y === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? C = " However, it is set to a " + typeof y + "." : y.$$typeof === j ? C = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Bt(t) || "Component", C);
        }
      }
      if (typeof y == "object" && y !== null)
        d = gr(y);
      else {
        u = Jf(e, t, !0);
        var _ = t.contextTypes;
        i = _ != null, d = i ? Zf(e, u) : Si;
      }
      var D = new t(a, d);
      if (e.mode & At) {
        Jn(!0);
        try {
          D = new t(a, d);
        } finally {
          Jn(!1);
        }
      }
      var H = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      BT(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && H === null) {
          var F = Bt(t) || "Component";
          wE.has(F) || (wE.add(F), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, D.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var Z = null, ne = null, oe = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? Z = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (Z = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ne = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (ne = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? oe = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (oe = "UNSAFE_componentWillUpdate"), Z !== null || ne !== null || oe !== null) {
            var ze = Bt(t) || "Component", ot = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            OE.has(ze) || (OE.add(ze), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ze, ot, Z !== null ? `
  ` + Z : "", ne !== null ? `
  ` + ne : "", oe !== null ? `
  ` + oe : ""));
          }
        }
      }
      return i && NR(e, u, d), D;
    }
    function sk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", St(e) || "Component"), AE.enqueueReplaceState(t, t.state, null));
    }
    function $T(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var d = St(e) || "Component";
          bE.has(d) || (bE.add(d), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        AE.enqueueReplaceState(t, t.state, null);
      }
    }
    function UE(e, t, a, i) {
      uk(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, IS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = gr(d);
      else {
        var y = Jf(e, t, !0);
        u.context = Zf(e, y);
      }
      {
        if (u.state === a) {
          var E = Bt(t) || "Component";
          kE.has(E) || (kE.add(E), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", E));
        }
        e.mode & At && po.recordLegacyContextWarning(e, u), po.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (ME(e, t, C, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (sk(e, u), ey(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var _ = wt;
        _ |= sa, (e.mode & Na) !== Ge && (_ |= ca), e.flags |= _;
      }
    }
    function ck(e, t, a, i) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var y = u.context, E = t.contextType, C = Si;
      if (typeof E == "object" && E !== null)
        C = gr(E);
      else {
        var _ = Jf(e, t, !0);
        C = Zf(e, _);
      }
      var D = t.getDerivedStateFromProps, H = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !H && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || y !== C) && $T(e, u, a, C), aT();
      var F = e.memoizedState, Z = u.state = F;
      if (ey(e, a, u, i), Z = e.memoizedState, d === a && F === Z && !Um() && !ty()) {
        if (typeof u.componentDidMount == "function") {
          var ne = wt;
          ne |= sa, (e.mode & Na) !== Ge && (ne |= ca), e.flags |= ne;
        }
        return !1;
      }
      typeof D == "function" && (ME(e, t, D, a), Z = e.memoizedState);
      var oe = ty() || HT(e, t, d, a, F, Z, C);
      if (oe) {
        if (!H && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ze = wt;
          ze |= sa, (e.mode & Na) !== Ge && (ze |= ca), e.flags |= ze;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ot = wt;
          ot |= sa, (e.mode & Na) !== Ge && (ot |= ca), e.flags |= ot;
        }
        e.memoizedProps = a, e.memoizedState = Z;
      }
      return u.props = a, u.state = Z, u.context = C, oe;
    }
    function fk(e, t, a, i, u) {
      var d = t.stateNode;
      rT(e, t);
      var y = t.memoizedProps, E = t.type === t.elementType ? y : mo(t.type, y);
      d.props = E;
      var C = t.pendingProps, _ = d.context, D = a.contextType, H = Si;
      if (typeof D == "object" && D !== null)
        H = gr(D);
      else {
        var F = Jf(t, a, !0);
        H = Zf(t, F);
      }
      var Z = a.getDerivedStateFromProps, ne = typeof Z == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !ne && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (y !== C || _ !== H) && $T(t, d, i, H), aT();
      var oe = t.memoizedState, ze = d.state = oe;
      if (ey(t, i, d, u), ze = t.memoizedState, y === C && oe === ze && !Um() && !ty() && !Ve)
        return typeof d.componentDidUpdate == "function" && (y !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= wt), typeof d.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= Ia), !1;
      typeof Z == "function" && (ME(t, a, Z, i), ze = t.memoizedState);
      var ot = ty() || HT(t, a, E, i, oe, ze, H) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return ot ? (!ne && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, ze, H), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, ze, H)), typeof d.componentDidUpdate == "function" && (t.flags |= wt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Ia)) : (typeof d.componentDidUpdate == "function" && (y !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= wt), typeof d.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || oe !== e.memoizedState) && (t.flags |= Ia), t.memoizedProps = i, t.memoizedState = ze), d.props = i, d.state = ze, d.context = H, ot;
    }
    function Sc(e, t) {
      return {
        value: e,
        source: t,
        stack: su(t),
        digest: null
      };
    }
    function jE(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function dk(e, t) {
      return !0;
    }
    function zE(e, t) {
      try {
        var a = dk(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, d = t.stack, y = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === w)
            return;
          console.error(i);
        }
        var E = u ? St(u) : null, C = E ? "The above error occurred in the <" + E + "> component:" : "The above error occurred in one of your React components:", _;
        if (e.tag === O)
          _ = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var D = St(e) || "Anonymous";
          _ = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + D + ".");
        }
        var H = C + `
` + y + `

` + ("" + _);
        console.error(H);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var pk = typeof WeakMap == "function" ? WeakMap : Map;
    function IT(e, t, a) {
      var i = Yl(xn, a);
      i.tag = VS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        iL(u), zE(e, t);
      }, i;
    }
    function FE(e, t, a) {
      var i = Yl(xn, a);
      i.tag = VS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        i.payload = function() {
          return u(d);
        }, i.callback = function() {
          tb(e), zE(e, t);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (i.callback = function() {
        tb(e), zE(e, t), typeof u != "function" && rL(this);
        var C = t.value, _ = t.stack;
        this.componentDidCatch(C, {
          componentStack: _ !== null ? _ : ""
        }), typeof u != "function" && (ma(e.lanes, rt) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", St(e) || "Unknown"));
      }), i;
    }
    function YT(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new pk(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = oL.bind(null, e, t, a);
        ka && kv(e, a), t.then(d, d);
      }
    }
    function vk(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        u.add(a);
    }
    function hk(e, t) {
      var a = e.tag;
      if ((e.mode & Ze) === Ge && (a === b || a === ae || a === Me)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function WT(e) {
      var t = e;
      do {
        if (t.tag === J && QD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function qT(e, t, a, i, u) {
      if ((e.mode & Ze) === Ge) {
        if (e === t)
          e.flags |= vr;
        else {
          if (e.flags |= ht, a.flags |= Ps, a.flags &= ~(Wc | _a), a.tag === w) {
            var d = a.alternate;
            if (d === null)
              a.tag = Wt;
            else {
              var y = Yl(xn, rt);
              y.tag = Gm, is(a, y, rt);
            }
          }
          a.lanes = bt(a.lanes, rt);
        }
        return e;
      }
      return e.flags |= vr, e.lanes = u, e;
    }
    function mk(e, t, a, i, u) {
      if (a.flags |= _a, ka && kv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        hk(a), Gr() && a.mode & Ze && FR();
        var y = WT(t);
        if (y !== null) {
          y.flags &= ~Hn, qT(y, t, a, e, u), y.mode & Ze && YT(e, d, u), vk(y, e, d);
          return;
        } else {
          if (!mp(u)) {
            YT(e, d, u), y0();
            return;
          }
          var E = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = E;
        }
      } else if (Gr() && a.mode & Ze) {
        FR();
        var C = WT(t);
        if (C !== null) {
          (C.flags & vr) === it && (C.flags |= Hn), qT(C, t, a, e, u), kS(Sc(i, a));
          return;
        }
      }
      i = Sc(i, a), QN(i);
      var _ = t;
      do {
        switch (_.tag) {
          case O: {
            var D = i;
            _.flags |= vr;
            var H = ju(u);
            _.lanes = bt(_.lanes, H);
            var F = IT(_, D, H);
            YS(_, F);
            return;
          }
          case w:
            var Z = i, ne = _.type, oe = _.stateNode;
            if ((_.flags & ht) === it && (typeof ne.getDerivedStateFromError == "function" || oe !== null && typeof oe.componentDidCatch == "function" && !Wx(oe))) {
              _.flags |= vr;
              var ze = ju(u);
              _.lanes = bt(_.lanes, ze);
              var ot = FE(_, Z, ze);
              YS(_, ot);
              return;
            }
            break;
        }
        _ = _.return;
      } while (_ !== null);
    }
    function yk() {
      return null;
    }
    var vv = f.ReactCurrentOwner, yo = !1, PE, hv, HE, BE, VE, Ec, $E, by, mv;
    PE = {}, hv = {}, HE = {}, BE = {}, VE = {}, Ec = !1, $E = {}, by = {}, mv = {};
    function Ma(e, t, a, i) {
      e === null ? t.child = GR(t, null, a, i) : t.child = rd(t, e.child, a, i);
    }
    function gk(e, t, a, i) {
      t.child = rd(t, e.child, null, i), t.child = rd(t, null, a, i);
    }
    function KT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && co(
          d,
          i,
          // Resolved props
          "prop",
          Bt(a)
        );
      }
      var y = a.render, E = t.ref, C, _;
      id(t, u), wu(t);
      {
        if (vv.current = t, oa(!0), C = fd(e, t, y, i, E, u), _ = dd(), t.mode & At) {
          Jn(!0);
          try {
            C = fd(e, t, y, i, E, u), _ = dd();
          } finally {
            Jn(!1);
          }
        }
        oa(!1);
      }
      return pa(), e !== null && !yo ? (cT(e, t, u), Wl(e, t, u)) : (Gr() && _ && xS(t), t.flags |= Bo, Ma(e, t, C, u), t.child);
    }
    function QT(e, t, a, i, u) {
      if (e === null) {
        var d = a.type;
        if (TL(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var y = d;
          return y = Ed(d), t.tag = Me, t.type = y, WE(t, d), GT(e, t, y, i, u);
        }
        {
          var E = d.propTypes;
          if (E && co(
            E,
            i,
            // Resolved props
            "prop",
            Bt(d)
          ), a.defaultProps !== void 0) {
            var C = Bt(d) || "Unknown";
            mv[C] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", C), mv[C] = !0);
          }
        }
        var _ = O0(a.type, null, i, t, t.mode, u);
        return _.ref = t.ref, _.return = t, t.child = _, _;
      }
      {
        var D = a.type, H = D.propTypes;
        H && co(
          H,
          i,
          // Resolved props
          "prop",
          Bt(D)
        );
      }
      var F = e.child, Z = JE(e, u);
      if (!Z) {
        var ne = F.memoizedProps, oe = a.compare;
        if (oe = oe !== null ? oe : ft, oe(ne, i) && e.ref === t.ref)
          return Wl(e, t, u);
      }
      t.flags |= Bo;
      var ze = bc(F, i);
      return ze.ref = t.ref, ze.return = t, t.child = ze, ze;
    }
    function GT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ut) {
          var y = d, E = y._payload, C = y._init;
          try {
            d = C(E);
          } catch {
            d = null;
          }
          var _ = d && d.propTypes;
          _ && co(
            _,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Bt(d)
          );
        }
      }
      if (e !== null) {
        var D = e.memoizedProps;
        if (ft(D, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (yo = !1, t.pendingProps = i = D, JE(e, u))
            (e.flags & Ps) !== it && (yo = !0);
          else
            return t.lanes = e.lanes, Wl(e, t, u);
      }
      return IE(e, t, a, i, u);
    }
    function XT(e, t, a) {
      var i = t.pendingProps, u = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || I)
        if ((t.mode & Ze) === Ge) {
          var y = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = y, Fy(t, a);
        } else if (ma(a, Pr)) {
          var H = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = H;
          var F = d !== null ? d.baseLanes : a;
          Fy(t, F);
        } else {
          var E = null, C;
          if (d !== null) {
            var _ = d.baseLanes;
            C = bt(_, a);
          } else
            C = a;
          t.lanes = t.childLanes = Pr;
          var D = {
            baseLanes: C,
            cachePool: E,
            transitions: null
          };
          return t.memoizedState = D, t.updateQueue = null, Fy(t, C), null;
        }
      else {
        var Z;
        d !== null ? (Z = bt(d.baseLanes, a), t.memoizedState = null) : Z = a, Fy(t, Z);
      }
      return Ma(e, t, u, a), t.child;
    }
    function Sk(e, t, a) {
      var i = t.pendingProps;
      return Ma(e, t, i, a), t.child;
    }
    function Ek(e, t, a) {
      var i = t.pendingProps.children;
      return Ma(e, t, i, a), t.child;
    }
    function Ck(e, t, a) {
      {
        t.flags |= wt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return Ma(e, t, d, a), t.child;
    }
    function JT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ua, t.flags |= rp);
    }
    function IE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && co(
          d,
          i,
          // Resolved props
          "prop",
          Bt(a)
        );
      }
      var y;
      {
        var E = Jf(t, a, !0);
        y = Zf(t, E);
      }
      var C, _;
      id(t, u), wu(t);
      {
        if (vv.current = t, oa(!0), C = fd(e, t, a, i, y, u), _ = dd(), t.mode & At) {
          Jn(!0);
          try {
            C = fd(e, t, a, i, y, u), _ = dd();
          } finally {
            Jn(!1);
          }
        }
        oa(!1);
      }
      return pa(), e !== null && !yo ? (cT(e, t, u), Wl(e, t, u)) : (Gr() && _ && xS(t), t.flags |= Bo, Ma(e, t, C, u), t.child);
    }
    function ZT(e, t, a, i, u) {
      {
        switch (FL(t)) {
          case !1: {
            var d = t.stateNode, y = t.type, E = new y(t.memoizedProps, d.context), C = E.state;
            d.updater.enqueueSetState(d, C, null);
            break;
          }
          case !0: {
            t.flags |= ht, t.flags |= vr;
            var _ = new Error("Simulated error coming from DevTools"), D = ju(u);
            t.lanes = bt(t.lanes, D);
            var H = FE(t, Sc(_, t), D);
            YS(t, H);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var F = a.propTypes;
          F && co(
            F,
            i,
            // Resolved props
            "prop",
            Bt(a)
          );
        }
      }
      var Z;
      el(a) ? (Z = !0, zm(t)) : Z = !1, id(t, u);
      var ne = t.stateNode, oe;
      ne === null ? (_y(e, t), VT(t, a, i), UE(t, a, i, u), oe = !0) : e === null ? oe = ck(t, a, i, u) : oe = fk(e, t, a, i, u);
      var ze = YE(e, t, a, oe, Z, u);
      {
        var ot = t.stateNode;
        oe && ot.props !== i && (Ec || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", St(t) || "a component"), Ec = !0);
      }
      return ze;
    }
    function YE(e, t, a, i, u, d) {
      JT(e, t);
      var y = (t.flags & ht) !== it;
      if (!i && !y)
        return u && AR(t, a, !1), Wl(e, t, d);
      var E = t.stateNode;
      vv.current = t;
      var C;
      if (y && typeof a.getDerivedStateFromError != "function")
        C = null, zT();
      else {
        wu(t);
        {
          if (oa(!0), C = E.render(), t.mode & At) {
            Jn(!0);
            try {
              E.render();
            } finally {
              Jn(!1);
            }
          }
          oa(!1);
        }
        pa();
      }
      return t.flags |= Bo, e !== null && y ? gk(e, t, C, d) : Ma(e, t, C, d), t.memoizedState = E.state, u && AR(t, a, !0), t.child;
    }
    function ex(e) {
      var t = e.stateNode;
      t.pendingContext ? LR(e, t.pendingContext, t.pendingContext !== t.context) : t.context && LR(e, t.context, !1), WS(e, t.containerInfo);
    }
    function Rk(e, t, a) {
      if (ex(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, d = u.element;
      rT(e, t), ey(t, i, null, a);
      var y = t.memoizedState;
      t.stateNode;
      var E = y.element;
      if (u.isDehydrated) {
        var C = {
          element: E,
          isDehydrated: !1,
          cache: y.cache,
          pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
          transitions: y.transitions
        }, _ = t.updateQueue;
        if (_.baseState = C, t.memoizedState = C, t.flags & Hn) {
          var D = Sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return tx(e, t, E, a, D);
        } else if (E !== d) {
          var H = Sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return tx(e, t, E, a, H);
        } else {
          bD(t);
          var F = GR(t, null, E, a);
          t.child = F;
          for (var Z = F; Z; )
            Z.flags = Z.flags & ~_n | Ya, Z = Z.sibling;
        }
      } else {
        if (nd(), E === d)
          return Wl(e, t, a);
        Ma(e, t, E, a);
      }
      return t.child;
    }
    function tx(e, t, a, i, u) {
      return nd(), kS(u), t.flags |= Hn, Ma(e, t, a, i), t.child;
    }
    function Tk(e, t, a) {
      lT(t), e === null && DS(t);
      var i = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, y = u.children, E = cS(i, u);
      return E ? y = null : d !== null && cS(i, d) && (t.flags |= cn), JT(e, t), Ma(e, t, y, a), t.child;
    }
    function xk(e, t) {
      return e === null && DS(t), null;
    }
    function bk(e, t, a, i) {
      _y(e, t);
      var u = t.pendingProps, d = a, y = d._payload, E = d._init, C = E(y);
      t.type = C;
      var _ = t.tag = xL(C), D = mo(C, u), H;
      switch (_) {
        case b:
          return WE(t, C), t.type = C = Ed(C), H = IE(null, t, C, D, i), H;
        case w:
          return t.type = C = R0(C), H = ZT(null, t, C, D, i), H;
        case ae:
          return t.type = C = T0(C), H = KT(null, t, C, D, i), H;
        case _e: {
          if (t.type !== t.elementType) {
            var F = C.propTypes;
            F && co(
              F,
              D,
              // Resolved for outer only
              "prop",
              Bt(C)
            );
          }
          return H = QT(
            null,
            t,
            C,
            mo(C.type, D),
            // The inner type can have defaults too
            i
          ), H;
        }
      }
      var Z = "";
      throw C !== null && typeof C == "object" && C.$$typeof === ut && (Z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + Z));
    }
    function wk(e, t, a, i, u) {
      _y(e, t), t.tag = w;
      var d;
      return el(a) ? (d = !0, zm(t)) : d = !1, id(t, u), VT(t, a, i), UE(t, a, i, u), YE(null, t, a, !0, d, u);
    }
    function _k(e, t, a, i) {
      _y(e, t);
      var u = t.pendingProps, d;
      {
        var y = Jf(t, a, !1);
        d = Zf(t, y);
      }
      id(t, i);
      var E, C;
      wu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var _ = Bt(a) || "Unknown";
          PE[_] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", _, _), PE[_] = !0);
        }
        t.mode & At && po.recordLegacyContextWarning(t, null), oa(!0), vv.current = t, E = fd(null, t, a, u, d, i), C = dd(), oa(!1);
      }
      if (pa(), t.flags |= Bo, typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) {
        var D = Bt(a) || "Unknown";
        hv[D] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), hv[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0
      ) {
        {
          var H = Bt(a) || "Unknown";
          hv[H] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), hv[H] = !0);
        }
        t.tag = w, t.memoizedState = null, t.updateQueue = null;
        var F = !1;
        return el(a) ? (F = !0, zm(t)) : F = !1, t.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null, IS(t), BT(t, E), UE(t, a, u, i), YE(null, t, a, !0, F, i);
      } else {
        if (t.tag = b, t.mode & At) {
          Jn(!0);
          try {
            E = fd(null, t, a, u, d, i), C = dd();
          } finally {
            Jn(!1);
          }
        }
        return Gr() && C && xS(t), Ma(null, t, E, i), WE(t, a), t.child;
      }
    }
    function WE(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = qr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), VE[u] || (VE[u] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var y = Bt(t) || "Unknown";
          mv[y] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", y), mv[y] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var E = Bt(t) || "Unknown";
          BE[E] || (v("%s: Function components do not support getDerivedStateFromProps.", E), BE[E] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = Bt(t) || "Unknown";
          HE[C] || (v("%s: Function components do not support contextType.", C), HE[C] = !0);
        }
      }
    }
    var qE = {
      dehydrated: null,
      treeContext: null,
      retryLane: Zn
    };
    function KE(e) {
      return {
        baseLanes: e,
        cachePool: yk(),
        transitions: null
      };
    }
    function Ok(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Dk(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return QS(e, iv);
    }
    function kk(e, t) {
      return Qs(e.childLanes, t);
    }
    function nx(e, t, a) {
      var i = t.pendingProps;
      PL(t) && (t.flags |= ht);
      var u = vo.current, d = !1, y = (t.flags & ht) !== it;
      if (y || Dk(u, e) ? (d = !0, t.flags &= ~ht) : (e === null || e.memoizedState !== null) && (u = KD(u, sT)), u = ld(u), ls(t, u), e === null) {
        DS(t);
        var E = t.memoizedState;
        if (E !== null) {
          var C = E.dehydrated;
          if (C !== null)
            return Uk(t, C);
        }
        var _ = i.children, D = i.fallback;
        if (d) {
          var H = Nk(t, _, D, a), F = t.child;
          return F.memoizedState = KE(a), t.memoizedState = qE, H;
        } else
          return QE(t, _);
      } else {
        var Z = e.memoizedState;
        if (Z !== null) {
          var ne = Z.dehydrated;
          if (ne !== null)
            return jk(e, t, y, i, ne, Z, a);
        }
        if (d) {
          var oe = i.fallback, ze = i.children, ot = Mk(e, t, ze, oe, a), et = t.child, Yt = e.child.memoizedState;
          return et.memoizedState = Yt === null ? KE(a) : Ok(Yt, a), et.childLanes = kk(e, a), t.memoizedState = qE, ot;
        } else {
          var Ft = i.children, q = Lk(e, t, Ft, a);
          return t.memoizedState = null, q;
        }
      }
    }
    function QE(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, d = GE(u, i);
      return d.return = e, e.child = d, d;
    }
    function Nk(e, t, a, i) {
      var u = e.mode, d = e.child, y = {
        mode: "hidden",
        children: t
      }, E, C;
      return (u & Ze) === Ge && d !== null ? (E = d, E.childLanes = de, E.pendingProps = y, e.mode & mt && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = 0, E.treeBaseDuration = 0), C = hs(a, u, i, null)) : (E = GE(y, u), C = hs(a, u, i, null)), E.return = e, C.return = e, E.sibling = C, e.child = E, C;
    }
    function GE(e, t, a) {
      return rb(e, t, de, null);
    }
    function rx(e, t) {
      return bc(e, t);
    }
    function Lk(e, t, a, i) {
      var u = e.child, d = u.sibling, y = rx(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ze) === Ge && (y.lanes = i), y.return = t, y.sibling = null, d !== null) {
        var E = t.deletions;
        E === null ? (t.deletions = [d], t.flags |= nn) : E.push(d);
      }
      return t.child = y, y;
    }
    function Mk(e, t, a, i, u) {
      var d = t.mode, y = e.child, E = y.sibling, C = {
        mode: "hidden",
        children: a
      }, _;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Ze) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var D = t.child;
        _ = D, _.childLanes = de, _.pendingProps = C, t.mode & mt && (_.actualDuration = 0, _.actualStartTime = -1, _.selfBaseDuration = y.selfBaseDuration, _.treeBaseDuration = y.treeBaseDuration), t.deletions = null;
      } else
        _ = rx(y, C), _.subtreeFlags = y.subtreeFlags & Er;
      var H;
      return E !== null ? H = bc(E, i) : (H = hs(i, d, u, null), H.flags |= _n), H.return = t, _.return = t, _.sibling = H, t.child = _, H;
    }
    function wy(e, t, a, i) {
      i !== null && kS(i), rd(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, y = QE(t, d);
      return y.flags |= _n, t.memoizedState = null, y;
    }
    function Ak(e, t, a, i, u) {
      var d = t.mode, y = {
        mode: "visible",
        children: a
      }, E = GE(y, d), C = hs(i, d, u, null);
      return C.flags |= _n, E.return = t, C.return = t, E.sibling = C, t.child = E, (t.mode & Ze) !== Ge && rd(t, e.child, null, u), C;
    }
    function Uk(e, t, a) {
      return (e.mode & Ze) === Ge ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = rt) : vS(t) ? e.lanes = io : e.lanes = Pr, null;
    }
    function jk(e, t, a, i, u, d, y) {
      if (a)
        if (t.flags & Hn) {
          t.flags &= ~Hn;
          var q = jE(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return wy(e, t, y, q);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ht, null;
          var le = i.children, K = i.fallback, Ee = Ak(e, t, le, K, y), Be = t.child;
          return Be.memoizedState = KE(y), t.memoizedState = qE, Ee;
        }
      else {
        if (TD(), (t.mode & Ze) === Ge)
          return wy(
            e,
            t,
            y,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (vS(u)) {
          var E, C, _;
          {
            var D = HO(u);
            E = D.digest, C = D.message, _ = D.stack;
          }
          var H;
          C ? H = new Error(C) : H = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var F = jE(H, E, _);
          return wy(e, t, y, F);
        }
        var Z = ma(y, e.childLanes);
        if (yo || Z) {
          var ne = zy();
          if (ne !== null) {
            var oe = Jh(ne, y);
            if (oe !== Zn && oe !== d.retryLane) {
              d.retryLane = oe;
              var ze = xn;
              ri(e, oe), kr(ne, e, oe, ze);
            }
          }
          y0();
          var ot = jE(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return wy(e, t, y, ot);
        } else if (wR(u)) {
          t.flags |= ht, t.child = e.child;
          var et = lL.bind(null, e);
          return BO(u, et), null;
        } else {
          wD(t, u, d.treeContext);
          var Yt = i.children, Ft = QE(t, Yt);
          return Ft.flags |= Ya, Ft;
        }
      }
    }
    function ax(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), HS(e.return, t, a);
    }
    function zk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === J) {
          var u = i.memoizedState;
          u !== null && ax(i, a, e);
        } else if (i.tag === gt)
          ax(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Fk(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ay(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Pk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !$E[e])
        if ($E[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Hk(e, t) {
      e !== void 0 && !by[e] && (e !== "collapsed" && e !== "hidden" ? (by[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (by[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function ix(e, t) {
      {
        var a = Vt(e), i = !a && typeof Ir(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Bk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Vt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!ix(e[a], a))
              return;
        } else {
          var i = Ir(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var d = u.next(), y = 0; !d.done; d = u.next()) {
                if (!ix(d.value, y))
                  return;
                y++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function XE(e, t, a, i, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = u);
    }
    function ox(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, d = i.tail, y = i.children;
      Pk(u), Hk(d, u), Bk(y, u), Ma(e, t, y, a);
      var E = vo.current, C = QS(E, iv);
      if (C)
        E = GS(E, iv), t.flags |= ht;
      else {
        var _ = e !== null && (e.flags & ht) !== it;
        _ && zk(t, t.child, a), E = ld(E);
      }
      if (ls(t, E), (t.mode & Ze) === Ge)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var D = Fk(t.child), H;
            D === null ? (H = t.child, t.child = null) : (H = D.sibling, D.sibling = null), XE(
              t,
              !1,
              // isBackwards
              H,
              D,
              d
            );
            break;
          }
          case "backwards": {
            var F = null, Z = t.child;
            for (t.child = null; Z !== null; ) {
              var ne = Z.alternate;
              if (ne !== null && ay(ne) === null) {
                t.child = Z;
                break;
              }
              var oe = Z.sibling;
              Z.sibling = F, F = Z, Z = oe;
            }
            XE(
              t,
              !0,
              // isBackwards
              F,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            XE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Vk(e, t, a) {
      WS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = rd(t, null, i, a) : Ma(e, t, i, a), t.child;
    }
    var lx = !1;
    function $k(e, t, a) {
      var i = t.type, u = i._context, d = t.pendingProps, y = t.memoizedProps, E = d.value;
      {
        "value" in d || lx || (lx = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && co(C, d, "prop", "Context.Provider");
      }
      if (ZR(t, u, E), y !== null) {
        var _ = y.value;
        if (qe(_, E)) {
          if (y.children === d.children && !Um())
            return Wl(e, t, a);
        } else
          PD(t, u, a);
      }
      var D = d.children;
      return Ma(e, t, D, a), t.child;
    }
    var ux = !1;
    function Ik(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (ux || (ux = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), id(t, a);
      var y = gr(i);
      wu(t);
      var E;
      return vv.current = t, oa(!0), E = d(y), oa(!1), pa(), t.flags |= Bo, Ma(e, t, E, a), t.child;
    }
    function yv() {
      yo = !0;
    }
    function _y(e, t) {
      (t.mode & Ze) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= _n);
    }
    function Wl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), zT(), Dv(t.lanes), ma(a, t.childLanes) ? (zD(e, t), t.child) : null;
    }
    function Yk(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var d = i.deletions;
        return d === null ? (i.deletions = [e], i.flags |= nn) : d.push(e), a.flags |= _n, a;
      }
    }
    function JE(e, t) {
      var a = e.lanes;
      return !!ma(a, t);
    }
    function Wk(e, t, a) {
      switch (t.tag) {
        case O:
          ex(t), t.stateNode, nd();
          break;
        case V:
          lT(t);
          break;
        case w: {
          var i = t.type;
          el(i) && zm(t);
          break;
        }
        case U:
          WS(t, t.stateNode.containerInfo);
          break;
        case ie: {
          var u = t.memoizedProps.value, d = t.type._context;
          ZR(t, d, u);
          break;
        }
        case ce:
          {
            var y = ma(a, t.childLanes);
            y && (t.flags |= wt);
            {
              var E = t.stateNode;
              E.effectDuration = 0, E.passiveEffectDuration = 0;
            }
          }
          break;
        case J: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return ls(t, ld(vo.current)), t.flags |= ht, null;
            var _ = t.child, D = _.childLanes;
            if (ma(a, D))
              return nx(e, t, a);
            ls(t, ld(vo.current));
            var H = Wl(e, t, a);
            return H !== null ? H.sibling : null;
          } else
            ls(t, ld(vo.current));
          break;
        }
        case gt: {
          var F = (e.flags & ht) !== it, Z = ma(a, t.childLanes);
          if (F) {
            if (Z)
              return ox(e, t, a);
            t.flags |= ht;
          }
          var ne = t.memoizedState;
          if (ne !== null && (ne.rendering = null, ne.tail = null, ne.lastEffect = null), ls(t, vo.current), Z)
            break;
          return null;
        }
        case Ye:
        case tt:
          return t.lanes = de, XT(e, t, a);
      }
      return Wl(e, t, a);
    }
    function sx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Yk(e, t, O0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Um() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          yo = !0;
        else {
          var d = JE(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ht) === it)
            return yo = !1, Wk(e, t, a);
          (e.flags & Ps) !== it ? yo = !0 : yo = !1;
        }
      } else if (yo = !1, Gr() && yD(t)) {
        var y = t.index, E = gD();
        zR(t, E, y);
      }
      switch (t.lanes = de, t.tag) {
        case k:
          return _k(e, t, t.type, a);
        case vt: {
          var C = t.elementType;
          return bk(e, t, C, a);
        }
        case b: {
          var _ = t.type, D = t.pendingProps, H = t.elementType === _ ? D : mo(_, D);
          return IE(e, t, _, H, a);
        }
        case w: {
          var F = t.type, Z = t.pendingProps, ne = t.elementType === F ? Z : mo(F, Z);
          return ZT(e, t, F, ne, a);
        }
        case O:
          return Rk(e, t, a);
        case V:
          return Tk(e, t, a);
        case B:
          return xk(e, t);
        case J:
          return nx(e, t, a);
        case U:
          return Vk(e, t, a);
        case ae: {
          var oe = t.type, ze = t.pendingProps, ot = t.elementType === oe ? ze : mo(oe, ze);
          return KT(e, t, oe, ot, a);
        }
        case $:
          return Sk(e, t, a);
        case Q:
          return Ek(e, t, a);
        case ce:
          return Ck(e, t, a);
        case ie:
          return $k(e, t, a);
        case pe:
          return Ik(e, t, a);
        case _e: {
          var et = t.type, Yt = t.pendingProps, Ft = mo(et, Yt);
          if (t.type !== t.elementType) {
            var q = et.propTypes;
            q && co(
              q,
              Ft,
              // Resolved for outer only
              "prop",
              Bt(et)
            );
          }
          return Ft = mo(et.type, Ft), QT(e, t, et, Ft, a);
        }
        case Me:
          return GT(e, t, t.type, t.pendingProps, a);
        case Wt: {
          var le = t.type, K = t.pendingProps, Ee = t.elementType === le ? K : mo(le, K);
          return wk(e, t, le, Ee, a);
        }
        case gt:
          return ox(e, t, a);
        case Kt:
          break;
        case Ye:
          return XT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function pd(e) {
      e.flags |= wt;
    }
    function cx(e) {
      e.flags |= ua, e.flags |= rp;
    }
    var fx, ZE, dx, px;
    fx = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === V || u.tag === B)
          vO(e, u.stateNode);
        else if (u.tag !== U) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, ZE = function(e, t) {
    }, dx = function(e, t, a, i, u) {
      var d = e.memoizedProps;
      if (d !== i) {
        var y = t.stateNode, E = qS(), C = mO(y, a, d, i, u, E);
        t.updateQueue = C, C && pd(t);
      }
    }, px = function(e, t, a, i) {
      a !== i && pd(t);
    };
    function gv(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = de, i = it;
      if (t) {
        if ((e.mode & mt) !== Ge) {
          for (var C = e.selfBaseDuration, _ = e.child; _ !== null; )
            a = bt(a, bt(_.lanes, _.childLanes)), i |= _.subtreeFlags & Er, i |= _.flags & Er, C += _.treeBaseDuration, _ = _.sibling;
          e.treeBaseDuration = C;
        } else
          for (var D = e.child; D !== null; )
            a = bt(a, bt(D.lanes, D.childLanes)), i |= D.subtreeFlags & Er, i |= D.flags & Er, D.return = e, D = D.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & mt) !== Ge) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, y = e.child; y !== null; )
            a = bt(a, bt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, u += y.actualDuration, d += y.treeBaseDuration, y = y.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var E = e.child; E !== null; )
            a = bt(a, bt(E.lanes, E.childLanes)), i |= E.subtreeFlags, i |= E.flags, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function qk(e, t, a) {
      if (ND() && (t.mode & Ze) !== Ge && (t.flags & ht) === it)
        return IR(t), nd(), t.flags |= Hn | _a | vr, !1;
      var i = Vm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (DD(t), Jr(t), (t.mode & mt) !== Ge) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (nd(), (t.flags & ht) === it && (t.memoizedState = null), t.flags |= wt, Jr(t), (t.mode & mt) !== Ge) {
            var y = a !== null;
            if (y) {
              var E = t.child;
              E !== null && (t.treeBaseDuration -= E.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return YR(), !0;
    }
    function vx(e, t, a) {
      var i = t.pendingProps;
      switch (bS(t), t.tag) {
        case k:
        case vt:
        case Me:
        case b:
        case ae:
        case $:
        case Q:
        case ce:
        case pe:
        case _e:
          return Jr(t), null;
        case w: {
          var u = t.type;
          return el(u) && jm(t), Jr(t), null;
        }
        case O: {
          var d = t.stateNode;
          if (od(t), CS(t), JS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var y = Vm(t);
            if (y)
              pd(t);
            else if (e !== null) {
              var E = e.memoizedState;
              // Check if this is a client root
              (!E.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Hn) !== it) && (t.flags |= Ia, YR());
            }
          }
          return ZE(e, t), Jr(t), null;
        }
        case V: {
          KS(t);
          var C = oT(), _ = t.type;
          if (e !== null && t.stateNode != null)
            dx(e, t, _, i, C), e.ref !== t.ref && cx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Jr(t), null;
            }
            var D = qS(), H = Vm(t);
            if (H)
              _D(t, C, D) && pd(t);
            else {
              var F = pO(_, i, C, D, t);
              fx(F, t, !1, !1), t.stateNode = F, hO(F, _, i, C) && pd(t);
            }
            t.ref !== null && cx(t);
          }
          return Jr(t), null;
        }
        case B: {
          var Z = i;
          if (e && t.stateNode != null) {
            var ne = e.memoizedProps;
            px(e, t, ne, Z);
          } else {
            if (typeof Z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var oe = oT(), ze = qS(), ot = Vm(t);
            ot ? OD(t) && pd(t) : t.stateNode = yO(Z, oe, ze, t);
          }
          return Jr(t), null;
        }
        case J: {
          ud(t);
          var et = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Yt = qk(e, t, et);
            if (!Yt)
              return t.flags & vr ? t : null;
          }
          if ((t.flags & ht) !== it)
            return t.lanes = a, (t.mode & mt) !== Ge && TE(t), t;
          var Ft = et !== null, q = e !== null && e.memoizedState !== null;
          if (Ft !== q && Ft) {
            var le = t.child;
            if (le.flags |= Vo, (t.mode & Ze) !== Ge) {
              var K = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !L);
              K || QS(vo.current, sT) ? KN() : y0();
            }
          }
          var Ee = t.updateQueue;
          if (Ee !== null && (t.flags |= wt), Jr(t), (t.mode & mt) !== Ge && Ft) {
            var Be = t.child;
            Be !== null && (t.treeBaseDuration -= Be.treeBaseDuration);
          }
          return null;
        }
        case U:
          return od(t), ZE(e, t), e === null && cD(t.stateNode.containerInfo), Jr(t), null;
        case ie:
          var Fe = t.type._context;
          return PS(Fe, t), Jr(t), null;
        case Wt: {
          var pt = t.type;
          return el(pt) && jm(t), Jr(t), null;
        }
        case gt: {
          ud(t);
          var Rt = t.memoizedState;
          if (Rt === null)
            return Jr(t), null;
          var hn = (t.flags & ht) !== it, Jt = Rt.rendering;
          if (Jt === null)
            if (hn)
              gv(Rt, !1);
            else {
              var lr = GN() && (e === null || (e.flags & ht) === it);
              if (!lr)
                for (var Zt = t.child; Zt !== null; ) {
                  var er = ay(Zt);
                  if (er !== null) {
                    hn = !0, t.flags |= ht, gv(Rt, !1);
                    var Ca = er.updateQueue;
                    return Ca !== null && (t.updateQueue = Ca, t.flags |= wt), t.subtreeFlags = it, FD(t, a), ls(t, GS(vo.current, iv)), t.child;
                  }
                  Zt = Zt.sibling;
                }
              Rt.tail !== null && jn() > Ux() && (t.flags |= ht, hn = !0, gv(Rt, !1), t.lanes = Bh);
            }
          else {
            if (!hn) {
              var ra = ay(Jt);
              if (ra !== null) {
                t.flags |= ht, hn = !0;
                var Ci = ra.updateQueue;
                if (Ci !== null && (t.updateQueue = Ci, t.flags |= wt), gv(Rt, !0), Rt.tail === null && Rt.tailMode === "hidden" && !Jt.alternate && !Gr())
                  return Jr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                jn() * 2 - Rt.renderingStartTime > Ux() && a !== Pr && (t.flags |= ht, hn = !0, gv(Rt, !1), t.lanes = Bh);
            }
            if (Rt.isBackwards)
              Jt.sibling = t.child, t.child = Jt;
            else {
              var ja = Rt.last;
              ja !== null ? ja.sibling = Jt : t.child = Jt, Rt.last = Jt;
            }
          }
          if (Rt.tail !== null) {
            var za = Rt.tail;
            Rt.rendering = za, Rt.tail = za.sibling, Rt.renderingStartTime = jn(), za.sibling = null;
            var Ra = vo.current;
            return hn ? Ra = GS(Ra, iv) : Ra = ld(Ra), ls(t, Ra), za;
          }
          return Jr(t), null;
        }
        case Kt:
          break;
        case Ye:
        case tt: {
          m0(t);
          var Xl = t.memoizedState, Cd = Xl !== null;
          if (e !== null) {
            var Av = e.memoizedState, ul = Av !== null;
            ul !== Cd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !I && (t.flags |= Vo);
          }
          return !Cd || (t.mode & Ze) === Ge ? Jr(t) : ma(ll, Pr) && (Jr(t), t.subtreeFlags & (_n | wt) && (t.flags |= Vo)), null;
        }
        case Ot:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kk(e, t, a) {
      switch (bS(t), t.tag) {
        case w: {
          var i = t.type;
          el(i) && jm(t);
          var u = t.flags;
          return u & vr ? (t.flags = u & ~vr | ht, (t.mode & mt) !== Ge && TE(t), t) : null;
        }
        case O: {
          t.stateNode, od(t), CS(t), JS();
          var d = t.flags;
          return (d & vr) !== it && (d & ht) === it ? (t.flags = d & ~vr | ht, t) : null;
        }
        case V:
          return KS(t), null;
        case J: {
          ud(t);
          var y = t.memoizedState;
          if (y !== null && y.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            nd();
          }
          var E = t.flags;
          return E & vr ? (t.flags = E & ~vr | ht, (t.mode & mt) !== Ge && TE(t), t) : null;
        }
        case gt:
          return ud(t), null;
        case U:
          return od(t), null;
        case ie:
          var C = t.type._context;
          return PS(C, t), null;
        case Ye:
        case tt:
          return m0(t), null;
        case Ot:
          return null;
        default:
          return null;
      }
    }
    function hx(e, t, a) {
      switch (bS(t), t.tag) {
        case w: {
          var i = t.type.childContextTypes;
          i != null && jm(t);
          break;
        }
        case O: {
          t.stateNode, od(t), CS(t), JS();
          break;
        }
        case V: {
          KS(t);
          break;
        }
        case U:
          od(t);
          break;
        case J:
          ud(t);
          break;
        case gt:
          ud(t);
          break;
        case ie:
          var u = t.type._context;
          PS(u, t);
          break;
        case Ye:
        case tt:
          m0(t);
          break;
      }
    }
    var mx = null;
    mx = /* @__PURE__ */ new Set();
    var Oy = !1, Zr = !1, Qk = typeof WeakSet == "function" ? WeakSet : Set, Ke = null, vd = null, hd = null;
    function Gk(e) {
      Rl(null, function() {
        throw e;
      }), tp();
    }
    var Xk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & mt)
        try {
          il(), t.componentWillUnmount();
        } finally {
          al(e);
        }
      else
        t.componentWillUnmount();
    };
    function yx(e, t) {
      try {
        cs(xr, e);
      } catch (a) {
        kn(e, t, a);
      }
    }
    function e0(e, t, a) {
      try {
        Xk(e, a);
      } catch (i) {
        kn(e, t, i);
      }
    }
    function Jk(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        kn(e, t, i);
      }
    }
    function gx(e, t) {
      try {
        Ex(e);
      } catch (a) {
        kn(e, t, a);
      }
    }
    function md(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (we && ke && e.mode & mt)
              try {
                il(), i = a(null);
              } finally {
                al(e);
              }
            else
              i = a(null);
          } catch (u) {
            kn(e, t, u);
          }
          typeof i == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", St(e));
        } else
          a.current = null;
    }
    function Dy(e, t, a) {
      try {
        a();
      } catch (i) {
        kn(e, t, i);
      }
    }
    var Sx = !1;
    function Zk(e, t) {
      fO(e.containerInfo), Ke = t, eN();
      var a = Sx;
      return Sx = !1, a;
    }
    function eN() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        (e.subtreeFlags & Tu) !== it && t !== null ? (t.return = e, Ke = t) : tN();
      }
    }
    function tN() {
      for (; Ke !== null; ) {
        var e = Ke;
        sn(e);
        try {
          nN(e);
        } catch (a) {
          kn(e, e.return, a);
        }
        Pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function nN(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ia) !== it) {
        switch (sn(e), e.tag) {
          case b:
          case ae:
          case Me:
            break;
          case w: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Ec && (d.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(e) || "instance"), d.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(e) || "instance"));
              var y = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : mo(e.type, i), u);
              {
                var E = mx;
                y === void 0 && !E.has(e.type) && (E.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", St(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          }
          case O: {
            {
              var C = e.stateNode;
              jO(C.containerInfo);
            }
            break;
          }
          case V:
          case B:
          case U:
          case Wt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Pn();
      }
    }
    function go(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var d = u.next, y = d;
        do {
          if ((y.tag & e) === e) {
            var E = y.destroy;
            y.destroy = void 0, E !== void 0 && ((e & Xr) !== ai ? Fh(t) : (e & xr) !== ai && gi(t), (e & tl) !== ai && Nv(!0), Dy(t, a, E), (e & tl) !== ai && Nv(!1), (e & Xr) !== ai ? tf() : (e & xr) !== ai && _u());
          }
          y = y.next;
        } while (y !== d);
      }
    }
    function cs(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Xr) !== ai ? Yo(t) : (e & xr) !== ai && Ph(t);
            var y = d.create;
            (e & tl) !== ai && Nv(!0), d.destroy = y(), (e & tl) !== ai && Nv(!1), (e & Xr) !== ai ? ef() : (e & xr) !== ai && Hs();
            {
              var E = d.destroy;
              if (E !== void 0 && typeof E != "function") {
                var C = void 0;
                (d.tag & xr) !== it ? C = "useLayoutEffect" : (d.tag & tl) !== it ? C = "useInsertionEffect" : C = "useEffect";
                var _ = void 0;
                E === null ? _ = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof E.then == "function" ? _ = `

It looks like you wrote ` + C + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + C + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : _ = " You returned: " + E, v("%s must not return anything besides a function, which is used for clean-up.%s", C, _);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function rN(e, t) {
      if ((t.flags & wt) !== it)
        switch (t.tag) {
          case ce: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, d = i.onPostCommit, y = UT(), E = t.alternate === null ? "mount" : "update";
            AT() && (E = "nested-update"), typeof d == "function" && d(u, E, a, y);
            var C = t.return;
            e:
              for (; C !== null; ) {
                switch (C.tag) {
                  case O:
                    var _ = C.stateNode;
                    _.passiveEffectDuration += a;
                    break e;
                  case ce:
                    var D = C.stateNode;
                    D.passiveEffectDuration += a;
                    break e;
                }
                C = C.return;
              }
            break;
          }
        }
    }
    function aN(e, t, a, i) {
      if ((a.flags & zr) !== it)
        switch (a.tag) {
          case b:
          case ae:
          case Me: {
            if (!Zr)
              if (a.mode & mt)
                try {
                  il(), cs(xr | Tr, a);
                } finally {
                  al(a);
                }
              else
                cs(xr | Tr, a);
            break;
          }
          case w: {
            var u = a.stateNode;
            if (a.flags & wt && !Zr)
              if (t === null)
                if (a.type === a.elementType && !Ec && (u.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(a) || "instance"), u.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(a) || "instance")), a.mode & mt)
                  try {
                    il(), u.componentDidMount();
                  } finally {
                    al(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : mo(a.type, t.memoizedProps), y = t.memoizedState;
                if (a.type === a.elementType && !Ec && (u.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(a) || "instance"), u.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(a) || "instance")), a.mode & mt)
                  try {
                    il(), u.componentDidUpdate(d, y, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    al(a);
                  }
                else
                  u.componentDidUpdate(d, y, u.__reactInternalSnapshotBeforeUpdate);
              }
            var E = a.updateQueue;
            E !== null && (a.type === a.elementType && !Ec && (u.props !== a.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(a) || "instance"), u.state !== a.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(a) || "instance")), iT(a, E, u));
            break;
          }
          case O: {
            var C = a.updateQueue;
            if (C !== null) {
              var _ = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case V:
                    _ = a.child.stateNode;
                    break;
                  case w:
                    _ = a.child.stateNode;
                    break;
                }
              iT(a, C, _);
            }
            break;
          }
          case V: {
            var D = a.stateNode;
            if (t === null && a.flags & wt) {
              var H = a.type, F = a.memoizedProps;
              RO(D, H, F);
            }
            break;
          }
          case B:
            break;
          case U:
            break;
          case ce: {
            {
              var Z = a.memoizedProps, ne = Z.onCommit, oe = Z.onRender, ze = a.stateNode.effectDuration, ot = UT(), et = t === null ? "mount" : "update";
              AT() && (et = "nested-update"), typeof oe == "function" && oe(a.memoizedProps.id, et, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ot);
              {
                typeof ne == "function" && ne(a.memoizedProps.id, et, ze, ot), tL(a);
                var Yt = a.return;
                e:
                  for (; Yt !== null; ) {
                    switch (Yt.tag) {
                      case O:
                        var Ft = Yt.stateNode;
                        Ft.effectDuration += ze;
                        break e;
                      case ce:
                        var q = Yt.stateNode;
                        q.effectDuration += ze;
                        break e;
                    }
                    Yt = Yt.return;
                  }
              }
            }
            break;
          }
          case J: {
            dN(e, a);
            break;
          }
          case gt:
          case Wt:
          case Kt:
          case Ye:
          case tt:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Zr || a.flags & ua && Ex(a);
    }
    function iN(e) {
      switch (e.tag) {
        case b:
        case ae:
        case Me: {
          if (e.mode & mt)
            try {
              il(), yx(e, e.return);
            } finally {
              al(e);
            }
          else
            yx(e, e.return);
          break;
        }
        case w: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Jk(e, e.return, t), gx(e, e.return);
          break;
        }
        case V: {
          gx(e, e.return);
          break;
        }
      }
    }
    function oN(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === V) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? LO(u) : AO(i.stateNode, i.memoizedProps);
            } catch (y) {
              kn(e, e.return, y);
            }
          }
        } else if (i.tag === B) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? MO(d) : UO(d, i.memoizedProps);
            } catch (y) {
              kn(e, e.return, y);
            }
        } else if (!((i.tag === Ye || i.tag === tt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Ex(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case V:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & mt)
            try {
              il(), u = t(i);
            } finally {
              al(e);
            }
          else
            u = t(i);
          typeof u == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", St(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", St(e)), t.current = i;
      }
    }
    function lN(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Cx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Cx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === V) {
          var a = e.stateNode;
          a !== null && pD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function uN(e) {
      for (var t = e.return; t !== null; ) {
        if (Rx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Rx(e) {
      return e.tag === V || e.tag === O || e.tag === U;
    }
    function Tx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Rx(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== V && t.tag !== B && t.tag !== xt; ) {
            if (t.flags & _n || t.child === null || t.tag === U)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & _n))
            return t.stateNode;
        }
    }
    function sN(e) {
      var t = uN(e);
      switch (t.tag) {
        case V: {
          var a = t.stateNode;
          t.flags & cn && (bR(a), t.flags &= ~cn);
          var i = Tx(e);
          n0(e, i, a);
          break;
        }
        case O:
        case U: {
          var u = t.stateNode.containerInfo, d = Tx(e);
          t0(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function t0(e, t, a) {
      var i = e.tag, u = i === V || i === B;
      if (u) {
        var d = e.stateNode;
        t ? OO(a, d, t) : wO(a, d);
      } else if (i !== U) {
        var y = e.child;
        if (y !== null) {
          t0(y, t, a);
          for (var E = y.sibling; E !== null; )
            t0(E, t, a), E = E.sibling;
        }
      }
    }
    function n0(e, t, a) {
      var i = e.tag, u = i === V || i === B;
      if (u) {
        var d = e.stateNode;
        t ? _O(a, d, t) : bO(a, d);
      } else if (i !== U) {
        var y = e.child;
        if (y !== null) {
          n0(y, t, a);
          for (var E = y.sibling; E !== null; )
            n0(E, t, a), E = E.sibling;
        }
      }
    }
    var ea = null, So = !1;
    function cN(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case V: {
                ea = i.stateNode, So = !1;
                break e;
              }
              case O: {
                ea = i.stateNode.containerInfo, So = !0;
                break e;
              }
              case U: {
                ea = i.stateNode.containerInfo, So = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (ea === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        xx(e, t, a), ea = null, So = !1;
      }
      lN(a);
    }
    function fs(e, t, a) {
      for (var i = a.child; i !== null; )
        xx(e, t, i), i = i.sibling;
    }
    function xx(e, t, a) {
      switch (bl(a), a.tag) {
        case V:
          Zr || md(a, t);
        case B: {
          {
            var i = ea, u = So;
            ea = null, fs(e, t, a), ea = i, So = u, ea !== null && (So ? kO(ea, a.stateNode) : DO(ea, a.stateNode));
          }
          return;
        }
        case xt: {
          ea !== null && (So ? NO(ea, a.stateNode) : pS(ea, a.stateNode));
          return;
        }
        case U: {
          {
            var d = ea, y = So;
            ea = a.stateNode.containerInfo, So = !0, fs(e, t, a), ea = d, So = y;
          }
          return;
        }
        case b:
        case ae:
        case _e:
        case Me: {
          if (!Zr) {
            var E = a.updateQueue;
            if (E !== null) {
              var C = E.lastEffect;
              if (C !== null) {
                var _ = C.next, D = _;
                do {
                  var H = D, F = H.destroy, Z = H.tag;
                  F !== void 0 && ((Z & tl) !== ai ? Dy(a, t, F) : (Z & xr) !== ai && (gi(a), a.mode & mt ? (il(), Dy(a, t, F), al(a)) : Dy(a, t, F), _u())), D = D.next;
                } while (D !== _);
              }
            }
          }
          fs(e, t, a);
          return;
        }
        case w: {
          if (!Zr) {
            md(a, t);
            var ne = a.stateNode;
            typeof ne.componentWillUnmount == "function" && e0(a, t, ne);
          }
          fs(e, t, a);
          return;
        }
        case Kt: {
          fs(e, t, a);
          return;
        }
        case Ye: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ze
          ) {
            var oe = Zr;
            Zr = oe || a.memoizedState !== null, fs(e, t, a), Zr = oe;
          } else
            fs(e, t, a);
          break;
        }
        default: {
          fs(e, t, a);
          return;
        }
      }
    }
    function fN(e) {
      e.memoizedState;
    }
    function dN(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && GO(d);
          }
        }
      }
    }
    function bx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Qk()), t.forEach(function(i) {
          var u = uL.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ka)
              if (vd !== null && hd !== null)
                kv(hd, vd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function pN(e, t, a) {
      vd = a, hd = e, sn(t), wx(t, e), sn(t), vd = null, hd = null;
    }
    function Eo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u];
          try {
            cN(e, t, d);
          } catch (C) {
            kn(d, t, C);
          }
        }
      var y = Lc();
      if (t.subtreeFlags & fa)
        for (var E = t.child; E !== null; )
          sn(E), wx(E, e), E = E.sibling;
      sn(y);
    }
    function wx(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case b:
        case ae:
        case _e:
        case Me: {
          if (Eo(t, e), ol(e), u & wt) {
            try {
              go(tl | Tr, e, e.return), cs(tl | Tr, e);
            } catch (pt) {
              kn(e, e.return, pt);
            }
            if (e.mode & mt) {
              try {
                il(), go(xr | Tr, e, e.return);
              } catch (pt) {
                kn(e, e.return, pt);
              }
              al(e);
            } else
              try {
                go(xr | Tr, e, e.return);
              } catch (pt) {
                kn(e, e.return, pt);
              }
          }
          return;
        }
        case w: {
          Eo(t, e), ol(e), u & ua && i !== null && md(i, i.return);
          return;
        }
        case V: {
          Eo(t, e), ol(e), u & ua && i !== null && md(i, i.return);
          {
            if (e.flags & cn) {
              var d = e.stateNode;
              try {
                bR(d);
              } catch (pt) {
                kn(e, e.return, pt);
              }
            }
            if (u & wt) {
              var y = e.stateNode;
              if (y != null) {
                var E = e.memoizedProps, C = i !== null ? i.memoizedProps : E, _ = e.type, D = e.updateQueue;
                if (e.updateQueue = null, D !== null)
                  try {
                    TO(y, D, _, C, E, e);
                  } catch (pt) {
                    kn(e, e.return, pt);
                  }
              }
            }
          }
          return;
        }
        case B: {
          if (Eo(t, e), ol(e), u & wt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var H = e.stateNode, F = e.memoizedProps, Z = i !== null ? i.memoizedProps : F;
            try {
              xO(H, Z, F);
            } catch (pt) {
              kn(e, e.return, pt);
            }
          }
          return;
        }
        case O: {
          if (Eo(t, e), ol(e), u & wt && i !== null) {
            var ne = i.memoizedState;
            if (ne.isDehydrated)
              try {
                QO(t.containerInfo);
              } catch (pt) {
                kn(e, e.return, pt);
              }
          }
          return;
        }
        case U: {
          Eo(t, e), ol(e);
          return;
        }
        case J: {
          Eo(t, e), ol(e);
          var oe = e.child;
          if (oe.flags & Vo) {
            var ze = oe.stateNode, ot = oe.memoizedState, et = ot !== null;
            if (ze.isHidden = et, et) {
              var Yt = oe.alternate !== null && oe.alternate.memoizedState !== null;
              Yt || qN();
            }
          }
          if (u & wt) {
            try {
              fN(e);
            } catch (pt) {
              kn(e, e.return, pt);
            }
            bx(e);
          }
          return;
        }
        case Ye: {
          var Ft = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ze
          ) {
            var q = Zr;
            Zr = q || Ft, Eo(t, e), Zr = q;
          } else
            Eo(t, e);
          if (ol(e), u & Vo) {
            var le = e.stateNode, K = e.memoizedState, Ee = K !== null, Be = e;
            if (le.isHidden = Ee, Ee && !Ft && (Be.mode & Ze) !== Ge) {
              Ke = Be;
              for (var Fe = Be.child; Fe !== null; )
                Ke = Fe, hN(Fe), Fe = Fe.sibling;
            }
            oN(Be, Ee);
          }
          return;
        }
        case gt: {
          Eo(t, e), ol(e), u & wt && bx(e);
          return;
        }
        case Kt:
          return;
        default: {
          Eo(t, e), ol(e);
          return;
        }
      }
    }
    function ol(e) {
      var t = e.flags;
      if (t & _n) {
        try {
          sN(e);
        } catch (a) {
          kn(e, e.return, a);
        }
        e.flags &= ~_n;
      }
      t & Ya && (e.flags &= ~Ya);
    }
    function vN(e, t, a) {
      vd = a, hd = t, Ke = e, _x(e, t, a), vd = null, hd = null;
    }
    function _x(e, t, a) {
      for (var i = (e.mode & Ze) !== Ge; Ke !== null; ) {
        var u = Ke, d = u.child;
        if (u.tag === Ye && i) {
          var y = u.memoizedState !== null, E = y || Oy;
          if (E) {
            r0(e, t, a);
            continue;
          } else {
            var C = u.alternate, _ = C !== null && C.memoizedState !== null, D = _ || Zr, H = Oy, F = Zr;
            Oy = E, Zr = D, Zr && !F && (Ke = u, mN(u));
            for (var Z = d; Z !== null; )
              Ke = Z, _x(
                Z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Z = Z.sibling;
            Ke = u, Oy = H, Zr = F, r0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & zr) !== it && d !== null ? (d.return = u, Ke = d) : r0(e, t, a);
      }
    }
    function r0(e, t, a) {
      for (; Ke !== null; ) {
        var i = Ke;
        if ((i.flags & zr) !== it) {
          var u = i.alternate;
          sn(i);
          try {
            aN(t, u, i, a);
          } catch (y) {
            kn(i, i.return, y);
          }
          Pn();
        }
        if (i === e) {
          Ke = null;
          return;
        }
        var d = i.sibling;
        if (d !== null) {
          d.return = i.return, Ke = d;
          return;
        }
        Ke = i.return;
      }
    }
    function hN(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        switch (t.tag) {
          case b:
          case ae:
          case _e:
          case Me: {
            if (t.mode & mt)
              try {
                il(), go(xr, t, t.return);
              } finally {
                al(t);
              }
            else
              go(xr, t, t.return);
            break;
          }
          case w: {
            md(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && e0(t, t.return, i);
            break;
          }
          case V: {
            md(t, t.return);
            break;
          }
          case Ye: {
            var u = t.memoizedState !== null;
            if (u) {
              Ox(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ke = a) : Ox(e);
      }
    }
    function Ox(e) {
      for (; Ke !== null; ) {
        var t = Ke;
        if (t === e) {
          Ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ke = a;
          return;
        }
        Ke = t.return;
      }
    }
    function mN(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            Dx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ke = a) : Dx(e);
      }
    }
    function Dx(e) {
      for (; Ke !== null; ) {
        var t = Ke;
        sn(t);
        try {
          iN(t);
        } catch (i) {
          kn(t, t.return, i);
        }
        if (Pn(), t === e) {
          Ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ke = a;
          return;
        }
        Ke = t.return;
      }
    }
    function yN(e, t, a, i) {
      Ke = t, gN(t, e, a, i);
    }
    function gN(e, t, a, i) {
      for (; Ke !== null; ) {
        var u = Ke, d = u.child;
        (u.subtreeFlags & Wa) !== it && d !== null ? (d.return = u, Ke = d) : SN(e, t, a, i);
      }
    }
    function SN(e, t, a, i) {
      for (; Ke !== null; ) {
        var u = Ke;
        if ((u.flags & Nn) !== it) {
          sn(u);
          try {
            EN(t, u, a, i);
          } catch (y) {
            kn(u, u.return, y);
          }
          Pn();
        }
        if (u === e) {
          Ke = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Ke = d;
          return;
        }
        Ke = u.return;
      }
    }
    function EN(e, t, a, i) {
      switch (t.tag) {
        case b:
        case ae:
        case Me: {
          if (t.mode & mt) {
            RE();
            try {
              cs(Xr | Tr, t);
            } finally {
              CE(t);
            }
          } else
            cs(Xr | Tr, t);
          break;
        }
      }
    }
    function CN(e) {
      Ke = e, RN();
    }
    function RN() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        if ((Ke.flags & nn) !== it) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ke = u, bN(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var y = d.child;
                if (y !== null) {
                  d.child = null;
                  do {
                    var E = y.sibling;
                    y.sibling = null, y = E;
                  } while (y !== null);
                }
              }
            }
            Ke = e;
          }
        }
        (e.subtreeFlags & Wa) !== it && t !== null ? (t.return = e, Ke = t) : TN();
      }
    }
    function TN() {
      for (; Ke !== null; ) {
        var e = Ke;
        (e.flags & Nn) !== it && (sn(e), xN(e), Pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function xN(e) {
      switch (e.tag) {
        case b:
        case ae:
        case Me: {
          e.mode & mt ? (RE(), go(Xr | Tr, e, e.return), CE(e)) : go(Xr | Tr, e, e.return);
          break;
        }
      }
    }
    function bN(e, t) {
      for (; Ke !== null; ) {
        var a = Ke;
        sn(a), _N(a, t), Pn();
        var i = a.child;
        i !== null ? (i.return = a, Ke = i) : wN(e);
      }
    }
    function wN(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.sibling, i = t.return;
        if (Cx(t), t === e) {
          Ke = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ke = a;
          return;
        }
        Ke = i;
      }
    }
    function _N(e, t) {
      switch (e.tag) {
        case b:
        case ae:
        case Me: {
          e.mode & mt ? (RE(), go(Xr, e, t), CE(e)) : go(Xr, e, t);
          break;
        }
      }
    }
    function ON(e) {
      switch (e.tag) {
        case b:
        case ae:
        case Me: {
          try {
            cs(xr | Tr, e);
          } catch (a) {
            kn(e, e.return, a);
          }
          break;
        }
        case w: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            kn(e, e.return, a);
          }
          break;
        }
      }
    }
    function DN(e) {
      switch (e.tag) {
        case b:
        case ae:
        case Me: {
          try {
            cs(Xr | Tr, e);
          } catch (t) {
            kn(e, e.return, t);
          }
          break;
        }
      }
    }
    function kN(e) {
      switch (e.tag) {
        case b:
        case ae:
        case Me: {
          try {
            go(xr | Tr, e, e.return);
          } catch (a) {
            kn(e, e.return, a);
          }
          break;
        }
        case w: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && e0(e, e.return, t);
          break;
        }
      }
    }
    function NN(e) {
      switch (e.tag) {
        case b:
        case ae:
        case Me:
          try {
            go(Xr | Tr, e, e.return);
          } catch (t) {
            kn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Sv = Symbol.for;
      Sv("selector.component"), Sv("selector.has_pseudo_class"), Sv("selector.role"), Sv("selector.test_id"), Sv("selector.text");
    }
    var LN = [];
    function MN() {
      LN.forEach(function(e) {
        return e();
      });
    }
    var AN = f.ReactCurrentActQueue;
    function UN(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function kx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && AN.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var jN = Math.ceil, a0 = f.ReactCurrentDispatcher, i0 = f.ReactCurrentOwner, ta = f.ReactCurrentBatchConfig, Co = f.ReactCurrentActQueue, _r = (
      /*             */
      0
    ), Nx = (
      /*               */
      1
    ), na = (
      /*                */
      2
    ), Bi = (
      /*                */
      4
    ), ql = 0, Ev = 1, Cc = 2, ky = 3, Cv = 4, Lx = 5, o0 = 6, It = _r, Aa = null, Kn = null, Or = de, ll = de, l0 = ts(de), Dr = ql, Rv = null, Ny = de, Tv = de, Ly = de, xv = null, ii = null, u0 = 0, Mx = 500, Ax = 1 / 0, zN = 500, Kl = null;
    function bv() {
      Ax = jn() + zN;
    }
    function Ux() {
      return Ax;
    }
    var My = !1, s0 = null, yd = null, Rc = !1, ds = null, wv = de, c0 = [], f0 = null, FN = 50, _v = 0, d0 = null, p0 = !1, Ay = !1, PN = 50, gd = 0, Uy = null, Ov = xn, jy = de, jx = !1;
    function zy() {
      return Aa;
    }
    function Ua() {
      return (It & (na | Bi)) !== _r ? jn() : (Ov !== xn || (Ov = jn()), Ov);
    }
    function ps(e) {
      var t = e.mode;
      if ((t & Ze) === Ge)
        return rt;
      if ((It & na) !== _r && Or !== de)
        return ju(Or);
      var a = AD() !== MD;
      if (a) {
        if (ta.transition !== null) {
          var i = ta.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return jy === Zn && (jy = Qh()), jy;
      }
      var u = Xa();
      if (u !== Zn)
        return u;
      var d = gO();
      return d;
    }
    function HN(e) {
      var t = e.mode;
      return (t & Ze) === Ge ? rt : ha();
    }
    function kr(e, t, a, i) {
      cL(), jx && v("useInsertionEffect must not schedule updates."), p0 && (Ay = !0), Ml(e, a, i), (It & na) !== de && e === Aa ? pL(t) : (ka && bf(e, t, a), vL(t), e === Aa && ((It & na) === _r && (Tv = bt(Tv, a)), Dr === Cv && vs(e, Or)), oi(e, i), a === rt && It === _r && (t.mode & Ze) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Co.isBatchingLegacy && (bv(), jR()));
    }
    function BN(e, t, a) {
      var i = e.current;
      i.lanes = t, Ml(e, t, a), oi(e, a);
    }
    function VN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (It & na) !== _r
      );
    }
    function oi(e, t) {
      var a = e.callbackNode;
      Ih(e, t);
      var i = Nl(e, e === Aa ? Or : de);
      if (i === de) {
        a !== null && Jx(a), e.callbackNode = null, e.callbackPriority = Zn;
        return;
      }
      var u = Yn(i), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Co.current !== null && a !== E0)) {
        a == null && d !== rt && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Jx(a);
      var y;
      if (u === rt)
        e.tag === ns ? (Co.isBatchingLegacy !== null && (Co.didScheduleLegacyUpdate = !0), mD(Px.bind(null, e))) : UR(Px.bind(null, e)), Co.current !== null ? Co.current.push(rs) : EO(function() {
          (It & (na | Bi)) === _r && rs();
        }), y = null;
      else {
        var E;
        switch (Rr(i)) {
          case Wn:
            E = Xc;
            break;
          case oo:
            E = xl;
            break;
          case Li:
            E = Ni;
            break;
          case zu:
            E = Jc;
            break;
          default:
            E = Ni;
            break;
        }
        y = C0(E, zx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = y;
    }
    function zx(e, t) {
      if (ok(), Ov = xn, jy = de, (It & (na | Bi)) !== _r)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Gl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Nl(e, e === Aa ? Or : de);
      if (u === de)
        return null;
      var d = !Ks(e, u) && !Kh(e, u) && !t, y = d ? JN(e, u) : Py(e, u);
      if (y !== ql) {
        if (y === Cc) {
          var E = qo(e);
          E !== de && (u = E, y = v0(e, E));
        }
        if (y === Ev) {
          var C = Rv;
          throw Tc(e, de), vs(e, u), oi(e, jn()), C;
        }
        if (y === o0)
          vs(e, u);
        else {
          var _ = !Ks(e, u), D = e.current.alternate;
          if (_ && !IN(D)) {
            if (y = Py(e, u), y === Cc) {
              var H = qo(e);
              H !== de && (u = H, y = v0(e, H));
            }
            if (y === Ev) {
              var F = Rv;
              throw Tc(e, de), vs(e, u), oi(e, jn()), F;
            }
          }
          e.finishedWork = D, e.finishedLanes = u, $N(e, y, u);
        }
      }
      return oi(e, jn()), e.callbackNode === a ? zx.bind(null, e) : null;
    }
    function v0(e, t) {
      var a = xv;
      if (wf(e)) {
        var i = Tc(e, t);
        i.flags |= Hn, sD(e.containerInfo);
      }
      var u = Py(e, t);
      if (u !== Cc) {
        var d = ii;
        ii = a, d !== null && Fx(d);
      }
      return u;
    }
    function Fx(e) {
      ii === null ? ii = e : ii.push.apply(ii, e);
    }
    function $N(e, t, a) {
      switch (t) {
        case ql:
        case Ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case Cc: {
          xc(e, ii, Kl);
          break;
        }
        case ky: {
          if (vs(e, a), Yh(a) && // do not delay if we're inside an act() scope
          !Zx()) {
            var i = u0 + Mx - jn();
            if (i > 10) {
              var u = Nl(e, de);
              if (u !== de)
                break;
              var d = e.suspendedLanes;
              if (!Ll(d, a)) {
                Ua(), Tf(e, d);
                break;
              }
              e.timeoutHandle = fS(xc.bind(null, e, ii, Kl), i);
              break;
            }
          }
          xc(e, ii, Kl);
          break;
        }
        case Cv: {
          if (vs(e, a), qh(a))
            break;
          if (!Zx()) {
            var y = Vh(e, a), E = y, C = jn() - E, _ = sL(C) - C;
            if (_ > 10) {
              e.timeoutHandle = fS(xc.bind(null, e, ii, Kl), _);
              break;
            }
          }
          xc(e, ii, Kl);
          break;
        }
        case Lx: {
          xc(e, ii, Kl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function IN(e) {
      for (var t = e; ; ) {
        if (t.flags & Fs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var d = i[u], y = d.getSnapshot, E = d.value;
                try {
                  if (!qe(y(), E))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var C = t.child;
        if (t.subtreeFlags & Fs && C !== null) {
          C.return = t, t = C;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function vs(e, t) {
      t = Qs(t, Ly), t = Qs(t, Tv), Xh(e, t);
    }
    function Px(e) {
      if (lk(), (It & (na | Bi)) !== _r)
        throw new Error("Should not already be working.");
      Gl();
      var t = Nl(e, de);
      if (!ma(t, rt))
        return oi(e, jn()), null;
      var a = Py(e, t);
      if (e.tag !== ns && a === Cc) {
        var i = qo(e);
        i !== de && (t = i, a = v0(e, i));
      }
      if (a === Ev) {
        var u = Rv;
        throw Tc(e, de), vs(e, t), oi(e, jn()), u;
      }
      if (a === o0)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, xc(e, ii, Kl), oi(e, jn()), null;
    }
    function YN(e, t) {
      t !== de && (gp(e, bt(t, rt)), oi(e, jn()), (It & (na | Bi)) === _r && (bv(), rs()));
    }
    function h0(e, t) {
      var a = It;
      It |= Nx;
      try {
        return e(t);
      } finally {
        It = a, It === _r && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Co.isBatchingLegacy && (bv(), jR());
      }
    }
    function WN(e, t, a, i, u) {
      var d = Xa(), y = ta.transition;
      try {
        return ta.transition = null, Bn(Wn), e(t, a, i, u);
      } finally {
        Bn(d), ta.transition = y, It === _r && bv();
      }
    }
    function Ql(e) {
      ds !== null && ds.tag === ns && (It & (na | Bi)) === _r && Gl();
      var t = It;
      It |= Nx;
      var a = ta.transition, i = Xa();
      try {
        return ta.transition = null, Bn(Wn), e ? e() : void 0;
      } finally {
        Bn(i), ta.transition = a, It = t, (It & (na | Bi)) === _r && rs();
      }
    }
    function Hx() {
      return (It & (na | Bi)) !== _r;
    }
    function Fy(e, t) {
      Sa(l0, ll, e), ll = bt(ll, t);
    }
    function m0(e) {
      ll = l0.current, ga(l0, e);
    }
    function Tc(e, t) {
      e.finishedWork = null, e.finishedLanes = de;
      var a = e.timeoutHandle;
      if (a !== dS && (e.timeoutHandle = dS, SO(a)), Kn !== null)
        for (var i = Kn.return; i !== null; ) {
          var u = i.alternate;
          hx(u, i), i = i.return;
        }
      Aa = e;
      var d = bc(e.current, null);
      return Kn = d, Or = ll = t, Dr = ql, Rv = null, Ny = de, Tv = de, Ly = de, xv = null, ii = null, BD(), po.discardPendingWarnings(), d;
    }
    function Bx(e, t) {
      do {
        var a = Kn;
        try {
          if (Km(), fT(), Pn(), i0.current = null, a === null || a.return === null) {
            Dr = Ev, Rv = t, Kn = null;
            return;
          }
          if (we && a.mode & mt && Ty(a, !0), Re)
            if (pa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wl(a, i, Or);
            } else
              Bs(a, t, Or);
          mk(e, a.return, a, t, Or), Yx(a);
        } catch (u) {
          t = u, Kn === a && a !== null ? (a = a.return, Kn = a) : a = Kn;
          continue;
        }
        return;
      } while (!0);
    }
    function Vx() {
      var e = a0.current;
      return a0.current = gy, e === null ? gy : e;
    }
    function $x(e) {
      a0.current = e;
    }
    function qN() {
      u0 = jn();
    }
    function Dv(e) {
      Ny = bt(e, Ny);
    }
    function KN() {
      Dr === ql && (Dr = ky);
    }
    function y0() {
      (Dr === ql || Dr === ky || Dr === Cc) && (Dr = Cv), Aa !== null && (qs(Ny) || qs(Tv)) && vs(Aa, Or);
    }
    function QN(e) {
      Dr !== Cv && (Dr = Cc), xv === null ? xv = [e] : xv.push(e);
    }
    function GN() {
      return Dr === ql;
    }
    function Py(e, t) {
      var a = It;
      It |= na;
      var i = Vx();
      if (Aa !== e || Or !== t) {
        if (ka) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (kv(e, Or), u.clear()), Sp(e, t);
        }
        Kl = Xs(), Tc(e, t);
      }
      Ln(t);
      do
        try {
          XN();
          break;
        } catch (d) {
          Bx(e, d);
        }
      while (!0);
      if (Km(), It = a, $x(i), Kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return rf(), Aa = null, Or = de, Dr;
    }
    function XN() {
      for (; Kn !== null; )
        Ix(Kn);
    }
    function JN(e, t) {
      var a = It;
      It |= na;
      var i = Vx();
      if (Aa !== e || Or !== t) {
        if (ka) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (kv(e, Or), u.clear()), Sp(e, t);
        }
        Kl = Xs(), bv(), Tc(e, t);
      }
      Ln(t);
      do
        try {
          ZN();
          break;
        } catch (d) {
          Bx(e, d);
        }
      while (!0);
      return Km(), $x(i), It = a, Kn !== null ? (nf(), ql) : (rf(), Aa = null, Or = de, Dr);
    }
    function ZN() {
      for (; Kn !== null && !Gc(); )
        Ix(Kn);
    }
    function Ix(e) {
      var t = e.alternate;
      sn(e);
      var a;
      (e.mode & mt) !== Ge ? (EE(e), a = g0(t, e, ll), Ty(e, !0)) : a = g0(t, e, ll), Pn(), e.memoizedProps = e.pendingProps, a === null ? Yx(e) : Kn = a, i0.current = null;
    }
    function Yx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & _a) === it) {
          sn(t);
          var u = void 0;
          if ((t.mode & mt) === Ge ? u = vx(a, t, ll) : (EE(t), u = vx(a, t, ll), Ty(t, !1)), Pn(), u !== null) {
            Kn = u;
            return;
          }
        } else {
          var d = Kk(a, t);
          if (d !== null) {
            d.flags &= Nh, Kn = d;
            return;
          }
          if ((t.mode & mt) !== Ge) {
            Ty(t, !1);
            for (var y = t.actualDuration, E = t.child; E !== null; )
              y += E.actualDuration, E = E.sibling;
            t.actualDuration = y;
          }
          if (i !== null)
            i.flags |= _a, i.subtreeFlags = it, i.deletions = null;
          else {
            Dr = o0, Kn = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          Kn = C;
          return;
        }
        t = i, Kn = t;
      } while (t !== null);
      Dr === ql && (Dr = Lx);
    }
    function xc(e, t, a) {
      var i = Xa(), u = ta.transition;
      try {
        ta.transition = null, Bn(Wn), eL(e, t, a, i);
      } finally {
        ta.transition = u, Bn(i);
      }
      return null;
    }
    function eL(e, t, a, i) {
      do
        Gl();
      while (ds !== null);
      if (fL(), (It & (na | Bi)) !== _r)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Io(d), u === null)
        return Zc(), null;
      if (d === de && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = de, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Zn;
      var y = bt(u.lanes, u.childLanes);
      xf(e, y), e === Aa && (Aa = null, Kn = null, Or = de), ((u.subtreeFlags & Wa) !== it || (u.flags & Wa) !== it) && (Rc || (Rc = !0, f0 = a, C0(Ni, function() {
        return Gl(), null;
      })));
      var E = (u.subtreeFlags & (Tu | fa | zr | Wa)) !== it, C = (u.flags & (Tu | fa | zr | Wa)) !== it;
      if (E || C) {
        var _ = ta.transition;
        ta.transition = null;
        var D = Xa();
        Bn(Wn);
        var H = It;
        It |= Bi, i0.current = null, Zk(e, u), jT(), pN(e, u, d), dO(e.containerInfo), e.current = u, cp(d), vN(u, e, d), Ou(), Ah(), It = H, Bn(D), ta.transition = _;
      } else
        e.current = u, jT();
      var F = Rc;
      if (Rc ? (Rc = !1, ds = e, wv = d) : (gd = 0, Uy = null), y = e.pendingLanes, y === de && (yd = null), F || Qx(e.current, !1), bu(u.stateNode, i), ka && e.memoizedUpdaters.clear(), MN(), oi(e, jn()), t !== null)
        for (var Z = e.onRecoverableError, ne = 0; ne < t.length; ne++) {
          var oe = t[ne], ze = oe.stack, ot = oe.digest;
          Z(oe.value, {
            componentStack: ze,
            digest: ot
          });
        }
      if (My) {
        My = !1;
        var et = s0;
        throw s0 = null, et;
      }
      return ma(wv, rt) && e.tag !== ns && Gl(), y = e.pendingLanes, ma(y, rt) ? (ik(), e === d0 ? _v++ : (_v = 0, d0 = e)) : _v = 0, rs(), Zc(), null;
    }
    function Gl() {
      if (ds !== null) {
        var e = Rr(wv), t = jg(Li, e), a = ta.transition, i = Xa();
        try {
          return ta.transition = null, Bn(t), nL();
        } finally {
          Bn(i), ta.transition = a;
        }
      }
      return !1;
    }
    function tL(e) {
      c0.push(e), Rc || (Rc = !0, C0(Ni, function() {
        return Gl(), null;
      }));
    }
    function nL() {
      if (ds === null)
        return !1;
      var e = f0;
      f0 = null;
      var t = ds, a = wv;
      if (ds = null, wv = de, (It & (na | Bi)) !== _r)
        throw new Error("Cannot flush passive effects while already rendering.");
      p0 = !0, Ay = !1, Hh(a);
      var i = It;
      It |= Bi, CN(t.current), yN(t, t.current, a, e);
      {
        var u = c0;
        c0 = [];
        for (var d = 0; d < u.length; d++) {
          var y = u[d];
          rN(t, y);
        }
      }
      fp(), Qx(t.current, !0), It = i, rs(), Ay ? t === Uy ? gd++ : (gd = 0, Uy = t) : gd = 0, p0 = !1, Ay = !1, Qa(t);
      {
        var E = t.current.stateNode;
        E.effectDuration = 0, E.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Wx(e) {
      return yd !== null && yd.has(e);
    }
    function rL(e) {
      yd === null ? yd = /* @__PURE__ */ new Set([e]) : yd.add(e);
    }
    function aL(e) {
      My || (My = !0, s0 = e);
    }
    var iL = aL;
    function qx(e, t, a) {
      var i = Sc(a, t), u = IT(e, i, rt), d = is(e, u, rt), y = Ua();
      d !== null && (Ml(d, rt, y), oi(d, y));
    }
    function kn(e, t, a) {
      if (Gk(a), Nv(!1), e.tag === O) {
        qx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === O) {
          qx(i, e, a);
          return;
        } else if (i.tag === w) {
          var u = i.type, d = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !Wx(d)) {
            var y = Sc(a, e), E = FE(i, y, rt), C = is(i, E, rt), _ = Ua();
            C !== null && (Ml(C, rt, _), oi(C, _));
            return;
          }
        }
        i = i.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function oL(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ua();
      Tf(e, a), hL(e), Aa === e && Ll(Or, a) && (Dr === Cv || Dr === ky && Yh(Or) && jn() - u0 < Mx ? Tc(e, de) : Ly = bt(Ly, a)), oi(e, u);
    }
    function Kx(e, t) {
      t === Zn && (t = HN(e));
      var a = Ua(), i = ri(e, t);
      i !== null && (Ml(i, t, a), oi(i, a));
    }
    function lL(e) {
      var t = e.memoizedState, a = Zn;
      t !== null && (a = t.retryLane), Kx(e, a);
    }
    function uL(e, t) {
      var a = Zn, i;
      switch (e.tag) {
        case J:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case gt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Kx(e, a);
    }
    function sL(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : jN(e / 1960) * 1960;
    }
    function cL() {
      if (_v > FN)
        throw _v = 0, d0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      gd > PN && (gd = 0, Uy = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function fL() {
      po.flushLegacyContextWarning(), po.flushPendingUnsafeLifecycleWarnings();
    }
    function Qx(e, t) {
      sn(e), Hy(e, ca, kN), t && Hy(e, Tl, NN), Hy(e, ca, ON), t && Hy(e, Tl, DN), Pn();
    }
    function Hy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== u && i.child !== null && d !== it ? i = i.child : ((i.flags & t) !== it && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var By = null;
    function Gx(e) {
      {
        if ((It & na) !== _r || !(e.mode & Ze))
          return;
        var t = e.tag;
        if (t !== k && t !== O && t !== w && t !== b && t !== ae && t !== _e && t !== Me)
          return;
        var a = St(e) || "ReactComponent";
        if (By !== null) {
          if (By.has(a))
            return;
          By.add(a);
        } else
          By = /* @__PURE__ */ new Set([a]);
        var i = Un;
        try {
          sn(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? sn(e) : Pn();
        }
      }
    }
    var g0;
    {
      var dL = null;
      g0 = function(e, t, a) {
        var i = ab(dL, t);
        try {
          return sx(e, t, a);
        } catch (d) {
          if (xD() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Km(), fT(), hx(e, t), ab(t, i), t.mode & mt && EE(t), Rl(null, sx, null, e, t, a), Ng()) {
            var u = tp();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Xx = !1, S0;
    S0 = /* @__PURE__ */ new Set();
    function pL(e) {
      if (ia && !nk())
        switch (e.tag) {
          case b:
          case ae:
          case Me: {
            var t = Kn && St(Kn) || "Unknown", a = t;
            if (!S0.has(a)) {
              S0.add(a);
              var i = St(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case w: {
            Xx || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Xx = !0);
            break;
          }
        }
    }
    function kv(e, t) {
      if (ka) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bf(e, i, t);
        });
      }
    }
    var E0 = {};
    function C0(e, t) {
      {
        var a = Co.current;
        return a !== null ? (a.push(t), E0) : Qc(e, t);
      }
    }
    function Jx(e) {
      if (e !== E0)
        return Mh(e);
    }
    function Zx() {
      return Co.current !== null;
    }
    function vL(e) {
      {
        if (e.mode & Ze) {
          if (!kx())
            return;
        } else if (!UN() || It !== _r || e.tag !== b && e.tag !== ae && e.tag !== Me)
          return;
        if (Co.current === null) {
          var t = Un;
          try {
            sn(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, St(e));
          } finally {
            t ? sn(e) : Pn();
          }
        }
      }
    }
    function hL(e) {
      e.tag !== ns && kx() && Co.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nv(e) {
      jx = e;
    }
    var Vi = null, Sd = null, mL = function(e) {
      Vi = e;
    };
    function Ed(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function R0(e) {
      return Ed(e);
    }
    function T0(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Ed(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ce,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function eb(e, t) {
      {
        if (Vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case w: {
            typeof i == "function" && (u = !0);
            break;
          }
          case b: {
            (typeof i == "function" || d === ut) && (u = !0);
            break;
          }
          case ae: {
            (d === Ce || d === ut) && (u = !0);
            break;
          }
          case _e:
          case Me: {
            (d === Ht || d === ut) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var y = Vi(a);
          if (y !== void 0 && y === Vi(i))
            return !0;
        }
        return !1;
      }
    }
    function tb(e) {
      {
        if (Vi === null || typeof WeakSet != "function")
          return;
        Sd === null && (Sd = /* @__PURE__ */ new WeakSet()), Sd.add(e);
      }
    }
    var yL = function(e, t) {
      {
        if (Vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Gl(), Ql(function() {
          x0(e.current, i, a);
        });
      }
    }, gL = function(e, t) {
      {
        if (e.context !== Si)
          return;
        Gl(), Ql(function() {
          Lv(t, e, null, null);
        });
      }
    };
    function x0(e, t, a) {
      {
        var i = e.alternate, u = e.child, d = e.sibling, y = e.tag, E = e.type, C = null;
        switch (y) {
          case b:
          case Me:
          case w:
            C = E;
            break;
          case ae:
            C = E.render;
            break;
        }
        if (Vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var _ = !1, D = !1;
        if (C !== null) {
          var H = Vi(C);
          H !== void 0 && (a.has(H) ? D = !0 : t.has(H) && (y === w ? D = !0 : _ = !0));
        }
        if (Sd !== null && (Sd.has(e) || i !== null && Sd.has(i)) && (D = !0), D && (e._debugNeedsRemount = !0), D || _) {
          var F = ri(e, rt);
          F !== null && kr(F, e, rt, xn);
        }
        u !== null && !D && x0(u, t, a), d !== null && x0(d, t, a);
      }
    }
    var SL = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return b0(e.current, i, a), a;
      }
    };
    function b0(e, t, a) {
      {
        var i = e.child, u = e.sibling, d = e.tag, y = e.type, E = null;
        switch (d) {
          case b:
          case Me:
          case w:
            E = y;
            break;
          case ae:
            E = y.render;
            break;
        }
        var C = !1;
        E !== null && t.has(E) && (C = !0), C ? EL(e, a) : i !== null && b0(i, t, a), u !== null && b0(u, t, a);
      }
    }
    function EL(e, t) {
      {
        var a = CL(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case V:
              t.add(i.stateNode);
              return;
            case U:
              t.add(i.stateNode.containerInfo);
              return;
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function CL(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === V)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var w0;
    {
      w0 = !1;
      try {
        var nb = Object.preventExtensions({});
      } catch {
        w0 = !0;
      }
    }
    function RL(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = it, this.subtreeFlags = it, this.deletions = null, this.lanes = de, this.childLanes = de, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !w0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ei = function(e, t, a, i) {
      return new RL(e, t, a, i);
    };
    function _0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function TL(e) {
      return typeof e == "function" && !_0(e) && e.defaultProps === void 0;
    }
    function xL(e) {
      if (typeof e == "function")
        return _0(e) ? w : b;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ce)
          return ae;
        if (t === Ht)
          return _e;
      }
      return k;
    }
    function bc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ei(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = it, a.subtreeFlags = it, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Er, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case k:
        case b:
        case Me:
          a.type = Ed(e.type);
          break;
        case w:
          a.type = R0(e.type);
          break;
        case ae:
          a.type = T0(e.type);
          break;
      }
      return a;
    }
    function bL(e, t) {
      e.flags &= Er | _n;
      var a = e.alternate;
      if (a === null)
        e.childLanes = de, e.lanes = t, e.child = null, e.subtreeFlags = it, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = it, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function wL(e, t, a) {
      var i;
      return e === Fm ? (i = Ze, t === !0 && (i |= At, i |= Na)) : i = Ge, ka && (i |= mt), Ei(O, null, null, i);
    }
    function O0(e, t, a, i, u, d) {
      var y = k, E = e;
      if (typeof e == "function")
        _0(e) ? (y = w, E = R0(E)) : E = Ed(E);
      else if (typeof e == "string")
        y = V;
      else
        e:
          switch (e) {
            case wa:
              return hs(a.children, u, d, t);
            case xi:
              y = Q, u |= At, (u & Ze) !== Ge && (u |= Na);
              break;
            case bi:
              return _L(a, u, d, t);
            case Je:
              return OL(a, u, d, t);
            case Ut:
              return DL(a, u, d, t);
            case Sn:
              return rb(a, u, d, t);
            case wn:
            case kt:
            case jr:
            case wi:
            case Gn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case j:
                    y = ie;
                    break e;
                  case ye:
                    y = pe;
                    break e;
                  case Ce:
                    y = ae, E = T0(E);
                    break e;
                  case Ht:
                    y = _e;
                    break e;
                  case ut:
                    y = vt, E = null;
                    break e;
                }
              var C = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var _ = i ? St(i) : null;
                _ && (C += `

Check the render method of \`` + _ + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
            }
          }
      var D = Ei(y, a, t, u);
      return D.elementType = e, D.type = E, D.lanes = d, D._debugOwner = i, D;
    }
    function D0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, d = e.key, y = e.props, E = O0(u, d, y, i, t, a);
      return E._debugSource = e._source, E._debugOwner = e._owner, E;
    }
    function hs(e, t, a, i) {
      var u = Ei($, e, i, t);
      return u.lanes = a, u;
    }
    function _L(e, t, a, i) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ei(ce, e, i, t | mt);
      return u.elementType = bi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function OL(e, t, a, i) {
      var u = Ei(J, e, i, t);
      return u.elementType = Je, u.lanes = a, u;
    }
    function DL(e, t, a, i) {
      var u = Ei(gt, e, i, t);
      return u.elementType = Ut, u.lanes = a, u;
    }
    function rb(e, t, a, i) {
      var u = Ei(Ye, e, i, t);
      u.elementType = Sn, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function k0(e, t, a) {
      var i = Ei(B, e, null, t);
      return i.lanes = a, i;
    }
    function kL() {
      var e = Ei(V, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function NL(e) {
      var t = Ei(xt, null, null, Ge);
      return t.stateNode = e, t;
    }
    function N0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ei(U, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ab(e, t) {
      return e === null && (e = Ei(k, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function LL(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = dS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Zn, this.eventTimes = Gs(de), this.expirationTimes = Gs(xn), this.pendingLanes = de, this.suspendedLanes = de, this.pingedLanes = de, this.expiredLanes = de, this.mutableReadLanes = de, this.finishedLanes = de, this.entangledLanes = de, this.entanglements = Gs(de), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], y = 0; y < Is; y++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ns:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ib(e, t, a, i, u, d, y, E, C, _) {
      var D = new LL(e, t, a, E, C), H = wL(t, d);
      D.current = H, H.stateNode = D;
      {
        var F = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        H.memoizedState = F;
      }
      return IS(H), D;
    }
    var L0 = "18.3.1";
    function ML(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Lr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: $r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var M0, A0;
    M0 = !1, A0 = {};
    function ob(e) {
      if (!e)
        return Si;
      var t = $a(e), a = hD(t);
      if (t.tag === w) {
        var i = t.type;
        if (el(i))
          return MR(t, i, a);
      }
      return a;
    }
    function AL(e, t) {
      {
        var a = $a(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qa(a);
        if (u === null)
          return null;
        if (u.mode & At) {
          var d = St(a) || "Component";
          if (!A0[d]) {
            A0[d] = !0;
            var y = Un;
            try {
              sn(u), a.mode & At ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              y ? sn(y) : Pn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function lb(e, t, a, i, u, d, y, E) {
      var C = !1, _ = null;
      return ib(e, t, C, _, a, i, u, d, y);
    }
    function ub(e, t, a, i, u, d, y, E, C, _) {
      var D = !0, H = ib(a, i, D, e, u, d, y, E, C);
      H.context = ob(null);
      var F = H.current, Z = Ua(), ne = ps(F), oe = Yl(Z, ne);
      return oe.callback = t ?? null, is(F, oe, ne), BN(H, ne, Z), H;
    }
    function Lv(e, t, a, i) {
      sp(t, e);
      var u = t.current, d = Ua(), y = ps(u);
      dp(y);
      var E = ob(a);
      t.context === null ? t.context = E : t.pendingContext = E, ia && Un !== null && !M0 && (M0 = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, St(Un) || "Unknown"));
      var C = Yl(d, y);
      C.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), C.callback = i);
      var _ = is(u, C, y);
      return _ !== null && (kr(_, u, y, d), Zm(_, u, y)), y;
    }
    function Vy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case V:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function UL(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (wf(t)) {
            var a = hp(t);
            YN(t, a);
          }
          break;
        }
        case J: {
          Ql(function() {
            var u = ri(e, rt);
            if (u !== null) {
              var d = Ua();
              kr(u, e, rt, d);
            }
          });
          var i = rt;
          U0(e, i);
          break;
        }
      }
    }
    function sb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Gh(a.retryLane, t));
    }
    function U0(e, t) {
      sb(e, t);
      var a = e.alternate;
      a && sb(a, t);
    }
    function jL(e) {
      if (e.tag === J) {
        var t = Ws, a = ri(e, t);
        if (a !== null) {
          var i = Ua();
          kr(a, e, t, i);
        }
        U0(e, t);
      }
    }
    function zL(e) {
      if (e.tag === J) {
        var t = ps(e), a = ri(e, t);
        if (a !== null) {
          var i = Ua();
          kr(a, e, t, i);
        }
        U0(e, t);
      }
    }
    function cb(e) {
      var t = Lh(e);
      return t === null ? null : t.stateNode;
    }
    var fb = function(e) {
      return null;
    };
    function FL(e) {
      return fb(e);
    }
    var db = function(e) {
      return !1;
    };
    function PL(e) {
      return db(e);
    }
    var pb = null, vb = null, hb = null, mb = null, yb = null, gb = null, Sb = null, Eb = null, Cb = null;
    {
      var Rb = function(e, t, a) {
        var i = t[a], u = Vt(e) ? e.slice() : Nt({}, e);
        return a + 1 === t.length ? (Vt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Rb(e[i], t, a + 1), u);
      }, Tb = function(e, t) {
        return Rb(e, t, 0);
      }, xb = function(e, t, a, i) {
        var u = t[i], d = Vt(e) ? e.slice() : Nt({}, e);
        if (i + 1 === t.length) {
          var y = a[i];
          d[y] = d[u], Vt(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = xb(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return d;
      }, bb = function(e, t, a) {
        if (t.length !== a.length) {
          g("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              g("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return xb(e, t, a, 0);
      }, wb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], d = Vt(e) ? e.slice() : Nt({}, e);
        return d[u] = wb(e[u], t, a + 1, i), d;
      }, _b = function(e, t, a) {
        return wb(e, t, 0, a);
      }, j0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      pb = function(e, t, a, i) {
        var u = j0(e, t);
        if (u !== null) {
          var d = _b(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Nt({}, e.memoizedProps);
          var y = ri(e, rt);
          y !== null && kr(y, e, rt, xn);
        }
      }, vb = function(e, t, a) {
        var i = j0(e, t);
        if (i !== null) {
          var u = Tb(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Nt({}, e.memoizedProps);
          var d = ri(e, rt);
          d !== null && kr(d, e, rt, xn);
        }
      }, hb = function(e, t, a, i) {
        var u = j0(e, t);
        if (u !== null) {
          var d = bb(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Nt({}, e.memoizedProps);
          var y = ri(e, rt);
          y !== null && kr(y, e, rt, xn);
        }
      }, mb = function(e, t, a) {
        e.pendingProps = _b(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ri(e, rt);
        i !== null && kr(i, e, rt, xn);
      }, yb = function(e, t) {
        e.pendingProps = Tb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ri(e, rt);
        a !== null && kr(a, e, rt, xn);
      }, gb = function(e, t, a) {
        e.pendingProps = bb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ri(e, rt);
        i !== null && kr(i, e, rt, xn);
      }, Sb = function(e) {
        var t = ri(e, rt);
        t !== null && kr(t, e, rt, xn);
      }, Eb = function(e) {
        fb = e;
      }, Cb = function(e) {
        db = e;
      };
    }
    function HL(e) {
      var t = qa(e);
      return t === null ? null : t.stateNode;
    }
    function BL(e) {
      return null;
    }
    function VL() {
      return Un;
    }
    function $L(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return up({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: pb,
        overrideHookStateDeletePath: vb,
        overrideHookStateRenamePath: hb,
        overrideProps: mb,
        overridePropsDeletePath: yb,
        overridePropsRenamePath: gb,
        setErrorHandler: Eb,
        setSuspenseHandler: Cb,
        scheduleUpdate: Sb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: HL,
        findFiberByHostInstance: t || BL,
        // React Refresh
        findHostInstancesForRefresh: SL,
        scheduleRefresh: yL,
        scheduleRoot: gL,
        setRefreshHandler: mL,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: VL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: L0
      });
    }
    var Ob = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function z0(e) {
      this._internalRoot = e;
    }
    $y.prototype.render = z0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Iy(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Xn) {
          var i = cb(t.current);
          i && i.parentNode !== a && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Lv(e, t, null, null);
    }, $y.prototype.unmount = z0.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Hx() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ql(function() {
          Lv(null, e, null, null);
        }), OR(t);
      }
    };
    function IL(e, t) {
      if (!Iy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Db(e);
      var a = !1, i = !1, u = "", d = Ob;
      t != null && (t.hydrate ? g("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === fi && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var y = lb(e, Fm, null, a, i, u, d);
      Nm(y.current, e);
      var E = e.nodeType === Xn ? e.parentNode : e;
      return Fp(E), new z0(y);
    }
    function $y(e) {
      this._internalRoot = e;
    }
    function YL(e) {
      e && Pg(e);
    }
    $y.prototype.unstable_scheduleHydration = YL;
    function WL(e, t, a) {
      if (!Iy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Db(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, d = !1, y = !1, E = "", C = Ob;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (E = a.identifierPrefix), a.onRecoverableError !== void 0 && (C = a.onRecoverableError));
      var _ = ub(t, null, e, Fm, i, d, y, E, C);
      if (Nm(_.current, e), Fp(e), u)
        for (var D = 0; D < u.length; D++) {
          var H = u[D];
          GD(_, H);
        }
      return new $y(_);
    }
    function Iy(e) {
      return !!(e && (e.nodeType === la || e.nodeType === hi || e.nodeType === ml || !W));
    }
    function Mv(e) {
      return !!(e && (e.nodeType === la || e.nodeType === hi || e.nodeType === ml || e.nodeType === Xn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Db(e) {
      e.nodeType === la && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Qp(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var qL = f.ReactCurrentOwner, kb;
    kb = function(e) {
      if (e._reactRootContainer && e.nodeType !== Xn) {
        var t = cb(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = F0(e), u = !!(i && es(i));
      u && !a && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === la && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function F0(e) {
      return e ? e.nodeType === hi ? e.documentElement : e.firstChild : null;
    }
    function Nb() {
    }
    function KL(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var F = Vy(y);
            d.call(F);
          };
        }
        var y = ub(
          t,
          i,
          e,
          ns,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Nb
        );
        e._reactRootContainer = y, Nm(y.current, e);
        var E = e.nodeType === Xn ? e.parentNode : e;
        return Fp(E), Ql(), y;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof i == "function") {
          var _ = i;
          i = function() {
            var F = Vy(D);
            _.call(F);
          };
        }
        var D = lb(
          e,
          ns,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Nb
        );
        e._reactRootContainer = D, Nm(D.current, e);
        var H = e.nodeType === Xn ? e.parentNode : e;
        return Fp(H), Ql(function() {
          Lv(t, D, a, i);
        }), D;
      }
    }
    function QL(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Yy(e, t, a, i, u) {
      kb(a), QL(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, y;
      if (!d)
        y = KL(a, t, e, u, i);
      else {
        if (y = d, typeof u == "function") {
          var E = u;
          u = function() {
            var C = Vy(y);
            E.call(C);
          };
        }
        Lv(t, y, e, u);
      }
      return Vy(y);
    }
    var Lb = !1;
    function GL(e) {
      {
        Lb || (Lb = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = qL.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === la ? e : AL(e, "findDOMNode");
    }
    function XL(e, t, a) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Mv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Qp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Yy(null, e, t, !0, a);
    }
    function JL(e, t, a) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Mv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Qp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Yy(null, e, t, !1, a);
    }
    function ZL(e, t, a, i) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Mv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !zs(e))
        throw new Error("parentComponent must be a valid React Component");
      return Yy(e, t, a, !1, i);
    }
    var Mb = !1;
    function eM(e) {
      if (Mb || (Mb = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Mv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Qp(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = F0(e), i = a && !es(a);
          i && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ql(function() {
          Yy(null, null, e, !1, function() {
            e._reactRootContainer = null, OR(e);
          });
        }), !0;
      } else {
        {
          var u = F0(e), d = !!(u && es(u)), y = e.nodeType === la && Mv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Hu(UL), zg(jL), Of(zL), Zh(Xa), em(Hr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Dh(nO), Ic(h0, WN, Ql);
    function tM(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Iy(t))
        throw new Error("Target container is not a DOM element.");
      return ML(e, t, null, a);
    }
    function nM(e, t, a, i) {
      return ZL(e, t, a, i);
    }
    var P0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [es, Xf, Lm, $c, As, h0]
    };
    function rM(e, t) {
      return P0.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), IL(e, t);
    }
    function aM(e, t, a) {
      return P0.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), WL(e, t, a);
    }
    function iM(e) {
      return Hx() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ql(e);
    }
    var oM = $L({
      findFiberByHostInstance: cc,
      bundleType: 1,
      version: L0,
      rendererPackageName: "react-dom"
    });
    if (!oM && Lt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Ab = window.location.protocol;
      /^(https?|file):$/.test(Ab) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Ab === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P0, ui.createPortal = tM, ui.createRoot = rM, ui.findDOMNode = GL, ui.flushSync = iM, ui.hydrate = XL, ui.hydrateRoot = aM, ui.render = JL, ui.unmountComponentAtNode = eM, ui.unstable_batchedUpdates = h0, ui.unstable_renderSubtreeIntoContainer = nM, ui.version = L0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ui;
}
function Lw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lw);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (Lw(), lC.exports = yM()) : lC.exports = gM();
var SM = lC.exports;
const Oc = /* @__PURE__ */ Qv(SM);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $v() {
  return $v = Object.assign ? Object.assign.bind() : function(l) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var p in f)
        Object.prototype.hasOwnProperty.call(f, p) && (l[p] = f[p]);
    }
    return l;
  }, $v.apply(this, arguments);
}
var gs;
(function(l) {
  l.Pop = "POP", l.Push = "PUSH", l.Replace = "REPLACE";
})(gs || (gs = {}));
const Ib = "popstate";
function EM(l) {
  l === void 0 && (l = {});
  function s(p, m) {
    let {
      pathname: g,
      search: v,
      hash: x
    } = p.location;
    return uC(
      "",
      {
        pathname: g,
        search: v,
        hash: x
      },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function f(p, m) {
    return typeof m == "string" ? m : Iv(m);
  }
  return RM(s, f, null, l);
}
function jt(l, s) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(s);
}
function cl(l, s) {
  if (!l) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {
    }
  }
}
function CM() {
  return Math.random().toString(36).substr(2, 8);
}
function Yb(l, s) {
  return {
    usr: l.state,
    key: l.key,
    idx: s
  };
}
function uC(l, s, f, p) {
  return f === void 0 && (f = null), $v({
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: ""
  }, typeof s == "string" ? _d(s) : s, {
    state: f,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: s && s.key || p || CM()
  });
}
function Iv(l) {
  let {
    pathname: s = "/",
    search: f = "",
    hash: p = ""
  } = l;
  return f && f !== "?" && (s += f.charAt(0) === "?" ? f : "?" + f), p && p !== "#" && (s += p.charAt(0) === "#" ? p : "#" + p), s;
}
function _d(l) {
  let s = {};
  if (l) {
    let f = l.indexOf("#");
    f >= 0 && (s.hash = l.substr(f), l = l.substr(0, f));
    let p = l.indexOf("?");
    p >= 0 && (s.search = l.substr(p), l = l.substr(0, p)), l && (s.pathname = l);
  }
  return s;
}
function RM(l, s, f, p) {
  p === void 0 && (p = {});
  let {
    window: m = document.defaultView,
    v5Compat: g = !1
  } = p, v = m.history, x = gs.Pop, b = null, w = k();
  w == null && (w = 0, v.replaceState($v({}, v.state, {
    idx: w
  }), ""));
  function k() {
    return (v.state || {
      idx: null
    }).idx;
  }
  function O() {
    x = gs.Pop;
    let Q = k(), pe = Q == null ? null : Q - w;
    w = Q, b && b({
      action: x,
      location: $.location,
      delta: pe
    });
  }
  function U(Q, pe) {
    x = gs.Push;
    let ie = uC($.location, Q, pe);
    w = k() + 1;
    let ae = Yb(ie, w), ce = $.createHref(ie);
    try {
      v.pushState(ae, "", ce);
    } catch (J) {
      if (J instanceof DOMException && J.name === "DataCloneError")
        throw J;
      m.location.assign(ce);
    }
    g && b && b({
      action: x,
      location: $.location,
      delta: 1
    });
  }
  function V(Q, pe) {
    x = gs.Replace;
    let ie = uC($.location, Q, pe);
    w = k();
    let ae = Yb(ie, w), ce = $.createHref(ie);
    v.replaceState(ae, "", ce), g && b && b({
      action: x,
      location: $.location,
      delta: 0
    });
  }
  function B(Q) {
    let pe = m.location.origin !== "null" ? m.location.origin : m.location.href, ie = typeof Q == "string" ? Q : Iv(Q);
    return ie = ie.replace(/ $/, "%20"), jt(pe, "No window.location.(origin|href) available to create URL for href: " + ie), new URL(ie, pe);
  }
  let $ = {
    get action() {
      return x;
    },
    get location() {
      return l(m, v);
    },
    listen(Q) {
      if (b)
        throw new Error("A history only accepts one active listener");
      return m.addEventListener(Ib, O), b = Q, () => {
        m.removeEventListener(Ib, O), b = null;
      };
    },
    createHref(Q) {
      return s(m, Q);
    },
    createURL: B,
    encodeLocation(Q) {
      let pe = B(Q);
      return {
        pathname: pe.pathname,
        search: pe.search,
        hash: pe.hash
      };
    },
    push: U,
    replace: V,
    go(Q) {
      return v.go(Q);
    }
  };
  return $;
}
var Wb;
(function(l) {
  l.data = "data", l.deferred = "deferred", l.redirect = "redirect", l.error = "error";
})(Wb || (Wb = {}));
function TM(l, s, f) {
  f === void 0 && (f = "/");
  let p = typeof s == "string" ? _d(s) : s, m = Ss(p.pathname || "/", f);
  if (m == null)
    return null;
  let g = Mw(l);
  xM(g);
  let v = null;
  for (let x = 0; v == null && x < g.length; ++x) {
    let b = UM(m);
    v = MM(g[x], b);
  }
  return v;
}
function Mw(l, s, f, p) {
  s === void 0 && (s = []), f === void 0 && (f = []), p === void 0 && (p = "");
  let m = (g, v, x) => {
    let b = {
      relativePath: x === void 0 ? g.path || "" : x,
      caseSensitive: g.caseSensitive === !0,
      childrenIndex: v,
      route: g
    };
    b.relativePath.startsWith("/") && (jt(b.relativePath.startsWith(p), 'Absolute route path "' + b.relativePath + '" nested under path ' + ('"' + p + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), b.relativePath = b.relativePath.slice(p.length));
    let w = Zl([p, b.relativePath]), k = f.concat(b);
    g.children && g.children.length > 0 && (jt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      g.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + w + '".')
    ), Mw(g.children, s, k, w)), !(g.path == null && !g.index) && s.push({
      path: w,
      score: NM(w, g.index),
      routesMeta: k
    });
  };
  return l.forEach((g, v) => {
    var x;
    if (g.path === "" || !((x = g.path) != null && x.includes("?")))
      m(g, v);
    else
      for (let b of Aw(g.path))
        m(g, v, b);
  }), s;
}
function Aw(l) {
  let s = l.split("/");
  if (s.length === 0)
    return [];
  let [f, ...p] = s, m = f.endsWith("?"), g = f.replace(/\?$/, "");
  if (p.length === 0)
    return m ? [g, ""] : [g];
  let v = Aw(p.join("/")), x = [];
  return x.push(...v.map((b) => b === "" ? g : [g, b].join("/"))), m && x.push(...v), x.map((b) => l.startsWith("/") && b === "" ? "/" : b);
}
function xM(l) {
  l.sort((s, f) => s.score !== f.score ? f.score - s.score : LM(s.routesMeta.map((p) => p.childrenIndex), f.routesMeta.map((p) => p.childrenIndex)));
}
const bM = /^:[\w-]+$/, wM = 3, _M = 2, OM = 1, DM = 10, kM = -2, qb = (l) => l === "*";
function NM(l, s) {
  let f = l.split("/"), p = f.length;
  return f.some(qb) && (p += kM), s && (p += _M), f.filter((m) => !qb(m)).reduce((m, g) => m + (bM.test(g) ? wM : g === "" ? OM : DM), p);
}
function LM(l, s) {
  return l.length === s.length && l.slice(0, -1).every((p, m) => p === s[m]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    l[l.length - 1] - s[s.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function MM(l, s) {
  let {
    routesMeta: f
  } = l, p = {}, m = "/", g = [];
  for (let v = 0; v < f.length; ++v) {
    let x = f[v], b = v === f.length - 1, w = m === "/" ? s : s.slice(m.length) || "/", k = sC({
      path: x.relativePath,
      caseSensitive: x.caseSensitive,
      end: b
    }, w);
    if (!k)
      return null;
    Object.assign(p, k.params);
    let O = x.route;
    g.push({
      // TODO: Can this as be avoided?
      params: p,
      pathname: Zl([m, k.pathname]),
      pathnameBase: PM(Zl([m, k.pathnameBase])),
      route: O
    }), k.pathnameBase !== "/" && (m = Zl([m, k.pathnameBase]));
  }
  return g;
}
function sC(l, s) {
  typeof l == "string" && (l = {
    path: l,
    caseSensitive: !1,
    end: !0
  });
  let [f, p] = AM(l.path, l.caseSensitive, l.end), m = s.match(f);
  if (!m)
    return null;
  let g = m[0], v = g.replace(/(.)\/+$/, "$1"), x = m.slice(1);
  return {
    params: p.reduce((w, k, O) => {
      let {
        paramName: U,
        isOptional: V
      } = k;
      if (U === "*") {
        let $ = x[O] || "";
        v = g.slice(0, g.length - $.length).replace(/(.)\/+$/, "$1");
      }
      const B = x[O];
      return V && !B ? w[U] = void 0 : w[U] = (B || "").replace(/%2F/g, "/"), w;
    }, {}),
    pathname: g,
    pathnameBase: v,
    pattern: l
  };
}
function AM(l, s, f) {
  s === void 0 && (s = !1), f === void 0 && (f = !0), cl(l === "*" || !l.endsWith("*") || l.endsWith("/*"), 'Route path "' + l + '" will be treated as if it were ' + ('"' + l.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + l.replace(/\*$/, "/*") + '".'));
  let p = [], m = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (v, x, b) => (p.push({
    paramName: x,
    isOptional: b != null
  }), b ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return l.endsWith("*") ? (p.push({
    paramName: "*"
  }), m += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? m += "\\/*$" : l !== "" && l !== "/" && (m += "(?:(?=\\/|$))"), [new RegExp(m, s ? void 0 : "i"), p];
}
function UM(l) {
  try {
    return l.split("/").map((s) => decodeURIComponent(s).replace(/\//g, "%2F")).join("/");
  } catch (s) {
    return cl(!1, 'The URL path "' + l + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + s + ").")), l;
  }
}
function Ss(l, s) {
  if (s === "/")
    return l;
  if (!l.toLowerCase().startsWith(s.toLowerCase()))
    return null;
  let f = s.endsWith("/") ? s.length - 1 : s.length, p = l.charAt(f);
  return p && p !== "/" ? null : l.slice(f) || "/";
}
function jM(l, s) {
  s === void 0 && (s = "/");
  let {
    pathname: f,
    search: p = "",
    hash: m = ""
  } = typeof l == "string" ? _d(l) : l;
  return {
    pathname: f ? f.startsWith("/") ? f : zM(f, s) : s,
    search: HM(p),
    hash: BM(m)
  };
}
function zM(l, s) {
  let f = s.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((m) => {
    m === ".." ? f.length > 1 && f.pop() : m !== "." && f.push(m);
  }), f.length > 1 ? f.join("/") : "/";
}
function V0(l, s, f, p) {
  return "Cannot include a '" + l + "' character in a manually specified " + ("`to." + s + "` field [" + JSON.stringify(p) + "].  Please separate it out to the ") + ("`to." + f + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function FM(l) {
  return l.filter((s, f) => f === 0 || s.route.path && s.route.path.length > 0);
}
function Uw(l, s) {
  let f = FM(l);
  return s ? f.map((p, m) => m === l.length - 1 ? p.pathname : p.pathnameBase) : f.map((p) => p.pathnameBase);
}
function jw(l, s, f, p) {
  p === void 0 && (p = !1);
  let m;
  typeof l == "string" ? m = _d(l) : (m = $v({}, l), jt(!m.pathname || !m.pathname.includes("?"), V0("?", "pathname", "search", m)), jt(!m.pathname || !m.pathname.includes("#"), V0("#", "pathname", "hash", m)), jt(!m.search || !m.search.includes("#"), V0("#", "search", "hash", m)));
  let g = l === "" || m.pathname === "", v = g ? "/" : m.pathname, x;
  if (v == null)
    x = f;
  else {
    let O = s.length - 1;
    if (!p && v.startsWith("..")) {
      let U = v.split("/");
      for (; U[0] === ".."; )
        U.shift(), O -= 1;
      m.pathname = U.join("/");
    }
    x = O >= 0 ? s[O] : "/";
  }
  let b = jM(m, x), w = v && v !== "/" && v.endsWith("/"), k = (g || v === ".") && f.endsWith("/");
  return !b.pathname.endsWith("/") && (w || k) && (b.pathname += "/"), b;
}
const Zl = (l) => l.join("/").replace(/\/\/+/g, "/"), PM = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), HM = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, BM = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l;
function VM(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
const zw = ["post", "put", "patch", "delete"];
new Set(zw);
const $M = ["get", ...zw];
new Set($M);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yv() {
  return Yv = Object.assign ? Object.assign.bind() : function(l) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var p in f)
        Object.prototype.hasOwnProperty.call(f, p) && (l[p] = f[p]);
    }
    return l;
  }, Yv.apply(this, arguments);
}
const Gv = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (Gv.displayName = "DataRouter");
const _C = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (_C.displayName = "DataRouterState");
const IM = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (IM.displayName = "Await");
const xo = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (xo.displayName = "Navigation");
const Xv = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (Xv.displayName = "Location");
const nu = /* @__PURE__ */ N.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (nu.displayName = "Route");
const OC = /* @__PURE__ */ N.createContext(null);
process.env.NODE_ENV !== "production" && (OC.displayName = "RouteError");
function YM(l, s) {
  let {
    relative: f
  } = s === void 0 ? {} : s;
  Jv() || (process.env.NODE_ENV !== "production" ? jt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : jt(!1));
  let {
    basename: p,
    navigator: m
  } = N.useContext(xo), {
    hash: g,
    pathname: v,
    search: x
  } = Zv(l, {
    relative: f
  }), b = v;
  return p !== "/" && (b = v === "/" ? p : Zl([p, v])), m.createHref({
    pathname: b,
    search: x,
    hash: g
  });
}
function Jv() {
  return N.useContext(Xv) != null;
}
function Od() {
  return Jv() || (process.env.NODE_ENV !== "production" ? jt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : jt(!1)), N.useContext(Xv).location;
}
const Fw = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Pw(l) {
  N.useContext(xo).static || N.useLayoutEffect(l);
}
function WM() {
  let {
    isDataRoute: l
  } = N.useContext(nu);
  return l ? oA() : qM();
}
function qM() {
  Jv() || (process.env.NODE_ENV !== "production" ? jt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : jt(!1));
  let l = N.useContext(Gv), {
    basename: s,
    future: f,
    navigator: p
  } = N.useContext(xo), {
    matches: m
  } = N.useContext(nu), {
    pathname: g
  } = Od(), v = JSON.stringify(Uw(m, f.v7_relativeSplatPath)), x = N.useRef(!1);
  return Pw(() => {
    x.current = !0;
  }), N.useCallback(function(w, k) {
    if (k === void 0 && (k = {}), process.env.NODE_ENV !== "production" && cl(x.current, Fw), !x.current)
      return;
    if (typeof w == "number") {
      p.go(w);
      return;
    }
    let O = jw(w, JSON.parse(v), g, k.relative === "path");
    l == null && s !== "/" && (O.pathname = O.pathname === "/" ? s : Zl([s, O.pathname])), (k.replace ? p.replace : p.push)(O, k.state, k);
  }, [s, p, v, g, l]);
}
function Zv(l, s) {
  let {
    relative: f
  } = s === void 0 ? {} : s, {
    future: p
  } = N.useContext(xo), {
    matches: m
  } = N.useContext(nu), {
    pathname: g
  } = Od(), v = JSON.stringify(Uw(m, p.v7_relativeSplatPath));
  return N.useMemo(() => jw(l, JSON.parse(v), g, f === "path"), [l, v, g, f]);
}
function KM(l, s) {
  return QM(l, s);
}
function QM(l, s, f, p) {
  Jv() || (process.env.NODE_ENV !== "production" ? jt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : jt(!1));
  let {
    navigator: m
  } = N.useContext(xo), {
    matches: g
  } = N.useContext(nu), v = g[g.length - 1], x = v ? v.params : {}, b = v ? v.pathname : "/", w = v ? v.pathnameBase : "/", k = v && v.route;
  if (process.env.NODE_ENV !== "production") {
    let ie = k && k.path || "";
    Bw(b, !k || ie.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + b + '" (under <Route path="' + ie + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + ie + '"> to <Route ') + ('path="' + (ie === "/" ? "*" : ie + "/*") + '">.'));
  }
  let O = Od(), U;
  if (s) {
    var V;
    let ie = typeof s == "string" ? _d(s) : s;
    w === "/" || (V = ie.pathname) != null && V.startsWith(w) || (process.env.NODE_ENV !== "production" ? jt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + w + '" ') + ('but pathname "' + ie.pathname + '" was given in the `location` prop.')) : jt(!1)), U = ie;
  } else
    U = O;
  let B = U.pathname || "/", $ = B;
  if (w !== "/") {
    let ie = w.replace(/^\//, "").split("/");
    $ = "/" + B.replace(/^\//, "").split("/").slice(ie.length).join("/");
  }
  let Q = TM(l, {
    pathname: $
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && cl(k || Q != null, 'No routes matched location "' + U.pathname + U.search + U.hash + '" '), process.env.NODE_ENV !== "production" && cl(Q == null || Q[Q.length - 1].route.element !== void 0 || Q[Q.length - 1].route.Component !== void 0 || Q[Q.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + U.pathname + U.search + U.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let pe = eA(Q && Q.map((ie) => Object.assign({}, ie, {
    params: Object.assign({}, x, ie.params),
    pathname: Zl([
      w,
      // Re-encode pathnames that were decoded inside matchRoutes
      m.encodeLocation ? m.encodeLocation(ie.pathname).pathname : ie.pathname
    ]),
    pathnameBase: ie.pathnameBase === "/" ? w : Zl([
      w,
      // Re-encode pathnames that were decoded inside matchRoutes
      m.encodeLocation ? m.encodeLocation(ie.pathnameBase).pathname : ie.pathnameBase
    ])
  })), g, f, p);
  return s && pe ? /* @__PURE__ */ N.createElement(Xv.Provider, {
    value: {
      location: Yv({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, U),
      navigationType: gs.Pop
    }
  }, pe) : pe;
}
function GM() {
  let l = iA(), s = VM(l) ? l.status + " " + l.statusText : l instanceof Error ? l.message : JSON.stringify(l), f = l instanceof Error ? l.stack : null, p = "rgba(200,200,200, 0.5)", m = {
    padding: "0.5rem",
    backgroundColor: p
  }, g = {
    padding: "2px 4px",
    backgroundColor: p
  }, v = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", l), v = /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ N.createElement("code", {
    style: g
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ N.createElement("code", {
    style: g
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ N.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, s), f ? /* @__PURE__ */ N.createElement("pre", {
    style: m
  }, f) : null, v);
}
const XM = /* @__PURE__ */ N.createElement(GM, null);
class JM extends N.Component {
  constructor(s) {
    super(s), this.state = {
      location: s.location,
      revalidation: s.revalidation,
      error: s.error
    };
  }
  static getDerivedStateFromError(s) {
    return {
      error: s
    };
  }
  static getDerivedStateFromProps(s, f) {
    return f.location !== s.location || f.revalidation !== "idle" && s.revalidation === "idle" ? {
      error: s.error,
      location: s.location,
      revalidation: s.revalidation
    } : {
      error: s.error !== void 0 ? s.error : f.error,
      location: f.location,
      revalidation: s.revalidation || f.revalidation
    };
  }
  componentDidCatch(s, f) {
    console.error("React Router caught the following error during render", s, f);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ N.createElement(nu.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ N.createElement(OC.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function ZM(l) {
  let {
    routeContext: s,
    match: f,
    children: p
  } = l, m = N.useContext(Gv);
  return m && m.static && m.staticContext && (f.route.errorElement || f.route.ErrorBoundary) && (m.staticContext._deepestRenderedBoundaryId = f.route.id), /* @__PURE__ */ N.createElement(nu.Provider, {
    value: s
  }, p);
}
function eA(l, s, f, p) {
  var m;
  if (s === void 0 && (s = []), f === void 0 && (f = null), p === void 0 && (p = null), l == null) {
    var g;
    if ((g = f) != null && g.errors)
      l = f.matches;
    else
      return null;
  }
  let v = l, x = (m = f) == null ? void 0 : m.errors;
  if (x != null) {
    let k = v.findIndex((O) => O.route.id && (x == null ? void 0 : x[O.route.id]) !== void 0);
    k >= 0 || (process.env.NODE_ENV !== "production" ? jt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(x).join(",")) : jt(!1)), v = v.slice(0, Math.min(v.length, k + 1));
  }
  let b = !1, w = -1;
  if (f && p && p.v7_partialHydration)
    for (let k = 0; k < v.length; k++) {
      let O = v[k];
      if ((O.route.HydrateFallback || O.route.hydrateFallbackElement) && (w = k), O.route.id) {
        let {
          loaderData: U,
          errors: V
        } = f, B = O.route.loader && U[O.route.id] === void 0 && (!V || V[O.route.id] === void 0);
        if (O.route.lazy || B) {
          b = !0, w >= 0 ? v = v.slice(0, w + 1) : v = [v[0]];
          break;
        }
      }
    }
  return v.reduceRight((k, O, U) => {
    let V, B = !1, $ = null, Q = null;
    f && (V = x && O.route.id ? x[O.route.id] : void 0, $ = O.route.errorElement || XM, b && (w < 0 && U === 0 ? (Bw("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), B = !0, Q = null) : w === U && (B = !0, Q = O.route.hydrateFallbackElement || null)));
    let pe = s.concat(v.slice(0, U + 1)), ie = () => {
      let ae;
      return V ? ae = $ : B ? ae = Q : O.route.Component ? ae = /* @__PURE__ */ N.createElement(O.route.Component, null) : O.route.element ? ae = O.route.element : ae = k, /* @__PURE__ */ N.createElement(ZM, {
        match: O,
        routeContext: {
          outlet: k,
          matches: pe,
          isDataRoute: f != null
        },
        children: ae
      });
    };
    return f && (O.route.ErrorBoundary || O.route.errorElement || U === 0) ? /* @__PURE__ */ N.createElement(JM, {
      location: f.location,
      revalidation: f.revalidation,
      component: $,
      error: V,
      children: ie(),
      routeContext: {
        outlet: null,
        matches: pe,
        isDataRoute: !0
      }
    }) : ie();
  }, null);
}
var Hw = /* @__PURE__ */ function(l) {
  return l.UseBlocker = "useBlocker", l.UseRevalidator = "useRevalidator", l.UseNavigateStable = "useNavigate", l;
}(Hw || {}), Wv = /* @__PURE__ */ function(l) {
  return l.UseBlocker = "useBlocker", l.UseLoaderData = "useLoaderData", l.UseActionData = "useActionData", l.UseRouteError = "useRouteError", l.UseNavigation = "useNavigation", l.UseRouteLoaderData = "useRouteLoaderData", l.UseMatches = "useMatches", l.UseRevalidator = "useRevalidator", l.UseNavigateStable = "useNavigate", l.UseRouteId = "useRouteId", l;
}(Wv || {});
function DC(l) {
  return l + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function tA(l) {
  let s = N.useContext(Gv);
  return s || (process.env.NODE_ENV !== "production" ? jt(!1, DC(l)) : jt(!1)), s;
}
function nA(l) {
  let s = N.useContext(_C);
  return s || (process.env.NODE_ENV !== "production" ? jt(!1, DC(l)) : jt(!1)), s;
}
function rA(l) {
  let s = N.useContext(nu);
  return s || (process.env.NODE_ENV !== "production" ? jt(!1, DC(l)) : jt(!1)), s;
}
function kC(l) {
  let s = rA(l), f = s.matches[s.matches.length - 1];
  return f.route.id || (process.env.NODE_ENV !== "production" ? jt(!1, l + ' can only be used on routes that contain a unique "id"') : jt(!1)), f.route.id;
}
function aA() {
  return kC(Wv.UseRouteId);
}
function iA() {
  var l;
  let s = N.useContext(OC), f = nA(Wv.UseRouteError), p = kC(Wv.UseRouteError);
  return s !== void 0 ? s : (l = f.errors) == null ? void 0 : l[p];
}
function oA() {
  let {
    router: l
  } = tA(Hw.UseNavigateStable), s = kC(Wv.UseNavigateStable), f = N.useRef(!1);
  return Pw(() => {
    f.current = !0;
  }), N.useCallback(function(m, g) {
    g === void 0 && (g = {}), process.env.NODE_ENV !== "production" && cl(f.current, Fw), f.current && (typeof m == "number" ? l.navigate(m) : l.navigate(m, Yv({
      fromRouteId: s
    }, g)));
  }, [l, s]);
}
const Kb = {};
function Bw(l, s, f) {
  !s && !Kb[l] && (Kb[l] = !0, process.env.NODE_ENV !== "production" && cl(!1, f));
}
function cC(l) {
  process.env.NODE_ENV !== "production" ? jt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : jt(!1);
}
function lA(l) {
  let {
    basename: s = "/",
    children: f = null,
    location: p,
    navigationType: m = gs.Pop,
    navigator: g,
    static: v = !1,
    future: x
  } = l;
  Jv() && (process.env.NODE_ENV !== "production" ? jt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : jt(!1));
  let b = s.replace(/^\/*/, "/"), w = N.useMemo(() => ({
    basename: b,
    navigator: g,
    static: v,
    future: Yv({
      v7_relativeSplatPath: !1
    }, x)
  }), [b, x, g, v]);
  typeof p == "string" && (p = _d(p));
  let {
    pathname: k = "/",
    search: O = "",
    hash: U = "",
    state: V = null,
    key: B = "default"
  } = p, $ = N.useMemo(() => {
    let Q = Ss(k, b);
    return Q == null ? null : {
      location: {
        pathname: Q,
        search: O,
        hash: U,
        state: V,
        key: B
      },
      navigationType: m
    };
  }, [b, k, O, U, V, B, m]);
  return process.env.NODE_ENV !== "production" && cl($ != null, '<Router basename="' + b + '"> is not able to match the URL ' + ('"' + k + O + U + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), $ == null ? null : /* @__PURE__ */ N.createElement(xo.Provider, {
    value: w
  }, /* @__PURE__ */ N.createElement(Xv.Provider, {
    children: f,
    value: $
  }));
}
function uA(l) {
  let {
    children: s,
    location: f
  } = l;
  return KM(fC(s), f);
}
new Promise(() => {
});
function fC(l, s) {
  s === void 0 && (s = []);
  let f = [];
  return N.Children.forEach(l, (p, m) => {
    if (!/* @__PURE__ */ N.isValidElement(p))
      return;
    let g = [...s, m];
    if (p.type === N.Fragment) {
      f.push.apply(f, fC(p.props.children, g));
      return;
    }
    p.type !== cC && (process.env.NODE_ENV !== "production" ? jt(!1, "[" + (typeof p.type == "string" ? p.type : p.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : jt(!1)), !p.props.index || !p.props.children || (process.env.NODE_ENV !== "production" ? jt(!1, "An index route cannot have child routes.") : jt(!1));
    let v = {
      id: p.props.id || g.join("-"),
      caseSensitive: p.props.caseSensitive,
      element: p.props.element,
      Component: p.props.Component,
      index: p.props.index,
      path: p.props.path,
      loader: p.props.loader,
      action: p.props.action,
      errorElement: p.props.errorElement,
      ErrorBoundary: p.props.ErrorBoundary,
      hasErrorBoundary: p.props.ErrorBoundary != null || p.props.errorElement != null,
      shouldRevalidate: p.props.shouldRevalidate,
      handle: p.props.handle,
      lazy: p.props.lazy
    };
    p.props.children && (v.children = fC(p.props.children, g)), f.push(v);
  }), f;
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bd() {
  return bd = Object.assign ? Object.assign.bind() : function(l) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var p in f)
        Object.prototype.hasOwnProperty.call(f, p) && (l[p] = f[p]);
    }
    return l;
  }, bd.apply(this, arguments);
}
function NC(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
const Xy = "get", Jy = "application/x-www-form-urlencoded";
function og(l) {
  return l != null && typeof l.tagName == "string";
}
function sA(l) {
  return og(l) && l.tagName.toLowerCase() === "button";
}
function cA(l) {
  return og(l) && l.tagName.toLowerCase() === "form";
}
function fA(l) {
  return og(l) && l.tagName.toLowerCase() === "input";
}
function dA(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function pA(l, s) {
  return l.button === 0 && // Ignore everything but left clicks
  (!s || s === "_self") && // Let browser handle "target=_blank" etc.
  !dA(l);
}
let qy = null;
function vA() {
  if (qy === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), qy = !1;
    } catch {
      qy = !0;
    }
  return qy;
}
const hA = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function $0(l) {
  return l != null && !hA.has(l) ? (process.env.NODE_ENV !== "production" && cl(!1, '"' + l + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Jy + '"')), null) : l;
}
function mA(l, s) {
  let f, p, m, g, v;
  if (cA(l)) {
    let x = l.getAttribute("action");
    p = x ? Ss(x, s) : null, f = l.getAttribute("method") || Xy, m = $0(l.getAttribute("enctype")) || Jy, g = new FormData(l);
  } else if (sA(l) || fA(l) && (l.type === "submit" || l.type === "image")) {
    let x = l.form;
    if (x == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let b = l.getAttribute("formaction") || x.getAttribute("action");
    if (p = b ? Ss(b, s) : null, f = l.getAttribute("formmethod") || x.getAttribute("method") || Xy, m = $0(l.getAttribute("formenctype")) || $0(x.getAttribute("enctype")) || Jy, g = new FormData(x, l), !vA()) {
      let {
        name: w,
        type: k,
        value: O
      } = l;
      if (k === "image") {
        let U = w ? w + "." : "";
        g.append(U + "x", "0"), g.append(U + "y", "0");
      } else
        w && g.append(w, O);
    }
  } else {
    if (og(l))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    f = Xy, p = null, m = Jy, v = l;
  }
  return g && m === "text/plain" && (v = g, g = void 0), {
    action: p,
    method: f.toLowerCase(),
    encType: m,
    formData: g,
    body: v
  };
}
const yA = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], gA = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], SA = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], EA = "6";
try {
  window.__reactRouterVersion = EA;
} catch {
}
const Vw = /* @__PURE__ */ N.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Vw.displayName = "ViewTransition");
const CA = /* @__PURE__ */ N.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (CA.displayName = "Fetchers");
const RA = "startTransition", Qb = dM[RA];
function TA(l) {
  let {
    basename: s,
    children: f,
    future: p,
    window: m
  } = l, g = N.useRef();
  g.current == null && (g.current = EM({
    window: m,
    v5Compat: !0
  }));
  let v = g.current, [x, b] = N.useState({
    action: v.action,
    location: v.location
  }), {
    v7_startTransition: w
  } = p || {}, k = N.useCallback((O) => {
    w && Qb ? Qb(() => b(O)) : b(O);
  }, [b, w]);
  return N.useLayoutEffect(() => v.listen(k), [v, k]), /* @__PURE__ */ N.createElement(lA, {
    basename: s,
    children: f,
    location: x.location,
    navigationType: x.action,
    navigator: v,
    future: p
  });
}
process.env.NODE_ENV;
const xA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bA = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Vv = /* @__PURE__ */ N.forwardRef(function(s, f) {
  let {
    onClick: p,
    relative: m,
    reloadDocument: g,
    replace: v,
    state: x,
    target: b,
    to: w,
    preventScrollReset: k,
    unstable_viewTransition: O
  } = s, U = NC(s, yA), {
    basename: V
  } = N.useContext(xo), B, $ = !1;
  if (typeof w == "string" && bA.test(w) && (B = w, xA))
    try {
      let ae = new URL(window.location.href), ce = w.startsWith("//") ? new URL(ae.protocol + w) : new URL(w), J = Ss(ce.pathname, V);
      ce.origin === ae.origin && J != null ? w = J + ce.search + ce.hash : $ = !0;
    } catch {
      process.env.NODE_ENV !== "production" && cl(!1, '<Link to="' + w + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let Q = YM(w, {
    relative: m
  }), pe = DA(w, {
    replace: v,
    state: x,
    target: b,
    preventScrollReset: k,
    relative: m,
    unstable_viewTransition: O
  });
  function ie(ae) {
    p && p(ae), ae.defaultPrevented || pe(ae);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ N.createElement("a", bd({}, U, {
      href: B || Q,
      onClick: $ || g ? p : ie,
      ref: f,
      target: b
    }))
  );
});
process.env.NODE_ENV !== "production" && (Vv.displayName = "Link");
const wA = /* @__PURE__ */ N.forwardRef(function(s, f) {
  let {
    "aria-current": p = "page",
    caseSensitive: m = !1,
    className: g = "",
    end: v = !1,
    style: x,
    to: b,
    unstable_viewTransition: w,
    children: k
  } = s, O = NC(s, gA), U = Zv(b, {
    relative: O.relative
  }), V = Od(), B = N.useContext(_C), {
    navigator: $,
    basename: Q
  } = N.useContext(xo), pe = B != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  UA(U) && w === !0, ie = $.encodeLocation ? $.encodeLocation(U).pathname : U.pathname, ae = V.pathname, ce = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
  m || (ae = ae.toLowerCase(), ce = ce ? ce.toLowerCase() : null, ie = ie.toLowerCase()), ce && Q && (ce = Ss(ce, Q) || ce);
  const J = ie !== "/" && ie.endsWith("/") ? ie.length - 1 : ie.length;
  let _e = ae === ie || !v && ae.startsWith(ie) && ae.charAt(J) === "/", Me = ce != null && (ce === ie || !v && ce.startsWith(ie) && ce.charAt(ie.length) === "/"), vt = {
    isActive: _e,
    isPending: Me,
    isTransitioning: pe
  }, Wt = _e ? p : void 0, xt;
  typeof g == "function" ? xt = g(vt) : xt = [g, _e ? "active" : null, Me ? "pending" : null, pe ? "transitioning" : null].filter(Boolean).join(" ");
  let gt = typeof x == "function" ? x(vt) : x;
  return /* @__PURE__ */ N.createElement(Vv, bd({}, O, {
    "aria-current": Wt,
    className: xt,
    ref: f,
    style: gt,
    to: b,
    unstable_viewTransition: w
  }), typeof k == "function" ? k(vt) : k);
});
process.env.NODE_ENV !== "production" && (wA.displayName = "NavLink");
const _A = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    fetcherKey: f,
    navigate: p,
    reloadDocument: m,
    replace: g,
    state: v,
    method: x = Xy,
    action: b,
    onSubmit: w,
    relative: k,
    preventScrollReset: O,
    unstable_viewTransition: U
  } = l, V = NC(l, SA), B = MA(), $ = AA(b, {
    relative: k
  }), Q = x.toLowerCase() === "get" ? "get" : "post", pe = (ie) => {
    if (w && w(ie), ie.defaultPrevented)
      return;
    ie.preventDefault();
    let ae = ie.nativeEvent.submitter, ce = (ae == null ? void 0 : ae.getAttribute("formmethod")) || x;
    B(ae || ie.currentTarget, {
      fetcherKey: f,
      method: ce,
      navigate: p,
      replace: g,
      state: v,
      relative: k,
      preventScrollReset: O,
      unstable_viewTransition: U
    });
  };
  return /* @__PURE__ */ N.createElement("form", bd({
    ref: s,
    method: Q,
    action: $,
    onSubmit: m ? w : pe
  }, V));
});
process.env.NODE_ENV !== "production" && (_A.displayName = "Form");
process.env.NODE_ENV;
var tg;
(function(l) {
  l.UseScrollRestoration = "useScrollRestoration", l.UseSubmit = "useSubmit", l.UseSubmitFetcher = "useSubmitFetcher", l.UseFetcher = "useFetcher", l.useViewTransitionState = "useViewTransitionState";
})(tg || (tg = {}));
var Gb;
(function(l) {
  l.UseFetcher = "useFetcher", l.UseFetchers = "useFetchers", l.UseScrollRestoration = "useScrollRestoration";
})(Gb || (Gb = {}));
function OA(l) {
  return l + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $w(l) {
  let s = N.useContext(Gv);
  return s || (process.env.NODE_ENV !== "production" ? jt(!1, OA(l)) : jt(!1)), s;
}
function DA(l, s) {
  let {
    target: f,
    replace: p,
    state: m,
    preventScrollReset: g,
    relative: v,
    unstable_viewTransition: x
  } = s === void 0 ? {} : s, b = WM(), w = Od(), k = Zv(l, {
    relative: v
  });
  return N.useCallback((O) => {
    if (pA(O, f)) {
      O.preventDefault();
      let U = p !== void 0 ? p : Iv(w) === Iv(k);
      b(l, {
        replace: U,
        state: m,
        preventScrollReset: g,
        relative: v,
        unstable_viewTransition: x
      });
    }
  }, [w, b, k, p, m, f, l, g, v, x]);
}
function kA() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let NA = 0, LA = () => "__" + String(++NA) + "__";
function MA() {
  let {
    router: l
  } = $w(tg.UseSubmit), {
    basename: s
  } = N.useContext(xo), f = aA();
  return N.useCallback(function(p, m) {
    m === void 0 && (m = {}), kA();
    let {
      action: g,
      method: v,
      encType: x,
      formData: b,
      body: w
    } = mA(p, s);
    if (m.navigate === !1) {
      let k = m.fetcherKey || LA();
      l.fetch(k, f, m.action || g, {
        preventScrollReset: m.preventScrollReset,
        formData: b,
        body: w,
        formMethod: m.method || v,
        formEncType: m.encType || x,
        unstable_flushSync: m.unstable_flushSync
      });
    } else
      l.navigate(m.action || g, {
        preventScrollReset: m.preventScrollReset,
        formData: b,
        body: w,
        formMethod: m.method || v,
        formEncType: m.encType || x,
        replace: m.replace,
        state: m.state,
        fromRouteId: f,
        unstable_flushSync: m.unstable_flushSync,
        unstable_viewTransition: m.unstable_viewTransition
      });
  }, [l, s, f]);
}
function AA(l, s) {
  let {
    relative: f
  } = s === void 0 ? {} : s, {
    basename: p
  } = N.useContext(xo), m = N.useContext(nu);
  m || (process.env.NODE_ENV !== "production" ? jt(!1, "useFormAction must be used inside a RouteContext") : jt(!1));
  let [g] = m.matches.slice(-1), v = bd({}, Zv(l || ".", {
    relative: f
  })), x = Od();
  if (l == null) {
    v.search = x.search;
    let b = new URLSearchParams(v.search);
    b.has("index") && b.get("index") === "" && (b.delete("index"), v.search = b.toString() ? "?" + b.toString() : "");
  }
  return (!l || l === ".") && g.route.index && (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"), p !== "/" && (v.pathname = v.pathname === "/" ? p : Zl([p, v.pathname])), Iv(v);
}
function UA(l, s) {
  s === void 0 && (s = {});
  let f = N.useContext(Vw);
  f == null && (process.env.NODE_ENV !== "production" ? jt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : jt(!1));
  let {
    basename: p
  } = $w(tg.useViewTransitionState), m = Zv(l, {
    relative: s.relative
  });
  if (!f.isTransitioning)
    return !1;
  let g = Ss(f.currentLocation.pathname, p) || f.currentLocation.pathname, v = Ss(f.nextLocation.pathname, p) || f.nextLocation.pathname;
  return sC(m.pathname, v) != null || sC(m.pathname, g) != null;
}
var Iw = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(l) {
  (function() {
    var s = {}.hasOwnProperty;
    function f() {
      for (var g = "", v = 0; v < arguments.length; v++) {
        var x = arguments[v];
        x && (g = m(g, p(x)));
      }
      return g;
    }
    function p(g) {
      if (typeof g == "string" || typeof g == "number")
        return g;
      if (typeof g != "object")
        return "";
      if (Array.isArray(g))
        return f.apply(null, g);
      if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
        return g.toString();
      var v = "";
      for (var x in g)
        s.call(g, x) && g[x] && (v = m(v, x));
      return v;
    }
    function m(g, v) {
      return v ? g ? g + " " + v : g + v : g;
    }
    l.exports ? (f.default = f, l.exports = f) : window.classNames = f;
  })();
})(Iw);
var jA = Iw.exports;
const dt = /* @__PURE__ */ Qv(jA), zA = ["xxl", "xl", "lg", "md", "sm", "xs"], FA = "xs", lg = /* @__PURE__ */ N.createContext({
  prefixes: {},
  breakpoints: zA,
  minBreakpoint: FA
});
function _t(l, s) {
  const {
    prefixes: f
  } = N.useContext(lg);
  return l || f[s] || s;
}
function Yw() {
  const {
    breakpoints: l
  } = N.useContext(lg);
  return l;
}
function Ww() {
  const {
    minBreakpoint: l
  } = N.useContext(lg);
  return l;
}
function PA() {
  const {
    dir: l
  } = N.useContext(lg);
  return l === "rtl";
}
const LC = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  fluid: s = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: f = "div",
  className: p,
  ...m
}, g) => {
  const v = _t(l, "container"), x = typeof s == "string" ? `-${s}` : "-fluid";
  return /* @__PURE__ */ X.jsx(f, {
    ref: g,
    ...m,
    className: dt(p, s ? `${v}${x}` : v)
  });
});
LC.displayName = "Container";
var Xb = { exports: {} }, dC = { exports: {} };
(function(l, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = f;
  function f(p) {
    function m(v, x, b, w, k, O) {
      var U = w || "<<anonymous>>", V = O || b;
      if (x[b] == null)
        return v ? new Error("Required " + k + " `" + V + "` was not specified " + ("in `" + U + "`.")) : null;
      for (var B = arguments.length, $ = Array(B > 6 ? B - 6 : 0), Q = 6; Q < B; Q++)
        $[Q - 6] = arguments[Q];
      return p.apply(void 0, [x, b, U, k, V].concat($));
    }
    var g = m.bind(null, !1);
    return g.isRequired = m.bind(null, !0), g;
  }
  l.exports = s.default;
})(dC, dC.exports);
var HA = dC.exports;
(function(l, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = g;
  var f = HA, p = m(f);
  function m(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function g() {
    for (var v = arguments.length, x = Array(v), b = 0; b < v; b++)
      x[b] = arguments[b];
    function w() {
      for (var k = arguments.length, O = Array(k), U = 0; U < k; U++)
        O[U] = arguments[U];
      var V = null;
      return x.forEach(function(B) {
        if (V == null) {
          var $ = B.apply(void 0, O);
          $ != null && (V = $);
        }
      }), V;
    }
    return (0, p.default)(w);
  }
  l.exports = s.default;
})(Xb, Xb.exports);
function pC() {
  return pC = Object.assign ? Object.assign.bind() : function(l) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var p in f)
        Object.prototype.hasOwnProperty.call(f, p) && (l[p] = f[p]);
    }
    return l;
  }, pC.apply(this, arguments);
}
function qw(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
function Jb(l) {
  return "default" + l.charAt(0).toUpperCase() + l.substr(1);
}
function BA(l) {
  var s = VA(l, "string");
  return typeof s == "symbol" ? s : String(s);
}
function VA(l, s) {
  if (typeof l != "object" || l === null)
    return l;
  var f = l[Symbol.toPrimitive];
  if (f !== void 0) {
    var p = f.call(l, s);
    if (typeof p != "object")
      return p;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(l);
}
function $A(l, s, f) {
  var p = N.useRef(l !== void 0), m = N.useState(s), g = m[0], v = m[1], x = l !== void 0, b = p.current;
  return p.current = x, !x && b && g !== s && v(s), [x ? l : g, N.useCallback(function(w) {
    for (var k = arguments.length, O = new Array(k > 1 ? k - 1 : 0), U = 1; U < k; U++)
      O[U - 1] = arguments[U];
    f && f.apply(void 0, [w].concat(O)), v(w);
  }, [f])];
}
function Kw(l, s) {
  return Object.keys(s).reduce(function(f, p) {
    var m, g = f, v = g[Jb(p)], x = g[p], b = qw(g, [Jb(p), p].map(BA)), w = s[p], k = $A(x, v, l[w]), O = k[0], U = k[1];
    return pC({}, b, (m = {}, m[p] = O, m[w] = U, m));
  }, l);
}
function vC(l, s) {
  return vC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, m) {
    return p.__proto__ = m, p;
  }, vC(l, s);
}
function IA(l, s) {
  l.prototype = Object.create(s.prototype), l.prototype.constructor = l, vC(l, s);
}
var YA = Function.prototype.bind.call(Function.prototype.call, [].slice);
function _c(l, s) {
  return YA(l.querySelectorAll(s));
}
function WA() {
  const [, l] = N.useReducer((s) => !s, !1);
  return l;
}
const Zb = (l) => !l || typeof l == "function" ? l : (s) => {
  l.current = s;
};
function qA(l, s) {
  const f = Zb(l), p = Zb(s);
  return (m) => {
    f && f(m), p && p(m);
  };
}
function Dd(l, s) {
  return N.useMemo(() => qA(l, s), [l, s]);
}
const MC = /* @__PURE__ */ N.createContext(null);
MC.displayName = "NavContext";
const KA = /* @__PURE__ */ N.createContext(null), AC = (l, s = null) => l != null ? String(l) : s || null, ng = KA, Qw = /* @__PURE__ */ N.createContext(null), QA = "data-rr-ui-", GA = "rrUi";
function ug(l) {
  return `${QA}${l}`;
}
function XA(l) {
  return `${GA}${l}`;
}
function JA(l) {
  const s = N.useRef(l);
  return N.useEffect(() => {
    s.current = l;
  }, [l]), s;
}
function si(l) {
  const s = JA(l);
  return N.useCallback(function(...f) {
    return s.current && s.current(...f);
  }, [s]);
}
const ZA = ["as", "disabled"];
function eU(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
function tU(l) {
  return !l || l.trim() === "#";
}
function UC({
  tagName: l,
  disabled: s,
  href: f,
  target: p,
  rel: m,
  role: g,
  onClick: v,
  tabIndex: x = 0,
  type: b
}) {
  l || (f != null || p != null || m != null ? l = "a" : l = "button");
  const w = {
    tagName: l
  };
  if (l === "button")
    return [{
      type: b || "button",
      disabled: s
    }, w];
  const k = (U) => {
    if ((s || l === "a" && tU(f)) && U.preventDefault(), s) {
      U.stopPropagation();
      return;
    }
    v == null || v(U);
  }, O = (U) => {
    U.key === " " && (U.preventDefault(), k(U));
  };
  return l === "a" && (f || (f = "#"), s && (f = void 0)), [{
    role: g ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: s ? void 0 : x,
    href: f,
    target: l === "a" ? p : void 0,
    "aria-disabled": s || void 0,
    rel: l === "a" ? m : void 0,
    onClick: k,
    onKeyDown: O
  }, w];
}
const Gw = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    as: f,
    disabled: p
  } = l, m = eU(l, ZA);
  const [g, {
    tagName: v
  }] = UC(Object.assign({
    tagName: f,
    disabled: p
  }, m));
  return /* @__PURE__ */ X.jsx(v, Object.assign({}, m, g, {
    ref: s
  }));
});
Gw.displayName = "Button";
const nU = ["as", "active", "eventKey"];
function rU(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
function Xw({
  key: l,
  onClick: s,
  active: f,
  id: p,
  role: m,
  disabled: g
}) {
  const v = N.useContext(ng), x = N.useContext(MC), b = N.useContext(Qw);
  let w = f;
  const k = {
    role: m
  };
  if (x) {
    !m && x.role === "tablist" && (k.role = "tab");
    const O = x.getControllerId(l ?? null), U = x.getControlledId(l ?? null);
    k[ug("event-key")] = l, k.id = O || p, w = f == null && l != null ? x.activeKey === l : f, (w || !(b != null && b.unmountOnExit) && !(b != null && b.mountOnEnter)) && (k["aria-controls"] = U);
  }
  return k.role === "tab" && (k["aria-selected"] = w, w || (k.tabIndex = -1), g && (k.tabIndex = -1, k["aria-disabled"] = !0)), k.onClick = si((O) => {
    g || (s == null || s(O), l != null && v && !O.isPropagationStopped() && v(l, O));
  }), [k, {
    isActive: w
  }];
}
const Jw = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    as: f = Gw,
    active: p,
    eventKey: m
  } = l, g = rU(l, nU);
  const [v, x] = Xw(Object.assign({
    key: AC(m, g.href),
    active: p
  }, g));
  return v[ug("active")] = x.isActive, /* @__PURE__ */ X.jsx(f, Object.assign({}, g, v, {
    ref: s
  }));
});
Jw.displayName = "NavItem";
const aU = Jw, iU = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function oU(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
const ew = () => {
}, tw = ug("event-key"), Zw = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: f = "div",
    onSelect: p,
    activeKey: m,
    role: g,
    onKeyDown: v
  } = l, x = oU(l, iU);
  const b = WA(), w = N.useRef(!1), k = N.useContext(ng), O = N.useContext(Qw);
  let U, V;
  O && (g = g || "tablist", m = O.activeKey, U = O.getControlledId, V = O.getControllerId);
  const B = N.useRef(null), $ = (ae) => {
    const ce = B.current;
    if (!ce)
      return null;
    const J = _c(ce, `[${tw}]:not([aria-disabled=true])`), _e = ce.querySelector("[aria-selected=true]");
    if (!_e || _e !== document.activeElement)
      return null;
    const Me = J.indexOf(_e);
    if (Me === -1)
      return null;
    let vt = Me + ae;
    return vt >= J.length && (vt = 0), vt < 0 && (vt = J.length - 1), J[vt];
  }, Q = (ae, ce) => {
    ae != null && (p == null || p(ae, ce), k == null || k(ae, ce));
  }, pe = (ae) => {
    if (v == null || v(ae), !O)
      return;
    let ce;
    switch (ae.key) {
      case "ArrowLeft":
      case "ArrowUp":
        ce = $(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        ce = $(1);
        break;
      default:
        return;
    }
    ce && (ae.preventDefault(), Q(ce.dataset[XA("EventKey")] || null, ae), w.current = !0, b());
  };
  N.useEffect(() => {
    if (B.current && w.current) {
      const ae = B.current.querySelector(`[${tw}][aria-selected=true]`);
      ae == null || ae.focus();
    }
    w.current = !1;
  });
  const ie = Dd(s, B);
  return /* @__PURE__ */ X.jsx(ng.Provider, {
    value: Q,
    children: /* @__PURE__ */ X.jsx(MC.Provider, {
      value: {
        role: g,
        // used by NavLink to determine it's role
        activeKey: AC(m),
        getControlledId: U || ew,
        getControllerId: V || ew
      },
      children: /* @__PURE__ */ X.jsx(f, Object.assign({}, x, {
        onKeyDown: pe,
        ref: ie,
        role: g
      }))
    })
  });
});
Zw.displayName = "Nav";
const lU = Object.assign(Zw, {
  Item: aU
}), kc = /* @__PURE__ */ N.createContext(null);
kc.displayName = "NavbarContext";
const jC = /* @__PURE__ */ N.createContext(null);
jC.displayName = "CardHeaderContext";
const e1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "nav-item"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
e1.displayName = "NavItem";
function uU() {
  return N.useState(null);
}
function sU() {
  const l = N.useRef(!0), s = N.useRef(() => l.current);
  return N.useEffect(() => (l.current = !0, () => {
    l.current = !1;
  }), []), s.current;
}
function cU(l) {
  const s = N.useRef(null);
  return N.useEffect(() => {
    s.current = l;
  }), s.current;
}
const fU = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", dU = typeof document < "u", hC = dU || fU ? N.useLayoutEffect : N.useEffect, pU = ["onKeyDown"];
function vU(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
function hU(l) {
  return !l || l.trim() === "#";
}
const t1 = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    onKeyDown: f
  } = l, p = vU(l, pU);
  const [m] = UC(Object.assign({
    tagName: "a"
  }, p)), g = si((v) => {
    m.onKeyDown(v), f == null || f(v);
  });
  return hU(p.href) || p.role === "button" ? /* @__PURE__ */ X.jsx("a", Object.assign({
    ref: s
  }, p, m, {
    onKeyDown: g
  })) : /* @__PURE__ */ X.jsx("a", Object.assign({
    ref: s
  }, p, {
    onKeyDown: f
  }));
});
t1.displayName = "Anchor";
const n1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  as: f = t1,
  active: p,
  eventKey: m,
  disabled: g = !1,
  ...v
}, x) => {
  l = _t(l, "nav-link");
  const [b, w] = Xw({
    key: AC(m, v.href),
    active: p,
    disabled: g,
    ...v
  });
  return /* @__PURE__ */ X.jsx(f, {
    ...v,
    ...b,
    ref: x,
    disabled: g,
    className: dt(s, l, g && "disabled", w.isActive && "active")
  });
});
n1.displayName = "NavLink";
const r1 = /* @__PURE__ */ N.forwardRef((l, s) => {
  const {
    as: f = "div",
    bsPrefix: p,
    variant: m,
    fill: g = !1,
    justify: v = !1,
    navbar: x,
    navbarScroll: b,
    className: w,
    activeKey: k,
    ...O
  } = Kw(l, {
    activeKey: "onSelect"
  }), U = _t(p, "nav");
  let V, B, $ = !1;
  const Q = N.useContext(kc), pe = N.useContext(jC);
  return Q ? (V = Q.bsPrefix, $ = x ?? !0) : pe && ({
    cardHeaderBsPrefix: B
  } = pe), /* @__PURE__ */ X.jsx(lU, {
    as: f,
    ref: s,
    activeKey: k,
    className: dt(w, {
      [U]: !$,
      [`${V}-nav`]: $,
      [`${V}-nav-scroll`]: $ && b,
      [`${B}-${m}`]: !!B,
      [`${U}-${m}`]: !!m,
      [`${U}-fill`]: g,
      [`${U}-justified`]: v
    }),
    ...O
  });
});
r1.displayName = "Nav";
const nw = Object.assign(r1, {
  Item: e1,
  Link: n1
}), a1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  as: f,
  ...p
}, m) => {
  l = _t(l, "navbar-brand");
  const g = f || (p.href ? "a" : "span");
  return /* @__PURE__ */ X.jsx(g, {
    ...p,
    ref: m,
    className: dt(s, l)
  });
});
a1.displayName = "NavbarBrand";
function sg(l) {
  return l && l.ownerDocument || document;
}
function mU(l) {
  var s = sg(l);
  return s && s.defaultView || window;
}
function yU(l, s) {
  return mU(l).getComputedStyle(l, s);
}
var gU = /([A-Z])/g;
function SU(l) {
  return l.replace(gU, "-$1").toLowerCase();
}
var EU = /^ms-/;
function Ky(l) {
  return SU(l).replace(EU, "-ms-");
}
var CU = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function RU(l) {
  return !!(l && CU.test(l));
}
function eu(l, s) {
  var f = "", p = "";
  if (typeof s == "string")
    return l.style.getPropertyValue(Ky(s)) || yU(l).getPropertyValue(Ky(s));
  Object.keys(s).forEach(function(m) {
    var g = s[m];
    !g && g !== 0 ? l.style.removeProperty(Ky(m)) : RU(m) ? p += m + "(" + g + ") " : f += Ky(m) + ": " + g + ";";
  }), p && (f += "transform: " + p + ";"), l.style.cssText += ";" + f;
}
var mC = { exports: {} }, Qy = { exports: {} }, mn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rw;
function TU() {
  if (rw)
    return mn;
  rw = 1;
  var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, f = l ? Symbol.for("react.portal") : 60106, p = l ? Symbol.for("react.fragment") : 60107, m = l ? Symbol.for("react.strict_mode") : 60108, g = l ? Symbol.for("react.profiler") : 60114, v = l ? Symbol.for("react.provider") : 60109, x = l ? Symbol.for("react.context") : 60110, b = l ? Symbol.for("react.async_mode") : 60111, w = l ? Symbol.for("react.concurrent_mode") : 60111, k = l ? Symbol.for("react.forward_ref") : 60112, O = l ? Symbol.for("react.suspense") : 60113, U = l ? Symbol.for("react.suspense_list") : 60120, V = l ? Symbol.for("react.memo") : 60115, B = l ? Symbol.for("react.lazy") : 60116, $ = l ? Symbol.for("react.block") : 60121, Q = l ? Symbol.for("react.fundamental") : 60117, pe = l ? Symbol.for("react.responder") : 60118, ie = l ? Symbol.for("react.scope") : 60119;
  function ae(J) {
    if (typeof J == "object" && J !== null) {
      var _e = J.$$typeof;
      switch (_e) {
        case s:
          switch (J = J.type, J) {
            case b:
            case w:
            case p:
            case g:
            case m:
            case O:
              return J;
            default:
              switch (J = J && J.$$typeof, J) {
                case x:
                case k:
                case B:
                case V:
                case v:
                  return J;
                default:
                  return _e;
              }
          }
        case f:
          return _e;
      }
    }
  }
  function ce(J) {
    return ae(J) === w;
  }
  return mn.AsyncMode = b, mn.ConcurrentMode = w, mn.ContextConsumer = x, mn.ContextProvider = v, mn.Element = s, mn.ForwardRef = k, mn.Fragment = p, mn.Lazy = B, mn.Memo = V, mn.Portal = f, mn.Profiler = g, mn.StrictMode = m, mn.Suspense = O, mn.isAsyncMode = function(J) {
    return ce(J) || ae(J) === b;
  }, mn.isConcurrentMode = ce, mn.isContextConsumer = function(J) {
    return ae(J) === x;
  }, mn.isContextProvider = function(J) {
    return ae(J) === v;
  }, mn.isElement = function(J) {
    return typeof J == "object" && J !== null && J.$$typeof === s;
  }, mn.isForwardRef = function(J) {
    return ae(J) === k;
  }, mn.isFragment = function(J) {
    return ae(J) === p;
  }, mn.isLazy = function(J) {
    return ae(J) === B;
  }, mn.isMemo = function(J) {
    return ae(J) === V;
  }, mn.isPortal = function(J) {
    return ae(J) === f;
  }, mn.isProfiler = function(J) {
    return ae(J) === g;
  }, mn.isStrictMode = function(J) {
    return ae(J) === m;
  }, mn.isSuspense = function(J) {
    return ae(J) === O;
  }, mn.isValidElementType = function(J) {
    return typeof J == "string" || typeof J == "function" || J === p || J === w || J === g || J === m || J === O || J === U || typeof J == "object" && J !== null && (J.$$typeof === B || J.$$typeof === V || J.$$typeof === v || J.$$typeof === x || J.$$typeof === k || J.$$typeof === Q || J.$$typeof === pe || J.$$typeof === ie || J.$$typeof === $);
  }, mn.typeOf = ae, mn;
}
var yn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aw;
function xU() {
  return aw || (aw = 1, process.env.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, f = l ? Symbol.for("react.portal") : 60106, p = l ? Symbol.for("react.fragment") : 60107, m = l ? Symbol.for("react.strict_mode") : 60108, g = l ? Symbol.for("react.profiler") : 60114, v = l ? Symbol.for("react.provider") : 60109, x = l ? Symbol.for("react.context") : 60110, b = l ? Symbol.for("react.async_mode") : 60111, w = l ? Symbol.for("react.concurrent_mode") : 60111, k = l ? Symbol.for("react.forward_ref") : 60112, O = l ? Symbol.for("react.suspense") : 60113, U = l ? Symbol.for("react.suspense_list") : 60120, V = l ? Symbol.for("react.memo") : 60115, B = l ? Symbol.for("react.lazy") : 60116, $ = l ? Symbol.for("react.block") : 60121, Q = l ? Symbol.for("react.fundamental") : 60117, pe = l ? Symbol.for("react.responder") : 60118, ie = l ? Symbol.for("react.scope") : 60119;
    function ae(xe) {
      return typeof xe == "string" || typeof xe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      xe === p || xe === w || xe === g || xe === m || xe === O || xe === U || typeof xe == "object" && xe !== null && (xe.$$typeof === B || xe.$$typeof === V || xe.$$typeof === v || xe.$$typeof === x || xe.$$typeof === k || xe.$$typeof === Q || xe.$$typeof === pe || xe.$$typeof === ie || xe.$$typeof === $);
    }
    function ce(xe) {
      if (typeof xe == "object" && xe !== null) {
        var Lt = xe.$$typeof;
        switch (Lt) {
          case s:
            var rn = xe.type;
            switch (rn) {
              case b:
              case w:
              case p:
              case g:
              case m:
              case O:
                return rn;
              default:
                var yt = rn && rn.$$typeof;
                switch (yt) {
                  case x:
                  case k:
                  case B:
                  case V:
                  case v:
                    return yt;
                  default:
                    return Lt;
                }
            }
          case f:
            return Lt;
        }
      }
    }
    var J = b, _e = w, Me = x, vt = v, Wt = s, xt = k, gt = p, Kt = B, Ye = V, tt = f, Ot = g, at = m, Oe = O, se = !1;
    function Ve(xe) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(xe) || ce(xe) === b;
    }
    function I(xe) {
      return ce(xe) === w;
    }
    function L(xe) {
      return ce(xe) === x;
    }
    function W(xe) {
      return ce(xe) === v;
    }
    function he(xe) {
      return typeof xe == "object" && xe !== null && xe.$$typeof === s;
    }
    function me(xe) {
      return ce(xe) === k;
    }
    function Re(xe) {
      return ce(xe) === p;
    }
    function we(xe) {
      return ce(xe) === B;
    }
    function ke(xe) {
      return ce(xe) === V;
    }
    function Ae(xe) {
      return ce(xe) === f;
    }
    function Ue(xe) {
      return ce(xe) === g;
    }
    function Ie(xe) {
      return ce(xe) === m;
    }
    function Pt(xe) {
      return ce(xe) === O;
    }
    yn.AsyncMode = J, yn.ConcurrentMode = _e, yn.ContextConsumer = Me, yn.ContextProvider = vt, yn.Element = Wt, yn.ForwardRef = xt, yn.Fragment = gt, yn.Lazy = Kt, yn.Memo = Ye, yn.Portal = tt, yn.Profiler = Ot, yn.StrictMode = at, yn.Suspense = Oe, yn.isAsyncMode = Ve, yn.isConcurrentMode = I, yn.isContextConsumer = L, yn.isContextProvider = W, yn.isElement = he, yn.isForwardRef = me, yn.isFragment = Re, yn.isLazy = we, yn.isMemo = ke, yn.isPortal = Ae, yn.isProfiler = Ue, yn.isStrictMode = Ie, yn.isSuspense = Pt, yn.isValidElementType = ae, yn.typeOf = ce;
  }()), yn;
}
var iw;
function i1() {
  return iw || (iw = 1, process.env.NODE_ENV === "production" ? Qy.exports = TU() : Qy.exports = xU()), Qy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var I0, ow;
function bU() {
  if (ow)
    return I0;
  ow = 1;
  var l = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function p(g) {
    if (g == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(g);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var g = new String("abc");
      if (g[5] = "de", Object.getOwnPropertyNames(g)[0] === "5")
        return !1;
      for (var v = {}, x = 0; x < 10; x++)
        v["_" + String.fromCharCode(x)] = x;
      var b = Object.getOwnPropertyNames(v).map(function(k) {
        return v[k];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        w[k] = k;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return I0 = m() ? Object.assign : function(g, v) {
    for (var x, b = p(g), w, k = 1; k < arguments.length; k++) {
      x = Object(arguments[k]);
      for (var O in x)
        s.call(x, O) && (b[O] = x[O]);
      if (l) {
        w = l(x);
        for (var U = 0; U < w.length; U++)
          f.call(x, w[U]) && (b[w[U]] = x[w[U]]);
      }
    }
    return b;
  }, I0;
}
var Y0, lw;
function zC() {
  if (lw)
    return Y0;
  lw = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Y0 = l, Y0;
}
var W0, uw;
function o1() {
  return uw || (uw = 1, W0 = Function.call.bind(Object.prototype.hasOwnProperty)), W0;
}
var q0, sw;
function wU() {
  if (sw)
    return q0;
  sw = 1;
  var l = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = zC(), f = {}, p = o1();
    l = function(g) {
      var v = "Warning: " + g;
      typeof console < "u" && console.error(v);
      try {
        throw new Error(v);
      } catch {
      }
    };
  }
  function m(g, v, x, b, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var k in g)
        if (p(g, k)) {
          var O;
          try {
            if (typeof g[k] != "function") {
              var U = Error(
                (b || "React class") + ": " + x + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw U.name = "Invariant Violation", U;
            }
            O = g[k](v, k, b, x, null, s);
          } catch (B) {
            O = B;
          }
          if (O && !(O instanceof Error) && l(
            (b || "React class") + ": type specification of " + x + " `" + k + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof O + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), O instanceof Error && !(O.message in f)) {
            f[O.message] = !0;
            var V = w ? w() : "";
            l(
              "Failed " + x + " type: " + O.message + (V ?? "")
            );
          }
        }
    }
  }
  return m.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, q0 = m, q0;
}
var K0, cw;
function _U() {
  if (cw)
    return K0;
  cw = 1;
  var l = i1(), s = bU(), f = zC(), p = o1(), m = wU(), g = function() {
  };
  process.env.NODE_ENV !== "production" && (g = function(x) {
    var b = "Warning: " + x;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function v() {
    return null;
  }
  return K0 = function(x, b) {
    var w = typeof Symbol == "function" && Symbol.iterator, k = "@@iterator";
    function O(I) {
      var L = I && (w && I[w] || I[k]);
      if (typeof L == "function")
        return L;
    }
    var U = "<<anonymous>>", V = {
      array: pe("array"),
      bigint: pe("bigint"),
      bool: pe("boolean"),
      func: pe("function"),
      number: pe("number"),
      object: pe("object"),
      string: pe("string"),
      symbol: pe("symbol"),
      any: ie(),
      arrayOf: ae,
      element: ce(),
      elementType: J(),
      instanceOf: _e,
      node: xt(),
      objectOf: vt,
      oneOf: Me,
      oneOfType: Wt,
      shape: Kt,
      exact: Ye
    };
    function B(I, L) {
      return I === L ? I !== 0 || 1 / I === 1 / L : I !== I && L !== L;
    }
    function $(I, L) {
      this.message = I, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    $.prototype = Error.prototype;
    function Q(I) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, W = 0;
      function he(Re, we, ke, Ae, Ue, Ie, Pt) {
        if (Ae = Ae || U, Ie = Ie || ke, Pt !== f) {
          if (b) {
            var xe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw xe.name = "Invariant Violation", xe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Lt = Ae + ":" + ke;
            !L[Lt] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (g(
              "You are manually calling a React.PropTypes validation function for the `" + Ie + "` prop on `" + Ae + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Lt] = !0, W++);
          }
        }
        return we[ke] == null ? Re ? we[ke] === null ? new $("The " + Ue + " `" + Ie + "` is marked as required " + ("in `" + Ae + "`, but its value is `null`.")) : new $("The " + Ue + " `" + Ie + "` is marked as required in " + ("`" + Ae + "`, but its value is `undefined`.")) : null : I(we, ke, Ae, Ue, Ie);
      }
      var me = he.bind(null, !1);
      return me.isRequired = he.bind(null, !0), me;
    }
    function pe(I) {
      function L(W, he, me, Re, we, ke) {
        var Ae = W[he], Ue = at(Ae);
        if (Ue !== I) {
          var Ie = Oe(Ae);
          return new $(
            "Invalid " + Re + " `" + we + "` of type " + ("`" + Ie + "` supplied to `" + me + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return Q(L);
    }
    function ie() {
      return Q(v);
    }
    function ae(I) {
      function L(W, he, me, Re, we) {
        if (typeof I != "function")
          return new $("Property `" + we + "` of component `" + me + "` has invalid PropType notation inside arrayOf.");
        var ke = W[he];
        if (!Array.isArray(ke)) {
          var Ae = at(ke);
          return new $("Invalid " + Re + " `" + we + "` of type " + ("`" + Ae + "` supplied to `" + me + "`, expected an array."));
        }
        for (var Ue = 0; Ue < ke.length; Ue++) {
          var Ie = I(ke, Ue, me, Re, we + "[" + Ue + "]", f);
          if (Ie instanceof Error)
            return Ie;
        }
        return null;
      }
      return Q(L);
    }
    function ce() {
      function I(L, W, he, me, Re) {
        var we = L[W];
        if (!x(we)) {
          var ke = at(we);
          return new $("Invalid " + me + " `" + Re + "` of type " + ("`" + ke + "` supplied to `" + he + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Q(I);
    }
    function J() {
      function I(L, W, he, me, Re) {
        var we = L[W];
        if (!l.isValidElementType(we)) {
          var ke = at(we);
          return new $("Invalid " + me + " `" + Re + "` of type " + ("`" + ke + "` supplied to `" + he + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Q(I);
    }
    function _e(I) {
      function L(W, he, me, Re, we) {
        if (!(W[he] instanceof I)) {
          var ke = I.name || U, Ae = Ve(W[he]);
          return new $("Invalid " + Re + " `" + we + "` of type " + ("`" + Ae + "` supplied to `" + me + "`, expected ") + ("instance of `" + ke + "`."));
        }
        return null;
      }
      return Q(L);
    }
    function Me(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? g(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : g("Invalid argument supplied to oneOf, expected an array.")), v;
      function L(W, he, me, Re, we) {
        for (var ke = W[he], Ae = 0; Ae < I.length; Ae++)
          if (B(ke, I[Ae]))
            return null;
        var Ue = JSON.stringify(I, function(Pt, xe) {
          var Lt = Oe(xe);
          return Lt === "symbol" ? String(xe) : xe;
        });
        return new $("Invalid " + Re + " `" + we + "` of value `" + String(ke) + "` " + ("supplied to `" + me + "`, expected one of " + Ue + "."));
      }
      return Q(L);
    }
    function vt(I) {
      function L(W, he, me, Re, we) {
        if (typeof I != "function")
          return new $("Property `" + we + "` of component `" + me + "` has invalid PropType notation inside objectOf.");
        var ke = W[he], Ae = at(ke);
        if (Ae !== "object")
          return new $("Invalid " + Re + " `" + we + "` of type " + ("`" + Ae + "` supplied to `" + me + "`, expected an object."));
        for (var Ue in ke)
          if (p(ke, Ue)) {
            var Ie = I(ke, Ue, me, Re, we + "." + Ue, f);
            if (Ie instanceof Error)
              return Ie;
          }
        return null;
      }
      return Q(L);
    }
    function Wt(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && g("Invalid argument supplied to oneOfType, expected an instance of array."), v;
      for (var L = 0; L < I.length; L++) {
        var W = I[L];
        if (typeof W != "function")
          return g(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(W) + " at index " + L + "."
          ), v;
      }
      function he(me, Re, we, ke, Ae) {
        for (var Ue = [], Ie = 0; Ie < I.length; Ie++) {
          var Pt = I[Ie], xe = Pt(me, Re, we, ke, Ae, f);
          if (xe == null)
            return null;
          xe.data && p(xe.data, "expectedType") && Ue.push(xe.data.expectedType);
        }
        var Lt = Ue.length > 0 ? ", expected one of type [" + Ue.join(", ") + "]" : "";
        return new $("Invalid " + ke + " `" + Ae + "` supplied to " + ("`" + we + "`" + Lt + "."));
      }
      return Q(he);
    }
    function xt() {
      function I(L, W, he, me, Re) {
        return tt(L[W]) ? null : new $("Invalid " + me + " `" + Re + "` supplied to " + ("`" + he + "`, expected a ReactNode."));
      }
      return Q(I);
    }
    function gt(I, L, W, he, me) {
      return new $(
        (I || "React class") + ": " + L + " type `" + W + "." + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + me + "`."
      );
    }
    function Kt(I) {
      function L(W, he, me, Re, we) {
        var ke = W[he], Ae = at(ke);
        if (Ae !== "object")
          return new $("Invalid " + Re + " `" + we + "` of type `" + Ae + "` " + ("supplied to `" + me + "`, expected `object`."));
        for (var Ue in I) {
          var Ie = I[Ue];
          if (typeof Ie != "function")
            return gt(me, Re, we, Ue, Oe(Ie));
          var Pt = Ie(ke, Ue, me, Re, we + "." + Ue, f);
          if (Pt)
            return Pt;
        }
        return null;
      }
      return Q(L);
    }
    function Ye(I) {
      function L(W, he, me, Re, we) {
        var ke = W[he], Ae = at(ke);
        if (Ae !== "object")
          return new $("Invalid " + Re + " `" + we + "` of type `" + Ae + "` " + ("supplied to `" + me + "`, expected `object`."));
        var Ue = s({}, W[he], I);
        for (var Ie in Ue) {
          var Pt = I[Ie];
          if (p(I, Ie) && typeof Pt != "function")
            return gt(me, Re, we, Ie, Oe(Pt));
          if (!Pt)
            return new $(
              "Invalid " + Re + " `" + we + "` key `" + Ie + "` supplied to `" + me + "`.\nBad object: " + JSON.stringify(W[he], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var xe = Pt(ke, Ie, me, Re, we + "." + Ie, f);
          if (xe)
            return xe;
        }
        return null;
      }
      return Q(L);
    }
    function tt(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(tt);
          if (I === null || x(I))
            return !0;
          var L = O(I);
          if (L) {
            var W = L.call(I), he;
            if (L !== I.entries) {
              for (; !(he = W.next()).done; )
                if (!tt(he.value))
                  return !1;
            } else
              for (; !(he = W.next()).done; ) {
                var me = he.value;
                if (me && !tt(me[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ot(I, L) {
      return I === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function at(I) {
      var L = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : Ot(L, I) ? "symbol" : L;
    }
    function Oe(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var L = at(I);
      if (L === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function se(I) {
      var L = Oe(I);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function Ve(I) {
      return !I.constructor || !I.constructor.name ? U : I.constructor.name;
    }
    return V.checkPropTypes = m, V.resetWarningCache = m.resetWarningCache, V.PropTypes = V, V;
  }, K0;
}
var Q0, fw;
function OU() {
  if (fw)
    return Q0;
  fw = 1;
  var l = zC();
  function s() {
  }
  function f() {
  }
  return f.resetWarningCache = s, Q0 = function() {
    function p(v, x, b, w, k, O) {
      if (O !== l) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    p.isRequired = p;
    function m() {
      return p;
    }
    var g = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: m,
      element: p,
      elementType: p,
      instanceOf: m,
      node: p,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: f,
      resetWarningCache: s
    };
    return g.PropTypes = g, g;
  }, Q0;
}
if (process.env.NODE_ENV !== "production") {
  var DU = i1(), kU = !0;
  mC.exports = _U()(DU.isElement, kU);
} else
  mC.exports = OU()();
var NU = mC.exports;
const Tt = /* @__PURE__ */ Qv(NU), dw = {
  disabled: !1
};
var LU = process.env.NODE_ENV !== "production" ? Tt.oneOfType([Tt.number, Tt.shape({
  enter: Tt.number,
  exit: Tt.number,
  appear: Tt.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && Tt.oneOfType([Tt.string, Tt.shape({
  enter: Tt.string,
  exit: Tt.string,
  active: Tt.string
}), Tt.shape({
  enter: Tt.string,
  enterDone: Tt.string,
  enterActive: Tt.string,
  exit: Tt.string,
  exitDone: Tt.string,
  exitActive: Tt.string
})]);
const l1 = To.createContext(null);
var MU = function(s) {
  return s.scrollTop;
}, Bv = "unmounted", ys = "exited", Ro = "entering", Jl = "entered", qv = "exiting", ru = /* @__PURE__ */ function(l) {
  IA(s, l);
  function s(p, m) {
    var g;
    g = l.call(this, p, m) || this;
    var v = m, x = v && !v.isMounting ? p.enter : p.appear, b;
    return g.appearStatus = null, p.in ? x ? (b = ys, g.appearStatus = Ro) : b = Jl : p.unmountOnExit || p.mountOnEnter ? b = Bv : b = ys, g.state = {
      status: b
    }, g.nextCallback = null, g;
  }
  s.getDerivedStateFromProps = function(m, g) {
    var v = m.in;
    return v && g.status === Bv ? {
      status: ys
    } : null;
  };
  var f = s.prototype;
  return f.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, f.componentDidUpdate = function(m) {
    var g = null;
    if (m !== this.props) {
      var v = this.state.status;
      this.props.in ? v !== Ro && v !== Jl && (g = Ro) : (v === Ro || v === Jl) && (g = qv);
    }
    this.updateStatus(!1, g);
  }, f.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, f.getTimeouts = function() {
    var m = this.props.timeout, g, v, x;
    return g = v = x = m, m != null && typeof m != "number" && (g = m.exit, v = m.enter, x = m.appear !== void 0 ? m.appear : v), {
      exit: g,
      enter: v,
      appear: x
    };
  }, f.updateStatus = function(m, g) {
    if (m === void 0 && (m = !1), g !== null)
      if (this.cancelNextCallback(), g === Ro) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var v = this.props.nodeRef ? this.props.nodeRef.current : Oc.findDOMNode(this);
          v && MU(v);
        }
        this.performEnter(m);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === ys && this.setState({
        status: Bv
      });
  }, f.performEnter = function(m) {
    var g = this, v = this.props.enter, x = this.context ? this.context.isMounting : m, b = this.props.nodeRef ? [x] : [Oc.findDOMNode(this), x], w = b[0], k = b[1], O = this.getTimeouts(), U = x ? O.appear : O.enter;
    if (!m && !v || dw.disabled) {
      this.safeSetState({
        status: Jl
      }, function() {
        g.props.onEntered(w);
      });
      return;
    }
    this.props.onEnter(w, k), this.safeSetState({
      status: Ro
    }, function() {
      g.props.onEntering(w, k), g.onTransitionEnd(U, function() {
        g.safeSetState({
          status: Jl
        }, function() {
          g.props.onEntered(w, k);
        });
      });
    });
  }, f.performExit = function() {
    var m = this, g = this.props.exit, v = this.getTimeouts(), x = this.props.nodeRef ? void 0 : Oc.findDOMNode(this);
    if (!g || dw.disabled) {
      this.safeSetState({
        status: ys
      }, function() {
        m.props.onExited(x);
      });
      return;
    }
    this.props.onExit(x), this.safeSetState({
      status: qv
    }, function() {
      m.props.onExiting(x), m.onTransitionEnd(v.exit, function() {
        m.safeSetState({
          status: ys
        }, function() {
          m.props.onExited(x);
        });
      });
    });
  }, f.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, f.safeSetState = function(m, g) {
    g = this.setNextCallback(g), this.setState(m, g);
  }, f.setNextCallback = function(m) {
    var g = this, v = !0;
    return this.nextCallback = function(x) {
      v && (v = !1, g.nextCallback = null, m(x));
    }, this.nextCallback.cancel = function() {
      v = !1;
    }, this.nextCallback;
  }, f.onTransitionEnd = function(m, g) {
    this.setNextCallback(g);
    var v = this.props.nodeRef ? this.props.nodeRef.current : Oc.findDOMNode(this), x = m == null && !this.props.addEndListener;
    if (!v || x) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var b = this.props.nodeRef ? [this.nextCallback] : [v, this.nextCallback], w = b[0], k = b[1];
      this.props.addEndListener(w, k);
    }
    m != null && setTimeout(this.nextCallback, m);
  }, f.render = function() {
    var m = this.state.status;
    if (m === Bv)
      return null;
    var g = this.props, v = g.children;
    g.in, g.mountOnEnter, g.unmountOnExit, g.appear, g.enter, g.exit, g.timeout, g.addEndListener, g.onEnter, g.onEntering, g.onEntered, g.onExit, g.onExiting, g.onExited, g.nodeRef;
    var x = qw(g, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ To.createElement(l1.Provider, {
        value: null
      }, typeof v == "function" ? v(m, x) : To.cloneElement(To.Children.only(v), x))
    );
  }, s;
}(To.Component);
ru.contextType = l1;
ru.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: Tt.shape({
    current: typeof Element > "u" ? Tt.any : function(l, s, f, p, m, g) {
      var v = l[s];
      return Tt.instanceOf(v && "ownerDocument" in v ? v.ownerDocument.defaultView.Element : Element)(l, s, f, p, m, g);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: Tt.oneOfType([Tt.func.isRequired, Tt.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Tt.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Tt.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Tt.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: Tt.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Tt.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Tt.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(s) {
    var f = LU;
    s.addEndListener || (f = f.isRequired);
    for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
      m[g - 1] = arguments[g];
    return f.apply(void 0, [s].concat(m));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: Tt.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Tt.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Tt.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Tt.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Tt.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Tt.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Tt.func
} : {};
function Rd() {
}
ru.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Rd,
  onEntering: Rd,
  onEntered: Rd,
  onExit: Rd,
  onExiting: Rd,
  onExited: Rd
};
ru.UNMOUNTED = Bv;
ru.EXITED = ys;
ru.ENTERING = Ro;
ru.ENTERED = Jl;
ru.EXITING = qv;
const kd = !!(typeof window < "u" && window.document && window.document.createElement);
var yC = !1, gC = !1;
try {
  var G0 = {
    get passive() {
      return yC = !0;
    },
    get once() {
      return gC = yC = !0;
    }
  };
  kd && (window.addEventListener("test", G0, G0), window.removeEventListener("test", G0, !0));
} catch {
}
function u1(l, s, f, p) {
  if (p && typeof p != "boolean" && !gC) {
    var m = p.once, g = p.capture, v = f;
    !gC && m && (v = f.__once || function x(b) {
      this.removeEventListener(s, x, g), f.call(this, b);
    }, f.__once = v), l.addEventListener(s, v, yC ? p : g);
  }
  l.addEventListener(s, f, p);
}
function SC(l, s, f, p) {
  var m = p && typeof p != "boolean" ? p.capture : p;
  l.removeEventListener(s, f, m), f.__once && l.removeEventListener(s, f.__once, m);
}
function rg(l, s, f, p) {
  return u1(l, s, f, p), function() {
    SC(l, s, f, p);
  };
}
function AU(l, s, f, p) {
  if (p === void 0 && (p = !0), l) {
    var m = document.createEvent("HTMLEvents");
    m.initEvent(s, f, p), l.dispatchEvent(m);
  }
}
function UU(l) {
  var s = eu(l, "transitionDuration") || "", f = s.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(s) * f;
}
function jU(l, s, f) {
  f === void 0 && (f = 5);
  var p = !1, m = setTimeout(function() {
    p || AU(l, "transitionend", !0);
  }, s + f), g = rg(l, "transitionend", function() {
    p = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(m), g();
  };
}
function s1(l, s, f, p) {
  f == null && (f = UU(l) || 0);
  var m = jU(l, f, p), g = rg(l, "transitionend", s);
  return function() {
    m(), g();
  };
}
function pw(l, s) {
  const f = eu(l, s) || "", p = f.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(f) * p;
}
function FC(l, s) {
  const f = pw(l, "transitionDuration"), p = pw(l, "transitionDelay"), m = s1(l, (g) => {
    g.target === l && (m(), s(g));
  }, f + p);
}
function zv(...l) {
  return l.filter((s) => s != null).reduce((s, f) => {
    if (typeof f != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return s === null ? f : function(...m) {
      s.apply(this, m), f.apply(this, m);
    };
  }, null);
}
function c1(l) {
  l.offsetHeight;
}
function zU(l) {
  return l && "setState" in l ? Oc.findDOMNode(l) : l ?? null;
}
const PC = /* @__PURE__ */ To.forwardRef(({
  onEnter: l,
  onEntering: s,
  onEntered: f,
  onExit: p,
  onExiting: m,
  onExited: g,
  addEndListener: v,
  children: x,
  childRef: b,
  ...w
}, k) => {
  const O = N.useRef(null), U = Dd(O, b), V = (_e) => {
    U(zU(_e));
  }, B = (_e) => (Me) => {
    _e && O.current && _e(O.current, Me);
  }, $ = N.useCallback(B(l), [l]), Q = N.useCallback(B(s), [s]), pe = N.useCallback(B(f), [f]), ie = N.useCallback(B(p), [p]), ae = N.useCallback(B(m), [m]), ce = N.useCallback(B(g), [g]), J = N.useCallback(B(v), [v]);
  return /* @__PURE__ */ X.jsx(ru, {
    ref: k,
    ...w,
    onEnter: $,
    onEntered: pe,
    onEntering: Q,
    onExit: ie,
    onExited: ce,
    onExiting: ae,
    addEndListener: J,
    nodeRef: O,
    children: typeof x == "function" ? (_e, Me) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      x(_e, {
        ...Me,
        ref: V
      })
    ) : /* @__PURE__ */ To.cloneElement(x, {
      ref: V
    })
  });
}), FU = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function PU(l, s) {
  const f = `offset${l[0].toUpperCase()}${l.slice(1)}`, p = s[f], m = FU[l];
  return p + // @ts-ignore
  parseInt(eu(s, m[0]), 10) + // @ts-ignore
  parseInt(eu(s, m[1]), 10);
}
const HU = {
  [ys]: "collapse",
  [qv]: "collapsing",
  [Ro]: "collapsing",
  [Jl]: "collapse show"
}, BU = /* @__PURE__ */ To.forwardRef(({
  onEnter: l,
  onEntering: s,
  onEntered: f,
  onExit: p,
  onExiting: m,
  className: g,
  children: v,
  dimension: x = "height",
  in: b = !1,
  timeout: w = 300,
  mountOnEnter: k = !1,
  unmountOnExit: O = !1,
  appear: U = !1,
  getDimensionValue: V = PU,
  ...B
}, $) => {
  const Q = typeof x == "function" ? x() : x, pe = N.useMemo(() => zv((_e) => {
    _e.style[Q] = "0";
  }, l), [Q, l]), ie = N.useMemo(() => zv((_e) => {
    const Me = `scroll${Q[0].toUpperCase()}${Q.slice(1)}`;
    _e.style[Q] = `${_e[Me]}px`;
  }, s), [Q, s]), ae = N.useMemo(() => zv((_e) => {
    _e.style[Q] = null;
  }, f), [Q, f]), ce = N.useMemo(() => zv((_e) => {
    _e.style[Q] = `${V(Q, _e)}px`, c1(_e);
  }, p), [p, V, Q]), J = N.useMemo(() => zv((_e) => {
    _e.style[Q] = null;
  }, m), [Q, m]);
  return /* @__PURE__ */ X.jsx(PC, {
    ref: $,
    addEndListener: FC,
    ...B,
    "aria-expanded": B.role ? b : null,
    onEnter: pe,
    onEntering: ie,
    onEntered: ae,
    onExit: ce,
    onExiting: J,
    childRef: v.ref,
    in: b,
    timeout: w,
    mountOnEnter: k,
    unmountOnExit: O,
    appear: U,
    children: (_e, Me) => /* @__PURE__ */ To.cloneElement(v, {
      ...Me,
      className: dt(g, v.props.className, HU[_e], Q === "width" && "collapse-horizontal")
    })
  });
}), f1 = /* @__PURE__ */ N.forwardRef(({
  children: l,
  bsPrefix: s,
  ...f
}, p) => {
  s = _t(s, "navbar-collapse");
  const m = N.useContext(kc);
  return /* @__PURE__ */ X.jsx(BU, {
    in: !!(m && m.expanded),
    ...f,
    children: /* @__PURE__ */ X.jsx("div", {
      ref: p,
      className: s,
      children: l
    })
  });
});
f1.displayName = "NavbarCollapse";
const d1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  children: f,
  label: p = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: m = "button",
  onClick: g,
  ...v
}, x) => {
  l = _t(l, "navbar-toggler");
  const {
    onToggle: b,
    expanded: w
  } = N.useContext(kc) || {}, k = si((O) => {
    g && g(O), b && b();
  });
  return m === "button" && (v.type = "button"), /* @__PURE__ */ X.jsx(m, {
    ...v,
    ref: x,
    onClick: k,
    "aria-label": p,
    className: dt(s, l, !w && "collapsed"),
    children: f || /* @__PURE__ */ X.jsx("span", {
      className: `${l}-icon`
    })
  });
});
d1.displayName = "NavbarToggle";
const EC = /* @__PURE__ */ new WeakMap(), vw = (l, s) => {
  if (!l || !s)
    return;
  const f = EC.get(s) || /* @__PURE__ */ new Map();
  EC.set(s, f);
  let p = f.get(l);
  return p || (p = s.matchMedia(l), p.refCount = 0, f.set(p.media, p)), p;
};
function VU(l, s = typeof window > "u" ? void 0 : window) {
  const f = vw(l, s), [p, m] = N.useState(() => f ? f.matches : !1);
  return hC(() => {
    let g = vw(l, s);
    if (!g)
      return m(!1);
    let v = EC.get(s);
    const x = () => {
      m(g.matches);
    };
    return g.refCount++, g.addListener(x), x(), () => {
      g.removeListener(x), g.refCount--, g.refCount <= 0 && (v == null || v.delete(g.media)), g = void 0;
    };
  }, [l]), p;
}
function $U(l) {
  const s = Object.keys(l);
  function f(x, b) {
    return x === b ? b : x ? `${x} and ${b}` : b;
  }
  function p(x) {
    return s[Math.min(s.indexOf(x) + 1, s.length - 1)];
  }
  function m(x) {
    const b = p(x);
    let w = l[b];
    return typeof w == "number" ? w = `${w - 0.2}px` : w = `calc(${w} - 0.2px)`, `(max-width: ${w})`;
  }
  function g(x) {
    let b = l[x];
    return typeof b == "number" && (b = `${b}px`), `(min-width: ${b})`;
  }
  function v(x, b, w) {
    let k;
    typeof x == "object" ? (k = x, w = b, b = !0) : (b = b || !0, k = {
      [x]: b
    });
    let O = N.useMemo(() => Object.entries(k).reduce((U, [V, B]) => ((B === "up" || B === !0) && (U = f(U, g(V))), (B === "down" || B === !0) && (U = f(U, m(V))), U), ""), [JSON.stringify(k)]);
    return VU(O, w);
  }
  return v;
}
const IU = $U({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
function X0(l) {
  l === void 0 && (l = sg());
  try {
    var s = l.activeElement;
    return !s || !s.nodeName ? null : s;
  } catch {
    return l.body;
  }
}
function hw(l, s) {
  if (l.contains)
    return l.contains(s);
  if (l.compareDocumentPosition)
    return l === s || !!(l.compareDocumentPosition(s) & 16);
}
function YU(l) {
  const s = N.useRef(l);
  return s.current = l, s;
}
function p1(l) {
  const s = YU(l);
  N.useEffect(() => () => s.current(), []);
}
function WU(l = document) {
  const s = l.defaultView;
  return Math.abs(s.innerWidth - l.documentElement.clientWidth);
}
const mw = ug("modal-open");
class HC {
  constructor({
    ownerDocument: s,
    handleContainerOverflow: f = !0,
    isRTL: p = !1
  } = {}) {
    this.handleContainerOverflow = f, this.isRTL = p, this.modals = [], this.ownerDocument = s;
  }
  getScrollbarWidth() {
    return WU(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(s) {
  }
  removeModalAttributes(s) {
  }
  setContainerStyle(s) {
    const f = {
      overflow: "hidden"
    }, p = this.isRTL ? "paddingLeft" : "paddingRight", m = this.getElement();
    s.style = {
      overflow: m.style.overflow,
      [p]: m.style[p]
    }, s.scrollBarWidth && (f[p] = `${parseInt(eu(m, p) || "0", 10) + s.scrollBarWidth}px`), m.setAttribute(mw, ""), eu(m, f);
  }
  reset() {
    [...this.modals].forEach((s) => this.remove(s));
  }
  removeContainerStyle(s) {
    const f = this.getElement();
    f.removeAttribute(mw), Object.assign(f.style, s.style);
  }
  add(s) {
    let f = this.modals.indexOf(s);
    return f !== -1 || (f = this.modals.length, this.modals.push(s), this.setModalAttributes(s), f !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), f;
  }
  remove(s) {
    const f = this.modals.indexOf(s);
    f !== -1 && (this.modals.splice(f, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(s));
  }
  isTopModal(s) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === s;
  }
}
const v1 = /* @__PURE__ */ N.createContext(kd ? window : void 0);
v1.Provider;
function BC() {
  return N.useContext(v1);
}
const J0 = (l, s) => kd ? l == null ? (s || sg()).body : (typeof l == "function" && (l = l()), l && "current" in l && (l = l.current), l && ("nodeType" in l || l.getBoundingClientRect) ? l : null) : null;
function qU(l, s) {
  const f = BC(), [p, m] = N.useState(() => J0(l, f == null ? void 0 : f.document));
  if (!p) {
    const g = J0(l);
    g && m(g);
  }
  return N.useEffect(() => {
  }, [s, p]), N.useEffect(() => {
    const g = J0(l);
    g !== p && m(g);
  }, [l, p]), p;
}
function KU({
  children: l,
  in: s,
  onExited: f,
  mountOnEnter: p,
  unmountOnExit: m
}) {
  const g = N.useRef(null), v = N.useRef(s), x = si(f);
  N.useEffect(() => {
    s ? v.current = !0 : x(g.current);
  }, [s, x]);
  const b = Dd(g, l.ref), w = /* @__PURE__ */ N.cloneElement(l, {
    ref: b
  });
  return s ? w : m || !v.current && p ? null : w;
}
const QU = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function GU(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
function XU(l) {
  let {
    onEnter: s,
    onEntering: f,
    onEntered: p,
    onExit: m,
    onExiting: g,
    onExited: v,
    addEndListener: x,
    children: b
  } = l, w = GU(l, QU);
  const k = N.useRef(null), O = Dd(k, typeof b == "function" ? null : b.ref), U = (ce) => (J) => {
    ce && k.current && ce(k.current, J);
  }, V = N.useCallback(U(s), [s]), B = N.useCallback(U(f), [f]), $ = N.useCallback(U(p), [p]), Q = N.useCallback(U(m), [m]), pe = N.useCallback(U(g), [g]), ie = N.useCallback(U(v), [v]), ae = N.useCallback(U(x), [x]);
  return Object.assign({}, w, {
    nodeRef: k
  }, s && {
    onEnter: V
  }, f && {
    onEntering: B
  }, p && {
    onEntered: $
  }, m && {
    onExit: Q
  }, g && {
    onExiting: pe
  }, v && {
    onExited: ie
  }, x && {
    addEndListener: ae
  }, {
    children: typeof b == "function" ? (ce, J) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      b(ce, Object.assign({}, J, {
        ref: O
      }))
    ) : /* @__PURE__ */ N.cloneElement(b, {
      ref: O
    })
  });
}
const JU = ["component"];
function ZU(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
const ej = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    component: f
  } = l, p = ZU(l, JU);
  const m = XU(p);
  return /* @__PURE__ */ X.jsx(f, Object.assign({
    ref: s
  }, m));
});
function tj({
  in: l,
  onTransition: s
}) {
  const f = N.useRef(null), p = N.useRef(!0), m = si(s);
  return hC(() => {
    if (!f.current)
      return;
    let g = !1;
    return m({
      in: l,
      element: f.current,
      initial: p.current,
      isStale: () => g
    }), () => {
      g = !0;
    };
  }, [l, m]), hC(() => (p.current = !1, () => {
    p.current = !0;
  }), []), f;
}
function nj({
  children: l,
  in: s,
  onExited: f,
  onEntered: p,
  transition: m
}) {
  const [g, v] = N.useState(!s);
  s && g && v(!1);
  const x = tj({
    in: !!s,
    onTransition: (w) => {
      const k = () => {
        w.isStale() || (w.in ? p == null || p(w.element, w.initial) : (v(!0), f == null || f(w.element)));
      };
      Promise.resolve(m(w)).then(k, (O) => {
        throw w.in || v(!0), O;
      });
    }
  }), b = Dd(x, l.ref);
  return g && !s ? null : /* @__PURE__ */ N.cloneElement(l, {
    ref: b
  });
}
function yw(l, s, f) {
  return l ? /* @__PURE__ */ X.jsx(ej, Object.assign({}, f, {
    component: l
  })) : s ? /* @__PURE__ */ X.jsx(nj, Object.assign({}, f, {
    transition: s
  })) : /* @__PURE__ */ X.jsx(KU, Object.assign({}, f));
}
function rj(l) {
  return l.code === "Escape" || l.keyCode === 27;
}
const aj = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function ij(l, s) {
  if (l == null)
    return {};
  var f = {}, p = Object.keys(l), m, g;
  for (g = 0; g < p.length; g++)
    m = p[g], !(s.indexOf(m) >= 0) && (f[m] = l[m]);
  return f;
}
let Z0;
function oj(l) {
  return Z0 || (Z0 = new HC({
    ownerDocument: l == null ? void 0 : l.document
  })), Z0;
}
function lj(l) {
  const s = BC(), f = l || oj(s), p = N.useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(p.current, {
    add: () => f.add(p.current),
    remove: () => f.remove(p.current),
    isTopModal: () => f.isTopModal(p.current),
    setDialogRef: N.useCallback((m) => {
      p.current.dialog = m;
    }, []),
    setBackdropRef: N.useCallback((m) => {
      p.current.backdrop = m;
    }, [])
  });
}
const h1 = /* @__PURE__ */ N.forwardRef((l, s) => {
  let {
    show: f = !1,
    role: p = "dialog",
    className: m,
    style: g,
    children: v,
    backdrop: x = !0,
    keyboard: b = !0,
    onBackdropClick: w,
    onEscapeKeyDown: k,
    transition: O,
    runTransition: U,
    backdropTransition: V,
    runBackdropTransition: B,
    autoFocus: $ = !0,
    enforceFocus: Q = !0,
    restoreFocus: pe = !0,
    restoreFocusOptions: ie,
    renderDialog: ae,
    renderBackdrop: ce = (yt) => /* @__PURE__ */ X.jsx("div", Object.assign({}, yt)),
    manager: J,
    container: _e,
    onShow: Me,
    onHide: vt = () => {
    },
    onExit: Wt,
    onExited: xt,
    onExiting: gt,
    onEnter: Kt,
    onEntering: Ye,
    onEntered: tt
  } = l, Ot = ij(l, aj);
  const at = BC(), Oe = qU(_e), se = lj(J), Ve = sU(), I = cU(f), [L, W] = N.useState(!f), he = N.useRef(null);
  N.useImperativeHandle(s, () => se, [se]), kd && !I && f && (he.current = X0(at == null ? void 0 : at.document)), f && L && W(!1);
  const me = si(() => {
    if (se.add(), Ie.current = rg(document, "keydown", Ae), Ue.current = rg(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(we),
      !0
    ), Me && Me(), $) {
      var yt, bn;
      const gn = X0((yt = (bn = se.dialog) == null ? void 0 : bn.ownerDocument) != null ? yt : at == null ? void 0 : at.document);
      se.dialog && gn && !hw(se.dialog, gn) && (he.current = gn, se.dialog.focus());
    }
  }), Re = si(() => {
    if (se.remove(), Ie.current == null || Ie.current(), Ue.current == null || Ue.current(), pe) {
      var yt;
      (yt = he.current) == null || yt.focus == null || yt.focus(ie), he.current = null;
    }
  });
  N.useEffect(() => {
    !f || !Oe || me();
  }, [
    f,
    Oe,
    /* should never change: */
    me
  ]), N.useEffect(() => {
    L && Re();
  }, [L, Re]), p1(() => {
    Re();
  });
  const we = si(() => {
    if (!Q || !Ve() || !se.isTopModal())
      return;
    const yt = X0(at == null ? void 0 : at.document);
    se.dialog && yt && !hw(se.dialog, yt) && se.dialog.focus();
  }), ke = si((yt) => {
    yt.target === yt.currentTarget && (w == null || w(yt), x === !0 && vt());
  }), Ae = si((yt) => {
    b && rj(yt) && se.isTopModal() && (k == null || k(yt), yt.defaultPrevented || vt());
  }), Ue = N.useRef(), Ie = N.useRef(), Pt = (...yt) => {
    W(!0), xt == null || xt(...yt);
  };
  if (!Oe)
    return null;
  const xe = Object.assign({
    role: p,
    ref: se.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": p === "dialog" ? !0 : void 0
  }, Ot, {
    style: g,
    className: m,
    tabIndex: -1
  });
  let Lt = ae ? ae(xe) : /* @__PURE__ */ X.jsx("div", Object.assign({}, xe, {
    children: /* @__PURE__ */ N.cloneElement(v, {
      role: "document"
    })
  }));
  Lt = yw(O, U, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!f,
    onExit: Wt,
    onExiting: gt,
    onExited: Pt,
    onEnter: Kt,
    onEntering: Ye,
    onEntered: tt,
    children: Lt
  });
  let rn = null;
  return x && (rn = ce({
    ref: se.setBackdropRef,
    onClick: ke
  }), rn = yw(V, B, {
    in: !!f,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: rn
  })), /* @__PURE__ */ X.jsx(X.Fragment, {
    children: /* @__PURE__ */ Oc.createPortal(/* @__PURE__ */ X.jsxs(X.Fragment, {
      children: [rn, Lt]
    }), Oe)
  });
});
h1.displayName = "Modal";
const m1 = Object.assign(h1, {
  Manager: HC
}), uj = {
  [Ro]: "show",
  [Jl]: "show"
}, cg = /* @__PURE__ */ N.forwardRef(({
  className: l,
  children: s,
  transitionClasses: f = {},
  onEnter: p,
  ...m
}, g) => {
  const v = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...m
  }, x = N.useCallback((b, w) => {
    c1(b), p == null || p(b, w);
  }, [p]);
  return /* @__PURE__ */ X.jsx(PC, {
    ref: g,
    addEndListener: FC,
    ...v,
    onEnter: x,
    childRef: s.ref,
    children: (b, w) => /* @__PURE__ */ N.cloneElement(s, {
      ...w,
      className: dt("fade", l, s.props.className, uj[b], f[b])
    })
  });
});
cg.displayName = "Fade";
const y1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "offcanvas-body"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
y1.displayName = "OffcanvasBody";
const sj = {
  [Ro]: "show",
  [Jl]: "show"
}, g1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  children: f,
  in: p = !1,
  mountOnEnter: m = !1,
  unmountOnExit: g = !1,
  appear: v = !1,
  ...x
}, b) => (l = _t(l, "offcanvas"), /* @__PURE__ */ X.jsx(PC, {
  ref: b,
  addEndListener: FC,
  in: p,
  mountOnEnter: m,
  unmountOnExit: g,
  appear: v,
  ...x,
  childRef: f.ref,
  children: (w, k) => /* @__PURE__ */ N.cloneElement(f, {
    ...k,
    className: dt(s, f.props.className, (w === Ro || w === qv) && `${l}-toggling`, sj[w])
  })
})));
g1.displayName = "OffcanvasToggling";
const VC = /* @__PURE__ */ N.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), cj = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": Tt.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: Tt.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: Tt.oneOf(["white"])
}, $C = /* @__PURE__ */ N.forwardRef(({
  className: l,
  variant: s,
  "aria-label": f = "Close",
  ...p
}, m) => /* @__PURE__ */ X.jsx("button", {
  ref: m,
  type: "button",
  className: dt("btn-close", s && `btn-close-${s}`, l),
  "aria-label": f,
  ...p
}));
$C.displayName = "CloseButton";
$C.propTypes = cj;
const S1 = /* @__PURE__ */ N.forwardRef(({
  closeLabel: l = "Close",
  closeVariant: s,
  closeButton: f = !1,
  onHide: p,
  children: m,
  ...g
}, v) => {
  const x = N.useContext(VC), b = si(() => {
    x == null || x.onHide(), p == null || p();
  });
  return /* @__PURE__ */ X.jsxs("div", {
    ref: v,
    ...g,
    children: [m, f && /* @__PURE__ */ X.jsx($C, {
      "aria-label": l,
      variant: s,
      onClick: b
    })]
  });
}), E1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  closeLabel: f = "Close",
  closeButton: p = !1,
  ...m
}, g) => (l = _t(l, "offcanvas-header"), /* @__PURE__ */ X.jsx(S1, {
  ref: g,
  ...m,
  className: dt(s, l),
  closeLabel: f,
  closeButton: p
})));
E1.displayName = "OffcanvasHeader";
const fg = (l) => /* @__PURE__ */ N.forwardRef((s, f) => /* @__PURE__ */ X.jsx("div", {
  ...s,
  ref: f,
  className: dt(s.className, l)
})), fj = fg("h5"), C1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = fj,
  ...p
}, m) => (s = _t(s, "offcanvas-title"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
C1.displayName = "OffcanvasTitle";
function dj(l, s) {
  return l.classList ? l.classList.contains(s) : (" " + (l.className.baseVal || l.className) + " ").indexOf(" " + s + " ") !== -1;
}
function pj(l, s) {
  l.classList ? l.classList.add(s) : dj(l, s) || (typeof l.className == "string" ? l.className = l.className + " " + s : l.setAttribute("class", (l.className && l.className.baseVal || "") + " " + s));
}
function gw(l, s) {
  return l.replace(new RegExp("(^|\\s)" + s + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function vj(l, s) {
  l.classList ? l.classList.remove(s) : typeof l.className == "string" ? l.className = gw(l.className, s) : l.setAttribute("class", gw(l.className && l.className.baseVal || "", s));
}
const Td = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class R1 extends HC {
  adjustAndStore(s, f, p) {
    const m = f.style[s];
    f.dataset[s] = m, eu(f, {
      [s]: `${parseFloat(eu(f, s)) + p}px`
    });
  }
  restore(s, f) {
    const p = f.dataset[s];
    p !== void 0 && (delete f.dataset[s], eu(f, {
      [s]: p
    }));
  }
  setContainerStyle(s) {
    super.setContainerStyle(s);
    const f = this.getElement();
    if (pj(f, "modal-open"), !s.scrollBarWidth)
      return;
    const p = this.isRTL ? "paddingLeft" : "paddingRight", m = this.isRTL ? "marginLeft" : "marginRight";
    _c(f, Td.FIXED_CONTENT).forEach((g) => this.adjustAndStore(p, g, s.scrollBarWidth)), _c(f, Td.STICKY_CONTENT).forEach((g) => this.adjustAndStore(m, g, -s.scrollBarWidth)), _c(f, Td.NAVBAR_TOGGLER).forEach((g) => this.adjustAndStore(m, g, s.scrollBarWidth));
  }
  removeContainerStyle(s) {
    super.removeContainerStyle(s);
    const f = this.getElement();
    vj(f, "modal-open");
    const p = this.isRTL ? "paddingLeft" : "paddingRight", m = this.isRTL ? "marginLeft" : "marginRight";
    _c(f, Td.FIXED_CONTENT).forEach((g) => this.restore(p, g)), _c(f, Td.STICKY_CONTENT).forEach((g) => this.restore(m, g)), _c(f, Td.NAVBAR_TOGGLER).forEach((g) => this.restore(m, g));
  }
}
let eC;
function T1(l) {
  return eC || (eC = new R1(l)), eC;
}
function hj(l) {
  return /* @__PURE__ */ X.jsx(g1, {
    ...l
  });
}
function mj(l) {
  return /* @__PURE__ */ X.jsx(cg, {
    ...l
  });
}
const x1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  children: f,
  "aria-labelledby": p,
  placement: m = "start",
  responsive: g,
  /* BaseModal props */
  show: v = !1,
  backdrop: x = !0,
  keyboard: b = !0,
  scroll: w = !1,
  onEscapeKeyDown: k,
  onShow: O,
  onHide: U,
  container: V,
  autoFocus: B = !0,
  enforceFocus: $ = !0,
  restoreFocus: Q = !0,
  restoreFocusOptions: pe,
  onEntered: ie,
  onExit: ae,
  onExiting: ce,
  onEnter: J,
  onEntering: _e,
  onExited: Me,
  backdropClassName: vt,
  manager: Wt,
  renderStaticNode: xt = !1,
  ...gt
}, Kt) => {
  const Ye = N.useRef();
  l = _t(l, "offcanvas");
  const {
    onToggle: tt
  } = N.useContext(kc) || {}, [Ot, at] = N.useState(!1), Oe = IU(g || "xs", "up");
  N.useEffect(() => {
    at(g ? v && !Oe : v);
  }, [v, g, Oe]);
  const se = si(() => {
    tt == null || tt(), U == null || U();
  }), Ve = N.useMemo(() => ({
    onHide: se
  }), [se]);
  function I() {
    return Wt || (w ? (Ye.current || (Ye.current = new R1({
      handleContainerOverflow: !1
    })), Ye.current) : T1());
  }
  const L = (Re, ...we) => {
    Re && (Re.style.visibility = "visible"), J == null || J(Re, ...we);
  }, W = (Re, ...we) => {
    Re && (Re.style.visibility = ""), Me == null || Me(...we);
  }, he = N.useCallback((Re) => /* @__PURE__ */ X.jsx("div", {
    ...Re,
    className: dt(`${l}-backdrop`, vt)
  }), [vt, l]), me = (Re) => /* @__PURE__ */ X.jsx("div", {
    ...Re,
    ...gt,
    className: dt(s, g ? `${l}-${g}` : l, `${l}-${m}`),
    "aria-labelledby": p,
    children: f
  });
  return /* @__PURE__ */ X.jsxs(X.Fragment, {
    children: [!Ot && (g || xt) && me({}), /* @__PURE__ */ X.jsx(VC.Provider, {
      value: Ve,
      children: /* @__PURE__ */ X.jsx(m1, {
        show: Ot,
        ref: Kt,
        backdrop: x,
        container: V,
        keyboard: b,
        autoFocus: B,
        enforceFocus: $ && !w,
        restoreFocus: Q,
        restoreFocusOptions: pe,
        onEscapeKeyDown: k,
        onShow: O,
        onHide: se,
        onEnter: L,
        onEntering: _e,
        onEntered: ie,
        onExit: ae,
        onExiting: ce,
        onExited: W,
        manager: I(),
        transition: hj,
        backdropTransition: mj,
        renderBackdrop: he,
        renderDialog: me
      })
    })]
  });
});
x1.displayName = "Offcanvas";
const yj = Object.assign(x1, {
  Body: y1,
  Header: E1,
  Title: C1
}), b1 = /* @__PURE__ */ N.forwardRef((l, s) => {
  const f = N.useContext(kc);
  return /* @__PURE__ */ X.jsx(yj, {
    ref: s,
    show: !!(f != null && f.expanded),
    ...l,
    renderStaticNode: !0
  });
});
b1.displayName = "NavbarOffcanvas";
const w1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "span",
  ...p
}, m) => (s = _t(s, "navbar-text"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
w1.displayName = "NavbarText";
const _1 = /* @__PURE__ */ N.forwardRef((l, s) => {
  const {
    bsPrefix: f,
    expand: p = !0,
    variant: m = "light",
    bg: g,
    fixed: v,
    sticky: x,
    className: b,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: w = "nav",
    expanded: k,
    onToggle: O,
    onSelect: U,
    collapseOnSelect: V = !1,
    ...B
  } = Kw(l, {
    expanded: "onToggle"
  }), $ = _t(f, "navbar"), Q = N.useCallback((...ae) => {
    U == null || U(...ae), V && k && (O == null || O(!1));
  }, [U, V, k, O]);
  B.role === void 0 && w !== "nav" && (B.role = "navigation");
  let pe = `${$}-expand`;
  typeof p == "string" && (pe = `${pe}-${p}`);
  const ie = N.useMemo(() => ({
    onToggle: () => O == null ? void 0 : O(!k),
    bsPrefix: $,
    expanded: !!k,
    expand: p
  }), [$, k, p, O]);
  return /* @__PURE__ */ X.jsx(kc.Provider, {
    value: ie,
    children: /* @__PURE__ */ X.jsx(ng.Provider, {
      value: Q,
      children: /* @__PURE__ */ X.jsx(w, {
        ref: s,
        ...B,
        className: dt(b, $, p && pe, m && `${$}-${m}`, g && `bg-${g}`, x && `sticky-${x}`, v && `fixed-${v}`)
      })
    })
  });
});
_1.displayName = "Navbar";
const gj = Object.assign(_1, {
  Brand: a1,
  Collapse: f1,
  Offcanvas: b1,
  Text: w1,
  Toggle: d1
}), CC = /* @__PURE__ */ N.forwardRef(({
  as: l,
  bsPrefix: s,
  variant: f = "primary",
  size: p,
  active: m = !1,
  disabled: g = !1,
  className: v,
  ...x
}, b) => {
  const w = _t(s, "btn"), [k, {
    tagName: O
  }] = UC({
    tagName: l,
    disabled: g,
    ...x
  }), U = O;
  return /* @__PURE__ */ X.jsx(U, {
    ...k,
    ...x,
    ref: b,
    disabled: g,
    className: dt(v, w, m && "active", f && `${w}-${f}`, p && `${w}-${p}`, x.href && g && "disabled")
  });
});
CC.displayName = "Button";
const Sj = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: Tt.string,
  /** Display feedback as a tooltip. */
  tooltip: Tt.bool,
  as: Tt.elementType
}, dg = /* @__PURE__ */ N.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: l = "div",
    className: s,
    type: f = "valid",
    tooltip: p = !1,
    ...m
  }, g) => /* @__PURE__ */ X.jsx(l, {
    ...m,
    ref: g,
    className: dt(s, `${f}-${p ? "tooltip" : "feedback"}`)
  })
);
dg.displayName = "Feedback";
dg.propTypes = Sj;
const tu = /* @__PURE__ */ N.createContext({}), IC = /* @__PURE__ */ N.forwardRef(({
  id: l,
  bsPrefix: s,
  className: f,
  type: p = "checkbox",
  isValid: m = !1,
  isInvalid: g = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "input",
  ...x
}, b) => {
  const {
    controlId: w
  } = N.useContext(tu);
  return s = _t(s, "form-check-input"), /* @__PURE__ */ X.jsx(v, {
    ...x,
    ref: b,
    type: p,
    id: l || w,
    className: dt(f, s, m && "is-valid", g && "is-invalid")
  });
});
IC.displayName = "FormCheckInput";
const ag = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  htmlFor: f,
  ...p
}, m) => {
  const {
    controlId: g
  } = N.useContext(tu);
  return l = _t(l, "form-check-label"), /* @__PURE__ */ X.jsx("label", {
    ...p,
    ref: m,
    htmlFor: f || g,
    className: dt(s, l)
  });
});
ag.displayName = "FormCheckLabel";
function Ej(l, s) {
  return N.Children.toArray(l).some((f) => /* @__PURE__ */ N.isValidElement(f) && f.type === s);
}
const O1 = /* @__PURE__ */ N.forwardRef(({
  id: l,
  bsPrefix: s,
  bsSwitchPrefix: f,
  inline: p = !1,
  reverse: m = !1,
  disabled: g = !1,
  isValid: v = !1,
  isInvalid: x = !1,
  feedbackTooltip: b = !1,
  feedback: w,
  feedbackType: k,
  className: O,
  style: U,
  title: V = "",
  type: B = "checkbox",
  label: $,
  children: Q,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: pe = "input",
  ...ie
}, ae) => {
  s = _t(s, "form-check"), f = _t(f, "form-switch");
  const {
    controlId: ce
  } = N.useContext(tu), J = N.useMemo(() => ({
    controlId: l || ce
  }), [ce, l]), _e = !Q && $ != null && $ !== !1 || Ej(Q, ag), Me = /* @__PURE__ */ X.jsx(IC, {
    ...ie,
    type: B === "switch" ? "checkbox" : B,
    ref: ae,
    isValid: v,
    isInvalid: x,
    disabled: g,
    as: pe
  });
  return /* @__PURE__ */ X.jsx(tu.Provider, {
    value: J,
    children: /* @__PURE__ */ X.jsx("div", {
      style: U,
      className: dt(O, _e && s, p && `${s}-inline`, m && `${s}-reverse`, B === "switch" && f),
      children: Q || /* @__PURE__ */ X.jsxs(X.Fragment, {
        children: [Me, _e && /* @__PURE__ */ X.jsx(ag, {
          title: V,
          children: $
        }), w && /* @__PURE__ */ X.jsx(dg, {
          type: k,
          tooltip: b,
          children: w
        })]
      })
    })
  });
});
O1.displayName = "FormCheck";
const ig = Object.assign(O1, {
  Input: IC,
  Label: ag
});
var Cj = process.env.NODE_ENV !== "production", D1 = function() {
};
if (Cj) {
  var Rj = function(s, f) {
    var p = arguments.length;
    f = new Array(p > 1 ? p - 1 : 0);
    for (var m = 1; m < p; m++)
      f[m - 1] = arguments[m];
    var g = 0, v = "Warning: " + s.replace(/%s/g, function() {
      return f[g++];
    });
    typeof console < "u" && console.error(v);
    try {
      throw new Error(v);
    } catch {
    }
  };
  D1 = function(l, s, f) {
    var p = arguments.length;
    f = new Array(p > 2 ? p - 2 : 0);
    for (var m = 2; m < p; m++)
      f[m - 2] = arguments[m];
    if (s === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    l || Rj.apply(null, [s].concat(f));
  };
}
var Tj = D1;
const k1 = /* @__PURE__ */ Qv(Tj), N1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  type: s,
  size: f,
  htmlSize: p,
  id: m,
  className: g,
  isValid: v = !1,
  isInvalid: x = !1,
  plaintext: b,
  readOnly: w,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: k = "input",
  ...O
}, U) => {
  const {
    controlId: V
  } = N.useContext(tu);
  return l = _t(l, "form-control"), process.env.NODE_ENV !== "production" && k1(V == null || !m, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ X.jsx(k, {
    ...O,
    type: s,
    size: p,
    ref: U,
    readOnly: w,
    id: m || V,
    className: dt(g, b ? `${l}-plaintext` : l, f && `${l}-${f}`, s === "color" && `${l}-color`, v && "is-valid", x && "is-invalid")
  });
});
N1.displayName = "FormControl";
const xj = Object.assign(N1, {
  Feedback: dg
}), L1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "form-floating"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
L1.displayName = "FormFloating";
const YC = /* @__PURE__ */ N.forwardRef(({
  controlId: l,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...f
}, p) => {
  const m = N.useMemo(() => ({
    controlId: l
  }), [l]);
  return /* @__PURE__ */ X.jsx(tu.Provider, {
    value: m,
    children: /* @__PURE__ */ X.jsx(s, {
      ...f,
      ref: p
    })
  });
});
YC.displayName = "FormGroup";
function bj({
  as: l,
  bsPrefix: s,
  className: f,
  ...p
}) {
  s = _t(s, "col");
  const m = Yw(), g = Ww(), v = [], x = [];
  return m.forEach((b) => {
    const w = p[b];
    delete p[b];
    let k, O, U;
    typeof w == "object" && w != null ? {
      span: k,
      offset: O,
      order: U
    } = w : k = w;
    const V = b !== g ? `-${b}` : "";
    k && v.push(k === !0 ? `${s}${V}` : `${s}${V}-${k}`), U != null && x.push(`order${V}-${U}`), O != null && x.push(`offset${V}-${O}`);
  }), [{
    ...p,
    className: dt(f, ...v, ...x)
  }, {
    as: l,
    bsPrefix: s,
    spans: v
  }];
}
const WC = /* @__PURE__ */ N.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (l, s) => {
    const [{
      className: f,
      ...p
    }, {
      as: m = "div",
      bsPrefix: g,
      spans: v
    }] = bj(l);
    return /* @__PURE__ */ X.jsx(m, {
      ...p,
      ref: s,
      className: dt(f, !v.length && g)
    });
  }
);
WC.displayName = "Col";
const M1 = /* @__PURE__ */ N.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "label",
  bsPrefix: s,
  column: f = !1,
  visuallyHidden: p = !1,
  className: m,
  htmlFor: g,
  ...v
}, x) => {
  const {
    controlId: b
  } = N.useContext(tu);
  s = _t(s, "form-label");
  let w = "col-form-label";
  typeof f == "string" && (w = `${w} ${w}-${f}`);
  const k = dt(m, s, p && "visually-hidden", f && w);
  return process.env.NODE_ENV !== "production" && k1(b == null || !g, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), g = g || b, f ? /* @__PURE__ */ X.jsx(WC, {
    ref: x,
    as: "label",
    className: k,
    htmlFor: g,
    ...v
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ X.jsx(l, {
      ref: x,
      className: k,
      htmlFor: g,
      ...v
    })
  );
});
M1.displayName = "FormLabel";
const A1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  id: f,
  ...p
}, m) => {
  const {
    controlId: g
  } = N.useContext(tu);
  return l = _t(l, "form-range"), /* @__PURE__ */ X.jsx("input", {
    ...p,
    type: "range",
    ref: m,
    className: dt(s, l),
    id: f || g
  });
});
A1.displayName = "FormRange";
const U1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  size: s,
  htmlSize: f,
  className: p,
  isValid: m = !1,
  isInvalid: g = !1,
  id: v,
  ...x
}, b) => {
  const {
    controlId: w
  } = N.useContext(tu);
  return l = _t(l, "form-select"), /* @__PURE__ */ X.jsx("select", {
    ...x,
    size: f,
    ref: b,
    className: dt(p, l, s && `${l}-${s}`, m && "is-valid", g && "is-invalid"),
    id: v || w
  });
});
U1.displayName = "FormSelect";
const j1 = /* @__PURE__ */ N.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: l,
    className: s,
    as: f = "small",
    muted: p,
    ...m
  }, g) => (l = _t(l, "form-text"), /* @__PURE__ */ X.jsx(f, {
    ...m,
    ref: g,
    className: dt(s, l, p && "text-muted")
  }))
);
j1.displayName = "FormText";
const z1 = /* @__PURE__ */ N.forwardRef((l, s) => /* @__PURE__ */ X.jsx(ig, {
  ...l,
  ref: s,
  type: "switch"
}));
z1.displayName = "Switch";
const wj = Object.assign(z1, {
  Input: ig.Input,
  Label: ig.Label
}), F1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  children: f,
  controlId: p,
  label: m,
  ...g
}, v) => (l = _t(l, "form-floating"), /* @__PURE__ */ X.jsxs(YC, {
  ref: v,
  className: dt(s, l),
  controlId: p,
  ...g,
  children: [f, /* @__PURE__ */ X.jsx("label", {
    htmlFor: p,
    children: m
  })]
})));
F1.displayName = "FloatingLabel";
const _j = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: Tt.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: Tt.bool,
  as: Tt.elementType
}, qC = /* @__PURE__ */ N.forwardRef(({
  className: l,
  validated: s,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: f = "form",
  ...p
}, m) => /* @__PURE__ */ X.jsx(f, {
  ...p,
  ref: m,
  className: dt(l, s && "was-validated")
}));
qC.displayName = "Form";
qC.propTypes = _j;
const wc = Object.assign(qC, {
  Group: YC,
  Control: xj,
  Floating: L1,
  Check: ig,
  Switch: wj,
  Label: M1,
  Text: j1,
  Range: A1,
  Select: U1,
  FloatingLabel: F1
});
var Gy;
function Sw(l) {
  if ((!Gy && Gy !== 0 || l) && kd) {
    var s = document.createElement("div");
    s.style.position = "absolute", s.style.top = "-9999px", s.style.width = "50px", s.style.height = "50px", s.style.overflow = "scroll", document.body.appendChild(s), Gy = s.offsetWidth - s.clientWidth, document.body.removeChild(s);
  }
  return Gy;
}
const P1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "modal-body"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
P1.displayName = "ModalBody";
const KC = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  contentClassName: f,
  centered: p,
  size: m,
  fullscreen: g,
  children: v,
  scrollable: x,
  ...b
}, w) => {
  l = _t(l, "modal");
  const k = `${l}-dialog`, O = typeof g == "string" ? `${l}-fullscreen-${g}` : `${l}-fullscreen`;
  return /* @__PURE__ */ X.jsx("div", {
    ...b,
    ref: w,
    className: dt(k, s, m && `${l}-${m}`, p && `${k}-centered`, x && `${k}-scrollable`, g && O),
    children: /* @__PURE__ */ X.jsx("div", {
      className: dt(`${l}-content`, f),
      children: v
    })
  });
});
KC.displayName = "ModalDialog";
const H1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "modal-footer"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
H1.displayName = "ModalFooter";
const B1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  closeLabel: f = "Close",
  closeButton: p = !1,
  ...m
}, g) => (l = _t(l, "modal-header"), /* @__PURE__ */ X.jsx(S1, {
  ref: g,
  ...m,
  className: dt(s, l),
  closeLabel: f,
  closeButton: p
})));
B1.displayName = "ModalHeader";
const Oj = fg("h4"), V1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = Oj,
  ...p
}, m) => (s = _t(s, "modal-title"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
V1.displayName = "ModalTitle";
function Dj(l) {
  return /* @__PURE__ */ X.jsx(cg, {
    ...l,
    timeout: null
  });
}
function kj(l) {
  return /* @__PURE__ */ X.jsx(cg, {
    ...l,
    timeout: null
  });
}
const $1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  style: f,
  dialogClassName: p,
  contentClassName: m,
  children: g,
  dialogAs: v = KC,
  "data-bs-theme": x,
  "aria-labelledby": b,
  "aria-describedby": w,
  "aria-label": k,
  /* BaseModal props */
  show: O = !1,
  animation: U = !0,
  backdrop: V = !0,
  keyboard: B = !0,
  onEscapeKeyDown: $,
  onShow: Q,
  onHide: pe,
  container: ie,
  autoFocus: ae = !0,
  enforceFocus: ce = !0,
  restoreFocus: J = !0,
  restoreFocusOptions: _e,
  onEntered: Me,
  onExit: vt,
  onExiting: Wt,
  onEnter: xt,
  onEntering: gt,
  onExited: Kt,
  backdropClassName: Ye,
  manager: tt,
  ...Ot
}, at) => {
  const [Oe, se] = N.useState({}), [Ve, I] = N.useState(!1), L = N.useRef(!1), W = N.useRef(!1), he = N.useRef(null), [me, Re] = uU(), we = Dd(at, Re), ke = si(pe), Ae = PA();
  l = _t(l, "modal");
  const Ue = N.useMemo(() => ({
    onHide: ke
  }), [ke]);
  function Ie() {
    return tt || T1({
      isRTL: Ae
    });
  }
  function Pt(Ct) {
    if (!kd)
      return;
    const an = Ie().getScrollbarWidth() > 0, cr = Ct.scrollHeight > sg(Ct).documentElement.clientHeight;
    se({
      paddingRight: an && !cr ? Sw() : void 0,
      paddingLeft: !an && cr ? Sw() : void 0
    });
  }
  const xe = si(() => {
    me && Pt(me.dialog);
  });
  p1(() => {
    SC(window, "resize", xe), he.current == null || he.current();
  });
  const Lt = () => {
    L.current = !0;
  }, rn = (Ct) => {
    L.current && me && Ct.target === me.dialog && (W.current = !0), L.current = !1;
  }, yt = () => {
    I(!0), he.current = s1(me.dialog, () => {
      I(!1);
    });
  }, bn = (Ct) => {
    Ct.target === Ct.currentTarget && yt();
  }, gn = (Ct) => {
    if (V === "static") {
      bn(Ct);
      return;
    }
    if (W.current || Ct.target !== Ct.currentTarget) {
      W.current = !1;
      return;
    }
    pe == null || pe();
  }, Nr = (Ct) => {
    B ? $ == null || $(Ct) : (Ct.preventDefault(), V === "static" && yt());
  }, Lr = (Ct, an) => {
    Ct && Pt(Ct), xt == null || xt(Ct, an);
  }, Qn = (Ct) => {
    he.current == null || he.current(), vt == null || vt(Ct);
  }, ur = (Ct, an) => {
    gt == null || gt(Ct, an), u1(window, "resize", xe);
  }, Mr = (Ct) => {
    Ct && (Ct.style.display = ""), Kt == null || Kt(Ct), SC(window, "resize", xe);
  }, sr = N.useCallback((Ct) => /* @__PURE__ */ X.jsx("div", {
    ...Ct,
    className: dt(`${l}-backdrop`, Ye, !U && "show")
  }), [U, Ye, l]), Ar = {
    ...f,
    ...Oe
  };
  Ar.display = "block";
  const tr = (Ct) => /* @__PURE__ */ X.jsx("div", {
    role: "dialog",
    ...Ct,
    style: Ar,
    className: dt(s, l, Ve && `${l}-static`, !U && "show"),
    onClick: V ? gn : void 0,
    onMouseUp: rn,
    "data-bs-theme": x,
    "aria-label": k,
    "aria-labelledby": b,
    "aria-describedby": w,
    children: /* @__PURE__ */ X.jsx(v, {
      ...Ot,
      onMouseDown: Lt,
      className: p,
      contentClassName: m,
      children: g
    })
  });
  return /* @__PURE__ */ X.jsx(VC.Provider, {
    value: Ue,
    children: /* @__PURE__ */ X.jsx(m1, {
      show: O,
      ref: we,
      backdrop: V,
      container: ie,
      keyboard: !0,
      autoFocus: ae,
      enforceFocus: ce,
      restoreFocus: J,
      restoreFocusOptions: _e,
      onEscapeKeyDown: Nr,
      onShow: Q,
      onHide: pe,
      onEnter: Lr,
      onEntering: ur,
      onEntered: Me,
      onExit: Qn,
      onExiting: Wt,
      onExited: Mr,
      manager: Ie(),
      transition: U ? Dj : void 0,
      backdropTransition: U ? kj : void 0,
      renderBackdrop: sr,
      renderDialog: tr
    })
  });
});
$1.displayName = "Modal";
const Fv = Object.assign($1, {
  Body: P1,
  Header: B1,
  Title: V1,
  Footer: H1,
  Dialog: KC,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});
function Nj({ show: l, setShow: s }) {
  const f = () => s(!1);
  return /* @__PURE__ */ X.jsx(X.Fragment, { children: /* @__PURE__ */ X.jsxs(Fv, { show: l, onHide: f, children: [
    /* @__PURE__ */ X.jsx(Fv.Header, { closeButton: !0, children: /* @__PURE__ */ X.jsx(Fv.Title, { children: "Modal heading" }) }),
    /* @__PURE__ */ X.jsx(Fv.Body, { children: /* @__PURE__ */ X.jsxs(wc, { children: [
      /* @__PURE__ */ X.jsxs(wc.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1", children: [
        /* @__PURE__ */ X.jsx(wc.Label, { children: "Email address" }),
        /* @__PURE__ */ X.jsx(
          wc.Control,
          {
            type: "email",
            placeholder: "name@example.com",
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ X.jsxs(
        wc.Group,
        {
          className: "mb-3",
          controlId: "exampleForm.ControlTextarea1",
          children: [
            /* @__PURE__ */ X.jsx(wc.Label, { children: "Example textarea" }),
            /* @__PURE__ */ X.jsx(wc.Control, { as: "textarea", rows: 3 })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ X.jsxs(Fv.Footer, { children: [
      /* @__PURE__ */ X.jsx(CC, { variant: "secondary", onClick: f, children: "Close" }),
      /* @__PURE__ */ X.jsx(CC, { variant: "primary", onClick: f, children: "Save Changes" })
    ] })
  ] }) });
}
function Lj() {
  const [l, s] = N.useState(!1), f = () => {
    s(!0);
  };
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsx(gj, { bg: "dark", "data-bs-theme": "dark", children: /* @__PURE__ */ X.jsxs(LC, { children: [
      /* @__PURE__ */ X.jsx(Vv, { to: "/", className: "navbar-brand", children: "Navbar" }),
      /* @__PURE__ */ X.jsxs(nw, { className: "me-auto", children: [
        /* @__PURE__ */ X.jsx(Vv, { to: "/", className: "nav-link", children: "Home" }),
        /* @__PURE__ */ X.jsx(Vv, { to: "/rick-and-morty", className: "nav-link", children: "Cards" }),
        /* @__PURE__ */ X.jsx(nw.Link, { href: "#pricing", onClick: f, children: "Login" })
      ] })
    ] }) }),
    /* @__PURE__ */ X.jsx(Nj, { show: l, setShow: s })
  ] });
}
const Mj = (l) => {
  const [s, f] = N.useState(0);
  return {
    activeIndex: s,
    goToIndex: (v) => {
      v >= 0 && v < l && f(v);
    },
    goToNext: () => {
      f((v) => v === l - 1 ? 0 : v + 1);
    },
    goToPrev: () => {
      f((v) => v === 0 ? l - 1 : v - 1);
    }
  };
}, Aj = (l, s, f = {}) => {
  const {
    transitionDuration: p = 500,
    transitionType: m = "fade",
    autoplay: g = !1,
    autoplayInterval: v = 3e3
  } = f, [x, b] = N.useState("");
  return N.useEffect(() => {
    let O;
    return g && (O = setTimeout(() => {
      b("next");
    }, v)), () => {
      O && clearTimeout(O);
    };
  }, [l, g, v]), { transitionDirection: x, nextTransition: () => {
    b("next");
  }, prevTransition: () => {
    b("prev");
  } };
}, QC = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "card-body"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
QC.displayName = "CardBody";
const I1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "card-footer"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
I1.displayName = "CardFooter";
const Y1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: f = "div",
  ...p
}, m) => {
  const g = _t(l, "card-header"), v = N.useMemo(() => ({
    cardHeaderBsPrefix: g
  }), [g]);
  return /* @__PURE__ */ X.jsx(jC.Provider, {
    value: v,
    children: /* @__PURE__ */ X.jsx(f, {
      ref: m,
      ...p,
      className: dt(s, g)
    })
  });
});
Y1.displayName = "CardHeader";
const W1 = /* @__PURE__ */ N.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: l,
    className: s,
    variant: f,
    as: p = "img",
    ...m
  }, g) => {
    const v = _t(l, "card-img");
    return /* @__PURE__ */ X.jsx(p, {
      ref: g,
      className: dt(f ? `${v}-${f}` : v, s),
      ...m
    });
  }
);
W1.displayName = "CardImg";
const q1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "div",
  ...p
}, m) => (s = _t(s, "card-img-overlay"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
q1.displayName = "CardImgOverlay";
const K1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "a",
  ...p
}, m) => (s = _t(s, "card-link"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
K1.displayName = "CardLink";
const Uj = fg("h6"), Q1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = Uj,
  ...p
}, m) => (s = _t(s, "card-subtitle"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
Q1.displayName = "CardSubtitle";
const G1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = "p",
  ...p
}, m) => (s = _t(s, "card-text"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
G1.displayName = "CardText";
const jj = fg("h5"), X1 = /* @__PURE__ */ N.forwardRef(({
  className: l,
  bsPrefix: s,
  as: f = jj,
  ...p
}, m) => (s = _t(s, "card-title"), /* @__PURE__ */ X.jsx(f, {
  ref: m,
  className: dt(l, s),
  ...p
})));
X1.displayName = "CardTitle";
const J1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  bg: f,
  text: p,
  border: m,
  body: g = !1,
  children: v,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: x = "div",
  ...b
}, w) => {
  const k = _t(l, "card");
  return /* @__PURE__ */ X.jsx(x, {
    ref: w,
    ...b,
    className: dt(s, k, f && `bg-${f}`, p && `text-${p}`, m && `border-${m}`),
    children: g ? /* @__PURE__ */ X.jsx(QC, {
      children: v
    }) : v
  });
});
J1.displayName = "Card";
const xd = Object.assign(J1, {
  Img: W1,
  Title: X1,
  Subtitle: Q1,
  Body: QC,
  Link: K1,
  Text: G1,
  Header: Y1,
  Footer: I1,
  ImgOverlay: q1
}), Z1 = /* @__PURE__ */ N.forwardRef(({
  bsPrefix: l,
  className: s,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: f = "div",
  ...p
}, m) => {
  const g = _t(l, "row"), v = Yw(), x = Ww(), b = `${g}-cols`, w = [];
  return v.forEach((k) => {
    const O = p[k];
    delete p[k];
    let U;
    O != null && typeof O == "object" ? {
      cols: U
    } = O : U = O;
    const V = k !== x ? `-${k}` : "";
    U != null && w.push(`${b}${V}-${U}`);
  }), /* @__PURE__ */ X.jsx(f, {
    ref: m,
    ...p,
    className: dt(s, g, ...w)
  });
});
Z1.displayName = "Row";
const zj = ({ images: l }) => {
  const { activeIndex: s, goToNext: f, goToPrev: p } = Mj(l.length), { transitionDirection: m, nextTransition: g, prevTransition: v } = Aj(s, l.length, {
    transitionDuration: 500,
    transitionType: "zoom"
  }), x = () => {
    v(), p();
  }, b = () => {
    g(), f();
  };
  return /* @__PURE__ */ X.jsx(LC, { fluid: !0, className: "p-0 carousel-container", children: /* @__PURE__ */ X.jsx("div", { className: "carousel", children: /* @__PURE__ */ X.jsx("div", { className: "carousel-content", children: l.map((w, k) => /* @__PURE__ */ X.jsxs("div", { className: `carousel-item ${k === s ? "active" : ""}`, children: [
    /* @__PURE__ */ X.jsxs("div", { className: "carousel-overlay", children: [
      w.title && /* @__PURE__ */ X.jsx("h2", { className: "carousel-title", children: w.title }),
      w.description && /* @__PURE__ */ X.jsx("p", { className: "carousel-description", children: w.description }),
      /* @__PURE__ */ X.jsxs("div", { className: "carousel-controls", children: [
        /* @__PURE__ */ X.jsx("button", { className: "control-btn prev-btn", onClick: x, children: "Previous" }),
        /* @__PURE__ */ X.jsx("button", { className: "control-btn next-btn", onClick: b, children: "Next" })
      ] })
    ] }),
    /* @__PURE__ */ X.jsx("img", { src: w.src, alt: `Slide ${k + 1}: ${w.title}` })
  ] }, k)) }) }) });
}, Fj = [
  {
    src: "https://media.istockphoto.com/id/517188688/es/foto/paisaje-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=EnSd5sJdxih_svZHscQ5Hfzr3RSOdXO9MpdmKK4CMTs=",
    title: "Paisaje de montaña",
    description: "Una hermosa vista de las montañas"
  },
  {
    src: "https://content.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
    title: "Playa de Isuntza",
    description: "Una playa tranquila y hermosa"
  }
];
function Pj() {
  return /* @__PURE__ */ X.jsx(zj, { images: Fj, items: [] });
}
function e_(l, s) {
  return function() {
    return l.apply(s, arguments);
  };
}
const { toString: Hj } = Object.prototype, { getPrototypeOf: GC } = Object, pg = /* @__PURE__ */ ((l) => (s) => {
  const f = Hj.call(s);
  return l[f] || (l[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), fl = (l) => (l = l.toLowerCase(), (s) => pg(s) === l), vg = (l) => (s) => typeof s === l, { isArray: Nd } = Array, Kv = vg("undefined");
function Bj(l) {
  return l !== null && !Kv(l) && l.constructor !== null && !Kv(l.constructor) && $i(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const t_ = fl("ArrayBuffer");
function Vj(l) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(l) : s = l && l.buffer && t_(l.buffer), s;
}
const $j = vg("string"), $i = vg("function"), n_ = vg("number"), hg = (l) => l !== null && typeof l == "object", Ij = (l) => l === !0 || l === !1, Zy = (l) => {
  if (pg(l) !== "object")
    return !1;
  const s = GC(l);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l);
}, Yj = fl("Date"), Wj = fl("File"), qj = fl("Blob"), Kj = fl("FileList"), Qj = (l) => hg(l) && $i(l.pipe), Gj = (l) => {
  let s;
  return l && (typeof FormData == "function" && l instanceof FormData || $i(l.append) && ((s = pg(l)) === "formdata" || // detect form-data instance
  s === "object" && $i(l.toString) && l.toString() === "[object FormData]"));
}, Xj = fl("URLSearchParams"), Jj = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function eh(l, s, { allOwnKeys: f = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let p, m;
  if (typeof l != "object" && (l = [l]), Nd(l))
    for (p = 0, m = l.length; p < m; p++)
      s.call(null, l[p], p, l);
  else {
    const g = f ? Object.getOwnPropertyNames(l) : Object.keys(l), v = g.length;
    let x;
    for (p = 0; p < v; p++)
      x = g[p], s.call(null, l[x], x, l);
  }
}
function r_(l, s) {
  s = s.toLowerCase();
  const f = Object.keys(l);
  let p = f.length, m;
  for (; p-- > 0; )
    if (m = f[p], s === m.toLowerCase())
      return m;
  return null;
}
const a_ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, i_ = (l) => !Kv(l) && l !== a_;
function RC() {
  const { caseless: l } = i_(this) && this || {}, s = {}, f = (p, m) => {
    const g = l && r_(s, m) || m;
    Zy(s[g]) && Zy(p) ? s[g] = RC(s[g], p) : Zy(p) ? s[g] = RC({}, p) : Nd(p) ? s[g] = p.slice() : s[g] = p;
  };
  for (let p = 0, m = arguments.length; p < m; p++)
    arguments[p] && eh(arguments[p], f);
  return s;
}
const Zj = (l, s, f, { allOwnKeys: p } = {}) => (eh(s, (m, g) => {
  f && $i(m) ? l[g] = e_(m, f) : l[g] = m;
}, { allOwnKeys: p }), l), ez = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), tz = (l, s, f, p) => {
  l.prototype = Object.create(s.prototype, p), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: s.prototype
  }), f && Object.assign(l.prototype, f);
}, nz = (l, s, f, p) => {
  let m, g, v;
  const x = {};
  if (s = s || {}, l == null)
    return s;
  do {
    for (m = Object.getOwnPropertyNames(l), g = m.length; g-- > 0; )
      v = m[g], (!p || p(v, l, s)) && !x[v] && (s[v] = l[v], x[v] = !0);
    l = f !== !1 && GC(l);
  } while (l && (!f || f(l, s)) && l !== Object.prototype);
  return s;
}, rz = (l, s, f) => {
  l = String(l), (f === void 0 || f > l.length) && (f = l.length), f -= s.length;
  const p = l.indexOf(s, f);
  return p !== -1 && p === f;
}, az = (l) => {
  if (!l)
    return null;
  if (Nd(l))
    return l;
  let s = l.length;
  if (!n_(s))
    return null;
  const f = new Array(s);
  for (; s-- > 0; )
    f[s] = l[s];
  return f;
}, iz = /* @__PURE__ */ ((l) => (s) => l && s instanceof l)(typeof Uint8Array < "u" && GC(Uint8Array)), oz = (l, s) => {
  const p = (l && l[Symbol.iterator]).call(l);
  let m;
  for (; (m = p.next()) && !m.done; ) {
    const g = m.value;
    s.call(l, g[0], g[1]);
  }
}, lz = (l, s) => {
  let f;
  const p = [];
  for (; (f = l.exec(s)) !== null; )
    p.push(f);
  return p;
}, uz = fl("HTMLFormElement"), sz = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, p, m) {
    return p.toUpperCase() + m;
  }
), Ew = (({ hasOwnProperty: l }) => (s, f) => l.call(s, f))(Object.prototype), cz = fl("RegExp"), o_ = (l, s) => {
  const f = Object.getOwnPropertyDescriptors(l), p = {};
  eh(f, (m, g) => {
    let v;
    (v = s(m, g, l)) !== !1 && (p[g] = v || m);
  }), Object.defineProperties(l, p);
}, fz = (l) => {
  o_(l, (s, f) => {
    if ($i(l) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
      return !1;
    const p = l[f];
    if ($i(p)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + f + "'");
      });
    }
  });
}, dz = (l, s) => {
  const f = {}, p = (m) => {
    m.forEach((g) => {
      f[g] = !0;
    });
  };
  return Nd(l) ? p(l) : p(String(l).split(s)), f;
}, pz = () => {
}, vz = (l, s) => (l = +l, Number.isFinite(l) ? l : s), tC = "abcdefghijklmnopqrstuvwxyz", Cw = "0123456789", l_ = {
  DIGIT: Cw,
  ALPHA: tC,
  ALPHA_DIGIT: tC + tC.toUpperCase() + Cw
}, hz = (l = 16, s = l_.ALPHA_DIGIT) => {
  let f = "";
  const { length: p } = s;
  for (; l--; )
    f += s[Math.random() * p | 0];
  return f;
};
function mz(l) {
  return !!(l && $i(l.append) && l[Symbol.toStringTag] === "FormData" && l[Symbol.iterator]);
}
const yz = (l) => {
  const s = new Array(10), f = (p, m) => {
    if (hg(p)) {
      if (s.indexOf(p) >= 0)
        return;
      if (!("toJSON" in p)) {
        s[m] = p;
        const g = Nd(p) ? [] : {};
        return eh(p, (v, x) => {
          const b = f(v, m + 1);
          !Kv(b) && (g[x] = b);
        }), s[m] = void 0, g;
      }
    }
    return p;
  };
  return f(l, 0);
}, gz = fl("AsyncFunction"), Sz = (l) => l && (hg(l) || $i(l)) && $i(l.then) && $i(l.catch), fe = {
  isArray: Nd,
  isArrayBuffer: t_,
  isBuffer: Bj,
  isFormData: Gj,
  isArrayBufferView: Vj,
  isString: $j,
  isNumber: n_,
  isBoolean: Ij,
  isObject: hg,
  isPlainObject: Zy,
  isUndefined: Kv,
  isDate: Yj,
  isFile: Wj,
  isBlob: qj,
  isRegExp: cz,
  isFunction: $i,
  isStream: Qj,
  isURLSearchParams: Xj,
  isTypedArray: iz,
  isFileList: Kj,
  forEach: eh,
  merge: RC,
  extend: Zj,
  trim: Jj,
  stripBOM: ez,
  inherits: tz,
  toFlatObject: nz,
  kindOf: pg,
  kindOfTest: fl,
  endsWith: rz,
  toArray: az,
  forEachEntry: oz,
  matchAll: lz,
  isHTMLForm: uz,
  hasOwnProperty: Ew,
  hasOwnProp: Ew,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: o_,
  freezeMethods: fz,
  toObjectSet: dz,
  toCamelCase: sz,
  noop: pz,
  toFiniteNumber: vz,
  findKey: r_,
  global: a_,
  isContextDefined: i_,
  ALPHABET: l_,
  generateString: hz,
  isSpecCompliantForm: mz,
  toJSONObject: yz,
  isAsyncFn: gz,
  isThenable: Sz
};
function en(l, s, f, p, m) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", s && (this.code = s), f && (this.config = f), p && (this.request = p), m && (this.response = m);
}
fe.inherits(en, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: fe.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const u_ = en.prototype, s_ = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((l) => {
  s_[l] = { value: l };
});
Object.defineProperties(en, s_);
Object.defineProperty(u_, "isAxiosError", { value: !0 });
en.from = (l, s, f, p, m, g) => {
  const v = Object.create(u_);
  return fe.toFlatObject(l, v, function(b) {
    return b !== Error.prototype;
  }, (x) => x !== "isAxiosError"), en.call(v, l.message, s, f, p, m), v.cause = l, v.name = l.name, g && Object.assign(v, g), v;
};
const Ez = null;
function TC(l) {
  return fe.isPlainObject(l) || fe.isArray(l);
}
function c_(l) {
  return fe.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function Rw(l, s, f) {
  return l ? l.concat(s).map(function(m, g) {
    return m = c_(m), !f && g ? "[" + m + "]" : m;
  }).join(f ? "." : "") : s;
}
function Cz(l) {
  return fe.isArray(l) && !l.some(TC);
}
const Rz = fe.toFlatObject(fe, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function mg(l, s, f) {
  if (!fe.isObject(l))
    throw new TypeError("target must be an object");
  s = s || new FormData(), f = fe.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function($, Q) {
    return !fe.isUndefined(Q[$]);
  });
  const p = f.metaTokens, m = f.visitor || k, g = f.dots, v = f.indexes, b = (f.Blob || typeof Blob < "u" && Blob) && fe.isSpecCompliantForm(s);
  if (!fe.isFunction(m))
    throw new TypeError("visitor must be a function");
  function w(B) {
    if (B === null)
      return "";
    if (fe.isDate(B))
      return B.toISOString();
    if (!b && fe.isBlob(B))
      throw new en("Blob is not supported. Use a Buffer instead.");
    return fe.isArrayBuffer(B) || fe.isTypedArray(B) ? b && typeof Blob == "function" ? new Blob([B]) : Buffer.from(B) : B;
  }
  function k(B, $, Q) {
    let pe = B;
    if (B && !Q && typeof B == "object") {
      if (fe.endsWith($, "{}"))
        $ = p ? $ : $.slice(0, -2), B = JSON.stringify(B);
      else if (fe.isArray(B) && Cz(B) || (fe.isFileList(B) || fe.endsWith($, "[]")) && (pe = fe.toArray(B)))
        return $ = c_($), pe.forEach(function(ae, ce) {
          !(fe.isUndefined(ae) || ae === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            v === !0 ? Rw([$], ce, g) : v === null ? $ : $ + "[]",
            w(ae)
          );
        }), !1;
    }
    return TC(B) ? !0 : (s.append(Rw(Q, $, g), w(B)), !1);
  }
  const O = [], U = Object.assign(Rz, {
    defaultVisitor: k,
    convertValue: w,
    isVisitable: TC
  });
  function V(B, $) {
    if (!fe.isUndefined(B)) {
      if (O.indexOf(B) !== -1)
        throw Error("Circular reference detected in " + $.join("."));
      O.push(B), fe.forEach(B, function(pe, ie) {
        (!(fe.isUndefined(pe) || pe === null) && m.call(
          s,
          pe,
          fe.isString(ie) ? ie.trim() : ie,
          $,
          U
        )) === !0 && V(pe, $ ? $.concat(ie) : [ie]);
      }), O.pop();
    }
  }
  if (!fe.isObject(l))
    throw new TypeError("data must be an object");
  return V(l), s;
}
function Tw(l) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function(p) {
    return s[p];
  });
}
function XC(l, s) {
  this._pairs = [], l && mg(l, this, s);
}
const f_ = XC.prototype;
f_.append = function(s, f) {
  this._pairs.push([s, f]);
};
f_.toString = function(s) {
  const f = s ? function(p) {
    return s.call(this, p, Tw);
  } : Tw;
  return this._pairs.map(function(m) {
    return f(m[0]) + "=" + f(m[1]);
  }, "").join("&");
};
function Tz(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function d_(l, s, f) {
  if (!s)
    return l;
  const p = f && f.encode || Tz, m = f && f.serialize;
  let g;
  if (m ? g = m(s, f) : g = fe.isURLSearchParams(s) ? s.toString() : new XC(s, f).toString(p), g) {
    const v = l.indexOf("#");
    v !== -1 && (l = l.slice(0, v)), l += (l.indexOf("?") === -1 ? "?" : "&") + g;
  }
  return l;
}
class xw {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(s, f, p) {
    return this.handlers.push({
      fulfilled: s,
      rejected: f,
      synchronous: p ? p.synchronous : !1,
      runWhen: p ? p.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(s) {
    fe.forEach(this.handlers, function(p) {
      p !== null && s(p);
    });
  }
}
const p_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xz = typeof URLSearchParams < "u" ? URLSearchParams : XC, bz = typeof FormData < "u" ? FormData : null, wz = typeof Blob < "u" ? Blob : null, _z = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xz,
    FormData: bz,
    Blob: wz
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, v_ = typeof window < "u" && typeof document < "u", Oz = ((l) => v_ && ["ReactNative", "NativeScript", "NS"].indexOf(l) < 0)(typeof navigator < "u" && navigator.product), Dz = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: v_,
  hasStandardBrowserEnv: Oz,
  hasStandardBrowserWebWorkerEnv: Dz
}, Symbol.toStringTag, { value: "Module" })), sl = {
  ...kz,
  ..._z
};
function Nz(l, s) {
  return mg(l, new sl.classes.URLSearchParams(), Object.assign({
    visitor: function(f, p, m, g) {
      return sl.isNode && fe.isBuffer(f) ? (this.append(p, f.toString("base64")), !1) : g.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function Lz(l) {
  return fe.matchAll(/\w+|\[(\w*)]/g, l).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Mz(l) {
  const s = {}, f = Object.keys(l);
  let p;
  const m = f.length;
  let g;
  for (p = 0; p < m; p++)
    g = f[p], s[g] = l[g];
  return s;
}
function h_(l) {
  function s(f, p, m, g) {
    let v = f[g++];
    if (v === "__proto__")
      return !0;
    const x = Number.isFinite(+v), b = g >= f.length;
    return v = !v && fe.isArray(m) ? m.length : v, b ? (fe.hasOwnProp(m, v) ? m[v] = [m[v], p] : m[v] = p, !x) : ((!m[v] || !fe.isObject(m[v])) && (m[v] = []), s(f, p, m[v], g) && fe.isArray(m[v]) && (m[v] = Mz(m[v])), !x);
  }
  if (fe.isFormData(l) && fe.isFunction(l.entries)) {
    const f = {};
    return fe.forEachEntry(l, (p, m) => {
      s(Lz(p), m, f, 0);
    }), f;
  }
  return null;
}
function Az(l, s, f) {
  if (fe.isString(l))
    try {
      return (s || JSON.parse)(l), fe.trim(l);
    } catch (p) {
      if (p.name !== "SyntaxError")
        throw p;
    }
  return (f || JSON.stringify)(l);
}
const th = {
  transitional: p_,
  adapter: ["xhr", "http"],
  transformRequest: [function(s, f) {
    const p = f.getContentType() || "", m = p.indexOf("application/json") > -1, g = fe.isObject(s);
    if (g && fe.isHTMLForm(s) && (s = new FormData(s)), fe.isFormData(s))
      return m ? JSON.stringify(h_(s)) : s;
    if (fe.isArrayBuffer(s) || fe.isBuffer(s) || fe.isStream(s) || fe.isFile(s) || fe.isBlob(s))
      return s;
    if (fe.isArrayBufferView(s))
      return s.buffer;
    if (fe.isURLSearchParams(s))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let x;
    if (g) {
      if (p.indexOf("application/x-www-form-urlencoded") > -1)
        return Nz(s, this.formSerializer).toString();
      if ((x = fe.isFileList(s)) || p.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return mg(
          x ? { "files[]": s } : s,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return g || m ? (f.setContentType("application/json", !1), Az(s)) : s;
  }],
  transformResponse: [function(s) {
    const f = this.transitional || th.transitional, p = f && f.forcedJSONParsing, m = this.responseType === "json";
    if (s && fe.isString(s) && (p && !this.responseType || m)) {
      const v = !(f && f.silentJSONParsing) && m;
      try {
        return JSON.parse(s);
      } catch (x) {
        if (v)
          throw x.name === "SyntaxError" ? en.from(x, en.ERR_BAD_RESPONSE, this, null, this.response) : x;
      }
    }
    return s;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: sl.classes.FormData,
    Blob: sl.classes.Blob
  },
  validateStatus: function(s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
fe.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  th.headers[l] = {};
});
const Uz = fe.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), jz = (l) => {
  const s = {};
  let f, p, m;
  return l && l.split(`
`).forEach(function(v) {
    m = v.indexOf(":"), f = v.substring(0, m).trim().toLowerCase(), p = v.substring(m + 1).trim(), !(!f || s[f] && Uz[f]) && (f === "set-cookie" ? s[f] ? s[f].push(p) : s[f] = [p] : s[f] = s[f] ? s[f] + ", " + p : p);
  }), s;
}, bw = Symbol("internals");
function Pv(l) {
  return l && String(l).trim().toLowerCase();
}
function eg(l) {
  return l === !1 || l == null ? l : fe.isArray(l) ? l.map(eg) : String(l);
}
function zz(l) {
  const s = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let p;
  for (; p = f.exec(l); )
    s[p[1]] = p[2];
  return s;
}
const Fz = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function nC(l, s, f, p, m) {
  if (fe.isFunction(p))
    return p.call(this, s, f);
  if (m && (s = f), !!fe.isString(s)) {
    if (fe.isString(p))
      return s.indexOf(p) !== -1;
    if (fe.isRegExp(p))
      return p.test(s);
  }
}
function Pz(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, f, p) => f.toUpperCase() + p);
}
function Hz(l, s) {
  const f = fe.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((p) => {
    Object.defineProperty(l, p + f, {
      value: function(m, g, v) {
        return this[p].call(this, s, m, g, v);
      },
      configurable: !0
    });
  });
}
class Ii {
  constructor(s) {
    s && this.set(s);
  }
  set(s, f, p) {
    const m = this;
    function g(x, b, w) {
      const k = Pv(b);
      if (!k)
        throw new Error("header name must be a non-empty string");
      const O = fe.findKey(m, k);
      (!O || m[O] === void 0 || w === !0 || w === void 0 && m[O] !== !1) && (m[O || b] = eg(x));
    }
    const v = (x, b) => fe.forEach(x, (w, k) => g(w, k, b));
    return fe.isPlainObject(s) || s instanceof this.constructor ? v(s, f) : fe.isString(s) && (s = s.trim()) && !Fz(s) ? v(jz(s), f) : s != null && g(f, s, p), this;
  }
  get(s, f) {
    if (s = Pv(s), s) {
      const p = fe.findKey(this, s);
      if (p) {
        const m = this[p];
        if (!f)
          return m;
        if (f === !0)
          return zz(m);
        if (fe.isFunction(f))
          return f.call(this, m, p);
        if (fe.isRegExp(f))
          return f.exec(m);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, f) {
    if (s = Pv(s), s) {
      const p = fe.findKey(this, s);
      return !!(p && this[p] !== void 0 && (!f || nC(this, this[p], p, f)));
    }
    return !1;
  }
  delete(s, f) {
    const p = this;
    let m = !1;
    function g(v) {
      if (v = Pv(v), v) {
        const x = fe.findKey(p, v);
        x && (!f || nC(p, p[x], x, f)) && (delete p[x], m = !0);
      }
    }
    return fe.isArray(s) ? s.forEach(g) : g(s), m;
  }
  clear(s) {
    const f = Object.keys(this);
    let p = f.length, m = !1;
    for (; p--; ) {
      const g = f[p];
      (!s || nC(this, this[g], g, s, !0)) && (delete this[g], m = !0);
    }
    return m;
  }
  normalize(s) {
    const f = this, p = {};
    return fe.forEach(this, (m, g) => {
      const v = fe.findKey(p, g);
      if (v) {
        f[v] = eg(m), delete f[g];
        return;
      }
      const x = s ? Pz(g) : String(g).trim();
      x !== g && delete f[g], f[x] = eg(m), p[x] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const f = /* @__PURE__ */ Object.create(null);
    return fe.forEach(this, (p, m) => {
      p != null && p !== !1 && (f[m] = s && fe.isArray(p) ? p.join(", ") : p);
    }), f;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, f]) => s + ": " + f).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...f) {
    const p = new this(s);
    return f.forEach((m) => p.set(m)), p;
  }
  static accessor(s) {
    const p = (this[bw] = this[bw] = {
      accessors: {}
    }).accessors, m = this.prototype;
    function g(v) {
      const x = Pv(v);
      p[x] || (Hz(m, v), p[x] = !0);
    }
    return fe.isArray(s) ? s.forEach(g) : g(s), this;
  }
}
Ii.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
fe.reduceDescriptors(Ii.prototype, ({ value: l }, s) => {
  let f = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => l,
    set(p) {
      this[f] = p;
    }
  };
});
fe.freezeMethods(Ii);
function rC(l, s) {
  const f = this || th, p = s || f, m = Ii.from(p.headers);
  let g = p.data;
  return fe.forEach(l, function(x) {
    g = x.call(f, g, m.normalize(), s ? s.status : void 0);
  }), m.normalize(), g;
}
function m_(l) {
  return !!(l && l.__CANCEL__);
}
function nh(l, s, f) {
  en.call(this, l ?? "canceled", en.ERR_CANCELED, s, f), this.name = "CanceledError";
}
fe.inherits(nh, en, {
  __CANCEL__: !0
});
function Bz(l, s, f) {
  const p = f.config.validateStatus;
  !f.status || !p || p(f.status) ? l(f) : s(new en(
    "Request failed with status code " + f.status,
    [en.ERR_BAD_REQUEST, en.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
const Vz = sl.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, s, f, p, m, g) {
      const v = [l + "=" + encodeURIComponent(s)];
      fe.isNumber(f) && v.push("expires=" + new Date(f).toGMTString()), fe.isString(p) && v.push("path=" + p), fe.isString(m) && v.push("domain=" + m), g === !0 && v.push("secure"), document.cookie = v.join("; ");
    },
    read(l) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
    },
    remove(l) {
      this.write(l, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function $z(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Iz(l, s) {
  return s ? l.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : l;
}
function y_(l, s) {
  return l && !$z(s) ? Iz(l, s) : s;
}
const Yz = sl.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = /(msie|trident)/i.test(navigator.userAgent), f = document.createElement("a");
    let p;
    function m(g) {
      let v = g;
      return s && (f.setAttribute("href", v), v = f.href), f.setAttribute("href", v), {
        href: f.href,
        protocol: f.protocol ? f.protocol.replace(/:$/, "") : "",
        host: f.host,
        search: f.search ? f.search.replace(/^\?/, "") : "",
        hash: f.hash ? f.hash.replace(/^#/, "") : "",
        hostname: f.hostname,
        port: f.port,
        pathname: f.pathname.charAt(0) === "/" ? f.pathname : "/" + f.pathname
      };
    }
    return p = m(window.location.href), function(v) {
      const x = fe.isString(v) ? m(v) : v;
      return x.protocol === p.protocol && x.host === p.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Wz(l) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return s && s[1] || "";
}
function qz(l, s) {
  l = l || 10;
  const f = new Array(l), p = new Array(l);
  let m = 0, g = 0, v;
  return s = s !== void 0 ? s : 1e3, function(b) {
    const w = Date.now(), k = p[g];
    v || (v = w), f[m] = b, p[m] = w;
    let O = g, U = 0;
    for (; O !== m; )
      U += f[O++], O = O % l;
    if (m = (m + 1) % l, m === g && (g = (g + 1) % l), w - v < s)
      return;
    const V = k && w - k;
    return V ? Math.round(U * 1e3 / V) : void 0;
  };
}
function ww(l, s) {
  let f = 0;
  const p = qz(50, 250);
  return (m) => {
    const g = m.loaded, v = m.lengthComputable ? m.total : void 0, x = g - f, b = p(x), w = g <= v;
    f = g;
    const k = {
      loaded: g,
      total: v,
      progress: v ? g / v : void 0,
      bytes: x,
      rate: b || void 0,
      estimated: b && v && w ? (v - g) / b : void 0,
      event: m
    };
    k[s ? "download" : "upload"] = !0, l(k);
  };
}
const Kz = typeof XMLHttpRequest < "u", Qz = Kz && function(l) {
  return new Promise(function(f, p) {
    let m = l.data;
    const g = Ii.from(l.headers).normalize();
    let { responseType: v, withXSRFToken: x } = l, b;
    function w() {
      l.cancelToken && l.cancelToken.unsubscribe(b), l.signal && l.signal.removeEventListener("abort", b);
    }
    let k;
    if (fe.isFormData(m)) {
      if (sl.hasStandardBrowserEnv || sl.hasStandardBrowserWebWorkerEnv)
        g.setContentType(!1);
      else if ((k = g.getContentType()) !== !1) {
        const [$, ...Q] = k ? k.split(";").map((pe) => pe.trim()).filter(Boolean) : [];
        g.setContentType([$ || "multipart/form-data", ...Q].join("; "));
      }
    }
    let O = new XMLHttpRequest();
    if (l.auth) {
      const $ = l.auth.username || "", Q = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
      g.set("Authorization", "Basic " + btoa($ + ":" + Q));
    }
    const U = y_(l.baseURL, l.url);
    O.open(l.method.toUpperCase(), d_(U, l.params, l.paramsSerializer), !0), O.timeout = l.timeout;
    function V() {
      if (!O)
        return;
      const $ = Ii.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), pe = {
        data: !v || v === "text" || v === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: $,
        config: l,
        request: O
      };
      Bz(function(ae) {
        f(ae), w();
      }, function(ae) {
        p(ae), w();
      }, pe), O = null;
    }
    if ("onloadend" in O ? O.onloadend = V : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, O.onabort = function() {
      O && (p(new en("Request aborted", en.ECONNABORTED, l, O)), O = null);
    }, O.onerror = function() {
      p(new en("Network Error", en.ERR_NETWORK, l, O)), O = null;
    }, O.ontimeout = function() {
      let Q = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
      const pe = l.transitional || p_;
      l.timeoutErrorMessage && (Q = l.timeoutErrorMessage), p(new en(
        Q,
        pe.clarifyTimeoutError ? en.ETIMEDOUT : en.ECONNABORTED,
        l,
        O
      )), O = null;
    }, sl.hasStandardBrowserEnv && (x && fe.isFunction(x) && (x = x(l)), x || x !== !1 && Yz(U))) {
      const $ = l.xsrfHeaderName && l.xsrfCookieName && Vz.read(l.xsrfCookieName);
      $ && g.set(l.xsrfHeaderName, $);
    }
    m === void 0 && g.setContentType(null), "setRequestHeader" in O && fe.forEach(g.toJSON(), function(Q, pe) {
      O.setRequestHeader(pe, Q);
    }), fe.isUndefined(l.withCredentials) || (O.withCredentials = !!l.withCredentials), v && v !== "json" && (O.responseType = l.responseType), typeof l.onDownloadProgress == "function" && O.addEventListener("progress", ww(l.onDownloadProgress, !0)), typeof l.onUploadProgress == "function" && O.upload && O.upload.addEventListener("progress", ww(l.onUploadProgress)), (l.cancelToken || l.signal) && (b = ($) => {
      O && (p(!$ || $.type ? new nh(null, l, O) : $), O.abort(), O = null);
    }, l.cancelToken && l.cancelToken.subscribe(b), l.signal && (l.signal.aborted ? b() : l.signal.addEventListener("abort", b)));
    const B = Wz(U);
    if (B && sl.protocols.indexOf(B) === -1) {
      p(new en("Unsupported protocol " + B + ":", en.ERR_BAD_REQUEST, l));
      return;
    }
    O.send(m || null);
  });
}, xC = {
  http: Ez,
  xhr: Qz
};
fe.forEach(xC, (l, s) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: s });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: s });
  }
});
const _w = (l) => `- ${l}`, Gz = (l) => fe.isFunction(l) || l === null || l === !1, g_ = {
  getAdapter: (l) => {
    l = fe.isArray(l) ? l : [l];
    const { length: s } = l;
    let f, p;
    const m = {};
    for (let g = 0; g < s; g++) {
      f = l[g];
      let v;
      if (p = f, !Gz(f) && (p = xC[(v = String(f)).toLowerCase()], p === void 0))
        throw new en(`Unknown adapter '${v}'`);
      if (p)
        break;
      m[v || "#" + g] = p;
    }
    if (!p) {
      const g = Object.entries(m).map(
        ([x, b]) => `adapter ${x} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let v = s ? g.length > 1 ? `since :
` + g.map(_w).join(`
`) : " " + _w(g[0]) : "as no adapter specified";
      throw new en(
        "There is no suitable adapter to dispatch the request " + v,
        "ERR_NOT_SUPPORT"
      );
    }
    return p;
  },
  adapters: xC
};
function aC(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new nh(null, l);
}
function Ow(l) {
  return aC(l), l.headers = Ii.from(l.headers), l.data = rC.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), g_.getAdapter(l.adapter || th.adapter)(l).then(function(p) {
    return aC(l), p.data = rC.call(
      l,
      l.transformResponse,
      p
    ), p.headers = Ii.from(p.headers), p;
  }, function(p) {
    return m_(p) || (aC(l), p && p.response && (p.response.data = rC.call(
      l,
      l.transformResponse,
      p.response
    ), p.response.headers = Ii.from(p.response.headers))), Promise.reject(p);
  });
}
const Dw = (l) => l instanceof Ii ? { ...l } : l;
function wd(l, s) {
  s = s || {};
  const f = {};
  function p(w, k, O) {
    return fe.isPlainObject(w) && fe.isPlainObject(k) ? fe.merge.call({ caseless: O }, w, k) : fe.isPlainObject(k) ? fe.merge({}, k) : fe.isArray(k) ? k.slice() : k;
  }
  function m(w, k, O) {
    if (fe.isUndefined(k)) {
      if (!fe.isUndefined(w))
        return p(void 0, w, O);
    } else
      return p(w, k, O);
  }
  function g(w, k) {
    if (!fe.isUndefined(k))
      return p(void 0, k);
  }
  function v(w, k) {
    if (fe.isUndefined(k)) {
      if (!fe.isUndefined(w))
        return p(void 0, w);
    } else
      return p(void 0, k);
  }
  function x(w, k, O) {
    if (O in s)
      return p(w, k);
    if (O in l)
      return p(void 0, w);
  }
  const b = {
    url: g,
    method: g,
    data: g,
    baseURL: v,
    transformRequest: v,
    transformResponse: v,
    paramsSerializer: v,
    timeout: v,
    timeoutMessage: v,
    withCredentials: v,
    withXSRFToken: v,
    adapter: v,
    responseType: v,
    xsrfCookieName: v,
    xsrfHeaderName: v,
    onUploadProgress: v,
    onDownloadProgress: v,
    decompress: v,
    maxContentLength: v,
    maxBodyLength: v,
    beforeRedirect: v,
    transport: v,
    httpAgent: v,
    httpsAgent: v,
    cancelToken: v,
    socketPath: v,
    responseEncoding: v,
    validateStatus: x,
    headers: (w, k) => m(Dw(w), Dw(k), !0)
  };
  return fe.forEach(Object.keys(Object.assign({}, l, s)), function(k) {
    const O = b[k] || m, U = O(l[k], s[k], k);
    fe.isUndefined(U) && O !== x || (f[k] = U);
  }), f;
}
const S_ = "1.6.8", JC = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, s) => {
  JC[l] = function(p) {
    return typeof p === l || "a" + (s < 1 ? "n " : " ") + l;
  };
});
const kw = {};
JC.transitional = function(s, f, p) {
  function m(g, v) {
    return "[Axios v" + S_ + "] Transitional option '" + g + "'" + v + (p ? ". " + p : "");
  }
  return (g, v, x) => {
    if (s === !1)
      throw new en(
        m(v, " has been removed" + (f ? " in " + f : "")),
        en.ERR_DEPRECATED
      );
    return f && !kw[v] && (kw[v] = !0, console.warn(
      m(
        v,
        " has been deprecated since v" + f + " and will be removed in the near future"
      )
    )), s ? s(g, v, x) : !0;
  };
};
function Xz(l, s, f) {
  if (typeof l != "object")
    throw new en("options must be an object", en.ERR_BAD_OPTION_VALUE);
  const p = Object.keys(l);
  let m = p.length;
  for (; m-- > 0; ) {
    const g = p[m], v = s[g];
    if (v) {
      const x = l[g], b = x === void 0 || v(x, g, l);
      if (b !== !0)
        throw new en("option " + g + " must be " + b, en.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new en("Unknown option " + g, en.ERR_BAD_OPTION);
  }
}
const bC = {
  assertOptions: Xz,
  validators: JC
}, ms = bC.validators;
class Dc {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new xw(),
      response: new xw()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(s, f) {
    try {
      return await this._request(s, f);
    } catch (p) {
      if (p instanceof Error) {
        let m;
        Error.captureStackTrace ? Error.captureStackTrace(m = {}) : m = new Error();
        const g = m.stack ? m.stack.replace(/^.+\n/, "") : "";
        p.stack ? g && !String(p.stack).endsWith(g.replace(/^.+\n.+\n/, "")) && (p.stack += `
` + g) : p.stack = g;
      }
      throw p;
    }
  }
  _request(s, f) {
    typeof s == "string" ? (f = f || {}, f.url = s) : f = s || {}, f = wd(this.defaults, f);
    const { transitional: p, paramsSerializer: m, headers: g } = f;
    p !== void 0 && bC.assertOptions(p, {
      silentJSONParsing: ms.transitional(ms.boolean),
      forcedJSONParsing: ms.transitional(ms.boolean),
      clarifyTimeoutError: ms.transitional(ms.boolean)
    }, !1), m != null && (fe.isFunction(m) ? f.paramsSerializer = {
      serialize: m
    } : bC.assertOptions(m, {
      encode: ms.function,
      serialize: ms.function
    }, !0)), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let v = g && fe.merge(
      g.common,
      g[f.method]
    );
    g && fe.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (B) => {
        delete g[B];
      }
    ), f.headers = Ii.concat(v, g);
    const x = [];
    let b = !0;
    this.interceptors.request.forEach(function($) {
      typeof $.runWhen == "function" && $.runWhen(f) === !1 || (b = b && $.synchronous, x.unshift($.fulfilled, $.rejected));
    });
    const w = [];
    this.interceptors.response.forEach(function($) {
      w.push($.fulfilled, $.rejected);
    });
    let k, O = 0, U;
    if (!b) {
      const B = [Ow.bind(this), void 0];
      for (B.unshift.apply(B, x), B.push.apply(B, w), U = B.length, k = Promise.resolve(f); O < U; )
        k = k.then(B[O++], B[O++]);
      return k;
    }
    U = x.length;
    let V = f;
    for (O = 0; O < U; ) {
      const B = x[O++], $ = x[O++];
      try {
        V = B(V);
      } catch (Q) {
        $.call(this, Q);
        break;
      }
    }
    try {
      k = Ow.call(this, V);
    } catch (B) {
      return Promise.reject(B);
    }
    for (O = 0, U = w.length; O < U; )
      k = k.then(w[O++], w[O++]);
    return k;
  }
  getUri(s) {
    s = wd(this.defaults, s);
    const f = y_(s.baseURL, s.url);
    return d_(f, s.params, s.paramsSerializer);
  }
}
fe.forEach(["delete", "get", "head", "options"], function(s) {
  Dc.prototype[s] = function(f, p) {
    return this.request(wd(p || {}, {
      method: s,
      url: f,
      data: (p || {}).data
    }));
  };
});
fe.forEach(["post", "put", "patch"], function(s) {
  function f(p) {
    return function(g, v, x) {
      return this.request(wd(x || {}, {
        method: s,
        headers: p ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: g,
        data: v
      }));
    };
  }
  Dc.prototype[s] = f(), Dc.prototype[s + "Form"] = f(!0);
});
class ZC {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function(g) {
      f = g;
    });
    const p = this;
    this.promise.then((m) => {
      if (!p._listeners)
        return;
      let g = p._listeners.length;
      for (; g-- > 0; )
        p._listeners[g](m);
      p._listeners = null;
    }), this.promise.then = (m) => {
      let g;
      const v = new Promise((x) => {
        p.subscribe(x), g = x;
      }).then(m);
      return v.cancel = function() {
        p.unsubscribe(g);
      }, v;
    }, s(function(g, v, x) {
      p.reason || (p.reason = new nh(g, v, x), f(p.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(s) {
    if (!this._listeners)
      return;
    const f = this._listeners.indexOf(s);
    f !== -1 && this._listeners.splice(f, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new ZC(function(m) {
        s = m;
      }),
      cancel: s
    };
  }
}
function Jz(l) {
  return function(f) {
    return l.apply(null, f);
  };
}
function Zz(l) {
  return fe.isObject(l) && l.isAxiosError === !0;
}
const wC = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(wC).forEach(([l, s]) => {
  wC[s] = l;
});
function E_(l) {
  const s = new Dc(l), f = e_(Dc.prototype.request, s);
  return fe.extend(f, Dc.prototype, s, { allOwnKeys: !0 }), fe.extend(f, s, null, { allOwnKeys: !0 }), f.create = function(m) {
    return E_(wd(l, m));
  }, f;
}
const Sr = E_(th);
Sr.Axios = Dc;
Sr.CanceledError = nh;
Sr.CancelToken = ZC;
Sr.isCancel = m_;
Sr.VERSION = S_;
Sr.toFormData = mg;
Sr.AxiosError = en;
Sr.Cancel = Sr.CanceledError;
Sr.all = function(s) {
  return Promise.all(s);
};
Sr.spread = Jz;
Sr.isAxiosError = Zz;
Sr.mergeConfig = wd;
Sr.AxiosHeaders = Ii;
Sr.formToJSON = (l) => h_(fe.isHTMLForm(l) ? new FormData(l) : l);
Sr.getAdapter = g_.getAdapter;
Sr.HttpStatusCode = wC;
Sr.default = Sr;
const eF = Sr.create({
  baseURL: "https://rickandmortyapi.com/api"
});
function tF() {
  const [l, s] = N.useState([]);
  return N.useEffect(() => {
    eF.get("/character").then((f) => {
      s(f.data.results);
    }).catch((f) => {
      console.error("Error fetching data:", f);
    });
  }, []), /* @__PURE__ */ X.jsx(Z1, { xs: 1, md: 4, sm: 3, lg: 5, className: "g-7", children: l.map((f) => /* @__PURE__ */ X.jsx(WC, { children: /* @__PURE__ */ X.jsxs(xd, { children: [
    /* @__PURE__ */ X.jsx(xd.Img, { variant: "top", src: f.image }),
    /* @__PURE__ */ X.jsxs(xd.Body, { children: [
      /* @__PURE__ */ X.jsx(xd.Title, { children: f.name }),
      /* @__PURE__ */ X.jsxs(xd.Text, { children: [
        "Status: ",
        f.status
      ] }),
      /* @__PURE__ */ X.jsxs(xd.Text, { children: [
        "Species: ",
        f.species
      ] })
    ] })
  ] }) }, f.id)) });
}
function nF() {
  return /* @__PURE__ */ X.jsx(tF, {});
}
function rF() {
  return /* @__PURE__ */ X.jsx(TA, { children: /* @__PURE__ */ X.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ X.jsx(Lj, {}),
    /* @__PURE__ */ X.jsxs(uA, { children: [
      /* @__PURE__ */ X.jsx(cC, { path: "/", element: /* @__PURE__ */ X.jsx(Pj, {}) }),
      /* @__PURE__ */ X.jsx(cC, { path: "/rick-and-morty", element: /* @__PURE__ */ X.jsx(nF, {}) })
    ] })
  ] }) });
}
Oc.render(
  /* @__PURE__ */ X.jsx(To.StrictMode, { children: /* @__PURE__ */ X.jsx(rF, {}) }),
  document.getElementById("root")
);
//# sourceMappingURL=my-lib.mjs.map
