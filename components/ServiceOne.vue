<template>
  <div class="feature-images-wrapper bg-gray section-space--ptb_100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-wrap text-center">
            <h6 class="section-sub-title mb-20">
              {{ data.serviceOne.sectionSubTitle }}
            </h6>
            <h3 class="heading" v-html="data.serviceOne.sectionTitle">
              {{ data.serviceOne.sectionTitle }}
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="feature-images__one">
            <div class="row">
              <div v-for="service in data.services.slice(0, 3)" :key="service.id" class="col-lg-4 col-md-6 wow move-up">
                <ServiceItem :service="service" />
              </div>
            </div>
          </div>
          <div class="section-under-heading text-center section-space--mt_60 section-space--pt_30">
            {{ data.serviceOne.underHeading }}
            <n-link to="/">
              Take the challenge!
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data/service.json'
import ServiceItem from '@/components/ServiceItem'

export default {
  components: {
    ServiceItem
  },
  data () {
    return {
      data
    }
  }
}
</script>
