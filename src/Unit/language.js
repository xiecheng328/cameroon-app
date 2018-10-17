function getBrowserLanguage() {
   var browserLanguage= (navigator.language || navigator.browserLanguage).toLowerCase();
    if (browserLanguage==='zh-CN'){
        return 'zh';
    }
    return browserLanguage;
}
function getCookie(name,defaultValue) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return defaultValue;
}

export {
    getBrowserLanguage,
    getCookie
}