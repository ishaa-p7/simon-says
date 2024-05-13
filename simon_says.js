let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
//game start nhi hua hai
let started=false;
let level=0;
 
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
    {console.log("game started");
    started=true;
    levelUp();
}
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
    
    function levelUp(){
    userSeq=[]; //taki user ko pura sequence firse dalna pde not just one color
    level++;
    h2.innerText=`Level ${level}`;

//random btn choose
let randomi=Math.floor(Math.random()*3);
let randomc=btns[randomi];
let randomb=document.querySelector(`.${randomc}`); //.crandomc->class
//console.log(randomi);
//console.log(randomc);
//console.log(randomb);
 gameSeq.push(randomc);
 console.log(gameSeq);
gameflash(randomb);
}

//function to check whether the pressed buttons are same or not
function checkans(idx){
    //console.log("curr level:",level);
//let idx=level-1;
if(userSeq[idx]===gameSeq[idx])
{
    if(userSeq.length==gameSeq.length)
   {
    setTimeout(levelUp(),1000);
   }
}
else{

    h2.innerHTML=`Game Over!Your score was <b>${level}</b> <br> Press any key to start`;
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
document.querySelector("body").style.backgroundColor="white"; //150ms baad document ka color firse hojaega white
},150);
    reset();
}
}

function btnpress(){
   // console.log(this);
    //to know which btn was pressed
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id") //id le lege,class isliye nhi le rhe kyuki class multiple ho skti h
//console.log(usercolor);
userSeq.push(usercolor);

checkans(userSeq.length-1); //userSequence ka current index check krne k liye
}

let allbtns=document.querySelectorAll(".btn"); //to get all btns
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}