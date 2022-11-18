<template>
  <div class="box">
    <component :is="dynamComp" />
    <h3 class="box__title">{{ props.item.title }}</h3>
    <p class="box__text">{{ props.item.text }}</p>
  </div>
</template>
<script setup>
import { defineProps, defineAsyncComponent } from "vue";

const props = defineProps({
  item: {
    type: Object,
    require: false,
  },
});
const dynamComp = defineAsyncComponent(() => {
  return import(`Icons/${props.item.icon}.vue`);
});
</script>

<style lang="scss">
.box {
  width: 100%;
  max-width: 342px;
  min-height: 196px;
  padding: 36px 24px;
  box-sizing: border-box;
  &__title {
    margin-top: 12px;
  }
  &__text {
    margin-top: 12px;
  }
}
</style>
