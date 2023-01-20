<template>
<div class="row ">
  <div>
    <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep4" viewBox="0 0 1600 200" style="display: block;" data-height="200">
<polygon class="" style="fill: ;" points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 "></polygon>
<polygon class="" style="opacity: 1;fill: #0e9382;" points="800,172 886,86 900,86 800,186 700,86 714,86 "></polygon>
<polygon class="" style="opacity: 1;fill: #14a084;" points="800,162 876,86 888,86 800,174 712,86 724,86 "></polygon></svg>
  </div>
</div>
</template>

<script>
export default {
  setup() {
    return {
      }
    }
  }
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

body{
  margin:0;
  padding:0;
}
h1{
  font-family: 'Montserrat', sans-serif;
  font-size:45px;
  font-weight:700;
  text-align:center;
  color:#2c3e50;
}
h2{
  font-family: 'Montserrat', sans-serif;
  font-size:25px;
  font-weight:400;
  text-align:center;
  color:#2c3e50;
}
.row{
  width:100%;

  padding:0;
  margin:0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position:relative;
}

/* -- SVG CSS -- */

.svg-separator{
  display: block;
  background: 0 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  -webkit-transform: translateY(-100%) translateY(2px);
  transform: translateY(-100%) translateY(2px);
  width: 100%;
}
.svg-separator.bottom{
  top: auto;
  bottom: 0;
}

.sep4 {
  transform: translateY(-100%) translateY(2px) scale(1,1);
  transform-origin: top;
}

/* -- Row BG Color -- */


.green2{background-color:#1bbc9b;}








</style>
