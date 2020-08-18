
 /**
* Returns 
* @Date  18th Aug 2020
* @param {Integer - Number of elements in arr} 
* @param {Array}  
* @return {Integer - Number of Pairs}  
* 
*/
const sockMerchant = (n,sockArr) => {

    let numberOfPairs = 0;
    let sockMap = {};

    for(const sock of sockArr){
        sockMap[sock] = (sockMap[sock] || 0) +1
    }

    numberOfPairs = Object.values(sockMap).reduce((acc,cv) =>{
        return acc + Math.floor(cv/2);
    },0)

    return numberOfPairs

}