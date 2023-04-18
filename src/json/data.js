const fs = require('fs');

// Step 1: Read the existing JSON file
const data = fs.readFileSync('test.json');
const jsonData = JSON.parse(data);

// Step 2: Add new data to the object
jsonData.newProperty = 'new value';

// Step 3: Convert the object back to a JSON string
const updatedJsonString = JSON.stringify(jsonData);

// Step 4: Write the updated JSON string back to the file
fs.writeFileSync('test.json', updatedJsonString);

console.log('JSON data updated');
