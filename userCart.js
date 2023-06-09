const { nanoid } = require("nanoid")
const fs =require("fs");




function userFish(name, price , location) {
    

    const userFish = {

        name: name,
        id: nanoid(10),
        priceInCents: price, // considered using Number() to make it a make sure it returned a "number" quality but sometimes gave me null.
        location: location,
        
        
    };
    return userFish;
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






module.exports = {
  
    userFish,
    writeCart,
    readCart
}