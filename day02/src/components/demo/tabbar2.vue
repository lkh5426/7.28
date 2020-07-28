<template>
    <div>
        <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home">
                <img src="../../assets/home_enable.png" alt="" slot='icon' v-if="selectedTab=='home'">
                <img src="../../assets/home_disable.png" alt="" slot='icon' v-else>
                首页
                </mt-tab-item>
            <mt-tab-item id="cart">
                <img src="../../assets/cart_enable.png" alt="" slot='icon' v-if="selectedTab=='cart'">
                <img src="../../assets/cart_disable.png" alt="" slot='icon' v-else>
                购物车
                </mt-tab-item>
            <mt-tab-item id="center">
                <img src="../../assets/me_enable.png" alt="" slot='icon' v-if="selectedTab=='center'">
                <img src="../../assets/me_disable.png" alt="" slot='icon' v-else>
                个人中心
                </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
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
            }
        }
    }
}
</script>