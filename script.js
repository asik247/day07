document.getElementById('para').innerHTML = "ima js code hre and chage this html code okkk."


let money = 0;
if(money>300){
    console.log('got to cineplex');
}else{
    if(money>100){
        console.log('what the fuchka');
    }if(money>0){
        console.log('tui kola kine kha');
    }
    else{
        console.log('tui kisui pabi na');
    }
}
// Ternary operator example

function getFace(isNumber){
    return isNumber ? '10k':'5k';
}
let result = getFace(true);
console.log(result);
let falseResult = getFace(false);
console.log(falseResult);
console.log(getFace(null));
console.log(getFace(undefined));
console.log(getFace(NaN));
console.log(getFace(0));
console.log(getFace(""));
/* false value:-null,NaN,undifind,0,"",*/
const newFunk = (a,b)=>{
    return a+b;
}
console.log(newFunk(10,11));

const arroyFunk = (person)=>{
    const name = person ? person.name:'stranger';
    return `Howd,${name}`;
}
console.log(arroyFunk({name:'Alice'}));

let prices = 500;
const isLeader = true;
const hasCar = false
const totla = isLeader === true || hasCar=== true ?prices = 0 : prices = prices + 100;
console.log(totla);

let taka = 5000;
const leadder = false;

taka = leadder === true ? taka>1000?taka =taka/2:0:taka+1000;
console.log(taka);

let heyLeadder = true;
if(heyLeadder){
    console.log('leader asche chair caro');
}

const isPass = true
if(!isPass){
    console.log('tumi amer noyon ar moni');
}else{
    console.log('tor a biya bia dibo');
}