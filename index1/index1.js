//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};

var data = [
	{
		href:"",
		title:"",
		url:"./index1/images/5421.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/e2.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/33.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/54.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/252.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/4155.jpg"
	}
]
function banners(option){
		function bannerImg(href,url){
			var pic = document.createElement("a");
				pic.href = href;
				pic.style.background = "url("+url+") no-repeat";
				return pic;
		}
		var box = document.createElement("div"),
			Zindex = document.createElement("div"),
			Zopacity = document.createElement("div"),
			Zbox =  document.createElement("div"),
			Zp = document.createElement("p");
			Zsp = document.createElement("span");
				Zindex.className = "Zindex ";
				Zopacity.className = "Zopacity";
				Zbox.className = "Zbox";
				Zp.className = "Zp";
				Zsp.className = "Zsp";
				box.className = "bannerCen";
			box.appendChild(Zindex);
			Zindex.appendChild(Zopacity);
			Zbox.appendChild(Zp);
			Zbox.appendChild(Zsp);
			Zindex.appendChild(Zbox);
			Zp.innerText = "好书推荐";
			Zsp.innerText = "xiaoshuowang - 常阅读，多交友！";
		var images = option.map(function(item){
			var img = bannerImg(item.href,item.url);
			box.appendChild(img);
			return img;
		});
		var a = 0,
			imageslenstart=option.length,
			imageslen = option.length-1;
			images[a].className="current";
			timer = setInterval(function(){
			var b = a;
			a = a >= imageslen ? 0 : a+1;
			images[b].className="currentmove";
			images[a].className="current";
		},2000);
	// 	var a=0,
 //    imageslenstart=option.length,
	// imageslen = option.length-1 ;
 //    images[0].className="current";
 //  var timer=setInterval(function(){
 //    now=(now+1)%yuandian.length;
 //      my();  
 //  },3000);
		box.onmouseover = function(){
			 clearInterval(timer); 
		};
		box.onmouseout = function(){
			timer=setInterval(function(){
			var b = a;
			a = a >= imageslen ? 0 : a+1;
			images[b].className="currentmove";
			images[a].className="current";
			},2000);
		}
		function my(){
			for(var i=0; i<yuandian.length; i++){
				yuandian[i].style.background='black'; 
				images[i].className="currentmove"
			} 
			images[now].className="current";
			yuandian[now].style.background='red'
		};
		var yuandian= document.getElementById("pointer").getElementsByTagName("li");	
		var now=0;
		var lefter=document.createElement("div");
			document.getElementById("left").appendChild(lefter);
			lefter.className = "banner_left";
			lefter.onclick=function(){
				if(now==0){now=yuandian.length};
				now=(now-1)%yuandian.length;
			my(); 
		}
		var righter=document.createElement("div");
		document.getElementById("right").appendChild(righter);
		righter.className = "banner_right";
		righter.onclick=function(){
		now=(now+1)%yuandian.length;
		my();
		}
		var Fragment=document.createDocumentFragment(); 
 box.appendChild(righter);
 box.appendChild(lefter);
  Fragment.appendChild(box);
  document.getElementById("banner").appendChild(Fragment);
	document.getElementById("banner").appendChild(box);
}
	banners(data);

var data1 = [
	{
		href:"",
		title:"",
		url:"./index1/images/df.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/dlkfg.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/fghd.jpg"
	},
	{
		href:"",
		title:"",
		url:"./index1/images/kgh.jpg"
	}
	
]
function banner(option){
		function bannerI(href,url){
			var pic = document.createElement("a");
				pic.href = href;
				pic.style.background = "url("+url+") no-repeat";
				return pic;
		}
		var boss = document.createElement("div");
			boss.className = "left";
		var images = option.map(function(item){
			var img = bannerI(item.href,item.url);
			boss.appendChild(img);
			return img;
		});
		// var a = 0,
		// 	imageslenstart=option.length,
		// 	imageslen = option.length-1 ;
		// 	images[a].className="current";
		// 	timer = setInterval(function(){
		// 	var b = a;
		// 	a = a >= imageslen ? 0 : a+1;
		// 	images[b].className="currentmove";
		// 	images[a].className="current";
		// },1500);
		var a=0,
    imageslenstart=option.length,
	imageslen = option.length-1 ;
    images[0].className="current";
  var timer=setInterval(function(){
    now=(now+1)%yuandian.length;
      my();  
  },3000);
		boss.onmouseover = function(){
			 clearInterval(timer); 
		};
		boss.onmouseout = function(){
			timer=setInterval(function(){
			var b = a;
			a = a >= imageslen ? 0 : a+1;
			images[b].className="currentmove";
			images[a].className="current";
			},1500);
		}
		function my(){
			for(var i=0; i<yuandian.length; i++){
				yuandian[i].style.background='black'; 
				images[i].className="currentmove"
			} 
			images[now].className="current";
			yuandian[now].style.background='red'
		};
		var yuandian= document.getElementById("point").getElementsByTagName("li");	
		var now=0;
		var lefter=document.createElement("div");
			lefter.className="righter";
			lefter.onclick=function(){
				if(now==0){now=yuandian.length};
				now=(now-1)%yuandian.length;
			my(); 
		}
		var righter=document.createElement("div");
		righter.className="lefter";
		righter.onclick=function(){
		now=(now+1)%yuandian.length;
		my();
		}
		var Fragment=document.createDocumentFragment(); 
 boss.appendChild(righter);
 boss.appendChild(lefter);
  Fragment.appendChild(boss);
  document.getElementById("left").appendChild(Fragment);
	document.getElementById("pic_cen").appendChild(boss);
}
	banner(data1);
document.getElementById("Wc").onclick = function(){
	scrollTo(0, 0);
};


var title=document.getElementById('choosecard').getElementsByTagName('a'),
      choose=document.getElementById('choose').getElementsByTagName('ul');
      document.getElementById('choosecard').appendChild(document.getElementById('choose'));
      title[0].style.background='rgb(244,244,244)';
      title[0].style.color='red';
      choose[0].style.display='block';
  for(var i=0;i<title.length;i++){
                title[i].index=i;
                  title[i].onclick= function () {
                    for(var i=0;i<title.length;i++){
                        title[i].style.background='rgb(111,111,111)';
                        choose[i].style.display='none';
                        title[i].style.color='white';
                    }
                    this.style.background='rgb(244,244,244)';
                    this.style.color='red';
                    choose[this.index].style.display='block';
                }
            }


var moveimg=document.getElementById('moveimg'),
    moveul=document.getElementById('moveimg').getElementsByTagName('ul'),
    movelr=document.getElementById('movelr').getElementsByTagName('a'),
    now=0,
    panduan=true;
movelr[0].onclick=function(){
    if (now==0){
      now=moveul.length;
    }
    moveimg.style.marginLeft=-1110*now+'px';
    now--;
    moveimg.style.marginLeft=-1110*now+'px';
  
};
movelr[1].onclick=function(){
    now++;
    if (now==moveul.length) {
      now=0;
    };
    moveimg.style.marginLeft=-1110*now+'px';
  
};


