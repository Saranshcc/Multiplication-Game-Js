const num1 = Math.ceil(Math.random()*10) ;
const num2 = Math.ceil(Math.random()*10) ;
const submitans = document.querySelector('#submit');
const input = document.querySelector('#text');
const scoreE1 = document.querySelector('.score');
const restart= document.querySelector('#restart');


const question = document.querySelector('.h2');

question.innerText = `What is ${num1} multiply by ${num2} ?`;

const answer = document.querySelector('#text');
console.log(answer.value);

const correctans = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}

scoreE1.innerText=`score: ${score}`

submitans.addEventListener("click", ()=>{
    const userans= +input.value;
    if(userans===correctans){
        score++;
        updateLocalStorage()
        console.log(score);
    }
    else{
        score--;
        updateLocalStorage()
        console.log(score); 
    }
    location.reload();
     
});
restart.addEventListener("click",()=>{
    score=0;
    scoreE1.innerText=`score:${score}`;
        
})
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}





