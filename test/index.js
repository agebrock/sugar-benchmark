var Benchmark = require('../'),
suite = Benchmark.createDefault();

suite.addAsync('test2', function(cb){
 setTimeout(function(){
  	cb();
  },10)
});

suite.addAsync('test2', function(cb){
 setTimeout(function(){
  	cb();
  },20)
});
