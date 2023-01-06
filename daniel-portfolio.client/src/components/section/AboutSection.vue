<template>
  <section id="about" class="about py-5 mt-0 section-bubble1 text-light font-1">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="section-title display-3">
          <h1>About me</h1>
        </div>
      </div>

      <div class="row justify-content-center" ref="container">
        <div class="col-md-4 d-flex justify-content-center">
          <div class="card-container">
            <div class="image-card perspective-left">
              <div class="box box3">
                <div class="oddboxinner elevation-6"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-8 pt-4 pt-lg-0 content px-md-5 d-flex align-items-center"
        >
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="px-md-5 font-2 text-start about-me-text long-paragraph"
          >
            Hello! My name is Tung and I
            <b class="text-light darken-10">LOVE</b> design and creating. I
            don't have any specific style. I prefer to adapt to each project and
            use it as to new things and expand my knowledge, Keeping the good
            and learning from the bad. I was immeditaley captivated with web
            development upon my first
            <b class="text-light darken-10">"Hello World!" </b> 1 year ago. I
            have a strong foundation in both front-end and back-end development,
            and I am always looking for ways to expand my skillset. I am highly
            creative and love coming up with new and innovative solutions for my
            projects. With my love for creativity and a thirst for knowledge,
            during my free time you can find me tinkering with new technologies
            with my projects or learning about the latest design trends. I am a
            problem-solver at heart and enjoy the challenge of finding creative
            solutions to complex problems and passionate about creating
            beautiful and functional websites that deliver an exceptional user
            experience. "
          </p>
        </div>
      </div>

      <div class="row my-5 justify-content-center">
        <div class="col-md-6 text-center">
          <p class="font-1 fs-4 text-warning">Current Favorite Song</p>
          <iframe
            class="elevation-6"
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div class="col-md-6 text-center">
          <p class="font-1 fs-4 text-warning">Creatures I'd die for</p>
          <div class="d-md-flex justify-content-around p-2">
            <img
              src="../../assets/img/Coco.png"
              alt=""
              width="240"
              height="240"
              class="elevation-6 rounded mb-2 mb-md-0"
            />
            <img
              src="../../assets/img/Goblin.png"
              alt=""
              width="240"
              height="240"
              class="elevation-6 rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <BlockQuote/> -->

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="font-1 fs-4 text-warning">Some of my artwork</p>
          <p class="font-2 fs-5 text-light text-center">
            I love drawing mandalas as a way of relaxation and creative outlet
            that allows me to express myself and explore new ideas. Having a
            background in art as helped me develop valuable skills such as
            attention to detail, problem-solving, and the ability to visualize
            and communicate solutions to complex problems and to communicate
            more effectively with colleagues and clients. Finally, My artwork is
            a source of personal satisfaction and pride, which aids me to
            maintaining motivation and a positive outlook in my career and life.
          </p>
        </div>

        <div class="d-flex flex-wrap justify-content-around">
          <div v-motion-slide-visible-once-bottom :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/SunflowerStar.png"
                alt=""
                class="procreate-art"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-bottom :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Trex.png"
                alt=""
                class="procreate-art"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-bottom :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/CosmicWolf.png"
                alt=""
                class="procreate-art perspective-right"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-bottom :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Mandala1.png"
                alt=""
                class="procreate-art perspective-left"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-bottom :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Mandala2.png"
                alt=""
                class="procreate-art perspective-right"
              />
            </ParallaxMouse>
          </div>

          <div v-motion-slide-visible-once-bottom :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Turtle.png"
                alt=""
                class="procreate-art perspective-left"
              />
            </ParallaxMouse>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useParallax } from "@vueuse/core";
import { onMounted, ref, watchEffect } from "vue";
import ParallaxMouse from "../ParallaxMouse.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    const container = ref(null);
    const { tilt, roll, source } = useParallax(container);

    // Use an intersection observer to call the typeWriter function when the element comes into view

    onMounted(() => {});

    watchEffect(() => {});

    return {
      editable,
      container,
    };
  },
  components: { ParallaxMouse },
};
</script>

<style lang="scss" scoped>
.about-me-text {
  font-size: 1.25rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
}
.procreate-art {
  width: auto;
  height: 300px;
  cursor: pointer;
}

.procreate-art:hover {
  transform: scale(1.01);
  transition: all 0.5s ease;
}
.box {
  background-image: url("../../assets/img/Tungle/TungPortrait.jpg");
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
}

.oddboxinner {
  height: 500px;
  margin: 15px;
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
  background: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 360px;
  }
}

.perspective-left {
  transform: perspective(1500px) rotateY(15deg);
  transition: transform 1s ease 0s;
}

.perspective-left:hover {
  transform: perspective(3000px) rotateY(5deg);
}

.perspective-right {
  transform: perspective(1500px) rotateY(-15deg);
  transition: transform 1s ease 0s;
}

.perspective-right:hover {
  transform: perspective(3000px) rotateY(-5deg);
}
</style>
