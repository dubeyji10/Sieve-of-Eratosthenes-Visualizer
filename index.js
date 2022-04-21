console.log("exported");

let s = document.getElementById("sieve");
let sChildren = s.childNodes;
const sieveDiv = document.getElementById("sieve");
let children = sieveDiv.childNodes;


let boolArray = [];
let h = 0;
while(h++<100){
    boolArray.push(true);
}
//101 times true
// 0 indexing so 101 times

boolArray[0] = false;
boolArray[1] = false;

console.log(...boolArray);
console.log(".[..................].");




var colorsArray = [
    "#0048BA","#B0BF1A","#7CB9E8","#F5F5DC","#B284BE","#CC0033","#FF9900","#A6D608","#5D8AA8",
    "#98777B","#72A0C1","#AF002A","#FD5800","#DF6124","#00CCFF","#F07427","#FFA089","#E56024",
    "#9F00FF","#FFE302","#CEFF00","#34B233","#004242",
    "#A4F4F9","#7C98AB","#645452","#F5DEB3","#FFFFFF","#F5F5F5","#A2ADD0","#D470A2","#FF43A4",
    "#FC6C85",
    "#FD5800","#A75502","#722F37","#673147","#FF007C","#A0E6FF","#56887D","#C9A0DC","#C19A6B",
    "#738678","#0F4D92","#1C2841","#FFFF00","#FCE883",
    "#F0F8FF","#84DE02","#E32636","#C46210","#EFDECD","#E52B50","#9F2B68","#F19CBB","#AB274F",
    "#D3212D","#3B7A57","#00C4B0","#FFBF00","#FF7E00","#FF033E","#9966CC","#A4C639","#F2F3F4",
    "#CD9575","#665D1E","#915C83","#841B2D","#FF9900","#A6D608","#00CC33","#B80CE3",
    "#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A",
    "#DF6124","#00CCFF","#F07427","#FFA089","#FAEBD7","#008000","#8DB600","#FBCEB1",
    "#00FFFF","#7FFFD4","#D0FF14","#dbf359","#3B444B","#8F9779","#98777B",
    "#BCD4E6","#9F8170","#FA6E79","#F5F5DC","#2E5894","#9C2542","#E88E5A",
    "#40826D","#009698","#7C9ED9","#CC9900","#922724","#9F1D35","#DA1D81","#00AAEE",
    "#00CC33","#B80CE3","#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A"
    ,"#EFCC00"
    ];

    console.log("instead let set false from div element factors");
    console.log("start from any div till 100 and set those multiple false");

/*
    event listener for tempDiv --- removed for now

        tempDiv.addEventListener('click',(e)=>{
            // console.log("1. clicked");
            // console.log("2. \n",e.currentTarget);
            let t = parseInt(e.currentTarget.textContent);
            // console.log("3. value in this div -- textContent ",t);
            // console.log(e.currentTarget.style);
            e.currentTarget.style.backgroundColor = "black";
            e.currentTarget.style.color = "white";
            console.log("style changed");

            console.log(" ............................... ");

            console.log(" ............child at index = ",t);
                for(let i = t;i<=boolArray.length;i+=t){
                    if(boolArray[i+1]===true){
                        sChildren[i-1].style.backgroundColor = "white";
                        sChildren[i-1].style.color = "black";
                        // console.log("->color changed for ->",sChildren[i-1].textContent);
                        console.log("boolArary[ ",i-1," ] =",boolArray[i-1])
                        console.log("boolArary[ ",i," ] =",boolArray[i])
                        console.log("boolArary[ ",i+1," ] =",boolArray[i+1])
                        boolArray[i+1] = false;
                        console.log(" . . . after updation . . . ")
                        console.log("boolArary[ ",i-1," ] =",boolArray[i-1])
                        console.log("boolArary[ ",i," ] =",boolArray[i])
                        console.log("boolArary[ ",i+1," ] =",boolArray[i+1])
                        console.log("**************************************");
                    }
                }
                // console.log(" . . . . . done . . . . \n\n factors or multiple of ",t,"are colored");
                document.getElementById("info1").textContent = "factors(multiples) of "+t+" are colored";
        });



*/


