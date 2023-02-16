
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
