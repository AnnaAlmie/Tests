<template>
  <Accordion class="match">
    <div slot="header" class="match__header">
      <div>Матч № {{ match.number }}</div>
      <div>
        Статус:
        <span :style="`color: ${status.color}`" class="font-medium">{{
          status.name ? status.name : status
        }}</span>
      </div>
    </div>
    <div>Карта: {{ match.mapPlayed }}</div>
    <ComputoolsTeam
      :teams="matchInfo.data.teams"
      v-if="matchInfo.data && matchInfo.data.teams.length"
    />
    <p v-else>Команда еще не собралась</p>
  </Accordion>
</template>

<script>
import statusRu from "@/json/computools/status";
export default {
  props: ["match"],
  data() {
    return {
      statusRu,
      matchInfo: {},
    };
  },
  computed: {
    status() {
      return this.statusRu[this.match.status]
        ? this.statusRu[this.match.status]
        : this.match.status;
    },
  },
  mounted() {
    this.getOneMatch();
  },
  methods: {
    async getOneMatch() {
      try {
        this.matchInfo = await this.$axios.get(`match/${this.match.id}`);
      } catch (e) {
        console.log(e.response.data.message);
      }
    },
  },
};
</script>

<style lang="scss">
.match {
  border: 1px solid #000;
  padding: 20px;
  &__header {
    @include flexBetweenCenter;
  }
}
</style>