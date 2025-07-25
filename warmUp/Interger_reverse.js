function IsIntgerReverse(n){
    let copy =n;
    let rev =  0
    n = Math.abs(n);

    while(n>0){
        let rem = n%10;
        rev = rev*10+rem
        n= Math.floor(n/10);
    }
    let limit = 2**31
    if(rev > limit || rev < -limit) return 0
    return copy <0 ? -rev : rev

}

let num = 123;
let res = IsIntgerReverse(num)
console.log(res)