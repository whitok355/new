<template>
  <a class="btn-link" href="#"> View collection </a>
</template>
<script setup></script>
<style lang="scss" scoped>
.btn-link {
  width: fit-content;
  background: #eeeeee;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  @media (min-width: 465px) {
    width: fit-content;
    padding: 16px 83px;
  }
}
.btn-link:hover {
  transform: scale(1.1);
  transition: 0.5s;
  background: #b5b5b5;
  color: $mainWhite;
}
</style>
