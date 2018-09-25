window.onload=function () {
    // let navlis = document.querySelectorAll(".asidenav li");
    // console.log(navlis.length);
    // for (let i = 0; i < navlis.length; i++) {
    //     navlis[i].onclick = function () {
    //         for (let j = 0; j < navlis.length; j++) {
    //             navlis[j] .classList.remove("selected");
    //         }
    //         this.classList.add("selected");
    //     }
    //
    // }
    let lies=document.querySelectorAll(".experiment_left_nav_box li");
    let lies1=document.querySelectorAll(".experiment_right_nav_box ul");

    lies.forEach(function (element,index) {
        lies[index].onclick=function () {
            lies.forEach(function (element,index) {
                element.style.color="#a3a3a3";
            })
            lies[index].style.color="#4381e6";
            lies1.forEach(function(items){
                items.style.zIndex="505";
            })
            lies1[index].style.zIndex="510";
        }

    }