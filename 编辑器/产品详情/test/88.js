
var componentCallbackHelper = window.componentCallbackHelper || (window.componentCallbackHelper = {});
Object.assign(componentCallbackHelper, {
  componentCallbackList:[],
  renderAllComponentCallback: function () {
    var callbackList = this.componentCallbackList;
    for(var item of callbackList){
      if(item.callback){
        window.eval(item.callback);
      }
    }
  },
  renderAppointCallback: function (uuid) {
    var callbackList = this.componentCallbackList;
    const _component = callbackList.find(item => item.uuid === uuid);
    if(_component && _component.callback){
      return _component.callback
    }
  }
});
componentCallbackHelper.componentCallbackList = [
  {
    uuid: "组件的data-new-auto-uuid",
    callback: function () {
      组件的script标签内容
    }
  }
]

componentCallbackHelper.renderAllComponentCallback();