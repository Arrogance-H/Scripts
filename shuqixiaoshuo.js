/*
╔══╗  　　　  ╔══╗     ╔══╗ ╔╗  　　　
║╔═╝ ╔═╗ ╔═╗ ║ ═║ ╔═╗ ║  ║ ╠╣ ╔═╗
║╚═╗ ║╩╣ ║║║ ║ ═║ ║║║ ║║║║ ║║ ║║║
╚══╝ ╚═╝ ╚╩╝ ╚══╝ ╚═╝ ╚╩╩╝ ╚╝ ╚╩╝
============================================
说明详情请见：https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/readme.js
============================================
*/
const jsname = '📚书旗小说'
const $ = Env(jsname)
//0为关闭日志，1为开启,默认为0
const logs = 0;
//0为关闭通知，1为所有通知,默认为0
const notifyInterval = 1;
//通知风格
let tz = '';
//var i = 0;
//let version = $.getval('version') || "1.5.1";

////////////////////////// 【CenBoMin-Time】///////////////////////////////////////
//hour&min
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}
//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)
//今天20200101格式
let today1 = formatDateTime(new Date());
//今天2021.01.30 17:32:01格式
let today2 = formatDateTime(todaytimes);

////////////////////////// 【CenBoMin-Cookie】///////////////////////////////////////

const loadresourcebodyArr = [];
let loadresourcebodyVal = ($.getval("loadresourcebodyVal") || "params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2016222669&timeStamp=1618072865&sign=3efffca666d1256765d9cdad6e1f3c18&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&net_env=wifi&placeid=111111&user_id=2016222669&sn=E1078C273BB54646FD1BF8A4BD941ECD50FF64C0&msv=10.0.0&brand=Apple&imei=FE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YEtuS2Nt1gMDAK6yTjUzfejk&idfa=00000000-0000-0000-0000-000000000000");

const loadresourcekeyArr = [];
let loadresourcekeyVal = ($.getval("loadresourcekeyVal") || "{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone13,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&net_env=wifi&placeid=111111&user_id=2016222669&sn=E1078C273BB54646FD1BF8A4BD941ECD50FF64C0&msv=10.0.0&brand=Apple&imei=FE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YEtuS2Nt1gMDAK6yTjUzfejk&idfa=00000000-0000-0000-0000-000000000000\",\"Content-Length\":\"1025\",\"Accept-Language\":\"zh-cn\"}");

const sploadresourcebodyArr = [];
let sploadresourcebodyVal = ($.getval("sploadresourcebodyVal") || "params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2016222669&timeStamp=1618072937&sign=eed5e2945c4c1b8792c2a0bd82ea1d04&from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&net_env=wifi&placeid=111111&user_id=2016222669&sn=E1078C273BB54646FD1BF8A4BD941ECD50FF64C0&msv=10.0.0&brand=Apple&imei=FE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YEtuS2Nt1gMDAK6yTjUzfejk&idfa=00000000-0000-0000-0000-000000000000");

const sploadresourcekeyArr = [];
let sploadresourcekeyVal = ($.getval("sploadresourcekeyVal") || "{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone13,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&net_env=wifi&placeid=111111&user_id=2016222669&sn=E1078C273BB54646FD1BF8A4BD941ECD50FF64C0&msv=10.0.0&brand=Apple&imei=FE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YEtuS2Nt1gMDAK6yTjUzfejk&idfa=00000000-0000-0000-0000-000000000000\",\"Content-Length\":\"1025\",\"Accept-Language\":\"zh-cn\"}");

const withdrawbodyArr = [];
let withdrawbodyVal = ($.getval("withdrawbodyVa") || "userId=2016222669&position=1&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.2%26ustatus%3D1%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26idfa%3D00000000-0000-0000-0000-000000000000");

const bubblebodyArr = [];
let bubblebodyVal = ($.getval("bubblebodyVal") || "platform=1&requestSrc=h5&timestamp=1618072538&userId=2016222669&sqSv=1.0&sign=2b0fe27e53692a04ab1518658178f06c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20665%257CTag%2540Bucket%254028%2540280070236%26sdk%3D14.4.2%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000");

const receivebodyArr = [];
let receivebodyVal = ($.getval("receivebodyVal") || "platform=1&src=&timestamp=1618071704&userId=2016222669&sqSv=1.0&appVer=4.3.4.0&placeId=&sign=e658639da502221d645de5736bc221ea&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.4.2%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000");

const signinactionbodyArr = [];
let signinactionbodyVal = ($.getval("signinactionbodyVal") || "clientTimestamp=1618071587&position=501&userId=2016222669&signInType=1&wua=HIVW_TZeFMagcuqBjYBa%2Fe%2F4wcXmj5Wy8TakFzr7UHFDrILImq6aDAXZVcQADn%2FSp%2FoaQK2kAjawPvxnlnRirBH7jRrlc2xiuxTAcvJM%2BhT4XU0YU4CfkSkKAWHDijiSaBvmUXAqUGRXJJfD5SwBFphIETe0OV3n2Slvd3shHLd3h%2FSfi1tsqJbDDWrY%2F950KYd4e&ua=&miniWua=HHnB_8MNnFhNWIYasyRctWzfUkNiLTVq3xECnCSKrRGagHsU%3D&umidtoken=YDszhoNVHy0DAGaYomGk97h7&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=9ae2f319c2141eedb5a4ee98f20104c9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20665%257CTag%2540Bucket%254028%2540280070236%26sdk%3D14.4.2%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000");

const readlotterybodyArr = [];
let readlotterybodyVal = ($.getval("readlotterybodyVal") || "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26utype%3Dvip%26sdk%3D14.4.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_E3cfKEn6wnaLjpE7M1a2oHDV%2B/6hkUnIHMeVpSYF1qM%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=3FFC7B605CEBB1A22BDEA118C91B33C1&timestamp=1618071693&userId=2016222669&wua=HIVW_hl8k0SymDG/yDnpfPAZ/1fDa8CvXkfQHXK/Q50HID/G1oKXNxbMiYkmRuKsCa9c4mAcnZOgBttf3qY7Wy%2BtDq2TuCjvbmeJE39QtteWxJo1RMlCTrTfnHm6fxr4ZtFlvPdUbTFxcD%2B7KSlmAxQDJzlQEmwF1Ju1K2bDj76aSqmgmt4zD8qVnjZPaLI5zWN07");

