<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useEvents } from "../api";
import { Event } from "../types";

import EventCard from "./EventCard.vue";
import Spinner from "./Spinner.vue";

const { events, loading, error } = useEvents();

const sorting = ref<"name" | "date">("date");

const sortedEvents = computed(() =>
  events.value.sort((a, b) => (sorting.value === "name" ? (a.title < b.title ? -1 : 1) : a.doorsOpen < b.doorsOpen ? -1 : 1))
);

const filter = ref<"bookable" | "soldOut" | "notBookable">("bookable");
const searchQuery = ref("");

// ive used a filterfunction that i can invoke on v-show instead including the filter in the computed property to avoid re-rendering elements when the filter changes
const filterFunction = computed(() => (e: Event) => filterProperties(e) && filterSearch(e));

const filterProperties = (e: Event) => {
  if (filter.value === "soldOut") return e.soldout;
  if (filter.value === "notBookable") return e.salesStart && e.salesStart > new Date().toISOString();
  return !e.soldout && (!e.salesStart || e.salesStart < new Date().toISOString());
};

const filterSearch = (e: Event) => {
  if (!searchQuery.value) return true;
  return e.title.toLowerCase().includes(searchQuery.value.toLowerCase());
};
</script>

<template>
  <div class="container" style="position: relative">
    <Spinner v-if="loading" />
    <div v-else-if="error">
      <div class="alert alert-danger mt-3">Something went wrong trying to load events. Please try again later.</div>
    </div>
    <template v-else>
      <div class="row mt-3 gy-2">
        <div class="btn-group col-auto" role="group" aria-label="Basic radio toggle button group">
          <input v-model="filter" value="bookable" type="radio" class="btn-check" name="filter" id="filterBookable" autocomplete="off" />
          <label class="btn btn-outline-primary" for="filterBookable">Available for booking</label>

          <input v-model="filter" value="soldOut" type="radio" class="btn-check" name="filter" id="filterSoldOut" autocomplete="off" />
          <label class="btn btn-outline-primary" for="filterSoldOut">Sold out</label>

          <input v-model="filter" value="notBookable" type="radio" class="btn-check" name="filter" id="filterNotBookable" autocomplete="off" />
          <label class="btn btn-outline-primary" for="filterNotBookable">Not yet bookable</label>
        </div>

        <div class="btn-group col-auto" role="group" aria-label="Basic radio toggle button group">
          <input v-model="sorting" value="date" type="radio" class="btn-check" name="sorting" id="sortDate" autocomplete="off" />
          <label class="btn btn-outline-primary" for="sortDate">Sort by date</label>

          <input v-model="sorting" type="radio" value="name" class="btn-check" name="sorting" id="sortName" autocomplete="off" />
          <label class="btn btn-outline-primary" for="sortName">Sort by name</label>
        </div>

        <div class="col-auto flex-grow-1">
          <div class="input-group">
            <input v-model="searchQuery" type="text" class="form-control" placeholder="search..." />
            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 py-4">
        <template v-for="event in sortedEvents" :key="event.id">
          <div class="col-12 col-md-6 col-xl-4" v-show="filterFunction(event)">
            <EventCard :event="event" />
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
