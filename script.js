let test = document.querySelector('#test');
let hidFile = document.querySelector('#hidden');
test.onclick = function(){
	// hidFile.setAttribute("hidden", "false");
	hidFile.style.display = "block";
	test.setAttribute("hidden", "true");
}