const videolotterybodyArr = [];
let videolotterybodyVal = ($.getval("videolotterybodyVal") || "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26utype%3Dvip%26sdk%3D14.4.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_clb9vAwdjFcZthJt2TPNwj5tr988q9YJ28wThfYHsZI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7599D652964431A3A0EA4D379EEF4D9F&timestamp=1618071629&userId=2016222669&user_id=2016222669&wua=HIVW_TRJOW6GUFfZ7lIYxh9heoqgoGafv30GjXRE5f%2BFcIBC8rDG8wmGNx0MiXhTXhFq8/z4aofYJwwMRUQA6Bf35HUjOvB0iFraSO7/hUCO1bk8ThZN7COebGRX4q5OQDwMPBDB1ohuu/l%2B/HUsgP5k1lN3DySF4V0NxEbuR0BZDHj/YGhhPWhFtrS3BA2ps/5t9");

const luckylotterybodyArr = [];
let luckylotterybodyVal = ($.getval("luckylotterybodyVal") || "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26utype%3Dvip%26sdk%3D14.4.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_/CCRHoqMfE79fQI0Y1BoiCjQv0rCI2o0pK8lRH/2eZY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A0B916E9A4BA421DE993A74B0066C68C&timestamp=1618053934&userId=2016222669&user_id=2016222669&wua=HIVW_S4lP/mJ%2BjmWJ9FNUIBWFirr9dBQ7Kfl%2BsW5W0gTTjiDMZDuLikmwezNvAPb/SvLbISBrDE4sAekKebUpkjZSMx20T71poENDY1yJzKyC9%2BzJjh8O7Q4BPOhS52YV0sgqL1Sa9CEgEQOCQwSMDlY5Ofbi5pqr0StDGXSG5G5AihPfL0Qqn28w8f0TDC1zUdAQ");

const luckyredurlArr = [];
let luckyredurlVal = ($.getval("luckyredurlVal") || "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR");

const luckyredbodyArr = [];
let luckyredbodyVal = ($.getval("luckyredbodyVal") || "wua=HIVW_FnNIzXgkIp%2BewM1zcLJa26gsy8%2FdUdXpQtL%2BPloiKyI%2FNzE6citpLahvldIoOF%2Bf2ft7MqhwHjKJSUH2M3axQQgTLW3tjmYZ3PWc9x7ZAyWELd6hPu2FMuW0Q1N4YVztElIuAYDfXC6bsO08%2FJT77PJEPX2gEWlITZwInXl1ah1QeNTNZnuhyYxYyebXd2xw&ua=&userId=2016222669&umidtoken=YDszhoNVHy0DAGaYomGk97h7&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1618053956&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=1&sqSv=1.0&sign=d393907e88352af3e75f86e571d3cff7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.4.2%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000");

const sharebodyArr = [];
let sharebodyVal = ($.getval("sharebodyVal") || "actTaskId=304&wua=HIVW_SzPtaFcV26h1F0SuLY0ql%2FRaipR%2BspmY%2Bn9XoiOC6ZL7KuYTHN9gZ%2BCEk8oCotKfaF8EKSpWKWoj7UCwLcQDmgI96FBX7RCbmHotay8G%2B7hjhbRtRkuSTukm9VOjwqT8IN1pvvr7xsXWBJkLVwszqeJrThLX5CYdmBILvyvs8HMGZ3d01ZyZ3XmiEq%2B4zODP&ua=&miniWua=HHnB_8nX5KF2ExirS9k9f1rB7tb%2Bhrb70K7MTvoyBvDEszBA%3D&userId=2016222669&umidtoken=YDszhoNVHy0DAGaYomGk97h7&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.4.0&placeId=111111&timestamp=1618071736&sqSv=1.0&sign=729efdd07e067f976c18d336c2e9c584&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.4.2%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000");

const booktaskurlArr = [];
let booktaskurlVal = ($.getval("booktaskurlVal") || "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.4.2&ustatus=1&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&net_env=wifi&placeid=111111&user_id=2016222669&sn=E1078C273BB54646FD1BF8A4BD941ECD50FF64C0&msv=10.0.0&brand=Apple&imei=FE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YEtuS2Nt1gMDAK6yTjUzfejk&idfa=00000000-0000-0000-0000-000000000000");

const booktaskbodyArr = [];
let booktaskbodyVal = ($.getval("booktaskbodyVal") || "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2016222669");

const spsigninactionbodyArr = [];
let spsigninactionbodyVal = ($.getval("spsigninactionbodyVal") || "clientTimestamp=1618053002&position=601&userId=2016222669&signInType=1&wua=ktgi_N2ehfP%2FlnYKhB%2FKvVq6vUuwcmO8QLkdVFPhh3bpjWU%2BYQVLBA2Ytk71LMLHT2LFtwhk98%2Fn1uDXuBVViQK9LdCEM4fMC8Jr3P5plyLlFstr6lur3s6d%2Bgmzrr2TBkFAsgeGHLXl34%2Bbw65yUxQRggf73uwFlexbON1Lqhd6dqa0ANf%2BioR9RK6Sl%2FuKnpslK8Sy86qovNcQUmwM29E6KStfrcRl2xhGQCsFZf1HdS6Umuw76sPGLzFDTgzJoLZ9XEI%2FL4nb8ft%2BijkEumfJQCHng5YXlihGQRy7nnf%2BvwdBNIP9hUZlJr0BPf4RpIbZg&ua=&miniWua=HHnB_i2hcbWj8pQVMf7xqLnFF52gV%2BEhRyzZH8w6wX9hUufEY4Va9T6rpnEJzXtLub%2FeblOAdmCsFrQIIm%2FjqBdWwK3HDvmAht87sNRukSK9FbxZNbNvpmBgN%2F3H5x%2F0Muf6U&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=99a23e5fea0a07da806821c6162abe62&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.2%26ustatus%3D1%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26idfa%3D00000000-0000-0000-0000-000000000000");

