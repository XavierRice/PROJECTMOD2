const  colors  = require("colors")
const { writeJSONFile, readJSONFile, writeCart, readCart } = require("./src/helpers")
const { newProduct } = require("./products")
const { index, show, create, toDelete, updateItem, deliver, total, cancel, cheapFish  } = require("./src/controllers")
const { userFish } = require("./userCart")

let inform = console.log



function run(){
    
    const data = readJSONFile("./data", "data.json");
    data.push(newProduct());
    
    const userData = readCart("./data", "cart.json");
    // writeCart("./data", "cart.json", userData);
    
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
            
            case "show":                  //fish-id  
            const showView = show(data, entry);
            inform(showView.green);
            break;
            
            case "create":            //  key  //value of the key and location           
            const createView = create(data, entry , other, other2);  
            data.push(createView)
            writeJSONFile("./data", "data.json", data);
            inform(createView);
            break;
            
            case "delete":             // needs work!.       
            const deleteView = toDelete(data, entry); 
            inform(deleteView)
            break;
            
            case "update":                         
            const updateView = updateItem(data, entry, other , other2)
            inform(updateView);
            writeJSONFile("./data", "data.json", data);
            break;
            
            case "deliver":
            const delivery = deliver(data);
            inform(delivery)
            break;
                
            case "gofish":
            const newFish = userFish(entry, other, other2)
            userData.push(newFish)
            inform(newFish)
            break;

            case "basket":
            const theBasket = show(data, entry)
            theBasket === "Item not Found" ? " Item not found" : 
            userData.push(theBasket)
            writeCart("./data", "cart.json", userData)
            inform(theBasket.bgBlue)
            break;

            case "total":
            const theTotal = total(userData)
            inform( "Your total Comes To",theTotal)
            break; 

            case "cancel":
            const emptied = cancel()
            inform(emptied);
            break;

            // case "discount":
            // const discount = cheapFish(data, entry)
            // inform(discount)
            // break;
         }};

                
            

run()