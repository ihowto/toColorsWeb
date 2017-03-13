(function(g, d, ka) {
    function L(a, b) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch(c) {
                la(c, b)
            }
        }
    }
    function la(a, b) {
        if (0.01 > Math.random()) {
            var c = ["cp: " + b, a.name + ": " + a.message, "debug: " + Ha, "code: " + Ia, "stack: " + a.stack]; (new Image).src = "//an.yandex.ru/jserr/101500?" + ta({
                "cnt-class": 100,
                errmsg: c.join("; ").replace(/\r?\n/g, "\\n")
            })
        }
    }
    function fa(a) {
        0.01 > Math.random() && (a = ["ErrorLog: " + a, "code: " + Ia], (new Image).src = "//an.yandex.ru/jserr/101500?" + ta({
            "cnt-class": 100,
            errmsg: a.join("; ").replace(/\r?\n/g, "\\n")
        }))
    }
    function O(a, b, c) {
        return g.setTimeout(L(a, c || "setTimeout"), b)
    }
    function S(a) {
        for (var b = 1,
        c = a.length; b < arguments.length; b++) a[c++] = arguments[b];
        return a.length
    }
    function ga(a) {
        return "[object Array]" == Object.prototype.toString.call(a)
    }
    function gb(a, b, c) {
        var m, f, d = 0;
        for (m in a) if (a.hasOwnProperty(m) && (f = c ? b.call(c, a[m], m, a, d) : b(a[m], m, a, d), d++, !1 === f)) break;
        return this
    }
    function B() {
        for (var a = {},
        b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, m = c; m--;) a[b[m]] = "";
        try {
            for (var f = g.location,
            m = c; m--;) {
                var d = b[m];
                a[d] = "" + f[d]
            }
        } catch(h) {
            A && (a = A)
        }
        return a
    }
    function wb(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }
    function J() {
        return + new Date
    }
    function ua(a) {
        return Math.floor(Math.random() * ("number" == typeof a ? a: 1073741824))
    }
    function Nb() {
        var a = d.documentElement,
        b = d.doctype,
        c = a.attributes,
        m = "",
        f = "",
        g = "",
        f = a.outerHTML;
        if (!f) {
            for (f = 0; f < c.length; f++) {
                var h = c[f];
                h && (m += " " + h.name + '="' + (h.value || "") + '"')
            }
            f = "<html" + m + ">" + a.innerHTML + "</html>"
        }
        b && (g = "<!DOCTYPE " + b.name + (b.publicId ? ' PUBLIC "' + b.publicId + '"': "") + (b.systemId ? ' "' + b.systemId + '"': "") + ">\n");
        return g + f
    }
    function ta(a) {
        var b = [],
        c;
        for (c in a) a.hasOwnProperty(c) && (b[b.length] = c + "=" + encodeURIComponent(a[c]).replace(/\+/g, "%2B"));
        return b.join("&")
    }
    function $a(a) {
        for (var b = a.length,
        c = 0,
        d = 255,
        f = 255; b;) {
            var g = 21 < b ? 21 : b,
            b = b - g;
            do {
                var h = "string" == typeof a ? a.charCodeAt(c) : a[c];
                c++;
                if (255 < h) var p = h >> 8,
                h = h & 255,
                h = h ^ p;
                d += h;
                f += d
            } while (-- g );
            d = (d & 255) + (d >> 8);
            f = (f & 255) + (f >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (f & 255) + (f >> 8);
        return 65535 == a ? 0 : a
    }
    function Ob(a) {
        for (var b = J(), c = 1; 0 < c; c++) if (0 == c % 1E3) {
            var d = J();
            if (b > d) break;
            if (d - b > a) break
        }
    }
    function Ja(a) {
        return - 1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
    }
    function va(a, b, c, m) { / [ ^ a - z0 - 9. - ] / .test(m) && (m = null);
        a = a + "=" + encodeURIComponent(b);
        c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a += ";expires=" + b.toGMTString());
        m && (a += ";domain=" + m);
        d.cookie = a + ";path=/"
    }
    function Ka(a) {
        return d.cookie.match(RegExp("(?:^|;\\s*)" + a + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
    }
    function Pb() {
        va("_metrika_enabled", "1", 60);
        var a = !!Ka("_metrika_enabled");
        va("_metrika_enabled", "", -1, void 0);
        return a
    }
    function ib() {
        var a = d.documentElement;
        return "CSS1Compat" == d.compatMode ? a: d.body || a
    }
    function xb() {
        var a = ib(),
        b = a.__lookupGetter__ && a.__lookupGetter__("clientHeight");
        Ha = b && String(b);
        return [a.clientWidth, a.clientHeight]
    }
    function yb() {
        var a = ib(),
        b = xb();
        return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
    }
    function zb() {
        return [g.pageXOffset || d.documentElement && d.documentElement.scrollLeft || d.body && d.body.scrollLeft || 0, g.pageYOffset || d.documentElement && d.documentElement.scrollTop || d.body && d.body.scrollTop || 0]
    }
    function Ab(a) {
        if (!a.ownerDocument || "PARAM" == a.tagName || a == d.body || a == d.documentElement) return [0, 0];
        if (a.getBoundingClientRect) return a = a.getBoundingClientRect(),
        [Math.round(a.left + P[0]), Math.round(a.top + P[1])];
        for (var b = 0,
        c = 0; a;) b += a.offsetLeft,
        c += a.offsetTop,
        a = a.offsetParent;
        return [b, c]
    }
    function X(a, b) {
        return a == d.documentElement ? null: b ? a.tagName.toLowerCase() === b ? a: X(a.parentNode, b) : a == d.body ? d.documentElement: a.parentNode
    }
    function Bb(a, b) {
        var c = [];
        if (a) {
            var d = a.childNodes;
            if (d) for (var f = 0,
            g = d.length; f < g; f++) {
                var h = d[f];
                "INPUT" == h.nodeName && h.type && "hidden" == h.type.toLocaleLowerCase() || b && h.nodeName != b || S(c, h)
            }
        }
        return c
    }
    function jb(a) {
        var b = Ab(a);
        a = a == d.body || a == d.documentElement ? yb() : [a.offsetWidth, a.offsetHeight];
        return [b[0], b[1], a[0], a[1]]
    }
    function Cb(a) {
        var b = "";
        a = a.childNodes;
        for (var c = 0,
        d = a.length; c < d; c++) a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
        return $a(b.replace(/[\u0000-\u0020]+/g, ""))
    }
    function Db(a) {
        var b = "",
        c = "width height align title alt name".split(" ");
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        for (var b = b + String(a.className || "").toLowerCase(), d = 0; d < c.length; d++) a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return $a(b.replace(/[\u0000-\u0020]+/g, ""))
    }
    function Eb(a) {
        for (var b = d.getElementsByTagName("form"), c = 0, m = b.length; c < m; c++) if (b[c] == a) return c;
        return - 1
    }
    function ma(a, b) {
        return RegExp("(?:^|\\s)" + b + "(?:\\s|$)").test(a.className)
    }
    function Fb(a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked: !a.value: "TEXTAREA" == a.nodeName ? !a.value: "SELECT" == a.nodeName ? 0 > a.selectedIndex: !0
    }
    function Gb(a, b) {
        b = b || d;
        for (var c = b.getElementsByTagName("*"), m = [], f = 0; f < c.length; f++) ma(c[f], a) && m.push(c[f]);
        return m
    }
    function T(a, b, c, d) {
        V[V.length] = [c, c];
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    function La(a, b, c, d) {
        for (var f = 0; f < V.length; f++) if (V[f] && V[f][0] == c) {
            var g = V[f][1];
            delete V[f];
            break
        }
        g && (a.removeEventListener ? a.removeEventListener(b, g, !!d) : a.detachEvent && a.detachEvent("on" + b, g))
    }
    function na(a) {
        try {
            delete g[a]
        } catch(b) {
            g[a] = ka
        }
    }
    function wa(a) {
        var b = d.createElement("script");
        b.type = "text/javascript";
        b.async = !0;
        b.src = a;
        try {
            var c = d.getElementsByTagName("html")[0];
            d.getElementsByTagName("head")[0] || c.appendChild(d.createElement("head"));
            var g = d.getElementsByTagName("head")[0];
            g.insertBefore(b, g.firstChild)
        } catch(f) {}
    }
    function xa() {
        if (top != g && parent == top && g.postMessage && !Ya.Metrika_visorPlayerOn) {
            Ya.Metrika_visorPlayerOn = !0;
            var a = d.createElement("div");
            a.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var b = a.firstChild;
            O(function() { (d.body || d.documentElement).appendChild(b);
                try {
                    var a = b.contentWindow.document
                } catch(m) {}
                if (a) {
                    var f = Math.random();
                    g[f] = function(a, b, c, d, f) {
                        try {
                            c.postMessage && (a.onmessage = function(c) {
                                c = c || a.event;
                                try {
                                    var g = JSON.parse(c.data)
                                } catch(m) {
                                    return
                                }
                                if (/(^|\.)yandex\.(ru|com|ua|kz|by|com\.tr)(:\d{4})?$/.test(c.origin) && g && "script" == g.name && g.data) {
                                    c = d.getElementsByTagName("head")[0];
                                    var p = d.createElement("base");
                                    p.href = g.data;
                                    c.appendChild(p);
                                    p = d.createElement("script");
                                    p.src = g.data;
                                    c.appendChild(p); - 1 < f.userAgent.indexOf("Firefox/3.6.") && b.removeEventListener("message", a.onmessage, !1);
                                    a.onmessage = null
                                }
                            },
                            -1 < f.userAgent.indexOf("Firefox/3.6.") && b.addEventListener("message", a.onmessage, !1), c.postMessage('{"name":"ping"}', "*"))
                        } catch(g) {}
                    };
                    a.open();
                    a.write('<!doctype html><html><head><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7,IE=edge" /></head><body><script type="text/javascript">eval("(" + Function.prototype.toString.call(parent[' + f + ']) + ")")(window, parent, top, document, navigator);\x3c/script></body></html>');
                    a.close()
                }
            },
            500)
        }
    }
    function Qb(a, b, c, m, f, hb) {
        function h(a, e, b) {
            var k = L(function(a) {
                return b(a || g.event)
            },
            e);
            $[$.length] = [a, e, b, k];
            a.addEventListener ? a.addEventListener(e, k, !0) : a.attachEvent && a.attachEvent("on" + e, k)
        }
        function p(a, e, b) {
            for (var k = 0; k < $.length; k++) if ($[k] && $[k][0] == a && $[k][1] == e && $[k][2] == b) {
                var c = $[k][3];
                delete $[k];
                break
            }
            c && (a.removeEventListener ? a.removeEventListener(e, c, !0) : a.detachEvent && a.detachEvent("on" + e, c))
        }
        function s(a) {
            var e = ib();
            return [a.pageX || a.clientX + P[0] - (e.clientLeft || 0) || 0, a.pageY || a.clientY + P[1] - (e.clientTop || 0) || 0]
        }
        function r(a) {
            return a.target || a.srcElement
        }
        function J(a) {
            return (a.shiftKey ? Wa: 0) | (a.ctrlKey ? kb: 0) | (a.altKey ? ra: 0) | (a.metaKey ? eb: 0) | (a.ctrlKey || a.altKey ? ab: 0)
        }
        function I(a) {
            Hb++;
            Ha = Hb;
            var e = (new Date).getTime();
            a && e < a && (lb += a - e + mb);
            O(function() {
                I(e)
            },
            mb, "timeCorrector")
        }
        function G() {
            var a = (new Date).getTime() + lb;
            a < nb && (a = nb + mb / 2);
            return nb = a
        }
        function w() {
            return Math.round((G() - gb) / Rb)
        }
        function A(a, e) {
            e = Math.max(0, Math.min(e, 65535));
            S(a, e >> 8, e & 255)
        }
        function t(a, e) {
            S(a, e & 255)
        }
        function n(a, e) {
            for (e = Math.max(0, e | 0); 127 < e;) S(a, e & 127 | 128),
            e >>= 7;
            S(a, e)
        }
        function M(a, e) {
            255 < e.length && (e = e.substr(0, 255));
            S(a, e.length);
            for (var b = 0; b < e.length; b++) A(a, e.charCodeAt(b))
        }
        function T(a, e) {
            n(a, e.length);
            for (var b = 0; b < e.length; b++) n(a, e.charCodeAt(b))
        }
        function N(a, e, b, k, c, u) {
            for (; b && (!b.offsetWidth || !b.offsetHeight);) b = X(b);
            if (!b) return null;
            var d = b[H];
            if (!d || 0 > d) return null;
            var f = {
                mousemove: Sb,
                click: Ua,
                dblclick: qa,
                mousedown: Y,
                mouseup: Ka,
                touch: Tb
            } [e];
            if (!f) return null;
            var q = Ab(b);
            b = [];
            t(b, f);
            n(b, a);
            n(b, d);
            n(b, Math.max(0, k[0] - q[0]));
            n(b, Math.max(0, k[1] - q[1]));
            /^mouse(up|down)|click$/.test(e) && (a = c || u, t(b, 2 > a ? Va: a == (c ? 2 : 4) ? Za: Xa));
            return b
        }
        function Z(a, e, b, k) {
            e = e[H];
            if (!e || 0 > e) return null;
            var c = [];
            t(c, La);
            n(c, a);
            n(c, e);
            n(c, b[0]);
            n(c, b[1]);
            t(c, 0);
            t(c, 0);
            t(c, k);
            return c
        }
        function V(a, e) {
            var b = [];
            t(b, F);
            n(b, a);
            n(b, e[0]);
            n(b, e[1]);
            return b
        }
        function ba(a, e, b) {
            var k = [];
            b = b[H];
            if (!b || 0 > b) return null;
            t(k, oa);
            n(k, a);
            n(k, e[0]);
            n(k, e[1]);
            n(k, b);
            return k
        }
        function ea(a, e, b) {
            var k = [];
            t(k, ga);
            n(k, a);
            n(k, e[0]);
            n(k, e[1]);
            n(k, b[0]);
            n(k, b[1]);
            return k
        }
        function pa(a, e, b, k) {
            var c = [];
            t(c, v);
            n(c, a);
            A(c, e);
            t(c, b);
            a = k[H];
            if (!a || 0 > a) a = 0;
            n(c, a);
            return c
        }
        function W(a, e) {
            var b, k;
            0 == e.length ? k = b = "": 100 >= e.length ? (b = e, k = "") : 200 >= e.length ? (b = e.substr(0, 100), k = e.substr(100)) : (b = e.substr(0, 97), k = e.substr(e.length - 97));
            var c = [];
            t(c, Ja);
            n(c, a);
            T(c, b);
            T(c, k);
            return c
        }
        function ka(a) {
            var e = [];
            t(e, Ia);
            n(e, a);
            return e
        }
        function ca(a) {
            var e = [];
            t(e, D);
            n(e, a);
            return e
        }
        function da(a) {
            var e = [];
            t(e, Ub);
            n(e, a);
            return e
        }
        function sa(a, e) {
            var b = [];
            t(b, Ea);
            n(b, a);
            n(b, e[H]);
            return b
        }
        function ua(a, e) {
            var b = [];
            t(b, Fa);
            n(b, a);
            n(b, e[H]);
            return b
        }
        function Ca(a, e, b) {
            var k = [];
            t(k, Ga);
            n(k, a);
            n(k, e[H]);
            M(k, String(b));
            return k
        }
        function Ma(a) {
            var e = a[H];
            if (!e || 0 > e || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || ma(a.form, "-metrika-noform")) return null;
            var b = Eb(a.form);
            if (0 > b) return null;
            var k;
            k = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            } [a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            } [a.nodeName];
            if ("number" != typeof k) return null;
            for (var c = -1,
            u = a.form.elements,
            d = u.length,
            f = 0,
            q = 0; f < d; f++) if (u[f].name == a.name) {
                if (u[f] == a) {
                    c = q;
                    break
                }
                q++
            }
            if (0 > c) return null;
            u = [];
            t(u, x);
            n(u, e);
            n(u, b);
            n(u, k);
            T(u, a.name || "");
            n(u, c);
            return u
        }
        function Da(a, e) {
            var b = Eb(e);
            if (0 > b) return null;
            for (var k = e.elements,
            c = k.length,
            u = [], d = 0; d < c; d++) if (!Fb(k[d])) {
                var f = k[d][H];
                f && 0 < f && S(u, f)
            }
            k = [];
            t(k, Vb);
            n(k, a);
            n(k, b);
            n(k, u.length);
            for (b = 0; b < u.length; b++) n(k, u[b]);
            return k
        }
        function Na() {
            var a = [];
            t(a, Wb);
            return a
        }
        function y(a, e, b) {
            a = a.apply(g, e);
            Oa.append(a, b)
        }
        function z(a) {
            if (a[H]) a: {
                var e = w(),
                b = a[H];
                if (0 < b) {
                    var k = [];
                    a = jb(a);
                    var c = bb[b],
                    u = a[0] + "x" + a[1],
                    d = a[2] + "x" + a[3];
                    u != c.pos && (c.pos = u, t(k, Xb), n(k, e), n(k, b), n(k, a[0]), n(k, a[1]));
                    d != c.size && (c.size = d, t(k, Yb), n(k, e), n(k, b), n(k, a[2]), n(k, a[3]));
                    if (k.length) {
                        a = k;
                        break a
                    }
                }
                a = null
            } else { (b = X(a)) && z(b);
                a[H] = ob;
                bb[ob] = {};
                ob++;
                if (a.nodeName) if (b = +a[H], !isFinite(b) || 0 >= b) e = null;
                else {
                    var k = wa,
                    c = 0,
                    f = X(a),

                    u = f && f[H] ? f[H] : 0;
                    0 > u && (u = 0);
                    var d = a.nodeName.toUpperCase(),
                    q = fb[d];
                    q || (k |= la);
                    var g;
                    b: {
                        g = Bb(X(a), a.nodeName);
                        for (var l = 0; l < g.length; l++) if (g[l] == a) {
                            g = l;
                            break b
                        }
                        g = 0
                    }
                    g || (k |= ta);
                    l = jb(a); (f = f ? jb(f) : null) && l[0] == f[0] && l[1] == f[1] && l[2] == f[2] && l[3] == f[3] && (k |= fa);
                    bb[b].pos = l[0] + "x" + l[1];
                    bb[b].size = l[2] + "x" + l[3];
                    a.id && "string" == typeof a.id && (k |= na); (f = Cb(a)) && (k |= va);
                    var m = Db(a);
                    m && (c |= xa);
                    var h;
                    b: {
                        h = Bb(X(a), a.tagName);
                        for (var K = 0; K < h.length; K++) if ((!h[K].id || "string" != typeof h[K].id) && Db(h[K]) == m && Cb(h[K]) == f) {
                            h = !0;
                            break b
                        }
                        h = !1
                    }
                    h && (k |= ja, e = $a((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g, "")));
                    h = [];
                    t(h, Zb);
                    n(h, b);
                    t(h, k);
                    n(h, u);
                    q ? t(h, q) : M(h, d);
                    g && n(h, g);
                    k & fa || (n(h, l[0]), n(h, l[1]), n(h, l[2]), n(h, l[3]));
                    k & na && M(h, a.id);
                    f && A(h, f);
                    k & ja && A(h, e);
                    t(h, c);
                    m && A(h, m);
                    e = h
                } else a[H] = -1,
                e = null;
                Oa.append(e, void 0);
                a = Ma(a)
            }
            Oa.append(a, void 0)
        }
        function U(a) {
            var e = r(a),
            b,
            k,
            c = 0;
            if (e && "SCROLLBAR" != e.nodeName) {
                if (e && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e.tagName)) if (e[H]) z(e);
                else if (b = X(e, "form")) for (b = b.elements, k = b.length; c < k; c++) / ^INPUT | SELECT | TEXTAREA | BUTTON$ / .test(b[c].tagName) && !b[c][H] && z(b[c]);
                else z(e);
                else z(e);
                y(N, [w(), a.type, e, s(a), a.which, a.button])
            }
        }
        function Pa(a) {
            U(a);
            var e, b;
            g.getSelection ? (a = g.getSelection(), e = a.toString(), b = a.anchorNode) : d.selection && d.selection.createRange && (a = d.selection.createRange(), e = a.text, b = a.parentElement());
            if ("string" == typeof e) {
                for (; b && 1 != b.nodeType;) b = b.parentNode;
                b && "INPUT" == b.tagName && "password" == b.type || b && (/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(b.className) || Gb("-metrika-nokeys", b).length) || e == pb || (pb = e, y(W, [w(), e]))
            }
        }
        function Qa(a) {
            var e = G(),
            b = e - Ib;
            if (! (b < Jb)) {
                var k = s(a),
                c = qb[0] - k[0],
                u = qb[1] - k[1],
                c = c * c + u * u;
                0 >= c || 16 > c && 100 > b || 20 > b && 256 > c || (Ib = e, qb = k, U(a))
            }
        }
        function C() {
            P = zb();
            var a = G();
            a - Kb < Jb || 10 > Math.abs(P[0] - rb[0]) && 10 > Math.abs(P[1] - rb[1]) || (Kb = a, rb = P, y(V, [w(), P]))
        }
        function ya(a) {
            a = r(a);
            var e = Math.random(),
            b = [a.scrollLeft, a.scrollTop];
            if (a.localId) {
                if (e = sb[a.localId], !e || 10 > Math.abs(b[0] - e[0]) && 10 > Math.abs(b[1] - e[1])) return
            } else {
                for (; sb[e];) e = Math.random();
                a.localId = e
            }
            sb[a.localId] = b;
            a !== d && (z(a), y(ba, [w(), b, a]))
        }
        function Ra() {
            y(ea, [w(), xb(), yb()])
        }
        function za(a) {
            y(Na, [], !0);
            try {
                if ("beforeunload" == a.type) for (var e = +new Date + 50; + new Date < e;);
            } catch(b) {}
        }
        function ha(a, e, b) {
            a = r(a);
            "INPUT" == a.tagName && "password" == a.type || /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className) || (z(a), y(pa, [w(), e, b, a]))
        }
        function Q(a) {
            var e = a.keyCode,
            b = J(a);
            if ({
                3 : 1,
                8 : 1,
                9 : 1,
                13 : 1,
                16 : 1,
                17 : 1,
                18 : 1,
                19 : 1,
                20 : 1,
                27 : 1,
                33 : 1,
                34 : 1,
                35 : 1,
                36 : 1,
                37 : 1,
                38 : 1,
                39 : 1,
                40 : 1,
                45 : 1,
                46 : 1,
                91 : 1,
                92 : 1,
                93 : 1,
                106 : 1,
                110 : 1,
                111 : 1,
                144 : 1,
                145 : 1
            } [e] || 112 <= e && 123 >= e || 96 <= e && 105 >= e || b & ab) 19 == e && (b & ~ab) == kb && (e = 144),
            ha(a, e, b | ab),
            tb = !1,
            O(function() {
                tb = !0
            },
            1),
            67 == e && b & kb && !(b & ra || b & Wa) && aa()
        }
        function ia(a) {
            tb && !ub && 0 !== a.which && (ha(a, a.charCode || a.keyCode, J(a)), ub = !0, O(function() {
                ub = !1
            },
            1))
        }
        function aa() {
            vb || (vb = !0, pb && y(ka, [w()]), O(function() {
                vb = !1
            },
            1))
        }
        function Aa() {
            Sa || (Sa = !0, y(ca, [w()]))
        }
        function R() {
            Sa && (Sa = !1, y(da, [w()]))
        }
        function e(a) { (!Sa || a && !a.fromElement) && Aa()
        }
        function k(a) {
            a && !a.toElement && R()
        }
        function u(a) {
            a = r(a);
            var e, b, k = 0;
            if (a && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[H]) z(a);
                else if (e = X(a, "form")) for (e = e.elements, b = e.length; k < b; k++) / ^INPUT | SELECT | TEXTAREA | BUTTON$ / .test(e[k].tagName) && !e[k][H] && z(e[k]);
                else z(a);
                y(sa, [w(), a])
            }
        }
        function q(a) { (a = r(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (z(a), y(ua, [w(), a]))
        }
        function Ba(a) {
            a = r(a);
            if (! ("INPUT" == a.tagName && "password" == a.type || a && /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className)) && a && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var e = /^(checkbox|radio)$/.test(a.type) ? a.checked: a.value;
                z(a);
                y(Ca, [w(), a, e])
            }
        }
        function K(a) {
            a = r(a);
            if (!ma(a, "-metrika-noform") && "FORM" == a.nodeName) {
                for (var e = a.elements,
                b = 0; b < e.length; b++) Fb(e[b]) || z(e[b]);
                y(Da, [w(), a], !0)
            }
        }
        function l(a) {
            C();
            if (a.touches && a.touches.length) {
                var e = r(a);
                if (e) {
                    z(e);
                    for (var b = 0; b < a.touches.length; b++) y(N, [w(), "touch", e, [a.touches[b].pageX, a.touches[b].pageY], 0, 0])
                }
            }
        }
        function E(a) {
            var e = r(a);
            if (e) {
                var b;
                "wheel" == a.type ? b = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (b = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                b && (z(e), y(Z, [w(), e, s(a), b]))
            }
        }
        var Oa = new Lb({
            protocol: a,
            counterId: b,
            counterType: c,
            meta: {
                url: B().href,
                hitId: f,
                timezone: cb,
                timestamp: Ta
            }
        }),
        mb = 20,
        Rb = 50,
        Jb = 10,
        Zb = 1,
        Sb = 2,
        F = 3,
        oa = 16,
        Y = 4,
        v = 5,
        x = 7,
        Xb = 9,
        Yb = 10,
        Vb = 11,
        Tb = 12,
        Wb = 13,
        D = 14,
        Ub = 15,
        Ea = 17,
        Fa = 18,
        Ga = 19,
        Ia = 27,
        ga = 28,
        Ja = 29,
        Ka = 30,
        La = 31,
        Ua = 32,
        qa = 33,
        Va = 1,
        Xa = 2,
        Za = 4,
        ja = 1,
        la = 2,
        ta = 4,
        fa = 8,
        va = 16,
        na = 32,
        wa = 64,
        xa = 2,
        ra = 1,
        Wa = 2,
        kb = 4,
        eb = 8,
        ab = 16,
        fb = {
            A: 1,
            ABBR: 2,
            ACRONYM: 3,
            ADDRESS: 4,
            APPLET: 5,
            AREA: 6,
            B: 7,
            BASE: 8,
            BASEFONT: 9,
            BDO: 10,
            BIG: 11,
            BLOCKQUOTE: 12,
            BODY: 13,
            BR: 14,
            BUTTON: 15,
            CAPTION: 16,
            CENTER: 17,
            CITE: 18,
            CODE: 19,
            COL: 20,
            COLGROUP: 21,
            DD: 22,
            DEL: 23,
            DFN: 24,
            DIR: 25,
            DIV: 26,
            DL: 27,
            DT: 28,
            EM: 29,
            FIELDSET: 30,
            FONT: 31,
            FORM: 32,
            FRAME: 33,
            FRAMESET: 34,
            H1: 35,
            H2: 36,
            H3: 37,
            H4: 38,
            H5: 39,
            H6: 40,
            HEAD: 41,
            HR: 42,
            HTML: 43,
            I: 44,
            IFRAME: 45,
            IMG: 46,
            INPUT: 47,
            INS: 48,
            ISINDEX: 49,
            KBD: 50,
            LABEL: 51,
            LEGEND: 52,
            LI: 53,
            LINK: 54,
            MAP: 55,
            MENU: 56,
            META: 57,
            NOFRAMES: 58,
            NOSCRIPT: 59,
            OBJECT: 60,
            OL: 61,
            OPTGROUP: 62,
            OPTION: 63,
            P: 64,
            PARAM: 65,
            PRE: 66,
            Q: 67,
            S: 68,
            SAMP: 69,
            SCRIPT: 70,
            SELECT: 71,
            SMALL: 72,
            SPAN: 73,
            STRIKE: 74,
            STRONG: 75,
            STYLE: 76,
            SUB: 77,
            SUP: 78,
            TABLE: 79,
            TBODY: 80,
            TD: 81,
            TEXTAREA: 82,
            TFOOT: 83,
            TH: 84,
            THEAD: 85,
            TITLE: 86,
            TR: 87,
            TT: 88,
            U: 89,
            UL: 90,
            VAR: 91,
            NOINDEX: 100
        },
        $ = [],
        lb = 0,
        Hb = 0;
        I(0);
        var nb = 0,
        ob = 1,
        Ib = 0,
        qb = [0, 0],
        Kb = 0,
        rb = [0, 0],
        sb = {},
        tb = !0,
        ub = !1,
        pb = "",
        vb = !1,
        Sa = !0,
        gb = G(),
        H = "metrikaId_" + Math.random(),
        bb = {},
        db = ":submit" + Math.random();
        "MetrikaPlayer" != g.name && (h(d, "mousemove", Qa), h(d, "click", U), h(d, "dblclick", U), h(d, "mousedown", U), h(d, "mouseup", Pa), h(g, "scroll", C), "onmousewheel" in d ? h(d, "mousewheel", E) : h(d, "wheel", E), h(g, "beforeunload", za), Mb || h(g, "unload", za), h(g, "resize", Ra), h(d, "keydown", Q), h(d, "keypress", ia), h(d, "copy", aa), h(d, "touchmove", l), h(d, "touchstart", l), d.attachEvent && !g.opera ? (h(d, "focusin", e), h(d, "focusout", k)) : (h(g, "focus", Aa), h(g, "blur", R), h(d, "blur", R)), d.addEventListener ? (d.addEventListener("scroll", ya, !0), d.addEventListener("focus", u, !0), d.addEventListener("blur", q, !0), d.addEventListener("change", Ba, !0), d.addEventListener("submit", K, !0)) : d.attachEvent && (h(d, "focusin", u), h(d, "focusout", q),
        function() {
            for (var a = d.getElementsByTagName("form"), e = 0; e < a.length; e++) {
                for (var b = a[e].getElementsByTagName("*"), k = 0; k < b.length; k++) / ^INPUT | SELECT | TEXTAREA$ / .test(b[k].tagName) && h(b[k], "change", Ba);
                h(a[e], "submit", K)
            }
        } ()),
        function() {
            var a = d.getElementsByTagName("form");
            if (a.length) for (var e = 0; e < a.length; e++) {
                var b = a[e].submit;
                if ("function" == typeof b || "object" == typeof b && /^\s*function submit\(\)/.test(String(b))) a[e][db] = b,
                a[e].submit = function() {
                    K({
                        target: this
                    });
                    return this[db]()
                }
            }
        } (), "0:0" != P.join(":") && C(), Ra(), hb.uploadPage = function(e) {
            if ("function" == typeof g.toStaticHTML && -1 < g.toStaticHTML.toString().indexOf("NoScript")) return ! 1;
            var k = d.documentElement;
            if (k && 19E4 < ("" + k.innerHTML).length) return ! 1;
            var u = g.XMLHttpRequest ? new g.XMLHttpRequest: new ActiveXObject("Msxml2.XMLHTTP"),
            q = ("" + (d.characterSet || d.charset || "")).toLowerCase(),
            k = "text/html" + (q ? ";charset=" + q: ""),
            l = new $b({
                protocol: a,
                counterId: b,
                counterType: c
            });
            if ("html" == e) return e = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"),
            l.sendContent(Nb().replace(e, ""), k, f, cb, Ta),
            !0;
            u && (u.open("get", B().href, !0), u.onreadystatechange = function() {
                4 == u.readyState && l.sendContent(u.responseText, u.getResponseHeader("content-type"), f, cb, Ta)
            },
            u.overrideMimeType && q && u.overrideMimeType(k), u.send(null));
            return ! 0
        });
        return {
            start: function() {
                Oa.activate()
            },
            stop: function() {
                Oa.clear();
                p(d, "mousemove", Qa);
                p(d, "click", U);
                p(d, "dblclick", U);
                p(d, "mousedown", U);
                p(d, "mouseup", Pa);
                p(d, "mousewheel", E);
                p(d, "wheel", E);
                p(g, "scroll", C);
                p(g, "beforeunload", za);
                p(g, "unload", za);
                p(g, "resize", Ra);
                p(d, "keydown", Q);
                p(d, "keypress", ia);
                p(d, "copy", aa);
                p(d, "touchmove", l);
                p(d, "touchstart", l);
                p(d, "focusin", e);
                p(d, "focusout", k);
                p(g, "focus", Aa);
                p(g, "blur", R);
                p(d, "blur", R);
                d.removeEventListener ? (d.removeEventListener("scroll", ya, !0), d.removeEventListener("focus", u, !0), d.removeEventListener("blur", q, !0), d.removeEventListener("change", Ba, !0), d.removeEventListener("submit", K, !0)) : d.detachEvent && (p(d, "focusin", u), p(d, "focusout", q),
                function() {
                    for (var a = d.getElementsByTagName("form"), e = 0; e < a.length; e++) {
                        for (var b = a[e].getElementsByTagName("*"), k = 0; k < b.length; k++) / ^INPUT | SELECT | TEXTAREA$ / .test(b[k].tagName) && p(b[k], "change", Ba);
                        p(a[e], "submit", K)
                    }
                } ()); (function() {
                    for (var a = d.getElementsByTagName("form"), e = 0; e < a.length; e++) a[e][db] && (a[e].submit = a[e][db])
                })()
            },
            uploadPages: function(a, e) {
                function b() {
                    p(d, "DOMContentLoaded", b);
                    p(g, "load", b);
                    for (var k = a.split(/\n/), c = B().href, u = /regexp:/, f = 0; f < k.length; f++) {
                        var q = k[f];
                        if (q) if (u.test(q)) {
                            q = wb(q.replace(u, ""));
                            try {
                                var l = RegExp(q)
                            } catch(h) {}
                            if (l && l.test(c)) {
                                hb.uploadPage(e);
                                break
                            }
                        } else if ( - 1 !== c.indexOf(q)) {
                            hb.uploadPage(e);
                            break
                        }
                    }
                }
                "complete" == d.readyState ? b() : (h(d, "DOMContentLoaded", b), h(g, "load", b))
            }
        }
    }
    var ac = !1,
    Ha = "",
    Mb = !Ja(/webkit/) && Ja(/gecko/),
    P = zb(),
    V = [],
    Ua = null,
    s = {
        mixin: function(a) {
            for (var b = 1; b < arguments.length; b++) if (arguments[b]) {
                for (var c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
            }
            return a
        }
    },
    N = function(a) {
        a = a || {};
        s.mixin(this, a);
        this._initComponent()
    };
    N.prototype._initComponent = function() {};
    N.inherit = function(a) {
        a = a || {};
        var b = "function" == typeof this ? this: Object;
        a.hasOwnProperty("constructor") || (a.constructor = function() {
            b.apply(this, arguments)
        });
        var c = function() {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        s.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = N.inherit;
        return a.constructor
    };
    var ba = N.inherit({
        counterId: "",
        _initComponent: function() {
            ba.superclass._initComponent.apply(this, arguments);
            this._buffer = {};
            this._ls = null;
            try {
                this._ls = g.localStorage
            } catch(a) {}
        },
        set: function(a, b) {
            if (this.isEnabled()) try { ! b || b && ga(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), JSON.stringify(b))
            } catch(c) {}
        },
        get: function(a) {
            if (this.isEnabled()) try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch(b) {}
            return null
        },
        remove: function(a) {
            if (this.isEnabled()) try {
                this._ls.removeItem(this._getLsKey(a))
            } catch(b) {}
        },
        isEnabled: function() {
            return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
        },
        _getLsKey: function(a) {
            return "_ym" + this.counterId + "_" + a
        }
    }),
    Ca = N.inherit({
        counterId: "",
        onlyCurrentDomain: !1,
        skipPrefix: !1,
        _initComponent: function() {
            Ca.superclass._initComponent.apply(this, arguments);
            this._domain = null;
            if (!this.onlyCurrentDomain) for (var a = A.host.split("."), b = 2;;) if (b <= a.length) {
                if (this._domain = "." + a.slice( - b).join("."), b++, this.isEnabled()) break
            } else {
                this._domain = null;
                break
            }
        },
        create: function(a, b, c) {
            a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
            c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
            this._domain && a.push("domain=" + this._domain);
            a.push("path=/");
            try {
                d.cookie = a.join(";")
            } catch(g) {}
        },
        read: function(a) {
            try {
                var b = d.cookie
            } catch(c) {}
            return b && b.match(RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
        },
        erase: function(a) {
            this.create(a, "", -1)
        },
        isEnabled: function() {
            this.create("metrika_enabled", "1", 60);
            var a = !!this.read("metrika_enabled");
            this.erase("metrika_enabled");
            return a
        },
        _prepareName: function(a) {
            return (this.skipPrefix ? "": "_ym_") + a + (this.counterId ? "_" + this.counterId: "")
        }
    });
    Ca.isEnabled = function() {
        return (new Ca({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    s.forEachKey = function(a, b, c) {
        for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d], a)
    };
    s.inArray = function(a, b) {
        for (var c = 0; c < a.length; c++) if (a[c] == b) return ! 0;
        return ! 1
    };
    var I = N.inherit({
        transports: [],
        postParams: [],
        send: function(a, b, c, d) {
            c = c ||
            function() {};
            var f = {},
            g = {};
            s.forEachKey(b,
            function(a, b) {
                s.inArray(this.postParams, a) ? g[a] = b: f[a] = b
            },
            this); (function p(b) {
                if (b < this.transports.length) try {
                    var s = new this.transports[b];
                    s.request(a, f, g,
                    function(a, f) {
                        a ? c.call(d, f) : p.call(this, b + 1)
                    },
                    this)
                } catch(r) {
                    console.log(r),
                    la(r, "send by " + (s && s.id)),
                    p.call(this, b + 1)
                } else fa("Send error. " + a)
            }).call(this, 0)
        }
    }),
    qa = {};
    s.isArray = function(a) {
        return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
    };
    qa.stringify = function(a) {
        var b = [],
        c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (s.isArray(d)) for (var f = 0; f < d.length; f++) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d[f])));
            else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        }
        return b.join("&")
    };
    var Da = N.inherit({
        _buildUrl: function(a, b) {
            return a + ( - 1 < a.indexOf("?") ? "&": "?") + qa.stringify(b)
        }
    }),
    M = Da.inherit({
        id: "XHR",
        request: function(a, b, c, d, f) {
            if (g.opera && "function" == typeof g.opera.version) {
                var s = g.opera.version();
                if ("string" == typeof s && "12" == s.split(".")[0] && /[^a-z0-9.:-]/.test(A.host)) return d.call(f, !1)
            }
            if (g.XMLHttpRequest) {
                var h = new XMLHttpRequest;
                if ("withCredentials" in h) {
                    a = this._buildUrl(a, b);
                    h.open("POST", a, !0);
                    h.withCredentials = !0;
                    h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    h.send(qa.stringify(c)); (function() {
                        4 == h.readyState ? d.call(f, 200 == h.status) : O(arguments.callee, 50, "TransportXHR.request")
                    })();
                    return
                }
            }
            d.call(f, !1)
        }
    });
    s.random = function(a, b) {
        2 > arguments.length && (a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    s.mergeArrays = function(a) {
        for (var b = 1; b < arguments.length; b++) if (s.isArray(arguments[b])) for (var c = 0; c < arguments[b].length; c++) a[a.length] = arguments[b][c]
    };
    var ca = Da.inherit({
        id: "form",
        enctype: "application/x-www-form-urlencoded",
        htmlfileOnly: !1,
        _initComponent: function() {
            ca.superclass._initComponent.apply(this, arguments);
            "_htmlfile" in ca.prototype || (ca.prototype._htmlfile = this._createHtmlfile());
            this._doc = this._htmlfile || (this.htmlfileOnly ? null: d)
        },
        request: function(a, b, c, d, f) {
            var g = this._doc;
            if (!g) return d.call(f, !1);
            var h = "ifr" + s.random(),
            p = g.createElement("div");
            p.style.position = "absolute";
            p.style.left = "-99999px";
            p.style.top = "-99999px";
            var r = ['<iframe name="', h, '"></iframe>', '<form action="', this._buildUrl(a, b), '" method="post" target="', h, '" enctype="', this.enctype, '">'];
            s.forEachKey(c,
            function(a) {
                s.mergeArrays(r, ['<textarea name="', a, '"></textarea>'])
            });
            s.mergeArrays(r, ["</form>"]);
            p.innerHTML = r.join("");
            g.body.appendChild(p);
            var B = p.getElementsByTagName("form")[0];
            s.forEachKey(c,
            function(a, b) {
                B[a].value = b
            });
            B.submit();
            O(function() {
                g.body.removeChild(p)
            },
            1E4, "TransportForm.request.2");
            return d.call(f, !0)
        },
        _createHtmlfile: function() {
            try {
                if (g.ActiveXObject) {
                    var a = new ActiveXObject("htmlfile");
                    a.open();
                    a.write("<html><body></body></html>");
                    a.close();
                    return a
                }
            } catch(b) {}
            return null
        }
    }),
    W = ca.inherit({
        id: "htmlfile",
        htmlfileOnly: !0
    }),
    bc = Da.inherit({
        id: "img",
        request: function(a, b, c, d, f) {
            var g = this._buildUrl(a, s.mixin({},
            b, c));
            a = new Image;
            a.onload = L(function() {
                d.call(f, !0)
            },
            "TransportImage.request");
            a.onerror = L(function() {
                fa("Img onerror; " + g);
                d.call(f, !1)
            },
            "TransportImage.request");
            a.src = g
        }
    });
    s.defer = function(a, b, c, d, f) {
        return O(function() {
            a.apply(c, d || [])
        },
        b, f)
    };
    var Z = I.inherit({
        protocol: "",
        host: "mc.yandex.ru",
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [M, W, bc],
        _initComponent: function() {
            Z.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new ba)
        },
        send: function(a, b, c, d) {
            if (this.retry && this._storage.isEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                for (var f = this._storage.get("retryReqs") || {},
                g = 0; f[g];) g++;
                f[g] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: Ya._globalMetrikaHitId,
                    time: +new Date
                };
                this._storage.set("retryReqs", f)
            }
            b.st = Math.round((new Date).getTime() / 1E3);
            var f = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join(""),
            h = [];
            b && (s.forEachKey(b,
            function(a, b) {
                "t" != a && s.mergeArrays(h, [a, b])
            }), b.t && s.mergeArrays(h, ["t", b.t]));
            h.length && (a["browser-info"] = h.join(":"));
            this.counterType && (a["cnt-class"] = this.counterType);
            if (this.retry && this._storage.isEnabled()) var p = s.defer(function() {},
            1E4, this, [], "SenderBK.timeout");
            return Z.superclass.send.call(this, f, a,
            function() {
                if (this.retry && this._storage.isEnabled()) {
                    clearTimeout(p);
                    var a = this._storage.get("retryReqs") || {};
                    a[g] && (delete a[g], this._storage.set("retryReqs", a))
                }
                c && c.apply(d, arguments)
            },
            this)
        }
    });
    Z.retransmit = function() {
        var a = new ba,
        b = a.get("retryReqs") || {};
        a.remove("retryReqs");
        s.forEachKey(b,
        function(a, b) {
            b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 > +new Date && !(2 < b.browserInfo.rqnl) && (new Z({
                protocol: b.protocol,
                host: b.host,
                resource: b.resource,
                counterId: b.counterId,
                postParams: b.postParams || [],
                retry: !0
            })).send(b.params, b.browserInfo)
        })
    };
    var da = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/=",
        tailSafe: "*-_",
        encode: function(a, b) {
            for (var c = (da.abc + (b ? da.tailSafe: da.tail)).split(""), d = a.length, f = [], g = d - d % 3, h, p = 0; p < g; p += 3) h = (a[p] << 16) + (a[p + 1] << 8) + a[p + 2],
            S(f, c[h >> 18 & 63], c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63]);
            switch (d - g) {
            case 1:
                h = a[g] << 4;
                S(f, c[h >> 6 & 63], c[h & 63], c[64], c[64]);
                break;
            case 2:
                h = (a[g] << 10) + (a[g + 1] << 2),
                S(f, c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63], c[64])
            }
            return f.join("")
        }
    },
    cc = {
        encode: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
                var f = a.charCodeAt(c);
                128 > f ? b.push(f) : (127 < f && 2048 > f ? b.push(f >> 6 | 192) : (b.push(f >> 12 | 224), b.push(f >> 6 & 63 | 128)), b.push(f & 63 | 128))
            }
            return b
        }
    },
    $b = Z.inherit({
        resource: "webvisor",
        transports: [M, ca],
        postParams: ["wv-data"],
        sendContent: function(a, b, c, d, f, g, h) {
            if (!a) return ! 1; - 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
            a = {
                "wv-type": 1,
                "page-url": B().href,
                "wv-hit": c,
                "wv-data": da.encode(cc.encode(a))
            };
            return this.send(a, {
                z: d,
                i: f,
                pct: b || ""
            },
            g, h)
        }
    });
    s.throttle = function(a, b, c, d) {
        var f, g, h;
        return function() {
            g = arguments;
            h = this;
            f ||
            function() {
                f = null;
                g && (a.apply(c || h, g), g = null, f = O(arguments.callee, b, d))
            } ()
        }
    };
    var ra = N.inherit({
        storage: null,
        storageKey: "dataBuffer",
        maxBufferSize: 255,
        flushTimeout: 1E4,
        active: !0,
        meta: null,
        onFlush: function() {},
        onFlushCtx: null,
        bufferExpireTime: 864E5,
        _initComponent: function() {
            ra.superclass._initComponent.apply(this, arguments);
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = s.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            if (this.storage) {
                var a = this.storage.get(this.storageKey);
                a && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum);
                this.clear()
            }
        },
        append: function(a, b) {
            s.mergeArrays(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this._data.length >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = s.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
        },
        activate: function() {
            this.active || (this.active = !0, this.append([]))
        },
        clear: function() {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        },
        _flush: function() {
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
            this._packetNumber++;
            this.clear()
        },
        _saveToStorage: function() {
            this.storage && this._data.length && this.storage.set(this.storageKey, {
                data: this._data,
                meta: this.meta,
                pnum: this._packetNumber,
                time: +new Date
            })
        }
    });
    s.fletcher = function(a) {
        for (var b = a.length,
        c = 0,
        d = 255,
        f = 255; b;) {
            var g = 21 < b ? 21 : b,
            b = b - g;
            do {
                var h = "string" == typeof a ? a.charCodeAt(c) : a[c];
                c++;
                if (255 < h) var p = h >> 8,
                h = h & 255,
                h = h ^ p;
                d += h;
                f += d
            } while (-- g );
            d = (d & 255) + (d >> 8);
            f = (f & 255) + (f >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (f & 255) + (f >> 8);
        return 65535 == a ? 0 : a
    };
    var dc = Z.inherit({
        resource: "webvisor",
        retry: !0,
        postParams: ["wv-data"],
        sendPacket: function(a, b, c, d, f, g, h, p) {
            if (!a || !a.length) return ! 1;
            a = {
                rn: s.random(),
                "page-url": b,
                wmode: 0,
                "wv-type": 0,
                "wv-hit": c,
                "wv-part": d + 1,
                "wv-check": s.fletcher(a),
                "wv-data": da.encode(a, !0)
            };
            return this.send(a, {
                z: f,
                i: g
            },
            h, p)
        }
    }),
    Lb = ra.inherit({
        protocol: "",
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7500,
        flushTimeout: 3E4,
        storageKey: "visorbuff",
        active: !1,
        _initComponent: function() {
            this.storage = new ba({
                counterId: this.counterId
            });
            this._sender = new dc({
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType
            });
            Lb.superclass._initComponent.apply(this, arguments)
        },
        onFlush: function(a, b, c) {
            this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
        }
    }),
    r = {
        _jScriptVersion: 0,
        getJScriptVersion: function() {
            r._jScriptVersion || (r._jScriptVersion = (new Function("return /*@cc_on @_jscript_version @*/;"))());
            return r._jScriptVersion
        }
    };
    g.Ya = g.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._globalMetrikaHitId = s.random();
    var ec = !1,
    A = B(),
    cb,
    Ta,
    G = g.navigator,
    sa = g.screen,
    ea = "https:" == A.protocol ? "https:": "http:",
    Ia = 510,
    Ea = 5.8 >= r.getJScriptVersion(),
    Va = Ea ? 512 : 2048,
    fc = Ea ? 512 : 2048,
    Wa = Ea ? 100 : 400,
    Xa = "noindex",
    Fa = 50,
    eb = RegExp("\\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$", "i"),
    gc = J(),
    hc = "_ym_visorc",
    Za,
    Ga,
    ic = "//mc.yandex.ru/clmap/";
    g.Ya.Metrika = function(a, b, c, m) {
        var f = this;
        return L(function() {
            function I(a, b) {
                b = b || 256;
                if (!a) return "";
                a.length > b && (a = a.substr(0, b));
                return (g.encodeURIComponent || g.escape)(a).replace(/\+/g, "%2B")
            }
            function h(a) {
                function b(a) {
                    return a ? a.replace(/\\/g, "\\\\").replace(/"/g, '\\"') : ""
                }
                if (a === ka) return "";
                if (null === a) return "null";
                switch (a.constructor) {
                case Boolean:
                    return a.toString();
                case Number:
                    return isFinite(a) ? a.toString() : "null";
                case String:
                    return '"' + b(a) + '"';
                case Array:
                    for (var c = [], d = 0, f = a.length; d < f; d++) c[c.length] = h(a[d]);
                    return "[" + c.join(",") + "]";
                case Object:
                    c = "{";
                    d = 0;
                    for (f in a) if (a.hasOwnProperty(f)) {
                        var g = a[f];
                        g !== ka && (c += (d ? ",": "") + '"' + b(f) + '":' + h(g), d++)
                    }
                    return c + "}";
                default:
                    return "null"
                }
            }
            function p(a, b) {
                if (!a || !b) return ! 1;
                for (var c = [], d = 0; d < b.length; d++) c.push(b[d].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
                return RegExp("\\.(" + c.join("|") + ")$", "i").test(a)
            }
            function M(a) {
                a = a.target || a.srcElement;
                if (!a) return ! 1;
                3 == a.nodeType && (a = a.parentNode);
                for (var b = a.nodeName.toString().toLowerCase(); a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);) a = a.parentNode,
                b = a.nodeName.toString().toLowerCase();
                return a.href ? a: !1
            }
            function N(a, b) {
                return (a ? a.replace(/^www\./, "") : "") == (b ? b.replace(/^www\./, "") : "") ? !0 : !1
            }
            function S(a, b) {
                function c(a) {
                    a = a.split(":");
                    a = a[1] || "";
                    a = a.replace(/^\/*/, "").replace(/^www\./, "");
                    return a.split("/")[0]
                }
                return a && b ? c(a) == c(b) ? !0 : !1 : a || b ? !1 : !0
            }
            function P(a, b) {
                var c = b.target,
                d = !1;
                if (!b.hostname) return ! 1;
                c && "_self" != c && "_top" != c && "_parent" != c || (d = !0); (c = a.shiftKey || a.ctrlKey || a.altKey) || a.modifiers && g.Event && (c = a.modifiers & g.Event.CONTROL_MASK || a.modifiers & g.Event.SHIFT_MASK || a.modifiers & g.Event.ALT_MASK);
                return d && !c
            }
            function V(e, b, c) {
                function q(a, b) {
                    a && b && (c ? K[a] = b: K[K.length] = [a, b].join(":"))
                }
                function h(a) {
                    q(a, b[a] ? "1": "")
                }
                b = b || {};
                var K = c ? {}: [],
                l = -1 * (new Date).getTimezoneOffset(),
                E = X();
                Ta || (Ta = E, cb = l);
                q("j", r.getJavaEnabled() ? "1": "");
                sa && q("s", sa.width + "x" + sa.height + "x" + (sa.colorDepth || sa.pixelDepth));
                g.devicePixelRatio && q("sk", g.devicePixelRatio);
                q("f", r.getFlashVersion());
                q("l", r.getSilverlightVersion());
                q("fp", r.getFingerPrint());
                b.pa || q("w", t() + "x" + n());
                q("z", l);
                q("i", E);
                q("et", Math.round((new Date).getTime() / 1E3));
                q("en", ("" + (d.characterSet || d.charset || "")).toLowerCase());
                q("v", Ia);
                q("c", G.cookieEnabled ? "1": "");
                q("jv", r.getJScriptVersion());
                q("la", r.getLanguage());
                q("ex", "prerender" == d.webkitVisibilityState ? "pre1": "");
                R && q("wh", "1");
                E = "ar ln dl ad nb pa".split(" ");
                for (l = 0; l < E.length; l++) h(E[l]);
                E = ["va", "vt", "sn", "sa", "he"];
                b.nb && E.push("cl");
                for (l = 0; l < E.length; l++) {
                    var m = E[l];
                    q(m, b[m])
                }
                b.reqNum && (l = new ba({
                    counterId: a
                }), l.isEnabled() && ((E = l.get("reqNum")) ? E++:E = 1, l.set("reqNum", E), (E = l.get("reqNum")) && q("rqn", E)));
                q("rn", ua());
                q("hid", Na);
                q("ds", ca());
                f._firstPaint || (f._firstPaint = da(), q("fp", f._firstPaint));
                if (f._webvisor) {
                    g.name || (g.name = Math.round(65535 * Math.random()));
                    if (l = +g.name) 0 > l && (l *= -1),
                    l %= 65535;
                    q("wn", l || $a(g.name));
                    try {
                        g.history && q("hl", String(g.history.length))
                    } catch(p) {}
                }
                e = "undefined" == typeof e ? (e = w()) ? s.trim(e, Wa) : "": s.trim(e, Wa);
                q("t", e);
                return c ? K: K.join(":")
            }
            function w() {
                var a = d.title;
                "string" != typeof a && (a = (a = d.getElementsByTagName("title")) && a.length ? a[0].innerHTML: "");
                return a
            }
            function X() {
                for (var a = new Date,
                a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()], b = "", c = 0; c < a.length; c++) b += 10 > a[c] ? "0" + a[c] : a[c];
                return b
            }
            function t() {
                var a = -1;
                d.documentElement && "CSS1Compat" == d.compatMode ? a = d.documentElement.clientWidth: d.body && (a = d.body.clientWidth);
                return a
            }
            function n() {
                var a = -1;
                d.documentElement && "CSS1Compat" == d.compatMode ? a = d.documentElement.clientHeight: d.body && (a = d.body.clientHeight);
                return a
            }
            function W() {
                var a = g.performance || g.webkitPerformance,
                b = [];
                if (a = a && a.timing) {
                    var c = a.navigationStart;
                    if (c) for (b = [a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - c, a.redirectEnd - a.redirectStart, a.redirectCount], b.push(a.domInteractive && a.domLoading ? a.domInteractive - a.domLoading: null), b.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart: null), b.push(a.domComplete ? a.domComplete - c: null), b.push(a.loadEventStart ? a.loadEventStart - c: null), b.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart: null), b.push(a.domContentLoadedEventStart ? a.domContentLoadedEventStart - c: null), a = 0; a < b.length; a++) c = b[a],
                    null !== c && (0 > c || 36E5 < c) && (b[a] = null)
                }
                return b
            }
            function ca() {
                var a = [],
                b = f._lastPerformanceTiming,
                c = W();
                if (b) for (var d = 0,
                g = b.length; d < g; d++) null === c[d] ? a.push(c[d]) : a.push(b[d] === c[d] ? "": c[d]);
                else a = c;
                f._lastPerformanceTiming = c;
                return a.join(",")
            }
            function da() {
                var a;
                if ("object" == typeof g.chrome && g.chrome.loadTimes) {
                    if (a = g.chrome.loadTimes(), a.requestTime && a.firstPaintTime) return~~ (1E3 * (a.firstPaintTime - a.requestTime))
                } else if (g.performance && g.performance.timing && (a = g.performance.timing, a.navigationStart && a.msFirstPaint)) return a.msFirstPaint - a.navigationStart;
                return null
            }
            function ja(a) {
                var b = d.referrer || "";
                if (RegExp("^https?://" + A.host + "/").test(b)) return ! 1;
                for (var c = a.patterns,
                f = 0; f < c.length; f++) if (b.match(RegExp(c[f], "i"))) {
                    var g = a.params || [];
                    if (g.length) for (var h = pa((RegExp.$1 || "").replace(/\+/g, "%20")), l = 0; l < g.length; l++) {
                        if (h == pa(g[l])) return ! 0
                    } else return ! 0
                }
                return ! 1
            }
            function fa(a, b) {
                var c = !1;
                if (a && "string" != typeof a && a.length) for (var f = 0; f < a.length; f++) {
                    var g = a[f].selector,
                    h = a[f].text,
                    l = g.charAt(0),
                    g = g.slice(1);
                    if ("#" == l) {
                        if (l = d.getElementById(g)) c = !0,
                        b && ha.unshift([l, l.innerHTML]),
                        l.innerHTML = h
                    } else if ("." == l) for (l = Gb(g), g = 0; g < l.length; g++) {
                        var c = !0,
                        E = l[g],
                        m = h;
                        b && ha.unshift([E, E.innerHTML]);
                        E.innerHTML = m
                    }
                }
                return c
            }
            function ga() {
                for (var a = 0; a < ha.length; a++) ha[a][0].innerHTML = ha[a][1]
            }
            function na(a, b) {
                a = a && a.replace(/^\?/, "");
                b = b && b.replace(/^#/, "");
                var c = "";
                if (a) for (var d = a.split("&"), f = 0; f < d.length; f++) {
                    var g = d[f].split("=");
                    "_openstat" == g[0] && (c = g[1])
                }
                b && 0 == b.indexOf("_openstat=") && (c = b.slice(10));
                c && (c = -1 < c.indexOf(";") ? pa(c) : qa(c.replace(/[-*_]/g,
                function(a) {
                    return {
                        "*": "+",
                        "-": "/",
                        _: "="
                    } [a] || a
                })));
                return c && (c = c.split(";"), 4 == c.length) ? {
                    service: c[0],
                    campaign: c[1],
                    ad: c[2],
                    source: c[3]
                }: null
            }
            function pa(a) {
                try {
                    return decodeURIComponent(a)
                } catch(b) {
                    return ""
                }
            }
            function qa(a) {
                for (; a.length % 4;) a += "=";
                var b, c, d, f, g, l = 0,
                h = "";
                do {
                    b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++));
                    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++));
                    f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++));
                    g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++));
                    if (0 > b || 0 > c || 0 > f || 0 > g) return null;
                    d = b << 18 | c << 12 | f << 6 | g;
                    b = d >> 16 & 255;
                    c = d >> 8 & 255;
                    d &= 255;
                    h = 64 == f ? h + String.fromCharCode(b) : 64 == g ? h + String.fromCharCode(b, c) : h + String.fromCharCode(b, c, d)
                } while ( l < a . length );
                a = h;
                f = "";
                for (l = c1 = c2 = g = 0; g < a.length;) l = a.charCodeAt(g),
                128 > l ? (f += String.fromCharCode(l), g++) : 191 < l && 224 > l ? (c2 = a.charCodeAt(g + 1), f += String.fromCharCode((l & 31) << 6 | c2 & 63), g += 2) : (c2 = a.charCodeAt(g + 1), c3 = a.charCodeAt(g + 2), f += String.fromCharCode((l & 15) << 12 | (c2 & 63) << 6 | c3 & 63), g += 3);
                return f
            }
            function ra() {
                var e = !1;
                if (Ya._metrika.hitParam[y]) {
                    if (1 != c || Ya._metrika.counters[y]) return ! 1;
                    e = !0
                }
                Ya._metrika.counters[y] = f;
                Ya._metrika.hitParam[y] = 1;
                f._webvisor = !m && (C && C.webvisor || ac || ec);
                f._directCampaign = C && C.directCampaign;
                C && C.trackHash && f.trackHash(!0);
                if (!m && !e) {
                    f.replacePhones();
                    var k = new Ca({
                        counterId: a
                    }),
                    u = k.read("visorc") || Ka(hc);
                    "b" != u && "w" != u && (u = "");
                    if (!Pb() || Ja("opera mini")) u = "b";
                    Za = J();
                    var e = new za({
                        protocol: ea,
                        counterType: c,
                        counterId: a
                    }),
                    q = {
                        ut: z,
                        he: C ? ~~C.httpError: 0,
                        ad: 1 == c && g.Ya && g.Ya.Direct ? !0 : !1,
                        saveRef: !0
                    };
                    e.sendHit(A.href, w(), d.referrer, b, q, u,
                    function(a) {
                        Ga || (Ga = J());
                        a = a || {};
                        var b = a.webvisor || {};
                        if (ia) {
                            var e = +b.recp;
                            if (!isFinite(e) || 0 > e || 1 < e) u = "w";
                            u || (u = Na % 1E4 / 1E4 < e ? "w": "b");
                            k.create("visorc", u, 30);
                            "w" == u ? (ia.start(), e = b.arch_type, (b = b.urls) && e && ia.uploadPages(b, e)) : ia.stop()
                        }
                        b = a.mp2;
                        a = f;
                        k.erase("mp2_substs");
                        if (b) {
                            b: if ((e = b.conditions) && e.length) for (var c = 0; c < e.length; c++) {
                                var q;
                                if ("ref" == e[c].type) q = ja(e[c]);
                                else if (q = "adv" == e[c].type) {
                                    var m = e[c],
                                    p = Ya._metrika.counter._directCampaign,
                                    n = m.ServiceNamePattern,
                                    s = m.RefererPattern;
                                    q = p ? m.direct_orders: m.direct_camp;
                                    var r = d.referrer,
                                    F = A.search,
                                    F = F && F.replace(/^\?/, ""),
                                    oa = {};
                                    if (F) for (var F = F.split("&"), Y = 0; Y < F.length; Y++) {
                                        var v = F[Y].split("=");
                                        oa[pa(v[0])] = pa(v[1])
                                    }
                                    for (var F = na(A.search, A.hash), Y = {},
                                    v = ["source", "medium", "campaign", "term", "content"], x = 0; x < v.length; x++) oa["utm_" + v[x]] && (Y[v[x]] = oa["utm_" + v[x]]);
                                    x = p ? "direct.yandex.ru": F && F.service || Y.source;
                                    v = !1;
                                    if (!v && n && n.length) for (var t = 0; t < n.length; t++) if (RegExp(n[t], "i").test(x)) {
                                        v = !0;
                                        break
                                    }
                                    if (!v && s && s.length) for (n = 0; n < s.length; n++) if (RegExp(s[n], "i").test(r)) {
                                        v = !0;
                                        break
                                    } ! v && m.google_adwords && oa.gclid && (v = !0); ! v && m.yandex_direct && oa.yclid && (v = !0);
                                    if (v && q && q.length && (v = !1, m = p || F && F.campaign || Y && Y.campaign)) for (p = 0; p < q.length; p++) if (q[p] == m) {
                                        v = !0;
                                        break
                                    }
                                    q = v
                                }
                                if (q) {
                                    e[c].track_id && k.create("mp2_track", e[c].track_id, 43200);
                                    break b
                                }
                            }
                            e = k.read("mp2_track");
                            b = b.substs && b.substs[e];
                            e && b ? (k.create("mp2_substs", h(b)), b = fa(b), a.params("__ym", b ? "mp_trackid": "mp_trackid_bad", e)) : ga()
                        } else ga();
                        T(g, "load", f.replacePhones);
                        f._inited = !0
                    })
                }
                ta();
                C && (C.enableAll ? f.enableAll() : (C.clickmap && f.clickmap(C.clickmap), C.trackLinks && f.trackLinks(C.trackLinks), C.accurateTrackBounce && f.accurateTrackBounce(C.accurateTrackBounce), C.ad && ad()));
                f._webvisor && (ia = new Qb(ea, a, c, C, Na, f))
            }
            function la(a) {
                var b = {
                    delay: Fa
                };
                switch (typeof a) {
                case "string":
                    b.on = !0;
                    break;
                case "object":
                    b.on = !0;
                    b.delay = "number" != typeof a.delay ? Fa: a.delay;
                    break;
                case "boolean":
                    b.on = a;
                    break;
                default:
                    return
                }
                f._trackLinks = b
            }
            function ta() {
                la(!1);
                T(d, "click",
                function(a) {
                    f._trackLinks.on && va(a)
                })
            }
            function va(a) {
                var b = M(a);
                if (b) {
                    var c = !1,
                    d = "" + b.href,
                    g = d ? d.split(/\?/)[0] : "",
                    h = function(a) {
                        var e = wb(b.innerHTML ? b.innerHTML.toString().replace(/<\/?[^>]+>/gi, "") : "");
                        Q.sendClickLink(d, d == e ? "": e, a)
                    },
                    l = function() {
                        return P(a, b) ? f._trackLinks.delay: 0
                    };
                    if (eb.test(g) || eb.test(d) || p(d, aa) || p(g, aa)) c = !0;
                    var m = ma(b, "ym-disable-tracklink"),
                    g = ma(b, "ym-external-link");
                    m || (m = {
                        ln: !0,
                        dl: c
                    },
                    g ? (m.delay = l(), h(m)) : N(B().hostname, b.hostname) ? c && (m.ln = !1, m.delay = l(), h(m)) : d && -1 != d.search(/^ *(data|javascript):/i) || (m.ut = Xa, m.delay = l(), h(m)))
                }
            }
            function wa(a, b) {
                function c() {
                    if (!y) {
                        B && clearTimeout(B);
                        var d = b,
                        f;
                        f = s ? r: r + J() - t;
                        d -= f;
                        0 > d && (d = 0);
                        B = O(function() {
                            y = !0;
                            l(!1);
                            a()
                        },
                        d, "trackUserTime")
                    }
                }
                function f() {
                    s = p = n = !0;
                    r += J() - t;
                    t = J();
                    c()
                }
                function h() {
                    p || n || (r = 0);
                    t = J();
                    p = n = !0;
                    s = !1;
                    c()
                }
                function m() {
                    n || (p = !0, s = !1, n = !0, c())
                }
                function l(a) {
                    for (var b = 0; b < F.length; b += 3) a ? T(F[b], F[b + 1], F[b + 2]) : La(F[b], F[b + 1], F[b + 2])
                }
                var p = !1,
                n = !1,
                s = !0,
                r = 0,
                t = J(),
                B = null,
                y = !1;
                if (Ea) O(a, b, "trackUserTime");
                else {
                    var F = [g, "blur", f, g, "focus", h, d, "click", m, d, "mousemove", m, d, "keydown", m, d, "scroll", m];
                    l(!0);
                    c()
                }
            }
            function xa(a) {
                function b() {
                    var a = B().hash.split("#")[1];
                    if ("undefined" == typeof a) return ! 1;
                    var e = a.indexOf("?");
                    0 < e && (a = a.substring(0, e));
                    return a
                }
                var c = b(); (function Ba() {
                    var d = b();
                    d !== c && (a(), c = d);
                    Aa = O(Ba, 200, "trackHash")
                })()
            }
            function Ma(a) {
                Qa = lastReferrer = Pa;
                a = {
                    ut: z,
                    ad: 1 == c && g.Ya && g.Ya.Direct ? !0 : !1,
                    wh: !0,
                    saveRef: !0
                };
                Q.sendAjaxHit(B().href, w(), Qa, a);
                Pa = B().href
            }
            function Ha(b) {
                function f() {
                    var a = d.documentElement;
                    return Math.max(a.scrollWidth, d.body.scrollWidth, a.clientWidth)
                }
                function h(a) {
                    function b(a) {
                        a = a.getBoundingClientRect();
                        var e = d.body,
                        c = d.documentElement,
                        f = a.left + (g.pageXOffset || c.scrollLeft || e.scrollLeft) - (c.clientLeft || e.clientLeft || 0);
                        return {
                            top: Math.round(a.top + (g.pageYOffset || c.scrollTop || e.scrollTop) - (c.clientTop || e.clientTop || 0)),
                            left: Math.round(f)
                        }
                    }
                    return a.getBoundingClientRect ? b(a) : function(a) {
                        for (var b = 0,
                        e = 0; a;) b += parseInt(a.offsetTop),
                        e += parseInt(a.offsetLeft),
                        a = a.offsetParent;
                        return {
                            top: b,
                            left: e
                        }
                    } (a)
                }
                function q(a) {
                    return a.toString().toUpperCase()
                }
                function m(a) {
                    if (null == a.pageX && null != a.clientX) {
                        var b = d.documentElement,
                        e = d.body;
                        a.pageX = a.clientX + (b && b.scrollLeft || e && e.scrollLeft || 0) - (b.clientLeft || 0);
                        a.pageY = a.clientY + (b && b.scrollTop || e && e.scrollTop || 0) - (b.clientTop || 0)
                    }
                    return {
                        x: a.pageX,
                        y: a.pageY
                    }
                }
                function p(a) {
                    for (var b = q(a.nodeName); a.parentNode && "BODY" != b && "HTML" != b;) {
                        if ("A" == b || "INPUT" == b || "TEXTAREA" == b) return ! 0;
                        a = a.parentNode;
                        b = a.nodeName
                    }
                    return ! 1
                }
                for (var l = this,
                n = 0,
                s = null,
                r = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "), t = 59, y = String.fromCharCode, C = {},
                w = 0; w < r.length; w++) C[r[w]] = y(t),
                y(t),
                t++;
                this.handler = function(b) {
                    var e = d.getElementsByTagName("body")[0];
                    if (!g.ymDisabledClickmap && !ma(e, "ym-clickmap-ignore")) {
                        if (l._prefs.hasQuota) {
                            if (!l._prefs.quota) return;
                            l._prefs.quota--
                        }
                        var r = b.target || b.srcElement;
                        3 == r.nodeType && (r = r.parentNode);
                        var e = q(r.nodeName),
                        v = m(b),
                        x;
                        b.which || b.button === ka || (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
                        x = b.which;
                        if (x = 2 != x && 3 != x || "A" == e) if (x = r.offsetHeight, x = !(0 === r.offsetWidth && 0 === x || r.style && "none" === r.style.display)) {
                            b: {
                                for (x = r; x.parentNode;) {
                                    if (ma(x, "ym-clickmap-ignore")) {
                                        x = !0;
                                        break b
                                    }
                                    x = x.parentNode
                                }
                                x = !1
                            }
                            if (x = !x) {
                                b: {
                                    x = l._prefs.ignoreTags;
                                    for (var t = 0; t < x.length; t++) if (q(x[t]) == q(e)) {
                                        x = !0;
                                        break b
                                    }
                                    x = !1
                                }
                                x = !x && l._prefs.filter(r, e)
                            }
                        }
                        if (x) {
                            e = J();
                            r = {
                                dom: r,
                                x: v.x,
                                y: v.y,
                                time: e
                            };
                            if ((v = 50 < e - n) && !(v = !l._prefs.ignoreSameClicks)) {
                                if (v = s) {
                                    x = Math.abs(v.x - r.x);
                                    var t = Math.abs(v.y - r.y),
                                    y = r.time - v.time,
                                    v = v.dom == r.dom && 2 > x && 2 > t && 1E3 > y ? !0 : !1
                                } else v = !1;
                                v = !v
                            }
                            if (v && "MetrikaPlayer" != g.name) {
                                if (v = b.target || b.srcElement) {
                                    3 == v.nodeType && (v = v.parentNode);
                                    for (x = q(v.nodeName); v.parentNode && v.parentNode.nodeName && ("A" != x && "AREA" != x || !v.href);) v = v.parentNode,
                                    x = q(v.nodeName);
                                    x = v.href ? v: !1
                                } else x = !1;
                                v = !1;
                                x && P(b, x) && !N(B().hostname, x.hostname) && (v = !0);
                                x = fb;
                                var y = m(b),
                                t = y.x,
                                y = y.y,
                                w = b.target || b.srcElement,
                                z = l._prefs,
                                A = h(w),
                                D = "";
                                b = B().href;
                                switch (z.mode) {
                                case "fixed":
                                    D = "0";
                                    p(w) && (D += "u");
                                    break;
                                case "centered":
                                    D = "1";
                                    A = Math.floor(f() / 2);
                                    t = t > A ? t - A + 32768 : t;
                                    p(w) && (D += "u");
                                    break;
                                default:
                                    D = q(w.nodeName);
                                    D = "BODY" == D || "HTML" == D ? f() : w.offsetWidth;
                                    z = q(w.nodeName);
                                    "BODY" == z || "HTML" == z ? (z = d.documentElement, z = Math.max(z.scrollHeight, d.body.scrollHeight, z.clientHeight)) : z = w.offsetHeight;
                                    D || (D = 1);
                                    z || (z = 1);
                                    t = Math.floor(65535 * (t - A.left) / D);
                                    y = Math.floor(65535 * (y - A.top) / z);
                                    for (A = ""; w.parentNode && "BODY" != q(w.nodeName) && "HTML" != q(w.nodeName);) {
                                        A += C[w.nodeName] || "*";
                                        b: {
                                            for (var D = w.parentNode,
                                            G = z = 0; G < D.childNodes.length; G++) if (w.nodeName == D.childNodes[G].nodeName) {
                                                if (w == D.childNodes[G]) {
                                                    D = z;
                                                    break b
                                                }
                                                z++
                                            }
                                            D = 0
                                        }
                                        A += D || "";
                                        w = w.parentNode
                                    }
                                    D = I(A, 128)
                                }
                                y = ["rn", ua(), "x", t, "y", y, "t", Math.floor(Math.floor(J() - gc) / 100), "p", D];
                                R ? y = y.concat("wh", "1") : b = b ? b.replace(/\#.*$/, "") : b;
                                "function" == typeof l._prefs.urlFilter && (b = l._prefs.urlFilter(b));
                                t = ic;
                                b = ["page-url", I(b, Va), "pointer-click", y.join(":")];
                                b = ["cnt-class", c].concat(b);
                                y = [];
                                for (w = 0; w < b.length; w += 2)(A = b[w + 1]) && (y[y.length] = b[w] + "=" + A);
                                b = U + t + a + "?" + y.join("&");
                                x(b, v ? l._prefs.delay: 0)
                            }
                            n = e;
                            s = r
                        }
                    }
                };
                this.setPrefs = function(a) {
                    function b(a, e) {
                        return ! 0
                    }
                    this._prefs = "undefined" == typeof a || !1 === a || !0 === a ? {
                        filter: b,
                        ignoreTags: [],
                        mode: "",
                        delay: Fa,
                        quota: 0,
                        hasQuota: !1,
                        ignoreSameClicks: !0
                    }: {
                        filter: a.filter || b,
                        ignoreTags: a.ignoreTags || [],
                        mode: a.mode || "",
                        delay: "undefined" == typeof a.delay ? Fa: a.delay,
                        quota: a.quota || 0,
                        hasQuota: !!a.quota,
                        ignoreSameClicks: "undefined" == typeof a.ignoreSameClicks ? !0 : !1,
                        urlFilter: a.urlFilter
                    }
                };
                this.updateStatus = function(a) {
                    switch (typeof a) {
                    case "undefined":
                        this.start(!0);
                        break;
                    case "boolean":
                        a ? this.start(a) : this.stop();
                        break;
                    case "object":
                        this.start(a)
                    }
                };
                this._start = !1;
                this.start = function(a) {
                    this.setPrefs(a);
                    this._start || T(d, "click", this.handler, !0);
                    this._start = !0
                };
                this.stop = function() {
                    this._start && La(d, "click", this.handler, !0);
                    this._start = !1
                };
                this.start(b)
            }
            var Na = Math.round(1073741824 * Math.random()),
            y,
            z = "",
            U = ea,
            Pa = Ua = A.href,
            Qa = "",
            C;
            Ya._metrika.counter || (Ya._metrika.counter = f);
            "object" == typeof a && (C = a, m = a.defer, z = a.ut, c = a.type, b = a.params, U = a.onlyHttps ? "https:": ea, a = a.id);
            a = a || 0;
            /^\d+$/.test(a) || (a = 0);
            c = c || 0;
            y = a + ":" + c;
            if (Ya._metrika.counters[y]) return Ya._metrika.counters[y];
            s.trim = function(a, b) {
                a = String(a).replace(/^\s+|\s+$/g, "");
                b && a.length > b && (a = a.substr(0, b));
                return a
            };
            r._silverlightVersion = "";
            r.getSilverlightVersion = function() {
                if (!r._silverlightVersion) if (g.ActiveXObject) try {
                    var a = new ActiveXObject("AgControl.AgControl"),
                    b = function(a, b, e, c) {
                        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[e] += c;
                        b[e] -= c
                    },
                    c = [1, 0, 0, 0];
                    b(a, c, 0, 1);
                    b(a, c, 1, 1);
                    b(a, c, 2, 1E4);
                    b(a, c, 2, 1E3);
                    b(a, c, 2, 100);
                    b(a, c, 2, 10);
                    b(a, c, 2, 1);
                    b(a, c, 3, 1);
                    r._silverlightVersion = c.join(".")
                } catch(d) {} else if (a = G.plugins["Silverlight Plug-In"]) r._silverlightVersion = a.description;
                return r._silverlightVersion || ""
            };
            r._flashVersion = 0;
            r.getFlashVersion = function() {
                if (!r._flashVersion) {
                    var a = g.navigator;
                    if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                        var b = a.plugins["Shockwave Flash"].description;
                        b && (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) && (r._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
                    } else if ("undefined" != typeof g.ActiveXObject) try {
                        if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                            var c = b.GetVariable("$version");
                            c && (r._flashVersion = c.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, ""))
                        }
                    } catch(d) {}
                }
                return r._flashVersion
            };
            r.getLanguage = function() {
                return (g.navigator && (G.language || G.browserLanguage) || "").toLowerCase()
            };
            r.getJavaEnabled = function() {
                try {
                    return G.javaEnabled()
                } catch(a) {
                    return ! 1
                }
            };
            s.fnv32a = function(a) {
                for (var b = 2166136261,
                c = 0,
                d = a.length; c < d; ++c) b ^= a.charCodeAt(c),
                b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
                return b >>> 0
            };
            r.getFingerPrint = function() {
                var a = [];
                if (G.plugins && G.plugins.length) for (var b = 0; b < G.plugins.length; b++) {
                    var c = G.plugins[b];
                    s.mergeArrays(a, [c.name, c.version, c.description, c.filename])
                }
                if (G.mimeTypes && G.mimeTypes.length) for (b = 0; b < G.mimeTypes.length; b++) c = G.mimeTypes[b],
                s.mergeArrays(a, [c.type, c.description, c.suffixes]);
                return s.fnv32a(a.join(";")) + "01"
            };
            var ya = Z.inherit({
                trimParams: !1,
                resource: "watch",
                retry: !0,
                postParams: ["site-info"],
                sendHit: function(a, b, c, d, f) {
                    this._hitExt(a, b, c, d, {
                        ut: f,
                        ar: !0,
                        saveRef: !0
                    })
                },
                sendAjaxHit: function(a, b, c, d) {
                    this._hitExt(a, b, c, null, d)
                },
                sendParams: function(a) {
                    this._hitExt(B().href, "", "", a, {
                        ar: !0,
                        pa: !0,
                        onlyData: !0
                    })
                },
                sendGoal: function(a, b) {
                    if (!/[\/&=?#]/.test(a)) {
                        var c = a ? "goal://" + B().hostname + "/" + encodeURIComponent(a) : B().href,
                        f = w(),
                        g = a ? B().href: d.referrer;
                        this._hitExt(c, f, g, b, {
                            ar: !0
                        })
                    }
                },
                sendClickLink: function(a, b, c) {
                    this._hitExt(a, b, B().href, null, c)
                },
                sendExtLink: function(a, b, c, d) {
                    this._hitExt(a, "", B().href, d, {
                        ar: !0,
                        ln: !0,
                        ut: Xa
                    })
                },
                sendFileUpload: function(a, b, c, d) {
                    this._hitExt(a, "", B().href, d, {
                        ar: !0,
                        ln: !0,
                        dl: !0
                    })
                },
                sendNotBounce: function(a) {
                    this._hitExt(B().href, "", "", null, {
                        cl: a,
                        ar: !0,
                        nb: !0,
                        onlyData: !0
                    })
                },
                sendVideoAction: function(a, b, c, d) {
                    this._hitExt(c, d || "", "", null, {
                        ar: !0,
                        va: a,
                        vt: +b
                    })
                },
                sendSocialClick: function(a, b, c) {
                    this._hitExt(c || B().href, "", "", null, {
                        ar: !0,
                        sn: s.trim(a, 64),
                        sa: s.trim(b, 64)
                    })
                },
                _hitExt: function(a, b, c, d, f, m, l, p) {
                    function n(a, b) {
                        b && (r[a] = b)
                    }
                    f = f || {};
                    m = m || {};
                    if ("MetrikaPlayer" != g.name) {
                        c = "undefined" != typeof c ? c: Ua;
                        var r = {};
                        f.ar && !f.onlyData && (c = this._prepareHitUrl(c), a = this._prepareHitUrl(a));
                        f.reqNum = !0;
                        n("page-ref", s.trim(c, Va));
                        n("page-url", s.trim(a, Va)); - 1 != B().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) ? n("ut", Xa) : "undefined" != typeof f.ut && n("ut", s.trim(f.ut, 64));
                        if (d) if (a = h(d), this.trimParams && a.length > fc) var t = !0;
                        else n("site-info", a);
                        f.saveRef && (Ua = c);
                        s.mixin(m, V(b, f, !0));
                        this.send(r, m,
                        function() {
                            t && (new ya({
                                protocol: this.protocol,
                                counterType: this.counterType,
                                counterId: this.counterId
                            })).sendParams(d);
                            l && l.apply(p, arguments)
                        },
                        this)
                    }
                },
                _prepareHitUrl: function(a) {
                    var b = B(),
                    c = b.host,
                    b = b.href;
                    if (!a) return b;
                    if ( - 1 != a.search(/^\w+:\/\//)) return a;
                    var d = a.charAt(0);
                    if ("?" == d) return d = b.search(/\?/),
                    -1 == d ? b + a: b.substr(0, d) + a;
                    if ("#" == d) return d = b.search(/#/),
                    -1 == d ? b + a: b.substr(0, d) + a;
                    if ("/" == d) {
                        if (d = b.search(c), -1 != d) return b.substr(0, d + c.length) + a
                    } else return c = b.split("/"),
                    c[c.length - 1] = a,
                    c.join("/");
                    return a
                }
            }),
            Ra = Da.inherit({
                id: "script",
                request: function(a, b, c, f, h) {
                    var m = "_ymjsp" + s.random(),
                    l = d.createElement("script");
                    g[m] = L(function(a) {
                        try {
                            delete g[m]
                        } catch(b) {
                            g[m] = ka
                        }
                        f.call(h, !0, a);
                        l.parentNode && l.parentNode.removeChild(l)
                    },
                    "transport.script");
                    l.type = "text/javascript";
                    l.src = this._buildUrl(a, s.mixin({
                        wmode: 5,
                        callback: m
                    },
                    b, c));
                    a = d.getElementsByTagName("head")[0];
                    a.insertBefore(l, a.firstChild);
                    return ! 0
                }
            }),
            za = ya.inherit({
                transports: [Ra],
                retry: !1,
                trimParams: !0,
                sendHit: function(a, b, c, d, f, g, h, m) {
                    this._hitExt(a, b, c, d, f, g ? {
                        vc: g
                    }: null, h, m)
                }
            }),
            ha = [];
            Z.retransmit();
            var Q = new ya({
                protocol: U,
                counterType: c,
                counterId: a
            }),
            ia;
            f.replacePhones = L(function() {
                try {
                    var b = Ka("_ym_mp2_substs_" + a);
                    if (b) {
                        var c = (new Function("return " + b))();
                        c && fa(c, !0)
                    }
                } catch(d) {}
            },
            "counter.replacePhones");
            f.reachGoal = L(function(a, b) {
                Q.sendGoal(a, b);
                return ! 0
            },
            "counter.reachGoal");
            f.trackLinks = L(la, "counter.trackLinks");
            f.hit = L(function(a, b, c, d, f) {
                a && Q.sendHit(a, b, c, d, f)
            },
            "counter.hit");
            f.params = L(function(a) {
                if (a) {
                    var b = arguments.length;
                    if (1 < b) {
                        for (var c = {},
                        d = c,
                        f = 0; f < b - 1; f++) {
                            var g = "" + arguments[f];
                            d[g] = {};
                            f < b - 2 && (d = d[g])
                        }
                        d[g] = arguments[b - 1];
                        a = c
                    }
                    Q.sendParams(a)
                }
            },
            "counter.params");
            f.file = L(function(a, b, c, d) {
                a && Q.sendFileUpload(a, b, c, d)
            },
            "counter.file");
            f.extLink = L(function(a, b, c, d) {
                a && Q.sendExtLink(a, b, c, d)
            },
            "counter.extLink");
            f.notBounce = L(function() {
                var a = 0;
                Za && Ga && (a = Ga - Za);
                Q.sendNotBounce(a)
            },
            "counter.notBounce");
            var aa = [];
            f.addFileExtension = function(a) {
                "string" == typeof a ? aa.push(a) : aa = aa.concat(a)
            };
            f.clickmap = function(a) {
                f._clickmap ? f._clickmap.updateStatus(a) : f._clickmap = new Ha(a)
            };
            f.accurateTrackBounce = function(b) {
                "number" != typeof b && (b = 15E3);
                if (!f._isAccurateTrackBounce) {
                    f._isAccurateTrackBounce = !0;
                    var c = new ba({
                        counterId: a
                    }),
                    g = c.get("lastHit");
                    c.set("lastHit", +new Date); ((c = c.get("lastHit")) && (!g || g < c - 18E5) || !S(d.referrer, B().href) || 0.1 > Math.random()) && wa(function() {
                        f.notBounce()
                    },
                    b)
                }
            };
            var Aa = null,
            R = !1;
            f.trackHash = function(a) { ! 1 === a ? R && ("onhashchange" in g ? La(g, "hashchange", Ma) : clearInterval(Aa), R = !1) : R || ("onhashchange" in g ? T(g, "hashchange", Ma) : xa(Ma), R = !0);
                f._trackHash = R
            };
            f.video = L(function(a, b, c, d) {
                var f = ["end", "play", "pause", "seek"];
                if (a && c) {
                    a: {
                        for (var g = 0,
                        h = f.length; g < h; g += 1) if (a === f[g]) {
                            f = g;
                            break a
                        }
                        f = -1
                    } - 1 !== f && Q.sendVideoAction(a, b, c, d)
                }
            },
            "counter.video");
            f.social = L(function(a, b, c) {
                a && b && Q.sendSocialClick(a, b, c)
            },
            "counter.social");
            f.enableAll = function() {
                f.trackLinks(!0);
                f.clickmap(!0);
                f.accurateTrackBounce()
            };
            f.pause = Ob;
            f.uploadPage = function() {};
            f._performanceTiming = W;
            a && ra()
        },
        "init")()
    };
    g.Ya.Metrika.counters = function() {
        var a = [];
        gb(g.Ya._metrika.counters,
        function(b, c) {
            var d = c.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: b._isAccurateTrackBounce,
                clickmap: b._clickmap && b._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!b._trackHash,
                trackLinks: b._trackLinks && b._trackLinks.on,
                webvisor: !!b._webvisor
            })
        });
        return a
    };
    var fb = function(a, b) {
        var c = /(&|\?)browser-info=rqnl:(\d+):/;
        a = a.match(c) ? a.replace(c, "$1browser-info=rqnl:" + ( + RegExp.$2 + 1) + ":") : a.replace(/(&|\?)browser-info=/, "$1browser-info=rqnl:1:");
        c = new Image;
        ja.add(a, b);
        c.onload = function() {
            ja.deleteHit(a)
        };
        c.src = a;
        "function" == typeof g.ymLog && g.ymLog(a)
    },
    ja = function() {
        var a = new ba;
        return {
            init: function() {
                this.send();
                this._events()
            },
            _events: function() {
                var a = this,
                c = function() {
                    a._wasEnd || (a._wasEnd = !0, a._onEnd())
                };
                T(g, "beforeunload", c);
                Mb || T(g, "unload", c)
            },
            _onEnd: function() {
                var b = [],
                c = 0;
                this._update(b);
                for (var d = 0; d < b.length; d++) b[d].delay > c && (c = b[d].delay);
                a.set("defer", b)
            },
            get: function() {
                return a.get("defer")
            },
            add: function(b, c) {
                var d = [{
                    url: b,
                    delay: c,
                    time: J()
                }];
                this._update(d);
                a.set("defer", d)
            },
            deleteHit: function(b) {
                var c = [];
                this._update(c, b);
                a.set("defer", c)
            },
            _update: function(a, c) {
                var d = this.get(),
                f = J();
                if (d && ga(d) && d.length) for (var g = 0; g < d.length; g++) {
                    var h = d[g];
                    h.url && h.url != c && h.time > f - 4E3 && a.push(h)
                }
                return a
            },
            send: function() {
                var a = this.get(),
                c = J();
                if (a) {
                    if (ga(a) && a.length) for (var d = 0; d < a.length && 10 > d; d++) {
                        var f = a[d];
                        f && f.url && f.time > c - 36E5 && this._isCorrectUrl(f.url) && fb(f.url)
                    }
                    this.clear()
                }
            },
            _isCorrectUrl: function(a) {
                return 0 === a.replace(/^https?:/, "").indexOf("//mc.yandex.ru/")
            },
            clear: function() {
                a.remove("defer")
            }
        }
    } ();
    ja.init();
    g.ya_cid && new Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid && !g.ya_hit && (g.ya_hit = function(a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    I = g.yandex_metrika_callback;
    M = g.yandex_metrika_callbacks;
    "function" == typeof I && I();
    if ("object" == typeof M) for (I = 0; I < M.length; I++) if (W = M[I]) M[I] = null,
    W();
    na("yandex_metrika_callback");
    na("yandex_metrika_callbacks");
    M = ["link", "click", "scroll", "res"];
    for (I = 0; I < M.length; I++) if (W = M[I] + "map", -1 != A.href.search("ym_playback=" + W)) {
        wa(ea + "//metrika.yandex.ru/js/" + W + "/_loader.js");
        break
    }
    g.Ya.Metrika.informer = function(a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || wa(ea + "//mc.yandex.ru/metrika/informer.js")
    }; (function() {
        var a = r.getJScriptVersion();
        if (!a || 5.8 < a)"complete" == d.readyState ? xa() : T(g, "load", xa)
    })(); (function() {
        var a = function() {
            var a = d.getElementsByTagName("body")[0],
            b = d.createElement("iframe");
            b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + ua();
            b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
            a.appendChild(b);
            O(function() {
                a.removeChild(b)
            },
            1E4, "ad")
        },
        b = function() {
            g.removeEventListener("load", b, !1);
            a()
        },
        c = g.performance;
        ua(200) || Ya._metrika.isAd || (Ya._metrika.isAd = !0, "http:" == ea && "object" == typeof c && g.addEventListener && (c.timing && c.timing.loadEventStart ? a() : g.addEventListener("load", b, !1)))
    })()
})(this, this.document);