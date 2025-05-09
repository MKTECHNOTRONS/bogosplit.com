var privacyBanner = function(n) {
    "use strict";
    var t = function() {
        return t = Object.assign || function(n) {
            for (var t, e = 1, o = arguments.length; e < o; e++)
                for (var r in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }, t.apply(this, arguments)
    };

    function e(n, t, e, o) {
        return new(e || (e = Promise))((function(r, a) {
            function i(n) {
                try {
                    s(o.next(n))
                } catch (n) {
                    a(n)
                }
            }

            function c(n) {
                try {
                    s(o.throw(n))
                } catch (n) {
                    a(n)
                }
            }

            function s(n) {
                var t;
                n.done ? r(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
                    n(t)
                }))).then(i, c)
            }
            s((o = o.apply(n, t || [])).next())
        }))
    }

    function o(n, t) {
        var e, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            },
            i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(c) {
            return function(s) {
                return function(c) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                        if (e = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                        switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                            case 0:
                            case 1:
                                r = c;
                                break;
                            case 4:
                                return a.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = c[1], c = [0];
                                continue;
                            case 7:
                                c = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                    a.label = c[1];
                                    break
                                }
                                if (6 === c[0] && a.label < r[1]) {
                                    a.label = r[1], r = c;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(c);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        c = t.call(n, a)
                    } catch (n) {
                        c = [6, n], o = 0
                    } finally {
                        e = r = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, s])
            }
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var r = "trackingConsentAccepted",
        a = "trackingConsentDeclined",
        i = "firstPartyMarketingConsentAccepted",
        c = "thirdPartyMarketingConsentAccepted",
        s = "analyticsConsentAccepted",
        l = "preferencesConsentAccepted",
        u = "firstPartyMarketingConsentDeclined",
        d = "thirdPartyMarketingConsentDeclined",
        p = "analyticsConsentDeclined",
        f = "preferencesConsentDeclined",
        h = "visitorConsentCollected",
        m = "consentTrackingApiLoaded",
        y = "yes",
        g = "no",
        v = "no_interaction",
        b = "",
        w = "",
        x = "1",
        C = "0",
        k = "p",
        _ = "a",
        I = "m",
        E = "t",
        D = "m",
        A = "a",
        O = "p",
        B = "s",
        T = "marketing",
        P = "analytics",
        S = "preferences",
        M = "sale_of_data",
        L = "email",
        R = "headlessStorefront",
        j = "rootDomain",
        H = "checkoutRootDomain",
        N = "storefrontRootDomain",
        W = "storefrontAccessToken",
        F = "isExtensionToken",
        U = "metafields";

    function q(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
        return o
    }

    function z(n, t, e, o, r, a, i) {
        try {
            var c = n[a](i),
                s = c.value
        } catch (n) {
            return void e(n)
        }
        c.done ? t(s) : Promise.resolve(s).then(o, r)
    }

    function V(n) {
        return function() {
            var t = this,
                e = arguments;
            return new Promise((function(o, r) {
                var a = n.apply(t, e);

                function i(n) {
                    z(a, o, r, i, c, "next", n)
                }

                function c(n) {
                    z(a, o, r, i, c, "throw", n)
                }
                i(void 0)
            }))
        }
    }

    function G(n, t) {
        for (var e = 0; e < t.length; e++) {
            var o = t[e];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, tn(o.key), o)
        }
    }

    function J(n, t, e) {
        return t && G(n.prototype, t), e && G(n, e), Object.defineProperty(n, "prototype", {
            writable: !1
        }), n
    }

    function K(n, t, e) {
        return (t = tn(t)) in n ? Object.defineProperty(n, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[t] = e, n
    }

    function X(n) {
        return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n)
        }, X(n)
    }

    function Y(n, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        n.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: n,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(n, "prototype", {
            writable: !1
        }), t && Q(n, t)
    }

    function Z() {
        try {
            var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (n) {}
        return (Z = function() {
            return !!n
        })()
    }

    function $() {
        $ = function() {
            return t
        };
        var n, t = {},
            e = Object.prototype,
            o = e.hasOwnProperty,
            r = Object.defineProperty || function(n, t, e) {
                n[t] = e.value
            },
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            c = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";

        function l(n, t, e) {
            return Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), n[t]
        }
        try {
            l({}, "")
        } catch (n) {
            l = function(n, t, e) {
                return n[t] = e
            }
        }

        function u(n, t, e, o) {
            var a = t && t.prototype instanceof g ? t : g,
                i = Object.create(a.prototype),
                c = new B(o || []);
            return r(i, "_invoke", {
                value: E(n, e, c)
            }), i
        }

        function d(n, t, e) {
            try {
                return {
                    type: "normal",
                    arg: n.call(t, e)
                }
            } catch (n) {
                return {
                    type: "throw",
                    arg: n
                }
            }
        }
        t.wrap = u;
        var p = "suspendedStart",
            f = "suspendedYield",
            h = "executing",
            m = "completed",
            y = {};

        function g() {}

        function v() {}

        function b() {}
        var w = {};
        l(w, i, (function() {
            return this
        }));
        var x = Object.getPrototypeOf,
            C = x && x(x(T([])));
        C && C !== e && o.call(C, i) && (w = C);
        var k = b.prototype = g.prototype = Object.create(w);

        function _(n) {
            ["next", "throw", "return"].forEach((function(t) {
                l(n, t, (function(n) {
                    return this._invoke(t, n)
                }))
            }))
        }

        function I(n, t) {
            function e(r, a, i, c) {
                var s = d(n[r], n, a);
                if ("throw" !== s.type) {
                    var l = s.arg,
                        u = l.value;
                    return u && "object" == typeof u && o.call(u, "__await") ? t.resolve(u.__await).then((function(n) {
                        e("next", n, i, c)
                    }), (function(n) {
                        e("throw", n, i, c)
                    })) : t.resolve(u).then((function(n) {
                        l.value = n, i(l)
                    }), (function(n) {
                        return e("throw", n, i, c)
                    }))
                }
                c(s.arg)
            }
            var a;
            r(this, "_invoke", {
                value: function(n, o) {
                    function r() {
                        return new t((function(t, r) {
                            e(n, o, t, r)
                        }))
                    }
                    return a = a ? a.then(r, r) : r()
                }
            })
        }

        function E(t, e, o) {
            var r = p;
            return function(a, i) {
                if (r === h) throw Error("Generator is already running");
                if (r === m) {
                    if ("throw" === a) throw i;
                    return {
                        value: n,
                        done: !0
                    }
                }
                for (o.method = a, o.arg = i;;) {
                    var c = o.delegate;
                    if (c) {
                        var s = D(c, o);
                        if (s) {
                            if (s === y) continue;
                            return s
                        }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                        if (r === p) throw r = m, o.arg;
                        o.dispatchException(o.arg)
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    r = h;
                    var l = d(t, e, o);
                    if ("normal" === l.type) {
                        if (r = o.done ? m : f, l.arg === y) continue;
                        return {
                            value: l.arg,
                            done: o.done
                        }
                    }
                    "throw" === l.type && (r = m, o.method = "throw", o.arg = l.arg)
                }
            }
        }

        function D(t, e) {
            var o = e.method,
                r = t.iterator[o];
            if (r === n) return e.delegate = null, "throw" === o && t.iterator.return && (e.method = "return", e.arg = n, D(t, e), "throw" === e.method) || "return" !== o && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + o + "' method")), y;
            var a = d(r, t.iterator, e.arg);
            if ("throw" === a.type) return e.method = "throw", e.arg = a.arg, e.delegate = null, y;
            var i = a.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, y) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
        }

        function A(n) {
            var t = {
                tryLoc: n[0]
            };
            1 in n && (t.catchLoc = n[1]), 2 in n && (t.finallyLoc = n[2], t.afterLoc = n[3]), this.tryEntries.push(t)
        }

        function O(n) {
            var t = n.completion || {};
            t.type = "normal", delete t.arg, n.completion = t
        }

        function B(n) {
            this.tryEntries = [{
                tryLoc: "root"
            }], n.forEach(A, this), this.reset(!0)
        }

        function T(t) {
            if (t || "" === t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        a = function e() {
                            for (; ++r < t.length;)
                                if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = n, e.done = !0, e
                        };
                    return a.next = a
                }
            }
            throw new TypeError(typeof t + " is not iterable")
        }
        return v.prototype = b, r(k, "constructor", {
            value: b,
            configurable: !0
        }), r(b, "constructor", {
            value: v,
            configurable: !0
        }), v.displayName = l(b, s, "GeneratorFunction"), t.isGeneratorFunction = function(n) {
            var t = "function" == typeof n && n.constructor;
            return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(n) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(n, b) : (n.__proto__ = b, l(n, s, "GeneratorFunction")), n.prototype = Object.create(k), n
        }, t.awrap = function(n) {
            return {
                __await: n
            }
        }, _(I.prototype), l(I.prototype, c, (function() {
            return this
        })), t.AsyncIterator = I, t.async = function(n, e, o, r, a) {
            void 0 === a && (a = Promise);
            var i = new I(u(n, e, o, r), a);
            return t.isGeneratorFunction(e) ? i : i.next().then((function(n) {
                return n.done ? n.value : i.next()
            }))
        }, _(k), l(k, s, "Generator"), l(k, i, (function() {
            return this
        })), l(k, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(n) {
            var t = Object(n),
                e = [];
            for (var o in t) e.push(o);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var o = e.pop();
                        if (o in t) return n.value = o, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = T, B.prototype = {
            constructor: B,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(O), !t)
                    for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
            },
            stop: function() {
                this.done = !0;
                var n = this.tryEntries[0].completion;
                if ("throw" === n.type) throw n.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function r(o, r) {
                    return c.type = "throw", c.arg = t, e.next = o, r && (e.method = "next", e.arg = n), !!r
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a],
                        c = i.completion;
                    if ("root" === i.tryLoc) return r("end");
                    if (i.tryLoc <= this.prev) {
                        var s = o.call(i, "catchLoc"),
                            l = o.call(i, "finallyLoc");
                        if (s && l) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        } else if (s) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                        } else {
                            if (!l) throw Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(n, t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var a = r;
                        break
                    }
                }
                a && ("break" === n || "continue" === n) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = n, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
            },
            complete: function(n, t) {
                if ("throw" === n.type) throw n.arg;
                return "break" === n.type || "continue" === n.type ? this.next = n.arg : "return" === n.type ? (this.rval = this.arg = n.arg, this.method = "return", this.next = "end") : "normal" === n.type && t && (this.next = t), y
            },
            finish: function(n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var e = this.tryEntries[t];
                    if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), O(e), y
                }
            },
            catch: function(n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var e = this.tryEntries[t];
                    if (e.tryLoc === n) {
                        var o = e.completion;
                        if ("throw" === o.type) {
                            var r = o.arg;
                            O(e)
                        }
                        return r
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(t, e, o) {
                return this.delegate = {
                    iterator: T(t),
                    resultName: e,
                    nextLoc: o
                }, "next" === this.method && (this.arg = n), y
            }
        }, t
    }

    function Q(n, t) {
        return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, t) {
            return n.__proto__ = t, n
        }, Q(n, t)
    }

    function nn(n, t) {
        return function(n) {
            if (Array.isArray(n)) return n
        }(n) || function(n, t) {
            var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (null != e) {
                var o, r, a, i, c = [],
                    s = !0,
                    l = !1;
                try {
                    if (a = (e = e.call(n)).next, 0 === t) {
                        if (Object(e) !== e) return;
                        s = !1
                    } else
                        for (; !(s = (o = a.call(e)).done) && (c.push(o.value), c.length !== t); s = !0);
                } catch (n) {
                    l = !0, r = n
                } finally {
                    try {
                        if (!s && null != e.return && (i = e.return(), Object(i) !== i)) return
                    } finally {
                        if (l) throw r
                    }
                }
                return c
            }
        }(n, t) || function(n, t) {
            if (n) {
                if ("string" == typeof n) return q(n, t);
                var e = {}.toString.call(n).slice(8, -1);
                return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? q(n, t) : void 0
            }
        }(n, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function tn(n) {
        var t = function(n, t) {
            if ("object" != typeof n || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
                var o = e.call(n, t);
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
        }(n, "string");
        return "symbol" == typeof t ? t : t + ""
    }

    function en(n) {
        return en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, en(n)
    }

    function on(n) {
        var t = "function" == typeof Map ? new Map : void 0;
        return on = function(n) {
            if (null === n || ! function(n) {
                    try {
                        return -1 !== Function.toString.call(n).indexOf("[native code]")
                    } catch (t) {
                        return "function" == typeof n
                    }
                }(n)) return n;
            if ("function" != typeof n) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(n)) return t.get(n);
                t.set(n, e)
            }

            function e() {
                return function(n, t, e) {
                    if (Z()) return Reflect.construct.apply(null, arguments);
                    var o = [null];
                    o.push.apply(o, t);
                    var r = new(n.bind.apply(n, o));
                    return e && Q(r, e.prototype), r
                }(n, arguments, X(this).constructor)
            }
            return e.prototype = Object.create(n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Q(e, n)
        }, on(n)
    }
    var rn = function() {
            return "undefined" != typeof __CtaTestEnv__ && "true" === __CtaTestEnv__
        },
        an = J((function() {}));
    an.warn = function(n) {
        rn() || console.warn(n)
    }, an.error = function(n) {
        rn() || console.error(n)
    }, an.info = function(n) {
        rn() || console.info(n)
    }, an.debug = function(n) {
        rn() || console.debug(n)
    }, an.trace = function(n) {
        rn() || console.trace(n)
    };
    var cn = an,
        sn = "_tracking_consent";

    function ln(n) {
        try {
            return decodeURIComponent(n)
        } catch (n) {
            return ""
        }
    }

    function un(n, t) {
        void 0 === t && (t = !1);
        for (var e = document.cookie ? document.cookie.split("; ") : [], o = 0; o < e.length; o++) {
            var r = nn(e[o].split("="), 2),
                a = r[0],
                i = r[1];
            if (n === ln(a)) return ln(i)
        }
        if (t && "_tracking_consent" === n && !window.localStorage.getItem("tracking_consent_fetched")) {
            if (rn()) return;
            return console.debug("_tracking_consent missing"),
                function(n) {
                    void 0 === n && (n = "/");
                    var t = new XMLHttpRequest;
                    t.open("HEAD", n, !1), t.withCredentials = !0, t.send()
                }(), window.localStorage.setItem("tracking_consent_fetched", "true"), un(n, !1)
        }
    }

    function dn(n) {
        return n === encodeURIComponent(ln(n))
    }

    function pn(n, t, e, o) {
        if (!dn(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!dn(n)) throw new TypeError("Cookie name is not correctly URI encoded.");
        var r = n + "=" + o;
        r += "; path=/", t && (r += "; domain=" + t), r += "; expires=" + new Date((new Date).getTime() + e).toUTCString(), document.cookie = r
    }

    function fn() {
        var n = new URLSearchParams(window.location.search).get("_cs") || un(sn);
        if (void 0 !== n) return function(n) {
            var t = n.slice(0, 1);
            if ("{" == t) return function(n) {
                var t, e;
                try {
                    e = JSON.parse(n)
                } catch (n) {
                    return
                }
                if ("2.1" !== e.v) return;
                if (null === (t = e.con) || void 0 === t || !t.CMP) return;
                return e
            }(n);
            if ("3" == t) return function(n) {
                var t, e, o = n.slice(1).split("_"),
                    r = nn(o, 5),
                    a = r[0],
                    i = r[1],
                    c = r[2],
                    s = r[3],
                    l = r[4];
                try {
                    t = o[5] ? JSON.parse(o.slice(5).join("_")) : void 0
                } catch (n) {}
                if (l) {
                    var u = l.replace(/\*/g, "/").replace(/-/g, "+"),
                        d = Array.from(atob(u)).map((function(n) {
                            return n.charCodeAt(0).toString(16).padStart(2, "0")
                        })).join("");
                    e = [8, 13, 18, 23].reduce((function(n, t) {
                        return n.slice(0, t) + "-" + n.slice(t)
                    }), d)
                }

                function p(n) {
                    var t = a.split(".")[0];
                    return t.includes(n.toLowerCase()) ? C : t.includes(n.toUpperCase()) ? x : w
                }

                function f(n) {
                    return a.includes(n.replace("t", "s").toUpperCase())
                }
                return {
                    v: "3",
                    con: {
                        CMP: K(K(K(K({}, A, p(A)), O, p(O)), D, p(D)), B, p(B))
                    },
                    region: i || "",
                    cus: t,
                    purposes: K(K(K(K({}, _, f(_)), k, f(k)), I, f(I)), E, f(E)),
                    sale_of_data_region: "t" == s,
                    display_banner: "t" == c,
                    consent_id: e
                }
            }(n);
            return
        }(n)
    }

    function hn() {
        try {
            var n = fn();
            if (!n) return;
            return n
        } catch (n) {
            return
        }
    }

    function mn() {
        return {
            m: wn(D),
            a: wn(A),
            p: wn(O),
            s: wn(B)
        }
    }

    function yn() {
        return mn()[B]
    }

    function gn(n) {
        return void 0 === n && (n = null), null === n && (n = hn()), void 0 === n
    }

    function vn(n) {
        switch (n) {
            case x:
                return y;
            case C:
                return g;
            default:
                return b
        }
    }

    function bn(n) {
        switch (n) {
            case A:
                return P;
            case D:
                return T;
            case O:
                return S;
            case B:
                return M
        }
    }

    function wn(n) {
        var t = hn();
        if (!t) return w;
        var e = t.con.CMP;
        return e ? e[n] : w
    }

    function xn(n) {
        var t = fn();
        if (!t || !t.purposes) return !0;
        var e = t.purposes[n];
        return "boolean" != typeof e || e
    }

    function Cn() {
        return xn(k)
    }

    function kn() {
        return xn(_)
    }

    function _n() {
        return xn(I)
    }

    function In() {
        return xn(E)
    }

    function En() {
        var n = fn();
        return !!n && ("boolean" == typeof n.display_banner && n.display_banner)
    }

    function Dn() {
        var n = fn();
        return n && n.sale_of_data_region || !1
    }
    var An = "v0.2";

    function On(n) {
        void 0 !== n.granular_consent && function(n) {
            var t = n[I],
                e = n[E],
                o = n[_],
                m = n[k];
            !0 === t ? Bn(i) : !1 === t && Bn(u);
            !0 === e ? Bn(c) : !1 === e && Bn(d);
            !0 === o ? Bn(s) : !1 === o && Bn(p);
            !0 === m ? Bn(l) : !1 === m && Bn(f);
            var y = function(n) {
                var t = {
                    marketingAllowed: n[I],
                    saleOfDataAllowed: n[E],
                    analyticsAllowed: n[_],
                    preferencesAllowed: n[k],
                    firstPartyMarketingAllowed: n[I],
                    thirdPartyMarketingAllowed: n[E]
                };
                return t
            }(n);
            Bn(h, y);
            var g = [o, m, t, e];
            g.every((function(n) {
                return !0 === n
            })) && Bn(r);
            g.every((function(n) {
                return !1 === n
            })) && Bn(a)
        }(K(K(K(K({}, k, Cn()), _, kn()), I, _n()), E, In()))
    }

    function Bn(n, t) {
        document.dispatchEvent(new CustomEvent(n, {
            detail: t || {}
        }))
    }

    function Tn(n, t) {
        if (null === n) return "null";
        if (Array.isArray(n)) return "[" + n.map((function(n) {
            return Tn(n, !0)
        })).join(",") + "]";
        if ("object" === en(n)) {
            var e = [];
            for (var o in n) n.hasOwnProperty(o) && void 0 !== n[o] && e.push(o + ":" + Tn(n[o], !0));
            var r = e.join(",");
            return t ? "{" + r + "}" : r
        }
        return "string" == typeof n ? '"' + n + '"' : "" + n
    }

    function Pn(n, t) {
        if (n) {
            var e = function(n) {
                var t = new URL(n, window.location.origin),
                    e = Mn(n) ? Sn(t) : Sn(t).replace(window.location.origin, "");
                return document.querySelectorAll('a[href^="' + e + '"]')
            }(n);
            if (e.length)
                for (var o, r = (o = fn()) && o.consent_id || "", a = function(n) {
                        var t = n();
                        if (!t) return null;
                        if (!("analytics" in t && "marketing" in t && "preferences" in t)) return null;
                        var e = Ln(t.analytics),
                            o = Ln(t.marketing),
                            r = Ln(t.preferences);
                        return "" === e && "" === o && "" === r ? null : "a" + e + "m" + o + "p" + r
                    }(t), i = 0, c = Array.from(e); i < c.length; i++) {
                    var s = c[i],
                        l = s.getAttribute("href");
                    if (l) {
                        var u = new URL(l, window.location.origin);
                        if (r && u.searchParams.set("consent_id", r), a && u.searchParams.set("consent", a), r || a) {
                            var d = Mn(n) ? u.toString() : u.toString().replace(window.location.origin, "");
                            s.setAttribute("href", d)
                        }
                    }
                }
        }
    }

    function Sn(n) {
        return "" + n.origin + n.pathname.replace(/\/$/, "")
    }

    function Mn(n) {
        return n.startsWith("http://") || n.startsWith("https://")
    }

    function Ln(n) {
        switch (n) {
            case y:
                return "1";
            case g:
                return "0";
            default:
                return ""
        }
    }
    var Rn = "_landing_page",
        jn = "_orig_referrer";

    function Hn(n) {
        var t = n.granular_consent;
        return {
            query: "query { consentManagement { cookies(" + Tn(Object.assign(Object.assign({
                visitorConsent: Object.assign({
                    marketing: t.marketing,
                    analytics: t.analytics,
                    preferences: t.preferences,
                    saleOfData: t.sale_of_data
                }, t.metafields && {
                    metafields: t.metafields
                })
            }, t.email && {
                visitorEmail: t.email
            }), {}, {
                origReferrer: n.referrer,
                landingPage: n.landing_page
            })) + ") { trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie } customerAccountUrl } }",
            variables: {}
        }
    }

    function Nn(n, t, e) {
        var o = t.granular_consent,
            r = o.storefrontAccessToken || function() {
                var n = document.documentElement.querySelector("#shopify-features"),
                    t = "Could not find liquid access token";
                if (!n) return void cn.warn(t);
                var e = JSON.parse(n.textContent || "").accessToken;
                if (!e) return void cn.warn(t);
                return e
            }(),
            a = o.checkoutRootDomain || window.location.host,
            i = o.isExtensionToken ? "Shopify-Storefront-Extension-Token" : "x-shopify-storefront-access-token",
            c = {
                headers: Object.assign(K({
                    "content-type": "application/json"
                }, i, r), rn() ? {
                    "x-test-payload": JSON.stringify(t)
                } : {}),
                body: JSON.stringify(Hn(t)),
                method: "POST"
            };
        return fetch("https://" + a + "/api/unstable/graphql.json", c).then((function(n) {
            if (n.ok) return n.json();
            throw new Error("Server error")
        })).then((function(r) {
            var a, i, c = 31536e6,
                s = 12096e5,
                l = r.data.consentManagement.cookies.cookieDomain,
                u = l || o.checkoutRootDomain || window.location.hostname,
                d = o.storefrontRootDomain || l || window.location.hostname,
                p = r.data.consentManagement.cookies.trackingConsentCookie,
                f = r.data.consentManagement.cookies.landingPageCookie,
                h = r.data.consentManagement.cookies.origReferrerCookie,
                m = null !== (a = null === (i = r.data.consentManagement) || void 0 === i ? void 0 : i.customerAccountUrl) && void 0 !== a ? a : "";
            return pn(sn, u, c, p), f && h && (pn(Rn, u, s, f), pn(jn, u, s, h)), d !== u && (pn(sn, d, c, p), f && h && (pn(Rn, d, s, f), pn(jn, d, s, h))), On(t), Pn(m, n), void 0 !== e && e(null, r), r
        })).catch((function(n) {
            var t = "Error while setting storefront API consent: " + n.message;
            if (void 0 === e) throw {
                error: t
            };
            e({
                error: t
            })
        }))
    }
    var Wn = function() {
        return J((function n(t) {
            if (void 0 === t && (t = !1), this.useInstrumentation = !1, n.instance) return n.instance;
            n.instance = this, this.useInstrumentation = t
        }), [{
            key: "instrumentationEnabled",
            value: function() {
                return this.useInstrumentation
            }
        }, {
            key: "setUseInstrumentation",
            value: function(n) {
                this.useInstrumentation = n
            }
        }, {
            key: "produce",
            value: function(n, t) {
                if (this.instrumentationEnabled() && kn()) try {
                    var e = {
                            schema_id: "customer_privacy_api_events/2.0",
                            payload: {
                                shop_domain: window.location.host,
                                method_name: n,
                                call_details: t || null
                            }
                        },
                        o = {
                            accept: "*/*",
                            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                            "content-type": "application/json; charset=utf-8",
                            "x-monorail-edge-event-created-at-ms": String(Date.now()),
                            "x-monorail-edge-event-sent-at-ms": String(Date.now())
                        };
                    if (!window.location.host.endsWith("spin.dev")) return fetch("https://monorail-edge.shopifysvc.com/v1/produce", {
                        headers: o,
                        body: JSON.stringify(e),
                        method: "POST",
                        mode: "cors",
                        credentials: "omit"
                    });
                    console.log("Monorail event from consent API:", o, e)
                } catch (n) {}
            }
        }])
    }();

    function Fn(n, t) {
        if ((new Wn).produce("setTrackingConsent", An), function(n) {
                if ("boolean" != typeof n && "object" !== en(n)) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                if ("object" === en(n)) {
                    var t = Object.keys(n);
                    if (0 === t.length) throw TypeError("The submitted consent object is empty.");
                    for (var e = [T, P, S, M, L, j, H, N, W, R, F, U], o = 0, r = t; o < r.length; o++) {
                        var a = r[o];
                        if (!e.includes(a)) throw TypeError("The submitted consent object should only contain the following keys: " + e.join(", ") + ". Extraneous key: " + a + ".")
                    }
                }
            }(n), void 0 !== t && "function" != typeof t) throw TypeError("setTrackingConsent must be called with a callback function if the callback argument is provided");
        var e = function(n) {
                if (!n) return null;
                return zn() ? document.referrer : ""
            }(n.analytics),
            o = function(n) {
                if (!n) return null;
                return zn() ? window.location.pathname + window.location.search : "/"
            }(n.analytics);
        return Nn(Zn, Object.assign(Object.assign({
            granular_consent: n
        }, null !== e && {
            referrer: e
        }), null !== o && {
            landing_page: o
        }), t)
    }

    function Un() {
        if ((new Wn).produce("getTrackingConsent", An), gn()) return b;
        var n = mn();
        return n[D] === x && n[A] === x ? y : n[D] === C || n[A] === C ? g : v
    }

    function qn() {
        return gn(n = hn()) ? "" : n.region || "";
        var n
    }

    function zn() {
        if ("" === document.referrer) return !0;
        var n = document.createElement("a");
        return n.href = document.referrer, window.location.hostname != n.hostname
    }

    function Vn() {
        return !!gn() || _n() && kn()
    }

    function Gn() {
        return Dn() ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function Jn() {
        return En() && Un() === v
    }

    function Kn() {
        return !1 === Gn() ? g : (n = yn(), gn() ? b : n === w ? v : vn(n));
        var n
    }

    function Xn() {
        return !0
    }

    function Yn(n) {
        return function(n) {
            var t = hn();
            if (!gn(t) && t.cus) {
                var e = t.cus[encodeURIComponent(n)];
                return e ? decodeURIComponent(e) : e
            }
        }(n)
    }

    function Zn() {
        for (var n = {}, t = mn(), e = 0, o = Object.keys(t); e < o.length; e++) {
            var r = o[e];
            n[bn(r)] = vn(t[r])
        }
        return n
    }
    Wn.instance = void 0;
    var $n = "95ba910bcec4542ef2a0b64cd7ca666c";

    function Qn(n, t, e) {
        try {
            var o;
            ! function(n) {
                var t = new XMLHttpRequest;
                t.open("POST", "https://error-analytics-production.shopifysvc.com", !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Bugsnag-Api-Key", $n), t.setRequestHeader("Bugsnag-Payload-Version", "5");
                var e = function(n) {
                    var t = function(n) {
                            return n.stackTrace || n.stack || n.description || n.name
                        }(n.error),
                        e = nn((t || "unknown error").split("\n")[0].split(":"), 2),
                        o = e[0],
                        r = e[1];
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "ConsentTrackingAPI",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: (o || "").trim(),
                                message: (r || "").trim(),
                                stacktrace: [{
                                    file: "consent-tracking-api.js",
                                    lineNumber: "1",
                                    method: t
                                }],
                                type: "browserjs"
                            }],
                            context: n.context || "general",
                            app: {
                                id: "ConsentTrackingAPI",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: n.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": n.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(n);
                t.send(e)
            }({
                error: n,
                context: null != t ? t : "",
                shopId: tt() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: null != e ? e : ""
            })
        } catch (n) {}
    }

    function nt(n) {
        return function() {
            try {
                return n.apply(void 0, arguments)
            } catch (n) {
                throw Qn(n), n
            }
        }
    }

    function tt() {
        try {
            var n, t = null === (n = document.getElementById("shopify-features")) || void 0 === n ? void 0 : n.textContent;
            return t ? JSON.parse(t).shopId : null
        } catch (n) {
            return null
        }
    }

    function et() {
        return _n()
    }

    function ot() {
        return kn()
    }

    function rt() {
        return Cn()
    }

    function at() {
        return In()
    }
    var it, ct, st, lt, ut, dt, pt;

    function ft(n) {
        return void 0 === n && (n = {
                useBugsnagReporting: !1,
                useInstrumentation: !1
            }),
            function(n) {
                var t = n.useBugsnagReporting,
                    e = n.useInstrumentation;
                yn() != C && !1 === Gn() && Fn({
                    sale_of_data: !1
                }, (function() {
                    return !1
                }));
                var o = {
                    analyticsProcessingAllowed: kn,
                    currentVisitorConsent: Zn,
                    doesMerchantSupportGranularConsent: Xn,
                    firstPartyMarketingAllowed: et,
                    getCCPAConsent: Kn,
                    getRegion: qn,
                    getTrackingConsent: Un,
                    getTrackingConsentMetafield: Yn,
                    marketingAllowed: et,
                    preferencesProcessingAllowed: Cn,
                    saleOfDataAllowed: at,
                    saleOfDataRegion: Dn,
                    setTrackingConsent: Fn,
                    shouldShowBanner: En,
                    shouldShowGDPRBanner: Jn,
                    thirdPartyMarketingAllowed: at,
                    userCanBeTracked: Vn,
                    unstable: {},
                    __metadata__: {
                        name: "@shopify/consent-tracking-api",
                        version: An,
                        description: "Shopify Consent Tracking API"
                    }
                };
                if (new Wn(e), !t) return o;
                var r = ["unstable"];
                for (var a in o) o.hasOwnProperty(a) && (o[a] = r.includes(a) ? o[a] : nt(o[a]));
                return o
            }(n)
    }! function(n) {
        n.BottomCenter = "bottom_center", n.BottomFullWidth = "bottom_full_width", n.BottomLeft = "bottom_left", n.BottomRight = "bottom_right", n.Center = "center"
    }(it || (it = {})),
    function(n) {
        n.Custom = "custom", n.Dark = "dark", n.Light = "light"
    }(ct || (ct = {})),
    function(n) {
        n[n.Yes = 1] = "Yes", n[n.No = 0] = "No"
    }(st || (st = {})),
    function(n) {
        n.ConsolidatedText = "consolidated_text", n.PositionBottomLeft = "position_bottom_left", n.PositionCentered = "position_centered", n.MinimalWhitespace = "minimal_whitespace", n.HighlightedButtons = "highlighted_buttons", n.SwapButtonOrder = "swap_button_order", n.ExperimentOneWinner = "experiment_1_winner", n.NewHypothesis = "new_variant"
    }(lt || (lt = {})),
    function(n) {
        n.StylesContainerId = "shopify-pc__banner__styles", n.DialogId = "shopify-pc__banner", n.DialogClass = "shopify-pc__banner__dialog", n.WrapperClass = "shopify-pc__banner__wrapper", n.BodyClass = "shopify-pc__banner__body", n.BodyTitleId = "shopify-pc__banner__body-title", n.BodyCopyPolicyLinkId = "shopify-pc__banner__body-policy-link", n.ButtonsClass = "shopify-pc__banner__btns", n.ButtonsGranularClass = "shopify-pc__banner__btns-granular", n.ButtonAcceptId = "shopify-pc__banner__btn-accept", n.ButtonAcceptClass = "shopify-pc__banner__btn-accept", n.ButtonDeclineId = "shopify-pc__banner__btn-decline", n.ButtonDeclineClass = "shopify-pc__banner__btn-decline", n.ButtonManagePrefsId = "shopify-pc__banner__btn-manage-prefs", n.ButtonManagePrefsClass = "shopify-pc__banner__btn-manage-prefs"
    }(ut || (ut = {})),
    function(n) {
        n.StylesContainerId = "shopify-pc__prefs__styles", n.OverlayId = "shopify-pc__prefs__overlay", n.OverlayClass = "shopify-pc__prefs__overlay", n.WrapperId = "shopify-pc__prefs", n.WrapperClass = "shopify-pc__prefs", n.DialogId = "shopify-pc__prefs__dialog", n.DialogClass = "shopify-pc__prefs__dialog", n.DialogScrollableClass = "shopify-pc__prefs__scrollable", n.HeaderTitleId = "shopify-pc__prefs__header-title", n.HeaderActionsClass = "shopify-pc__prefs__header-actions", n.HeaderSaveId = "shopify-pc__prefs__header-save", n.HeaderAcceptId = "shopify-pc__prefs__header-accept", n.HeaderDeclineId = "shopify-pc__prefs__header-decline", n.HeaderCloseId = "shopify-pc__prefs__header-close", n.HeaderCloseClass = "shopify-pc__prefs__header-close", n.IntroClass = "shopify-pc__prefs__intro", n.IntroMainClass = "shopify-pc__prefs__intro-main", n.IntroExplainWrapperClass = "shopify-pc__prefs__intro-explain", n.IntroExplainAcceptClass = "shopify-pc__prefs__intro-explain-accept", n.IntroExplainDeclineClass = "shopify-pc__prefs__intro-explain-decline", n.OptionWrapperClass = "shopify-pc__prefs__options", n.OptionClass = "shopify-pc__prefs__option", n.OptionEssentialId = "shopify-pc__prefs__essential", n.OptionEssentialInputId = "shopify-pc__prefs__essential-input", n.OptionMarketingId = "shopify-pc__prefs__marketing", n.OptionMarketingInputId = "shopify-pc__prefs__marketing-input", n.OptionAnalyticsId = "shopify-pc__prefs__analytics", n.OptionAnalyticsInputId = "shopify-pc__prefs__analytics-input", n.OptionPreferencesId = "shopify-pc__prefs__preferences", n.OptionPreferencesInputId = "shopify-pc__prefs__preferences-input"
    }(dt || (dt = {})),
    function(n) {
        n.Black = "#333", n.White = "#fff", n.Gray = "#ccc", n.Green = "#3AA83A", n.LightGray = "#F7F8F9", n.DarkGray = "#36454F", n.VeryDarkGray = "#666", n.VeryLightGray = "#e5e5e5"
    }(pt || (pt = {}));
    var ht = function(n) {
        return "\n    border: 1px solid ".concat(n.button.borderColor, ";\n    color: ").concat(n.button.fontColor, ";\n    background: ").concat(n.button.backgroundColor, ";\n  ")
    };

    function mt(n, t, e, o) {
        void 0 === t && (t = "0,0,100,100"), void 0 === e && (e = "0,0,0,100"), void 0 === o && (o = "0,0,100,100");
        var r = n.split(","),
            a = r[0],
            i = r[1],
            c = r[2],
            s = r[3],
            l = t.split(","),
            u = l[0],
            d = l[1],
            p = l[2],
            f = l[3],
            h = e.split(","),
            m = h[0],
            y = h[1],
            g = h[2],
            v = h[3],
            b = o.split(","),
            w = b[0],
            x = b[1],
            C = b[2],
            k = b[3],
            _ = {
                hue: Number(a),
                saturation: Number(i),
                lightness: Number(c),
                alpha: Number(s)
            },
            I = {
                hue: Number(u),
                saturation: Number(d),
                lightness: Number(p),
                alpha: Number(f)
            },
            E = {
                hue: Number(m),
                saturation: Number(y),
                lightness: Number(g),
                alpha: Number(v)
            },
            D = {
                hue: Number(w),
                saturation: Number(x),
                lightness: Number(C),
                alpha: Number(k)
            },
            A = {
                hue: _.hue,
                saturation: _.saturation,
                lightness: _.lightness,
                alpha: _.alpha - 10
            },
            O = {
                hue: I.hue,
                saturation: I.saturation,
                lightness: I.lightness < 50 ? I.lightness + 14 : I.lightness - 12,
                alpha: I.alpha
            },
            B = {
                hue: 201,
                saturation: I.lightness < 50 ? 60 : 90,
                lightness: I.lightness < 50 ? 60 : 80,
                alpha: I.lightness < 50 ? 80 : 100
            };
        return {
            font: yt(_),
            fontSubdued: yt(A),
            buttonFont: yt(E),
            buttonBackground: yt(D),
            background: yt(I),
            divider: yt(O),
            focused: yt(B)
        }
    }

    function yt(n) {
        return "hsl(".concat(n.hue, "deg, ").concat(n.saturation, "%, ").concat(n.lightness, "%, ").concat(n.alpha, "%)")
    }

    function gt(n, t, e, o, r) {
        var a = "0,0,0,100",
            i = "0,0,100,100",
            c = mt("0,0,12,100", "0,0,100,100", "0,0,12,100", "0,0,100,100"),
            s = mt("0,0,100,87", "0,0,12,100", "0,0,100,87", "0,0,12,100"),
            l = mt(null != t ? t : a, null != e ? e : i, null != o ? o : a, null != r ? r : i),
            u = function() {
                switch (n) {
                    case ct.Light:
                        return c;
                    case ct.Dark:
                        return s;
                    case ct.Custom:
                        return l;
                    default:
                        return c
                }
            }();
        return {
            backgroundColor: u.background,
            fontColor: u.font,
            fontSubduedColor: u.fontSubdued,
            sectionDivider: u.divider,
            iconColor: u.font,
            focused: u.focused,
            button: {
                borderColor: u.buttonFont,
                backgroundColor: u.buttonBackground,
                fontColor: u.buttonFont
            },
            primaryButton: {
                borderColor: u.buttonBackground,
                backgroundColor: u.buttonFont,
                fontColor: u.buttonBackground
            }
        }
    }

    function vt(n) {
        var t = n.bannerData,
            e = n.selectorPrefix,
            o = t.experimentVariant === lt.PositionBottomLeft,
            r = t.experimentVariant === lt.PositionCentered,
            a = t.experimentVariant === lt.HighlightedButtons,
            i = t.experimentVariant === lt.MinimalWhitespace,
            c = t.experimentVariant === lt.ExperimentOneWinner || t.experimentVariant === lt.NewHypothesis,
            s = e ? "".concat(e, " ") : "",
            l = gt(t.theme.theme, t.theme.fontColor, t.theme.backgroundColor, t.theme.buttonFontColor, t.theme.buttonBackgroundColor),
            u = t.position;
        o ? u = it.BottomLeft : r && (u = it.Center);
        var d = i,
            p = function(n, t, e, o) {
                void 0 === o && (o = !1);
                var r = "1280px",
                    a = "\n    ".concat(e, ".").concat(ut.WrapperClass, " {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  "),
                    i = "\n    position: fixed;\n    z-index: 2000000;\n    box-shadow: 0px 4px 10px rgb(63 63 68 / 40%);\n    max-height: 90%;\n    box-sizing: border-box;\n    opacity: 1;\n    padding: ".concat(o ? "20px" : "32px", ";\n    background-color: ").concat(t.backgroundColor, ";\n    overflow: auto;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    border: none;\n    text-align: left;\n  "),
                    c = function() {
                        var n = "\n      ".concat(e, ".").concat(ut.ButtonsClass, " {\n        flex-direction: column;\n        gap: 3px;\n      }\n      ").concat(e, ".").concat(ut.ButtonsGranularClass, " :nth-child(1) {\n        order: 3;\n      }\n      ").concat(e, ".").concat(ut.ButtonsGranularClass, " :nth-child(2) {\n        order: 1;\n      }\n      ").concat(e, ".").concat(ut.ButtonsGranularClass, " :nth-child(3) {\n        order: 2;\n      }\n    ");
                        return "\n      @media only screen and (max-width: 480px) {\n        ".concat(n, "\n      }\n    ")
                    },
                    s = "\n    ".concat(e, ".").concat(ut.DialogClass, " {\n      ").concat(i, "\n      bottom: 0%;\n      width: 100%;\n    }\n    ").concat(e, ".").concat(ut.DialogClass, " button {\n      margin: 0 10px 0 0;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ut.DialogClass, " button {\n        margin: 15px 10px 0 0;\n      }\n    }\n    ").concat(a, "\n    ").concat(e, ".").concat(ut.WrapperClass, " {\n      flex-direction: row;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ut.WrapperClass, " {\n        flex-direction: column;\n      }\n    }\n    ").concat(e, ".").concat(ut.BodyClass, " {\n      margin-right: 5%;\n      margin-bottom: 0;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ut.BodyClass, " {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n      }\n    }\n    ").concat(e, ".").concat(ut.ButtonsClass, " {\n      display: flex;\n      min-width: 580px;\n      flex-direction: row;\n      gap: 20px;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ut.ButtonsClass, " {\n        min-width: auto;\n        width: 100%;\n        justify-content: flex-end;\n      }\n    }\n    ").concat(c(), "\n  "),
                    l = "\n    ".concat(e, ".").concat(ut.DialogClass, " {\n      ").concat(i, "\n      top: 50%;\n      left: 25%;\n      width: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n    }\n    ").concat(a, "\n    @media only screen and (max-width: 1300px) {\n      ").concat(e, ".").concat(ut.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      ").concat(e, ".").concat(ut.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    ").concat(e, ".").concat(ut.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ut.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n      gap: 20px;\n    }\n    ").concat(c(), "\n  "),
                    u = "\n    ".concat(e, ".").concat(ut.DialogClass, " {\n      ").concat(i, "\n      bottom: 0;\n      left: 0;\n      max-width: 650px;\n      border-top-right-radius: 3px;\n    }\n    ").concat(a, "\n    ").concat(e, ".").concat(ut.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ut.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n      gap: 20px;\n    }\n    ").concat(c(), "\n  "),
                    d = "\n    ".concat(e, ".").concat(ut.DialogClass, " {\n      ").concat(i, "\n      bottom: 0;\n      right: 0;\n      max-width: 650px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(a, "\n    ").concat(e, ".").concat(ut.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ut.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n      gap: 20px;\n    }\n    ").concat(c(), "\n  "),
                    p = "\n    ".concat(e, ".").concat(ut.DialogClass, " {\n      ").concat(i, "\n      bottom: 0;\n      left: ").concat(o ? "32%" : "25%", ";\n      width: ").concat(o ? "36%" : "50%", ";\n      min-width: 280px;\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(a, "\n    @media only screen and (max-width: 1300px) {\n      ").concat(e, ".").concat(ut.DialogClass, " {\n        left: ").concat(o ? "22%" : "15%", ";\n        width: ").concat(o ? "56%" : "70%", ";\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      ").concat(e, ".").concat(ut.DialogClass, " {\n        left: ").concat(o ? "10%" : "5%", ";\n        width: ").concat(o ? "80%" : "90%", ";\n      }\n    }\n    ").concat(e, ".").concat(ut.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ut.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n      gap: 20px;\n    }\n    ").concat(e, ".").concat(ut.DialogClass, " h2 {\n      line-height: ").concat(o ? "1" : "initial", ";\n    }\n    ").concat(c(), "\n  ");
                switch (n) {
                    case it.BottomFullWidth:
                        return s;
                    case it.Center:
                        return l;
                    case it.BottomLeft:
                        return u;
                    case it.BottomRight:
                        return d;
                    case it.BottomCenter:
                        return p;
                    default:
                        return s
                }
            }(u, l, s, d),
            f = a || c,
            h = function(n, t, e) {
                if (void 0 === e && (e = !1), n === ct.Custom) return {
                    accept: ht(t),
                    decline: ht(t),
                    manage: (o = t, "\n    border: none;\n    color: ".concat(o.fontColor, ";\n    background: transparent;\n  "))
                };
                var o, r = n === ct.Dark,
                    a = e ? pt.Black : pt.White,
                    i = e ? pt.White : pt.Black;
                return {
                    accept: "\n    background: ".concat(r ? pt.Black : a, ";\n    color: ").concat(r ? pt.White : i, ";\n  "),
                    decline: "\n    background: ".concat(r ? pt.Black : a, ";\n    color: ").concat(r ? pt.White : i, ";\n  "),
                    manage: "\n    background: transparent;\n    border: none;\n    color: ".concat(r ? pt.White : pt.Black, ";\n  ")
                }
            }(t.theme.theme, l, f);
        return "\n    ".concat(s, ".").concat(ut.DialogClass, " h2 {\n      color: ").concat(l.fontColor, ";\n      font-family: inherit;\n      font-size: 120%;\n      margin: 0 0 .5em 0;\n      padding: 0;\n      font-weight: bold;\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " p {\n      color: ").concat(l.fontColor, ";\n      font-family: inherit;\n      line-height: 1.3;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " a {\n      color: ").concat(l.fontColor, ";\n      text-decoration: underline;\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button {\n      border: none;\n      text-decoration: none;\n      font-family: inherit;\n      padding: ").concat(d ? "8px 25px" : "10px 25px", ";\n      margin-top: ").concat(d ? "7px" : "15px", ";\n      font-size: 100%;\n      flex-basis: 50%;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      text-align: center;\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(l.focused, ";\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button:hover {\n      cursor: pointer;\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button.").concat(ut.ButtonAcceptClass, " {\n      border: 1px solid ").concat(l.button.borderColor, ";\n      ").concat(h.accept, "\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button.").concat(ut.ButtonManagePrefsClass, " {\n      text-decoration: underline;\n      padding: 0;\n      ").concat(h.manage, "\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button.").concat(ut.ButtonManagePrefsClass, ":focus {\n      box-shadow: none;\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button.").concat(ut.ButtonManagePrefsClass, ":focus span {\n      outline: 2px solid ").concat(l.focused, ";\n    }\n    ").concat(s, ".").concat(ut.DialogClass, " button.").concat(ut.ButtonDeclineClass, " {\n      border: 1px solid ").concat(l.button.borderColor, ";\n      ").concat(h.decline, "\n    }\n    ").concat(s, ".").concat(ut.BodyClass, " p a:focus {\n      outline: 2px solid ").concat(l.focused, ";\n      box-shadow: none;\n    }\n    ").concat(p, "\n  ")
    }
    var bt = "8e9cb600c40a8849ba2b6151bb05805c";

    function wt(n, t, e) {
        var o;
        try {
            ! function(n) {
                var t = new XMLHttpRequest;
                t.open("POST", "https://error-analytics-production.shopifysvc.com", !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Bugsnag-Api-Key", bt), t.setRequestHeader("Bugsnag-Payload-Version", "5");
                var e = function(n) {
                    var t = function(n) {
                            return n.stackTrace || n.stack || n.description || n.name
                        }(n.error),
                        e = (t || "unknown error").split("\n")[0].split(":"),
                        o = e[0],
                        r = e[1];
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "privacyBanner",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: (o || "").trim(),
                                message: (r || "").trim(),
                                stacktrace: [{
                                    file: "storefront-banner.js",
                                    lineNumber: "1",
                                    method: t
                                }],
                                type: "browserjs"
                            }],
                            context: n.context || "general",
                            app: {
                                id: "privacyBanner",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: n.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": n.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(n);
                t.send(e)
            }({
                error: n,
                context: t,
                shopId: xt() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: e
            })
        } catch (n) {}
    }

    function xt() {
        var n;
        try {
            var t = null === (n = null === document || void 0 === document ? void 0 : document.getElementById("shopify-features")) || void 0 === n ? void 0 : n.textContent;
            return t ? JSON.parse(t).shopId : null
        } catch (n) {
            return null
        }
    }

    function Ct(n) {
        var t = window.location.search.substring(1);
        if (0 === t.length) return null;
        var e = t.split("&").map((function(n) {
                return n.split("=")
            })),
            o = e.filter((function(t) {
                return t[0] === n
            }))[0];
        return (o ? o[1] : null) || null
    }

    function kt(n) {
        for (var t = 0, e = decodeURIComponent(document.cookie).split(";"); t < e.length; t++) {
            var o = e[t].split("="),
                r = o[0],
                a = o[1];
            if (r.trim() === n) return a
        }
        return ""
    }

    function _t(n) {
        var t = {
            marketing: n.marketing,
            analytics: n.analytics,
            preferences: n.preferences,
            sale_of_data: n.sale_of_data
        };
        n.storefrontAccessToken && (t.headlessStorefront = !0, t.checkoutRootDomain = n.checkoutRootDomain, t.storefrontRootDomain = n.storefrontRootDomain, t.storefrontAccessToken = n.storefrontAccessToken), Fn(t, n.callback)
    }
    var It = function() {
            var n = Zn();
            return n.marketing === b && n.analytics === b && n.preferences === b
        },
        Et = function() {
            var n = En() && It();
            return !window.location.pathname.match(/\/password$/) && n
        },
        Dt = function() {
            return "1" === Ct("preview_privacy_banner")
        },
        At = function() {
            return "1" === kt("_ab") && It()
        },
        Ot = function() {
            return Dt() || At()
        },
        Bt = function() {
            function n() {}
            return n.getServerData = function(n, t, r, a) {
                return e(this, void 0, void 0, (function() {
                    return o(this, (function(e) {
                        return this.domain = n, this.accessToken = t || this.liquidAccessToken(), this.locale = r, this.country = a, [2, this.getDataFromStorefrontApi()]
                    }))
                }))
            }, n.getEmbeddedData = function() {
                var n = document.getElementById("scb4127");
                if (n) return JSON.parse(n.textContent || "")
            }, n.fetchParams = function(n) {
                var t = n.accessToken,
                    e = n.unlocalized,
                    o = this.currentLanguage(),
                    r = this.currentCountry(),
                    a = !o || !r || e ? "" : "@inContext(language: ".concat(o, ", country: ").concat(r, ")"),
                    i = Ot();
                return {
                    headers: {
                        "content-type": "application/json",
                        "x-shopify-storefront-access-token": t
                    },
                    body: JSON.stringify({
                        query: "\n        query bannerQuery ($isPreviewMode: Boolean = ".concat(i, ") ").concat(a, " {\n          consentManagement {\n            banner {\n              enabled\n              isDefault\n              position\n              policyLinkText\n              policyLinkUrl\n              title\n              text\n              buttonPrefsOpenText\n              buttonAcceptText\n              buttonDeclineText\n              regionVisibility @include(if: $isPreviewMode)\n              theme {\n                theme\n                fontColor\n                backgroundColor\n                buttonFontColor\n                buttonBackgroundColor\n              }\n              preferences {\n                title\n                introTitle\n                introText\n                buttonAcceptText\n                buttonDeclineText\n                buttonSaveText\n                bulletPoints {\n                  enabled\n                  title\n                  firstText\n                  secondText\n                  thirdText\n                }\n                purposes {\n                  essentialName\n                  essentialDesc\n                  performanceName\n                  performanceDesc\n                  preferencesName\n                  preferencesDesc\n                  marketingName\n                  marketingDesc\n                }\n              }\n              experiment {\n                title\n                preferences\n                privacyPolicy\n                customizeYour\n              }\n            }\n          }\n        }"),
                        variables: {
                            isPreviewMode: Ot()
                        }
                    }),
                    method: "POST"
                }
            }, n.getDataFromStorefrontApi = function(n) {
                return e(this, void 0, void 0, (function() {
                    var e, r, a, i, c;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.accessToken) throw new Error("Missing access token");
                                return e = this.domain ? "https://".concat(this.domain) : "", r = "".concat(e, "/api/unstable/graphql.json"), [4, fetch(r, this.fetchParams({
                                    accessToken: this.accessToken,
                                    unlocalized: n
                                }))];
                            case 1:
                                return 200 !== (a = o.sent()).status ? [3, 3] : [4, a.json()];
                            case 2:
                                if ((i = o.sent()).errors) {
                                    if ((c = i.errors.find((function(n) {
                                            return "argumentLiteralsIncompatible" === n.extensions.code
                                        }))) && !n) return window.Weglot || wt(new Error(c.message), "DataFetching"), [2, this.getDataFromStorefrontApi(!0)];
                                    throw new Error(i.errors[0].message)
                                }
                                return [2, t({}, i.data.consentManagement.banner)];
                            case 3:
                                throw new Error("Could not reach the server")
                        }
                    }))
                }))
            }, n.liquidAccessToken = function() {
                var n = document.documentElement.querySelector("#shopify-features");
                if (n) {
                    var t = JSON.parse(n.textContent || "").accessToken;
                    if (t) return t;
                    console.warn("Could not find liquid access token")
                } else console.warn("Could not find liquid access token")
            }, n.currentLanguage = function() {
                var n = this.locale;
                if (n) {
                    n = n.replace("-", "_").toUpperCase();
                    return ["PT_BR", "PT_PT", "ZH_CN", "ZH_TW"].includes(n) || (n = n.split("_")[0]), n
                }
            }, n.currentCountry = function() {
                var n;
                return null === (n = this.country) || void 0 === n ? void 0 : n.toUpperCase()
            }, n
        }();

    function Tt(n, t, e) {
        return (t = function(n) {
            var t = function(n, t) {
                if ("object" != en(n) || !n) return n;
                var e = n[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var o = e.call(n, t || "default");
                    if ("object" != en(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(n)
            }(n, "string");
            return "symbol" == en(t) ? t : t + ""
        }(t)) in n ? Object.defineProperty(n, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[t] = e, n
    }

    function Pt(n, t) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(n);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), e.push.apply(e, o)
        }
        return e
    }

    function St(n) {
        for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Pt(Object(e), !0).forEach((function(t) {
                Tt(n, t, e[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Pt(Object(e)).forEach((function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
            }))
        }
        return n
    }
    var Mt = "http://localhost:8082",
        Lt = "https://monorail-edge.shopifysvc.com",
        Rt = "/v1/produce";
    var jt = function() {
        return J((function(n) {
            this.producer = n
        }), [{
            key: "do",
            value: function(n, t) {
                return void 0 !== n.schemaId ? this.producer.produce(n) : this.producer.produceBatch(n)
            }
        }])
    }();

    function Ht() {
        if ("undefined" != typeof crypto && crypto && "function" == typeof crypto.randomUUID) return crypto.randomUUID();
        for (var n = new Array(36), t = 0; t < 36; t++) n[t] = Math.floor(16 * Math.random());
        return n[14] = 4, n[19] = n[19] &= -5, n[19] = n[19] |= 8, n[8] = n[13] = n[18] = n[23] = "-", n.map((function(n) {
            return n.toString(16)
        })).join("")
    }

    function Nt(n, t) {
        return void 0 === t && (t = !0), n && Object.keys(n).length && t ? Object.keys(n).map((function(t) {
            return K({}, t.split(/(?=[A-Z])/).join("_").toLowerCase(), n[t])
        })).reduce((function(n, t) {
            return St(St({}, n), t)
        })) : n
    }

    function Wt(n) {
        return n.events.map((function(n) {
            var t = !0,
                e = !0;
            return n && n.options && Object.prototype.hasOwnProperty.call(n.options, "convertEventCase") && (t = Boolean(n.options.convertEventCase)), n && n.options && Object.prototype.hasOwnProperty.call(n.options, "convertMetaDataCase") && (e = Boolean(n.options.convertMetaDataCase)), {
                schema_id: n.schemaId,
                payload: Nt(n.payload, t),
                metadata: Nt(n.metadata, e)
            }
        }))
    }
    var Ft = function(n) {
            function t(e) {
                var o;
                return (o = n.call(this, "Error producing to the Monorail Edge. Response received: " + JSON.stringify(e)) || this).response = e, Object.setPrototypeOf(o, t.prototype), o
            }
            return Y(t, n), J(t)
        }(on(Error)),
        Ut = function(n) {
            function t(e) {
                var o;
                return o = n.call(this, "Error producing to the Monorail Edge. Response received: " + JSON.stringify(e)) || this, Object.setPrototypeOf(o, t.prototype), o.response = e, o
            }
            return Y(t, n), J(t)
        }(on(Error)),
        qt = function(n) {
            function t(e) {
                var o;
                return o = n.call(this, "Error completing request. A network failure may have prevented the request from completing. Error: " + e) || this, Object.setPrototypeOf(o, t.prototype), o
            }
            return Y(t, n), J(t)
        }(on(Error)),
        zt = function() {
            function n(n, t) {
                void 0 === n && (n = Mt), void 0 === t && (t = !1), this.edgeDomain = n, this.keepalive = t
            }
            return J(n, [{
                key: "produceBatch",
                value: (e = V($().mark((function n(t) {
                    var e, o, r;
                    return $().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return e = {
                                    events: Wt(t),
                                    metadata: Nt(t.metadata)
                                }, n.prev = 1, n.next = 4, fetch(this.produceBatchEndpoint(), {
                                    method: "post",
                                    headers: Vt(t.metadata),
                                    body: JSON.stringify(e),
                                    keepalive: this.keepalive
                                });
                            case 4:
                                o = n.sent, n.next = 10;
                                break;
                            case 7:
                                throw n.prev = 7, n.t0 = n.catch(1), new qt(n.t0);
                            case 10:
                                if (207 !== o.status) {
                                    n.next = 15;
                                    break
                                }
                                return n.next = 13, o.json();
                            case 13:
                                throw r = n.sent, new Ut(r);
                            case 15:
                                if (o.ok) {
                                    n.next = 23;
                                    break
                                }
                                return n.t1 = Ft, n.t2 = o.status, n.next = 20, o.text();
                            case 20:
                                throw n.t3 = n.sent, n.t4 = {
                                    status: n.t2,
                                    message: n.t3
                                }, new n.t1(n.t4);
                            case 23:
                                return n.abrupt("return", {
                                    status: o.status
                                });
                            case 24:
                            case "end":
                                return n.stop()
                        }
                    }), n, this, [
                        [1, 7]
                    ])
                }))), function(n) {
                    return e.apply(this, arguments)
                })
            }, {
                key: "produce",
                value: (t = V($().mark((function n(t) {
                    var e, o;
                    return $().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return e = !0, t && t.options && Object.prototype.hasOwnProperty.call(t.options, "convertEventCase") && (e = Boolean(t.options.convertEventCase)), n.prev = 2, n.next = 5, Gt({
                                    endpoint: this.produceEndpoint(),
                                    keepalive: this.keepalive,
                                    event: St(St({}, t), {}, {
                                        payload: Nt(t.payload, e)
                                    })
                                });
                            case 5:
                                o = n.sent, n.next = 11;
                                break;
                            case 8:
                                throw n.prev = 8, n.t0 = n.catch(2), new qt(n.t0);
                            case 11:
                                if (o) {
                                    n.next = 13;
                                    break
                                }
                                throw new Ft({
                                    message: "No response from edge"
                                });
                            case 13:
                                if (o.ok) {
                                    n.next = 21;
                                    break
                                }
                                return n.t1 = Ft, n.t2 = o.status, n.next = 18, o.text();
                            case 18:
                                throw n.t3 = n.sent, n.t4 = {
                                    status: n.t2,
                                    message: n.t3
                                }, new n.t1(n.t4);
                            case 21:
                                return n.abrupt("return", {
                                    status: o.status
                                });
                            case 22:
                            case "end":
                                return n.stop()
                        }
                    }), n, this, [
                        [2, 8]
                    ])
                }))), function(n) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "produceBatchEndpoint",
                value: function() {
                    return this.edgeDomain + "/unstable/produce_batch"
                }
            }, {
                key: "produceEndpoint",
                value: function() {
                    return this.edgeDomain + Rt
                }
            }], [{
                key: "withEndpoint",
                value: function(t) {
                    return new n("https://" + new URL(t).hostname)
                }
            }]);
            var t, e
        }();

    function Vt(n) {
        var t = {
            "Content-Type": "application/json; charset=utf-8",
            "X-Monorail-Edge-Event-Created-At-Ms": (n && n.eventCreatedAtMs || Date.now()).toString(),
            "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
            "X-Monorail-Edge-Client-Message-Id": (n && n.clientMessageId || Ht()).toString()
        };
        return n && n.userAgent && (t["User-Agent"] = n.userAgent), n && n.remoteIp && (t["X-Forwarded-For"] = n.remoteIp), t
    }

    function Gt(n) {
        return Jt.apply(this, arguments)
    }

    function Jt() {
        return (Jt = V($().mark((function n(t) {
            var e, o, r;
            return $().wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        return e = t.endpoint, o = t.event, r = t.keepalive, n.abrupt("return", fetch(null != e ? e : Lt + Rt, {
                            method: "post",
                            headers: Vt(o.metadata),
                            body: JSON.stringify({
                                schema_id: o.schemaId,
                                payload: o.payload
                            }),
                            keepalive: r
                        }));
                    case 2:
                    case "end":
                        return n.stop()
                }
            }), n)
        })))).apply(this, arguments)
    }
    var Kt, Xt = function() {
            return J((function n(t) {
                this.sendToConsole = t, t && n.printWelcomeMessage(t)
            }), [{
                key: "produce",
                value: function(n) {
                    return this.sendToConsole && console.log("Monorail event produced", n), new Promise((function(t) {
                        t(n)
                    }))
                }
            }, {
                key: "produceBatch",
                value: function(n) {
                    return this.sendToConsole && console.log("Monorail Batch event produced", n), new Promise((function(t) {
                        t(n)
                    }))
                }
            }], [{
                key: "printWelcomeMessage",
                value: function(n) {
                    console.log("%c👋 from Monorail%c\n\nWe've noticed that you're" + (n ? "" : " not") + " running in debug mode. As such, we will " + (n ? "produce" : "not produce") + " Monorail events to the console. \n\nIf you want Monorail events to " + (n ? "stop" : "start") + " appearing here, %cset debugMode=" + (!n).toString() + "%c, for the Monorail Log Producer in your code.", "font-size: large;", "font-size: normal;", "font-weight: bold;", "font-weight: normal;")
                }
            }])
        }(),
        Yt = function() {
            function n(t, e) {
                this.producer = t, this.middleware = e, this.executeChain = n.buildMiddlewareChain(this.middleware.concat(new jt(t)))
            }
            return J(n, [{
                key: "produce",
                value: function(n) {
                    return n.metadata = St({
                        eventCreatedAtMs: Date.now(),
                        clientMessageId: Ht()
                    }, n.metadata), this.executeChain(n)
                }
            }, {
                key: "produceBatch",
                value: function(n) {
                    return this.executeChain(n)
                }
            }], [{
                key: "createLogProducer",
                value: function(t) {
                    return new n(new Xt(t.debugMode), t.middleware || [])
                }
            }, {
                key: "createHttpProducerWithEndpoint",
                value: function(t, e) {
                    return void 0 === e && (e = []), new n(zt.withEndpoint(t), e)
                }
            }, {
                key: "createHttpProducer",
                value: function(t) {
                    var e = t.options && t.options.keepalive;
                    return new n(t.production ? new zt(Lt, e) : new zt(Mt, e), t.middleware || [])
                }
            }, {
                key: "buildMiddlewareChain",
                value: function(n, t) {
                    var e = this;
                    return void 0 === t && (t = 0), t === n.length ? this.identityFn : function(o) {
                        return n[t].do(o, e.buildMiddlewareChain(n, t + 1))
                    }
                }
            }])
        }();
    ! function(n) {
        n.Draft = "draft", n.Scheduled = "scheduled", n.Running = "running", n.Cooldown = "cooldown", n.Ended = "ended", n.Concluded = "concluded"
    }(Kt || (Kt = {}));
    var Zt, $t, Qt, ne, te, ee, oe, re = {
            exports: {}
        },
        ae = {
            exports: {}
        };

    function ie() {
        return Zt || (Zt = 1, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
            rotl: function(n, t) {
                return n << t | n >>> 32 - t
            },
            rotr: function(n, t) {
                return n << 32 - t | n >>> t
            },
            endian: function(n) {
                if (n.constructor == Number) return 16711935 & t.rotl(n, 8) | 4278255360 & t.rotl(n, 24);
                for (var e = 0; e < n.length; e++) n[e] = t.endian(n[e]);
                return n
            },
            randomBytes: function(n) {
                for (var t = []; n > 0; n--) t.push(Math.floor(256 * Math.random()));
                return t
            },
            bytesToWords: function(n) {
                for (var t = [], e = 0, o = 0; e < n.length; e++, o += 8) t[o >>> 5] |= n[e] << 24 - o % 32;
                return t
            },
            wordsToBytes: function(n) {
                for (var t = [], e = 0; e < 32 * n.length; e += 8) t.push(n[e >>> 5] >>> 24 - e % 32 & 255);
                return t
            },
            bytesToHex: function(n) {
                for (var t = [], e = 0; e < n.length; e++) t.push((n[e] >>> 4).toString(16)), t.push((15 & n[e]).toString(16));
                return t.join("")
            },
            hexToBytes: function(n) {
                for (var t = [], e = 0; e < n.length; e += 2) t.push(parseInt(n.substr(e, 2), 16));
                return t
            },
            bytesToBase64: function(t) {
                for (var e = [], o = 0; o < t.length; o += 3)
                    for (var r = t[o] << 16 | t[o + 1] << 8 | t[o + 2], a = 0; a < 4; a++) 8 * o + 6 * a <= 8 * t.length ? e.push(n.charAt(r >>> 6 * (3 - a) & 63)) : e.push("=");
                return e.join("")
            },
            base64ToBytes: function(t) {
                t = t.replace(/[^A-Z0-9+\/]/gi, "");
                for (var e = [], o = 0, r = 0; o < t.length; r = ++o % 4) 0 != r && e.push((n.indexOf(t.charAt(o - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | n.indexOf(t.charAt(o)) >>> 6 - 2 * r);
                return e
            }
        }, ae.exports = t), ae.exports;
        var n, t
    }

    function ce() {
        if (Qt) return $t;
        Qt = 1;
        var n = {
            utf8: {
                stringToBytes: function(t) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(n.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function(n) {
                    for (var t = [], e = 0; e < n.length; e++) t.push(255 & n.charCodeAt(e));
                    return t
                },
                bytesToString: function(n) {
                    for (var t = [], e = 0; e < n.length; e++) t.push(String.fromCharCode(n[e]));
                    return t.join("")
                }
            }
        };
        return $t = n
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    function se() {
        if (te) return ne;

        function n(n) {
            return !!n.constructor && "function" == typeof n.constructor.isBuffer && n.constructor.isBuffer(n)
        }
        return te = 1, ne = function(t) {
            return null != t && (n(t) || function(t) {
                return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
            }(t) || !!t._isBuffer)
        }
    }
    ee || (ee = 1, function() {
            var n = ie(),
                t = ce().utf8,
                e = se(),
                o = ce().bin,
                r = function(a, i) {
                    a.constructor == String ? a = i && "binary" === i.encoding ? o.stringToBytes(a) : t.stringToBytes(a) : e(a) ? a = Array.prototype.slice.call(a, 0) : Array.isArray(a) || a.constructor === Uint8Array || (a = a.toString());
                    for (var c = n.bytesToWords(a), s = 8 * a.length, l = 1732584193, u = -271733879, d = -1732584194, p = 271733878, f = 0; f < c.length; f++) c[f] = 16711935 & (c[f] << 8 | c[f] >>> 24) | 4278255360 & (c[f] << 24 | c[f] >>> 8);
                    c[s >>> 5] |= 128 << s % 32, c[14 + (s + 64 >>> 9 << 4)] = s;
                    var h = r._ff,
                        m = r._gg,
                        y = r._hh,
                        g = r._ii;
                    for (f = 0; f < c.length; f += 16) {
                        var v = l,
                            b = u,
                            w = d,
                            x = p;
                        l = h(l, u, d, p, c[f + 0], 7, -680876936), p = h(p, l, u, d, c[f + 1], 12, -389564586), d = h(d, p, l, u, c[f + 2], 17, 606105819), u = h(u, d, p, l, c[f + 3], 22, -1044525330), l = h(l, u, d, p, c[f + 4], 7, -176418897), p = h(p, l, u, d, c[f + 5], 12, 1200080426), d = h(d, p, l, u, c[f + 6], 17, -1473231341), u = h(u, d, p, l, c[f + 7], 22, -45705983), l = h(l, u, d, p, c[f + 8], 7, 1770035416), p = h(p, l, u, d, c[f + 9], 12, -1958414417), d = h(d, p, l, u, c[f + 10], 17, -42063), u = h(u, d, p, l, c[f + 11], 22, -1990404162), l = h(l, u, d, p, c[f + 12], 7, 1804603682), p = h(p, l, u, d, c[f + 13], 12, -40341101), d = h(d, p, l, u, c[f + 14], 17, -1502002290), l = m(l, u = h(u, d, p, l, c[f + 15], 22, 1236535329), d, p, c[f + 1], 5, -165796510), p = m(p, l, u, d, c[f + 6], 9, -1069501632), d = m(d, p, l, u, c[f + 11], 14, 643717713), u = m(u, d, p, l, c[f + 0], 20, -373897302), l = m(l, u, d, p, c[f + 5], 5, -701558691), p = m(p, l, u, d, c[f + 10], 9, 38016083), d = m(d, p, l, u, c[f + 15], 14, -660478335), u = m(u, d, p, l, c[f + 4], 20, -405537848), l = m(l, u, d, p, c[f + 9], 5, 568446438), p = m(p, l, u, d, c[f + 14], 9, -1019803690), d = m(d, p, l, u, c[f + 3], 14, -187363961), u = m(u, d, p, l, c[f + 8], 20, 1163531501), l = m(l, u, d, p, c[f + 13], 5, -1444681467), p = m(p, l, u, d, c[f + 2], 9, -51403784), d = m(d, p, l, u, c[f + 7], 14, 1735328473), l = y(l, u = m(u, d, p, l, c[f + 12], 20, -1926607734), d, p, c[f + 5], 4, -378558), p = y(p, l, u, d, c[f + 8], 11, -2022574463), d = y(d, p, l, u, c[f + 11], 16, 1839030562), u = y(u, d, p, l, c[f + 14], 23, -35309556), l = y(l, u, d, p, c[f + 1], 4, -1530992060), p = y(p, l, u, d, c[f + 4], 11, 1272893353), d = y(d, p, l, u, c[f + 7], 16, -155497632), u = y(u, d, p, l, c[f + 10], 23, -1094730640), l = y(l, u, d, p, c[f + 13], 4, 681279174), p = y(p, l, u, d, c[f + 0], 11, -358537222), d = y(d, p, l, u, c[f + 3], 16, -722521979), u = y(u, d, p, l, c[f + 6], 23, 76029189), l = y(l, u, d, p, c[f + 9], 4, -640364487), p = y(p, l, u, d, c[f + 12], 11, -421815835), d = y(d, p, l, u, c[f + 15], 16, 530742520), l = g(l, u = y(u, d, p, l, c[f + 2], 23, -995338651), d, p, c[f + 0], 6, -198630844), p = g(p, l, u, d, c[f + 7], 10, 1126891415), d = g(d, p, l, u, c[f + 14], 15, -1416354905), u = g(u, d, p, l, c[f + 5], 21, -57434055), l = g(l, u, d, p, c[f + 12], 6, 1700485571), p = g(p, l, u, d, c[f + 3], 10, -1894986606), d = g(d, p, l, u, c[f + 10], 15, -1051523), u = g(u, d, p, l, c[f + 1], 21, -2054922799), l = g(l, u, d, p, c[f + 8], 6, 1873313359), p = g(p, l, u, d, c[f + 15], 10, -30611744), d = g(d, p, l, u, c[f + 6], 15, -1560198380), u = g(u, d, p, l, c[f + 13], 21, 1309151649), l = g(l, u, d, p, c[f + 4], 6, -145523070), p = g(p, l, u, d, c[f + 11], 10, -1120210379), d = g(d, p, l, u, c[f + 2], 15, 718787259), u = g(u, d, p, l, c[f + 9], 21, -343485551), l = l + v >>> 0, u = u + b >>> 0, d = d + w >>> 0, p = p + x >>> 0
                    }
                    return n.endian([l, u, d, p])
                };
            r._ff = function(n, t, e, o, r, a, i) {
                var c = n + (t & e | ~t & o) + (r >>> 0) + i;
                return (c << a | c >>> 32 - a) + t
            }, r._gg = function(n, t, e, o, r, a, i) {
                var c = n + (t & o | e & ~o) + (r >>> 0) + i;
                return (c << a | c >>> 32 - a) + t
            }, r._hh = function(n, t, e, o, r, a, i) {
                var c = n + (t ^ e ^ o) + (r >>> 0) + i;
                return (c << a | c >>> 32 - a) + t
            }, r._ii = function(n, t, e, o, r, a, i) {
                var c = n + (e ^ (t | ~o)) + (r >>> 0) + i;
                return (c << a | c >>> 32 - a) + t
            }, r._blocksize = 16, r._digestsize = 16, re.exports = function(t, e) {
                if (null == t) throw new Error("Illegal argument " + t);
                var a = n.wordsToBytes(r(t, e));
                return e && e.asBytes ? a : e && e.asString ? o.bytesToString(a) : n.bytesToHex(a)
            }
        }()), re.exports,
        function(n) {
            n.CacheFirst = "cache-first", n.CacheOnly = "cache-only", n.NetworkOnly = "network-only"
        }(oe || (oe = {}));
    var le, ue, de, pe, fe = "banner_subject_id",
        he = function(n) {
            void 0 === n && (n = !0);
            var t = window.sessionStorage.getItem(fe);
            return t || n || (t = function() {
                for (var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", t = "", e = 0; e < 21; e++) t += n[Math.floor(61 * Math.random())];
                return t
            }(), window.sessionStorage.setItem(fe, t)), null != t ? t : ""
        },
        me = function() {
            function n(n) {
                var t = void 0 === n ? {} : n,
                    e = t.shopDomain,
                    o = t.isHeadless;
                this.VISIT_TOKEN = "_shopify_s", this.shopDomain = e, this.isHeadless = o, this.monorail = Yt.createHttpProducer({
                    production: !0
                })
            }
            return n.prototype.shouldEmit = function() {
                return !(this.isHeadless && !0)
            }, n.prototype.emitInteraction = function(n, e) {
                if (void 0 === e && (e = ""), this.shouldEmit()) {
                    var o = this.getCommonPayload();
                    this.monorail.produce({
                        schemaId: "privacy_banner_interact/1.2",
                        payload: t(t(t({}, o), e && {
                            interactionMetadata: e
                        }), {
                            interactionType: n
                        })
                    })
                }
            }, n.prototype.emitRender = function() {
                if (this.shouldEmit()) {
                    var n = this.getCommonPayload();
                    this.monorail.produce({
                        schemaId: "privacy_banner_render/1.1",
                        payload: t({}, n)
                    })
                }
            }, n.prototype.emitInitialized = function() {
                if (this.shouldEmit()) {
                    var n = this.getCommonPayload();
                    this.monorail.produce({
                        schemaId: "privacy_banner_initialized/1.0",
                        payload: t({}, n)
                    })
                }
            }, n.prototype.visitorRegion = function() {
                var n = document.cookie.split(";").find((function(n) {
                    return n.includes("_tracking_consent=")
                }));
                if (!n) return null;
                var t = {};
                try {
                    t = JSON.parse(unescape(n.split("=")[1]))
                } catch (n) {
                    return null
                }
                return t.region || null
            }, n.prototype.getCommonPayload = function() {
                var n, e = this.shopDomain || (null === (n = window.Shopify) || void 0 === n ? void 0 : n.shop),
                    o = kt(this.VISIT_TOKEN) || "0",
                    r = window.location.pathname,
                    a = this.visitorRegion(),
                    i = he();
                return t({
                    shopPermanentDomain: e,
                    sessionToken: o,
                    regulation: "CMP",
                    path: r,
                    experimentationSubjectId: i
                }, a && {
                    region: a
                })
            }, n
        }();

    function ye(n, t) {
        return (null == t ? void 0 : t.id) && n.setAttribute("id", t.id), (null == t ? void 0 : t.class) && n.setAttribute("class", t.class), (null == t ? void 0 : t.onClick) && n.addEventListener("click", t.onClick), (null == t ? void 0 : t.appendTo) && t.appendTo.appendChild(n), (null == t ? void 0 : t.role) && n.setAttribute("role", t.role), (null == t ? void 0 : t.autofocus) && n.setAttribute("autofocus", ""), (null == t ? void 0 : t.ariaHidden) && n.setAttribute("aria-hidden", "".concat(null == t ? void 0 : t.ariaHidden)), n
    }

    function ge(n) {
        var t = ye(document.createElement("div"), n);
        return (null == n ? void 0 : n.text) && (t.textContent = n.text), (null == n ? void 0 : n.ariaModal) && t.setAttribute("aria-modal", n.ariaModal), (null == n ? void 0 : n.ariaLabelledby) && t.setAttribute("aria-labelledby", n.ariaLabelledby), t
    }

    function ve(n) {
        var t = ye(document.createElement("span"), n);
        return (null == n ? void 0 : n.text) && (t.textContent = n.text), t
    }

    function be(n) {
        var t, e = ye(document.createElement("button"), n);
        return e.textContent = null !== (t = null == n ? void 0 : n.text) && void 0 !== t ? t : null, n.disabled && e.setAttribute("disabled", ""), n.ariaHaspopup && e.setAttribute("aria-haspopup", n.ariaHaspopup), n.type && e.setAttribute("type", n.type), n.ariaLabel && e.setAttribute("aria-label", n.ariaLabel), e
    }

    function we(n) {
        var t = ye(document.createElement("a"), n);
        return t.setAttribute("href", n.href), t.textContent = n.text, t.setAttribute("target", void 0 === n.target ? "_blank" : n.target), n.target && "_blank" !== n.target || t.setAttribute("rel", "noopener noreferrer"), t
    }

    function xe(n) {
        var t = ye(document.createElement("p"), n);
        return t.textContent = n.text, t
    }

    function Ce(n, t) {
        var e = ye(document.createElement(n), t);
        return e.textContent = t.text, e
    }

    function ke(n) {
        return Ce(de.H2, n)
    }

    function _e(n) {
        return Ce(de.H3, n)
    }

    function Ie(n) {
        var t = ye(document.createElement("style"), n);
        return t.textContent = n.content, t
    }

    function Ee(n) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        t.setAttributeNS(null, "width", n.width), t.setAttributeNS(null, "height", n.height), t.setAttributeNS(null, "viewBox", "0 0 ".concat(n.width, " ").concat(n.height)), (null == n ? void 0 : n.fillRule) && t.setAttributeNS(null, "fill-rule", n.fillRule), (null == n ? void 0 : n.clipRule) && t.setAttributeNS(null, "clip-rule", n.clipRule);
        var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return e.setAttributeNS(null, "fill", (null == n ? void 0 : n.colour) || "#000"), e.setAttributeNS(null, "d", n.path), t.appendChild(e), (null == n ? void 0 : n.id) && t.setAttribute("id", n.id), (null == n ? void 0 : n.class) && t.setAttribute("class", n.class), (null == n ? void 0 : n.dataIconType) && t.setAttribute("data-icon-type", n.dataIconType), (null == n ? void 0 : n.ariaHidden) && t.setAttribute("aria-hidden", "".concat(null == n ? void 0 : n.ariaHidden)), (null == n ? void 0 : n.focusable) && t.setAttribute("focusable", "".concat(null == n ? void 0 : n.focusable)), (null == n ? void 0 : n.appendTo) && n.appendTo.appendChild(t), t
    }

    function De(n) {
        var t = ye(document.createElement("section"), n);
        return (null == n ? void 0 : n.text) && (t.textContent = n.text), (null == n ? void 0 : n.ariaModal) && t.setAttribute("aria-modal", n.ariaModal), (null == n ? void 0 : n.ariaLabelledby) && t.setAttribute("aria-labelledby", n.ariaLabelledby), t
    }

    function Ae(n) {
        var t = n.bannerData,
            e = t.experimentVariant === lt.ConsolidatedText,
            o = t.experimentVariant === lt.SwapButtonOrder,
            r = t.experimentVariant === lt.ExperimentOneWinner,
            a = t.experimentVariant === lt.NewHypothesis,
            i = r || a,
            c = De({
                id: ut.DialogId,
                class: ut.DialogClass,
                role: "alertdialog",
                ariaModal: "false",
                ariaLabelledby: ut.BodyTitleId
            }),
            s = ge({
                class: ut.WrapperClass
            });
        c.appendChild(s);
        var l = ge({
            class: ut.BodyClass
        });
        s.appendChild(l);
        var u = ge({
            class: ut.ButtonsClass
        });
        return u.classList.add(ut.ButtonsGranularClass), s.appendChild(u), e || i ? function(n, t) {
            var e, o = ke({
                id: ut.BodyTitleId,
                text: (null === (e = n.experiment) || void 0 === e ? void 0 : e.title) || ""
            });
            t.appendChild(o)
        }(t, l) : function(n, t) {
            if (n.title) {
                var e = ke({
                    id: ut.BodyTitleId,
                    text: n.title
                });
                t.appendChild(e)
            }
        }(t, l), e || i ? function(n, t) {
            var e, o, r, a = xe({
                    text: "".concat(n.text, " ")
                }),
                i = we({
                    id: ut.ButtonManagePrefsId,
                    href: "#",
                    text: (null === (e = n.experiment) || void 0 === e ? void 0 : e.preferences) || ""
                }),
                c = we({
                    id: ut.BodyCopyPolicyLinkId,
                    href: n.policyLinkUrl,
                    target: "_blank",
                    text: (null === (o = n.experiment) || void 0 === o ? void 0 : o.privacyPolicy) || ""
                }),
                s = " ".concat((null === (r = n.experiment) || void 0 === r ? void 0 : r.customizeYour) || "", " ");
            a.appendChild(c), a.appendChild(ve({
                text: s
            })), a.appendChild(i), a.appendChild(ve({
                text: "."
            })), t.appendChild(a)
        }(t, l) : function(n, t) {
            var e = xe({
                    text: "".concat(n.text, " ")
                }),
                o = we({
                    id: ut.BodyCopyPolicyLinkId,
                    href: n.policyLinkUrl,
                    target: "_blank",
                    text: n.policyLinkText ? n.policyLinkText : "Privacy Policy"
                });
            e.appendChild(o), t.appendChild(e)
        }(t, l), e || i || function(n, t) {
            var e = ve({
                    text: n.buttonPrefsOpenText
                }),
                o = be({
                    id: ut.ButtonManagePrefsId,
                    class: ut.ButtonManagePrefsClass,
                    ariaHaspopup: "dialog",
                    type: "button"
                });
            o.appendChild(e), t.appendChild(o)
        }(t, u), o || a ? (Be(t, u), Oe(t, u)) : (Oe(t, u), Be(t, u)), c
    }

    function Oe(n, t) {
        t.appendChild(be({
            id: ut.ButtonAcceptId,
            class: ut.ButtonAcceptClass,
            type: "button",
            text: n.buttonAcceptText
        }))
    }

    function Be(n, t) {
        t.appendChild(be({
            id: ut.ButtonDeclineId,
            class: ut.ButtonDeclineClass,
            type: "button",
            text: n.buttonDeclineText
        }))
    }

    function Te(n, t) {
        var e, o, r, a, i = (e = {
            appendTo: n
        }, ye(document.createElement("header"), e));
        o = i, r = "Close dialog", Ee({
            appendTo: a = be({
                id: dt.HeaderCloseId,
                class: dt.HeaderCloseClass,
                ariaLabel: r,
                type: "button",
                text: ""
            }),
            ariaHidden: !0,
            width: "12",
            height: "12",
            path: "M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z"
        }), o.appendChild(a), ke({
            id: dt.HeaderTitleId,
            text: t.preferences.title,
            appendTo: i
        });
        var c = ge({
            class: dt.HeaderActionsClass,
            appendTo: i
        });
        return function(n, t) {
                n.appendChild(be({
                    id: dt.HeaderAcceptId,
                    type: "button",
                    text: t
                }))
            }(c, t.preferences.buttonAcceptText),
            function(n, t) {
                n.appendChild(be({
                    id: dt.HeaderDeclineId,
                    type: "button",
                    text: t
                }))
            }(c, t.preferences.buttonDeclineText),
            function(n, t) {
                n.appendChild(be({
                    id: dt.HeaderSaveId,
                    type: "button",
                    text: t
                }))
            }(c, t.preferences.buttonSaveText), i
    }

    function Pe(n, t) {
        var e = ge({
            class: dt.IntroClass,
            appendTo: n
        });
        return function(n, t) {
            var e = ge({
                class: dt.IntroMainClass,
                appendTo: n
            });
            _e({
                text: t.preferences.introTitle,
                appendTo: e
            }), xe({
                text: t.preferences.introText,
                appendTo: e
            })
        }(e, t), t.preferences.bulletPoints.enabled && function(n, t) {
            var e = ge({
                    class: dt.IntroExplainWrapperClass,
                    appendTo: n
                }),
                o = ge({
                    class: dt.IntroExplainAcceptClass,
                    appendTo: e
                });
            _e({
                text: t.preferences.bulletPoints.title || "",
                appendTo: o
            });
            var r = [];
            t.preferences.bulletPoints.firstText && r.push(t.preferences.bulletPoints.firstText);
            t.preferences.bulletPoints.secondText && r.push(t.preferences.bulletPoints.secondText);
            t.preferences.bulletPoints.thirdText && r.push(t.preferences.bulletPoints.thirdText);
            (function(n) {
                var t = ye(document.createElement("ul"), n);
                n.lis && n.lis.forEach((function(n) {
                    var e = document.createElement("li");
                    e.textContent = n, t.appendChild(e)
                }))
            })({
                lis: r,
                appendTo: o
            })
        }(e, t), e
    }

    function Se(n) {
        var e = n.themeColours,
            o = n.purpose,
            r = n.ids,
            a = n.parent,
            i = r.input === dt.OptionEssentialInputId,
            c = Ee({
                dataIconType: "unchecked",
                width: "24",
                height: "24",
                path: "M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z",
                colour: e.iconColor,
                focusable: !0
            }),
            s = function(n) {
                return Ee({
                    dataIconType: "checked",
                    width: "24",
                    height: "24",
                    path: "M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z",
                    colour: n,
                    focusable: !0
                })
            }(e.iconColor),
            l = ge({
                class: dt.OptionClass,
                id: r.section
            }),
            u = function(n) {
                var t = ye(document.createElement("label"), n);
                return t.setAttribute("for", n.for), (null == n ? void 0 : n.text) && (t.textContent = n.text), t
            }({
                appendTo: l,
                for: r.input,
                text: o.description
            });
        ! function(n) {
            var t = ye(document.createElement("input"), n);
            t.setAttribute("type", n.type), n.checked && t.setAttribute("checked", "true"), n.disabled && t.setAttribute("disabled", "".concat(n.disabled)), (null == n ? void 0 : n.onChange) && t.addEventListener("change", n.onChange), n.tabindex && t.setAttribute("tabindex", "".concat(n.tabindex)), !0 === n.ariaReadonly && t.setAttribute("aria-readonly", "".concat(n.ariaReadonly))
        }(t({
            appendTo: u,
            id: r.input,
            type: "checkbox",
            checked: i,
            ariaReadonly: i
        }, n.tabindex && {
            tabindex: n.tabindex
        }));
        var d = ve({
            appendTo: u,
            ariaHidden: !0
        });
        d.appendChild(s), d.appendChild(c), xe({
            appendTo: l,
            text: o.longDescription
        }), i ? (s.style.display = "block", c.style.display = "none") : (s.style.display = "none", c.style.display = "block"), a.appendChild(l)
    }

    function Me(n) {
        var t = n.bannerData,
            e = ge({
                id: dt.WrapperId,
                class: dt.WrapperClass
            }),
            o = ge({
                id: dt.OverlayId,
                class: dt.OverlayClass,
                text: " "
            });
        e.appendChild(o);
        var r = De({
            id: dt.DialogId,
            class: dt.DialogClass,
            role: "dialog",
            ariaModal: "true",
            ariaLabelledby: dt.HeaderTitleId
        });
        e.appendChild(r), Te(r, t);
        var a = ge({
            class: dt.DialogScrollableClass
        });
        return r.appendChild(a), Pe(a, t),
            function(n, t) {
                var e = gt(t.theme.theme, t.theme.fontColor, t.theme.backgroundColor, t.theme.buttonFontColor, t.theme.buttonBackgroundColor),
                    o = ge({
                        class: dt.OptionWrapperClass
                    });
                n.appendChild(o), Se({
                    themeColours: e,
                    ids: {
                        section: dt.OptionEssentialId,
                        input: dt.OptionEssentialInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.essentialName,
                        longDescription: t.preferences.purposes.essentialDesc
                    },
                    parent: o,
                    tabindex: "-1"
                }), Se({
                    themeColours: e,
                    ids: {
                        section: dt.OptionPreferencesId,
                        input: dt.OptionPreferencesInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.preferencesName,
                        longDescription: t.preferences.purposes.preferencesDesc
                    },
                    parent: o
                }), Se({
                    themeColours: e,
                    ids: {
                        section: dt.OptionMarketingId,
                        input: dt.OptionMarketingInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.marketingName,
                        longDescription: t.preferences.purposes.marketingDesc
                    },
                    parent: o
                }), Se({
                    themeColours: e,
                    ids: {
                        section: dt.OptionAnalyticsId,
                        input: dt.OptionAnalyticsInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.performanceName,
                        longDescription: t.preferences.purposes.performanceDesc
                    },
                    parent: o
                })
            }(a, t), e
    }! function(n) {
        n.Accepted = "accept", n.Declined = "decline", n.AcceptedAll = "accept_all", n.DeclinedAll = "decline_all", n.ManagePreferences = "manage_preferences", n.Save = "save", n.LeavePreferences = "leave_preferences", n.PrivacyPolicyView = "privacy_policy_view"
    }(le || (le = {})),
    function(n) {
        n.BottomFullWidth = "bottom-full-width", n.BottomLeft = "bottom-left", n.Center = "center", n.BottomRight = "bottom-right", n.BottomCenter = "bottom-center"
    }(ue || (ue = {})),
    function(n) {
        n.H1 = "h1", n.H2 = "h2", n.H3 = "h3"
    }(de || (de = {})),
    function(n) {
        n.Escape = "Escape", n.Tab = "Tab"
    }(pe || (pe = {}));
    var Le = function() {
            function n(n) {
                var t = n.bannerData,
                    e = n.storefrontAccessToken,
                    o = n.checkoutRootDomain,
                    r = n.storefrontRootDomain;
                this.bannerData = t, e ? (this.storefrontAccessToken = e, this.checkoutRootDomain = o, this.storefrontRootDomain = r, this.logger = new me({
                    shopDomain: o,
                    isHeadless: !0
                })) : this.logger = new me
            }
            return n.show = function() {
                var n = document.getElementById(dt.WrapperId);
                null !== n && (n.style.display = "block", document.body.style.setProperty("overflow", "hidden"))
            }, n.hide = function(n) {
                var t = document.getElementById(dt.WrapperId);
                null !== t && (t.style.display = "none", document.body.style.removeProperty("overflow")), n && n.focus()
            }, n.hideModalAndBanner = function(t) {
                n.hide();
                var e = document.getElementById(ut.DialogId);
                null !== e && (e.style.display = "none"), t && t.focus()
            }, n.selectedConsent = function() {
                var n = document.getElementById(dt.OptionMarketingInputId),
                    t = document.getElementById(dt.OptionAnalyticsInputId),
                    e = document.getElementById(dt.OptionPreferencesInputId),
                    o = n.checked ? "1" : "0",
                    r = t.checked ? "1" : "0",
                    a = e.checked ? "1" : "0";
                return "".concat(o).concat(r).concat(a)
            }, n.prototype.init = function() {
                return e(this, void 0, void 0, (function() {
                    return o(this, (function(n) {
                        return this.render(), [2]
                    }))
                }))
            }, n.prototype.setCheckboxesToCurrentConsent = function() {
                var n = document.getElementById(dt.OptionAnalyticsInputId),
                    t = document.getElementById(dt.OptionPreferencesInputId),
                    e = document.getElementById(dt.OptionMarketingInputId);
                this.handleOptionChange({
                    target: n,
                    isReadOnly: !1,
                    sectionId: dt.OptionAnalyticsId,
                    checked: ot()
                }), this.handleOptionChange({
                    target: t,
                    isReadOnly: !1,
                    sectionId: dt.OptionPreferencesId,
                    checked: rt()
                }), this.handleOptionChange({
                    target: e,
                    isReadOnly: !1,
                    sectionId: dt.OptionMarketingId,
                    checked: et()
                })
            }, n.prototype.render = function() {
                this.addCSS(this.bannerData), this.addHTML(this.bannerData), this.previouslyFocusedElement = document.activeElement, n.show(), this.setupCheckboxEventHandlers(), this.setupButtonEventHandlers(), this.setupKeyboardEventHandlers(), this.logger.emitInteraction(le.ManagePreferences)
            }, n.prototype.addCSS = function(n) {
                var t = function(n) {
                        var t = n.bannerData,
                            e = n.selectorPrefix,
                            o = e ? "".concat(e, " ") : "",
                            r = gt(t.theme.theme, t.theme.fontColor, t.theme.backgroundColor, t.theme.buttonFontColor, t.theme.buttonBackgroundColor);
                        return "\n    ".concat(o, ".").concat(dt.WrapperClass, " {\n      position: relative;\n    }\n    ").concat(o, ".").concat(dt.WrapperClass, ':after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n\n    ').concat(o, ".").concat(dt.DialogClass, " {\n      box-shadow: 0 5px 10px rgb(63 63 68 / 50%);\n      position: fixed;\n      z-index: 2000002;\n      opacity: 1;\n      background-color: ").concat(r.backgroundColor, ";\n      max-height: 80%;\n      overflow-y: auto;\n      top: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n      display: flex;\n      flex-direction: column;\n      left: 25%;\n      width: 50%;\n      text-align: left;\n    }\n    @media only screen and (max-width: 1900px) {\n      ").concat(o, ".").concat(dt.DialogClass, " {\n        left: 20%;\n        width: 60%;\n      }\n    }\n    @media only screen and (max-width: 1600px) {\n      ").concat(o, ".").concat(dt.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 1350px) {\n      ").concat(o, ".").concat(dt.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n\n    ").concat(o, ".").concat(dt.OverlayClass, " {\n      z-index: 2000001;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n\n    /* Header */\n\n    ").concat(o, ".").concat(dt.DialogClass, " header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      padding: 32px 32px 20px 32px;\n      border-bottom: 1px solid ").concat(r.sectionDivider, ";\n      position: relative;\n      background: transparent;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(dt.DialogClass, " header {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(dt.DialogClass, " header {\n        padding: 15px 20px 10px 20px;\n      }\n    }\n    ").concat(o, ".").concat(dt.DialogClass, " header h2 {\n      color: ").concat(r.fontColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0 20px 0 0 !important;\n      font-weight: 600;\n      font-size: 130%;\n      line-height: 1.2;\n      width: 100%;\n      text-align: left;\n      word-break: normal;\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(dt.DialogClass, " header h2 {\n        margin: 0 0 .8em 0;\n        padding: 0 !important;\n        text-align: center;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(dt.DialogClass, " header h2 {\n        text-align: left;\n        padding: 0 25px 0 0 !important;\n      }\n    }\n\n    ").concat(o, ".").concat(dt.HeaderCloseClass, " {\n      position: absolute;\n      top: 40px;\n      right: 35px;\n      width: 24px;\n      height: 24px;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      border-radius: 50%;\n      min-width: 24px;\n    }\n\n    ").concat(o, ".").concat(dt.HeaderCloseClass, " svg {\n      height: 12px;\n      width: 12px;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(dt.HeaderCloseClass, " {\n        top: 20px;\n        right: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(dt.HeaderCloseClass, " {\n        top: 30px;\n        right: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(dt.HeaderCloseClass, " {\n        top: 15px;\n        right: 15px;\n      }\n    }\n    ").concat(o, ".").concat(dt.HeaderCloseClass, ":hover {\n      cursor: pointer;\n    }\n    ").concat(o, ".").concat(dt.HeaderCloseClass, ":focus {\n      outline: none;\n      box-shadow: 0 0 0 3px ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(dt.HeaderCloseClass, " svg path {\n      fill: ").concat(r.fontColor, ";\n    }\n    ").concat(o, ".").concat(dt.HeaderCloseClass, ":disabled svg path {\n      fill: ").concat(r.sectionDivider, ";\n    }\n\n    ").concat(o, ".").concat(dt.HeaderActionsClass, " {\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: row;\n      padding: 0 50px 0 0;\n      width: auto;\n    }\n\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(dt.HeaderActionsClass, " {\n        flex-direction: column;\n        width: 100%;\n      }\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(dt.HeaderActionsClass, " {\n        padding: 0;\n      }\n    }\n    ").concat(o, ".").concat(dt.HeaderActionsClass, " button {\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px 10px 25px;\n      margin: 0 20px 0 0;\n      font-size: 110%;\n      background: ").concat(r.button.backgroundColor, ";\n      color: ").concat(r.button.fontColor, ";\n      border: 1px solid ").concat(r.button.borderColor, ";\n      white-space: nowrap;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(dt.HeaderActionsClass, " button {\n        width: 100%;\n        margin-bottom: 15px;\n      }\n    }\n    ").concat(o, ".").concat(dt.HeaderActionsClass, " button.primary {\n      background: ").concat(r.primaryButton.backgroundColor, ";\n      color: ").concat(r.primaryButton.fontColor, ";\n      border: 1px solid ").concat(r.primaryButton.borderColor, ";\n    }\n    ").concat(o, ".").concat(dt.HeaderActionsClass, " button:last-child {\n      margin-right: 0;\n    }\n    ").concat(o, ".").concat(dt.HeaderActionsClass, " button:hover {\n      cursor: pointer;\n    }\n    ").concat(o, ".").concat(dt.HeaderActionsClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(r.focused, ";\n    }\n\n    ").concat(o, ".").concat(dt.DialogScrollableClass, " {\n      overflow-y: scroll;\n      position: relative;\n    }\n\n    ").concat(o, ".").concat(dt.DialogScrollableClass, "::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n\n    /* Intro */\n\n    ").concat(o, ".").concat(dt.IntroClass, " h3 {\n      color: ").concat(r.fontColor, ";\n      font-family: inherit;\n      margin: 0 0 15px 0;\n      padding: 0 !important;\n      font-weight: 600;\n      line-height: 1.2;\n      text-align: left;\n    }\n    ").concat(o, ".").concat(dt.IntroClass, " p {\n      color: ").concat(r.fontSubduedColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(dt.IntroClass, " ul {\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(dt.IntroClass, " ul li {\n      margin: 0 0 0.5em 1.7em;\n      padding: 0;\n      line-height: 1.2;\n    }\n    ").concat(o, ".").concat(dt.IntroMainClass, " {\n      padding: 20px 32px 0 32px;\n      line-height: 1.5;\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(dt.IntroMainClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    ").concat(o, ".").concat(dt.IntroMainClass, " p {\n      padding-bottom: 20px;\n    }\n    ").concat(o, ".").concat(dt.IntroMainClass, " h3 {\n      font-size: 110%;\n    }\n    ").concat(o, ".").concat(dt.IntroMainClass, " p {\n      font-size: 105%;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(dt.IntroExplainWrapperClass, " {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      margin: 0;\n      padding: 20px 32px 0 32px;\n      color: ").concat(r.fontSubduedColor, ";\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(o, ".").concat(dt.IntroExplainWrapperClass, " {\n        flex-direction: column;\n        padding-bottom: 0;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(dt.IntroExplainWrapperClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    ").concat(o, ".").concat(dt.IntroExplainAcceptClass, " {\n      width: 100%;\n      padding: 0 40px 0 0;\n    }\n    ").concat(o, ".").concat(dt.IntroExplainAcceptClass, " li {\n      list-style-type: disc;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(o, ".").concat(dt.IntroExplainAcceptClass, " {\n        width: 100%;\n        padding-right: 0;\n      }\n    }\n    ").concat(o, ".").concat(dt.IntroExplainAcceptClass, " h3 {\n      font-size: 110%;\n    }\n\n    /* Options */\n\n    ").concat(o, ".").concat(dt.OptionWrapperClass, " {\n      padding: 0 32px 32px 32px;\n      color: ").concat(r.fontColor, ";\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(dt.OptionWrapperClass, " {\n        padding: 0 20px 15px 20px;\n      }\n    }\n\n    ").concat(o, ".").concat(dt.OptionClass, " {\n      margin: 0;\n      font-size: 100%;\n      line-height: 1.1;\n      padding: 20px 0 0 0;\n    }\n    ").concat(o, ".").concat(dt.OptionClass, ":first-child {\n      padding: 25px 0 0 0;\n      margin: 20px 0 0 0;\n      border-top: 1px solid ").concat(r.sectionDivider, ";\n    }\n    ").concat(o, ".").concat(dt.OptionClass, " label {\n      display: flex;\n      gap: 20px;\n      color: ").concat(r.fontColor, ";\n      cursor: pointer;\n      font-family: inherit;\n      margin: 0 0 5px 0;\n      padding: 0;\n      font-weight: 600;\n      font-size: 110%;\n      line-height: 1.2;\n    }\n    ").concat(o, ".").concat(dt.OptionClass, " label input {\n      position: absolute;\n      clip: rect(1px, 1px, 1px, 1px);\n      padding: 0;\n      border: 0;\n      height: 1px;\n      width: 1px;\n      overflow: hidden;\n    }\n    ").concat(o, ".").concat(dt.OptionClass, " label span {\n      order: -1;\n      display: inline-block;\n      background-color: ").concat(r.backgroundColor, ";\n      width: 24px;\n      height: 24px;\n    }\n    ").concat(o, ".").concat(dt.OptionClass, " label span svg {\n      background-color: ").concat(r.backgroundColor, ";\n      border-radius: 3px;\n    }\n    ").concat(o, ".").concat(dt.OptionClass, ' label input[aria-readonly="true"] ~ span svg {\n      opacity: 0.2;\n      cursor: not-allowed;\n    }\n    ').concat(o, ".").concat(dt.OptionClass, " label input:focus ~ span {\n      background-color: ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(dt.OptionClass, " label input:focus ~ span svg {\n      outline: none;\n      border-radius: 5px;\n      box-shadow: 0 0 0 4px ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(dt.OptionClass, " p {\n      line-height: 1.3;\n      font-size: 100%;\n      color: ").concat(r.fontSubduedColor, ";\n      margin: 0;\n      padding: 0 0 0 45px;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(o, ".").concat(dt.OptionClass, " p {\n        width: 100%;\n        line-height: 1.4;\n      }\n    }\n  ")
                    }({
                        bannerData: n
                    }),
                    e = Ie({
                        id: dt.StylesContainerId,
                        content: t
                    });
                document.head.appendChild(e)
            }, n.prototype.addHTML = function(t) {
                var e, o, r, a = Me({
                        bannerData: t
                    }),
                    i = document.getElementById(ut.DialogId);
                o = a, null === (r = null == (e = i) ? void 0 : e.parentNode) || void 0 === r || r.insertBefore(o, e.nextSibling);
                var c = document.getElementById(dt.DialogId);
                c && (this.setCheckboxesToCurrentConsent(), c.dataset.consent = n.selectedConsent()), n.hide()
            }, n.prototype.handleOptionChange = function(t) {
                var e = t.target,
                    o = t.isReadOnly,
                    r = t.sectionId,
                    a = t.checked;
                (void 0 !== a && a || o) && (e.checked = !0);
                var i, c, s, l = e.checked,
                    u = document.getElementById(r),
                    d = u.querySelector('svg[data-icon-type="checked"]'),
                    p = u.querySelector('svg[data-icon-type="unchecked"]');
                l ? (d.style.display = "block", p.style.display = "none") : (d.style.display = "none", p.style.display = "block"), i = n.selectedConsent(), c = document.getElementById(dt.DialogId), s = document.getElementById(dt.HeaderSaveId), (null == c ? void 0 : c.dataset.consent) && (null == c ? void 0 : c.dataset.consent) !== i ? s.className = "primary" : s.className = ""
            }, n.prototype.setupCheckboxEventHandlers = function() {
                var n = this,
                    t = document.getElementById(dt.OptionEssentialInputId);
                null == t || t.addEventListener("change", (function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !0,
                        sectionId: dt.OptionEssentialId
                    })
                }));
                var e = document.getElementById(dt.OptionAnalyticsInputId);
                null == e || e.addEventListener("change", (function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !1,
                        sectionId: dt.OptionAnalyticsId
                    })
                }));
                var o = document.getElementById(dt.OptionPreferencesInputId);
                null == o || o.addEventListener("change", (function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !1,
                        sectionId: dt.OptionPreferencesId
                    })
                }));
                var r = document.getElementById(dt.OptionMarketingInputId);
                null == r || r.addEventListener("change", (function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !1,
                        sectionId: dt.OptionMarketingId
                    })
                }))
            }, n.prototype.setupButtonEventHandlers = function() {
                var t = this,
                    e = document.getElementById(dt.HeaderCloseId);
                null == e || e.addEventListener("click", (function() {
                    n.hide(t.previouslyFocusedElement), t.logger.emitInteraction(le.LeavePreferences)
                }));
                var o = document.getElementById(dt.HeaderSaveId);
                null == o || o.addEventListener("click", (function() {
                    if (Dt()) n.hideModalAndBanner(t.previouslyFocusedElement);
                    else {
                        var e = document.getElementById(dt.OptionMarketingInputId),
                            o = document.getElementById(dt.OptionAnalyticsInputId),
                            r = document.getElementById(dt.OptionPreferencesInputId),
                            a = e.checked,
                            i = o.checked,
                            c = r.checked;
                        _t({
                            marketing: a,
                            analytics: i,
                            preferences: c,
                            checkoutRootDomain: t.checkoutRootDomain,
                            storefrontRootDomain: t.storefrontRootDomain,
                            storefrontAccessToken: t.storefrontAccessToken,
                            callback: function() {
                                n.hideModalAndBanner(t.previouslyFocusedElement)
                            }
                        }), t.logger.emitInteraction(le.Save, "".concat(a ? "m" : "").concat(i ? "a" : "").concat(c ? "p" : ""))
                    }
                }));
                var r = document.getElementById(dt.HeaderAcceptId);
                null == r || r.addEventListener("click", (function() {
                    Dt() ? n.hideModalAndBanner(t.previouslyFocusedElement) : (_t({
                        marketing: !0,
                        analytics: !0,
                        preferences: !0,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: function() {
                            n.hideModalAndBanner(t.previouslyFocusedElement)
                        }
                    }), t.logger.emitInteraction(le.AcceptedAll))
                }));
                var a = document.getElementById(dt.HeaderDeclineId);
                null == a || a.addEventListener("click", (function() {
                    Dt() ? n.hideModalAndBanner(t.previouslyFocusedElement) : (_t({
                        marketing: !1,
                        analytics: !1,
                        preferences: !1,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: function() {
                            n.hideModalAndBanner(t.previouslyFocusedElement)
                        }
                    }), t.logger.emitInteraction(le.DeclinedAll))
                }))
            }, n.prototype.setupKeyboardEventHandlers = function() {
                var n = this,
                    t = document.getElementById(dt.DialogId);
                if (t) {
                    var e = this.getFocusableElements(t);
                    t.addEventListener("keydown", (function(t) {
                        n.escToClose(t), n.tabTrap(t, e)
                    })), this.focusFirstEle(e)
                }
            }, n.prototype.getFocusableElements = function(n) {
                return Array.from(n.querySelectorAll('button, [href], input:not([tabindex="-1"]), select, textarea, [tabindex="0"]'))
            }, n.prototype.focusFirstEle = function(n) {
                (null == n ? void 0 : n.length) && n[0].focus()
            }, n.prototype.escToClose = function(t) {
                t.key === pe.Escape && (n.hide(this.previouslyFocusedElement), this.logger.emitInteraction(le.LeavePreferences))
            }, n.prototype.tabTrap = function(n, t) {
                if ((null == t ? void 0 : t.length) && n.key === pe.Tab) {
                    var e = t[0],
                        o = t[t.length - 1];
                    e && o && (n.shiftKey && document.activeElement === e ? (n.preventDefault(), o.focus()) : n.shiftKey || document.activeElement !== o || (n.preventDefault(), e.focus()))
                }
            }, n
        }(),
        Re = function() {
            function n(n) {
                var t = void 0 === n ? {} : n,
                    e = t.storefrontAccessToken,
                    o = t.checkoutRootDomain,
                    r = t.storefrontRootDomain,
                    a = t.locale,
                    i = t.country;
                this.locale = a, this.country = i, this.storefrontAccessToken = e;
                var c = e;
                c && (this.checkoutRootDomain = o, this.storefrontRootDomain = r), this.logger = new me({
                    shopDomain: o,
                    isHeadless: Boolean(c)
                }), this.preferencesModal = void 0
            }
            return n.show = function() {
                var n = document.getElementById(ut.DialogId);
                if (null !== n) {
                    n.style.display = "block";
                    var t = function(n) {
                        if ("Tab" === n.code) {
                            n.preventDefault();
                            var e = document.getElementById(ut.ButtonManagePrefsId);
                            null == e || e.focus()
                        }
                        window.removeEventListener("keydown", t)
                    };
                    window.addEventListener("keydown", t)
                }
            }, n.hide = function() {
                var n = document.getElementById(ut.DialogId);
                null !== n && (n.style.display = "none")
            }, n.prototype.init = function() {
                return e(this, arguments, void 0, (function(e) {
                    var r, a, i;
                    return void 0 === e && (e = !1), o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                this.removeExistingElements(), o.label = 1;
                            case 1:
                                return o.trys.push([1, 5, , 6]), [4, Bt.getServerData(this.checkoutRootDomain, this.storefrontAccessToken, this.locale, this.country)];
                            case 2:
                                return r = o.sent(), [3, 4];
                            case 3:
                                (a = o.sent()) && Object.keys(r).length && (r.experimentVariant = a), o.label = 4;
                            case 4:
                                return r && Object.keys(r).length ? (this.render(t({}, r)), e && (this.preferencesModal = new Le({
                                    bannerData: r,
                                    storefrontAccessToken: this.storefrontAccessToken,
                                    checkoutRootDomain: this.checkoutRootDomain,
                                    storefrontRootDomain: this.storefrontRootDomain
                                }), this.preferencesModal.init(), n.hide()), [2, Promise.resolve(!0)]) : (console.warn("banner not rendered due to lack of saved data"), [2, Promise.resolve(!1)]);
                            case 5:
                                return i = o.sent(), [2, Promise.reject(i)];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, n.prototype.render = function(t) {
                var e = t.enabled,
                    o = window.Shopify.country,
                    r = At() && this.isCountryInRegionVisibility(o, t),
                    a = Dt() || r || e;
                a && !document.getElementById(ut.DialogId) && (this.addCSS(t), this.addBannerHTML(t)), a && Et() && (n.show(), At() || this.logger.emitRender())
            }, n.prototype.isCountryInRegionVisibility = function(n, t) {
                var e;
                return null === (e = t.regionVisibility) || void 0 === e ? void 0 : e.includes(n)
            }, n.prototype.addCSS = function(n) {
                var t = Ie({
                    id: ut.StylesContainerId,
                    content: vt({
                        bannerData: n
                    })
                });
                document.head.appendChild(t)
            }, n.prototype.addBannerHTML = function(n) {
                var t = Ae({
                        bannerData: n
                    }),
                    e = document.getElementsByTagName("body")[0];
                e.insertBefore(t, e.firstChild), this.addEventListeners(n)
            }, n.prototype.removeExistingElements = function() {
                var n, t, e, o, r = document.getElementById(ut.DialogId),
                    a = document.getElementById(ut.StylesContainerId),
                    i = document.getElementById(dt.WrapperId),
                    c = document.getElementById(dt.StylesContainerId);
                null === (n = null == r ? void 0 : r.parentNode) || void 0 === n || n.removeChild(r), null === (t = null == a ? void 0 : a.parentNode) || void 0 === t || t.removeChild(a), null === (e = null == i ? void 0 : i.parentNode) || void 0 === e || e.removeChild(i), null === (o = null == c ? void 0 : c.parentNode) || void 0 === o || o.removeChild(c)
            }, n.prototype.addEventListeners = function(n) {
                var t = this;
                this.addEssentialEventListeners(), Dt() || this.addMetricsEventListeners();
                var e = document.getElementById(ut.ButtonManagePrefsId);
                null == e || e.addEventListener("click", (function(e) {
                    e.preventDefault(), t.preferencesModal = new Le({
                        bannerData: n,
                        storefrontAccessToken: t.storefrontAccessToken,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain
                    }), t.preferencesModal.init()
                }))
            }, n.prototype.addEssentialEventListeners = function() {
                var t = this,
                    e = document.getElementById(ut.ButtonAcceptId);
                null == e || e.addEventListener("click", (function() {
                    Dt() ? n.hide() : _t({
                        marketing: !0,
                        analytics: !0,
                        preferences: !0,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: n.hide
                    })
                }));
                var o = document.getElementById(ut.ButtonDeclineId);
                null == o || o.addEventListener("click", (function() {
                    Dt() ? n.hide() : _t({
                        marketing: !1,
                        analytics: !1,
                        preferences: !1,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: n.hide
                    })
                }))
            }, n.prototype.addMetricsEventListeners = function() {
                var n = this,
                    t = document.getElementById(ut.BodyCopyPolicyLinkId);
                null == t || t.addEventListener("click", (function() {
                    n.logger.emitInteraction(le.PrivacyPolicyView)
                }));
                var e = document.getElementById(ut.ButtonAcceptId);
                null == e || e.addEventListener("click", (function() {
                    n.logger.emitInteraction(le.Accepted)
                }));
                var o = document.getElementById(ut.ButtonDeclineId);
                null == o || o.addEventListener("click", (function() {
                    n.logger.emitInteraction(le.Declined)
                }))
            }, n
        }();

    function je() {
        return e(this, arguments, void 0, (function(n) {
            var t, r, a, i, c, s = this,
                l = void 0 === n ? {} : n,
                u = l.storefrontAccessToken,
                d = l.checkoutRootDomain,
                p = l.storefrontRootDomain,
                f = l.showPreferences,
                h = void 0 !== f && f,
                y = l.locale,
                g = l.country;
            return o(this, (function(n) {
                return d || (d = window.location.hostname), p || (p = window.location.hostname), y || (y = null === (i = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === i ? void 0 : i.locale), g || (g = null === (c = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === c ? void 0 : c.country), t = function() {
                    return e(s, void 0, void 0, (function() {
                        var n, t, e;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 3, , 4]), n = Boolean(u), t = new me({
                                        shopDomain: d,
                                        isHeadless: n
                                    }), Ot() || Et() || h ? [4, new Re({
                                        storefrontAccessToken: u,
                                        checkoutRootDomain: d,
                                        storefrontRootDomain: p,
                                        locale: y,
                                        country: g
                                    }).init(h)] : [3, 2];
                                case 1:
                                    o.sent() && Bn(m), o.label = 2;
                                case 2:
                                    return t.emitInitialized(), [3, 4];
                                case 3:
                                    return e = o.sent(), console.error("Error initializing banner", e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, u ? (r = Zn(), _t({
                    marketing: (a = {
                        yes: !0,
                        no: !1
                    })[r.marketing],
                    analytics: a[r.analytics],
                    preferences: a[r.preferences],
                    sale_of_data: a[r.sale_of_data],
                    storefrontAccessToken: u,
                    checkoutRootDomain: d,
                    storefrontRootDomain: p,
                    callback: t
                })) : t(), [2]
            }))
        }))
    }

    function He(n) {
        n && (window.Shopify = window.Shopify || {}, window.Shopify.customerPrivacy && window.Shopify.trackingConsent || (window.Shopify.customerPrivacy = window.Shopify.trackingConsent = ft()))
    }

    function Ne() {
        return e(this, arguments, void 0, (function(n) {
            return void 0 === n && (n = {}), o(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return He(Boolean(n.storefrontAccessToken)), [4, je(t(t({}, n), {
                            showPreferences: !0
                        }))];
                    case 1:
                        return e.sent(), [2]
                }
            }))
        }))
    }
    return function() {
        if ("0" !== Ct("pb")) {
            var n = Boolean(window.Shopify);
            He(!n), n && je(), window.onload = function() {
                document.querySelectorAll('a[href$="'.concat("#shopifyReshowConsentBanner", '"]')).forEach((function(n) {
                    n.addEventListener("click", (function(n) {
                        n.preventDefault(), Ne()
                    }))
                }))
            }
        }
    }(), n.loadBanner = je, n.showPreferences = Ne, n
}({});