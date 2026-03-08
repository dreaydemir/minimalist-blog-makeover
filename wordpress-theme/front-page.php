<?php
/**
 * Anasayfa Şablonu
 *
 * Hero bölümü, son yazılar ve hakkımda bölümünü gösterir.
 *
 * @package Ensar_Aydemir
 */

get_header();
?>

<!-- ===== HERO BÖLÜMÜ ===== -->
<?php
// Hero görseli: Özelleştirici'den veya varsayılan
$hero_image = get_theme_mod( 'ensar_hero_image', get_template_directory_uri() . '/images/hero-blog.jpg' );
?>
<section class="hero-section">
	<img src="<?php echo esc_url( $hero_image ); ?>" alt="<?php bloginfo( 'name' ); ?>">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<div class="container">
			<div class="hero-content-inner">
				<p class="hero-label">Sağlık &amp; Yaşam</p>
				<h1 class="hero-title">Hikayeni Anlat</h1>
				<p class="hero-desc">Sağlıklı ve bilinçli bir yaşam için bilgi paylaşımları</p>
			</div>
		</div>
	</div>
</section>

<!-- ===== SON YAZILAR ===== -->
<section class="posts-section">
	<div class="container">
		<div class="section-heading">
			<span>Son Yazılar</span>
			<div class="line"></div>
		</div>

		<div class="posts-grid">
			<?php
			$recent_posts = new WP_Query( array(
				'posts_per_page' => 8,
				'post_status'    => 'publish',
			) );

			if ( $recent_posts->have_posts() ) :
				while ( $recent_posts->have_posts() ) :
					$recent_posts->the_post();
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
				wp_reset_postdata();
			else :
				?>
				<p>Henüz yazı yok.</p>
			<?php endif; ?>
		</div>
	</div>
</section>

<!-- ===== HAKKIMDA BÖLÜMÜ ===== -->
<section class="about-section">
	<div class="container">
		<div class="about-grid">
			<div class="about-text">
				<p class="about-label">Hakkımda</p>
				<h2 class="about-name">Dr. Ensar Aydemir</h2>
				<p class="about-specialty">Endokrinoloji ve Metabolizma Hastalıkları Uzmanı</p>
				<p class="about-bio">
					Ensar Aydemir, lisans eğitimini Hacettepe Üniversitesi Tıp Fakültesi'nde,
					iç hastalıkları uzmanlığını Marmara Üniversitesi'nde ve endokrinoloji
					uzmanlığını Bursa Uludağ Üniversitesi'nde tamamladı. Bir devlet hastanesinde
					Endokrinoloji ve Metabolizma Hastalıkları uzmanı olarak görev yapmaktadır.
				</p>
			</div>
			<div class="about-image">
				<img src="<?php echo esc_url( get_template_directory_uri() . '/images/about-portrait.jpg' ); ?>"
				     alt="Dr. Ensar Aydemir" loading="lazy">
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>
