/*
 * Pxmu 前端轻量消息弹出层
 * ver 1.0.16
 * © https://Pxmu.com 
 * @uptime 2021年9月24日14:16:36
 */
(function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.pxmu = e(), pxmu._init()
})(this, function () {
    "use strict";
    let t = .3,
        e = {
            loading: !0,
            toast: !0
        },
        i = 0,
        o = "pxmu-class__name__fix";
    var n = {
        _init: function () {
            var t = document.createElement("style"),
                e = "body{margin:0;padding:0}.pxmu-fixed{position:fixed;width:100%;top:0;left:0;right:0;bottom:0;z-index:90001;display:flex;justify-content:center;align-items:center;-webkit-pointer-events:none;-moz-pointer-events:none;-ms-pointer-events:none;-o-pointer-events:none;pointer-events:none}.pxmu-toast{position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:flex-end;z-index:90009;text-align:center;-webkit-pointer-events:none;-moz-pointer-events:none;-ms-pointer-events:none;-o-pointer-events:none;pointer-events:none}.pxmu-toast div{border-radius:3px;display:flex;margin:0 auto;position:absolute;width:100%;justify-content:center;align-items:center}.pxmu-toast>div>div{padding:5px 15px;font-weight:500;width:auto}.pxmu-toast-center{top:50%;bottom:auto;align-items:center}.pxmu-toast-top{top:71px;bottom:auto;align-items:flex-start}.pxmu-toast-bottom{bottom:60px;align-items:flex-start}.pxmu-toast-pc>div{top:80px;align-items:baseline}.pxmu-toast-pc>div>div{padding:10px 60px!important;font-size:14.555px!important}.pxmu-toast-pc .pxmu-success>div{background-color:#f0f9eb!important;color:#67c23a!important}.pxmu-toast-pc .pxmu-warn>div{background-color:#fdf6ec!important;color:#e6a23c!important}.pxmu-toast-pc .pxmu-error>div{background-color:#fef0f0!important;color:#f56c6c!important}.pxmu-loading-inscroll{width:100%;height:100%;position:fixed;top:0;left:0;right:0;bottom:0;z-index:90000;-webkit-pointer-events:auto;-moz-pointer-events:auto;-ms-pointer-events:auto;-o-pointer-events:auto;pointer-events:auto}.pxmu-copy-item{height:0!important;opacity:0!important}.pxmu-body-inscroll{overflow:hidden;position:fixed;top:0;right:0;left:0;bottom:0;overflow:hidden}.pxmu-loading{display:flex;flex-direction:column;min-height:90px;min-width:90px;border-radius:8px;font-size:14px!important;align-items:center;justify-content:center;padding:8px}.pxmu-loading-ing{padding:4px;color:#fff;position:relative;width:30px;height:30px;vertical-align:middle}.pxmu-loading-spinner{position:absolute;top:0;display:inline-block;max-width:100%;max-height:100%;vertical-align:middle}.pxmu-loading-spinner-loading{-webkit-animation:pxmu-rotate .8s linear infinite;animation:pxmu-rotate .8s linear infinite}.pxmu-loading-circular-loading{-webkit-animation-duration:2s;animation-duration:2s}.pxmu-toast-text{margin-top:8px;font-size:14px}.pxmu-loading-icon{display:block;width:100%;height:100%}.pxmu-loading-icon circle{-webkit-animation:pxmu-circular-in 1.5s ease-in-out infinite;animation:pxmu-circular-in 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.pxmu-success-icon{width:35px}.pxmu-fail-icon{width:45px}.pxmu-fade-out{-webkit-animation:.3s pxmu-fade-out both ease-in;animation:.3s pxmu-fade-out both ease-in}.pxmu-diag-item{position:fixed;top:0;left:0;right:0;bottom:0;z-index:80000;display:flex;flex-direction:row}.pxmu-diag{display:flex;flex-direction:column;align-self:center;width:100%;background:#fff;margin:25px;border-radius:5px;padding:10px 0;z-index:80001}.pxmu-diag div{padding:0 20px;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.pxmu-diag-text{margin:18px 0;line-height:24px;max-height:145px;overflow:hidden;overflow-y:auto}.pxmu-diag-btn{display:flex;justify-content:space-around;margin:10px 0;flex-direction:row}.pxmu-diag-btn div{display:flex;flex:1;flex-direction:row;justify-content:center;padding:8px 0;height:24px;align-items:center;cursor:pointer}@-webkit-keyframes pxmu-slide-up-in{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes pxmu-slide-up-in{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes pxmu-slide-up-out{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}}@keyframes pxmu-slide-up-out{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}}@-webkit-keyframes pxmu-slide-down-in{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes pxmu-slide-down-in{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes pxmu-slide-down-out{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}}@keyframes pxmu-slide-down-out{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}}@-webkit-keyframes pxmu-slide-deg-in{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes pxmu-slide-deg-in{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes pxmu-slide-deg-out{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}}@keyframes pxmu-slide-deg-out{to{-webkit-transform:translate3d(0,100%,0);transform:rotate(4deg) translate3d(0,150%,0);opacity:0}}@-webkit-keyframes pxmu-circular-in{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes pxmu-circular-in{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@-webkit-keyframes pxmu-slide-left-in{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes pxmu-slide-left-in{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes pxmu-slide-left-out{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}@keyframes pxmu-slide-left-out{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}@-webkit-keyframes pxmu-slide-right-in{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes pxmu-slide-right-in{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes pxmu-slide-right-out{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}}@keyframes pxmu-slide-right-out{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}}@-webkit-keyframes pxmu-fade-in{from{opacity:0}to{opacity:1}}@keyframes pxmu-fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes pxmu-fade-out{from{opacity:1}to{opacity:0}}@keyframes pxmu-fade-out{from{opacity:1}to{opacity:0}}@-webkit-keyframes pxmu-rotate-in{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pxmu-rotate-in{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.pxmu-fade-in{-webkit-animation:.3s pxmu-fade-in both ease-out;animation:.3s pxmu-fade-in both ease-out}.pxmu-fade-out{-webkit-animation:.3s pxmu-fade-out both ease-in;animation:.3s pxmu-fade-out both ease-in}.pxmu-slideup-in{-webkit-animation:pxmu-slide-up-in .3s both ease-out;animation:pxmu-slide-up-in .3s both ease-out}.pxmu-slideup-out{-webkit-animation:pxmu-slide-up-out .3s both ease-in;animation:pxmu-slide-up-out .3s both ease-in}.pxmu-circular-in{-webkit-animation:pxmu-circular-in 1.5s ease-in-out infinite;animation:pxmu-circular-in 1.5s ease-in-out infinite}.pxmu-slidedown-in{-webkit-animation:pxmu-slide-down-in .3s both ease-out;animation:pxmu-slide-down-in .3s both ease-out}.pxmu-slidedown-out{-webkit-animation:pxmu-slide-down-out .3s both ease-in;animation:pxmu-slide-down-out .3s both ease-in}.pxmu-slidedeg-in{-webkit-animation:pxmu-slide-deg-in .3s both ease-out;animation:pxmu-slide-deg-in .3s both ease-out}.pxmu-slidedeg-out{-webkit-animation:pxmu-slide-deg-out .3s both ease-in;animation:pxmu-slide-deg-out .3s both ease-in}.pxmu-slideleft-in{-webkit-animation:pxmu-slide-left-in .3s both ease-out;animation:pxmu-slide-left-in .3s both ease-out}.pxmu-slideleft-out{-webkit-animation:pxmu-slide-left-out .3s both ease-in;animation:pxmu-slide-left-out .3s both ease-in}.pxmu-slideright-in{-webkit-animation:pxmu-slide-right-in .3s both ease-out;animation:pxmu-slide-right-in .3s both ease-out}.pxmu-slideright-out{-webkit-animation:pxmu-slide-right-out .3s both ease-in;animation:pxmu-slide-right-out .3s both ease-in}.pxmu-rotate-in{-webkit-animation:pxmu-rotate-in .8s linear infinite;animation:pxmu-rotate-in .8s linear infinite}";
            t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t), window.addEventListener("click", function (t) {
                if (t.target.dataset.pxmuCopyText) {
                    let e = n.copy(t.target.dataset.pxmuCopyText);
                    e && n.toast("复制成功")
                }
            })
        },
        pxmulog: function (t, e) {},
        totop: function () {
            var t = null;
            t = setInterval(function () {
                var e = document.documentElement.scrollTop || document.body.scrollTop,
                    i = Math.floor(-e / 6);
                document.documentElement.scrollTop = document.body.scrollTop = e + i, !0, 0 == e && clearInterval(t)
            }, 30)
        },
        overlap: function (t) {
            "object" == typeof t && t && (!1 === t.loading ? e.loading = !1 : e.loading = !0, !1 === t.toast ? e.toast = !1 : e.toast = !0)
        },
        copy: function (t = "") {
            if ("object" != typeof t) return this.addcopy(t);
            if (t.el) {
                let o = t.el.substr(0, 1);
                if ("#" == o) var e = t.el.split("#");
                else {
                    if ("." != o) return {
                        status: 0,
                        msg: "el入参错误"
                    };
                    e = t.el.split(".")
                }
                e = !e[0] && e[1] ? e[1] : e[0] && e[1] ? e[1] : e[0];
                var i = "";
                if (i = "#" == o ? document.getElementById(e) : document.getElementsByClassName(e)[0], i) {
                    let t = i.innerText;
                    return this.addcopy(t)
                }
                return {
                    status: 0,
                    msg: "el入参的dom不存在"
                }
            }
        },
        addcopy: function (t = "") {
            var e = document.createElement("input");
            e.setAttribute("class", "pxmu-copy-item"), e.setAttribute("readonly", "readonly"), e.setAttribute("value", t), document.body.appendChild(e), e.setSelectionRange(0, 9999), e.select();
            var i = document.execCommand("copy");
            document.body.removeChild(e);
            var o = {
                status: !0,
                msg: ""
            };
            return !0 !== i && (o.status = !1, o.msg = "复制失败，请手动复制"), o
        },
        loading: function (t) {
            this.addLoading("loading", t)
        },
        success: function (t) {
            this.addLoading("success", t)
        },
        fail: function (t) {
            this.addLoading("fail", t)
        },
        diaglog: function (t) {
            var e = {
                title: {
                    text: "温馨提示",
                    color: "#000",
                    fontsize: 20,
                    fontweight: "bold",
                    center: !1
                },
                content: {
                    text: "",
                    color: "#666",
                    fontsize: 15.555,
                    fontweight: "normal"
                },
                line: {
                    solid: 0,
                    color: "#eee"
                },
                btn: {
                    left: {
                        text: "取消",
                        color: "#f50",
                        fontsize: 16,
                        fontweight: "bold",
                        bg: "#fff",
                        solid: 1,
                        solidcolor: "#f50"
                    },
                    right: {
                        text: "确定",
                        color: "#fff",
                        fontsize: 16,
                        fontweight: "bold",
                        bg: "#f50",
                        solid: 1,
                        solidcolor: "#f50"
                    }
                },
                congif: {
                    cbclose: !1,
                    cbcloseall: !1,
                    cbload: !0,
                    cbloadcolor: "#fff",
                    cbloadtext: "",
                    bg: "rgba(0,0,0,0.65)",
                    inscroll: !0,
                    anclose: !0,
                    callback: null,
                    animation: "none",
                    btnstyle: !1,
                    btncount: !1
                }
            };
            if ("object" == typeof t)
                for (let i in t)
                    for (let o in t[i])
                        if ("btn" == i)
                            for (let n in t[i][o]) e[i][o][n] = t[i][o][n];
                        else e[i][o] = t[i][o];
            else e.content.text = t;
            let i = e.content.text;
            i && "string" == typeof i && (e.content.text = i.replace(/\n/g, "</br>"), i = null), !0 === e.congif.btnstyle ? e.congif.btnstyle = 50 : e.congif.btnstyle = 3;
            var o = document.createElement("div"),
                a = "pxmu-diag-item";
            e.congif.inscroll && (a += " pxmu-diag-inscroll", document.getElementsByTagName("body")[0].className += " pxmu-body-inscroll"), o.setAttribute("style", "background:" + e.congif.bg), o.setAttribute("class", a);
            var s = '<div class="pxmu-diag">';
            "none" != e.congif.animation && (s = '<div class="pxmu-diag pxmu-' + e.congif.animation + '-in">');
            var r = "";
            e.title.text && (r = "padding-top:15px;font-weight: " + e.title.fontweight + ";color: " + e.title.color + ";font-size: " + parseInt(e.title.fontsize) + "px;", !0 === e.title.center && (r += "text-align:center;"), e.content.text || (r += "margin:15px 0"), s += '<div style="' + r + '">' + e.title.text + "</div>"), e.content.text && (r = "font-size: " + e.content.fontsize + "px;color: " + e.content.color, s += '<div class="pxmu-diag-text" style="' + r + '">' + e.content.text + "</div>");
            let l = "";
            !isNaN(e.line.solid) && e.line.solid > 0 && (s += '<div style="margin:10px 0;height:' + e.line.solid + "px;background:" + e.line.color + '"></div>', l = "padding:0;height:auto;margin:0;"), s += '<div style="' + l + '" class="pxmu-diag-btn">', !1 === e.congif.btncount && (r = l + ";background: " + e.btn.left.bg + ";color: " + e.btn.left.color + ";border: solid " + e.btn.left.solid + "px " + e.btn.left.solidcolor + ";font-size:" + e.btn.left.fontsize + "px;", r += "font-weight:" + e.btn.left.fontweight + ";border-radius: " + e.congif.btnstyle + "px;", s += '<div style="' + r + '" class="pxmu-diag-btn-left"> ' + e.btn.left.text + " </div>", s += l ? '<span style="width:1px;background:' + e.line.color + '"></span>' : '<span style="flex:0.1"></span>'), r = l + ";background: " + e.btn.right.bg + ";color: " + e.btn.right.color + ";border: solid " + e.btn.right.solid + "px " + e.btn.right.solidcolor + ";font-size:" + e.btn.right.fontsize + "px;", r += "font-weight:" + e.btn.right.fontweight + ";border-radius: " + e.congif.btnstyle + "px;", s += '<div style="' + r + '" class="pxmu-diag-btn-right"> ' + e.btn.right.text + " </div>", s += "</div></div></div>", o.innerHTML = s, document.body.appendChild(o);
            var m = function (t) {
                return document.querySelector(t)
            };
            return m(".pxmu-diag-item").onclick = function (t) {
                if (!1 === e.congif.cbcloseall && !1 === e.congif.cbclose && !0 === e.congif.anclose) return n.closediaglog(0, e.congif.animation), !1;
                t.target.className, t.target.className
            }, new Promise((t, i) => {
                m(".pxmu-diag-btn").onclick = function (i) {
                    var o = {
                        type: "click",
                        btn: "right"
                    };
                    if ("pxmu-diag-btn-left" == i.target.className && (o.btn = "left", t(o)), "pxmu-diag-btn-right" == i.target.className && (t(o), !0 === e.congif.cbclose || !0 === e.congif.cbcloseall)) return !0 === e.congif.cbload && (s = '<span class="pxmu-circular-in" style="width:20px;color:' + e.congif.cbloadcolor + '"><svg viewBox="25 25 50 50" class="pxmu-loading-icon"><circle cx="50" cy="50" r="20" fill="none"></circle></svg></span>', e.congif.cbloadtext && (s += '<span style="padding-left: 5px;">' + e.congif.cbloadtext + "</span>"), m(".pxmu-diag-btn-right").innerHTML = s), !1;
                    !1 === e.congif.cbcloseall && n.closediaglog(0, e.congif.animation)
                }
            })
        },
        closediaglog: function (t = 0, e = "none") {
            if (n.pxmulog(e), !1 === t) return !1;
            let i = 300;
            "none" == e && (i = 0);
            var o = document.getElementsByClassName("pxmu-diag");
            o && o[0] && o[0].setAttribute("class", "pxmu-diag pxmu-" + e + "-out"), this._close_html_diaglog(i, "pxmu-diag-item", e)
        },
        closeload: function (t = 0) {
            this._close_html_diaglog(t, "pxmu-loading-item")
        },
        _close_html_diaglog: function (e = 0, i, o) {
            e = parseInt(e), setTimeout(function () {
                n._body_remove_inscroll();
                var e = document.getElementsByClassName(i);
                let a = e.length;
                if (a < 0) return !1;
                for (var s = 0; s < a; s++) {
                    let i = e[s].className;
                    n.pxmulog(i);
                    let a = 0;
                    "none" != o && (i += " pxmu-fade-out", e[s].setAttribute("class", i), a = t), setTimeout(function () {
                        e[0] && document.body.removeChild(e[0])
                    }, 1e3 * a)
                }
            }, e)
        },
        addLoading: function (a, s) {
            if ("object" != typeof s) {
                let t = s;
                s = {};
                s.msg = t
            }
            var r = {
                msg: s.msg || "",
                time: s.time || 2500,
                bg: s.bg || "rgba(0, 0, 0, 0.65)",
                color: s.color || "#fff",
                animation: s.animation || "fade",
                close: !1 !== s.close,
                inscroll: !0 === s.inscroll,
                inscrollbg: s.inscrollbg || ""
            };
            if (!0 === e.loading) {
                var l = document.getElementsByClassName("pxmu-loading-item")[0];
                n.pxmulog(l), l && (document.body.removeChild(l), n._body_remove_inscroll())
            }
            r.time = parseInt(r.time);
            var m = document.createElement("div");
            i++;
            let d = o + i,
                c = "pxmu-loading-item pxmu-fixed " + d;
            r.inscroll && (c += " pxmu-loading-inscroll", document.getElementsByTagName("body")[0].className += " pxmu-body-inscroll"), m.setAttribute("class", c), r.inscrollbg && m.setAttribute("style", "background:" + r.inscrollbg);
            let u = this._pxmu_get_load_Type(a, r.color);
            if (!u) return !1;
            var p = '<div class="pxmu-loading pxmu-' + r.animation + '-in" style="background:' + r.bg + ";color:" + r.color + ';">';
            p += '<div class="pxmu-loading-ing"><span style="color:' + r.color + ';" class="pxmu-loading-spinner pxmu-loading-spinner-' + a + " pxmu-loading-circular-" + a + '">' + u + '</span></div><div class="pxmu-toast-text">' + r.msg + "</div></div>", m.innerHTML = p, document.body.appendChild(m), r.close && setTimeout(function () {
                m.setAttribute("class", c + " pxmu-" + r.animation + "-out"), setTimeout(function () {
                    l = document.getElementsByClassName(d)[0], n.pxmulog(d), l && document.body.removeChild(l), n._body_remove_inscroll()
                }, 1e3 * t)
            }, r.time)
        },
        _body_remove_inscroll: function () {
            let t = document.getElementsByTagName("body")[0].classList.value; - 1 != t.indexOf("-inscroll") && document.getElementsByTagName("body")[0].classList.remove("pxmu-body-inscroll")
        },
        _pxmu_get_load_Type: function (t, e) {
            switch (t) {
                case "loading":
                    return '<svg viewBox="25 25 50 50" class="pxmu-loading-icon"><circle cx="50" cy="50" r="20" fill="none"></circle></svg>';
                case "success":
                    return "<svg fill=" + e + ' t="1621923083503" class="pxmu-success-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3022"><path d="M963.2 208c-12.8-12.8-32-12.8-44.8 0L396.8 668.8c-12.8 9.6-28.8 9.6-41.6 0l-249.6-192c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l294.4 294.4c12.8 12.8 32 12.8 44.8 0L963.2 252.8c12.8-12.8 12.8-35.2 0-44.8z" p-id="3023"></path></svg>';
                case "fail":
                    return "<svg fill=" + e + ' t="1621924513860" class="pxmu-success-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6710"><path d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z" p-id="6711"></path></svg>';
                default:
                    return null
            }
        },
        toast: function (a = "") {
            if ("object" != typeof a) {
                let t = a;
                a = {};
                a.msg = t, a.location = ""
            } else a.time = parseInt(a.time);
            a.type = a.type || "wap", a.status = a.status || "success", a.animation = a.animation || "fade", a.location = a.location || "bottom", i++;
            let s = o + i;
            var r = {
                class: `pxmu-toast pxmu-toast-${a.type} ${s}`,
                msg: a.msg || "操作成功",
                time: a.time || 2500,
                bg: a.bg || "rgba(0, 0, 0, 0.86)",
                color: a.color || "#fff"
            };
            if (!0 === e.toast) {
                var l = document.getElementsByClassName("pxmu-toast")[0];
                n.pxmulog(l), l && document.body.removeChild(l)
            }
            var m = document.createElement("div");
            m.setAttribute("class", r.class);
            let d = "background-color:" + r.bg + ";color:" + r.color + ";",
                c = `<div class="pxmu-${a.status} pxmu-${a.animation}-in pxmu-toast-${a.location}"><div style="${d}">${r.msg}</div></div>`;
            m.innerHTML = c, document.body.appendChild(m), setTimeout(function () {
                m.setAttribute("class", r.class + " pxmu-" + a.animation + "-out"), setTimeout(function () {
                    l = document.getElementsByClassName(s)[0], n.pxmulog(s), l && document.body.removeChild(l)
                }, 1e3 * t)
            }, r.time)
        }
    };
    return n
});
