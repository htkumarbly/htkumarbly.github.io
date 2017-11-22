if (function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.uuid = t()
    }
}(function() {
    return function t(e, n, i) {
        function o(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(s, !0);
                    if (r)
                        return r(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var u = n[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function(t) {
                    var n = e[s][1][t];
                    return o(n || t)
                }, u, u.exports, t, e, n, i)
            }
            return n[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)
            o(i[s]);
        return o
    }({
        1: [function(t, e, n) {
            var i = t("./v1")
              , o = t("./v4")
              , r = o;
            r.v1 = i,
            r.v4 = o,
            e.exports = r
        }
        , {
            "./v1": 4,
            "./v4": 5
        }],
        2: [function(t, e, n) {
            function i(t, e) {
                var n = e || 0
                  , i = o;
                return i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]]
            }
            for (var o = [], r = 0; r < 256; ++r)
                o[r] = (r + 256).toString(16).substr(1);
            e.exports = i
        }
        , {}],
        3: [function(t, e, n) {
            (function(t) {
                var n, i = t.crypto || t.msCrypto;
                if (i && i.getRandomValues) {
                    var o = new Uint8Array(16);
                    n = function() {
                        return i.getRandomValues(o),
                        o
                    }
                }
                if (!n) {
                    var r = new Array(16);
                    n = function() {
                        for (var t, e = 0; e < 16; e++)
                            0 == (3 & e) && (t = 4294967296 * Math.random()),
                            r[e] = t >>> ((3 & e) << 3) & 255;
                        return r
                    }
                }
                e.exports = n
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        4: [function(t, e, n) {
            function i(t, e, n) {
                var i = e && n || 0
                  , o = e || [];
                t = t || {};
                var s = void 0 !== t.clockseq ? t.clockseq : l
                  , d = void 0 !== t.msecs ? t.msecs : (new Date).getTime()
                  , p = void 0 !== t.nsecs ? t.nsecs : u + 1
                  , f = d - c + (p - u) / 1e4;
                if (f < 0 && void 0 === t.clockseq && (s = s + 1 & 16383),
                (f < 0 || d > c) && void 0 === t.nsecs && (p = 0),
                p >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                c = d,
                u = p,
                l = s,
                d += 122192928e5;
                var h = (1e4 * (268435455 & d) + p) % 4294967296;
                o[i++] = h >>> 24 & 255,
                o[i++] = h >>> 16 & 255,
                o[i++] = h >>> 8 & 255,
                o[i++] = 255 & h;
                var v = d / 4294967296 * 1e4 & 268435455;
                o[i++] = v >>> 8 & 255,
                o[i++] = 255 & v,
                o[i++] = v >>> 24 & 15 | 16,
                o[i++] = v >>> 16 & 255,
                o[i++] = s >>> 8 | 128,
                o[i++] = 255 & s;
                for (var m = t.node || a, g = 0; g < 6; ++g)
                    o[i + g] = m[g];
                return e || r(o)
            }
            var o = t("./lib/rng")
              , r = t("./lib/bytesToUuid")
              , s = o()
              , a = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]
              , l = 16383 & (s[6] << 8 | s[7])
              , c = 0
              , u = 0;
            e.exports = i
        }
        , {
            "./lib/bytesToUuid": 2,
            "./lib/rng": 3
        }],
        5: [function(t, e, n) {
            function i(t, e, n) {
                var i = e && n || 0;
                "string" == typeof t && (e = "binary" == t ? new Array(16) : null,
                t = null),
                t = t || {};
                var s = t.random || (t.rng || o)();
                if (s[6] = 15 & s[6] | 64,
                s[8] = 63 & s[8] | 128,
                e)
                    for (var a = 0; a < 16; ++a)
                        e[i + a] = s[a];
                return e || r(s)
            }
            var o = t("./lib/rng")
              , r = t("./lib/bytesToUuid");
            e.exports = i
        }
        , {
            "./lib/bytesToUuid": 2,
            "./lib/rng": 3
        }]
    }, {}, [1])(1)
}),
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
function(t, e, n) {
    "use strict";
    function i(t, e) {
        return j(new (j(function() {}, {
            prototype: t
        })), e)
    }
    function o(t) {
        return I(arguments, function(e) {
            e !== t && I(e, function(e, n) {
                t.hasOwnProperty(n) || (t[n] = e)
            })
        }),
        t
    }
    function r(t, e) {
        var n = [];
        for (var i in t.path) {
            if (t.path[i] !== e.path[i])
                break;
            n.push(t.path[i])
        }
        return n
    }
    function s(t, e) {
        if (Array.prototype.indexOf)
            return t.indexOf(e, Number(arguments[2]) || 0);
        var n = t.length >>> 0
          , i = Number(arguments[2]) || 0;
        for (i = i < 0 ? Math.ceil(i) : Math.floor(i),
        i < 0 && (i += n); i < n; i++)
            if (i in t && t[i] === e)
                return i;
        return -1
    }
    function a(t, e, n, i) {
        var o, a = r(n, i), l = {}, c = [];
        for (var u in a)
            if (a[u].params && a[u].params.length) {
                o = a[u].params;
                for (var d in o)
                    s(c, o[d]) >= 0 || (c.push(o[d]),
                    l[o[d]] = t[o[d]])
            }
        return j({}, l, e)
    }
    function l(t, e) {
        var n = {};
        return I(t, function(t) {
            var i = e[t];
            n[t] = null != i ? String(i) : null
        }),
        n
    }
    function c(t, e, n) {
        if (!n) {
            n = [];
            for (var i in t)
                n.push(i)
        }
        for (var o = 0; o < n.length; o++) {
            var r = n[o];
            if (t[r] != e[r])
                return !1
        }
        return !0
    }
    function u(t, e) {
        var n = {};
        return I(t, function(t) {
            n[t] = e[t]
        }),
        n
    }
    function d(t, e) {
        var i = 1
          , r = 2
          , s = {}
          , a = []
          , l = s
          , c = j(t.when(s), {
            $$promises: s,
            $$values: s
        });
        this.study = function(s) {
            function u(t, n) {
                if (h[n] !== r) {
                    if (f.push(n),
                    h[n] === i)
                        throw f.splice(0, f.indexOf(n)),
                        new Error("Cyclic dependency: " + f.join(" -> "));
                    if (h[n] = i,
                    O(t))
                        p.push(n, [function() {
                            return e.get(t)
                        }
                        ], a);
                    else {
                        var o = e.annotate(t);
                        I(o, function(t) {
                            t !== n && s.hasOwnProperty(t) && u(s[t], t)
                        }),
                        p.push(n, t, o)
                    }
                    f.pop(),
                    h[n] = r
                }
            }
            function d(t) {
                return D(t) && t.then && t.$$promises
            }
            if (!D(s))
                throw new Error("'invocables' must be an object");
            var p = []
              , f = []
              , h = {};
            return I(s, u),
            s = f = h = null,
            function(i, r, s) {
                function a() {
                    --g || (y || o(m, r.$$values),
                    h.$$values = m,
                    h.$$promises = !0,
                    f.resolve(m))
                }
                function u(t) {
                    h.$$failure = t,
                    f.reject(t)
                }
                if (d(i) && s === n && (s = r,
                r = i,
                i = null),
                i) {
                    if (!D(i))
                        throw new Error("'locals' must be an object")
                } else
                    i = l;
                if (r) {
                    if (!d(r))
                        throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else
                    r = c;
                var f = t.defer()
                  , h = f.promise
                  , v = h.$$promises = {}
                  , m = j({}, i)
                  , g = 1 + p.length / 3
                  , y = !1;
                if (A(r.$$failure))
                    return u(r.$$failure),
                    h;
                r.$$values ? (y = o(m, r.$$values),
                a()) : (j(v, r.$$promises),
                r.then(a, u));
                for (var w = 0, b = p.length; w < b; w += 3)
                    i.hasOwnProperty(p[w]) ? a() : function(n, o, r) {
                        function l(t) {
                            d.reject(t),
                            u(t)
                        }
                        function c() {
                            if (!A(h.$$failure))
                                try {
                                    d.resolve(e.invoke(o, s, m)),
                                    d.promise.then(function(t) {
                                        m[n] = t,
                                        a()
                                    }, l)
                                } catch (t) {
                                    l(t)
                                }
                        }
                        var d = t.defer()
                          , p = 0;
                        I(r, function(t) {
                            v.hasOwnProperty(t) && !i.hasOwnProperty(t) && (p++,
                            v[t].then(function(e) {
                                m[t] = e,
                                --p || c()
                            }, l))
                        }),
                        p || c(),
                        v[n] = d.promise
                    }(p[w], p[w + 1], p[w + 2]);
                return h
            }
        }
        ,
        this.resolve = function(t, e, n, i) {
            return this.study(t)(e, n, i)
        }
    }
    function p(t, e, n) {
        this.fromConfig = function(t, e, n) {
            return A(t.template) ? this.fromString(t.template, e) : A(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : A(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
        }
        ,
        this.fromString = function(t, e) {
            return E(t) ? t(e) : t
        }
        ,
        this.fromUrl = function(n, i) {
            return E(n) && (n = n(i)),
            null == n ? null : t.get(n, {
                cache: e
            }).then(function(t) {
                return t.data
            })
        }
        ,
        this.fromProvider = function(t, e, i) {
            return n.invoke(t, null, i || {
                params: e
            })
        }
    }
    function f(t) {
        function e(e) {
            if (!/^\w+(-+\w+)*$/.test(e))
                throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
            if (r[e])
                throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
            r[e] = !0,
            c.push(e)
        }
        function n(t) {
            return t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&")
        }
        var i, o = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, r = {}, s = "^", a = 0, l = this.segments = [], c = this.params = [];
        this.source = t;
        for (var u, d, p; (i = o.exec(t)) && (u = i[2] || i[3],
        d = i[4] || ("*" == i[1] ? ".*" : "[^/]*"),
        p = t.substring(a, i.index),
        !(p.indexOf("?") >= 0)); )
            s += n(p) + "(" + d + ")",
            e(u),
            l.push(p),
            a = o.lastIndex;
        p = t.substring(a);
        var f = p.indexOf("?");
        if (f >= 0) {
            var h = this.sourceSearch = p.substring(f);
            p = p.substring(0, f),
            this.sourcePath = t.substring(0, a + f),
            I(h.substring(1).split(/[&?]/), e)
        } else
            this.sourcePath = t,
            this.sourceSearch = "";
        s += n(p) + "$",
        l.push(p),
        this.regexp = new RegExp(s),
        this.prefix = l[0]
    }
    function h() {
        this.compile = function(t) {
            return new f(t)
        }
        ,
        this.isMatcher = function(t) {
            return D(t) && E(t.exec) && E(t.format) && E(t.concat)
        }
        ,
        this.$get = function() {
            return this
        }
    }
    function v(t) {
        function e(t) {
            var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
            return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
        }
        function n(t, e) {
            return t.replace(/\$(\$|\d{1,2})/, function(t, n) {
                return e["$" === n ? 0 : Number(n)]
            })
        }
        function i(t, e, n) {
            if (!n)
                return !1;
            var i = t.invoke(e, e, {
                $match: n
            });
            return !A(i) || i
        }
        var o = []
          , r = null;
        this.rule = function(t) {
            if (!E(t))
                throw new Error("'rule' must be a function");
            return o.push(t),
            this
        }
        ,
        this.otherwise = function(t) {
            if (O(t)) {
                var e = t;
                t = function() {
                    return e
                }
            } else if (!E(t))
                throw new Error("'rule' must be a function");
            return r = t,
            this
        }
        ,
        this.when = function(o, r) {
            var s, a = O(r);
            if (O(o) && (o = t.compile(o)),
            !a && !E(r) && !P(r))
                throw new Error("invalid 'handler' in when()");
            var l = {
                matcher: function(e, n) {
                    return a && (s = t.compile(n),
                    n = ["$match", function(t) {
                        return s.format(t)
                    }
                    ]),
                    j(function(t, o) {
                        return i(t, n, e.exec(o.path(), o.search()))
                    }, {
                        prefix: O(e.prefix) ? e.prefix : ""
                    })
                },
                regex: function(t, o) {
                    if (t.global || t.sticky)
                        throw new Error("when() RegExp must not be global or sticky");
                    return a && (s = o,
                    o = ["$match", function(t) {
                        return n(s, t)
                    }
                    ]),
                    j(function(e, n) {
                        return i(e, o, t.exec(n.path()))
                    }, {
                        prefix: e(t)
                    })
                }
            }
              , c = {
                matcher: t.isMatcher(o),
                regex: o instanceof RegExp
            };
            for (var u in c)
                if (c[u])
                    return this.rule(l[u](o, r));
            throw new Error("invalid 'what' in when()")
        }
        ,
        this.$get = ["$location", "$rootScope", "$injector", function(t, e, n) {
            function i(e) {
                function i(e) {
                    var i = e(n, t);
                    return !!i && (O(i) && t.replace().url(i),
                    !0)
                }
                if (!e || !e.defaultPrevented) {
                    var s, a = o.length;
                    for (s = 0; s < a; s++)
                        if (i(o[s]))
                            return;
                    r && i(r)
                }
            }
            return e.$on("$locationChangeSuccess", i),
            {
                sync: function() {
                    i()
                }
            }
        }
        ]
    }
    function m(t, o, r) {
        function s(t) {
            return 0 === t.indexOf(".") || 0 === t.indexOf("^")
        }
        function d(t, e) {
            var i = O(t)
              , o = i ? t : t.name;
            if (s(o)) {
                if (!e)
                    throw new Error("No reference point given for path '" + o + "'");
                for (var r = o.split("."), a = 0, l = r.length, c = e; a < l; a++)
                    if ("" !== r[a] || 0 !== a) {
                        if ("^" !== r[a])
                            break;
                        if (!c.parent)
                            throw new Error("Path '" + o + "' not valid for state '" + e.name + "'");
                        c = c.parent
                    } else
                        c = e;
                r = r.slice(a).join("."),
                o = c.name + (c.name && r ? "." : "") + r
            }
            var u = b[o];
            return !u || !i && (i || u !== t && u.self !== t) ? n : u
        }
        function p(t, e) {
            $[t] || ($[t] = []),
            $[t].push(e)
        }
        function f(e) {
            e = i(e, {
                self: e,
                resolve: e.resolve || {},
                toString: function() {
                    return this.name
                }
            });
            var n = e.name;
            if (!O(n) || n.indexOf("@") >= 0)
                throw new Error("State must have a valid name");
            if (b.hasOwnProperty(n))
                throw new Error("State '" + n + "'' is already defined");
            var o = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : O(e.parent) ? e.parent : "";
            if (o && !b[o])
                return p(o, e.self);
            for (var r in T)
                E(T[r]) && (e[r] = T[r](e, T.$delegates[r]));
            if (b[n] = e,
            !e[k] && e.url && t.when(e.url, ["$match", "$stateParams", function(t, n) {
                w.$current.navigable == e && c(t, n) || w.transitionTo(e, t, {
                    location: !1
                })
            }
            ]),
            $[n])
                for (var s = 0; s < $[n].length; s++)
                    f($[n][s]);
            return e
        }
        function h(t, e) {
            return O(t) && !A(e) ? T[t] : E(e) && O(t) ? (T[t] && !T.$delegates[t] && (T.$delegates[t] = T[t]),
            T[t] = e,
            this) : this
        }
        function v(t, e) {
            return D(t) ? e = t : e.name = t,
            f(e),
            this
        }
        function m(t, o, s, p, f, h, v, m) {
            function $() {
                v.url() !== D && (v.url(D),
                v.replace())
            }
            function T(t, n, i, r, a) {
                var l = i ? n : u(t.params, n)
                  , c = {
                    $stateParams: l
                };
                a.resolve = f.resolve(t.resolve, c, a.resolve, t);
                var d = [a.resolve.then(function(t) {
                    a.globals = t
                })];
                return r && d.push(r),
                I(t.views, function(n, i) {
                    var o = n.resolve && n.resolve !== t.resolve ? n.resolve : {};
                    o.$template = [function() {
                        return s.load(i, {
                            view: n,
                            locals: c,
                            params: l,
                            notify: !1
                        }) || ""
                    }
                    ],
                    d.push(f.resolve(o, c, a.resolve, t).then(function(r) {
                        if (E(n.controllerProvider) || P(n.controllerProvider)) {
                            var s = e.extend({}, o, c);
                            r.$$controller = p.invoke(n.controllerProvider, null, s)
                        } else
                            r.$$controller = n.controller;
                        r.$$state = t,
                        a[i] = r
                    }))
                }),
                o.all(d).then(function(t) {
                    return a
                })
            }
            var C = o.reject(new Error("transition superseded"))
              , S = o.reject(new Error("transition prevented"))
              , x = o.reject(new Error("transition aborted"))
              , O = o.reject(new Error("transition failed"))
              , D = v.url();
            return y.locals = {
                resolve: null,
                globals: {
                    $stateParams: {}
                }
            },
            w = {
                params: {},
                current: y.self,
                $current: y,
                transition: null
            },
            w.reload = function() {
                w.transitionTo(w.current, h, {
                    reload: !0,
                    inherit: !1,
                    notify: !1
                })
            }
            ,
            w.go = function(t, e, n) {
                return this.transitionTo(t, e, j({
                    inherit: !0,
                    relative: w.$current
                }, n))
            }
            ,
            w.transitionTo = function(e, n, r) {
                n = n || {},
                r = j({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, r || {});
                var s, u = w.$current, f = w.params, m = u.path, b = d(e, r.relative);
                if (!A(b)) {
                    var E = {
                        to: e,
                        toParams: n,
                        options: r
                    };
                    if (s = t.$broadcast("$stateNotFound", E, u.self, f),
                    s.defaultPrevented)
                        return $(),
                        x;
                    if (s.retry) {
                        if (r.$retry)
                            return $(),
                            O;
                        var P = w.transition = o.when(s.retry);
                        return P.then(function() {
                            return P !== w.transition ? C : (E.options.$retry = !0,
                            w.transitionTo(E.to, E.toParams, E.options))
                        }, function() {
                            return x
                        }),
                        $(),
                        P
                    }
                    if (e = E.to,
                    n = E.toParams,
                    r = E.options,
                    b = d(e, r.relative),
                    !A(b)) {
                        if (r.relative)
                            throw new Error("Could not resolve '" + e + "' from state '" + r.relative + "'");
                        throw new Error("No such state '" + e + "'")
                    }
                }
                if (b[k])
                    throw new Error("Cannot transition to abstract state '" + e + "'");
                r.inherit && (n = a(h, n || {}, w.$current, b)),
                e = b;
                var I, M, R = e.path, L = y.locals, H = [];
                for (I = 0,
                M = R[I]; M && M === m[I] && c(n, f, M.ownParams) && !r.reload; I++,
                M = R[I])
                    L = H[I] = M.locals;
                if (g(e, u, L, r))
                    return !1 !== e.self.reloadOnSearch && $(),
                    w.transition = null,
                    o.when(w.current);
                if (n = l(e.params, n || {}),
                r.notify && (s = t.$broadcast("$stateChangeStart", e.self, n, u.self, f),
                s.defaultPrevented))
                    return $(),
                    S;
                for (var F = o.when(L), z = I; z < R.length; z++,
                M = R[z])
                    L = H[z] = i(L),
                    F = T(M, n, M === e, F, L);
                var U = w.transition = F.then(function() {
                    var i, o, s;
                    if (w.transition !== U)
                        return C;
                    for (i = m.length - 1; i >= I; i--)
                        s = m[i],
                        s.self.onExit && p.invoke(s.self.onExit, s.self, s.locals.globals),
                        s.locals = null;
                    for (i = I; i < R.length; i++)
                        o = R[i],
                        o.locals = H[i],
                        o.self.onEnter && p.invoke(o.self.onEnter, o.self, o.locals.globals);
                    if (w.transition !== U)
                        return C;
                    w.$current = e,
                    w.current = e.self,
                    w.params = n,
                    N(w.params, h),
                    w.transition = null;
                    var a = e.navigable;
                    return r.location && a && (v.url(a.url.format(a.locals.globals.$stateParams)),
                    "replace" === r.location && v.replace()),
                    r.notify && t.$broadcast("$stateChangeSuccess", e.self, n, u.self, f),
                    D = v.url(),
                    w.current
                }, function(i) {
                    return w.transition !== U ? C : (w.transition = null,
                    t.$broadcast("$stateChangeError", e.self, n, u.self, f, i),
                    $(),
                    o.reject(i))
                });
                return U
            }
            ,
            w.is = function(t, i) {
                var o = d(t);
                return A(o) ? w.$current === o && (!A(i) || null === i || e.equals(h, i)) : n
            }
            ,
            w.includes = function(t, i) {
                var o = d(t);
                if (!A(o))
                    return n;
                if (!A(w.$current.includes[o.name]))
                    return !1;
                var r = !0;
                return e.forEach(i, function(t, e) {
                    A(h[e]) && h[e] === t || (r = !1)
                }),
                r
            }
            ,
            w.href = function(t, e, n) {
                n = j({
                    lossy: !0,
                    inherit: !1,
                    absolute: !1,
                    relative: w.$current
                }, n || {});
                var i = d(t, n.relative);
                if (!A(i))
                    return null;
                e = a(h, e || {}, w.$current, i);
                var o = i && n.lossy ? i.navigable : i
                  , s = o && o.url ? o.url.format(l(i.params, e || {})) : null;
                return !r.html5Mode() && s && (s = "#" + r.hashPrefix() + s),
                n.absolute && s && (s = v.protocol() + "://" + v.host() + (80 == v.port() || 443 == v.port() ? "" : ":" + v.port()) + (!r.html5Mode() && s ? "/" : "") + s),
                s
            }
            ,
            w.get = function(t, e) {
                if (!A(t)) {
                    var n = [];
                    return I(b, function(t) {
                        n.push(t.self)
                    }),
                    n
                }
                var i = d(t, e);
                return i && i.self ? i.self : null
            }
            ,
            w
        }
        function g(t, e, n, i) {
            if (t === e && (n === e.locals && !i.reload || !1 === t.self.reloadOnSearch))
                return !0
        }
        var y, w, b = {}, $ = {}, k = "abstract", T = {
            parent: function(t) {
                if (A(t.parent) && t.parent)
                    return d(t.parent);
                var e = /^(.+)\.[^.]+$/.exec(t.name);
                return e ? d(e[1]) : y
            },
            data: function(t) {
                return t.parent && t.parent.data && (t.data = t.self.data = j({}, t.parent.data, t.data)),
                t.data
            },
            url: function(t) {
                var e = t.url;
                if (O(e))
                    return "^" == e.charAt(0) ? o.compile(e.substring(1)) : (t.parent.navigable || y).url.concat(e);
                if (o.isMatcher(e) || null == e)
                    return e;
                throw new Error("Invalid url '" + e + "' in state '" + t + "'")
            },
            navigable: function(t) {
                return t.url ? t : t.parent ? t.parent.navigable : null
            },
            params: function(t) {
                if (!t.params)
                    return t.url ? t.url.parameters() : t.parent.params;
                if (!P(t.params))
                    throw new Error("Invalid params in state '" + t + "'");
                if (t.url)
                    throw new Error("Both params and url specicified in state '" + t + "'");
                return t.params
            },
            views: function(t) {
                var e = {};
                return I(A(t.views) ? t.views : {
                    "": t
                }, function(n, i) {
                    i.indexOf("@") < 0 && (i += "@" + t.parent.name),
                    e[i] = n
                }),
                e
            },
            ownParams: function(t) {
                if (!t.parent)
                    return t.params;
                var e = {};
                I(t.params, function(t) {
                    e[t] = !0
                }),
                I(t.parent.params, function(n) {
                    if (!e[n])
                        throw new Error("Missing required parameter '" + n + "' in state '" + t.name + "'");
                    e[n] = !1
                });
                var n = [];
                return I(e, function(t, e) {
                    t && n.push(e)
                }),
                n
            },
            path: function(t) {
                return t.parent ? t.parent.path.concat(t) : []
            },
            includes: function(t) {
                var e = t.parent ? j({}, t.parent.includes) : {};
                return e[t.name] = !0,
                e
            },
            $delegates: {}
        };
        y = f({
            name: "",
            url: "^",
            views: null,
            abstract: !0
        }),
        y.navigable = null,
        this.decorator = h,
        this.state = v,
        this.$get = m,
        m.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$location", "$urlRouter"]
    }
    function g() {
        function t(t, e) {
            return {
                load: function(n, i) {
                    var o;
                    return i = j({
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    }, i),
                    i.view && (o = e.fromConfig(i.view, i.params, i.locals)),
                    o && i.notify && t.$broadcast("$viewContentLoading", i),
                    o
                }
            }
        }
        this.$get = t,
        t.$inject = ["$rootScope", "$templateFactory"]
    }
    function y() {
        var t = !1;
        this.useAnchorScroll = function() {
            t = !0
        }
        ,
        this.$get = ["$anchorScroll", "$timeout", function(e, n) {
            return t ? e : function(t) {
                n(function() {
                    t[0].scrollIntoView()
                }, 0, !1)
            }
        }
        ]
    }
    function w(t, n, i, o, r, s) {
        function a(t, e, n) {
            var i = function() {
                return {
                    leave: function(t) {
                        t.remove()
                    },
                    enter: function(t, e, n) {
                        n.after(t)
                    }
                }
            };
            if (d)
                return function(t) {
                    return t ? {
                        enter: function(t, e, n) {
                            d.enter(t, null, n)
                        },
                        leave: function(t) {
                            d.leave(t, function() {
                                t.remove()
                            })
                        }
                    } : i()
                }
                ;
            if (u) {
                var o = u && u(n, e);
                return function(t) {
                    return t ? {
                        enter: function(t, e, n) {
                            o.enter(t, e)
                        },
                        leave: function(t) {
                            o.leave(t.contents(), t)
                        }
                    } : i()
                }
            }
            return i
        }
        var l = !1
          , c = function() {
            return o.has ? function(t) {
                return o.has(t) ? o.get(t) : null
            }
            : function(t) {
                try {
                    return o.get(t)
                } catch (t) {
                    return null
                }
            }
        }()
          , u = c("$animator")
          , d = c("$animate")
          , p = {
            restrict: "ECA",
            compile: function(o, c) {
                var u = o.html()
                  , d = !0
                  , f = e.element(s[0].createComment(" ui-view-anchor "))
                  , h = o.parent();
                return o.prepend(f),
                function(s) {
                    function v() {
                        y && (C(!0).leave(y),
                        y = null),
                        g && (g.$destroy(),
                        g = null)
                    }
                    function m(a) {
                        var l = t.$current && t.$current.locals[$];
                        if (d && (d = !1,
                        o.replaceWith(f)),
                        !l)
                            return v(),
                            y = o.clone(),
                            y.html(u),
                            C(a).enter(y, h, f),
                            g = s.$new(),
                            void n(y.contents())(g);
                        if (l !== w) {
                            v(),
                            y = o.clone(),
                            y.html(l.$template ? l.$template : u),
                            C(!0).enter(y, h, f),
                            y.data("$uiView", S),
                            w = l,
                            S.state = l.$$state;
                            var c = n(y.contents());
                            if (g = s.$new(),
                            l.$$controller) {
                                l.$scope = g;
                                var p = i(l.$$controller, l);
                                y.children().data("$ngControllerController", p)
                            }
                            c(g),
                            g.$emit("$viewContentLoaded"),
                            k && g.$eval(k),
                            e.isDefined(T) && T && !s.$eval(T) || r(y)
                        }
                    }
                    var g, y, w, b = h.inheritedData("$uiView"), $ = c[p.name] || c.name || "", k = c.onload || "", T = c.autoscroll, C = a(o, c, s);
                    $.indexOf("@") < 0 && ($ = $ + "@" + (b ? b.state.name : ""));
                    var S = {
                        name: $,
                        state: null
                    }
                      , x = function() {
                        if (!l) {
                            l = !0;
                            try {
                                m(!0)
                            } catch (t) {
                                throw l = !1,
                                t
                            }
                            l = !1
                        }
                    };
                    s.$on("$stateChangeSuccess", x),
                    s.$on("$viewContentLoading", x),
                    m(!1)
                }
            }
        };
        return p
    }
    function b(t) {
        var e = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
        if (!e || 4 !== e.length)
            throw new Error("Invalid state ref '" + t + "'");
        return {
            state: e[1],
            paramExpr: e[3] || null
        }
    }
    function $(t) {
        var e = t.parent().inheritedData("$uiView");
        if (e && e.state && e.state.name)
            return e.state
    }
    function k(t, e) {
        return {
            restrict: "A",
            require: "?^uiSrefActive",
            link: function(n, i, o, r) {
                var s = b(o.uiSref)
                  , a = null
                  , l = $(i) || t.$current
                  , c = "FORM" === i[0].nodeName
                  , u = c ? "action" : "href"
                  , d = !0
                  , p = function(e) {
                    if (e && (a = e),
                    d) {
                        var n = t.href(s.state, a, {
                            relative: l
                        });
                        if (r && r.$$setStateInfo(s.state, a),
                        !n)
                            return d = !1,
                            !1;
                        i[0][u] = n
                    }
                };
                s.paramExpr && (n.$watch(s.paramExpr, function(t, e) {
                    t !== a && p(t)
                }, !0),
                a = n.$eval(s.paramExpr)),
                p(),
                c || i.bind("click", function(n) {
                    var o = n.which || n.button;
                    0 !== o && 1 != o || n.ctrlKey || n.metaKey || n.shiftKey || i.attr("target") || (e(function() {
                        t.go(s.state, a, {
                            relative: l
                        })
                    }),
                    n.preventDefault())
                })
            }
        }
    }
    function T(t, e, n) {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", function(i, o, r) {
                function s() {
                    t.$current.self === l && a() ? o.addClass(d) : o.removeClass(d)
                }
                function a() {
                    return !u || c(u, e)
                }
                var l, u, d;
                d = n(r.uiSrefActive || "", !1)(i),
                this.$$setStateInfo = function(e, n) {
                    l = t.get(e, $(o)),
                    u = n,
                    s()
                }
                ,
                i.$on("$stateChangeSuccess", s)
            }
            ]
        }
    }
    function C(t) {
        return function(e) {
            return t.is(e)
        }
    }
    function S(t) {
        return function(e) {
            return t.includes(e)
        }
    }
    function x(t, e) {
        function o(t) {
            this.locals = t.locals.globals,
            this.params = this.locals.$stateParams
        }
        function r() {
            this.locals = null,
            this.params = null
        }
        function s(n, s) {
            if (null != s.redirectTo) {
                var a, c = s.redirectTo;
                if (O(c))
                    a = c;
                else {
                    if (!E(c))
                        throw new Error("Invalid 'redirectTo' in when()");
                    a = function(t, e) {
                        return c(t, e.path(), e.search())
                    }
                }
                e.when(n, a)
            } else
                t.state(i(s, {
                    parent: null,
                    name: "route:" + encodeURIComponent(n),
                    url: n,
                    onEnter: o,
                    onExit: r
                }));
            return l.push(s),
            this
        }
        function a(t, e, i) {
            function o(t) {
                return "" !== t.name ? t : n
            }
            var r = {
                routes: l,
                params: i,
                current: n
            };
            return e.$on("$stateChangeStart", function(t, n, i, r, s) {
                e.$broadcast("$routeChangeStart", o(n), o(r))
            }),
            e.$on("$stateChangeSuccess", function(t, n, i, s, a) {
                r.current = o(n),
                e.$broadcast("$routeChangeSuccess", o(n), o(s)),
                N(i, r.params)
            }),
            e.$on("$stateChangeError", function(t, n, i, r, s, a) {
                e.$broadcast("$routeChangeError", o(n), o(r), a)
            }),
            r
        }
        var l = [];
        o.$inject = ["$$state"],
        this.when = s,
        this.$get = a,
        a.$inject = ["$state", "$rootScope", "$routeParams"]
    }
    var A = e.isDefined
      , E = e.isFunction
      , O = e.isString
      , D = e.isObject
      , P = e.isArray
      , I = e.forEach
      , j = e.extend
      , N = e.copy;
    e.module("ui.router.util", ["ng"]),
    e.module("ui.router.router", ["ui.router.util"]),
    e.module("ui.router.state", ["ui.router.router", "ui.router.util"]),
    e.module("ui.router", ["ui.router.state"]),
    e.module("ui.router.compat", ["ui.router"]),
    d.$inject = ["$q", "$injector"],
    e.module("ui.router.util").service("$resolve", d),
    p.$inject = ["$http", "$templateCache", "$injector"],
    e.module("ui.router.util").service("$templateFactory", p),
    f.prototype.concat = function(t) {
        return new f(this.sourcePath + t + this.sourceSearch)
    }
    ,
    f.prototype.toString = function() {
        return this.source
    }
    ,
    f.prototype.exec = function(t, e) {
        var n = this.regexp.exec(t);
        if (!n)
            return null;
        var i, o = this.params, r = o.length, s = this.segments.length - 1, a = {};
        if (s !== n.length - 1)
            throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (i = 0; i < s; i++)
            a[o[i]] = n[i + 1];
        for (; i < r; i++)
            a[o[i]] = e[o[i]];
        return a
    }
    ,
    f.prototype.parameters = function() {
        return this.params
    }
    ,
    f.prototype.format = function(t) {
        var e = this.segments
          , n = this.params;
        if (!t)
            return e.join("");
        var i, o, r, s = e.length - 1, a = n.length, l = e[0];
        for (i = 0; i < s; i++)
            r = t[n[i]],
            null != r && (l += encodeURIComponent(r)),
            l += e[i + 1];
        for (; i < a; i++)
            null != (r = t[n[i]]) && (l += (o ? "&" : "?") + n[i] + "=" + encodeURIComponent(r),
            o = !0);
        return l
    }
    ,
    e.module("ui.router.util").provider("$urlMatcherFactory", h),
    v.$inject = ["$urlMatcherFactoryProvider"],
    e.module("ui.router.router").provider("$urlRouter", v),
    m.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider", "$locationProvider"],
    e.module("ui.router.state").value("$stateParams", {}).provider("$state", m),
    g.$inject = [],
    e.module("ui.router.state").provider("$view", g),
    e.module("ui.router.state").provider("$uiViewScroll", y),
    w.$inject = ["$state", "$compile", "$controller", "$injector", "$uiViewScroll", "$document"],
    e.module("ui.router.state").directive("uiView", w),
    k.$inject = ["$state", "$timeout"],
    T.$inject = ["$state", "$stateParams", "$interpolate"],
    e.module("ui.router.state").directive("uiSref", k).directive("uiSrefActive", T),
    C.$inject = ["$state"],
    S.$inject = ["$state"],
    e.module("ui.router.state").filter("isState", C).filter("includedByState", S),
    x.$inject = ["$stateProvider", "$urlRouterProvider"],
    e.module("ui.router.compat").provider("$route", x).directive("ngView", w)
}(window, window.angular),
function(t, e, n) {
    "use strict";
    function i() {
        var t = !1;
        this.$get = ["$$sanitizeUri", function(n) {
            return t && e.extend(T, $),
            function(t) {
                var e = [];
                return s(t, c(e, function(t, e) {
                    return !/^unsafe:/.test(n(t, e))
                })),
                e.join("")
            }
        }
        ],
        this.enableSvg = function(n) {
            return e.isDefined(n) ? (t = n,
            this) : t
        }
    }
    function o(t) {
        var n = [];
        return c(n, e.noop).chars(t),
        n.join("")
    }
    function r(t, n) {
        var i, o = {}, r = t.split(",");
        for (i = 0; i < r.length; i++)
            o[n ? e.lowercase(r[i]) : r[i]] = !0;
        return o
    }
    function s(t, e) {
        null === t || t === n ? t = "" : "string" != typeof t && (t = "" + t),
        d.innerHTML = t;
        var i = 5;
        do {
            if (0 === i)
                throw p("uinput", "Failed to sanitize html because the input is unstable");
            i--,
            document.documentMode <= 11 && u(d),
            t = d.innerHTML,
            d.innerHTML = t
        } while (t !== d.innerHTML);for (var o = d.firstChild; o; ) {
            switch (o.nodeType) {
            case 1:
                e.start(o.nodeName.toLowerCase(), a(o.attributes));
                break;
            case 3:
                e.chars(o.textContent)
            }
            var r;
            if (!((r = o.firstChild) || (1 == o.nodeType && e.end(o.nodeName.toLowerCase()),
            r = o.nextSibling)))
                for (; null == r && (o = o.parentNode) !== d; )
                    r = o.nextSibling,
                    1 == o.nodeType && e.end(o.nodeName.toLowerCase());
            o = r
        }
        for (; o = d.firstChild; )
            d.removeChild(o)
    }
    function a(t) {
        for (var e = {}, n = 0, i = t.length; n < i; n++) {
            var o = t[n];
            e[o.name] = o.value
        }
        return e
    }
    function l(t) {
        return t.replace(/&/g, "&amp;").replace(f, function(t) {
            return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
        }).replace(h, function(t) {
            return "&#" + t.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function c(t, n) {
        var i = !1
          , o = e.bind(t, t.push);
        return {
            start: function(t, r) {
                t = e.lowercase(t),
                !i && k[t] && (i = t),
                i || !0 !== T[t] || (o("<"),
                o(t),
                e.forEach(r, function(i, r) {
                    var s = e.lowercase(r)
                      , a = "img" === t && "src" === s || "background" === s;
                    !0 !== A[s] || !0 === C[s] && !n(i, a) || (o(" "),
                    o(r),
                    o('="'),
                    o(l(i)),
                    o('"'))
                }),
                o(">"))
            },
            end: function(t) {
                t = e.lowercase(t),
                i || !0 !== T[t] || !0 === v[t] || (o("</"),
                o(t),
                o(">")),
                t == i && (i = !1)
            },
            chars: function(t) {
                i || o(l(t))
            }
        }
    }
    function u(t) {
        if (t.nodeType === Node.ELEMENT_NODE)
            for (var e = t.attributes, n = 0, i = e.length; n < i; n++) {
                var o = e[n]
                  , r = o.name.toLowerCase();
                "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || (t.removeAttributeNode(o),
                n--,
                i--)
            }
        var s = t.firstChild;
        s && u(s),
        (s = t.nextSibling) && u(s)
    }
    var d, p = e.$$minErr("$sanitize"), f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, h = /([^\#-~ |!])/g, v = r("area,br,col,hr,img,wbr"), m = r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), g = r("rp,rt"), y = e.extend({}, g, m), w = e.extend({}, m, r("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")), b = e.extend({}, g, r("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), $ = r("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"), k = r("script,style"), T = e.extend({}, v, w, b, y), C = r("background,cite,href,longdesc,src,xlink:href"), S = r("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"), x = r("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0), A = e.extend({}, C, x, S);
    !function(t) {
        var e;
        if (!t.document || !t.document.implementation)
            throw p("noinert", "Can't create an inert html document");
        e = t.document.implementation.createHTMLDocument("inert");
        var n = e.documentElement || e.getDocumentElement()
          , i = n.getElementsByTagName("body");
        if (1 === i.length)
            d = i[0];
        else {
            var o = e.createElement("html");
            d = e.createElement("body"),
            o.appendChild(d),
            e.appendChild(o)
        }
    }(t),
    e.module("ngSanitize", []).provider("$sanitize", i),
    e.module("ngSanitize").filter("linky", ["$sanitize", function(t) {
        var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i
          , i = /^mailto:/i
          , r = e.$$minErr("linky")
          , s = e.isString;
        return function(a, l, c) {
            function u(t) {
                t && v.push(o(t))
            }
            if (null == a || "" === a)
                return a;
            if (!s(a))
                throw r("notstring", "Expected string but received: {0}", a);
            for (var d, p, f, h = a, v = []; d = h.match(n); )
                p = d[0],
                d[2] || d[4] || (p = (d[3] ? "http://" : "mailto:") + p),
                f = d.index,
                u(h.substr(0, f)),
                function(t, n) {
                    var i;
                    if (v.push("<a "),
                    e.isFunction(c) && (c = c(t)),
                    e.isObject(c))
                        for (i in c)
                            v.push(i + '="' + c[i] + '" ');
                    else
                        c = {};
                    !e.isDefined(l) || "target"in c || v.push('target="', l, '" '),
                    v.push('href="', t.replace(/"/g, "&quot;"), '">'),
                    u(n),
                    v.push("</a>")
                }(p, d[0].replace(i, "")),
                h = h.substring(f + d[0].length);
            return u(h),
            t(v.join(""))
        }
    }
    ])
}(window, window.angular),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1
          , i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e),
        this
    }
    ,
    t(function() {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this)
              , o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)),
            "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]'
      , i = function(e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.7",
    i.TRANSITION_DURATION = 150,
    i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this)
          , r = o.attr("data-target");
        r || (r = o.attr("href"),
        r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(),
        s.length || (s = o.closest(".alert")),
        s.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (s.removeClass("in"),
        t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    }
    ;
    var o = t.fn.alert;
    t.fn.alert = e,
    t.fn.alert.Constructor = i,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = o,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.button")
              , r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this,r)),
            "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e),
        this.options = t.extend({}, n.DEFAULTS, i),
        this.isLoading = !1
    };
    n.VERSION = "3.3.7",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(e) {
        var n = "disabled"
          , i = this.$element
          , o = i.is("input") ? "val" : "html"
          , r = i.data();
        e += "Text",
        null == r.resetText && i.data("resetText", i[o]()),
        setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]),
            "loadingText" == e ? (this.isLoading = !0,
            i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var i = t.fn.button;
    t.fn.button = e,
    t.fn.button.Constructor = n,
    t.fn.button.noConflict = function() {
        return t.fn.button = i,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"),
        t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
        i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.carousel")
              , r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
              , s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this,r)),
            "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
            return e;
        var i = "prev" == t ? -1 : 1
          , o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }
    ,
    n.prototype.to = function(t) {
        var e = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }
    ,
    n.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active")
          , r = i || this.getItemForDirection(e, o)
          , s = this.interval
          , a = "next" == e ? "left" : "right"
          , l = this;
        if (r.hasClass("active"))
            return this.sliding = !1;
        var c = r[0]
          , u = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        if (this.$element.trigger(u),
        !u.isDefaultPrevented()) {
            if (this.sliding = !0,
            s && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e),
            r[0].offsetWidth,
            o.addClass(a),
            r.addClass(a),
            o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"),
                o.removeClass(["active", a].join(" ")),
                l.sliding = !1,
                setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"),
            r.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(p)),
            s && this.cycle(),
            this
        }
    }
    ;
    var i = t.fn.carousel;
    t.fn.carousel = e,
    t.fn.carousel.Constructor = n,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i,
        this
    }
    ;
    var o = function(n) {
        var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data())
              , a = o.attr("data-slide-to");
            a && (s.interval = !1),
            e.call(r, s),
            a && r.data("bs.carousel").to(a),
            n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this)
              , o = n.data("bs.collapse")
              , r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
            o || n.data("bs.collapse", o = new i(this,r)),
            "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e),
        this.options = t.extend({}, i.DEFAULTS, n),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7",
    i.TRANSITION_DURATION = 350,
    i.DEFAULTS = {
        toggle: !0
    },
    i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r),
                !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"),
                    e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }
    ,
    i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition)
                    return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }
    ,
    i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }
    ,
    i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var o = t.fn.collapse;
    t.fn.collapse = n,
    t.fn.collapse.Constructor = i,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o)
          , s = r.data("bs.collapse")
          , a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(o).remove(),
        t(r).each(function() {
            var i = t(this)
              , o = e(i)
              , r = {
                relatedTarget: this
            };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)),
            n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
            o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }
    function i(e) {
        return this.each(function() {
            var n = t(this)
              , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)),
            "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop"
      , r = '[data-toggle="dropdown"]'
      , s = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.7",
    s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o)
              , s = r.hasClass("open");
            if (n(),
            !s) {
                "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)),
                i.isDefaultPrevented())
                    return;
                o.trigger("focus").attr("aria-expanded", "true"),
                r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }
    ,
    s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var o = e(i)
                  , s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)
                    return 27 == n.which && o.find(r).trigger("focus"),
                    i.trigger("click");
                var a = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--,
                    40 == n.which && l < a.length - 1 && l++,
                    ~l || (l = 0),
                    a.eq(l).trigger("focus")
                }
            }
        }
    }
    ;
    var a = t.fn.dropdown;
    t.fn.dropdown = i,
    t.fn.dropdown.Constructor = s,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    function e(e, i) {
        return this.each(function() {
            var o = t(this)
              , r = o.data("bs.modal")
              , s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this,s)),
            "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    n.prototype.show = function(e) {
        var i = this
          , o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            o && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }
    ,
    n.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(e) {
        var i = this
          , o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                if (this.ignoreBackdropClick)
                    return void (this.ignoreBackdropClick = !1);
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this)),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else
            e && e()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var i = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = n,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = i,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this)
          , o = i.attr("href")
          , r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
          , s = r.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, r.data(), i.data());
        i.is("a") && n.preventDefault(),
        r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }),
        e.call(r, s, this)
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.tooltip")
              , r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this,r)),
            "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(e, n, i) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = t(n),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
            var s = o[r];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin"
                  , l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    n.prototype.getDelegateOptions = function() {
        var e = {}
          , n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }),
        e
    }
    ,
    n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }
    ,
    n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }
    ,
    n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue()) {
            if (clearTimeout(n.timeout),
            n.hoverState = "out",
            !n.options.delay || !n.options.delay.hide)
                return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }
    ,
    n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)
                return;
            var o = this
              , r = this.tip()
              , s = this.getUID(this.type);
            this.setContent(),
            r.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
              , l = /\s?auto?\s?/i
              , c = l.test(a);
            c && (a = a.replace(l, "") || "top"),
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this),
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition()
              , d = r[0].offsetWidth
              , p = r[0].offsetHeight;
            if (c) {
                var f = a
                  , h = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + p > h.bottom ? "top" : "top" == a && u.top - p < h.top ? "bottom" : "right" == a && u.right + d > h.width ? "left" : "left" == a && u.left - d < h.left ? "right" : a,
                r.removeClass(f).addClass(a)
            }
            var v = this.getCalculatedOffset(a, u, d, p);
            this.applyPlacement(v, a);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type),
                o.hoverState = null,
                "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }
    ,
    n.prototype.applyPlacement = function(e, n) {
        var i = this.tip()
          , o = i[0].offsetWidth
          , r = i[0].offsetHeight
          , s = parseInt(i.css("margin-top"), 10)
          , a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(a) && (a = 0),
        e.top += s,
        e.left += a,
        t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        i.addClass("in");
        var l = i[0].offsetWidth
          , c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n)
          , p = d ? 2 * u.left - o + l : 2 * u.top - r + c
          , f = d ? "offsetWidth" : "offsetHeight";
        i.offset(e),
        this.replaceArrow(p, i[0][f], d)
    }
    ,
    n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }
    ,
    n.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(),
            o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
            e && e()
        }
        var o = this
          , r = t(this.$tip)
          , s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s),
        !s.isDefaultPrevented())
            return r.removeClass("in"),
            t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
            this.hoverState = null,
            this
    }
    ,
    n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0]
          , i = "BODY" == n.tagName
          , o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement
          , s = i ? {
            top: 0,
            left: 0
        } : r ? null : e.offset()
          , a = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , l = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, a, l, s)
    }
    ,
    n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }
    ,
    n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return o;
        var r = this.options.viewport && this.options.viewport.padding || 0
          , s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll
              , l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r
              , u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }
    ,
    n.prototype.getTitle = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }
    ,
    n.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));return t
    }
    ,
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    n.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    n.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    n.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n))),
        e ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    }
    ;
    var i = t.fn.tooltip;
    t.fn.tooltip = e,
    t.fn.tooltip.Constructor = n,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.popover")
              , r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this,r)),
            "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7",
    n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    n.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var i = t.fn.popover;
    t.fn.popover = e,
    t.fn.popover.Constructor = n,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = i,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body),
        this.$scrollElement = t(t(n).is(document.body) ? window : n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.scrollspy")
              , r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    e.prototype.refresh = function() {
        var e = this
          , n = "offset"
          , i = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (n = "position",
        i = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = t(this)
              , o = e.data("target") || e.attr("href")
              , r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    }
    ,
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        e >= i)
            return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0])
            return this.activeTarget = null,
            this.clear();
        for (t = o.length; t--; )
            s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }
    ,
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    }
    ,
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i,
        this
    }
    ,
    t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)),
            "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var e = this.element
          , n = e.closest("ul:not(.dropdown-menu)")
          , i = e.data("target");
        if (i || (i = e.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")
              , r = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , s = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
            if (o.trigger(r),
            e.trigger(s),
            !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n),
                this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }
    ,
    n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            o && o()
        }
        var s = i.find("> .active")
          , a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(),
        s.removeClass("in")
    }
    ;
    var i = t.fn.tab;
    t.fn.tab = e,
    t.fn.tab.Constructor = n,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = i,
        this
    }
    ;
    var o = function(n) {
        n.preventDefault(),
        e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.affix")
              , r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this,r)),
            "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i),
        this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.3.7",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop()
          , r = this.$element.offset()
          , s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return o < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed
          , l = a ? o : r.top
          , c = a ? s : e;
        return null != n && o <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , i = this.options.offset
              , o = i.top
              , r = i.bottom
              , s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : "")
                  , c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c),
                c.isDefaultPrevented())
                    return;
                this.affixed = a,
                this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    }
    ;
    var i = t.fn.affix;
    t.fn.affix = e,
    t.fn.affix.Constructor = n,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = i,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this)
              , i = n.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(n, i)
        })
    })
}(jQuery),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, n) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = t(e),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            o = t(e).data("slick") || {},
            r.options = t.extend({}, r.defaults, i, o),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
            r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
            r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = t.proxy(r.autoPlay, r),
            r.autoPlayClear = t.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
            r.changeSlide = t.proxy(r.changeSlide, r),
            r.clickHandler = t.proxy(r.clickHandler, r),
            r.selectHandler = t.proxy(r.selectHandler, r),
            r.setPosition = t.proxy(r.setPosition, r),
            r.swipeHandler = t.proxy(r.swipeHandler, r),
            r.dragHandler = t.proxy(r.dragHandler, r),
            r.keyHandler = t.proxy(r.keyHandler, r),
            r.instanceUid = n++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
        var n = 0;
        return e
    }(),
    e.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
        var o = this;
        if ("boolean" == typeof n)
            i = n,
            n = null;
        else if (n < 0 || n >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : !0 === i ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, n) {
        var i = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === o.options.vertical ? (i[o.animType] = "translate(" + t + "px, 0px)",
                o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)",
                o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)",
        o.$slideTrack.css(i),
        n && setTimeout(function() {
            o.disableTransition(),
            n.call()
        }, o.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , n = e.options.asNavFor;
        return n && null !== n && (n = t(n).not(e.$slider)),
        n
    }
    ,
    e.prototype.asNavFor = function(e) {
        var n = this
          , i = n.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var n = t(this).slick("getSlick");
            n.unslicked || n.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , n = {};
        !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            n = t("<ul />").addClass(i.options.dotsClass),
            e = 0; e <= i.getDotCount(); e += 1)
                n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = n.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = t * s + (e * a.options.slidesPerRow + n);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            a = o),
            e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, n) {
        var i, o, r, s = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        r = s.slideCount % s.options.slidesToScroll != 0,
        i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        e.data.message) {
        case "previous":
            o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
            break;
        case "next":
            o = 0 === i ? s.options.slidesToScroll : i,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
            break;
        case "index":
            var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, n, i = this;
        if (e = i.getNavigableIndexes(),
        n = 0,
        t > e[e.length - 1])
            t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = n;
                    break
                }
                n = e[o]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(),
        t.removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var n = this;
        n.autoPlayClear(),
        n.touchObject = {},
        n.cleanUpEvents(),
        t(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.detach(),
        n.$list.detach(),
        n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        n.unslicked = !0,
        e || n.$slider.trigger("destroy", [n])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , n = {};
        n[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(t).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(t).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t),
        n.$slides.eq(t).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        e && setTimeout(function() {
            n.disableTransition(t),
            e.call()
        }, n.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
            n.stopImmediatePropagation();
            var i = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = i.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , n = 0
          , i = 0;
        if (!0 === t.options.infinite)
            for (; e < t.slideCount; )
                ++i,
                e = n + t.options.slidesToScroll,
                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            i = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++i,
                e = n + t.options.slidesToScroll,
                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, n, i, o = this, r = 0;
        return o.slideOffset = 0,
        n = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        r = n * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (t + o.options.slidesToShow - o.slideCount) * n),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + r,
        !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow),
        e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1),
        e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        e += (o.$list.width() - i.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, n = 0, i = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll,
        i = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); n < t; )
            o.push(n),
            n = i + e.options.slidesToScroll,
            i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * i.swipeLeft)
                return e = r,
                !1
        }),
        Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"),
        n.buildRows(),
        n.buildOut(),
        n.setProps(),
        n.startLoad(),
        n.loadSlider(),
        n.initializeEvents(),
        n.updateArrows(),
        n.updateDots(),
        n.checkResponsive(!0),
        n.focusHandler()),
        e && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && (n.paused = !1,
        n.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        e.$slideTrack.attr("role", "listbox"),
        e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + n
            })
        }),
        null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + n,
                id: "slick-slide" + e.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this)
                  , n = t(this).attr("data-lazy")
                  , i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        s.$slider.trigger("lazyLoaded", [s, e, n])
                    })
                }
                ,
                i.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    s.$slider.trigger("lazyLoadError", [s, e, n])
                }
                ,
                i.src = n
            })
        }
        var n, i, o, r, s = this;
        !0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1),
        r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
        r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
        r = Math.ceil(o + s.options.slidesToShow),
        !0 === s.options.fade && (o > 0 && o--,
        r <= s.slideCount && r++)),
        n = s.$slider.find(".slick-slide").slice(o, r),
        e(n),
        s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"),
        e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
        e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
        e(i))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(),
        t.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(),
        t.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
        e.animating = !1,
        e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility && e.initADA())
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var n, i, o, r = this, s = t("img[data-lazy]", r.$slider);
        s.length ? (n = s.first(),
        i = n.attr("data-lazy"),
        o = document.createElement("img"),
        o.onload = function() {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, n, i]),
            r.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, n, i]),
            r.progressiveLazyLoad())
        }
        ,
        o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    e.prototype.refresh = function(e) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        n = o.currentSlide,
        o.destroy(!0),
        t.extend(o, o.initials, {
            currentSlide: n
        }),
        o.init(),
        e || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, n, i, o = this, r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in r)
                if (i = o.breakpoints.length - 1,
                n = r[e].breakpoint,
                r.hasOwnProperty(e)) {
                    for (; i >= 0; )
                        o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                        i--;
                    o.breakpoints.push(n),
                    o.breakpointSettings[n] = r[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
        var i = this;
        if ("boolean" == typeof t ? (e = t,
        t = !0 === e ? 0 : i.slideCount - 1) : t = !0 === e ? --t : t,
        i.slideCount < 1 || t < 0 || t > i.slideCount - 1)
            return !1;
        i.unload(),
        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, n, i = this, o = {};
        !0 === i.options.rtl && (t = -t),
        e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px",
        o[i.positionProp] = t,
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {},
        !1 === i.cssTransitions ? (o[i.animType] = "translate(" + e + ", " + n + ")",
        i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)",
        i.$slideTrack.css(o)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, n = this;
        n.$slides.each(function(i, o) {
            e = n.slideWidth * i * -1,
            !0 === n.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, n, i, o, r, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (i = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            s.options[i] = o;
        else if ("multiple" === r)
            t.each(i, function(t, e) {
                s.options[t] = e
            });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== t.type(s.options.responsive))
                    s.options.responsive = [o[n]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0; )
                        s.options.responsive[e].breakpoint === o[n].breakpoint && s.options.responsive.splice(e, 1),
                        e--;
                    s.options.responsive.push(o[n])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(t).addClass("slick-current"),
        !0 === r.options.centerMode ? (e = Math.floor(r.options.slidesToShow / 2),
        !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t,
        n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
        r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
        i = !0 === r.options.infinite ? r.options.slidesToShow + t : t,
        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (n = null,
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            e = o.slideCount; e > o.slideCount - i; e -= 1)
                n = e - 1,
                t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1)
                n = e,
                t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(),
        e.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var n = this
          , i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , o = parseInt(i.attr("data-slick-index"));
        if (o || (o = 0),
        n.slideCount <= n.options.slidesToShow)
            return n.setSlideClasses(o),
            void n.asNavFor(o);
        n.slideHandler(o)
    }
    ,
    e.prototype.slideHandler = function(t, e, n) {
        var i, o, r, s, a, l = null, c = this;
        if (e = e || !1,
        (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) {
            if (!1 === e && c.asNavFor(t),
            i = t,
            l = c.getLeft(i),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                return void (!1 === c.options.fade && (i = c.currentSlide,
                !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i)));
            if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                return void (!1 === c.options.fade && (i = c.currentSlide,
                !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i)));
            if (c.options.autoplay && clearInterval(c.autoPlayTimer),
            o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i,
            c.animating = !0,
            c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
            r = c.currentSlide,
            c.currentSlide = o,
            c.setSlideClasses(c.currentSlide),
            c.options.asNavFor && (a = c.getNavTarget(),
            a = a.slick("getSlick"),
            a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
            c.updateDots(),
            c.updateArrows(),
            !0 === c.options.fade)
                return !0 !== n ? (c.fadeSlideOut(r),
                c.fadeSlide(o, function() {
                    c.postSlide(o)
                })) : c.postSlide(o),
                void c.animateHeight();
            !0 !== n ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, n, i, o = this;
        return t = o.touchObject.startX - o.touchObject.curX,
        e = o.touchObject.startY - o.touchObject.curY,
        n = Math.atan2(e, t),
        i = Math.round(180 * n / Math.PI),
        i < 0 && (i = 360 - Math.abs(i)),
        i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, n, i = this;
        if (i.dragging = !1,
        i.interrupted = !1,
        i.shouldClick = !(i.touchObject.swipeLength > 10),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(e),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, n, i, o, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
        s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        "vertical" !== (n = s.swipeDirection()) ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(),
        o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        i = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        !1 === s.options.vertical ? s.swipeLeft = e + i * o : s.swipeLeft = e + i * (s.$list.height() / s.listWidth) * o,
        !0 === s.options.verticalSwiping && (s.swipeLeft = e + i * o),
        !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return n.touchObject = {},
            !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        n.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || void 0 === o ? i[t].slick = new e(i[t],o) : n = i[t].slick[o].apply(i[t].slick, r),
            void 0 !== n)
                return n;
        return i
    }
}),
angular.module("slick", []).directive("slick", ["$timeout", function(t) {
    return {
        restrict: "AEC",
        scope: {
            initOnload: "@",
            data: "=",
            currentIndex: "=",
            accessibility: "@",
            adaptiveHeight: "@",
            arrows: "@",
            asNavFor: "@",
            appendArrows: "@",
            appendDots: "@",
            autoplay: "@",
            autoplaySpeed: "@",
            centerMode: "@",
            centerPadding: "@",
            cssEase: "@",
            customPaging: "&",
            dots: "@",
            draggable: "@",
            easing: "@",
            fade: "@",
            focusOnSelect: "@",
            infinite: "@",
            initialSlide: "@",
            lazyLoad: "@",
            onBeforeChange: "&",
            onAfterChange: "&",
            onInit: "&",
            onReInit: "&",
            onSetPosition: "&",
            pauseOnHover: "@",
            pauseOnDotsHover: "@",
            responsive: "=",
            rtl: "@",
            slide: "@",
            slidesToShow: "@",
            slidesToScroll: "@",
            speed: "@",
            swipe: "@",
            swipeToSlide: "@",
            touchMove: "@",
            touchThreshold: "@",
            useCSS: "@",
            variableWidth: "@",
            vertical: "@",
            prevArrow: "@",
            nextArrow: "@"
        },
        link: function(e, n, i) {
            $ = window.jQuery;
            var o, r, s;
            return o = function() {
                return t(function() {
                    var t;
                    return t = $(n),
                    t.slick("unslick"),
                    t.find(".slick-list").remove(),
                    t
                })
            }
            ,
            r = function() {
                return t(function() {
                    var t, o, r;
                    return r = $(n),
                    null != e.currentIndex && (t = e.currentIndex),
                    o = function(t, n) {
                        return e.customPaging({
                            slick: t,
                            index: n
                        })
                    }
                    ,
                    r.slick({
                        accessibility: "false" !== e.accessibility,
                        adaptiveHeight: "true" === e.adaptiveHeight,
                        arrows: "false" !== e.arrows,
                        asNavFor: e.asNavFor ? e.asNavFor : void 0,
                        appendArrows: e.appendArrows ? $(e.appendArrows) : $(n),
                        appendDots: e.appendDots ? $(e.appendDots) : $(n),
                        autoplay: "true" === e.autoplay,
                        autoplaySpeed: null != e.autoplaySpeed ? parseInt(e.autoplaySpeed, 10) : 3e3,
                        centerMode: "true" === e.centerMode,
                        centerPadding: e.centerPadding || "50px",
                        cssEase: e.cssEase || "ease",
                        customPaging: i.customPaging ? o : void 0,
                        dots: "true" === e.dots,
                        draggable: "false" !== e.draggable,
                        easing: e.easing || "linear",
                        fade: "true" === e.fade,
                        focusOnSelect: "true" === e.focusOnSelect,
                        infinite: "false" !== e.infinite,
                        initialSlide: e.initialSlide || 0,
                        lazyLoad: e.lazyLoad || "ondemand",
                        beforeChange: i.onBeforeChange ? e.onBeforeChange : void 0,
                        onReInit: i.onReInit ? e.onReInit : void 0,
                        onSetPosition: i.onSetPosition ? e.onSetPosition : void 0,
                        pauseOnHover: "false" !== e.pauseOnHover,
                        responsive: e.responsive || void 0,
                        rtl: "true" === e.rtl,
                        slide: e.slide || "div",
                        slidesToShow: null != e.slidesToShow ? parseInt(e.slidesToShow, 10) : 1,
                        slidesToScroll: null != e.slidesToScroll ? parseInt(e.slidesToScroll, 10) : 1,
                        speed: null != e.speed ? parseInt(e.speed, 10) : 300,
                        swipe: "false" !== e.swipe,
                        swipeToSlide: "true" === e.swipeToSlide,
                        touchMove: "false" !== e.touchMove,
                        touchThreshold: e.touchThreshold ? parseInt(e.touchThreshold, 10) : 5,
                        useCSS: "false" !== e.useCSS,
                        variableWidth: "true" === e.variableWidth,
                        vertical: "true" === e.vertical,
                        prevArrow: e.prevArrow ? $(e.prevArrow) : void 0,
                        nextArrow: e.nextArrow ? $(e.nextArrow) : void 0
                    }),
                    r.on("init", function(n) {
                        if (i.onInit && e.onInit(),
                        null != t)
                            return n.slideHandler(t)
                    }),
                    r.on("afterChange", function(n, i, o, r) {
                        if (e.onAfterChange && e.onAfterChange(),
                        null != t)
                            return e.$apply(function() {
                                return t = o,
                                e.currentIndex = o
                            })
                    }),
                    e.$watch("currentIndex", function(e, n) {
                        if (null != t && null != e && e !== t)
                            return r.slick("slickGoTo", e)
                    })
                })
            }
            ,
            e.initOnload ? (s = !1,
            e.$watch("data", function(t, e) {
                if (null != t)
                    return s && o(),
                    r(),
                    s = !0
            })) : r()
        }
    }
}
]),
function(t, e, n) {
    "use strict";
    function i(t, e, n) {
        if (!t)
            throw ct("areq", "Argument '{0}' is {1}", e || "?", n || "required");
        return t
    }
    function o(t, e) {
        return t || e ? t ? e ? (_(t) && (t = t.join(" ")),
        _(e) && (e = e.join(" ")),
        t + " " + e) : t : e : ""
    }
    function r(t) {
        var e = {};
        return t && (t.to || t.from) && (e.to = t.to,
        e.from = t.from),
        e
    }
    function s(t, e, n) {
        var i = "";
        return t = _(t) ? t : t && q(t) && t.length ? t.split(/\s+/) : [],
        W(t, function(t, o) {
            t && t.length > 0 && (i += o > 0 ? " " : "",
            i += n ? e + t : t + e)
        }),
        i
    }
    function a(t, e) {
        var n = t.indexOf(e);
        e >= 0 && t.splice(n, 1)
    }
    function l(t) {
        if (t instanceof U)
            switch (t.length) {
            case 0:
                return [];
            case 1:
                if (t[0].nodeType === Y)
                    return t;
                break;
            default:
                return U(c(t))
            }
        if (t.nodeType === Y)
            return U(t)
    }
    function c(t) {
        if (!t[0])
            return t;
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (n.nodeType == Y)
                return n
        }
    }
    function u(t, e, n) {
        W(e, function(e) {
            t.addClass(e, n)
        })
    }
    function d(t, e, n) {
        W(e, function(e) {
            t.removeClass(e, n)
        })
    }
    function p(t) {
        return function(e, n) {
            n.addClass && (u(t, e, n.addClass),
            n.addClass = null),
            n.removeClass && (d(t, e, n.removeClass),
            n.removeClass = null)
        }
    }
    function f(t) {
        if (t = t || {},
        !t.$$prepared) {
            var e = t.domOperation || H;
            t.domOperation = function() {
                t.$$domOperationFired = !0,
                e(),
                e = H
            }
            ,
            t.$$prepared = !0
        }
        return t
    }
    function h(t, e) {
        v(t, e),
        m(t, e)
    }
    function v(t, e) {
        e.from && (t.css(e.from),
        e.from = null)
    }
    function m(t, e) {
        e.to && (t.css(e.to),
        e.to = null)
    }
    function g(t, e, n) {
        var i = e.options || {}
          , o = n.options || {}
          , r = (i.addClass || "") + " " + (o.addClass || "")
          , s = (i.removeClass || "") + " " + (o.removeClass || "")
          , a = y(t.attr("class"), r, s);
        o.preparationClasses && (i.preparationClasses = S(o.preparationClasses, i.preparationClasses),
        delete o.preparationClasses);
        var l = i.domOperation !== H ? i.domOperation : null;
        return z(i, o),
        l && (i.domOperation = l),
        a.addClass ? i.addClass = a.addClass : i.addClass = null,
        a.removeClass ? i.removeClass = a.removeClass : i.removeClass = null,
        e.addClass = i.addClass,
        e.removeClass = i.removeClass,
        i
    }
    function y(t, e, n) {
        function i(t) {
            q(t) && (t = t.split(" "));
            var e = {};
            return W(t, function(t) {
                t.length && (e[t] = !0)
            }),
            e
        }
        var o = {};
        t = i(t),
        e = i(e),
        W(e, function(t, e) {
            o[e] = 1
        }),
        n = i(n),
        W(n, function(t, e) {
            o[e] = 1 === o[e] ? null : -1
        });
        var r = {
            addClass: "",
            removeClass: ""
        };
        return W(o, function(e, n) {
            var i, o;
            1 === e ? (i = "addClass",
            o = !t[n]) : -1 === e && (i = "removeClass",
            o = t[n]),
            o && (r[i].length && (r[i] += " "),
            r[i] += n)
        }),
        r
    }
    function w(t) {
        return t instanceof e.element ? t[0] : t
    }
    function b(t, e, n) {
        var i = "";
        e && (i = s(e, Z, !0)),
        n.addClass && (i = S(i, s(n.addClass, J))),
        n.removeClass && (i = S(i, s(n.removeClass, G))),
        i.length && (n.preparationClasses = i,
        t.addClass(i))
    }
    function $(t, e) {
        e.preparationClasses && (t.removeClass(e.preparationClasses),
        e.preparationClasses = null),
        e.activeClasses && (t.removeClass(e.activeClasses),
        e.activeClasses = null)
    }
    function k(t, e) {
        var n = e ? "-" + e + "s" : "";
        return C(t, [at, n]),
        [at, n]
    }
    function T(t, e) {
        var n = e ? "paused" : ""
          , i = R + ot;
        return C(t, [i, n]),
        [i, n]
    }
    function C(t, e) {
        var n = e[0]
          , i = e[1];
        t.style[n] = i
    }
    function S(t, e) {
        return t ? e ? t + " " + e : t : e
    }
    function x(t) {
        return [st, t + "s"]
    }
    function A(t, e) {
        return [e ? rt : at, t + "s"]
    }
    function E(t, e, n) {
        var i = Object.create(null)
          , o = t.getComputedStyle(e) || {};
        return W(n, function(t, e) {
            var n = o[t];
            if (n) {
                var r = n.charAt(0);
                ("-" === r || "+" === r || r >= 0) && (n = O(n)),
                0 === n && (n = null),
                i[e] = n
            }
        }),
        i
    }
    function O(t) {
        var e = 0
          , n = t.split(/\s*,\s*/);
        return W(n, function(t) {
            "s" == t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)),
            t = parseFloat(t) || 0,
            e = e ? Math.max(t, e) : t
        }),
        e
    }
    function D(t) {
        return 0 === t || null != t
    }
    function P(t, e) {
        var n = N
          , i = t + "s";
        return e ? n += nt : i += " linear all",
        [n, i]
    }
    function I() {
        var t = Object.create(null);
        return {
            flush: function() {
                t = Object.create(null)
            },
            count: function(e) {
                var n = t[e];
                return n ? n.total : 0
            },
            get: function(e) {
                var n = t[e];
                return n && n.value
            },
            put: function(e, n) {
                t[e] ? t[e].total++ : t[e] = {
                    total: 1,
                    value: n
                }
            }
        }
    }
    function j(t, e, n) {
        W(n, function(n) {
            t[n] = Q(t[n]) ? t[n] : e.style.getPropertyValue(n)
        })
    }
    var N, M, R, L, H = e.noop, F = e.copy, z = e.extend, U = e.element, W = e.forEach, _ = e.isArray, q = e.isString, B = e.isObject, V = e.isUndefined, Q = e.isDefined, X = e.isFunction, K = e.isElement, Y = 1, J = "-add", G = "-remove", Z = "ng-", tt = "ng-animate", et = "$$ngAnimateChildren";
    V(t.ontransitionend) && Q(t.onwebkittransitionend) ? ("-webkit-",
    N = "WebkitTransition",
    M = "webkitTransitionEnd transitionend") : (N = "transition",
    M = "transitionend"),
    V(t.onanimationend) && Q(t.onwebkitanimationend) ? ("-webkit-",
    R = "WebkitAnimation",
    L = "webkitAnimationEnd animationend") : (R = "animation",
    L = "animationend");
    var nt = "Duration"
      , it = "TimingFunction"
      , ot = "PlayState"
      , rt = R + "Delay"
      , st = R + nt
      , at = N + "Delay"
      , lt = N + nt
      , ct = e.$$minErr("ng")
      , ut = ["$$rAF", function(t) {
        function e(t) {
            i = i.concat(t),
            n()
        }
        function n() {
            if (i.length) {
                for (var e = i.shift(), r = 0; r < e.length; r++)
                    e[r]();
                o || t(function() {
                    o || n()
                })
            }
        }
        var i, o;
        return i = e.queue = [],
        e.waitUntilQuiet = function(e) {
            o && o(),
            o = t(function() {
                o = null,
                e(),
                n()
            })
        }
        ,
        e
    }
    ]
      , dt = ["$interpolate", function(t) {
        return {
            link: function(n, i, o) {
                function r(t) {
                    t = "on" === t || "true" === t,
                    i.data(et, t)
                }
                var s = o.ngAnimateChildren;
                e.isString(s) && 0 === s.length ? i.data(et, !0) : (r(t(s)(n)),
                o.$observe("ngAnimateChildren", r))
            }
        }
    }
    ]
      , pt = "$$animateCss"
      , ft = 1e3
      , ht = 3
      , vt = 1.5
      , mt = {
        transitionDuration: lt,
        transitionDelay: at,
        transitionProperty: N + "Property",
        animationDuration: st,
        animationDelay: rt,
        animationIterationCount: R + "IterationCount"
    }
      , gt = {
        transitionDuration: lt,
        transitionDelay: at,
        animationDuration: st,
        animationDelay: rt
    }
      , yt = ["$animateProvider", function(t) {
        var e = I()
          , n = I();
        this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(t, i, o, l, c, u, d, g) {
            function y(t, e) {
                var n = "$$ngAnimateParentKey"
                  , i = t.parentNode;
                return (i[n] || (i[n] = ++z)) + "-" + t.getAttribute("class") + "-" + e
            }
            function b(n, i, o, r) {
                var s = e.get(o);
                return s || (s = E(t, n, r),
                "infinite" === s.animationIterationCount && (s.animationIterationCount = 1)),
                e.put(o, s),
                s
            }
            function $(o, r, a, l) {
                var c;
                if (e.count(a) > 0 && !(c = n.get(a))) {
                    var u = s(r, "-stagger");
                    i.addClass(o, u),
                    c = E(t, o, l),
                    c.animationDuration = Math.max(c.animationDuration, 0),
                    c.transitionDuration = Math.max(c.transitionDuration, 0),
                    i.removeClass(o, u),
                    n.put(a, c)
                }
                return c || {}
            }
            function S(t) {
                U.push(t),
                d.waitUntilQuiet(function() {
                    e.flush(),
                    n.flush();
                    for (var t = c(), i = 0; i < U.length; i++)
                        U[i](t);
                    U.length = 0
                })
            }
            function O(t, e, n) {
                var i = b(t, e, n, mt)
                  , o = i.animationDelay
                  , r = i.transitionDelay;
                return i.maxDelay = o && r ? Math.max(o, r) : o || r,
                i.maxDuration = Math.max(i.animationDuration * i.animationIterationCount, i.transitionDuration),
                i
            }
            var I = p(i)
              , z = 0
              , U = [];
            return function(t, n) {
                function c() {
                    p()
                }
                function d() {
                    p(!0)
                }
                function p(e) {
                    if (!(Q || K && X)) {
                        Q = !0,
                        X = !1,
                        q.$$skipPreparationClasses || i.removeClass(t, bt),
                        i.removeClass(t, kt),
                        T(V, !1),
                        k(V, !1),
                        W(at, function(t) {
                            V.style[t[0]] = ""
                        }),
                        I(t, q),
                        h(t, q),
                        Object.keys(B).length && W(B, function(t, e) {
                            t ? V.style.setProperty(e, t) : V.style.removeProperty(e)
                        }),
                        q.onDone && q.onDone(),
                        ut && ut.length && t.off(ut.join(" "), z);
                        var n = t.data(pt);
                        n && (l.cancel(n[0].timer),
                        t.removeData(pt)),
                        Y && Y.complete(!e)
                    }
                }
                function b(t) {
                    Mt.blockTransition && k(V, t),
                    Mt.blockKeyframeAnimation && T(V, !!t)
                }
                function E() {
                    return Y = new o({
                        end: c,
                        cancel: d
                    }),
                    S(H),
                    p(),
                    {
                        $$willAnimate: !1,
                        start: function() {
                            return Y
                        },
                        end: c
                    }
                }
                function z(t) {
                    t.stopPropagation();
                    var e = t.originalEvent || t
                      , n = e.$manualTimeStamp || Date.now()
                      , i = parseFloat(e.elapsedTime.toFixed(ht));
                    Math.max(n - st, 0) >= nt && i >= ot && (K = !0,
                    p())
                }
                function U() {
                    function e() {
                        if (!Q) {
                            if (b(!1),
                            W(at, function(t) {
                                var e = t[0]
                                  , n = t[1];
                                V.style[e] = n
                            }),
                            I(t, q),
                            i.addClass(t, kt),
                            Mt.recalculateTimingStyles) {
                                if ($t = V.className + " " + bt,
                                Ct = y(V, $t),
                                jt = O(V, $t, Ct),
                                Nt = jt.maxDelay,
                                et = Math.max(Nt, 0),
                                0 === (ot = jt.maxDuration))
                                    return void p();
                                Mt.hasTransitions = jt.transitionDuration > 0,
                                Mt.hasAnimations = jt.animationDuration > 0
                            }
                            if (Mt.applyAnimationDelay && (Nt = "boolean" != typeof q.delay && D(q.delay) ? parseFloat(q.delay) : Nt,
                            et = Math.max(Nt, 0),
                            jt.animationDelay = Nt,
                            Rt = A(Nt, !0),
                            at.push(Rt),
                            V.style[Rt[0]] = Rt[1]),
                            nt = et * ft,
                            rt = ot * ft,
                            q.easing) {
                                var e, o = q.easing;
                                Mt.hasTransitions && (e = N + it,
                                at.push([e, o]),
                                V.style[e] = o),
                                Mt.hasAnimations && (e = R + it,
                                at.push([e, o]),
                                V.style[e] = o)
                            }
                            jt.transitionDuration && ut.push(M),
                            jt.animationDuration && ut.push(L),
                            st = Date.now();
                            var r = nt + vt * rt
                              , s = st + r
                              , a = t.data(pt) || []
                              , c = !0;
                            if (a.length) {
                                var u = a[0];
                                c = s > u.expectedEndTime,
                                c ? l.cancel(u.timer) : a.push(p)
                            }
                            if (c) {
                                var d = l(n, r, !1);
                                a[0] = {
                                    timer: d,
                                    expectedEndTime: s
                                },
                                a.push(p),
                                t.data(pt, a)
                            }
                            ut.length && t.on(ut.join(" "), z),
                            q.to && (q.cleanupStyles && j(B, V, Object.keys(q.to)),
                            m(t, q))
                        }
                    }
                    function n() {
                        var e = t.data(pt);
                        if (e) {
                            for (var n = 1; n < e.length; n++)
                                e[n]();
                            t.removeData(pt)
                        }
                    }
                    if (!Q) {
                        if (!V.parentNode)
                            return void p();
                        var o = function(t) {
                            if (K)
                                X && t && (X = !1,
                                p());
                            else if (X = !t,
                            jt.animationDuration) {
                                var e = T(V, X);
                                X ? at.push(e) : a(at, e)
                            }
                        }
                          , r = Pt > 0 && (jt.transitionDuration && 0 === St.transitionDuration || jt.animationDuration && 0 === St.animationDuration) && Math.max(St.animationDelay, St.transitionDelay);
                        r ? l(e, Math.floor(r * Pt * ft), !1) : e(),
                        tt.resume = function() {
                            o(!0)
                        }
                        ,
                        tt.pause = function() {
                            o(!1)
                        }
                    }
                }
                var q = n || {};
                q.$$prepared || (q = f(F(q)));
                var B = {}
                  , V = w(t);
                if (!V || !V.parentNode || !g.enabled())
                    return E();
                var Q, X, K, Y, tt, et, nt, ot, rt, st, at = [], lt = t.attr("class"), ct = r(q), ut = [];
                if (0 === q.duration || !u.animations && !u.transitions)
                    return E();
                var dt = q.event && _(q.event) ? q.event.join(" ") : q.event
                  , mt = dt && q.structural
                  , yt = ""
                  , wt = "";
                mt ? yt = s(dt, Z, !0) : dt && (yt = dt),
                q.addClass && (wt += s(q.addClass, J)),
                q.removeClass && (wt.length && (wt += " "),
                wt += s(q.removeClass, G)),
                q.applyClassesEarly && wt.length && I(t, q);
                var bt = [yt, wt].join(" ").trim()
                  , $t = lt + " " + bt
                  , kt = s(bt, "-active")
                  , Tt = ct.to && Object.keys(ct.to).length > 0;
                if (!((q.keyframeStyle || "").length > 0 || Tt || bt))
                    return E();
                var Ct, St;
                if (q.stagger > 0) {
                    var xt = parseFloat(q.stagger);
                    St = {
                        transitionDelay: xt,
                        animationDelay: xt,
                        transitionDuration: 0,
                        animationDuration: 0
                    }
                } else
                    Ct = y(V, $t),
                    St = $(V, bt, Ct, gt);
                q.$$skipPreparationClasses || i.addClass(t, bt);
                var At;
                if (q.transitionStyle) {
                    var Et = [N, q.transitionStyle];
                    C(V, Et),
                    at.push(Et)
                }
                if (q.duration >= 0) {
                    At = V.style[N].length > 0;
                    var Ot = P(q.duration, At);
                    C(V, Ot),
                    at.push(Ot)
                }
                if (q.keyframeStyle) {
                    var Dt = [R, q.keyframeStyle];
                    C(V, Dt),
                    at.push(Dt)
                }
                var Pt = St ? q.staggerIndex >= 0 ? q.staggerIndex : e.count(Ct) : 0
                  , It = 0 === Pt;
                It && !q.skipBlocking && k(V, 9999);
                var jt = O(V, $t, Ct)
                  , Nt = jt.maxDelay;
                et = Math.max(Nt, 0),
                ot = jt.maxDuration;
                var Mt = {};
                if (Mt.hasTransitions = jt.transitionDuration > 0,
                Mt.hasAnimations = jt.animationDuration > 0,
                Mt.hasTransitionAll = Mt.hasTransitions && "all" == jt.transitionProperty,
                Mt.applyTransitionDuration = Tt && (Mt.hasTransitions && !Mt.hasTransitionAll || Mt.hasAnimations && !Mt.hasTransitions),
                Mt.applyAnimationDuration = q.duration && Mt.hasAnimations,
                Mt.applyTransitionDelay = D(q.delay) && (Mt.applyTransitionDuration || Mt.hasTransitions),
                Mt.applyAnimationDelay = D(q.delay) && Mt.hasAnimations,
                Mt.recalculateTimingStyles = wt.length > 0,
                (Mt.applyTransitionDuration || Mt.applyAnimationDuration) && (ot = q.duration ? parseFloat(q.duration) : ot,
                Mt.applyTransitionDuration && (Mt.hasTransitions = !0,
                jt.transitionDuration = ot,
                At = V.style[N + "Property"].length > 0,
                at.push(P(ot, At))),
                Mt.applyAnimationDuration && (Mt.hasAnimations = !0,
                jt.animationDuration = ot,
                at.push(x(ot)))),
                0 === ot && !Mt.recalculateTimingStyles)
                    return E();
                if (null != q.delay) {
                    var Rt;
                    "boolean" != typeof q.delay && (Rt = parseFloat(q.delay),
                    et = Math.max(Rt, 0)),
                    Mt.applyTransitionDelay && at.push(A(Rt)),
                    Mt.applyAnimationDelay && at.push(A(Rt, !0))
                }
                return null == q.duration && jt.transitionDuration > 0 && (Mt.recalculateTimingStyles = Mt.recalculateTimingStyles || It),
                nt = et * ft,
                rt = ot * ft,
                q.skipBlocking || (Mt.blockTransition = jt.transitionDuration > 0,
                Mt.blockKeyframeAnimation = jt.animationDuration > 0 && St.animationDelay > 0 && 0 === St.animationDuration),
                q.from && (q.cleanupStyles && j(B, V, Object.keys(q.from)),
                v(t, q)),
                Mt.blockTransition || Mt.blockKeyframeAnimation ? b(ot) : q.skipBlocking || k(V, !1),
                {
                    $$willAnimate: !0,
                    end: c,
                    start: function() {
                        if (!Q)
                            return tt = {
                                end: c,
                                cancel: d,
                                resume: null,
                                pause: null
                            },
                            Y = new o(tt),
                            S(U),
                            Y
                    }
                }
            }
        }
        ]
    }
    ]
      , wt = ["$$animationProvider", function(t) {
        function e(t) {
            return t.parentNode && 11 === t.parentNode.nodeType
        }
        t.drivers.push("$$animateCssDriver");
        var n = "ng-animate-shim"
          , i = "ng-anchor-out";
        this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(t, o, r, s, a, l, c) {
            function u(t) {
                return t.replace(/\bng-\S+\b/g, "")
            }
            function d(t, e) {
                return q(t) && (t = t.split(" ")),
                q(e) && (e = e.split(" ")),
                t.filter(function(t) {
                    return -1 === e.indexOf(t)
                }).join(" ")
            }
            function f(e, o, s) {
                function a(t) {
                    var e = {}
                      , n = w(t).getBoundingClientRect();
                    return W(["width", "height", "top", "left"], function(t) {
                        var i = n[t];
                        switch (t) {
                        case "top":
                            i += m.scrollTop;
                            break;
                        case "left":
                            i += m.scrollLeft
                        }
                        e[t] = Math.floor(i) + "px"
                    }),
                    e
                }
                function l(t) {
                    return t.attr("class") || ""
                }
                function c() {
                    var e = u(l(s))
                      , n = d(e, h)
                      , o = d(h, e)
                      , r = t(f, {
                        to: a(s),
                        addClass: "ng-anchor-in " + n,
                        removeClass: i + " " + o,
                        delay: !0
                    });
                    return r.$$willAnimate ? r : null
                }
                function p() {
                    f.remove(),
                    o.removeClass(n),
                    s.removeClass(n)
                }
                var f = U(w(o).cloneNode(!0))
                  , h = u(l(f));
                o.addClass(n),
                s.addClass(n),
                f.addClass("ng-anchor"),
                y.append(f);
                var v, g = function() {
                    var e = t(f, {
                        addClass: i,
                        delay: !0,
                        from: a(o)
                    });
                    return e.$$willAnimate ? e : null
                }();
                if (!g && !(v = c()))
                    return p();
                var b = g || v;
                return {
                    start: function() {
                        function t() {
                            n && n.end()
                        }
                        var e, n = b.start();
                        return n.done(function() {
                            if (n = null,
                            !v && (v = c()))
                                return n = v.start(),
                                n.done(function() {
                                    n = null,
                                    p(),
                                    e.complete()
                                }),
                                n;
                            p(),
                            e.complete()
                        }),
                        e = new r({
                            end: t,
                            cancel: t
                        })
                    }
                }
            }
            function h(t, e, n, i) {
                var o = v(t)
                  , s = v(e)
                  , a = [];
                if (W(i, function(t) {
                    var e = t.out
                      , i = t.in
                      , o = f(n, e, i);
                    o && a.push(o)
                }),
                o || s || 0 !== a.length)
                    return {
                        start: function() {
                            function t() {
                                W(e, function(t) {
                                    t.end()
                                })
                            }
                            var e = [];
                            o && e.push(o.start()),
                            s && e.push(s.start()),
                            W(a, function(t) {
                                e.push(t.start())
                            });
                            var n = new r({
                                end: t,
                                cancel: t
                            });
                            return r.all(e, function(t) {
                                n.complete(t)
                            }),
                            n
                        }
                    }
            }
            function v(e) {
                var n = e.element
                  , i = e.options || {};
                e.structural && (i.event = e.event,
                i.structural = !0,
                i.applyClassesEarly = !0,
                "leave" === e.event && (i.onDone = i.domOperation)),
                i.preparationClasses && (i.event = S(i.event, i.preparationClasses));
                var o = t(n, i);
                return o.$$willAnimate ? o : null
            }
            if (!a.animations && !a.transitions)
                return H;
            var m = c[0].body
              , g = w(s)
              , y = U(e(g) || m.contains(g) ? g : m);
            return p(l),
            function(t) {
                return t.from && t.to ? h(t.from, t.to, t.classes, t.anchors) : v(t)
            }
        }
        ]
    }
    ]
      , bt = ["$animateProvider", function(t) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(e, n, i) {
            function o(n) {
                n = _(n) ? n : n.split(" ");
                for (var i = [], o = {}, r = 0; r < n.length; r++) {
                    var s = n[r]
                      , a = t.$$registeredAnimations[s];
                    a && !o[s] && (i.push(e.get(a)),
                    o[s] = !0)
                }
                return i
            }
            var r = p(i);
            return function(t, e, i, s) {
                function a() {
                    s.domOperation(),
                    r(t, s)
                }
                function l() {
                    p = !0,
                    a(),
                    h(t, s)
                }
                function c(t, e, i, o, r) {
                    var s;
                    switch (i) {
                    case "animate":
                        s = [e, o.from, o.to, r];
                        break;
                    case "setClass":
                        s = [e, g, y, r];
                        break;
                    case "addClass":
                        s = [e, g, r];
                        break;
                    case "removeClass":
                        s = [e, y, r];
                        break;
                    default:
                        s = [e, r]
                    }
                    s.push(o);
                    var a = t.apply(t, s);
                    if (a)
                        if (X(a.start) && (a = a.start()),
                        a instanceof n)
                            a.done(r);
                        else if (X(a))
                            return a;
                    return H
                }
                function u(t, e, i, o, r) {
                    var s = [];
                    return W(o, function(o) {
                        var a = o[r];
                        a && s.push(function() {
                            var o, r, s = !1, l = function(t) {
                                s || (s = !0,
                                (r || H)(t),
                                o.complete(!t))
                            };
                            return o = new n({
                                end: function() {
                                    l()
                                },
                                cancel: function() {
                                    l(!0)
                                }
                            }),
                            r = c(a, t, e, i, function(t) {
                                l(!1 === t)
                            }),
                            o
                        })
                    }),
                    s
                }
                function d(t, e, i, o, r) {
                    var s = u(t, e, i, o, r);
                    if (0 === s.length) {
                        var a, l;
                        "beforeSetClass" === r ? (a = u(t, "removeClass", i, o, "beforeRemoveClass"),
                        l = u(t, "addClass", i, o, "beforeAddClass")) : "setClass" === r && (a = u(t, "removeClass", i, o, "removeClass"),
                        l = u(t, "addClass", i, o, "addClass")),
                        a && (s = s.concat(a)),
                        l && (s = s.concat(l))
                    }
                    if (0 !== s.length)
                        return function(t) {
                            var e = [];
                            return s.length && W(s, function(t) {
                                e.push(t())
                            }),
                            e.length ? n.all(e, t) : t(),
                            function(t) {
                                W(e, function(e) {
                                    t ? e.cancel() : e.end()
                                })
                            }
                        }
                }
                var p = !1;
                3 === arguments.length && B(i) && (s = i,
                i = null),
                s = f(s),
                i || (i = t.attr("class") || "",
                s.addClass && (i += " " + s.addClass),
                s.removeClass && (i += " " + s.removeClass));
                var v, m, g = s.addClass, y = s.removeClass, w = o(i);
                if (w.length) {
                    var b, $;
                    "leave" == e ? ($ = "leave",
                    b = "afterLeave") : ($ = "before" + e.charAt(0).toUpperCase() + e.substr(1),
                    b = e),
                    "enter" !== e && "move" !== e && (v = d(t, e, s, w, $)),
                    m = d(t, e, s, w, b)
                }
                if (v || m) {
                    var k;
                    return {
                        $$willAnimate: !0,
                        end: function() {
                            return k ? k.end() : (l(),
                            k = new n,
                            k.complete(!0)),
                            k
                        },
                        start: function() {
                            function t(t) {
                                l(t),
                                k.complete(t)
                            }
                            function e(e) {
                                p || ((i || H)(e),
                                t(e))
                            }
                            if (k)
                                return k;
                            k = new n;
                            var i, o = [];
                            return v && o.push(function(t) {
                                i = v(t)
                            }),
                            o.length ? o.push(function(t) {
                                a(),
                                t(!0)
                            }) : a(),
                            m && o.push(function(t) {
                                i = m(t)
                            }),
                            k.setHost({
                                end: function() {
                                    e()
                                },
                                cancel: function() {
                                    e(!0)
                                }
                            }),
                            n.chain(o, t),
                            k
                        }
                    }
                }
            }
        }
        ]
    }
    ]
      , $t = ["$$animationProvider", function(t) {
        t.drivers.push("$$animateJsDriver"),
        this.$get = ["$$animateJs", "$$AnimateRunner", function(t, e) {
            function n(e) {
                var n = e.element
                  , i = e.event
                  , o = e.options
                  , r = e.classes;
                return t(n, i, r, o)
            }
            return function(t) {
                if (t.from && t.to) {
                    var i = n(t.from)
                      , o = n(t.to);
                    if (!i && !o)
                        return;
                    return {
                        start: function() {
                            function t() {
                                return function() {
                                    W(r, function(t) {
                                        t.end()
                                    })
                                }
                            }
                            function n(t) {
                                s.complete(t)
                            }
                            var r = [];
                            i && r.push(i.start()),
                            o && r.push(o.start()),
                            e.all(r, n);
                            var s = new e({
                                end: t(),
                                cancel: t()
                            });
                            return s
                        }
                    }
                }
                return n(t)
            }
        }
        ]
    }
    ]
      , kt = "data-ng-animate"
      , Tt = "$ngAnimatePin"
      , Ct = ["$animateProvider", function(t) {
        function e(t) {
            if (!t)
                return null;
            var e = t.split(u)
              , n = Object.create(null);
            return W(e, function(t) {
                n[t] = !0
            }),
            n
        }
        function n(t, n) {
            if (t && n) {
                var i = e(n);
                return t.split(u).some(function(t) {
                    return i[t]
                })
            }
        }
        function o(t, e, n, i) {
            return d[t].some(function(t) {
                return t(e, n, i)
            })
        }
        function r(t, e) {
            var n = (t.addClass || "").length > 0
              , i = (t.removeClass || "").length > 0;
            return e ? n && i : n || i
        }
        var s = 1
          , a = 2
          , u = " "
          , d = this.rules = {
            skip: [],
            cancel: [],
            join: []
        };
        d.join.push(function(t, e, n) {
            return !e.structural && r(e)
        }),
        d.skip.push(function(t, e, n) {
            return !e.structural && !r(e)
        }),
        d.skip.push(function(t, e, n) {
            return "leave" == n.event && e.structural
        }),
        d.skip.push(function(t, e, n) {
            return n.structural && n.state === a && !e.structural
        }),
        d.cancel.push(function(t, e, n) {
            return n.structural && e.structural
        }),
        d.cancel.push(function(t, e, n) {
            return n.state === a && e.structural
        }),
        d.cancel.push(function(t, e, i) {
            var o = e.addClass
              , r = e.removeClass
              , s = i.addClass
              , a = i.removeClass;
            return !(V(o) && V(r) || V(s) && V(a)) && (n(o, a) || n(r, s))
        }),
        this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(e, n, u, d, v, m, y, k, T, C) {
            function S() {
                var t = !1;
                return function(e) {
                    t ? e() : n.$$postDigest(function() {
                        t = !0,
                        e()
                    })
                }
            }
            function x(t, e) {
                return g(t, e, {})
            }
            function A(t, e, n) {
                var i = w(e)
                  , o = w(t)
                  , r = []
                  , s = H[n];
                return s && W(s, function(t) {
                    Z.call(t.node, i) ? r.push(t.callback) : "leave" === n && Z.call(t.node, o) && r.push(t.callback)
                }),
                r
            }
            function E(t, i, c) {
                function u(n, i, o, r) {
                    E(function() {
                        var n = A(k, t, i);
                        n.length && e(function() {
                            W(n, function(e) {
                                e(t, o, r)
                            })
                        })
                    }),
                    n.progress(i, o, r)
                }
                function p(e) {
                    $(t, T),
                    G(t, T),
                    h(t, T),
                    T.domOperation(),
                    C.complete(!e)
                }
                var v, k, T = F(c);
                t = l(t),
                t && (v = w(t),
                k = t.parent()),
                T = f(T);
                var C = new y
                  , E = S();
                if (_(T.addClass) && (T.addClass = T.addClass.join(" ")),
                T.addClass && !q(T.addClass) && (T.addClass = null),
                _(T.removeClass) && (T.removeClass = T.removeClass.join(" ")),
                T.removeClass && !q(T.removeClass) && (T.removeClass = null),
                T.from && !B(T.from) && (T.from = null),
                T.to && !B(T.to) && (T.to = null),
                !v)
                    return p(),
                    C;
                var P = [v.className, T.addClass, T.removeClass].join(" ");
                if (!J(P))
                    return p(),
                    C;
                var L = ["enter", "move", "leave"].indexOf(i) >= 0
                  , H = !R || d[0].hidden || M.get(v)
                  , z = !H && N.get(v) || {}
                  , U = !!z.state;
                if (H || U && z.state == s || (H = !I(t, k, i)),
                H)
                    return p(),
                    C;
                L && O(t);
                var V = {
                    structural: L,
                    element: t,
                    event: i,
                    addClass: T.addClass,
                    removeClass: T.removeClass,
                    close: p,
                    options: T,
                    runner: C
                };
                if (U) {
                    if (o("skip", t, V, z))
                        return z.state === a ? (p(),
                        C) : (g(t, z, V),
                        z.runner);
                    if (o("cancel", t, V, z))
                        if (z.state === a)
                            z.runner.end();
                        else {
                            if (!z.structural)
                                return g(t, z, V),
                                z.runner;
                            z.close()
                        }
                    else {
                        if (o("join", t, V, z)) {
                            if (z.state !== a)
                                return b(t, L ? i : null, T),
                                i = V.event = z.event,
                                T = g(t, z, V),
                                z.runner;
                            x(t, V)
                        }
                    }
                } else
                    x(t, V);
                var Q = V.structural;
                if (Q || (Q = "animate" === V.event && Object.keys(V.options.to || {}).length > 0 || r(V)),
                !Q)
                    return p(),
                    D(t),
                    C;
                var X = (z.counter || 0) + 1;
                return V.counter = X,
                j(t, s, V),
                n.$$postDigest(function() {
                    var e = N.get(v)
                      , n = !e;
                    e = e || {};
                    var o = t.parent() || []
                      , s = o.length > 0 && ("animate" === e.event || e.structural || r(e));
                    if (n || e.counter !== X || !s)
                        return n && (G(t, T),
                        h(t, T)),
                        (n || L && e.event !== i) && (T.domOperation(),
                        C.end()),
                        void (s || D(t));
                    i = !e.structural && r(e, !0) ? "setClass" : e.event,
                    j(t, a);
                    var l = m(t, i, e.options);
                    l.done(function(e) {
                        p(!e);
                        var n = N.get(v);
                        n && n.counter === X && D(w(t)),
                        u(C, i, "close", {})
                    }),
                    C.setHost(l),
                    u(C, i, "start", {})
                }),
                C
            }
            function O(t) {
                var e = w(t)
                  , n = e.querySelectorAll("[" + kt + "]");
                W(n, function(t) {
                    var e = parseInt(t.getAttribute(kt))
                      , n = N.get(t);
                    if (n)
                        switch (e) {
                        case a:
                            n.runner.end();
                        case s:
                            N.remove(t)
                        }
                })
            }
            function D(t) {
                var e = w(t);
                e.removeAttribute(kt),
                N.remove(e)
            }
            function P(t, e) {
                return w(t) === w(e)
            }
            function I(t, e, n) {
                var i, o = U(d[0].body), r = P(t, o) || "HTML" === t[0].nodeName, s = P(t, u), a = !1, l = M.get(w(t)), c = U.data(t[0], Tt);
                for (c && (e = c),
                e = w(e); e && (s || (s = P(e, u)),
                e.nodeType === Y); ) {
                    var p = N.get(e) || {};
                    if (!a) {
                        var f = M.get(e);
                        if (!0 === f && !1 !== l) {
                            l = !0;
                            break
                        }
                        !1 === f && (l = !1),
                        a = p.structural
                    }
                    if (V(i) || !0 === i) {
                        var h = U.data(e, et);
                        Q(h) && (i = h)
                    }
                    if (a && !1 === i)
                        break;
                    if (r || (r = P(e, o)),
                    r && s)
                        break;
                    e = s || !(c = U.data(e, Tt)) ? e.parentNode : w(c)
                }
                return (!a || i) && !0 !== l && s && r
            }
            function j(t, e, n) {
                n = n || {},
                n.state = e;
                var i = w(t);
                i.setAttribute(kt, e);
                var o = N.get(i)
                  , r = o ? z(o, n) : n;
                N.put(i, r)
            }
            var N = new v
              , M = new v
              , R = null
              , L = n.$watch(function() {
                return 0 === k.totalPendingRequests
            }, function(t) {
                t && (L(),
                n.$$postDigest(function() {
                    n.$$postDigest(function() {
                        null === R && (R = !0)
                    })
                }))
            })
              , H = {}
              , X = t.classNameFilter()
              , J = X ? function(t) {
                return X.test(t)
            }
            : function() {
                return !0
            }
              , G = p(T)
              , Z = Node.prototype.contains || function(t) {
                return this === t || !!(16 & this.compareDocumentPosition(t))
            }
            ;
            return {
                on: function(t, e, n) {
                    var i = c(e);
                    H[t] = H[t] || [],
                    H[t].push({
                        node: i,
                        callback: n
                    })
                },
                off: function(t, e, n) {
                    var i = H[t];
                    i && (H[t] = 1 === arguments.length ? null : function(t, e, n) {
                        var i = c(e);
                        return t.filter(function(t) {
                            return !(t.node === i && (!n || t.callback === n))
                        })
                    }(i, e, n))
                },
                pin: function(t, e) {
                    i(K(t), "element", "not an element"),
                    i(K(e), "parentElement", "not an element"),
                    t.data(Tt, e)
                },
                push: function(t, e, n, i) {
                    return n = n || {},
                    n.domOperation = i,
                    E(t, e, n)
                },
                enabled: function(t, e) {
                    var n = arguments.length;
                    if (0 === n)
                        e = !!R;
                    else {
                        if (K(t)) {
                            var i = w(t)
                              , o = M.get(i);
                            1 === n ? e = !o : M.put(i, !e)
                        } else
                            e = R = !!t
                    }
                    return e
                }
            }
        }
        ]
    }
    ]
      , St = ["$animateProvider", function(t) {
        function e(t, e) {
            t.data(a, e)
        }
        function n(t) {
            t.removeData(a)
        }
        function i(t) {
            return t.data(a)
        }
        var r = "ng-animate-ref"
          , s = this.drivers = []
          , a = "$$animationRunner";
        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(t, a, l, c, u, d) {
            function v(t) {
                function e(t) {
                    if (t.processed)
                        return t;
                    t.processed = !0;
                    var n = t.domNode
                      , r = n.parentNode;
                    o.put(n, t);
                    for (var s; r; ) {
                        if (s = o.get(r)) {
                            s.processed || (s = e(s));
                            break
                        }
                        r = r.parentNode
                    }
                    return (s || i).children.push(t),
                    t
                }
                var n, i = {
                    children: []
                }, o = new u;
                for (n = 0; n < t.length; n++) {
                    var r = t[n];
                    o.put(r.domNode, t[n] = {
                        domNode: r.domNode,
                        fn: r.fn,
                        children: []
                    })
                }
                for (n = 0; n < t.length; n++)
                    e(t[n]);
                return function(t) {
                    var e, n = [], i = [];
                    for (e = 0; e < t.children.length; e++)
                        i.push(t.children[e]);
                    var o = i.length
                      , r = 0
                      , s = [];
                    for (e = 0; e < i.length; e++) {
                        var a = i[e];
                        o <= 0 && (o = r,
                        r = 0,
                        n.push(s),
                        s = []),
                        s.push(a.fn),
                        a.children.forEach(function(t) {
                            r++,
                            i.push(t)
                        }),
                        o--
                    }
                    return s.length && n.push(s),
                    n
                }(i)
            }
            var m = []
              , g = p(t);
            return function(u, p, y) {
                function b(t) {
                    var e = "[" + r + "]"
                      , n = t.hasAttribute(r) ? [t] : t.querySelectorAll(e)
                      , i = [];
                    return W(n, function(t) {
                        var e = t.getAttribute(r);
                        e && e.length && i.push(t)
                    }),
                    i
                }
                function $(t) {
                    var e = []
                      , n = {};
                    W(t, function(t, i) {
                        var o = t.element
                          , s = w(o)
                          , a = t.event
                          , l = ["enter", "move"].indexOf(a) >= 0
                          , c = t.structural ? b(s) : [];
                        if (c.length) {
                            var u = l ? "to" : "from";
                            W(c, function(t) {
                                var e = t.getAttribute(r);
                                n[e] = n[e] || {},
                                n[e][u] = {
                                    animationID: i,
                                    element: U(t)
                                }
                            })
                        } else
                            e.push(t)
                    });
                    var i = {}
                      , o = {};
                    return W(n, function(n, r) {
                        var s = n.from
                          , a = n.to;
                        if (!s || !a) {
                            var l = s ? s.animationID : a.animationID
                              , c = l.toString();
                            return void (i[c] || (i[c] = !0,
                            e.push(t[l])))
                        }
                        var u = t[s.animationID]
                          , d = t[a.animationID]
                          , p = s.animationID.toString();
                        if (!o[p]) {
                            var f = o[p] = {
                                structural: !0,
                                beforeStart: function() {
                                    u.beforeStart(),
                                    d.beforeStart()
                                },
                                close: function() {
                                    u.close(),
                                    d.close()
                                },
                                classes: k(u.classes, d.classes),
                                from: u,
                                to: d,
                                anchors: []
                            };
                            f.classes.length ? e.push(f) : (e.push(u),
                            e.push(d))
                        }
                        o[p].anchors.push({
                            out: s.element,
                            in: a.element
                        })
                    }),
                    e
                }
                function k(t, e) {
                    t = t.split(" "),
                    e = e.split(" ");
                    for (var n = [], i = 0; i < t.length; i++) {
                        var o = t[i];
                        if ("ng-" !== o.substring(0, 3))
                            for (var r = 0; r < e.length; r++)
                                if (o === e[r]) {
                                    n.push(o);
                                    break
                                }
                    }
                    return n.join(" ")
                }
                function T(t) {
                    for (var e = s.length - 1; e >= 0; e--) {
                        var n = s[e];
                        if (l.has(n)) {
                            var i = l.get(n)
                              , o = i(t);
                            if (o)
                                return o
                        }
                    }
                }
                function C() {
                    u.addClass(tt),
                    P && t.addClass(u, P),
                    I && (t.removeClass(u, I),
                    I = null)
                }
                function S(t, e) {
                    function n(t) {
                        i(t).setHost(e)
                    }
                    t.from && t.to ? (n(t.from.element),
                    n(t.to.element)) : n(t.element)
                }
                function x() {
                    var t = i(u);
                    !t || "leave" === p && y.$$domOperationFired || t.end()
                }
                function A(e) {
                    u.off("$destroy", x),
                    n(u),
                    g(u, y),
                    h(u, y),
                    y.domOperation(),
                    P && t.removeClass(u, P),
                    u.removeClass(tt),
                    O.complete(!e)
                }
                y = f(y);
                var E = ["enter", "move", "leave"].indexOf(p) >= 0
                  , O = new c({
                    end: function() {
                        A()
                    },
                    cancel: function() {
                        A(!0)
                    }
                });
                if (!s.length)
                    return A(),
                    O;
                e(u, O);
                var D = o(u.attr("class"), o(y.addClass, y.removeClass))
                  , P = y.tempClasses;
                P && (D += " " + P,
                y.tempClasses = null);
                var I;
                return E && (I = "ng-" + p + "-prepare",
                t.addClass(u, I)),
                m.push({
                    element: u,
                    classes: D,
                    event: p,
                    structural: E,
                    options: y,
                    beforeStart: C,
                    close: A
                }),
                u.on("$destroy", x),
                m.length > 1 ? O : (a.$$postDigest(function() {
                    var t = [];
                    W(m, function(e) {
                        i(e.element) ? t.push(e) : e.close()
                    }),
                    m.length = 0;
                    var e = $(t)
                      , n = [];
                    W(e, function(t) {
                        n.push({
                            domNode: w(t.from ? t.from.element : t.element),
                            fn: function() {
                                t.beforeStart();
                                var e, n = t.close;
                                if (i(t.anchors ? t.from.element || t.to.element : t.element)) {
                                    var o = T(t);
                                    o && (e = o.start)
                                }
                                if (e) {
                                    var r = e();
                                    r.done(function(t) {
                                        n(!t)
                                    }),
                                    S(t, r)
                                } else
                                    n()
                            }
                        })
                    }),
                    d(v(n))
                }),
                O)
            }
        }
        ]
    }
    ]
      , xt = ["$animate", "$rootScope", function(t, e) {
        return {
            restrict: "A",
            transclude: "element",
            terminal: !0,
            priority: 600,
            link: function(e, n, i, o, r) {
                var s, a;
                e.$watchCollection(i.ngAnimateSwap || i.for, function(i) {
                    s && t.leave(s),
                    a && (a.$destroy(),
                    a = null),
                    (i || 0 === i) && (a = e.$new(),
                    r(a, function(e) {
                        s = e,
                        t.enter(e, null, n)
                    }))
                })
            }
        }
    }
    ];
    e.module("ngAnimate", []).directive("ngAnimateSwap", xt).directive("ngAnimateChildren", dt).factory("$$rAFScheduler", ut).provider("$$animateQueue", Ct).provider("$$animation", St).provider("$animateCss", yt).provider("$$animateCssDriver", wt).provider("$$animateJs", bt).provider("$$animateJsDriver", $t)
}(window, window.angular),
function() {
    function t(t) {
        function e(e, n, i, o, r, s) {
            for (; r >= 0 && r < s; r += t) {
                var a = o ? o[r] : r;
                i = n(i, e[a], a, e)
            }
            return i
        }
        return function(n, i, o, r) {
            i = w(i, r, 4);
            var s = !x(n) && y.keys(n)
              , a = (s || n).length
              , l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (o = n[s ? s[l] : l],
            l += t),
            e(n, i, o, s, l, a)
        }
    }
    function e(t) {
        return function(e, n, i) {
            n = b(n, i);
            for (var o = S(e), r = t > 0 ? 0 : o - 1; r >= 0 && r < o; r += t)
                if (n(e[r], r, e))
                    return r;
            return -1
        }
    }
    function n(t, e, n) {
        return function(i, o, r) {
            var s = 0
              , a = S(i);
            if ("number" == typeof r)
                t > 0 ? s = r >= 0 ? r : Math.max(r + a, s) : a = r >= 0 ? Math.min(r + 1, a) : r + a + 1;
            else if (n && r && a)
                return r = n(i, o),
                i[r] === o ? r : -1;
            if (o !== o)
                return r = e(u.call(i, s, a), y.isNaN),
                r >= 0 ? r + s : -1;
            for (r = t > 0 ? s : a - 1; r >= 0 && r < a; r += t)
                if (i[r] === o)
                    return r;
            return -1
        }
    }
    function i(t, e) {
        var n = P.length
          , i = t.constructor
          , o = y.isFunction(i) && i.prototype || a
          , r = "constructor";
        for (y.has(t, r) && !y.contains(e, r) && e.push(r); n--; )
            (r = P[n])in t && t[r] !== o[r] && !y.contains(e, r) && e.push(r)
    }
    var o = this
      , r = o._
      , s = Array.prototype
      , a = Object.prototype
      , l = Function.prototype
      , c = s.push
      , u = s.slice
      , d = a.toString
      , p = a.hasOwnProperty
      , f = Array.isArray
      , h = Object.keys
      , v = l.bind
      , m = Object.create
      , g = function() {}
      , y = function(t) {
        return t instanceof y ? t : this instanceof y ? void (this._wrapped = t) : new y(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y),
    exports._ = y) : o._ = y,
    y.VERSION = "1.8.3";
    var w = function(t, e, n) {
        if (void 0 === e)
            return t;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, i) {
                return t.call(e, n, i)
            }
            ;
        case 3:
            return function(n, i, o) {
                return t.call(e, n, i, o)
            }
            ;
        case 4:
            return function(n, i, o, r) {
                return t.call(e, n, i, o, r)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
      , b = function(t, e, n) {
        return null == t ? y.identity : y.isFunction(t) ? w(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t)
    };
    y.iteratee = function(t, e) {
        return b(t, e, 1 / 0)
    }
    ;
    var $ = function(t, e) {
        return function(n) {
            var i = arguments.length;
            if (i < 2 || null == n)
                return n;
            for (var o = 1; o < i; o++)
                for (var r = arguments[o], s = t(r), a = s.length, l = 0; l < a; l++) {
                    var c = s[l];
                    e && void 0 !== n[c] || (n[c] = r[c])
                }
            return n
        }
    }
      , k = function(t) {
        if (!y.isObject(t))
            return {};
        if (m)
            return m(t);
        g.prototype = t;
        var e = new g;
        return g.prototype = null,
        e
    }
      , T = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
      , C = Math.pow(2, 53) - 1
      , S = T("length")
      , x = function(t) {
        var e = S(t);
        return "number" == typeof e && e >= 0 && e <= C
    };
    y.each = y.forEach = function(t, e, n) {
        e = w(e, n);
        var i, o;
        if (x(t))
            for (i = 0,
            o = t.length; i < o; i++)
                e(t[i], i, t);
        else {
            var r = y.keys(t);
            for (i = 0,
            o = r.length; i < o; i++)
                e(t[r[i]], r[i], t)
        }
        return t
    }
    ,
    y.map = y.collect = function(t, e, n) {
        e = b(e, n);
        for (var i = !x(t) && y.keys(t), o = (i || t).length, r = Array(o), s = 0; s < o; s++) {
            var a = i ? i[s] : s;
            r[s] = e(t[a], a, t)
        }
        return r
    }
    ,
    y.reduce = y.foldl = y.inject = t(1),
    y.reduceRight = y.foldr = t(-1),
    y.find = y.detect = function(t, e, n) {
        var i;
        if (void 0 !== (i = x(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n)) && -1 !== i)
            return t[i]
    }
    ,
    y.filter = y.select = function(t, e, n) {
        var i = [];
        return e = b(e, n),
        y.each(t, function(t, n, o) {
            e(t, n, o) && i.push(t)
        }),
        i
    }
    ,
    y.reject = function(t, e, n) {
        return y.filter(t, y.negate(b(e)), n)
    }
    ,
    y.every = y.all = function(t, e, n) {
        e = b(e, n);
        for (var i = !x(t) && y.keys(t), o = (i || t).length, r = 0; r < o; r++) {
            var s = i ? i[r] : r;
            if (!e(t[s], s, t))
                return !1
        }
        return !0
    }
    ,
    y.some = y.any = function(t, e, n) {
        e = b(e, n);
        for (var i = !x(t) && y.keys(t), o = (i || t).length, r = 0; r < o; r++) {
            var s = i ? i[r] : r;
            if (e(t[s], s, t))
                return !0
        }
        return !1
    }
    ,
    y.contains = y.includes = y.include = function(t, e, n, i) {
        return x(t) || (t = y.values(t)),
        ("number" != typeof n || i) && (n = 0),
        y.indexOf(t, e, n) >= 0
    }
    ,
    y.invoke = function(t, e) {
        var n = u.call(arguments, 2)
          , i = y.isFunction(e);
        return y.map(t, function(t) {
            var o = i ? e : t[e];
            return null == o ? o : o.apply(t, n)
        })
    }
    ,
    y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    }
    ,
    y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    }
    ,
    y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    }
    ,
    y.max = function(t, e, n) {
        var i, o, r = -1 / 0, s = -1 / 0;
        if (null == e && null != t) {
            t = x(t) ? t : y.values(t);
            for (var a = 0, l = t.length; a < l; a++)
                (i = t[a]) > r && (r = i)
        } else
            e = b(e, n),
            y.each(t, function(t, n, i) {
                ((o = e(t, n, i)) > s || o === -1 / 0 && r === -1 / 0) && (r = t,
                s = o)
            });
        return r
    }
    ,
    y.min = function(t, e, n) {
        var i, o, r = 1 / 0, s = 1 / 0;
        if (null == e && null != t) {
            t = x(t) ? t : y.values(t);
            for (var a = 0, l = t.length; a < l; a++)
                (i = t[a]) < r && (r = i)
        } else
            e = b(e, n),
            y.each(t, function(t, n, i) {
                ((o = e(t, n, i)) < s || o === 1 / 0 && r === 1 / 0) && (r = t,
                s = o)
            });
        return r
    }
    ,
    y.shuffle = function(t) {
        for (var e, n = x(t) ? t : y.values(t), i = n.length, o = Array(i), r = 0; r < i; r++)
            e = y.random(0, r),
            e !== r && (o[r] = o[e]),
            o[e] = n[r];
        return o
    }
    ,
    y.sample = function(t, e, n) {
        return null == e || n ? (x(t) || (t = y.values(t)),
        t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    }
    ,
    y.sortBy = function(t, e, n) {
        return e = b(e, n),
        y.pluck(y.map(t, function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria
              , i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (n < i || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }), "value")
    }
    ;
    var A = function(t) {
        return function(e, n, i) {
            var o = {};
            return n = b(n, i),
            y.each(e, function(i, r) {
                var s = n(i, r, e);
                t(o, i, s)
            }),
            o
        }
    };
    y.groupBy = A(function(t, e, n) {
        y.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    y.indexBy = A(function(t, e, n) {
        t[n] = e
    }),
    y.countBy = A(function(t, e, n) {
        y.has(t, n) ? t[n]++ : t[n] = 1
    }),
    y.toArray = function(t) {
        return t ? y.isArray(t) ? u.call(t) : x(t) ? y.map(t, y.identity) : y.values(t) : []
    }
    ,
    y.size = function(t) {
        return null == t ? 0 : x(t) ? t.length : y.keys(t).length
    }
    ,
    y.partition = function(t, e, n) {
        e = b(e, n);
        var i = []
          , o = [];
        return y.each(t, function(t, n, r) {
            (e(t, n, r) ? i : o).push(t)
        }),
        [i, o]
    }
    ,
    y.first = y.head = y.take = function(t, e, n) {
        if (null != t)
            return null == e || n ? t[0] : y.initial(t, t.length - e)
    }
    ,
    y.initial = function(t, e, n) {
        return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }
    ,
    y.last = function(t, e, n) {
        if (null != t)
            return null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e))
    }
    ,
    y.rest = y.tail = y.drop = function(t, e, n) {
        return u.call(t, null == e || n ? 1 : e)
    }
    ,
    y.compact = function(t) {
        return y.filter(t, y.identity)
    }
    ;
    var E = function(t, e, n, i) {
        for (var o = [], r = 0, s = i || 0, a = S(t); s < a; s++) {
            var l = t[s];
            if (x(l) && (y.isArray(l) || y.isArguments(l))) {
                e || (l = E(l, e, n));
                var c = 0
                  , u = l.length;
                for (o.length += u; c < u; )
                    o[r++] = l[c++]
            } else
                n || (o[r++] = l)
        }
        return o
    };
    y.flatten = function(t, e) {
        return E(t, e, !1)
    }
    ,
    y.without = function(t) {
        return y.difference(t, u.call(arguments, 1))
    }
    ,
    y.uniq = y.unique = function(t, e, n, i) {
        y.isBoolean(e) || (i = n,
        n = e,
        e = !1),
        null != n && (n = b(n, i));
        for (var o = [], r = [], s = 0, a = S(t); s < a; s++) {
            var l = t[s]
              , c = n ? n(l, s, t) : l;
            e ? (s && r === c || o.push(l),
            r = c) : n ? y.contains(r, c) || (r.push(c),
            o.push(l)) : y.contains(o, l) || o.push(l)
        }
        return o
    }
    ,
    y.union = function() {
        return y.uniq(E(arguments, !0, !0))
    }
    ,
    y.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, o = S(t); i < o; i++) {
            var r = t[i];
            if (!y.contains(e, r)) {
                for (var s = 1; s < n && y.contains(arguments[s], r); s++)
                    ;
                s === n && e.push(r)
            }
        }
        return e
    }
    ,
    y.difference = function(t) {
        var e = E(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t)
        })
    }
    ,
    y.zip = function() {
        return y.unzip(arguments)
    }
    ,
    y.unzip = function(t) {
        for (var e = t && y.max(t, S).length || 0, n = Array(e), i = 0; i < e; i++)
            n[i] = y.pluck(t, i);
        return n
    }
    ,
    y.object = function(t, e) {
        for (var n = {}, i = 0, o = S(t); i < o; i++)
            e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }
    ,
    y.findIndex = e(1),
    y.findLastIndex = e(-1),
    y.sortedIndex = function(t, e, n, i) {
        n = b(n, i, 1);
        for (var o = n(e), r = 0, s = S(t); r < s; ) {
            var a = Math.floor((r + s) / 2);
            n(t[a]) < o ? r = a + 1 : s = a
        }
        return r
    }
    ,
    y.indexOf = n(1, y.findIndex, y.sortedIndex),
    y.lastIndexOf = n(-1, y.findLastIndex),
    y.range = function(t, e, n) {
        null == e && (e = t || 0,
        t = 0),
        n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), o = Array(i), r = 0; r < i; r++,
        t += n)
            o[r] = t;
        return o
    }
    ;
    var O = function(t, e, n, i, o) {
        if (!(i instanceof e))
            return t.apply(n, o);
        var r = k(t.prototype)
          , s = t.apply(r, o);
        return y.isObject(s) ? s : r
    };
    y.bind = function(t, e) {
        if (v && t.bind === v)
            return v.apply(t, u.call(arguments, 1));
        if (!y.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        var n = u.call(arguments, 2)
          , i = function() {
            return O(t, i, e, this, n.concat(u.call(arguments)))
        };
        return i
    }
    ,
    y.partial = function(t) {
        var e = u.call(arguments, 1)
          , n = function() {
            for (var i = 0, o = e.length, r = Array(o), s = 0; s < o; s++)
                r[s] = e[s] === y ? arguments[i++] : e[s];
            for (; i < arguments.length; )
                r.push(arguments[i++]);
            return O(t, n, this, this, r)
        };
        return n
    }
    ,
    y.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (i <= 1)
            throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++)
            n = arguments[e],
            t[n] = y.bind(t[n], t);
        return t
    }
    ,
    y.memoize = function(t, e) {
        var n = function(i) {
            var o = n.cache
              , r = "" + (e ? e.apply(this, arguments) : i);
            return y.has(o, r) || (o[r] = t.apply(this, arguments)),
            o[r]
        };
        return n.cache = {},
        n
    }
    ,
    y.delay = function(t, e) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }
    ,
    y.defer = y.partial(y.delay, y, 1),
    y.throttle = function(t, e, n) {
        var i, o, r, s = null, a = 0;
        n || (n = {});
        var l = function() {
            a = !1 === n.leading ? 0 : y.now(),
            s = null,
            r = t.apply(i, o),
            s || (i = o = null)
        };
        return function() {
            var c = y.now();
            a || !1 !== n.leading || (a = c);
            var u = e - (c - a);
            return i = this,
            o = arguments,
            u <= 0 || u > e ? (s && (clearTimeout(s),
            s = null),
            a = c,
            r = t.apply(i, o),
            s || (i = o = null)) : s || !1 === n.trailing || (s = setTimeout(l, u)),
            r
        }
    }
    ,
    y.debounce = function(t, e, n) {
        var i, o, r, s, a, l = function() {
            var c = y.now() - s;
            c < e && c >= 0 ? i = setTimeout(l, e - c) : (i = null,
            n || (a = t.apply(r, o),
            i || (r = o = null)))
        };
        return function() {
            r = this,
            o = arguments,
            s = y.now();
            var c = n && !i;
            return i || (i = setTimeout(l, e)),
            c && (a = t.apply(r, o),
            r = o = null),
            a
        }
    }
    ,
    y.wrap = function(t, e) {
        return y.partial(e, t)
    }
    ,
    y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }
    ,
    y.compose = function() {
        var t = arguments
          , e = t.length - 1;
        return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--; )
                i = t[n].call(this, i);
            return i
        }
    }
    ,
    y.after = function(t, e) {
        return function() {
            if (--t < 1)
                return e.apply(this, arguments)
        }
    }
    ,
    y.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)),
            t <= 1 && (e = null),
            n
        }
    }
    ,
    y.once = y.partial(y.before, 2);
    var D = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t))
            return [];
        if (h)
            return h(t);
        var e = [];
        for (var n in t)
            y.has(t, n) && e.push(n);
        return D && i(t, e),
        e
    }
    ,
    y.allKeys = function(t) {
        if (!y.isObject(t))
            return [];
        var e = [];
        for (var n in t)
            e.push(n);
        return D && i(t, e),
        e
    }
    ,
    y.values = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), o = 0; o < n; o++)
            i[o] = t[e[o]];
        return i
    }
    ,
    y.mapObject = function(t, e, n) {
        e = b(e, n);
        for (var i, o = y.keys(t), r = o.length, s = {}, a = 0; a < r; a++)
            i = o[a],
            s[i] = e(t[i], i, t);
        return s
    }
    ,
    y.pairs = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), o = 0; o < n; o++)
            i[o] = [e[o], t[e[o]]];
        return i
    }
    ,
    y.invert = function(t) {
        for (var e = {}, n = y.keys(t), i = 0, o = n.length; i < o; i++)
            e[t[n[i]]] = n[i];
        return e
    }
    ,
    y.functions = y.methods = function(t) {
        var e = [];
        for (var n in t)
            y.isFunction(t[n]) && e.push(n);
        return e.sort()
    }
    ,
    y.extend = $(y.allKeys),
    y.extendOwn = y.assign = $(y.keys),
    y.findKey = function(t, e, n) {
        e = b(e, n);
        for (var i, o = y.keys(t), r = 0, s = o.length; r < s; r++)
            if (i = o[r],
            e(t[i], i, t))
                return i
    }
    ,
    y.pick = function(t, e, n) {
        var i, o, r = {}, s = t;
        if (null == s)
            return r;
        y.isFunction(e) ? (o = y.allKeys(s),
        i = w(e, n)) : (o = E(arguments, !1, !1, 1),
        i = function(t, e, n) {
            return e in n
        }
        ,
        s = Object(s));
        for (var a = 0, l = o.length; a < l; a++) {
            var c = o[a]
              , u = s[c];
            i(u, c, s) && (r[c] = u)
        }
        return r
    }
    ,
    y.omit = function(t, e, n) {
        if (y.isFunction(e))
            e = y.negate(e);
        else {
            var i = y.map(E(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(i, e)
            }
        }
        return y.pick(t, e, n)
    }
    ,
    y.defaults = $(y.allKeys, !0),
    y.create = function(t, e) {
        var n = k(t);
        return e && y.extendOwn(n, e),
        n
    }
    ,
    y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
    }
    ,
    y.tap = function(t, e) {
        return e(t),
        t
    }
    ,
    y.isMatch = function(t, e) {
        var n = y.keys(e)
          , i = n.length;
        if (null == t)
            return !i;
        for (var o = Object(t), r = 0; r < i; r++) {
            var s = n[r];
            if (e[s] !== o[s] || !(s in o))
                return !1
        }
        return !0
    }
    ;
    var I = function(t, e, n, i) {
        if (t === e)
            return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof y && (t = t._wrapped),
        e instanceof y && (e = e._wrapped);
        var o = d.call(t);
        if (o !== d.call(e))
            return !1;
        switch (o) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e
        }
        var r = "[object Array]" === o;
        if (!r) {
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            var s = t.constructor
              , a = e.constructor;
            if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor"in t && "constructor"in e)
                return !1
        }
        n = n || [],
        i = i || [];
        for (var l = n.length; l--; )
            if (n[l] === t)
                return i[l] === e;
        if (n.push(t),
        i.push(e),
        r) {
            if ((l = t.length) !== e.length)
                return !1;
            for (; l--; )
                if (!I(t[l], e[l], n, i))
                    return !1
        } else {
            var c, u = y.keys(t);
            if (l = u.length,
            y.keys(e).length !== l)
                return !1;
            for (; l--; )
                if (c = u[l],
                !y.has(e, c) || !I(t[c], e[c], n, i))
                    return !1
        }
        return n.pop(),
        i.pop(),
        !0
    };
    y.isEqual = function(t, e) {
        return I(t, e)
    }
    ,
    y.isEmpty = function(t) {
        return null == t || (x(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length)
    }
    ,
    y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }
    ,
    y.isArray = f || function(t) {
        return "[object Array]" === d.call(t)
    }
    ,
    y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }
    ,
    y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return d.call(e) === "[object " + t + "]"
        }
    }),
    y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }
    ),
    y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }
    ,
    y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    }
    ,
    y.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" === d.call(t)
    }
    ,
    y.isNull = function(t) {
        return null === t
    }
    ,
    y.isUndefined = function(t) {
        return void 0 === t
    }
    ,
    y.has = function(t, e) {
        return null != t && p.call(t, e)
    }
    ,
    y.noConflict = function() {
        return o._ = r,
        this
    }
    ,
    y.identity = function(t) {
        return t
    }
    ,
    y.constant = function(t) {
        return function() {
            return t
        }
    }
    ,
    y.noop = function() {}
    ,
    y.property = T,
    y.propertyOf = function(t) {
        return null == t ? function() {}
        : function(e) {
            return t[e]
        }
    }
    ,
    y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t),
        function(e) {
            return y.isMatch(e, t)
        }
    }
    ,
    y.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = w(e, n, 1);
        for (var o = 0; o < t; o++)
            i[o] = e(o);
        return i
    }
    ,
    y.random = function(t, e) {
        return null == e && (e = t,
        t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    }
    ,
    y.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var j = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , N = y.invert(j)
      , M = function(t) {
        var e = function(e) {
            return t[e]
        }
          , n = "(?:" + y.keys(t).join("|") + ")"
          , i = RegExp(n)
          , o = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "" : "" + t,
            i.test(t) ? t.replace(o, e) : t
        }
    };
    y.escape = M(j),
    y.unescape = M(N),
    y.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n),
        y.isFunction(i) ? i.call(t) : i
    }
    ;
    var R = 0;
    y.uniqueId = function(t) {
        var e = ++R + "";
        return t ? t + e : e
    }
    ,
    y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/
      , H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , F = /\\|'|\r|\n|\u2028|\u2029/g
      , z = function(t) {
        return "\\" + H[t]
    };
    y.template = function(t, e, n) {
        !e && n && (e = n),
        e = y.defaults({}, e, y.templateSettings);
        var i = RegExp([(e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source].join("|") + "|$", "g")
          , o = 0
          , r = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
            return r += t.slice(o, a).replace(F, z),
            o = a + e.length,
            n ? r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (r += "';\n" + s + "\n__p+='"),
            e
        }),
        r += "';\n",
        e.variable || (r = "with(obj||{}){\n" + r + "}\n"),
        r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj","_",r)
        } catch (t) {
            throw t.source = r,
            t
        }
        var a = function(t) {
            return s.call(this, t, y)
        };
        return a.source = "function(" + (e.variable || "obj") + "){\n" + r + "}",
        a
    }
    ,
    y.chain = function(t) {
        var e = y(t);
        return e._chain = !0,
        e
    }
    ;
    var U = function(t, e) {
        return t._chain ? y(e).chain() : e
    };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var n = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return c.apply(t, arguments),
                U(this, n.apply(y, t))
            }
        })
    }
    ,
    y.mixin(y),
    y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
            U(this, n)
        }
    }),
    y.each(["concat", "join", "slice"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            return U(this, e.apply(this._wrapped, arguments))
        }
    }),
    y.prototype.value = function() {
        return this._wrapped
    }
    ,
    y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
    y.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}
