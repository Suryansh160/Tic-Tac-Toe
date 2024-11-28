let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".Reset");
let turno=true;
let newGameBtn=document.querySelector(".new-btn");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
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
    enableBoxes();
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
    if(winner==="X")
msg.innerText=`Congratulations, Winner is ${"Player 1"}`;
    else
    msg.innerText=`Congratulations, Winner is ${"Player 2"}`;
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

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);