const spreadcoinurlArr = [];
let spreadcoinurlVal = ($.getval("spreadcoinurlVal") || "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.4.2&ustatus=1&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&net_env=wifi&placeid=111111&user_id=2016222669&sn=E1078C273BB54646FD1BF8A4BD941ECD50FF64C0&msv=10.0.0&brand=Apple&imei=FE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YEtuS2Nt1gMDAK6yTjUzfejk&idfa=00000000-0000-0000-0000-000000000000");

const spreadcoinbodyArr = [];
let spreadcoinbodyVal = ($.getval("spreadcoinbodyVal") || "actId=355&miniWua=HHnB_QqxUoh%2BZtQjk/LonLp4PTdLn6pzsfQwEdNQu1awL3ak17KVRLg7H2iiUupHBTU7gQ6EPEr0thIZp729wrS2RHAW9pJ8B4ciPhGo9pvEwbDcWOUMWrNZraSCYgGizf/Wf&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1618053057&userId=2016222669&wua=ktgi_2YVIZc04m/q8V2c7Hj5pjTCheeFIaIS87ClyQ%2BGYfeMyBeVBwmvF5gDZseD5L1RDurxR5D9Nvs08N//yT9Wg0OUb8M6AGlfsX1hj4vnp%2BCNc7oxf1y3YyNmFH1tQ7QP8b/PBkGsLJ178FZrasyxKQn/tQhQmGdJkCLqF/FoNvQw4TUQc7zByJ7RHLoki49BJivUNT9ToayGq2Uo%2BhS8eK61S2LPy7ZcMVissinKseMtNKmdf6wxo1D4PaXD0OK4ccY0S%2BPxv%2B4eEaki0c9pcHUXoUHD2QzPTN/%2BZyEPsW8oKQ6J/cY9zWGKG3vr1gjUO");

const sp1videocoinbodyArr = [];
let sp1videocoinbodyVal = ($.getval("sp1videocoinbodyVal") || "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26sdk%3D14.4.2&deliveryId=897&key=sq_app_ad&miniWua=HHnB_JpsEkb4QlPzt/8dTKJ7W%2BoIhuLKxghUPdKFc3rfeFCoybu7e3DrSQszT9O3zP9Bh0lfrZM/W%2BSMzQFPRoVtZiOA0zWo4F9dVqtT%2BF26tHvs1/w%2B2wXLFATl%2BOCf8%2BEFT&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=32EBAF734E13CA38DDF9B1AC25FA50A2&timestamp=1618053119&userId=2016222669&user_id=2016222669&wua=ktgi_T%2BFDi0Del8tsNwkWsMNX9K88u9VOuYRVBWfNNMJ/1e0bLwmFJr2tYMiBrD4m3sN3kLVi4x28HutElV8e742SBULqnr3WWtY2jdLK0qN9i6God6Sl%2BMXvsMrd1s72fWzxfKTTWD5Wrs6bGIS8%2Bp1jOjuYJOCLhN/e8d2WKdd9iDQyLne00LLpm/fvBFfsYfGtCQpH34wQsWERPLsAybsR0xAsQFZ1TgXUkDuV48vcIohv0fUXfgPR6PC5Hw0GAEFfWfCgvGMt%2B3%2BGMNrpLlz3UEf0S/gni50JHHNzGYyss5q60el7Ijt4A/L6jNWZqQ5S");

const sp2videocoinbodyArr = [];
let sp2videocoinbodyVal = ($.getval("sp2videocoinbodyVal") || "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26sdk%3D14.4.2&deliveryId=980&key=sq_app_ad&miniWua=HHnB_pW3jTDaNPIMxGdqEyb4QxyoFMsNS9lyY5WQf2taYISNnTpVuA%2BWCeD9bzkk9tOoqD5OgFbLiM2%2Bn99OFyKq%2BM9KRbMeqlfYxBXIf0jhqMceXNaXVcaw32hC8ZoR92VWt&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=9095A4B944B4E754014846A3DBCE38AF&timestamp=1618053376&userId=2016222669&user_id=2016222669&wua=ktgi_ZmKGiMGNEkG7lu38dNE93ILt0/8JbFlDWzMemzfvP9oJjMW63FpQf2JkUKccwdDJGJjYpf5BYB7lnxU3cdM7mlzipPbxhGxH1DlMxaAYWFE28SgDeLGJvr2YSi2eaQYxXBrGv%2B7o/43MZi0S5Ab9KsSqbtpMqkCtDGpgACBAwnJB7%2BD52VoE/Y2VwTe03zXqyCEr%2BmOFzMkJJLNRQFBXAZwaTbPZuVBAsvhBq7TrPfNpJ2AF8ao0nxJa11IjQB7PcNeChLlz/K1FvzcpEUk1si4mpe9tjDpIUeXdbT2%2BhqO4RJzpaMjUU9FRH2IHmkD5");

const spsharebodyArr = [];
let spsharebodyVal = ($.getval("spsharebodyVal") || "actTaskId=327&wua=ktgi_OLiqp2A6mY6jmcgLvhavUympM1Te3PtST4aEMdSW6sLuDulZnDhxsUjU6OGlzMwSD0t69kxYXSKV3GqkChU8SzHZKO%2FVtXnNb0WZNjRB1Zrgv3LC%2B0EYkJizArHoST06RDl%2F0ZQnyGufEUbsI0j8Sj%2Bo%2FVH7pLFobcp7aMRzgdWS9Xr8KUb8%2FHjlun89xvdQ9uQpTE%2FxiHGnTHOYWfutUJVjCol7dUvtY%2BIGYyPHCeScbbp%2BLr59W1oXdx%2FZUpenw8yrkASu7SnimLZlSayT6%2BVdhoUtOHW%2BlIezb17vlobeLV0YyLARBvUpvut2OezcP6QuQXzQ2nVWVee3fN6oVw%3D%3D&ua=&miniWua=HHnB_ky055dQnoCsWs2CaNrqK2KDJdZfTM1Jmo21LTL52B6KEOf2yVEU8quzeucMflAvYjxQyVd4Nrncb%2BkI6d1AZjG1Ev%2FasgKy4PfF069sxPffDQ1eN5aTYuDsfE5Fg3gHH&userId=2016222669&umidtoken=YAJLUBZLOugeCTV4u9tKHbdddvwFZcwM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1618053165&sqSv=1.0&sign=552aba6870d301c02636edb4187bc13b&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.2%26ustatus%3D1%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26idfa%3D00000000-0000-0000-0000-000000000000");

