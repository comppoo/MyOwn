/*
 *
 *
脚本功能： ***
软件版本：++
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月20日 06:47
电报频道： 
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！

*/

const c1000 = {};
const c1011 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const infoUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;
const aiUrl = /ai\/weather\/quotas/;
const qyUrl = /entries/;
const peUrl = /privileges/;
const topUrl = /operation\/homefeatures/;

if (typeof $response == "undefined") {
  c1000.headers = $request.headers;
  c1000.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjViYzc1NzAwYTBkNTYwMDFiZmJkODhjIiwidXNlcl9pZCI6IjVmODNhMDY3MTk5NzZmMDAxNWEyNTRiNiIsInZlcnNpb24iOjIsImV4cCI6MTcwOTQ4MjAwMCwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MDY4OTAwMDAsInN2aXBfZXhwaXJlZF9hdCI6MTcxNDMyMTgxMiwicHJpbWFyeSI6dHJ1ZX0.v41eOWgj4FmMMYLygupRLeE2hC8KW_HltSsdFk03oP4';
} else {
  switch (true) {
    case adUrl.test(url):
      c1011.status = "ok";
      c1011.activities = [{"items":[{}]}];
      c1011.data = [];
      break;
    case vipUrl.test(url):
      c1011.vip = {  ...c1011.vip,
  "expires_time" : "4092599349",  "is_auto_renewal" : true  };
      c1011.svip =  {  ...c1011.svip,  "expires_time" : "4092599349",  "is_auto_renewal" : true  };
      c1011.show_upcoming_renewal = false;
      break;
    case userUrl.test(url):
      c1011.result = { ...c1011.result,  is_vip: true,  vip_expired_at: 4092599349,  svip_given: 1,  is_xy_vip: true,  xy_svip_expire: 4092599349,  wt: {  ...c1011.result.wt,  vip: {  ...c1011.result.wt.vip,  "expired_at" : 0,  "enabled" : true,  "svip_apple_expired_at" : 4092599349,  "is_auto_renewal" : true,  "svip_expired_at" : 4092599349    },    svip_given: 1,  },  is_phone_verified: true,  vip_take_effect: 1,  is_primary: true,  xy_vip_expire: 4092599349,  svip_expired_at: 4092599349,  svip_take_effect: 1,  vip_type: "s",  };
      break;
    case infoUrl.test(url):
      c1011["reg_days"] = 99999;
      break;
    case aiUrl.test(url):
      c1011.remain = 999;
      c1011.subscription_remain = 999;
      c1011.subscription_quota = 999;
      c1011.addition_remain = 999;
      c1011.subscription_quota_end_time = 4092599349;
      c1011.free_remain = 999;
      c1011.free_quota = 999;
      break;
    case qyUrl.test(url):
      c1011["entries"] = [{  "url" : "https://t.m",  "id" : 1,  "name" : "xxx",  "type" : 1,  "pos" : 2  }];
      break;
    case peUrl.test(url):
      c1011["privileges"] = [{  "vip_type" : "svip",  "subscription_chat_quota" : 999  }];
      break;
    case topUrl.test(url):
      c1011["data"] = [{  "badge_type" : "",  "title" : "xxx",  "url" : "https://t.m",  "feature_type" : "",  "avatar" : "https://raw.githubusercontent.com"  },...c1011.data];
      break;
    }
  c1000.body = JSON.stringify(c1011);
}

$done(c1000);
