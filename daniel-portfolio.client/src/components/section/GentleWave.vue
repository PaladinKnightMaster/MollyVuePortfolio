<template>
  <svg class="editorial mb-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28 " preserveAspectRatio="none">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0
    58-18 88-18s
    58 18 88 18
    58-18 88-18
    58 18 88 18
    v44h-352z" />
    </defs>
    <g class="parallax1">
      <use xlink:href="#gentle-wave" x="50" y="3" fill="#7c8a96" />
    </g>
    <g class="parallax2">
      <use xlink:href="#gentle-wave" x="50" y="0" fill=" #465591" />
    </g>
    <g class="parallax3">
      <use xlink:href="#gentle-wave" x="50" y="9" fill="#4B233F" />
    </g>
    <g class="parallax4">
      <use xlink:href="#gentle-wave" x="50" y="6" fill="#0d0b0e" />
    </g>
  </svg>
</template>

<script>
export default {
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.editorial {
  display: block;
  width: 100%;
  height: 60px;
  max-height: 60px;
  margin: 0;
  z-index: 5;
  bottom: -20px;
  position: absolute;
  left: 0px;
  float: left;
}

.parallax1>use {
  animation: move-forever1 12s linear infinite;

  &:nth-child(1) {
    animation-delay: -2s;
  }
}

.parallax2>use {
  animation: move-forever2 10s linear infinite;

  &:nth-child(1) {
    animation-delay: -2s;
  }
}

.parallax3>use {
  animation: move-forever3 8s linear infinite;

  &:nth-child(1) {
    animation-delay: -2s;
  }
}

.parallax4>use {
  animation: move-forever4 20s linear infinite;

  &:nth-child(1) {
    animation-delay: -2s;
  }
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}
</style>
