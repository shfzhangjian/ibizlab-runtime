import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "jobsinfogridview": {
            "title": "任务信息表格视图",
            "caption": "任务信息",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "task",
            "viewname": "JobsInfoGridView",
            "viewtag": "33e6e9dda70646c9fc4674606152894b"
        },
        "jobsinfoeditview": {
            "title": "任务信息编辑视图",
            "caption": "任务信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "task",
            "viewname": "JobsInfoEditView",
            "viewtag": "3b16681a0aca643f5830e15d768c1ab1"
        },
        "jobsregistryeditview": {
            "title": "任务注册信息编辑视图",
            "caption": "任务注册信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "task",
            "viewname": "JobsRegistryEditView",
            "viewtag": "433753123a4269a61a7a13d22cf567de"
        },
        "taskindexview": {
            "title": "task",
            "caption": "ibizlab",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "task",
            "viewname": "TaskIndexView",
            "viewtag": "49432823-363C-43AB-AA9A-8F0BB0445335"
        },
        "jobslogeditview": {
            "title": "任务调度日志编辑视图",
            "caption": "任务调度日志",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "task",
            "viewname": "JobsLogEditView",
            "viewtag": "8be420cc327846b003dc0a97dda81ceb"
        },
        "jobsregistrygridview": {
            "title": "任务注册信息表格视图",
            "caption": "任务注册信息",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "task",
            "viewname": "JobsRegistryGridView",
            "viewtag": "b10fda534ad827548d6902807e8dc8cf"
        },
        "jobsloggridview": {
            "title": "任务调度日志表格视图",
            "caption": "任务调度日志",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "task",
            "viewname": "JobsLogGridView",
            "viewtag": "d55df600239abf11fb0df2bded105b5d"
        }
    }];
});