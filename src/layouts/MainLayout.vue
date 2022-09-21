<template>
  <q-layout view="lHh Lpr lFf" >
    <!-- <q-header v-if="this.$route.fullPath!='/' && this.$route.fullPath!='/details' && this.$route.fullPath!='/addToCalendar'   && this.$route.fullPath!='/home'  && this.$route.fullPath!='/profile' " 
    class=" text-grey-10 q-py-md " style="background-color: rgb(249, 249, 249); border-bottom:rgb(201, 201, 201) 1px solid;"
    :class="this.$route.fullPath.includes('/news') ? 'bg-white' : ''"
    
    >
      <q-toolbar>
        <q-btn
          v-show="this.$route.fullPath.includes('/search')"
          flat
          dense
          round
          icon="eva-arrow-ios-back-outline"
          aria-label="Menu"
          to="/home"
        />

        <div class=" q-ml-md text-weight-bold" style="font-size:25px">{{ title }}</div>
      </q-toolbar> -->


      <!-- <router-link to="/search" style="text-decoration: none">
      <div class="q-px-md q-mt-md fixed full-width " 
      :class="[this.$route.fullPath =='/home' ? 'bg-cyan-4': '']"
      style="top: 34px; z-index:999; background-color:rgb(247, 247, 247);"
      
      >
        <q-input
          v-if="this.$route.fullPath=='/search' || this.$route.fullPath=='/home'"
          rounded
          outlined
          
          placeholder="Where do you want to visit today?"
          dense
          bg-color="white"
          class="q-mb-md"
        >
          <template v-slot:prepend>
            <q-icon name="eva-search-outline" />
          </template>
          
        </q-input>
      </div>
    </router-link> -->
    <!-- </q-header> -->


    <q-footer v-show="this.$route.fullPath != '/'" bordered 
    :class="this.$route.fullPath.includes('/news') ? 'bg-white' : 'footerDiv'">
      <q-tabs v-model="tab" class="text-grey-10" active-color="primary">
        <q-route-tab
          name="home"
          icon="eva-home-outline"
          label=""
          class="q-py-sm"
          to="/home"
        />
        <q-route-tab
          name="Plan"
          icon="eva-calendar-outline"
          class="q-py-sm"
          to="/upcomingTasks/n/n/n/n"
        />
        <q-route-tab
          name="News"
          icon="eva-book-open-outline"
          class="q-py-sm"
          to="/news"
        />
        <q-route-tab
          name="Profile"
          icon="eva-person-outline"
          class="q-py-sm"
          to="/profile"
        />
      </q-tabs>
    </q-footer>

  

    <q-page-container>
      <!-- <keep-alive> -->
        <transition
              name="transitions"
              enter-active-class="animated fadeIn slow"
              leave-active-class="animated fadeOut"
              mode="out-in"
      >
        <router-view />
      </transition>
      <!-- </keep-alive> -->
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

// const linksData = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ];

export default {
  name: "MainLayout",
  // components: { EssentialLink },
  data() {
    return {
      // leftDrawerOpen: false,
      // essentialLinks: linksData
      tab: "Home",
    };
  },
  computed: {
    title() {
      //use this style for common layout things, add else ifs for diff buttons
      // console.log(this.$route)
      let currentPath = this.$route.fullPath;
      if (currentPath == "/home") {
        return "Dashboard";
      } else if (currentPath.includes("/page2")) {
        return "Page 2";
      } else if (currentPath.includes("/page3")) {
        return "Page 3";
      }
    },
  },
  mounted(){
    console.log(this.$route)
  }
};
</script>

<style lang="scss">
.q-toolbar__title {
  font-size: 30px;
}

.q-footer {
  .q-tab__icon {
    font-size: 30px;
  }
}

.footerDiv{
  background-color: rgb(249, 249, 249);
}
</style>