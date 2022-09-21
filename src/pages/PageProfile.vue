<template>
  <q-page class="">
    <div
      class="bg-overlay full-width"
      style="
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 25px;
        font-weight: 600;
        color: white;
      "
    >
      <div style="height: 175px"></div>
    </div>

    <!-- avatar div -->
    <div
      class="flex column justify-end items-center q-mb-lg"
      style="height: 178px"
    >
      <div class="">
        <q-btn round size="lg">
          <q-avatar size="60px" color="orange-4" text-color="white">
            G
          </q-avatar>
        </q-btn>
      </div>

      <div
        class="q-mt-sm"
        style="font-weight: 600; color: white; font-size: 25px"
      >
        Greg G Tan
      </div>
      <div class="" style="color: white; font-size: 14px; font-weight: 500">
        My profile >
      </div>
    </div>

    <!-- settings body div -->
    <div class="q-pa-md">
      <div class="bg-white">
        <q-list >
        <q-item-label header>Personal</q-item-label>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="las la-user" />
            </q-item-section>
            <q-item-section>Personal Information</q-item-section>
            <q-item-section avatar>
              <q-icon color="grey-6" size="17px" name="las la-angle-right" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="lar la-heart" />
            </q-item-section>
            <q-item-section>Favourites</q-item-section>
            <q-item-section avatar>
              <q-icon color="grey-6" size="17px" name="las la-angle-right" />
            </q-item-section>
          </q-item>

          
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="las la-smile-beam" />
            </q-item-section>
            <q-item-section>About us</q-item-section>
            <q-item-section avatar>
              <q-icon color="grey-6" size="17px" name="las la-angle-right" />
            </q-item-section>
          </q-item>

           <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="las la-question-circle" />
            </q-item-section>
            <q-item-section>Help Center</q-item-section>
            <q-item-section avatar>
              <q-icon color="grey-6" size="17px" name="las la-angle-right" />
            </q-item-section>
          </q-item>



          <q-separator spaced />
          <q-item-label header>General</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check1" color="green" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Notifications</q-item-label>
              <q-item-label caption>
                Notify me about any Covid-19 updates
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check2" color="green"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>Enable location tracking</q-item-label>
              <q-item-label caption>
                For a personalized experience
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check3" color="green" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Auto-add widgets</q-item-label>
              <q-item-label caption>
                Automatically add home screen widgets
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item-label header>Settings</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Low battery mode</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="notif1" val="battery" />
            </q-item-section>
          </q-item>

          

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Enable night mode</q-item-label>
              <q-item-label caption
                >For a better experience at night</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-toggle color="red" v-model="notif3" val="picture" />
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item-label header>Other settings</q-item-label>

          <q-item>
            <q-item-section side>
              <q-icon color="teal" name="volume_down" />
            </q-item-section>
            <q-item-section>
              <q-slider
                v-model="volume"
                :min="0"
                :max="10"
                label
                color="teal"
              />
            </q-item-section>
            <q-item-section side>
              <q-icon color="teal" name="volume_up" />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section side>
              <q-icon color="deep-orange" name="brightness_medium" />
            </q-item-section>
            <q-item-section>
              <q-slider
                v-model="brightness"
                :min="0"
                :max="10"
                label
                color="deep-orange"
              />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section side>
              <q-icon color="primary" name="mic" />
            </q-item-section>
            <q-item-section>
              <q-slider v-model="mic" :min="0" :max="50" label />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8,
    };
  },
};
</script>

<style scoped>
.bg-overlay {
  background: #53b9ea;
  z-index: -1;
  position: absolute;
}
.bg-overlay::after {
  height: 208px;
  content: "";
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.2;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 35px,
    rgba(255, 255, 255, 0.5) 35px,
    rgba(255, 255, 255, 0.5) 70px
  );
}
</style>
