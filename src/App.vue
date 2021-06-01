<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;   // 获取页面宽度判断当前设备，控制aside在pc端默认显示
    const menuVisible = ref(width <= 500 ? false : true);  // pc 或者 手机 是否显示 aside
    provide('menuVisible', menuVisible);   // 标记后代都可以使用
    router.afterEach(() => {  //  利用导航钩子设置aside可见性
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  }
};
</script>
