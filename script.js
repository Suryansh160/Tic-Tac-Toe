let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".Reset");
let turno=true;
let newGameBtn=document.querySelector(".new-btn");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let count1=0;
let count2=0;
let score1=document.querySelector(".score1");
let score2=document.querySelector(".score2");
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turno=true;
    count1=0;
    count2=0;
    score1.classList.add("hide");
    enableBoxes();
    msg.classList.add("hide");
    score2.classList.add("hide");
    msgCont.classList.add("hide");
}
const newGame=()=>{
    turno=true;
    enableBoxes();
    msg.classList.add("hide");
    msgCont.classList.add(".hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("s");
        if(turno===true){
            box.innerHTML = '<img src="./img/img1.png" alt="x"  width="120">X</img>';
            turno=false;
        }
        else if(turno===false)
        {
            box.innerHTML = '<img src="./img/img2.png" alt="x"  width="120">O</img>';
            turno=true;
        }
        box.disabled=true;

        checkWinner()
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    if(winner==="X"){
msg.innerText=`Congratulations, Winner is ${"Player 1"}`;
count1++;
msg.classList.add("hide");
score1.classList.remove("hide");
score2.classList.remove("hide");
msgCont.classList.remove("hide");
score1.innerText=`${count1}`;
    }
    else{
    msg.innerText=`Congratulations, Winner is ${"Player 2"}`;
    count2++;
    score2.innerText=`${count2}`;
    msg.classList.add("hide");
    score1.classList.remove("hide");
    score2.classList.remove("hide");
    msgCont.classList.remove("hide");}
msg.classList.remove("hide");
disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",resetGame);