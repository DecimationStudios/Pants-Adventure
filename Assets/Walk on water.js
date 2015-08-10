#pragma strict

function Start () {
}

function Update () {
	if (PantsController.pantstype == 2){
	collider.enabled = true; }
	
	else { collider.enabled = false; 
	}

}