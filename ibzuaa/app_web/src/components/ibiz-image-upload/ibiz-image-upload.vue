<template>
    <div id="image-upload">
        <el-upload
                ref="imageUpload"
                multiple
                :file-list="imageList"
                list-type="picture-card"
                :action="getAction()"
                :headers="myHeaders"
                :limit="limit"
                :before-upload="beforeUpload"
                :http-request="customImageUpload">
            <i class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file,index}">
                <img class="el-upload-list__item-thumbnail" :src="file.url">
                <span class="el-upload-list__item-actions">
                    <!--预览按钮-->
                    <span class="el-upload-list__item-preview" @click="onPreview(file)" title="预览"
                          v-show="showPreview">
                        <i class="el-icon-view"></i>
                    </span>
                    <!--OCR按钮-->
                    <span class="el-upload-list__item-delete" @click="onOcr(file)" title="OCR识别"
                          v-show="showOcrview && (file.name.match(/^.+\.(gif|GIF|jpg|JPG|jpeg|JPEG|png|PNG|bmp|BMP)$/))">
                      <i class="el-icon-camera"></i>
                    </span>
                    <!--下载按钮-->
                    <span class="el-upload-list__item-delete" @click="onDownload(file)" title="下载">
                      <i class="el-icon-download"></i>
                    </span>
                    <!--删除按钮-->
                    <span class="el-upload-list__item-delete" @click="onRemove(file)" title="删除">
                      <i class="el-icon-delete"></i>
                    </span>
              </span>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" :modal="false">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
    import {Message, MessageBox} from 'element-ui';
    import Axios from 'axios';
    import {Subject, Unsubscribable} from 'rxjs';

    @Component({})
    export default class IbizImageUpload extends Vue {

        /**
         * 当前表单对象
         *
         * @type {*}
         * @memberof DiskImageUplaod
         */
        @Prop() public data!: any;

        /**
         * 当前属性名
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        @Prop() public formItemName!: string;

        /**
         * 当前属性值
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        @Prop() public value!: string;

        /**
         * 当前表单状态
         *
         * @type {*}
         * @memberof DiskImageUplaod
         */
        @Prop() public formState!: any;

        /**
         * 默认为当前实体名称，有指定则按表单参数
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        @Prop() public folder!: string;

        /**
         * 默认为当前实体主键id，有指定则按表单参数
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        @Prop() public ownerid!: string;

        /**
         * 默认为当前属性名，有指定则按表单参数
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        @Prop() public ownertype!: string;

        /**
         * 持久化
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        @Prop({default: false}) public persistence?: boolean;

        /**
         * 是否显示预览按钮
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        @Prop({default: false}) public showPreview?: boolean;


        /**
         * 是否显示OCR按钮
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        @Prop({default: false}) public showOcrview?: boolean;

        /**
         * 单文件大小
         *
         * @type {number}
         * @memberof DiskImageUplaod
         */
        @Prop({default: 1}) public size!: number;

        /**
         * 文件上传个数
         *
         * @type {number}
         * @memberof DiskImageUplaod
         */
        @Prop({default: 5}) public limit!: number;

        /**
         * 表单是否处于编辑状态（有真实主键,srfuf='1';srfuf='0'时处于新建未保存）
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        public srfuf: string = '0';

        /**
         * 图片列表
         *
         * @type {Array<any>}
         * @memberof DiskImageUplaod
         */
        public imageList: Array<any> = [];

        /**
         * 当前登陆人的token
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        public token: string = "Bearer " + localStorage.getItem('token');

        /**
         * 上传文件请求头
         *
         * @type {*}
         * @memberof DiskImageUplaod
         */
        public myHeaders: any = {Authorization: this.token};

        /**
         * 表单状态事件
         *
         * @type {*}
         * @memberof DiskImageUplaod
         */
        public formStateEvent: any | Unsubscribable | undefined;

        /**
         * 批量更新标识，false为不更新，true才可以更新
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        public isUpdateBatch: boolean = true;

        /**
         * 新建状态标识,true为新建，false为编辑
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        public isCreate: boolean = true;

        /**
         * 预览弹出框显示标识，true显示，false隐藏
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        public dialogVisible: boolean = false;

        /**
         * 预览弹出框中的图片地址
         *
         * @type {string}
         * @memberof DiskImageUplaod
         */
        public dialogImageUrl: string = '';

        /**
         * 存放图片的fileid,用于图片列表定位
         *
         * @type {boolean}
         * @memberof DiskImageUplaod
         */
        public imageFileids: Array<any> = [];

        /**
         * 拼接上传路径
         *
         * @memberof DiskImageUplaod
         */
        public getAction() {
            return '/net-disk/upload/' + this.getFolder() + '?ownertype=' + this.getOwnertype() + '&ownerid=' + this.getOwnerid();
        }

        /**
         * return folder
         *
         * @memberof DiskImageUplaod
         */
        public getFolder() {
            return typeof this.folder == "string" ? this.folder : JSON.stringify(this.folder);
        }

        /**
         * return ownertype
         *
         * @memberof DiskImageUplaod
         */
        public getOwnertype() {
            return typeof this.ownertype == "string" ? this.ownertype : JSON.stringify(this.ownertype);
        }

        /**
         * return ownerid
         *
         * @memberof DiskImageUplaod
         */
        public getOwnerid() {
            return typeof this.ownerid == "string" ? this.ownerid : JSON.stringify(this.ownerid);
        }

        /**
         * vue生命周期create
         *
         * @memberof DiskImageUplaod
         */
        public created() {
            this.formStateEvent = this.formState.subscribe(($event: any) => {
                // 表单加载完成
                if (Object.is($event.type, 'load')) {
                    const data = JSON.parse(JSON.stringify($event.data));
                    // 编辑表单，保存时不进行批量更新
                    if (data.srfuf == '1') {
                        this.isCreate = false;
                        this.isUpdateBatch = false;
                    }
                    // 当persistence = true时,表单持久化
                    if (this.persistence == true) {
                        // 直接从表单的data数据里获取当前属性的值
                        if (data[this.formItemName] && this.imageList.length == 0) {
                            const files = JSON.parse(data[this.formItemName]);
                            files.forEach((item: any, i: number) => {
                                // 图片列表显示缩略图需要获取真实的图片信息
                                if (item.id && item.name) {
                                    this.getRealImageData(item);
                                }
                            });
                        }
                    } else {
                        // 发送get请求获取图片列表
                        this.getFiles();
                    }
                }
                // 表单保存完成
                if (Object.is($event.type, 'save')) {
                    // 批量更新文件表中的ownerid
                    if (this.isUpdateBatch == true && this.imageList.length > 0) {
                        this.updateFileBatch(this.imageList);
                    }
                }
            });
        }

        /**
         * 获取图片列表
         *
         * @memberof DiskImageUplaod
         */
        public getFiles() {
            // 拼接url
            const getUrl = '/net-disk/files/' + this.getFolder();
            // 发送get请求
            Axios.get(getUrl, {
                params: {
                    ownertype: this.getOwnertype(),
                    ownerid: this.getOwnerid(),
                },
            }).then(response => {
                if (!response || response.status != 200) {
                    Message.error("获取图片列表失败!");
                    return;
                }
                // 返回的是一个jsonArray
                if (response.data) {
                    const files = JSON.parse(JSON.stringify(response.data));
                    if (this.imageList.length == 0) {
                        files.forEach((item: any, i: number) => {
                            // 图片列表显示缩略图需要获取真实的图片信息
                            if (item.id && item.name) {
                                this.getRealImageData(item);
                            }
                        });
                    }
                }
            }).catch(error => {
                Message.error("获取图片列表失败:" + error);
            });
        }

        /**
         * 获取真实的图片信息
         * @param file
         * @memberof DiskImageUplaod
         */
        public getRealImageData(file: any) {
            let fileData = file;
            // 拼接url，与下载一致
            const downloadUrl = '/net-disk/download/' + this.getFolder() + '/' + fileData.id + '/' + fileData.name;
            // 发送get请求
            Axios.get(downloadUrl, {
                headers: {
                    'authcode': fileData.authcode
                },
                responseType: 'blob',
            }).then(res => {
                if (!res || res.status != 200) {
                    Message.error("下载缩略图失败!");
                }
                // 请求成功，后台返回的是一个文件流
                if (res.data) {
                    // 用blob对象获取文件流
                    var blob = new Blob([res.data], {type: res.headers['content-type']});
                    // 通过文件流创建下载链接
                    var href = URL.createObjectURL(blob);
                    // 将下载链接保存到图片中
                    fileData.url = href;
                    // 保存图片fileid
                    if (fileData.fileid) {
                        this.imageFileids.push(fileData.fileid);
                    } else if (fileData.id) {
                        this.imageFileids.push(fileData.id);
                    } else {
                        Message.error("图片id不存在!");
                        return;
                    }
                    // 保存图片到图片列表进行显示
                    this.imageList.push(fileData);
                } else {
                    Message.error('下载缩略图失败,未获取到文件!');
                }
            }).catch(error => {
                Message.error("下载缩略图失败:" + error);
            });
        }

        /**
         * 上传之前
         * @param file
         * @memberof DiskImageUplaod
         */
        public beforeUpload(file: any) {
            // 支持上传的图片格式
            if (!file.name.match(/^.+\.(gif|GIF|jpg|JPG|jpeg|JPEG|png|PNG|bmp|BMP)$/)) {
                Message.error(`上传失败,仅支持＇gif，jpg，png，bmp＇格式的图片!`);
                return false;
            }
            // 文件大小
            const isSize = file.size / 1024 / 1024 < this.size;
            if (!isSize) {
                Message.error(`上传失败,单个图片不得超过${this.size}M!`);
                return false;
            }
        }

        /**
         * 自定义图片上传
         * @param param
         * @memberof DiskImageUplaod
         */
        public customImageUpload(param: any) {
            // 上传的文件
            let file = param.file;
            // formData传参
            let formData = new FormData();
            formData.append('file', file);
            // 拼接url
            const uploadUrl = this.getAction();
            // 发送post请求
            Axios.post(uploadUrl, formData, {timeout: 2000}).then(response => {
                if (!response || response.status != 200) {
                    Message.error('上传图片失败!');
                }
                // 返回的是一个jsonobject
                if (response.data) {
                    let returnData = response.data;
                    // 拼接缩略图下载url
                    const downloadUrl = '/net-disk/download/' + this.getFolder() + '/' + returnData.id + '/' + returnData.name;
                    // 发送get请求
                    Axios.get(downloadUrl, {
                        headers: {
                            'authcode': returnData.authcode
                        },
                        responseType: 'blob',
                    }).then(res => {
                        if (!res || res.status != 200) {
                            Message.error("下载缩略图失败!");
                            return;
                        }
                        // 请求成功，后台返回的是一个文件流
                        if (res.data) {
                            // 用blob对象获取文件流
                            var blob = new Blob([res.data], {type: res.headers['content-type']});
                            // 通过文件流创建下载链接
                            var href = URL.createObjectURL(blob);
                            // 将下载链接保存到本次上传成功后返回的jsonobject中
                            returnData.url = href;
                            // 保存jsonobject中的图片fileid
                            if (returnData.fileid) {
                                this.imageFileids.push(returnData.fileid);
                            } else if (returnData.id) {
                                this.imageFileids.push(returnData.id);
                            } else {
                                Message.error("图片id不存在!");
                                return;
                            }
                            // 保存jsonobject到图片列表进行显示
                            this.imageList.push(returnData);
                            // 新建表单上传时，后续需要批量更新操作
                            if (this.isCreate == true) {
                                this.isUpdateBatch = true;
                            }
                            // persistence=true时，需要持久化表单属性
                            if (this.persistence == true && this.imageList.length > 0) {
                                const value = JSON.stringify(this.imageList);
                                this.$emit('formitemvaluechange', {name: this.formItemName, value: value});
                            }
                        } else {
                            Message.error('下载缩略图失败,未获取到文件!');
                        }
                    }).catch(error => {
                        Message.error("下载缩略图失败:" + error);
                    });
                }
            }).catch(err => {
                Message.error('上传图片失败:' + err);
            });
        }


        /**
         *　预览
         * @param file
         * @memberof DiskImageUplaod
         */
        public onPreview(file: any) {
            if (file.url) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            } else {
                Message.error("图片url不存在");
            }
        }

        /**
         * Ocr识别
         * @param file
         * @memberof DiskImageUplaod
         */
        public onOcr(file: any) {
            // 拼接url
            const id = typeof file.id == "string" ? file.id : JSON.stringify(file.id);
            const name = typeof file.name == "string" ? file.name : JSON.stringify(file.name);
            const ocrUrl = '/net-disk/ocrview/' + this.getFolder() + '/' + id + '/' + name + '?authcode=' + file.authcode;
            // 新窗口打开url
            window.open(ocrUrl);
        }

        /**
         * 下载
         * @param file
         * @memberof DiskImageUplaod
         */
        public onDownload(file: any) {
            // 拼接url
            const id = typeof file.id == "string" ? file.id : JSON.stringify(file.id);
            const name = typeof file.name == "string" ? file.name : JSON.stringify(file.filename);
            const downloadUrl = '/net-disk/download/' + this.getFolder() + '/' + id + '/' + name;
            // 发送get请求
            Axios.get(downloadUrl, {
                headers: {
                    'authcode': file.authcode
                },
                responseType: 'blob',
            }).then(response => {
                if (!response || response.status != 200) {
                    Message.error("下载图片失败!");
                    return;
                }
                // 请求成功，后台返回的是一个文件流
                if (response.data) {
                    // 获取文件名
                    const disposition = response.headers['content-disposition'];
                    const filename = disposition.split('filename=')[1];
                    // 用blob对象获取文件流
                    var blob = new Blob([response.data], {type: response.headers['content-type']});
                    // 通过文件流创建下载链接
                    var href = URL.createObjectURL(blob);
                    // 创建一个a元素并设置相关属性
                    var a = document.createElement('a');
                    a.href = href;
                    a.download = filename;
                    // 添加a元素到当前网页
                    document.body.appendChild(a);
                    // 触发a元素的点击事件，实现下载
                    a.click();
                    // 下载完成，从当前网页移除a元素
                    document.body.removeChild(a);
                    // 释放blob对象
                    URL.revokeObjectURL(href);
                } else {
                    Message.error('下载图片失败,未找到图片!');
                }
            }).catch(error => {
                Message.error("下载图片失败:" + error);
            });
        }


        /**
         * 删除
         * @param file
         * @memberof DiskImageUplaod
         */
        public onRemove(file: any) {
            if (file) {
                MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (this.imageFileids.indexOf(file.id) != -1) {
                        // 要删除的图片在图片列表中的下标
                        const index = this.imageFileids.indexOf(file.id);
                        //　拼接url
                        const deleteUrl = '/net-disk/files/' + file.id;
                        // 发送delete请求
                        Axios.delete(deleteUrl).then(response => {
                            if (!response || response.status != 200) {
                                Message.error("删除图片失败!");
                            }
                            // 从fileid数组中删除
                            this.imageFileids.splice(index, 1);
                            // 从图片列表中删除
                            this.imageList.splice(index, 1);
                            // persistence=true,时需要持久化表单属性
                            if (this.persistence == true) {
                                const value = JSON.stringify(this.imageList);
                                this.$emit('formitemvaluechange', {name: this.formItemName, value: value});
                            }
                        }).catch(error => {
                            // 提示删除失败
                            Message.error("删除图片失败:" + error);
                        });
                    }
                });
            }
        }


        /**
         * 批量更新文件表的ownerid
         * @param files
         * @memberof DiskImageUplaod
         */
        public updateFileBatch(files: any) {
            // 拼接url
            const updateUrl = '/net-disk/files/' + this.getFolder() + '?ownertype=' + this.getOwnertype() + "&ownerid=" + this.getOwnerid();
            // requestBody参数
            let requestBody = [];
            if (files) {
                requestBody = files;
            }
            // 发送post请求
            Axios.post(updateUrl, requestBody, {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                timeout: 2000
            }).then(response => {
                if (!response || response.status != 200) {
                    Message.error("批量更新文件失败!");
                    return;
                }
            }).catch(error => {
                Message.error("批量更新文件失败:" + error);
            });
        }


    }
</script>

<style scoped>

</style>