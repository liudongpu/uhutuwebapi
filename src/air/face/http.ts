
//create by reflect from com.uhutu.zooxanadu.model.UploadFilesResult
export interface IUploadFilesResult extends IRootApiResult {
    /**
     * 上传文件列表
     */
    items:IUploadFileItem[]
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPathItem
    export interface IWebPathItem {
    nodeName:string
    code:string
    parentCode:string
    pageUrl:string
    pageIcon:string
    }
    //create by reflect from com.uhutu.zoocom.model.MResult
    export interface IMResult {
    /**
     * 状态标记 
     * 默认值为1，不为1时表示出现错误  ,如果返回值为61时表示需要用户登陆
     */
    status:number
    /**
     * 错误消息
     */
    error:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebComponentInput
    export interface IWebComponentInput extends IRootApiInput {
    /**
     * 组件编号
     */
    componentCode:string
    /**
     * 组件的值
     */
    componentValue:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPageStruct
    export interface IWebPageStruct {
    /**
     * 页面名称
     */
    pageName:string
    /**
     * 页面回调脚本
     */
    pageFunc:string
    /**
     * 页面类型
     */
    pageType:string
    /**
     * 页面识别码
     */
    pageUnique:string
    /**
     * 页面路径
     */
    pagePath:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPageOperate
    export interface IWebPageOperate {
    /**
     * 操作名称
     */
    operateName:string
    /**
     * 操作编号
     */
    operateCode:string
    /**
     * 页面唯一编码
     */
    pageUnique:string
    /**
     * 操作链接
     */
    operateLink:string
    /**
     * 操作类型
     */
    operateType:string
    /**
     * 客户端执行脚本
     */
    clientJs:string
    /**
     * 操作设置json格式
     */
    operateDefine:string
    }
    //create by reflect from com.uhutu.zooweb.user.UserLoginResult
    export interface IUserLoginResult extends IMResult {
    /**
     * 授权编码
     */
    token:string
    /**
     * 登陆状态
     * 1表示登陆成功  2表示本次登陆需要图形验证码 3表示本次登陆需要手机验证码
     */
    loginStatus:string
    loginCode:string
    userCode:string
    loginName:string
    }
    //create by reflect from com.uhutu.zoocom.model.MDataMap
    export interface IMDataMap {
    [key:string]:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPathResult
    export interface IWebPathResult extends IRootApiResult {
    /**
     * 菜单列表
     */
    pathInfos:IWebPathItem[]
    /**
     * 用户姓名
     */
    userName:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPageModel
    export interface IWebPageModel {
    /**
     * 字段列表
     */
    fields:IWebPageField[]
    /**
     * 页面结构
     */
    struct:IWebPageStruct
    /**
     * 页面操作
     */
    operates:IWebPageOperate[]
    }
    //create by reflect from com.uhutu.zoodata.dbbase.BaseEntityForCode
    export interface IBaseEntityForCode extends IBaseEntity {
    code:string
    }
    //create by reflect from com.uhutu.zooweb.component.CascaderComponentExtend
    export interface ICascaderComponentExtend {
    code:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebOperateResult
    export interface IWebOperateResult extends IRootApiResult {
    /**
     * 执行成功回调脚本
     */
    successJs:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebDataInput
    export interface IWebDataInput extends IRootApiInput {
    /**
     * 页面识别码
     */
    pageUnique:string
    /**
     * 页面链接地址
     */
    pageUrl:string
    /**
     * 分页
     */
    gridNav:IMGridNav
    /**
     * 查询参数
     */
    pageQuery:IMDataMap
    }
    //create by reflect from com.uhutu.zooweb.model.ApiParamInfo
    export interface IApiParamInfo {
    apiMethod:string
    apiInput:string
    apiToken:string
    }
    //create by reflect from com.uhutu.zooweb.api.manager.ManagerLoginResult
    export interface IManagerLoginResult extends IUserLoginResult {
    }
    //create by reflect from com.uhutu.zoocom.root.RootApiInput
    export interface IRootApiInput {
    }
    //create by reflect from com.uhutu.zooweb.component.MultiplayerComponentExtend
    export interface IMultiplayerComponentExtend {
    /**
     * 数据结构编号
     */
    code:string
    /**
     * 默认空时文字
     */
    text:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebComponentResult
    export interface IWebComponentResult extends IRootApiResult {
    /**
     * 组件数据列表
     */
    dataMaps:IMDataMap[]
    dataString:string
    }
    //create by reflect from com.uhutu.zoocom.model.MGridNav
    export interface IMGridNav {
    /**
     * 当前页面
     */
    pageIndex:number
    /**
     * 每页数量
     */
    pageSize:number
    /**
     * 数据总计,为空或者小于0时重新核算
     */
    pageCount:number
    }
    //create by reflect from com.uhutu.zooweb.z.entity.ZwApiGroup
    export interface IZwApiGroup extends IBaseEntityForCode {
    /**
     * API名称
     */
    apiName:string
    /**
     * 分组编号
     */
    parentCode:string
    /**
     * 命名空间
     * 一般二级分组的有该字段
     */
    spaceName:string
    /**
     * API类
     */
    apiClass:string
    /**
     * 备注信息
     */
    remarkInfo:string
    }
    //create by reflect from com.uhutu.zoodata.dbbase.BaseEntity
    export interface IBaseEntity {
    zz:number
    za:string
    zc:string
    zu:string
    }
    //create by reflect from com.uhutu.zoocom.root.RootApiResult
    export interface IRootApiResult extends IMResult {
    }
    //create by reflect from com.uhutu.zooweb.api.manager.ManagerLoginInput
    export interface IManagerLoginInput extends IRootApiInput {
    /**
     * 登录名
     */
    loginName:string
    /**
     * 登录密码
     */
    loginPass:string
    }
    //create by reflect from com.uhutu.zooweb.component.DialogComponentExtend
    export interface IDialogComponentExtend {
    page:string
    button:string
    title:string
    max:string
    }
    //create by reflect from com.uhutu.zooweb.api.manager.ManagerLogoutInput
    export interface IManagerLogoutInput extends IRootApiInput {
    userToken:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPageResult
    export interface IWebPageResult extends IRootApiResult {
    /**
     * 页面列表
     */
    pageModel:IWebPageModel[]
    }
    //create by reflect from com.uhutu.zooweb.model.PageButtonDefine
    export interface IPageButtonDefine {
    /**
     * 按钮区域
     * default:默认,tool:工具区
     */
    buttomArea:string
    /**
     * 按钮类型
     */
    buttonType:string
    /**
     * 按钮图标
     */
    buttonIcon:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPageInput
    export interface IWebPageInput extends IRootApiInput {
    /**
     * 页面链接地址
     */
    pageUrl:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebDataResult
    export interface IWebDataResult extends IRootApiResult {
    /**
     * 页面识别码
     */
    pageUnique:string
    /**
     * 页面数据
     */
    dataMaps:IMDataMap[]
    /**
     * 分页数据
     */
    gridNav:IMGridNav
    }
    //create by reflect from com.uhutu.zooweb.model.PageButtonClient
    export interface IPageButtonClient {
    /**
     * 成功类型
     * 取值:dialogclose,pageback
     */
    successType:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebPageField
    export interface IWebPageField {
    /**
     * 字段编号
     */
    fieldId:string
    /**
     * 字段中文名称
     */
    fieldLabel:string
    /**
     * 字段备注
     */
    fieldRemark:string
    /**
     * 字段类型
     */
    fieldElement:string
    /**
     * 排序编号
     */
    fieldSort:string
    /**
     * 数据库字段名
     */
    fieldData:string
    /**
     * 数据源数据
     * 简单的数据参数，key-value结构的，数据格式为json格式
     */
    fieldSource:string
    /**
     * 验证是否必须
     * 当为1时必填
     */
    checkRequire:string
    /**
     * 验证表达式
     */
    checkVerify:string
    /**
     * 客户端扩展
     */
    clientExtend:string
    /**
     * 页面唯一编码
     */
    pageUnique:string
    }
    //create by reflect from com.uhutu.zooweb.api.webpage.WebOperateInput
    export interface IWebOperateInput extends IRootApiInput {
    /**
     * 实体对象
     */
    dataMap:IMDataMap
    /**
     * 页面识别码
     */
    pageUnique:string
    /**
     * 操作编码
     */
    operateCode:string
    /**
     * 页面链接地址
     */
    pageUrl:string
    }
    //create by reflect from com.uhutu.zooxanadu.model.UploadFileItem
    export interface IUploadFileItem {
    /**
     * 原文件名
     */
    sourceFileName:string
    /**
     * 上传后链接地址
     */
    uploadFilePath:string
    urlFile:string
    }
    //create by reflect from com.uhutu.zooweb.api.fit.FitListResult
    export interface IFitListResult extends IRootApiResult {
    groups:IZwApiGroup[]
    }
    