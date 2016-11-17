

 // 模拟下拉框
 $(function(){
     var oflink = document.getElementById('sel');
     var aDt = oflink.getElementsByTagName('dt');
     var aUl = oflink.getElementsByTagName('ul');
     var aH3= oflink.getElementsByTagName('h3');
     for(var i=0;i<aDt.length;i++){
         aDt[i].index = i;
         aDt[i].onclick = function(ev){
             var ev = ev || window.event;
             var This = this;
             for(var i=0;i<aUl.length;i++){
                 aUl[i].style.display = 'none';
             }
             aUl[this.index].style.display = 'block';
             document.onclick = function(){
                 aUl[This.index].style.display = 'none';
             };
             ev.cancelBubble = true;

         };
     }
     for(var i=0;i<aUl.length;i++){

         aUl[i].index = i;

         (function(ul){

             var iLi = ul.getElementsByTagName('li');

             for(var i=0;i<iLi.length;i++){
                 iLi[i].onmouseover = function(){
                     this.className = 'hover';
                 };
                 iLi[i].onmouseout = function(){
                     this.className = '';
                 };
                 iLi[i].onclick = function(ev){
                     var ev = ev || window.event;
                     aH3[this.parentNode.index].innerHTML = this.innerHTML;
                     ev.cancelBubble = true;
                     this.parentNode.style.display = 'none';
                 };
             }

         })(aUl[i]);
     }

 })


    
            // 硬盘拖动进度条
         var scale = function (btn,bar,title){
            this.btn=document.getElementById(btn);
            this.bar=document.getElementById(bar);
            this.title=document.getElementById(title);
            this.step=this.bar.getElementsByTagName("div")[0];
            this.init();
        };
        scale.prototype={
            init:function (){
                var f=this,g=document,b=window,m=Math;
                f.btn.onmousedown=function (e){
                    var x=(e||b.event).clientX;
                    var l=this.offsetLeft;
                    var max=f.bar.offsetWidth-this.offsetWidth;
                    g.onmousemove=function (e){
                        var thisX=(e||b.event).clientX;
                        var to=m.min(max,m.max(-2,l+(thisX-x)));
                        f.btn.style.left=to+'px';
                        f.ondrag(m.round(m.max(0,to/max)*100),to);
                        b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
                    };
                    g.onmouseup=new Function('this.onmousemove=null');
                };
            },
            ondrag:function (pos,x){
                this.step.style.width=Math.max(0,x)+'px';
                this.title.innerHTML= 100+pos*24 + ' GB';
            }
        }
        new scale('btn','bar','title');

            $('.select li').click(function () {
                $(this).addClass('current').siblings().removeClass()
            })




