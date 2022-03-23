<template>
  <div v-html="src"></div>
</template>
<script>
export default {
  // https://github.com/nuxt-community/svg-module
  name: "svgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      const src = require(`assets/img/icons/${this.name}.svg?raw`);
      return src;
    },
  },
};
</script>