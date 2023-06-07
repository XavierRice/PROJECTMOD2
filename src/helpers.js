const fs =require("fs")






function readJSONFile(path, fileName){ 
    const data = fs.readFileSync(`${path}/${fileName}`, {encoding: "utf-8"});
    console.log(data)
    return data ? JSON.parse(data): [];

};

function writeJSONFile(path, fileName, newData){
    const jsonData = JSON.stringify(newData, null, 2)
    return fs.writeFileSync(`${path}/${fileName}`, jsonData, {encoding: "utf-8"})
};









//console.log(readJSONFile("./data", "data.json"))


















module.exports = {
    readJSONFile,
    writeJSONFile
}