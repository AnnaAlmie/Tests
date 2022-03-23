<template>
  <div class="event__block">
    <div>
      <p>
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
      <p>{{ play.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["play"],
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
      border-color: $color-compu;
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