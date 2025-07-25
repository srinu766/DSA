for(let i=2; i<9; i=i+2){
    // console.log("hello word", i)
}




for(let i=5; i>0; i=i-1){
    // console.log("hello word", i)
}


for(let i=5; i<4; i++){
    // console.log("hello word", i)
}

// for(let i=1; i>0; i++){
    // console.log("hello word", i) //infinite loop (this loop never ends)
// }


const arr = [10, 3, 4, 6]
// console.log(arr.length)// 4  //js property
// console.log(arr[3])// 6
// console.log(arr[4])// underfined

for(let i=0; i<arr.length; i++){
    // console.log(arr[i]) 
}

// print all even numbers in console
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){  //even number check
        // console.log("even number: ",arr[i]);
    }
}


// print all odd numbers in console
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 !== 0){
        // console.log("odd number: ",arr[i]);
    }
}




// WHILE LOOP

let i=0;

while(i<5){
    // console.log("hell world", i);
    i++;
}