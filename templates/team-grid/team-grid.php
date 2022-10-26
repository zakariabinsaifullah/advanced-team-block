<?php
/**
 * Team Grid Callback
 */

 function team_grid_callback($attributes){
    $handle = 'atgb_'. $attributes['id'];
    $atgb_css = '';
    // normal css
    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.'{';
        $atgb_css .= 'z-index: '.$attributes['zIndex'].';';
    $atgb_css .= '}';

    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .wp-block-bcb-team-member{';
        $atgb_css .= 'border-radius: '.$attributes['borderRadius'].'px;';
        if($attributes['borderStyle'] != 'none'){
            $atgb_css .= 'border: '.$attributes['borderWidth'].'px '.$attributes['borderStyle'].' '.$attributes['borderColor'].';';
        }
        if($attributes['backgroundColor']){
            $atgb_css .= 'background-color: '.$attributes['backgroundColor'].';';
        }
    $atgb_css .= '}';
    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .wp-block-bcb-team-member:hover {';
        if($attributes['borderStyle'] != 'none'){
            $atgb_css .= 'border-color: '.$attributes['hoverBorderColor'].';';
        }
        if($attributes['hoverBackgroundColor']){
            $atgb_css .= 'background-color: '.$attributes['hoverBackgroundColor'].';';
        }
    $atgb_css .= '}';

    // content
    if($attributes['nameColor']){
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_name{';
            $atgb_css .= 'color: '.$attributes['nameColor'].';';
        $atgb_css .= '}';
    }
    if($attributes['positionColor']){
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_position{';
            $atgb_css .= 'color: '.$attributes['positionColor'].';';
        $atgb_css .= '}';
    }
    if($attributes['bioColor']){
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_bio{';
            $atgb_css .= 'color: '.$attributes['bioColor'].';';
        $atgb_css .= '}';
    }

    // photo
    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_photo img{';
    $atgb_css .= 'aspect-ratio: '.$attributes['photoRatio'].';';
    $atgb_css .= 'object-fit: '.$attributes['objectFit'].'';
    $atgb_css .= '}';

    // social icon css
    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .afgb__social_icons{';
        $atgb_css .= 'row-gap: '.$attributes['iconsSpacing'].'px;';
        if($attributes['iconsPanelBg']){
            $atgb_css .= 'background-color: '.$attributes['iconsPanelBg'].';';
        }
    $atgb_css .= '}';

    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .afgb__social_icons svg{';
        $atgb_css .= 'width: '.$attributes['iconSize'].'px;';
        $atgb_css .= 'height: '.$attributes['iconSize'].'px;';
        if($attributes['iconColor']){
            $atgb_css .= 'fill: '.$attributes['iconColor'].';';
        }
    $atgb_css .= '}';
    $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .afgb__social_icons svg:hover{';
        if($attributes['iconHoverColor']){
            $atgb_css .= 'fill: '.$attributes['iconHoverColor'].';';
        }
    $atgb_css .= '}';

    // Desktop View
    $atgb_css .= '@media only screen and (min-width: 1025px) {';
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.'{';
        $atgb_css .= 'grid-row-gap: '.$attributes['deskRowGap'].'px;';
        $atgb_css .= 'grid-column-gap: '.$attributes['deskColGap'].'px;';
        $atgb_css .= '}';
        // Content Padding
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_info{';
            if($attributes['enableContentDlinkedPadding']){
                $atgb_css .= 'padding: '.$attributes['contentDlinkedPadding'].'px;';
            }else {
                $atgb_css .= 'padding-top: '.$attributes['contentDtopPadding'].'px;';
                $atgb_css .= 'padding-right: '.$attributes['contentDrightPadding'].'px;';
                $atgb_css .= 'padding-bottom: '.$attributes['contentDbottomPadding'].'px;';
                $atgb_css .= 'padding-left: '.$attributes['contentDleftPadding'].'px;';
            }
            $atgb_css .= 'text-align: '.$attributes['contentAlign'].';';
        $atgb_css .= '}';
    $atgb_css .= '}';

    // Tablet View
    $atgb_css .= '@media only screen and (min-width: 768px) and (max-width: 1024px) {';
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.'{';
        $atgb_css .= 'grid-row-gap: '.$attributes['tabRowGap'].'px;';
        $atgb_css .= 'grid-column-gap: '.$attributes['tabColGap'].'px;';
        $atgb_css .= '}';

        // Content Padding
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_info{';
            if($attributes['enableContentTlinkedPadding']){
                $atgb_css .= 'padding: '.$attributes['contentTlinkedPadding'].'px;';
            }else {
                $atgb_css .= 'padding-top: '.$attributes['contentTtopPadding'].'px;';
                $atgb_css .= 'padding-right: '.$attributes['contentTrightPadding'].'px;';
                $atgb_css .= 'padding-bottom: '.$attributes['contentTbottomPadding'].'px;';
                $atgb_css .= 'padding-left: '.$attributes['contentTleftPadding'].'px;';
            }
        $atgb_css .= '}';
    $atgb_css .= '}';

    // Mobile View
    $atgb_css .= '@media only screen and (max-width: 767px) {';
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.'{';
        $atgb_css .= 'grid-row-gap: '.$attributes['mobRowGap'].'px;';
        $atgb_css .= 'grid-column-gap: '.$attributes['mobColGap'].'px;';
        $atgb_css .= '}';

        // Content Padding
        $atgb_css .= '.wp-block-bcb-team-grid.'.$handle.' .atgb__member_info{';
            if($attributes['enableContentMlinkedPadding']){
                $atgb_css .= 'padding: '.$attributes['contentMlinkedPadding'].'px;';
            }else {
                $atgb_css .= 'padding-top: '.$attributes['contentMtopPadding'].'px;';
                $atgb_css .= 'padding-right: '.$attributes['contentMrightPadding'].'px;';
                $atgb_css .= 'padding-bottom: '.$attributes['contentMbottomPadding'].'px;';
                $atgb_css .= 'padding-left: '.$attributes['contentMleftPadding'].'px;';
            }
        $atgb_css .= '}';
    $atgb_css .= '}';

    return $atgb_css;
 }