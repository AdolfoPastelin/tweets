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
	console.log('Agregando tweet...');
}