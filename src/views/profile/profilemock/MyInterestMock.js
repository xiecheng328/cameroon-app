const Mock = require('mockjs');

const Random = Mock.Random;

const attention = function(){
    let commodity = [{
        name:'拖拉机',
        img:require('../../../../public/img/拖拉机1.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100,
    },{
        name:'拖拉机',
        img:require('../../../../public/img/拖拉机2.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100,
    },{
        name:'拖拉机',
        img:require('../../../../public/img/拖拉机3.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100
    },{
        name:'拖拉机',
        img:require('../../../../public/img/拖拉机4.jpg'),
        shop:'官方拖拉机旗舰店',
        price:100
    }];
    let topic = [{
        title:'种田',
        hot:1024,
        src:require('./../../../../public/img/profileicon1@2x.png'),
        intro:'在这里可以了解种田的知识'
    },{
        title:'不种田',
        hot:1024,
        src:require('./../../../../public/img/profileicon1@2x.png'),
        intro:'在这里可以了解不种田的生活'
    },{
        title:'种田',
        hot:1024,
        src:require('./../../../../public/img/profileicon1@2x.png'),
        intro:'在这里可以了解种田的知识'
    }]
    return {
        commodity:commodity,
        topic:topic,
    }
}

Mock.mock('/MyInterestMock','post',attention);