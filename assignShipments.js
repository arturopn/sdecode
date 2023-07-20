// assignShipments.js

const helpers = require('./helpers');

// Main function to assign shipments to drivers and calculate the total suitability score
function assignShipments() {
  const shipments = helpers.readDataFromFile('shipments.txt');
  const drivers = helpers.readDataFromFile('drivers.txt');

  const shipmentDriverMatches = [];
  let totalSuitabilityScore = 0;

  shipments.forEach((shipment, index) => {
    const streetName = shipment.split(' ')[1]; // Extracting the street name part
    let maxSuitabilityScore = -1;
    let selectedDriver = '';

    drivers.forEach(driver => {
      const suitabilityScore = helpers.calculateSuitabilityScore(streetName, driver);
      if (suitabilityScore > maxSuitabilityScore) {
        maxSuitabilityScore = suitabilityScore;
        selectedDriver = driver;
      }
    });

    shipmentDriverMatches.push({ shipment: streetName, driver: selectedDriver });
    totalSuitabilityScore += maxSuitabilityScore;
  });

  console.log('Total Suitability Score:', totalSuitabilityScore);
  console.log('Matching between shipment destinations and drivers:');
  shipmentDriverMatches.forEach(match => {
    console.log(match.shipment, '->', match.driver);
  });
}

// Run the main function
assignShipments();
