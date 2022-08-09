import { ref } from "vue";
import { Event } from "./types";

// "Von einem der folgenden Shops kannst Du die API verwenden", no, no i cant, because this API doesn't allow CORS, but there's https://corsproxy.io/ to the rescue luckily
const EVENT_API_ENDPOINT =
    "https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F5da03c56503ca200015df6cb%2Fapi%2Fevent";

export const useEvents = () => {
    const loading = ref(true);
    const error = ref<null | unknown>(null);
    const events = ref([] as Event[]);
    (async () => {
        try {
            const res = await fetch(EVENT_API_ENDPOINT);
            const data = await res.json();
            events.value = data;
        } catch (e) {
            error.value = e;
        }
        loading.value = false;
    })();
    return { loading, events, error };
};

export const getImageUrl = (image: Event["image"]) => {
    return `https://www.eventim-light.com/de/api/image/${image.id}/shop_preview/webp`;
}