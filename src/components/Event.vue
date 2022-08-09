<script setup lang="ts">
import { ref } from "vue";
import { EEvent } from "../types";
const props = defineProps<{
  event: EEvent;
}>();
</script>

<template>
  <h1>soon to be event</h1>
  <div>{{ props.event.name }}</div>
</template>

<style scoped></style>
