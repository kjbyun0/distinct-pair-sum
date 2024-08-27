// function distinctPairSum(arr, k) {
//   // type your code here
//   const res = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i-1] + arr[i] === k) {
//       let inRes = false;
//       for (const pair of res) {
//         if ((pair[0] === arr[i-1] && pair[1] === arr[i]) || 
//             (pair[0] === arr[i] && pair[1] === arr[i-1])) 
//           inRes = true;
//           break;
//       }
//       if (!inRes)
//         res.push([arr[i-1], arr[i]]);
//     }
//   }

//   return res;
// }

function distinctPairSum(arr, k) {
  // type your code here
  const res = {};

  arr.slice(0, -1).forEach((num, i) => {
    if (num + arr[i+1] === k && 
      res[num] === undefined && 
      res[arr[i+1]] === undefined) 
      res[num] = [num, arr[i+1]];
  })

  return Object.values(res);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");
  console.log("Expecting: '[]'");
  console.log("=>", distinctPairSum([], 1));

  console.log("");
  console.log("Expecting: '[]'");
  console.log("=>", distinctPairSum([1], 1));

  console.log("");
  console.log("Expecting: '[]'");
  console.log("=>", distinctPairSum([1, 2], 2));

  console.log("");
  console.log("Expecting: '[[1, 2]]'");
  console.log("=>", distinctPairSum([1, 2], 3));

  console.log("");
  console.log("Expecting: '[[1, 2]]'");
  console.log("=>", distinctPairSum([1, 2, 1], 3));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
