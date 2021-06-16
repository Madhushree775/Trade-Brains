var finalarr={
    finaldata:[],
};
var activeIndex = 0;
var totalQstns = 0;

var answeredquestion=[];

    var selectedid;
$(function(){

    finalarr.finaldata=JSON.parse(sessionStorage.getItem("DATA"));
    console.log(JSON.stringify(finalarr.finaldata));


var questionsdiv = "";   

totalQstns = finalarr.finaldata.length;
_.each(finalarr.finaldata,function(items,key) {
    if(activeIndex == key){

        selectedid = items.id;
        var questionNo = key+1;
        var question = items.question;
        var answersDetails = [...items.incorrect_answers,items.correct_answer];
        var suffelansers = shuffleArray(answersDetails);
    
questionsdiv='<div class="d-flex flex-row align-items-center question-title">'+
'<h3 class="text-danger">'+questionNo+'.</h3>'+
'<h5 class="mt-1 ml-2">'+question+'</h5>'+
'</div>';

for(let i=0;i<suffelansers.length;i++){
    questionsdiv=questionsdiv+'<div class="ans ml-9">'+
    '<label class="radio"> <input type="radio" name="'+questionNo+'" value="'+suffelansers[i]+'" id="'+suffelansers[i].replace(/ /g,"")+'" onClick=answers("'+ questionNo +'")> <span>'+suffelansers[i]+'</span>'+
    '</label>'+
    '</div>';
}
}





});

 document.getElementById("questionsSection").innerHTML=questionsdiv;

 
    
updateqnum();

var alottedtime = sessionStorage.getItem("TIMEALLOTED");
var testendat = new Date();
testendat.setMinutes ( testendat.getMinutes() + parseFloat(alottedtime) );

testendat = testendat.getTime();

setInterval(function() {


    var now = new Date().getTime();
      

    var distance = testendat - now;
      
      
      
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(days*24+((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    
    var minutes = Math.floor(hours*60+((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    
    document.getElementById("timeinterval").innerHTML=minutes+":"+seconds;


    
    if (distance < (1000*60)) {
        $('.timeaction').css('color','red');
        
    }


    if (distance < 0) {
        submitquestion();
    }
  }, 1000);
});

function updateqnum() {  
var presentqCount = activeIndex+1;
var totalpresent=totalQstns;
var totalpresentdisplay="("+presentqCount+" / "+totalpresent+")";
document.getElementById("questioncount").innerHTML=totalpresentdisplay;


if(presentqCount == totalpresent){
$("#btnsubmit").show();
$("#btnnext").hide();
}else{
    $("#btnnext").show();
    $("#btnsubmit").hide();
}
}

function previousquestion() {
    activeIndex-=1;

    if(activeIndex >= 0){
        document.getElementById("questionsSection").innerHTML="";
        _.each(finalarr.finaldata,function(items,key) {
            if(activeIndex == key){
        
                selectedid = items.id;
                var questionNo = key+1;
                var question = items.question;
                var answersDetails = [...items.incorrect_answers,items.correct_answer];
                var suffelansers = shuffleArray(answersDetails);
            
        questionsdiv='<div class="d-flex flex-row align-items-center question-title">'+
        '<h3 class="text-danger">'+questionNo+'.</h3>'+
        '<h5 class="mt-1 ml-2">'+question+'</h5>'+
        '</div>';
        
        for(let i=0;i<suffelansers.length;i++){
            questionsdiv=questionsdiv+'<div class="ans ml-9">'+
            '<label class="radio"> <input type="radio" name="'+questionNo+'" value="'+suffelansers[i]+'" id="'+suffelansers[i].replace(/ /g,"")+'" onClick=answers("'+ questionNo +'")> <span>'+suffelansers[i]+'</span>'+
            '</label>'+
            '</div>';
        }
        }
        
        
        });
        
         document.getElementById("questionsSection").innerHTML=questionsdiv;
        
        
    }else{
        activeIndex= 0  ;
    }


    _.each(answeredquestion,function(items){
        if(items.id == selectedid){
            var ssa=items.selectedAnswer.replace(/ /g,"");
            $("#"+ssa).prop("checked", true);
        }
    });
        
    updateqnum();
}

function nextquestion() {
    activeIndex+=1;

    if(activeIndex <= totalQstns){
        document.getElementById("questionsSection").innerHTML="";
        _.each(finalarr.finaldata,function(items,key) {
            if(activeIndex == key){
                selectedid = items.id;
                var questionNo = key+1;
                var question = items.question;
                var answersDetails = [...items.incorrect_answers,items.correct_answer];
                var suffelansers = shuffleArray(answersDetails);
            
        questionsdiv='<div class="d-flex flex-row align-items-center question-title">'+
        '<h3 class="text-danger">'+questionNo+'.</h3>'+
        '<h5 class="mt-1 ml-2">'+question+'</h5>'+
        '</div>';
        
        for(let i=0;i<suffelansers.length;i++){
            var string= suffelansers[i];
            var stringtripm =string.replace(/ /g,"");
           
            questionsdiv=questionsdiv+'<div class="ans ml-9">'+
            '<label class="radio"> <input type="radio" name="'+questionNo+'" value="'+suffelansers[i]+'" id="'+stringtripm+'" onClick=answers("'+ questionNo +'")> <span>'+suffelansers[i]+'</span>'+
            '</label>'+
            '</div>';
        }
        }
        
        
        });
        
         document.getElementById("questionsSection").innerHTML=questionsdiv;
        
        
    }else{
        activeIndex = totalQstns;
    }
_.each(answeredquestion,function(items){
    if(items.id == selectedid){
        var ssa=items.selectedAnswer.replace(/ /g,"");
      $("#"+ssa).prop("checked", true);
    }
});
updateqnum();
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
     
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                     
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
         
    return array;
 }

 function answers(nme){

     var selectedanswerval=$("input[name='"+nme+"']:checked").val();
    // alert(selectedanswerval);

     var isavailable = false;
     
    


     
     _.each(answeredquestion,function(items,key) {
        if(selectedid == items.id){
            items.selectedAnswer = selectedanswerval;
            isavailable = true;
     }
        });

if(!isavailable){
     _.each(finalarr.finaldata,function(items,key) {
        if(activeIndex == key){
            items.selectedAnswer = selectedanswerval;
     answeredquestion.push(items);
     }
        });
    }
        console.log(JSON.stringify(answeredquestion));
 }

 function submitquestion() {

    sessionStorage.setItem("answeredata",JSON.stringify(answeredquestion));
sessionStorage.setItem("totalques",totalQstns);
    location.href="score.html";


 }