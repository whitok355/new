<template>
  <div class="container">
    <div class="features">
      <h3 class="features__title">What makes our brand different</h3>
      <div class="features__boxs boxs">
        <box
          class="boxs__box"
          v-for="(item, key) of data"
          :key="`item: ${key}`"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import box from "./box.vue";

const data = ref([
  {
    title: `Next day as standard`,
    icon: `delivery`,
    text: `Order before 3pm and get your order the next day as standard`,
  },
  {
    title: `Made by true artisans`,
    icon: `checkmark`,
    text: `Handmade crafted goods made with real passion and craftmanship`,
  },
  {
    title: `Unbeatable prices`,
    icon: `purchase`,
    text: `For our materials and quality you won’t find better prices anywhere`,
  },
  {
    title: `Recycled packaging`,
    icon: `sprout`,
    text: `We use 100% recycled to ensure our footprint is more manageable`,
  },
]);
</script>
<style lang="scss">
.features {
  margin-top: 48px;
  @media (min-width: 768px) {
    margin-top: 80px;
    &__title {
      text-align: center;
    }
  }
  &__boxs {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 368px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
