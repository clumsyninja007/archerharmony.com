<template>
  <form @submit.prevent>
    <input class="form-control" type="text" placeholder="Full Name" />
    <input class="form-control" type="email" placeholder="Email Address" />
    <textarea
      class="form-control"
      type="textarea"
      placeholder="Write your message here..."
    />
    <button @click="toggleShowError">Submit</button>
    <div v-if="showError">
      <h2>Ha, just kidding. I haven't implemented this yet.</h2>
      <p class="mailme">
        You can email me at:
        <a href="mailto:clumsyninja007@archerharmony.com" target="_top">
          clumsyninja007@archerharmony.com
        </a>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContactForm extends Vue {
  public showError = false;

  public toggleShowError() {
    this.showError = true;
  }
}
</script>

<style lang="scss">
form {
  button {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-family: inherit;
    margin: 20px 0;

    &:placeholder {
      color: #6c757d;
      opacity: 1;
    }

    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  .mailme {
    a {
      color: #80bdff;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
