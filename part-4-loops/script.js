// script.js
Vue.createApp(
  {
    data() {
      return {
        people: [
          {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            dob: "01-01-1980"
          },
          {
            id: 1,
            firstName: "Johny",
            lastName: "Doe",
            dob: "01-01-1980"
          },
          {
            id: 1,
            firstName: "James",
            lastName: "Doe",
            dob: "01-01-1980"
          }
        ]
      }
    },
    methods: {}
  }).mount("#app")