$(function(){
        /*
        *思路大概是先为每一个required添加必填的标记，用each()方法来实现。
        *在each()方法中先是创建一个元素。然后通过append()方法将创建的元素加入到父元素后面。
        *这里面的this用的很精髓，每一次的this都对应着相应的input元素，然后获取相应的父元素。
        *然后为input元素添加失去焦点事件。然后进行用户名、邮件的验证。
        *这里用了一个判断is()，如果是用户名，做相应的处理，如果是邮件做相应的验证。
        *在jQuery框架中，也可以适当的穿插一写原汁原味的javascript代码。比如验证用户名中就有this.value，和this.value.length。对内容进行判断。
        *然后进行的是邮件的验证，貌似用到了正则表达式。
        *然后为input元素添加keyup事件与focus事件。就是在keyup时也要做一下验证，调用blur事件就行了。用triggerHandler()触发器，触发相应的事件。
        *最后提交表单时做统一验证
        *做好整体与细节的处理
        */
        //如果是必填的，则加红星标识.
        $("form :input.required").each(function(){
            var $required = $("<strong class='high'> *</strong>"); //创建元素
            $(this).parent().append($required); //然后将它追加到文档中
        });
         //文本框失去焦点后
        $('form :input').blur(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证用户名
             if( $(this).is('#username') ){
                    if( this.value=="" || this.value.length < 6 ){
                        var errorMsg = ' 请输入至少6位的用户名.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }
             }
             // 验证密码
             if( $(this).is('#password') ){
                    if( this.value=="" || this.value.length < 6 ){
                        var errorMsg = ' 请输入6-12位的密码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }
             }
             // 确认密码
             if( $(this).is('#confirm-password') ){
                    if( this.value=="" || this.value.length < 6 ){
                        var errorMsg = ' 再次确认密码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
                        if (this.value == $('#password').val()) {
                            var osMsg = '';
                            $parent.append('<span class="formtips onSuccess">'+osMsg+'</span>'); 
                        }else{
                             var okMsg = ' 两次输入密码不一致.';
                             $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>'); 
                        }
                    
                }

             }
             // 手机号码
             if( $(this).is('#telephone') ){
                var tel=$(this).val().replace(/\s+/g,"");
                var filter1=/^1[3|4|5|7|8][0-9]\d{8}$/gi;
                    if( tel.search(filter1)!=-1 ){
                        $(this).parent().prev().children('.formtips').text(' ');
                        ok4=true;
                    }else
                    {
                        var errorMsg = ' 请输入手机号码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }
             }
             // QQ号码
              if( $(this).is('#qq') ){
                var qq=$(this).val().replace(/\s+/g,"");
                var filter1=/\d{5,10}/gi;
                    if( filter1.test(qq) ){
                        $(this).parent().prev().children('.formtips').text(' ');
                        ok5=true;
                    }else
                    {
                        var errorMsg = ' 请输入正确的QQ号码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }
             }
             //验证邮件
             if( $(this).is('#email') ){
                if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                      var errorMsg = ' 请输入正确的E-Mail地址.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }
             }
        }).keyup(function(){
           $(this).triggerHandler("blur");
        }).focus(function(){
             $(this).triggerHandler("blur");
        });//end blur

        
        //提交，最终验证。
         $('#btn').click(function(){
                $("form :input.required").trigger('blur');
                var numError = $('form .onError').length;
                // if(numError){
                //     return false;
                // } 
                // alert("注册成功,密码已发到你的邮箱,请查收.");
         });
         
        


       
     })



   // 登录页面
     
     $(function () {
        $('.verify').click(function () {
 
            if ($('#pnt').val() == '') {
                alert('用户名不能为空')
            }else 
            if ($('#pnt1').val() == '') {
                alert('密码不能为空')
            }else
             if ($('#pnt').val() == ''||$('#pnt1').val() == '') {
                alert('用户名和密码不能为空')
            }
        })
      })

