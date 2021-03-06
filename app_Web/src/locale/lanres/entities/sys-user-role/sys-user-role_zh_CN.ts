export default {
  fields: {
    userroleid: "用户角色关系标识",
    roleid: "角色标识",
    rolename: "角色名称",
    userid: "用户标识",
    personname: "用户名称",
    loginname: "登录名",
    orgname: "单位",
    mdeptname: "主部门",
    createdate: "建立时间",
    updatedate: "更新时间",
  },
	views: {
		gridview: {
			caption: "用户角色关系",
      		title: "用户角色关系表表格视图",
		},
		editview: {
			caption: "用户角色",
      		title: "用户角色",
		},
	},
	main_form: {
		details: {
			group1: "用户角色关系表基本信息", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "用户角色关系标识", 
			srfmajortext: "用户标识", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			sys_roleid: "角色标识", 
			sys_user_roleid: "用户角色关系标识", 
			sys_rolename: "角色名称", 
			sys_username: "用户名称", 
			sys_userid: "用户标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			sys_username: "用户名称",
			sys_rolename: "角色名称",
			loginname: "登录名",
			orgname: "单位",
			mdeptname: "主部门",
		},
		nodata:"",
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			n_sys_username_like: "用户名称(%)", 
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem3: {
			caption: "新建",
			tip: "新建",
		},
		tbitem4: {
			caption: "编辑",
			tip: "编辑",
		},
		tbitem6: {
			caption: "拷贝",
			tip: "拷贝",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "删除",
			tip: "删除",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "导出",
			tip: "导出",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "导出数据模型",
			tip: "导出数据模型",
		},
		tbitem23: {
			caption: "数据导入",
			tip: "数据导入",
		},
		tbitem17: {
			caption: "-",
			tip: "",
		},
		tbitem19: {
			caption: "过滤",
			tip: "过滤",
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		deuiaction1: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		deuiaction2: {
			caption: "关闭",
			tip: "关闭",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "拷贝",
			tip: "拷贝",
		},
	},
};