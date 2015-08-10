function OnTriggerEnter(col : Collider) {
	if (col.gameObject.name == "Hero Fire Pants") {
		print ("Kill Monster");
		Destroy (GameObject.FindWithTag("Monster"));
		
		
	}
}