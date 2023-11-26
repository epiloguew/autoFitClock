<script setup>
import { format, fromNow } from "silly-datetime";
import { ref, onMounted, onBeforeUnmount } from "vue";

let count = ref("");
let timer = ref(null);
onMounted(() => {
  timer.value = setInterval(() => {
    count.value = fn();
  }, 1000);
  console.log(format(new Date(), "HH:mm"));
});
onBeforeUnmount(() => {
  clearInterval(timer.value);
});
const fn = () => {
  return format(new Date(), "YYYY-MM-DD HH:mm:ss");
};
</script>

<template>
  <div style="">
    <div class="top">
      当前时间:
      {{ count }}
    </div>
  </div>
</template>

<style lang="less">
@import "./assets/css/styles.less";
.top {
  color: rgb(54, 207, 204);
  font-size: 20px;
}
</style>
