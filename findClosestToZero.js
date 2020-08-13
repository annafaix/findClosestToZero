let ts = [7,-10,13,8,4,-7.2,-12,-3.7,3.5,-9.6, 6.5,-6.2, -1.7, -1.7];
let ts2 = [7,-10,13,8,4,-7.2,-12,-3.7,-3.5,-9.6, 3.5, 6.5,-6.2, -3.5];

// Function to find value closest to zero

let closestToZero = (ts) => 
{
  // Variable for a smallest value - starting with first value in array
  let smallestVal = ts[0];
  let result;

  // Do linear search in for-loop
  for (let i = 0; i < ts.length; i++) 
  {
    if ( Math.abs(ts[i]) < Math.abs(smallestVal)) {
      smallestVal = ts[i];
      result = smallestVal;
    }
    // if the values are equal ? return the positive value
    else if (Math.abs(ts[i]) == Math.abs(smallestVal)) {
      (ts[i] > 0) ? result = ts[i] : result = smallestVal;
    }
  }
  return result;
}

closestToZero(ts);