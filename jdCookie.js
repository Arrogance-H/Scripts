/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJf9dOKADCozcCFicZpe_04R7vO49TEBNw7zUkGpu3MU_AwMuaGRmw_NyJTlGtE0ynKABWjxEU;pt_pin=a935239613;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJf9-tSADA1vUbOpZkDzvWRqjoQkcPVgJPYeiVe8GEKvo5eEauusEtXP8GLRhOyHZ_OFx4mtDs;pt_pin=Cora2001;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJf9_FWADDfgI7zKKfeSSsjP5P5nJm8IqNXLmlFuQ_9wqlT-aYwU3yQg9smPzf7L0KB_XH38qQ;pt_pin=jd_4475c38ad9ab8;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
