const arr = [1,2,3,4,-7,6];

let maxSoFar = null;
let max = null;

let tempStartIdx = 0;

let startMaxIdx = 0;
let endMaxIdx = 0;

for(let i = 0; i < arr.length; i++) {
  
  if(tempStartIdx === null) {
    tempStartIdx = i;
  }
  
  if(maxSoFar === null) {
    maxSoFar = arr[i];
  } else {
    maxSoFar += arr[i];
  }

  if(max === null || maxSoFar > max) {
    max = maxSoFar;
    endMaxIdx = i;
    startMaxIdx = tempStartIdx;
  }

  if(maxSoFar < 0) {
    maxSoFar = 0;
    tempStartIdx = null;
  }
}

console.log(max, startMaxIdx, endMaxIdx);
