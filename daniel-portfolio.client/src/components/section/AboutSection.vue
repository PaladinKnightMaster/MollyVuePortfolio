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

        <div class="col-lg-8 pt-4 pt-lg-0 content px-md-5 d-flex align-items-center">




          <p v-motion-slide-visible-once-bottom :delay="300"
            class="px-md-5 font-2 text-start about-me-text long-paragraph">
            Hi, I'm Molly. I am a full stack software developer with a love for elegant design and user experience, and
            finding creative solutions
            to complex problems. One of the things I love most about being a software developer is the opportunity to
            design and
            create user experiences that are both visually appealing and intuitive. I enjoy the process of taking an
            idea from
            concept to reality, and I'm always looking for ways to improve and optimize the user experience.
            <br><br>
            In addition to my passion for design and user experience, I'm also driven by my love for problem-solving.
            Being a
            software developer, I am constantly faced with complex challenges that require me to think critically and
            come up with
            creative solutions. I find great satisfaction in tackling these problems and coming up with solutions that
            work
            effectively and efficiently.
            <br><br>
            In my free time, I enjoy immersing myself in tabletop gaming, particularly role-playing games and board
            games. I also
            have a passion for creating art in various mediums, from digital to watercolor. I find great pleasure in
            sharing my
            creations with friends and family.
            <br><br>
            I'm excited to start a new chapter in my life as a professional developer!
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

    onMounted(() => { });

    watchEffect(() => { });

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
  background-image: url("https://cdn.discordapp.com/attachments/1041764502246543410/1067183863115300904/Molly_Nettleton.5.jpg");
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