for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        let tempDiv = document.createElement('div');
        var val = (i*10) + (j+1);
        tempDiv.textContent = val;
        // tempDiv.style.backgroundColor = colorsArray[val];
        tempDiv.style.backgroundColor = "aqua";
        tempDiv.style.color = "black";

        s.appendChild(tempDiv);
    }
}

//remove event listener from 1 -- non prime -- factors everything
// sChildren[0].addEventListener('click',()=>{console.log("no event or empty event listener here at 1")});

console.log("generated sieve");

// sieve updation

function autoSieve(){


for(let i=2;i<=Math.sqrt(boolArray.length);i++){

    if(boolArray[i]===true)// <------------------------     
    {                                           //    |
        for(let j=i*i;j<boolArray.length;j+=i){ //    |
            boolArray[j] = false;               //    |
            //                                        |
            // set multiples of j false               |
            // because they are composite             |
            // ------ALREADY FILTERED SO SKIPPED-------
        }
    }
}


}

function sieve_visualizer(){
    autoSieve();
    document.getElementById('info2').style.visibility = "visible";
    let children = sieveDiv.childNodes;
    // use setTimeout

    for(var i=0;i<children.length;i++){
        (function(temp){
            setTimeout(
                function(){
                    if(boolArray[parseInt(sieveDiv.childNodes[temp].textContent)]===true){
                        sieveDiv.childNodes[temp].style.backgroundColor = "whitesmoke";
                        sieveDiv.childNodes[temp].style.color = "black";
                        sieveDiv.childNodes[temp].style.fontSize = "1.23em";
                        sieveDiv.childNodes[temp].style.fontStyle = "italic";

                    }
                    else{
                        sieveDiv.childNodes[temp].classList.toggle("blinkdiv");
                    }
                }
                ,500 + (100*temp)
            )
        })(i);
    }
}

//  promise method instead of nested settimeout
// eventlistener on info1 



const pause = _ => new Promise(resolve => setTimeout(resolve, _));

async function main() {
    // 1 is also not prime so change its style
    children[0].classList.toggle("blinkdiv");   
    console.log(" 1 is non prime ")
  for (let i = 2; i <= Math.sqrt(100); i++) {
    await pause(1000);
    if(boolArray[i]===true){
    document.getElementById("info1").textContent = " - marking multiples of  "+i+" -";
    console.log("--> run for  i = ",i);
     for(let j = i*i;j<=100;j+=i){
        const pause2 = t => new Promise(resolve => setTimeout(resolve, t));
        await pause2(250);
        if(boolArray[i]===true){
            boolArray[j] = false;
            console.log("1. . . . multiple = ",j);
            children[j-1].style.backgroundColor = "wheat";
            // children[j-1].style.backgroundColor = colorsArray[j];
            children[j-1].style.color = "black";
            children[j-1].style.fontStyle = "italic";
            children[j-1].style.textDecoration = "line-through";
            console.log("2. ",children[j-1].textContent," is not prime");
            }
        }
        console.log("3. ---- now  i = ",i);
        console.log("3. ---- text here  at i-1 = ",children[i-1].textContent);
        console.log("3. ---- text here  at i = ",children[i].textContent);
        console.log("3. ---- text here  at i+1 = ",children[i+1].textContent);

    }      
  }
  document.getElementById("info1").textContent = "done";
  let smalldiv = document.createElement("span");
  smalldiv.textContent = "note : 1 is neither prime nor composite";
  document.getElementById("info2").appendChild(smalldiv);

  document.getElementById("info2").style.visibility = "visible";

}


const here = document.getElementById("info1");
here.addEventListener('click',main);

// sieveDiv.addEventListener('click',sieve_visualizer);

