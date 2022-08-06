function hide() {
	document.getElementById("about").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function about() {
	var x = document.getElementById("about");
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function contact() {
	var x = document.getElementById("contact");
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

dragElement(document.getElementById("about"));

dragElement(document.getElementById("contact"));

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}