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
      c1011.result = { ...c1011.result,  is_vip: true,  vip_expired_at: 4092599349,  svip_given: 1,  is_xy_vip: true,  xy_svip_expire: 4092599349,  wt: {  ...c1011.result.wt,  vip: {  ...c1011.result.wt.vip,  "expired_at" : 0,  "enabled" : true,  "svip_apple_expired_at" : 4092599349,  "is_auto_renewal" : true,  "svip_expired_at" : 4092599349    },    svip_given: 1,  },  is_phone_verified: true,  vip_take_effect: 1,  is_primary: true,  xy_vip_expire: 4092599349,  svip_expired_at: 4092599349,  svip_take_effect: 1,  vip_type: "s",  phone_num: "13145200000",  name: "222,  avatar: "https://raw.githubusercontent.comg",  bound_status: {  ...c1011.result.bound_status,  caiyun: {  ...c1011.result.bound_status.caiyun,  "username" : "222,  "is_bound" : true}}};
      break;
    case infoUrl.test(url):
      c1011["reg_days"] = 99999;
      c1011["name"] = "22";
      c1011["avatar"] = "https://raw.githubusercontent";
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
      c1011["entries"] = [{  "url" : "https://t.m3",  "id" : 1,  "name" : "222",  "type" : 1,  "pos" : 2  }];
      break;
    case peUrl.test(url):
      c1011["privileges"] = [{  "vip_type" : "svip",  "subscription_chat_quota" : 999  }];
      break;
    case topUrl.test(url):
      c1011["data"] = [{  "badge_type" : "",  "title" : "222",  "url" : "https://",  "feature_type" : "",  "avatar" : "https://raw.githubusercontent.com"  },...c1011.data];
      break;
    }
  c1000.body = JSON.stringify(c1011);
}

$done(c1000);

