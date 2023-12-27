var isSymmetric = function (root) {
    let queue = [];
    queue.push(root);
    queue.push(root);
    while (queue.length > 0) {
        let q = queue.shift();
        let v = queue.shift();

        if(q == null && v == null){
            continue;
        }
        if((q == null || v == null) || (q.val != v.val)){
            return false;
        }
        queue.push(q.left);
        queue.push(v.right);

        queue.push(q.right);
        queue.push(v.left);
    }
    return true;
};