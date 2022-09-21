<template>
  <q-page class="">
      <div class="bg-overlay full-width" style="padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:200px; font-size:35px;font-weight:600;color:white;">
        <div class="q-mb-xs">On The Move SG</div>
       
      

       
      </div>
    
    
    <div class="q-pa-lg" style="padding-top:100px" >
        <router-link to="/search" style="text-decoration:none;">
        <div class="q-mb-sm" 
        style="full-width"

        >
          <q-input
            rounded
            outlined
            placeholder="Where do you want to visit today?"
            dense
            bg-color="white"
            class=""
            disable
            
          >
            <template v-slot:prepend>
              <q-icon name="eva-search-outline" />
            </template>
            
          </q-input>
          
        </div>

        </router-link>
      <div class=" q-px-sm q-pt-md" style="margin-top:35px; background-color:white;border-radius:13px;box-shadow: 0 1px 1px 0 #53B9EA, 0 1px 5px 0 #53B9EA;">
        <!-- top icons div -->
        <div class="flex justify-around items-center no-wrap ">
          <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-landmark"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="" style="font-weight:500;font-size:13px">Attractions</div>
          </div>

          <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-shopping-bag"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">Malls</div>
          </div>

           <div class="flex column items-center justify-center  " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-utensils"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">Food</div>
          </div>

          <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-dumbbell"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">Fitness</div>
          </div>
        
        </div>

        <!-- bottom icons div -->
        <div class="flex justify-around items-center q-mb-xl no-wrap" style="margin-top:30px; padding-bottom:40px">
          <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-tree"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">Parks</div>
          </div>

          <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
           <q-btn
                icon="las la-user-nurse"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">Healthcare</div>
          </div>

           <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-users"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">Family</div>
          </div>

          <div class="flex column items-center justify-center " style="width:80px" @click="$router.push('/search')">
            <q-btn
                icon="las la-ellipsis-h"
                flat
                round
                color=""
                padding="8px"
                size="24px"
                style="color:#53B4EA"
              />
            <div class="q-mt-sm" style="font-weight:500;font-size:13px">More</div>
          </div>
        
        </div>

      </div>

     
      <div class=" q-mb-xl flex column justify-center items-center q-pb-lg q-pt-md shadow-3" style="white 1px solid; border-radius:13px; background-color:  " >
        <div class="q-mb-xs" style="font-weight:500; font-size:20px" >SG Covid-19 Cases</div>
        <div class="">
          <Flip v-bind:value="counter" />
        </div>


      </div>
      

      <!-- popular div -->
      <div class="flex justify-between items-center q-mb-xs">
        <div class="" style="font-size: 16px; font-weight: 600" >Popular</div>
        
        <q-btn
          outline
          rounded
          color="primary"
          label="See More"
          no-caps
          class="q-mr-sm q-px-sm"
          dense
          to="/search"
        />
      </div>


      <div >
        <div class="flex no-wrap items-center q-gutter-x-sm q-py-sm xScroll" >
        <div
          v-for="data in popularData"
          :key="data.imageSrc"
          class="my-card bg-white shadow-3"
          style="border-radius:8px; border-color:red"
         
        >
          <router-link :to="data.link" style="text-decoration:none;">
          <div class="" x>
            <img
              :src="data.imageSrc"
              style="
                border-bottom-color: grey;
                width: 40vw;
                object-fit: cover;
                height: 130px;
                border-radius: 8px;
              "
            />
          </div>

          <div class="q-pa-sm text-black">
            <div
              class="q-mb-xs flex"
              style="white-space: normal; width: 100%; height: 40px"
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

            
            

            <div class="" style="font-weight: 600; font-size: 14px">
              From S${{ data.price }}
              
            </div>
            <div class="text-grey-6" style="font-weight: 500; font-size: 14px">
              Crowd Level
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

      <!-- near me div (add router link later)-->
      
      <div class="flex justify-between items-center q-mt-lg q-mb-xs">
        <div class="" style="font-size: 16px; font-weight: 600">Near Me</div>

        <q-btn
          outline
          rounded
          color="primary"
          label="See More"
          no-caps
          class="q-mr-sm q-px-sm"
          dense
          to="/search"
        />
      </div>
      <div class="flex no-wrap items-center q-gutter-x-sm q-py-sm xScroll">
        <div
          v-for="data in nearMeData"
          :key="data.imageSrc"
          class="my-card bg-white shadow-3"
          style="border-radius:8px"
          flat
          bordered
        >
          <div class="">
            <img
              :src="data.imageSrc"
              style="
                border-bottom-color: grey;
                width: 40vw;
                object-fit: cover;
                height: 130px;
                border-radius: 8px;
              "
            />
          </div>

          <div class="q-pa-sm">
            <div
              class="q-mb-xs"
              style="white-space: normal; width: 100%; height: 40px"
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

            <div class="" style="font-weight: 600; font-size: 14px">
              From S${{ data.price }}
            </div>
            <div class="text-grey-6" style="font-weight: 500; font-size: 14px">
              Crowd Level
            </div>
            <q-linear-progress
              :value="data.crowdLevel"
              :color="data.crowdLevel > 0.5 ? 'red' : 'green'"
            />
          </div>
        </div>
      </div>


      <!-- Something Newdiv -->
      <!-- <div class="flex justify-between items-center q-mt-lg q-mb-xs">
        <div class="" style="font-size: 16px; font-weight: 600">Something New</div>

        <q-btn
          outline
          rounded
          color="primary"
          label="See More"
          no-caps
          class="q-mr-sm q-px-sm"
          dense
        />
      </div>
      <div class="flex no-wrap items-center q-gutter-x-sm q-py-sm xScroll">
        <div
          v-for="data in somethingNewData"
          :key="data.imageSrc"
          class="my-card bg-white shadow-3"
          style="border-radius:8px"
          flat
          bordered
        >
          <div class="">
            <img
              :src="data.imageSrc"
              style="
                border-bottom-color: grey;
                width: 40vw;
                object-fit: cover;
                height: 130px;
                border-radius: 8px;
              "
            />
          </div>

          <div class="q-pa-sm">
            <div
              class="q-mb-xs"
              style="white-space: normal; width: 100%; height: 40px"
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
              <div class="text-grey-6" style="font-size: 12px;">
                ({{ data.reviews }})
              </div>
            </div>

            <div class="" style="font-weight: 600; font-size: 14px">
              From S${{ data.price }}
            </div>
            <div class="text-grey-6" style="font-weight: 500; font-size: 14px">
              Crowd Level
            </div>
            <q-linear-progress
              :value="data.crowdLevel"
              :color="data.crowdLevel > 0.5 ? 'red' : 'green'"
            />
          </div>
        </div>
      </div> -->

    </div>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
