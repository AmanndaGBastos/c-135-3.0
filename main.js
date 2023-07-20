// var nomedoarray=[]

 var objetos=[]
 status=""

 function preload(){
    var video=createVideo("video.mp4")
    video.hide()
 }
 function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
 }
 function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);//importando a biblioteca
    document.getElementById("status").innerHTML="Status: detectando objetos"
 }
 function modelLoaded(){
    console.log("modelLoaded ativado")
    status=true
    video.loop()
    video.speed(1)
    video.volume(0.5)
 }
 function gotResults(error,results){
if(error){
   console.log(error)
}
console.log(results)
objetos=results
 }
 function draw(){
   image(video , 0, 0 ,480,380)
   if(status!="") {// != significa diferente  
      objectDetector.detect(video,gotResults);
      for( var i=0;i<objetos.length;i++){
         document.getElementById("status").innerHTML="Status: Objeto Detectado"
         document.getElementById("numberofObjects").innerHTML="Números de objetos detectados:"+objetos.length
         fill("#ff0000")
         var porcentagem=floor(objetos[i].confidence)
         Text(objects[i].label + " " + porcentagem + "%", objetos[i].x + 15, objetos[i].y + 15)
         nofill()
         stroke("#ff0000")
         Rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].heigth)
   }

   }
 }