<template>
  <a href="tel:2086546616">
    <i class="mdi mdi-phone fs-3 text-light" title="Phone Number"></i>
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
