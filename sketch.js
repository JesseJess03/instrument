let dice
let jeff_face 
let jeff_sound
let roblox_face
let roblox_sound
let pause_meme
let bruh_sound
let ugly_sound 
let ugly_meme 
let sad_sound
let pika_sound
let pika_meme
let wow_sound
let wow_meme
let uglyb_sound
let uglyboy_meme
let hotpocket_cry
let hotpocket_meme
let hoes_sound
let hoes_meme
let spotted_sound
let spotted_meme
let ahhshit_sound
let ahhshit_meme
let nani_sound
let nani_meme
let nice_sound
let nice_meme
let dawae_sound 
let dawae_meme 

function preload() {
	jeff_face = loadImage("jeff.face.jpg")
	jeff_sound = loadSound("jeff.mp3")
	roblox_face = loadImage("roblox.face.jpg")
	roblox_sound = loadSound("roblox.mp3")
	pause_meme = loadImage("pause.meme.jpg")
	bruh_sound = loadSound("bruh.mp3")
	ugly_meme = loadImage("ugly.gun.jpg")
	ugly_sound = loadSound("ugly.gun.mp3")
	sad_sound = loadSound("sad.mp3")
	fatandugly = loadImage("fatandugly.jpg")
	pika_sound = loadSound("pikasound.mp3")
	pika_meme = loadImage("pikameme.jpg")
	wow_sound = loadSound("wow.mp3")
	wow_meme = loadImage("wowmeme.jpg")
	uglyb_sound = loadSound("uglyboy.mp3")
	uglyboy_meme = loadImage("uglyboymeme.jpg")
	hotpocket_cry = loadSound("hotpocketcry.mp3")
	hotpocket_meme = loadImage("hotpocketmeme.jpg")
	hoes_sound = loadSound("fhoes.mp3")
	hoes_meme = loadImage("hoes.jpg")
	spotted_sound = loadSound("enemyspotted.mp3")
	spotted_meme = loadImage("enemyspotted.jpg")
	ahhshit_sound = loadSound("ahhshitsound.mp3")
	ahhshit_meme = loadImage("ahhshit.jpg")
	nani_sound = loadSound("nanisound.mp3")
	nani_meme = loadImage("nani.jpg")
	nice_sound = loadSound("nicesound.mp3")
	nice_meme = loadImage("nice.jpg")
	dawae_sound = loadSound("dawae.mp3")
	dawae_meme = loadImage("dawae.jpg")



}

function setup() {

let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent("p5")

  
}

function draw() {

	background(243, 0, 255)
	if (mouseIsPressed) {

		if (dice == 1) {
			image(jeff_face, mouseX - jeff_face.width/2, mouseY - jeff_face.height/2)
		}

		if (dice == 2) {
			image(roblox_face, mouseX - roblox_face.width/2, mouseY - roblox_face.height/2) 
		}

		if (dice == 3) {
			image(pause_meme, mouseX - pause_meme.width/2, mouseY - pause_meme.height/2)
		}

		if (dice == 4) {
			image(ugly_meme, mouseX - ugly_meme.width/2, mouseY - ugly_meme.height/2)
		}

		if (dice == 5) {
			image(fatandugly, mouseX - fatandugly.width/2, mouseY - fatandugly.height/2)
		}

		if (dice == 6) {
			image(pika_meme, mouseX - pika_meme.width/2, mouseY - pika_meme.height/2)
		}

		if (dice == 7 ) {
			image(wow_meme, mouseX - wow_meme.width/2, mouseY - wow_meme.height/2)
		}

		if (dice == 8) {
			image(uglyboy_meme, mouseX - uglyboy_meme.width/2, mouseY - uglyboy_meme.height/2)
		}

		if (dice == 9) {
			image(hotpocket_meme, mouseX - hotpocket_meme.width/2, mouseY - hotpocket_meme.height/2)
		}

		if (dice == 10) {
			image(hoes_meme, mouseX - hoes_meme.width/2, mouseY - hoes_meme.height/2)
		}

		if (dice == 11) {
			image(spotted_meme, mouseX - spotted_meme.width/2, mouseY - spotted_meme.height/2)
		}

		if (dice == 12) {
			image(ahhshit_meme, mouseX - ahhshit_meme.width/2, mouseY - ahhshit_meme.height/2)
		}

		if (dice == 13) {
			image(nani_meme, mouseX - nani_meme.width/2, mouseY - nani_meme.height/2)
		}

		if (dice == 14) {
			image(nice_meme, mouseX - nice_meme.width/2, mouseY - nice_meme.height/2)
		}

		if (dice == 15) {
			image(dawae_meme, mouseX - dawae_meme.width/2, mouseY - dawae_meme.height/2)
		}
	
	}

}


function windowResized() {    
    resizeCanvas(windowWidth, windowHeight)
}


function mousePressed() {
	dice = int(random(1,15 +1))
	print (dice)
	 if (dice == 1) {
	  jeff_sound.play() 
	}

	if (dice == 2) {
		roblox_sound.play()
	}

	if (dice == 3) {
		bruh_sound.play()
	}

	if (dice == 4) {
		ugly_sound.play()
	}

	if (dice == 5) {
		sad_sound.play()
	}

	if (dice == 6) {
		pika_sound.play()
	}

	if (dice == 7) {
		wow_sound.play()
	}

	if (dice == 8) {
		uglyb_sound.play()
	}

	if (dice == 9) {
		hotpocket_cry.play()
	}

	if (dice == 10) {
		hoes_sound.play()
	}

	if (dice == 11) {
		spotted_sound.play()
	}

	if (dice == 12) {
		ahhshit_sound.play()
	}

	if (dice == 13) {
		nani_sound.play()
	}

	if (dice == 14) {
		nice_sound.play()
	}

	if (dice == 15) {
		dawae_sound.play()
	}
}

function mouseReleased() {

if (dice == 1) {
	  jeff_sound.stop() 
	}

if (dice == 2) {
		roblox_sound.stop()
	}

if (dice == 3) {
		bruh_sound.stop()
	}

if (dice == 4) {
		ugly_sound.stop()
	}	

if (dice == 5) {
		sad_sound.stop()
	}	

if (dice == 6) {
		pika_sound.stop()
	}	

if (dice == 7) {
		wow_sound.stop()
	}

	if (dice == 8) {
		uglyb_sound.stop()
	}

	if (dice == 9) {
		hotpocket_cry.stop()
	}

	if (dice == 10) {
		hoes_sound.stop()
	}

	if (dice == 11) {
		spotted_sound.stop()
	}

	if (dice == 12) {
		ahhshit_sound.stop()
	}

	if (dice == 13) {
		nani_sound.stop()
	}

	if (dice == 14) {
		nice_sound.stop()
	}

	if (dice == 15) {
		dawae_sound.stop()
	}	

}

function mouseDragged() {
   
}

function mouseClicked() {

}

// add these to make it work for touch screens
function touchStarted() {
    mousePressed()   
    mouseClicked()
}

function touchEnded() {
    mouseReleased()   
}