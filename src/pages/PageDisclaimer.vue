<template >
  <q-page class=" q-px-md " style="overflow:hidden">
    <div class="flex items-center q-my-xl q-mx-md q-pt-xl" >
      <img src="~assets/form.svg" alt="" style="width:100px">
      <div class="font-weight-bold q-ml-sm" style="font-size:30px">Disclaimer</div>
    </div>
     <q-stepper
      v-model="step"
      vertical
      color="primary"
      style="background-color: rgb(249, 249, 249)"
      animated
      flat
    >
      <q-step
        :name="1"
        title="Social distancing and Face Mask Regulations"
        icon="eva-activity-outline"
        :done="step > 1"
      >
        While participating in events and activities, social distancing must be practiced and face coverings worn at all times to reduce the risks of exposure to COVID-19.

        <br><br>
        I hereby declare that I have not experienced any symptoms associated with COVID-19, which include fever, cough, and shortness of breath, among others, within the past fourteen (14) days.

      
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      

     

      <q-step
        :name="2"
        title="Acknowledgement"
        icon="eva-done-all-outline"
      >
        I acknowledge this app is not liable for any responsibilities and I acknowledge that I will be socially responsible.
        <br>

        <q-stepper-navigation>
          
          <q-btn flat @click="step = 1" color="primary" label="Back"  />
          <q-btn color="primary" label="Finish" to="/home" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      step: 1
    }
  },
  methods: {
    filterResults() {
      console.log('hi')
    }
  }
}
</script>
