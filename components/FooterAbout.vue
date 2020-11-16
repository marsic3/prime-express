<template>
  <div class="footer-widget">
    <div class="footer-widget__logo mb-30">
      <n-link to="/">
        <img src="../assets/img/logo4.svg" class="img-fluid" alt="Brand Logo">
      </n-link>
    </div>
    <ul class="footer-widget__list">
      <li>{{ footerAbout.address }}</li>
      <li>
        <a href="mailto:contact@mitech.com" class="hover-style-link">{{ footerAbout.email }}</a>
      </li>
      <li>
        <a href="tel:7737411660" class="hover-style-link text-black font-weight--bold">{{ footerAbout.telephone1 }}</a> <br>
        <a href="tel:7737065779" class="hover-style-link text-black font-weight--bold">{{ footerAbout.telephone2 }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['footerAbout']
}
</script>
<style lang="scss" scoped>
.img-fluid {
    height: 58px;
}
</style>
