# Shipment-to-Driver Assignment

## Program Description

The "Shipment-to-Driver Assignment" program is a command-line application designed to efficiently assign shipment destinations to drivers while maximizing the total suitability score for all shipments. The program reads shipment destinations and driver names from separate input files and applies a mathematical model to determine the best-suited driver for each shipment.

The algorithm takes into account factors such as:

- The length of the shipment destination's street name,
- The number of vowels or consonants in the driver's name, and
- Common factors between the lengths of the shipment and driver name.

The output provides the total suitability score and a matching between shipment destinations and drivers.

## How to Run the Program

1. Clone the repository to your local machine.

2. Ensure you have Node.js installed on your system.

3. Open a terminal or command prompt in the project's root directory.

4. Create two input files as follows(Note: you can use the files in the repo as an example):

   - Create a file named `shipments.txt` and add the street addresses of the shipment destinations, each on a new line.
   - Create a file named `drivers.txt` and add the names of the drivers, each on a new line.

5. Save the input files in the same directory as the `assignShipments.js` script.

6. Run the program by executing the following command in the terminal:

   node assignShipments.js

7. The program will process the input files, assign shipment destinations to drivers, calculate the total suitability score, and display the results in the console.

**Note:** The program assumes that the input files are correctly formatted with valid data. It does not handle malformed input and expects proper street addresses and driver names in the input files.
