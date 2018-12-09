new Vue({
  el: '#app',

  data () {
    return {
      form: {
        name: null,
        age: null,
        email: null,
        newsletter: null,
        githubUsername: null,
        food: null
      }
    }
  },
  methods: {
    submitForm () {
      const nameIsValid = !!this.form.name
      const ageIsValid = typeof this.form.age === 'number' && this.form.age>12 && this.form.age <120
      const formIsValid = nameIsValid && ageIsValid
      if (formIsValid) {
        console.log('📝 Form Submitted', this.form)
      } else {
        console.log('❌ Invalid form')
      }
    }
  }
})