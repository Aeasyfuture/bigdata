let lis=document.querySelectorAll("nav ul li");
lis.forEach(function (v,i) {
    v.onclick=function () {
        lis.forEach(function (ele) {
            ele.className="";
        });
        lis[i].className="click";
    }
});
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
})
