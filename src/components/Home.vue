<template>
  <div>
    <ba-toolbar>
      <span slot="page-name">Alloy Pipeline Designer</span>
    </ba-toolbar>
    <div class="main-container">
      <ba-content>{{ message }}</ba-content>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Get started!'
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped></style>
