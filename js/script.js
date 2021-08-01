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
	$("div[id*='wpcf7-f1329-'] input[type='email']").on(
		"change input", 
		function (event) {
			if (
				!!document.querySelector('div[id*="wpcf7-f1329-"] input[type="email"]').value // not empty
			) {
				document.querySelector(
					'div[id*="wpcf7-f1329-"] input[name="filenumber"]'
				).value = `NC${randomString(4,'#')}-${randomString(2,'#')}iS-${randomString(4,'#')}`;
			} else {
				document.querySelector('div[id*="wpcf7-f1329-"] input[name="filenumber"]').value = '';
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
				).value = `NC${randomString(4,'#')}-${randomString(2,'#')}iB-${randomString(4,'#')}`;
			} else {
				document.querySelector('div[id*="wpcf7-f1390-"] input[name="filenumber"]').value = '';
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
				).value = `NC${randomString(4,'#')}-${randomString(2,'#')}iF-${randomString(4,'#')}`;
			} else {
				document.querySelector('div[id*="wpcf7-f1397-"] input[name="filenumber"]').value = '';
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
				).value = `NC${randomString(4,'#')}-${randomString(2,'#')}Co-${randomString(4,'#')}`;
			} else {
				document.querySelector('div[id*="wpcf7-f1404-"] input[name="filenumber"]').value = '';
			}
		}
	);

});
