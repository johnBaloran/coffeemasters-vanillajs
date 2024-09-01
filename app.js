import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
// Link my Web Components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};
app.store = Store;
app.router = Router;
// its better to wait for the content to load for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  await loadData();
  app.router.init();
});
