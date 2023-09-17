// script.js
Vue.createApp({
  data() {
    return {
      list: [1,2,3]
    }
  },
  methods: {
    handleClick: function() {
      console.log("hello world", arguments)
    },
    handleDivLink: function() {
      console.log("hello div world", arguments)
    }
  }
}).mount("#app")