<?php
	$tecnologias = array(
		'frontend' => 'html5, Css3, Javascript',
		'backend' => 'php, mysql, apache',
		'fullstack' => 'html5, css3, javascript, php, mysql, apache'
	);
	//convertimos la información en un JSON
	echo json_encode($tecnologias);
?>