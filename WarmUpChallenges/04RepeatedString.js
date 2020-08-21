
/**
* Returns 
* @Date  21st Aug 2020
* @param {String}  
* @param {Integer - Number of char to consider} 
* @return {Integer - Number of A's}  
* 
*/

function repeatedString(s, n) {
    var noofAs = 0
    if (n >= s.length) {
        let occOfA = [...s].filter(e => e === "a").length;
        noofAs = Math.floor(n / s.length) * occOfA;
    }
    let taillength = n % s.length
    for (let i = 0; i < taillength; i++) {
        if (s[i] === 'a') {
            noofAs++
        }
    }
    return noofAs;
}