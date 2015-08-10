var jumpHeight : int = 400;
var jumpLimit : int = 2;
var runSpeed : int = 20;

function Update () {
}

function OnGUI() {
	var event : Event = Event.current;
	if (event.isKey) {
		if (event.keyCode == KeyCode.W){ Back(); }
		if (event.keyCode == KeyCode.S){ Forward(); }
		if (event.keyCode == KeyCode.A){ Left(); }
		if (event.keyCode == KeyCode.D){ Right(); }
	}
    if (Input.GetKeyDown (KeyCode.Space))
    	Jump();
}


function Jump(){
	print ("jump custom function");
	var down = transform.TransformDirection (Vector3.down);
	if (Physics.Raycast (transform.position, down, jumpLimit)) {
		print ("There is something below the object!");
	
		rigidbody.AddForce (Vector3.up * jumpHeight);
	} else {
		print ("No Jump");
	}
}

function Back(){
	print ("back custom function");
	
	rigidbody.AddForce (runSpeed, 0, 0);
}

function Forward(){
	print ("forward custom function");
	
	rigidbody.AddForce (-1*runSpeed, 0, 0);
}

function Left(){
	print ("left custom function");
	
	rigidbody.AddForce (0, 0, runSpeed);
	if (rigidbody.velocity.z > 10*runSpeed){
		rigidbody.velocity.z = 10*runSpeed;
	}
}

function Right(){
	print ("right custom function");
	
	rigidbody.AddForce (0, 0, -1*runSpeed);
	if (rigidbody.velocity.z < -10*runSpeed){
		rigidbody.velocity.z = -10*runSpeed;
	}
}