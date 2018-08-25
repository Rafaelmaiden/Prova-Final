const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongodbUrl = "mongodb://@localhost:27017/rafael"
//'mongodb://rafaelFa:qwe123qwe@ds229552.mlab.com:29552/app';

exports.connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true});
//mongodb://negao:negao123@ds123532.mlab.com:23532/rafael nome de usuario: RafaelFa - senha qwe123qwe - nome conta rafael fabrica 