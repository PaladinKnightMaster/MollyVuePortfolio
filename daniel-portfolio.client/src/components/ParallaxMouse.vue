<template>
  <div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div :style="cardWindowStyle">
            <slot> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">

import { computed, reactive, ref } from "vue";
import type { CSSProperties } from "vue";
import { useMediaQuery, useParallax } from "@vueuse/core";
const target = ref(null);
const isMobile = useMediaQuery("(max-width: 700px)");
const parallax = reactive(useParallax(target));
const targetStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: ".3s ease-out all",
};
const cardWindowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const containerStyle: CSSProperties = {
  perspective: "300px",
};

const cardStyle = computed(() => ({
  background: "transparent",
  height: "auto",
  width: "auto",
  borderRadius: "5px",
  overflow: "hidden",
  transition: ".5s ease-out all",
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}));
</script>


<style lang="scss" scoped>
.box {
  background-image: url("../assets/img/Tungle/Tung\ Le.4.jpg");
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
}

.box3 {
  border-width: 5px 5px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
}

.oddboxinner {
  height: 450px;

  transform: rotate(-2deg);
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 305px;
  }
}

.image-card {
  width: 440px;
  height: 560px;
  padding: 8px;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  background: url("https://w.wallhaven.cc/full/j3/wallhaven-j3m8y5.png");
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 360px;
  }
}
</style>
