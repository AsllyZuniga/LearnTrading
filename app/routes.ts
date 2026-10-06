import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    id: "home",
    file: "routes/home.tsx",
  },
  {
    path: "/dashboard",
    id: "dashboard",
    file: "routes/dashboard.tsx",
  },

  {
    path: "/ruta",
    id: "ruta",
    file: "routes/ruta.tsx",
  },
  {
    path: "/ruta/:levelSlug",
    id: "nivel",
    file: "routes/ruta.nivel.tsx",
  },
  {
    path: "/ruta/:levelSlug/:lessonSlug",
    id: "leccion",
    file: "routes/ruta.leccion.tsx",
  },

  {
    path: "/diccionario",
    id: "diccionario",
    file: "routes/diccionario.tsx",
  },
  {
    path: "/diccionario/:termSlug",
    id: "termino",
    file: "routes/diccionario.termino.tsx",
  },

  {
    path: "/blog",
    id: "blog",
    file: "routes/blog.tsx",
  },
  {
    path: "/blog/:postSlug",
    id: "articulo",
    file: "routes/blog.articulo.tsx",
  },

  {
    path: "/simulador",
    id: "simulador",
    file: "routes/simulador.tsx",
  },
  {
    path: "/graficos",
    id: "graficos",
    file: "routes/graficos.tsx",
  },
  {
    path: "/recursos",
    id: "recursos",
    file: "routes/recursos.tsx",
  },

  {
    path: "/aviso-legal",
    id: "aviso-legal",
    file: "routes/aviso-legal.tsx",
  },
  {
    path: "/privacidad",
    id: "privacidad",
    file: "routes/privacidad.tsx",
  },

  {
    path: "*",
    id: "not-found",
    file: "routes/not-found.tsx",
  },
] satisfies RouteConfig;