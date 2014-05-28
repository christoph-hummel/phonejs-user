window.MyApp = window.MyApp || {};

$(function () {
	MyApp.initData();
	// Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
	// DevExpress.devices.current({ platform: "generic" });
	MyApp.localStoreUser = new DevExpress.data.LocalStore({
			name : "user",
			key : "guid",
			immediate : true
		});
	MyApp.localStoreGender = new DevExpress.data.LocalStore({
			name : "gender",
			key : "id",
			immediate : true
		});

	MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace : MyApp,
			navigationType : MyApp.config.navigationType,
			navigation : MyApp.config.navigation
		});
	MyApp.app.router.register(":view/:id", {
		view : "index",
		id : undefined
	});
	MyApp.app.navigate();
});
Globalize.culture(navigator.language || navigator.browserLanguage);
document.title = Globalize.localize("Key_AppTitle");