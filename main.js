var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("tbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("tbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie")
    {console.log("takingselfie");
speak();}
}
function speak(){
    var synth=window.speechSynthesis;speakdata="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        takesnapshot();
        save();
            },5000);
    }
    camera=document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format:"jpeg",
        jpeg_quality:90
    });
    function takesnapshot(){
        Webcam.snap(function(datauri){
            document.getElementById("result").innerHTML="<img id='selfieimage'src='"+datauri+"'/>";
        });
    }

    function save()
    {
        link=document.getElementById("link");
        image=document.getElementById("selfieimage").scroll;
        link.href=image;
        link.click();
    }