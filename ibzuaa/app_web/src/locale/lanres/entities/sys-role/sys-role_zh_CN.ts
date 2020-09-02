export default {
  fields: {
    roleid: "角色标识",
    rolename: "角色名称",
    memo: "备注",
    proleid: "父角色标识",
    prolename: "父角色名称",
    createdate: "建立时间",
    updatedate: "更新时间",
    createman: "建立人",
    updateman: "更新人",
  },
	views: {
		gridview: {
			caption: "角色",
      		title: "角色",
		},
		pickupview: {
			caption: "系统角色",
      		title: "角色数据选择视图",
		},
		redirectview: {
			caption: "系统角色",
      		title: "角色数据重定向视图",
		},
		editview: {
			caption: "角色",
      		title: "角色",
		},
		pickupgridview: {
			caption: "系统角色",
      		title: "角色选择表格视图",
		},
		editview2: {
			caption: "角色",
      		title: "角色",
		},
		mpickupview: {
			caption: "系统角色",
      		title: "角色数据多项选择视图",
		},
	},
	main_form: {
		details: {
			group1: "角色表基本信息", 
			druipart1: "权限", 
			tabpage1: "权限", 
			druipart2: "用户", 
			tabpage2: "用户", 
			tabpanel1: "", 
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "角色标识", 
			srfmajortext: "角色名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			sys_rolename: "角色名称", 
			prolename: "父角色名称", 
			memo: "备注", 
			sys_roleid: "角色标识", 
			proleid: "父角色标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			sys_roleid: "角色标识",
			sys_rolename: "角色名称",
			prolename: "父角色名称",
			memo: "备注",
			updatedate: "更新时间",
			proleid: "父角色标识",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			n_sys_rolename_like: "角色名称(%)", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "新建",
			tip: "新建",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "拷贝",
			tip: "拷贝",
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
		tbitem19: {
			caption: "过滤",
			tip: "过滤",
		},
	},
	editview2toolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "新建",
			tip: "新建",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "拷贝",
			tip: "拷贝",
		},
	},
};