<template>
  <div class="hero-image d-flex flex-column justify-content-center align-items-center">
   
    <div class="col-md-12 text-center">
     
          <h1 class="display-3 font-1 text-dark testing">
            WELCOME TO MY DEVELOPER PORTFOLIO
          </h1>
      
      </div>
    <div class="row" style="margin-top:100px">
      
      <div class="col-md-12">
    <div class="flower-spinner">
  <div class="dots-container">
    <div class="bigger-dot">
      <div class="smaller-dot"></div>
    </div>
  </div>
</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import typeWriter from "../utils/typeWriter.js";
export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {
      const element = document.querySelector("h1.testing");
      const parent = element.parentNode;

      // Use an intersection observer to call the typeWriter function when the element comes into view
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          typeWriter(element);
          observer.unobserve(parent);
        }
      });
      observer.observe(parent);
    });
    watchEffect(() => {});

    return {
      editable,
      typeWriter
    };
  },
};
</script>

<style lang="scss" scoped>
.flower-spinner,  .flower-spinner * {
      box-sizing: border-box;
    }

    .flower-spinner {
      height: 700px;
      width: 700px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      transform: scale(5);
    }

    .flower-spinner .dots-container {
      height: calc(70px / 7);
      width: calc(70px / 7);
    }

    .flower-spinner .smaller-dot {
      background: #ff1d5e;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;

    }

    .flower-spinner .bigger-dot {
      background: #ff1d5e;
      height: 100%;
      width: 100%;
      padding: 10%;
      border-radius: 50%;
      animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;
    }

    @keyframes flower-spinner-bigger-dot-animation {
      0%, 100% {
        box-shadow: rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px;
      }

      50% {
        transform: rotate(180deg);
      }

      25%, 75% {
        box-shadow: rgb(255, 29, 94) 26px 0px 0px,
        rgb(255, 29, 94) -26px 0px 0px,
        rgb(255, 29, 94) 0px 26px 0px,
        rgb(255, 29, 94) 0px -26px 0px,
        rgb(255, 29, 94) 19px -19px 0px,
        rgb(255, 29, 94) 19px 19px 0px,
        rgb(255, 29, 94) -19px -19px 0px,
        rgb(255, 29, 94) -19px 19px 0px;
      }

      100% {
        transform: rotate(360deg);
        box-shadow: rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px;
      }
    }

    @keyframes flower-spinner-smaller-dot-animation {
      0%, 100% {
        box-shadow: rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px;
      }

      25%, 75% {
        box-shadow: rgb(255, 29, 94) 14px 0px 0px,
        rgb(255, 29, 94) -14px 0px 0px,
        rgb(255, 29, 94) 0px 14px 0px,
        rgb(255, 29, 94) 0px -14px 0px,
        rgb(255, 29, 94) 10px -10px 0px,
        rgb(255, 29, 94) 10px 10px 0px,
        rgb(255, 29, 94) -10px -10px 0px,
        rgb(255, 29, 94) -10px 10px 0px;
      }

      100% {
        box-shadow: rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px,
        rgb(255, 29, 94) 0px 0px 0px;
      }
    }

.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-color: rgb(24, 22, 22);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
