<template>
  <div>
    <ba-nav>
      <a class="current" href="#" slot="app-name">Alloy Pipeline Designer</a>
    </ba-nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Store from './vuex';

export default {
  store: Store
};

</script>
