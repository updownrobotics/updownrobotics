// Utility to read submissions from a file
const fs = require('fs');
const path = require('path');

function getSubmissions(file) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return [];
  }
}

module.exports = { getSubmissions };
