<template>
  <div class="discr" :class="`discr-${classDiscr}`">
    <div class="discr__container container-discr">
      <h3 class="container-discr__title grey">{{ props.title }}</h3>
      <p class="container-discr__subTitle container-discr__subTitle--mini">
        {{ props.subTitle.mini }}
      </p>
      <p class="container-discr__subTitle container-discr__subTitle--big grey">
        {{ props.subTitle.big }}
      </p>
    </div>
    <div class="discr__btn">
      <btnLink />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import btnLink from "Elements/btn-link.vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  subTitle: {
    type: Object,
    requrired: false,
  },
  classDiscr: {
    type: String,
    required: false,
  },
});
</script>
<style lang="scss" scoped>
.discr {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 48px 56px;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__btn {
    display: inline-flex;
    justify-content: center;
    margin-top: 32px;
  }
}
.container-discr {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    padding-right: 130px;
  }
  &__subTitle {
    margin-top: 12px;
    &--mini {
      display: block;
    }
    &--big {
      display: none;
    }
    @media (min-width: 425px) {
      width: 70%;
    }
    @media (min-width: 768px) {
      width: auto;
      margin-top: 20px;
      &--mini {
        display: none;
      }
      &--big {
        display: block;
      }
    }
  }
  &__title {
    @media (min-width: 425px) {
      width: 70%;
    }
    @media (min-width: 768px) {
      width: auto;
    }
  }
}
.discr-white {
  background: $mainWhite;
  color: $darkPrimary;
}
.discr-primary {
  background: $darkPrimary;
  color: $mainWhite;
}
</style>