const lotteryinfourlArr = [];
let lotteryinfourlVal = ($.getval("lotteryinfourlVal") || "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1618053963&userId=2016222669&activityId=311&sqSv=1.0&sign=39f1a242df4294f88c55774f77b9b40f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.4.2%26utdid%3DYDszhoNVHy0DAGaYomGk97h7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3D7F3932D0E91D15C1CDFD2E9B517D5CD4F74A487C%26umidtoken%3DYDszhoNVHy0DAGaYomGk97h7%26msv%3D8.0.0%26brand%3DApple%26imei%3D030C74C7908663ADD9F06354ECC1B703FC0C2FD6%26skinVersionPrefix%3D1%26appVer%3D4.3.4.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiMDMwQzc0Qzc5MDg2NjNBREQ5RjA2MzU0RUNDMUI3MDNGQzBDMkZENiIsInNuIjoiN0YzOTMyRDBFOTFEMTVDMUNERkQyRTlCNTE3RDVDRDRGNzRBNDg3QyIsImV4cCI6MTYxODU3MTI2MSwidXNlcklkIjoiMjAxNjIyMjY2OSIsImlhdCI6MTYxODA1Mjg2MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nFGXG1amUOhMBjN8GWhI32H2I3AsI9ymNKGw1SzaB7vtM6W6LBdt7TXjJguMUX7fs7A5NKtkybUf-QhiIw1hSQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210207%26mod%3DiPhone12%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000");

const videoinfourlArr = [];
let videoinfourlVal = ($.getval("videoinfourlVal") || "https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=1.0.5.0&placeId=111111&platform=116&requestSrc=h5&resourceId=720&timestamp=1618072863&user_id=2016222669&sqSv=1.0&sign=c5fba0cee9858d6a185a5ac1f8302d88&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.2%26ustatus%3D1%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26idfa%3D00000000-0000-0000-0000-000000000000");

const spvideoinfourlArr = [];
let spvideoinfourlVal = ($.getval("spvideoinfourlVal") || "https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=1.0.5.0&placeId=111111&platform=116&requestSrc=h5&resourceId=720&timestamp=1618072936&user_id=2016222669&sqSv=1.0&sign=ddbd1647056b42c408e6c65ec5e5e9cf&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.2%26ustatus%3D1%26umidtoken%3DYAJLUBZLOugeCTV4u9tKHbdddvwFZcwM%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2016222669%26sn%3DE1078C273BB54646FD1BF8A4BD941ECD50FF64C0%26msv%3D10.0.0%26brand%3DApple%26imei%3DFE9AFB5E7E6E382314DCCF5B7C03DD3E2ED7B7D9%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE2MjIyNjY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GRTlBRkI1RTdFNkUzODIzMTREQ0NGNUI3QzAzREQzRTJFRDdCN0Q5Iiwic24iOiJmYXN0X0UxMDc4QzI3M0JCNTQ2NDZGRDFCRjhBNEJEOTQxRUNENTBGRjY0QzAiLCJleHAiOjE2MTg1NzEyODMsInVzZXJJZCI6IjIwMTYyMjI2NjkiLCJpYXQiOjE2MTgwNTI4ODMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.rs8FrM1dNmJN74Cr2_U0OQ9GojJQG2NEuxFscUHTMpSTP6i4q2mTzKMWuQWDqI8M9fQ7CpN4PzwjMQQCxfS9yA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYEtuS2Nt1gMDAK6yTjUzfejk%26idfa%3D00000000-0000-0000-0000-000000000000");


