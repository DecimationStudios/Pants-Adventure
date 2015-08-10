var stepSound : AudioClip;
private var soundIsPlaying : boolean = false;
private var WPressed : boolean = false;
private var APressed : boolean = false;
private var SPressed : boolean = false;
private var DPressed : boolean = false;

function Start () {
	audio.clip = stepSound;
	}

function Update () {
	if (Input.GetKeyDown(KeyCode.W)) {
		WPressed = true;
		StartSoundPlayer();
		}
		
	if (Input.GetKeyUp(KeyCode.W)) {
		WPressed = false;
		if (APressed == false && SPressed == false && DPressed == false) {
			EndSoundPlayer();
		}
	}
	
if (Input.GetKeyDown(KeyCode.A)) {
		APressed = true;
		StartSoundPlayer();
		}
		
	if (Input.GetKeyUp(KeyCode.A)) {
		APressed = false;
		if (WPressed == false && SPressed == false && DPressed == false) {
			EndSoundPlayer();
		}
	}
	
if (Input.GetKeyDown(KeyCode.S)) {
		SPressed = true;
		StartSoundPlayer();
		}
		
	if (Input.GetKeyUp(KeyCode.S)) {
		SPressed = false;
		if (APressed == false && WPressed == false && DPressed == false) {
			EndSoundPlayer();
		}
	}
	
if (Input.GetKeyDown(KeyCode.D)) {
		DPressed = true;
		StartSoundPlayer();
		}
		
	if (Input.GetKeyUp(KeyCode.D)) {
		DPressed = false;
		if (APressed == false && SPressed == false && WPressed == false) {
			EndSoundPlayer();
		}
	}
}
	
function StartSoundPlayer () {
	if (soundIsPlaying == false) {
		soundIsPlaying = true;
		audio.loop = true;
		if (audio.isPlaying == false) {
			audio.Play();
			}
		}
	}
	
function EndSoundPlayer () {
	if (soundIsPlaying == true) {
		audio.loop = false;
		soundIsPlaying = false;
		}
	}