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
        .marital_status,
        .village,
        .parish,
        .county,
        .residency_type,
        .work_address,
        .work_status,
        .work_contract,
        .guarantor_form,
        .farm_location,
        .farm_income,
        .individual_business_name,
        .individual_business_contact,
        .individual_business_income,
        .individual_business_trading_license,
        .company_business_name,
        .company_business_contact,
        .company_business_income,
        .company_business_trading_license,
        .company_business_articles,
        .motor_vehicle_inspection_report,
        .motor_vehicle_logbook,
        .property_land_title,
        .property_valuation_report
    `;

    const trippleFields = `
        .firstname, 
        .middlename,
        .lastname,
        .gender,
        .mobilephone,
        .email,
        .date_of_birth,
        .marital_status,
        .passport_photo,
        .village,
        .parish,
        .subcounty,
        .motor_vehicle_inspection_report,
        .motor_vehicle_logbook,
        .motor_vehicle_transfer_forms
    `;

    $(".inline-field").parents("p").addClass("inline-section desktop-inline-block");
    $(leftFields).parents("p").addClass("left-field-section");
    $(trippleFields).parents("p").addClass("tripple-fields");

});
