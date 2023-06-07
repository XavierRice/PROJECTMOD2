const  colors  = require("colors")
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
        inform(indexView.rainbow);
    break;

    case "show":                    //action?
        const showView = show(data, entry);
        inform(showView.green);
    break;

    case "create":                      // action & entry
        const createView = create(data, "name", "apple");  
        inform(createView);
    break;

    case "delete":                      //action
        const deleteView = toDelete(data, "hdQnW8dh"); 
        inform(deleteView)

    case "update":                          //action, entry and other?
        const updateView = updateItem(data,"lzS8uvAs", "name", "applen")
}}

run()