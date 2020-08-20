
/**
* Returns 
* @Date  20th Aug 2020
* @param {Array} 
* @return {Integer - Number of Minimal Jumps}  
* 
*/

const jumpingOnClouds = (c) => {
   let jumps = -1;
   let skipped = null;

   c.forEach((cv,i)=>{
       if(cv == 0 && i != skipped ){
           jumps++
           if(c[i+1]==0 && c[i+2] == 0){
               skipped = i+1;
           }
       }
   })
    return jumps
}