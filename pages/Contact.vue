
<template>
  <div class="main-container">
    <HeaderCybersecurity />

    <ContactUsTwo />

    <Footer />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderCybersecurity from '@/components/HeaderCybersecurity'
import ContactUsTwo from '@/components/sections/ContactUsTwo'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'Contact',
  components: {
    HeaderCybersecurity,
    ContactUsTwo,
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
