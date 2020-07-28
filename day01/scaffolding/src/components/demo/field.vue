<template>
  <div>
    <mt-header title="学前端,到学端">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <mt-field 
      type="text"
      label="用户名"
      state="success"
      placeholder="请输入用户名"
      v-model="username">
    </mt-field>    
    <mt-field 
      type="password"
      label="密码"
      state="warning"
      disableClear
      placeholder="请输入密码"
      v-model="password">
    </mt-field> 
    <mt-field 
      type="password"
      label="确认密码"
      state="error"
      placeholder="请再次输入密码"
      :attr="{maxlength:'10',autocomplete:'off'}"
      v-model="password2">      
    </mt-field>   
    <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>      
  </div>
</template>
<script>
export default {
  data(){
    return {
      //保存用户名
      username:'',
      //保存密码
      password:'',
      //保存确认密码
      password2:''
    }
  },
  methods:{
    handle(){
      //1.获取输入的用户名、密码及确认密码
      let username = this.username;
      let password = this.password;
      let password2 = this.password2;

      //2.进行合法性的判断

      //2.1校验用户名,用户名的规则为:字母、数字及下划线的组合,长度为6~12个字符
      let usernameRegExp = /^[0-9A-Za-z_]{6,12}$/
      if(usernameRegExp.test(username)){
        console.log('username OK');
      } else{
          this.$toast({
            message:"请输入合法用户名",
            position:"top",
            duration:2000
          });
          return false;
      }

      //2.2校验密码,密码的规则为:字母、数字及下划线的组合,长度为8~20个字符
      let passwordRegExp = /^[0-9A-Za-z_]{8,20}$/;
      if(passwordRegExp.test(password)){
          console.log('password OK');
      } else {
          this.$toast({
            message:"请输入合法密码",
            position:"top",
            duration:2000
          });
          return false;
      }
      //2.3 判断两次密码是否一致
      if(password2 == password){
        console.log('两次密码一致');
      } else {
         this.$toast({
            message:"两次密码不一致",
            position:"top",
            duration:2000
          });
      }
      //你是代码的所有者，想怎么改就怎么办，比如：把检测用户名、密码及确认密码分别封装
      //三个函数
      //3.如果所有信息都为合法的信息,则进行提交;
      if(username == 'admin888' && password == 'admin888'){
        //出现错误提示
        this.$messagebox("注册提示","对不起,用户已存在");
      } else {
        //提示注册成功
      }
    }
  }
}
</script>