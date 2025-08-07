
let array = [7,1,5,3,6,4]
// let array = [7,6,4,3,1]

function maxProfit(prices) {
    let maxProfit = 0
    for(let i=0; i<prices.length;i++){
        for(j=i+1; j<prices.length;j++){
            if(prices[j] - prices[i] > maxProfit){
                maxProfit = prices[j]-prices[i]
            }
        }
    }
    return maxProfit
}

function maxProfit2(prices){
    let min = prices[0];
    let maxProfit =0;
    for(let i=0; i<prices.length; i++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min;
        }
        if(prices[i] < min){
            min = prices[i]
        }
    }
    return maxProfit

}

console.log("maxProfit1", maxProfit(array))
console.log("maxProfit2", maxProfit2(array))  // best approch 