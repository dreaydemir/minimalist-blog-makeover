<footer class="site-footer">
	<div class="container">
		<?php if ( is_active_sidebar( 'footer-widgets' ) ) : ?>
			<div class="footer-widgets">
				<?php dynamic_sidebar( 'footer-widgets' ); ?>
			</div>
		<?php endif; ?>

		<p class="footer-name"><?php bloginfo( 'name' ); ?></p>
		<p class="footer-tagline"><?php bloginfo( 'description' ); ?></p>
		<p class="footer-copy">
			&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. Tüm hakları saklıdır.
		</p>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
