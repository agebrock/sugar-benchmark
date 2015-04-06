var Benchmark = require('benchmark');

Benchmark.Suite.prototype.addAsync = function(name, fn){
	this.add(name,{
		defer:true,
		fn:function(deferred){
			fn.call(null, deferred.resolve.bind(deferred));
		}
	});
}

Benchmark.createDefault = function(){
	var suite = new Benchmark.Suite;
	suite.on('cycle', function(event) {
	  console.log(String(event.target));
	})
	.on('complete', function() {
	  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
	});
	setImmediate(function(){
		suite.run({ 'async': true });
	});
	return suite;	
}

module.exports = Benchmark;