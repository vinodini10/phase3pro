var currentquestion = 0;
var score =0;
var totquestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl= document.getElementById('question');
var opt1 =document.getElementById('opt1');
var opt2 =document.getElementById('opt2');
var opt3 =document.getElementById('opt3');
var opt4 =document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultcon = document.getElementById('result');
function loadQuestion(questionIndex)
{
    var q =questions[questionIndex];
    questionEl.textContent=(questionIndex+1) +'.' +q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}
function loadNextQuestion(){
    var selectedopt = document.querySelector('input[type=radio]:checked');
    if(!selectedopt)
    {
        alert('please select your answer!');
        return;
    }
    var answer = selectedopt.value;
    if(questions[currentquestion].answer==answer){
        score+=1;
    }
    selectedopt.checked = false;
    currentquestion++;
    if(currentquestion==totquestions-1){
        nextButton.textContent ='Finish';
    }
    if(currentquestion==totquestions)
    {
        container.style.display='none';
        resultcon.style.display='';
        resultcon.textContent ='Your Score :  ' +score +'/5';
        return;
    }
    loadQuestion(currentquestion);

    }
    loadQuestion(currentquestion);
