     #pragma strict

var talking : boolean = false;

function OnTriggerEnter () {
	talking = true;
}

function OnTriggerExit () {
	talking = false;
}

function OnGUI () {
	if(talking)
	    var centeredStyle = GUI.skin.GetStyle("Label");
    centeredStyle.alignment = TextAnchor.LowerCenter;
    GUI.Label (Rect (Screen.width/2-50, Screen.height/2-100, 100, 50), "Use the  Level Portal to go to the next level.", centeredStyle);
    }   