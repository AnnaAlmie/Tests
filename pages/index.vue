<template>
  <div class="main__page h-screen">
    <h1 class="text-5xl font-bold text-blue-900">Tests for all</h1>
    <div class="main__page__links">
      <nuxt-link to="/computools">Computools</nuxt-link>
      <nuxt-link to="/chest">Chest</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
.main__page {
  padding: 50px 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  &__links {
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    @include transitionAll;
    a {
      display: block;
      &:hover {
        color: $bg-green-700;
      }
    }
  }
}
</style>