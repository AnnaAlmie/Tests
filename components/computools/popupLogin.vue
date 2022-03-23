<template>
  <div class="popup">
    <div class="popup__window p-5">
      <!-- title  -->
      <div class="popup__title text-3xl font-semibold">
        {{ registration ? "Registration" : "Log in" }}
      </div>
      <!-- form  -->
      <ValidationObserver ref="form">
        <form @submit.prevent="onSubmit" class="mt-12">
          <!------------- NAME ------------->
          <ValidationProvider
            name="Name"
            rules="required|alpha_spaces|min:2"
            v-slot="{ errors }"
          >
            <div class="input__row" :class="{ error: errors[0] }">
              <input v-model.lazy="form.name" type="text" placeholder="Name*" />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <!------------- EMAIL ------------->
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
            v-if="registration"
          >
            <div class="input__row mt-4" :class="{ error: errors[0] }">
              <input
                v-model.lazy="form.email"
                type="text"
                placeholder="Email*"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <!------------- NAME ------------->
          <ValidationProvider
            name="Password"
            rules="required|min:6|max:12"
            v-slot="{ errors }"
          >
            <div class="input__row mt-4" :class="{ error: errors[0] }">
              <input
                v-model.lazy="form.pass"
                type="password"
                placeholder="Password*"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <!-- form buttons  -->
          <div class="popup__buttons mt-12">
            <div @click="close" class="popup__button">Cancel</div>
            <button type="submit" class="popup__button popup__button__submit">
              {{ registration ? "Registrate" : "Sign in" }}
            </button>
          </div>
        </form>
      </ValidationObserver>
      <!-- text sign  -->
      <div class="mt-12">
        <template v-if="!registration"
          >Don’t have an account?
          <span class="textlink" @click="registration = true"
            >Sign up</span
          ></template
        >
        <template v-else
          >I have an account
          <span class="textlink" @click="registration = false"
            >Log in</span
          ></template
        >
      </div>
    </div>
    <!-- overlay  -->
    <div class="popup__overlay" @click="close"></div>
  </div>
</template>

<script>
export default {
  props: ["close"],
  data() {
    return {
      registration: false,
      form: {
        name: "",
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.sendMessage();
        }
      });
    },
    sendMessage() {
      console.log(
        "🚀 ~ file: popup.vue ~ line 46 ~ submit ~ this.registration",
        this.registration
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  backdrop-filter: blur(4px);
  @include flexCenter;
  &__overlay {
    width: inherit;
    height: inherit;
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.5);
    cursor: pointer;
  }
  &__window {
    background: #fff;
    width: 500px;
    z-index: 10;
  }

  &__button {
    &s {
      @include flexBetween;
    }
    cursor: pointer;
    width: calc(50% - 10px);
    text-align: center;
    padding: 10px;
    border: 1px solid #000000;
    font-weight: 500;
    @include transitionAll;
    &__submit {
      background: $color-compu;
    }
    &:hover {
      background: #000000;
      color: #fff;
    }
  }
}

// input
.input__row {
  position: relative;
  input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #000000;
  }
  span {
    position: absolute;
    font-size: 10px;
    color: $bg-red-600;
  }
  &.error {
    input {
      border-color: $bg-red-600;
    }
  }
}
</style>