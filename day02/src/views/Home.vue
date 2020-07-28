<template>
  <div>
    <mt-header title="学前端，到学问">
      <div slot="right" class="shortcut">
        <router-link to='/register'>注册</router-link>
        <router-link to='/'>登录</router-link>
      </div>
    </mt-header>
    <mt-navbar v-model="active">
      <mt-tab-item id="1">HTML5</mt-tab-item>
      <mt-tab-item id="2">CSS3</mt-tab-item>
      <mt-tab-item id="3">JavaScript</mt-tab-item>
      <mt-tab-item id="4">jQuery</mt-tab-item>
    </mt-navbar>
    <div class="panel">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="1">
        <p v-for="(v,k) of 50" :key="k">11--{{v}}</p>
      </mt-tab-container-item>
       <mt-tab-container-item id="2">
        <p>22</p>
      </mt-tab-container-item>
       <mt-tab-container-item id="3">
        <p>33</p>
      </mt-tab-container-item>
       <mt-tab-container-item id="4">
        <p>44</p>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home">
                <img src="../assets/home_enable.png" alt="" slot='icon' v-if="selectedTab=='home'">
                <img src="../assets/home_disable.png" alt="" slot='icon' v-else>
                首页
                </mt-tab-item>
            <mt-tab-item id="cart">
                <img src="../assets/cart_enable.png" alt="" slot='icon' v-if="selectedTab=='cart'">
                <img src="../assets/cart_disable.png" alt="" slot='icon' v-else>
                购物车
                </mt-tab-item>
            <mt-tab-item id="center">
                <img src="../assets/me_enable.png" alt="" slot='icon' v-if="selectedTab=='center'">
                <img src="../assets/me_disable.png" alt="" slot='icon' v-else>
                个人中心
                </mt-tab-item>
        </mt-tabbar>
  </div>
  
</template>
<script>
export default {
  data(){
    return{
      //默认被选定的顶部选项卡及面板ID
      active:'1',
      selectedTab:'home'
    }
  },
  watch:{
    selectedTab(){
      switch(this.selectedTab){
        case 'home':
          this.$router.push('/');
          break;
           case 'cart':
            this.$router.push('/list');
            break;
          case 'center':
            this.$router.push('/navbar');
            break;
      }
    }
  }
}
</script>
<style scoped>
.shortcut a{
  color:#fff;
  text-decoration:none;
  display:inline-block;
  margin-left:5px;
}
.panel{
  margin-top:10px;
  margin-bottom:55px;
}
</style>