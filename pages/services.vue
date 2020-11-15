<template>
  <div class="main-container">
    <HeaderCybersecurity />
    <PageHeaderTwo />
    <ServiceITSolution />
    <CtaContactTwo />
    <Footer />
    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderCybersecurity from '@/components/HeaderCybersecurity'
import PageHeaderTwo from '@/components/PageHeaderTwo'
import ServiceITSolution from '@/components/sections/ServiceITSolution'
import CtaContactTwo from '@/components/CtaContactTwo'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderCybersecurity,
    PageHeaderTwo,
    ServiceITSolution,
    CtaContactTwo,
    Footer,
    OffCanvasMobileMenu
  },
  data () {
    return {
      breadcrumbNavigation: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Services',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Services'
    }
  }
}
</script>

<style lang="scss">

</style>
