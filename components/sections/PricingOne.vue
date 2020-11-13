<template>
    <div class="pricing-table-area section-space--pb_70 bg-gradient">
        <div class="pricing-table-title-area position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                            <h6 class="section-sub-title mb-20">{{ data.pricingOne.sectionSubTitle }}</h6>
                            <h3 class="section-title" v-html="data.pricingOne.sectionTitle">{{ data.pricingOne.sectionTitle }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-table-content-area">
            <div class="container">
                <div class="row pricing-table-one">
                    <div class="col-md-6 col-lg-4 pricing-table wow move-up" v-for="pricing in data.pricingOne.pricingData" :key="pricing.id">
                        <PricingItemOne :pricing="pricing" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/pricing.json';

    import PricingItemOne from '@/components/PricingItemOne';
    export default {
        components: {
            PricingItemOne,
        },
        data () {
            return {
                data
            }
        }
    };
</script>