// script.js
Vue.createApp({
  data() {
    return {
      message: "Hello world",
      arrayVariable: [1, 2, 3, 4, 5],
      mapVariable: {firstName: "John", lastName: "Doe"},
      nestedVariable: [{firstName: "John", lastName: "Doe"}, {firstName: "John", lastName: "Doe"}],
      exampleName: "John",
      linkValue: "https://www.google.com",
    }
  },
  methods: {
    getMessage: () => "Hello method",
    getNameGreeting: function(){ return `Hello ${this.exampleName}` }
  }
}).mount("#app")