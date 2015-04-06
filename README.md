#sugar-benchmark

Just a banchmark.js wrapper to speed up common tasks.

##install
```sh
# npm install sugar-benchmark
```

###use
```js
var Benchmark = require('sugar-benchmark'),
suite = Benchmark.createDefault();

suite.addAsync('test1', function(cb){
 setTimeout(function(){
  	cb();
  },10)
});

suite.addAsync('test2', function(cb){
 setTimeout(function(){
  	cb();
  },20)
});

/**
OUTPUT:
test1 x 78.45 ops/sec ±0.76% (75 runs sampled)
test2 x 41.09 ops/sec ±0.64% (67 runs sampled)
**/

```
