/**
* Returns 
* @Date 24th Aug 2020
* @param {Array - Elements in arr} 
* @param {Number - Number of Rotations}  
* @return {}  
* 
*/

function rotLeft(a, d) {
    var result = [...a.slice(d), ...a.slice(0, d)];
    return result;
}


/* Without Constraint of  rotation number
    function Rotation(rotations,arr){
    if(arr.length == rotations ||  rotations %arr.length == 0){
        console.log(arr.join(' '))
    }
    else{
        var rotatedArray = arr.slice(0,rotations);
        var slicedArray = arr.slice(rotations,arr.length);
        var concatArray = slicedArray.concat(rotatedArray);
        if(arr.length > rotations){
            console.log(concatArray.join(' '));
        }else if(arr.length < rotations){
            rotations = rotations %arr.length;
            return Rotation(rotations,arr)
        }

    }
}

Rotation(11,[1,2,3,4,5,6])
*/