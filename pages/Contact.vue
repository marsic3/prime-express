
<template>
  <div class="main-container">
    <HeaderCybersecurity />

    <Breadcrumbs :items="breadcrumbNavigation" breadcrumb-title="Contact Us" />

    <ContactUsFour />

    <ContactUsInfo />

    <CtaOne />

    <Footer />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderCybersecurity from '@/components/HeaderCybersecurity'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactUsFour from '@/components/sections/ContactUsFour'
import ContactUsInfo from '@/components/ContactUsInfo'
import CtaOne from '@/components/CtaOne'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'Contact',
  components: {
    HeaderCybersecurity,
    Breadcrumbs,
    ContactUsFour,
    ContactUsInfo,
    CtaOne,
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
          text: 'Contact Us',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Contact Us'
    }
  }
}
</script>
