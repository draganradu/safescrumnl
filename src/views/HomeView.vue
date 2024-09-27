<script setup lang="ts">
import LandingPageHeader from '../components/landing/header.vue'
import LandingPageInto from '../components/landing/intro.vue'
import AboutView from '../components/About.vue'
import WorkView from '../components/Work.vue'
import ContactView from '../components/Contact.vue'
import NumbersView from '../components/Numbers.vue'

import { vElementVisibility } from '@vueuse/components'
import { useCounterStore } from '../stores/landing'

const store = useCounterStore()


const targets = {
  intro: (state: boolean) => {
    if (state) {
      store.currentSection = 0
    }

  },
  about: (state: boolean) => {
    if (state) {
      store.currentSection = 1
    }
  },
  work: (state: boolean) => {
    if (state) {
      store.currentSection = 2
    }
  },
  contact: (state: boolean) => {
    if (state) {
      store.currentSection = 3
    }
  },
}

</script>

<template>
  <main>

    <!-- page wrap
    ================================================== -->
    <div id="page" class="s-pagewrap">


      <LandingPageHeader />

      <div v-element-visibility="[targets.intro]">
        <LandingPageInto />
      </div>
      <div v-element-visibility="[targets.about]">
        <AboutView />
      </div>
      <div v-element-visibility="[targets.work]">
        <WorkView />
      </div>
      <NumbersView />
      <div v-element-visibility="[targets.contact]">
        <ContactView />
      </div>









    </div> <!-- end page-wrap -->
    <!-- <TheWelcome /> -->
  </main>
</template>

<style>
.text-primary {
  background-color: red;
}
</style>