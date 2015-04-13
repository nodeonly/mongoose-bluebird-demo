var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', passwd: 'string' });
var User = mongoose.model('User', schema);

var Promise = require('bluebird');
Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype)

module.exports = User