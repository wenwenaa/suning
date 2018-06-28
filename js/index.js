window.onload=function(){
	//下拉左开始
	let tbzuobox=document.getElementsByClassName("tbzuobox")[0];
	console.log(tbzuobox);
	let a=tbzuobox.getElementsByTagName("a");
	console.log(a);
	let xiala1=document.getElementsByClassName("xiala1")
	console.log(xiala1)
	
		a[0].onmouseenter=function(){
			xiala1[0].style.height="240px"
			xiala1[0].style.border="1px solid #dddddd"
			xiala1[0].style.borderTop="none"
			a[0].style.boxSizing="border-box"
		}
		a[0].onmouseleave=function(){
			xiala1[0].style.height="0"
			xiala1[0].style.border="none"
		}
		a[1].onmouseenter=function(){
			xiala1[1].style.height="123px"
			xiala1[1].style.border="1px solid #dddddd"
			xiala1[1].style.borderTop="none"
			a[0].style.boxSizing="border-box"
		}
		a[1].onmouseleave=function(){
			xiala1[1].style.height="0"
			xiala1[1].style.border="none"
		}
		a[2].onmouseenter=function(){
			xiala1[2].style.height="123px"
			xiala1[2].style.border="1px solid #dddddd"
			xiala1[2].style.borderTop="none"
			a[0].style.boxSizing="border-box"
		}
		a[2].onmouseleave=function(){
			xiala1[2].style.height="0"
			xiala1[2].style.border="none"
		}
	
		//下拉右开始
	let sngouwu=document.getElementsByClassName("sngouwu")[0];
	console.log(sngouwu);
	let aa=sngouwu.getElementsByTagName("a");
	console.log(aa)
	let div=sngouwu.getElementsByTagName("div");
	console.log(div)
		aa[0].onmouseenter=function(){
			div[0].style.height="123px"
			div[0].style.border="1px solid #dddddd"
			div[0].style.borderTop="none"
			aa[0].style.boxSizing="border-box"
			/*aa[0].style.border=" 1px solid #dddddd";*/
		}
		aa[0].onmouseleave=function(){
			div[0].style.height="0"
			div[0].style.border="none"
	
		}
		aa[1].onmouseenter=function(){
			div[1].style.height="160px"
			div[1].style.border="1px solid #dddddd"
			div[1].style.borderTop="none"
			aa[1].style.boxSizing="border-box"
		}
		aa[1].onmouseleave=function(){
			div[1].style.height="0"
			div[1].style.border="none"
		}
		aa[3].onmouseenter=function(){
			div[7].style.height="400px"
			div[7].style.border="1px solid #dddddd"
			div[7].style.borderTop="none"
			aa[3].style.boxSizing="border-box"
		}
		aa[3].onmouseleave=function(){
			div[7].style.height="0"
			div[7].style.border="none"
		}
		aa[6].onmouseenter=function(){
			div[9].style.height="223px"
			div[9].style.border="1px solid #dddddd"
			div[9].style.borderTop="none"
			aa[6].style.boxSizing="border-box"
		}
		aa[6].onmouseleave=function(){
			div[9].style.height="0"
			div[9].style.border="none"
		}
		//左侧图开始
	let lbztul=document.getElementsByClassName("lbztul")[0];
	console.log(lbztul)	;
	let lb1=document.getElementsByClassName("lb1");
	console.log(lb1);
	let li=lbztul.getElementsByTagName("li");
	console.log(li);
		for(let i=0;i<li.length;i++){
			li[i].onmouseenter=function(){
				lb1[i].style.display="block"
		   }
		   li[i].onmouseleave=function(){
		   		lb1[i].style.display="none"
		   }
	  }
	// bannertu
	let zuida=document.querySelector(".lbzhong")
	let botu=document.querySelectorAll(".lbtuzhong li")
	let btnnL=document.querySelector(".bdzaj")
	let btnnR=document.querySelector(".bdaj")
	let circle=document.querySelectorAll(".boxdian li")
	console.log(zuida,botu,btnnL,btnnR,circle)


	let index=0;
  let t=setInterval(move3, 3000);

  // 初始化
  botu[0].style.zIndex=13;
  circle[0].className="bianse"
   function move3(){
    index++;
    if(index==botu.length){
      index=0;
    }
    botu.forEach(function(element,index,obj){
      element.style.zIndex=5;
    })
    circle.forEach(function(element,index,obj){
      element.className=""
    })
     botu[index].style.zIndex=13
    circle[index].className="bianse"   
   }
   function move4(){
    index--;
    if(index<0){
      index=botu.length-1
    }
    botu.forEach(function(element){
      element.style.zIndex=5
    })
    circle.forEach(function(element){
      element.className=""
    })
   botu[index].style.zIndex=13
    circle[index].className="bianse"
   }
   zuida.onmouseenter=function(){
     clearInterval(t)
   }
  zuida.onmouseleave=function(){
     t=setInterval(move3, 3000)
   }
   for(let i=0;i<botu.length;i++){
    btnnR.onclick=function(){
      move3();
    }
    btnnL.onclick=function(){
      move4();
    }
   }
   for(let i=0;i<circle.length;i++){
    circle[i].onclick=function(){
      botu.forEach(function(element){
        element.style.zIndex=5
      })
     circle.forEach(function(element){
        element.className=""
      })
     botu[i].style.zIndex=13
      circle[i].className="bianse";
      index=i
    }
      
   }

}