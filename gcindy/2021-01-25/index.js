/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-25 09:36:34
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-25 17:34:46
 * @Description: Promise的原理
 * 1、Promise 基本使用，写出一个 Demo， 用代码展示 Promise 的具体用法，为什么要用 Promise， 有什么好处？
 * 2、Promise 中内部有几个状态，分别是什么，用什么作用？
 * 3、什么是 Promise/A+ 标准，请详述？
 * 4、根据 Promise/A+ 标准，写出一个简版 Promise。
 * @Comments: 对于问题的描述过于简洁，没有充分的说明其内部的关键点，Promise 是异步，可以解决异步数据、那么为什么我们需要Promise来为我们处理异步数据呢？
 *  简要说明了Promise的内部状态，建议把每个状态之间的转向（pending -> fulfilled）这个过程中所发生的的事情说明，对于后面的写 Promise 有帮助
 *  注意，看源码时不要逐行一字阅读，建议：对段落整体阅读，理解整理段落大意，理解整体全局意思，反过来详读每个功能点的每一行代码，会起到异曲同工之处
 * @Excitation: 阅读时，不要过于着急、对于某些看不懂的可以跳跃过去，理解后面的之后反推前面的，再接再厉、加油💪！
 */

/**
 * Promise 基本使用，写出一个 Demo， 用代码展示 Promise 的具体用法，为什么要用 Promise， 有什么好处？
 * ! Promise为异步函数，它可以完美的处理异步数据，主要为了解决地狱回调、对错误的拦截等
 */
function demo() {
  const air = "天空";
  const promise = new Promise((resolve, reject) => {
    /**
     * Promise 中内部有几个状态，分别是什么，用什么作用？
     * 1、pending ==> 等待着
     * 2、fulfilled ==> 成功
     * 3、rejected ==> 失败
     */
    if (air === "天空") {
      console.log("resolve==>", air);
      resolve(air);
    } else {
      console.log("reject==>", air);
      reject(air);
    }
  });
  console.log("promise=>", promise);
}
demo();

// 函数回调地狱
function A() {
  function B() {
    function C() {
      function D() {
        function E() {
          // TODO
        }
      }
    }
  }
}

// 使用 Promise
new Promise().then().then().then().then();
/**
 * 什么是 Promise/A+ 标准，请详述？
 * 1、有返回值（成功/失败）
 * 2、在.then中去处理数据
 * 3、失败时 .catch 拦截异常
 */
