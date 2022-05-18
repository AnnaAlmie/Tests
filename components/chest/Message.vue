<template>
  <div class="message">
    <transition name="fade" mode="out-in">
      <div v-if="canPlay > 0" key="can">
        Вскрывай сундуки из <br />
        моей сокровищницы! <br />
        Ищи несметные <br />
        богатства!
      </div>
      <div v-else key="cant">
        Для игры Вам <br />
        необходимо купить <br />
        попытки, а затем <br />
        нажать кнопку "Играть"
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    canPlay() {
      return this.$store.getters["chest/getGames"];
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  top: 20%;
  z-index: 10;
  background: url(~/assets/img/chest/message.png) no-repeat;
  padding: 52% 16% 14% 8%;
  font-size: 20px;
  color: rgb(51, 51, 51);
  line-height: 1.021;
  text-align: center;
  white-space: nowrap;
}
</style>