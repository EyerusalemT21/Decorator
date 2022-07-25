window.onload = function () {
    document.getElementById("area").innerHTML = "\t\t"+"Sample Item 1"+"\r\n"+"\t\t"+"Sample Item 2";
    var click = document.getElementById("big");
    click.onclick = bigClick;
    //var check = document.getElementById("bling").checked;
};
function big(){
   // alert("Hello, world!");
  // document.getElementById("area").style.fontSize="24pt";
  var text = document.getElementById("area");
  var font = window.getComputedStyle(text);
  var size = font.fontSize;
  var fontsize = parseInt(size)+2+"px";
  document.getElementById("area").style.fontSize=fontsize;
  console.log(fontsize);
}
function bigClick(){setInterval(big,500);}


function change(e){
   // alert("Bling checked");
   if(e.checked){
    document.body.style.backgroundImage = "url('100 Dollar Bill Pile.jpg')";
    document.getElementById("area").style.fontWeight="bold";
    document.getElementById("area").style.color="green";
    document.getElementById("area").style.textDecoration="underline";
   }
   if(!e.checked){
    document.body.style.backgroundImage = "default";
    document.getElementById("area").style.fontWeight="normal";
    document.getElementById("area").style.color="black";
    document.getElementById("area").style.textDecoration="none";
   }
} 


