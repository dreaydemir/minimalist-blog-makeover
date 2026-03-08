<?php
/**
 * Varsayılan şablon (blog listeleme)
 *
 * @package Ensar_Aydemir
 */

get_header();
?>

<section class="posts-section">
	<div class="container">
		<div class="section-heading">
			<span>Blog</span>
			<div class="line"></div>
		</div>

		<div class="posts-grid">
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) :
					the_post();
					?>
					<a href="<?php the_permalink(); ?>" class="blog-card">
						<?php if ( has_post_thumbnail() ) : ?>
							<div class="blog-card-image">
								<?php the_post_thumbnail( 'card-thumb', array( 'loading' => 'lazy' ) ); ?>
							</div>
						<?php endif; ?>
						<div class="blog-card-meta">
							<?php
							$categories = get_the_category();
							if ( ! empty( $categories ) ) :
								?>
								<span><?php echo esc_html( $categories[0]->name ); ?></span>
								<span>&middot;</span>
							<?php endif; ?>
							<span><?php echo get_the_date(); ?></span>
						</div>
						<h3 class="blog-card-title"><?php the_title(); ?></h3>
						<p class="blog-card-excerpt"><?php echo get_the_excerpt(); ?></p>
						<span class="blog-card-link">Devamını Oku</span>
					</a>
					<?php
				endwhile;
			else :
				?>
				<p>Henüz yazı yok.</p>
			<?php endif; ?>
		</div>

		<!-- Sayfalama -->
		<div class="pagination">
			<?php
			the_posts_pagination( array(
				'mid_size'  => 2,
				'prev_text' => '&larr;',
				'next_text' => '&rarr;',
			) );
			?>
		</div>
	</div>
</section>

<?php get_footer(); ?>
