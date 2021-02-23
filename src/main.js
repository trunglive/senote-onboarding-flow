import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import { getAllData } from "@/store/actions"
import "./index.css"

const app = createApp(App)

app.use(store)

app.mount("#app")

getAllData(store)
