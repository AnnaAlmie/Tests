<template>
  <div class="chests__wrap">
    <img src="@/assets/img/chest/logo.png" />
    <div class="chests">
      <div v-for="(chest, index) in 9" :key="index" class="chest">
        <img src="@/assets/img/chest/chestBg.png" class="chest_bg" />
        <!-- chest  -->
        <div
          :class="[
            'chest_img',
            { open: indexChest == index },
            { win: chestWin },
          ]"
        ></div>
        <!-- end chest  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexChest: null,
      chestWin: false,
    };
  },
  computed: {
    gameStatus() {
      return this.$store.getters["chest/getChest"];
    },
  },
  watch: {
    gameStatus() {
      this.openChest();
    },
  },
  methods: {
    openChest() {
      if (!this.gameStatus) return;
      this.indexChest = Math.round(Math.random() * 8);
      console.log(
        "🚀 ~ file: Chests.vue ~ line 43 ~ openChest ~ this.indexChest",
        this.indexChest
      );
      this.chestWin = !this.chestWin;
      this.$store.commit("chest/OPEN_CHEST", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.chest {
  &s {
    &__wrap {
      width: 44%;
    }
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  position: relative;
  width: calc(100% / 3);
  margin-top: 4px;
  flex: 1 1 auto;
  &_img {
    position: absolute;
    top: -139%;
    left: -147%;
    width: 650px;
    height: 650px;
    background: url("~/assets/img/chest/chest_sprites_empty.png") no-repeat;
    transform: scale(0.2);
    z-index: 5;
    &.open {
      background: url("~/assets/img/chest/chest_sprites_empty.png") no-repeat;
      animation: open 1.2s steps(5);
    }
    &.open.win {
      background: url("~/assets/img/chest/chest_sprites_gold.png") no-repeat;
      animation: open 1.2s steps(5);
    }
  }
}
@keyframes open {
  from {
    background-position-y: 0px;
  }
  to {
    background-position-y: -3250px;
  }
}
</style>