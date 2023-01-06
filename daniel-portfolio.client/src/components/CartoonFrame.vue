<template>
  <div class="card-container">
    <div class="image-card ">
      <slot> </slot>

    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped>


.image-card::before {
  content: "";
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  filter: brightness(78%);
  background-position: center;
  background-size: cover !important;
  //when screen is 768px OR LESS

}
.image-card {
  transition: all 0.5s ease;
  padding: 8px;
  border-radius: 1rem;

  background: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  background-position: center;
  background-size: cover !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
 
}


.card-container{
  
  
    border-radius: 16px;
 
}
.card-container:hover {
  transform: scale(1.14);
  transition: all 0.5s ease;
  filter: saturate(120%);
  filter: brightness(120%);
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 #f7d778;
  
}

</style>
