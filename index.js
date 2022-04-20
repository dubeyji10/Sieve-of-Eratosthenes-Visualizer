console.log("exported");

let s = document.getElementById("sieve");
var colorsArray = [
    "#0048BA","#B0BF1A","#7CB9E8","#F5F5DC","#B284BE","#CC0033","#FF9900","#A6D608","#5D8AA8",
    "#98777B","#72A0C1","#AF002A","#FD5800","#DF6124","#00CCFF","#F07427","#FFA089","#E56024","#9F00FF",
    "#FFE302","#CEFF00","#34B233","#004242",
    "#A4F4F9","#7C98AB","#645452","#F5DEB3","#FFFFFF","#F5F5F5","#A2ADD0","#D470A2","#FF43A4","#FC6C85",
    "#FD5800","#A75502","#722F37","#673147","#FF007C","#A0E6FF","#56887D","#C9A0DC","#C19A6B","#738678",
    "#0F4D92","#1C2841","#FFFF00","#FCE883",
    "#F0F8FF","#84DE02","#E32636","#C46210","#EFDECD","#E52B50","#9F2B68","#F19CBB","#AB274F","#D3212D",
    "#3B7A57","#00C4B0","#FFBF00","#FF7E00","#FF033E","#9966CC","#A4C639","#F2F3F4","#CD9575","#665D1E",
    "#915C83","#841B2D","#FF9900","#A6D608","#00CC33","#B80CE3",
    "#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A",
    "#DF6124","#00CCFF","#F07427","#FFA089","#FAEBD7","#008000","#8DB600","#FBCEB1",
    "#00FFFF","#7FFFD4","#D0FF14","#4B5320",
    "#3B444B","#8F9779","#98777B",
    "#BCD4E6","#9F8170","#FA6E79","#F5F5DC","#2E5894","#9C2542","#E88E5A",
    "#40826D","#009698","#7C9ED9","#CC9900","#922724","#9F1D35","#DA1D81","#00AAEE",
    "#00CC33","#B80CE3","#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A"
    ,"#EFCC00"
    ];

for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        let tempDiv = document.createElement('div');
        var val = (i*10) + (j+1);
        tempDiv.textContent = val;
        tempDiv.style.backgroundColor = colorsArray[val];

        // tempDiv.addEventListener('click',(e)=>{
        //     // seiveOfEratosthenes(this.)
        //     console.log("1. clicked");
        //     console.log("2. \n",e.currentTarget);
        //     console.log("3. \n",e.currentTarget.textContent);
        //     // console.log(e.currentTarget.style);
        //     e.currentTarget.style.backgroundColor = "black";
        //     e.currentTarget.style.color = "white";
        //     console.log("style changed");
        // });

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
const sieveDiv = document.getElementById("sieve");
sieveDiv.addEventListener('click',sieve_visualizer);