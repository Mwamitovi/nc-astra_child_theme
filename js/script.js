jQuery(document).ready(function ($) {
	/**
	 *
	 * I want a loan for:
	 * ----------------------------------------------------------------------------
	 */

	// Individual options
	$(".applicant_type input[value='Individual']").on("click", function (event) {
		if (
			document.querySelector('.applicant_type input[value="Individual"]') &&
			document.querySelector('.applicant_type input[value="Individual"]').checked
		) {
			$(`
				.attach-default,
				.applicant_individual_work
			`).removeClass("hide");

			$(`				
				.attach-divider,
				.applicant_company_work,
				.elementor-element.company
			`).addClass("hide");

			// related to the "Send PDF for Contact Form 7" pdf URL
			$('div[id*="wpcf7-f1404-"] form').trigger( "reset" );

		} else {
			// close any sub-options & individual-forms
			$(`
				.attach-divider,
				.applicant_company_work, 
				.applicant_individual_work,
				.elementor-element.individual
			`).addClass("hide");


			$(`
				.attach-default
			`).removeClass("hide");

			if (
				document.querySelector(
					'.applicant_individual_work input[type="checkbox"]'
				) ||
				document.querySelector(
					'.applicant_individual_work input[value="Salary"]'
				).checked ||
				document.querySelector(
					'.applicant_individual_work input[value="Business"]'
				).checked ||
				document.querySelector(
					'.applicant_individual_work input[value="Farming"]'
				).checked
			) {
				// uncheck any previously "checked" sub-options
				$('.applicant_individual_work input[type="checkbox"]').removeAttr(
					"checked"
				);
			}

		}
	});

	// Company options
	$(".applicant_type input[value='Company']").on("click", function (event) {
		if (
			document.querySelector('.applicant_type input[value="Company"]') &&
			document.querySelector('.applicant_type input[value="Company"]') &&
			document.querySelector('.applicant_type input[value="Company"]').checked
		) {
			$(`
				.attach-divider,
				.elementor-element.company
			`).removeClass("hide");
			$(`
				.attach-default,
				.applicant_individual_work,
				.elementor-element.individual
			`).addClass("hide");

			if (
				document.querySelector(
					'.applicant_individual_work input[type="checkbox"]'
				) ||
				document.querySelector(
					'.applicant_individual_work input[value="Salary"]'
				).checked ||
				document.querySelector(
					'.applicant_individual_work input[value="Business"]'
				).checked ||
				document.querySelector(
					'.applicant_individual_work input[value="Farming"]'
				).checked
			) {
				// uncheck any previously "checked" sub-options
				$('.applicant_individual_work input[type="checkbox"]').removeAttr(
					"checked"
				);
			}

			// related to setting "Send PDF for Contact Form 7" pdf URL
			$(`
				div[id*="wpcf7-f1495-"] form,
				div[id*="wpcf7-f1390-"] form,
				div[id*="wpcf7-f1397-"] form
			`).trigger( "reset" );

		} else {
			$(".attach-default").removeClass("hide");
			$(`
				.attach-divider,
				.applicant_individual_work,
				.elementor-element.individual,
				.elementor-element.company
			`).addClass("hide");
		}
	});

	/**
	 *
	 * My source of income is:
	 * ----------------------------------------------------------------------------
	 */

	// Salary
	$(".applicant_individual_work input[value='Salary']").on(
		"click",
		function (event) {
			if (
				document.querySelector(
					'.applicant_individual_work input[value="Salary"]'
				) &&
				document.querySelector('.applicant_individual_work input[value="Salary"]')
					.checked
			) {
				$(`
					.attach-default,
					.elementor-element.individual,
					.elementor-element.company
				`).addClass("hide");

				$(`
					.attach-divider,
					.elementor-element.individual.salary
				`).removeClass("hide");

				/* related to setting "Send PDF for Contact Form 7" pdf URL */
				$(`
					div[id*="wpcf7-f1390-"] form,
					div[id*="wpcf7-f1397-"] form
				`).trigger( "reset" );

			} else {
				$(`
					.attach-divider,
					.elementor-element.individual.salary
				`).addClass("hide");

				$(`
					.attach-default
				`).removeClass("hide");
			}
		}
	);

	// Business
	$(".applicant_individual_work input[value='Business']").on(
		"click",
		function (event) {
			if (
				document.querySelector(
					'.applicant_individual_work input[value="Business"]'
				) &&
				document.querySelector(
					'.applicant_individual_work input[value="Business"]'
				).checked
			) {
				$(`
					.attach-default,
					.elementor-element.individual,
					.elementor-element.company
				`).addClass("hide");

				$(`
					.attach-divider,
					.elementor-element.individual.business
				`).removeClass("hide");


				// related to setting "Send PDF for Contact Form 7" pdf URL
				$(`
					div[id*="wpcf7-f1495-"] form,
					div[id*="wpcf7-f1397-"] form
				`).trigger( "reset" );

			} else {
				$(`
					.attach-divider,
					.elementor-element.individual.business
				`).addClass("hide");

				$(`
					.attach-default
				`).removeClass("hide");
			}
		}
	);

	// Farming
	$(".applicant_individual_work input[value='Farming']").on(
		"click",
		function (event) {
			if (
				document.querySelector(
					'.applicant_individual_work input[value="Farming"]'
				) &&
				document.querySelector(
					'.applicant_individual_work input[value="Farming"]'
				).checked
			) {
				$(`
					.attach-default,
					.elementor-element.individual,
					.elementor-element.company
				`).addClass("hide");

				$(`
					.attach-divider,
					.elementor-element.individual.farming
				`).removeClass("hide");

				// related to setting "Send PDF for Contact Form 7" pdf URL
				$(`
					div[id*="wpcf7-f1495-"] form,
					div[id*="wpcf7-f1390-"] form
				`).trigger( "reset" );

			} else {
				$(`
					.attach-divider,
					.elementor-element.individual.farming
				`).addClass("hide");

				$(`
					.attach-default
				`).removeClass("hide");
			}
		}
	);

	/**
	 *
	 * Generate file-number
	 * ----------------------------------------------------------------------------
	 */

	// random string generator
	function randomString(length, chars) {
		let mask = "";

		if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
		if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (chars.indexOf("#") > -1) mask += "0123456789";
		if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";

		let result = "";

		for (let i = length; i > 0; --i) {
			result += mask[Math.floor(Math.random() * mask.length)];
		}

		return result;
	};

	/**
	 * Autogenerated File numbers
	 * - Individual/Salary
	 * - Individual/Business
	 * - Individual/Farming
	 * - Company
	 */

	// Salary
	$("div[id*='wpcf7-f1495-'] input[type='email']").on(
		"change input", 
		function (event) {
			if (
				!!document.querySelector('div[id*="wpcf7-f1495-"] input[type="email"]').value // not empty
			) {
				document.querySelector(
					'div[id*="wpcf7-f1495-"] input[name="filenumber"]'
				).value = `NC1495-${randomString(4,'#')}iS-${randomString(4,'#')}`;

				sessionStorage.setItem('formid', '1495');
			} else {
				document.querySelector('div[id*="wpcf7-f1495-"] input[name="filenumber"]').value = '';
				
				sessionStorage.removeItem('formid');
			}
		}
	);

	// Business
	$("div[id*='wpcf7-f1390-'] input[type='email']").on(
		"change input",
		function (event) {
			if (
				!!document.querySelector('div[id*="wpcf7-f1390-"] input[type="email"]').value // not empty
			) {
				document.querySelector(
					'div[id*="wpcf7-f1390-"] input[name="filenumber"]'
				).value = `NC1390-${randomString(4,'#')}iB-${randomString(4,'#')}`;

				sessionStorage.setItem('formid', '1390');
			} else {
				document.querySelector('div[id*="wpcf7-f1390-"] input[name="filenumber"]').value = '';

				sessionStorage.removeItem('formid');
			}
		}
	);

	// Farming
	$("div[id*='wpcf7-f1397-'] input[type='email']").on(
		"change input",
		function (event) {
			if (
				!!document.querySelector('div[id*="wpcf7-f1397-"] input[type="email"]').value // not empty
			) {
				document.querySelector(
					'div[id*="wpcf7-f1397-"] input[name="filenumber"]'
				).value = `NC1397-${randomString(4,'#')}iF-${randomString(4,'#')}`;

				sessionStorage.setItem('formid', '1397');
			} else {
				document.querySelector('div[id*="wpcf7-f1397-"] input[name="filenumber"]').value = '';

				sessionStorage.removeItem('formid');
			}
		}
	);

	// Company
	$("div[id*='wpcf7-f1404-'] input[type='email']").on(
		"change input",
		function (event) {
			if (
				!!document.querySelector('div[id*="wpcf7-f1404-"] input[type="email"]').value // not empty
			) {
				document.querySelector(
					'div[id*="wpcf7-f1404-"] input[name="filenumber"]'
				).value = `NC1404-${randomString(4,'#')}Co-${randomString(4,'#')}`;

				sessionStorage.setItem('formid', '1404');
			} else {
				document.querySelector('div[id*="wpcf7-f1404-"] input[name="filenumber"]').value = '';
				
				sessionStorage.removeItem('formid');
			}
		}
	);

	/**
	 *  Reload the "application form"
	 *  @reason 
	 *  We "erase" cookies in "hubspot.js" - they're replaced upon page (re)load
	 */
	$("#back_2_appform").on("click", function (event) {
		event.preventDefault();
		window.location.reload();
	})

	/**
	 *
	 * Manipulate PDF proper display
	 * ----------------------------------------------------------------------------
	 */

	let formID = sessionStorage.getItem('formid');
	let siteUrl = document.URL;
	let pdfUrl  = '';

	// for some reason...
	// the "individual" pdf return errors, 
	// so we manupilate the browser to render the right doc
	if (siteUrl && siteUrl.includes("sendpdfcf7_uploads")) {
		if (document.body && document.body.classList && document.body.classList.contains("error404")) {
			console.log('Generated the PDF successfully');

			if (formID === '1495') {

				pdfUrl = siteUrl.replace(
					/sendpdfcf7_uploads.*-loan/, `sendpdfcf7_uploads/${formID}/salary-loan`
				);

			} else if (formID === '1390') {

				pdfUrl = siteUrl.replace(
					/sendpdfcf7_uploads.*-loan/, `sendpdfcf7_uploads/${formID}/business-loan`
				);

			} else if (formID === '1397') {

				pdfUrl = siteUrl.replace(
					/sendpdfcf7_uploads.*-loan/, `sendpdfcf7_uploads/${formID}/farming-loan`
				);

			};

			window.location = pdfUrl;

		};
	};

});
