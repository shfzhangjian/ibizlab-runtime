
export default {
  fields: {
    definitionkey: "DefinitionKey",
    definitionname: "流程定义名称",
    modelversion: "模型版本",
    modelenable: "模型是否启用",
    pssystemid: "系统标识",
    md5check: "校验",
    bpmnfile: "BPMN",
    deploykey: "DeployKey",
    webserviceids: "WebServiceIds",
    mobileserviceids: "MobileServiceIds",
  },
	views: {
		editview: {
			caption: "流程定义",
      		title: "流程定义",
		},
		gridview: {
			caption: "流程定义",
      		title: "流程定义",
		},
	},
	main_form: {
		details: {
			group1: "模型基本信息", 
			formpage1: "基本信息", 
			srforikey: "", 
			srfkey: "DefinitionKey", 
			srfmajortext: "流程定义名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			definitionkey: "DefinitionKey", 
			deploykey: "DefinitionKey", 
			definitionname: "流程定义名称", 
			pssystemid: "系统标识", 
			modelversion: "模型版本", 
			modelenable: "模型是否启用", 
			bpmnfile: "BPMN", 
			md5check: "校验", 
			webserviceids: "WebServiceIds", 
			mobileserviceids: "MobileServiceIds", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			definitionkey: "DefinitionKey",
			definitionname: "流程定义名称",
			pssystemid: "系统标识",
			modelversion: "模型版本",
			modelenable: "模型是否启用",
		},
		nodata:"",
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "常规条件", 
			n_deploykey_like: "DefinitionKey", 
			n_definitionname_like: "流程定义名称", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		deuiaction1: {
			caption: "Save And Close",
			tip: "Save And Close Window",
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
	},
};