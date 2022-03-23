<template>
  <div>
    <!-- if error  -->
    <div v-if="error" class="mt-5">{{ error }}</div>
    <!-- Get All Events  -->
    <div class="event__wrap" v-if="events && events.data">
      <!-- left column -->
      <div class="w-2/5">
        <ComputoolsEventsList
          v-for="(play, index) in events.data"
          :key="play.id"
          @click.native="selectedEvent = index"
          :class="{ selected: selectedEvent == index }"
          :play="play"
        />
      </div>
      <!-- right column -->
      <div class="w-3/5 m-5">
        <p>Организатор: {{ events.data[selectedEvent].organizer.userName }}</p>
        {{ events.data[selectedEvent].matches }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      selectedEvent: 0,
      error: null,
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      try {
        this.events = await this.$axios.get("events/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  &__wrap {
    @include flexBetweenStart;
    & > div:first-child {
      padding-right: 20px;
      border-right: 1px solid black;
      margin-right: 20px;
    }
  }
}
</style>