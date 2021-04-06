<?php
declare(strict_types=1);
include_once 'JCity.php';
class Index{
	private $jsonUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e8fdfbc37eac561e23d29d942387b187&q=";
	private $weatherUrl="http://api.openweathermap.org/data/2.5/weather?units=Imperial&appid=e8fdfbc37eac561e23d29d942387b187&q=";
 
 	/* Constructor to call JCity */
	
	function __construct(JCity $juser){
		$juser->setUrl($this->jsonUrl);
		$juser->setwUrl($this->weatherUrl);
		$juser->getCityData(); 
		$juser->getWindData(); 
		$juser->fnTemplateRedirect();
	}
}
$index= new Index(new JCity());
$index->fnTemplateRedirect();

?>