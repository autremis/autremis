/* TODO minimize code to declaration, actions, output. */
var galleryImages = document.querySelectorAll(".gallery-img");
var getLatestOpenedImg;
var windowWidth = window.innerWidth;

if (galleryImages) {
	galleryImages.forEach(function (image, index) {
		image.onclick = function () {
			var getElementCss = window.getComputedStyle(image);
			var getFullImgUrl = getElementCss.getPropertyValue("background-image");
			var getImgUrlPos = getFullImgUrl.split("/images/small/galerija/");
			var setNewImgUrl = getImgUrlPos[1].replace('")', '');

			getLatestOpenedImg = index + 1;

			var container = document.body;
			var newImgWindow = document.createElement("div");
			container.appendChild(newImgWindow);
			newImgWindow.setAttribute("class", "img-window");
			newImgWindow.setAttribute("onclick", "closeImg()");

			var newImg = document.createElement("img");
			newImgWindow.appendChild(newImg);
			newImg.setAttribute("src", "../images/full_size/galerija/" + setNewImgUrl);
			newImg.setAttribute("id", "current-img");

			newImg.onload = function () {
				var imgWidth = this.width;
				var calcImgToEdge = ((windowWidth - imgWidth) / 2) - 42;

				var newNextBtn = document.createElement("a");
				var btnNextText = document.createTextNode(">>")
				newNextBtn.appendChild(btnNextText);
				container.appendChild(newNextBtn);
				newNextBtn.setAttribute("class", "img-btn-next");
				newNextBtn.setAttribute("onclick", "changeImg(1)");
				newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

				var newPrevBtn = document.createElement("a");
				var btnPrevText = document.createTextNode("<<")
				newPrevBtn.appendChild(btnPrevText);
				container.appendChild(newPrevBtn);
				newPrevBtn.setAttribute("class", "img-btn-prev");
				newPrevBtn.setAttribute("onclick", "changeImg(0)");
				newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

			}
		}
	});
}

function closeImg() {
	document.querySelector(".img-window").remove();
	document.querySelector(".img-btn-next").remove();
	document.querySelector(".img-btn-prev").remove();

}

function changeImg (changeDir) {
	document.querySelector("#current-img").remove();

	var getImgWindow = document.querySelector(".img-window");
	var newImg = document.createElement("img");
	getImgWindow.appendChild(newImg);

	var calcNewImg;
	if (changeDir === 1) {
		calcNewImg = getLatestOpenedImg + 1;
		if (calcNewImg > galleryImages.length) {
			calcNewImg = 1;
		}
	} else if (changeDir === 0) {
		calcNewImg = getLatestOpenedImg - 1;
		if (calcNewImg < 1) {
			calcNewImg = galleryImages.length;
		}
	}

	newImg.setAttribute ( "src", "../images/full_size/galerija/img" + calcNewImg + ".jpg");
	newImg.setAttribute ( "id", "current-img");

	getLatestOpenedImg = calcNewImg;

	newImg.onload = function () {
		var imgWidth = this.width;
		var calcImgToEdge = ((windowWidth - imgWidth) / 2) - 42;

		var nextBtn = document.querySelector(".img-btn-next");
		nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

		var prevBtn = document.querySelector(".img-btn-prev");
		prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
	}
}
