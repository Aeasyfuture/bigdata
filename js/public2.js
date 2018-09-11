let b51s=document.querySelectorAll(".b51");
let b511s=document.querySelectorAll(".b511");
let b512s=document.querySelectorAll(".b512");
let flag=true;

console.log(b51s,b511s,b512s);
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

