// //Do the below programs in anonymous function & IIFE
// // Print odd numbers in an array
console.log("1. Do the below programs in anonymous function & IIFE")
console.log(`Q1 : PRINT ODD NUMBER USEING ANONYMOUS FUNCTION`);

//  let array = [1,2,3,4,5,6,7,8,9];
let odd=function(array)
{
    for (let i=0;i<array.length;i++)
    {
    
        if(array[i] % 2 != 0 )
        {
            console.log(array[i]);
        }
    }
}
odd([1,2,3,4,5,6,7,8,9,10,11]);



// IIFE FUNCTION :-
console.log("IIFE FUNCTION"); 

(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5,6,7,8,9]);

// // Convert all the strings to title caps in a string array

console.log(` Q2 :the strings to title caps Anonymous function`);

//let str="HI THIS IS PRIYA";
let title=function(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + 
      str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(title("HI THIS IS PRIYA"));

  //IIFE FUNCTION :- 

  (function(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
    //return str.join(' ');
  })("HI THIS IS PRIYA");


// // Sum of all numbers in an array
console.log("SUM OF ALL NUMBERS IN AN ARRAY")
// // Anonymous function

let sum=function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(sum([1,2,3,4,5,6,7,8,9,12,15]));
  
//   // IIFE FUNCTION :- 
console.log("IIFE FUNCTION");

(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
          //return sum;
    })([1,2,3,4,5,6,7,8,9,12,15])

// // // Return all the prime numbers in an array
console.log("Q3 .Return all the prime numbers in an array")
// // // Anonymous function

let prime=function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
prime(([1,2,3,4,5,6,7,8,9]));

// // IIFE FUNCTION :- 

(  
    function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4,5,6,7,8,9])

// // Return all the palindromes in an array
console.log("Q4 .palindromes");
// // Anonymous function

let palindrome=function(arr)
    {
       let result =[];
        for (let i = 0; i <arr.length; i++)
        {
            let data=arr[i].split("").reverse().join("");
            if(data===arr[i])
            {
             result.push(arr[i]);
            }
        }
        return result;
    }
    console.log(palindrome(['madam','dad','book','111']));

// IIFE FUNCTION :- 

    ( function (arr)
    {
        let result =[];
        for (let i = 0; i <arr.length; i++)
        {
            let data=arr[i].split("").reverse().join("");
            if(data===arr[i])
            {
             result.push(arr[i]);
            }
        }
        console.log(result);
        //return result;
    })(['madam','dad','book','111']);

// // Return median of two sorted arrays of the same size.
console.log("Q5 . Median of two sorted arrays")
// // Anonymous function
let arr1 = [1,3,5,7,9];
let arr2 =[2,4,6,6,7];
let findMedianOfTwoSortedArrays=function(arr1,arr2){
  let arr=[...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = arr.length;
  return n%2===0 ? (arr[n/2]+arr[n/2-1])/2 : arr[Math.floor(n/2)]
}
console.log(findMedianOfTwoSortedArrays(arr1,arr2));

// // IIFE FUNCTION :- 
(function(arr1,arr2){
  let arr=[...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = arr.length;
  console.log(n%2===0 ? (arr[n/2]+arr[n/2-1])/2 : arr[Math.floor(n/2)]);
})([1,3,5,7,9],[2,4,6,6,7])


// // Remove duplicates from an array

// // Anonymous function

console.log("Q6. Remove duplicates from an array");
let duplicates=function(str){
    str = str.split(",");
    let dup = [...new Set(str)];
    console.log(dup);
  }
  duplicates("hi,hi,hi,who,who");

// // IIFE FUNCTION :- 

  (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

// //    // Rotate an array by k times
console.log("Q7. Rotate an array by k times")
// //    //ANONYMOUS FUNCTION
let rotateAnonymous= function (array,k)
{
  console.log(`Original Array :${array}`);

  for(let i=0;i<k;i++)
  {
   array.push(array.shift());
  }
 
  console.log(`Rotate Array : ${array}`)
}
rotateAnonymous([1,2,3,4,5],3);


// // // // IIFE FUNCTION :- 
(function(array,k)
{
  console.log(`Original Array :${array}`);

  for(let i=0;i<k;i++)
  {
   array.push(array.shift());
  
  }

  console.log(`Rotate Array : ${array}`)
})([1,2,3,4,5],3);
  


console.log(" 2 :-Do the below programs in ARROW functions.")

//  Print odd numbers in an array
console.log("ODD NUMBER")
let oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
         oddNumbers([1,2,3,4,5,6,7]);

// // Convert all the strings to title caps in a string array
console.log("Title Caps String")
let titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }  
  console.log(titleCase("hi this is priya")) ; 

// Sum of all numbers in an array
console.log("Sum of all numbers in an array")
let sumArrow=(array)=> {
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(sumArrow([1,2,3,4,5,6,7,8,9,12,15]));


// // Return all the prime numbers in an array
console.log("PRIME NUMBER")
let primeArrow=(numArray)=>{
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
primeArrow(([1,2,3,4,5,6,7,8,9]));
// // Return all the palindromes in an array
console.log("PALINDROME");
let paliArrow=(arr)=>
    {
       let result =[];
        for (let i = 0; i <arr.length; i++)
        {
            let data=arr[i].split("").reverse().join("");
            if(data===arr[i])
            {
             result.push(arr[i]);
            }
        }
        return result;
    }
    console.log(paliArrow(['madam','dad','book','111']));

