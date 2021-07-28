
jQuery(document).ready(function( $ ){

	/**
	 * Based on cf7 v3.3 (change log)
	 * @link https://contactform7.com/2012/09/24/contact-form-7-33/
	 */
	$( ".wpcf7" ).on( 'submit.wpcf7', function(event) {

		/**
		 * @link https://knowledge.hubspot.com/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser
		 * 
		 * - We delete "__hstc" and "hubspotutk" upon form submission
		 * - & refresh the page for hubspot to reset those cookies
		 */

		eraseCookie('__hstc');
		eraseCookie('hubspotutk');
		console.log('New contact created in hubspot');

		// setTimeout(function() {
		// 	window.location.reload();
		// }, 8000);

	});
	
});

function createCookie(name, value, days) {
  	let expires;

	if (days) {
		let date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = `; expires=${date.toUTCString()}`;
	}	else {
    	expires = ""
  	};

	document.cookie = `${name}=${value}${expires};Domain=localhost;Path=/;`
};

function eraseCookie(name) {
	createCookie(name,"",-1);
};

