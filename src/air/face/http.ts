
//create by reflect from com.uhutu.zoocom.root.RootApiInput
export interface IRootApiInput {
}
//create by reflect from com.uhutu.zooweb.model.ApiStructClass
export interface IApiStructClass {
className:string
/**
 * 唯一标记
 */
uniqueCode:string
classFields:IApiStructField[]
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
//create by reflect from com.uhutu.zooweb.api.fit.FitInfoResult
export interface IFitInfoResult extends IRootApiResult {
structInfo:IApiStructInfo
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
//create by reflect from com.uhutu.zoodata.dbbase.BaseEntityForCode
export interface IBaseEntityForCode extends IBaseEntity {
code:string
}
//create by reflect from com.uhutu.zooweb.model.ApiStructInfo
export interface IApiStructInfo {
/**
 * API函数
 */
structName:string
structInput:IApiStructClass
structResult:IApiStructClass
structGroup:IZwApiGroup
structList:IApiStructClass[]
}
//create by reflect from com.uhutu.zooweb.model.ApiParamInfo
export interface IApiParamInfo {
apiMethod:string
apiInput:string
apiToken:string
}
//create by reflect from com.uhutu.zooweb.api.fit.FitListResult
export interface IFitListResult extends IRootApiResult {
groups:IZwApiGroup[]
}
//create by reflect from com.uhutu.zooweb.api.fit.FitInfoInput
export interface IFitInfoInput extends IRootApiInput {
apiCode:string
}
//create by reflect from com.uhutu.zooweb.model.ApiStructField
export interface IApiStructField {
/**
 * 字段名称
 */
fieldName:string
fieldType:string
fieldClass:string
/**
 * 唯一标记
 */
uniqueCode:string
/**
 * 字段中文
 */
fieldNote:string
/**
 * 备注信息
 */
filedRemark:string
}
