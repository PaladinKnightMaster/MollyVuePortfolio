<template>
  <div class="d-block d-md-none">
       <div class="content-hover border-0">
      <div class="d-flex justify-content-between">
      
        <div class="d-flex align-items-center">
          <GitHubIcon v-motion-slide-visible-once-bottom :delay="100" />
          <a
            v-motion-slide-visible-once-bottom
            :delay="600"
            href=""
            class="ms-3"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3971/3971765.png"
              alt="External Link to Webpage"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
      <div class="">
        <p v-motion-slide-visible-once-bottom :delay="700" class="fs-3 font-1">
          {{ project.title }}
        </p>
        <p
          v-motion-slide-visible-once-bottom
          :delay="900"
          class="text-light font-2"
        >
          {{ project.description }}
        </p>
      </div>

      <div class="">
        <ul class="list-group list-group-horizontal">
          <li
            class="list-group-item text-light darken-10 bg-transparent border-0"
            v-for="t in project.tech"
          >
            {{ t }}
          </li>
        </ul>
      </div>
    </div>
    </div>


  <div class="box rounded elevation-6 border-0">
    <div class="content border-0">
      <img :src="`${project.img}`" />
    </div>
    <div class="content-hover border-0">
      <div class="d-flex justify-content-between">
        <!-- <i
          v-motion-slide-visible-once-bottom
          :delay="400"
          class="mdi mdi-folder fs-3 text-warning"
        ></i> -->
        <div class="d-flex align-items-center">
          <GitHubIcon v-motion-slide-visible-once-bottom :delay="100" />
          <a
            v-motion-slide-visible-once-bottom
            :delay="600"
            href=""
            class="ms-3"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5873/5873833.png"
              alt="External Link to Webpage"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
      <div class="">
        <p v-motion-slide-visible-once-bottom :delay="700" class="fs-3 font-1">
          {{ project.title }}
        </p>
        <p
          v-motion-slide-visible-once-bottom
          :delay="900"
          class="text-light font-2"
        >
          {{ project.description }}
        </p>
      </div>

      <div class="">
        <ul class="list-group list-group-horizontal">
          <li
            class="list-group-item text-light darken-10 bg-transparent border-0"
            v-for="t in project.tech"
          >
            {{ t }}
          </li>
        </ul>
      </div>
    </div>

  </div>

  
 
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import GitHubIcon from "./socialIcons/GitHubIcon.vue";

export default {
    props: {
        project: { type: Object, required: true },
    },
    setup(props) {
        const editable = ref({});
        onMounted(() => { });
        watchEffect(() => { });
        return {
            editable,
        };
    },
    components: { GitHubIcon }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Patua+One");

h1 {
  margin-top: 4%;
  margin-bottom: 4%;
  font-family: "Patua One", cursive;
}

.box2 {
  max-height: 350px;
  height: 350px;
  background-color: #eeeeee;
  background-size: cover;
  background-position: center center;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: center;

  .hover {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    display: flex;
    justify-content: center;
    flex-flow: column;
    transition: all 0.5s ease-in-out;
    padding: 2em 2em;

    h1 {
      color: #ffffff;
      font-size: 1.8em;
      text-transform: uppercase;
      font-family: "Patua One", cursive;
    }

    p {
      color: #ffffff;
    }
  }

  &:hover {
    filter: grayscale(100%);
    .hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}

.box {
  position: relative;


  background-color: #eeeeee;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: hidden;

  .content-hover2 {
    transform: scale(0, 0);
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #d32222;
    // box-shadow: inset 0 0 0 15px #C01E1E;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 2em 2em;

    h1 {
      color: #ffffff;
      font-size: 1.5em;
      text-transform: uppercase;
      font-family: "Patua One", cursive;
      font-style: italic;
    }

    p {
      color: #ffffff;
    }
  }

  .content-hover {
    transform: scale(0, 0);
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: transparent;
    // box-shadow: inset 0 0 0 15px #1B1B1B;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 2em 2em;

    h1 {
      color: #ffffff;
      font-size: 1.5em;
      text-transform: uppercase;
      font-family: "Patua One", cursive;
      font-style: italic;
    }

    p {
      color: #ffffff;
    }
  }

  .content {
    transition: all 0.25s ease;
    display: flex;
    justify-content: center;
    flex-flow: column;

    img {
      object-fit: cover;
      width: auto;
      height: 400px;
    }

    p {
      font-size: 1.2em;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: -2em;
    }
  }

  &:hover > {

.content{

  filter: grayscale(80%) +brightness(20%);
  transition: all 0.25s ease;
}

    .content-hover,
    .content-hover2 {
      transform: scale(1, 1);
      cursor: pointer;
    }
  }
}

</style>
