const itemPrice = [102, 30, 165, 342, 109]
let initialCartValue = 0

let totalCartValue = itemPrice.reduce(function(acc, curPrice){
    return acc + curPrice
}, initialCartValue)

console.log(totalCartValue);

// ++++++++++++++++++++++++++++++++++++++++++++++

initialCartValue = totalCartValue
const newitemPrice = [302, 543, 82, 112]
totalCartValue = newitemPrice.reduce((acc, curPrice) => acc+curPrice, initialCartValue)
console.log(totalCartValue);

// ++++++++++++++++++++++++++++++++++++++++++++

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);