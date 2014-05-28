window.MyApp = $.extend(true, window.MyApp, {
    "config": {
        "navigationType": "navbar",
        "navigation": [
            {
                title: Globalize.localize("user"),
                action: "#index",
                icon: "home"
            },
            {
                title: Globalize.localize("about"),
                action: "#about",
                icon: "info"
            }
        ]
    }
});