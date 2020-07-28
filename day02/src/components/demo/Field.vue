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
      :state="usernameState"
      placeholder="请输入用户名"
      v-model="username"
      @blur.native.capture="checkUsername">
    </mt-field>    
    <mt-field 
      type="password"
      label="密码"
      :state="passwordState"
      disableClear
      placeholder="请输入密码"
      v-model="password"
      @blur.native.capture="checkPassword">
    </mt-field> 
    <mt-field 
      type="password"
      label="确认密码"
      :state="password2State"
      placeholder="请再次输入密码"
      :attr="{maxlength:'10',autocomplete:'off'}"
      v-model="password2"
      @blur.native.capture="checkPassword2">      
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
      password2:'',
      usernameState:'',
      passwordState:'',
      password2State:''
    }
  },
  methods:{
    checkUsername(){
      let username = this.username;
      let usernameRegExp = /^[0-9A-Za-z_]{6,12}$/
      if(usernameRegExp.test(username)){
        this.usernameState='success';
        return true;
      } else{
        this.usernameState='error'
          this.$toast({
            message:"请输入合法用户名",
            position:"top",
            duration:2000
          });
          return false;
      }
    },
    checkPassword(){
      let password = this.password;
      let passwordRegExp = /^[0-9A-Za-z_]{8,20}$/;
      if(passwordRegExp.test(password)){
        this.passwordState='success';
          return true;
      } else {
        this.passwordState='error';
          this.$toast({
            message:"请输入合法密码",
            position:"top",
            duration:2000
          });
          return false;
      }
    },
    checkPassword2(){
      let password2 = this.password2;
      if(password2 == this.password){
        this.password2State="success";
        return true;
      } else {
        this.password2State="error";
         this.$toast({
            message:"两次密码不一致",
            position:"top",
            duration:2000
          });
          return false;
      }
    },
    handle(){     
      //仍然进行用户名、密码及确认密码的校验
      if(this.checkUsername() && this.checkPassword() && this.checkPassword2()){
          //如果所有信息都为合法的信息,则进行提交;
          //this.axios.get(....).then(res=>{....})
          if(this.username == 'admin888'){
            //出现错误提示
            this.$messagebox("注册提示","对不起,用户已存在");
          } else {
            this.$router.push('/');
          }
      }
     
    }
  }
}
</script>