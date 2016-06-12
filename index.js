var {ToggleButton} = require("sdk/ui/button/toggle");
var prefService = require("sdk/preferences/service");
var imagePermission = "permissions.default.image";

var button = ToggleButton({
	id: 'simpleImageBlocker',
	label: 'Simple Image Blocker',
	icon: {
		16: './icon-16.png',
		32: './icon-32.png',
		64: './icon-64/png'
	},
	badge: '0',
	badgeColor: '#00AABB',
	onChange: changeImagePermission
});

function changeImagePermission(state) {
	if (state.checked) {
		button.badge = 'S';
		button.badgeColor = '#FF0000';
		prefService.set(imagePermission, 2);
	} else {
		button.badge = 'A';
		button.badgeColor = '#00FF00';
		prefService.set(imagePermission, 1);
	}
}
