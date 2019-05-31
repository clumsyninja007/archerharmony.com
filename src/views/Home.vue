<template>
  <div class="home">
    <content-section>
      <div class="left-side">
        <h1>Archer Harmony</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          commodo odio non nunc imperdiet consequat. Nulla euismod fringilla
          tempor. Pellentesque ut purus sed odio lobortis eleifend. Suspendisse
          potenti. Vestibulum efficitur hendrerit mauris vitae faucibus. Proin
          et nibh gravida, dictum nibh eget, volutpat nunc. Phasellus fringilla
          viverra tincidunt. Sed lorem libero, bibendum eu orci id, consequat
          suscipit augue. Pellentesque tincidunt enim ut pretium laoreet. Fusce
          id felis elementum, elementum sapien eu, egestas justo. Praesent
          scelerisque nec est et mollis. Aenean sem dolor, venenatis eget nibh
          ac, posuere scelerisque neque. Vestibulum maximus enim posuere lorem
          molestie hendrerit. Vestibulum sed purus in metus fringilla euismod.
          Morbi placerat mattis tortor et fermentum. Pellentesque vel nunc eget
          felis imperdiet finibus. Cras in gravida dui. Praesent porttitor enim
          arcu, vel bibendum risus eleifend consequat. Cras eget augue id lectus
          mattis accumsan. Aenean quis purus accumsan, tempor justo vel,
          suscipit turpis. Maecenas congue neque id erat bibendum commodo.
          Quisque eget neque et ligula vehicula consectetur.
        </p>
      </div>
      <div class="right-side">
        <img class="round" src="@/assets/archer_harmony.jpg" />
      </div>
    </content-section>
    <content-section class="full-width">
      <h1>Projects</h1>
      <div class="projects">
        <figure class="project">
          <figcaption><h3>NotKace</h3></figcaption>
          <a
            href="https://archerharmony.com/notkace"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="@/assets/notkace.png" />
          </a>
          <figcaption class="description">
            NotKace is written in Typescript with Vue JS. It consumes an API I
            wrote in ASP.NET Core, however the version of the API on my website
            is actually written in Node JS.
          </figcaption>
        </figure>
        <figure class="project">
          <figcaption><h3>Life Force Books</h3></figcaption>
          <a
            href="https://archerharmony.com/life-force-books"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="@/assets/lifeforcebooks2.jpg" />
          </a>
          <figcaption class="description">
            This is a rewrite of my grandfather's website, lifeforcebooks.com,
            in React JS. It's currently just an unfinished mirror of the live
            site, however if I get back to it I plan to make improvements.
          </figcaption>
        </figure>
      </div>
    </content-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentSection from '@/components/ContentSection.vue';

@Component({
  components: { ContentSection }
})
export default class Home extends Vue {}
</script>
