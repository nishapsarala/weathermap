<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css"> 
    <script src="js/script.js"></script>
</head>     
<body>
    <?php
        if(!empty($_REQUEST['q'])){
            $q = $_REQUEST['q'];
            $weather= $this->getCityData(); 
            $data= $this->getWindData(); 
            $currentTime = time();
    ?>
            <form autocomplete="off" action="<?php echo $_SERVER['REQUEST_URI']; ?>/index.php">
              <div class="autocomplete" style="width:300px;">
                <input id="myInput" type="text" name="q" placeholder="Enter UK City Name">
              </div>
              <input type="submit" value="View">
            </form>

            <div class="report-container">
                <h2><?php echo $weather->{'name'}; ?> Weather Status</h2>
                <div class="time">
                    <div><?php echo date("l g:i a", $currentTime); ?></div>
                    <div><?php echo date("jS F, Y",$currentTime); ?></div>
                    <div><?php echo ucwords($weather->weather[0]->{'description'}); ?></div>
                </div>
                <div class="weather-forecast">
                    <img src="http://openweathermap.org/img/w/<?php echo $weather->weather[0]->{'icon'}; ?>.png" class="weather-icon" /> <?php echo $weather->{'main'}->{'temp'}; ?>&deg;C<span
                        class="min-temperature">Feels like <?php echo $weather->{'main'}->{'feels_like'}; ?>&deg;C</span> 
                </div>
                <div class="time">
                    <div>Humidity: <?php echo $weather->{'main'}->{'humidity'}; ?> %</div>
                    <div>Minimum temperature: <?php echo $weather->{'main'}->{'temp_min'}; ?> %</div>
                    <div>Maximum temperature: <?php echo $weather->{'main'}->{'temp_max'}; ?>&deg;C</div>
                    <div>Wind: <?php echo $data->{'wind'}->{'speed'}; ?> m/h</div>
                    <div>Rain volume for the last hour: <?php echo $weather->{'wind'}->{'speed'}; ?> mm</div>
                </div>
            </div>

        </body>
        </html> 
         <script type="text/javascript">
            autocomplete(document.getElementById("myInput"), countries);
         </script>
<?php 
} else{
    ?>

        <link rel='stylesheet' href='https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css' />
        <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
        <script src='https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js'></script>
        <script type="text/javascript">
        $(document).ready(function() {
            function render(data, type, row, meta){
              if(type === 'display'){
                  data = '<a target="_blank" href="index.php?q=' + row.name + ',GB">Weather Status</a>';
              }
              return data;
            }
            $('#example').DataTable( {
                "ajax": {
                    "url": "city.list.json",
                    "dataSrc": ""
                },
                "columns": [
                    { "data": "name" },
                    { "data":"name","render": render }
                ]
            } );
        } );
        </script>
        <table id="example" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>UK City Name</th>
                    <th>View</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>UK City Name</th>
                    <th>View</th>
                </tr>
            </tfoot>
        </table>
    </body>
    <?php
}