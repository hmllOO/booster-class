

camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 260,
    image_format : 'png',
    png_quality : 100
});

Webcam.attach("#camera");

function start(){
    console.log();

   Webcam.snap(function(data_uri){

   })
}