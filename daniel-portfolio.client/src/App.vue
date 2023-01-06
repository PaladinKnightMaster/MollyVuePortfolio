<template>
  <header>
    <Navbar class="fixed-top" id="nav" />
  </header>
  <main >
   
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

#nav {
  transition: all 0.5s ease-out;
}

:root {
  --main-height: calc(100vh - 64px);
}
</style>
