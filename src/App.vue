<template>
  <div id="app">
    <navbar :navList="navList"></navbar>
    <router-view class="content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  public navList = [
    { label: 'Home', location: '/' },
    { label: 'About', location: '/about' },
    { label: 'Notkace', location: '/notkace-demo' },
    { label: 'Life Force Books', location: '/lifeforcebooks-demo' }
  ];
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;

  h1,
  h3 {
    text-align: center;
  }

  .content {
    margin-top: 50px;
  }
}
</style>
