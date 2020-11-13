<template>
  <div class="section-space--ptb_100 infotechno-section-bg-01" :style="{ backgroundImage: `url('/images/patterns/mitech-home-infotechno-section-company-bg.png')` }">
    <div class="our-experience-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <AboutCompany :about-data="about.aboutCompany" />
          </div>

          <div class="col-lg-5 ml-auto">
            <div class="ht-list style-auto-numbered-02">
              <div v-for="item in about.items" :key="item.id" class="list-item">
                <n-link to="/about" class="link">
                  <div class="list-header">
                    <div class="marker">
                      {{ item.no }}
                    </div>
                    <div class="title-wrap">
                      <h6 class="title">
                        {{ item.title }}
                      </h6>
                    </div>
                  </div>
                </n-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/service.json'
import about from '../../data/about.json'

import AboutCompany from '@/components/AboutCompany'

export default {
  components: {
    AboutCompany
  },
  data () {
    return {
      data,
      about
    }
  }
}
</script>
