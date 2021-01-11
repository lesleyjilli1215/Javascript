let promise1 = new Promise((resolve, reject) => {
    console.log('Promise初始化');
    resolve();
})

promise1
    .then(() => {
        console.log('這是第一個then區段');
        throw new Error('Fail');
    })
    .catch((ex) => {
        console.log('這是第一個catch區段');
    })
    .then(() => {
        console.log('這是第二個then區段');
    });

window.onload = function(){
    document.querySelector("#btnPokemon").addEventListener("click", function()
    {
        let ajaxPromiseFactory = new AjaxPromiseFactory();
        let promise1 = ajaxPromiseFactory.getPromise("$xhr",)

        promise1
        .then((response)=>{
            //debugger;
            document.write(JSON.stringify(response));
        });
    });
}