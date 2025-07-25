function IsPolindrome(n){
    if(n<0) return false;
    let original = n;
    let rev = 0;

    while(n>0){
        rem = n%10;
        rev = rev*10 + rem
        n = Math.floor(n/10)
    }
    return original === rev

}

let n = 121
const res = IsPolindrome(n);
console.log(res)