import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "ibzpostpickupview": {
            "title": "岗位数据选择视图",
            "caption": "岗位",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostPickupView",
            "viewtag": "0581848a24a829f706252c15c641e154"
        },
        "ibzemployeeeditgridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeEditGridView",
            "viewtag": "0c24f382fdfded375e4ef737707fdd80"
        },
        "ibzorganizationeditview": {
            "title": "单位机构编辑视图",
            "caption": "单位机构",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationEditView",
            "viewtag": "12cffa053a1d3e22ab397b1164338cfb"
        },
        "ibzemployeeeditview": {
            "title": "人员编辑视图",
            "caption": "人员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeEditView",
            "viewtag": "16f9ed1179f9b3cf686cbcd796512299"
        },
        "ibzdepartmentoptionview": {
            "title": "部门选项操作视图",
            "caption": "部门",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentOptionView",
            "viewtag": "17f1f78c7a23f7546dbfef7f8fa9fcd0"
        },
        "ibzdepartmenteditview": {
            "title": "部门编辑视图",
            "caption": "部门",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentEditView",
            "viewtag": "21259e2d03645750f1d3d71839f1223b"
        },
        "ibzteammembergridview": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamMemberGridView",
            "viewtag": "221800117f6cfa4296a3f7e5dc99ce44"
        },
        "ibzemployeegridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeGridView",
            "viewtag": "2300119cfeaff98d4bc48c1679515968"
        },
        "ibzdepartmenteditgridview": {
            "title": "部门表格视图",
            "caption": "部门",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentEditGridView",
            "viewtag": "230a2347ac7bca8734046b14777bc258"
        },
        "ibzorganizationtreeexpview": {
            "title": "单位机构树导航视图",
            "caption": "部门管理",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationTreeExpView",
            "viewtag": "25e23f456601163e730de6c1a825364b"
        },
        "ibzteamgridview": {
            "title": "组表格视图",
            "caption": "组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamGridView",
            "viewtag": "364460c8f6afc2c459f8857a6d228b1a"
        },
        "ibzpostpickupgridview": {
            "title": "岗位选择表格视图",
            "caption": "岗位",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostPickupGridView",
            "viewtag": "395d443de520bbaee17c18ea0747abce"
        },
        "ibzorganizationpickupgridview": {
            "title": "单位机构选择表格视图",
            "caption": "单位机构",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationPickupGridView",
            "viewtag": "4c3fc434585ac656b753c26c1f10482b"
        },
        "ibzemployeempickupview": {
            "title": "人员数据多项选择视图",
            "caption": "人员",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeMPickupView",
            "viewtag": "5ef90c56e30ba698e1ba1fc05f426725"
        },
        "ibzemployeeoptionview": {
            "title": "人员选项操作视图",
            "caption": "人员",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeOptionView",
            "viewtag": "61a772e0bde33e5e8e9b83ea0f354271"
        },
        "ibzdepartmentpickupgridview": {
            "title": "部门选择表格视图",
            "caption": "部门",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentPickupGridView",
            "viewtag": "66fa282d24a21eec39d958e7fc6c23a8"
        },
        "ibzteameditview": {
            "title": "组编辑视图",
            "caption": "组",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamEditView",
            "viewtag": "7eef7d5d59785f49c66786ad4ba827b0"
        },
        "ibzteammembereditview": {
            "title": "组成员编辑视图",
            "caption": "组成员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZTeamMemberEditView",
            "viewtag": "89b1f5e74703dab0fca756ece369b57d"
        },
        "ibzdepartmentmpickupview": {
            "title": "部门数据多项选择视图",
            "caption": "部门",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentMPickupView",
            "viewtag": "95a44e1851d28a16a90965f60d6ff4ae"
        },
        "ibzorganizationoptionview": {
            "title": "单位机构选项操作视图",
            "caption": "单位机构",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationOptionView",
            "viewtag": "995d26f289a30e31573d557a5f5ba254"
        },
        "ibzorganizationpickupview": {
            "title": "单位机构数据选择视图",
            "caption": "单位机构",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationPickupView",
            "viewtag": "9e25d15d43ff644fa008c9cf7d063ac3"
        },
        "ibzorganizationgridview": {
            "title": "单位机构表格视图",
            "caption": "单位机构",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZOrganizationGridView",
            "viewtag": "9ed83d4d91fedf510a43bbe8908a21ba"
        },
        "ouindexview": {
            "title": "organizational-unit",
            "caption": "ibizlab",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "ou",
            "viewname": "OUIndexView",
            "viewtag": "B0D69856-0C83-421E-B5A9-5021F0BB057C"
        },
        "ibzdepartmentpickupview": {
            "title": "部门选择视图",
            "caption": "部门",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentPickupView",
            "viewtag": "b59db4df07430a34645566a64d59244c"
        },
        "ibzemployeechangepwdview": {
            "title": "人员编辑视图",
            "caption": "人员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeeChangePwdView",
            "viewtag": "b752aab6603d699de44f7dc2c8164b9c"
        },
        "ibzdeptmembereditview": {
            "title": "部门成员编辑视图",
            "caption": "部门成员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDeptMemberEditView",
            "viewtag": "bf9108c85aaa6f3d2498f87b2439b9df"
        },
        "ibzdeptmembergridview": {
            "title": "部门成员表格视图",
            "caption": "部门成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDeptMemberGridView",
            "viewtag": "c9aa00ee38b42ea5ba1d2deb5959ac2b"
        },
        "ibzdepartmenttreeexpview": {
            "title": "部门树导航视图",
            "caption": "人员管理",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentTreeExpView",
            "viewtag": "cace6f75674cff323d90d670e609aa21"
        },
        "ibzemployeepickupview": {
            "title": "人员数据选择视图",
            "caption": "人员",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeePickupView",
            "viewtag": "d1ec542e553e00c6455ca776efc61882"
        },
        "ibzdepartmentgridview": {
            "title": "部门表格视图",
            "caption": "部门",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZDepartmentGridView",
            "viewtag": "d2cc126cb4bcf523d72509bef0183ee0"
        },
        "ibzpostgridview": {
            "title": "岗位表格视图",
            "caption": "岗位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostGridView",
            "viewtag": "e87180c121ce75a22893d5e3ce0951fc"
        },
        "ibzposteditview": {
            "title": "岗位编辑视图",
            "caption": "岗位",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "IBZPostEditView",
            "viewtag": "f12a26ca0dafa7b439840dbc629c07cc"
        },
        "ibzemployeepickupgridview": {
            "title": "人员选择表格视图",
            "caption": "人员",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "IBZEmployeePickupGridView",
            "viewtag": "f1bebdb9438783db0010d34aa03092c8"
        }
    }];
});