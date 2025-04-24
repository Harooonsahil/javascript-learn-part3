// STRING METHODS

// Trim method
/*let full_name="Muhammad haroon  ";
let trimed=full_name.trim();
console.log(trimed);
console.log(trimed.length);*/


// To lower case 
/*let full_name="Muhammad Haroon";
let To_lower_case=full_name.toLowerCase();
console.log(To_lower_case);*/


//To upper case
/*let full_name="Muhammad Haroon";
let To_upper_case=full_name.toUpperCase();
console.log(To_upper_case);*/



// Methods with arguments
// index of method
/*let full_name="Muhammad Haroon";
let index_of=full_name.indexOf('o');
console.log(index_of);*/


// Slice method
/*let full_name="Muhammad Haroon";
let sliced=full_name.slice(4,8);
console.log(sliced);*/


// Replace method
/*let full_name="Muhammad Haroon khan";
let Replaced=full_name.replace("khan","Jan");
console.log(Replaced);*/



// Repeat method
/*let full_name="Muhammad Haroon";
let Repeated=full_name.repeat(5);
console.log(Repeated);*/



// Trim and uppercase
/*let full_name="Muhammad Haroon ";
let updated=full_name.trim().toLocaleUpperCase();
console.log(updated);*/

// tostring method
/*let number=[1,3,4,5,6,6,3,8,9];
let ans=number.toString();
console.log(ans);*/


// to array
/*let Name="Haroon";
let ans=Name.split("");
console.log(ans);*/


// ARRAY WITH push method
/*let std_Data=["Haroon",221430,12.9];
std_Data.push("Younas");
console.log(std_Data);*/


// ARRAY WITH pop method
/*let std_Data=["Haroon",221430,12.9];
std_Data.pop();
console.log(std_Data);*/



// Array with shift and unshift method
/*let std_Data=["Haroon",221430,12.9];
std_Data.shift();
std_Data.unshift("younas")
console.log(std_Data);*/



//start array and final array
/*let start=["january","july","march","august"];
start.shift();
start.shift();
start.unshift("june","july")
console.log(start);*/


// indexof method
/*let std_Data=["Haroon",221430,12.9];
let result=std_Data.indexOf(12.9);
console.log(result);*/


// include method
/*let std_Data=["Haroon",221430,12.9];
let result=std_Data.includes("younas");
console.log(result);*/


// array concatenation
/*let months=["january","february","march"];
let days=["monday","tuesday","wednesday","thursday"]
let all=months.concat(days);
console.log(all);*/



// slice array
/*let months=["january","february","march","april","may"];
let sliced=months.slice(1,3);
console.log(sliced);
console.log(months);*/


// sorting array
/*let number=[1,3,2,4,2,8,3,2];
number.sort();
console.log(number);*/



// splice array
/*let number=[1,3,2,4,2,8,3,2];
// for removing elements
number.splice(0,3);

// for adding element
number.splice(2,4,6,2,4);

//replacing elements
number.splice(1,3,"yellow")
console.log(number);*/



// Nested arrays
/*let numbers=[[1,2,3],[1,2,3,4,5],[5,2,5,2,2],[3,5,5,3,2,]];
console.log(numbers[2][2]);*/






// QUESTION NO 1
/*let array=[7,9,0,-2];
let n=3;
let updated=array.slice(0,n);
console.log(updated);*/



//QUESTIONS NO 2
/*let array=[7,9,0,-2];
let n=3;
let updated=array.slice(array.length-n);
console.log(updated);*/



//QUESTION NO 3

/*let Name =prompt("if you want to enter something");
if(Name.length===0)
{
    console.log("the string is empty");
}*/



//QUESTION NO 4
/*let full_name="  Haroon ";
let updated=full_name.trim();
console.log(updated);*/


//QUESTION NO 5
/*let number=[1,2,3,5,3,1,4,5];
let targetednum=4;
for(i=0;i<=number.length;i++)
{
    if(number[i]==targetednum)
    {
        console.log("found");
    }
    else{
        console.log("not found")
    }
}*/

//Question no 5 again in other method
/*let number=[1,2,3,5,3,1,4,5];
let targetednum=10;
let updated=number.includes(targetednum);
console.log(updated);*/








