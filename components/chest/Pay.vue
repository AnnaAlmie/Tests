<template>
  <div class="pay">
    <img src="@/assets/img/chest/right.png" alt="dwarf" class="dwarf__img" />
    <div class="pay__info">
      <div class="">1 игра = {{ cost }} $</div>
      <div class="pt-10 text-lg text-white">Вам доступно:</div>
      <div class="pt-4 flex justify-between items-center">
        <div>Игр:</div>
        <div class="text__gold">
          {{ $store.getters["chest/getGames"] }}
        </div>
      </div>
      <div class="pt-10 text-lg text-white">Покупка:</div>
      <div class="pt-4 flex justify-between items-center">
        <div>Игр:</div>
        <div class="flex">
          <span class="text__gold">{{ games }}</span>
          <div class="arrow">
            <div class="arrow__up" @click="games++">&#65087;</div>
            <div
              :class="['arrow__down', { locked: games <= 0 }]"
              @click="games--"
            >
              &#65088;
            </div>
          </div>
        </div>
      </div>
      <div class="pt-4 flex justify-between items-center">
        <div>Сумма:</div>
        <div>
          <span class="text__gold">{{ (sum = cost * games) }}</span
          ><span class="last__col"> $</span>
        </div>
      </div>
    </div>
    <div :class="['button', { lock: games <= 0 }]" @click="payGame()">
      Купить
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cost: 5,
      games: 0,
      sum: 0,
    };
  },
  methods: {
    payGame() {
      this.$store.commit("chest/SET_GAMES", this.games);
      this.games = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.pay {
  position: relative;
  width: 28%;
  margin: 8% -3% 0 3%;
  &__info {
    position: absolute;
    top: 22%;
    left: 16%;
    width: 65%;
    font-size: 15px;
    color: #a3a09f;
    z-index: 10;
  }
  & .button {
    position: absolute;
    bottom: 9%;
    left: 13%;
  }
}
.text__gold {
  color: rgb(254, 198, 2);
  text-align: center;
  font-size: 30px;
  line-height: 6px;
}
.last__col {
  font-size: 26px;
  line-height: 6px;
}
.arrow {
  font-size: 20px;
  line-height: 14px;
  margin: -12px -5px 0 7px;
  & > div {
    transition: all 0.2s ease-in-out;
    &.locked {
      pointer-events: none;
    }
    &:not(.locked) {
      cursor: pointer;
      color: #fff;
      &:hover {
        color: rgb(254, 198, 2);
      }
    }
  }
}
</style>