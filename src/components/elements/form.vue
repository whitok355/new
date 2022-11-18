<template>
  <form class="form">
    <input
      class="form__input"
      :class="`form__input--${props.color}`"
      type="email"
      placeholder="your@email.com"
    />
    <input
      class="form__btn"
      :class="`form__btn--${props.color}`"
      type="submit"
      value="Sign up"
    />
  </form>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    require: false,
  },
});
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  &__input {
    flex-grow: 4;
    padding: 17px 18px;
    border: none;
    &--primary {
      background: $lightGrey;
    }
    &--white {
      background: $darkPrimary;
      color: $lightGrey;
    }
  }
  &__btn {
    flex-grow: 1;
    padding: 17px 26px;
    border: none;
    &--primary {
      color: $lightGrey;
      background: $darkPrimary;
    }
    &--white {
      color: $darkPrimary;
      background: $lightGrey;
    }
  }
}
</style>
