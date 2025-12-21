const arr = [1, 1, 0, 2, 1, 1, 1,1,1, 3, 1, 1, 1, 1];

function maxConsecutiveOnes(array) {
    let maxCount = 0, currentCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        }
        else {
            currentCount = 0
        }
    }
    console.log(maxCount);
}
maxConsecutiveOnes(arr);