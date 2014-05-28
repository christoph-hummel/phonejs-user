MyApp.updateUser = function (params) {

	function removeUser() {
		MyApp.localStoreUser.remove(params.id);
		MyApp.app.navigate('index', { direction: 'backward', root: true });
	}
	function getUserById(id) {
        var user = JSON.parse(localStorage.getItem("dx-data-localStore-user"));
		for(var i = 0; i < user.length; i++) {
			if(user[i].guid == id) {
				var user = user[i];
				return user;
			}
		}
    }
	
	var viewModel = {
		actionSheetVisible: ko.observable(false),
		actionSheetData: [
			{text: Globalize.localize("delete"), clickAction: removeUser, type: "danger"}
		],
		// create DataSource
		genderSource : new DevExpress.data.DataSource({
			store : MyApp.localStoreGender
		}),

		// create value variables
		inputName: ko.observable(getUserById(params.id).name),
		inputNumber: ko.observable(getUserById(params.id).number),
		gender: ko.observable(getUserById(params.id).gender),
		inputBirthday: ko.observable(Globalize.format(new Date(getUserById(params.id).birthday), 'yyyy-MM-dd')),
		date_placeholder : ko.observable(Globalize.format(new Date(), 'yyyy-MM-dd')),
		
		updateUser: function () {
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
				MyApp.localStoreUser.update( params.id, {
					name : viewModel.inputName(),
					number : viewModel.inputNumber(),
					birthday : viewModel.inputBirthday(),
					gender : viewModel.gender(),
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
		clickRemoveUser: function () {
			viewModel.actionSheetVisible(true);
		},
		//Reload the dataSource
		viewShown: function (e) {
			//Reset the value of the input filds
		},
	};
	return viewModel;
	
};