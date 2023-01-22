<template>
  <a href="https://github.com/mollynettleton">
    <slot> </slot>
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
}
</style>
