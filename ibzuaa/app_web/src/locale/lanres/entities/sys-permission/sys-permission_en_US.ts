
export default {
  fields: {
    permissionid: "资源标识",
    permissionname: "资源名称",
    permissiontype: "资源类别",
    pssystemid: "系统",
    enable: "逻辑有效",
    createdate: "建立时间",
    updatedate: "更新时间",
  },
	views: {
		editview2: {
			caption: "权限/资源",
      		title: "权限表编辑视图",
		},
		gridview: {
			caption: "权限/资源",
      		title: "权限表表格视图",
		},
		pickupview: {
			caption: "权限/资源",
      		title: "权限表数据选择视图",
		},
		mpickupview: {
			caption: "权限/资源",
      		title: "权限表数据多项选择视图",
		},
		pickupgridview: {
			caption: "权限/资源",
      		title: "权限表选择表格视图",
		},
		editview: {
			caption: "权限/资源",
      		title: "权限表编辑视图",
		},
		redirectview: {
			caption: "权限/资源",
      		title: "权限表数据重定向视图",
		},
	},
	main_form: {
		details: {
			formpage1: "基本信息", 
			srfupdatedate: "更新时间", 
			srforikey: "", 
			srfkey: "资源标识", 
			srfmajortext: "资源名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			sys_permissionname: "资源名称", 
			sys_permissionid: "资源标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			sys_permissionid: "资源标识",
			sys_permissionname: "资源名称",
		},
		nodata:"",
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
		},
		uiactions: {
		},
	},
	editview2toolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
	},
	gridviewtoolbar_toolbar: {
		tbitem3: {
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
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
	},
};