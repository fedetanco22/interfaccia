document.addEventListener("DOMContentLoaded", function () {
	const titulosHero = document.querySelectorAll(".features");
	titulosHero.forEach((item) => item.classList.add("features--active"));

	/* const titulo = document.querySelector(".features-titulo");
	titulo.classList.add("features--active"); */
});

document.addEventListener("scroll", function () {
	const features = document.querySelectorAll(".cards");
	const section = document.querySelector(".features-icons");
	if (window.scrollY > section.offsetTop - window.innerHeight / 1) {
		features.forEach((item) => item.classList.add("features--active"));
	}
});

document.addEventListener("scroll", function () {
	const logistics = document.querySelectorAll(".features-logistic");
	const section = document.querySelector(".logistic");
	if (window.scrollY > section.offsetTop - window.innerHeight / 1.1) {
		logistics.forEach((item) => item.classList.add("features--active"));
	}
});
