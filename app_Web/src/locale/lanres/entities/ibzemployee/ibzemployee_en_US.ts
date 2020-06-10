
export default {
  fields: {
    userid: '用户标识',
    username: '用户全局名',
    personname: '姓名',
    usercode: '用户工号',
    loginname: '登录名',
    password: '密码',
    domains: '区属',
    mdeptid: '主部门',
    mdeptcode: '主部门代码',
    mdeptname: '主部门名称',
    bcode: '业务编码',
    postid: '岗位',
    postcode: '岗位代码',
    postname: '岗位名称',
    orgid: '单位',
    orgcode: '单位代码',
    orgname: '单位名称',
    nickname: '昵称别名',
    sex: '性别',
    certcode: '证件号码',
    phone: '联系方式',
    birthday: '出生日期',
    email: '邮件',
    avatar: '社交账号',
    addr: '地址',
    usericon: '照片',
    ipaddr: 'ip地址',
    theme: '样式',
    lang: '语言',
    fontsize: '字号',
    memo: '备注',
    reserver: '保留',
    showorder: '排序',
    enable: 'the workflow instance current processing step is invalid',
    createdate: 'Print',
    updatedate: 'Actor',
  },
	views: {
		editview: {
			caption: "Save Row",
      title: 'Details',
		},
		gridview: {
			caption: "Save Row",
      title: 'Data already exists and cannot be created again',
		},
		changepwdview: {
			caption: "Save Row",
      title: '人员编辑视图',
		},
		optionview: {
			caption: "Save Row",
      title: '人员选项操作视图',
		},
		pickupview: {
			caption: "Save Row",
      title: 'Task',
		},
		pickupgridview: {
			caption: "Save Row",
      title: 'Export',
		},
		mpickupview: {
			caption: "Save Row",
      title: '{0} minutes ago',
		},
	},
	main_form: {
		details: {
			grouppanel1: "分组面板", 
			grouppanel2: "分组面板", 
			druipart1: "部门", 
			group1: "Workflow", 
			formpage1: "<", 
			srfupdatedate: "Actor", 
			srforikey: "", 
			srfkey: "用户标识", 
			srfmajortext: "姓名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			usercode: "用户工号", 
			personname: "姓名", 
			loginname: "登录名", 
			orgid: "单位", 
			orgname: "单位", 
			mdeptid: "主部门", 
			mdeptname: "部门", 
			mdeptcode: "主部门代码", 
			orgcode: "单位代码", 
			bcode: "业务编码", 
			nickname: "昵称别名", 
			sex: "性别", 
			birthday: "出生日期", 
			certcode: "证件号码", 
			phone: "联系方式", 
			avatar: "社交账号", 
			email: "邮件", 
			ipaddr: "ip地址", 
			showorder: "排序", 
			addr: "地址", 
			memo: "备注", 
			theme: "样式", 
			lang: "语言", 
			fontsize: "字号", 
			reserver: "保留", 
			usericon: "照片", 
			userid: "用户标识", 
		},
		uiactions: {
		},
	},
	newform_form: {
		details: {
			group1: "人员基本信息", 
			formpage1: "基本信息", 
			srfupdatedate: "Actor", 
			srforikey: "", 
			srfkey: "用户标识", 
			srfmajortext: "姓名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			usercode: "用户工号", 
			personname: "姓名", 
			loginname: "登录名", 
			orgname: "单位", 
			orgid: "单位", 
			orgcode: "单位代码", 
			mdeptname: "部门", 
			mdeptcode: "主部门代码", 
			mdeptid: "主部门", 
			enable: "the workflow instance current processing step is invalid", 
			bcode: "业务编码", 
			userid: "用户标识", 
		},
		uiactions: {
		},
	},
	changepw_form: {
		details: {
			group1: "密码信息", 
			formpage1: "基本信息", 
			srfupdatedate: "Actor", 
			srforikey: "", 
			srfkey: "用户标识", 
			srfmajortext: "姓名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			oldpasswd: "原始密码", 
			newpasswd: "新密码", 
			cfmpasswd: "新密码确认", 
			userid: "用户标识", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			usercode: "用户工号",
			personname: "姓名",
			loginname: "登录名",
			orgcode: "单位代码",
			orgname: "单位名称",
			mdeptcode: "主部门代码",
			mdeptname: "主部门名称",
			sex: "性别",
			phone: "联系方式",
			ipaddr: "ip地址",
			showorder: "排序",
		},
		uiactions: {
		},
	},
	default_searchform: {
		details: {
			formpage1: "Message View", 
			n_usercode_like: "工号", 
			n_personname_like: "姓名", 
			n_mdeptname_like: "部门", 
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
		tbitem14_initpwd: {
			caption: "初始化密码",
			tip: "初始化密码",
		},
		tbitem15: {
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
	changepwdviewtoolbar_toolbar: {
		tbitem1: {
			caption: "Save",
			tip: "Save",
		},
	},
};