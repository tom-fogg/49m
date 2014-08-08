<?php  ?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>49m Know Your Number</title>
        <meta name="description" content="">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
        <meta http-equiv="cleartype" content="on">

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/touch/apple-touch-icon-144x144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/touch/apple-touch-icon-114x114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/touch/apple-touch-icon-72x72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="img/touch/apple-touch-icon-57x57-precomposed.png">
        <link rel="shortcut icon" sizes="196x196" href="img/touch/touch-icon-196x196.png">
        <link rel="shortcut icon" href="img/touch/apple-touch-icon.png">

        <!-- Tile icon for Win8 (144x144 + tile color) -->
        <meta name="msapplication-TileImage" content="img/touch/apple-touch-icon-144x144-precomposed.png">
        <meta name="msapplication-TileColor" content="#222222">

        <!-- SEO: If mobile URL is different from desktop URL, add a canonical link to the desktop page -->
        <!--
        <link rel="canonical" href="http://www.example.com/" >
        -->

        <!-- Add to homescreen for Chrome on Android -->
        <!--
        <meta name="mobile-web-app-capable" content="yes">
        -->

        <!-- For iOS web apps. Delete if not needed. https://github.com/h5bp/mobile-boilerplate/issues/94 -->
        <!--
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="">
        -->

        <!-- This script prevents links from opening in Mobile Safari. https://gist.github.com/1042026 -->
        <!--
        <script>(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")</script>
        -->

        <link rel="stylesheet" href="css/main.css">
        <script src="js/Vendor/modernizr-2.7.1.min.js"></script>
        
        
    </head>
    <body>
        <!--[if lt IE 9]>
            <div class="unsupported">
                <div>
                    <span>Oops, you are using an outdated, unsupported browser. Please <a href="http://browsehappy.com/" target="_blank">click here</a> to improve your experience.</span>
                </div>
            </div>
        <![endif]-->
        <!-- Add your site or application content here -->
        <button class="menu" data-action="toggle-menu" data-svg="false" data-icon="navigation"></button>
        <?php include "Views/Navigation.html"; ?>
        <?php include "Views/Splash.html"; ?>
        <div class="wrapper">
            <div class="page">
                
                
                
            </div>
        </div>
        <div class="loader overlay">
            <div class="icon">
                <svg height="32" id="loading" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(0 16 16)"><animate attributeName="opacity" begin="0" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(45 16 16)"><animate attributeName="opacity" begin="0.125s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(90 16 16)"><animate attributeName="opacity" begin="0.25s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(135 16 16)"><animate attributeName="opacity" begin="0.375s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(180 16 16)"><animate attributeName="opacity" begin="0.5s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(225 16 16)"><animate attributeName="opacity" begin="0.675s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(270 16 16)"><animate attributeName="opacity" begin="0.75s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path><path d="M14 0 H18 V8 H14 z" opacity=".1" transform="rotate(315 16 16)"><animate attributeName="opacity" begin="0.875s" dur="1s" from="1" repeatCount="indefinite" to=".1"/></path></g></svg>
            </div>
        </div>
        
        <script src="js/Vendor/jquery-2.1.0.min.js"></script>
        <script src="js/Vendor/idangerous.swiper.min.js"></script>
        <script src="js/helper.js"></script>
        <script src="js/Plugins/jQuery.SVG.js"></script>
        <script src="js/Plugins/jQuery.CountTo.js"></script>
        <script src="js/App/App.js"></script>
        <script src="js/App/App.Loader.js"></script>
        <script src="js/App/App.Navigation.js"></script>
        <script src="js/App/App.Forms.js"></script>
        <script src="js/App/App.Graph.js"></script>
        <script src="js/App/App.Tips.js"></script>
        <script src="js/App/App.Usage.js"></script>
        <script src="js/App/App.Pledge.js"></script>
        <script src="js/App/App.Splash.js"></script>
        <script src="js/App/App.Accordion.js"></script>
        <script src="js/App/App.Slider.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <!--<script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>-->
    </body>
</html>
