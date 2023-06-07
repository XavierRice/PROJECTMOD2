const  faker  = require("@faker-js/faker");
//const  colors = require("./node_modules/colors")
const { nanoid } = require("nanoid");

const inform = console.log;





function index(jsonData) {
    return jsonData.map((eachThing) => eachThing.name + " " + eachThing.id + " " + eachThing.priceInCents).join("\n");
};   // using .map to return an array of the name, id and price of each item in the jsonList

function show(jsonData, thingId) {
    const thing = jsonData.find((eachThing) => eachThing.id === thingId);  // using .find && the id to location the object.
    return thing ? thing.id + " " + thing.name + " " + thing.image : "Item not Found" // using a ternary to return the name/id/image 
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
        const nowDeleted = jsonData.slice(index, index + 1); // using slice which requires an index. 
        jsonData.filter((eachThing) => eachThing.id !== thingId)
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











module.exports = {

    index,
    show,
    create,
    toDelete,
    updateItem

}