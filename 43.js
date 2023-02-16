[rewrite_local]
^http[s]?:\/\/121.43.19.216\/v3\/course\/episodes\/*.+$ url script-response-body https://raw.githubusercontent.com/Noirssss/Mul4hong/master/43.js
[mitm] 
hostname = *.43.*
*
var obj = JSON.parse($response.body);
    obj.data.locked= 0;
obj.data.trial_duration= -1;
obj.data.purchased= 1;
obj.data.nickname= "已解锁";
    $done({body: JSON.stringify(obj)});
