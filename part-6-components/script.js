// script.js
const PersonDetails = {
  template: `
    <div>
      <div>{{firstName}}, {{lastName}}</div>
    </div>`,
  data() {
    return {
      firstName: this.$props.firstName,
      lastName: this.$props.lastName
    }
  },
  props: ["firstName", "lastName"],
  methods: { }
}

const app = Vue.createApp({
  data() {
    return { }
  },
  methods: {
  }
})

app.component('PersonDetails', PersonDetails)

app.mount("#app")