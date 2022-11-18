<template>
  <div class="container">
    <div class="list">
      <div class="list__boxs boxs">
        <template v-for="good in goods" :key="good.title">
          <div class="boxs__box box">
            <img
              class="box__img"
              :src="require(`@/assets/${good.img}`)"
              :alt="good.category"
            />
            <h4 class="box__title">{{ good.name }}</h4>
            <h5 class="box__price">${{ good.price }}</h5>
          </div>
        </template>
      </div>
      <div class="list__btn">
        <btnLink />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import btnLink from "Elements/btn-link.vue";
const goods = ref();

onMounted(async () => {
  const data = await fetch("https://intensive-13-11-default-rtdb.firebaseio.com/db.json");
  const response = await data.json();
  goods.value = response.splice(0, 4);
});
</script>
<style lang="scss" scoped>
.list {
  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
}
.boxs {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  @media (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
}
.box {
  &__box {
    width: 100%;
    height: 288px;
  }
  &__img {
    width: 100%;
  }
  &__title {
    max-width: 70%;
  }
}
</style>
