<script setup>
import { format } from "silly-datetime";
import { ref, onMounted, onBeforeUnmount } from "vue";
let count = ref("");
let timer = ref(null);
onMounted(() => {
  timer.value = setInterval(() => {
    count.value = fn();
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer.value);
});
const fn = () => {
  return format(new Date(), "YYYY-MM-DD HH:mm:ss");
};
</script>

<template>
  {{ count }}
</template>

<style lang="less">
@import "./assets/css/styles.less";
</style>
