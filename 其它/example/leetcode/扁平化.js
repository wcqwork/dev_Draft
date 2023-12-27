let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]
// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     // 结果 ,,,
//                 ]
//             }
//         ]
//     }
// ]

// let handlerFlat = function(arr){
//     let newArr = [];
//     // 1、按pid排序
//     newArr = handlerSortPid(arr);
//     // 2、动态创建扁平新数组

// }

// // 按pid排序
// let handlerSortPid = function(arr){
//    return arr.sort(function(prev,next){
//         return prev.pid - next.pid
//     })
// }


/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
    for (const item of data) {
        if (item.pid === pid) {
            const newItem = { ...item, children: [] };
            result.push(newItem);
            getChildren(data, newItem.children, item.id);
        }
    }
}

/**
* 转换方法
*/
const arrayToTree = (data, pid) => {
    const result = [];
    getChildren(data, result, pid)
    return result;
}

arrayToTree(arr,0);