var jumpHeight : int = 400;
var jumpLimit : int = 2;
var runSpeed : int = 20;

var keypress : KeyCode;

function Update () {
}

function OnGUI() {
	var event : Event = Event.current;
	if (event.isKey) {
		keypress = event.keyCode;
	}
    if (Input.GetKeyDown (KeyCode.Space))
    	Jump();
}

function FixedUpdate(){
		if (keypress == KeyCode.W){ Back(); }
		if (keypress == KeyCode.S){ Forward(); }
		if (keypress == KeyCode.A){ Left(); }
		if (keypress == KeyCode.D){ Right(); }
		else {
			rigidbody.velocity = Vector3(0,0,0);
		}
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
	
	rigidbody.velocity = Vector3 (runSpeed, 0, 0);
}

function Forward(){
	print ("forward custom function");
	
	rigidbody.velocity = Vector3 (-1*runSpeed, 0, 0);
}

function Left(){
	print ("left custom function");
	
	rigidbody.velocity = Vector3 (0, 0, runSpeed);
}

function Right(){
	print ("right custom function");
	
	rigidbody.velocity = Vector3 (0, 0, -1*runSpeed);
}