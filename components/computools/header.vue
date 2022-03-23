<template>
  <div>
    <header class="text-white text-xl font-semibold bg-black">
      <div class="main__header wrapper">
        <!-- logo  -->
        <div class="logo__link pr-5">
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
        <!-- login  -->
        <div v-if="!isAuthenticated" class="link" @click="popup = true">
          Log in
        </div>
        <div v-else class="link" @click="$auth.logout()">
          {{ loggedInUser.userName }} | Log out
        </div>
      </div>
    </header>
    <!-- popup -->
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
    <!-- end popup -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ComputoolsHeader",
  data() {
    return {
      popup: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>

<style lang="scss" scoped>
.main__header {
  text-transform: uppercase;
  white-space: nowrap;
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