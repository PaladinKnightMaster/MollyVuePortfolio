<template>
  <div>
    <!-- The opening animation page -->
    <transition name="slide" mode="out-in" appear>
      <div class="opening-animation" v-if="!mainLoaded">
        <LoadingAnimation />
      </div>
    </transition>

    <!-- The main page -->
    <transition name="fade" mode="out-in" appear>
      <div class="main-page" v-if="mainLoaded">
        <HeroSectionV2 />
        <AboutSection />

        <ExperienceSection />

        <PortfolioSection />

        <ContactSection />
        <div class="position-relative"></div>
        <SocialBar />

      </div>
    </transition>
  </div>
</template>

<script>
import AboutSection from "../components/section/AboutSection.vue";
import ContactSection from "../components/section/ContactSection.vue";
import PortfolioSection from "../components/section/PortfolioSection.vue";
import ExperienceSection from "../components/section/ExperienceSection.vue";
import SocialBar from "../components/socialIcons/SocialBar.vue";
import HeroSectionV2 from "../components/section/HeroSectionV2.vue";
export default {
  data() {

    return {
      mainLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.mainLoaded = true;
    }, 500);
  },
  components: {
    AboutSection,
    PortfolioSection,
    ExperienceSection,
    ContactSection,
    SocialBar,
    HeroSectionV2,
  },
};
</script>

<style scoped lang="scss">
.opening-animation {
  height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter {
  transform: translateY(0);
}

.slide-leave {
  transform: translateY(-100%);
}
.slide-leave-to {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
