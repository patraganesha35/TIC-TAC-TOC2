const boxes=document.querySelectorAll(".box");
signo=true;
const message=document.querySelector(".msg")

const winvalue=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6]
]

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(signo){
      box.innerText="X";
      signo=false;
    }

    else{
      box.innerText="O"
      signo=true;
    }
           box.style.pointerEvents = "none";
           checkwinner();
            



  })
})

const checkwinner=()=>{
  for(pattern of winvalue){
    value1=boxes[pattern[0]].innerText,
    value2=boxes[pattern[1]].innerText,
    value3=boxes[pattern[2]].innerText

    if(value1!="" && value2!="" && value3!=""){
      if(value1==value2 && value2==value3){
        message.innerText=(value1+" " +"is winner")
        disablebox()
      }
    }
  }

}

function disablebox(){
  for(box of boxes){
    box.style.pointerEvents="none"
  }
}

