<template>
  <div class="idea container">
    <box
      class="idea__block idea__block--padding"
      :classDiscr="'primary'"
      :title="'It started with a small idea'"
      :subTitle="{
        mini: `A global brand with local beginnings, our story begain in a small studio in South London in early 2014`,
        big: `A global brand with local beginnings, our story begain in a small studio in South London in early 2014`,
      }"
    />
    <div class="idea__block idea__block--bg"></div>
  </div>
</template>
<script setup>
import box from "Elements/discr.vue";
</script>
<style lang="scss">
.idea {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, 320px);
  grid-gap: 10px;
  @media (min-width: 768px) {
    grid-template-rows: 478px;
    grid-template-columns: repeat(2, 1fr);
  }
  &__block--padding {
    padding: 36px 32px;
    box-sizing: border-box;
  }
  &__block--bg {
    background-image: url("./Image-Block.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>
