import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, [
        {
        srfkey: "TemplateType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "aliyun-sms",
                label: "阿里云短信",
                text: "阿里云短信",
                "class":"",
                "data":"",
                "codename":"Aliyun_SUB_sms",
                value: "aliyun-sms",
                
                disabled: false,
            },
            {
                id: "aliyun-email",
                label: "阿里云邮件",
                text: "阿里云邮件",
                "class":"",
                "data":"",
                "codename":"Aliyun_SUB_email",
                value: "aliyun-email",
                
                disabled: false,
            },
            {
                id: "wechat-msg",
                label: "微信消息",
                text: "微信消息",
                "class":"",
                "data":"",
                "codename":"Wechat_SUB_msg",
                value: "wechat-msg",
                
                disabled: false,
            },
            {
                id: "dingtalk-msg",
                label: "钉钉通知",
                text: "钉钉通知",
                "class":"",
                "data":"",
                "codename":"Dingtalk_SUB_msg",
                value: "dingtalk-msg",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "OpenAccessType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "aliyun",
                label: "阿里云",
                text: "阿里云",
                "class":"",
                "data":"",
                "codename":"Aliyun",
                value: "aliyun",
                
                disabled: false,
            },
            {
                id: "wechat",
                label: "微信开放平台",
                text: "微信开放平台",
                "class":"",
                "data":"",
                "codename":"Wechat",
                value: "wechat",
                
                disabled: false,
            },
            {
                id: "qq",
                label: "QQ互联",
                text: "QQ互联",
                "class":"",
                "data":"",
                "codename":"Qq",
                value: "qq",
                
                disabled: false,
            },
            {
                id: "dingtalk",
                label: "钉钉开放平台",
                text: "钉钉开放平台",
                "class":"",
                "data":"",
                "codename":"Dingtalk",
                value: "dingtalk",
                
                disabled: false,
            },
        ]
    }
    ]];
});

