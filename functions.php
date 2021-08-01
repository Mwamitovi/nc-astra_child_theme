<?php
/**
 * Theme functions and definitions
 *
 * @package AstraChild
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'AC_VERSION', '1.0.0' );


add_action( 'init', 'add_cors_http_header' );
function add_cors_http_header() {
    header("Access-Control-Allow-Origin: *");
}


/**
 * Load jQuery
 */
add_action( 'wp_footer', 'gpc_load_jquery' );
function gpc_load_jquery() {
 	wp_enqueue_script( 'jquery' );
}


/**
 * Enqueue scripts and styles.
 */
add_action( 'wp_enqueue_scripts', 'ac_enqueue_scripts', 20 );
function ac_enqueue_scripts() {
	wp_enqueue_style('ac-style', get_stylesheet_directory_uri() . '/style.css');

	wp_enqueue_style('nc-base', get_stylesheet_directory_uri() . '/css/base.css', false, AC_VERSION, 'all');

	wp_enqueue_style('nc-style', get_stylesheet_directory_uri() . '/css/style.css', false, AC_VERSION, 'all');
 
 	wp_enqueue_script('nc-responsive', get_theme_file_uri( '/js/responsive.js' ), array('jquery'), null, true);

    wp_enqueue_script('nc-script', get_theme_file_uri( '/js/script.js' ), array('jquery'), null, true);

    wp_enqueue_script('hubspot-script', get_theme_file_uri( '/js/hubspot.js' ), array('jquery'), null, true);
}


function recent_posts_function() {
   query_posts(array('orderby' => 'date', 'order' => 'DESC' , 'showposts' => 1));
   if (have_posts()) :
      while (have_posts()) : the_post();
         $return_string = '<a href="'.get_permalink().'">'.get_the_title().'</a>';
      endwhile;
   endif;
   wp_reset_query();
   return $return_string;
}


add_action( 'init', function() {

    add_shortcode( 'site_url', function( $atts = null, $content = null ) {
        return site_url();
    });

});


add_action( 'init', function() {

    add_shortcode( 'app_date', function( $atts = null, $content = null ) {
        return date( 'd / m / Y' );
    });

});


/**
 * Include other functions as needed from the `inc` folder.
 */
// require get_stylesheet_directory() . '/inc/file-uploads.php';