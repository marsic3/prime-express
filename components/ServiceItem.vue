<template>
  <div class="ht-box-images style-01">
    <div class="image-box-wrap">
      <div class="box-image">
        <img class="img-fulid" :src="service.icon" alt="icon">
      </div>
      <div class="content">
        <h5 class="heading">
          {{ service.heading }}
        </h5>
        <div class="text">
          {{ service.desc }}
        </div>
        <div class="circle-arrow">
          <div class="middle-dot" />
          <div class="middle-dot dot-2" />
          <n-link :to="`/service/${service.id}`">
            <i class="far fa-long-arrow-right" />
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['service']
}
</script>
