<template>
    <div>
        <mt-tab-container v-model="selectedTab">
            <mt-tab-container-item id="home">
                <p v-for="(v,k) of 50" :key="k">首页内容{{v}}</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="cart">
                <p>购物车内容</p>
                <p>购物车内容</p>
                <p>购物车内容</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="center">
                <p>个人中心内容</p>
                <p>个人中心内容</p>
                <p>个人中心内容</p>
            </mt-tab-container-item>
        </mt-tab-container>
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
    }
}
</script>