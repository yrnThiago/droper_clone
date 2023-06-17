import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CalendarioView from "../views/CalendarioView.vue"
import FeedView from "../views/FeedView.vue"
import MarketView from "../views/MarketView.vue"
import VendasView from "../views/VendasView.vue"
import SparksView from "../views/SparksView.vue"
import NotificacoesView from "../views/NotificacoesView.vue"
import BuscarView from "../views/BuscarView.vue"
import NotFoundView from "../views/NotFoundView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: "/home",
      alias: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calendario",
      name: "calendario",
      component: CalendarioView
    },
    {
      path: "/feed",
      name: "feed",
      component: FeedView,
    },
    {
      path: "/market",
      name: "market",
      alias: "/market/loja/inicio",
      component: MarketView,
    },
    {
      path: "/vendas",
      name: "vendas",
      component: VendasView
    },
    {
      path: "/sparks",
      name: "sparks",
      component: SparksView
    },
    {
      path: "/notificacoes",
      name: "notificacoes",
      component: NotificacoesView
    },
    {
      path: "/buscar",
      name: "buscar",
      component: BuscarView,
    },
    {
      path: "/erro/404",
      name: "NotFound",
      component: NotFoundView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/erro/404"
    }
  ]
})

export default router
