/* Author: See /humans.txt

*/
"use strict";

jQuery(document).ready(function() {
	// Enable tooltips
	jQuery("[rel='tooltip']").tooltip();

	// Enable popovers
	jQuery("[rel='popover']").popover({
		html: true,
		placement: 'left'
	});
});





