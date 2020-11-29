// Required elements
const quizBox= document.querySelector(".quizBox");



// When you click button to begin quiz, timer counts down
document.getElementById("start-quiz").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("count").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("count").innerHTML = "Time is up!"
    }
    }, 1000);
});
// set score to 0
score =0;

// create questions here
let questions = [
    {   q: "Hyper Text Markup Language Stand For?", 
            A: "JavaScript", 
            B: "XHTML", 
            C: "CSS", 
            D: "HTML",
            answer: "D" }, 
       { q: "Which language is used for styling web pages?", 
            A: "HTML", 
            B: "JQuery", 
            C: "CSS", 
            D: "XML", 
            answer:"C" },
        { q: "What tag can be used to insert a line break or blank line in an HTML document?", 
            A: "<title>", 
            B: "<head>", 
            C: "<body>", 
            D: "<br>",
            answer: "D" },
        { q: "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?", 
            A: "<!DOCTYPE>", 
            B: "<code>", 
            C: "<embed>", 
            D: "<caption>", 
            answer: "A" }, 
        { q: "What is a JavaScript element that represents either TRUE or FALSE values?", 
            A: "Condition", 
            B: "Boolean", 
            C: "Funtion", 
            D: "String", 
            answer: "B" }, 
        { q: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?", 
            A: "Conditional Loop", 
            B: "Else Loop", 
            C: "While Loop", 
            D: "For Loop", 
            answer: "C" }, ]
            
