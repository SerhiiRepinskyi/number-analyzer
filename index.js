import fs from "fs/promises";

async function readNumbersFromFile(filename) {
  const data = await fs.readFile(filename, "utf8");
  return data.trim().split("\n").map(Number);
}

function findMax(numbers) {
  return numbers.reduce((max, num) => (num > max ? num : max), -Infinity);
}

function findMin(numbers) {
  return numbers.reduce((min, num) => (num < min ? num : min), Infinity);
}

function findMedian(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const n = sorted.length;
  if (n % 2 === 0) {
    return (sorted[Math.floor(n / 2) - 1] + sorted[Math.floor(n / 2)]) / 2;
  } else {
    return sorted[Math.floor(n / 2)];
  }
}

function findMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function longestIncreasingSubarray(arr) {
  let maxLength = 1;
  let currentLength = 1;
  let maxStartIndex = 0;
  let currentStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = currentStartIndex;
      }
      currentLength = 1;
      currentStartIndex = i;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = currentStartIndex;
  }

  return arr.slice(maxStartIndex, maxStartIndex + maxLength);
}

function longestDecreasingSubarray(arr) {
  let maxLength = 1;
  let currentLength = 1;
  let maxStartIndex = 0;
  let currentStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = currentStartIndex;
      }
      currentLength = 1;
      currentStartIndex = i;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = currentStartIndex;
  }

  return arr.slice(maxStartIndex, maxStartIndex + maxLength);
}

async function main() {
  const filename = "data/10m.txt";
  const numbers = await readNumbersFromFile(filename);

  const maxNumber = findMax(numbers);
  const minNumber = findMin(numbers);
  const median = findMedian(numbers);
  const mean = findMean(numbers);
  const increasingSequence = longestIncreasingSubarray(numbers);
  const decreasingSequence = longestDecreasingSubarray(numbers);

  console.log(`Максимальне число: ${maxNumber}`);
  console.log(`Мінімальне число: ${minNumber}`);
  console.log(`Медіана: ${median}`);
  console.log(`Середнє арифметичне: ${mean}`);
  console.log(
    `Найбільша зростаюча послідовність: ${increasingSequence.join(", ")}`
  );
  console.log(
    `Найбільша спадна послідовність: ${decreasingSequence.join(", ")}`
  );
}

main();
