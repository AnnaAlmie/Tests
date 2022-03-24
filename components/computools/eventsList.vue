<template>
  <div class="event__block">
    <div>
      <p class="text__overflow" style="width: 180px">
        <b>{{ play.name }}</b>
      </p>
      <p>Старт: {{ startDate }}</p>
      <p>
        Завершено матчей:
        {{ countFinished }}
      </p>
    </div>
    <div>
      <p class="event__block__players">
        <svgIcon name="players" class="event__block__players__icon" />
        <span v-text="play.playersToPlay.length"></span>
      </p>
      <p :style="`color: ${status.color}`">
        {{ status.name ? status.name : status }}
      </p>
    </div>
  </div>
</template>

<script>
import statusRu from "@/json/computools/status";
export default {
  props: ["play"],
  data() {
    return {
      statusRu,
    };
  },
  computed: {
    startDate() {
      return new Date(this.play.startDate)
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join(".");
    },
    countFinished() {
      return this.play.matches.filter((match) => match.status == "finished")
        .length;
    },
    status() {
      return this.statusRu[this.play.status]
        ? this.statusRu[this.play.status]
        : this.play.status;
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  &__block {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    cursor: pointer;
    @include transitionAll;
    @include flexBetweenStart;
    &:first-child {
      margin-top: 20px;
    }
    &.selected,
    &:hover {
      box-shadow: inset 0px 0px 0px 2px $color-compu;
    }
    &__players {
      @include flexBetweenCenter;
      &__icon {
        display: inline-block;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>