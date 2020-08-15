var fs = require("fs");
const environment = require('../src/environments/environment').environment

const oldVersion = '1.3';
const newVersion = '1.4';

const idStringToReplace = '<id_replaced_by_pre_prepare_script>';

const fileToEdit = `${__dirname}/file.json`

console.log('dir: ', __dirname)
console.log('env is : ', environment)
fs.readFile(fileToEdit, "utf-8", (err, data) => {

  console.log('current data: ', data);

  let newData = data.replace(idStringToReplace, environment.apiUrl)
  newData = newData.replace(oldVersion, newVersion)
  
  const bufferData = new Uint8Array(Buffer.from(newData));
  fs.writeFile(fileToEdit, bufferData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

});
