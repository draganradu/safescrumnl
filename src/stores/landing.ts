import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const sections = {
    intro: {
      title: "I'm Radu a Scrum Master base in Eindhoven.",
      img: ''
    },
    about: {
      experience: [
        {
          where: 'Onera Health',
          what: 'Scrum Master'
        },
        {
          where: 'Dropbox',
          what: 'Product Designer'
        }
      ],
      awards: [
        {
          where: 'Tedx',
          what: 'Speaker'
        }
      ],
      skills: [
        'Product Design',
        'UI/UX Design',
        'Prototyping',
        'Frontend Development',
        'Illustration',
        'Visual Design'
      ]
    },
    work: {},
    contact: {
      email: 'radu.dragan@vinylducky.nl'
    }
  }
  const socialMedia = {
    linkedin: 'https://www.linkedin.com/in/radu-aurel-dragan-0a894172/',
    git: 'https://github.com/draganradu',
    instagram: 'https://www.instagram.com/safescrumnl/'
  }

  const section = () => {
    return Object.keys(sections)
  }
  const currentSection = ref(0)

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { sections, section, currentSection, socialMedia }
})
