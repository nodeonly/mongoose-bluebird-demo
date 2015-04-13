var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

require('../model/db');

var User = require('../model/user');

describe('User', function(){
	before(function() {
    // runs before all tests in this block
    // console.log('user= ' + User);
  })
  after(function(){
    // runs after all tests in this block
  })
  beforeEach(function(){
    // runs before each test in this block
  })
  afterEach(function(){
    // runs after each test in this block
  })
	
  describe('#test()', function(){
    it('should return ok when test finished', function(done){
      this.timeout(15000);
      var user = new User({name:'alfred sang',passwd:'000000'});
      var prev_user = {};
      user.saveAsync()
        // We need to use `spread` because `user.save` yields an array 
      .spread(function(u){
          prev_user = u;
          
          assert.equal(prev_user.name,'alfred sang');
          
          var conditions = { name: 'borne' }
                , update = { $set: { name: 'zhangting' }}
                , options = {};
                
          return User.updateAsync({_id: u._id}, update, options);
        }).then(function(docs){
          // assert.equal(prev_user.name, 'alfred sang1');
          assert.equal(docs.ok, 1);
          done();
        }).catch(function(err) {
          done(err);
        })
    })
  })
  
})
