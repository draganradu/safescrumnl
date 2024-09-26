<script setup lang="ts">
import { useCounterStore } from '../../stores/landing'
import BootstrapIcon from 'BootstrapIcon'
const store = useCounterStore()

const { title } = store.sections.intro
const { socialMedia } = store
</script>
<template>
  <!-- # intro
        ================================================== -->
  <section id="intro" class="s-intro target-section">
    <div class="row s-intro__content width-sixteen-col">
      <div class="column lg-12 s-intro__content-inner grid-block grid-16">

        <div class="s-intro__content-text">

          <div class="s-intro__content-pretitle text-pretitle">Hello</div>
          <h1 class="s-intro__content-title">
            {{ title }}
          </h1>

          <div class="s-intro__content-btns">
            <a class="smoothscroll btn" href="#about">More About Me</a>
            <a class="smoothscroll btn btn--stroke" href="#footer">Get In Touch</a>
          </div> <!-- s-intro__content-btns -->

        </div> <!-- s-intro__content-text -->

      </div> <!-- s-intro__content-inner -->
    </div> <!-- s-intro__content -->

    <ul class="s-intro__social social-list text-white">
      <li v-for="i, k in socialMedia" :key="k">
        <a class="smoothscroll" :href="`#${i}`">
          <i class="text-white" :class="['bi', `bi-${k}`]"></i>
        </a>
      </li>
    </ul> <!-- end s-intro__social -->

    <div class="s-intro__content-media">
      <img src="@/assets/images/intro-bg.jpg" srcset="@/assets/images/intro-bg.jpg 1x, @/assets/images/intro-bg.jpg 2x"
        alt="">
    </div> <!-- s-intro__content-media -->
    <div class="s-intro__scroll-down">
      <a href="#about" class="smoothscroll">
        <div class="scroll-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
            <path
              d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z">
            </path>
          </svg>
        </div>
        <span class="scroll-text u-screen-reader-text">Scroll Down</span>
      </a>
    </div> <!-- s-intro__scroll-down -->

  </section> <!-- end s-intro -->
</template>