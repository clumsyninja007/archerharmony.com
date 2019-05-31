<template>
  <div class="contact">
    <content-section class="full-width">
      <h1>Contact Me</h1>
      <contact-form></contact-form>
    </content-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentSection from '@/components/ContentSection.vue';
import ContactForm from '@/components/ContactForm.vue';

@Component({
  components: { ContentSection, ContactForm }
})
export default class Contact extends Vue {}
</script>
