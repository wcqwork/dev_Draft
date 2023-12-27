class Graph {
    constructor(vertices) {
        // 顶点数
        this.vertices = vertices;
        // 边
        this.edges = 0;
        // 基于邻接矩阵二维数组存储
        this.adj = [];
        // 存储访问状态
        this.marked = [];
        this.initAdjacencyMatrix();
    }

    // 初始化邻接矩阵
    initAdjacencyMatrix() {
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
        }
    }

    // 添加边
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            console.log(`${i} -> `)
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== undefined) {
                    console.log(`${this.adj[i][j]} `);
                }
            }
        }
    }

    // 广度优先搜索使用了抽象队列
    bfs(s) {
        const queue = [];
        // 标记已经访问
        this.marked[s] = true;
        // 添加到队尾
        queue.push(s);
        while (queue.length) {
            const v = queue.shift();
            if (this.adj[v] !== undefined) {
                console.log('Visited vertex: ' + v);
                this.adj[v].forEach(w => {
                    if (!this.marked[w]) {
                        this.marked[w] = true;
                        queue.push(w);
                    }
                })
            }
        }
    }
}

// test demo

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);