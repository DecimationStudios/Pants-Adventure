static var playergravity: float = 0.0;

function Start () {

}

function Update () {
	print("" + playergravity);
	SetGravity (playergravity);
} 

function SetGravity(g: float){
//	var chMotor: CharacterMotor = GetComponent(CharacterMotor);
//	chMotor.movement.gravity = g;
	rigidbody.AddForce (Vector3.up * playergravity);
}