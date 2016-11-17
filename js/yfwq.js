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
                this.title.innerHTML= 0+pos*20 + ' GB';
            }
        }
        new scale('btn','bar','title');


            // 宽带
        var scale = function (btn1,bar1,title1){
            this.btn1=document.getElementById(btn1);
            this.bar1=document.getElementById(bar1);
            this.title1=document.getElementById(title1);
            this.step=this.bar1.getElementsByTagName("div")[0];
            this.init();
        };
        scale.prototype={
            init:function (){
                var f=this,g=document,b=window,m=Math;
                f.btn1.onmousedown=function (e){
                    var x=(e||b.event).clientX;
                    var l=this.offsetLeft;
                    var max=f.bar1.offsetWidth-this.offsetWidth;
                    g.onmousemove=function (e){
                        var thisX=(e||b.event).clientX;
                        var to=m.min(max,m.max(-2,l+(thisX-x)));
                        f.btn1.style.left=to+'px';
                        f.ondrag(m.round(m.max(0,to/max)*100),to);
                        b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
                    };
                    g.onmouseup=new Function('this.onmousemove=null');
                };
            },
            ondrag:function (pos,x){
                this.step.style.width=Math.max(0,x)+'px';
                this.title1.innerHTML= pos + 'M';
            }
        }
        new scale('btn1','bar1','title1');
            $('.select li').click(function () {
                $(this).addClass('current').siblings().removeClass()
            })

