let boxes =document .querySelectorAll(".box")
let msg=document.querySelector(".msg")
let resetbutton=document.querySelector(".resetbtn")
let signO=true;




let winner=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6]
];


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(signO){
      box.innerText="X"
      signO =false;
   
    }
    
    else{
      box.innerText="O"
      signO=true;
    }
    box.style.pointerEvents = "none";
    checkwinner();
  

  });

}); 

const disablebox=()=>{
  for (let box of boxes){
    box.style.pointerEvents="none";

  }
}

const enablebox=()=>{
  for (let box of boxes){
    box.style.pointerEvents="auto";
    box.innerText=""
  }
}

const checkwinner=()=>{
  for(pattern of winner){
    
     pos1val= boxes[pattern[0]].innerText,
     pos2val= boxes[pattern[1]].innerText,
     pos3val= boxes[pattern[2]].innerText

     if(pos1val !="" && pos2val !="" && pos3val !=""){
      if(pos1val==pos2val && pos2val==pos3val){
        console.log("winner",pos1val)
        showwinner(pos1val)
        disablebox();
       

      }
     }


  }
}

const showwinner=(winner)=>{
  msg.innerText=`winner is ${winner}`

}

const resetgame=()=>{
  signO=true;
  enablebox();
  msg.innerText="";
  

}

resetbutton.addEventListener("click",resetgame)










