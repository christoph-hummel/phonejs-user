﻿MyApp.index = function (params) {

	var viewModel = {
		ds : new DevExpress.data.DataSource({
			store : MyApp.localStoreUser,
			sort : {
				getter : "date",
				desc : true
			}
		}),
		searchQuery : ko.observable().extend({
			throttle : 500
		}),
		map : function (item) {
			return new localStore;
		},
		viewShowing : function (e) {
			if (e.direction == 'backward') {
				viewModel.ds.load();
			}
		},
	};

	viewModel.searchQuery.subscribe(function (value) {
		viewModel.ds.filter("text", "contains", value);
		viewModel.ds.load();
	});
	return viewModel;
};