import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "sysauthloggridview": {
            "title": "认证日志表格视图",
            "caption": "认证日志",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SysAuthLogGridView",
            "viewtag": "0134ebf9391cb5f988839332c1352cd9"
        },
        "index": {
            "title": "uaa",
            "caption": "ibizlab",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "uaa",
            "viewname": "Index",
            "viewtag": "045e3ba6825a802770d6eca089a6484d"
        },
        "sys_user_roleredirectview": {
            "title": "用户角色关系表数据重定向视图",
            "caption": "用户角色关系",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USER_ROLERedirectView",
            "viewtag": "12f53853382743f095a6af867669d8c1"
        },
        "sysappeditview": {
            "title": "应用编辑视图",
            "caption": "应用",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SysAppEditView",
            "viewtag": "137b8f036994965b8926455611848134"
        },
        "sys_rolepickupgridview": {
            "title": "角色选择表格视图",
            "caption": "系统角色",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLEPickupGridView",
            "viewtag": "1a3413067ee48ab30691eab9f345f517"
        },
        "sysuserroleeditview": {
            "title": "用户角色关系表编辑视图",
            "caption": "用户角色关系",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SysUserRoleEditView",
            "viewtag": "1ee68b6d5d4c5c9413f6874e0ccabc43"
        },
        "sys_usermpickupview": {
            "title": "用户表数据多项选择视图",
            "caption": "系统用户",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USERMPickupView",
            "viewtag": "2bc46dc8f156db2f024c1ad1b513768a"
        },
        "sys_usereditview2": {
            "title": "用户表编辑视图",
            "caption": "系统用户",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "uaa",
            "viewname": "SYS_USEREditView2",
            "viewtag": "30aed3eeb48f1f3fae5d528ea0c7ea4d"
        },
        "sys_user_rolepickupgridview": {
            "title": "用户角色关系表选择表格视图",
            "caption": "用户角色关系",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USER_ROLEPickupGridView",
            "viewtag": "320dc0d5f5dc15c74cdfe3dbb820d2ac"
        },
        "sys_role_permissionmpickupview": {
            "title": "角色权限关系表数据多项选择视图",
            "caption": "角色权限关系",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONMPickupView",
            "viewtag": "3e133a839b837d9e47f80e161d66a861"
        },
        "sys_permissiongridview": {
            "title": "权限表表格视图",
            "caption": "权限/资源",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONGridView",
            "viewtag": "42f3fa04c9dc77f235207bcbe6ac3888"
        },
        "sys_roleeditview2": {
            "title": "角色编辑视图",
            "caption": "系统角色",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLEEditView2",
            "viewtag": "4470edcdb57a14007444c0d9867e571c"
        },
        "sys_role_permissionredirectview": {
            "title": "角色权限关系表数据重定向视图",
            "caption": "角色权限关系",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONRedirectView",
            "viewtag": "47fb02384b5797f4b095e247619515f4"
        },
        "sysrolepermissiongridview": {
            "title": "角色权限关系表表格视图",
            "caption": "角色权限关系",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SysRolePermissionGridView",
            "viewtag": "61a949e3c23ebdda724888662ded1478"
        },
        "sys_role_permissionpickupgridview": {
            "title": "角色权限关系表选择表格视图",
            "caption": "角色权限关系",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONPickupGridView",
            "viewtag": "6baae51f242438b90446176f76405183"
        },
        "sys_role_permissionpickupview": {
            "title": "角色权限关系表数据选择视图",
            "caption": "角色权限关系",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONPickupView",
            "viewtag": "6cd33d562ef19ad47dd26b312b9a020e"
        },
        "sys_roleeditview": {
            "title": "角色编辑视图",
            "caption": "系统角色",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLEEditView",
            "viewtag": "6f5a41631520da5e33294a1225101e66"
        },
        "sys_userredirectview": {
            "title": "用户表数据重定向视图",
            "caption": "系统用户",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USERRedirectView",
            "viewtag": "7ea39c4b28cbc9984c7c1dd31cefc224"
        },
        "sys_role_permissioneditview": {
            "title": "角色权限关系表编辑视图",
            "caption": "角色权限关系",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONEditView",
            "viewtag": "812d0052dbbf9be1d9db9117d0988de5"
        },
        "sys_role_permissioneditview2": {
            "title": "角色权限关系表编辑视图",
            "caption": "角色权限关系",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONEditView2",
            "viewtag": "8199d3ec8c8a7a724fb0920609b4b843"
        },
        "sys_permissioneditview2": {
            "title": "权限表编辑视图",
            "caption": "权限/资源",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONEditView2",
            "viewtag": "87e2742f27704bc23e3848796e6f6ef8"
        },
        "sys_rolepickupview": {
            "title": "角色数据选择视图",
            "caption": "系统角色",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLEPickupView",
            "viewtag": "8a32be8cf2c1e224867a93bb5fc90b67"
        },
        "sys_permissionpickupview": {
            "title": "权限表数据选择视图",
            "caption": "权限/资源",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONPickupView",
            "viewtag": "8fa92a05b6911e82d9b20fd5aa37a838"
        },
        "sys_roleredirectview": {
            "title": "角色数据重定向视图",
            "caption": "系统角色",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLERedirectView",
            "viewtag": "90f0a2fa2e052d1c44bbfa420a1e90c6"
        },
        "sys_userpickupgridview": {
            "title": "用户表选择表格视图",
            "caption": "系统用户",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USERPickupGridView",
            "viewtag": "936880f60b6ef17d39d5248b5fe390b4"
        },
        "sys_usereditview": {
            "title": "用户表编辑视图",
            "caption": "系统用户",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USEREditView",
            "viewtag": "9a896aa77c214ed87ab9be4fd6c6bec5"
        },
        "sys_permissionpickupgridview": {
            "title": "权限表选择表格视图",
            "caption": "权限/资源",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONPickupGridView",
            "viewtag": "9c0b351150648f7661be53c10eaabd67"
        },
        "sys_rolegridview": {
            "title": "角色表格视图",
            "caption": "系统角色",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLEGridView",
            "viewtag": "9e9a67908b3c85516085fe19e3dd4113"
        },
        "sys_user_rolempickupview": {
            "title": "用户角色关系表数据多项选择视图",
            "caption": "用户角色关系",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USER_ROLEMPickupView",
            "viewtag": "a2397a6a8d5c48eaa98e1ec43d6396f0"
        },
        "sys_permissionmpickupview": {
            "title": "权限表数据多项选择视图",
            "caption": "权限/资源",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONMPickupView",
            "viewtag": "b8a97c1797a1b91fbb37f8c2d14b1fb6"
        },
        "sysappgridview": {
            "title": "应用表格视图",
            "caption": "应用",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SysAppGridView",
            "viewtag": "bb58e4db8024f089e1d808f0ede81302"
        },
        "sys_permissionredirectview": {
            "title": "权限表数据重定向视图",
            "caption": "权限/资源",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONRedirectView",
            "viewtag": "c1c2bc63580de24bac60af103a3fcc0f"
        },
        "sys_usergridview": {
            "title": "用户表格视图",
            "caption": "系统用户",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USERGridView",
            "viewtag": "cb64b5009e70f225a91046314f40977a"
        },
        "sys_rolempickupview": {
            "title": "角色数据多项选择视图",
            "caption": "系统角色",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLEMPickupView",
            "viewtag": "cdb0155128cac2c36012ae9692690e21"
        },
        "sys_userpickupview": {
            "title": "用户表数据选择视图",
            "caption": "系统用户",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USERPickupView",
            "viewtag": "d53cb0ce933245fae5f0623bac4fbf48"
        },
        "sys_role_permissioncustomview": {
            "title": "角色权限关系自定义视图",
            "caption": "角色权限关系",
            "viewtype": "DECUSTOMVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_ROLE_PERMISSIONCustomView",
            "viewtag": "e791be173ed0f4bbe9cce942b6edde63"
        },
        "sys_permissioneditview": {
            "title": "权限表编辑视图",
            "caption": "权限/资源",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_PERMISSIONEditView",
            "viewtag": "eb6498ba353f58d0af17bbd39702ccf7"
        },
        "sys_user_roleeditview2": {
            "title": "用户角色关系表编辑视图",
            "caption": "用户角色关系",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "uaa",
            "viewname": "SYS_USER_ROLEEditView2",
            "viewtag": "ede089b4741590173bd21b9df99c1cf0"
        },
        "sys_user_rolepickupview": {
            "title": "用户角色关系表数据选择视图",
            "caption": "用户角色关系",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USER_ROLEPickupView",
            "viewtag": "f449d9d2c7a05cc5c61380c6e7603294"
        },
        "sys_user_rolegridview": {
            "title": "用户角色关系表表格视图",
            "caption": "用户角色关系",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "uaa",
            "viewname": "SYS_USER_ROLEGridView",
            "viewtag": "fb89f9af95f2caf92ccc1249025c9a1b"
        }
    }];
});