const inform = console.log





function index(jsonData) {
    return jsonData.map((eachThing) => eachThing.name + " " + eachThing.id + " " + eachThing.priceInCents).join("\n");
};

function show(jsonData, thingId) {
    const thing = jsonData.find((eachThing) => eachThing.id === thingId);
    return thing.id + " " + thing.name + " " + thing.points + " points";
};

function create(jsonData, key, entry) {
    const thingCreator = { key: entry };
    jsonData.push(thingCreator);
    return thingCreator;
};

function toDelete(jsonData, thingId) {
    const index = jsonData.findIndex((eachThing) => eachThing.id === thingId);
    if (index !== -1) {
        const nowDeleted = jsonData.slice(index, index + 1);
        jsonData.filter((eachThing) => eachThing.id !== thingId)
        inform("Say Good-Bye to:", nowDeleted)
    } else {
        inform("No item found")
    };
};

function updateItem(jsonData, thingId, action, entry){
    const tobeUpdated = jsonData.find((eachThing) => eachThing.id === thingId);
    if(tobeUpdated !== undefined){
     if ( tobeUpdated[key] !== undefined){
        tobeUpdated[action] = entry
     };
    };
    inform("Is now Updated:", tobeUpdated)
};











module.exports = {

    index,
    show,
    create,
    toDelete,
    updateItem

}