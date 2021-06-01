<template>
  <button @click="toggle" :class="{checked:checked}">
    <span></span>
  </button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Switch",
  setup() {
    const checked = ref(false)   // 标记按钮开关状态
    const toggle = () => {
      checked.value = !checked.value    // 注意ref引用的用法
    }
    return {checked, toggle}
  }
}
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left .5s linear;
}

button.checked {
  background-color: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px); /* 圆圈到右边的位置 */
}
</style>
