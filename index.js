let question = document.querySelectorAll(".questions");
let scores = document.querySelector('#scores');
let totalscore = document.querySelector('.totalscore');
let excellent = document.querySelector('.excellent');
let good = document.querySelector('.good');
let average = document.querySelector('.average');
let poor = document.querySelector('.poor');
let nxtBtn = document.querySelectorAll('.nextBtn');
let wrong = document.querySelectorAll('.wrong');
let right = document.querySelectorAll('.correct');
let current = document.querySelector('.current');
let totalBtn = document.querySelector('#totalScore');
let tryBtn = document.querySelector('#tryAgain');

let count=0;
let score=0;
let correct=0;
let currentQ=1;

nxtBtn.forEach(function(item){
    item.addEventListener('click',function(e){
        e.preventDefault();
        let initdiv= question[count];
        if(initdiv.classList.contains("selected")){
            initdiv.classList.remove("show");
            initdiv.classList.add("hide");
            count++;
            let div= question[count];
            div.classList.remove("hide")
            div.classList.add("show");
            current.textContent=++currentQ;
        }else{
            alert("You have to select an answer");
        }
       
    })
})

totalBtn.addEventListener('click',function(e){
    e.preventDefault();
        let initdiv= question[count];
        if(initdiv.classList.contains("selected")){
            loadCongratulations(currentQ);
            document.querySelector('.btnTotalScore').classList.toggle("hide");
            document.querySelector('.btnTryAgain').classList.toggle("hide");          
        }else{
            alert("You have to select an answer");
        }
})

tryBtn.addEventListener('click',function(e){
        e.preventDefault();
        console.log("IN try again");
        location.reload();
})


wrong.forEach(function(item,index){
    item.addEventListener('click',function(e){
        item.style.color="#fff";
        item.style.backgroundColor="red";
        item.parentElement.parentElement.classList.add("selected");
        loadCongratulations(currentQ);
    })

})


right.forEach(function(item,index){
    item.addEventListener('click',function(e){
        item.style.color="#fff";
        item.style.backgroundColor="green"
        item.parentElement.parentElement.classList.add("selected");
        if(!item.classList.contains('marked')){
            score+=3
            correct++;
            item.classList.add("marked");
            scores.textContent=correct;
        }
       loadCongratulations(currentQ);
       
    })
})

function loadCongratulations(idx){
    console.log(idx);
    if(idx===5){
        document.querySelector('.btnTotalScore').classList.toggle("hide");
        document.querySelector('.btnTryAgain').classList.toggle("hide");     
        if(score===15){
            document.querySelector('.excellent .totalscore1').textContent=score;
            excellent.classList.toggle("hide");
        }
        if(score===12){
            document.querySelector('.good .totalscore2').textContent=score;
            good.classList.toggle("hide");
        }
        if(score===9){
            console.log("here ooooo");
            document.querySelector('.average .totalscore3').textContent=score;
            average.classList.toggle("hide");
            console.log("here ooooo2");
        }
        if(score<9){
            document.querySelector('.poor .totalscore4').textContent=score;
            poor.classList.toggle("hide");
        }
    }
}