<?php
/**
 * Plugin Name:       Advanced Team Blocks
 * Description:       Advanced Team Blocks is a collection of Custom Gutenberg blocks for WordPress to show team members in different styles.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           2.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       advanced-team-blocks
 *
 * @package           @wordpress/create-block 
 */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// require admin page
require_once plugin_dir_path( __FILE__ ) . 'admin/class-atgb-blocks.php';

/**
 * Blocks Final Class
 */

final class ATGB_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->atgb_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'atgb_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'atgb_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'atgb_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'atgb_external_libraries' ] );

		// redirect to admin page after activation
		add_action( 'activated_plugin', [ $this, 'atgb_redirect_to_admin_page' ] );
	}

	/**
	 * Redirect to admin page after activation
	 */
	public function atgb_redirect_to_admin_page( $plugin ) {
		if( $plugin == plugin_basename( __FILE__ ) ) {
			exit( wp_redirect( admin_url( 'options-general.php?page=atgb-block' ) ) );
		}
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function atgb_define_constants() {
		define( 'ATGB_VERSION', '2.0.0' );
		define( 'ATGB_URL', plugin_dir_url( __FILE__ ) );
		define( 'ATGB_INC_URL', ATGB_URL . 'includes/' );		
	}

	public function atgb_inline_css($handle, $css){
		// register inline style
		wp_register_style( $handle, false );
		// enqueue inline style
		wp_enqueue_style( $handle );
		// add inline style at head
		wp_add_inline_style( $handle, $css );
	}

	/**
	 * Blocks Registration 
	 */

	public function atgb_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function atgb_blocks_init() {
		// register single block
		$this->atgb_register_block( 'team-grid', array(
			'render_callback' => [ $this, 'atgb_render_team_grid' ],
		) );
	}

	// Team Grid Callback 
	public function atgb_render_team_grid($attributes, $content){
		require_once __DIR__ . '/templates/team-grid/team-grid.php';
		$handle = 'atgb-team-grid-' . $attributes['id'];
		$this->atgb_inline_css( $handle, team_grid_callback($attributes));
		return $content;
	}

	/**
	 * Register Block Category
	 */

	public function atgb_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'atgb-blocks',
					'title' => __( 'Team Blocks', 'advanced-team-blocks' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function atgb_external_libraries() {
		// Editor Styles
		if( is_admin() ) {
			wp_enqueue_style( 'atgb-editor-css', ATGB_INC_URL . 'css/editor.css', array(), ATGB_VERSION );
		}
	}

}

/**
 * Kickoff
*/

ATGB_BLOCKS_CLASS::init();
