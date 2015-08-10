
	function OnTriggerStay (other : Collider) {
		print("stay");
		CharacterMotor.setGravity = 30.0;
	}
	function OnTriggerExit (other : Collider) {
		print("exit");
		CharacterMotor.setGravity = 0.0;
	}
