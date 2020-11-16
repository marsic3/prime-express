<template>
  <div class="box-large-image__wrap wow move-up">
    <div class="box-large-image__box">
      <div class="box-large-image__midea">
        <div class="images-midea">
          <img :src="loadImg(service.image)" class="img-fluid" alt="feature thumbnail">
          <!-- <div class="button-wrapper">
            <div class="btn tm-button">
              <span class="button-text">Learn more</span>
            </div>
          </div> -->
          <div class="heading-wrap">
            <h5 class="heading">
              {{ service.heading }}
            </h5>
          </div>
        </div>
      </div>

      <div class="box-large-image__content mt-30 text-center">
        <p v-html="service.desc">
          {{ service.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const images = require.context('@/assets/img/', false, /\.png$|\.jpg$/)

export default {
  props: ['service'],
  methods: {
    loadImg (imgPath) {
      return images('./' + imgPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.img-fluid {
 height: 300px;
}
</style>
