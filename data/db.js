/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.0.0.js"; />

(function() {
    var gender = [
		{ "description": "Female", "id": "1" },
		{ "description": "Male", "id": "2" }
	];
    var sizeOfShoe = [
		{ "description": "38", "id": "1" },
		{ "description": "39", "id": "2" },
		{ "description": "40", "id": "3" },
		{ "description": "41", "id": "4" },
		{ "description": "42", "id": "5" },
		{ "description": "43", "id": "6" },
		{ "description": "44", "id": "7" },
		{ "description": "45", "id": "8" },
		{ "description": "46", "id": "9" },
		{ "description": "47", "id": "10" },
		{ "description": "48", "id": "11" },
	];
    var finger = [
		{ "description": "1", "id": "1" },
		{ "description": "2", "id": "2" },
		{ "description": "3", "id": "3" },
		{ "description": "4", "id": "4" },
		{ "description": "5", "id": "5" },
		{ "description": "6", "id": "6" },
		{ "description": "7", "id": "7" },
		{ "description": "8", "id": "8" },
		{ "description": "9", "id": "9" },
		{ "description": "10", "id": "10" },
	];
	MyApp.db = {
		gender : gender,
		sizeOfShoe : sizeOfShoe,
		finger : finger
	};
})();