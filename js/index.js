$(function(){
    // console.log(123);
    getUser()
})
// 封装一个小渲染函数
// 获取用户基本信息
function getUser(){
    $.ajax({
        url:'http://ajax.frontend.itheima.net/my/userinfo',
        // method:'POST',
        headers:{
            Authorization:localStorage.getItem('token')
        },
        success:function(res){
            console.log(res);
            userpic(res.data)
        }
    })
}
// 在封装一个函数判断用户头像
function userpic(user){ //uesr代表上面的res.data
    if(user.nickname !==''){ //有管理员名字就显示管理员名字
        $('.welcom').html('欢迎&nbsp;' +user.nickname)
    }else{
        $('.welcom').html('欢迎&nbsp;' +user.username)
    };
    // 在进行判断是否有图片
    if(user.user_pic !== null){
        $('.layui-nav-img').show().attr('src',user.user_pic)
        $('.text').hide()
    }else{
        $('.layui-nav-img').hide()
        var ToupStr=user.username[0].toUpperCase()
        $('.text').show().html(ToupStr)
    }
    
}