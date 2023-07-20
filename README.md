Program Description
The "Shipment-to-Driver Assignment" program is a command-line application designed to efficiently assign shipment destinations to drivers while maximizing the total suitability score for all shipments. The program reads shipment destinations and driver names from separate input files and applies a mathematical model to determine the best-suited driver for each shipment. The algorithm takes into account factors such as the length of the shipment destination's street name, the number of vowels or consonants in the driver's name, and common factors between their lengths. The output provides the total suitability score and a matching between shipment destinations and drivers.

How to Run the Program
Clone the repository to your local machine.

Ensure you have Node.js installed on your system.

Open a terminal or command prompt in the project's root directory.

Create two input files as follows:

Create a file named shipments.txt and add the street addresses of the shipment destinations, each on a new line.
Create a file named drivers.txt and add the names of the drivers, each on a new line.
Save the input files in the same directory as the assignShipments.js script.

Run the program by executing the following command in the terminal:

Copy code
node assignShipments.js

The program will process the input files, assign shipment destinations to drivers, calculate the total suitability score, and display the results in the console.

Note: The program assumes that the input files are correctly formatted with valid data. It does not handle malformed input and expects proper street addresses and driver names in the input files.

Feel free to modify the input files or the shipment-to-driver assignment algorithm to suit your specific use case. Happy shipping!
