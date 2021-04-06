<?php
declare(strict_types=1);
namespace JCityTest;

require dirname(__DIR__, 3).'\JCity.php'; 
use inc\JsCityTest\JsonCityTest;
use Brain\Monkey\Actions;
use Mockery;
use ReflectionClass;
use ReflectionException; 
use JUser;
use stdClass;


class JCityTest extends JsonCityTest {
    private object $instance;

    public function __construct()
    {
        parent::__construct(null, [], '');
        $this->instance = Mockery::mock(jsClassInpSyde::class)
            ->shouldAllowMockingProtectedMethods()
            ->makePartial();
        $reflectionClass = new ReflectionClass(jsClassInpSyde::class);
        $reflectionProperty= new stdClass();
    }

    public function testJsongetCityData()
    {
        $objOne = clone $this->instance;

        $objOne->expects('getCityData')
            ->once()
            ->with('arrays')
            ->andReturn(['http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e8fdfbc37eac561e23d29d942387b187&q=Derby,GB']);
        $actual=$objOne->getCityData('arrays');
        $this->assertIsArray($actual);
    }

    public function testJsongetwCityData()
    {
        $objOne = clone $this->instance;

        $objOne->expects('getWindData')
            ->once()
            ->with('arrays')
            ->andReturn(['http://api.openweathermap.org/data/2.5/weather?units=Imperial&appid=e8fdfbc37eac561e23d29d942387b187&q=Derby,GB']);
        $actual=$objOne->getWindData('arrays');
        $this->assertIsArray($actual);
    }

     
}