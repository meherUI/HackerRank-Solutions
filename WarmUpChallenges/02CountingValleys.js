
/**
* Returns 
* @Date  19th Aug 2020
* @param {Integer - Number of elements in arr} 
* @param {String}  
* @return {Integer - Number of Valleys}  
* 
*/

const countingValleys = (n, s) => {
    let valleys = 0;
    let prevState = 0;
    let currentState = 0;

    s.split('').forEach((cv,i) =>{
        prevState = currentState;
        cv == "U" ? currentState +=1 : currentState -=1;
        if(prevState == 0 && currentState <0){
            valleys +=1        
        }
    })

    return valleys


}