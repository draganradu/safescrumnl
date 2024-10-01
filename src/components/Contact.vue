<script lang="ts" setup>
import { useCounterStore } from '@/stores/landing';

const { count } = defineProps(['count'])
const store = useCounterStore()
const { socialMedia } = store

</script>
<template>
  <!-- # footer 
        ================================================== -->
  <footer id="contact" class="s-footer target-section">

    <div class="row">
      <div class="column lg-12">
        <div class="section-header light-on-dark" :data-num="`0${count}`">
          <h2 class="text-display-title">Get In Touch.</h2>
        </div> <!-- end section-header -->
      </div>
    </div>

    <div class="row s-footer__content">

      <div class="column xl-6 md-12 s-footer__block s-footer__about">
        <p class="attention-getter">
          We'd love to hear from you! Whether you have questions, ideas, or just want to say hello, feel free to reach
          out. Let's connect and explore how we can collaborate!
        </p>
      </div> <!-- end section-footer__about -->

      <div class="column xl-6 md-12 s-footer__block s-footer__site-links">
        <div class="row">
          <div class="column xl-4 lg-5 md-6 tab-12">
            <h5>Follow Me</h5>
            <ul class="link-list">
              <li class="text-capitalize" v-for="i, k in socialMedia" :key="k"><a :href="i">{{ k }}</a></li>

            </ul>
          </div>
          <div class="column xl-6 md-6 tab-12">
            <h5>Contact Me</h5>
            <ul class="link-list">
              <li><a :href="`mailto:${store.sections.contact.email}`">{{ store.sections.contact.email }}</a></li>
              <li><a :href="`tel:${store.sections.contact.phone}`">{{ store.sections.contact.phone }}</a></li>
            </ul>
          </div>
        </div>
      </div> <!-- end section-footer__site-links -->

    </div> <!-- end section-footer__content -->


    <div class="row s-footer__buttons">

      <!-- <div class="column xl-6 tab-12">
        <a href="mailto:#0" class="btn btn--primary btn--large u-fullwidth">Message Me</a>
      </div>

      <div class="column xl-6 tab-12">
        <a href="#0" class="btn btn--stroke btn--large u-fullwidth">Get My CV</a>
      </div> -->

    </div> <!-- end section-footer__buttons -->

    <div class="row s-footer__bottom">

      <div class="column xl-6 lg-12">
        <ul class="s-footer__social social-list link-list">
          <li v-for="i, k in socialMedia" :key="k">
            <a :href="`${i}`">
              <i class="" :class="['bi', `bi-${k}`]"></i>
            </a>
          </li>
        </ul>
      </div> <!-- end section-footer__social -->

      <div class="column xl-6 lg-12">
        <p class="ss-copyright">
          <span>© Vinyl ducky - 2024 | <a :href="socialMedia.linkedin">Radu Dragan</a></span>
        </p>
      </div>

    </div> <!-- end section-footer__bottom -->

    <div class="ss-go-top">
      <a class="smoothscroll" title="Back to Top" href="#top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
          <path
            d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
          </path>
        </svg>
      </a>
      <span>Back To Top</span>
    </div> <!-- end ss-go-top -->

  </footer> <!-- end s-footer -->
</template>