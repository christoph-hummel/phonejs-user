MyApp.addUser = function (params) {

	var viewModel = {

		// create DataSource
		genderSource : new DevExpress.data.DataSource({
				store : MyApp.localStoreGender
			}),
		sizeOfShoeSource : new DevExpress.data.DataSource({
				store : MyApp.localStoreSizeOfShoe
			}),
		fingerSource : new DevExpress.data.DataSource({
				store : MyApp.localStoreFinger
			}),

		// create value variables
		inputName : ko.observable(),
		inputNumber : ko.observable(),
		inputBirthday : ko.observable(),
		date_placeholder : ko.observable(Globalize.format(new Date(), 'yyyy-MM-dd')),
		gender : ko.observable(""),
		finger : ko.observable(""),
		sizeOfShoe: ko.observable(""),

		addUser : function () {
			var error = 0;
			if (!viewModel.inputName()) {
				DevExpress.ui.notify(Globalize.localize("nameIsRequired"), 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputNumber()) {
				DevExpress.ui.notify(Globalize.localize("numberIsRequired"), 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputBirthday()) {
				DevExpress.ui.notify(Globalize.localize("birthdayIsRequired"), 'error', 3000);
				error = 1;
			}
			if (viewModel.gender() == "") {
				DevExpress.ui.notify(Globalize.localize("genderIsRequired"), 'error', 3000);
				error = 1;
			}
			if (error == 0) {
				MyApp.localStoreUser.insert({
					name : viewModel.inputName(),
					number : viewModel.inputNumber(),
					birthday : viewModel.inputBirthday(),
					gender : viewModel.gender(),
					sizeOfShoe : viewModel.sizeOfShoe(),
					finger : viewModel.finger(),
				}).done(function () {
					MyApp.app.navigate('index', {
						direction : 'backward',
						root : true
					});
				}).fail(function () {
					console.log("fail");
				});
			}
		},
		viewShowing : function (e) {
			if (e.direction == "forward") {
				//dump the values of the form items if the view is loaded from the cache
				viewModel.inputName();
				viewModel.inputNumber();
				viewModel.inputBirthday();
				viewModel.gender("");
			}
		}
	};
	return viewModel;
};
