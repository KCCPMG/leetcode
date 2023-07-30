function myPowBrick(x: number, n: number): number {
  // n can be negative
  if (n == 0) return 1;
  // else return x * myPow(x, toZero(n));

  // copy n
  let pow: number = n;
  let total: number = 1;

  if (n > 0) {
    while (pow != 0) {
      total *= x;
      pow--;
    }
  } else {
    while (pow != 0) {
      total /= x;
      pow++;
    }
  }

  return total;
};

/**
 * given an integer, give the next number closest
 * to 0 i.e. 6 -> 5, or -6 -> -5
 * @param num: number (integer)
 */
function toZero(num: number): number {
  if (num < 0) return num+1;
  else if (num > 0) return num-1;
  else return 0;
}


function myPow(x: number, n: number): number {

  if (x == 1) return 1;
  else if (x == -1) {
    if (n % 2 == 0) return 1;
    else return -1;
  }

  if (n==0) return 1;
  else if (n<0) return (1/myPositivePow(x, -n));
  else if (n==1) return x;
  else return myPositivePow(x, n);
}

function myPositivePow(x: number, n: number): number {
  if (n==0) return 1;
  else if (n==1) return x;
  else {
    // what's the best way to break this up by n?
    // x ** n = (x ** n/2) * (x ** n/2)
    let chunkExponent: number = Math.floor(Math.sqrt(n));
    let remainderExponent: number = n - (2 * chunkExponent);
    let chunk = myPositivePow(x, chunkExponent);
    let remainderChunk: number = myPow(x, remainderExponent)
    return chunk * chunk * remainderChunk;
  }
}