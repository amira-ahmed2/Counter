let counter=0;
let displayNumberCounter=document.getElementById("numberCounter")

displayNumberCounter.innerHTML=counter;

function increase(){
    counter++;
    displayNumberCounter.innerHTML= counter;
    if(counter>0){
        displayNumberCounter.style.color='green'
    }else if(counter===0){
        displayNumberCounter.style.color='black'
    }
}
function reset(){
    counter=0
    displayNumberCounter.innerHTML = counter;
    if(counter===0){
        displayNumberCounter.style.color='black'
    }
}
function decrease(){
    counter --;
    displayNumberCounter.innerHTML = counter;
    if(counter<0){
        displayNumberCounter.style.color='red'
    }else if(counter===0){
        displayNumberCounter.style.color='black'
    }
}