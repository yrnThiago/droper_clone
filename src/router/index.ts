import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalendarioView from "../views/CalendarioView.vue";
import FeedView from "../views/FeedView.vue";
import MarketView from "../views/MarketView.vue";
import VendasView from "../views/VendasView.vue";
import SparksView from "../views/SparksView.vue";
import NotificacoesView from "../views/NotificacoesView.vue";
import SearchView from "../views/SearchView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import SearchResults from "../components/SearchResults.vue";
import Suggestions from "../components/Suggestions.vue";
import MarketLojaInicio from "../components/MarketLojaInicio.vue";
import VendasRelatorioView from "../components/VendasRelatorioView.vue";
import FavoritosView from "../views/FavoritosView.vue";
import AnunciosView from "../views/AnunciosView.vue";
import LoginView from "../views/LoginView.vue";
import LoginViewComponent from "../views/LoginViewComponent.vue";
import EntrarViewComponent from "../views/EntrarViewComponent.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: "/login",
      name: "login",
      components: {
        default: LoginView,
      },
      children: [
        {
          path: "/login",
          name: "login",
          component: LoginViewComponent
        },
        {
          path: "/entrar",
          name: "entrarEmail",
          component: EntrarViewComponent
        },
      ]
    },
    {
      path: "/home",
      alias: "/",
      name: "home",
      components: {
        default: HomeView
      },
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
      redirect: "/market/loja/inicio",
      meta: { isAuth: true },
      component: MarketView,
      children: [
        {
          path: "/market/loja/inicio",
          name: "loja",
          meta: { isAuth: true },
          component: MarketLojaInicio,
        },
        {
          path: "anuncios",
          name: "anuncios",
          meta: { isAuth: true },
          component: AnunciosView,
        },
      ]
    },
    {
      path: "/vendas",
      name: "vendas",
      meta: { isAuth: true },
      component: VendasView,
    },
    {
      path: "/vendas/relatorio",
      name: "vendasRelatorio",
      meta: { isAuth: true },
      component: VendasRelatorioView
    },
    {
      path: "/sparks",
      name: "sparks",
      component: SparksView
    },
    {
      path: "/notificacoes",
      name: "notificacoes",
      meta: { isAuth: true },
      component: NotificacoesView
    },
    {
      path: "/buscar",
      name: "buscar",
      component: SearchView,
      children: [
        {
          path: "/buscar/",
          name: "suggestions",
          component: Suggestions
        },
        {
          path: "/buscar/:productName",
          name: "productName",
          component: SearchResults
        }
      ]

    },
    {
      path: "/favoritos",
      name: "favoritos",
      meta: { isAuth: true },
      component: FavoritosView
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

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('is-auth')) return next()

    return next({ path: '/login' })
  }

  return next()
})


export default router
