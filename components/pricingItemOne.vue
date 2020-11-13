<template>
    <div class="pricing-table__inner">
        <div class="pricing-table__feature-mark" v-if="pricing.isPopular">
            <span>Popular Choice</span>
        </div>
        <div class="pricing-table__header">
            <h6 class="sub-title">{{ pricing.plan }}</h6>
            <div class="pricing-table__image">
                <img :src="pricing.icon" class="img-fluid" alt="icon">
            </div>
            <div class="pricing-table__price-wrap">
                <h6 class="currency">{{ pricing.currency }}</h6>
                <h6 class="price">{{ pricing.price }}</h6>
                <h6 class="period">{{ pricing.period }}</h6>
            </div>
        </div>
        <div class="pricing-table__body">
            <div class="pricing-table__footer">
                <button class="ht-btn ht-btn-md" :class="{'ht-btn--outline': !pricing.active}">Get started</button>
            </div>
            <ul class="pricing-table__list text-left">
                <li v-for="list in pricing.lists" :key="list.id">
                    {{ list }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pricing']
    };
</script>