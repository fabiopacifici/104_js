const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      pageTitle: 'Vuejs Intro',
      userName: 'FAbio',
      css: 'bg-dark text-white'
    }
  },
  methods: {
    greetings(name) {
      alert('Ciao ' + name);
    }
  }
}).mount('#app')
