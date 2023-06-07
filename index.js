const { writeJSONFile, readJSONFile } = require("./src/helpers")
const { newProduct } = require("./products")
const { index, show, create, toDelete, updateItem } = require("./src/controllers")

let inform = console.log



function run(){
    const data = readJSONFile("./data", "data.json");
    data.push(newProduct());
    
    writeJSONFile("./data", "data.json", data);
    
    
    inform("TEST APP GENERIC")
    
    const action = process.argv[2];
    const entry  = process.argv[3];

switch(action) {

    case "index":
        const indexView = index(data);
        inform(indexView);
    break;

    case "show":
        const showView = show(data, action);
        inform(showView);
    break;

    case "create":
        const createView = create(data, action, entry);
        inform(createView);
    break;

    case "delete":
        const deleteView = toDelete(data, action, entry);
        inform(deleteView)


}

















}

run()