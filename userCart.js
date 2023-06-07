const { nanoid } = require("nanoid")
const fs =require("fs");

const name = process.argv[2];
const price = process.argv[3];
const deliver = process.argv[4]; //boolean

function userProduct() {

    const userProduct = {

        name: process.argv[2],
        id: nanoid(10),
        priceInCents: Number(process.argv[3]),
        deliver: true,
        
        
    };
    return userProduct;
};


function writeCart(path, fileName, newData){
    const jsonCart = JSON.stringify(newData, null, 2)
    return fs.writeFileSync(`${path}/${fileName}`, jsonCart, {encoding: "utf-8"})
};


function readCart(path, fileName){ 
    const cartData = fs.readFileSync(`${path}/${fileName}`, {encoding: "utf-8"});
    console.log(cartData)
    return cartData ? JSON.parse(cartData): [];
}
const newData = [];
newData.push(userProduct())
writeCart("./data", "cart.json", newData)

module.exports = {
  
    userProduct,
    writeCart,
    readCart
}