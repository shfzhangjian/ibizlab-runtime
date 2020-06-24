import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "dictoptiongridview": {
            "title": "字典项表格视图",
            "caption": "字典项",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictOptionGridView",
            "viewtag": "56893daa82632caa84a6edeeb0acabaf"
        },
        "dictcatalogpickupgridview": {
            "title": "字典选择表格视图",
            "caption": "字典",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogPickupGridView",
            "viewtag": "66f9c86e5a56857f977ef91461338255"
        },
        "dictoptiongrideditview": {
            "title": "字典项表格视图",
            "caption": "字典项",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictOptionGridEditView",
            "viewtag": "6aa3306d5c50039f771e4617a8a5cd64"
        },
        "dictcataloggridview": {
            "title": "字典表格视图",
            "caption": "字典",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogGridView",
            "viewtag": "7395bd2cc14d34a67b772f13a50b2587"
        },
        "dictoptioneditview": {
            "title": "字典项编辑视图",
            "caption": "字典项",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "dict",
            "viewname": "DictOptionEditView",
            "viewtag": "8ad70084b5f98a26370b74da612d3f49"
        },
        "appindexview": {
            "title": "dictionary",
            "caption": "ibizlab",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "dict",
            "viewname": "AppIndexView",
            "viewtag": "D394F269-6F97-4ED7-AFE8-F4A2E09BA602"
        },
        "dictcatalogeditview": {
            "title": "字典编辑视图",
            "caption": "字典",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogEditView",
            "viewtag": "e294ce8c6557ca26a032efa08eeb5508"
        },
        "dictcatalogpickupview": {
            "title": "字典数据选择视图",
            "caption": "字典",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "dict",
            "viewname": "DictCatalogPickupView",
            "viewtag": "eb4772f75066d6c9eb26d8b01d4e16b7"
        }
    }];
});