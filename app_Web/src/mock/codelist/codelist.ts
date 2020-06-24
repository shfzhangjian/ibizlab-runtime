import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, [
        {
        srfkey: "YesNo",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "是",
                text: "是",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "0",
                label: "否",
                text: "否",
                "data":"",
                "codename":"Item_0",
                value: "0",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "CLIBZSex",
        emptytext: "",
        "codelisttype":"static",
        items: [
            {
                id: "男",
                label: "男性",
                text: "男性",
                "data":"",
                "codename":"Item_1",
                value: "男",
                
                disabled: false,
            },
            {
                id: "女",
                label: "女性",
                text: "女性",
                "data":"",
                "codename":"Item_2",
                value: "女",
                
                disabled: false,
            },
            {
                id: "性别不详",
                label: "性别不详",
                text: "性别不详",
                "data":"",
                "codename":"Item_3",
                value: "性别不详",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "CodeListJobStatus",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "0",
                label: "ENABLED",
                text: "ENABLED",
                "data":"",
                "codename":"Item_0",
                "color": "rgba(58, 116, 7, 1)",
                value: 0,
                
                disabled: false,
            },
            {
                id: "1",
                label: "DISABLED",
                text: "DISABLED",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(67, 65, 65, 1)",
                value: 1,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "CLAuthCode",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "200",
                label: "成功",
                text: "成功",
                "data":"",
                "codename":"Item_200",
                "color": "rgba(0, 255, 0, 0)",
                value: "200",
                
                disabled: false,
            },
            {
                id: "400",
                label: "用户不存在",
                text: "用户不存在",
                "data":"",
                "codename":"Item_400",
                value: "400",
                
                disabled: false,
            },
            {
                id: "401.1",
                label: "密码错误",
                text: "密码错误",
                "data":"",
                "codename":"Item_3",
                value: "401.1",
                
                disabled: false,
            },
            {
                id: "401.2",
                label: "配置错误",
                text: "配置错误",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(22, 9, 170, 1)",
                value: "401.2",
                
                disabled: false,
            },
            {
                id: "403.6",
                label: "地址被拒绝",
                text: "地址被拒绝",
                "data":"",
                "codename":"Item_5",
                "color": "rgba(0, 72, 255, 1)",
                value: "403.6",
                
                disabled: false,
            },
        ]
    }
    ]];
});

