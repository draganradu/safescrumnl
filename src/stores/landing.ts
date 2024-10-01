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
          where: 'Meditools',
          what: 'Scrum Master'
        },
        {
          where: 'Verifone',
          what: 'Scrum Master'
        }
      ],
      awards: [
        {
          where: 'Tedx',
          what: 'Speaker'
        }
      ],
      services: [
        {
          title: 'Scrum Master',
          descriptions:
            'Fosters collaboration, removes obstacles, and ensures Agile principles are followed for team success.'
        },
        {
          title: 'Just in time Transformation',
          descriptions:
            'Optimizes processes, minimizes waste, and delivers value by aligning resources efficiently.'
        },
        {
          title: 'Agile Coach',
          descriptions:
            'Empowers teams, fosters continuous improvement, and guides the adoption of Agile practices for success.'
        }
      ],
      skills: [
        'Scrum Master',
        'Problem solving',
        'Development thinking',
        'Prototyping',
        'CI/CD Development',
        'Product lifecycle management'
      ]
    },
    // work: {},
    contact: {
      email: 'radu.dragan@vinylducky.nl',
      phone: '0648459980',
      KVK: '88701778',
      VAT: 'NL004641406B81',
      IBAN: 'NL02KNAB0606447458'
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
