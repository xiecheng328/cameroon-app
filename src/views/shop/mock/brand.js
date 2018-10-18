import Mock from 'mockjs';
var Random = Mock.Random;
Random.extend({
    BRANDNAME: function() {
        var brandNames = ['东方红','五证','星光农机','悍沃','星光至尊','东方红','五证','星光农机','悍沃','星光至尊']
        return this.pick(brandNames)
    },
    TYPENAME:function(){
        var machineryTypeNames  = ['深松机','采棉机','拖拉机','播种机','旋耕机','玉米机','小麦收割机','水稻收割机','耕地机','植保机','烘干机','大捆机','马铃薯收','花生收','排灌机','青贮藏']
        return this.pick(machineryTypeNames)
    },
    MBRAND:function(){
        var machineryBrands = ['泰山','骥驰','克拉斯','微拖','山耕','牧神','锐仕','威马','开元刀神','久保田','久富','德棵','东风井关','勃农','农哈哈','顺源','丰特','波尔图','闪锐','博田','中科','亿丰','沃得',
        '星光农机','好运来','农机盼','谷王极光','春雨','五证','金大丰','利裕丰','天人','具明','勇猛','兴仓科技','辰宇科技','麦稻之星','三伍机械','世达尔','星光农机','凯得利','华德','优牧达','赛德',
        '雷硕','希森天成','沃德','洪珠','天人','云宇','东方红','德国','荣南','神威','久保田','飞宇']
        return this.pick(machineryBrands)
    }
    
})
export default Mock.mock('brandData',{
    "machineryProuct":[{
        'brandName|+1': '@BRANDNAME',
        'machineryBrand': '@MBRAND',
        'machineryTypeName':'@TYPENAME',
        'id':1,
    },{
        'brandName|+1': '@BRANDNAME',
        'machineryBrand': '@MBRAND',
        'machineryTypeName':'@TYPENAME',
        'id':2,
    },{
        'brandName|+1': '@BRANDNAME',
        'machineryBrand': '@MBRAND',
        'machineryTypeName':'@TYPENAME',
        'id':3,
    },{
        'brandName|+1': '@BRANDNAME',
        'machineryBrand': '@MBRAND',
        'machineryTypeName':'@TYPENAME',
        'id':4,
    },{
        'brandName|+1': '@BRANDNAME',
        'machineryBrand': '@MBRAND',
        'machineryTypeName':'@TYPENAME',
        'id':5,
    }]
})
