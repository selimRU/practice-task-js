var prices = [10, 20, 30, 50, 80, 90, 150, 200, 300, 400, 500,]
for(let i = 0; i < prices.length; i++){
    var price = prices[i]
    if(price >=200){
        continue
    }
    console.log(price);
}