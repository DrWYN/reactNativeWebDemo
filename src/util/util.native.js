export default {
  /**
   * 跳转页面
   * @param navigator
   * @param name 新页面名称
   * @param component 新页面组件
   * @param data 参数
   * @param type 跳出方式  'Bottom' - 底部 默认右侧跳出
   * @private
   */
  openNewPage: function(navigator, name, component, data, type) {
   if(navigator&&component){
      navigator.push({
        name: name,
        component: component,
        params: {
          data: data
        },
        type: type,
      })
   }
  }
}
