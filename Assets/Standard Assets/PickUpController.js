function OnTriggerEnter(col : Collider) {
	if (col.gameObject.name == "Player") {
		print ("Picked up Fire Pants");
		Destroy(gameObject);
		
		
	}
}
