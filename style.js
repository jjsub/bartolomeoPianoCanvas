(function() {
    var k, l = this,
        n = function(a) {
            return void 0 !== a
        }, aa = function() {}, ba = function(a) {
            a.Oa = function() {
                return a.Va ? a.Va : a.Va = new a
            }
        }, ca = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" ==
                        c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
                else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }, da = function(a) {
            return "array" == ca(a)
        }, ea = function(a) {
            var b = ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }, p = function(a) {
            return "string" == typeof a
        }, fa = function(a) {
            return "number" == typeof a
        }, ga = function(a) {
            return "function" == ca(a)
        }, ha = function(a) {
            var b = typeof a;
            return "object" ==
                b && null != a || "function" == b
        }, ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0,
        ka = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, la = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }, ma = function(a, b, c) {
            ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                ka : la;
            return ma.apply(null, arguments)
        }, na = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }, q = Date.now || function() {
            return +new Date
        }, oa = function(a) {
            a = a.split(".");
            var b = l;
            a[0] in b || !b.execScript || b.execScript("var " + a[0]);
            for (var c; a.length && (c = a.shift());)!a.length && n(!0) ? b[c] = !0 : b[c] ? b = b[c] : b = b[c] = {}
        }, r = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.I = b.prototype;
            a.prototype = new c;
            a.jb = function(a,
                c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[c].apply(a, g)
            }
        };
    var pa = [
        [
            [0, 0, 0, 0, 187, 187]
        ],
        [
            [33, 19, 705, 144, 9, 8],
            [28, 28, 688, 167, 14, 21],
            [10, 49, 189, 0, 174, 99]
        ],
        [
            [26, 19, 993, 136, 16, 14],
            [10, 33, 365, 0, 168, 27],
            [24, 62, 862, 45, 160, 89]
        ],
        [
            [26, 22, 975, 136, 16, 12],
            [28, 37, 738, 156, 4, 4],
            [36, 41, 743, 168, 3, 4],
            [10, 46, 535, 0, 168, 11],
            [27, 57, 720, 173, 4, 4],
            [25, 68, 511, 123, 158, 83]
        ],
        [
            [26, 23, 975, 150, 16, 12],
            [28, 38, 726, 174, 4, 4],
            [36, 42, 743, 168, 3, 4],
            [11, 47, 705, 0, 166, 9],
            [27, 58, 735, 144, 4, 4],
            [38, 83, 732, 170, 4, 4],
            [27, 105, 732, 164, 4, 4],
            [37, 127, 746, 144, 3, 4],
            [27, 131, 727, 151, 4, 4],
            [27, 138, 689, 150, 14, 4]
        ],
        [
            [28,
                24, 1011, 136, 13, 8
            ],
            [36, 43, 743, 168, 3, 4],
            [27, 50, 671, 136, 150, 6],
            [27, 59, 723, 144, 4, 4],
            [27, 83, 671, 165, 15, 5],
            [27, 106, 732, 164, 4, 4],
            [37, 128, 738, 168, 3, 3],
            [27, 132, 726, 168, 4, 4]
        ],
        [
            [28, 24, 1011, 154, 13, 8],
            [11, 50, 535, 13, 165, 6],
            [27, 59, 720, 161, 4, 4],
            [27, 106, 720, 167, 4, 4]
        ],
        [
            [26, 23, 671, 144, 16, 12],
            [28, 38, 738, 162, 4, 4],
            [36, 42, 741, 144, 3, 5],
            [11, 47, 705, 11, 166, 9],
            [27, 58, 735, 150, 4, 4],
            [27, 83, 671, 158, 15, 5],
            [27, 105, 720, 167, 4, 4],
            [37, 127, 744, 154, 2, 2],
            [38, 129, 746, 150, 2, 2],
            [27, 131, 726, 161, 4, 5],
            [27, 138, 689, 144, 14, 4]
        ],
        [
            [26, 20, 993, 152, 16,
                14
            ],
            [14, 35, 700, 22, 163, 21],
            [27, 56, 729, 144, 4, 5],
            [25, 68, 351, 101, 158, 83]
        ],
        [
            [11, 50, 1011, 146, 13, 6],
            [31, 19, 1011, 164, 11, 9],
            [26, 31, 823, 136, 150, 28],
            [24, 62, 700, 45, 160, 89]
        ],
        [
            [12, 50, 720, 156, 5, 3],
            [35, 20, 716, 150, 5, 4],
            [28, 28, 704, 156, 14, 19],
            [21, 48, 535, 21, 163, 100]
        ],
        [
            [12, 50, 738, 173, 3, 3],
            [19, 52, 716, 144, 5, 4],
            [29, 28, 743, 174, 3, 3],
            [36, 31, 732, 157, 4, 5],
            [28, 36, 688, 158, 14, 7],
            [24, 47, 189, 101, 160, 99]
        ]
    ];
    var qa, t, ra, sa, u, ta, ua, va = Math.floor(1E3 / 24),
        wa = [6, 8, 10, 13, 11, 11, 15, 13, 13, 18, 17, 18, 13, 10, 6, 8, 10, 3, 13, 11, 10, 8, 6, 1, 6, 5];
    var v = function() {
        this.V = this.V;
        this.S = this.S
    };
    v.prototype.V = !1;
    v.prototype.P = function() {
        this.V || (this.V = !0, this.F())
    };
    var xa = function(a, b) {
        a.V ? b.call(void 0) : (a.S || (a.S = []), a.S.push(n(void 0) ? ma(b, void 0) : b))
    };
    v.prototype.F = function() {
        if (this.S)
            for (; this.S.length;) this.S.shift()()
    };
    var ya = function(a) {
        a && "function" == typeof a.P && a.P()
    }, za = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                ea(d) ? za.apply(null, d) : ya(d)
            }
        };
    var Aa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }, Ia = function(a) {
            if (!Ba.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Da, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"));
            return a
        }, Ca = /&/g,
        Da = /</g,
        Ea = />/g,
        Fa = /"/g,
        Ga = /'/g,
        Ha = /\x00/g,
        Ba = /[\x00&<>"']/,
        Ja = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ka;
    var w = Array.prototype,
        La = w.indexOf ? function(a, b, c) {
            return w.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, Ma = w.forEach ? function(a, b, c) {
            w.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, Na = w.filter ? function(a, b, c) {
            return w.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = p(a) ?
                    a.split("") : a, h = 0; h < d; h++)
                if (h in g) {
                    var m = g[h];
                    b.call(c, m, h, a) && (e[f++] = m)
                }
            return e
        }, Oa = function(a, b) {
            var c = La(a, b),
                d;
            (d = 0 <= c) && w.splice.call(a, c, 1);
            return d
        }, Pa = function(a) {
            return w.concat.apply(w, arguments)
        }, Qa = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Ra = function() {
        return null
    };
    var Sa = function(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    var Ta = "StopIteration" in l ? l.StopIteration : {
        message: "StopIteration",
        stack: ""
    }, Ua = function() {};
    Ua.prototype.next = function() {
        throw Ta;
    };
    Ua.prototype.w = function() {
        return this
    };
    var Va = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }, Xa = function() {
            var a = Wa,
                b;
            for (b in a) return !1;
            return !0
        }, Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Za = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ya.length; f++) c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }, $a = function(a) {
            var b = arguments.length;
            if (1 == b && da(arguments[0])) return $a.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var bb = function(a, b) {
        this.o = {};
        this.i = [];
        this.v = this.s = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("a");
            for (var d = 0; d < c; d += 2) ab(this, arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof bb) e = a.la(), d = a.ma();
            else {
                var c = [],
                    f = 0;
                for (e in a) c[f++] = e;
                e = c;
                c = [];
                f = 0;
                for (d in a) c[f++] = a[d];
                d = c
            }
            for (c = 0; c < e.length; c++) ab(this, e[c], d[c])
        }
    };
    bb.prototype.ma = function() {
        db(this);
        for (var a = [], b = 0; b < this.i.length; b++) a.push(this.o[this.i[b]]);
        return a
    };
    bb.prototype.la = function() {
        db(this);
        return this.i.concat()
    };
    bb.prototype.remove = function(a) {
        return eb(this.o, a) ? (delete this.o[a], this.s--, this.v++, this.i.length > 2 * this.s && db(this), !0) : !1
    };
    var db = function(a) {
        if (a.s != a.i.length) {
            for (var b = 0, c = 0; b < a.i.length;) {
                var d = a.i[b];
                eb(a.o, d) && (a.i[c++] = d);
                b++
            }
            a.i.length = c
        }
        if (a.s != a.i.length) {
            for (var e = {}, c = b = 0; b < a.i.length;) d = a.i[b], eb(e, d) || (a.i[c++] = d, e[d] = 1), b++;
            a.i.length = c
        }
    }, fb = function(a, b) {
            return eb(a.o, b) ? a.o[b] : void 0
        }, ab = function(a, b, c) {
            eb(a.o, b) || (a.s++, a.i.push(b), a.v++);
            a.o[b] = c
        };
    bb.prototype.forEach = function(a, b) {
        for (var c = this.la(), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, fb(this, e), e, this)
        }
    };
    bb.prototype.clone = function() {
        return new bb(this)
    };
    bb.prototype.w = function(a) {
        db(this);
        var b = 0,
            c = this.v,
            d = this,
            e = new Ua;
        e.next = function() {
            if (c != d.v) throw Error("b");
            if (b >= d.i.length) throw Ta;
            var e = d.i[b++];
            return a ? e : d.o[e]
        };
        return e
    };
    var eb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var gb;
    a: {
        var hb = l.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                gb = ib;
                break a
            }
        }
        gb = ""
    }
    var x = function(a) {
        return -1 != gb.indexOf(a)
    };
    var jb = function() {
        return x("Edge") || x("Trident") || x("MSIE")
    };
    var kb = function() {
        return x("Edge")
    };
    var lb = x("Opera") || x("OPR"),
        y = jb(),
        A = x("Gecko") && !(-1 != gb.toLowerCase().indexOf("webkit") && !kb()) && !(x("Trident") || x("MSIE")) && !kb(),
        B = -1 != gb.toLowerCase().indexOf("webkit") && !kb(),
        mb = x("Macintosh"),
        nb = x("Windows"),
        ob = x("Linux") || x("CrOS"),
        pb = function() {
            var a = gb;
            if (A) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (y && kb()) return /Edge\/([\d\.]+)/.exec(a);
            if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (B) return /WebKit\/(\S+)/.exec(a)
        }, qb = function() {
            var a = l.document;
            return a ? a.documentMode : void 0
        }, rb =
            function() {
                if (lb && l.opera) {
                    var a = l.opera.version;
                    return ga(a) ? a() : a
                }
                var a = "",
                    b = pb();
                b && (a = b ? b[1] : "");
                return y && !kb() && (b = qb(), b > parseFloat(a)) ? String(b) : a
        }(),
        sb = {}, C = function(a) {
            var b;
            if (!(b = sb[a])) {
                b = 0;
                for (var c = Aa(String(rb)).split("."), d = Aa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "",
                        m = RegExp("(\\d*)(\\D*)", "g"),
                        z = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var V = m.exec(g) || ["", "", ""],
                            cb = z.exec(h) || ["", "", ""];
                        if (0 == V[0].length && 0 == cb[0].length) break;
                        b = Ja(0 ==
                            V[1].length ? 0 : parseInt(V[1], 10), 0 == cb[1].length ? 0 : parseInt(cb[1], 10)) || Ja(0 == V[2].length, 0 == cb[2].length) || Ja(V[2], cb[2])
                    } while (0 == b)
                }
                b = sb[a] = 0 <= b
            }
            return b
        }, ub = function(a) {
            return y && (kb() || tb >= a)
        }, vb = l.document,
        wb = qb(),
        tb = !vb || !y || !wb && kb() ? void 0 : wb || ("CSS1Compat" == vb.compatMode ? parseInt(rb, 10) : 5);
    var xb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        zb = function(a) {
            if (yb) {
                yb = !1;
                var b = l.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (c = zb(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) throw yb = !0, Error();
                }
            }
            return a.match(xb)
        }, yb = B,
        Ab = function(a, b) {
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("="),
                    f = null,
                    g = null;
                0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
            }
        };
    var Bb = function(a, b) {
        this.v = this.C = this.s = "";
        this.B = null;
        this.A = this.w = "";
        this.i = !1;
        var c;
        a instanceof Bb ? (this.i = n(b) ? b : a.i, Cb(this, a.s), this.C = a.C, this.v = a.v, Db(this, a.B), this.w = a.w, Eb(this, a.o.clone()), this.A = a.A) : a && (c = zb(String(a))) ? (this.i = !! b, Cb(this, c[1] || "", !0), this.C = Fb(c[2] || ""), this.v = Fb(c[3] || "", !0), Db(this, c[4]), this.w = Fb(c[5] || "", !0), Eb(this, c[6] || "", !0), this.A = Fb(c[7] || "")) : (this.i = !! b, this.o = new D(null, 0, this.i))
    };
    Bb.prototype.toString = function() {
        var a = [],
            b = this.s;
        b && a.push(Gb(b, Hb, !0), ":");
        if (b = this.v) {
            a.push("//");
            var c = this.C;
            c && a.push(Gb(c, Hb, !0), "@");
            a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.B;
            null != b && a.push(":", String(b))
        }
        if (b = this.w) this.v && "/" != b.charAt(0) && a.push("/"), a.push(Gb(b, "/" == b.charAt(0) ? Ib : Jb, !0));
        (b = this.o.toString()) && a.push("?", b);
        (b = this.A) && a.push("#", Gb(b, Kb));
        return a.join("")
    };
    Bb.prototype.clone = function() {
        return new Bb(this)
    };
    var Cb = function(a, b, c) {
        a.s = c ? Fb(b, !0) : b;
        a.s && (a.s = a.s.replace(/:$/, ""))
    }, Db = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("c`" + b);
                a.B = b
            } else a.B = null
        }, Eb = function(a, b, c) {
            b instanceof D ? (a.o = b, Lb(a.o, a.i)) : (c || (b = Gb(b, Mb)), a.o = new D(b, 0, a.i))
        }, Fb = function(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
        }, Gb = function(a, b, c) {
            return p(a) ? (a = encodeURI(a).replace(b, Nb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }, Nb = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) +
                (a & 15).toString(16)
        }, Hb = /[#\/\?@]/g,
        Jb = /[\#\?:]/g,
        Ib = /[\#\?]/g,
        Mb = /[\#\?@]/g,
        Kb = /#/g,
        D = function(a, b, c) {
            this.s = this.i = null;
            this.o = a || null;
            this.v = !! c
        }, Ob = function(a) {
            a.i || (a.i = new bb, a.s = 0, a.o && Ab(a.o, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    D.prototype.add = function(a, b) {
        Ob(this);
        this.o = null;
        a = Pb(this, a);
        var c = fb(this.i, a);
        c || ab(this.i, a, c = []);
        c.push(b);
        this.s++;
        return this
    };
    D.prototype.remove = function(a) {
        Ob(this);
        a = Pb(this, a);
        return eb(this.i.o, a) ? (this.o = null, this.s -= fb(this.i, a).length, this.i.remove(a)) : !1
    };
    var Qb = function(a, b) {
        Ob(a);
        b = Pb(a, b);
        return eb(a.i.o, b)
    };
    D.prototype.la = function() {
        Ob(this);
        for (var a = this.i.ma(), b = this.i.la(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    D.prototype.ma = function(a) {
        Ob(this);
        var b = [];
        if (p(a)) Qb(this, a) && (b = Pa(b, fb(this.i, Pb(this, a))));
        else {
            a = this.i.ma();
            for (var c = 0; c < a.length; c++) b = Pa(b, a[c])
        }
        return b
    };
    D.prototype.toString = function() {
        if (this.o) return this.o;
        if (!this.i) return "";
        for (var a = [], b = this.i.la(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ma(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.o = a.join("&")
    };
    D.prototype.clone = function() {
        var a = new D;
        a.o = this.o;
        this.i && (a.i = this.i.clone(), a.s = this.s);
        return a
    };
    var Pb = function(a, b) {
        var c = String(b);
        a.v && (c = c.toLowerCase());
        return c
    }, Lb = function(a, b) {
            b && !a.v && (Ob(a), a.o = null, a.i.forEach(function(a, b) {
                var e = b.toLowerCase();
                b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.o = null, ab(this.i, Pb(this, e), Qa(a)), this.s += a.length))
            }, a));
            a.v = b
        };
    var Tb = function(a) {
        var b = new Image,
            c = Rb,
            d = "";
        b.onerror = b.onload = b.onabort = function() {
            delete Sb[c]
        };
        Sb[c] = b; - 1 != a.search("&ei=") || (d = "&ei=");
        a = "/gen_204?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + q();
        /^http:/i.test(a) && "https:" == window.location.protocol ? delete Sb[c] : (b.src = a, Rb = c + 1)
    }, Sb = [],
        Rb = 0;
    var Ub, Vb = navigator.userAgent,
        Wb = -1 != Vb.indexOf("iPad") || -1 != Vb.indexOf("iPhone") || -1 != Vb.indexOf("iPod") || -1 != Vb.indexOf("Android") || -1 != Vb.indexOf("Mobile") || -1 != Vb.indexOf("Silk"),
        Xb = 0 <= Vb.indexOf("MSIE"),
        Yb = Xb && 0 <= Vb.indexOf("MSIE 8."),
        Zb = function() {
            var a = document.createElement("div");
            E(a, "position", "absolute");
            Xb && !Yb && E(a, "background-color", "rgba(255,255,255,.01)");
            return a
        }, E = function(a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var d = arguments[c],
                    e = arguments[c + 1],
                    f = a.style;
                f && d in f ? f[d] = e : d in
                    a ? a[d] = e : Xb && f && "opacity" == d && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
            }
        }, $b = ["Moz", "ms", "O", "webkit"],
        ac = function(a) {
            for (var b = 0, c; c = $b[b++];) a.style[c + "Transition"] = "250ms opacity";
            a.style.transition = "250ms opacity"
        }, bc = ["", "moz", "ms", "o", "webkit"],
        cc = function(a) {
            var b = document;
            if (!b) return null;
            for (var c = 0; c < bc.length; c++) {
                var d = bc[c],
                    e = a;
                0 < d.length && (e = a.charAt(0).toUpperCase() + a.substr(1));
                d += e;
                if ("undefined" != typeof b[d]) return d
            }
            return null
        },
        dc = function() {
            var a = google.doodle ? google.doodle.url : "";
            if (a)
                if (google.nav && google.nav.go) {
                    var b = a;
                    if (0 == a.indexOf("/search")) {
                        b = new Bb(window.location);
                        b.w = "/search";
                        for (var a = (a instanceof Bb ? a.clone() : new Bb(a, void 0)).o, c = a.la(), d = 0; d < c.length; d++) {
                            var e = c[d],
                                f = e,
                                g = e ? a.ma(e) : [],
                                e = b.o,
                                g = 0 < g.length ? String(g[0]) : void 0;
                            Ob(e);
                            e.o = null;
                            f = Pb(e, f);
                            Qb(e, f) && (e.s -= fb(e.i, f).length);
                            ab(e.i, f, [g]);
                            e.s++
                        }
                        b = b.toString()
                    }
                    google.nav.go(b)
                } else window.parent ? window.parent.location.assign(a) : window.location.assign(a)
        },
        ec = function(a) {
            var b = window.google ? window.google.doodle : null;
            return b && void 0 != b[a] ? b[a] : ""
        }, fc = ec("alt"),
        gc = function() {
            for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], b = 0; b < a.length; b++) {
                var c = window[a[b]];
                if (c) return function(a, b, d) {
                    return c(function(b) {
                        return a.call(d, b)
                    }, b)
                }
            }
            var d = 0,
                e = 33,
                f = 50;
            return function(a, b, c) {
                b && 0 > --f && (1.25 < b / e ? (d = 0, e = Math.min(66, ++e)) : 10 < ++d && (d = 0, e = Math.max(17, --e)));
                window.setTimeout(function(b) {
                    a.call(c,
                        b)
                }, e)
            }
        }, hc = function(a, b, c) {
            hc = gc();
            return hc(a, b, c)
        }, ic = function(a) {
            if (window.google && window.google.log) {
                var b;
                Ub || (b = document.getElementById("hplogoved")) && (Ub = b.getAttribute("data-ved"));
                (b = Ub) && (a += "&ved=" + b);
                window.google.log("doodle", a)
            } else Tb(a)
        };
    var mc = function(a, b, c) {
        v.call(this);
        this.C = a;
        this.H = b;
        this.K = c;
        this.o = this.i = this.w = !1;
        this.B = q();
        this.J = cc("hidden");
        if ((this.v = (this.A = cc("visibilityState")) ? this.A.replace(/state$/i, "change").toLowerCase() : null) && document.addEventListener) {
            var d = this;
            this.D = function() {
                var a = document[d.A];
                d.w = document[d.J] || "hidden" == a;
                d.w ? jc(d) : kc(d)
            };
            document.addEventListener(this.v, this.D, !1)
        }
        lc(this)
    };
    r(mc, v);
    mc.prototype.F = function() {
        window.clearTimeout(this.s);
        this.v && document.removeEventListener && document.removeEventListener(this.v, this.D, !1);
        mc.I.F.call(this)
    };
    var jc = function(a) {
        var b = a.w || a.i;
        a.o && !b ? (a.o = !1, a.K(), lc(a)) : !a.o && b && (a.o = !0, a.H())
    }, lc = function(a) {
            a.s && window.clearTimeout(a.s);
            var b = Math.max(100, a.C - nc(a));
            a.s = window.setTimeout(function() {
                a.s = null;
                a.i = nc(a) >= a.C;
                a.i || lc(a);
                jc(a)
            }, b)
        }, nc = function(a) {
            return q() - a.B
        }, kc = function(a) {
            a.B = q();
            a.i = !1;
            jc(a)
        };
    var oc = function(a, b) {
        google && google.doodle && (b && (google.doodle.cpDestroy = b), google.doodle.cpInit = function() {
            b && b();
            a()
        })
    }, pc = function(a, b, c) {
            if (google) {
                var d = function() {
                    var a = google.msg && google.msg.unlisten;
                    a && (a(106, d), c && a(94, c));
                    b();
                    return !0
                }, e = function() {
                        var a = document.getElementById("hplogo");
                        a && "hidden" != a.style.visibility && (a = google.msg && google.msg.listen, google.psy && google.psy.q && a && (a(106, d), c && a(94, c)))
                    };
                e();
                google.doodle && google.doodle.jesr || (oa("google.doodle.jesr"), google.raas && google.raas("doodle", {
                    init: function() {
                        e();
                        google.doodle.jesrd && (a(), google.doodle.jesrd = !1)
                    },
                    dispose: function() {
                        d();
                        google.doodle.jesrd = !0
                    }
                }))
            }
        };
    $a("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var F = function(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    };
    F.prototype.clone = function() {
        return new F(this.x, this.y)
    };
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var qc = !y || ub(9);
    !A && !y || y && ub(9) || A && C("1.9.1");
    y && C("9");
    var tc = function(a) {
        return a ? new rc(sc(a)) : Ka || (Ka = new rc)
    }, vc = function(a, b) {
            Va(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in uc ? a.setAttribute(uc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }, uc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }, wc = function(a) {
            var b = B || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return y && C("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        }, yc = function(a, b, c) {
            function d(c) {
                c && b.appendChild(p(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !ea(f) || ha(f) && 0 < f.nodeType ? d(f) : Ma(xc(f) ? Qa(f) : f, d)
            }
        }, zc = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Ac = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        }, sc = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }, xc = function(a) {
            if (a && "number" == typeof a.length) {
                if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ga(a)) return "function" == typeof a.item
            }
            return !1
        }, rc = function(a) {
            this.i = a || l.document || document
        };
    rc.prototype.G = function(a) {
        return p(a) ? this.i.getElementById(a) : a
    };
    rc.prototype.o = function(a, b, c) {
        var d = this.i,
            e = arguments,
            f = e[0],
            g = e[1];
        if (!qc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Ia(g.name), '"');
            if (g.type) {
                f.push(' type="', Ia(g.type), '"');
                var h = {};
                Za(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (p(g) ? f.className = g : da(g) ? f.className = g.join(" ") : vc(f, g));
        2 < e.length && yc(d, f, e);
        return f
    };
    rc.prototype.contains = Ac;
    var Bc = function(a) {
        Bc[" "](a);
        return a
    };
    Bc[" "] = aa;
    var Cc = !y || ub(9),
        Dc = !y || ub(9),
        Ec = y && !C("9");
    !B || C("528");
    A && C("1.9b") || y && C("8") || lb && C("9.5") || B && C("528");
    A && !C("8") || y && C("9");
    var G = function(a, b) {
        this.type = a;
        this.s = this.B = b;
        this.C = !1;
        this.Xa = !0
    };
    G.prototype.stopPropagation = function() {
        this.C = !0
    };
    G.prototype.preventDefault = function() {
        this.Xa = !1
    };
    var Fc = B ? "webkitTransitionEnd" : lb ? "otransitionend" : "transitionend";
    var H = function(a, b) {
        G.call(this, a ? a.type : "");
        this.s = this.B = null;
        this.o = this.clientY = this.clientX = this.V = this.S = 0;
        this.H = this.A = this.w = this.D = !1;
        this.v = this.state = null;
        a && Gc(this, a, b)
    };
    r(H, G);
    var Hc = [1, 4, 2],
        Gc = function(a, b, c) {
            a.type = b.type;
            a.B = b.target || b.srcElement;
            a.s = c;
            if ((c = b.relatedTarget) && A) try {
                Bc(c.nodeName)
            } catch (d) {}
            a.S = B || void 0 !== b.offsetX ? b.offsetX : b.layerX;
            a.V = B || void 0 !== b.offsetY ? b.offsetY : b.layerY;
            a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
            a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
            a.o = b.keyCode || 0;
            a.D = b.ctrlKey;
            a.w = b.altKey;
            a.A = b.shiftKey;
            a.H = b.metaKey;
            a.state = b.state;
            a.v = b;
            b.defaultPrevented && a.preventDefault()
        };
    H.prototype.stopPropagation = function() {
        H.I.stopPropagation.call(this);
        this.v.stopPropagation ? this.v.stopPropagation() : this.v.cancelBubble = !0
    };
    H.prototype.preventDefault = function() {
        H.I.preventDefault.call(this);
        var a = this.v;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ec) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    H.prototype.i = function() {
        return this.v
    };
    var Ic = "closure_listenable_" + (1E6 * Math.random() | 0),
        Jc = 0;
    var Kc = function(a, b, c, d, e) {
        this.listener = a;
        this.i = null;
        this.src = b;
        this.type = c;
        this.xa = !! d;
        this.Aa = e;
        this.Pa = ++Jc;
        this.qa = this.wa = !1
    }, Lc = function(a) {
            a.qa = !0;
            a.listener = null;
            a.i = null;
            a.src = null;
            a.Aa = null
        };
    var Mc = function(a) {
        this.src = a;
        this.i = {};
        this.o = 0
    };
    Mc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.i[f];
        a || (a = this.i[f] = [], this.o++);
        var g = Nc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.wa = !1)) : (b = new Kc(b, this.src, f, !! d, e), b.wa = c, a.push(b));
        return b
    };
    Mc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.i)) return !1;
        var e = this.i[a];
        b = Nc(e, b, c, d);
        return -1 < b ? (Lc(e[b]), w.splice.call(e, b, 1), 0 == e.length && (delete this.i[a], this.o--), !0) : !1
    };
    var Oc = function(a, b) {
        var c = b.type;
        if (!(c in a.i)) return !1;
        var d = Oa(a.i[c], b);
        d && (Lc(b), 0 == a.i[c].length && (delete a.i[c], a.o--));
        return d
    }, Pc = function(a, b, c, d, e) {
            a = a.i[b.toString()];
            b = -1;
            a && (b = Nc(a, c, d, e));
            return -1 < b ? a[b] : null
        }, Nc = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.qa && f.listener == b && f.xa == !! c && f.Aa == d) return e
            }
            return -1
        };
    var Qc = "closure_lm_" + (1E6 * Math.random() | 0),
        Rc = {}, Sc = 0,
        I = function(a, b, c, d, e) {
            if (da(b)) {
                for (var f = 0; f < b.length; f++) I(a, b[f], c, d, e);
                return null
            }
            c = Tc(c);
            if (a && a[Ic]) a = a.listen(b, c, d, e);
            else {
                if (!b) throw Error("e");
                var f = !! d,
                    g = Uc(a);
                g || (a[Qc] = g = new Mc(a));
                c = g.add(b, c, !1, d, e);
                c.i || (d = Vc(), c.i = d, d.src = a, d.listener = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Wc(b.toString()), d), Sc++);
                a = c
            }
            return a
        }, Vc = function() {
            var a = Xc,
                b = Dc ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c =
                        a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        }, Yc = function(a, b, c, d, e) {
            if (da(b))
                for (var f = 0; f < b.length; f++) Yc(a, b[f], c, d, e);
            else c = Tc(c), a && a[Ic] ? a.unlisten(b, c, d, e) : a && (a = Uc(a)) && (b = Pc(a, b, c, !! d, e)) && Zc(b)
        }, Zc = function(a) {
            if (fa(a) || !a || a.qa) return !1;
            var b = a.src;
            if (b && b[Ic]) return Oc(b.Y, a);
            var c = a.type,
                d = a.i;
            b.removeEventListener ? b.removeEventListener(c, d, a.xa) : b.detachEvent && b.detachEvent(Wc(c), d);
            Sc--;
            (c = Uc(b)) ? (Oc(c, a), 0 == c.o && (c.src = null, b[Qc] = null)) : Lc(a);
            return !0
        }, Wc = function(a) {
            return a in
                Rc ? Rc[a] : Rc[a] = "on" + a
        }, ad = function(a, b, c, d) {
            var e = !0;
            if (a = Uc(a))
                if (b = a.i[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.xa == c && !f.qa && (f = $c(f, d), e = e && !1 !== f)
                    }
                return e
        }, $c = function(a, b) {
            var c = a.listener,
                d = a.Aa || a.src;
            a.wa && Zc(a);
            return c.call(d, b)
        }, Xc = function(a, b) {
            if (a.qa) return !0;
            if (!Dc) {
                var c;
                if (!(c = b)) a: {
                    c = ["window", "event"];
                    for (var d = l, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
                e = c;
                c = new H(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break a
                        } catch (g) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (f = c.s; f; f = f.parentNode) e.push(f);
                    for (var f = a.type, h = e.length - 1; !c.C && 0 <= h; h--) {
                        c.s = e[h];
                        var m = ad(e[h], f, !0, c),
                            d = d && m
                    }
                    for (h = 0; !c.C && h < e.length; h++) c.s = e[h], m = ad(e[h], f, !1, c), d = d && m
                }
                return d
            }
            return $c(a, new H(b, this))
        }, Uc = function(a) {
            a = a[Qc];
            return a instanceof Mc ? a : null
        }, bd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Tc = function(a) {
            if (ga(a)) return a;
            a[bd] || (a[bd] = function(b) {
                return a.handleEvent(b)
            });
            return a[bd]
        };
    var J = function() {
        v.call(this);
        this.Y = new Mc(this);
        this.cb = this;
        this.va = null
    };
    r(J, v);
    J.prototype[Ic] = !0;
    J.prototype.Ea = function(a) {
        this.va = a
    };
    J.prototype.addEventListener = function(a, b, c, d) {
        I(this, a, b, c, d)
    };
    J.prototype.removeEventListener = function(a, b, c, d) {
        Yc(this, a, b, c, d)
    };
    var K = function(a, b) {
        var c, d = a.va;
        if (d)
            for (c = []; d; d = d.va) c.push(d);
        var d = a.cb,
            e = b,
            f = e.type || e;
        if (p(e)) e = new G(e, d);
        else if (e instanceof G) e.B = e.B || d;
        else {
            var g = e,
                e = new G(f, d);
            Za(e, g)
        }
        var g = !0,
            h;
        if (c)
            for (var m = c.length - 1; !e.C && 0 <= m; m--) h = e.s = c[m], g = cd(h, f, !0, e) && g;
        e.C || (h = e.s = d, g = cd(h, f, !0, e) && g, e.C || (g = cd(h, f, !1, e) && g));
        if (c)
            for (m = 0; !e.C && m < c.length; m++) h = e.s = c[m], g = cd(h, f, !1, e) && g;
        return g
    };
    J.prototype.F = function() {
        J.I.F.call(this);
        if (this.Y) {
            var a = this.Y,
                b = 0,
                c;
            for (c in a.i) {
                for (var d = a.i[c], e = 0; e < d.length; e++)++b, Lc(d[e]);
                delete a.i[c];
                a.o--
            }
        }
        this.va = null
    };
    J.prototype.listen = function(a, b, c, d) {
        return this.Y.add(String(a), b, !1, c, d)
    };
    J.prototype.unlisten = function(a, b, c, d) {
        return this.Y.remove(String(a), b, c, d)
    };
    var cd = function(a, b, c, d) {
        b = a.Y.i[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.qa && g.xa == c) {
                var h = g.listener,
                    m = g.Aa || g.src;
                g.wa && Oc(a.Y, g);
                e = !1 !== h.call(m, d) && e
            }
        }
        return e && 0 != d.Xa
    };
    var fd = function(a, b, c, d, e) {
        if (!(y || B && C("525"))) return !0;
        if (mb && e) return dd(a);
        if (e && !d) return !1;
        fa(b) && (b = ed(b));
        if (!c && (17 == b || 18 == b || mb && 91 == b)) return !1;
        if (B && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (y && d && b == a) return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !B
        }
        return dd(a)
    }, dd = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || B && 0 == a) return !0;
            switch (a) {
                case 32:
                case 63:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return !0;
                default:
                    return !1
            }
        }, ed = function(a) {
            if (A) a = gd(a);
            else if (mb && B) a: switch (a) {
                case 93:
                    a = 91;
                    break a
            }
            return a
        }, gd = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var id = function(a) {
        J.call(this);
        this.i = a;
        I(a, hd, this.o, !1, this);
        I(a, "click", this.s, !1, this)
    };
    r(id, J);
    var hd = A ? "keypress" : "keydown";
    id.prototype.o = function(a) {
        (13 == a.o || B && 3 == a.o) && jd(this, a)
    };
    id.prototype.s = function(a) {
        jd(this, a)
    };
    var jd = function(a, b) {
        var c = new kd(b);
        if (K(a, c)) {
            c = new ld(b);
            try {
                K(a, c)
            } finally {
                b.stopPropagation()
            }
        }
    };
    id.prototype.F = function() {
        id.I.F.call(this);
        Yc(this.i, hd, this.o, !1, this);
        Yc(this.i, "click", this.s, !1, this);
        delete this.i
    };
    var ld = function(a) {
        H.call(this, a.i());
        this.type = "action"
    };
    r(ld, H);
    var kd = function(a) {
        H.call(this, a.i());
        this.type = "beforeaction"
    };
    r(kd, H);
    var L = function(a) {
        v.call(this);
        this.A = a;
        this.o = {}
    };
    r(L, v);
    var md = [];
    L.prototype.listen = function(a, b, c, d) {
        da(b) || (b && (md[0] = b.toString()), b = md);
        for (var e = 0; e < b.length; e++) {
            var f = I(a, b[e], c || this.handleEvent, d || !1, this.A || this);
            if (!f) break;
            this.o[f.Pa] = f
        }
        return this
    };
    L.prototype.unlisten = function(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.A || this, c = Tc(c), d = !! d, b = a && a[Ic] ? Pc(a.Y, String(b), c, d, e) : a ? (a = Uc(a)) ? Pc(a, b, c, d, e) : null : null, b && (Zc(b), delete this.o[b.Pa]);
        return this
    };
    var nd = function(a) {
        Va(a.o, Zc);
        a.o = {}
    };
    L.prototype.F = function() {
        L.I.F.call(this);
        nd(this)
    };
    L.prototype.handleEvent = function() {
        throw Error("f");
    };
    var od = function(a, b, c, d, e) {
        L.call(this);
        this.v = a;
        this.H = b;
        this.D = c;
        this.C = d;
        e && (this.i && this.unlisten(this.i, "action", this.s), e && (this.i = new id(e), xa(this, na(ya, this.i)), this.s = ma(this.w, this), this.listen(this.i, "action", this.s)))
    };
    r(od, L);
    od.prototype.w = function() {
        pd() && !jb() && window.gapi && window.gapi.load ? (window.gapi.load("share", ma(this.B, this)), ic("gplus,li")) : (window.open("https://plus.google.com/share?url=" + this.v), ic("gplus,lo"))
    };
    var pd = function() {
        if (!window.gbar) return !1;
        var a = !! (window.gbar.sos && 0 < window.gbar.sos().length),
            b = !(!window.gbar.so || !window.gbar.so());
        return a || b
    };
    od.prototype.B = function() {
        if (window.gapi && window.gapi.share) {
            var a = {
                items: [{
                    type: "http://schema.org/WebPage",
                    id: location.protocol + "//" + location.host,
                    properties: {
                        url: [this.v],
                        name: [this.H],
                        image: [this.C]
                    }
                }]
            }, b = window.location.toString().match(/[?&]authuser=(\d+)/),
                b = b && b[1],
                c = pd() || !! window.google.doodle.sf;
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: c,
                onLoginPopupBlocked: function() {
                    ic("gplus,popupblocked")
                },
                onLoginStateChanged: ma(function() {
                    oa("google.doodle.sf");
                    this.B()
                }, this),
                editorText: this.D,
                sessionIndex: b || "",
                sourceForLogging: "doodle"
            })
        }
    };
    var ud = function(a, b, c, d, e, f, g, h, m) {
        this.D = b;
        this.A = h;
        this.s = m || window.location.protocol + (window.google.doodle.shortlink || "//www.google.com");
        this.o = Zb();
        var z = this;
        this.w = qd(c);
        this.w.onclick = function() {
            (new od(z.s, window.google.doodle.alt || "", z.A(4), z.D)).w()
        };
        this.o.appendChild(this.w);
        this.v = qd(d);
        this.v.onclick = function() {
            var a = new Bb("http://www.facebook.com/sharer.php"),
                b = new D;
            b.add("u", z.s);
            Eb(a, b);
            window.open(a.toString());
            rd(2)
        };
        this.o.appendChild(this.v);
        this.B = qd(e);
        this.B.onclick = function() {
            var a =
                z.A(3) + "\n" + z.s;
            window.open("http://twitter.com/intent/tweet?status=" + encodeURIComponent(String(a)));
            rd(3)
        };
        this.o.appendChild(this.B);
        if (this.i = null != f ? sd(f) : null) td(this), this.i.onclick = function() {
            td(z);
            rd(5)
        }, this.i.onmousedown = this.i.ontouchstart = function() {
            td(z)
        }, this.o.appendChild(this.i);
        this.C = 3 + (this.i ? 1 : 0);
        this.J = g.width;
        this.H = g.height;
        a.appendChild(this.o)
    };
    r(ud, v);
    var qd = function(a) {
        E(a, "cursor", "pointer");
        return a
    }, sd = function(a) {
            var b = document.createElement("a");
            b.appendChild(qd(a));
            E(b, "position", "absolute");
            return b
        };
    ud.prototype.F = function() {
        zc(this.o);
        ud.I.F.call(this)
    };
    var vd = function() {
        var a = ua,
            b = 2 + a.J;
        E(a.w, "left", "2px", "top", "2px");
        E(a.v, "left", 6 + b + "px", "top", "2px");
        E(a.B, "left", 10 + 2 * b + "px", "top", "2px");
        a.i && E(a.i, "left", 14 + 3 * b + "px", "top", "2px");
        E(a.o, "height", a.H + 2 + "px", "left", "44px", "top", "39px", "width", a.C * b + 10 + "px")
    }, td = function(a) {
            a.i && a.i.setAttribute("href", wd(a))
        }, wd = function(a) {
            var b = a.A(5),
                b = {
                    subject: fc,
                    body: b + "\n" + a.s
                };
            a = new D;
            for (var c in b) a.add(c, b[c]);
            c = new Bb("mailto:");
            Eb(c, a);
            return c.toString()
        }, rd = function(a) {
            ic(["share", a, "x"].join())
        };
    var xd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    k = xd.prototype;
    k.clone = function() {
        return new xd(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function(a) {
        return this && a ? a instanceof xd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var yd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    k = yd.prototype;
    k.clone = function() {
        return new yd(this.left, this.top, this.width, this.height)
    };
    k.contains = function(a) {
        return a instanceof yd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    k.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var zd = function(a, b) {
        var c = sc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }, Ad = function(a, b) {
            return zd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        }, Bd = function(a) {
            if (1 == a.nodeType) {
                a: {
                    var b;
                    try {
                        b = a.getBoundingClientRect()
                    } catch (c) {
                        a = {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        break a
                    }
                    y && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop +
                        a.body.clientTop);
                    a = b
                }
                return new F(a.left, a.top)
            }
            b = ga(a.i);
            var d = a;
            a.targetTouches && a.targetTouches.length ? d = a.targetTouches[0] : b && a.i().targetTouches && a.i().targetTouches.length && (d = a.i().targetTouches[0]);
            return new F(d.clientX, d.clientY)
        }, Cd = function(a, b) {
            a.style.display = b ? "" : "none"
        }, Dd = function(a) {
            return "rtl" == Ad(a, "direction")
        }, Ed = {
            thin: 2,
            medium: 4,
            thick: 6
        }, Fd = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
                d;
            if (c in Ed) d = Ed[c];
            else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
            else {
                d = a.style.left;
                var e = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = d;
                a.runtimeStyle.left = e;
                d = c
            }
            return d
        }, Gd = function(a) {
            if (y && !ub(9)) {
                var b = Fd(a, "borderLeft"),
                    c = Fd(a, "borderRight"),
                    d = Fd(a, "borderTop");
                a = Fd(a, "borderBottom");
                return new xd(d, c, a, b)
            }
            b = zd(a, "borderLeftWidth");
            c = zd(a, "borderRightWidth");
            d = zd(a, "borderTopWidth");
            a = zd(a, "borderBottomWidth");
            return new xd(parseFloat(d),
                parseFloat(c), parseFloat(a), parseFloat(b))
        };
    y && C(12);
    var Hd = function() {};
    ba(Hd);
    Hd.prototype.i = 0;
    var M = function(a) {
        J.call(this);
        this.da = a || tc();
        this.La = null;
        this.ga = !1;
        this.A = null;
        this.D = void 0;
        this.X = this.ba = this.J = null
    };
    r(M, J);
    M.prototype.fb = Hd.Oa();
    M.prototype.G = function() {
        return this.A
    };
    var Id = function(a) {
        a.D || (a.D = new L(a));
        return a.D
    };
    M.prototype.Ea = function(a) {
        if (this.J && this.J != a) throw Error("h");
        M.I.Ea.call(this, a)
    };
    M.prototype.za = function() {
        this.A = this.da.i.createElement("DIV")
    };
    var Jd = function() {
        var a = N,
            b = O;
        if (a.ga) throw Error("i");
        a.A || a.za();
        b ? b.insertBefore(a.A, null) : a.da.i.body.appendChild(a.A);
        a.J && !a.J.ga || a.ya()
    };
    M.prototype.Ia = function(a) {
        this.A = a
    };
    M.prototype.ya = function() {
        this.ga = !0;
        Kd(this, function(a) {
            !a.ga && a.G() && a.ya()
        })
    };
    M.prototype.ra = function() {
        Kd(this, function(a) {
            a.ga && a.ra()
        });
        this.D && nd(this.D);
        this.ga = !1
    };
    M.prototype.F = function() {
        this.ga && this.ra();
        this.D && (this.D.P(), delete this.D);
        Kd(this, function(a) {
            a.P()
        });
        this.A && zc(this.A);
        this.J = this.A = this.X = this.ba = null;
        M.I.F.call(this)
    };
    var Kd = function(a, b) {
        a.ba && Ma(a.ba, b, void 0)
    };
    M.prototype.removeChild = function(a, b) {
        if (a) {
            var c = p(a) ? a : a.La || (a.La = ":" + (a.fb.i++).toString(36)),
                d;
            this.X && c ? (d = this.X, d = (c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.X;
                c in d && delete d[c];
                Oa(this.ba, a);
                b && (a.ra(), a.A && zc(a.A));
                c = a;
                if (null == c) throw Error("g");
                c.J = null;
                M.I.Ea.call(c, null)
            }
        }
        if (!a) throw Error("j");
        return a
    };
    var Ld;
    var Md = function(a, b, c) {
        da(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (Ld || (Ld = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = Ld, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var Nd = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return p(a) && a.match(/\S+/g) || []
    }, Od = function(a, b) {
            var c;
            a.classList ? c = a.classList.contains(b) : (c = Nd(a), c = 0 <= La(c, b));
            return c
        }, Pd = function(a, b) {
            a.classList ? a.classList.add(b) : Od(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        }, Qd = function(a, b) {
            a.classList ? a.classList.remove(b) : Od(a, b) && (a.className = Na(Nd(a), function(a) {
                return a != b
            }).join(" "))
        };
    var Sd = function(a, b) {
        J.call(this);
        a && (this.Da && Rd(this), this.na = a, this.Ca = I(this.na, "keypress", this, b), this.Ka = I(this.na, "keydown", this.i, b, this), this.Da = I(this.na, "keyup", this.o, b, this))
    };
    r(Sd, J);
    k = Sd.prototype;
    k.na = null;
    k.Ca = null;
    k.Ka = null;
    k.Da = null;
    k.R = -1;
    k.Z = -1;
    k.Ga = !1;
    var Td = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Ud = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        }, Vd = y || B && C("525"),
        Wd = mb && A;
    Sd.prototype.i = function(a) {
        B && (17 == this.R && !a.D || 18 == this.R && !a.w || mb && 91 == this.R && !a.H) && (this.Z = this.R = -1); - 1 == this.R && (a.D && 17 != a.o ? this.R = 17 : a.w && 18 != a.o ? this.R = 18 : a.H && 91 != a.o && (this.R = 91));
        Vd && !fd(a.o, this.R, a.A, a.D, a.w) ? this.handleEvent(a) : (this.Z = ed(a.o), Wd && (this.Ga = a.w))
    };
    Sd.prototype.o = function(a) {
        this.Z = this.R = -1;
        this.Ga = a.w
    };
    Sd.prototype.handleEvent = function(a) {
        var b = a.i(),
            c, d, e = b.altKey;
        y && "keypress" == a.type ? c = this.Z : B && "keypress" == a.type ? c = this.Z : lb ? c = this.Z : (c = b.keyCode || this.Z, d = b.charCode || 0, Wd && (e = this.Ga), mb && 63 == d && 224 == c && (c = 191));
        d = c = ed(c);
        var f = b.keyIdentifier;
        c ? 63232 <= c && c in Td ? d = Td[c] : 25 == c && a.A && (d = 9) : f && f in Ud && (d = Ud[f]);
        this.R = d;
        a = new Xd(d, 0, 0, b);
        a.w = e;
        K(this, a)
    };
    Sd.prototype.G = function() {
        return this.na
    };
    var Rd = function(a) {
        a.Ca && (Zc(a.Ca), Zc(a.Ka), Zc(a.Da), a.Ca = null, a.Ka = null, a.Da = null);
        a.na = null;
        a.R = -1;
        a.Z = -1
    };
    Sd.prototype.F = function() {
        Sd.I.F.call(this);
        Rd(this)
    };
    var Xd = function(a, b, c, d) {
        H.call(this, d);
        this.type = "key";
        this.o = a
    };
    r(Xd, H);
    var Yd = function(a, b) {
        J.call(this);
        var c = this.i = a;
        (c = ha(c) && 1 == c.nodeType ? this.i : this.i ? this.i.body : null) && Dd(c);
        this.o = I(this.i, A ? "DOMMouseScroll" : "mousewheel", this, b)
    };
    r(Yd, J);
    Yd.prototype.handleEvent = function(a) {
        var b = 0,
            c = 0,
            d = 0;
        a = a.i();
        if ("mousewheel" == a.type) {
            c = 1;
            if (y || B && (nb || C("532.0"))) c = 40;
            d = Zd(-a.wheelDelta, c);
            n(a.wheelDeltaX) ? (b = Zd(-a.wheelDeltaX, c), c = Zd(-a.wheelDeltaY, c)) : c = d
        } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), n(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
        fa(this.s) && Sa(b, -this.s, this.s);
        fa(this.v) && Sa(c, -this.v, this.v);
        b = new $d(d, a);
        K(this, b)
    };
    var Zd = function(a, b) {
        return B && (mb || ob) && 0 != a % b ? a : a / b
    };
    Yd.prototype.F = function() {
        Yd.I.F.call(this);
        Zc(this.o);
        this.o = null
    };
    var $d = function(a, b) {
        H.call(this, b);
        this.type = "mousewheel";
        this.detail = a
    };
    r($d, H);
    var ae = function() {
        J.call(this);
        this.i = 0;
        this.D = this.w = null
    };
    r(ae, J);
    ae.prototype.W = function() {
        this.o("begin")
    };
    ae.prototype.B = function() {
        this.o("end")
    };
    ae.prototype.o = function(a) {
        K(this, a)
    };
    var be = function() {
        ae.call(this);
        this.s = []
    };
    r(be, ae);
    be.prototype.add = function(a) {
        0 <= La(this.s, a) || (this.s.push(a), I(a, "finish", this.A, !1, this))
    };
    be.prototype.remove = function(a) {
        Oa(this.s, a) && Yc(a, "finish", this.A, !1, this)
    };
    be.prototype.F = function() {
        Ma(this.s, function(a) {
            a.P()
        });
        this.s.length = 0;
        be.I.F.call(this)
    };
    var ce = function() {
        be.call(this);
        this.v = 0
    };
    r(ce, be);
    ce.prototype.play = function(a) {
        if (0 == this.s.length) return !1;
        if (a || 0 == this.i) this.v = 0, this.W();
        else if (1 == this.i) return !1;
        this.o("play"); - 1 == this.i && this.o("resume");
        var b = -1 == this.i && !a;
        this.w = q();
        this.D = null;
        this.i = 1;
        Ma(this.s, function(c) {
            b && -1 != c.i || c.play(a)
        });
        return !0
    };
    ce.prototype.pause = function() {
        1 == this.i && (Ma(this.s, function(a) {
            1 == a.i && a.pause()
        }), this.i = -1, this.o("pause"))
    };
    ce.prototype.K = function(a) {
        Ma(this.s, function(b) {
            0 == b.i || b.K(a)
        });
        this.i = 0;
        this.D = q();
        this.o("stop");
        this.B()
    };
    ce.prototype.A = function() {
        this.v++;
        this.v == this.s.length && (this.D = q(), this.i = 0, this.o("finish"), this.B())
    };
    var de = function(a, b) {
        J.call(this);
        this.s = a || 1;
        this.o = b || l;
        this.w = ma(this.B, this);
        this.A = q()
    };
    r(de, J);
    de.prototype.v = !1;
    de.prototype.i = null;
    de.prototype.B = function() {
        if (this.v) {
            var a = q() - this.A;
            0 < a && a < .8 * this.s ? this.i = this.o.setTimeout(this.w, this.s - a) : (this.i && (this.o.clearTimeout(this.i), this.i = null), K(this, "tick"), this.v && (this.i = this.o.setTimeout(this.w, this.s), this.A = q()))
        }
    };
    var ee = function(a) {
        a.v = !1;
        a.i && (a.o.clearTimeout(a.i), a.i = null)
    };
    de.prototype.F = function() {
        de.I.F.call(this);
        ee(this);
        delete this.o
    };
    var fe = function(a, b, c) {
        v.call(this);
        this.o = a;
        this.w = b || 0;
        this.s = c;
        this.v = ma(this.A, this)
    };
    r(fe, v);
    fe.prototype.i = 0;
    fe.prototype.F = function() {
        fe.I.F.call(this);
        ge(this);
        delete this.o;
        delete this.s
    };
    var he = function(a) {
        ge(a);
        var b;
        b = a.v;
        var c = n(void 0) ? void 0 : a.w;
        if (!ga(b))
            if (b && "function" == typeof b.handleEvent) b = ma(b.handleEvent, b);
            else throw Error("k");
        b = 2147483647 < c ? -1 : l.setTimeout(b, c || 0);
        a.i = b
    }, ge = function(a) {
            0 != a.i && l.clearTimeout(a.i);
            a.i = 0
        };
    fe.prototype.A = function() {
        this.i = 0;
        this.o && this.o.call(this.s)
    };
    var Wa = {}, ie = null,
        je = function(a) {
            a = a[ia] || (a[ia] = ++ja);
            delete Wa[a];
            Xa() && ie && ge(ie)
        }, le = function() {
            ie || (ie = new fe(function() {
                ke()
            }, 20));
            var a = ie;
            0 != a.i || he(a)
        }, ke = function() {
            var a = q();
            Va(Wa, function(b) {
                me(b, a)
            });
            Xa() || le()
        };
    var P = function(a, b, c, d) {
        ae.call(this);
        if (!da(a) || !da(b)) throw Error("l");
        if (a.length != b.length) throw Error("m");
        this.J = a;
        this.ka = b;
        this.ca = c;
        this.ba = d;
        this.v = [];
        this.A = !1;
        this.s = 0
    };
    r(P, ae);
    P.prototype.play = function(a) {
        if (a || 0 == this.i) this.s = 0, this.v = this.J;
        else if (1 == this.i) return !1;
        je(this);
        this.w = a = q(); - 1 == this.i && (this.w -= this.ca * this.s);
        this.D = this.w + this.ca;
        this.s || this.W();
        this.o("play"); - 1 == this.i && this.o("resume");
        this.i = 1;
        var b = this[ia] || (this[ia] = ++ja);
        b in Wa || (Wa[b] = this);
        le();
        me(this, a);
        return !0
    };
    P.prototype.K = function(a) {
        je(this);
        this.i = 0;
        a && (this.s = 1);
        ne(this, this.s);
        this.o("stop");
        this.B()
    };
    P.prototype.pause = function() {
        1 == this.i && (je(this), this.i = -1, this.o("pause"))
    };
    P.prototype.F = function() {
        0 == this.i || this.K(!1);
        this.o("destroy");
        P.I.F.call(this)
    };
    var me = function(a, b) {
        a.s = (b - a.w) / (a.D - a.w);
        1 <= a.s && (a.s = 1);
        ne(a, a.s);
        1 == a.s ? (a.i = 0, je(a), a.o("finish"), a.B()) : 1 == a.i && a.X()
    }, ne = function(a, b) {
            ga(a.ba) && (b = a.ba(b));
            a.v = Array(a.J.length);
            for (var c = 0; c < a.J.length; c++) a.v[c] = (a.ka[c] - a.J[c]) * b + a.J[c]
        };
    P.prototype.X = function() {
        this.o("animate")
    };
    P.prototype.o = function(a) {
        K(this, new oe(a, this))
    };
    var oe = function(a, b) {
        G.call(this, a);
        this.x = b.v[0];
        this.y = b.v[1];
        this.state = b.i
    };
    r(oe, G);
    var Q = function(a, b, c, d, e) {
        P.call(this, b, c, d, e);
        this.H = a
    };
    r(Q, P);
    Q.prototype.C = aa;
    Q.prototype.X = function() {
        this.C();
        Q.I.X.call(this)
    };
    Q.prototype.B = function() {
        this.C();
        Q.I.B.call(this)
    };
    Q.prototype.W = function() {
        this.C();
        Q.I.W.call(this)
    };
    var pe = function(a, b, c, d, e) {
        if (2 != b.length || 2 != c.length) throw Error("n");
        Q.apply(this, arguments)
    };
    r(pe, Q);
    pe.prototype.C = function() {
        var a;
        if (a = this.A) n(this.da) || (this.da = Dd(this.H)), a = this.da;
        this.H.style[a ? "right" : "left"] = Math.round(this.v[0]) + "px";
        this.H.style.top = Math.round(this.v[1]) + "px"
    };
    var qe = function(a, b, c, d, e) {
        Q.call(this, a, [b], [c], d, e)
    };
    r(qe, Q);
    qe.prototype.C = function() {
        this.H.style.width = Math.round(this.v[0]) + "px"
    };
    var re = function(a, b, c, d, e) {
        Q.call(this, a, [b], [c], d, e)
    };
    r(re, Q);
    re.prototype.C = function() {
        this.H.style.height = Math.round(this.v[0]) + "px"
    };
    var R = function(a, b, c) {
        J.call(this);
        this.o = a;
        this.handle = b || a;
        this.C = c || new yd(NaN, NaN, NaN, NaN);
        this.s = sc(a);
        this.i = new L(this);
        xa(this, na(ya, this.i));
        I(this.handle, ["touchstart", "mousedown"], this.D, !1, this)
    };
    r(R, J);
    var se = y && !C("12") || A && C("1.9.3");
    k = R.prototype;
    k.clientX = 0;
    k.clientY = 0;
    k.Ya = 0;
    k.Za = 0;
    k.oa = 0;
    k.pa = 0;
    k.fa = !1;
    k.ta = !1;
    k.F = function() {
        R.I.F.call(this);
        Yc(this.handle, ["touchstart", "mousedown"], this.D, !1, this);
        nd(this.i);
        se && this.s.releaseCapture();
        this.handle = this.o = null
    };
    var te = function(a) {
        n(a.B) || (a.B = Dd(a.o));
        return a.B
    };
    R.prototype.D = function(a) {
        var b = "mousedown" == a.type;
        if (this.fa || b && (!(Cc ? 0 == a.v.button : "click" == a.type || a.v.button & Hc[0]) || B && mb && a.D)) K(this, "earlycancel");
        else if (ue(a), K(this, new ve("start", this, a.clientX, a.clientY))) {
            this.fa = !0;
            a.preventDefault();
            var b = this.s,
                c = b.documentElement,
                d = !se;
            this.i.listen(b, ["touchmove", "mousemove"], this.H, d);
            this.i.listen(b, ["touchend", "mouseup"], this.v, d);
            se ? (c.setCapture(!1), this.i.listen(c, "losecapture", this.v)) : this.i.listen(b ? b.parentWindow || b.defaultView : window,
                "blur", this.v);
            this.K && this.i.listen(this.K, "scroll", this.J, d);
            this.clientX = this.Ya = a.clientX;
            this.clientY = this.Za = a.clientY;
            this.ta ? (a = this.o, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Ad(a, "position") || (c = sc(a).documentElement), c ? (A ? (d = Gd(c), b += d.left) : ub(8) && !ub(9) && (d = Gd(c), b -= d.left), a = Dd(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.o.offsetLeft;
            this.oa = a;
            this.pa = this.o.offsetTop;
            a = tc(this.s);
            this.A = wc(a.i);
            q()
        }
    };
    R.prototype.v = function(a) {
        nd(this.i);
        se && this.s.releaseCapture();
        if (this.fa) {
            ue(a);
            this.fa = !1;
            var b = we(this, this.oa),
                c = xe(this, this.pa);
            K(this, new ve("end", this, a.clientX, a.clientY, 0, b, c))
        } else K(this, "earlycancel")
    };
    var ue = function(a) {
        var b = a.type;
        "touchstart" == b || "touchmove" == b ? Gc(a, a.i().targetTouches[0], a.s) : "touchend" != b && "touchcancel" != b || Gc(a, a.i().changedTouches[0], a.s)
    };
    R.prototype.H = function(a) {
        ue(a);
        var b = (this.ta && te(this) ? -1 : 1) * (a.clientX - this.clientX),
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        if (!this.fa) {
            var d = this.Ya - this.clientX,
                e = this.Za - this.clientY;
            if (0 < d * d + e * e)
                if (K(this, new ve("start", this, a.clientX, a.clientY))) this.fa = !0;
                else {
                    this.V || this.v(a);
                    return
                }
        }
        c = ye(this, b, c);
        b = c.x;
        c = c.y;
        this.fa && K(this, new ve("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (ze(this, a, b, c), a.preventDefault())
    };
    var ye = function(a, b, c) {
        var d;
        d = tc(a.s);
        d = wc(d.i);
        b += d.x - a.A.x;
        c += d.y - a.A.y;
        a.A = d;
        a.oa += b;
        a.pa += c;
        b = we(a, a.oa);
        a = xe(a, a.pa);
        return new F(b, a)
    };
    R.prototype.J = function(a) {
        var b = ye(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        ze(this, a, b.x, b.y)
    };
    var ze = function(a, b, c, d) {
        a.w(c, d);
        K(a, new ve("drag", a, b.clientX, b.clientY, 0, c, d))
    }, we = function(a, b) {
            var c = a.C,
                d = isNaN(c.left) ? null : c.left,
                c = isNaN(c.width) ? 0 : c.width;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        }, xe = function(a, b) {
            var c = a.C,
                d = isNaN(c.top) ? null : c.top,
                c = isNaN(c.height) ? 0 : c.height;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        };
    R.prototype.w = function(a, b) {
        this.ta && te(this) ? this.o.style.right = a + "px" : this.o.style.left = a + "px";
        this.o.style.top = b + "px"
    };
    var ve = function(a, b, c, d, e, f, g) {
        G.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = n(f) ? f : b.oa;
        this.top = n(g) ? g : b.pa;
        this.o = b
    };
    r(ve, G);
    var Ae = function() {
        J.call(this)
    };
    r(Ae, J);
    k = Ae.prototype;
    k.ja = 0;
    k.T = 0;
    k.O = 100;
    k.N = 0;
    k.U = 1;
    k.L = !1;
    k.ha = !1;
    var Ce = function(a, b) {
        b = Be(a, b);
        a.ja != b && (a.ja = b + a.N > a.O ? a.O - a.N : b < a.T ? a.T : b, a.L || a.ha || K(a, "change"))
    }, S = function(a) {
            return Be(a, a.ja)
        }, De = function(a, b) {
            b = Be(a, b);
            a.N != b && (a.N = 0 > b ? 0 : a.ja + b > a.O ? a.O - a.ja : b, a.L || a.ha || K(a, "change"))
        }, Ee = function(a) {
            var b = a.N;
            return null == a.U ? b : Math.round(b / a.U) * a.U
        }, Ge = function(a, b) {
            if (a.T != b) {
                var c = a.L;
                a.L = !0;
                a.T = b;
                b + a.N > a.O && (a.N = a.O - a.T);
                b > a.ja && Ce(a, b);
                b > a.O && (a.N = 0, Fe(a, b), Ce(a, b));
                a.L = c;
                a.L || a.ha || K(a, "change")
            }
        }, Fe = function(a, b) {
            b = Be(a, b);
            if (a.O != b) {
                var c = a.L;
                a.L = !0;
                a.O = b;
                b < a.ja + a.N && Ce(a, b - a.N);
                b < a.T && (a.N = 0, Ge(a, b), Ce(a, a.O));
                b < a.T + a.N && (a.N = a.O - a.T);
                a.L = c;
                a.L || a.ha || K(a, "change")
            }
        }, Be = function(a, b) {
            return null == a.U ? b : a.T + Math.round((b - a.T) / a.U) * a.U
        };
    var T = function(a, b) {
        M.call(this, a);
        this.i = new Ae;
        this.ab = b || Ra;
        I(this.i, "change", this.Ma, !1, this)
    };
    r(T, M);
    k = T.prototype;
    k.M = "horizontal";
    k.Ba = !1;
    k.Wa = !1;
    k.Qa = 0;
    k.za = function() {
        T.I.za.call(this);
        var a = this.da.o("DIV", He(this.M));
        this.Ia(a)
    };
    k.Ia = function(a) {
        T.I.Ia.call(this, a);
        Pd(a, He(this.M));
        a = this.G();
        var b;
        var c, d, e;
        b = document;
        b = a || b;
        if (b.querySelectorAll && b.querySelector) b = b.querySelectorAll(".goog-slider-thumb");
        else if (b.getElementsByClassName) {
            var f = b.getElementsByClassName("goog-slider-thumb");
            b = f
        } else {
            f = b.getElementsByTagName("*");
            e = {};
            for (c = d = 0; b = f[c]; c++) {
                var g = b.className,
                    h;
                if (h = "function" == typeof g.split) h = 0 <= La(g.split(/\s+/), "goog-slider-thumb");
                h && (e[d++] = b)
            }
            e.length = d;
            b = e
        }
        b = b[0];
        b || (b = this.da.o("DIV", "goog-slider-thumb"),
            b.setAttribute("role", "button"), a.appendChild(b));
        this.o = this.v = b;
        this.G().setAttribute("role", "slider");
        Ie(this)
    };
    k.ya = function() {
        T.I.ya.call(this);
        this.B = new R(this.o);
        this.C = new R(this.v);
        this.B.ta = !1;
        this.C.ta = !1;
        this.B.w = this.C.w = aa;
        this.W = new Sd(this.G());
        Id(this).listen(this.B, "beforedrag", this.Ra).listen(this.C, "beforedrag", this.Ra).listen(this.B, ["start", "end"], this.Ta).listen(this.C, ["start", "end"], this.Ta).listen(this.W, "key", this.gb).listen(this.G(), "click", this.Sa).listen(this.G(), "mousedown", this.Sa);
        this.K || (this.K = new Yd(this.G()));
        Id(this).listen(this.K, "mousewheel", this.hb);
        this.G().tabIndex =
            0;
        Je(this)
    };
    k.ra = function() {
        T.I.ra.call(this);
        za(this.B, this.C, this.W, this.K)
    };
    k.Ra = function(a) {
        var b = a.o == this.B ? this.o : this.v,
            c;
        "vertical" == this.M ? (c = this.G().clientHeight - b.offsetHeight, c = (c - a.top) / c * (U(this) - W(this)) + W(this)) : c = a.left / (this.G().clientWidth - b.offsetWidth) * (U(this) - W(this)) + W(this);
        c = a.o == this.B ? Math.min(Math.max(c, W(this)), S(this.i) + Ee(this.i)) : Math.min(Math.max(c, S(this.i)), U(this));
        Ke(this, b, c)
    };
    k.Ta = function(a) {
        var b = "start" == a.type,
            c = this.G();
        b ? Pd(c, "goog-slider-dragging") : Qd(c, "goog-slider-dragging");
        c = a.B.handle;
        b ? Pd(c, "goog-slider-thumb-dragging") : Qd(c, "goog-slider-thumb-dragging");
        a = a.o == this.B;
        b ? (K(this, "e"), K(this, a ? "a" : "c")) : (K(this, "f"), K(this, a ? "b" : "d"))
    };
    k.gb = function(a) {
        var b = !0;
        switch (a.o) {
            case 36:
                Le(this, W(this));
                break;
            case 35:
                Le(this, U(this));
                break;
            case 33:
                Me(this, 10);
                break;
            case 34:
                Me(this, -10);
                break;
            case 37:
                var c = -1;
                Me(this, a.A ? 10 * c : 1 * c);
                break;
            case 40:
                Me(this, a.A ? -10 : -1);
                break;
            case 39:
                c = 1;
                Me(this, a.A ? 10 * c : 1 * c);
                break;
            case 38:
                Me(this, a.A ? 10 : 1);
                break;
            default:
                b = !1
        }
        b && a.preventDefault()
    };
    k.Sa = function(a) {
        this.G().focus && this.G().focus();
        var b = a.B;
        Ac(this.o, b) || Ac(this.v, b) || (b = "click" == a.type, b && q() < this.Qa + 1E3 || (b || (this.Qa = q()), this.Wa ? Le(this, Ne(this, a)) : (this.Fa(a), this.w = Oe(this, Ne(this, a)), this.Na = "vertical" == this.M ? this.ka < this.w.offsetTop : this.ka > this.w.offsetLeft + this.w.offsetWidth, a = sc(this.G()), Id(this).listen(a, "mouseup", this.$a, !0).listen(this.G(), "mousemove", this.Fa), this.H || (this.H = new de(200), Id(this).listen(this.H, "tick", this.Ua)), this.Ua(), a = this.H, a.v = !0, a.i || (a.i =
            a.o.setTimeout(a.w, a.s), a.A = q()))))
    };
    k.hb = function(a) {
        Me(this, 1 * (0 < a.detail ? -1 : 1));
        a.preventDefault()
    };
    k.Ua = function() {
        var a;
        if ("vertical" == this.M) {
            var b = this.ka,
                c = this.w.offsetTop;
            this.Na ? b < c && (a = X(this, this.w) + 10) : b > c + this.w.offsetHeight && (a = X(this, this.w) - 10)
        } else b = this.ka, c = this.w.offsetLeft, this.Na ? b > c + this.w.offsetWidth && (a = X(this, this.w) + 10) : b < c && (a = X(this, this.w) - 10);
        n(a) && Ke(this, this.w, a)
    };
    k.$a = function() {
        this.H && ee(this.H);
        var a = sc(this.G());
        Id(this).unlisten(a, "mouseup", this.$a, !0).unlisten(this.G(), "mousemove", this.Fa)
    };
    var Pe = function(a, b) {
        var c, d = a.G();
        c = Bd(b);
        d = Bd(d);
        c = new F(c.x - d.x, c.y - d.y);
        return "vertical" == a.M ? c.y : c.x
    };
    T.prototype.Fa = function(a) {
        this.ka = Pe(this, a)
    };
    var Ne = function(a, b) {
        var c = W(a),
            d = U(a);
        if ("vertical" == a.M) {
            var e = a.o.offsetHeight,
                f = a.G().clientHeight - e,
                e = Pe(a, b) - e / 2;
            return (d - c) * (f - e) / f + c
        }
        e = a.o.offsetWidth;
        f = a.G().clientWidth - e;
        e = Pe(a, b) - e / 2;
        return (d - c) * e / f + c
    }, X = function(a, b) {
            if (b == a.o) return S(a.i);
            if (b == a.v) return S(a.i) + Ee(a.i);
            throw Error("o");
        }, Me = function(a, b) {
            Math.abs(b) < a.i.U && (b = (0 == b ? 0 : 0 > b ? -1 : 1) * a.i.U);
            var c = X(a, a.o) + b,
                d = X(a, a.v) + b,
                c = Sa(c, W(a), U(a) - 0),
                d = Sa(d, W(a) + 0, U(a));
            Qe(a, c, d - c)
        }, Ke = function(a, b, c) {
            var d = Be(a.i, c);
            c = b == a.o ? d : S(a.i);
            b = b == a.v ? d : S(a.i) + Ee(a.i);
            c >= W(a) && b >= c + 0 && U(a) >= b && Qe(a, c, b - c)
        }, Qe = function(a, b, c) {
            W(a) <= b && b <= U(a) - c && 0 <= c && c <= U(a) - b && (b != S(a.i) || c != Ee(a.i)) && (a.i.ha = !0, De(a.i, 0), Ce(a.i, b), De(a.i, c), a.i.ha = !1, a.Ma())
        }, W = function(a) {
            a = a.i;
            return Be(a, a.T)
        }, U = function(a) {
            a = a.i;
            return Be(a, a.O)
        }, Oe = function(a, b) {
            return b <= S(a.i) + Ee(a.i) / 2 ? a.o : a.v
        };
    T.prototype.Ma = function() {
        Je(this);
        Ie(this);
        K(this, "change")
    };
    var Je = function(a) {
        if (a.o && !a.Ba) {
            var b = Re(a, X(a, a.o)),
                c = Re(a, X(a, a.v));
            "vertical" == a.M ? (a.o.style.top = b.y + "px", a.v.style.top = c.y + "px", a.s && (b = Se(c.y, b.y, a.o.offsetHeight), a.s.style.top = b.offset + "px", a.s.style.height = b.size + "px")) : (a.o.style.left = b.x + "px", a.v.style.left = c.x + "px", a.s && (b = Se(b.x, c.x, a.o.offsetWidth), a.s.style.left = b.offset + "px", a.s.style.width = b.size + "px"))
        }
    }, Se = function(a, b, c) {
            var d = Math.ceil(c / 2);
            return {
                offset: a + d,
                size: Math.max(b - a + c - 2 * d, 0)
            }
        }, Re = function(a, b) {
            var c = new F;
            if (a.o) {
                var d =
                    W(a),
                    e = U(a),
                    e = b == d && d == e ? 0 : (b - d) / (e - d);
                "vertical" == a.M ? (d = a.G().clientHeight - a.o.offsetHeight, e = Math.round(e * d), c.x = a.o.offsetLeft, c.y = d - e) : (d = Math.round(e * (a.G().clientWidth - a.o.offsetWidth)), c.x = d, c.y = a.o.offsetTop)
            }
            return c
        }, Le = function(a, b) {
            b = Sa(b, W(a), U(a));
            a.Ba && a.ca.K(!0);
            var c = new ce,
                d = Oe(a, b),
                e = S(a.i),
                f = Ee(a.i),
                g = X(a, d),
                h = Re(a, g),
                m = a.i.U;
            Math.abs(b - g) < m && (b = Sa(g + (b > g ? m : -m), W(a), U(a)));
            Ke(a, d, b);
            g = Re(a, X(a, d));
            h = new pe(d, [h.x, h.y], "vertical" == a.M ? [d.offsetLeft, g.y] : [g.x, d.offsetTop], 100);
            h.A = !1;
            c.add(h);
            a.s && (h = Re(a, e), m = Re(a, e + f), e = h, f = m, d == a.o ? e = g : f = g, "vertical" == a.M ? (d = Se(m.y, h.y, a.o.offsetHeight), e = Se(f.y, e.y, a.o.offsetHeight), g = new pe(a.s, [a.s.offsetLeft, d.offset], [a.s.offsetLeft, e.offset], 100), d = new re(a.s, d.size, e.size, 100), g.A = !1, d.A = !1, c.add(g), c.add(d)) : (d = Se(h.x, m.x, a.o.offsetWidth), e = Se(e.x, f.x, a.o.offsetWidth), g = new pe(a.s, [d.offset, a.s.offsetTop], [e.offset, a.s.offsetTop], 100), d = new qe(a.s, d.size, e.size, 100), g.A = !1, d.A = !1, c.add(g), c.add(d)));
            a.ca = c;
            Id(a).listen(c, "end",
                a.eb);
            a.Ba = !0;
            c.play(!1)
        };
    T.prototype.eb = function() {
        this.Ba = !1
    };
    var Ue = function() {
        var a = N,
            b = Te.bb;
        if (a.M != b) {
            var c = He(a.M),
                d = He(b);
            a.M = b;
            a.G() && (b = a.G(), Od(b, c) && (Qd(b, c), Pd(b, d)), a.o.style.left = a.o.style.top = "", a.v.style.left = a.v.style.top = "", a.s && (a.s.style.left = a.s.style.top = "", a.s.style.width = a.s.style.height = ""), Je(a))
        }
    };
    T.prototype.F = function() {
        T.I.F.call(this);
        this.H && this.H.P();
        delete this.H;
        this.ca && this.ca.P();
        delete this.ca;
        delete this.o;
        delete this.v;
        this.s && delete this.s;
        this.i.P();
        delete this.i;
        this.W && (this.W.P(), delete this.W);
        this.K && (this.K.P(), delete this.K);
        this.B && (this.B.P(), delete this.B);
        this.C && (this.C.P(), delete this.C)
    };
    var Ve = function() {
        var a = N.i;
        if (.1 != a.U) {
            a.U = .1;
            var b = a.L;
            a.L = !0;
            Fe(a, Be(a, a.O));
            De(a, Ee(a));
            Ce(a, S(a));
            a.L = b;
            a.L || a.ha || K(a, "change")
        }
    }, We = function(a) {
            var b = N;
            Cd(b.G(), a);
            a && Je(b)
        }, Ie = function(a) {
            var b = a.G();
            b && (Md(b, "valuemin", W(a)), Md(b, "valuemax", U(a)), Md(b, "valuenow", S(a.i)), Md(b, "valuetext", a.ab(S(a.i)) || ""))
        };
    var Xe = function(a, b) {
        T.call(this, a, b);
        De(this.i, 0)
    };
    r(Xe, T);
    var Te = {
        bb: "vertical",
        ib: "horizontal"
    }, He = function(a) {
            return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal"
        };
    var Ye = [
        [
            [0, 0, 116, 577, 113, 134]
        ],
        [
            [36, 43, 1003, 63, 18, 9],
            [0, 86, 928, 293, 70, 31],
            [71, 89, 1021, 174, 2, 3]
        ],
        [
            [36, 43, 1003, 14, 18, 10],
            [0, 84, 928, 97, 71, 32],
            [71, 90, 1009, 174, 2, 2]
        ],
        [
            [36, 42, 1003, 0, 18, 12],
            [0, 83, 928, 34, 73, 32]
        ],
        [
            [37, 42, 1003, 88, 17, 12],
            [1, 83, 928, 131, 71, 31]
        ],
        [
            [38, 42, 1001, 132, 16, 13],
            [2, 85, 928, 164, 71, 29]
        ],
        [
            [38, 42, 1001, 102, 16, 13],
            [45, 83, 1013, 147, 8, 3],
            [2, 87, 928, 421, 67, 26],
            [70, 87, 1022, 162, 2, 2]
        ],
        [
            [38, 42, 1001, 132, 16, 13],
            [45, 83, 1001, 152, 8, 3],
            [2, 87, 928, 449, 67, 26],
            [70, 87, 1006, 161, 2, 2]
        ],
        [
            [38, 42, 1001, 117, 16, 13],
            [2, 85,
                928, 195, 71, 29
            ]
        ],
        [
            [37, 42, 1003, 74, 17, 12],
            [1, 83, 928, 226, 71, 31]
        ],
        [
            [36, 42, 1003, 26, 18, 12],
            [0, 83, 928, 0, 73, 32]
        ],
        [
            [36, 43, 1003, 40, 18, 10],
            [0, 84, 928, 259, 71, 32],
            [71, 90, 1005, 170, 2, 2]
        ],
        [
            [36, 43, 1003, 52, 18, 9],
            [0, 86, 928, 326, 70, 31],
            [71, 89, 1005, 174, 2, 3]
        ],
        [
            [0, 14, 812, 367, 114, 72],
            [68, 86, 1013, 166, 2, 2],
            [0, 88, 928, 390, 68, 29]
        ],
        [
            [0, 14, 0, 473, 114, 75],
            [0, 89, 928, 68, 73, 27]
        ],
        [
            [0, 14, 232, 469, 114, 102]
        ],
        [
            [0, 14, 348, 462, 114, 101]
        ],
        [
            [0, 15, 464, 467, 114, 100]
        ],
        [
            [0, 15, 580, 478, 114, 99]
        ],
        [
            [0, 15, 696, 534, 114, 99]
        ],
        [
            [0, 15, 812, 545, 114, 100]
        ],
        [
            [0, 14, 116,
                474, 114, 101
            ]
        ],
        [
            [0, 14, 812, 441, 114, 102]
        ],
        [
            [0, 14, 696, 430, 114, 102]
        ],
        [
            [0, 14, 696, 356, 114, 72],
            [68, 86, 1018, 162, 2, 2],
            [0, 88, 928, 359, 68, 29]
        ],
        [
            [0, 14, 580, 364, 114, 112],
            [60, 126, 1001, 178, 2, 2]
        ],
        [
            [0, 14, 464, 355, 114, 110],
            [54, 124, 928, 477, 50, 6],
            [60, 131, 1013, 174, 2, 2]
        ],
        [
            [0, 14, 348, 346, 114, 114],
            [59, 128, 1001, 170, 2, 2]
        ],
        [
            [0, 15, 232, 355, 114, 112],
            [55, 127, 1021, 170, 2, 2]
        ],
        [
            [0, 69, 1001, 166, 2, 2],
            [0, 74, 1009, 178, 2, 2],
            [5, 18, 342, 573, 109, 108],
            [57, 127, 1017, 174, 2, 2]
        ],
        [
            [7, 20, 562, 579, 107, 104],
            [53, 129, 1001, 174, 2, 2]
        ],
        [
            [7, 20, 453, 569, 107, 106],
            [53,
                129, 1017, 170, 2, 2
            ]
        ],
        [
            [0, 69, 1009, 166, 2, 2],
            [0, 74, 1014, 158, 2, 2],
            [5, 18, 231, 577, 109, 108],
            [57, 127, 1013, 170, 2, 2],
            [59, 131, 1005, 179, 2, 2]
        ],
        [
            [0, 16, 116, 361, 114, 111],
            [55, 127, 1011, 152, 7, 4]
        ],
        [
            [0, 14, 0, 357, 114, 114],
            [54, 128, 1017, 166, 2, 2]
        ],
        [
            [0, 14, 812, 249, 114, 116]
        ],
        [
            [0, 14, 696, 240, 114, 114],
            [59, 129, 1014, 162, 2, 2],
            [59, 131, 1020, 152, 3, 2]
        ],
        [
            [0, 14, 696, 126, 114, 112],
            [58, 126, 1020, 156, 3, 4],
            [60, 131, 1013, 174, 2, 2]
        ],
        [
            [0, 14, 580, 244, 114, 118]
        ],
        [
            [0, 14, 580, 126, 114, 116]
        ],
        [
            [0, 15, 464, 238, 114, 115]
        ],
        [
            [0, 16, 464, 125, 114, 111],
            [58, 128, 1010, 158, 2,
                2
            ],
            [58, 131, 1010, 162, 2, 2]
        ],
        [
            [0, 17, 348, 238, 114, 106],
            [53, 123, 1001, 147, 10, 3]
        ],
        [
            [0, 16, 348, 125, 114, 111]
        ],
        [
            [0, 16, 232, 242, 114, 111],
            [58, 128, 1001, 157, 5, 2],
            [58, 131, 1005, 166, 2, 2]
        ],
        [
            [0, 15, 232, 126, 114, 114]
        ],
        [
            [0, 14, 116, 241, 114, 118]
        ],
        [
            [0, 14, 116, 123, 114, 116],
            [95, 130, 1021, 166, 2, 2]
        ],
        [
            [0, 14, 0, 243, 114, 112],
            [58, 127, 1001, 161, 3, 3],
            [60, 131, 1009, 170, 2, 2]
        ],
        [
            [0, 14, 0, 120, 114, 121]
        ],
        [
            [0, 13, 812, 125, 114, 122]
        ],
        [
            [0, 12, 812, 0, 114, 123]
        ],
        [
            [0, 11, 696, 0, 114, 124]
        ],
        [
            [0, 10, 580, 0, 114, 124]
        ],
        [
            [0, 10, 464, 0, 114, 123]
        ],
        [
            [0, 10, 348, 0, 114, 123]
        ],
        [
            [0, 10,
                232, 0, 114, 124
            ]
        ],
        [
            [0, 14, 116, 0, 114, 121]
        ],
        [
            [0, 17, 0, 0, 114, 118]
        ],
        [
            [0, 14, 0, 550, 114, 121]
        ]
    ];
    var Ze = function(a) {
        this.s = a;
        this.o = !1;
        this.v = [];
        this.i = new Image
    }, $e = function(a) {
            if (!a.i.src) {
                var b = function() {
                    if (!a.o) {
                        a.o = !0;
                        for (var b = 0, d; d = a.v[b]; b++) d()
                    }
                };
                a.i.onload = b;
                a.i.src = a.s;
                (a.i.complete || "complete" == a.i.readyState) && b()
            }
        };
    var af = function(a, b) {
        this.i = [];
        this.o = [];
        for (var c = 0, d; d = b[c]; c++) {
            var e = new Ze(a + d.filename);
            d = d.size;
            this.i.push(e);
            this.o.push(d)
        }
    }, bf = function(a) {
            return fa(a) ? a : a[0]
        }, df = function(a, b) {
            var c = cf.i[bf(a)];
            b && (c.o ? b() : c.v.push(b));
            $e(c)
        }, ff = function() {
            var a = ef;
            return {
                width: a[3] / (a[5] || 1),
                height: a[4] / (a[5] || 1)
            }
        }, gf = function(a, b, c, d, e, f) {
            var g = cf,
                h = a[3],
                m = a[4],
                z = h,
                V = m;
            void 0 != e && (z *= e, V *= e);
            f && (c -= z / 2, d -= V / 2);
            e = a[1];
            f = a[2];
            void 0 != c && (e += 0, f += 0);
            a = g.i[bf(a)];
            if (!a.o) throw Error("p");
            b.drawImage(a.i,
                e, f, h, m, c, d, z, V)
        }, hf = function(a) {
            var b = cf,
                c = Zb();
            E(c, "userSelect", "none", "MozUserSelect", "none", "webkitUserSelect", "none", "webkitTapHighlightColor", "rgba(0,0,0,0)");
            c.unselectable = "on";
            var d = a[3],
                e = a[4],
                f = a[5] || 1;
            f && 1 != f && b.o[bf(a)] && (d = Math.floor(d / f), e = Math.floor(e / f));
            E(c, "width", d + "px", "height", e + "px");
            d = a[5] || 1;
            e = b.o[bf(a)];
            f = a[5] || 1;
            a = [c, "url(" + b.i[bf(a)].s + ") " + (-(a[1] / f + 0) + "px " + -(a[2] / f + 0) + "px") + " no-repeat", d && 1 != d && e ? e[0] / d + "px " + e[1] / d + "px" : ""];
            b = a[0];
            c = a[2];
            E(b, "background", a[1]);
            c &&
                E(b, "backgroundSize", c);
            return b
        };
    var kf = function() {
        af.call(this, "/logos/2015/cristofori/", jf)
    };
    r(kf, af);
    var jf = [{
        filename: "main-sprite.png",
        size: [1227, 920]
    }, {
        filename: "sharing-sprite.png",
        size: [64, 265]
    }],
        lf = [0, 0, 714, 1024, 206],
        mf = [0, 1187, 269, 14, 49],
        nf = [0, 0, 0, 1024, 711],
        of = [1, 0, 0, 64, 64, 2],
        pf = [1, 0, 67, 64, 64, 2],
        ef = [1, 0, 134, 64, 64, 2],
        qf = [0, 1187, 261, 29, 5],
        rf = [0, 1027, 234, 41, 101],
        sf = [0, 1027, 0, 200, 200],
        tf = [0, 1088, 203, 50, 50],
        uf = [0, 1141, 203, 50, 50],
        vf = [0, 1071, 256, 37, 147],
        wf = [0, 1027, 203, 58, 28],
        xf = [1, 0, 201, 64, 64, 2];
    ba(kf);
    var Cf = function(a, b, c) {
        yf(a);
        this.o = a;
        this.w = b;
        this.i = c;
        this.Ja = c.Ja || zf;
        delete c.Ja;
        this.ia = c.ia ? c.ia : null;
        delete c.ia;
        this.$ = c.$ ? c.$ : null;
        delete c.$;
        this.ea = c.ea ? c.ea : null;
        delete c.ea;
        this.s = Date.now() + this.ea;
        this.v = {};
        this.A = !1;
        for (var d in c) this.v[d] = a[d];
        Y.push(this);
        Af || (Af = !0, hc(Bf))
    }, Y = [],
        Af = !1,
        Df = 0,
        Ef = function(a, b, c) {
            new Cf(a, b, c)
        }, yf = function(a) {
            var b, c, d, e, f = [].concat(arguments);
            b = Y;
            c = 0;
            for (d = b.length; c < d; c++)(e = b[c]) && -1 != f.indexOf(e.o) && (e = Y.indexOf(e), -1 !== e && Y.splice(e, 1))
        }, Bf = function() {
            if (Af && !Df) {
                var a, b, c, d;
                try {
                    var e = Y;
                    d = e.length;
                    0 == d && (Af = !1);
                    for (c = 0; c < d; c++)
                        if (a = e[c]) {
                            var f = Date.now() - a.s - a.ea;
                            if (0 <= f)
                                if (f > a.w) {
                                    for (b in a.i) a.o[b] = a.i[b];
                                    a.ia && a.ia();
                                    a.$ && a.$();
                                    a.A = !0
                                } else {
                                    for (b in a.i) a.o[b] = a.Ja(f, a.v[b], a.i[b] - a.v[b], a.w);
                                    a.ia && a.ia()
                                }
                        }
                    if (0 < Y.length)
                        for (d = Y.length, c = 0; c < d; ++c) Y[c].A && (Y.splice(c, 1), c--, d--);
                    hc(Bf)
                } catch (g) {
                    throw Af = !1, Error(g);
                }
            }
            return Af
        }, zf = function(a, b, c, d) {
            a /= d;
            a--;
            return c * (a * a * a + 1) + b
        };
    var Ff = null,
        Gf = function() {
            if (null == Ff) {
                Ff = document.createElement("audio");
                Ff.loop = !0;
                Ff.setAttribute("preload", "auto");
                var a = document.createElement("source"),
                    b = document.createElement("source");
                a.setAttribute("src", "/logos/2015/cristofori/song.mp3");
                a.setAttribute("type", "audio/mpeg");
                b.setAttribute("src", "/logos/2015/cristofori/song.ogg");
                b.setAttribute("type", "audio/ogg");
                Ff.appendChild(a);
                Ff.appendChild(b)
            }
            return Ff
        }, Jf = function(a, b) {
            var c = Hf,
                d = 0,
                e = 0,
                d = a - If,
                e = b - c;
            return Math.sqrt(d * d + e * e)
        }, Kf = function(a,
            b) {
            var c = document.createElement("canvas");
            c && (c.width = a, c.height = b);
            return c
        };
    var cf = kf.Oa(),
        O = null,
        Z = null,
        Lf = null,
        Mf = null,
        Nf = null,
        Of = null,
        Pf = null,
        Qf = 0,
        Rf = 0,
        Sf = null,
        Tf = !0,
        Uf = !1,
        Vf = !1,
        Wf = 0,
        If = 0,
        Hf = 0,
        N = null,
        Xf = function(a, b) {
            this.x = 25;
            this.y = b;
            this.size = .7;
            this.i = a;
            this.o = !1;
            this.s = this.i[3] / 2
        }, Yf = function(a) {
            var b = Lf;
            b.save();
            b.globalAlpha = a.size;
            gf(a.i, b, a.x, a.y, a.size, !0);
            b.restore()
        }, $f = function(a) {
            Jf(a.x, a.y) < a.s && (a.i == tf ? dc() : a.i == uf && (cf.i[bf(1)].o ? Zf() : df(1, function() {
                Zf()
            })))
        }, cg = function(a) {
            if (Jf(a.x, a.y) < a.s) {
                ag();
                if (a.o) return !0;
                a.o = !0;
                Ef(a, 200, {
                    size: .8,
                    $: function() {
                        Ef(a,
                            200, {
                                size: .7
                            })
                    }
                });
                return !0
            }
            bg();
            return a.o = !1
        }, dg = function() {
            this.alpha = this.i = this.o = 0
        }, fg = function(a) {
            var b = t,
                c = a;
            0 > c ? c = 0 : 4 < c && (c = 4);
            b.i = c;
            c = N;
            Ke(c, c.o, a);
            eg(b)
        }, eg = function(a) {
            gg() && Zf(!1);
            var b = parseInt(S(N.i), 10),
                c = b;
            0 > c ? c = 0 : 4 < c && (c = 4);
            a.i = c;
            a = b / 5;
            a = .05 + a * a * .95;
            1 < a ? a = 1 : .05 > a && (a = .05);
            u && (u.volume = a)
        }, hg = function() {
            this.i = this.aa = .5;
            this.Ha = this.o = 0
        }, ig = function(a) {
            a.preventDefault();
            a.stopPropagation();
            return !1
        }, gg = function() {
            return ua ? 1 == parseInt(ua.o.style.opacity, 10) : !1
        }, Zf = function(a) {
            if (ua) {
                var b =
                    ua.o;
                ac(b);
                var c = gg() || a;
                c || (E(b, "opacity", "0"), Cd(b, !0));
                window.setTimeout(function() {
                    E(b, "opacity", c ? "0" : "1")
                }, 0)
            }
        }, jg = function() {
            if (Tf) Uf = !1;
            else if (Uf = !0, O) {
                if (Vf) {
                    for (var a = pa[Qf], b = Ye[Rf + 12 * t.o], c = lf[1], d = lf[2], e = nf[1], f = nf[2], g = 0; g < a.length; g++) {
                        var h = a[g];
                        Pf.drawImage(cf.i[bf(lf)].i, h[2] + c, h[3] + d, h[4], h[5], h[0], h[1], h[4], h[5])
                    }
                    for (g = 0; g < b.length; g++) a = b[g], Lf.drawImage(cf.i[bf(nf)].i, a[2] + e, a[3] + f, a[4], a[5], a[0] + 418, a[1] + 14, a[4], a[5]);
                    Qf++;
                    Rf++;
                    12 <= Rf && (Wf++, 26 <= Wf && (Wf = u.currentTime = 0), Qf =
                        Rf = 0, t.o = t.i)
                }
                e = qa;
                f = Lf;
                b = Nf;
                f.clearRect(0, 0, 403.9, 200);
                f.clearRect(366, 30, 14, 49);
                f.save();
                14 > e.Ha && (f.rect(366, 30, e.Ha, 49), f.clip());
                gf(mf, f, 366, 30);
                f.restore();
                f.save();
                g = 2 * (e.aa - .5);
                f.translate(210, 107);
                e.o = document.getElementById("fkbx") ? 0 : .025 * Math.sin(.007 * new Date);
                e.i = .5 < e.aa ? e.aa : e.aa + e.o;
                f.scale(e.i, e.i);
                f.fillStyle = "rgba(255, 255, 255," + g + ")";
                f.beginPath();
                f.moveTo(117, -2 - 5 * wa[Wf]);
                f.lineTo(70, -50);
                f.lineTo(97, -17);
                f.closePath();
                f.fill();
                gf(sf, f, -100, -100);
                f.globalAlpha = g;
                f.save();
                f.scale(e.aa,
                    e.aa);
                gf(rf, f, 117, -98);
                f.globalAlpha *= 1 - Qf / 12;
                gf(qf, f, 123, -3 - 5 * wa[Wf]);
                f.restore();
                f.drawImage(Of, -93, -93);
                f.restore();
                b.clearRect(0, 0, 261, 126);
                b.save();
                b.translate(130, 126);
                e = 1 - Qf / 12;
                f = Qf / 12 * t.o + .5;
                b.scale(f, f);
                b.globalAlpha *= e;
                gf(wf, b, -29, -28);
                b.restore();
                b = t;
                e = Lf;
                e.clearRect(530, 36, 52, 147);
                e.save();
                e.globalAlpha = b.alpha;
                gf(vf, e, 530, 36);
                e.restore();
                Yf(ra);
                Yf(sa);
                window.setTimeout(jg, va)
            }
        }, kg = function() {
            u ? (eg(t), u.removeEventListener("play", kg, !1), O.title = "", Vf = !0, bg(), Ef(qa, 500, {
                aa: 1,
                $: function() {
                    E(Mf,
                        "display", "inline")
                }
            }), Ef(qa, 500, {
                Ha: 14,
                ea: 200
            }), Ef(t, 300, {
                alpha: 1,
                ea: 400,
                $: function() {
                    We(!0)
                }
            })) : (u = Gf(), u.addEventListener("play", kg, !1), O.appendChild(u), u.play())
        }, lg = function(a) {
            a.preventDefault();
            if (Sf)
                if (gg()) Zf(!1);
                else if (kc(Sf), If = a.S, Hf = a.V, !Vf && 53 < If) kg();
            else if (53 > If) $f(ra), $f(sa);
            else if (532 < If || Wb && 480 < If) 72 > Hf ? fg(5) : 155 < Hf ? fg(0) : Wb && fg(t.i + (115 > Hf ? 1 : -1))
        }, mg = function(a) {
            a.preventDefault();
            Sf && (kc(Sf), If = a.S, Hf = a.V, a = 0, 53 > If ? cg(ra) || cg(sa) : 532 < If ? (72 > Hf || 155 < Hf) && ag() : Vf ? bg() : (a = Jf(210,
                107), 50 > a ? ag() : bg()))
        }, ag = function() {
            E(Z, "cursor", "pointer")
        }, bg = function() {
            E(Z, "cursor", "default")
        };
    (function(a, b, c) {
        var d = function() {
            a();
            window.lol && window.lol()
        }, e = function() {
                pc(d, b, c);
                oc(d, b);
                d()
            };
        google && google.x ? google.x({
            id: "DOODLE"
        }, e) : e()
    })(function() {
            if (O = document.getElementById("hplogo"))
                if (qa = new hg, t = new dg, ra = new Xf(uf, 58), sa = new Xf(tf, 117), Z = Kf(577, 200), Of = Kf(187, 187), Mf = Kf(261, 126), Z && (Lf = Z.getContext ? Z.getContext("2d") : null, Pf = Of.getContext ? Of.getContext("2d") : null, Nf = Mf.getContext ? Mf.getContext("2d") : null, Lf)) {
                    var a = ta = new L;
                    a.listen(Z, ["mousedown"], lg);
                    a.listen(Z, ["mousemove"],
                        mg);
                    O.appendChild(Z);
                    N = new Xe;
                    Ue();
                    N.za();
                    Jd();
                    Ve();
                    Ge(N.i, 0);
                    Fe(N.i, 5);
                    N.Wa = !0;
                    if (Wb) {
                        var b = N.G();
                        E(b, "left", "542px", "width", "12px");
                        E(b.firstChild, "height", "20px", "left", "-5px", "width", "20px")
                    }
                    We(!1);
                    a.listen(N, "change", function() {
                        eg(t);
                        kc(Sf)
                    });
                    Wb && (a.listen(N, "e", function() {
                        a.listen(window, "scroll", ig);
                        a.listen(document, "touchmove", ig)
                    }), a.listen(N, "f", function() {
                        a.unlisten(window, "scroll", ig);
                        a.unlisten(document, "touchmove", ig)
                    }));
                    O.appendChild(Mf);
                    E(Mf, "position", "absolute", "left", "45px", "top",
                        "-70px", "display", "none");
                    ua = new ud(O, ec("large_image"), hf(ef), hf(pf), hf(xf), hf(of), ff(), function() {
                        return fc + " #GoogleDoodle"
                    });
                    vd();
                    var c = ua.o;
                    Cd(c, !1);
                    E(c, "backgroundColor", "#fff", "height", "37px", "width", "152px");
                    a.listen(c, Fc, function() {
                        Cd(c, gg())
                    });
                    Rf = Qf = 0;
                    fg(0);
                    Lf.i = !0;
                    Pf.i = !0;
                    Uf = Tf = !1;
                    df(0, function() {
                        Sf = new mc(24E4, function() {
                            Tf = !0;
                            u && u.pause();
                            Df = Date.now()
                        }, function() {
                            Tf = !1;
                            u && u.play();
                            if (Df) {
                                var a, b = Y.length,
                                    c = Date.now() - Df;
                                for (a = 0; a < b; a++) Y[a].s += c;
                                Df = 0
                            }
                            Uf || jg()
                        });
                        jg()
                    })
                }
        }, function() {
            Tf = !0;
            Vf = !1;
            ya(Sf);
            u && (u.pause && u.pause(), u.readyState && 1 < u.readyState && (u.currentTime = 0, u.volume = 0), Ff = u = null);
            O && (O.innerHTML = "");
            Af = !1;
            Y = [];
            ya(ta);
            ya(ua);
            ya(N);
            Pf = Of = Nf = Mf = Lf = Z = O = ua = ta = null;
            Wf = Rf = Qf = 0;
            N = sa = ra = t = qa = null
        });
})();
