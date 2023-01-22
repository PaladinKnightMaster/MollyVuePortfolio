<template>
  <!-- Your section content goes here -->

  <div
    class="container-fluid position-relative text-center d-flex flex-column justify-content-center align-items-center hero-image"
  >
    <div
      class="video-container position-absolute d-flex justify-content-center"
    >
      <video

        src="src\assets\img\pexels-tima-miroshnichenko-5647328(1).mp4"
        width="200" height="1004" object-fit="cover"
        loop
        muted
        autoplay
      class="object-fit"
      ></video>

    </div>

    <!-- <ParticleComponent /> -->
    <section
      class="locomotive-section container-fluid"
      :style="{ transform: `translateY(-${scrollY}px)` }"
    >
      <div class="row justify-content-between w-100">
        <div id="heroText2" class="col-md-6 hero-text-2 mt-5">
          <p
            v-motion-slide-bottom
            :delay="600"
            class="text-start display-6 ms-5 font-1 mb-0 text-shadow text-light"
          >
            creative
          </p>
          <p
            v-motion-slide-bottom
            :delay="1000"
            class="font-1 display-7 mb-0 text-shadow text-light"
          >
            Problem Solver <b class="display-6">&</b>
          </p>
          <p
            v-motion-slide-bottom
            :delay="1500"
            class="font-1 display-7 text-shadow text-light"
          >
            Critical Thinker
          </p>
        </div>
        <div id="heroText" class="col-md-6 text-end text-light">
          <p
            v-motion-slide-bottom
            :delay="600"
            class="display-6 font-1 mb-0 text-shadow text-light"
          >
            Willing To Learn
          </p>
          <p
            v-motion-slide-bottom
            :delay="600"
            class="display-1 font-1 mb-0 text-shadow"
          >
            Anything
          </p>
          <p
            v-motion-slide-bottom
            :delay="1000"
            class="font-1 display-1 mb-0 text-shadow"
          >
            Anytime
          </p>
          <p
            v-motion-slide-bottom
            :delay="1500"
            class="font-1 display-1 text-shadow"
          >
            Anywhere
          </p>
        </div>
      </div>
    </section>
    <GentleWave />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import ParticleComponent from "../ParticleComponent.vue";
import { AppState } from "../../AppState.js";
import GentleWave from "./GentleWave.vue";

export default {
  name: "LocomotiveSection",
  setup() {
    // Create a reactive data model for the scroll position
    const scrollY = ref(0);
    // Add a scroll listener to update the scroll position
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;
      });
    });
    // Return the scroll position to the component
    return {
      scrollY,
      spaceman: computed(() => AppState.spaceman)
    };
  },
  components: { ParticleComponent, GentleWave },
};
</script>

<style lang="scss" scoped>

video {
  object-fit: cover !important;
  width: 100%;
  height: 100%;
}
.video-container {
  height: 100vh;
  width: 100%
}
.img-fluid-1 {
  height: 100vh;
  width: 100vw;
}
.padding1 {
  padding-top: 400px;
}

.pug-img {
  position: absolute;
  width: auto;

  transform: translateY(450px);
  height: 300px;
}

.locomotive-section {
  transition: transform 0.75s ease;
}

.hero-text-2 {
  transition: all 0.25s ease-out;
}
.hero-text {
  z-index: 9999;
}
.display-7 {
  font-size: 6rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
}
#heroText {
  transition: all 0.5s ease-out;
}

.test {
  transition: all 1.25s ease-out;
  transform: translateY(240px);
}
.test1 {
  transition: all 1.25s ease-out;
  transform: translateY(0px);
}
#hero {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: 0;
}
#heroVideo {
  width: 100%;
  object-fit: cover;
}
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;

  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
