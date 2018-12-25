/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
	document.addEventListener('DOMContentLoaded', function(){

		let areaTexto = document.getElementById('area_texto');
		let limpiar = document.getElementById('limpiar');
		let totalPalabras = document.getElementById('total_palabras');
		let totalEspacios = document.getElementById('total_espacios');
		let totalComas = document.getElementById('total_comas');
		let totalPuntos = document.getElementById('total_puntos');

		areaTexto.addEventListener('input', contador);
		limpiar.addEventListener('click', limpiador);

		function contador(){
			//Obtenemos el texto del campo
			let texto = areaTexto.value;
			//Reemplazamos los saltos de linea por espacios
			texto = texto.replace (/\r?\n/g," ");
			//Reemplazamos los espacios seguidos por uno solo
			texto = texto.replace (/[ ]+/g," ");
			//Quitarmos los espacios del principio y del final
			texto = texto.replace (/^ /,"");
			texto = texto.replace (/ $/,"");
			//Troceamos el texto por los espacios
			let textoTroceado = texto.split (" ");
			//Contamos todos los trozos de cadenas que existen
			let numeroPalabras = textoTroceado.length;
			//Mostramos el número de palabras
			totalPalabras.innerText = numeroPalabras;

			//Separar por espacios
			let espacio = areaTexto.value;
			let espacioTroceado = espacio.split(/\s/);
			let numeroEspacios = espacioTroceado.length-1;
			totalEspacios.innerText = numeroEspacios;

			//Separar por comas
			let coma = texto.split(/\,/);
			let numeroComas = coma.length-1;
			totalComas.innerText = numeroComas;

			//Separar por puntos
			let puntos = texto.split(/\./);
			let numeroPuntos = puntos.length-1;
			totalPuntos.innerText = numeroPuntos;
		}

		function limpiador(){
			areaTexto.value="";
			totalPalabras.innerText="";
			totalEspacios.innerText="";
			totalComas.innerText ="";
			totalPuntos.innerText="";
		}

	});
})();

