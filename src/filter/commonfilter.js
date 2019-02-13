//全局过滤器
import Vue from 'vue'

//时间格式化
// Vue.filter('dateFormat', function (dateStr, pattern) { //dateFormat过滤器名，dateStr传入的时间字符串，pattern
function dateFormat(dateStr, pattern) { //dateFormat过滤器名，dateStr传入的时间字符串，pattern
  let dt = new Date(dateStr); //根据给定的时间字符串得到特定的时间
  let y = dt.getFullYear();
  let m = (dt.getMonth() + 1).toString().padStart(2, "0");
  let d = (dt.getDate()).toString().padStart(2, "0");
  // if (pattern.toLowerCase() === "yyyy-mm-dd") {
    return `${y}-${m}-${d}`
  // } else {
  //   let hh = dt.getHours().toString().padStart(2, "0");
  //   let mm = dt.getMinutes().toString().padStart(2, "0");
  //   let ss = dt.getSeconds().toString().padStart(2, "0");
  //   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  // }
}
export default{
  dateFormat
}