var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
	//Creamos la conexión
	var xhr = new XMLHttpRequest();
	//Abrimos la conexión
	console.log(xhr);
	xhr.open("GET", "servidor.php", true);
	console.log(xhr.readyState);
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState);
		if (xhr.readyState == 4 && xhr.status == 200) {
			var json = JSON.parse(xhr.responseText);
			console.log(json);
		}
	}
	xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);
