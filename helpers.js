// helpers.js

const fs = require('fs');

// Function to calculate the suitability score for a given shipment and driver
function calculateSuitabilityScore(shipment, driver) {
  const shipmentLength = shipment.replace(/[^a-zA-Z]/g, '').length;
  const driverLength = driver.replace(/[^a-zA-Z]/g, '').length;

  let baseScore;
  if (shipmentLength % 2 === 0) {
    baseScore = (driver.match(/[aeiouAEIOU]/g) || []).length * 1.5;
  } else {
    baseScore = (driver.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
  }

  const commonFactors = getCommonFactors(shipmentLength, driverLength);

  if (commonFactors.length > 0) {
    baseScore *= 1.5;
  }

  return baseScore;
}

// Function to find common factors of two numbers
function getCommonFactors(a, b) {
  const factorsA = getFactors(a);
  const factorsB = getFactors(b);
  return factorsA.filter(factor => factorsB.includes(factor));
}

// Function to get factors of a number
function getFactors(num) {
  const factors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

// Function to read data from file and split lines into an array
function readDataFromFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8').trim().split('\n');
}

module.exports = {
  calculateSuitabilityScore,
  getCommonFactors,
  getFactors,
  readDataFromFile,
};
