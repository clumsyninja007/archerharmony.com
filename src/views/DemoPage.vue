<template>
  <iframe id="demo-page" :src="$store.state.demoUrl"></iframe>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DemoPage extends Vue {
  public mounted() {
    switch (this.$router.currentRoute.name) {
      case 'notkace':
        this.$store.commit('setDemoUrl', 'https://archerharmony.com/notkace');
        break;
      case 'lifeforcebooks':
        this.$store.commit(
          'setDemoUrl',
          'https://archerharmony.com/life-force-books'
        );
        break;
      default:
        this.$store.commit('setDemoUrl', '');
        break;
    }
  }
}
</script>

<style lang="scss">
#demo-page {
  width: 100%;
  height: calc(100vh - 50px);
  padding: 0;
  border: none;
}
</style>
