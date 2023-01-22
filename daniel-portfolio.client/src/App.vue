<template>
  <header>
    <Navbar class="fixed-top" id="nav" />
  </header>
  <main  class="bg-custom">
   
    <router-view />
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";

export default {
  setup() {
    onMounted(() => {
    

      hideOnScrollTest("#nav");
   
    });

  

    function hideOnScrollTest(el) {
      let nav = document.querySelector(`${el}`);

      let prevScrollpos = window.scrollY;

      // console.log(nav);
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          nav.style.top = "0";
        } else {
          nav.style.top = "-62px";
        }
        prevScrollpos = currentScrollPos;
      };
    }

    return {
      appState: computed(() => AppState),
    };
  },
  components: { Navbar },
};
</script>
<style lang="scss">

@import "./assets/scss/main.scss";

.bg-custom{
background: rgb(13,11,14);
background: linear-gradient(180deg, rgba(13,11,14,1) 23%, rgba(23,35,78,1) 33%, rgba(110,17,22,1) 50%, rgba(252,176,69,1) 90%, rgba(102,219,233,1) 98%, rgba(0,0,0,1) 100%);
}

#nav {
  transition: all 0.5s ease-out;
}

:root {
  --main-height: calc(100vh - 64px);
}
</style>
