import { createMemoryHistory as createHistory, createRouter } from "vue-router";

import NBlankPage from "@/pages/NBlankPage.vue";

export default createRouter({
  history: createHistory(),
  routes: [{ path: "", component: NBlankPage }],
});
