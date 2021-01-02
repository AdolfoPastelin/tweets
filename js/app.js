'use strict';

//--- Variables y selectores ---//
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//--- Event listeners ---//
const eventListeners = () => formulario.addEventListener('submit', agregarTweet);
eventListeners();

//---  Funciones ---//
function agregarTweet(e) {
	e.preventDefault();
	
	//obtiene el valor de lo que escribe el usuario en el textarea
	const tweet = document.querySelector('#tweet').value;

	//validación por si el mensaje viene vacio
	if (tweet === '') {
		mostrarError('Un mensaje no puede ir vacio');

		return;//evita que se ejecuten más lineas de código
	}

	console.log('agregando tweet');
}

function mostrarError(error) {
	const mensajeError = document.createElement('p');
	mensajeError.textContent = error;
	mensajeError.classList.add('error');

	//insertando el error en el contenido
	const contenido = document.querySelector('#contenido');
	contenido.appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();
	}, 1500);
}