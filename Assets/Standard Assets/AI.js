var target: Transform;

//speed bot will run at target
var run_speed : float;
//speed bot will rotate towards the target
var rotate_speed : float;
//gravity
var gravity : float;
    
function Update () {
	//Stop returning null ref errors!
//	if(target == null){
//		Destroy(this);
//		return;
//	}
	var targetDir = target.position - transform.position;
	
	//rotate towards the target
	transform.rotation = Quaternion.LookRotation(
		Vector3.RotateTowards(transform.forward, targetDir, rotate_speed * Time.deltaTime, 0.0));
		
	print ("Distance: " + Vector3.Distance(target.position, transform.position));
	
	if(Vector3.Distance(target.position, transform.position) > 3){
		//move towards the player
		transform.position = Vector3.MoveTowards(transform.position, target.position, run_speed * Time.deltaTime);
		
		}
		    
		
	if(Vector3.Distance(target.position, transform.position) < 3.0){
		//hit the player
		Health.playerhealth -= 1;
		print("Hit"+ Health.playerhealth);
		
		
	}
	
	//apply simple gravity to the bots to pull them down to the ground
	transform.position.y = transform.position.y - gravity * Time.deltaTime;
}