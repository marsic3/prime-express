<template>
  <div class="footer-area-wrapper bg-gray">
    <div class="footer-area section-space--ptb_80">
      <div class="container">
        <div class="row footer-widget-wrapper">
          <div class="col-lg-5 col-md-6 col-sm-6">
            <FooterAbout :footer-about="data.footerAboutData" />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <FooterWidgetLink :title="data.footerWidgetTitleTwo" :nav-lists="data.navListTwo" />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <FooterWidgetLink :title="data.footerWidgetTitleOne" :nav-lists="data.navListOne" />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 footer-widget">
            <FooterWidgetLink :title="data.footerWidgetTitleThree" :nav-lists="data.navListThree" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright-area section-space--pb_30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-left">
            <span>Developed by <a href="https://www.linkedin.com/in/milos-arsic-292b49142" target="_blank" class="hover-style-link text-color-primary">Marsic</a> © 2020</span>
            <br>
            <span>Copywriter <a href="https://www.linkedin.com/in/mina-puno%C5%A1evac-36605b200/" target="_blank" class="hover-style-link text-color-primary">Mina</a> © 2020</span>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <ul class="list ht-social-networks solid-rounded-icon">
              <li class="item">
                <a :href="data.footerBottom.fbUrl" target="_blank" aria-label="Facebook" class="social-link hint--bounce hint--top hint--primary">
                  <i class="fab fa-facebook-f link-icon" />
                </a>
              </li>
              <li class="item">
                <a :href="data.footerBottom.instagramUrl" target="_blank" aria-label="Instagram" class="social-link hint--bounce hint--top hint--primary">
                  <i class="fab fa-instagram link-icon" />
                </a>
              </li>
              <li class="item">
                <a :href="data.footerBottom.linkedinUrl" target="_blank" aria-label="Linkedin" class="social-link hint--bounce hint--top hint--primary">
                  <i class="fab fa-linkedin link-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data/footer.json'

import FooterAbout from '@/components/FooterAbout'
import FooterWidgetLink from '@/components/FooterWidgetLink'
export default {
  components: {
    FooterAbout,
    FooterWidgetLink
  },
  data () {
    return {
      data
    }
  }
}
</script>
