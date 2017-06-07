export default {
  openNewPage: function(hash) {
    if (!hash || !hash.length) return null;
    let url = '';
    //如果是外链，直接跳转
    if (hash.indexOf('//') > 0) {
      url = hash;
    } else { //配置的是hash
      let {host, pathname, search} = window.location;
      url = '//' + host + pathname + search + '#' + hash;
    }
    url = encodeURI(url); //解决url中传入中文的跳转问题
    window.location.href = url;
    return;
  }
}
