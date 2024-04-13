const primaryHeader = document.querySelector(".header");
const navToggle = document.querySelector(".header__toggle");
const primaryNav = document.querySelector(".navigation");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const overlay = document.querySelector("#overlay");
const body = document.body;

navToggle.addEventListener("click", () => {
	const isNavVisible = primaryNav.getAttribute("data-visible") === "true";
	primaryNav.setAttribute("data-visible", !isNavVisible);
	body.style.overflow = isNavVisible ? "auto" : "hidden";
	hamburgerIcon.style.display = isNavVisible ? "block" : "none";
	closeIcon.style.display = isNavVisible ? "none" : "block";
	overlay.classList.toggle("overlay");
	console.log(overlay);
});

closeIcon.addEventListener("click", () => {
	hamburgerIcon.style.display = "block";
	closeIcon.style.display = "none";
});
