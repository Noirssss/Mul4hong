/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
不背单词 解锁限制 A+
脚本名称:不背单词 解锁限制 A+
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/learnywhere.cn\/api\/qt\/activity\/*.+$ url script-response-body Ceshige.js
[mitm] 
hostname = *.cn.*
*******************************
Surge

[Script]
^http[s]?:\/\/learnywhere.cn\/api\/qt\/activity\/*.+$ requires-body=1,max-size=0,script-path=cn.js

[MITM]
hostname = *.cn.*

*******************************/
var obj = JSON.parse($response.body);
    obj.locked= 0;
obj.trial_duration= -1;
obj.purchased= 1;
obj.nickname= "已解锁";
    $done({body: JSON.stringify(obj)});
