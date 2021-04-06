<?php
/*
 * Class Name : JCity
 * Description : This class contains all the methods which are required to fetch the data from
 * API endpoint and display data on custom page.
 * Author : Nisha Pushpangadan Sarala.
 */
declare(strict_types=1);
class JCity {
    private $url;  
 
     /*
     * Function name : fnTemplateRedirect
     * Parameters : None
     * Return Type : None
     * Description : This function add required CSS and JS files
     *               in the fronend custom page created for the plugin.
     */

    public function fnTemplateRedirect(){
            require_once('detail.php');
            exit();
    }

    /*
     * Function name : setUrl
     * Set API Url.
    */  

    public function setUrl($url) { 
       $this->url = $url;
    } 

    /*
     * Function name : setwUrl
     * Set API Url for wind data.
    */   
    public function setwUrl($wurl) { 
       $this->wurl = $wurl;
    } 

    /*
     * Function name : getUrl
     * Get API Url.
    */

    public function getUrl() { 
       return $this->url;
    }

    /*
     * Function name : getwUrl
     * Get API Url for wind data.
    */

    public function getwUrl() { 
       return $this->wurl;
    }

    /*
     * Function name : getCityData
     * Return Type : Array
     * Description : It retrieves users details from API / Manage error handling for the external HTTP requests .
    */

    public function getCityData() { 
        /*
        $curl = curl_init();
        curl_setopt_array($curl, array(
          CURLOPT_URL => "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e8fdfbc37eac561e23d29d942387b187&q=London,GB",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_HTTPHEADER => array(
            "x-rapidapi-host: community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key: [your rapidapi key]"
          ),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
          echo "cURL Error #:" . $err;
        } else {
          echo $response;
        }
        */
        $apiKey = "e8fdfbc37eac561e23d29d942387b187";
        if(!empty($_REQUEST['q'])) $q =$_REQUEST['q']; else $q="Warwick";
        $googleApiUrl = file_get_contents($this->url.$q.",GB");
        $weather = json_decode($googleApiUrl); 
        return $weather; 
    } 

    /*
     * Function name : getWindData
     * Return Type : Array
     * Description : It retrieves users details from API / Manage error handling for the external HTTP requests .
    */

    public function getWindData() { 
        $apiKey = "e8fdfbc37eac561e23d29d942387b187";
        if(!empty($_REQUEST['q'])) $q =$_REQUEST['q']; else $q="Warwick";
        $googleApiUrl = file_get_contents($this->wurl.$q.",GB");
        $data = json_decode($googleApiUrl);  
        return $data;
    }
    
}
?>