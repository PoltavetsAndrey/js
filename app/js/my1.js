var price = prompt("What is Bitcoin price today?");
var money = prompt("How much $ do you have?");
var resultChange = money / price;
console.log(resultChange);
document.write("You can buy " + resultChange.toFixed(7) + " BTC");

