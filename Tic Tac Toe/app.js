let button=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".winner");
let  newgame=document.querySelector(".newgame")
let container=document.querySelector(".msg-container")

let turnO=true;//TurnO or TurnX

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

button.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked")
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }box.disabled=true;
        checkwinner()
    })
})
const resetgame=()=>{
    turnO=true;
    enabledboxes()
    container.classList.add("hide")
}
const disabledboxes=()=>{
    for(let box of button){
        box.disabled=true;
    }
}
const enabledboxes=()=>{
    for(let box of button){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner) =>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    container.classList.remove("hide")
    disabledboxes()

}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1=button[pattern[0]].innerText;
        let pos2=button[pattern[1]].innerText;
        let pos3=button[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner:",pos1)
                showwinner(pos1)
            }
        }
    }
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

