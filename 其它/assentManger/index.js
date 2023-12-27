const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    height: '100%',
    storageManager: false,
    noticeOnUnload: false,
    plugins: ['gjs-blocks-basic'],
    assetManager: {
      custom: true,
      assets: [
        'https://via.placeholder.com/350x250/78c5d6/fff/image1.jpg',
        'https://via.placeholder.com/350x250/459ba8/fff/image2.jpg',
        'https://via.placeholder.com/350x250/79c267/fff/image3.jpg',
        'https://via.placeholder.com/350x250/c5d647/fff/image4.jpg',
        'https://via.placeholder.com/350x250/f28c33/fff/image5.jpg',
        'https://via.placeholder.com/350x250/e868a2/fff/image6.jpg',
        'https://via.placeholder.com/350x250/cc4360/fff/image7.jpg',
      ],
    },
  });
  
  const pagesApp = new Vue({
    el: '.assets-wrp',
    data: { assets: [] },
    mounted() {
      editor.on('asset:custom', this.handleAssets);
    },
    destroyed() {
      editor.off('asset:custom', this.handleAssets);
    },
    methods: {
      handleAssets(props) {
        props.container.appendChild(this.$el);
        this.assets = props.assets;
        this.select = props.select;
        this.remove = props.remove;
      },
    }
  });