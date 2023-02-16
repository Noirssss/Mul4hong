[rewrite_local]
^http[s]?:\/\/121.43.19.216\/api\/qt\/activity\/*.+$ url script-response-body 43.js
[mitm] 
hostname = *.43.*
*******************************
Surge

[Script]
^http[s]?:\/\/121.43.19.216\/api\/qt\/activity\/*.+$ requires-body=1,max-size=0,script-path=43.js

[MITM]
hostname = *.43.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.locked= 0;
obj.data.trial_duration= -1;
obj.data.purchased= 1;
obj.data.nickname= "已解锁";
    $done({body: JSON.stringify(obj)});
