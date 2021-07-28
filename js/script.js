jQuery(document).ready(function( $ ){

    /* I want a loan for: */

    // Individual options
    $( ".applicant_type input[value='Individual']" ).on( 'click', function(event) {

        if ( 
            document.querySelector('.applicant_type input[value="Individual"]')
            && document.querySelector('.applicant_type input[value="Individual"]').checked
        ) {
            $('.applicant_company_work, .elementor-element.company').addClass('hide');
            $('.applicant_individual_work').removeClass('hide');

        } else {
            // close any sub-options & individual-forms
            $('.applicant_company_work').addClass('hide');
            $('.applicant_individual_work').addClass('hide');            
            $('.elementor-element.individual').addClass('hide');

            if (
                document.querySelector('.applicant_individual_work input[type="checkbox"]')
                || document.querySelector('.applicant_individual_work input[value="Salary"]').checked
                || document.querySelector('.applicant_individual_work input[value="Business"]').checked
                || document.querySelector('.applicant_individual_work input[value="Farming"]').checked
            ) {
                // uncheck any previously "checked" sub-options
                $('.applicant_individual_work input[type="checkbox"]').removeAttr('checked');
            }            
        };

    });


    // Company options
    $( ".applicant_type input[value='Company']" ).on( 'click', function(event) {

        if (
            document.querySelector('.applicant_type input[value="Company"]')
            && document.querySelector('.applicant_type input[value="Company"]')
            && document.querySelector('.applicant_type input[value="Company"]').checked
        ) {
            $('.elementor-element.company').removeClass('hide');
            $('.applicant_individual_work, .elementor-element.individual').addClass('hide');

            if (
                document.querySelector('.applicant_individual_work input[type="checkbox"]')
                || document.querySelector('.applicant_individual_work input[value="Salary"]').checked
                || document.querySelector('.applicant_individual_work input[value="Business"]').checked
                || document.querySelector('.applicant_individual_work input[value="Farming"]').checked
            ) {
                // uncheck any previously "checked" sub-options
                $('.applicant_individual_work input[type="checkbox"]').removeAttr('checked');
            } 

        } else {
            $('.applicant_individual_work, .elementor-element.individual, .elementor-element.company').addClass('hide');
        };

    });
 

    /* My source of income is: */
    
    // Salary
    $( ".applicant_individual_work input[value='Salary']" ).on( 'click', function(event) {

        if (
            document.querySelector('.applicant_individual_work input[value="Salary"]')
            && document.querySelector('.applicant_individual_work input[value="Salary"]').checked
        ) {
            $('.elementor-element.individual, .elementor-element.company').addClass('hide');
            $('.elementor-element.individual.salary').removeClass('hide');
        } else {
            $('.elementor-element.individual.salary').addClass('hide');           
        };

    });    

    // Business
    $( ".applicant_individual_work input[value='Business']" ).on( 'click', function(event) {

        if (
            document.querySelector('.applicant_individual_work input[value="Business"]')
            && document.querySelector('.applicant_individual_work input[value="Business"]').checked
        ) {
            $('.elementor-element.individual, .elementor-element.company').addClass('hide');
            $('.elementor-element.individual.business').removeClass('hide');
        } else {
            $('.elementor-element.individual.business').addClass('hide');           
        };

    });    

    // Farming
    $( ".applicant_individual_work input[value='Farming']" ).on( 'click', function(event) {

        if (
            document.querySelector('.applicant_individual_work input[value="Farming"]')
            && document.querySelector('.applicant_individual_work input[value="Farming"]').checked
        ) {
            $('.elementor-element.individual, .elementor-element.company').addClass('hide');
            $('.elementor-element.individual.farming').removeClass('hide');
        } else {
            $('.elementor-element.individual.farming').addClass('hide');           
        };

    });


    /* Collateral options: */
    
    /* Movable items */

    // business
    $( ".individual_business_collateral input[value='Movable items']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_business_collateral input[value="Movable items"]')
            && document.querySelector('.individual_business_collateral input[value="Movable items"]').checked
        ) {
            $('.individual_business_collateral_movable_item').removeClass('hide');
        } else {
            $('.individual_business_collateral_movable_item').addClass('hide');           
        };

    });     
    // farming
    $( ".individual_farming_collateral input[value='Movable items']" ).on( 'click', function(event) {
        
        if (
            document.querySelector('.individual_farming_collateral input[value="Movable items"]')
            && document.querySelector('.individual_farming_collateral input[value="Movable items"]').checked
        ) {
            $('.individual_farming_collateral_movable_item').removeClass('hide');
        } else {
            $('.individual_farming_collateral_movable_item').addClass('hide');           
        };

    });
    // company
    $( ".company_collateral input[value='Movable items']" ).on( 'click', function(event) {
        
        if (
            document.querySelector('.company_collateral input[value="Movable items"]')
            && document.querySelector('.company_collateral input[value="Movable items"]').checked
        ) {
            $('.company_collateral_movable_item').removeClass('hide');
        } else {
            $('.company_collateral_movable_item').addClass('hide');           
        };

    }); 

    /* Motor vehicle */

    // business
    $( ".individual_business_collateral input[value='Motor vehicle']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_business_collateral input[value="Motor vehicle"]')
            && document.querySelector('.individual_business_collateral input[value="Motor vehicle"]').checked
        ) {
            $('.individual_business_collateral_motor_vehicle').removeClass('hide');
        } else {
            $('.individual_business_collateral_motor_vehicle').addClass('hide');           
        };

    });
    // farming
    $( ".individual_farming_collateral input[value='Motor vehicle']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_farming_collateral input[value="Motor vehicle"]')
            && document.querySelector('.individual_farming_collateral input[value="Motor vehicle"]').checked
        ) {
            $('.individual_farming_collateral_motor_vehicle').removeClass('hide');
        } else {
            $('.individual_farming_collateral_motor_vehicle').addClass('hide');           
        };

    });
    // company
    $( ".company_collateral input[value='Motor vehicle']" ).on( 'click', function(event) {

        if (
            document.querySelector('.company_collateral input[value="Motor vehicle"]')
            && document.querySelector('.company_collateral input[value="Motor vehicle"]').checked
        ) {
            $('.company_collateral_motor_vehicle').removeClass('hide');
        } else {
            $('.company_collateral_motor_vehicle').addClass('hide');           
        };

    });

    /* Land/Property */

    // business
    $( ".individual_business_collateral input[value='Land/Property']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_business_collateral input[value="Land/Property"]')
            && document.querySelector('.individual_business_collateral input[value="Land/Property"]').checked
        ) {
            $('.individual_business_collateral_property_land').removeClass('hide');
        } else {
            $('.individual_business_collateral_property_land').addClass('hide');           
        };

    });
    // farming
    $( ".individual_farming_collateral input[value='Land/Property']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_farming_collateral input[value="Land/Property"]')
            && document.querySelector('.individual_farming_collateral input[value="Land/Property"]').checked
        ) {
            $('.individual_farming_collateral_property_land').removeClass('hide');
        } else {
            $('.individual_farming_collateral_property_land').addClass('hide');           
        };

    });
    // company
    $( ".company_collateral input[value='Land/Property']" ).on( 'click', function(event) {

        if (
            document.querySelector('.company_collateral input[value="Land/Property"]')
            && document.querySelector('.company_collateral input[value="Land/Property"]').checked
        ) {
            $('.company_collateral_property_land').removeClass('hide');
        } else {
            $('.company_collateral_property_land').addClass('hide');           
        };

    });

    /* Other */

    // business
    $( ".individual_business_collateral input[value='Other']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_business_collateral input[value="Other"]')
            && document.querySelector('.individual_business_collateral input[value="Other"]').checked
        ) {
            $('.individual_business_collateral_other').removeClass('hide');
        } else {
            $('.individual_business_collateral_other').addClass('hide');           
        };

    });
    // farming
    $( ".individual_farming_collateral input[value='Other']" ).on( 'click', function(event) {

        if (
            document.querySelector('.individual_farming_collateral input[value="Other"]')
            && document.querySelector('.individual_farming_collateral input[value="Other"]').checked
        ) {
            $('.individual_farming_collateral_other').removeClass('hide');
        } else {
            $('.individual_farming_collateral_other').addClass('hide');           
        };

    });
    // company
    $( ".company_collateral input[value='Other']" ).on( 'click', function(event) {

        if (
            document.querySelector('.company_collateral input[value="Other"]')
            && document.querySelector('.company_collateral input[value="Other"]').checked
        ) {
            $('.company_collateral_other').removeClass('hide');
        } else {
            $('.company_collateral_other').addClass('hide');           
        };

    });
});
