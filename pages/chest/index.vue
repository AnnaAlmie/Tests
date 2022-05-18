<template>
  <div class="chest">
    <div class="wrapper">
      <!-- fire  -->
      <ChestFire />
      <div class="wrapper_chest">
        <!-- chest block  -->
        <ChestChests />
        <!-- dwarf block  -->
        <ChestDwarf />
        <!-- pay block  -->
        <ChestPay />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChestIndex",
};
</script>

<style lang="scss">
@import "~/assets/scss/chest.scss";
</style>

<style lang="scss" scoped>
.chest {
  background: url("~/assets/img/chest/bg.png") no-repeat center center;
}
.wrapper {
  width: 100%;
  max-width: 1142px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  &_chest {
    display: flex;
    align-items: stretch;
    width: 100%;
  }
}
</style>