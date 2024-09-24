import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const sections = {
    intro: {
      title: 'I\'m Radu a Scrum Master base in Eindhoven.',
      img: '',
    },
    about: {},
    work: {},
    contact: {},
  }

  const section = () => { return Object.keys(sections)};
  const currentSection = ref(0)

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }



  return { sections, section, currentSection }
})
