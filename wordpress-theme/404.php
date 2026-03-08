<?php
/**
 * 404 Sayfa Bulunamadı Şablonu
 *
 * @package Ensar_Aydemir
 */

get_header();
?>

<div class="not-found">
	<h1>404</h1>
	<p>Aradığınız sayfa bulunamadı.</p>
	<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Anasayfaya Dön</a>
</div>

<?php get_footer(); ?>
