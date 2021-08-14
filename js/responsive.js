jQuery(document).ready(function( $ ){

	/**
     * Handles site reponsive behaviour
     *
     * - Add classes
     * - Remove Classes
	 */


    const leftFields = `
        .loanamount,
        .firstname, 
        .middlename,
        .gender,
        .mobilephone,
        .date_of_birth,
        .village,
        .parish,
        .county,
        .residency_type,
        .work_address,
        .work_status,
        .farm_location,
        .farm_income,
        .individual_business_location,
        .individual_business_income,
        .company_business_location,
        .company_business_income
    `;

    const trippleFields = `
        .firstname, 
        .middlename,
        .lastname,
        .gender,
        .mobilephone,
        .email,
        .village,
        .parish,
        .subcounty
    `;

    const alignedFields = `
        .residency_type,
        .residency_length,
        .work_status,
        .jobtitle       
    `;

    $(".inline-field").parents("p").addClass("inline-section desktop-inline-block");
    $(leftFields).parents("p").addClass("left-field-section");
    $(trippleFields).parents("p").addClass("tripple-fields");
    $(alignedFields).parents("p").addClass("normalize-fields");

});
