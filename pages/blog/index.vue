<template>
  <div class="main-container">
    <Header />

    <Breadcrumbs :items="breadcrumbNavigation" breadcrumb-title="Blogs" />

    <BlogPageWrapper />

    <CtaThree />

    <Footer />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import BlogPageWrapper from '@/components/sections/BlogPageWrapper'
import CtaThree from '@/components/CtaThree'
import Footer from '@/components/Footer'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    Header,
    Breadcrumbs,
    BlogPageWrapper,
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
          text: 'Blogs',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Blogs'
    }
  }
}
</script>
