window.onload=function(){
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
    lies.forEach(function (element,index) {
        lies[index].onmouseenter=function () {
            lies[index].style.color="#4381e6";

        }
        lies[index].onmouseleave=function () {
            lies[index].style.color="#a3a3a3";
        }
    })


    /*let i1=document.getElementById("i1");
    let i2=document.getElementById("i2");
    let i3=document.getElementById("i3");
    let btn1=document.querySelector(".btn1");
    let box2=document.querySelector(".box2");
    let b21s=document.querySelectorAll(".b21");
    console.log(i1);
    let flag=true;
    i1.onclick=function(){
        if(flag==true){
            i1.className="iconfont icon-zanting";
             i2.className="iconfont icon-zanting";
            flag=false;
        }else if(flag==false){
            i1.className="iconfont icon-bofang";
             i2.className="iconfont icon-bofang";
            flag=true;
        }
    }


    i2.onclick=function(){
        if(flag==true){
            i1.className="iconfont icon-zanting";
            i2.className="iconfont icon-zanting";
            flag=false;
        }else if(flag==false){
            i1.className="iconfont icon-bofang";
            i2.className="iconfont icon-bofang";
            flag=true;
        }
    }


    i3.onclick=function(){
        if(flag==true){
            i3.style.backgroundColor="#ff6700";
            flag=false;
        }else if(flag==false){
            i3.style.backgroundColor="";
            flag=true;
        }

    }


    console.log(btn1);

    console.log(box2);
    btn1.onclick=function(event){
         event.stopPropagation();
        if(flag==true){
            box2.style.height=90+"px";

            flag=false;
        }else if(flag==false){
            box2.style.height=0+"px";

            flag=true;
        }
    }*/

    /*for(let j=0;j<b21s.length;j++){
        b21s[j].onclick=function(event){
            event.stopPropagation();
            btn1.innerHTML=b21s[j].innerHTML;
        }
    }*/
    // let use=document.querySelector(".use")
    // let i5=document.getElementById("i5");
    // let xlbox=document.querySelector(".xlbox");
    // let flag=true;
    // use.onclick=function(){
    //     if(flag==true){
    //         i5.style.transform="rotate(180deg)";
    //         xlbox.style.height=80+"px";
    //
    //         flag = false;
    //     }else if(flag==false){
    //         i5.style.transform="rotate(360deg)";
    //          xlbox.style.height=0+"px";
    //
    //         flag = true;
    //     }
    // }
}