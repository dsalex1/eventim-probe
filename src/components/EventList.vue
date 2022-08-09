<script setup lang="ts">
import { ref } from "vue";
import Event from "./Event.vue";

const events = new Array(3).fill(2);
</script>

<template>
  <h1>soon to be event list</h1>
  <Event v-for="event in events" :key="event.id" :event="event" />
</template>

<style scoped></style>
