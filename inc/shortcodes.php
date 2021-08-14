<?php
/**
 * Handle Short-codes.
 *
 * Must be included in functions.php
 *
 * @package AstraChild
 */

if ( ! defined( 'ABSPATH' ) ) exit;


/**
 * [site_url]
 */
add_action( 'init', function() {

    add_shortcode( 'site_url', function( $atts = null, $content = null ) {
        return site_url();
    });

});

/**
 * [app_date]
 */
add_action( 'init', function() {

    add_shortcode( 'app_date', function( $atts = null, $content = null ) {
        return date( 'Y-m-d' );
    });

});


/**
 * [logo]
 * 
 * Key notes:
 * 
 * - Used within "Send PDF for Contact Form 7" plugin
 * - Classes, e.g. right-align, must be defined in the plugin's Custom CSS section
 * - We provide defaults but allow user to add "atts"
 * - However, "Send PDF for Contact Form 7" plugin doesn't allow you to pass "atts" 
 */
add_action( 'init', function() {

    add_shortcode( 'logo', function( $atts ) {

        // attributes

        $args = shortcode_atts(
            array(
                'src' => '',
                'link' => '',
                'class' => '',
                'width' => ''
            ), $atts);

        // check "class"

        $class = '';
        if ( $args['class'] === '' ) {
            $class = 'right-align upper-top'; // default
        } else {
            $class = $args['class'];
        };

        // check "width"

        $width = '';
        if ( $args['width'] === '' ) {
            $width = '195px'; // default
        } else {
            $width = $args['width'];
        };

        // check "image source"

        $src = '';
        $upload_dir = wp_upload_dir();

        if ( $args['src'] === '' ) {
            $src = $upload_dir['basedir'] . '/2021/08/nc_logo_dark.png'; // default
        } else {
            $src = $args['src'];
        };

        $img = sprintf( '<img src="%1$s" width="%2$spx" />', $src, $width );

        $link = $args['link'];
        $return = '';

        if ( $link === 'yes' ) {
            $return = '<a href="' . $src . '">' . $img . '</a>';
        } else {
            $return = '<div class="' . $class . '">' . $img . '</div>';
        }

        // HTML code
        return $return;
    });

});

