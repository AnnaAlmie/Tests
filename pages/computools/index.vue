<template>
  <div>
    <!-- header  -->
    <ComputoolsHeader />
    <!-- end header -->
    <div class="wrapper">
      <ComputoolsEvents v-if="isAuthenticated" />
      <div v-else class="mt-6 text-2xl font-bold">Authorization required.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ComputoolsIndex",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>