.call(this),
function() {
    var t, e, n, i, o, r, s, a, l, c;
    e = window.device,
    t = {},
    window.device = t,
    i = window.document.documentElement,
    c = window.navigator.userAgent.toLowerCase(),
    t.ios = function() {
        return t.iphone() || t.ipod() || t.ipad()
    }
    ,
    t.iphone = function() {
        return !t.windows() && o("iphone")
    }
    ,
    t.ipod = function() {
        return o("ipod")
    }
    ,
    t.ipad = function() {
        return o("ipad")
    }
    ,
    t.android = function() {
        return !t.windows() && o("android")
    }
    ,
    t.androidPhone = function() {
        return t.android() && o("mobile")
    }
    ,
    t.androidTablet = function() {
        return t.android() && !o("mobile")
    }
    ,
    t.blackberry = function() {
        return o("blackberry") || o("bb10") || o("rim")
    }
    ,
    t.blackberryPhone = function() {
        return t.blackberry() && !o("tablet")
    }
    ,
    t.blackberryTablet = function() {
        return t.blackberry() && o("tablet")
    }
    ,
    t.windows = function() {
        return o("windows")
    }
    ,
    t.windowsPhone = function() {
        return t.windows() && o("phone")
    }
    ,
    t.windowsTablet = function() {
        return t.windows() && o("touch") && !t.windowsPhone()
    }
    ,
    t.fxos = function() {
        return (o("(mobile;") || o("(tablet;")) && o("; rv:")
    }
    ,
    t.fxosPhone = function() {
        return t.fxos() && o("mobile")
    }
    ,
    t.fxosTablet = function() {
        return t.fxos() && o("tablet")
    }
    ,
    t.meego = function() {
        return o("meego")
    }
    ,
    t.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }
    ,
    t.nodeWebkit = function() {
        return "object" == typeof window.process
    }
    ,
    t.mobile = function() {
        return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
    }
    ,
    t.tablet = function() {
        return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
    }
    ,
    t.desktop = function() {
        return !t.tablet() && !t.mobile()
    }
    ,
    t.television = function() {
        var t, e = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
        for (t = 0; t < e.length; ) {
            if (o(e[t]))
                return !0;
            t++
        }
        return !1
    }
    ,
    t.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }
    ,
    t.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }
    ,
    t.noConflict = function() {
        return window.device = e,
        this
    }
    ,
    o = function(t) {
        return -1 !== c.indexOf(t)
    }
    ,
    s = function(t) {
        var e;
        return e = new RegExp(t,"i"),
        i.className.match(e)
    }
    ,
    n = function(t) {
        var e = null;
        s(t) || (e = i.className.replace(/^\s+|\s+$/g, ""),
        i.className = e + " " + t)
    }
    ,
    l = function(t) {
        s(t) && (i.className = i.className.replace(" " + t, ""))
    }
    ,
    t.ios() ? t.ipad() ? n("ios ipad tablet") : t.iphone() ? n("ios iphone mobile") : t.ipod() && n("ios ipod mobile") : t.android() ? n(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? n(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? n(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "desktop") : t.fxos() ? n(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? n("meego mobile") : t.nodeWebkit() ? n("node-webkit") : t.television() ? n("television") : t.desktop() && n("desktop"),
    t.cordova() && n("cordova"),
    r = function() {
        t.landscape() ? (l("portrait"),
        n("landscape")) : (l("landscape"),
        n("portrait"))
    }
    ,
    a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize",
    window.addEventListener ? window.addEventListener(a, r, !1) : window.attachEvent ? window.attachEvent(a, r) : window[a] = r,
    r(),
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? module.exports = t : window.device = t
}
.call(this),
angular.module("envConfig", []).constant("EnvironmentConfig", {
    botTemplate: "./botResponseTemplate.html",
    cssPath: "http://localhost:4200/assets/widget/",
    jsPath: "http://localhost:4200/assets/widget/",
    widgetTemplate: "http://localhost:4200/assets/widget/template.html",
    webSocketPath: "http://localhost:4000/",
    allowCrossDomainAccess: "http://localhost*/**",
    slickPath: "http://localhost:4200/assets/widget/angular-slick.js",
    angSlickPath: "http://localhost:4200/assets/widget/angular-slick.js"
});
var app = angular.module("myApp", ["ui.router", "ngAnimate", "envConfig", "ngSanitize", "slick"]);
app.config(["$locationProvider", "$httpProvider", "$sceProvider", "$stateProvider", "$urlRouterProvider", "$sceDelegateProvider", "EnvironmentConfig", function(t, e, n, i, o, r, s) {
    r.resourceUrlWhitelist(["self", s.allowCrossDomainAccess])
}
]);
var websocket;
app.directive("user", function() {
    return {
        restrict: "E",
        scope: {
            entity: "="
        },
        template: '<div class="card"><div class="item item-text-wrap">{{entity}}</div></div>',
        link: function(t, e, n, i) {}
    }
}),
app.directive("backImg", function() {
    return function(t, e, n) {
        var i = n.backImg;
        e.css({
            width: "100%",
            height: "153px",
            "background-image": "url(" + i + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat"
        })
    }
}),
app.filter("newline", ["$sce", function(t) {
    return function(e) {
        if (void 0 != e && null != e.toString() && "" != e && e && null != e)
            return e = e.toString().replace(/\r\n|\r|\n/g, "<br />"),
            t.trustAsResourceUrl(_.unescape(e))
    }
}
]),
app.directive("bots", ["$compile", "$sce", "$window", "EnvironmentConfig", function(t, e, n, i) {
    return {
        restrict: "E",
        scope: {
            entity: "="
        },
        templateUrl: e.trustAsResourceUrl(i.botTemplate),
        link: function(t, i, o, r) {
            var s = document.getElementById("myModal")
              , a = document.getElementById("img01")
              , l = document.getElementById("caption");
            t.prevImagePopup = function(e) {
                s.style.display = "block",
                a.src = t.formatUrl(e),
                l.innerHTML = this.alt
            }
            ,
            t.openNewTab = function(t) {
                n.open(t, "_blank")
            }
            ,
            document.getElementsByClassName("close")[0].onclick = function() {
                s.style.display = "none"
            }
            ,
            t.trust = function(t) {
                return e.trustAsResourceUrl(_.unescape(t))
            }
            ,
            t.formatUrl = function(t) {
                return "data:image/png;base64," + t
            }
            ,
            t.btnClick = function(e, n) {
                void 0 != n && (jQuery("#userInputBox").focus(),
                t.$parent.btnClick(e, n))
            }
        }
    }
}
]),
app.controller("chatCnt", ["$scope", "$http", "$location", "$rootScope", "$sce", "EnvironmentConfig", function(t, e, n, i, o, r) {
    function s() {
        if (localStorage.getItem("sender"))
            return localStorage.getItem("sender");
        var t = uuid.v4();
        return localStorage.setItem("sender", t),
        t
    }
    t.disableTxt = !1,
    t.loadWidget = !1,
    t.subForm = function(e) {
        if (null != e && void 0 != e && "" != e) {
            var n = document.getElementById("msgContainer");
            jQuery("#msgContainer").animate({
                scrollTop: n.scrollHeight
            }, "slow"),
            websocket.send(JSON.stringify({
                message: {
                    value: e
                },
                botId: window.btid,
                secret: window.btsecret,
                sender: s()
            })),
            t.messages.push({
                val: e,
                msgSender: "user"
            }),
            t.usrInput = ""
        }
    }
    ,
    t.btnClick = function(e, n) {
        switch (e) {
        case "postBack":
            websocket.send(JSON.stringify({
                message: {
                    value: n
                },
                botId: window.btid,
                secret: window.btsecret,
                sender: s()
            })),
            t.messages.push({
                val: n,
                msgSender: "user"
            });
            break;
        case "webUrl":
        case "signin":
            var i = window.open(n, "_blank");
            i.focus()
        }
    }
    ,
    t.loadWidgetPopup = function() {
        0 == t.loadWidget ? (t.loadWidget = !0,
        a && websocket.send(JSON.stringify({
            message: {
                type: "event",
                value: "add"
            },
            botId: window.btid,
            secret: window.btsecret,
            sender: s(),
            device: device.mobile()
        })),
        a = !1) : t.loadWidget = !1
    }
    ;
    var a = !0
      , l = function() {
        websocket = new WebSocket(r.webSocketPath.replace("http", "ws")),
        websocket.onmessage = function(e) {
            JSON.parse(e.data).disable && (t.disableTxt = !0);
            var n = document.getElementById("msgContainer");
            jQuery("#msgContainer").animate({
                scrollTop: n.scrollHeight
            }, "slow"),
            t.messages.push({
                val: JSON.parse(e.data),
                msgSender: "bot"
            }),
            t.$apply()
        }
        ,
        websocket.onerror = function(t) {}
        ,
        websocket.onclose = function(t) {
            setTimeout(function() {
                l()
            }, 5e3)
        }
    };
    l(),
    t.sendMsg = function(t) {
        return websocket.send(JSON.stringify({
            message: {
                value: t
            },
            botId: window.btid,
            secret: window.btsecret,
            sender: s()
        })),
        !1
    }
    ,
    t.messages = []
}
]);
