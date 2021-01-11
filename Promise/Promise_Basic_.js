//Ex1 - 基本Promise語法
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功的話,請呼叫resolve方法!");
        //reject("失敗的話,請呼叫resolve方法!");
    }, 3000);
});

promise1
    .then(result => {
        console.log(typeof result);
        console.log(promise1 instanceof Promise)
    })
    .catch(ex => {
        console.log("失敗原因:" + ex);
        console.log(promise1);
    })
    .finally(() => {
        console.log("Promise finally 完成");
        console.log(promise1);
    });

const promise3 = new Promise((resolve, reject){
    setTimeout(() => {
        resolve("成功");
        reject("電腦出錯");
    });

    promise3
        .then(function (result) {
            console.log("成功的回傳值:" + result);
        }, function (ex) {
            console.log("失敗原因:" + ex);
        });
    console.log(promise3);

    let p1 = Promise.resolve("執行成功");
    p1
    .then(result => {
        console.log(result)
    })
    .catch(ex => {
        console.log(ex);
    })
    .finally(() => {});