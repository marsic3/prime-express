<template>
  <div class="main-container">
    <HeaderCybersecurity />

    <Breadcrumbs :items="breadcrumbNavigation" breadcrumb-title="IT Services" />

    <ServiceIT />

    <ContactUsThree />

    <Footer />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderCybersecurity from '@/components/HeaderCybersecurity'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceIT from '@/components/ServiceIT'
import ContactUsThree from '@/components/sections/ContactUsThree'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderCybersecurity,
    Breadcrumbs,
    ServiceIT,
    ContactUsThree,
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
          text: 'IT-Services',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'IT Services'
    }
  }
}
</script>