import Flip from "src/components/Flip";
export default {
  name: "PageHome",
  components: {
    Flip
  },
  data() {
    return {
      searchInput: "",
      counter: 62301,
      popularData: [
        
        {
          name: "Bukit Merah Hawker Centre",
          imageSrc: "hawker.jpg",
          rating: 4.2,
          reviews: 2107,
          price: "0.80",
          crowdLevel: 0,
          covid:true,
          link:'/detailsError'
        },{
          name: "Gardens By The Bay",
          imageSrc: "gardens.jpg",
          rating: 4.7,
          reviews: 2304,
          price: "30.00",
          crowdLevel: 0.9,
          link:'/details'
        },
        {
          name: "Singapore Flyer",
          imageSrc: "flyer.jpg",
          rating: 4.6,
          reviews: 1888,
          price: "150.00",
          crowdLevel: 0.7,
          link:'/home'
        },
        {
          name: "Singapore Zoo",
          imageSrc: "zoo.jpg",
          rating: 4.2,
          reviews: 1625,
          price: "27.00",
          crowdLevel: 0.8,
          link:'/home'
        },
      ],
      nearMeData: [
        {
          name: "ION Shopping Centre",
          imageSrc: "ion.jpg",
          rating: 4.2,
          reviews: 408,
          price: "0.00",
          crowdLevel: 0.6,
        },
        {
          name: "Singapore Art Museum",
          imageSrc: "sam.png",
          rating: 4.6,
          reviews: 1123,
          price: "5.00",
          crowdLevel: 0.2,
        },
        {
          name: "Library @ Orchard",
          imageSrc: "library.jpg",
          rating: 4.8,
          reviews: 174,
          price: "0.00",
          crowdLevel: 0.9,
        },
        {
          name: "BOUNCE Singapore",
          imageSrc: "bounce.JPG",
          rating: 4.2,
          reviews: 1625,
          price: "17.00",
          crowdLevel: 0.4,
        },
      ],
      somethingNewData: [
        {
          name: "Bishan-Ang Mo Kio Park",
          imageSrc: "amk park.jpg",
          rating: 3.8,
          reviews: 24,
          price: "0.00",
          crowdLevel: 0.2,
        },
        {
          name: "Adventure Cove Waterpark",
          imageSrc: "adventure-cove.jpg",
          rating: 4.9,
          reviews: 3333,
          price: "32.00",
          crowdLevel: 0.4,
        },
        {
          name: "Changi Chapel and Museum",
          imageSrc: "changi-chapel.jpg",
          rating: 3.6,
          reviews: 87,
          price: "5.00",
          crowdLevel: 0.2,
        },
        {
          name: "Hydrodash",
          imageSrc: "hydrodash.png",
          rating: 4.0,
          reviews: 582,
          price: "13.00",
          crowdLevel: 0.5,
        },
      ],
    };
  },
  methods: {
    increase() {
      
      setInterval(()=> {
        this.counter++;
      },4000)
    }
  },
  mounted() {
    //start clocker
     this.increase()

    // //this sees every change in the database, and I can use 3 hooks to update my local vue
    // db.collection("posts")
    //   .orderBy("date")
    //   .onSnapshot((snapshot) => {
    //     snapshot.docChanges().forEach((change) => {
    //       //give access to id of doc by adding it as a key-value pair

    //       let tweetChange = change.doc.data();
    //       //add id to object

    //       if (change.type === "added") {
    //         //add to local state
    //         console.log("New tweet: ", tweetChange);
    //         this.dbData.unshift(tweetChange);
    //       }
    //       if (change.type === "modified") {
    //         console.log("Modified tweet: ", tweetChange);
    //         // let index = this.tweets.findIndex(localTweets => localTweets.id === tweetChange.id)
    //         // //update the whole local tweet object
    //         // Object.assign(this.tweets[index], tweetChange)
    //       }
    //       if (change.type === "removed") {
    //         console.log("Removed tweet: ", tweetChange);
    //         //remove from local state
    //         // let index = this.tweets.findIndex(localTweets => localTweets.id === tweetChange.id)
    //         // this.tweets.splice(index,1)
    //       }
    //     });
    //   });
  },
};
</script>

<style lang="scss" scoped>


.my-card {
  width: 40vw;
}

.cardDescription {
  width: 100%;
  overflow-x: hidden;
  margin-right: 10px;
}

.bg-overlay{
  background:#53B9EA;
  z-index:-1; 
  position: absolute;
}
.bg-overlay::after{
  height:289px;
  content:'';
  display:block;
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:0;
  opacity:0.20;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);


}
</style>