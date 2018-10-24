var overtime = (function() {
    var args = [];
  
    return function() {
      if(arguments.length === 0) {
        var time = 0;
        for (var i = 0, l = args.length; i < l; i++) {
          time += args[i];
        }
        return time;
      }else {
        [].push.apply(args, arguments);
      }
    }
  })();

//   函数分析：
//   1.自执行函数
//   2.用到了闭包
//   3.apply,push学习
//   apply:a.apply之前为调用函数；b.第一个参数为this的指向；c.之后的参数为掺入函数的参数（如果是数组会自动打散）
//   push:参数为1个或多个值，向数组的末尾添加一个或多个元素，返回值是数组长度
  
  overtime(3.5);    // 第一天
  overtime(4.5);    // 第二天
  overtime(2.1);    // 第三天
  //...
  
  console.log( overtime() );    // 10.1
