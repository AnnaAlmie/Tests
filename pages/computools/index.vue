<template>
  <div>
    <!-- header  -->
    <header class="main__header text-white text-xl font-semibold bg-black">
      <div class="logo__link">
        <div class="logo">
          <img
            src="https://computools.com/wp-content/themes/computools/assets/img/computools-logo.svg"
            alt=""
          />
        </div>
        <a
          href="https://computools.com/"
          class="p-2.5 link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Computools
        </a>
      </div>
      <div class="login link p-2.5" @click="popup = true">Log in</div>
    </header>
    <!-- end header  -->
    <transition name="fade">
      <ComputoolsPopupLogin
        v-if="popup"
        :close="
          () => {
            popup = false;
          }
        "
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "ComputoolsIndex",
  data() {
    return {
      popup: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.main__header {
  text-transform: uppercase;
  height: 50px;
  @include flexBetween;
  .logo__link {
    @include flexStartCenter;
    height: 100%;
  }
  .logo {
    width: 84px;
    height: inherit;
    background: $color-compu;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 22px;
    }
  }
  .link {
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: $color-compu;
    }
  }
}
</style>