var datalist={"response_code":0,"results":[{"id":"1","category":"General Knowledge","type":"multiple",
"difficulty":"easy","question":"In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
"correct_answer":"Key","incorrect_answers":["Sword","Pen","Cellphone"]},{"id":"2","category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In past times, what would a gentleman keep in his fob pocket?","correct_answer":"Watch","incorrect_answers":["Money","Keys","Notebook"]},{"id":"3","category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which sign of the zodiac is represented by the Crab?","correct_answer":"Cancer","incorrect_answers":["Libra","Virgo","Sagittarius"]},{"id":"4","category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which American president appears on a one dollar bill?","correct_answer":"George Washington","incorrect_answers":["Thomas Jefferson","Abraham Lincoln","Benjamin Franklin"]},{"id":"5","category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What geometric shape is generally used for stop signs?","correct_answer":"Octagon","incorrect_answers":["Hexagon","Circle","Triangle"]},{"id":"6","category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is &quot;dabbing&quot;?","correct_answer":"A dance","incorrect_answers":["A medical procedure","A sport","A language"]},{"id":"7","category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Red Vines is a brand of what type of candy?","correct_answer":"Licorice","incorrect_answers":["Lollipop","Chocolate","Bubblegum"]},{"id":"8","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?","correct_answer":"Spruce Goose","incorrect_answers":["Noah&#039;s Ark","Fat Man","Trojan Horse"]},{"id":"9","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"What is the Spanish word for &quot;donkey&quot;?","correct_answer":"Burro","incorrect_answers":["Caballo","Toro","Perro"]},{"id":"10","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"What is the name of Poland in Polish?","correct_answer":"Polska","incorrect_answers":["Pupcia","Polszka","P&oacute;land"]},{"id":"11","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"What do the letters of the fast food chain KFC stand for?","correct_answer":"Kentucky Fried Chicken","incorrect_answers":["Kentucky Fresh Cheese","Kibbled Freaky Cow","Kiwi Food Cut"]},{"id":"12","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"How tall is the Burj Khalifa?","correct_answer":"2,722 ft","incorrect_answers":["2,717 ft","2,546 ft","3,024 ft"]},{"id":"13","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Which of the following card games revolves around numbers and basic math?","correct_answer":"Uno","incorrect_answers":["Go Fish","Twister","Munchkin"]},{"id":"14","category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Which sign of the zodiac comes between Virgo and Scorpio?","correct_answer":"Libra","incorrect_answers":["Gemini","Taurus","Capricorn"]},{"id":"15","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"In which fast food chain can you order a Jamocha Shake?","correct_answer":"Arby&#039;s","incorrect_answers":["McDonald&#039;s","Burger King","Wendy&#039;s"]},{"id":"16","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"The likeness of which president is featured on the rare $2 bill of USA currency?","correct_answer":"Thomas Jefferson","incorrect_answers":["Martin Van Buren","Ulysses Grant","John Quincy Adams"]},{"id":"17","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?","correct_answer":"Plum","incorrect_answers":["Apple","Peach","Pear"]},{"id":"18","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"What is the closest planet to our solar system&#039;s sun?","correct_answer":"Mercury","incorrect_answers":["Mars","Jupiter","Earth"]},{"id":"19","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"What is the name of NASA&rsquo;s most famous space telescope?","correct_answer":"Hubble Space Telescope","incorrect_answers":["Big Eye","Death Star","Millenium Falcon"]},{"id":"20","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"Which of the following blood component forms a plug at the site of injuries?","correct_answer":"Platelets","incorrect_answers":["Red blood cells","White blood cells","Blood plasma"]},{"id":"21","category":"General Knowledge","type":"multiple","difficulty":"difficult","question":"Which is the national animal of India?","correct_answer":"Tiger","incorrect_answers":["Zeebra","Lion","Camel"]}]}

function starttest(data) {
var finalarr={
    finaldata:[],
};
var testlevel=data.value;


_.each(datalist.results,function(items){
 if(items.difficulty.toUpperCase() == testlevel.toUpperCase()){
     finalarr.finaldata.push(items);
}
});

    sessionStorage.setItem("DATA", JSON.stringify(finalarr.finaldata));

    if(finalarr.finaldata.length > 0){
        if(testlevel.toUpperCase() == "EASY"){
             sessionStorage.setItem("TIMEALLOTED",7);
        }else if(testlevel.toUpperCase() == "MEDIUM"){
            sessionStorage.setItem("TIMEALLOTED",14);
        }else{
            sessionStorage.setItem("TIMEALLOTED",21);
        }
        location.href="questions.html";
    }else{
        alert("There are no questions in this level.");
    }

}

