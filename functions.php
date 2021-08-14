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


/**
 * Include other functions as needed from the `inc` folder.
 */
require get_stylesheet_directory() . '/inc/shortcodes.php';