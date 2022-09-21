<template>
  <q-page class="">
    <div class="fixed" style="z-index: 100; left: 10px; top: 10px">
      <q-btn
        size="10px"
        round
        class="bg-white"
        icon="eva-arrow-ios-back"
        @click="$router.go(-1)"
      />
    </div>

    <div
      class="fixed"
      style="
        z-index: 100;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0 auto;
      "
    >
      <q-btn
        color="red"
        rounded
        icon="eva-calendar-outline"
        label="Add to Calendar"
        style="height: 50px; width: 230px"
        to="/addToCalendar"
      />
    </div>

    <div class="">
      <q-carousel
        animated
        v-model="slide"
        arrows
        thumbnails
        infinite
        height="38vh"
      >
        <q-carousel-slide :name="1" img-src="hawker.jpg" />
        <q-carousel-slide :name="2" img-src="hawker-2.jpg" />
        <q-carousel-slide :name="3" img-src="hawker-3.jpg" />
      </q-carousel>
    </div>

    <div class="q-pa-lg">
      <!-- top info div -->
      <div class="flex justify-between items-center">
        <div class="">
          <div class="" style="font-size: 25px; font-weight: 500">
            Bukit Merah Hawker Centre
          </div>
          <div class="flex items-center q-gutter-x-xs q-mb-sm">
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />

            <div class="text-amber-7" style="font-size: 12px">4.2</div>

            <div class="text-grey-6" style="font-size: 12px">| (2107)</div>
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
      </div>

      <div class="flex no-wrap justify-center items-center q-gutter-x-lg full-width">
        <div class="flex column q-gutter-y-sm q-mt-md q-mb-sm ">
            
            <div class="text-red" style="font-weight: 400; white-space:nowrap">Crowd Levels</div>
            <q-knob
                readonly
                v-model="value"
                show-value
                size="90px"
                :thickness="0.22"
                color="red"
                track-color="grey-3"
                class="text-red q-mt-sm"
            />
            
          
    
        </div>
        <div class="q-mt-lg" style="width:100%">
              <q-radio v-model="green" val="green" color="green" keep-color label="Low crowd levels, safe to go" />
              <q-radio v-model="red" val="red" color="red" keep-color label="High crowd levels, advised against going" />
          </div>
      </div>


      <div class="q-mt-lg q-pb-lg">
        <img
          src="crowd-levels-error.JPG"
          class="rounded-borders shadow-1"
          style="width: 100%; border: 1px solid rgb(240, 240, 240)"
          alt=""
        />
      </div>

      <q-separator class="q-my-md" />

      <!-- description div -->
      <div class="q-py-md">
        <div class="q-mb-xs" style="font-size: 20px; font-weight: 500">
          Description
        </div>
        <div class="q-pb-sm">
          The Gardens by the Bay is a nature park spanning 101 hectares (250
          acres) in the Central Region of Singapore, adjacent to the Marina
          Reservoir. <br /><br />
          Gardens by the Bay was part of the nation's plans to transform its
          "Garden City" to a "City in a Garden", with the aim of raising the
          quality of life by enhancing greenery and flora in the city. First
          announced by Prime Minister Lee Hsien Loong at Singapore's National
          Day Rally in 2005, Gardens by the Bay was intended to be Singapore's
          premier urban outdoor recreation space and a national icon.
        </div>
      </div>

      <q-separator class="q-my-md" />

      <div class="q-mb-md q-pt-md " style="font-size: 20px; font-weight: 500">
        Where you'll be
      </div>

      <div class="q-mb-lg q-pb-md" style="border-radius: 10px">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.281166277482!2d103.863613!3d1.281568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62099677b59fca76!2sGardens%20by%20the%20Bay!5e0!3m2!1sen!2ssg!4v1623763264515!5m2!1sen!2ssg" width="100%" height="280" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>

      <q-separator class="q-my-md" />

      <!-- reviews header -->
      <div class="q-mb-xs q-pt-md" style="font-size: 20px; font-weight: 500">
        Top reviews
      </div>

      <div class="flex items-center q-gutter-x-sm q-mt-sm q-mb-md">
        <div class="" style="font-size: 28px; font-weight: 700">4.7</div>
        <div class="">
          <div class="flex items-center">
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
          </div>

          <div class="" style="font-size: 12px">180K+ reviews</div>
        </div>
      </div>

      <!-- review div -->
      <div class="">
        <div class="flex items-center q-gutter-x-md">
          <q-avatar size="35px" color="orange">J</q-avatar>
          <div class="">
            <div class="" style="font-weight: 600; font-size: 18px">Greg G</div>
            <div class="text-grey-7" style="font-size: 12px">2021-06-15</div>
          </div>
        </div>

        <div class="flex q-gutter-x-sm q-mt-md">
          <div class="flex items-center">
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
            <q-icon
              name="eva-star"
              color="amber-6"
              style="margin-bottom: 2px"
            />
          </div>
          <div class="">Highly Recommended</div>
        </div>

        <div class="q-mt-sm">
          Best place I have been to in a while! It was so beautiful and had
          fantastic views of the Supertrees and MBS. Will go again!
        </div>

        <div class="row q-gutter-x-sm q-my-md">
          <div class="col" style="border-radius: 5px">
            <img
              src="gardens-review-1.jpg"
              alt=""
              style="width: 100%; height: 90%"
            />
          </div>
          <div class="col" style="border-radius: 5px">
            <img
              src="gardens-review-2.jpg"
              alt=""
              style="width: 100%; height: 90%"
            />
          </div>
          <div class="col">
            <img
              src="gardens-review-3.jpg"
              alt=""
              style="width: 100%; height: 90%"
            />
          </div>
        </div>
        <div class="q-pb-sm">
            <q-btn outline label="Read all reviews" class="full-width"/>
        </div>
        

        <q-separator class="q-my-lg" />

        <div class="q-mb-md q-pt-sm" style="font-size: 20px; font-weight: 500">
          Nearby destinations
        </div>

        <!-- change this to dynamic later! -->
        <div
          class="
            flex
            no-wrap
            items-center
            q-gutter-x-sm q-py-sm
            xScroll
            q-mb-xl
          "
        >
          <div
            v-for="data in nearMeData"
            :key="data.imageSrc"
            class="my-card bg-white"
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
                  border-radius: 3px;
                "
              />
            </div>

            <div class="q-pa-sm">
              <div
                class="q-mb-xs"
                style="white-space: normal; width: 140px; height: 40px"
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
              <div
                class="text-grey-6"
                style="font-weight: 500; font-size: 14px"
              >
                Crowd Level
              </div>
              <q-linear-progress
                :value="data.crowdLevel"
                :color="data.crowdLevel > 0.5 ? 'red' : 'green'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- covid dialog -->
    <q-dialog v-model="alert" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6 text-red">Covid-19 Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-mt-xs">
          This area has been visited by Covid-19 cases during their infectious
          period and is currently a cluster. As a precautionary measure, this
          area has been <span class="text-red text-weight-bold">CLOSED</span> for disinfecting.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup @click="$router.go(-1)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",

  data() {
    return {
      alert: true,
      slide: 1,
      crowdLevel:0.8,
      value: 0,
      green:'green',
      red:'red',
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
    };
  },
  mounted() {},
};
</script>
