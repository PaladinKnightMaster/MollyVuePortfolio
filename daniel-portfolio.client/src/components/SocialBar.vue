<template>
  <div id="socialBar" class="container-fluid fixed-bottom d-none d-md-block">
    <div class="row my-3 my-md-0 justify-content-between">
      <div class="col-2 d-flex flex-column align-items-start">
        <PhoneIcon/>
        <GitHubIcon />
        <LinkedInIcon class="linkedIn-icon" />
      </div>
      <div
        class="col-1 text-center d-flex justify-content-center align-items-center"
      >
        <a
          href="mailto:tung.le0319@gmail.com"
          target="_blank"
          class="email font-1 fs-3 text-light"
        >
          tung.le0319@gmail.com
        </a>
      </div>
    </div>
  </div>

  <!-- SECTION FOOTER  -->
  <div class="container-fluid section-bubble5 py-4 test" >
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center icons d-md-none">
           <PhoneIcon />
        <GitHubIcon  />
        <LinkedInIcon  />
      </div>
      <div class="col-md-12 text-center">
        <p>Designed & Built by <b> Tung Le</b></p>
         <p>Copyright &copy; 2023 Tung Le</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import GitHubIcon from "./socialIcons/GitHubIcon.vue";
import LinkedInIcon from "./socialIcons/LinkedInIcon.vue";
import PhoneIcon from "./socialIcons/PhoneIcon.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
     const scrollY = ref(0);
    onMounted(() => {

        window.addEventListener("scroll", () => {
                scrollY.value = window.scrollY;
             
                if (scrollY.value >= 9000) {
                 let socialBar = document.getElementById('socialBar')
                 socialBar.classList.toggle= 'fixed-bottom'
                 
                }
            });
    });
    watchEffect(() => {});
    return {
      editable,
    };
  },
  components: { GitHubIcon, LinkedInIcon, PhoneIcon },
};
</script>

<style lang="scss" scoped>
.icons   {
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
.email-icon:after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #fff;
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
