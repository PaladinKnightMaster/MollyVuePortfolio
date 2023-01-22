<template>
  <section id="about" class="about py-5 mt-0 text-light font-1 ">
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
            Hi, my name is Daniel Le and I am a full stack developer. I am
            highly skilled in problem solving and critical thinking, with a
            strong foundation in both front and back end development with a love
            of finding creative solutions to complex problems.
            <br />
            As a developer, I am fascinated by dev ops and programming
            architecture, and I enjoy researching documentation and exploring
            open source software in my free time. I am a problem solver at heart
            and am passionate about creating functional and smooth websites and
            apps that deliver solid performance.
            <br />
            I have a strong foundation in back end development and am skilled in
            technologies such as Node.js, Express, and SQL. I am always eager to
            learn and grow as a developer, and I take pride in my ability to
            adapt and learn new technologies quickly.
            <br />
            I believe that great software is built on a foundation of clear
            communication and collaboration, and I strive to work with my team
            members to create the best possible product. Thank you for taking
            the time to read a little about me. I look forward to the
            opportunity to work with you and contribute my skills and expertise
            to your project.
          </p>
        </div>
      </div>

      <!-- <div class="row my-5 justify-content-center">
        <div class="col-md-6 text-center">
          <p class="font-1 fs-4 text-warning">Current Favorite Song</p>
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/7MZM9KhwGQG8QJ4BycsnQn?utm_source=generator"
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
      </div> -->
    </div>
    <!-- <BlockQuote/> -->
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useParallax } from "@vueuse/core";
import { onMounted, ref, watchEffect } from "vue";
import ParallaxMouse from "../cardEffect/ParallaxMouse.vue";


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
  components: { ParallaxMouse},
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
  background-image: url("https://cdn.discordapp.com/attachments/262286883000811520/1060759843536904233/Daniel_Le.1.jpg");
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
  background: url("https://w.wallhaven.cc/full/j3/wallhaven-j3m8y5.png");
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
