<?php
/**
 * Created by PhpStorm.
 * User: Erik
 * Date: 20-10-2017
 * Time: 08:15
 */

require_once ('/var/simplesamlphp/lib/_autoload.php');

$as = new SimpleSAML_Auth_Simple('idp.carex.dk');
$logouturl="$_SERVER[REQUEST_SCHEME]://$_SERVER[HTTP_HOST]/logged_out.php";
$as->logout(array(
    'ReturnTo' => $logouturl,
    'ReturnStateParam' => 'LogoutState',
    'ReturnStateStage' => 'MyLogoutState',
));
?>