let min=1,max=10,winningNum=2,guessesLeft=3;

const game =document.querySelector('#game'),
    minNum=document.querySelector('.min-num'),
    maxNum=document.querySelector('.max-num'),
    guessBtn=document.querySelector('#guess-btn'),
    guessInput=document.querySelector('#guess-input'),
    message=document.querySelector('.message');

minNum.textContent=min;
maxNum.textContent=max;

guessBtn.addEventListener('click',function(){
    let guess=parseInt(guessInput.value);
    console.log(guess);
    if(isNaN(guess) || guess>max || guess<min)//NaN means empty string->No input
    {
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }
    if(guess=== winningNum){
        //Disabe Input
        guessInput.disabled=true;
        guessInput.style.borderColor='green'
        setMessage(`${winningNum} is correct,Good Job!`,'green')
    }else{

    }
});


function setMessage(msg,color){
    message.style.color=color
    message.textContent=msg;
}