import circleCenterRenderer from './renderCircle.js';
import lineRenderer from './renderLine.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const playButton = document.getElementById('button-play');
const pauseButton = document.getElementById('button-pause');

playButton.addEventListener('click', (e) => {
	startAudio();
});

pauseButton.addEventListener('click', (e) => {
	audio.pause();
});


let analyser;
let frequencyArray;
let audio;

function startAudio() {

	audio = new Audio();

	const audioContext = new (window.AudioContext || window.webkitAudioContext)();
	
	audio.src = 'Denigrate.mp3';

	analyser = audioContext.createAnalyser();

	const source = audioContext.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(audioContext.destination);


	frequencyArray = new Uint8Array(analyser.frequencyBinCount);

	audio.play();

	requestAnimationFrame(render);
}


function render() {

	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const radius = canvas.width / 5;
	analyser.getByteFrequencyData(frequencyArray);
	
	lineRenderer(frequencyArray, canvas, ctx, analyser);
	circleCenterRenderer(frequencyArray, ctx, centerX, centerY);
	

	requestAnimationFrame(render);
}

