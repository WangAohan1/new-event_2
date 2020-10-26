$(function(){
    // console.log(123);
    // 给两个按钮设定事件
    $('#link_reg').on('click',function(){
        $('.log_reg').show()
        $('.log_login').hide()
    })
    $('#link_login').on('click',function(){
        $('.log_reg').hide()
        $('.log_login').show()
    })

    // 给登录框进行输入验证
    // $('input [name=password]')
    layui.form.verify({
        pass: [
            // 设置密码值
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],
        //   在设置确认密码与输入的密码一致
        passtext:function(value){
            var pass2=$('.log_reg [name=password]').val()
            if(pass2 !== value){
                return 'shabi'
            }
        }
    })

    // 最后进行传输ajax数据
    $('#form2').on('submit',function(e){
        e.preventDefault()
        console.log(123);
        var fd=$(this).serialize()
        $.ajax({
            url:'http://ajax.frontend.itheima.net/api/reguser',
            method:'POST',
            data:fd,
            success:function(res){
               console.log(res.message);
            }
        })
    })
})