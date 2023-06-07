const { faker } = require("@faker-js/faker")
const { nanoid } = require("nanoid")



function newProduct() {

    const newProduct = {

        name: faker.person.fullName(),

        id: nanoid(8),
        priceInCents: faker.commerce.price({ min: 5, max: 25, dec: 2, symbol: "$" }),
        inStock: faker.datatype.boolean(),
        newAlbum: faker.datatype.boolean(),
        image: null
    };
    return newProduct
};


//console.log(newProduct())

















module.exports = {
    newProduct
}