if ($.isNode()) {
  
  
  
  Object.keys(loadresourcebodyVal).forEach((item) => {
    if (loadresourcebodyVal[item]) {
      loadresourcebodyArr.push(loadresourcebodyVal[item])
    }
  });

  Object.keys(loadresourcekeyVal).forEach((item) => {
    if (loadresourcekeyVal[item]) {
      loadresourcekeyArr.push(loadresourcekeyVal[item])
    }
  });

  Object.keys(sploadresourcebodyVal).forEach((item) => {
    if (sploadresourcebodyVal[item]) {
      sploadresourcebodyArr.push(sploadresourcebodyVal[item])
    }
  });

  Object.keys(sploadresourcekeyVal).forEach((item) => {
    if (sploadresourcekeyVal[item]) {
      sploadresourcekeyArr.push(sploadresourcekeyVal[item])
    }
  });


  Object.keys(withdrawbodyVal).forEach((item) => {
    if (withdrawbodyVal[item]) {
      withdrawbodyArr.push(withdrawbodyVal[item])
    }
  });

  Object.keys(bubblebodyVal).forEach((item) => {
    if (bubblebodyVal[item]) {
      bubblebodyArr.push(bubblebodyVal[item])
    }
  });

  Object.keys(receivebodyVal).forEach((item) => {
    if (receivebodyVal[item]) {
      receivebodyArr.push(receivebodyVal[item])
    }
  });

  Object.keys(signinactionbodyVal).forEach((item) => {
    if (signinactionbodyVal[item]) {
      signinactionbodyArr.push(signinactionbodyVal[item])
    }
  });

  Object.keys(readlotterybodyVal).forEach((item) => {
    if (readlotterybodyVal[item]) {
      readlotterybodyArr.push(readlotterybodyVal[item])
    }
  });

  Object.keys(videolotterybodyVal).forEach((item) => {
    if (videolotterybodyVal[item]) {
      videolotterybodyArr.push(videolotterybodyVal[item])
    }
  });

  Object.keys(luckylotterybodyVal).forEach((item) => {
    if (luckylotterybodyVal[item]) {
      luckylotterybodyArr.push(luckylotterybodyVal[item])
    }
  });

  Object.keys(luckyredurlVal).forEach((item) => {
    if (luckyredurlVal[item]) {
      luckyredurlArr.push(luckyredurlVal[item])
    }
  });

  Object.keys(luckyredbodyVal).forEach((item) => {
    if (luckyredbodyVal[item]) {
      luckyredbodyArr.push(luckyredbodyVal[item])
    }
  });

  Object.keys(sharebodyVal).forEach((item) => {
    if (sharebodyVal[item]) {
      sharebodyArr.push(sharebodyVal[item])
    }
  });


  Object.keys(booktaskurlVal).forEach((item) => {
    if (booktaskurlVal[item]) {
      booktaskurlArr.push(booktaskurlVal[item])
    }
  });

  Object.keys(booktaskbodyVal).forEach((item) => {
    if (booktaskbodyVal[item]) {
      booktaskbodyArr.push(booktaskbodyVal[item])
    }
  });

  Object.keys(spsigninactionbodyVal).forEach((item) => {
    if (spsigninactionbodyVal[item]) {
      spsigninactionbodyArr.push(spsigninactionbodyVal[item])
    }
  });

  Object.keys(spreadcoinurlVal).forEach((item) => {
    if (spreadcoinurlVal[item]) {
      spreadcoinurlArr.push(spreadcoinurlVal[item])
    }
  });

  Object.keys(spreadcoinbodyVal).forEach((item) => {
    if (spreadcoinbodyVal[item]) {
      spreadcoinbodyArr.push(spreadcoinbodyVal[item])
    }
  });

  Object.keys(sp1videocoinbodyVal).forEach((item) => {
    if (sp1videocoinbodyVal[item]) {
      sp1videocoinbodyArr.push(sp1videocoinbodyVal[item])
    }
  });

  Object.keys(sp2videocoinbodyVal).forEach((item) => {
    if (sp2videocoinbodyVal[item]) {
      sp2videocoinbodyArr.push(sp2videocoinbodyVal[item])
    }
  });

  Object.keys(spsharebodyVal).forEach((item) => {
    if (spsharebodyVal[item]) {
      spsharebodyArr.push(spsharebodyVal[item])
    }
  });

  Object.keys(lotteryinfourlVal).forEach((item) => {
    if (lotteryinfourlVal[item]) {
      lotteryinfourlArr.push(lotteryinfourlVal[item])
    }
  });

  Object.keys(videoinfourlVal).forEach((item) => {
    if (videoinfourlVal[item]) {
      videoinfourlArr.push(videoinfourlVal[item])
    }
  });

  Object.keys(spvideoinfourlVal).forEach((item) => {
    if (spvideoinfourlVal[item]) {
      spvideoinfourlArr.push(spvideoinfourlVal[item])
    }
  });

} else {
  loadresourcebodyArr.push($.getdata('loadresourcebody'));
  loadresourcekeyArr.push($.getdata('loadresourcekey'));
  sploadresourcebodyArr.push($.getdata('sploadresourcebody'));
  sploadresourcekeyArr.push($.getdata('sploadresourcekey'));
  withdrawbodyArr.push($.getdata('withdrawbody'));
  bubblebodyArr.push($.getdata('bubblebody'));
  receivebodyArr.push($.getdata('receivebody'));
  signinactionbodyArr.push($.getdata('signinactionbody'));
  readlotterybodyArr.push($.getdata('readlotterybody'));
  videolotterybodyArr.push($.getdata('videolotterybody'));
  luckylotterybodyArr.push($.getdata('luckylotterybody'));
  luckyredurlArr.push($.getdata('luckyredurl'));
  luckyredbodyArr.push($.getdata('luckyredbody'));
  sharebodyArr.push($.getdata('sharebody'));
  booktaskurlArr.push($.getdata('booktaskurl'));
  booktaskbodyArr.push($.getdata('booktaskbody'));
  spsigninactionbodyArr.push($.getdata('spsigninactionbody'));
  spreadcoinurlArr.push($.getdata('spreadcoinurl'));
  spreadcoinbodyArr.push($.getdata('spreadcoinbody'));
  sp1videocoinbodyArr.push($.getdata('sp1videocoinbody'));
  sp2videocoinbodyArr.push($.getdata('sp2videocoinbody'));
  spsharebodyArr.push($.getdata('spsharebody'));
  lotteryinfourlArr.push($.getdata('lotteryinfourl'));
  videoinfourlArr.push($.getdata('videoinfourl'));
  spvideoinfourlArr.push($.getdata('spvideoinfourl'));
  // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
  let Count = ($.getval('shuqiappCount') || '1') - 0;
  for (let i = 2; i <= Count; i++) {
    if ($.getdata(`loadresourcebody${i}`)) {
      loadresourcebodyArr.push($.getdata(`loadresourcebody${i}`));
      loadresourcekeyArr.push($.getdata(`loadresourcekey${i}`));
      sploadresourcebodyArr.push($.getdata(`sploadresourcebody${i}`));
      sploadresourcekeyArr.push($.getdata(`sploadresourcekey${i}`));
      withdrawbodyArr.push($.getdata(`withdrawbody${i}`));
      bubblebodyArr.push($.getdata(`bubblebody${i}`));
      receivebodyArr.push($.getdata(`receivebody${i}`));
      signinactionbodyArr.push($.getdata(`signinactionbody${i}`));
      readlotterybodyArr.push($.getdata(`readlotterybody${i}`));
      videolotterybodyArr.push($.getdata(`videolotterybody${i}`));
      luckylotterybodyArr.push($.getdata(`luckylotterybody${i}`));
      luckyredurlArr.push($.getdata(`luckyredurl${i}`));
      luckyredbodyArr.push($.getdata(`luckyredbody${i}`));
      sharebodyArr.push($.getdata(`sharebody${i}`));
      booktaskurlArr.push($.getdata(`booktaskurl${i}`));
      booktaskbodyArr.push($.getdata(`booktaskbody${i}`));
      spsigninactionbodyArr.push($.getdata(`spsigninactionbody${i}`));
      spreadcoinurlArr.push($.getdata(`spreadcoinurl${i}`));
      spreadcoinbodyArr.push($.getdata(`spreadcoinbody${i}`));
      sp1videocoinbodyArr.push($.getdata(`sp1videocoinbody${i}`));
      sp2videocoinbodyArr.push($.getdata(`sp2videocoinbody${i}`));
      spsharebodyArr.push($.getdata(`spsharebody${i}`));
      lotteryinfourlArr.push($.getdata(`lotteryinfourl${i}`));
      videoinfourlArr.push($.getdata(`videoinfourl${i}`));
      spvideoinfourlArr.push($.getdata(`spvideoinfourl${i}`));
    }
  }
}

