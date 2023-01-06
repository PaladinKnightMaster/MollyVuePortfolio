<template>
<div class=" d-flex justify-content-center align-items-center py-5">
  <div class="row">
    <div class="col-md-12">
      <article class="container">

        <blockquote>
            <strong>The</strong> <em> meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond </em> <strong>
             themselves.
            </strong>
        </blockquote>
        <b>Alan Watts</b>

    </article>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
props:{

       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>



@font-face {
    font-family: 'Sketch Block';
    src: url('http://tangledindesign.com/codepen/fonts/sketch_block-webfont.eot');
    src: url('http://tangledindesign.com/codepen/fonts/sketch_block-webfont.eot?#iefix') format('embedded-opentype'),
         url('http://tangledindesign.com/codepen/fonts/sketch_block-webfont.woff') format('woff'),
         url('http://tangledindesign.com/codepen/fonts/sketch_block-webfont.ttf') format('truetype'),
         url('http://tangledindesign.com/codepen/fonts/sketch_block-webfont.svg#SketchBlockBold') format('svg');
}

@font-face {
    font-family: 'Museo 700';
    src: url('http://tangledindesign.com/codepen/fonts/Museo700-Regular-webfont.eot');
    src: url('http://tangledindesign.com/codepen/fonts/Museo700-Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('http://tangledindesign.com/codepen/fonts/Museo700-Regular-webfont.woff') format('woff'),
         url('http://tangledindesign.com/codepen/fonts/Museo700-Regular-webfont.ttf') format('truetype'),
         url('http://tangledindesign.com/codepen/fonts/Museo700-Regular-webfont.svg#SketchBlockBold') format('svg');
}

@font-face {
    font-family: 'CallunaRegular';
    src: url('http://tangledindesign.com/codepen/fonts/Calluna-Regular-webfont.eot');
    src: url('http://tangledindesign.com/codepen/fonts/Calluna-Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('http://tangledindesign.com/codepen/fonts/Calluna-Regular-webfont.woff') format('woff'),
         url('http://tangledindesign.com/codepen/fonts/Calluna-Regular-webfont.ttf') format('truetype'),
         url('http://tangledindesign.com/codepen/fonts/Calluna-Regular-webfont.svg#CallunaRegular') format('svg');
}


  

    blockquote {
        width: 565px;
        font: 2.65em CallunaRegular;
        letter-spacing: .075em;
        float: left;
        padding: 45px 0 30px 25px;
        margin: 0;
        border-top: 2px solid #858585;
        border-bottom: 2px solid #858585;
        -webkit-transform: rotate(-3deg);
        -moz-transform: rotate(-3deg);
    }

    .container:before {
        content: "“";
        font-size: 20em;
        position: absolute;
        left: 150px;
        color: #666;
    }

    .container:after {
        content: "”";
        font-size: 20em;
        position: absolute;
        right: 300px;
        top: 950px;
        color: #666;
    }

        blockquote:first-line {
            font: 1.85em "Sketch Block";
            color: #fff79e;
        }

        blockquote:first-letter {
            font-size: 2.0em;
           
            float: left;
            line-height: .52em;
            margin-right: -18px;
            position: relative;
            z-index: 1;
        }

        blockquote strong:first-child {
            margin-left: 8px;
            letter-spacing: 0;
        }

        blockquote strong:last-child {
            font: 2em "Museo 700";
            text-transform: uppercase;
            letter-spacing: 0;
        }

        blockquote em {
            border-bottom: 2px dotted #858585;
          padding-left: 5px;
        }

        blockquote + b {
            float: right;
            margin-top: 10px;
            font: 1.6em CallunaRegular;
            letter-spacing: .15em;
        }

        blockquote + b:first-letter {
            color: #fff79e;
            font-size: 1.3em;
            font-style: italic;
            letter-spacing: .25em;
        }

        @-moz-document url-prefix() { 

            blockquote:first-letter {
                margin-top: -29px;
            }

        }


</style>
