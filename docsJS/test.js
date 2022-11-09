// 每次循环中，创建立即执行函数，也就是创建了新的函数作用域来保存i的值
for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function(i) {
      setTimeout(function() { console.log(i); }, 100 * i);
  })(i);
}

// setTimeout中的i是同一个函数作用域里的
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}