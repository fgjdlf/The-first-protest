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
	
document.getElementById("Wc").onclick = function(){
	scrollTo(0, 0);
};




// function createBanner(data){
// 		function createImage(href,url){
// 			var a = document.getElementById("navR");
// 			a.href = data.href;
// 			a.style.background = "url("+data.url+") no-repeat";
// 			return a;
// 		}
		
// 		var body = document.body;
// 		var images = data.map(function(item){
// 			var img = createImage(item.href,item.url);
// 			body.appendChild(img);
// 			return img;
// 		});
// 		var a = 0,
// 			imageLen = data.length - 1;
// 		images[a].classList.add("current");
// 		setInterval(function(){
// 			var _a = a ;
// 			//保留旧的索引为了能在下次轮播的时候清掉原不再需要的样式
// 			a = a >= imageLen ? 0 : a + 1;
// 			images[_a].classList.remove("current");
// 			images[a].classList.add("current");
// 		},1000);
// 	}
// 	createBanner(data);


