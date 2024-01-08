class AdjoinMatrix {
    constructor(vertx) {
        this.vertex = vertx;
        this.quantity = this.vertex.length;
        this.adjoinArray = [];
        this.init();
    }
    // 初始化数组
    init() {
        this.adjoinArray = Array(this.quantity * this.quantity).fill(0);
    }
    /*
     * @param id string
     * @param sides Array<string>
     *  传入一个顶点，和当前顶点可达的顶点数组，将对应位置设置权值
     */
    setAdjoinVertexs(id, sides, weight) {
        const pIndex = this.vertex.indexOf(id);
        sides.forEach((item) => {
            const index = this.vertex.indexOf(item);
            const cur = this.adjoinArray[pIndex * this.quantity + index];
            if (typeof cur !== 'number') { // specList.length > 3时，存在单边多权的情况
                this.adjoinArray[pIndex * this.quantity + index].push(weight);
            }
            else if (cur > 1) {
                this.adjoinArray[pIndex * this.quantity + index] = [cur, weight];
            }
            else {
                this.adjoinArray[pIndex * this.quantity + index] = weight;
            }
        });
    }
    /*
     * @param id string
     * 传入顶点的值，获取该顶点的列
     */
    getVertexCol(id) {
        const index = this.vertex.indexOf(id);
        const col = [];
        this.vertex.forEach((item, pIndex) => {
            col.push(this.adjoinArray[index + this.quantity * pIndex]);
        });
        return col;
    }
    /*
     *  @param params Array<string>
     * 传入一个顶点数组，求出并集
     */
    getCollection(params) {
        const paramsVertex = params.map((id) => this.getVertexCol(id));
        let collections = [];
        paramsVertex.forEach((col, index) => {
            if (col.some(item => item !== 0)) {
                collections.push(params[index]);
            }
        });
        return collections;
    }
    /*
     *  @param params Array<string>
     * 传入一个顶点数组，求出交集
     */
    getUnions(params) {
        const paramsVertex = params.map((id) => this.getVertexCol(id));
        let unions = [];
        this.vertex.forEach((type, index) => {
            const row = paramsVertex.map(col => col[index]).filter(t => t !== 1);
            if (this.isItemEqual(row)) {
                unions.push(type);
            }
        });
        return unions;
    }
    /*
     *  @param params
     * 传入一个交集行，判断内部是否互相相等
     */
    isItemEqual(params) {
        if (params.includes(0))
            return false;
        let weight = -1;
        // 找出权值
        if (params.length) {
            params.some(t => {
                if (typeof t === 'number')
                    weight = t;
                return typeof t === 'number';
            });
            if (weight === -1) { // 都是多权边数组的情况
                return this.isArrayUnions(params);
            }
        }
        return params.every(t => {
            if (typeof t === 'number') {
                return t === weight;
            }
            else {
                return t.includes(weight);
            }
        });
    }
    /*
     *  @param params
     * 传入多个数组，判断是否有交集
     */
    isArrayUnions(params) {
        if (!params.length)
            return false;
        return params[0].some(t => {
            return params.every(_t => _t.includes(t));
        });
    }
}
class SpecAdjoinMatrix extends AdjoinMatrix {
    specList;
    specCombinationList;
    constructor(specList, specCombinationList) {
        super(specList.reduce((total, current) => [...total, ...current.list], []));
        this.specList = specList;
        this.specCombinationList = specCombinationList;
        // 根据可选规格列表矩阵创建
        this.initSpec();
        // 同级顶点创建
        this.initSameLevel();
    }
    /**
     * 根据可选规格组合填写邻接矩阵的值
     */
    initSpec() {
        this.specCombinationList.forEach((item, index) => {
            this.fillInSpec(item.specs, index + 2); // 0用于互不相连，1用于同级，权级就从2开始
        });
    }
    // 填写同级点
    initSameLevel() {
        // 获得初始所有可选项
        const specsOption = this.getCollection(this.vertex);
        this.specList.forEach((item) => {
            const params = [];
            // 获取同级别顶点
            item.list.forEach((value) => {
                if (specsOption.includes(value))
                    params.push(value);
            });
            // 同级点位创建
            this.fillInSpec(params, 1);
        });
    }
    /*
     * @params
     * 传入顶点数组，查询出可选规格
     */
    getSpecscOptions(params) {
        let specOptionCanchoose = [];
        if (params.some(Boolean)) {
            // 获取可选项（交集）
            specOptionCanchoose = this.getUnions(params.filter(Boolean));
        }
        else {
            // 所有可选项
            specOptionCanchoose = this.getCollection(this.vertex);
        }
        return specOptionCanchoose;
    }
    /*
     * @params
     * 填写邻接矩阵的值
     */
    fillInSpec(params, weight) {
        params.forEach((param) => {
            this.setAdjoinVertexs(param, params, weight);
        });
    }
}
window.leadd_SpecAdjoinMatrix = SpecAdjoinMatrix;