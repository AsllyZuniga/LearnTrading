import type { Lesson } from "~/types";
import { buildPreset, buildScenario } from "../charts/presets";

export const level6Lessons: Lesson[] = [
  {
    slug: "riesgo-por-operacion",
    levelId: 6,
    order: 1,
    title: "Riesgo por operación",
    shortTitle: "Riesgo por operación",
    category: "gestion-riesgo",
    tags: ["riesgo fijo", "gestión del riesgo", "tamaño de posición", "capital"],
    summary:
      "Cómo fijar un porcentaje pequeño y constante del capital en cada operación y por qué esa única regla es la que sostiene una serie larga.",
    keywords: [
      "riesgo por operación",
      "riesgo fijo porcentaje",
      "cuánto arriesgar por operación",
      "regla del 1 %",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-23",
    explanation: {
      intro:
        "Arriesgar siempre el mismo porcentaje pequeño del capital, por ejemplo el 1 %, convierte una idea difusa en una cifra exacta: antes de entrar ya sabes cuánto puedes perder cuántas pérdidas seguidas puedes soportar.",
      paragraphs: [
        "El riesgo fijo significa que cada operación arriesga la misma proporción del capital, no la misma cantidad de confianza. Con una cuenta ficticia de 5.000 y el 1 %, cada operación arriesga 50 como máximo. Ese número no cambia porque una idea te parezca mejor que otra: es el límite que sostiene toda la serie.",
        "De ese riesgo sale el tamaño de la posición. La distancia al stop decide cuántas unidades caben dentro de esos 50: si el stop está a 2 unidades por debajo de la entrada, caben 25 unidades. El tamaño no es una elección, es el resultado de una división.",
        "Por qué protege de las rachas: tras una pérdida el capital queda en 4.950 y el siguiente 1 % son 49,50. La cifra en dinero se ajusta sola con el saldo, así que ninguna racha puede deteriorar la cuenta más allá de lo que el sistema ya calculó.",
        "El porcentaje no es mágico. El 1 % o el 0,5 % son valores habituales porque toleran rachas largas; arriesgar el 5 % por operación significa que seis pérdidas seguidas cuestan en torno a un tercio del capital, y ahí la mayoría de los planes terminan antes de tiempo.",
      ],
      bullets: [
        "Riesgo en dinero = Capital × Porcentaje por operación.",
        "Tamaño = Riesgo en dinero ÷ Distancia al stop.",
        "El porcentaje es siempre el mismo; la cifra en dinero se recalcula tras cada cierre.",
        "Diez pérdidas seguidas al 1 % cuestan aproximadamente el 9,6 % del capital.",
      ],
    },
    technical: {
      term: "Riesgo fijo por operación",
      body: "El riesgo fijo por operación es una norma de gestión que limita la pérdida de cualquier operación a una proporción fija del capital vigente. Se fija antes de empezar a operar, se aplica por igual a todas las operaciones y solo se revisa cuando el capital cambia de forma relevante. Su función es matemática: al mantener el porcentaje constante, ninguna racha puede con la cuenta entera.",
      formula: "Riesgo en dinero = Capital × Porcentaje por operación",
      gloss:
        "Con 5.000 y el 1 %, el riesgo máximo son 50. Si la cuenta sube a 6.000, ese mismo 1 % ya son 60.",
    },
    example: {
      title: "De la cuenta al tamaño, en dos pasos",
      narrative:
        "Cuenta ficticia de 5.000 con el 1 % de riesgo, es decir 50 por operación. El gráfico muestra una entrada en 100 con stop en 98, o sea 2 unidades de riesgo por unidad comprada. Dividiendo 50 entre 2 salen 25 unidades: si el precio llega al objetivo en 106, la operación gana 25 × 6 = 150; si toca el stop, pierde exactamente 50.",
      bullets: [
        "Capital: 5.000.",
        "Riesgo permitido: 50 (1 %).",
        "Distancia al stop: 2 unidades, así que el tamaño es de 25 unidades.",
        "Objetivo en 106: ganancia de 150, tres veces el riesgo asumido.",
      ],
    },
    chart: buildScenario("riesgo-por-operacion", {
      caption: "Ejemplo ficticio: 2 unidades de riesgo y 6 de recorrido",
      description:
        "La entrada en 100 con stop en 98 fija un riesgo de 2 por unidad comprada. Conocido ese número, el tamaño de la posición es la división del riesgo permitido entre esas 2 unidades.",
      entry: 100,
      stopLoss: 98,
      takeProfit: 106,
      outcome: "tp",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 98,
      takeProfit: 106,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 98 y objetivo en 106: 2 unidades de riesgo y 6 de recorrido. Con 5.000 de capital y el 1 %, el riesgo máximo son 50, así que el tamaño que encaja es de 25 unidades. El precio llega al objetivo y la operación suma 150, exactamente tres veces el riesgo asumido.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Cambiar el porcentaje según la convicción",
        why: "Un porcentaje que sube cuando la idea apetece y baja cuando no, hace que la peor racha coincida siempre con el tamaño más grande.",
        fix: "Fija un único porcentaje, por ejemplo el 1 %, y no lo toques durante toda la serie.",
      },
      {
        mistake: "Calcular el riesgo después de abrir",
        why: "Si el tamaño se decide tras enviar la orden, la pérdida real puede superar el límite que querías respetar.",
        fix: "Mide la distancia al stop, divide y envía la orden ya con el tamaño correcto.",
      },
      {
        mistake: "Aumentar el porcentaje para recuperar antes",
        why: "Tras una pérdida el capital es menor, así que el mismo porcentaje ya arriesga menos dinero; subirlo solo amplifica el golpe siguiente.",
        fix: "Deja que el porcentaje vuelva a su valor normal y mide el progreso por series completas, no por un día.",
      },
    ],
    related: ["tamano-de-posicion", "stop-loss", "drawdown"],
    glossary: ["riesgo", "capital", "stop-loss", "posicion"],
    quiz: [
      {
        id: "q1",
        question: "Con un capital de 8.000 y un riesgo fijo del 1 %, ¿cuánto arriesgas como máximo en cada operación?",
        options: ["80", "100", "400", "8.000"],
        correct: 0,
        explanation:
          "El 1 % de 8.000 son 80; esa es la pérdida máxima permitida por operación.",
      },
      {
        id: "q2",
        question:
          "Tu cuenta tiene 5.000, arriesgas el 1 % y el stop está a 2 unidades del precio. ¿Qué tamaño encaja?",
        options: ["5 unidades", "25 unidades", "50 unidades", "250 unidades"],
        correct: 1,
        explanation: "50 de riesgo dividido entre 2 por unidad da 25 unidades.",
      },
      {
        id: "q3",
        question: "¿Por qué el riesgo en dinero se recalcula tras cada operación?",
        options: [
          "Porque el broker lo exige cada noche",
          "Porque el capital ha cambiado y el porcentaje se aplica al nuevo saldo",
          "Porque el stop se mueve solo",
          "Para adaptarlo al ánimo del día",
        ],
        correct: 1,
        explanation:
          "El porcentaje es fijo, pero se calcula sobre el saldo vigente, que sube o baja con cada cierre.",
      },
      {
        id: "q4",
        question:
          "Diez pérdidas seguidas arriesgando siempre el 1 % del capital implican:",
        options: [
          "La pérdida exacta del 10 % del capital",
          "Una pérdida de aproximadamente el 9,6 % del capital",
          "Que la cuenta queda a cero",
          "Que el siguiente riesgo debe subir al 2 %",
        ],
        correct: 1,
        explanation:
          "Cada pérdida se aplica a un capital menor: 0,99 elevado a 10 da 0,904, es decir un 9,6 % de pérdida total.",
      },
    ],
  },

  {
    slug: "drawdown",
    levelId: 6,
    order: 2,
    title: "Drawdown y curva de capital",
    shortTitle: "Drawdown",
    category: "gestion-riesgo",
    tags: ["drawdown", "curva de capital", "recuperación", "gestión del riesgo"],
    summary:
      "Qué mide el drawdown máximo, cómo se lee la curva de capital y por qué una caída grande exige una ganancia mucho mayor para volver al punto de partida.",
    keywords: [
      "qué es el drawdown",
      "drawdown máximo",
      "curva de capital",
      "cómo recuperar una pérdida",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-24",
    explanation: {
      intro:
        "El drawdown es la caída desde un máximo anterior hasta el punto más bajo siguiente. Mide lo que una cuenta pierde en su peor tramo y es la cifra que decide si puedes seguir operando con el mismo plan.",
      paragraphs: [
        "La curva de capital dibuja el saldo a lo largo del tiempo. Cada máximo deja un punto de referencia y la distancia hasta el siguiente mínimo es el drawdown de ese tramo. El drawdown máximo es el mayor de todos ellos, y por eso se usa como medida del peor caso que ya ha ocurrido, no del peor caso imaginable.",
        "La asimetría es la parte que suele sorprender. Una caída del 20 % exige un 25 % de subida para volver al inicio; una caída del 50 % exige un 100 %. La fórmula es siempre la misma: la ganancia necesaria es la pérdida dividida por el capital que queda.",
        "Con el capital mermado, el riesgo fijo también baja en dinero. Tras caer un 50 %, el 1 % del nuevo saldo es la mitad del 1 % original y cada operación recupera menos en términos absolutos. Por eso una caída grande no se recupera operando más fuerte, sino evitándola.",
        "El drawdown es, en el fondo, el precio de la estrategia. Ninguna serie de aciertos lo elimina del mapa: se reduce bajando el riesgo por operación y aceptando que habrá tramos en los que la curva baja durante semanas.",
      ],
      bullets: [
        "Drawdown = (Máximo anterior − Mínimo posterior) ÷ Máximo anterior.",
        "Caída del 10 % → +11,1 % para recuperar.",
        "Caída del 20 % → +25 % para recuperar.",
        "Caída del 50 % → +100 % para recuperar.",
      ],
    },
    technical: {
      term: "Drawdown máximo",
      body: "El drawdown mide la caída porcentual desde un máximo local hasta el mínimo posterior. El drawdown máximo de una cuenta es el mayor de esos valores dentro del periodo analizado. Se calcula sobre el capital en su punto más alto, no sobre el capital inicial, y por eso refleja exactamente lo que había que perder en el peor momento de la serie.",
      formula: "Drawdown = (Pico − Valle) ÷ Pico × 100 %",
      gloss:
        "De 1.000 a 500 hay un drawdown del 50 %; volver a 1.000 desde 500 exige ganar un 100 %.",
    },
    example: {
      title: "Volver al punto de partida",
      narrative:
        "Una cuenta ficticia pasa de 10.000 a 8.000: caída del 20 %, es decir 2.000. Para volver a 10.000 hace falta ganar 2.000 sobre los 8.000 que quedan, exactamente un 25 %. Si la curva sigue hasta 5.000, el drawdown acumulado es del 50 % y haría falta un 100 % sobre lo que queda, o sea doblar la cuenta.",
      bullets: [
        "10.000 → 8.000: −20 %, se necesita +25 %.",
        "10.000 → 5.000: −50 %, se necesita +100 %.",
        "10.000 → 9.000: −10 %, se necesita +11,1 %.",
        "Cada caída cuesta más porcentaje recuperar que la anterior.",
      ],
    },
    chart: buildPreset("tendencia-bajista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 108,
      outcome: "sl",
      narrative:
        "Entrada en 100 con stop en 96 y objetivo en 108: 4 unidades de riesgo y 8 de recorrido. Con 10.000 de capital y el 1 %, el riesgo máximo son 100 y el tamaño que encaja es de 25 unidades. El precio toca el stop y la operación pierde 100: la curva de capital queda en 9.900, un 1 % por debajo del máximo anterior, y ese pico pasa a ser la referencia del próximo drawdown.",
      capital: 10_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Medir el drawdown sobre el capital inicial",
        why: "El porcentaje correcto se calcula contra el máximo alcanzado; medirlo sobre el inicio oculta las caídas recientes y deja la cifra engañosa.",
        fix: "Actualiza el máximo de referencia cada vez que la cuenta marca un nuevo pico.",
      },
      {
        mistake: "Creer que una caída grande se recupera en proporción simétrica",
        why: "Un 50 % de pérdida no se recupera con un 50 % de ganancia: sobre los 500 que quedan, el 50 % son 250 y falta la mitad.",
        fix: "Aplica la fórmula pérdida ÷ capital restante antes de estimar cuánto tarda la recuperación.",
      },
      {
        mistake: "Subir el riesgo para salir del drawdown",
        why: "Con menos capital, arriesgar más amplía la caída y aleja todavía más el punto de partida.",
        fix: "Reduce el riesgo mientras la curva baja y mide el avance por operaciones, no por días.",
      },
    ],
    related: ["riesgo-por-operacion", "limites-de-perdida", "take-profit-y-riesgo-beneficio"],
    glossary: ["drawdown", "capital", "riesgo", "estrategia"],
    quiz: [
      {
        id: "q1",
        question: "Una cuenta cae de 10.000 a 7.500. ¿Cuál es el drawdown?",
        options: ["20 %", "25 %", "30 %", "33,3 %"],
        correct: 1,
        explanation: "(10.000 − 7.500) ÷ 10.000 = 25 % de caída desde el máximo.",
      },
      {
        id: "q2",
        question:
          "Tras caer un 50 %, ¿cuánto hay que ganar para volver al punto de partida?",
        options: ["50 %", "75 %", "100 %", "150 %"],
        correct: 2,
        explanation:
          "Si solo queda la mitad, hay que doblarla: 500 × 2 = 1.000, es decir un 100 %.",
      },
      {
        id: "q3",
        question: "¿Sobre qué cifra se calcula el drawdown?",
        options: [
          "Sobre el capital inicial de la cuenta",
          "Sobre el máximo alcanzado previamente",
          "Sobre el riesgo de la última operación",
          "Sobre el saldo del broker al final del mes",
        ],
        correct: 1,
        explanation:
          "La caída se mide desde el pico anterior, que es donde empezó realmente a perderse dinero.",
      },
      {
        id: "q4",
        question:
          "Una cuenta de 8.000 cae a 6.400. ¿Qué ganancia hace falta para volver a 8.000?",
        options: ["16 %", "20 %", "25 %", "32 %"],
        correct: 2,
        explanation:
          "La caída es del 20 %, pero sobre los 6.400 hacen falta 1.600, exactamente el 25 %.",
      },
    ],
  },

  {
    slug: "rachas-de-perdidas",
    levelId: 6,
    order: 3,
    title: "Rachas de pérdidas",
    shortTitle: "Rachas de pérdidas",
    category: "gestion-riesgo",
    tags: ["rachas", "probabilidad", "tasa de acierto", "gestión del riesgo"],
    summary:
      "Por qué una tasa de acierto del 50 % produce rachas largas de pérdidas de forma inevitable y cómo se anticipan con cálculo.",
    keywords: [
      "rachas de pérdidas",
      "tasa de acierto",
      "probabilidad de rachas",
      "mala racha en trading",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-25",
    explanation: {
      intro:
        "Con el 50 % de acierto, perder tres, cuatro o cinco operaciones seguidas no es mala suerte: es lo que la aritmética manda que ocurra alguna vez. Una racha no significa que el sistema falle, significa que la probabilidad todavía no se ha repartido.",
      paragraphs: [
        "Cada operación con un 50 % de acierto es una moneda al aire. La probabilidad exacta de cinco pérdidas seguidas es 0,5 elevado a 5, es decir 1 entre 32: una vez cada 32 bloques de cinco operaciones, por término medio.",
        "En una serie larga esas rachas dejan de ser improbable. Con 100 operaciones se revisan unos 96 bloques solapados de cinco, y la probabilidad estimada de ver al menos una racha de cinco pérdidas ronda el 95 %. En la práctica, en cualquier mes de operativa normal aparecerá alguna.",
        "Bajar la tasa de acierto agrava el cálculo. Con un 40 % de acierto, la probabilidad de cinco pérdidas seguidas sube al 7,8 % por bloque, casi una vez cada 13. Y a mayor acierto las rachas se acortan, pero no desaparecen: incluso acertando el 70 %, una racha de tres o cuatro es perfectamente posible.",
        "La respuesta no es adivinar cuándo vendrá la racha, sino sobrevivirla. De ahí el riesgo fijo: si cada pérdida cuesta el 1 %, cinco pérdidas seguidas cuestan aproximadamente el 4,9 % del capital y la serie continúa igual que antes.",
      ],
      bullets: [
        "Cinco pérdidas seguidas con 50 % de acierto: 1 de cada 32, exactamente un 3,1 %.",
        "Con 40 % de acierto esa misma racha sube al 7,8 % por bloque de cinco.",
        "Diez pérdidas seguidas con 50 %: 1 de cada 1.024.",
        "Cinco pérdidas al 1 % de riesgo cuestan cerca del 4,9 % del capital.",
      ],
    },
    technical: {
      term: "Racha y probabilidad de secuencia",
      body: "Una racha es una secuencia consecutiva de resultados del mismo tipo. En una serie de operaciones independientes, la probabilidad de n pérdidas seguidas es la probabilidad de perder elevada a n. Los bloques consecutivos se solapan, así que la probabilidad de que al menos una racha aparezca en una serie larga se acerca al 100 % a medida que crece el número de operaciones, aunque cada bloque individual sea poco probable.",
      formula: "P(n pérdidas seguidas) = P(pérdida)^n",
      gloss:
        "Con un 50 % de acierto, cinco pérdidas seguidas valen 0,5^5 = 0,03125, es decir 1 de cada 32.",
    },
    example: {
      title: "Un mes cualquiera con el 50 % de acierto",
      narrative:
        "Imagina 40 operaciones en las que aciertas 20 y fallas 20. Repartidas al azar, esas 20 pérdidas incluyen casi siempre alguna racha de tres o cuatro seguidas, y es habitual encontrar una de cinco. Nada ha cambiado en la estrategia: solo se ha cumplido la distribución que la probabilidad ya anunciaba.",
      bullets: [
        "40 operaciones, 20 aciertos y 20 fallos: racha habitual de 3 a 5.",
        "Con 40 % de acierto la misma racha sería más larga y más frecuente.",
        "Medir la racha media evita confundirla con un fallo del sistema.",
      ],
    },
    chart: buildPreset("volatilidad"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 98,
      takeProfit: 104,
      outcome: "sl",
      narrative:
        "Entrada en 100 con stop en 98 y objetivo en 104: 2 unidades de riesgo y 4 de recorrido. Con 4.000 de capital y el 1 %, el riesgo máximo son 40 y el tamaño que encaja es de 20 unidades. La operación toca el stop y pierde 40. Cinco pérdidas idénticas seguidas restarían unos 200, en torno al 4,9 % del capital, y la cuenta seguiría en pie para la operación número seis.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Interpretar una racha como el final de la estrategia",
        why: "Con el 50 % de acierto, cinco pérdidas seguidas se esperan una vez cada 32 bloques; cambiar de sistema por una racha corta abandona la ventaja justo antes de su turno.",
        fix: "Evalúa series completas de al menos 50 operaciones y no decidas entre una racha y otra.",
      },
      {
        mistake: "Arriesgar más tras una pérdida para recuperar rápido",
        why: "La racha puede alargarse y cada pérdida adicional cuesta más capital del que habías previsto.",
        fix: "Mantén el mismo riesgo por operación durante toda la racha, sin excepciones.",
      },
      {
        mistake: "Confundir tasa de acierto con rentabilidad",
        why: "Se puede acertar el 60 % y perder dinero si las ganancias son menores que las pérdidas.",
        fix: "Mira la tasa de acierto junto con la relación riesgo/beneficio promedio de tu registro.",
      },
    ],
    related: ["riesgo-por-operacion", "drawdown", "tamano-de-posicion"],
    glossary: ["racha-perdedora", "riesgo", "disciplina", "psicologia"],
    quiz: [
      {
        id: "q1",
        question:
          "Con un 50 % de acierto, ¿cuál es la probabilidad exacta de cinco pérdidas seguidas en un bloque de cinco?",
        options: ["1 de cada 16", "1 de cada 32", "1 de cada 100", "1 de cada 1.024"],
        correct: 1,
        explanation: "0,5 elevado a 5 es 0,03125, es decir 1 de cada 32.",
      },
      {
        id: "q2",
        question:
          "Si la tasa de acierto baja al 40 %, la probabilidad de cinco pérdidas seguidas:",
        options: [
          "se mantiene exactamente igual",
          "sube al 7,8 % por bloque de cinco",
          "baja al 3,1 %",
          "desaparece por completo",
        ],
        correct: 1,
        explanation:
          "Con un 60 % de probabilidad de perder en cada operación, 0,6^5 = 0,0778, casi 1 de cada 13.",
      },
      {
        id: "q3",
        question: "Tras cinco pérdidas seguidas arriesgando siempre el 1 %, ¿qué ocurre?",
        options: [
          "El capital se ha reducido en torno al 4,9 %",
          "La cuenta queda a cero",
          "Hay que subir el riesgo al 2 %",
          "La siguiente operación tiene más probabilidades de acertar",
        ],
        correct: 0,
        explanation:
          "Cada pérdida se aplica a un capital menor, así que cinco pérdidas seguidas cuestan un 4,9 %, no un 5 % exacto.",
      },
      {
        id: "q4",
        question: "¿Cuál es la forma correcta de afrontar una racha de pérdidas?",
        options: [
          "Doblar el tamaño tras cada pérdida",
          "Reducir el riesgo por operación hasta que la racha pase",
          "Mantener el riesgo fijo y evaluar la serie completa",
          "Dejar de operar durante un mes entero",
        ],
        correct: 2,
        explanation:
          "El riesgo fijo mantiene la cuenta estable y la evaluación por series evita decisiones tomadas en plena racha.",
      },
    ],
  },

  {
    slug: "diversificacion",
    levelId: 6,
    order: 4,
    title: "Diversificación",
    shortTitle: "Diversificación",
    category: "gestion-riesgo",
    tags: ["diversificación", "correlación", "reparto de riesgo", "cartera"],
    summary:
      "Cómo repartir el riesgo entre mercados y estrategias con correlaciones bajas y por qué dos operaciones correlacionadas no son dos operaciones.",
    keywords: [
      "qué es la diversificación",
      "correlación entre mercados",
      "repartir el riesgo",
      "diversificar una cartera",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-26",
    explanation: {
      intro:
        "Diversificar no es tener muchas operaciones abiertas: es que esas operaciones no hagan lo mismo al mismo tiempo. Si dos posiciones suben y bajan juntas, el riesgo que suman es casi el de una sola.",
      paragraphs: [
        "La correlación mide en qué grado dos activos se mueven en la misma dirección. Va de −1 a +1: con 1,0 los movimientos coinciden, con 0 no guardan relación y con −1 se compensan. El riesgo combinado de dos posiciones del mismo tamaño depende solo de ese número.",
        "Con correlación 1,0 el riesgo combinado es el 100 % del de una sola posición: la segunda no aporta nada. Con correlación 0 baja al 70,7 %, porque los movimientos independientes se compensan parcialmente. Con 0,8 solo baja al 94,9 %, una reducción de poco más del 5 %: dos operaciones muy correlacionadas siguen siendo, en la práctica, una sola.",
        "La correlación no es estable. Dos índices que durante meses se movieron juntos pueden separarse en una crisis, y una materia prima puede dejar de seguir a su moneda. Se mide sobre la historia reciente y conviene asumir que empeorará justo cuando más se necesite.",
        "La diversificación útil es doble: entre activos con correlación baja y entre estrategias con lógicas distintas. Una operación de tendencia y otra de rango sobre el mismo activo pueden compartir destino; dos señales opuestas en mercados poco relacionados reducen mucho más el riesgo.",
      ],
      bullets: [
        "Correlación 1,0: riesgo combinado del 100 %.",
        "Correlación 0: riesgo combinado del 70,7 %.",
        "Correlación 0,8: riesgo combinado del 94,9 %, solo un 5,1 % menos.",
        "Dos posiciones correlacionadas no son dos operaciones: son una con doble tamaño.",
      ],
    },
    technical: {
      term: "Correlación y riesgo combinado",
      body: "La correlación es el coeficiente que describe cómo se relacionan los movimientos de dos series de precios. El riesgo combinado de dos posiciones iguales se obtiene mezclando la varianza de cada una con su coeficiente: a medida que sube hacia 1, la diversificación deja de aportar y el conjunto se comporta como una posición única ampliada.",
      formula: "Riesgo combinado = Riesgo individual × √((1 + Correlación) ÷ 2)",
      gloss:
        "Con correlación 0,8 la raíz de 0,9 da 0,949: el riesgo conjunto es el 94,9 % del de una sola posición.",
    },
    example: {
      title: "Dos posiciones iguales, tres escenarios",
      narrative:
        "Dos posiciones del mismo tamaño en dos activos distintos. Si la correlación entre ambos es 1,0, el riesgo del conjunto es exactamente el que arriesgarías con una sola: 500 y 500 bien alineados son 1.000 en riesgo. Si la correlación es 0, el riesgo combinado baja a unos 707, es decir un 70,7 %. Si sube a 0,8, se queda en unos 949, casi lo mismo que sin diversificar.",
      bullets: [
        "Correlación 1,0 → 1.000 de riesgo combinado (100 %).",
        "Correlación 0,8 → 949 de riesgo combinado (94,9 %).",
        "Correlación 0 → 707 de riesgo combinado (70,7 %).",
        "La reducción real viene de correlaciones bajas, no del número de posiciones.",
      ],
    },
    chart: buildPreset("cripto-24h"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 98,
      takeProfit: 104,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 98 y objetivo en 104: 2 unidades de riesgo y 4 de recorrido. Con 8.000 de capital y el 1 %, el riesgo máximo son 80 y el tamaño que encaja es de 40 unidades. La operación llega al objetivo y suma 160. Si abrieras una segunda posición correlacionada al 0,9 con el mismo tamaño, ese resultado se repetiría casi siempre en la misma dirección y tu riesgo real sería prácticamente el doble.",
      capital: 8_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Contar operaciones en lugar de riesgo",
        why: "Abrir cinco posiciones con correlación 0,9 es abrir una posición cinco veces más grande, no cinco ideas distintas.",
        fix: "Suma el riesgo ponderado por la correlación, no el número de órdenes abiertas.",
      },
      {
        mistake: "Diversificar dentro del mismo mercado y la misma dirección",
        why: "Cuando el mercado gira, todas las posiciones compradoras se mueven juntas y la cartera entera cae a la vez.",
        fix: "Reparte entre mercados, direcciones y estrategias con lógicas realmente distintas.",
      },
      {
        mistake: "Suponer que la correlación histórica se mantiene",
        why: "Las correlaciones suben justo en los momentos de tensión, cuando la diversificación más se necesita.",
        fix: "Comprueba las correlaciones en periodos de estrés y deja un margen de seguridad en el tamaño.",
      },
    ],
    related: ["reparto-de-capital", "que-es-una-estrategia", "que-es-un-mercado-financiero"],
    glossary: ["diversificacion", "correlacion", "capital", "posicion", "volatilidad"],
    quiz: [
      {
        id: "q1",
        question:
          "Dos posiciones del mismo tamaño con correlación 1,0. ¿Qué ocurre con el riesgo del conjunto?",
        options: [
          "Se reduce a la mitad",
          "Es prácticamente el mismo que el de una sola posición",
          "Se anula por completo",
          "Depende del broker elegido",
        ],
        correct: 1,
        explanation:
          "Con correlación 1,0 los movimientos coinciden, así que las dos posiciones ganan y pierden juntas como una sola ampliada.",
      },
      {
        id: "q2",
        question: "Con correlación 0,8, el riesgo combinado de dos posiciones iguales es:",
        options: [
          "El 50 % del riesgo individual",
          "El 80 % del riesgo individual",
          "El 94,9 % del riesgo individual",
          "El 180 % del riesgo individual",
        ],
        correct: 2,
        explanation: "√((1 + 0,8) ÷ 2) = √0,9 = 0,949, es decir un 94,9 %.",
      },
      {
        id: "q3",
        question: "¿Cuál es la señal de que tu cartera no está diversificada de verdad?",
        options: [
          "Tener muchas operaciones abiertas",
          "Que todas ganen y pierdan al mismo tiempo",
          "Usar varios indicadores a la vez",
          "Operar en varias temporalidades",
        ],
        correct: 1,
        explanation:
          "Si todo se mueve en la misma dirección, el número de operaciones no importa: el riesgo es uno solo.",
      },
      {
        id: "q4",
        question:
          "Diversificas entre cinco criptomonedas muy correlacionadas entre sí. ¿Cuánto reduces realmente el riesgo?",
        options: [
          "Casi nada, porque las cinco se mueven juntas",
          "Exactamente un 80 %",
          "Exactamente la mitad",
          "Lo eliminas por completo",
        ],
        correct: 0,
        explanation:
          "Con correlaciones cercanas a 1, el riesgo combinado se queda muy cerca del de una sola posición.",
      },
    ],
  },

  {
    slug: "reparto-de-capital",
    levelId: 6,
    order: 5,
    title: "Reparto de capital",
    shortTitle: "Reparto de capital",
    category: "gestion-riesgo",
    tags: ["reparto de capital", "colchón de margen", "reserva", "gestión del riesgo"],
    summary:
      "Cómo dividir el capital entre la cuenta operativa, el colchón de margen y la reserva, y por qué arriesgarlo todo en una sola idea acaba mal.",
    keywords: [
      "cómo repartir el capital",
      "colchón de margen",
      "reserva de capital",
      "gestión de capital",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-27",
    explanation: {
      intro:
        "El capital no es una bolsa única: son tres bolsas con funciones distintas. La que operas, la que sostiene las posiciones abiertas y la que no se toca. Mezclarlas es el error más caro de todos.",
      paragraphs: [
        "La cuenta operativa es el dinero destinado a generar operaciones. De ella sale el riesgo fijo de cada operación y de ella depende el tamaño de las posiciones. Es la única que cotiza día a día y la única que se mira al cerrar la sesión.",
        "El colchón de margen es la reserva que sostiene las posiciones abiertas y absorbe los movimientos adversos. Con apalancamiento, un requisito de margen sobrepasado obliga a cerrar posiciones desde niveles que, en una cuenta sin colchón, ya serían insoportables.",
        "La reserva es capital que no entra en el mercado. Sirve para afrontar meses malos sin reducir el riesgo de golpe, para cubrir costes fijos y para evitar la tentación de operar con dinero que hace falta en otra parte.",
        "El error clásico es meterlo todo en una sola idea. Con un stop bien colocado, esa operación solo puede costar el riesgo que hayas fijado; pero sin stop o con uno muy alejado, puede costar la cuenta entera.",
      ],
      bullets: [
        "Ejemplo de reparto: 70 % operativa, 20 % colchón y 10 % reserva.",
        "Con 10.000: 7.000 para operar, 2.000 de colchón y 1.000 intactos.",
        "Ningún bloque debe depender del resultado de una sola operación.",
        "El colchón y la reserva no se mueven al mercado; solo entran con una decisión consciente.",
      ],
    },
    technical: {
      term: "Reparto de capital y colchón",
      body: "El reparto de capital divide el saldo en bloques con destinos definidos: operación, margen y reserva. El colchón de margen es el saldo que permite mantener posiciones abiertas sin que un movimiento adverso active un cierre forzoso. La reserva es liquidez fuera del mercado cuyo propósito es que la cuenta operativa pueda reducir su ritmo sin quedarse sin opciones.",
      formula: "Capital operativo = Capital total × Porcentaje operativo",
      gloss:
        "Con 10.000 y un reparto del 70 %, la operativa es de 7.000; conviene decidir si el riesgo por operación se calcula sobre el total o sobre esa parte y no cambiarlo en mitad de la serie.",
    },
    example: {
      title: "Tres bolsas con 10.000",
      narrative:
        "Un capital ficticio de 10.000 se reparte en 7.000 de cuenta operativa, 2.000 de colchón de margen y 1.000 de reserva. Con el 1 % de riesgo sobre la operativa, cada operación arriesga 70. Diez pérdidas seguidas costarían en torno a 670 sobre esos 7.000, y aun así quedarían 3.000 fuera del mercado para seguir operando o para esperar.",
      bullets: [
        "Operativa: 7.000 (70 %) → riesgo del 1 % = 70 por operación.",
        "Colchón: 2.000 (20 %) → sostiene las posiciones abiertas.",
        "Reserva: 1.000 (10 %) → intacta hasta que haya una razón concreta.",
        "Diez pérdidas seguidas en la operativa cuestan cerca de 670 y no tocan el colchón ni la reserva.",
      ],
    },
    chart: buildScenario("reparto-de-capital", {
      caption: "Ejemplo ficticio: 4 unidades de riesgo y 14 de recorrido",
      description:
        "La entrada en 100 con stop en 96 fija un riesgo de 4 por unidad. Con ese número fijado antes de entrar, el tamaño es la división del riesgo permitido entre las 4 unidades.",
      entry: 100,
      stopLoss: 96,
      takeProfit: 110,
      outcome: "tp",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 110,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 96 y objetivo en 110: 4 unidades de riesgo y 14 de recorrido. Con 10.000 de capital y el 1 %, el riesgo máximo son 100 y el tamaño que encaja es de 25 unidades. La operación llega al objetivo y suma 350, pero ni siquiera un resultado así autoriza a meter el colchón o la reserva en la siguiente idea.",
      capital: 10_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Usar el colchón como capital de operación",
        why: "El colchón existe para sostener posiciones abiertas; si entra en el mercado, un movimiento adverso deja la cuenta sin margen y obliga a cerrar en el peor momento.",
        fix: "Bloquea esa parte en una subcuenta aparte y no la cuentes como capital operativo.",
      },
      {
        mistake: "Concentrarlo todo en una sola idea",
        why: "Una sola operación con un stop mal colocado o una noche de alta volatilidad puede consumir lo que costó meses acumular.",
        fix: "Limita el riesgo de cada operación al 1 % y reparte entre varias ideas poco correlacionadas.",
      },
      {
        mistake: "Recalcularte el reparto tras cada pérdida",
        why: "Mover dinero entre bloques tras un mal resultado es cambiar las reglas mientras se juega, y suele terminar con todo el capital en la operativa.",
        fix: "Fija el reparto al empezar el mes y solo lo revisas en una fecha programada.",
      },
    ],
    related: ["diversificacion", "riesgo-por-operacion", "apalancamiento-y-margen"],
    glossary: ["capital", "margen", "diversificacion", "apalancamiento", "riesgo"],
    quiz: [
      {
        id: "q1",
        question: "¿Para qué sirve el colchón de margen?",
        options: [
          "Para aumentar el tamaño de las posiciones",
          "Para sostener las posiciones abiertas frente a movimientos adversos",
          "Para pagar las comisiones del mes",
          "Para duplicar el beneficio",
        ],
        correct: 1,
        explanation:
          "El colchón absorbe las fluctuaciones de las posiciones abiertas y evita cierres forzados.",
      },
      {
        id: "q2",
        question:
          "Con 10.000 repartidos 70 % operativa, 20 % colchón y 10 % reserva, ¿cuánto hay en reserva?",
        options: ["700", "1.000", "2.000", "7.000"],
        correct: 1,
        explanation: "El 10 % de 10.000 son 1.000, la parte que no entra nunca en el mercado.",
      },
      {
        id: "q3",
        question: "¿Por qué no conviene meter el colchón en una operación?",
        options: [
          "Porque no genera intereses",
          "Porque si se pierde, la cuenta queda sin margen y puede cerrarse en el peor momento",
          "Porque el broker lo prohíbe siempre",
          "Porque la reserva lo impide",
        ],
        correct: 1,
        explanation:
          "Sin colchón, un movimiento adverso deja la cuenta sin respaldo y fuerza el cierre justo donde peor duele.",
      },
      {
        id: "q4",
        question: "¿Cuándo conviene revisar el reparto de capital?",
        options: [
          "Después de cada operación perdedora",
          "En una fecha programada, nunca en caliente",
          "Cada vez que aumentes el tamaño",
          "Nunca, se fija una sola vez",
        ],
        correct: 1,
        explanation:
          "Revisarlo en caliente suele significar mover dinero hacia la operativa tras una pérdida, que es exactamente lo que hay que evitar.",
      },
    ],
  },

  {
    slug: "relacion-riesgo-beneficio",
    levelId: 6,
    order: 6,
    title: "Relación riesgo/beneficio",
    shortTitle: "Riesgo/beneficio",
    category: "gestion-riesgo",
    tags: ["relación riesgo beneficio", "punto de equilibrio", "take profit", "gestión del riesgo"],
    summary:
      "Qué significan 1:1, 1:2 y 1:3, cuántas pérdidas compensa cada ganancia en cada caso y qué tasa de acierto hace falta para no perder dinero.",
    keywords: [
      "relación riesgo beneficio",
      "ratio riesgo beneficio",
      "punto de equilibrio",
      "cuántas pérdidas compensa una ganancia",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-28",
    explanation: {
      intro:
        "La relación riesgo/beneficio compara lo que arriesgas con lo que buscas. No predice nada: solo dice cuántas pérdidas puede absorber cada ganancia y, por tanto, cuánto acierto hace falta para no perder dinero.",
      paragraphs: [
        "Para calcularla se mira la distancia al stop y la distancia al objetivo. Si la entrada es 100, el stop 95 y el objetivo 110, arriesgas 5 y buscas 10: la relación es 1:2, es decir cada operación gana el doble de lo que puede perder.",
        "Las consecuencias son numéricas. Con 1:1, una ganancia compensa exactamente una pérdida, así que haría falta acertar más del 50 % solo para quedarse a cero. Con 1:2, dos pérdidas compensan una ganancia y el equilibrio llega con un 33,3 % de aciertos. Con 1:3, tres pérdidas compensan una y basta un 25 %.",
        "El ejemplo concreto ayuda: diez operaciones con 1:2 y cuatro aciertos dan 4 × 2 = 8 ganado y 6 × 1 = 6 perdido, es decir 2 unidades netas. Con tres aciertos serían 6 frente a 7, una unidad en pérdida. Un solo acierto más cambia el signo del mes.",
        "Una relación mejor no es gratis: a medida que se exige más recorrido al objetivo, la operación tarda más en completarse y hay menos veces que la alcanza. Por eso se elige junto con la estrategia, no con el deseo, y se respeta una vez fijada.",
      ],
      bullets: [
        "1:1 → una ganancia compensa una pérdida; hace falta acertar más del 50 %.",
        "1:2 → dos pérdidas compensan una ganancia; equilibrio en el 33,3 %.",
        "1:3 → tres pérdidas compensan una ganancia; equilibrio en el 25 %.",
        "Acierto mínimo = 1 ÷ (1 + Relación riesgo/beneficio).",
      ],
    },
    technical: {
      term: "Ratio riesgo/beneficio y punto de equilibrio",
      body: "La relación riesgo/beneficio es el cociente entre la distancia hasta el stop y la distancia hasta el objetivo. Su inverso marca el punto de equilibrio: la tasa de acierto a partir de la cual las ganancias cubren las pérdidas. Por encima de ese umbral la serie es rentable antes de contar costes; por debajo pierde dinero, aunque la sensación sea de acertar a menudo.",
      formula: "Acierto de equilibrio = 1 ÷ (1 + Relación riesgo/beneficio)",
      gloss:
        "Con una relación 1:3, el equilibrio está en el 25 %: una ganancia de 3 compensa tres pérdidas de 1.",
    },
    example: {
      title: "Diez operaciones con la misma relación",
      narrative:
        "Imagina diez operaciones con una relación 1:2, arriesgando siempre 1 unidad. Si aciertas 5 y fallas 5, ganas 10 y pierdes 5: +5 unidades. Si aciertas 4 y fallas 6, ganas 8 y pierdes 6: +2 unidades. Si aciertas 3, ganas 6 y pierdes 7: −1 unidad. El equilibrio exacto está en 3,33 aciertos sobre 10.",
      bullets: [
        "5 aciertos sobre 10 → +5 unidades.",
        "4 aciertos sobre 10 → +2 unidades.",
        "3 aciertos sobre 10 → −1 unidad.",
        "Equilibrio: acertar el 33,3 % de las operaciones.",
      ],
    },
    chart: buildScenario("relacion-riesgo-beneficio", {
      caption: "Ejemplo ficticio: 5 unidades de riesgo y 10 de recorrido",
      description:
        "La entrada en 100 con stop en 95 arriesga 5 por unidad y el objetivo en 110 busca 10. La relación es 1:2 y con ella dos pérdidas seguidas se compensan con una sola ganancia.",
      entry: 100,
      stopLoss: 95,
      takeProfit: 110,
      outcome: "tp",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 95,
      takeProfit: 110,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 95 y objetivo en 110: 5 unidades de riesgo y 10 de recorrido, relación 1:2. Con 5.000 de capital y el 1 %, el riesgo máximo son 50 y el tamaño que encaja es de 10 unidades. La operación llega al objetivo y suma 100. Con esa relación, dos pérdidas seguidas de 50 se compensan con una sola ganancia como esta.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Elegir el objetivo antes de medir el stop",
        why: "Si la distancia al objetivo no es al menos el doble de la del stop, la relación sale peor de lo que crees y el equilibrio se dispara.",
        fix: "Fija primero dónde falla la idea, mide esa distancia y solo después busca el objetivo.",
      },
      {
        mistake: "Cambiar la relación de una operación a otra según se gane o se pierda",
        why: "Sin una relación fija no hay forma de saber qué tasa de acierto necesitas para que el mes cierre en positivo.",
        fix: "Elige una relación coherente con tu estrategia y aplica la misma durante toda la serie.",
      },
      {
        mistake: "Creer que una relación alta garantiza beneficio",
        why: "Con 1:3 el equilibrio está en el 25 %, pero si la estrategia no llega a ese acierto la serie pierde dinero igualmente.",
        fix: "Comprueba la relación junto con la tasa de acierto real de tu registro antes de cambiar nada.",
      },
    ],
    related: ["riesgo-por-operacion", "take-profit-y-riesgo-beneficio", "limites-de-perdida"],
    glossary: ["riesgo-beneficio", "stop-loss", "take-profit", "riesgo"],
    quiz: [
      {
        id: "q1",
        question: "Entrada en 100, stop en 97 y objetivo en 106. ¿Cuál es la relación?",
        options: ["1:1", "1:2", "1:3", "2:3"],
        correct: 1,
        explanation: "Riesgo 3, beneficio 6: 6 ÷ 3 = 2, así que la relación es 1:2.",
      },
      {
        id: "q2",
        question: "Con una relación 1:3, ¿cuál es la tasa de acierto de equilibrio?",
        options: ["25 %", "33,3 %", "50 %", "75 %"],
        correct: 0,
        explanation:
          "Una ganancia de 3 compensa tres pérdidas de 1, así que basta acertar una de cada cuatro.",
      },
      {
        id: "q3",
        question:
          "Diez operaciones con 1:2, cuatro aciertos y seis pérdidas. ¿Cuál es el resultado neto?",
        options: ["−2 unidades", "0 unidades", "+2 unidades", "+4 unidades"],
        correct: 2,
        explanation: "4 × 2 = 8 ganado y 6 × 1 = 6 perdido: quedan +2 unidades.",
      },
      {
        id: "q4",
        question: "¿Por qué una relación 1:1 no basta para ser rentable?",
        options: [
          "Porque el broker la rechaza",
          "Porque haría falta acertar más del 50 % y los costes consumen esa ventaja",
          "Porque el stop siempre se toca antes",
          "Porque el objetivo queda demasiado lejos",
        ],
        correct: 1,
        explanation:
          "Aciertar la mitad deja la cuenta donde empezaba; por encima de eso hay que sumar spread, comisiones y deslizamiento.",
      },
    ],
  },

  {
    slug: "limites-de-perdida",
    levelId: 6,
    order: 7,
    title: "Límites de pérdida diarios y semanales",
    shortTitle: "Límites de pérdida",
    category: "gestion-riesgo",
    tags: ["límite diario", "límite semanal", "disciplina", "gestión del riesgo"],
    summary:
      "Cómo fijar un tope de pérdida diario y semanal, parar la sesión al alcanzarlo y por qué es más barato cerrar que seguir operando sin control.",
    keywords: [
      "límite de pérdida diario",
      "límite semanal de pérdida",
      "cuándo parar de operar",
      "tope de pérdidas",
    ],
    readMinutes: 6,
    updatedAt: "2026-03-01",
    explanation: {
      intro:
        "Un límite de pérdida es una cifra que decides por adelantado: si la sesión o la semana llegan a ella, se apaga la plataforma. No es un consejo de prudencia: es una regla con número y con hora.",
      paragraphs: [
        "El límite diario se calcula sobre el capital y sobre el riesgo por operación. Con 6.000 y el 1 % de riesgo, cada operación arriesga 60; un límite diario de dos operaciones equivale a 120, el 2 % de la cuenta. Si las dos primeras tocan el stop, la sesión terminó.",
        "El límite semanal sigue la misma lógica con más margen: el 5 % de 6.000 son 300, es decir cinco operaciones al riesgo completo. La escala semanal evita que cinco días malos se conviertan en un mes entero perdido.",
        "Parar al límite es más barato que seguir porque las pérdidas adicionales se pagan con la misma decisión que las anteriores. Quien supera el límite casi nunca lo hace con una idea mejor: lo hace tras una pérdida buscando recuperar, y esa es exactamente la decisión que el límite existía para evitar.",
        "El límite tiene dos condiciones: se fija antes de empezar la semana y no se negocia en caliente. Cambiarlo en mitad de una racha equivale a no tenerlo, porque siempre habrá una razón convincente para una operación más.",
      ],
      bullets: [
        "Límite diario = Capital × Porcentaje diario.",
        "Con 6.000 y el 1 % por operación: dos pérdidas son 120, el 2 % del día.",
        "Límite semanal del 5 %: 300, es decir cinco operaciones al riesgo completo.",
        "Al alcanzar el límite se cierra la plataforma y no se reabre hasta la sesión siguiente.",
      ],
    },
    technical: {
      term: "Límite de pérdida diario y semanal",
      body: "El límite de pérdida es un umbral de pérdida máxima aceptable dentro de un periodo fijo. Se define como un porcentaje del capital y se traduce en un número concreto de operaciones al riesgo fijo elegido. Al alcanzarlo, la operativa se detiene hasta el inicio del siguiente periodo. Su propósito es separar la decisión de operar del estado de ánimo, de modo que el número, y no la emoción, ponga el fin de la sesión.",
      formula: "Límite diario = Capital × Porcentaje diario",
      gloss:
        "Con 6.000 y un límite del 2 %, la sesión termina a los 120 de pérdida, es decir dos operaciones al 1 %.",
    },
    example: {
      title: "Una sesión con tope",
      narrative:
        "Cuenta ficticia de 6.000 con el 1 % de riesgo por operación: 60 por operación. El límite diario es del 2 %, es decir 120. La primera operación toca el stop y resta 60; la segunda hace lo mismo y la cuenta queda en 5.880. El límite está alcanzado, así que la sesión termina sin tercera operación. Si la semana entera sumara cinco pérdidas de 60, la cuenta quedaría en torno a 5.700: un 5 % que el plan ya tenía previsto.",
      bullets: [
        "Riesgo por operación: 60 (1 % de 6.000).",
        "Límite diario: 120, es decir dos operaciones.",
        "Límite semanal: 300, es decir cinco operaciones.",
        "Tras dos pérdidas la sesión se cierra y la cuenta queda en 5.880.",
      ],
    },
    chart: buildScenario("limites-de-perdida", {
      caption: "Ejemplo ficticio: la operación que alcanza el límite diario",
      description:
        "La entrada en 100 con stop en 97 arriesga 3 por unidad. Dos operaciones como esta al 1 % alcanzan el tope diario y la sesión se cierra sin buscar una tercera oportunidad.",
      entry: 100,
      stopLoss: 97,
      takeProfit: 108,
      outcome: "sl",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 97,
      takeProfit: 108,
      outcome: "sl",
      narrative:
        "Entrada en 100 con stop en 97 y objetivo en 108: 3 unidades de riesgo y 8 de recorrido. Con 6.000 de capital y el 1 %, el riesgo máximo son 60 y el tamaño que encaja es de 20 unidades. El precio toca el stop y la operación pierde 60. Es la segunda pérdida del día, así que se alcanza el límite de 120 y la sesión termina aquí, sin importar las señales que aparezcan después.",
      capital: 6_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Subir el límite después de alcanzarlo",
        why: "El límite se fija fuera de la sesión precisamente porque dentro todo parece justificable; moverlo convierte la regla en una opinión.",
        fix: "Si quieres ampliarlo, decídelo en fin de semana y aplícalo a partir de la sesión siguiente.",
      },
      {
        mistake: "Contar el límite en operaciones y no en dinero",
        why: "Una operación con el doble de riesgo consume el tope completo y la cuenta sigue creyendo que aún queda margen.",
        fix: "Define el límite en dinero y tradúcelo a número de operaciones con tu riesgo fijo.",
      },
      {
        mistake: "Seguir operando para recuperar el límite del día",
        why: "Es la secuencia que transforma una mala sesión en un mal mes: la decisión que rompió el límite es la misma que tomará la siguiente operación.",
        fix: "Cierra la plataforma y registra la sesión en el diario; el análisis se hace con calma, no en caliente.",
      },
    ],
    related: ["riesgo-por-operacion", "drawdown", "checklist-antes-de-operar"],
    glossary: ["riesgo", "disciplina", "drawdown", "registro"],
    quiz: [
      {
        id: "q1",
        question: "Cuenta de 6.000 con límite diario del 2 %. ¿Cuánto puede perder la sesión?",
        options: ["60", "120", "300", "600"],
        correct: 1,
        explanation: "El 2 % de 6.000 son 120, es decir dos operaciones al 1 % de riesgo.",
      },
      {
        id: "q2",
        question: "Alcanzas el límite diario y aparece una señal perfecta. ¿Qué haces?",
        options: [
          "Abres la operación con el doble de tamaño",
          "Abres la operación con el riesgo normal",
          "No operas y cierras la sesión",
          "Subes el límite para que quepa",
        ],
        correct: 2,
        explanation:
          "El límite se fijó antes por una razón; señales o no, la sesión del día ya terminó.",
      },
      {
        id: "q3",
        question: "¿Por qué el límite debe fijarse antes de la sesión?",
        options: [
          "Porque el broker lo exige siempre",
          "Porque dentro de la sesión cualquier cambio se justifica con las emociones del momento",
          "Para calcular el spread con antelación",
          "Para saber cuántas operaciones caben en el día",
        ],
        correct: 1,
        explanation:
          "Elegido con calma, el número es objetivo; elegido en plena racha, siempre se mueve en la dirección equivocada.",
      },
      {
        id: "q4",
        question: "Semana de 6.000 con límite semanal del 5 %. ¿Cuánto es ese tope?",
        options: ["60", "120", "300", "600"],
        correct: 2,
        explanation: "El 5 % de 6.000 son 300, equivalentes a cinco operaciones al riesgo completo.",
      },
    ],
  },
];
