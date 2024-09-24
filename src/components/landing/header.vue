<script setup lang="ts">
import { useCounterStore } from '../../stores/landing'
const store = useCounterStore()

</script>

<template>
  <!-- # site header 
        ================================================== -->
  <header class="s-header">
    <div class="row s-header__inner">

      <div class="s-header__block">
        <div class="s-header__logo">
          <a class="logo" href="index.html">
            <img src="@/assets/images/logo.svg" alt="Homepage">
          </a>
        </div>

        <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
      </div> <!-- end s-header__block -->

      <nav class="s-header__nav">

        <ul class="s-header__menu-links">
          <li :class="[k == store.currentSection ? 'current' : '']" v-for="i, k in store.section()" :key="k">
            <a class="smoothscroll" :href="`#${i}`">
              {{ i }}
            </a>
          </li>

        </ul> <!-- s-header__menu-links -->
      </nav> <!-- end s-header__nav -->

    </div> <!-- end s-header__inner -->
  </header> <!-- end s-header -->

</template>