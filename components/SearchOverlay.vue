<template>
  <div id="search-overlay" class="search-overlay">
    <div class="search-overlay__header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6 ml-auto col-4">
            <div class="search-content text-right">
              <span id="search-close-trigger" class="mobile-navigation-close-icon" @click="toggleClass('removeClass', 'active')" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-overlay__inner">
      <div class="search-overlay__body">
        <div class="search-overlay__form">
          <form>
            <input type="text" placeholder="Search">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // offcanvas search close
    toggleClass (addRemoveClass, className) {
      const el = document.querySelector('#search-overlay')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }
}
</script>
