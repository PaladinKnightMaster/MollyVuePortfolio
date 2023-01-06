<template>
  <div class="hero-image d-flex flex-column justify-content-center align-items-center">
   
    <div class="col-md-12 text-center">
     
          <h1 class="display-3 font-1 text-dark testing">
            WELCOME TO MY DEVELOPER PORTFOLIO
          </h1>
      
      </div>
    <div class="row">
      
      <div class="col-md-12">
        <div class="mosaic-loader mt-5">
      <div class="cell d-0"></div>
      <div class="cell d-1"></div>
      <div class="cell d-2"></div>
      <div class="cell d-3"></div>
      <div class="cell d-1"></div>
      <div class="cell d-2"></div>
      <div class="cell d-3"></div>
      <div class="cell d-4"></div>
      <div class="cell d-2"></div>
      <div class="cell d-3"></div>
      <div class="cell d-4"></div>
      <div class="cell d-5"></div>
      <div class="cell d-3"></div>
      <div class="cell d-4"></div>
      <div class="cell d-5"></div>
      <div class="cell d-6"></div>
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
$--p-1: #d4aee0;
$--p-2: #8975b4;
$--p-3: #64518a;
$--p-4: #565190;

$--b-1: #44abac;
$--b-2: #2ca7d8;
$--b-3: #1482ce;
$--b-4: #05597c;

$--g-1: #b2dd57;
$--g-2: #57c443;
$--g-3: #05b853;
$--g-4: #19962e;

$--y-1: #fdc82e;
$--y-2: #fd9c2e;
$--y-3: #d5385a;
$--y-4: #911750;

$--s-1: #d9d9d9;
$--s-2: #9e9e9e;
$--s-3: #666666;
$--s-4: #2b2b2b;

$colors: (
  $--p-1,
  $--p-2,
  $--p-3,
  $--p-4,
  $--b-1,
  $--b-2,
  $--b-3,
  $--b-4,
  $--g-1,
  $--g-2,
  $--g-3,
  $--g-4,
  $--y-1,
  $--y-2,
  $--y-3,
  $--y-4
);

h2 {
  display: block;
  color: white;
  font-weight: 100;
  //margin-right: 2rem;
  text-align: center;
}

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap");

.mosaic-loader {
  --cell-size: 64px;
  --cell-spacing: 1px;
  --border-width: 1px;
  --cells: 4;
  --total-size: calc(
    var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing))
  );

  display: flex;
  flex-wrap: wrap;
  width: var(--total-size);
  height: var(--total-size);

  > .cell {
    --cell-color: white;
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border: var(--border-width) solid var(--cell-color);

    animation: 1.5s ripple ease infinite;

    $delays: (2 * 4) - 2;
    @for $i from 1 through $delays {
      &.d-#{$i} {
        animation-delay: $i * 100ms;
      }
    }

    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        --cell-color: #{nth($colors, $i)};
      }
    }
  }
}

@keyframes ripple {
  0% {
    background-color: transparent;
  }

  30% {
    background-color: var(--cell-color);
  }

  60% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}

.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
