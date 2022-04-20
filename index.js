console.log("exported");

let s = document.getElementById("sieve");

for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        let tempDiv = document.createElement('div');
        var val = (i*10) + (j+1);
        tempDiv.textContent = val;
        tempDiv.addEventListener('click',(e)=>{
            // seiveOfEratosthenes(this.)
            console.log("1. clicked");
            console.log("2. \n",e.currentTarget);
            console.log("3. \n",e.currentTarget.textContent);
            // console.log(e.currentTarget.style);
            e.currentTarget.style.backgroundColor = "black";
            e.currentTarget.style.color = "white";
            console.log("style changed");
        });

        s.appendChild(tempDiv);
    }
}
console.log("generated sieve");

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


// sieve updation


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

for(let i=0;i<boolArray.length;i++){
    console.log(i,"->",boolArray[i]);
}

function sieve_visualizer(){
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
                        sieveDiv.childNodes[temp].style.fontSize = "1.41em";
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
const sieveDiv = document.getElementById("sieve");
sieveDiv.addEventListener('click',sieve_visualizer);