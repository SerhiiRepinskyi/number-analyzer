# Number Analyzer

Number Analyzer is a program designed to analyze a set of integers from a file. It computes the following metrics:

- Maximum number
- Minimum number
- Median
- Arithmetic mean
- Longest increasing subsequence of numbers
- Longest decreasing subsequence of numbers

## Requirements

- Node.js (version 14 or newer)

## Installation

1. Clone or download the repository:

   ```sh
   git clone https://github.com/SerhiiRepinskyi/number-analyzer.git
   ```

2. Navigate to the project directory:

   ```sh
   cd number-analyzer
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Place your file containing numbers in the `data` directory. Each number should be on a separate line.
2. Edit `index.js` to specify the filename:

   ```javascript
   const filename = "data/your-file.txt";
   ```

3. Run the program:

   ```sh
   npm start
   ```

4. The program will output the analysis results to the console.

## Example

You can use the provided file `data/10m.txt` or your own file with numbers. Here's an example output of the program:

Maximum number: 999999

Minimum number: -999999

Median: 0

Arithmetic mean: 12345.67

Longest increasing subsequence: -4390, -503, 3, 16, 5032

Longest decreasing subsequence: 5032, 16, 3, -503, -4390

## Functions

- **readNumbersFromFile(filename)**: Reads numbers from a file.
- **findMax(numbers)**: Finds the maximum number.
- **findMin(numbers)**: Finds the minimum number.
- **findMedian(numbers)**: Computes the median.
- **findMean(numbers)**: Computes the arithmetic mean.
- **longestIncreasingSubarray(numbers)**: Finds the longest increasing subsequence.
- **longestDecreasingSubarray(numbers)**: Finds the longest decreasing subsequence.