var MyPromise = function () {
  // promise 实例 构造函数
  function Promise(resolver) {
    // resolver 必须是一个函数
    if (typeof resolver != "function") {
      throw new TypeError("Promise resolver is function");
    }

    if (!(this instanceof Promise)) return new Promise(resolver); // 如果不是 Promise ， 则创建并返回一个 Promise 实例

    var self = this;
    self.status = "pending"; // promise 当前状态
    self.data = undefined; // promise 的值
    // self.onResolveCallback = []; // resolve
    // self.onRejectCallback = []; // reject
    self.callbacks = []; // resolve and reject

    // resolve
    function resolve(value) {
      setTimeout(() => {
        // 当前状态为pending时
        if (self.status !== "pending") {
          return;
        }
        self.status = "resolved";
        self.data = value;

        // TODO:?
        for (var i = 0; i < self.callbacks.length; i++) {
          self.callbacks[i].onResolved(value);
        }
      });
    }

    // reject
    function reject(resaon) {
      setTimeout(() => {
        if (self.status !== "pending") {
          return;
        }
        self.status = "rejected";
        self.data = resaon;

        for (var i = 0; i < self.callbacks.length; i++) {
          self.callbacks[i].onRejected(resaon);
        }
      });
    }

    // 错误拦截处理
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // 成功的Promise
  function resolvePromise(promise, x, resolve, reject) {
    var then;
    var thenCalledOrThrow = false;

    if (promise === x) {
      return reject(new TypeError("Chaining cycle deleted for promise"));
    }

    if ((x != null && typeof x === "object") || typeof x === "function") {
      try {
        then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            function rs(y) {
              if (thenCalledOrThrow) return;
              thenCalledOrThrow = true;
              return resolvePromise(promise, y, resolve, reject);
            },
            function rj(r) {
              if (thenCalledOrThrow) return;
              thenCalledOrThrow = true;
              return reject(r);
            }
          );
        } else {
          return resolve(x);
        }
      } catch (err) {
        if (thenCalledOrThrow) return;
        thenCalledOrThrow = true;
        return reject(err);
      }
    } else {
      return resolve(x);
    }
  }

  // 原型方法
  // then
  Promise.prototype.then = function (onResolved, onRejected) {
    // 性能处理
    onResolved =
      typeof onResolved === "function"
        ? onResolved
        : function (value) {
            return value;
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function (resaon) {
            throw resaon;
          };

    var self = this;
    var promise2;

    // 将当前的状态变为 pending ===> resolved 成功
    if (self.status === "resolved") {
      return (promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
          try {
            var x = onResolved(self.data);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            return reject(err);
          }
        });
      }));
    }

    // 将当前状态变为rejected
    if (self.status === "rejected") {
      return (promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
          try {
            var x = onRejected(self.data);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            return reject(err);
          }
        });
      }));
    }

    // promise状态为pending
    // 需要等待promise的状态完成
    if (self.status === "pending") {
      return (promise2 = new Promise(function (resolve, reject) {
        self.callbacks.push({
          onResolved: function (value) {
            try {
              var x = onResolved(value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              return reject(err);
            }
          },
          onRejected: function (resaon) {
            try {
              var x = onRejected(resaon);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              return reject(err);
            }
          },
        });
      }));
    }
  };

  // 将当前promise的值传递
  Promise.prototype.valueOf = function () {
    return this.data;
  };

  // catch
  Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  // finally
  Promise.prototype.finally = function (fn) {
    return this.then(
      function (value) {
        setTimeout(fn);
        return value;
      },
      function (resaon) {
        setTimeout(fn);
        throw resaon;
      }
    );
  };

  Promise.prototype.spread = function (fn, onRejected) {
    return this.then(function (values) {
      return fn.apply(null, values);
    }, onRejected);
  };

  Promise.prototype.inject = function (fn, onRejected) {
    return this.then(function (v) {
      return fn.apply(
        null,
        fn
          .toString()
          .match(/\((.*?)\)/)[1]
          .split(",")
          .map(function (key) {
            return v[key];
          })
      );
    }, onRejected);
  };

  // Promise.prototype.delay = function (duration) {
  //   return this.then(
  //     function (value) {
  //       return new Promise(function (resolve, reject) {
  //         setTimeout(function () {
  //           resolve(value);
  //         }, duration);
  //       });
  //     },
  //     function (resaon) {
  //       return new Promise(function (resolve, reject) {
  //         setTimeout(function () {
  //           reject(resaon);
  //         }, duration);
  //       });
  //     }
  //   );
  // };

  // 静态方法
  Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
      var resolvedCounter = 0;
      var promisesNum = promises.length;
      var resolveValues = new Array(promisesNum);
      for (var i = 0; i < promisesNum; i++) {
        (function (i) {
          Promise.resolve(
            function (promises) {
              resolvedCounter++;
              resolveValues[i] = value;
              if (resolvedCounter == promisesNum) {
                return resolve(resolveValues);
              }
            },
            function (resaon) {
              reject(resaon);
            }
          );
        })(i);
      }
    });
  };

  Promise.resolve = function (value) {
    return new Promise(function (resolve, reject) {
      resolvePromise(promise, value, resolve, reject);
    });
  };

  Promise.reject = function (resaon) {
    return new Promise(function (resolve, reject) {
      reject(resaon);
    });
  };

  Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
      for (var i = 0; i < promises.length; i++) {
        Promise.resolve(function () {
          promises[i];
        }).then(
          function (value) {
            return resolve(value);
          },
          function (resaon) {
            return reject(resaon);
          }
        );
      }
    });
  };

  Promise.fcall = function (fn) {
    return Promise.resolve().then(fn);
  };

  Promise.done = Promise.stop = function () {
    return new Promise(function () {});
  };

  Promise.deferred = Promise.defer = function () {
    var dfd = {};
    dfd.promise = new Promise(function (resolve, reject) {
      dfd.resolve = resolve;
      dfd.reject = reject;
    });
    return dfd;
  };

  try {
    module.exports = Promise;
  } catch (err) {}

  return Promise;
};


const myPromise = new MyPromise()