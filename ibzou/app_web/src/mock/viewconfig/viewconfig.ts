import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "ibzdepartmentpickupview": {
            "title": "部门选择视图",
            "caption": "部门",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentPickupView",
            "viewtag": "10dd7f45f36233049c4af9ca417089f5"
        },
        "ibzemployeeeditview": {
            "title": "人员管理",
            "caption": "人员管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeEditView",
            "viewtag": "119fe650e7efd26bd14bd413cae37ded"
        },
        "ibzteammembergridview": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamMemberGridView",
            "viewtag": "281f49b284494f9ba207e6bce8416b7d"
        },
        "ibzorganizationoptionview": {
            "title": "单位快速新建",
            "caption": "单位快速新建",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationOptionView",
            "viewtag": "2ed85bebb69b8d23388420b95163228a"
        },
        "ibzteameditview": {
            "title": "组管理",
            "caption": "组管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamEditView",
            "viewtag": "323147bb0fc25046ab102674cb1abf21"
        },
        "ibzemployeegridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeGridView",
            "viewtag": "40fe6b28b9f7902341da46bb74a02d59"
        },
        "ibzemployeechangepwdview": {
            "title": "人员编辑视图",
            "caption": "人员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeChangePwdView",
            "viewtag": "55cd5acdacb8aecec7d4574216e10625"
        },
        "ibzteamgridview": {
            "title": "组管理",
            "caption": "组管理",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamGridView",
            "viewtag": "5bd45246d1f387729c0d8658e07ddb9f"
        },
        "ibzteammembereditview": {
            "title": "组成员编辑视图",
            "caption": "组成员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamMemberEditView",
            "viewtag": "5e88ef37a2da46d66c41c8838d31096b"
        },
        "ibzdeptmembergridview": {
            "title": "部门成员表格视图",
            "caption": "部门成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDeptMemberGridView",
            "viewtag": "61541167ccebbc3f174242ce73e436dd"
        },
        "ibzorganizationtreeexpview": {
            "title": "部门管理",
            "caption": "部门管理",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationTreeExpView",
            "viewtag": "6435e95f9bd03acceda6b7fd610873db"
        },
        "ibzdepartmentgridview": {
            "title": "部门表格视图",
            "caption": "部门",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentGridView",
            "viewtag": "7362390ee25dac238b23fa9ab05ea4ac"
        },
        "ibzemployeeeditgridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeEditGridView",
            "viewtag": "7de880cb7b69c350b0c6c47785634f71"
        },
        "ibzpostpickupview": {
            "title": "岗位数据选择视图",
            "caption": "岗位",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostPickupView",
            "viewtag": "7e3fbce8277ad89674307e6a0d7ddd43"
        },
        "ibzposteditview": {
            "title": "岗位管理",
            "caption": "岗位管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostEditView",
            "viewtag": "88af20e0a8e819dff22f1a198e8989e3"
        },
        "ibzdepartmenteditview": {
            "title": "部门管理",
            "caption": "部门管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentEditView",
            "viewtag": "90c0ced2720b85d5e051e7935a93d3c5"
        },
        "ibzorganizationeditview": {
            "title": "单位管理",
            "caption": "单位管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationEditView",
            "viewtag": "95e33ff2469ba40d3e0c00f5c3f61501"
        },
        "ibzdepartmentmpickupview": {
            "title": "部门数据多项选择视图",
            "caption": "部门",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentMPickupView",
            "viewtag": "97224ac0397dbe38b4679b4060ee29e5"
        },
        "ibzdepartmentoptionview": {
            "title": "部门快速新建",
            "caption": "部门快速新建",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentOptionView",
            "viewtag": "9cdad5e2bed51cdcd90b4b7fb3104a5a"
        },
        "ibzemployeeoptionview": {
            "title": "人员快速新建",
            "caption": "人员快速新建",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeOptionView",
            "viewtag": "9cf7a70099bff83a10f6ae65c4d54692"
        },
        "ibzemployeepickupview": {
            "title": "人员数据选择视图",
            "caption": "人员",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeePickupView",
            "viewtag": "9ffa35efe3d70cf4b9fa4e83dd1979c6"
        },
        "ibzdeptmembereditview": {
            "title": "部门成员编辑视图",
            "caption": "部门成员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDeptMemberEditView",
            "viewtag": "bf5e850471bab461fbb6739578e510c5"
        },
        "ibzdepartmenttreeexpview": {
            "title": "人员管理",
            "caption": "人员管理",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentTreeExpView",
            "viewtag": "c0cdac5d5b5691ae8a326f5972aec67f"
        },
        "ibzorganizationgridview": {
            "title": "单位管理",
            "caption": "单位管理",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationGridView",
            "viewtag": "c42bc30741bd6add20b00494231dfa24"
        },
        "ibzemployeepickupgridview": {
            "title": "人员选择表格视图",
            "caption": "人员",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeePickupGridView",
            "viewtag": "c84df2684f29705ac6c5dec67df9f217"
        },
        "ibzpostpickupgridview": {
            "title": "岗位选择表格视图",
            "caption": "岗位",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostPickupGridView",
            "viewtag": "cbaccf404d6c33b995df3ace323ccec0"
        },
        "ibzorganizationpickupview": {
            "title": "单位机构数据选择视图",
            "caption": "单位机构",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationPickupView",
            "viewtag": "ccff36439eacae953f85ff636c9dac74"
        },
        "ibzorganizationpickupgridview": {
            "title": "单位机构选择表格视图",
            "caption": "单位机构",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationPickupGridView",
            "viewtag": "cf8e6d455f8e88e66bbbe1bdb4c84274"
        },
        "ibzdepartmenteditgridview": {
            "title": "部门表格视图",
            "caption": "部门",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentEditGridView",
            "viewtag": "d1d44c8c35f438bc24c4bf49b42e678a"
        },
        "ibzpostgridview": {
            "title": "岗位管理",
            "caption": "岗位管理",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostGridView",
            "viewtag": "d907ddd1845887ecabac4d8d199bf792"
        },
        "ibzemployeempickupview": {
            "title": "人员数据多项选择视图",
            "caption": "人员",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeMPickupView",
            "viewtag": "d946240b09028ae684e1eb31281a4caf"
        },
        "ibzdepartmentpickupgridview": {
            "title": "部门选择表格视图",
            "caption": "部门",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentPickupGridView",
            "viewtag": "e3284e895913f7d38d1bcbe898bda0b7"
        },
        "ouindexview": {
            "title": "organizational-unit",
            "caption": "ibizlab",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "ou",
            "viewname": "OUIndexView",
            "viewtag": "f364dd366b28dbc2194d7dc9c08d8dbd"
        }
    }];
});