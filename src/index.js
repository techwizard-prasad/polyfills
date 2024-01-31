const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Example polyfills
const polyfills = {
  'Array.prototype.forEach': "./polyfills/forEach.js",
  "Array.prototype.map": "./polyfills/map.js",
  "Array.prototype.filter": './polyfills/filter.js',
  "Array.prototype.reduce": './polyfills/reduce.js',
  "Array.prototype.flat": './polyfills/flat.js',
  "Function.prototype.call": './polyfills/call.js',
  "Function.prototype.apply": './polyfills/apply.js',
  "Function.prototype.bind": './polyfills/bind.js',
  "lodash.cloneDeep": './polyfills/deepCopy.js',
};

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log("Select a polyfill to run:");
  Object.keys(polyfills).forEach((key, index) => {
    console.log(`${index + 1}. ${key}`);
  });

  const userInput = await askQuestion(
    "Enter the number of the polyfill to run: "
  );

  if (
    userInput &&
    parseInt(userInput) > 0 &&
    parseInt(userInput) <= Object.keys(polyfills).length
  ) {
    try {
      const selectedPolyfill = Object.keys(polyfills)[parseInt(userInput) - 1];
      const path = polyfills[selectedPolyfill];

      const polyfillModule = require(path);
      polyfillModule.runPolyfill();
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error(
      "Invalid polyfill choice. Please select a valid number from the menu."
    );
  }

  rl.close();
}

main();
