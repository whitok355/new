<template>
  <div class="hero-wrapper">
    <div class="hero container">
      <div class="hero__block hero__block--content">
        <discr :title="title" :subTitle="subTitles" :classDiscr="'white'" />
      </div>
    </div>
    <div class="hero__block">
      <div class="hero__bg"></div>
    </div>
  </div>
  <features />
</template>
<script setup>
import discr from "Elements/discr.vue";
import features from "Components/features/features.vue";
import { ref } from "vue";

const title = ref(`Luxury homeware for people who love timeless design quality`);
const subTitles = ref({
  mini: `With our new collection, view over 400 bespoke pieces from homeware through to furniture today`,
  big: `Shop the new Spring 2022 collection today`,
});
</script>
<style lang="scss" scoped>
.hero-wrapper {
  @media (min-width: 768px) {
    background-image: url("./Hero-Blocks.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 704px;
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    min-height: 990px;
  }
  @media (min-width: 2200px) {
    min-height: 1200px;
  }
}
.hero {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    position: relative;
  }
  &__bg {
    background-image: url("./hero-block.webp");
    min-height: 304px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (min-width: 389px) {
      background-image: url("./Hero-Blocks.webp");
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
}
.discr {
  @media (min-width: 768px) {
    position: absolute;
    width: 330px;
    height: fit-content;
    top: 130px;
    right: 80px;
  }
  @media (min-width: 1440px) {
    width: 630px;
    height: 444px;
  }
}
</style>
