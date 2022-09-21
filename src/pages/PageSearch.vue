<template>
  <q-page class="">
    <div class="q-px-md" style="margin-top:30px;margin-bottom:20px">
      

      <div class="flex no-wrap items-center q-gutter-x-md">
        <q-icon
          name="las la-angle-left"
          size="sm"
          @click="$router.go(-1)"
          />
          <q-input
        rounded
        outlined
        v-model="searchInput"
        placeholder="Where do you want to visit today?"
        dense
        
        @keyup.enter="search()"
        class="full-width"
      >
        <template v-slot:prepend>
          <q-icon name="eva-search-outline" />
        </template>
        <template v-slot:append>
          
          <q-icon name="eva-funnel-outline"  @click="filterResults"/>
        </template>
      </q-input>

      </div>

      
      
    </div>
    

    

    <div class="q-px-lg ">
      <div class="text-grey-7 q-mt-md" style="font-size:14px; font-weight:500">Activities & Places of Interest</div>


      <div class="flex column justify-center q-gutter-y-md q-py-sm ">
        <div
          v-for="data in popularData"
          :key="data.imageSrc"
          class="bg-white"
          
        >
          <router-link to="/details" style="text-decoration:none">
          <div class="" style="border-radius:8x;height:30vh">
            <img
              :src="data.imageSrc"
              style="
                border-bottom-color: grey;
                width:100%;
                height:100%;
                object-fit: cover;
    
                border-radius: 3px;
              "
            />
          </div>

          <div class="q-pa-sm">
            <div
              class="text-black"
              style="white-space: normal; width: 100%; height: 23px; font-size:18px"
            >
              <strong>{{ data.name }}</strong>
            </div>
            <div class="flex items-center q-gutter-x-xs q-mb-sm">
              <q-icon
                name="eva-star"
                color="amber-6"
                style="margin-bottom: 2px"
              />

              <div class="text-amber-7" style="font-size: 12px">
                {{ data.rating }}
              </div>
              <div class="text-grey-6" style="font-size: 12px">
                ({{ data.reviews }})
              </div>
            </div>

            <div class="text-black" style="font-weight: 600; font-size: 14px">
              From S${{ data.price }}
            </div>

            <div class="flex justify-between items-center">
                <div class="text-grey-6" style="font-weight: 500; font-size: 14px">
                  Crowd Level
                </div>
                <div class="text-light-green-8" style="font-size:14px">See Details</div>
            </div>
            


            <q-linear-progress
              :value="data.crowdLevel"
              :color="data.crowdLevel >= 0.7 ? 'red' : data.crowdLevel < 50 ? 'green' : 'blue'"
            />
          </div>

          </router-link>
        </div>
      </div>
    </div>
    
    


  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return{
      searchInput:'',
      popularData: [
        {
          name: "Gardens By The Bay",
          imageSrc: "gardens.jpg",
          rating: 4.7,
          reviews: 2304,
          price: "30.00",
          crowdLevel: 0.9,
        },
        {
          name: "Art Science Museum",
          imageSrc: "art-science-museum.jpg",
          rating: 4.2,
          reviews: 2107,
          price: "10.00",
          crowdLevel: 0.7,
        },
        {
          name: "Singapore Flyer",
          imageSrc: "flyer.jpg",
          rating: 4.6,
          reviews: 1888,
          price: "150.00",
          crowdLevel: 0.7,
        },
        {
          name: "Singapore Zoo",
          imageSrc: "zoo.jpg",
          rating: 4.2,
          reviews: 1625,
          price: "27.00",
          crowdLevel: 0.8,
        },
      ],
    }
    
  },
  methods: {
    filterResults() {
      console.log('hi')
    },
    search() {
      console.log('hello')
    }
    
  },
  
}
</script>
