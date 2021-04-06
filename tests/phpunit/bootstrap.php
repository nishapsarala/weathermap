<?php
declare(strict_types=1);
define( 'PLUGIN_PHPUNIT', true ); 

// define fake ABSPATH
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', sys_get_temp_dir() );
} 

require_once dirname(__DIR__, 2).'\vendor\autoload.php';
require_once __DIR__ . '/inc/JsonCityTest.php';