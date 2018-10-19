const Mock = require('mockjs');

const Random = Mock.Random;

const attention = function(){
    let commodity = [{
        name:'拖拉机',
        img:require('./../../../assets/img/拖拉机1.jpg'),  
        shop:'官方拖拉机旗舰店',
        price:100,
    },{
        name:'拖拉机',
        img:require('./../../../assets/img/拖拉机2.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100,
    },{
        name:'拖拉机',
        img:require('./../../../assets/img/拖拉机3.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100
    },{
        name:'拖拉机',
        img:require('./../../../assets/img/拖拉机4.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100
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
    }]
    return {
        commodity:commodity,
        topic:topic,
    }
}

Mock.mock('/MyInterestMock','post',attention);