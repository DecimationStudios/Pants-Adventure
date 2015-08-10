var jumpHeight : int = 400;
var jumpLimit : int = 2;
var runSpeed : int = 20;
var grounded : boolean = true;

function Update () {
}

function OnGUI() {
	var event : Event = Event.current;
	var down = transform.TransformDirection (Vector3.down);
	if (Physics.Raycast (transform.position, down, jumpLimit)) {
		grounded = true;
	} else {
		grounded = false;
	}
	
	if (event.isKey && grounded) {
		if (event.keyCode == KeyCode.W){ Back(); }
		else if (event.keyCode == KeyCode.S){ Forward(); }
		else if (event.keyCode == KeyCode.A){ Left(); }
		else if (event.keyCode == KeyCode.D){ Right(); }
		else { Stop(); }
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
	
	rigidbody.velocity = Vector3(runSpeed, 0, 0);
}

function Forward(){
	print ("forward custom function");
	
	rigidbody.velocity = Vector3(-1*runSpeed, 0, 0);
}

function Left(){
	print ("left custom function");
	
	rigidbody.velocity = Vector3(0, 0, runSpeed);
}

function Right(){
	print ("right custom function");
	
	rigidbody.velocity = Vector3(0, 0, -1*runSpeed);
}

function Stop(){
	print ("right custom function");
	
	rigidbody.velocity = Vector3(0, 0, 0);
}