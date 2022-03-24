<template>
  <div class="team">
    <div>
      <p>Атака:</p>
      <div v-for="attack in attackers" :key="attack.id">
        <p>
          Команда: <b>{{ attack.name }}</b>
        </p>
        <p v-if="!attack.players.length" class="mt-4">Игроков еще нет</p>
        <div
          class="team__block attack"
          v-for="player in attack.players"
          :key="player.id"
        >
          <p>Имя: {{ `${player.firstName} ${player.lastName}` }}</p>
          <p>Ник: {{ player.userName }}</p>
          <p>Максимальный ранг: {{ player.valorantProfiles[0].maxRank }}</p>
        </div>
      </div>
    </div>
    <div>
      <p>Защита:</p>
      <div v-for="defend in defenders" :key="defend.id">
        <p>
          Команда: <b>{{ defend.name }}</b>
        </p>
        <p v-if="!defend.players.length" class="mt-4">Игроков еще нет</p>
        <div
          class="team__block defend"
          v-for="player in defend.players"
          :key="player.id"
        >
          <p>Имя: {{ `${player.firstName} ${player.lastName}` }}</p>
          <p>Ник: {{ player.userName }}</p>
          <p>Максимальный ранг: {{ player.valorantProfiles[0].maxRank }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teams"],
  data() {
    return {};
  },
  computed: {
    attackers() {
      return this.teams.filter((team) => team.side == "Attackers");
    },
    defenders() {
      return this.teams.filter((team) => team.side == "Defenders");
    },
  },
};
</script>

<style lang="scss" scoped>
.team {
  padding: 20px 0;
  @include flexBetweenStart;
  & > div {
    width: calc(50% - 10px);
  }
  &__block {
    padding: 10px;
    margin-top: 10px;
    &.attack {
      border: 1px solid $bg-red-600;
    }
    &.defend {
      border: 1px solid $bg-green-700;
    }
  }
}
</style>