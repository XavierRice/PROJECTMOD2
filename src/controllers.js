const {readCart, writeCart, writeJSONFile} = require("./helpers")
const userData = readCart("./data", "cart.json")
const  faker  = require("@faker-js/faker");
const  colors = require("colors")
const { nanoid } = require("nanoid");

const inform = console.log;



function index(jsonData) {
    return jsonData.map((eachThing) => eachThing.name + "   " + eachThing.id + "   " + eachThing.priceInCents).join("\n");
};   // using .map to return an array of the name, id and price of each item in the jsonList

function show(jsonData, thingId) {
    const thing = jsonData.find((eachThing) => eachThing.id === thingId);  // using .find && the id to location the object.
    return thing ? thing.id + " " + thing.name + " " + thing.priceInCents : "Item not Found" // using a ternary to return the name/id/image 
};                                                                 // or returning an error message.

function create(jsonData, key, value, value2) {
    let thingCreator = { };  // creating an empty object. 
    if (jsonData.some((eachThing => eachThing.hasOwnProperty(key)))) {   // using some to see if the key entered is available 
        thingCreator[key] = value // if it is available setting that as a key and value
       thingCreator.id = nanoid(9) // added an id with 9 digits instead of 8 so it could be located later
       thingCreator.location = value2
    } else {
        throw colors.red.underline("You're entry is unacceptable")   // using throw to return what was given and give a status reply
    };
    jsonData.push(thingCreator)  // pushing into the data array
    return thingCreator   // returning created item.
};

function toDelete(jsonData, thingId) {  // function takes two values the data and the id 
    const index = jsonData.findIndex((eachThing) => eachThing.id === thingId);   // using findIndex to A. get an index for slicing and b. to get a negative value if it's not found.
    console.log(index)
    if (index !== -1) {   // if not -1  ** maybe try/catch?  
        const nowDeleted = jsonData.slice(index, index + 1); // using slice which requires an index. I the slice want to include the index and stop at what immediatly follows it!
        jsonData.filter((eachThing) => eachThing.id !== thingId) // making sure there are no duplicates by filter anythings that's NOT the id given.
        writeJSONFile("./data", "data.json", jsonData)  // putting that data back into the json file
        inform("Say Good-Bye to:", nowDeleted)   // returning the deleted value for confirmation. 
    } else {
        inform("No item found")
    };
};

function updateItem(jsonData, thingId, key, entry) { //takes 4 arguements ** maybe to many? 
    const tobeUpdated = jsonData.find((eachThing) => eachThing.id === thingId); // using find again to locate the obj.
    if (tobeUpdated !== undefined) {  // find returns undefined if not found 
        if (tobeUpdated[key] !== undefined) {  // checking to see if they key works.
            tobeUpdated[key] = entry
        } else {
            throw colors.red.underline("you're entry is unacceptable")  // using a throw for stretch goals? 
        };
        inform("Is now Updated:", tobeUpdated)
    };
};

function deliver(jsonData){
    const filtered = jsonData.slice().filter((eachThing) => eachThing.location = true);   // using slice so i won't mutate my data. and filter to exlude all falsey values
    const delivery = filtered.map(eachThing => eachThing.name + "  " + eachThing.id + "   $" + eachThing.priceInCents); // using .map to return an array of the names, id's and prices of deliverable fish.
    return (delivery.length > 0) ? delivery : "We have no deliveries today!";  // a ternary if there an array in deliver, return or toss err. 
};

function total(userData){                               // When I did this function i should have noticed the "mistake" i made by using faker data and ending up with strings for PriceInCents
    let total = 0
    for ( let fish of userData){
        let price = fish.split("$")                     // I though i was being clever by splitting it by the $ sign and dealing with the number as an indvidual string and calling Number on it.
      if(price[1] > 0 )                                 // making this line a sloppy but effective line. 
        total += Number(price[1])
    };
    return total.toFixed(2)
};

function cancel(){
const emptyCart = [];           // making an empty array for the cart
const emptyJson = writeCart("./data", "cart.json", emptyCart)  // writting that array into the jsno with a callback function.
return "Your Cart has been emptied!"
}

function cheapFish(jsonData, num){
  const fishList = jsonData.slice().filter((eachFish) => parseFloat(eachFish.priceInCents) < num)  //used slice to keep from mutating the array. Since my PriceInCents is a string I used parseFloat to convert the string into a floating Point number.
}


module.exports = {

    index,
    show,
    create,
    toDelete,
    updateItem,
    deliver,
    total,
    cancel,
    cheapFish
    
    

}