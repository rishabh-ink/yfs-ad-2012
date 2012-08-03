/* Author: See /humans.txt

*/
"use strict";

jQuery(document).ready(function() {
	// Enable tooltips
	jQuery("[rel='tooltip']").tooltip({
		placement: 'right'
	});

	// Enable popovers
	jQuery("[rel='popover']").popover({
		html: true,
		placement: 'right'
	});
});





