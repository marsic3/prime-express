<template>
  <div class="about-banner-wrap banner-space about-us-bg bg-cover">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ml-auto mr-auto">
          <div class="about-banner-content text-center">
            <h1 class="mb-15 text-white">
              Services
            </h1>
            <h5 class="font-weight--normal text-white">
              Our main goal is to establish long term relationships with our clients and we are achieving it by providing the best services in transportation, including long haul and dedicated freight. Whether you are interested in driving solo or as a team, OTR or dedicated regional route, independent contractor - we have open positions for you!
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
  background: no-repeat center bottom fixed;
  background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('../assets/img/4.jpg');
  background-size: cover;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
  }
}

</style>
