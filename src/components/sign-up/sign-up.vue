<template>
  <div class="wrapper">
    <div class="sign-up container">
      <h3 class="sign-up__title">Join the club and get the benefits</h3>
      <p class="sign-up__text">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop
        up stores and more
      </p>
      <ul class="sign-up__list">
        <li class="sign-up__el"><checkmark /> Exclusive offers</li>
        <li class="sign-up__el"><checkmark /> Free events</li>
        <li class="sign-up__el"><checkmark /> Large discounts</li>
      </ul>
      <forms class="sign-up__form" :color="`primary`"></forms>
    </div>
  </div>
</template>
<script setup>
import forms from "Elements/form.vue";
import checkmark from "Icons/white-checkmark.vue";
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  background-image: url("./sign-up.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media (min-width: 768px) {
    padding: 97px 0;
  }
}
.sign-up {
  color: $mainWhite;
  @media (min-width: 465px) {
    text-align: center;
    max-width: 494px !important;
    &__el:not(:last-child) {
      margin-right: 40px;
    }
  }
  &__title {
    margin-top: 12px;
  }
  &__list {
    margin-top: 20px;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__form {
    margin-top: 28px;
    width: 100%;
  }
}
</style>
