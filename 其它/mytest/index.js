const deepObj = (myobj) => {
    if( typeof(myobj) != 'object' || typeof(myobj) == null){
        return myobj;
    }
    let _newObj = Array.isArray(myobj) ? [] : {}
    for(let key in myobj){
        _newObj[key] = deepObj(myobj[key])
    }
    return _newObj
}   

const myobj = {
    name:'test',
    test:function(){

    },
    calcname:{name:'123'}
}

const name = '123'

const newObj = deepObj(myobj)
const newObj123 = deepObj(name)
console.log(newObj);
console.log(newObj123);

myobj.name = '888'
newObj.name = '999'

console.log(myobj);
console.log(newObj);