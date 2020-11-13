<template>
  <div class="main-container">
    <HeaderCybersecurity />
    <HeroCybersecurity />
    <InfoTechExperience />
    <TestimonialOne />
    <CtaContact />
    <Footer />
    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderCybersecurity from '@/components/HeaderCybersecurity'
import HeroCybersecurity from '@/components/HeroCybersecurity'
import InfoTechExperience from '@/components/sections/InfoTechExperience'
import TestimonialOne from '@/components/sections/TestimonialOne'
import CtaContact from '@/components/CtaContact'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderCybersecurity,
    HeroCybersecurity,
    InfoTechExperience,
    TestimonialOne,
    CtaContact,
    Footer,
    OffCanvasMobileMenu
  },
  head () {
    return {
      title: 'Prime Express, INC'
    }
  }
}
</script>
