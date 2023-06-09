const fs =require("fs");






function readJSONFile(path, fileName){ 
    const data = fs.readFileSync(`${path}/${fileName}`, {encoding: "utf-8"});
    console.log(data)
    return data ? JSON.parse(data): [];

};

function writeJSONFile(path, fileName, newData){
    const jsonData = JSON.stringify(newData, null, 2)
    return fs.writeFileSync(`${path}/${fileName}`, jsonData, {encoding: "utf-8"})
};


function writeCart(path, fileName, newData){
    const jsonCart = JSON.stringify(newData, null, 2)
    return fs.writeFileSync(`${path}/${fileName}`, jsonCart, {encoding: "utf-8"})
};


function readCart(path, fileName){ 
    const cartData = fs.readFileSync(`${path}/${fileName}`, {encoding: "utf-8"});
    console.log(cartData)
    return cartData ? JSON.parse(cartData): [];
};



























module.exports = {
    readJSONFile,
    writeJSONFile,
    writeCart,
    readCart

}