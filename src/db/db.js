const fs = require('fs');
const path = require('path');

const readJSON = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeJSON = (fileName, data) => {
  const filePath = path.join(__dirname, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = { readJSON, writeJSON };