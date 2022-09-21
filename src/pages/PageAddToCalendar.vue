<template>
  <q-page class="">
    <div class="q-py-lg q-pl-lg">
      <div class="">
        <div class="flex justify-between items-center">
          <div class="" style="font-size: 25px; font-weight: 500">
          Garden's By The Bay
          </div>
        
          <q-btn size="20px" flat icon="eva-close" @click="$router.go(-1)" class="q-mr-sm"/>
        </div>
        
        <div class="flex items-center q-gutter-x-xs q-mb-sm">
          <q-icon name="eva-star" color="amber-6" style="margin-bottom: 2px" />

          <div class="text-amber-7" style="font-size: 14px">4.7</div>

          <div class="text-grey-6" style="font-size: 14px">| (3045)</div>
        </div>

        <div class="flex items-center q-gutter-x-xs">
          <q-icon
            name="eva-pin-outline"
            color="blue-6"
            style="margin-bottom: 2px"
          />
          <div class="">18 Marina Gardens Dr, Singapore 018953</div>
        </div>

        <div class="flex items-center q-gutter-x-xs">
          <q-icon
            name="eva-clock-outline"
            color="blue-6"
            style="margin-bottom: 2px"
          />
          <div class="">5am - 2am</div>
        </div>
        <div class="flex items-center q-gutter-x-xs">
          <q-icon
            name="eva-globe-outline"
            color="blue-6"
            style="margin-bottom: 2px"
          />
          <a style="color: black" href="https://www.gardensbythebay.com.sg"
            >www.gardensbythebay.com.sg</a
          >
        </div>
      </div>

      <div class="q-mt-lg q-mr-lg">
        <div class="q-mb-xs" style="font-size:18px">Date</div>
        <q-input outlined v-model="date" mask="date" placeholder='Enter a date or use the date picker!' :rules="['date']" >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="red">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="q-mt-md q-mr-lg">
        <div class="q-mb-xs" style="font-size:18px">Time</div>
        <q-input outlined v-model="time" placeholder='Enter a time or click on the date picker!'  mask="time" :rules="['time'] ">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer" color="red">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="time">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      
      <div class="q-mt-md q-mr-lg">
        <div class="q-mb-lg" style="font-size:18px">Duration <span style="font-size:16px;" class="text-grey-7">(hours)</span></div>
        <q-slider v-model="mic" :min="0" :max="12" label label-always/>
      </div>


    </div>


 
     
      

       <div class="fixed" style="z-index:100; bottom:50px; left:50%;transform: translate(-50%, -50%);
     margin: 0 auto; ">
        
        <q-btn
          color="red"
          icon="eva-calendar-outline"
          label="Add to Calendar"
          style="height:50px; width:230px " 
          rounded
          @click="confirm = true"
          :disable="!date.length || !time.length"
          />
      
    </div>

    <!-- added to calender dialog -->
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div class="">
            <div class="" style="font-size:20px; font-weight:500">
              You have selected:
            </div>
            <div class="q-mt-sm" style="font-size:18px"><span style="font-weight:500">Destination:</span> Garden's By The Bay</div>
            <div class="" style="font-size:18px"><span style="font-weight:500">Date:</span> {{date}}</div>
            <div class="" style="font-size:18px"><span style="font-weight:500">Time:</span> {{time}}</div>
            <div class="" style="font-size:18px"><span style="font-weight:500">Duration:</span> {{mic}} Hours</div>
            

            <div class="q-mt-sm" style="font-size:16px">
              Are you sure you want to add this event to your calendar?
            </div>
            


          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Add to Calendar" color="primary" v-close-popup @click="added = true" />
        </q-card-actions>
      </q-card>
    </q-dialog>



    <!-- close -->
    <q-dialog v-model="added" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div class="">
            <div class="text-center q-mt-lg" style="font-size:20px; font-weight:400">
              The event has been <span style="font-weight:500" class="text-green-6"> successfully</span> added to your calendar!
            </div>
          

          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup :to="`/upcomingTasks/Garden's By The Bay/19th June 2021/9am - 12pm/83`" />
          
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      confirm:false,
      added:false,
      date: '',
      time:'',
      mic: 1,
    }
  }
}
</script>
