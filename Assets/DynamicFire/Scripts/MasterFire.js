var fireSpread : float = 3.0;
var fireParticle : Transform;
var spreadTime : float = 3.0;
var burnTime : float = 6.0;
var burnOnStart = false;
private var fireStarted : boolean = false;
private var fTime : float = 0.0;
private var burnP : Transform;
private var fireSp : boolean = false;

function Update () 
{
	if (fireStarted && (Time.time - fTime) >= spreadTime && !fireSp)
		spreadFire();
	if (fireStarted && (Time.time - fTime) >= burnTime)
		endFire();
}

function startFire()
{
	if (!fireStarted)
		{
			fireStarted = true;
			burnP = Instantiate(fireParticle, transform.position, Quaternion.identity);
			burnP.parent = transform;
			fTime = Time.time;
		}
}

function endFire()
{
	fireStarted = false;
	if (burnP.particleEmitter)
		burnP.particleEmitter.emit = false;
	for (var child : Transform in burnP)
		if (child.particleEmitter)
			child.particleEmitter.emit = false;
	Destroy(this);
}

function spreadFire()
{
	if (Physics.OverlapSphere(transform.position, fireSpread))
			{
				var InRange = Physics.OverlapSphere(transform.position, fireSpread);
				for (var all : Collider in InRange)
					{

						if (all.GetComponent("FirePoint"))
							all.SendMessage("startFire");
					}
			}
}

function Start()
{
	if (burnOnStart)
		startFire();
}