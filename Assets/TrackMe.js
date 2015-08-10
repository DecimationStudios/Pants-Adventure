import System.IO;

var trackMe : Transform;

var trackPosition : Vector3[];
var trackRotation : Quaternion[];
var startIndex : int = 0;
var currentIndex : int = 0;
var framesToRecord : int = 1000;

var framesPerStep : int = 50;
var test : int = 0;

var currFilename : String = "track02.txt";

function Start () {
	trackPosition = new Vector3[framesToRecord];
	trackRotation = new Quaternion[framesToRecord];
	
	for (i=0; i<trackPosition.Length; i++){
		trackPosition[i] = new Vector3(0.0,0.0,0.0);
		trackRotation[i] = Quaternion.identity;
	}
}

function Update(){
	
	drawPath(new Color(1.0, 1.0, 0.0, 1.0));
	drawTrackFromFile("track01.txt", new Color(1.0, 0.0, 0.0, 1.0));
	drawTrackFromFile("track02.txt", new Color(1.0, 0.0, 1.0, 1.0));
	drawTrackFromFile("track03.txt", new Color(0.0, 1.0, 1.0, 1.0));
	
	if (Input.GetKeyDown(KeyCode.E)){
		saveTrackToFile(currFilename);
	}
}

function FixedUpdate () {
	if (Input.GetKey(KeyCode.E)){
		rewind();
	} else {
		track();
	}
}

function track(){
	currentIndex = (currentIndex+1) % trackPosition.Length;
	startIndex = currentIndex+1;
	
	trackPosition[currentIndex] = trackMe.position;
	trackRotation[currentIndex] = trackMe.rotation;
}

function rewind(){
	trackPosition[currentIndex] = new Vector3(0.0,0.0,0.0);
	trackRotation[currentIndex] = Quaternion.identity;
	
	currentIndex--;
	currentIndex = (trackPosition.Length + currentIndex) % trackPosition.Length;
	
	trackMe.position = trackPosition[currentIndex];
	trackMe.rotation = trackRotation[currentIndex];
}

function drawPath(pathColor : Color){
	for (i=0; i<(trackPosition.Length-1); i++){
    	Debug.DrawLine (trackPosition[i], trackPosition[i+1], pathColor );
	}
}

function saveTrackToFile( fileToWrite : String){

    // Create an instance of StreamWriter to write text to a file.
    var sw = new StreamWriter(fileToWrite);

    // Add some text to the file.
    var myString = "";
	
	for(i=0; i<trackPosition.Length; i++){
		myString = myString + trackPosition[i].ToString("F3")  + System.Environment.NewLine;
	}

    sw.Write(myString);

    sw.Close();
    
    print ("File Saved");

}

function drawTrackFromFile ( fileToRead : String, pathColor : Color ){

	// Create an instance of StringReader to read text from a file.
    sr = new StreamReader(fileToRead);

	if ( sr == null )
	{
	   Debug.Log(fileToRead + " not found or not readable");
	}
	else
	{
	
		var newPath : Vector3[] = new Vector3[framesToRecord];
	
		for(i=0; i<newPath.Length; i++){
			var txt;
		
			//Read name
			txt = sr.ReadLine();
			//print(Vector3FromString(txt).z);
			newPath[i] = Vector3FromString(txt);
		}
	}
	
	for (i=0; i<(newPath.Length-1); i++){
		pathColor.a = parseFloat(i)/parseFloat(newPath.Length);
    	Debug.DrawLine (newPath[i], newPath[i+1], pathColor);
	}

    sr.Close();
}

//Vector3fromString
//A useful function to convert back from a given Vector3.toString() output.  Passes back a Unity Vector3 object.
function Vector3FromString(Vector3string) {

    //get first number (x)
    startChar = 1;
    endChar = Vector3string.IndexOf(",");
    lastEnd = endChar;
    strLength = endChar-startChar;
    returnx = System.Convert.ToDecimal(Vector3string.Substring(startChar,strLength));

    //get second number (y)
    startChar = lastEnd+2;
    endChar = Vector3string.IndexOf(",", startChar);
    lastEnd = endChar;
    strLength = endChar-startChar;
    returny = System.Convert.ToDecimal(Vector3string.Substring(startChar,strLength));

    //get third number (z)
    startChar = lastEnd+2;
    endChar = Vector3string.IndexOf(")", startChar);
    lastEnd = endChar;
    strLength = endChar-startChar;
    returnz = System.Convert.ToDecimal(Vector3string.Substring(startChar,strLength));

    //build a new vector3 object using the values we've parsed
    returnvector3 = Vector3(returnx,returny,returnz);

    //pass back a vector3 type
    return returnvector3;
}