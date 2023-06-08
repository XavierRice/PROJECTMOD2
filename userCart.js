const { nanoid } = require("nanoid")
const fs =require("fs");


function userFish() {
    
    
    const name = process.argv[3];
    const price = process.argv[4];
    const location = process.argv[5]; 
   
   
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


//const newData = [];
//newData.push(userFish())
//writeCart("./data", "cart.json", newData)



module.exports = {
  
    userFish,
    writeCart,
    readCart
}