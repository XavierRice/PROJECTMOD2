const { nanoid } = require("nanoid")


function userProduct() {

    const userProduct = {

        name: null,
        id: nanoid(9),
        priceInCents: null,
        inStock: null,
        newAlbum: null,
        
    };
    return userProduct;
};



// function writeCart(path, fileName, newData){
//     const jsonCart = JSON.stringify(newData, null, 2)
//     return fs.writeFileSync(`${path}/${fileName}`, cart, {encoding: "utf-8"})
// };


// function readCart(path, fileName){ 
//     const cartData = fs.readFileSync(`${path}/${fileName}`, {encoding: "utf-8"});
//     console.log(cartData)
//     return cartData ? JSON.parse(cartData): [];
// }

// module.exports = {
  
//     userProduct,
//     writeCart,
//     readCart
// }