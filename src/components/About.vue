<script setup lang="ts">
import { useCounterStore } from '@/stores/landing';
const { count } = defineProps(['count'])
const store = useCounterStore();

</script>
<template>
  <!-- # about
        ================================================== -->
  <section id="about" class="s-about target-section">
    <div class="row s-about__content">
      <div class="column xl-12">

        <div class="section-header" :data-num="`0${count}`">
          <h2 class="text-display-title">About Me.</h2>
        </div> <!-- end section-header -->

        <p class="attention-getter">
          We are SAFe Scrum and my name is Radu. I am a Scrum Master with over 5 years of experience, holding PSM and
          SAFe 6.1 certifications.
        </p>
        <p class="attention-getter">
          My background in software development is spanning more than 10 years, I transitioned
          into the Scrum Master role after earning my Master's in Business from the Polytechnic University of Bucharest.
          Colleagues often describe me as a builder of innovative digital solutions and i hope i bring my experience to
          your team, I am also an effective organizer, and someone who can develop MVPs, learn from them, and create
          plans for scaling. I understand the importance of delivering and testing features with real users in
          increments. By day, I am a dedicated Scrum Master; by night, I build startups.
        </p>
        <p class="attention-getter">
          One of my proudest achievements
          is leading a project that positioned my startup as a semifinalist in the Preactilerator Chivas the Venture in
          2016, where my partner became a TEDx speaker. I am grateful for the opportunity to work with amazing
          international teams on various projects, from financial software in fintech companies like Verifone, to
          medical hardware with Onera Health, and AI for health medical devices. I have learned that the greatest asset
          is my team. As a Scrum Master, I am dedicated to creating and mentoring teams to achieve their highest
          potential. While I recognize my limitations, I always focus on fostering a collaborative and productive
          environment, delivering high-quality code in testable increments, and leveraging continuous integration
          pipelines.
        </p>

        <p class="attention-getter">
          My main motivation is to create the best experience for you, my clients. I am excited to work with
          you on your next project be it a startup or an enterprise
        </p>

        <div class="grid-list-items s-about__blocks">

          <div class="grid-list-items__item s-about__block">
            <h4 class="s-about__block-title">Experience</h4>
            <ul class="s-about__list">


              <li v-for="i in store.sections.about.experience" :key="i.where">
                {{ i.where }}
                <span>{{ i.what }}</span>
              </li>

            </ul>
          </div> <!--end s-about__block -->


          <!--end s-about__block -->

          <div class="grid-list-items__item s-about__block">
            <h4 class="s-about__block-title">Skills</h4>

            <ul class="s-about__list">
              <li v-for="i in store.sections.about.skills" :key="i">
                {{ i }}
              </li>
            </ul>
          </div> <!--end s-about__block -->

          <div class="grid-list-items__item s-about__block">
            <h4 class="s-about__block-title">Specialty</h4>

            <ul class="s-about__list">
              <li v-for="i in store.sections.about.services" :key="i.title">
                <a href="#0">
                  {{ i.title }}
                  <span>{{ i.descriptions }}</span>
                </a>
              </li>

            </ul>
          </div>

        </div> <!-- grid-list-items -->

      </div> <!--end column -->
    </div> <!--end s-about__content -->

  </section> <!-- end s-about -->
</template>
