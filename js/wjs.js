
/////////////////导航栏
    let lis=document.querySelectorAll("nav ul li");
    lis.forEach(function (v,i) {
        v.onclick=function () {
            lis.forEach(function (ele) {
                ele.className="";
            });
            lis[i].className="click";
        }
    });
////////////表格换页
    $(".num").click(function(){
        $(".num").css({"background":"#fff","color":"#8d8d8d"})
            .eq($(this).index()-1).css({"background":"#2196f3","color":"#fff"});
        num=$(this).index()-1;
    });
    let num=0;
    function Num(){
        $(".num").eq(num).css({"background":"#fff","color":"#8d8d8d"});
        if(type=="next"){
             num++;
             if(num==$(".num").length){
                 num=$(".num").length-1;
             }
        }else if(type=="prev"){
            num--;
            if(num<0){
                num=0;
            }
        }
        $(".num").eq(num).css({"background":"#2196f3","color":"#fff"})
    }
    $(".upPage").click(function(){
        Num(type="prev");
    });
    $(".nextPage").click(function(){
        Num(type="next");
    });
    $(".lastPage").click(function(){
        $(".num").css({"background":"#fff","color":"#8d8d8d"})
            .eq(5).css({"background":"#2196f3","color":"#fff"})
    });
////////////删除表格
    let button=document.querySelectorAll("button");
    button.forEach((v)=>{
        v.onclick=function(){
            v.parentNode.parentNode.parentNode.removeChild(v.parentNode.parentNode);
        }
    });
// let delG= $("button").parent("td").parent("tr");
// console.log($("button"),delG);

///////资料管理 多选框点击样式
/*let input=document.querySelectorAll("td .dui");
let img=document.querySelectorAll(".dui img");
input.forEach((v,i)=>{
    img[i].style.display="none";
    v.onclick=function(){
        img[i].style.display="block";
    };
});*/

console.log($(".dui"));
$(".dui").click(function(){
    $("img").css("display","none")
    $(this).children("img").css("display","block");
    });

/*$("box").click(function(){
    $(this).children(".r").animate({
        width:200,
        height:200,

    },500,function(){
        $(this).css({
            width:0,
            height:0,
        })
        $(this).parent().css({

        })
    })
})*/
//////////串起来
    let li=document.querySelectorAll("nav ul li");
    li.forEach(()=>{
        li[5].onclick=function(){
            open("wjs1.html");
        };
        li[6].onclick=function(){
            open("wjs.html");
        };
    });





