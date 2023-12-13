let caption = document.getElementById("captions");
let captionTop = parseInt(caption.style.top);
let captionLeft = parseInt(caption.style.left);

let firstPageElement = document.getElementById('firstpage');
let currentTop1 = parseInt(firstPageElement.style.top);
let firstemily = document.getElementById('emily1');
let currentEmilyTop1 = parseInt(firstemily.style.top);
let currentEmilyLeft1 = parseInt(firstemily.style.left);

let secondPageElement = document.getElementById('secondpage');
let currentTop2 = parseInt(secondPageElement.style.top);
let secondemily = document.getElementById('emily2');
let currentEmilyTop2 = parseInt(secondemily.style.top);
let currentEmilyLeft2 = parseInt(secondemily.style.left);
let secondemilyDialog = document.getElementById('emily2Dialog');
let currentEmilyTop2Dialog = parseInt(secondemilyDialog.style.top);
let currentEmilyLeft2Dialog = parseInt(secondemilyDialog.style.left);

let thirdPageElement = document.getElementById('thirdpage');
let currentTop3 = parseInt(thirdPageElement.style.top);
let thirdemily = document.getElementById('emily3');
let currentEmilyTop3 = parseInt(thirdemily.style.top);
let currentEmilyLeft3 = parseInt(thirdemily.style.left);
let thirdemilyDialog = document.getElementById('emily3Dialog');
let currentEmilyTop3Dialog = parseInt(thirdemilyDialog.style.top);
let currentEmilyLeft3Dialog = parseInt(thirdemilyDialog.style.left);

let monsterThought = document.getElementById('monster-thought');

let lastPageElement = document.getElementById('panel1-8');
let lastSceneElement = document.getElementById('torch');
let emilyShock = document.getElementById('emily-shocked');
let currentEmilyTop4 = parseInt(emilyShock.style.top);
let monster = document.getElementById('monster-emb');

let fourthemilyDialog = document.getElementById('emily4Dialog');
let fifthemilyDialog = document.getElementById('emily5Dialog');
let sixthemilyDialog = document.getElementById('emily6Dialog');
let emilyDialog4Top = parseInt(fourthemilyDialog.style.top);
let emilyDialog5Top = parseInt(fifthemilyDialog.style.top);
let emilyDialog6Top = parseInt(sixthemilyDialog.style.top);

document.addEventListener('scroll', scrollEvent);

