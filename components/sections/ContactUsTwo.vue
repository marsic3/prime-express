<template>
  <div class="contact-us-area service-contact-bg section-space--ptb_100" :style="{ backgroundImage: `url('/images/bg/mitech-home-services-contact-bg.png')` }">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="contact-info sytle-one service-contact text-left">
            <div class="contact-info-title-wrap text-center">
              <h3 class="heading text-white mb-10">
                4.9/5.0
              </h3>
              <div class="ht-star-rating lg-style">
                <span class="fa fa-star" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
              </div>
              <p class="sub-text">
                by 300+ happy clients
              </p>
            </div>

            <div class="contact-list-item">
              <a href="tel:190068668" class="single-contact-list">
                <div class="content-wrap">
                  <div class="content">
                    <div class="icon">
                      <span class="fal fa-phone" />
                    </div>
                    <div class="main-content">
                      <h6 class="heading">Contact us now!</h6>
                      <div class="text">773 741 1660</div>
                      <div class="text">773 706 5779</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="mailto:prime@primexp.net" class="single-contact-list">
                <div class="content-wrap">
                  <div class="content">
                    <div class="icon">
                      <span class="fal fa-envelope" />
                    </div>
                    <div class="main-content">
                      <h6 class="heading">Ask us anything</h6>
                      <div class="text">prime@primexp.net</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-7 ml-auto">
          <div v-if="!toggle" class="contact-form-service-wrap">
            <div class="contact-title text-center section-space--mb_40">
              <h3 class="mb-10">
                Start driving with us!
              </h3>
              <p class="text">
                Truck with the best.
              </p>
            </div>
            <div id="contact-form">
              <div class="contact-form__two">
                <div class="contact-input">
                  <div class="contact-inner">
                    <input v-model="name" name="con_name" type="text" placeholder="Name *">
                  </div>
                  <div class="contact-inner">
                    <input v-model="email" name="con_email" type="email" placeholder="Email *">
                  </div>
                  <div class="contact-inner">
                    <input v-model="phone" name="con_phone" type="text" placeholder="Phone Number *">
                  </div>
                  <div class="contact-inner">
                    <input v-model="zip" name="con_zip" type="number" placeholder="Zip code *">
                  </div>
                </div>
                <div class="contact-select">
                  <div class="contact-inner">
                    <input v-model="exp" name="con_exp" type="number" placeholder="Years of experience">
                  </div>
                  <div class="contact-inner">
                    <input v-model="companies" name="con_comapnies" type="text" placeholder="Previous companies">
                  </div>
                </div>
                <div class="contact-inner contact-message">
                  <textarea v-model="record" name="con_record" placeholder="Driving record" />
                </div>
                <div class="submit-btn text-center">
                  <button class="ht-btn ht-btn-md" @click="submit">
                    Submit
                  </button>
                  <p class="form-messege" />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="contact-form-service-wrap">
            <div class="contact-title text-center section-space--mb_40">
              <h3 class="mb-10">
                Thanks for applying!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'ContactUsTwo',
  metaInfo: {
    title: 'Email Capture'
  },
  components: {},
  props: {
  },
  data () {
    return {
      toggle: false,
      name: '',
      email: '',
      phone: '',
      zip: '',
      exp: '',
      record: '',
      companies: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    submit () {
      const applicant = {
        date: new Date(),
        name: this.name,
        email: this.email,
        phone: this.phone,
        zip: this.zip,
        exp: this.exp,
        record: this.record,
        companies: this.companies
      }
      console.log(fireDb)

      fireDb.ref('/applicants/' + applicant.date.getTime()).set(applicant)
        .then((docRef) => {
          this.toggle = true
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
