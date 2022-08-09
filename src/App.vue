<script setup lang="ts">
import EventList from "./components/EventList.vue";
import CookieBanner from "./components/CookieBanner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <EventList class="flex-grow-1" />
  <Footer />
  <CookieBanner class="fixed-bottom" />
</template>
