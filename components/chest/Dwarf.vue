<template>
  <div class="dwarf">
    <!-- image  -->
    <img src="@/assets/img/chest/dwarf.png" alt="dwarf" class="dwarf__img" />
    <img
      class="dwarf__img__head"
      src="@/assets/img/chest/examples_animations/dwarf_head.gif"
      alt="dwarf_head"
    />
    <img
      class="dwarf__img__ax"
      src="@/assets/img/chest/examples_animations/dwarf_ax.gif"
      alt="dwarf_ax"
    />

    <img
      class="dwarf__img__handcuff"
      src="@/assets/img/chest/examples_animations/dwarf_handcuff.gif"
      alt="dwarf_handcuff"
    />
    <!-- message  -->
    <ChestMessage />
    <!-- button  -->
    <div :class="['button', { lock: canPlay }]" @click="startGame()">
      Играть
    </div>
  </div>
</template>
 
<script>
export default {
  computed: {
    canPlay() {
      return this.$store.getters["chest/getGames"] <= 0;
    },
  },
  methods: {
    startGame() {
      if (this.canPlay) {
      } else {
        this.$store.commit("chest/OPEN_CHEST", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dwarf {
  width: 28%;
  height: inherit;
  position: relative;
  &__img {
    position: absolute;
    top: 0;
    width: 134%;
    max-width: none;
    transform: translate(-21%, -5%);
    &__head {
      position: absolute;
      width: 27.7%;
      top: 3.9%;
      left: 53.3%;
      z-index: 4;
    }
    &__ax {
      position: absolute;
      width: 49.7%;
      top: 30.7%;
      left: 33.9%;
      z-index: 3;
    }
    &__handcuff {
      position: absolute;
      width: 31.2%;
      top: 18.3%;
      left: 37.7%;
      z-index: 2;
    }
  }
  .button {
    position: absolute;
    left: 13%;
    bottom: 8%;
    z-index: 10;
  }
}
</style>