<script setup lang="ts">
import { computed } from "vue";
import { Event, Price } from "../types";
import { getImageUrl } from "../api";

const props = defineProps<{
  event: Event;
}>();

const eventStartDate = computed(() => new Date(props.event.doorsOpen).toLocaleDateString("de-DE"));
const eventStartTime = computed(() =>
  new Date(props.event.doorsOpen).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  })
);

function formatPrice(price: Price) {
  if (price.currency === "EUR") return `${price.value} €`;
  else return `${price.value} ${price.currency}`;
}
</script>

<template>
  <div class="card h-100">
    <div class="card-img-top overflow-hidden">
      <img class="hover-zoom w-100" :src="getImageUrl(event.image)" alt="Card image cap" />
    </div>
    <figcaption class="mx-3 mt-1 figure-caption text-end">Image: {{ event.image.copyright }}</figcaption>
    <div class="card-body pt-1">
      <h5 class="card-title mb-3">{{ event.title }}</h5>

      <template v-if="event.soldout">
        <a href="#" class="btn btn-success disabled float-end ms-2" disabled>Sold out</a>
      </template>
      <template v-else-if="!event.salesStart || event.salesStart < new Date().toISOString()">
        <a href="#" class="btn btn-success float-end ms-2"> From {{ formatPrice(event.minPrice) }} </a>
      </template>
      <template v-else>
        <a href="#" class="btn btn-success disabled float-end ms-2" disabled> Comin soon... </a>
      </template>

      <div class="mb-2">
        <font-awesome-icon icon="fa-solid fa-calendar" class="me-2" />{{ eventStartDate }}
        <font-awesome-icon icon="fa-solid fa-clock" class="ms-2" />
        {{ eventStartTime }}
      </div>

      <div class="mb-3">
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        {{ event.venue.name }}, {{ event.venue.city }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-zoom {
  transition: transform 0.5s;
}
.card:hover > * > .hover-zoom {
  transform: scale(1.1);
}
</style>
