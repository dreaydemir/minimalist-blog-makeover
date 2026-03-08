<?php
/**
 * Sayfa Şablonu (Hakkımda, İletişim vb.)
 *
 * @package Ensar_Aydemir
 */

get_header();
?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<div class="page-content">
	<h1><?php the_title(); ?></h1>
	<div class="entry-content">
		<?php the_content(); ?>
	</div>
</div>

<?php endwhile; endif; ?>

<?php get_footer(); ?>
