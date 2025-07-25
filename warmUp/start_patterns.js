//  n=4

// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "* ";
  }
  // console.log(row)
}

// *
// * *
// * * *
// * * * *

let n2 = 4;
for (let i = 0; i < n2; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "* ";
  }
  // console.log(row)
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4

let n3 = 5;
for (let i = 0; i < n3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1) + " ";
  }
  // console.log(row)
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n4 = 5;
for (let i = 0; i < n4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1) + " ";
  }
  // console.log(row)
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n5 = 5;
for (let i = 0; i <= n5; i++) {
  let row = "";
  for (let j = 0; j < n5 - i; j++) {
    row = row + (j + 1) + " ";
  }
  // console.log(row)
}

// * * * * *
// * * * *
// * * *
// * *
// *

let n6 = 5;
for (let i = 0; i < n6; i++) {
  let row = "";
  for (let j = 0; j < n6 - i; j++) {
    row = row + "* ";
  }
  // console.log(row)
}

// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

let n7 = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  for (k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  // console.log(row)
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0
let n8 = 5;

for (let i = 0; i < n8; i++) {
  let row = "";
  let toggle = 1
  for (j = 0; j < i + 1; j++) {
    row = row + toggle;
    if(toggle == 1){
        toggle = 0
    }else(
        toggle = 1
    )
  }
//   console.log(row);
}



// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
let n9 =6
 let toggle = 1;
for(let i=0; i<n; i++){
    let row = ""
    for(let j=0; j<i+1; j++){
        row = row + toggle
        if(toggle == 1){
            toggle = 0
        }else{
            toggle =1
        }
    }
    // console.log(row)
}