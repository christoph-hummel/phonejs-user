"use strict";


!function($, DX, wo, undefined) {
	var DATA_VERSION_KEY = "dx-data-localStore-version",
		DATA_VERSION = "1",
		GENDER_KEY = "dx-data-localStore-gender",
		SIZEOFSHOE_KEY = "dx-data-localStore-sizeOfShoe",
		FINGER_KEY = "dx-data-localStore-finger";

	function initData() {
		if(localStorage.getItem(DATA_VERSION_KEY) !== DATA_VERSION) {
			clearData();
			localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
			localStorage.setItem(GENDER_KEY, JSON.stringify(MyApp.db.gender));
			localStorage.setItem(FINGER_KEY, JSON.stringify(MyApp.db.finger));
			localStorage.setItem(SIZEOFSHOE_KEY, JSON.stringify(MyApp.db.sizeOfShoe));
		}
	}

	function clearData() {
        var localStorageKeys = [
			DATA_VERSION,
			GENDER_KEY,
			DATA_VERSION = "1",
        ];
        $.each(localStorageKeys, function () {
            localStorage.removeItem(this);
        });
    }
	$.extend(MyApp, {
		initData: initData,
		clearData: clearData
	});  
}(jQuery, DevExpress, MyApp);