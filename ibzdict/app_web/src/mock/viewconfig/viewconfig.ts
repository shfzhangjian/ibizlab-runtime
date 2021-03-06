import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "dictoptioneditview": {
            "title": "字典项编辑视图",
            "caption": "字典项",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "dict",
            "viewname": "DictOptionEditView",
            "viewtag": "0986ae2314847b586b20edfbb40fc82b"
        },
        "dictoptiongridview": {
            "title": "字典项表格视图",
            "caption": "字典项",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictOptionGridView",
            "viewtag": "22e202992971f634c00e022b2cae335e"
        },
        "dictoptiongrideditview": {
            "title": "字典项表格视图",
            "caption": "字典项",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictOptionGridEditView",
            "viewtag": "44488f30cf90677019077ed9ad33628e"
        },
        "dictcataloggridview": {
            "title": "字典表格视图",
            "caption": "字典",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogGridView",
            "viewtag": "74a6ce3ddf610ce7fb201662c6d4b8da"
        },
        "dictcatalogpickupgridview": {
            "title": "字典选择表格视图",
            "caption": "字典",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogPickupGridView",
            "viewtag": "842cfc03d5e93435fc52d317a55cdfd4"
        },
        "dictcatalogpickupview": {
            "title": "字典数据选择视图",
            "caption": "字典",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogPickupView",
            "viewtag": "a9c82814d9bcd23dbf78c4c073759d7c"
        },
        "dictcatalogeditview": {
            "title": "字典编辑视图",
            "caption": "字典",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogEditView",
            "viewtag": "aef11c4ae15f8255ee53623adf148f2a"
        },
        "appindexview": {
            "title": "dictionary",
            "caption": "ibizlab",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "dict",
            "viewname": "AppIndexView",
            "viewtag": "d28e2613c581adb940ff8c3469365646"
        }
    }];
});

// 获取视图消息分组信息
mock.onGet('./assets/json/view-message-group.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
    }];
});