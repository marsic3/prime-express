<template>
  <div class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header position-relative">
            <!-- brand logo -->
            <div class="header__logo top-logo">
              <n-link to="/">
                <img src="../assets/img/logo4.svg" class="img-fluid" alt="Brand Logo">
              </n-link>
            </div>

            <div class="header-right flexible-image-slider-wrap">
              <div id="hidden-icon-wrapper" class="header-right-inner">
                <!-- Header Top Info -->
                <div class="header-top-info-slider-werap top-info-slider__container">
                  <div class="header-top-info-inner">
                    <swiper :options="swiperOption">
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-phone" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              773 741 1660
                            </h6>
                            <div class="info-sub-title">
                              prime@primexp.net
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-map-marker-alt" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              1718 Sherman Ave #307
                            </h6>
                            <div class="info-sub-title">
                              Evanston, IL 60201
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-clock" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              8:00AM - 6:00PM
                            </h6>
                            <div class="info-sub-title">
                              Monday to Saturday
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-comment-alt-lines" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              Online 24/7
                            </h6>
                            <div class="info-sub-title">
                              773 706 5779
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper>
                  </div>
                </div>

                <!-- Header Social Networks -->
                <div class="header-social-networks style-icons">
                  <div class="inner">
                    <a class="social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://facebook.com" data-hover="Facebook" target="_blank">
                      <i class="social-icon fab fa-facebook-f" />
                    </a>
                    <a class="social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://instagram.com/primexpress_inc" data-hover="Instagram" target="_blank">
                      <i class="social-icon fab fa-instagram" />
                    </a>
                    <a class="social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://linkedin.com" data-hover="Linkedin" target="_blank">
                      <i class="social-icon fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <!-- mobile menu -->
              <div id="mobile-menu-trigger" class="mobile-navigation-icon d-block d-xl-none" @click="mobiletoggleClass('addClass', 'active')">
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fixed-header :threshold="300">
      <div class="header-bottom-wrap border-top d-md-block d-none">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-bottom-inner">
                <div class="header-bottom-left-wrap">
                  <!-- navigation menu -->
                  <div class="header__navigation d-none d-xl-block">
                    <nav class="navigation-menu">
                      <Navigation />
                      <a href="javascript:void(0)">
                        <img class="ls-flag" src="../assets/img/us.png" alt="en" title="English">
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fixed-header>
  </div>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
import Navigation from '@/components/Navigation'

export default {
  components: {
    FixedHeader,
    Navigation
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoplay: true,
        spaceBetween: 30,
        breakpoints: {
          1200: {
            slidesPerView: 3
          },

          992: {
            slidesPerView: 2
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  methods: {
    // offcanvas mobilemenu open
    mobiletoggleClass (addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ls-flag {
    height: 25px;
}

.navigation-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
