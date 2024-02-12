<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

$theme_path = get_stylesheet_directory_uri();
?><!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <script src="<?php echo $theme_path;?>/script/jquery-3.6.1.min.js"></script>
    <link href="<?php echo $theme_path;?>/css/reset.css" rel="stylesheet" />
    <script src="<?php echo $theme_path;?>/script/bxslider.js"></script>
    <link href="<?php echo $theme_path;?>/css/jquery-bxslider.css" rel="stylesheet" />
    <script type="text/javascript" src="<?php echo $theme_path;?>/script/gotop.js"></script>
    <link rel="stylesheet" href="<?php echo $theme_path;?>/css/animate.css">
    <link rel="stylesheet" href="<?php echo $theme_path;?>/css/default.css">
    <script src="<?php echo $theme_path;?>/script/wow.js"></script>
    <script src="<?php echo $theme_path;?>/script/common.js"></script>
    <?php if(is_home() || is_front_page()): ?>
        <script src="<?php echo $theme_path;?>/script/top.js"></script>
    <?php endif; ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" integrity="sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI=" crossorigin="anonymous" />


    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<div id="page_top"></div><!--トップに戻る用-->

<!--
**************************************************
■ スマホヘッダー
***************************************************
-->
<div class="sp">

    <header id="sp_header">
        <div class="logo">
            <a href="<?php echo esc_url( home_url() ); ?>">
                <img src="<?php echo $theme_path;?>/image/icon/logo.png" alt="">
            </a>
        </div>
        <a href="/contact" class="icon mail">
            <i class="far fa-envelope"></i>
        </a>
        <a href="tel:0000000" class="icon tel">
            <i class="fas fa_phone_alt"></i>
        </a>
    </header>

        <!--
        ===================================================
        ■ ハンバーガーメニュー ※使用する方のコメントアウトを外す
        ===================================================
        -->

        <?php
            // 1.横から出てくるバージョン
            get_template_part( 'hamburgerMenu/type-side/index' );
        ?>

        <?php
            // 2.ポップアップバージョン
            // get_template_part( 'hamburgerMenu/type-popup/index' );
        ?>

        <?php
            // 3.ポップアップバージョン Var2
            //  get_template_part( 'hamburgerMenu/type-popup02/index' );
        ?>

        <?php
            // 4.階層(レイヤー)
            //get_template_part( 'hamburgerMenu/type-layer/index' );
        ?>

</div>