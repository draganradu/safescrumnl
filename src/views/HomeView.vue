<script setup lang="ts">
import LandingPageHeader from '../components/landing/header.vue'
import LandingPageInto from '../components/landing/intro.vue'
import AboutView from '../components/About.vue'
// import WorkView from '../components/Work.vue'
import ContactView from '../components/Contact.vue'
import NumbersView from '../components/Numbers.vue'

import { vElementVisibility } from '@vueuse/components'
import { useCounterStore } from '../stores/landing'

const store = useCounterStore()


const targets: { [key: string]: any } = {
  intro: (state: boolean): void => {
    if (state) {
      store.currentSection = 0
    } else {
      store.currentSection = 1
    }

  },
  about: (state: boolean): void => {
    if (state) {
      store.currentSection = 1
    }
  },
  contact: (state: boolean): void => {
    if (state) {
      store.currentSection = 2
    } else {
      store.currentSection = 1
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

      <div v-element-visibility="targets.intro">
        <LandingPageInto />
      </div>
      <div v-element-visibility="targets.about">
        <AboutView count="1" />
      </div>
      <NumbersView />
      <div v-element-visibility="targets.contact">
        <ContactView count="2" />
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