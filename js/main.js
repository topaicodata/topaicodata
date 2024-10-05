//Lesson 1:
function solution(N) {
// Convert the number to binary and remove the '0b' prefix   
    let binaryRepresentation = N.toString(2);
// Split the binary representation by '1' to get segments of zeros
    let zeroSequence = binaryRepresentation.split(1);
// We use the slice method to consider only valid zero segments
    if (binaryRepresentation[binaryRepresentation.length - 1] === '0') {
        zeroSequence.pop();
    }
// Find the length of the longest sequence of zeros
    let binaryGap = zeroSequence.reduce((max, current) => {
        return Math.max(max, current.length);
    }, 0);
    return binaryGap;
}
console.log(solution('Biswash'));
console.log(solution(529));
console.log(solution(20));
console.log(solution(1041));
console.log(solution(32));

//algorithm
function newSolution(N) {
    let longestGap = 0;
    let currentGap = 0;
    let foundOne = false;
// Loop until N becomes 0
    while (N > 0) {
// Check the least significant bit        
        if (N & 1) {
// If we've found a '1' before            
            if (foundOne) {
// Update longest gap if the current gap is larger                
                longestGap = Math.max(longestGap, currentGap);
            }
// Reset current gap and mark that we've found a '1'            
            currentGap = 0;
            foundOne = true;
        } else {
 // If we encounter '0' after finding a '1', increment current gap           
            if (foundOne) {
                currentGap++;
            }
        }
// Right shift N to process the next bit        
        N >>= 1;
    }
    return longestGap;
}
console.log(solution(9));
console.log(solution(529));
console.log(solution(20));
console.log(solution(1041));
console.log(solution(32));


//Lesson 2:
function arraySolution(A, K) {
    let N = A.length;
// If the array is empty or K is 0, return the original array
    if (N === 0 || K === 0) {
        return A;
    }
// Normalize K to ensure we only rotate within the bounds of the array length
    K = K % N;
// Perform the rotation using array slicing
    return [...A.slice(-K), ...A.slice(0, N - K)];
}
console.log(arraySolution([3, 8, 9, 7, 6], 3));

//Part 2:
function oddArraySolution(A) {
    let unpaired = 0;
    for (let i = 0; i < A.length; i++) {
        unpaired ^= A[i];
    }
    return unpaired;
}
console.log(oddArraySolution([9, 3, 9, 3, 9, 7, 9]));

//Lesson 3:
function frogJmp(X, Y, D) {
// Calculate the distance needed to cover
    let distance = Y - X;
// Use Math.ceil to round up to the nearest whole number
// Calculate the minimum number of jumps needed
    let jumps = Math.ceil(distance / D);
    return jumps;   
}
console.log(frogJmp(10, 85, 30));

//Part 2:
function permMissingElem(A) {
    let N = A.length;
    let expectedSum = (N + 1) * (N + 2) / 2;
    let actualSum = A.reduce((sum, value) => sum + value, 0);
    return expectedSum - actualSum;
}
console.log(permMissingElem([2, 3, 1, 5]));

//Part 3:
class Minimize {
    minimize(A) {
//Array.prototype.reduce() method
        let totalSum = A.reduce((acc, num) => acc + num, 0);
        let leftSum = 0;
        let minDifference = Infinity;
//iterate
        for (let P = 0; P < A.length - 1; P++) {
            leftSum += A[P];
            let rightSum = totalSum -leftSum;
            let difference = Math.abs(leftSum - rightSum);
//track minimum difference
            minDifference = Math.min(minDifference, difference);
        }
        return minDifference
    }
}
let minimize = new Minimize();
let result = minimize.minimize([3, 1, 2, 4, 3]);
console.log(result);