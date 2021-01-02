'use strict';

//--- Variables y selectores ---//
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//--- Event listeners ---//
eventListeners();
function eventListeners() {
	//Cuando el usuario agrega un nuevo tweet
	formulario.addEventListener('submit', agregarTweet);

	//Cuando el documento esta listo
	document.addEventListener('DOMContentLoaded', () => {
		tweets = JSON.parse(localStorage.getItem('tweets')) || [];
		console.log(tweets);
		crearHTML();
	});
}

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

	//objeto que hará la similación de una BD ya que no la tenemos aún
	const tweetObj = {
		id: Date.now(),
		tweet
	}

	//Añadir al arreglo de tweets
	tweets = [...tweets, tweetObj];

	//Una vez agregado vamos a crear el HTML
	crearHTML();

	//Reiniciar el formulario
	formulario.reset();
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

function crearHTML() {
	
	limpiarHTML();

	if (tweets.length > 0) {
		tweets.forEach( (tweet) => {
			//Crear el HTML

			const li = document.createElement('li');

			//añadir el texto
			li.textContent = tweet.tweet;

			//insertarlo en el html
			listaTweets.appendChild(li);
		})
	}

	sincronizarStorage();
}

//Agrega los tweets actuales a localStorage
function sincronizarStorage() {
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

//limpiar HTML
function limpiarHTML() {
	while (listaTweets.firstChild) {
		listaTweets.removeChild(listaTweets.firstChild);
	}
}