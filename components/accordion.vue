<template>
  <div class="accordion">
    <div
      :class="['accordion__header', { accordion__header__active: show }]"
      @click="toggle"
    >
      <slot name="header"></slot>
      <SvgIcon
        name="angle"
        class="accordion__header__icon"
        :class="{ rotate: show }"
      />
    </div>
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="accordion__body" v-show="show">
        <div class="accordion__body__inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle: function () {
      this.show = !this.show;
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    },
  },
};
</script>

<style lang="scss">
.accordion {
  &__header {
    position: relative;
    @include flexBetweenCenter;
    cursor: pointer;
    & > div:first-child {
      width: calc(100% - 16px - 20px);
    }
    &__icon {
      @include transitionAll;
      width: 16px;
      height: 16px;
      svg {
        width: inherit;
        height: inherit;
      }
      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  &__body {
    transition: all 0.2s linear;
  }
}
</style>