<script setup>
import { format, fromNow } from "silly-datetime";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

let count = ref("");
let fixTime = ref("");
let timer = ref(null);
const appoint = "08:00:00";
let origin = "";
onMounted(() => {
  origin = window.appointTimer || "08:00:00";
  timer.value = setInterval(() => {
    count.value = fn();
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer.value);
});
watch(count, () => {
  fixTime.value = getFixTime();
});
const fn = (day) => {
  const str = "YYYY-MM-DD";
  const option = day ? str : str + " HH:mm:ss";
  return format(new Date(), option);
};
const getFixTime = () => {
  const [appointHour] = appoint.split(":");
  const [originHour] = origin.split(":");
  if (originHour <= appointHour) return fn();
  const diff = originHour - appointHour;
  const fixHour = format(new Date(), "HH") - diff;
  const strFix = fixHour < 10 ? "0" + fixHour : fixHour.toString();
  return fn(true) + " " + strFix + ":" + format(new Date(), "mm:ss");
};
</script>

<template>
  <div style="">
    <div class="top">预定时间: {{ fn(true) }} {{ appoint }}</div>
    <div class="top">起始时间: {{ fn(true) }} {{ origin }}</div>
    <div class="top">
      当前时间:
      {{ count }}
    </div>
    <div class="top">
      修正时间:
      {{ fixTime }}
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
