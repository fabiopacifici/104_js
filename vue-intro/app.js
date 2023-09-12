const { createApp } = Vue 

console.log(Vue);

createApp({
  data() {
    return {
      ok: true,
      message: 'Hello Vue!',
      pageTitle: 'Vuejs Intro',
      userName: 'FAbio',
      css: 'bg-dark text-white',
      movies: ['Starwars', 'Avatar', 'Matrix']
    }
  },
  methods: {
    greetings(name) {
      alert('Ciao ' + name);
    }
  }
}).mount('#app')
