<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false);
    provide('xxx', menuVisible);   // 标记后代都可以使用
  }
};
</script>
