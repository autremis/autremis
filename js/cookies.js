/* TODO add exp. data name  https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username */
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
	cookieContainer.classList.remove("active");
	document.cookie = ("AutremisCookieBannerDisplayed", "true");
});

setTimeout(() => {
	if (document.cookie < ("AutremisCookieBannerDisplayed")) {
		cookieContainer.classList.add("active");
		}
}, 2000);
