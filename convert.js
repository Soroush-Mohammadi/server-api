const fs = require('fs');

const jsObject = require("./newCategories.js");
const jsonString = JSON.stringify(jsObject, null, 2); // Beautify JSON with 2-space indentation

fs.writeFile('./output.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    console.log('JSON file has been saved.');
});