let flappy = document.querySelector('#flappy');

const ethan = () => {
	flappy.setAttribute('hidden', 'display:inline !important');
	flappy.setAttribute("hidden", "true");
	document.getElementsByTagName('canvas')[0].setAttribute("hidden", "true");
	// hidFile.setAttribute("hidden", "false");
	let hidFile = document.querySelector('#hidden');
	hidFile.style.display = "block";
}

let trump = document.querySelector('#trump');

const gif = () => {
	trump.style.display = "block";
}

document.querySelector('#gifbut').addEventListener("click", gif);