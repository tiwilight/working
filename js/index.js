

  // 轮播图
    var total=$(".focus ul").children().length;
    var now=0;
    function clock()
      {
        var cname
        if(now==total -1){
        now=0; 
       }else{
        now=now+1; 
       }
       for(i=0;i<total;i++){
          cname=".focus .focus" + i;
           $(".focus ul li").eq(i).css("display","none");
           $(".ac_slider").eq(i).css("background","#a5a5a5");
           $(cname).css("display","none");
       }
       
      cname=".focus .focus" + now;
      $(".focus ul li").eq(now).fadeIn();
      $(".ac_slider").eq(now).css("background","#ffffff");
      $(cname).css("display","block");
      }
   $(document).ready(function() {
    $(".focus ul li").eq(0).fadeIn();
    $(".ac_slider").eq(0).css("background","#ffffff");
    $(".focus ul li,.ac_slider").mouseenter(function(){
      window.clearInterval(int);
      
    });
    $(".ac_slider").mouseenter(function(){
      if($(this).index()!=now){
        now=$(this).index()-1;
        clock();
      }
    });
    var int=self.setInterval("clock()",3000)
    $(".focus ul li,.ac_slider").mouseleave(function(){
      int=self.setInterval("clock()",3000)
    });
    });


 $(function () {
    // 联合数据

           $('#s1').click(function(){
              $('#c1').css('display','block');
              $('#c2').css('display','none');
              $('#c3').css('display','none');
               
           });
           $('#s2').click(function(){
              index = $(this).index()
              $('#c1').css('display','none');
              $('#c2').css('display','block');
              $('#c3').css('display','none');
              $('.div2').eq(index).animate({left:'-3px'},0);
              $('.div2').eq(index).css('width','136px');

               
           });
           $('#s3').click(function(){
              index = $(this).index()
              $('#c1').css('display','none');
              $('#c2').css('display','none');
              $('#c3').css('display','block');
              $('.div2').eq(index).animate({left:'-3px'},0);
              $('.div2').eq(index).css('width','136px');

               
           });
            $('#s4').click(function(){
              index = $(this).index()
              $('#c1').css('display','none');
              $('#c2').css('display','none');
              $('#c3').css('display','none');
              $('#c4').css('display','block');
              $('.div2').eq(index).animate({left:'-3px'},0);
              $('.div2').eq(index).css('width','133px');

               
           });
            $('.txtbox a .img2').click(function () {
              $('.txtbox a .img2').attr('src','images/3-2.png')
              $(this).attr('src','images/3-3.png')
            })

 })
      // 导航
    $(function () {
      
        $('.choose li').click(function () {
          num = 0;
          var index = $(this).index()
          $(this).css('background','#fff').siblings().css("background","#686868").children().css({'color':'#fff'});  
          $(this).children().css({'color':'#000'});
          $(this).find('.div2').css('display','block');
          $(this).siblings().find('.div2').css('display','none');
        })

        $('.nav2').hover(function (){
          $('#atxt1').css('background',"#090c0f")
        })
      })     

      
      $(function () {
        $('.nav2 li').hover(function () {
          var index = $(this).index()

           arrimg = ['images/2-11.png','images/2-22.png','images/2-33.png','images/2-44.png','images/2-55.png','images/2-66.png','images/2-77.png','images/2-88.png']
           arrurl = ['images/2-1.png','images/2-2.png','images/2-3.png','images/2-4.png','images/2-5.png','images/2-6.png','images/2-7.png','images/2-8.png']
          $('.nav2 li').css('color','#fff')
           $(this).css('color','#1299e1')
          for (var i = 0; i < arrimg.length; i++) {
            $('.bimg').eq(i).attr ("src",arrurl[i]);
            $('.bimg').eq(index).attr ("src",arrimg[index]);
            $('.aimg').attr ("src",'images/4-1.png');
            $('.aimg').eq(index).attr ("src",'images/4-2.png');
          }
       })



    })
        
        
     $(function () {
         $('.pick1').click(function () {
           $('.group1').css('display','block');
           $('.group2').css('display','none');
           $('.group3').css('display','none');
         })
         $('.pick2').click(function () {
           $('.group1').css('display','none');
           $('.group2').css('display','block');
           $('.group3').css('display','none');
         })
     })


     // 域名查询
     

     $(function () {
      $('.img3').click(function () {
        var val = $('.txt').val()

        if ($('.txt').val() == '') {
          alert('搜索的域名不能为空')
        }else{
          $(".demand").text(val);
          $('.img3').attr('href','./ymcx.html');
        }
      })

     })



       
      
   
 
   


