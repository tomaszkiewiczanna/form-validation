Vue.use(vuelidate.default)

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
  validations: {
    form: {
      name: {
        required: validators.required
      },
      age: {
        required: validators.required, // $v.form.age.required
        integer: validators.integer,
        between: validators.between(12,120)
      }
    }
  },
  methods: {
    submitForm () {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        console.log('📝 Form Submitted', this.form)
      } else {
        console.log('❌ Invalid form')
      }
    }
  }
})