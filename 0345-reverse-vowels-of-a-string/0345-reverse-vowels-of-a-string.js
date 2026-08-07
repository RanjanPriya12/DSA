/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = "aeiouAEIOU";

    let arr = s.split("");

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {

        while (low < high && !vowels.includes(arr[low])) {
            low++;
        }

        while (low < high && !vowels.includes(arr[high])) {
            high--;
        }

        [arr[low], arr[high]] = [arr[high], arr[low]];

        low++;
        high--;
    }

    return arr.join("");
};