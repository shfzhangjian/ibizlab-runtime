
export default {
  fields: {
    orgid: "单位标识",
    orgcode: "单位代码",
    orgname: "名称",
    parentorgid: "上级单位",
    shortname: "单位简称",
    orglevel: "单位级别",
    showorder: "排序",
    parentorgname: "上级单位",
    domains: "区属",
    enable: "逻辑有效",
    createdate: "创建时间",
    updatedate: "最后修改时间",
  },
	views: {
		pickupgridview: {
			caption: "单位机构",
      		title: "单位机构选择表格视图",
		},
		editview: {
			caption: "单位管理",
      		title: "单位管理",
		},
		treeexpview: {
			caption: "部门管理",
      		title: "部门管理",
		},
		gridview: {
			caption: "单位管理",
      		title: "单位管理",
		},
		pickupview: {
			caption: "单位机构",
      		title: "单位机构数据选择视图",
		},
		optionview: {
			caption: "单位快速新建",
      		title: "单位快速新建",
		},
	},
	main_form: {
		details: {
			formpage1: "基本信息", 
			srfupdatedate: "最后修改时间", 
			srforikey: "", 
			srfkey: "单位标识", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			orgid: "单位标识", 
			orgcode: "单位代码", 
			orgname: "名称", 
			porgname: "上级单位", 
			orglevel: "单位级别", 
			shortname: "单位简称", 
			showorder: "排序", 
			porgid: "上级单位", 
			createdate: "创建时间", 
			updatedate: "最后修改时间", 
		},
		uiactions: {
		},
	},
	newform_form: {
		details: {
			group1: "单位机构基本信息", 
			formpage1: "基本信息", 
			srfupdatedate: "最后修改时间", 
			srforikey: "", 
			srfkey: "单位标识", 
			srfmajortext: "名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			orgcode: "单位代码", 
			orgname: "名称", 
			porgname: "上级单位", 
			porgid: "上级单位", 
			enable: "逻辑有效", 
			orgid: "单位标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			orgid: "单位标识",
			orgcode: "单位代码",
			orgname: "名称",
			orglevel: "单位级别",
			shortname: "单位简称",
			porgname: "上级单位",
			porgid: "上级单位",
			showorder: "排序",
			createdate: "创建时间",
			updatedate: "最后修改时间",
		},
		nodata:"",
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			orgcode: "单位代码(文本左包含(%#))", 
			n_orgname_like: "名称(%)", 
			n_porgid_eq: "上级单位(=)", 
			porgname: "上级单位(等于(=))", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem1_opennewcreateview: {
			caption: "快速新建",
			tip: "快速新建",
		},
		tbitem2: {
			caption: "-",
			tip: "",
		},
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		tbitem4: {
			caption: "Edit",
			tip: "Edit {0}",
		},
		tbitem6: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem7: {
			caption: "-",
			tip: "",
		},
		tbitem8: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		tbitem9: {
			caption: "-",
			tip: "",
		},
		tbitem13: {
			caption: "Export",
			tip: "Export {0} Data To Excel",
		},
		tbitem10: {
			caption: "-",
			tip: "",
		},
		tbitem19: {
			caption: "Filter",
			tip: "Filter",
		},
	},
	orgtree_treeview: {
		nodata:"",
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
		},
	},
};