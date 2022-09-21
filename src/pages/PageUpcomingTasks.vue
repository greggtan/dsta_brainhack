<template>
  <q-page class="q-pa-sm">
    <div class="text-center q-mt-md q-pt-xs" style="font-size: 25px; font-weight: 600">
      Upcoming Events
    </div>

    <div class="full-width">
      <q-list class="q-mt-md flex column full-width">
        <q-item
          v-for="event in events"
          :key="event.id"
          clickable
          v-ripple
          class="flex items-center no-wrap"
        >
          <div
            class="q-mr-md q-mb-md"
            style="color: #003d59; font-weight: 600; font-size: 20px"
          >
            {{ event.id }}
          </div>

          <div
            class="flex justify-between items-center q-pb-sm full-width"
            style="border-bottom: rgb(221, 221, 221) solid 1px; "
          >
            <div class="">
              <div
                class=""
                style="font-size: 17px; color: #003d59; font-weight: 500"
              >
                {{ event.title }}
              </div>
              <div
                class=""
                style="font-size: 14px; color: #003d59; font-weight: 300"
              >
                {{ event.date }}
              </div>
              <div
                class="q-mb-sm"
                style="font-size: 14px; color: #003d59; font-weight: 300"
              >
                {{ event.time }}
              </div>
            </div>

            <div class="flex column items-center justify-end q-gutter-y-sm q-mb-md">
              <div
                :class="`text-${event.color}`"
                style="font-weight: 400; white-space: nowrap"
              >
                Crowd Levels
              </div>
              <div class="">
                <q-knob
                readonly
                v-model="event.crowd"
                show-value
                size="70px"
                :thickness="0.22"
                :color="event.color"
                track-color="grey-3"
                class="q-mt-sm"
                :class="`text-${event.color}`"
              />
              </div>
              
            </div>
          </div>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      events: [
        {
          id: "01",
          title: "Adventure Cove",
          date: "17th June 2021",
          time: "10am - 1pm",
          color: "red",
          crowd: 67,
        },
        {
          id: "02",
          title: "Thomson Park",
          date: "17th June 2021",
          time: "6pm - 7pm",
          color: "green",
          crowd: 30,
        },
        {
          id: "03",
          title: "Thomson Plaza",
          date: "17th June 2021",
          time: "8pm - 10pm",
          color: "green",
          crowd: 42,
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.params);
    if (this.$route.params.name != "n") {
      this.events.push({
        id: "04",
        title: this.$route.params.name,
        date: this.$route.params.date,
        time: this.$route.params.time,
        color: "red",
        crowd: 83,
      });
    }
  },
};
</script>
