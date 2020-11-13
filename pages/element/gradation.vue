<template>
  <div class="main-container">
    <Header />

    <Breadcrumbs :items="breadcrumbNavigation" breadcrumb-title="Gradation" />

    <FourSteps />

    <CtaThree />

    <Footer />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import FourSteps from '@/components/sections/FourSteps'
import CtaThree from '@/components/CtaThree'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    Header,
    Breadcrumbs,
    FourSteps,
    CtaThree,
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
          text: 'Gradation',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Gradation'
    }
  }
}
</script>
