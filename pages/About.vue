<template>
  <div class="main-container">
    <HeaderCybersecurity />

    <PageHeader />

    <AboutCompanyTwo />

    <FunFactTwo />

    <TestimonialTwo class="bg-white" />

    <Footer />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderCybersecurity from '@/components/HeaderCybersecurity'
import PageHeader from '@/components/PageHeader'
import AboutCompanyTwo from '@/components/AboutCompanyTwo'
import FunFactTwo from '@/components/FunFactTwo'
import TestimonialTwo from '@/components/sections/TestimonialTwo'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'About',
  components: {
    HeaderCybersecurity,
    PageHeader,
    AboutCompanyTwo,
    FunFactTwo,
    TestimonialTwo,
    Footer,
    OffCanvasMobileMenu
  },
  head () {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About our description'
        }
      ]
    }
  }
}
</script>
