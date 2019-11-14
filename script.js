let flappy = document.querySelector('#flappy');

const ethan = () => {
	flappy.setAttribute('hidden', 'display:inline !important');
	flappy.setAttribute("hidden", "true");
	document.getElementsByTagName('canvas')[0].setAttribute("hidden", "true");
	// hidFile.setAttribute("hidden", "false");
	let hidFile = document.querySelector('#hidden');
	hidFile.style.display = "block";
}