const { writeJSONFile, readJSONFile } = require("./src/helpers")
const { newProduct } = require("./products")
const { index, show, create, toDelete, updateItem } = require("./src/controllers")
const { userProduct, writeCart } = require("./userCart")

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
        const showView = show(data, "lzS8uvAs");
        inform(showView);
    break;

    case "create":
        const createView = create(data, "id", "apple");  
        inform(createView);
    break;

    case "delete":
        const deleteView = toDelete(data, "hdQnW8dh"); 
        inform(deleteView)

    case "update":
        const updateView = updateItem(data,"lzS8uvAs", "id", "applen")
};

}

run()