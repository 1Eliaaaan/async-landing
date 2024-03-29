/**
 * crisp-client
 * @version v2.8.5 765735d
 * @author Crisp IM SAS
 * @date 10/14/2022
 */
 (function() {
    try {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        i.prototype.init = function() {
            var i, n, s = this,
                e = "init";
            try {
                this.n && !0 !== this.s && (this.s = !0, (i = document.createElement("div")).id = "crisp-loader", document.getElementsByTagName("body")[0].appendChild(i), n = function() {
                    return "none" === window.getComputedStyle(i).getPropertyValue("display")
                }, function t() {
                    s.f = setTimeout(function() {
                        s.f = null, s.y -= s.v, void 0 !== window[s.w] && "function" == typeof window[s.w].__init && !0 === n() ? (s.x.info(s.ns + "." + e, "Dependencies loaded"), i.parentNode.removeChild(i), window[s.w].__init({
                            dollar_crisp: window[s.w],
                            project_name: s.on,
                            url_go: s.fn,
                            url_image: s._n,
                            url_game: s.fs,
                            url_relay_client: s.ms,
                            url_relay_stream: s.ws,
                            url_website: s.$s,
                            url_assets: s._e,
                            rtc_ice: s.io,
                            client_environment: s.do,
                            client_revision: s._a,
                            website_domain: s._f,
                            website_id: s.n,
                            token_id: s.sp,
                            cookie_expire: s.xn,
                            cookie_domain: s.rp,
                            page_url: s.op,
                            page_domain: s.cp,
                            browser_useragent: s.hp,
                            browser_timezone: s.ap,
                            browser_capabilities: s.up,
                            browser_locales: s.dp,
                            ready_trigger: s.fp,
                            runtime_configuration: s.pp,
                            reset_handler: function() {
                                s.reset()
                            }
                        })) : 0 < s.y ? t() : s.x.error(s.ns + "." + e, "Could not load dependencies")
                    }, s.v)
                }())
            } catch (t) {}
        }, i.prototype.reset = function() {
            try {
                null !== this.f && clearTimeout(this.f), this.Ws(), this.init()
            } catch (t) {}
        }, i.prototype.lp = function() {
            try {
                this._p("dns-prefetch", this.ms), this._p("preconnect", this._e), this.mp(), this.Ip()
            } catch (t) {}
        }, i.prototype._p = function(t, i) {
            try {
                var n = document.createElement("link");
                n.setAttribute("href", i), n.setAttribute("rel", t), n.setAttribute("crossorigin", ""), this.yp(n), document.getElementsByTagName("head")[0].appendChild(n)
            } catch (t) {}
        }, i.prototype.mp = function() {
            try {
                var t = document.createElement("script");
                t.src = "assets/relay.js", t.type = "text/javascript", t.async = 1, this.yp(t), document.getElementsByTagName("head")[0].appendChild(t)
            } catch (t) {}
        }, i.prototype.Ip = function() {
            try {
                var t = this.wp(),
                    i = document.createElement("link");
                i.href = "styles/styless.css", i.type = "text/css", i.rel = "stylesheet", this.yp(i), document.getElementsByTagName("head")[0].appendChild(i)
            } catch (t) {}
        }, i.prototype.Ws = function() {
            this.Rp(), this.Sp(), this.Ep()
        }, i.prototype.Rp = function() {
            this.s = !1, this.f = null, this.y = this.gp, this._f = document.domain, this.op = document.location.href, this.cp = document.location.hostname, this.hp = window.navigator.userAgent, this.ap = (new Date).getTimezoneOffset(), this.dp = this.bp(), "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID ? this.n = CRISP_WEBSITE_ID : this.n = this.Pp(), "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.sp = CRISP_TOKEN_ID : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.sp = CRISP_TOKEN_ID.toString() : this.sp = null, "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE ? this.xn = CRISP_COOKIE_EXPIRE : this.xn = null, "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN ? this.rp = CRISP_COOKIE_DOMAIN : this.rp = null, "function" == typeof CRISP_READY_TRIGGER ? this.fp = CRISP_READY_TRIGGER : this.fp = {}, "object" === ("undefined" == typeof CRISP_RUNTIME_CONFIG ? "undefined" : t(CRISP_RUNTIME_CONFIG)) ? this.pp = CRISP_RUNTIME_CONFIG : this.pp = {}, "object" === ("undefined" == typeof CRISP_INCLUDE_ATTRS ? "undefined" : t(CRISP_INCLUDE_ATTRS)) ? this.Tp = CRISP_INCLUDE_ATTRS : this.Tp = {}
        }, i.prototype.Sp = function() {
            try {
                this.up = [], "function" == typeof window.MutationObserver && "function" == typeof JSON.stringify && this.up.push("browsing"), ("function" == typeof window.RTCPeerConnection && "object" === t(navigator.mediaDevices) && "https:" === document.location.protocol && (window.innerWidth || 0) >= this.Op && (window.innerHeight || 0) >= this.Dp || !0 === this.Np) && this.up.push("call")
            } catch (t) {}
        }, i.prototype.Ep = function() {
            var t;
            try {
                this.pp.locale && (-1 !== (t = this.dp.indexOf(this.pp.locale)) && this.dp.splice(t, 1), this.dp.unshift(this.pp.locale))
            } catch (t) {}
        }, i.prototype.yp = function(t) {
            try {
                for (var i in this.Tp) this.Tp.hasOwnProperty(i) && t.setAttribute(i, this.Tp[i])
            } catch (t) {}
        }, i.prototype.Pp = function() {
            var t = null;
            try {
                for (var i = document.querySelectorAll("script[src]"), n = 0; n < i.length; n++) {
                    var s = this.Kp.exec(i[n].src);
                    if (s && "string" == typeof s[1]) {
                        t = s[1];
                        break
                    }
                }
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.wp = function() {
            var t = "default";
            try {
                var i = (navigator.userAgent || "").toLowerCase(),
                    n = (navigator.appVersion || "").toLowerCase(),
                    s = !1;
                if (!0 !== s && (-1 === i.indexOf("opera mini/") && -1 === i.indexOf("msie") && -1 === n.indexOf("trident/") || (s = !0)), !0 !== s)
                    for (var e = 0; e < this.kp.length; e++) {
                        var r = this.kp[e],
                            o = i.match(r.pattern);
                        if (o && o[1] && parseInt(o[1], 10) <= r.version) {
                            s = !0;
                            break
                        }
                    }!0 === s && (t = "legacy")
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.Ap = function() {
            var t = !0;
            try {
                !(window.innerWidth && window.innerWidth < this.jp) && !0 === navigator.cookieEnabled && !0 !== this.Gp(this.cp) && !0 !== this.Up(this.hp) && window.WebSocket || (t = !1)
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.Gp = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = !1;
            try {
                if (t)
                    for (var n = 0; n < this.xp.domains.length; n++) {
                        var s = this.xp.domains[n],
                            e = "." + s;
                        if (t === s || t.slice(-1 * e.length) === e) {
                            i = !0;
                            break
                        }
                    }
            } catch (t) {} finally {
                return i
            }
        }, i.prototype.Up = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = !1;
            try {
                if (t)
                    for (var n = 0; n < this.xp.agents.length; n++)
                        if (-1 !== t.indexOf(this.xp.agents[n])) {
                            i = !0;
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, i.prototype.bp = function() {
            var t = [];
            try {
                for (var i = navigator.languages && 0 < navigator.languages.length ? navigator.languages : [navigator.language || navigator.userLanguage], n = 0; n < i.length; n++) i[n] && t.push(i[n])
            } catch (t) {} finally {
                return t
            }
        }, new i
    } catch (t) {}

    function i() {
        var t, i = this;
        try {
            this.ns = "CrispLoader", this.x = {
                warn: function() {},
                error: function() {},
                info: function() {},
                log: function() {},
                debug: function() {}
            }, this.Np = !1, this.on = "crisp-client", this.Bp = "client.crisp.chat", this.Lp = "client.relay.crisp.chat", this.Mp = "stream.relay.crisp.chat", this._a = "765735d", this.do = "production", this.Fp = "https:", this.$s = "https://crisp.chat", this.fn = "https://go.crisp.chat", this._n = "https://image.crisp.chat", this.fs = "https://game.crisp.chat", this.ms = this.Fp + "//" + this.Lp, this.ws = this.Fp + "//" + this.Mp, this._e = this.Fp + "//" + this.Bp, this.io = [{
                urls: ["stun:stun.media.crisp.chat:3478?transport=udp", "stun:stun.media.crisp.chat:3478?transport=tcp", "stun:stun.media.crisp.chat:3479?transport=udp", "stun:stun.media.crisp.chat:3479?transport=tcp"]
            }, {
                urls: ["turn:turn.media.crisp.chat:3478?transport=udp", "turn:turn.media.crisp.chat:3478?transport=tcp", "turn:turn.media.crisp.chat:3479?transport=udp", "turn:turn.media.crisp.chat:3479?transport=tcp", "turns:turn.media.crisp.chat:443?transport=tcp"],
                username: "client_9F9kh",
                credential: "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"
            }], this.xp = {
                domains: [],
                agents: ["Trident", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "GTmetrix", "Lighthouse", "Acunetix", "AhrefsBot"]
            }, this.vp = "static/javascripts", this.Cp = "static/stylesheets", this.w = "$__CRISP_INSTANCE", this.Yp = "$__CRISP_INCLUDED", this.v = 100, this.gp = 3e4, this.Xp = 1e3, this.jp = 280, this.Op = 320, this.Dp = 420, this.kp = [{
                pattern: /edg(?:e)?\/([0-9\.]+)/,
                version: 79
            }, {
                pattern: /chrom(?:e|ium)\/([0-9\.]+)/,
                version: 53
            }, {
                pattern: /firefox\/([0-9\.]+)/,
                version: 49
            }, {
                pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                version: 10
            }, {
                pattern: /android ([0-9\.]+)/,
                version: 5
            }], this.Kp = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i, this.Ws(), !0 === window[this.Yp] || void 0 !== window[this.w] && "function" == typeof window[this.w].__init || !0 !== this.Ap() || (window[this.Yp] = !0, "interactive" === document.readyState || "complete" === document.readyState ? this.init() : (t = document.onreadystatechange || function() {}, window.addEventListener("DOMContentLoaded", function() {
                i.init()
            }), document.onreadystatechange = function() {
                "function" == typeof t && t(), "interactive" !== document.readyState && "complete" !== document.readyState || setTimeout(function() {
                    i.init()
                }, i.Xp)
            }), this.lp())
        } catch (t) {}
    }
})();

