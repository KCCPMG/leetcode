/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  if (prices.length === 1) return 0;
  
  let max = 0;

  for (let leftIndex=0; leftIndex<prices.length; leftIndex++) {
    let leftValue = prices[leftIndex];
    for (let rightIndex=leftIndex+1; rightIndex<prices.length; rightIndex++) {
      let rightValue = prices[rightIndex];
      let split = rightValue - leftValue;
      if (split > max) max = split;
    }
  }

  return max;
  
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  const hashmap = {};
  for (let i=0; i<prices.length; i++) {
    if (hashmap[prices[i]]) {
      hashmap[prices[i]].push(i);
    } else {
      hashmap[prices[i]] = [i];
    }
  }


  let uniquePrices = Object.keys(hashmap)
    .map(char => +char)
    .sort((a,b) => a-b);

  console.log(uniquePrices);

  let max = 0;
  let leftIndex = 0;
  let rightIndex = uniquePrices.length-1;

  while (leftIndex < rightIndex) {

    let rightValue = uniquePrices[rightIndex];
    let leftValue = uniquePrices[leftIndex];

    let nextRight = uniquePrices[rightIndex-1];
    let nextLeft = uniquePrices[leftIndex+1];

    let current = rightValue-leftValue;
    if (current >= max) {
      let earliestBuyDate = Math.min(...hashmap[leftValue]);
      let latestSellDate = Math.max(...hashmap[rightValue]);
      console.log("current > max:", {"hashmapLeft": hashmap[leftValue], "hashmapRight": hashmap[rightValue], earliestBuyDate, latestSellDate});
      if (earliestBuyDate < latestSellDate) {
        max = Math.max(current, max);
      }
    } 

    console.log({
      leftIndex, rightIndex, leftValue, rightValue, max
    })

    if ((nextRight - leftValue) > (rightValue - nextLeft)) {
      rightIndex--;
    } else leftIndex++;

  }

  return max;

  // return max;

  // let highest = Math.max(uniquePrices);
  // let lowest = Math.min(uniquePrices);

  // if (Math.max(hashmap[highest]) > Math.min(hashmap[lowest])) return (highest-lowest);

}


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let checks = [];

  let lowest = 10001;
  let highest = -10001;

  for (let price of prices) {
    if (price < lowest) {
      lowest = price;
      checks.push({lowest, highest, difference: highest-lowest})
    } 
    if (price > highest) {
      highest = price;
      checks.push({lowest,highest, difference: highest-lowest})
    }
  }

  console.log(checks);

  return Math.max(0, ...(checks.map(ch => ch.difference)));

}


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  const filtered = [];
  let lowest = 10001;
  let highest = -10001;

  for (let price of prices) {
    if (price < lowest) {
      lowest = price;
      filtered.push(price);
    } 
    if (price > highest) {
      highest = price;
      filtered.push(price);
    }
  }



}





/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  const pairs = [];
  let lowest = prices[0];
  let highest = prices[0];

  for (let price of prices) {

    console.log(price, price < lowest)

    if (price > highest) {
      highest = price;
    }
    if (price < lowest) {
      pairs.push([lowest, highest]);
      lowest = price;
      highest = price;
    }
  }

  pairs.push([lowest, highest])

  let max=0;

  console.log(pairs);

  for (let i=0; i<pairs.length; i++) {

    let thisLowest = pairs[i][0];

    let higherNumbers = pairs.slice(i).map(p => p[1])

    let availHighest = Math.max(...higherNumbers);

    console.log({thisLowest, higherNumbers, availHighest})

    max = Math.max(max, (availHighest - thisLowest))


  }

  return max;
}
