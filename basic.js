
const x ="  Nadira";
const y ="Nadira";
console.log(x.trim()===y.trim());
//slice(kon index theke suru, kontar ag porjonto jabe)
//splice(start index, koyta cut korbe, tarpor ki ki add korbe)
//.trim()=string er vitore faka space remove kore dibe
//.include()= kono string onno arekta string er moddhe ase ki na check korte use hoy
//splice(start, 0, extra added value);
//split(" ")=string e space paile tukra tukra kore vag kore fele
//join("/")=string take join korbe ,join method er majhe je symbol deya ase 2ta word er majhe tokhn sei symbol dibe
// const object_name={
//     key: value,
// };
//console.log(object_name.key_name);

// templete string:
// const variableName = `My pet name is ${object_name.key}.It's favourite food is ${object_name.key}.`;
// console.log(variableName);

//Math.max(jotogula value deya hbe tar moddhe theke highest value print korbe);

//
const heights = [1,27,34,13,89,50];
function getMin(number){
    let max=number[0];
    for(const num of number){
        if(num<max){
            max=num;
        }
    }
    return max;
}
const min = getMin(heights);
console.log("The heighest number is",min);


// object deya thakle sekhan theke highest value ber korte

const phone= [
    {name:'Samsung', prize: 123055, color: 'black' , camera: '12mp'},
    {name:'Samsung', prize: 123055, color: 'black' , camera: '12mp'},
    {name:'Samsung', prize: 12355, color: 'black' , camera: '12mp'},
    {name:'Samsung', prize: 12055, color: 'black' , camera: '12mp'},
    {name:'Samsung', prize: 13055, color: 'black' , camera: '12mp'},
]

function getCheapPhone(phone){
    let max=0;
    for(const phones of phone){
        max=max+phones.prize;
    }
    return max;
}
const max=getCheapPhone(phone);
console.log("the phone is", max);

// alt+ctrl+down arrow korle multiple line select hoye jay.

function add(num1,num2){
   return num1+num2;
}
function sub(num1 ,num2){
return (num1-num2);
}
function cal(a,b,operation){
    if(operation==='add'){
        const res= add(a,b);
        return res;
    }
    else{
        const res=sub(a,b);
return res;
    }
}

const res =cal(12,13,add);
console.log(res);

function matchFinder(string1,string2){
    const res= string1.includes(string2);
    return res;
}
console.log(matchFinder('nadira','na'));

function sortmaker(array){
    const [a,b]=array;
    if(a<0|| b<0){
        return 'Invalid';

    }
    else if(a==b){
        return "equal";
    }
    else if(a>b){
        return [a,b];
    }
    else{
        return [b,a];
    }
}
console.log(sortmaker([12,1]));



function findaddress(object){
    const street= object.street||"_";
    const house= object.house|| "_";
    const society = object.society ||"_";

    const string= street+ ";" + house +";"+ society;
    return string;
}
console.log(findaddress({street:10,}));


function canpay(arr,num){

}

//line ke dynamic string a convert korte use hoy
function printInfo(name, age, address){

console.log(`My name is ${name}. My age is ${age}. I am from ${address}.`);
}
 printInfo("Nadira", 24, "Savar");

