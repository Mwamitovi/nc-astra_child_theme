<?php
/**
 * Theme functions and definitions
 *
 * @package AstraChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function astra_child_enqueue_scripts() {
	wp_enqueue_style( 'astra-child-style', get_stylesheet_directory_uri() . '/style.css'	);
 
 	wp_enqueue_script( 'script', get_theme_file_uri( '/script.js' ), array('jquery'), null, true );
}
add_action( 'wp_enqueue_scripts', 'astra_child_enqueue_scripts', 20 );
