import fs from 'fs';
//将所有mock下的文件引入到main.js
const mockAll = fs.readdirSync(__dirname+'/mock').filter((value) => {
    return value;
}).map(value => require('./' + value));

export default mockAll;