// Navigation logic
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

// Pricing switch logic
const toggleSwitch = document.getElementById("toggle");
const monthlyPlans = document.querySelector(".monthly-plans");
const yearlyPlans = document.querySelector(".yearly-plans");
const monthlyHeading = document.querySelector(".monthly-heading");
const yearlyHeading = document.querySelector(".yearly-heading");

toggleSwitch.addEventListener("change", function () {
	if (this.checked) {
		monthlyHeading.style.opacity = "0.3";
		yearlyHeading.style.opacity = "1";
		// Switch to yearly plans
		monthlyPlans.classList.add("hidden");
		yearlyPlans.classList.remove("hidden");
	} else {
		monthlyHeading.style.opacity = "1";
		yearlyHeading.style.opacity = "0.3";
		// Switch to monthly plans
		monthlyPlans.classList.remove("hidden");
		yearlyPlans.classList.add("hidden");
	}
});
