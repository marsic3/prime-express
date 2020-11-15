<template>
  <div class="about-banner-wrap banner-space about-us-bg bg-cover">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ml-auto mr-auto">
          <div class="about-banner-content text-center">
            <h1 class="mb-15 text-white">
              About Prime Express, INC
            </h1>
            <h5 class="font-weight--normal text-white">
              Prime Express, INC specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subTitle', 'bgImg']
}
</script>
<style lang="scss" scoped>

.about-us-bg {
  background: no-repeat center center fixed;
  background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('../assets/img/6.jpg');

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
  }
}

</style>
