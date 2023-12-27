// 5 3  1-5 

function calcListArr(maxNum,digit){
    let result = [];
    function generateNumber(index,prevArr){
        if(index > digit){
            return;
        }
        for(var i=1;i<=maxNum;i++){
            if(index == 1){
                let itemArr = [];
                itemArr.push(i);
                generateNumber(index + 1,itemArr);
            }else if(index == digit){
                let newArr = JSON.parse(JSON.stringify(prevArr));
                newArr.push(i);
                result.push(newArr);
            }else{
                if(i != 1){
                    prevArr.pop();
                }
                prevArr.push(i);
                generateNumber(index + 1,prevArr);
            }
        }
    }
    generateNumber(1,[]);
    return result;
}

calcListArr(5,3);