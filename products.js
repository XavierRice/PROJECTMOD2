const { faker } = require("@faker-js/faker")
const { nanoid } = require("nanoid")



function newProduct() {

    const newProduct = {

        name: faker.animal.fish(),

        id: nanoid(8),
        priceInCents: faker.commerce.price({ min: 5, max: 25, dec: 2, symbol: "$" }),
        inStock: faker.datatype.boolean(),
        delivery: faker.datatype.boolean(),
        image: null
    };
    return newProduct    //push somewhere!!!
};




















module.exports = {
    newProduct
}