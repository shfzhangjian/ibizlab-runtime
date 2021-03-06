
export default {
  fields: {
    tid: "模板标识",
    template_name: "模板标题",
    template_type: "模板类型",
    content: "模板内容",
    template_id: "模板标识",
    template_url: "URL",
    access_id: "开放平台接入标识",
    access_name: "接入平台",
    open_type: "接入平台类型",
  },
	views: {
		gridview: {
			caption: "消息模板",
      		title: "消息模板表格视图",
		},
		editview: {
			caption: "消息模板",
      		title: "消息模板编辑视图",
		},
	},
	main_form: {
		details: {
			group1: "消息模板基本信息", 
			grouppanel1: "分组面板", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "模板标识", 
			srfmajortext: "模板标题", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			accessid: "开放平台接入标识", 
			accessname: "接入平台", 
			open_type: "接入平台类型", 
			template_type: "模板类型", 
			template_name: "模板标题", 
			template_id: "模板标识", 
			content: "模板内容", 
			template_url: "URL", 
			tid: "模板标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			template_type: "模板类型",
			template_id: "模板标识",
			template_name: "模板标题",
			open_type: "接入平台类型",
			accessname: "接入平台",
		},
		nodata:"",
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			n_accessname_like: "接入平台(%)", 
			n_template_name_like: "模板标题(文本包含(%))", 
		},
		uiactions: {
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
		tbitem16: {
			caption: "其它",
			tip: "其它",
		},
		tbitem21: {
			caption: "Export Data Model",
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
			caption: "Filter",
			tip: "Filter",
		},
		tbitem18: {
			caption: "Help",
			tip: "Help",
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem4: {
			caption: "Save And New",
			tip: "Save And New",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
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
		tbitem16: {
			caption: "-",
			tip: "",
		},
		tbitem23: {
			caption: "第一个记录",
			tip: "第一个记录",
		},
		tbitem24: {
			caption: "上一个记录",
			tip: "上一个记录",
		},
		tbitem25: {
			caption: "下一个记录",
			tip: "下一个记录",
		},
		tbitem26: {
			caption: "最后一个记录",
			tip: "最后一个记录",
		},
		tbitem21: {
			caption: "-",
			tip: "",
		},
		tbitem22: {
			caption: "Help",
			tip: "Help",
		},
	},
};