function scrollEvent() {

	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = (pos / height) * 2;

	caption.style.top = captionTop / 100 * height + pos - height + 'px';
	caption.style.left = captionLeft / 100 * width + 'px';


	if (sectionNum < 2) {
		caption.style.opacity = 0;
	}
	else if (sectionNum >= 2 && sectionNum <= 4) {
		caption.src = "./Captions/1.png";
		caption.style.opacity = 2 * (pos - height) / height;

		firstPageElement.style.top = (currentTop1 + (pos - height)) + 'px'; //follow scroll 
		firstemily.style.top = (currentEmilyTop1 / 100 * height + (pos - height) + 5) + 'px';
		firstemily.style.left = ((currentEmilyLeft1 / 100 * width) + 0.00007 * width * (pos - height)) + 'px';
		firstemily.style.height = 200 - 150 * (pos - height) / height + 'px';
	}
	else if (sectionNum > 4 && sectionNum < 6) {
		caption.style.opacity = 1 - 2 * (pos - 2 * height) / height;
	}
	else if (sectionNum >= 6 && sectionNum <= 8) {
		caption.src = "./Captions/2.png";
		caption.style.opacity = 2 * (pos - 3 * height) / height;
		secondPageElement.style.top = (currentTop2 + (pos - 3 * height)) + 'px';
		secondemily.style.top = (currentEmilyTop2 / 100 * height + 0.8 * (pos - 3 * height)) + 'px';
		secondemily.style.left = (currentEmilyLeft2 / 100 * width + 0.00019 * (pos - 3 * height) * width) + 'px';
		secondemily.style.height = 270 - 120 * (pos - 3 * height) / height + 'px';
		secondemilyDialog.style.top = (currentEmilyTop2Dialog / 100 * height + 0.8 * (pos - 3 * height)) + 'px';
		secondemilyDialog.style.left = (currentEmilyLeft2Dialog / 100 * width + 0.00019 * (pos - 3 * height) * width) + 'px';
	}
	else if (sectionNum > 8 && sectionNum < 10) {
		caption.style.opacity = 1 - 2 * (pos - 4 * height) / height;
	}
	else if (sectionNum >= 10 && sectionNum <= 14) {
		caption.src = "./Captions/3.png";
		caption.style.opacity = 2 * (pos - 5 * height) / height;
		thirdPageElement.style.top = (currentTop3 + (pos - 5 * height)) + 'px';
		thirdemilyDialog.style.opacity = 1;

		if (sectionNum < 12.18) {
			thirdemily.style.opacity = "1";

			thirdemily.style.top = (currentEmilyTop3 / 100 * height + 0.8 * (pos - 5 * height)) + 'px';
			thirdemily.style.left = (currentEmilyLeft3 / 100 * width + 0.000205 * width * (pos - 5 * height)) + 'px';
			thirdemily.style.height = 2700 - 2550 * (pos - 5 * height) / height + 'px';
			thirdemilyDialog.style.top = (currentEmilyTop3Dialog / 100 * height + 0.8 * (pos - 5 * height)) + 'px';
			thirdemilyDialog.style.left = (currentEmilyLeft3Dialog / 100 * width + 0.00005 * width * (pos - 5 * height)) + 'px';
			thirdemilyDialog.style.height = 270 - 255 * (pos - 5 * height) / height + 'px';
			if (sectionNum > 11.5) {
				thirdemilyDialog.style.opacity = 0;
				caption.src = "./Captions/4.png";
			}
		}
		else {
			thirdemilyDialog.style.opacity = 0;
			caption.src = "./Captions/4.png";
			thirdemily.style.opacity = "0";
			if (sectionNum > 13.5) {
				caption.src = "./Captions/5.png";
			}
		}

	}
	else if (sectionNum > 14 && sectionNum < 15) {
		caption.style.opacity = 1 - 2 * (pos - 7 * height) / height;
	}
	else if (sectionNum >= 15 && sectionNum <= 18) {
		caption.src = "./Captions/6.png";
		caption.style.opacity = 2 * (pos - 7.5 * height) / height;

	}
	else if (sectionNum > 18 && sectionNum < 20) {
		caption.style.opacity = 1 - 2 * (pos - 9 * height) / height;
		monsterThought.style.opacity = -0.5 + 2 * (pos - 9 * height) / height;
	}
	else if (sectionNum >= 20 && sectionNum <= 22) {
		caption.style.opacity = (pos - 10 * height) / height;
		fourthemilyDialog.style.opacity = (pos - 10 * height) / height;
		caption.src = "./Captions/7.png";
	}

	else if (sectionNum >= 22) {
		lastSceneElement.style.top = (pos - 11 * height) + 'px';
		monster.style.top = (pos - 11 * height) + 'px';
		fourthemilyDialog.style.top = emilyDialog4Top / 100 * height + (pos - 11 * height) + 'px';
		fifthemilyDialog.style.top = emilyDialog5Top / 100 * height + (pos - 11 * height) + 'px';
		sixthemilyDialog.style.top = emilyDialog6Top / 100 * height + (pos - 11 * height) + 'px';
		emilyShock.style.top = currentEmilyTop4 / 100 * height + (pos - 11 * height) + 'px';
		if (sectionNum >= 25) {
			caption.src = "./Captions/8.png";
			monster.style.opacity = 2 * (pos - 12.5 * height) / height;
			if (sectionNum >= 26) {
				caption.src = "./Captions/9.png";
				caption.style.top = 1.1 * height + (pos - height) + 'px'
				caption.style.left = "30vw";
				emilyShock.src = "./img/EmilySmile.png";
				fifthemilyDialog.style.opacity = 1;
				sixthemilyDialog.style.opacity = 1;
			}
			else{
				fifthemilyDialog.style.opacity = 0;
				sixthemilyDialog.style.opacity = 0;
			}
		}
		else {
			emilyShock.src = "./img/EmilyShocked.png";
		}
	}


}