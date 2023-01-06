<template>

  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
   
    :options="{
      fullScreen: { enable: false, zIndex: 0 },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        collisions: {
          enable: false,
        },

        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: true,
          speed: 1.5,
          straight: false,
        },

        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: 'none',
        },
        size: {
          random: true,
          value: 10,
        },
      },
      detectRetina: true,
    }"
  />
</template>

<script setup>
// import { loadFull } from "tsparticles";


const particlesInit = async (engine) => {
  await loadFull(engine);
};

// const particlesLoaded = async (container) => {
//   logger.log("Particles container loaded", container);
// };
</script>

<style lang="scss" scoped></style>
