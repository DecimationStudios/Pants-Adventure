//What number represents what pants type. 0 = no pants. 1 = fire pants. 2 = water pants. 3. static pants
 static var pantstype: int = 0;
var nopants: GameObject;
var firepants: GameObject;
var waterpants: GameObject;
var staticpants: GameObject;

function Start () {

}

function Update () {
	if (Input.GetKeyDown ("1"))
			pantstype=0;
	if (Input.GetKeyDown ("2"))
			pantstype=1;
	if (Input.GetKeyDown ("3"))
			pantstype=2;
	if (Input.GetKeyDown ("4"))
			pantstype=3;
	
	if (pantstype==0){
	nopants.SetActive (true);
	firepants.SetActive (false);
	waterpants.SetActive (false);
	staticpants.SetActive (false);
	}

else if (pantstype==1){
	nopants.SetActive (false);
	firepants.SetActive (true);
	waterpants.SetActive (false);
	staticpants.SetActive (false);

	}	
else if (pantstype==2){
	nopants.SetActive (false);
	firepants.SetActive (false);
	waterpants.SetActive (true);
	staticpants.SetActive (false);
	
	
   } else if (pantstype==3){
	nopants.SetActive (false);
	firepants.SetActive (false);
	waterpants.SetActive (false);
	staticpants.SetActive (true);
}

}
 
 

