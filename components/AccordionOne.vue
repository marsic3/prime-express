<template>
  <div id="accordion-one">
    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button v-b-toggle.accordion-1 block class="faq-title">
          How can we help your business?
          <span>
            <i class="fas fa-chevron-down" />
            <i class="fas fa-chevron-up" />
          </span>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button v-b-toggle.accordion-2 block class="faq-title">
          How working process is simplified?
          <span>
            <i class="fas fa-chevron-down" />
            <i class="fas fa-chevron-up" />
          </span>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Prime Express, INC takes into consideration every little detail to make sure the system run smoothly and responsively. Prime Express, INC employs a new technique called Minified Technology for securing customers' database & building up highly confidential firewalls.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button v-b-toggle.accordion-3 block class="faq-title">
          How can we help your business?
          <span>
            <i class="fas fa-chevron-down" />
            <i class="fas fa-chevron-up" />
          </span>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
