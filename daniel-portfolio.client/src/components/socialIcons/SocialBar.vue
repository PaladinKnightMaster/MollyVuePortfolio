<template>
  <div id="socialBar" class="container-fluid fixed-bottom d-none d-md-block">
    <div class="row my-3 my-md-0 justify-content-between">
      <div class="col-2 d-flex flex-column align-items-start mb-4">
        <PhoneIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      
      <div
        class="col-1 text-center d-flex justify-content-center align-items-center"
      >
        <a
          href="mailto:mollyelainen@gmail.com"
          target="_blank"
          class="email font-1 fs-4 text-light mb-5 ms-4 "
        >
          mollyelainen@gmail.com
        </a>
      </div>
    </div>
  </div>

  <!-- SECTION FOOTER  -->
  <div class="container-fluid bg-dark py-4 test">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center icons d-md-none">
        <PhoneIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <div class="col-md-12 text-center">
        <p>Designed & Built by <b> DevOpportunitiesLLC</b></p>
        <p>Copyright &copy; 2023 DevOpportunitiesLLC</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import GitHubIcon from "./GitHubIcon.vue";
import LinkedInIcon from "./LinkedInIcon.vue";
import PhoneIcon from "./PhoneIcon.vue";

export default {
  setup() {
    const scrollY = ref(0);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;
        if (scrollY.value >= 9000) {
          let socialBar = document.getElementById("socialBar");
          socialBar.classList.toggle = "fixed-bottom";
        }
      });
    });
    return {};
  },
  components: { GitHubIcon, LinkedInIcon, PhoneIcon },
};
</script>

<style lang="scss" scoped>
.icons {
  font-size: 10rem !important;
}

.email {
  transform: rotate(90deg) + translateX(-50px) + translateY(-20px);
  transition: all 0.5s ease-out;
}
.email:hover {
  transform: rotate(90deg) + translateX(-70px) + translateY(-20px);
  color: turquoise !important;
  transition: all 0.5s ease-out;
}

.linkedIn-icon:after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #fff;
}
i {
  transition: all 0.5s ease-out;
}
i:hover {
  transform: translateY(-5px);
  color: turquoise !important;
}
</style>
