function countDigits(n){
    if(n==0){
        return 1;
    }
    n = Math.abs(n) // converting negative numbers to positive 
    let count = 0;
    while(n>0){
        n = Math.floor(n/10)
        count++
    }
    return count
}


let num = -259;
const result = countDigits(num);
console.log(result)