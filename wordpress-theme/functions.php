<?php
/**
 * Dr. Ensar Aydemir Theme Functions
 *
 * Tema kurulum, menü, widget ve özellik tanımlamaları.
 *
 * @package Ensar_Aydemir
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Tema kurulumu: menü, öne çıkan görsel, başlık etiketi desteği
 */
function ensar_theme_setup() {
	// <title> etiketini WordPress yönetsin
	add_theme_support( 'title-tag' );

	// Öne çıkan görsel (featured image) desteği
	add_theme_support( 'post-thumbnails' );

	// Özel görsel boyutları
	add_image_size( 'card-thumb', 600, 450, true );   // 4:3 kart görseli
	add_image_size( 'hero-image', 1920, 1080, true );  // Hero görseli
	add_image_size( 'single-post', 960, 540, true );    // Tekil yazı görseli

	// Navigasyon menüleri
	register_nav_menus( array(
		'primary' => __( 'Ana Menü', 'ensar-aydemir' ),
	) );

	// HTML5 desteği
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Özel logo desteği
	add_theme_support( 'custom-logo', array(
		'height'      => 60,
		'width'       => 300,
		'flex-height' => true,
		'flex-width'  => true,
	) );
}
add_action( 'after_setup_theme', 'ensar_theme_setup' );

/**
 * Google Fonts ve tema stillerini yükle
 */
function ensar_enqueue_assets() {
	// Google Fonts: Playfair Display + DM Sans
	wp_enqueue_style(
		'ensar-google-fonts',
		'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap',
		array(),
		null
	);

	// Ana stil dosyası
	wp_enqueue_style(
		'ensar-style',
		get_stylesheet_uri(),
		array( 'ensar-google-fonts' ),
		wp_get_theme()->get( 'Version' )
	);

	// Mobil menü için minimal JS
	wp_enqueue_script(
		'ensar-main',
		get_template_directory_uri() . '/js/main.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'ensar_enqueue_assets' );

/**
 * Footer widget alanı
 */
function ensar_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer Widget Alanı', 'ensar-aydemir' ),
		'id'            => 'footer-widgets',
		'description'   => __( 'Footer bölümüne widget ekleyin.', 'ensar-aydemir' ),
		'before_widget' => '<div class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'ensar_widgets_init' );

/**
 * Yazı özetinin (excerpt) uzunluğunu ayarla
 */
function ensar_excerpt_length( $length ) {
	return 25;
}
add_filter( 'excerpt_length', 'ensar_excerpt_length' );

/**
 * Excerpt sonundaki "[...]" metnini değiştir
 */
function ensar_excerpt_more( $more ) {
	return '&hellip;';
}
add_filter( 'excerpt_more', 'ensar_excerpt_more' );

/**
 * İçerik genişliğini ayarla
 */
if ( ! isset( $content_width ) ) {
	$content_width = 960;
}
