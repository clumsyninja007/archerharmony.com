<template>
  <nav :class="showMobile ? 'show-mobile' : ''">
    <div
      :class="showMobile ? 'mobile mobile-menu' : 'mobile-menu'"
      @click="showMobile = !showMobile"
      @mouseenter="btnHover = true"
      @mouseleave="btnHover = false"
    >
      <font-awesome-icon
        :class="btnHover ? 'btn-hover' : ''"
        v-if="!showMobile"
        icon="bars"
      ></font-awesome-icon>
      <font-awesome-icon
        :class="btnHover ? 'btn-hover' : ''"
        v-if="showMobile"
        icon="times"
      ></font-awesome-icon>
    </div>
    <div :class="showMobile ? 'show-mobile nav-left' : 'nav-left'">
      <router-link class="brand" to="/">
        <span>Archer Harmony</span>
      </router-link>
      <ul>
        <li
          v-for="navItem in navList"
          :key="navItem.label"
          @click="updateDemoUrl(navItem.label)"
        >
          <router-link :to="navItem.location">
            <span>{{ navItem.label }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div :class="showMobile ? 'show-mobile nav-right' : 'nav-right'">
      <a
        href="https://github.com/clumsyninja007"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="social-icons"
        @click="showMobile = false"
        ><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/archer-harmony-9914b790/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="social-icons"
        @click="showMobile = false"
        ><font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  @Prop()
  public navList!: object[];

  public showMobile = false;
  public btnHover = false;

  public updateDemoUrl(route: string) {
    this.showMobile = false;

    switch (route) {
      case 'Notkace':
        this.$store.commit('setDemoUrl', 'https://archerharmony.com/notkace');
        break;
      case 'Life Force Books':
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
nav {
  position: fixed;
  width: calc(100vw - 120px);
  margin: 0;
  padding: 0 60px;
  height: 50px;
  top: 0;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  z-index: 9;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

  .mobile-menu {
    display: none;
  }

  .nav-left,
  .nav-right {
    display: flex;
  }

  .brand {
    text-decoration: none;
    color: #42b983;
    height: inherit;
    display: flex;

    span {
      align-self: center;
    }
  }

  a:not(.social-icons) {
    font-weight: bold;
    color: #53b6d0;
    text-decoration: none;

    &:hover:not(.brand) {
      background-color: #53b6d0;
      color: white;
    }

    &.router-link-exact-active:not(.brand) {
      background-color: #53b6d0;
      color: white;
    }
  }

  ul {
    margin: 0;
    height: inherit;
    display: flex;

    li {
      list-style: none;
      display: flex;
      padding: 0;
      height: inherit;

      a {
        height: inherit;
        padding: 0 10px;
        display: flex;

        span {
          align-self: center;
        }
      }
    }
  }

  .social-icons {
    font-size: 30px;
    align-self: center;
    color: #53b6d0;
    padding: 0 10px;

    &:hover {
      color: white;
    }
  }
}

@media screen and (max-width: 900px) {
  nav {
    justify-content: center;

    &.show-mobile {
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;
      width: 100vw;

      .show-mobile {
        display: block;
        top: 50px;
        background-color: rgba(51, 51, 51, 0.85);
        width: 100vw;

        .brand {
          display: none;
        }

        ul {
          flex-direction: column;
          width: 100%;
          padding-left: 60px;

          li {
            font-size: 20px;

            a {
              padding: 10px;
            }
          }
        }

        &.nav-right {
          padding-left: 60px;
        }
      }
    }

    .mobile-menu {
      display: flex;
      flex-shrink: 0;
      color: #53b6d0;
      width: 50px;
      height: 50px;
      justify-content: center;
      cursor: pointer;

      &.mobile {
        align-self: center;
      }

      &:hover {
        background-color: #53b6d0;
      }

      .btn-hover {
        color: white;
      }

      svg {
        align-self: center;
      }
    }

    .nav-right,
    .nav-left {
      display: none;
    }
  }
}
</style>
