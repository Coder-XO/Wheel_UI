<template>
  <button @click="toggle" :class="{checked:value}">
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>

<script>
import {ref} from "vue";

export default {
  props: {    // 控制按钮默认状态的属性
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('input',!props.value)  // 通知父组件改变属性
      // vue2 使用 this.$emit 触发事件
    }
    return {toggle}
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
  cursor: pointer;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}

button.checked {
  background-color: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px); /* 圆圈到右边的位置 */
}

button:focus {
  outline: none;
}
</style>
