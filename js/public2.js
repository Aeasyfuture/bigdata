let lis=document.querySelectorAll("nav ul li");
lis.forEach(function (v,i) {
    v.onclick=function () {
        lis.forEach(function (ele) {
            ele.className="";
        });
        lis[i].className="click";
    }
});


let b51s=document.querySelectorAll(".b51");
let b511s=document.querySelectorAll(".b511");
let b512s=document.querySelectorAll(".b512");
let flag=true;


for(let i=0;i<b51s.length;i++){
	b51s[i].onclick=function(){
		if(flag==true){
			b511s[i].style.zIndex="10";
			b512s[i].style.zIndex="0";
			flag=false;

		}else if(flag==false){
			b511s[i].style.zIndex="0";
			b512s[i].style.zIndex="10";
			flag=true;

		}
	}
}
let b31s=document.querySelectorAll(".b31");
let s2s=document.querySelectorAll(".s2");
let s1=document.querySelector(".s1");

for(let h=0;h<b31s.length;h++){
	b31s[h].onclick=function(){
		for(let j=0;j<b31s.length;j++){
			b31s[j].className="b31";
		}
		b31s[h].className="b31 active";
		s1.innerText=s2s[h].innerText;
	}
}


let btn1=document.querySelector(".btn1");
let section2=document.querySelector(".section2");
let img1=document.querySelector(".img1");
console.log(img1);
btn1.onclick=function(){
	section2.style.display="block";
	section2.style.display="flex";
}
img1.onclick=function(){
	section2.style.display="none";
}
