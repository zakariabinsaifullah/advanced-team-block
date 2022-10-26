<?php

// class to add admin submenu page

class ATGB_Admin_Page {

    /**
     * Constructor
     */
    public function __construct() {
        add_action( 'admin_menu', [ $this, 'atgb_admin_menu' ] );

        // enqueue admin assets
        add_action( 'admin_enqueue_scripts', [ $this, 'atgb_admin_assets' ] );
    }

    /**
     * Enqueue admin scripts
     */
    public function atgb_admin_assets($screen) {
        if( $screen === 'settings_page_atgb-block' ){
            wp_enqueue_style( 'atgb-admin-style', ATGB_URL . 'admin/admin.css', [], ATGB_VERSION );
            // JS
            wp_enqueue_script( 'atgb-admin-script', ATGB_URL . 'admin/admin.js', [ 'jquery' ], ATGB_VERSION, true );
        }
    }

    /**
     * Add admin menu
     */
    public function atgb_admin_menu() {
        add_submenu_page(
            'options-general.php',
            __( 'Team Block', 'advanced-team-blockss' ),
            __( 'Team Block', 'advanced-team-blockss' ),
            'manage_options',
            'atgb-block',
            [ $this, 'atgb_admin_page' ]
        );
    }

    /**
     * Admin page
     */
    public function atgb_admin_page() {
        ?>
        <div class="atgb__wrap">
            <div class="plugin_max_container">
                <div class="plugin__head_container">
                    <div class="plugin_head">
                        <h1 class="plugin_title">
                            <?php _e( 'Advanced Team Blocks', 'advanced-team-blocks' ); ?>
                        </h1>
                        <p class="plugin_description">
                            <?php _e( 'Advanced Team Blocks is a collection of Custom Gutenberg blocks that allows you to create different team styles with ease in Gutenberg Editor without any coding knowledge', 'advanced-team-blocks' ); ?>
                        </p>
                    </div>
                </div>
                <div class="plugin__body_container">
                    <div class="plugin_body">
                        <div class="tabs__panel_container">
                            <div class="tabs__titles">
                                <p class="tab__title active" data-tab="tab1">
                                    <?php _e( 'Help and Support', 'advanced-team-blocks' ); ?>
                                </p>
                                <p class="tab__title" data-tab="tab2">
                                    <?php _e( 'Changelog', 'advanced-team-blocks' ); ?>
                                </p>
                            </div>
                            <div class="tabs__container">
                                <div class="tabs__panels">
                                    <div class="tab__panel active" id="tab1">
                                        <div class="tab__panel_flex">
                                            <div class="tab__panel_left">
                                                <h3 class="video__title">
                                                    <?php _e( 'Video Tutorial', 'advanced-team-blocks' ); ?>
                                                </h3>
                                                <p class="video__description">
                                                    <?php _e( 'Watch the video tutorial to learn how to use the plugin. It will help you start your own design quickly.', 'advanced-team-blocks' ); ?>
                                                </p>
                                                <div class="video__container">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BSDj4900ru0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div class="tab__panel_right">
                                                <div class="single__support_panel">
                                                    <h3 class="support__title">
                                                        <?php _e( 'Get Support', 'advanced-team-blocks' ); ?>
                                                    </h3>
                                                    <p class="support__description">
                                                        <?php _e( 'If you find any issue or have any suggestion, please let me know.', 'advanced-team-blocks' ); ?>
                                                    </p>
                                                    <a href="https://wordpress.org/support/plugin/advanced-team-block/" class="support__link" target="_blank">
                                                        <?php _e( 'Support', 'advanced-team-blocks' ); ?>
                                                    </a>
                                                </div>
                                                <div class="single__support_panel">
                                                    <h3 class="support__title">
                                                        <?php _e( 'Spread Your Love', 'advanced-team-blocks' ); ?>
                                                    </h3>
                                                    <p class="support__description">
                                                        <?php _e( 'If you like this plugin, please share your opinion', 'advanced-team-blocks' ); ?>
                                                    </p>
                                                    <a href="https://wordpress.org/support/plugin/advanced-team-block/reviews/" class="support__link" target="_blank">
                                                        <?php _e( 'Rate the Plugin', 'advanced-team-blocks' ); ?>
                                                    </a>
                                                </div>
                                                <div class="single__support_panel">
                                                    <h3 class="support__title">
                                                        <?php _e( 'Similar Blocks', 'advanced-team-blocks' ); ?>
                                                    </h3>
                                                    <p class="support__description">
                                                        <?php _e( 'Want to get more similar blocks, please visit my website', 'advanced-team-blocks' ); ?>
                                                    </p>
                                                    <a href="https://makegutenblock.com" class="support__link" target="_blank">
                                                        <?php _e( 'Visit my Website', 'advanced-team-blocks' ); ?>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="custom__block_request">
                                            <h3 class="custom__block_request_title">
                                                <?php _e( 'Need to Hire Me?', 'advanced-team-blocks' ); ?>
                                            </h3>
                                            <p class="custom__block_request_description">
                                                <?php _e( 'I am available for any freelance projects. Please feel free to share your project detail with me.', 'advanced-team-blocks' ); ?>
                                            </p>
                                            <div class="available__links">
                                                <a href="mailto:zbinsaifullah@gmail.com" class="available__link mail" target="_blank">
                                                    <?php _e( 'Send Email', 'advanced-team-blocks' ); ?>
                                                </a>
                                                <a href="https://makegutenblock.com/contact" class="available__link web" target="_blank">
                                                    <?php _e( 'Send Message', 'advanced-team-blocks' ); ?>
                                                </a>
                                                <a href="https://www.fiverr.com/devs_zak" class="available__link fiverr" target="_blank">
                                                    <?php _e( 'Fiverr', 'advanced-team-blocks' ); ?>
                                                </a>
                                                <a href="https://www.upwork.com/freelancers/~010af183b3205dc627" class="available__link upwork" target="_blank">
                                                    <?php _e( 'UpWork', 'advanced-team-blocks' ); ?>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab__panel" id="tab2">
                                        <div class="change__log_head">
                                            <h3 class="change__log_title">
                                                <?php _e( 'Changelog', 'advanced-team-blocks' ); ?>
                                            </h3>
                                            <p class="change__log_description">
                                                <?php _e( 'This is the changelog of the plugin. You can see the changes in each version.', 'advanced-team-blocks' ); ?>
                                            </p>
                                            <div class="change__notes">
                                                <div class="single__note">
                                                    <span class="info change__note"><?php _e( 'i', 'advanced-team-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'Info', 'advanced-team-blocks' ); ?></span>
                                                </div>
                                                <div class="single__note">
                                                    <span class="feature change__note"><?php _e( 'N', 'advanced-team-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'New Feature', 'advanced-team-blocks' ); ?></span>
                                                </div>
                                                <div class="single__note">
                                                    <span class="update change__note"><?php _e( 'U', 'advanced-team-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'Update', 'advanced-team-blocks' ); ?></span>
                                                </div>
                                                <div class="single__note">
                                                    <span class="fixing change__note"><?php _e( 'F', 'advanced-team-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'Issue Fixing', 'advanced-team-blocks' ); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="change__log_body">
                                            <div class="single__log">
                                                <div class="plugin__info">
                                                    <span class="log__version">2.0.0</span>
                                                    <span class="log__date">2022-10-25</span>
                                                </div>
                                                <div class="log__description">
                                                    <span class="change__note feature">U</span>
                                                    <span class="description__text"><?php _e( 'A great updates with completely different looks and feel.', 'advanced-team-blocks' ); ?></span>
                                                </div>
                                            </div>
                                            <div class="single__log">
                                                <div class="plugin__info">
                                                    <span class="log__version">1.0.0</span>
                                                    <span class="log__date">2021-09-29</span>
                                                </div>
                                                <div class="log__description">
                                                    <span class="change__note info">i</span>
                                                    <span class="description__text"><?php _e( 'Initial Release', 'advanced-team-blocks' ); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}

new ATGB_Admin_Page();