! function() {
    function e(e, t, n) {
        var o = document.createElement("script");
        o.type = "text/javascript", o.src = e, o.async = n || "async", t && (o.onload = t), document.getElementsByTagName("head")[0].appendChild(o)
    }

    function t(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            o = n.exec(t);
        return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
    }

    function n(e, t) {
        e("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: t
        }).appendTo("head")
    }

    function o() {
        a(document).ready(function(e) {
            n(e, "./vendor.min.948431a6-9baa-42a8-8cf1-e896b2ff6d5f.css");
            e.get("./template.html", function(e) {
                a("#example-widget-container").html(e);
                var t = document.getElementById("ang");
                angular.bootstrap(t, ["myApp"]), document.getElementById("botname") && (document.getElementById("botname").innerText = "LVBot" == window.botName ? "LV=" : window.botName), document.title = "CambiaHealthWeb" == window.botName ? "Health Insurance Innovation | Cambia Health Solutions" : document.title
            }, "html")
        })
    }
    void 0 != t("botId") ? window.btid = t("botId") : document.getElementById("widget") && (window.btid = document.getElementById("widget").getAttribute("botId")), void 0 != t("botName") ? window.botName = t("botName") : document.getElementById("widget") && (window.botName = document.getElementById("widget").getAttribute("botName")), void 0 != t("secret") ? window.btsecret = t("secret") : document.getElementById("widget") && (window.btsecret = document.getElementById("widget").getAttribute("secret"));
    var a;
    setTimeout(function() {
        function t(t) {
            function n() {
                d = window.angular, e("./vendor.min.948431a6-9baa-42a8-8cf1-e896b2ff6d5f.js", o)
            }
            t && (a = window.jQuery.noConflict(!0), window.jQuery = a);
            var d;
            void 0 === window.angular ? e("https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js", n) : (d = window.angular, n())
        }
        if (void 0 === window.jQuery || "3.1.1" !== window.jQuery.fn.jquery) {
            var n = document.createElement("script");
            n.setAttribute("type", "text/javascript"), n.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"), n.async = "async", n.readyState ? n.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || t()
            } : n.onload = t, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(n)
        } else a = window.jQuery, t(!0)
    }, 500)
}();
