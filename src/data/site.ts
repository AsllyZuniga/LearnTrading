import type { Category, Level } from "~/types";
import type { SiteConfig } from "~/types/site";

export const site: SiteConfig = {
  name: "Trading Academy",
  shortName: "Trading Academy",
  tagline: "Aprende Trading desde cero",
  description:
    "Plataforma educativa para aprender trading, forex, criptomonedas y análisis técnico desde cero. Lecciones progresivas, gráficos explicativos, diccionario y simulador. Sin promesas de resultados.",
  url: "https://tradingacademy.example.com",
  locale: "es_ES",
  language: "es",
  themeColor: { dark: "#070a10", light: "#f3f5f9" },
  ogImage: "/og/trading-academy.svg",
  social: [],
  nav: [
    {
      label: "Ruta de aprendizaje",
      to: "/ruta",
      description: "7 niveles progresivos, de qué es el trading a la psicología",
    },
    {
      label: "Diccionario",
      to: "/diccionario",
      description: "Términos de trading explicados uno por uno",
    },
    {
      label: "Simulador",
      to: "/simulador",
      description: "Calcula riesgo, tamaño de posición y relación riesgo/beneficio",
    },
    {
      label: "Gráficos",
      to: "/graficos",
      description: "Ejemplos interactivos de velas, soporte y resistencia",
    },
    {
      label: "Blog",
      to: "/blog",
      description: "Artículos sobre qué es Bitcoin, Forex, brokers y más",
    },
  ],
  footer: [
    {
      title: "Aprender",
      links: [
        { label: "Ruta de aprendizaje", to: "/ruta" },
        { label: "Diccionario", to: "/diccionario" },
        { label: "Simulador educativo", to: "/simulador" },
        { label: "Laboratorio de gráficos", to: "/graficos" },
      ],
    },
    {
      title: "Niveles",
      links: [
        { label: "1 · Fundamentos", to: "/ruta/nivel-1-fundamentos" },
        { label: "2 · Gráficos", to: "/ruta/nivel-2-graficos" },
        { label: "3 · Gestión de operaciones", to: "/ruta/nivel-3-gestion-de-operaciones" },
        { label: "4 · Análisis técnico", to: "/ruta/nivel-4-analisis-tecnico" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Blog", to: "/blog" },
        { label: "Aviso legal", to: "/aviso-legal" },
        { label: "Privacidad", to: "/privacidad" },
      ],
    },
  ],
  ads: {
    enabled: false,
    labels: {
      top: "Espacio publicitario",
      sidebar: "Espacio publicitario",
      "in-article": "Publicidad",
      "blog-inline": "Publicidad",
      newsletter: "Espacio publicitario",
    },
  },
  newsletter: {
    enabled: false,
    cta: "Recibir la próxima lección",
    success:
      "¡Suscripción registrada en este dispositivo! era un prototipo, no se envió ningún correo.",
    legal: "Sin spam. Puedes darte de baja en cualquier momento.",
  },
  premium: { enabled: false },
};

export const categories: Category[] = [
  {
    id: "fundamentos",
    label: "Fundamentos",
    shortLabel: "Fundamentos",
    description: "Qué es el trading, los mercados y los conceptos básicos.",
  },
  {
    id: "mercados",
    label: "Mercados",
    shortLabel: "Mercados",
    description: "Forex, acciones, materias primas y criptomonedas.",
  },
  {
    id: "graficos",
    label: "Gráficos",
    shortLabel: "Gráficos",
    description: "Velas japonesas, tendencias, soporte y resistencia.",
  },
  {
    id: "operaciones",
    label: "Gestión de operaciones",
    shortLabel: "Operaciones",
    description: "Entrada, stop loss, take profit y tamaño de posición.",
  },
  {
    id: "analisis-tecnico",
    label: "Análisis técnico",
    shortLabel: "Análisis técnico",
    description: "Cómo se estudian los gráficos y los patrones.",
  },
  {
    id: "indicadores",
    label: "Indicadores",
    shortLabel: "Indicadores",
    description: "RSI, MACD, medias móviles, Bollinger y Fibonacci.",
  },
  {
    id: "estrategias",
    label: "Estrategias",
    shortLabel: "Estrategias",
    description: "Pautas educativas de entrada y salida.",
  },
  {
    id: "gestion-riesgo",
    label: "Gestión del riesgo",
    shortLabel: "Riesgo",
    description: "Controlar el capital y las pérdidas.",
  },
  {
    id: "psicologia",
    label: "Psicología",
    shortLabel: "Psicología",
    description: "Emociones, hábitos y disciplina.",
  },
  {
    id: "broker",
    label: "Brokers",
    shortLabel: "Brokers",
    description: "Cómo funciona un intermediario y sus costes.",
  },
  {
    id: "financiero",
    label: "Conceptos financieros",
    shortLabel: "Financiero",
    description: "Lenguaje económico que te vas a encontrar en los mercados.",
  },
];

export const categoryMap = new Map(categories.map((c) => [c.id, c]));

export const levels: Level[] = [
  {
    id: 1,
    slug: "nivel-1-fundamentos",
    title: "Fundamentos",
    tagline: "Qué es el trading y en qué mercados ocurre",
    description:
      "El punto de partida: qué se compra, quién te compra, por qué existen los mercados y qué significan precio, volumen y liquidez. No hace falta ningún conocimiento previo.",
    icon: "Compass",
    accent: "brand",
  },
  {
    id: 2,
    slug: "nivel-2-graficos",
    title: "Gráficos",
    tagline: "Leer una vela japonesa sin adivinar",
    description:
      "Cómo se lee un gráfico de precios, qué significa cada parte de una vela, qué son las temporalidades y dónde se localizan las zonas de soporte y resistencia.",
    icon: "CandlestickChart",
    accent: "bull",
  },
  {
    id: 3,
    slug: "nivel-3-gestion-de-operaciones",
    title: "Gestión de operaciones",
    tagline: "Entrada, stop loss, take profit y costes",
    description:
      "Las tres decisiones de cada operación: dónde entrar, dónde se asume la pérdida y dónde tomar el beneficio. Incluye apalancamiento, margen, spread y comisiones.",
    icon: "ShieldCheck",
    accent: "bear",
  },
  {
    id: 4,
    slug: "nivel-4-analisis-tecnico",
    title: "Análisis técnico",
    tagline: "Herramientas para leer el movimiento",
    description:
      "Medias móviles, RSI, MACD, Bandas de Bollinger, Fibonacci y patrones gráficos. Qué mide cada indicador y qué límites tiene.",
    icon: "LineChart",
    accent: "accent",
  },
  {
    id: 5,
    slug: "nivel-5-estrategias",
    title: "Estrategias",
    tagline: "Pautas operativas sobre el gráfico",
    description:
      "Cinco o seis estrategias educativas explicadas paso a paso sobre gráficos de ejemplo: qué buscan, cuándo se aplican y por qué fallan.",
    icon: "Layers",
    accent: "brand",
  },
  {
    id: 6,
    slug: "nivel-6-gestion-del-riesgo",
    title: "Gestión del riesgo",
    tagline: "Sobrevivir es el objetivo",
    description:
      "Riesgo por operación, drawdown, rachas de pérdidas, diversificación y capital. La sección más importante del recorrido.",
    icon: "LifeBuoy",
    accent: "warn",
  },
  {
    id: 7,
    slug: "nivel-7-psicologia",
    title: "Psicología",
    tagline: "La parte que nadie te cuenta",
    description:
      "FOMO, sobreoperar, miedo y codicia. Cómo se forman los hábitos que te hacen perder dinero y cómo sustituirlos con disciplina.",
    icon: "Brain",
    accent: "bear",
  },
];

export const levelMap = new Map(levels.map((l) => [l.slug, l]));

export const LEVEL_ACCENT_CLASS: Record<
  Level["accent"],
  { text: string; bg: string; border: string; dot: string }
> = {
  brand: {
    text: "text-brand",
    bg: "bg-brand/10",
    border: "border-brand/25",
    dot: "bg-brand",
  },
  bull: {
    text: "text-bull",
    bg: "bg-bull/10",
    border: "border-bull/25",
    dot: "bg-bull",
  },
  bear: {
    text: "text-bear",
    bg: "bg-bear/10",
    border: "border-bear/25",
    dot: "bg-bear",
  },
  warn: {
    text: "text-warn",
    bg: "bg-warn/10",
    border: "border-warn/25",
    dot: "bg-warn",
  },
  accent: {
    text: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/25",
    dot: "bg-accent",
  },
};

export const DISCLAIMER_SHORT =
  "Datos ficticios con fines exclusivamente educativos. El trading implica riesgo de pérdida de capital.";

export const DISCLAIMER_LONG =
  "Trading Academy es un proyecto educativo. No somos un broker, no gestionamos dinero y no operamos por ti. Todos los precios, gráficos y escenarios que aparecen en el sitio son datos inventados con fines didácticos y no representan resultados reales ni garantías de ningún tipo. Invertir o operar en mercados financieros supone un riesgo de pérdida de capital.";