<template>
  <div class="container-fluid position-absolute start-50">
    <div class="row">
      <div class="col-2 d-flex flex-column align-items-start">
        <p class="email-icon">tung.le0319@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {

  setup() {
  

 
    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped>
.email-icon:after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #fff;
}

</style>
