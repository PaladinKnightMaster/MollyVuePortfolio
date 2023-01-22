<template>
  <nav class="navbar navbar-expand-lg navbar-dark  px-3">
    <div class="d-flex me-5">
      <p class="mb-0 font-1 fs-3 text-light">Molly Nettleton</p>
      <p class="mb-0 ms-4 font-1 fs-3 text-light">
        Full Stack Software Developer
      </p>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <button @click="scrollTo(1)" class="btn text-light font-1 fs-4">
            About
          </button>
        </li>
        <li>
          <button @click="scrollTo(2)" class="btn text-light font-1 fs-4">
            Experience
          </button>
        </li>
        <li>
          <button @click="scrollTo(3)" class="btn text-light font-1 fs-4">
            Portfolio
          </button>
        </li>
        <li>
          <button @click="scrollTo(4)" class="btn text-light font-1 fs-4">
            Contact
          </button>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
    <!-- <ProgressBar /> -->
  </nav>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  setup() {
    return {
      scrollTo(x) {
        console.log(x);
        let elementId;
        if (x == 1) {
          elementId = "about";
        } else if (x == 2) {
          elementId = "experience";
        } else if (x == 3) {
          elementId = "portfolio";
        } else if (x == 4) {
          elementId = "contact";
        }

        window.scrollTo({
          top: document.getElementById(elementId).offsetTop,
          left: 0,
          behavior: "smooth",
        });
      },
    };
  },
  components: { ProgressBar },
};
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
.btn {
  transition: all 0.5s ease-out;
}
.btn:hover {
  transform: scale(1.1);

  color: turquoise !important;
}
.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
nav {
  @media screen and (min-width: 768px) {
    height: 64px;
  }
}

.bg-custom {
  background-color: rgba(51, 46, 46, 0.685);
  backdrop-filter: blur(8px);
}
</style>
