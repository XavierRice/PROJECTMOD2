const  colors  = require("colors")
const { writeJSONFile, readJSONFile } = require("./src/helpers")
const { newProduct } = require("./products")
const { index, show, create, toDelete, updateItem } = require("./src/controllers")
const { userProduct, writeCart } = require("./userCart")

let inform = console.log



function run(){
    const data = readJSONFile("./data", "data.json");
    data.push( newProduct());
    
    writeJSONFile("./data", "data.json", data);

    const newData = readJSONFile("./data", "cart.json")
    writeCart("./data", "cart.json", newData)
    
    inform("TEST APP GENERIC")
    
    const action = process.argv[2];
    const entry  = process.argv[3];
    const other = process.argv[4];
    const other2 = process.argv[5];

    switch(action) {

    case "index":
        const indexView = index(data);
        inform(indexView.rainbow);
    break;

    case "show":                    
        const showView = show(data, entry);
        inform(showView.green);
    break;

    case "create":                     
        const createView = create(data, entry , other, other2);  
        inform(createView);
    break;

    case "delete":                    
        const deleteView = toDelete(data, entry); 
        inform(deleteView)

    case "update":                         
        const updateView = updateItem(data, entry, other , other2)
}}

run()