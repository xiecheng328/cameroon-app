const Mock = require('mockjs');

const Random = Mock.Random;

const attention = function(){
    let commodity = [{
        name:'拖拉机',
        img:require('./../../../assets/img/tractors1.jpg'),  
        shop:'官方拖拉机旗舰店',
        price:100,
        value: false,
        select:false
    },{
        name:'拖拉机',
        img:require('./../../../assets/img/tractors2.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100,
        value: false,
        select:false
    },{
        name:'拖拉机',
        img:require('./../../../assets/img/tractors3.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100,
        value: false,
        select:false
    },{
        name:'拖拉机',
        img:require('./../../../assets/img/tractors4.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100,
        value: false,
        select:false
    }];
    let topic = [{
        title:'种田',
        hot:2087,
        src:require('./../../../../public/img/profileicon1@2x.png'),
        intro:'一个关于种田好处的话题',
        deleteSlider:''
    },{
        title:'不种田',
        hot:10242,
        src:require('./../../../../public/img/profileicon1@2x.png'),
        intro:'不种田坏处',
        deleteSlider:''
    },{
        title:'怎么种米好吃',
        hot:61824,
        src:require('./../../../../public/img/profileicon1@2x.png'),
        intro:'分享种米的知识',
        deleteSlider:''
    }];
    let recommend = [{
        title:'大咖1号',
        sum:1024,
        src:require('./../../../assets/img/user.png'),
        tag:'农业技术人员'
    },{
        title:'大咖2号',
        sum:1024,
        src:require('./../../../assets/img/user.png'),
        tag:'农业技术人员'
    },{
        title:'大咖3号',
        sum:1024,
        src:require('./../../../assets/img/user.png'),
        tag:'农业技术人员'
    }];
    return {
        commodity:commodity,
        topic:topic,
        recommend:recommend,
    }
}

Mock.mock('/MyInterestMock','post',attention);