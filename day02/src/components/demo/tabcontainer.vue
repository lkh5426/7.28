<template>
 <div>
  <mt-button type="primary" @click="changeItem('1')"> 第一个按钮</mt-button>
  <mt-button type="primary" @click="changeItem('2')"> 第二个按钮</mt-button>
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="1">
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p>456</p>
        <p>456</p>
        <p>456</p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:'1'
    }
  },
  methods:{
    changeItem(val){
      this.active=val;
    }
  }
}
</script>