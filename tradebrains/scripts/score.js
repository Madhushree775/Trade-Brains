var answeredatalist=[];
var totque=0;
var totalscore=0;
$(function(){

    document.getElementById("questionansdiv").innerHTML="";
    document.getElementById("scorediv").innerHTML="";

     answeredatalist=JSON.parse(sessionStorage.getItem("answeredata"));
     totque=JSON.parse(sessionStorage.getItem("totalques"));
var datalength=answeredatalist.length;


var questionsdiv = "";  
 questionsdiv = ' <h3 style="text-align: center;">You answered '+datalength+'/'+totque+'</h3>'  ;

document.getElementById("questionansdiv").innerHTML=questionsdiv;

_.each(answeredatalist,function(items){

    if(items.selectedAnswer==items.correct_answer){
         totalscore+=1;
         
}else{
totalscore-=0.5;

}

});

if(totalscore < 0){
    totalscore=0;
}

var  scoreansdiv = "";  

scoreansdiv='<h3 style="text-align: center;">Your score is: '+totalscore+'</h3>';
document.getElementById("scorediv").innerHTML=scoreansdiv;
});

function playagain() {

    location.href="index.html";
}