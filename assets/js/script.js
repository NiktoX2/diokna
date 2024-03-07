
function ThemeSwitch(a) {
	a.children[0].classList.toggle("hidden");
	a.children[1].classList.toggle("hidden");

	if (document.querySelector("html").dataset.theme == "black") {
		document.querySelector("html").dataset.theme = "white";
	} else {
		document.querySelector("html").dataset.theme = "black";
	}
}
