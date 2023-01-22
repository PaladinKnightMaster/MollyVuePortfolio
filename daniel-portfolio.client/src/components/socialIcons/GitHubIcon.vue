<template>
  <a href="https://github.com/mollynettleton">
    <i class="mdi mdi-github fs-3 text-light" title="Github Link"></i>
  </a>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
i {
  z-index: 99999 !important;
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    font-size: 4rem!important;
  }
}
i:hover {
  color: turquoise !important;
}

a:hover {
  transform: translateY(-5px);
  transition: all 0.5s ease-out;
}
a {
  transition: all 0.5s ease-out;
  //when screen is 768px OR LESS
}
</style>
