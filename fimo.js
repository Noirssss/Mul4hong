/*******************************
app下载地址：商店搜索：FIMO

  公众号：木木IOS分享 原十三座州府
  app下载地址：
https://apps.apple.com/cn/app/fimo-%E5%A4%8D%E5%8F%A4%E8%83%B6%E7%89%87%E7%9B%B8%E6%9C%BA/id1454219307
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?::\/\/server\.yoyiapp\.com  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/fimo.js
[mitm] 
hostname = *.*.*

*******************************/

var _0x2a6f=["\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x2F\x66\x69\x6D\x6F\x2D\x63\x6F\x6D\x6D\x6F\x6E\x2F\x66\x69\x6C\x6D","\x69\x6E\x64\x65\x78\x4F\x66","\x69\x73\x50\x75\x72\x63\x68\x61\x73\x65\x22\x3A\x30","\x72\x65\x70\x6C\x61\x63\x65"]; var body=$response[_0x2a6f[0]]; var obj=JSON[_0x2a6f[1]](body); const vip=_0x2a6f[2]; if(body[_0x2a6f[3]](vip)!= -1) { body= replace(/isPurchase":((\d)+)/ig,body,_0x2a6f[4]) } function replace(_0x20d2x5,_0x20d2x6,_0x20d2x7) { return _0x20d2x6[_0x2a6f[5]](_0x20d2x5,function(_0x20d2x8) { return _0x20d2x7 } ) } $done({body})
