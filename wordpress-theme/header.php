<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="container">
		<div class="header-inner">
			<!-- Site Logosu / Adı -->
			<div class="site-logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<?php bloginfo( 'name' ); ?>
				</a>
			</div>

			<!-- Masaüstü Menü -->
			<nav class="main-nav" aria-label="<?php esc_attr_e( 'Ana menü', 'ensar-aydemir' ); ?>">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'fallback_cb'    => 'ensar_fallback_menu',
				) );
				?>
			</nav>

			<!-- Mobil Menü Butonu -->
			<button class="mobile-toggle" aria-label="Menüyü aç/kapat" aria-expanded="false">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="3" y1="6" x2="21" y2="6"/>
					<line x1="3" y1="12" x2="21" y2="12"/>
					<line x1="3" y1="18" x2="21" y2="18"/>
				</svg>
			</button>
		</div>

		<!-- Mobil Menü -->
		<nav class="mobile-nav" aria-label="<?php esc_attr_e( 'Mobil menü', 'ensar-aydemir' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'fallback_cb'    => 'ensar_fallback_menu',
			) );
			?>
		</nav>
	</div>
</header>

<?php
/**
 * Menü atanmadıysa varsayılan bağlantılar
 */
function ensar_fallback_menu() {
	echo '<ul>';
	echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">Anasayfa</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/hakkimda/' ) ) . '">Hakkımda</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/iletisim/' ) ) . '">İletişim</a></li>';
	echo '</ul>';
}
?>