////////////////////////// 【CenBoMin-Accounts & Control】///////////////////////

!(async () => {
  cc = (`${jsname}任务执行通知🔔`);
  if (typeof $.getdata('loadresourcebody') === "undefined") {
    console.log($.name, '【提示】请先前往获取cookie📲')
    return;
  }
  console.log(`\n✅ 检查共有多少个账号。。。`)
  await $.wait(1000)
  console.log(`👥 本次执行共${loadresourcebodyArr.length}个账号`)
  for (var i = 0; i < loadresourcebodyArr.length; i++) {
    loadresourcebodyVal = loadresourcebodyArr[i];
    loadresourcekeyVal = loadresourcekeyArr[i];
    sploadresourcebodyVal = sploadresourcebodyArr[i];
    sploadresourcekeyVal = sploadresourcekeyArr[i];
    withdrawbodyVal = withdrawbodyArr[i];
    bubblebodyVal = bubblebodyArr[i];
    receivebodyVal = receivebodyArr[i];
    signinactionbodyVal = signinactionbodyArr[i];
    readlotterybodyVal = readlotterybodyArr[i];
    videolotterybodyVal = videolotterybodyArr[i];
    luckylotterybodyVal = luckylotterybodyArr[i];
    luckyredurlVal = luckyredurlArr[i];
    luckyredbodyVal = luckyredbodyArr[i];
    sharebodyVal = sharebodyArr[i];
    booktaskurlVal = booktaskurlArr[i];
    booktaskbodyVal = booktaskbodyArr[i];
    spsigninactionbodyVal = spsigninactionbodyArr[i];
    spreadcoinurlVal = spreadcoinurlArr[i];
    spreadcoinbodyVal = spreadcoinbodyArr[i];
    sp1videocoinbodyVal = sp1videocoinbodyArr[i];
    sp2videocoinbodyVal = sp2videocoinbodyArr[i];
    spsharebodyVal = spsharebodyArr[i];
    lotteryinfourlVal = lotteryinfourlArr[i];
    videoinfourlVal = videoinfourlArr[i];
    spvideoinfourlVal = spvideoinfourlArr[i];
    console.log(`\n💗💕 开始${$.name}账号【${(i+1)}】 💕💗\n`)
    await shuqiapp();
    //await showmsg1();
    await showmsg2();
  }
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

////////////////////////// 【CenBoMin-Notify】///////////////////////////////////////
//通知1
function showmsg1() {
  if (notifyInterval != 1) {
    console.log(cc + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(cc, '\n', tz);
  }
}
//通知2
async function showmsg2() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 0 && minute <= 5) || (hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 0 && minute <= 5) || (hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        $.msg(cc, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(cc + '' + tz);
  }
}
////////////////////////// 【CenBoMin-Task order】///////////////////////////////////////
async function shuqiapp() {
  console.log("✔️检查loadresourcebody/loadresourcekey");
  await $.wait(1000)
  await loadresource1();
  console.log("\n✔️检查lotteryinfourl");
  await $.wait(1000)
  await lotteryinfo();
  console.log("\n✔️检查videoinfourl");
  await $.wait(1000)
  await videoinfo();
  console.log("\n✔️检查sploadresourcebody/sploadresourcekey");
  await $.wait(1000)
  await loadresource2();
  console.log("\n✔️检查spvideoinfourl");
  await $.wait(1000)
  await spvideoinfo();
  await $.wait(1000)
  console.log(`\n👤 开始➰查询用户资讯➰`)
  await withdrawinfo();
  await $.wait(1000)
  console.log(`\n1️⃣ 开始➰每日签到🤟➰任务`)
  $.log(`\n⏳查询[每日签到]状态...\n`);
  await task1();
  await $.wait(1000)
  console.log(`\n2️⃣ 开始➰30秒计时阅读⏱➰任务`)
  $.log(`\n⏳查询[30秒计时阅读]状态...\n`);
  await task21();
  await $.wait(1000)
  await task22();
  await $.wait(1000)
  console.log(`\n3️⃣ 开始➰看视频🎞➰任务`)
  $.log(`\n⏳查询[看视频]状态...\n`);
  await task31();
  await $.wait(1000)
  await task32();
  await $.wait(1000)
  console.log(`\n4️⃣ 开始➰福利转转转🎡➰任务`)
  $.log(`\n⏳查询[福利转转转]状态...\n`);
  await task4();
  await $.wait(1000)
  console.log(`\n5️⃣ 开始➰邀请书友👭➰任务`)
  $.log(`\n⏳查询[邀请书友]状态...\n`);
  await task51();
  await $.wait(1000)
  await task52();
  await $.wait(1000)
  console.log(`\n6️⃣ 开始➰浏览书城👁➰任务`)
  $.log(`\n⏳查询[浏览书城]状态...\n`);
  await task6();
  await $.wait(1000)
  console.log(`\n7️⃣ 开始➰每日阅读📚➰任务\n`)
  $.log(`👧请使用【专门刷时长】版本来执行任务...`);
  await $.wait(1000)
  console.log(`\n8️⃣ 开始➰一键收取📥➰任务`)
  $.log(`\n⏳检查未收取气泡...\n`);
  await task8();
}
///////////////////////////【CenBoMin-Network request order】//////////////////////////////////
//1.签到
async function task1() {
  if (task2status === 0) {
    $.log(`【普通版-每日签到】:未完成,准备执行任务...`);
    if (!signinactionbodyVal) {
      $.log(`❌signinactionbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await signinaction1();
    }
  } else {
    $.log(`【普通版-每日签到】:已完成🎉`);
    tz += `【普通版-每日签到】:已完成🎉\n`
  }

  if (sptask2status === 0) {
    $.log(`【极速版-每日签到】:未完成,准备执行任务...`);
    if (!spsigninactionbodyVal) {
      $.log(`❌spsigninactionbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await signinaction2();
    }
  } else {
    $.log(`【极速版-每日签到】:已完成🎉`);
    tz += `【极速版-每日签到】:已完成🎉\n`
  }

}
//2.30秒计时阅读
async function task21() {
  if (task1status === 0) {
    $.log(`\n【普通版-30秒计时奖励】:未完成,开始执行任务...`);
    if (!readlotterybodyVal) {
      $.log(`❌目前账号readlotterybody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await readlottery1();
    }

  } else {
    $.log(`【普通版-30秒计时奖励】:已完成🎉`);
    tz += `【普通版-30秒计时奖励】:已完成🎉\n`
  }
}
async function task22() {
  if (sptask1status === 0) {
    $.log(`\n【极速版-30秒计时奖励】:未完成,开始执行任务...`);
    await readlottery2();
    tz += `【极速版-30秒计时奖励】:剩余${mycnt}次\n`
  } else {
    $.log(`【极速版-30秒计时奖励】:已完成🎉`);
    tz += `【极速版-30秒计时奖励】:已完成🎉\n`
  }
}
//3.看视频
async function task31() {
  if (videostate === 10) {
    $.log(`【普通版-看视频】:已完成🎉`);
    tz += `【普通版-看视频】:已完成🎉\n`
  } else {
    $.log(`【普通版-看视频】:未完成,准备执行任务...`);
    await prizelottery1();
    tz += `【普通版-看视频】:获得250金币💰\n`
  }

}
async function task32() {
  if (spvideostate === 10) {
    $.log(`【极速版-看视频】:已完成🎉`);
    tz += `【极速版-看视频】:已完成🎉\n`
  } else {
    $.log(`【极速版-看视频】:未完成,准备执行任务...`);
    if (!sp1videocoinbodyVal) {
      $.log(`❌目前账号sp1videocoinbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await prizelottery2();
    }
    if (!sp2videocoinbodyVal) {
      $.log(`❌目前账号sp2videocoinbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await prizelottery3();
    }
  }

}
//4.福利转转转
async function task4() {
  if (lotterynow !== 10) {
    $.log(`【福利转转转】:未完成,准备执行任务...`);
    if (!luckylotterybodyArr[0]) {
      console.log('💡如果此版本有视频抽奖,请先前往获取cookie📲')
    } else {
      await prizelottery();
    }
    await prizered();
    await $.wait(5000)
    tz += `【福利转转转】:获得${lotteryred}💰\n`
  } else {
    $.log(`【福利转转转】:已完成🎉`);
    tz += `【福利转转转】:已完成🎉\n`
  }
}
//5.邀请书友
async function task51() {
  if (task3status === 0) {
    $.log(`【普通版-邀请书友】:未完成,开始执行任务...`);
    if (!sharebodyVal) {
      $.log(`❌目前账号sharebody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await sharetask1();;
    }
  } else {
    $.log(`【普通版-邀请书友】:已完成🎉`);
    tz += `【普通版-邀请书友】:已完成🎉\n`
  }
}

async function task52() {
  if (sptask4status === 0) {
    $.log(`【极速版-邀请书友】:未完成,开始执行任务...`);
    await sharetask2();
  } else {
    $.log(`【极速版-邀请书友】:已完成🎉`);
    tz += `【极速版-邀请书友】:已完成🎉\n`
  }
}

//6.浏览书城
async function task6() {
  if (sptask4status === 0) {
    $.log(`【极速版-浏览书城】:未完成,开始执行任务...`);
    if (!booktaskurlVal || !booktaskbodyVal) {
      $.log(`❌目前账号booktaskurl未获取,请参照说明对照表获取cookie。\n`);
      $.log(`❌目前账号booktaskbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await booktask();
    }
  } else {
    $.log(`【极速版-浏览书城】:已完成🎉`);
    tz += `【极速版-浏览书城】:已完成🎉\n`
  }
}
//8.收取气泡
async function task8() {
  await bubbleinfo();
  if (checkbubble === 0) {
    console.log(`👧自动一键收取:没有任何气泡奖励,你获得空气！💭`)
  } else {
    await receive();
  }
}

///////////////////////////【CenBoMin-Network request】//////////////////////////////////
//lotteryinfo
async function lotteryinfo() {
  return new Promise((resolve) => {
    let url = {
      url: lotteryinfourlVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.6.0) 750x1334 Winding(WV_3) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            lotterynow = data.data.actInfo.currentSessionJoinTimes
            console.log("🔑 加载普通版📱-书旗小说转盘Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//videoinfo
async function videoinfo() {
  return new Promise((resolve) => {
    let url = {
      url: videoinfourlVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.6.0) 750x1334 Winding(WV_3) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            videostate = data.data.extInfo.chanceCurrentCnt
            console.log("🔑 加载普通版📱-书旗小说看视频Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//spvideoinfo
async function spvideoinfo() {
  return new Promise((resolve) => {
    let url = {
      url: spvideoinfourlVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.3.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,1__shuqi__v1.0.3.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            spvideostate = data.data.extInfo.chanceCurrentCnt
            console.log("🔑 加载极速版🚀-书旗小说看视频Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//任务列表
async function loadresource1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://render.shuqireader.com/load/resource`,
      body: loadresourcebodyVal,
      headers: JSON.parse(loadresourcekeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            //30秒计时奖励
            task1status = data.data.ShuqiBsDailyTask.list[0].status
            //每日签到
            task2status = data.data.ShuqiBsDailyTask.list[1].status
            //邀请书友
            task3status = data.data.ShuqiBsDailyTask.list[2].status
            console.log("🔑 加载普通版📱-书旗小说Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function loadresource2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://render.shuqireader.com/load/resource`,
      body: sploadresourcebodyVal,
      headers: JSON.parse(sploadresourcekeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            //30秒计时奖励
            sptask1status = data.data.ShuqiBsDailyTask.list[0].status
            //每日签到
            sptask2status = data.data.ShuqiBsDailyTask.list[1].status
            //浏览书城
            sptask3status = data.data.ShuqiBsDailyTask.list[2].status
            //邀请书友
            sptask4status = data.data.ShuqiBsDailyTask.list[3].status
            console.log("🔑 加载极速版🚀-书旗小说Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function boxTask() {
  return new Promise((resolve) => {
    let url = {
      url: boxtaskbodyVal,
      headers: JSON.parse(boxtaskkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            readtime = data.data.readTime
            totaltime = data.data.total
            await $.wait(1000)
            console.log("🔑 加载极速版🚀-阅读时长Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//钱包
async function withdrawinfo() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/xapi/gold/withdraw/info`,
      body: withdrawbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            myphone = data.data.phone
            mygold = data.data.gold
            mycash = Math.round(data.data.withdrawableCash * 100) / 100
            $.log(`\n🔸用户信息`);
            $.log(`【账号】:${myphone}`);
            tz += `\n🔸账号${myphone}🔸\n`
            $.log(`【余额】:¥${mycash}`);
            tz += `【余额】:¥${mycash}\n`
            $.log(`\n💰提现任务`);
            for (cashtask of data.data.taskInfo.tasks) {
              title = cashtask.taskTitle
              process = cashtask.process
              $.log(`【${title}】:进度${process}💡`);
              tz += `【${title}】:进度${process}💡\n`
            }

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//气泡check
async function bubbleinfo() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/bubble/info`,
      body: bubblebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            checkbubble = data.data.totalGold
            for (bblist of data.data.goldDetail) {
              bbtitle = bblist.srcDesc
              bbcoin = bblist.amount
              $.log(`💧${bbtitle}:${bbcoin}金币🏅\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一键收取
async function receive() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive`,
      body: receivebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            console.log(`👧自动一键收取:${data.message}🎉`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般签到
async function signinaction1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
      body: signinactionbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            coinmsg = data.data.copyWriting
            todaycoin = data.data.todayPrizeInfo.prizeName
            $.log(`【普通版-每日签到】:获得${todaycoin}💰`);
            tz += `【普通版-每日签到】:获得${todaycoin}💰\n`
            $.log(`【普通版-签到总计】:${coinmsg}💰`);
            tz += `【普通版-签到总计】:${coinmsg}💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速签到
async function signinaction2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
      body: spsigninactionbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.2.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,1__shuqi__v1.0.2.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },

    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            coinmsg = data.data.copyWriting
            todaycoin = data.data.todayPrizeInfo.prizeName
            $.log(`【极速版-每日签到】:获得${todaycoin}💰`);
            tz += `【极速版-每日签到】:获得${todaycoin}💰\n`
            $.log(`【极速版-签到总计】:${coinmsg}💰`);
            tz += `【极速版-签到总计】:${coinmsg}💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般阅读金币
async function readlottery1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery`,
      body: readlotterybodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqireader/4.3.4 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },

    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            maxcnt = data.data.chanceMaxCnt
            nowcnt = data.data.chanceCurrentCnt
            mycnt = maxcnt - nowcnt
            if (maxcnt != nowcnt) {
              $.log(`🙇‍♂️第${nowcnt}次阅读:获得${data.data.prizeResult.prizeDesc},还有${mycnt}次\n`);
              tz += `【普通版-30秒计时奖励】:‍剩余${mycnt}次\n`
            } else {
              $.log(`⛔️本次阅读奖励已达上限\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速阅读金币
async function readlottery2() {
  return new Promise((resolve) => {
    let url = {
      url: spreadcoinurlVal,
      body: spreadcoinbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            maxcnt = data.data.chanceMaxCnt
            nowcnt = data.data.chanceCurrentCnt
            mycnt = maxcnt - nowcnt
            if (maxcnt != nowcnt) {
              $.log(`🙇‍♂️第${nowcnt}次阅读:获得${data.data.prizeInfo.prizeDesc},还有${mycnt}次\n`);
            } else {
              $.log(`⛔️本次阅读奖励已达上限\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般看视频
async function prizelottery1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: videolotterybodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqireader/4.3.4 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`👧${redmsg}🎉`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速看视频1
async function prizelottery2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: sp1videocoinbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqireader/4.3.4 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`👧一般视频页面:${redmsg}🎉`);
            tz += `【极速版-一般视频】:获得100金币💰\n`

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速看视频2
async function prizelottery3() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: sp2videocoinbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`👧签到视频页面:${redmsg}🎉`);
            tz += `【极速版-签到视频】:获得100金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//获取转盘抽奖机会
async function prizelottery() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: luckylotterybodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`🎡${redmsg}🎉\n`);
            console.log("开始抽奖...");
            await $.wait(1000)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//开始转盘抽奖
async function prizered() {
  return new Promise((resolve) => {
    let url = {
      url: luckyredurlVal,
      body: luckyredbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_5) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            lotteryred = data.data.prizeList[0].prizeName
            $.log(`👧恭喜抽到${lotteryred}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般分享
async function sharetask1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/v1/task/reward`,
      body: sharebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.2.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,1__shuqi__v1.0.2.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            //data = JSON.parse(data);
            $.log(`👧普通版邀请书友:获取200金币🏅`);
            tz += `【普通版-邀请书友】:获得200金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速分享
async function sharetask2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/v1/task/reward`,
      body: spsharebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_5) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            //data = JSON.parse(data);
            $.log(`👧极速版邀请书友:获取200金币🏅`);
            tz += `【极速版-邀请书友】:获得200金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速浏览书城
async function booktask() {
  return new Promise((resolve) => {
    let url = {
      url: booktaskurlVal,
      body: booktaskbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            $.log(`👧浏览书城15秒:获取200金币🏅`);
            tz += `【极速版-浏览书城】:获得200金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

///////////////////////////【CenBoMin-Customize】//////////////////////////////////
//invite
function invite() {
  return new Promise((resolve, reject) => {
    let inviteurl = {
      url: ``,
      headers: JSON.parse(runstepkeyVal),
    }
    $.get(inviteurl, (error, resp, data) => {
      if (error) {
        //$.log("响应错误")
      }
      resolve()
    })
  })
}

//解码URIcode
function URIcodetranslate(code) {
  return decodeURIComponent(code);
}
//毫秒时间戳改日期 2021.01.08 05:30:13
function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//安全获取
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
//毫秒时间戳转时间 20200108
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
