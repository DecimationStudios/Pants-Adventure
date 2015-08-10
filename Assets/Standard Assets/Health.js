var botID : int = -1;
var damage : int;
var health : float = 100;
static var playerhealth: int = 100;
var healthyBarTex : Texture;
var unhealthyBarTex : Texture;
var dyingBarTex : Texture;
var onFire : boolean = false;

function Start () {
 	playerhealth = 100;
}

function Update () {

 if(playerhealth < 1)
{

Die();

	}
}

function Die()
{
print ("lol u died");
Application.LoadLevel("dead");
/*var spawnObject : GameObject = GameObject.Find("SpawnManager");
var spawnScript : SpawnManager = spawnObject.GetComponent("SpawnManager");
spawnScript.Dead = true;*/
}

function TakeDamage()
{

Health.playerhealth -= damage;

}

function OnGUI() {
    var useTexture = healthyBarTex;
    if (playerhealth < 50){ useTexture = unhealthyBarTex; }
    if (playerhealth < 20){ useTexture = dyingBarTex; }

    GUI.DrawTexture(Rect(10,10+botID*60,30.0*(playerhealth/5),200), useTexture, ScaleMode.ScaleToFit, true, 1.0*(playerhealth/5));
    
}
