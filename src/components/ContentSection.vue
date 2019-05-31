<template>
  <section>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentSection extends Vue {}
</script>

<style lang="scss">
section {
  display: flex;
  padding: 60px;

  &:nth-child(4n + 1) {
    background-color: rgb(29, 29, 29);
    color: rgb(240, 240, 240);
  }

  &:nth-child(2n) {
    background-color: #edeeef;
    color: rgba(26, 26, 26, 0.95);
  }

  &:nth-child(4n + 3) {
    background-color: white;
    color: rgba(26, 26, 26, 0.95);
  }

  .left-side,
  .right-side {
    padding: 10px;
  }

  img.round {
    border-radius: 50%;
    margin-top: 2rem;
  }

  &.full-width {
    display: block;
  }

  .projects {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .project {
      width: 40%;
      min-width: 300px;

      a {
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  section {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 450px) {
  section {
    img.round {
      width: 90%;
    }
  }
}
</style>
