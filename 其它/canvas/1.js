import { iconsJSON } from '@/static/tools'
import columnSetting from '@/utils/columnSetting'
import { $ } from '@/utils'
export default (editor, config = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  const script = function(props){
    // eval(props.exeScript);
    var el = this;
    let {compntSeetings,compntMobileSeetings,analyseSlectEl} = props;
    getDeviceWindowSetting(compntSeetings,compntMobileSeetings);

    function getDeviceWindowSetting(compntSeetings,compntMobileSeetings){
        let _screenWidth = window.innerWidth;
        let seetingConfig;
        // pc
        if(_screenWidth > 500){
          seetingConfig = compntSeetings;
        }else{
          seetingConfig = compntMobileSeetings;
        }

        let {initSlider,unSlick} = window.slickSlider && window.slickSlider(el,seetingConfig,analyseSlectEl);
        setTimeout(function(){
          initSlider();
        },300)
    }
    if(!window._isEditor){
      window.addEventListener("resize", function(){
        getDeviceWindowSetting(compntSeetings,compntMobileSeetings);
      });
    }
  }

  dc.addType(config.name, {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: config.name,
        classes:['solider-container'],
        compntSeetings:{
          dots: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll:1,
          adaptiveHeight:false,
        },
        compntMobileSeetings:{
          dots: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll:1,
          adaptiveHeight:false,
        },
        styles:'',
        style: { postion: 'relation' },
        slideItemEl:'', //每一张幻灯片el
        analyseSlectEl:config.analyseSlectEl,
        exeScript:config.exeScript,
        'script-props': ['exeScript','compntSeetings','compntMobileSeetings','analyseSlectEl'],
        script,
        ...config.slideProps,
        toolbar: iconsJSON.slider
      },
      init(){
        this.getSlickStructure();
      },
      updated(){
        // columnSetting && columnSetting.init();
      },
      getDeviceWindowSetting(){
          const deviceManager = editor.DeviceManager;
          let {width} = deviceManager.getSelected().attributes
          if(width && parseFloat(width) <= 500){
            return 'compntMobileSeetings';
          }else {
            return 'compntSeetings';
          }
      },
      /**
       * get组件的每一张幻灯片el
       */
      getSlickStructure(){
        let {content,analyseSlectEl} = config;
        // debugger; select可能存在取不到元素$
        let slideContainerEl = $(content).filter(analyseSlectEl.ldSliderContainer) || $(content);
        let slideItemEl = slideContainerEl.find(analyseSlectEl.ldSliderItem)[0].outerHTML;
        this.set({slideItemEl:slideItemEl});
      },
      /**
       * 添加幻灯片(图片)
       * @param {*} selected
       * @param {*} photoList
       */
      addPhotoFunction(selected,photoList){
        let {ldSliderContainer} = config.analyseSlectEl;
        let parentCpt = this.findCptFunction(selected,ldSliderContainer,'');
        parentCpt = parentCpt[0];
        photoList?.forEach((photoItem) => {
          parentCpt.append(this.get('slideItemEl'));
          let newCpt = parentCpt.getLastChild();
          let linkCpt = newCpt.findType('link')[0];
          linkCpt.setStyle({'background-image':`url(${photoItem})`});
        })
        this.view.render();
        columnSetting.initSeeting();
      },
      /**
      * 更新指定第几张幻灯片图片
      * @param selected 轮播图组件
      * @param photoAttr 背景图片链接/图片跳转href
      * @param index 第几张
      */
      updatePhotoFunctin(selected,photoAttr,index){
        let {ldSliderItem} = config.analyseSlectEl;
        let slideCpt = this.findCptFunction(selected,ldSliderItem,'');
        let linkCpt = slideCpt[index]?.findType('link')[0];
        let {style,attributes} = photoAttr;
        attributes && linkCpt?.setAttributes(attributes);
        if(style && style['background-image']){
          linkCpt?.setStyle(style);
        }
      },
       /**
       * 复制幻灯片
       * @param selected 轮播图组件
       * @param index 复制幻灯片索引
       */
      copySlide(selected, index){
        // 目标组件
        let {ldSliderItem} = config.analyseSlectEl;
        let slideCpt = this.findCptFunction(selected,ldSliderItem,'');
        this.view.setCptElAttr('close');
        editor.select(slideCpt[index]);
        editor.runCommand('tlb-clone');
        this.view.setCptElAttr();
        this.view.render();
        columnSetting.initSeeting();
      },
      /**
       * 删除幻灯片
       * @param selected 轮播图组件
       * @param index 复制幻灯片索引
       */
      removeSlide(selected, index){
        // 目标组件
        let {ldSliderItem} = config.analyseSlectEl;
        let slideCpt = this.findCptFunction(selected,ldSliderItem,'');
        slideCpt[index].remove();
        this.view.render();
        columnSetting.initSeeting();
      },
      /**
      * 移动幻灯片
      * @param selected 轮播图组件
      * @param startIndex 开始幻灯片索引
      * @param endIndex 结束幻灯片索引
      */
      moveSlide(selected,startIndex, endIndex){
        // 目标组件
        let {ldSliderContainer,ldSliderItem} = config.analyseSlectEl;
        let slideCpt = this.findCptFunction(selected,ldSliderItem,'')[startIndex];
        // 移动到的目标
        let parentCpt = this.findCptFunction(selected,ldSliderContainer,'')[0];
        let newIndex =  endIndex > startIndex ? endIndex +1: endIndex;
        console.log(newIndex);
        slideCpt?.move(parentCpt, { at: newIndex});
        this.view.render();
        columnSetting.initSeeting();
      },
       /**
      * 切换效果
      * @param selected 轮播图组件
      * @param effectObj slick插件配置项 例:{slidesToScroll: 2}
      */
      switchEffect(selected,compntSeetings){
        let settingName = selected.getDeviceWindowSetting();
        let originAttr = selected.get(settingName);
        let _originProps = JSON.parse(JSON.stringify(originAttr));
        let newProps = Object.assign(_originProps, compntSeetings);
        let {slidesToShow} = newProps;
        if(slidesToShow && slidesToShow>1){
          selected.addClass('multiline');
        }else{
          selected.removeClass('multiline');
        }
        selected.set(settingName, newProps);
        this.view.render();
        columnSetting.initSeeting();
      },
      /**
       * 获取初始化数据   背景图片/跳转链接
       * @param {*} selected
       */
      findCptSetting(selected){
        let photoList = [];
        let {ldSliderContainer,ldSliderItem,slider_href} = config.analyseSlectEl;
        let slideCpt = this.findCptFunction(selected,ldSliderItem,'');
        slideCpt.forEach(item => {
          let linkCpt = item?.findType('link')[0];
          let {href,target} = linkCpt.getAttributes();
          let backgroundImage = linkCpt.getStyle('background-image');
          try{
            backgroundImage = backgroundImage && backgroundImage.match(/\((.*)\)/) && backgroundImage.match(/\((.*)\)/)[1].replace(/"/g,'');
          }catch(e){
            console.log(e,backgroundImage);
          }
          href = href || 'javascript:void(0);';
          target = target || '_self';
          backgroundImage = backgroundImage || '//a12.leadongcdn.cn:6540/cloud/ljBqmKmiSRmkmrmnoql/123.jpg';
          photoList.push({href,target,backgroundImage});
        })
        let settingName = selected.getDeviceWindowSetting();
        const setting = selected.get(settingName);
        return {data:photoList,setting:setting};
      },
      /**
       * 查找组件
       * @param {*} selected 组件
       * @param {*} selectStr 选择器
       * @param {*} cptType 查找的组件类型
       */
      findCptFunction(selected,selectStr,cptType){
        // selectStr = selectStr.replace('.','');
        // let allCptList = selected.findType(cptType);
        // // let sliderItemEl = $() 查找父组件
        // let cptList = [];
        // for(let item of allCptList){
        //   let classList = item.getClasses();
        //   if(classList.includes(selectStr)){
        //     cptList.push(item);
        //   }
        // }
        // return cptList;
        return selected.find(selectStr);
      },
      // 修改箭头，轮播点的大小，外部方法
      updateSliderStyle(selected){
        selected?.setStyle({ color: 'red' },{ selector: 'a', important: true });
      }
    },
    isComponent(el) {
      if (el && el.classList && el.classList.contains(config.name)) {
        return { type: config.name };
      }
    },
    view: defaultView.extend({
      init() {
        const comps = this.model.components();
        if (!comps.length) {
          comps.add(`${config.content}`);
        }
      },
      onRender(){
        this.setCptElAttr();
      },
      /**
       * 设置组件状态
       * @param {*} type
       */
      setCptElAttr(type = 'open'){
        let { model } = this;
        let {ldSliderItem} = config.analyseSlectEl;
        ldSliderItem = ldSliderItem.replace('.','');
        let modelList = model.findType('');
        const disabled = {selectable:false,droppable:false, draggable: false, highlightable: false,hoverable: false, locked: true }
        modelList.forEach(element => {
          const classList = element.getClasses();
          if(classList.includes(ldSliderItem) && type == 'close'){
            element.set({selectable:true});
          }else{
            element.set({selectable:false,droppable:false,draggable :false});
          }
          const rowComtainer = element.findType('row-container')
          // element.find('.ld-container').forEach(item => {
          //   item.set(Object.assign(disabled, {droppable:true}));
          // });
          // element.find('.ld-section_content').forEach(item => {
          //   item.set(disabled);
          // });
          // element.find('.slider_href').forEach(item => {
          //   item.set(disabled);
          // });
          // element.find('.ld-slick-item').forEach(item => {
          //   item.set(disabled);
          // });

          // if(rowComtainer && rowComtainer.length){
          //   rowComtainer.forEach(item => {
          //     item.set(disabled);
          //   })
          // }
        });
      },
    })
  });
}
