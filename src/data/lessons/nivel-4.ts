import type { Lesson } from "~/types";
import { buildPreset } from "../charts/presets";

export const level4Lessons: Lesson[] = [
  {
    slug: "medias-moviles",
    levelId: 4,
    order: 1,
    title: "Medias móviles",
    shortTitle: "Medias móviles",
    category: "indicadores",
    tags: ["medias móviles", "cruce de medias", "tendencia", "confirmación"],
    summary:
      "Qué calcula una media móvil, cómo se lee el cruce entre una media rápida y una lenta y por qué esa confirmación llega siempre tarde al cambio de tendencia.",
    keywords: [
      "qué es una media móvil",
      "cruce de medias móviles",
      "SMA y EMA",
      "media de 20 periodos",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-05",
    explanation: {
      intro:
        "Una media móvil promedia los últimos precios de un activo durante un número fijo de periodos y dibuja una línea suavizada. Sirve para ver el rumbo general del precio sin distraerse con cada sacudida de las velas.",
      paragraphs: [
        "Para calcular una media de 20 periodos tomas los cierres de las últimas 20 velas y los promedias. Cuando aparece una vela nueva, el precio más antiguo sale de la cuenta y el último entra. Por eso la línea se desplaza con el precio: no es un nivel fijo, es un promedio que se renueva en cada vela.",
        "La longitud lo es casi todo. Una media corta, de 10 o 20 periodos, se pega al precio y avisa pronto, pero también produce muchas señales falsas en mercados laterales. Una media larga, de 100 o 200 periodos, cambia de dirección muy despacio, filtra el ruido y casi siempre entra y sale de la tendencia con retraso.",
        "El cruce entre una media rápida y una lenta es la señal clásica. Si la rápida pasa por encima de la lenta, el precio reciente pesa más que el de fondo y se habla de cruce alcista; si cae por debajo, de cruce bajista. El problema es de tiempos: ese cruce solo puede ocurrir después de que el precio ya se haya movido, así que siempre confirma tarde.",
        "También se usan como referencia dinámica. En una tendencia definida, los retrocesos suelen frenarse cerca de una media importante. Ocurre con frecuencia suficiente como para observarlo, pero nunca con la suficiente como para darlo por seguro.",
      ],
      bullets: [
        "Media corta: reacciona antes y genera más señales, muchas de ellas falsas.",
        "Media larga: más estable, pero entra y sale tarde de la tendencia.",
        "Cruce alcista: la media rápida supera a la lenta.",
        "Cruce bajista: la media rápida queda por debajo de la lenta.",
      ],
    },
    technical: {
      term: "Media móvil simple (SMA) y media móvil exponencial (EMA)",
      body: "La media móvil simple promedia los últimos cierres con el mismo peso para todos. La exponencial da más peso a los cierres recientes, por lo que reacciona antes que la simple con el mismo número de periodos. Ninguna de las dos aporta información nueva: ambas se calculan únicamente con precios ya cerrados, y de ahí sale su retraso.",
      formula: "SMA(n) = (P1 + P2 + ... + Pn) ÷ n",
      gloss:
        "Con 20 periodos, la media necesita 20 cierres para existir y solo se moverá cuando entre un precio nuevo, siempre por detrás del mercado.",
    },
    example: {
      title: "Un cruce alcista, paso a paso",
      narrative:
        "Imagina un activo que cae hasta 96 y después se recupera. Mientras el precio sube de 96 a 104, la media de 20 periodos, que todavía arrastra las velas bajistas, queda por debajo de la de 50. Cuando el precio se consolida en 105, la rápida termina de superar a la lenta y aparece el cruce alcista. En ese punto ya has dejado de ganar los primeros puntos del movimiento.",
      bullets: [
        "Precio del mínimo: 96.",
        "Precio en el momento del cruce: 105.",
        "Recorrido dejado atrás esperando la confirmación: 9 puntos.",
        "Lo que ofrece el cruce: una señal, no una entrada barata.",
      ],
    },
    chart: buildPreset("cruce-medias"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 105,
      stopLoss: 101.5,
      takeProfit: 113,
      outcome: "tp",
      narrative:
        "Compra en 105 tras el cruce alcista, con stop en 101,50 y objetivo en 113. El riesgo es de 3,5 puntos y el recorrido esperado de 8, algo más de 2 : 1. Si el cruce llega tarde, la entrada es peor, pero el stop sigue donde la estructura dice que la idea deja de tener sentido.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Usar el cruce de medias como orden de compra automática",
        why: "El cruce solo se produce después del movimiento y en mercados laterales se repite una y otra vez sin tendencia real, así que cada señal llega tarde.",
        fix: "Filtra los cruces con la estructura del gráfico y opera solo cuando la tendencia de fondo ya esté definida.",
      },
      {
        mistake: "Mezclar temporalidades sin darse cuenta",
        why: "Un cruce alcista en minutos puede ocurrir dentro de una bajada de fondo en diario, y las dos lecturas se contradicen.",
        fix: "Define una temporalidad principal y usa las demás solo para contextualizar lo que ocurre en ella.",
      },
      {
        mistake: "Ajustar el número de periodos hasta que la señal funcione",
        why: "Cualquier parámetro se puede retocar para que encaje con el pasado, pero eso no mejora nada de lo que ocurrirá después.",
        fix: "Fija los periodos con una lógica clara, como 20 y 50, y compruébalos sobre muchas velas y mercados distintos.",
      },
    ],
    related: [
      "tendencias-y-estructura",
      "soportes-y-resistencias",
      "rsi",
      "temporalidades",
    ],
    glossary: ["medias-moviles", "tendencia", "cruce", "temporalidad"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué representa una media móvil de 20 periodos?",
        options: [
          "El precio más alto alcanzado en el periodo",
          "El promedio de los últimos 20 cierres, recalculado con cada vela nueva",
          "El volumen medio negociado en las últimas 20 operaciones",
          "La distancia entre el máximo y el mínimo del periodo",
        ],
        correct: 1,
        explanation:
          "La media solo promedia los cierres del periodo elegido y se actualiza en cada vela que se cierra.",
      },
      {
        id: "q2",
        question: "¿Por qué el cruce de medias confirma tarde el cambio de tendencia?",
        options: [
          "Porque se calcula siempre con un número de periodos pequeño",
          "Porque el cruce solo puede producirse después de que el precio ya se haya movido",
          "Porque las medias solo existen en el gráfico diario",
          "Porque el volumen no entra en el cálculo",
        ],
        correct: 1,
        explanation:
          "Las medias se basan en precios ya cerrados, así que la señal aparece cuando el movimiento está en marcha, no antes.",
      },
      {
        id: "q3",
        question: "¿Qué característica tiene una media móvil de 200 periodos?",
        options: [
          "Cada vela nueva modifica mucho la línea",
          "La línea reacciona con lentitud a los cambios de precio",
          "El precio no puede cruzarla",
          "Sirve para identificar velas de rechazo",
        ],
        correct: 1,
        explanation:
          "Cuanto más larga es la media, más antigua es la información que arrastra y más despacio cambia de dirección.",
      },
      {
        id: "q4",
        question: "En un mercado lateral, los cruces de medias suelen:",
        options: [
          "No producirse nunca",
          "Producir muchas señales seguidas que resultan falsas",
          "Anticipar siempre la salida del rango",
          "Dejarse de calcular hasta que termine el rango",
        ],
        correct: 1,
        explanation:
          "Sin dirección clara, la media rápida entra y sale de la lenta repetidamente y cada cruce termina sin recorrido.",
      },
    ],
  },

  {
    slug: "rsi",
    levelId: 4,
    order: 2,
    title: "RSI: fuerza relativa",
    shortTitle: "RSI",
    category: "indicadores",
    tags: ["RSI", "sobrecompra", "sobreventa", "impulso"],
    summary:
      "Cómo se calcula el RSI, qué significan realmente las zonas de sobrecompra y sobreventa y por qué fijar el suelo en 30 es un error frecuente.",
    keywords: [
      "qué es el RSI",
      "sobrecompra y sobreventa",
      "cómo se calcula el RSI",
      "RSI de 14 periodos",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-06",
    explanation: {
      intro:
        "El RSI es un indicador de impulso que compara la velocidad y la magnitud de las subidas con las de las bajadas durante un periodo determinado. Su resultado es un número entre 0 y 100 que resume la fuerza relativa del movimiento reciente.",
      paragraphs: [
        "Para calcularlo se separan las velas alcistas de las bajistas del periodo, se promedian por separado los avances y los retrocesos y se obtiene la relación entre ambos. Si las subidas dominan con claridad, el valor se acerca a 100; si dominan las bajadas, se acerca a 0. Nada de eso depende del volumen ni de las noticias: solo del precio y del tiempo.",
        "Por encima de 70 se habla de sobrecompra y por debajo de 30 de sobreventa. Esas marcas indican que el movimiento reciente ha sido muy intenso en una dirección, no que el activo esté caro o barato. Son etiquetas sobre el ritmo, no sobre el valor.",
        "En una tendencia fuerte el indicador se queda en la zona extrema durante muchas velas. Quien espera a que el RSI baje de 70 en una subida decidida se queda fuera del movimiento mientras la tendencia continúa. Ese es el motivo por el que tratar el 70 como una orden de venta, o el 30 como un suelo fijo, produce tantas operaciones mal.",
        "Lecturas más razonables: observar el cruce del RSI por encima o por debajo de su zona central como referencia de impulso, y usar las divergencias para detectar pérdida de fuerza. En cualquier caso, el gráfico de precios sigue mandando.",
      ],
      bullets: [
        "Escala de 0 a 100 calculada sobre un periodo, normalmente 14 velas.",
        "Sobrecompra: valor por encima de 70. Sobreventa: por debajo de 30.",
        "Los extremos describen impulso, no valor ni destino del precio.",
        "En tendencia fuerte el indicador puede permanecer extremo mucho tiempo.",
      ],
    },
    technical: {
      term: "Índice de fuerza relativa (RSI)",
      body: "El RSI mide la proporción entre el movimiento medio alcista y el movimiento medio bajista dentro de un periodo, casi siempre 14 velas. Cuanto más seguidas y grandes son las subidas, más alto se coloca. Como solo mira precios y velas, no mide volumen ni causas: mide ritmo del precio.",
      formula: "RS = Ganancia media ÷ Pérdida media | RSI = 100 − 100 ÷ (1 + RS)",
      gloss:
        "Una sola vela muy alcista desplaza el RSI varios puntos de golpe, por eso salta de forma brusca después de movimientos largos.",
    },
    example: {
      title: "Sobrecompra no es orden de venta",
      narrative:
        "Un activo sube de 100 a 112 en tres velas y el RSI marca 76. Un operador vende en 112 esperando la corrección, con stop en 116 y objetivo en 104. El precio sigue subiendo hasta 116 y la operación se cierra con pérdida. El RSI describía un impulso muy fuerte, algo que en tendencia puede durar mucho más de lo que uno imagina.",
      bullets: [
        "Valor del RSI en la entrada: 76.",
        "Entrada en corto: 112.",
        "Stop tocado en: 116.",
        "Resultado: pérdida de 4 puntos por unidad.",
      ],
    },
    chart: buildPreset("rsi"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "short",
      entry: 112,
      stopLoss: 116,
      takeProfit: 104,
      outcome: "sl",
      narrative:
        "Venta en 112 con el RSI en 76, stop en 116 y objetivo en 104. El precio siguió subiendo, tocó el stop y la operación perdió 4 puntos por unidad. La sobrecompra explicaba la fuerza del movimiento, pero no anunciaba que ese movimiento tuviera que terminar allí.",
      capital: 2_500,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Vender solo porque el RSI supera 70",
        why: "Un RSI alto indica que las subidas recientes han sido intensas; en tendencia fuerte el indicador puede quedarse arriba mientras el precio sigue avanzando.",
        fix: "Espera una señal de agotamiento en el precio, como una vela de rechazo o una pérdida de estructura, y usa el RSI solo como apoyo.",
      },
      {
        mistake: "Tratar el 30 como un suelo garantizado",
        why: "El 30 es una convención de la herramienta, no un nivel de precio. En mercados muy bajistas el RSI puede pasar la mayor parte del tiempo por debajo de esa marca.",
        fix: "Mira la posición del RSI respecto a su zona central y en qué temporalidad estás leyendo el indicador.",
      },
      {
        mistake: "Cambiar el periodo hasta que la señal acierte",
        why: "Ajustar el parámetro a cada caso deja de ser un indicador objetivo y se convierte en una justificación de lo que ya querías ver.",
        fix: "Usa el periodo por defecto de 14 velas y evalúa su comportamiento sobre muchas operaciones antes de tocarlo.",
      },
    ],
    related: [
      "medias-moviles",
      "bandas-de-bollinger",
      "divergencias",
      "patrones-de-vela",
    ],
    glossary: ["rsi", "sobrecompra", "divergencia", "tendencia"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué representa el valor del RSI?",
        options: [
          "El porcentaje de velas alcistas del periodo",
          "La fuerza relativa del movimiento reciente en una escala de 0 a 100",
          "El volumen negociado en la última vela",
          "La distancia del precio hasta su soporte",
        ],
        correct: 1,
        explanation:
          "El RSI resume la relación entre avances y retrocesos del periodo en una escala limitada entre 0 y 100.",
      },
      {
        id: "q2",
        question: "Un RSI en 76 durante una tendencia alcista significa que:",
        options: [
          "El activo está barato y conviene comprar",
          "Las subidas recientes han sido muy intensas",
          "El precio va a bajar en las próximas velas",
          "El volumen se ha reducido a la mitad",
        ],
        correct: 1,
        explanation:
          "La zona alta describe la intensidad del impulso reciente; no habla de valor ni garantiza una corrección inminente.",
      },
      {
        id: "q3",
        question: "¿Por qué puede ser un error señalar el 30 como suelo de sobreventa?",
        options: [
          "Porque el RSI no puede bajar de 30",
          "Porque en mercados muy bajistas el indicador puede pasar mucho tiempo por debajo de esa marca",
          "Porque el RSI solo funciona en acciones",
          "Porque el valor 30 se calcula con el volumen",
        ],
        correct: 1,
        explanation:
          "La marca de 30 es una referencia convencional y el precio puede seguir cayendo durante mucho tiempo por debajo de ella.",
      },
      {
        id: "q4",
        question: "¿Qué mide el RSI en su cálculo?",
        options: [
          "La distancia entre el precio y su media móvil",
          "La relación entre el movimiento medio alcista y el bajista del periodo",
          "El porcentaje de capital arriesgado en la operación",
          "El volumen medio de las últimas velas",
        ],
        correct: 1,
        explanation:
          "El RSI compara el avance medio con el retroceso medio dentro del periodo elegido, sin intervenir el volumen.",
      },
    ],
  },

  {
    slug: "macd",
    levelId: 4,
    order: 3,
    title: "MACD: momento y cruces",
    shortTitle: "MACD",
    category: "indicadores",
    tags: ["MACD", "momento", "cruce", "histograma"],
    summary:
      "Qué mide el MACD, cómo se forman sus líneas y su histograma y por qué sus cruces hablan de momento, no de tendencia garantizada.",
    keywords: [
      "qué es el MACD",
      "cruce del MACD",
      "histograma del MACD",
      "momento en trading",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-07",
    explanation: {
      intro:
        "El MACD mide la distancia entre dos medias móviles exponenciales del precio. Al restar una de otra obtienes una línea que sube y baja con el impulso del mercado, y sobre esa línea se construye una segunda llamada línea de señal.",
      paragraphs: [
        "La composición es siempre la misma. La línea del MACD es la diferencia entre una media rápida de 12 periodos y una lenta de 26. La línea de señal es una media de 9 periodos calculada sobre el propio MACD. El histograma muestra la distancia entre las dos: cuando se separan crece, cuando se acercan se encoge.",
        "Los cruces entre la línea del MACD y su señal son la lectura más usada. Si la línea del MACD cruza al alza, el impulso reciente se está fortaleciendo; si cruza a la baja, se está enfriando. En mercados laterales esos cruces se multiplican y casi todos terminan sin recorrido.",
        "La posición respecto a la zona cero añade contexto. El MACD está en positivo cuando la media rápida está por encima de la lenta, es decir, cuando el impulso de fondo es alcista. Su paso por el cero confirma un cambio de tendencia mayor y, como todo lo basado en medias, llega tarde.",
        "Lo que mide de verdad es momento: cuánta fuerza tiene el movimiento actual respecto al anterior. No dice hacia dónde irá el precio mañana ni cuándo terminará la tendencia. Un MACD ascendente puede acompañar a un precio que ya ha subido mucho.",
      ],
      bullets: [
        "Línea del MACD: diferencia entre la EMA rápida y la lenta.",
        "Línea de señal: media exponencial de la propia línea del MACD.",
        "Histograma: distancia entre las dos líneas.",
        "Zona cero: contexto de la tendencia de fondo.",
      ],
    },
    technical: {
      term: "MACD, línea de señal e histograma",
      body: "El MACD compara dos medias exponenciales para aislar la parte del precio que responde al impulso reciente. La línea de señal suaviza ese resultado y funciona como referente de los cruces. El histograma no aporta información nueva: es la resta entre las dos líneas, dibujada para ver de un vistazo si se están separando o acercando.",
      formula: "MACD = EMA(12) − EMA(26) | Señal = EMA(9) del MACD",
      gloss:
        "El histograma alcanza su pico justo cuando el impulso es máximo y empieza a encoger mucho antes de que el precio se gire.",
    },
    example: {
      title: "Tres lecturas de un mismo retroceso",
      narrative:
        "Un precio sube de 100 a 107 y el MACD pasa de 0,4 a 1,9. Después el precio hace un retroceso hacia 104 y el MACD baja hasta 1,1 sin llegar al cero. Ese descenso no anuncia el fin de la tendencia: solo dice que las últimas velas han sido menos fuertes que las anteriores. Cuando el precio reanuda la subida, el MACD vuelve a girar al alza.",
      bullets: [
        "MACD en la subida: 1,9.",
        "MACD en el retroceso: 1,1.",
        "Distancia al cero: todavía amplia.",
        "Lectura correcta: menor momento, no cambio de tendencia.",
      ],
    },
    chart: buildPreset("macd"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 102,
      stopLoss: 99.5,
      takeProfit: 108.5,
      outcome: "open",
      narrative:
        "Compra en 102 tras un cruce alcista del MACD con la línea por encima del cero, stop en 99,50 y objetivo en 108,50. La operación sigue abierta: ni el stop ni el objetivo se han tocado y el indicador ya ha girado a la baja dos veces mientras tanto. El MACD orienta sobre el momento, no sobre el resultado.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Operar cada cruce de la línea de señal",
        why: "En mercados laterales las dos líneas se cruzan una y otra vez y cada cruce genera una operación con coste y sin recorrido.",
        fix: "Exige antes una tendencia definida en el gráfico de precios y usa el cruce únicamente para elegir el momento.",
      },
      {
        mistake: "Leer el MACD como una predicción",
        why: "El indicador se calcula con precios ya cerrados y solo describe el impulso reciente; no contiene información sobre el futuro.",
        fix: "Interprétalo como una medida de momento y toma la decisión con la estructura del precio y tu plan de riesgo.",
      },
      {
        mistake: "Ignorar la altura respecto a la zona cero",
        why: "Un cruce con el MACD muy alejado del cero suele ser un retroceso dentro de una tendencia, no un cambio de fondo.",
        fix: "Comprueba dónde se sitúa el indicador respecto a su línea cero antes de interpretar el cruce que tienes delante.",
      },
    ],
    related: [
      "medias-moviles",
      "rsi",
      "divergencias",
      "impulso-y-correccion",
    ],
    glossary: ["macd", "medias-moviles", "cruce", "divergencia"],
    quiz: [
      {
        id: "q1",
        question: "¿Cómo se calcula la línea del MACD?",
        options: [
          "Restando la media de 20 periodos a la de 50",
          "Restando la media exponencial de 26 periodos a la de 12",
          "Multiplicando el precio por el volumen medio",
          "Promediando los últimos 9 cierres",
        ],
        correct: 1,
        explanation:
          "El MACD es la diferencia entre la EMA rápida de 12 y la EMA lenta de 26 del precio.",
      },
      {
        id: "q2",
        question: "¿Qué representa el histograma del MACD?",
        options: [
          "La distancia entre la línea del MACD y su línea de señal",
          "El volumen negociado en cada vela",
          "El riesgo de la operación abierta",
          "La distancia hasta el soporte más cercano",
        ],
        correct: 0,
        explanation:
          "El histograma dibuja la resta entre ambas líneas: crece cuando se separan y se encoge cuando se acercan.",
      },
      {
        id: "q3",
        question: "Si el MACD cruza al alza su línea cero, ¿qué ocurre?",
        options: [
          "La media rápida ha superado a la lenta, lo que confirma impulso alcista de fondo",
          "El precio ha tocado un soporte importante",
          "El RSI entra en sobreventa",
          "La volatilidad se ha reducido",
        ],
        correct: 0,
        explanation:
          "El paso por el cero refleja que la media corta está por encima de la larga, una señal de fondo que llega tarde.",
      },
      {
        id: "q4",
        question: "¿Qué mide realmente el MACD?",
        options: [
          "El momento del movimiento reciente, no el destino del precio",
          "El valor razonable del activo",
          "El volumen acumulado del periodo",
          "La mejor entrada para la operación",
        ],
        correct: 0,
        explanation:
          "El MACD cuantifica la fuerza del impulso actual frente al anterior; no contiene ninguna información garantizada sobre el futuro.",
      },
    ],
  },

  {
    slug: "bandas-de-bollinger",
    levelId: 4,
    order: 4,
    title: "Bandas de Bollinger",
    shortTitle: "Bandas de Bollinger",
    category: "indicadores",
    tags: ["bandas de Bollinger", "volatilidad", "compresión", "desviación típica"],
    summary:
      "Qué representan las bandas, cómo se abren y se cierran con la volatilidad y por qué operar porque el precio tocó la banda es un error.",
    keywords: [
      "qué son las bandas de Bollinger",
      "compresión de bandas",
      "banda superior y banda inferior",
      "desviación típica del precio",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-09",
    explanation: {
      intro:
        "Las bandas de Bollinger son dos líneas situadas a una distancia variable de una media móvil. Esa distancia no se fija a mano: se calcula con la desviación típica, de modo que las bandas se separan cuando el mercado se agita y se juntan cuando se calma.",
      paragraphs: [
        "La banda central es una media móvil de 20 periodos. La superior está a dos desviaciones típicas por encima y la inferior a dos desviaciones por debajo. Como la desviación típica mide cuánto se alejan los precios de su media, las bandas se ensanchan cuando las velas crecen y se estrechan cuando el mercado se aquieta.",
        "Un estrechamiento prolongado indica que la volatilidad reciente es baja. Es una observación útil, pero no anuncia dirección: después de una compresión suele llegar movimiento, y ese movimiento puede ser en cualquiera de los dos sentidos. Quien interpreta la compresión como una promesa de subida se equivoca de base.",
        "El error clásico es operar el toque de la banda. Tocar la banda superior no significa que el precio esté caro ni que vaya a rebotar: en una tendencia fuerte el precio puede viajar pegado a la banda durante muchas velas, y vender cada toque es una forma segura de acumular pérdidas pequeñas contra un movimiento grande.",
        "El uso más razonable es doble: observar la salida de las bandas tras una etapa de estrechamiento como señal de que el mercado se ha puesto en movimiento, y leer la posición del precio dentro del rango como una medida de contexto. En cualquier caso, la confirmación tiene que venir del gráfico de precios.",
      ],
      bullets: [
        "Banda central: media móvil de 20 periodos.",
        "Bandas exteriores: dos desviaciones típicas de esa media.",
        "Estrechamiento: volatilidad baja, sin dirección indicada.",
        "Tocar la banda no es una señal de reversión por sí mismo.",
      ],
    },
    technical: {
      term: "Bandas de Bollinger",
      body: "Las bandas combinan una media con una medida de dispersión. La desviación típica crece cuando las velas se alargan y se reduce cuando se acortan, por lo que la anchura de las bandas funciona como un termómetro de volatilidad. Con dos desviaciones, la mayor parte de los movimientos normales queda dentro de las bandas y solo los desplazamientos inusuales las superan.",
      formula:
        "Banda superior = SMA(20) + 2 × Desviación típica | Banda inferior = SMA(20) − 2 × Desviación típica",
      gloss:
        "El ancho de las bandas sube y baja solo con la volatilidad: sirve para medir el clima del mercado, no para adivinar su rumbo.",
    },
    example: {
      title: "Compresión y salida",
      narrative:
        "Un activo pasa 28 velas moviéndose menos de un punto por vela y las bandas se estrechan hasta quedar casi paralelas. De repente aparece una vela de cuatro puntos que cierra por encima de la banda superior con volumen alto. Quien esperaba la confirmación entra después de esa vela y coloca el stop por debajo de la banda central; quien vende el toque anterior ya ha perdido dos operaciones.",
      bullets: [
        "Rango medio durante la compresión: menos de 1 punto.",
        "Anchura de las bandas al mínimo del periodo.",
        "Vela de salida: 4 puntos con volumen alto.",
        "La dirección la decide el precio, no la banda.",
      ],
    },
    chart: buildPreset("bollinger"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "short",
      entry: 106,
      stopLoss: 109,
      takeProfit: 99,
      outcome: "sl",
      narrative:
        "Venta en 106 al tocar la banda superior, con stop en 109 y objetivo en 99. El precio siguió subiendo varias velas antes de corregir, tocó el stop y la operación perdió 3 puntos por unidad. Tocar la banda describía un mercado fuerte, no una reversión inminente.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Vender cada vez que el precio toca la banda superior",
        why: "En una tendencia fuerte el precio puede quedarse pegado a la banda muchas velas y cada venta temprana acumula pérdidas.",
        fix: "Espera a que el precio cierre de nuevo hacia la banda central o pierda un nivel de estructura antes de actuar.",
      },
      {
        mistake: "Interpretar el estrechamiento como una promesa de subida",
        why: "La compresión solo informa de que la volatilidad es baja; el mercado puede romper hacia arriba o hacia abajo con la misma facilidad.",
        fix: "Prepárate para un movimiento y deja que el precio elija el sentido antes de comprometerte.",
      },
      {
        mistake: "Cambiar la desviación típica hasta que las bandas encajen con el pasado",
        why: "Si ajustas la anchura a cada caso, la herramienta deja de medir lo mismo en dos momentos distintos y pierde todo valor comparativo.",
        fix: "Mantén los parámetros fijos, de 20 periodos y dos desviaciones, y aprende su comportamiento en el mercado que operas.",
      },
    ],
    related: [
      "rsi",
      "medias-moviles",
      "soportes-y-resistencias",
      "velas-japonesas",
    ],
    glossary: ["volatilidad", "medias-moviles", "sobrecompra", "tendencia"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué ocupa la banda central de Bollinger?",
        options: [
          "La media móvil simple de 20 periodos",
          "El precio de apertura de la sesión",
          "La media del volumen del periodo",
          "El nivel de stop que recomienda el indicador",
        ],
        correct: 0,
        explanation:
          "La banda central es una media móvil simple y las dos exteriores se separan de ella según la desviación típica.",
      },
      {
        id: "q2",
        question: "Las bandas se estrechan cuando:",
        options: [
          "El precio sube con fuerza",
          "La volatilidad reciente disminuye",
          "El volumen se multiplica",
          "El RSI supera 70",
        ],
        correct: 1,
        explanation:
          "La anchura depende de la desviación típica: velas más cortas reducen la dispersión y las bandas se cierran.",
      },
      {
        id: "q3",
        question: "¿Por qué no conviene vender solo porque el precio toca la banda superior?",
        options: [
          "Porque la banda superior solo existe en el gráfico diario",
          "Porque en una tendencia fuerte el precio puede viajar pegado a la banda muchas velas",
          "Porque la banda se calcula con el volumen",
          "Porque el toque garantiza que el precio subirá más",
        ],
        correct: 1,
        explanation:
          "El toque describe fuerza, no agotamiento. Sin una señal de reversión en el precio, la venta es prematura.",
      },
      {
        id: "q4",
        question: "Una expansión de las bandas informa de que:",
        options: [
          "El mercado va a cambiar de tendencia",
          "La volatilidad ha aumentado, sin indicar dirección",
          "El activo está infravalorado",
          "El coste de operar ha subido",
        ],
        correct: 1,
        explanation:
          "Las bandas se abren cuando crece la dispersión de los precios; esa medida no contiene información sobre el sentido.",
      },
    ],
  },

  {
    slug: "fibonacci",
    levelId: 4,
    order: 5,
    title: "Retrocesos de Fibonacci",
    shortTitle: "Fibonacci",
    category: "analisis-tecnico",
    tags: ["Fibonacci", "retrocesos", "niveles", "corrección"],
    summary:
      "Cómo se trazan los niveles 38,2, 50 y 61,8 sobre un tramo de impulso y por qué son zonas de observación, no soportes mágicos.",
    keywords: [
      "qué es el retroceso de Fibonacci",
      "niveles de Fibonacci",
      "61,8 por ciento",
      "cómo trazar Fibonacci",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-10",
    explanation: {
      intro:
        "Los retrocesos de Fibonacci son marcas que se colocan sobre un tramo de impulso para observar dónde podría frenarse la corrección. No son un indicador automático: el tramo lo eliges tú y, por tanto, el resultado depende de esa elección.",
      paragraphs: [
        "El procedimiento es sencillo. En una subida identificas el mínimo y el máximo del impulso, aplicas la herramienta de un extremo a otro y el programa dibuja los niveles entre ambos. Cada nivel indica qué porcentaje del tramo ya se ha corregido desde el extremo del movimiento.",
        "El 38,2 % describe una corrección superficial, propia de impulsos fuertes. El 50 % es el punto medio del tramo y es muy observado aunque no forme parte de la sucesión de Fibonacci. El 61,8 % representa una corrección profunda y plantea una duda razonable sobre si la tendencia original sigue viva.",
        "Sus límites son claros. El resultado cambia por completo si eliges otro máximo o otro mínimo: dos tramos distintos dan niveles distintos sobre el mismo gráfico. Además, la corrección puede superar el 100 % y borrar el tramo entero, momento en el que la figura deja de tener sentido.",
        "Por eso los niveles no son soportes ni resistencias hasta que el precio demuestra que lo son. Su uso razonable es marcar una zona de interés donde buscar confirmación: una vela de rechazo, un frenazo en la estructura o un cambio de volumen. La línea te dice dónde mirar; la decisión la toma el precio.",
      ],
      bullets: [
        "38,2 %: corrección superficial dentro de un impulso fuerte.",
        "50 %: punto medio del tramo, muy observado por los participantes.",
        "61,8 %: corrección profunda; exige más pruebas a la tendencia.",
        "El tramo elegido determina todos los niveles: cambia el tramo, cambian las marcas.",
      ],
    },
    technical: {
      term: "Retroceso de Fibonacci",
      body: "La herramienta mide la distancia entre dos extremos y la reparte según los ratios de la sucesión. Sobre una subida de 36 puntos, el retroceso del 38,2 % equivale a 13,75 puntos de corrección. Los niveles no se calculan con el precio actual, sino con el tramo que el operador ha marcado, y esa selección es subjetiva.",
      formula: "Nivel = Máximo − (Máximo − Mínimo) × Ratio",
      gloss:
        "Los ratios habituales son 0,382, 0,5 y 0,618; el 50 % no pertenece a la sucesión, pero se incluye porque se observa con mucha frecuencia.",
    },
    example: {
      title: "Trazar el tramo completo",
      narrative:
        "Un activo sube de 92 a 128 y empieza a corregir. El tramo mide 36 puntos, así que el nivel del 38,2 % queda en 114,25, el del 50 % en 110 y el del 61,8 % en 105,75. El precio baja hasta 106, se detiene dos velas y reanuda la subida. Quien observaba la zona tuvo tiempo de buscar confirmación; quien colocó una orden clavada en 105,75 pudo verla ejecutarse por ruido.",
      bullets: [
        "Tramo de impulso: de 92 a 128, amplitud 36 puntos.",
        "Retroceso del 38,2 %: 114,25.",
        "Retroceso del 50 %: 110.",
        "Retroceso del 61,8 %: 105,75.",
      ],
    },
    chart: buildPreset("fibonacci"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 106,
      stopLoss: 102,
      takeProfit: 118,
      outcome: "tp",
      narrative:
        "Compra en 106, muy cerca del retroceso del 61,8 % del tramo de 92 a 128, con stop en 102 y objetivo en 118. Riesgo de 4 puntos y recorrido de 12, relación 3 : 1. El nivel aportó la zona de atención; la entrada llegó después de una vela de rechazo clara, no antes.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Colocar la orden exactamente sobre la línea",
        why: "El precio rara vez respeta un decimal concreto: una orden clavada en el nivel puede ejecutarse por un movimiento mínimo de ruido.",
        fix: "Trata cada retroceso como una zona y sitúa el stop donde la idea queda invalidada, con un margen razonable.",
      },
      {
        mistake: "Elegir el tramo que confirma la idea",
        why: "Si cambias los extremos según lo que quieras ver, los niveles dejan de ser comparables entre sí y pasan a ser decorativos.",
        fix: "Fija de antemano qué tramo es el válido para la temporalidad que estás operando y respétalo en todas las lecturas.",
      },
      {
        mistake: "Esperar el rebote sin ninguna confirmación",
        why: "El precio puede atravesar tres niveles seguidos sin que se produzca ningún giro: el retroceso por sí solo no frena nada.",
        fix: "Busca en la zona una vela de rechazo, un cambio de estructura o un aumento de volumen que dé una razón para entrar.",
      },
    ],
    related: [
      "impulso-y-correccion",
      "soportes-y-resistencias",
      "tendencias-y-estructura",
      "patrones-de-reversa",
    ],
    glossary: ["soporte", "resistencia", "tendencia", "riesgo-beneficio"],
    quiz: [
      {
        id: "q1",
        question: "Para trazar un retroceso de Fibonacci en una subida, ¿qué hay que marcar?",
        options: [
          "El mínimo y el máximo del tramo de impulso",
          "La apertura y el cierre de la sesión",
          "El volumen máximo y el mínimo del periodo",
          "El stop y el objetivo de la operación",
        ],
        correct: 0,
        explanation:
          "La herramienta se arrastra de un extremo del impulso al otro; todos los niveles salen de esa medición.",
      },
      {
        id: "q2",
        question: "¿Qué describe el nivel del 61,8 %?",
        options: [
          "Un retroceso profundo que pone en duda la tendencia original",
          "El final obligatorio de la corrección",
          "El precio al que el activo está barato",
          "La distancia mínima del stop loss",
        ],
        correct: 0,
        explanation:
          "Cuanto más profundo es el retroceso, más fuerte tiene que ser la tendencia para recuperar el impulso anterior.",
      },
      {
        id: "q3",
        question: "¿Por qué el 50 % aparece en la herramienta si no pertenece a la sucesión de Fibonacci?",
        options: [
          "Porque es el único nivel que funciona siempre",
          "Porque es un punto medio muy observado por los participantes",
          "Porque lo calcula el broker",
          "Porque marca el precio de apertura del activo",
        ],
        correct: 1,
        explanation:
          "No tiene origen matemático en la sucesión, pero se observa con mucha frecuencia y por eso se incluye.",
      },
      {
        id: "q4",
        question: "¿Qué le falta a un nivel de Fibonacci para convertirse en una operación?",
        options: [
          "Un número de periodos concreto",
          "Una confirmación del precio en esa zona",
          "Un indicador adicional que lo repita",
          "Un horario de ejecución fijo",
        ],
        correct: 1,
        explanation:
          "El nivel solo define una zona de interés: la decisión exige que el precio muestre allí una reacción clara.",
      },
    ],
  },

  {
    slug: "divergencias",
    levelId: 4,
    order: 6,
    title: "Divergencias entre precio e indicador",
    shortTitle: "Divergencias",
    category: "analisis-tecnico",
    tags: ["divergencia", "RSI", "MACD", "señales"],
    summary:
      "Qué es una divergencia entre el precio y un indicador, qué informa y por qué no debe usarse como una señal de entrada por sí sola.",
    keywords: [
      "qué es una divergencia",
      "divergencia bajista",
      "divergencia alcista",
      "precio e indicador",
    ],
    readMinutes: 6,
    updatedAt: "2026-02-11",
    explanation: {
      intro:
        "Una divergencia aparece cuando el precio y un indicador se mueven en sentidos opuestos: por ejemplo, el precio sube y marca un máximo más alto, pero el RSI no consigue superar su máximo anterior.",
      paragraphs: [
        "Hay dos tipos básicos. La divergencia bajista ocurre cuando el precio hace máximos más altos y el indicador hace máximos más bajos. La divergencia alcista es el reflejo: el precio marca mínimos más bajos y el indicador no los confirma. En ambos casos, el gráfico y el indicador dejan de estar de acuerdo.",
        "Lo que informa es una pérdida de fuerza relativa. El precio sigue avanzando, pero con menos empuje que antes: las velas se acortan, las subidas se ordenan y el indicador refleja ese desgaste. Es una advertencia sobre el ritmo, no una orden de compra o de venta.",
        "Por eso no es una señal por sí sola. En una tendencia fuerte aparecen divergencias una y otra vez mientras el precio continúa durante semanas en la misma dirección. Quien vende en la primera divergencia acumula pérdidas pequeñas y se queda fuera del movimiento principal.",
        "Para darle peso hace falta confirmación: una ruptura del último mínimo relevante, una vela de rechazo con volumen o un cambio claro de estructura. También conviene contar solo los máximos y mínimos evidentes; buscar divergencias en cada microgiro del gráfico conduce a ver siempre lo que uno quiere ver.",
      ],
      bullets: [
        "Bajista: el precio sube más que el indicador.",
        "Alcista: el precio baja más que el indicador.",
        "Informa de impulso debilitado, no de giro inminente.",
        "Necesita confirmación del precio antes de operarse.",
      ],
    },
    technical: {
      term: "Divergencia",
      body: "La divergencia compara la pendiente del precio con la de un indicador de impulso como el RSI o el MACD entre dos puntos definidos. No se calcula con una fórmula cerrada: depende de qué extremos se eligen para comparar, y por eso dos personas pueden no ver la misma divergencia en el mismo gráfico.",
      formula: "Divergencia = el precio y el indicador avanzan en sentidos opuestos",
      gloss:
        "La divergencia clásica avisa de posible agotamiento; la divergencia oculta, de posible continuación de la tendencia vigente.",
    },
    example: {
      title: "El precio sube y el indicador no acompaña",
      narrative:
        "Un activo marca un máximo en 116 con el RSI en 71. Después retrocede y vuelve a subir hasta 121, pero esta vez el RSI solo llega a 64. El precio ha ganado 5 puntos y el indicador ha perdido 7: aparece la divergencia bajista. El precio tarda cuatro velas más en girar y quien vendió en el primer máximo esperó mucho tiempo con el riesgo abierto.",
      bullets: [
        "Primer máximo: 116 con RSI en 71.",
        "Segundo máximo: 121 con RSI en 64.",
        "Discrepancia: el precio avanza y el indicador cede.",
        "Confirmación: la ruptura del mínimo intermedio.",
      ],
    },
    chart: buildPreset("divergencia"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "short",
      entry: 121,
      stopLoss: 124,
      takeProfit: 113,
      outcome: "breakeven",
      narrative:
        "Venta en 121 tras la segunda divergencia bajista, stop en 124 y objetivo en 113. El precio retrocedió hasta 115 y volvió a subir hasta la entrada; al mover el stop a break-even, la operación salió sin pérdidas ni beneficio. La señal existía, pero llegó antes que la confirmación.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Operar en cuanto aparece la divergencia",
        why: "El indicador puede mostrar varias divergencias seguidas mientras el precio continúa en la misma dirección; cada intento temprano acumula pérdidas.",
        fix: "Espera una confirmación del precio, como la ruptura del último mínimo relevante, y solo entonces actúa.",
      },
      {
        mistake: "Buscar divergencias en cualquier mínimo del gráfico",
        why: "Si comparas cada pequeño giro con el indicador siempre encontrarás alguna coincidencia, pero casi todas son ruido sin significado.",
        fix: "Marca solo máximos y mínimos claros, con varias velas de separación, y comprueba el caso con otros elementos del análisis.",
      },
      {
        mistake: "Confundir divergencia con reversión garantizada",
        why: "La divergencia informa de que el impulso pierde fuerza; no dice cuándo ocurrirá el giro ni cuánto puede recorrer el precio.",
        fix: "Trátala como una hipótesis que debe ganarse tu confianza con el resto del análisis y con tu plan de riesgo.",
      },
    ],
    related: ["rsi", "macd", "patrones-de-reversa", "tendencias-y-estructura"],
    glossary: ["divergencia", "rsi", "macd", "sobrecompra"],
    quiz: [
      {
        id: "q1",
        question: "Una divergencia bajista se da cuando:",
        options: [
          "El precio y el indicador suben a la vez",
          "El precio marca un máximo más alto y el indicador uno más bajo",
          "El precio cae y el indicador también",
          "El indicador entra en la zona de sobreventa",
        ],
        correct: 1,
        explanation:
          "La discrepancia entre un máximo creciente del precio y uno decreciente del indicador es la divergencia bajista clásica.",
      },
      {
        id: "q2",
        question: "¿Qué informa una divergencia?",
        options: [
          "Que el impulso reciente pierde fuerza relativa",
          "Que el activo se ha quedado sin compradores",
          "Que el broker ha cambiado el spread",
          "Que la tendencia ha terminado siempre",
        ],
        correct: 0,
        explanation:
          "Describe desgaste en el ritmo del movimiento; no certifica nada sobre el final de la tendencia.",
      },
      {
        id: "q3",
        question: "¿Por qué no conviene operar solo con la divergencia?",
        options: [
          "Porque el RSI no admite ese cálculo",
          "Porque puede aparecer varias veces mientras el precio sigue en tendencia",
          "Porque solo funciona en temporalidades de un minuto",
          "Porque siempre se forma en los mismos precios",
        ],
        correct: 1,
        explanation:
          "Sin confirmación del precio, cada aparición temprana termina en una operación contra un movimiento que continúa.",
      },
      {
        id: "q4",
        question: "La divergencia oculta se interpreta como:",
        options: [
          "Una señal de fin del mercado",
          "Una posible continuación de la tendencia vigente",
          "Un error de la plataforma",
          "Una señal de aumento de liquidez",
        ],
        correct: 1,
        explanation:
          "Cuando el indicador no sigue al precio en su corrección, avisa de que la tendencia mantiene su fuerza.",
      },
    ],
  },

  {
    slug: "patrones-de-reversa",
    levelId: 4,
    order: 7,
    title: "Patrones de reversa",
    shortTitle: "Patrones de reversa",
    category: "analisis-tecnico",
    tags: ["doble techo", "doble suelo", "hombro-cabeza-hombro", "cuello"],
    summary:
      "Cómo se forman el doble techo, el doble suelo y el hombro-cabeza-hombro, y por qué solo se confirman al romper el cuello con volumen.",
    keywords: [
      "qué es un doble techo",
      "hombro-cabeza-hombro",
      "línea de cuello",
      "patrones de reversa",
    ],
    readMinutes: 8,
    updatedAt: "2026-02-12",
    explanation: {
      intro:
        "Los patrones de reversa son figuras que aparecen cuando el precio prueba dos o tres veces la misma zona y no consigue avanzar. No confirman nada hasta que el precio rompe la línea que une los puntos intermedios, llamada cuello.",
      paragraphs: [
        "El doble techo se forma tras una subida: el precio llega a una zona, retrocede, vuelve a esa misma zona y fracasa de nuevo. El cuello está en el valle que se forma entre los dos máximos. La figura se completa cuando el precio cierra por debajo de esa línea. El doble suelo es la misma figura invertida, con dos mínimos y un techo intermedio como cuello.",
        "El hombro-cabeza-hombro presenta tres máximos: uno izquierdo, uno central más alto llamado cabeza y uno derecho más bajo. El cuello une los dos mínimos intermedios. Mientras el precio se mantenga por encima del cuello, la figura es solo una sospecha; la ruptura por debajo es lo que la convierte en un patrón confirmado.",
        "El volumen da credibilidad. En la figura ideal, el segundo techo o el hombro derecho se negocian con menos volumen que el primer impulso, y la ruptura del cuello llega acompañada de un aumento claro de actividad. Una ruptura con volumen débil suele ser ruptura falsa y devuelve el precio a la zona anterior.",
        "El objetivo se calcula midiendo la altura de la figura, desde el cuello hasta el extremo opuesto, y proyectándola en el sentido de la ruptura. Es una referencia estadística, no una promesa: el precio puede frenarse mucho antes de llegar o no alcanzarlo nunca.",
      ],
      bullets: [
        "Doble techo: dos rechazos en la misma zona y cuello en el valle intermedio.",
        "Doble suelo: dos apoyos en la misma zona y cuello en el techo intermedio.",
        "Hombro-cabeza-hombro: cabeza más alta y hombros parecidos a los lados.",
        "Confirmación: el cierre por debajo o por encima del cuello.",
      ],
    },
    technical: {
      term: "Línea de cuello",
      body: "El cuello es la línea que une los puntos intermedios de la figura y funciona como nivel de invalidación. Si el precio la atraviesa y cierra al otro lado, la figura queda confirmada; si no lo consigue, la figura se descarta. Su trazado depende de los extremos elegidos, por lo que conviene hacerlo siempre con el mismo criterio.",
      formula: "Objetivo = Cuello − (Cabeza − Cuello)",
      gloss:
        "En un doble techo, la altura es la distancia entre el techo y el cuello; el objetivo se obtiene restando esa altura al nivel del cuello.",
    },
    example: {
      title: "Un doble techo confirmado",
      narrative:
        "Un activo sube hasta 110, retrocede a 104 y vuelve a tocar 110 con menos volumen que la primera vez. Después cae y cierra en 102, por debajo del cuello situado en 104. La figura queda confirmada y su altura, de 6 puntos, marca un objetivo teórico en 98. Quien esperó al cierre bajo el cuello entró con la figura a su favor; quien vendió en el segundo techo se expuso a una figura que todavía no existía.",
      bullets: [
        "Primer máximo: 110.",
        "Cuello: 104.",
        "Segundo máximo: 110 con menos volumen.",
        "Altura de la figura: 6 puntos, objetivo en 98.",
      ],
    },
    chart: buildPreset("doble-techo"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "short",
      entry: 103.5,
      stopLoss: 106.5,
      takeProfit: 97.5,
      outcome: "tp",
      narrative:
        "Venta en 103,50 tras el cierre por debajo del cuello de 104, stop en 106,50 y objetivo en 97,50, muy cerca del objetivo teórico de 98. Riesgo de 3 puntos y recorrido de 6, relación 2 : 1. El aumento de volumen en la ruptura fue el detalle que hizo creíble a la figura.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Dar la figura por válida antes de tiempo",
        why: "Dos máximos parecidos no son un doble techo mientras el precio siga por encima del cuello; muchas figuras se abandonan sin completarse.",
        fix: "Espera al cierre de vela por debajo del cuello antes de tratarla como confirmada.",
      },
      {
        mistake: "Ignorar el volumen en la ruptura",
        why: "Una ruptura sin volumen suele ser ruptura falsa y devuelve el precio a la zona que acababa de abandonar.",
        fix: "Comprueba que la ruptura vaya acompañada de más actividad y, si es posible, de una vela contundente.",
      },
      {
        mistake: "Proyectar el objetivo como si fuera una garantía",
        why: "El objetivo es una medida de la figura; el precio puede frenarse a la mitad del recorrido o ignorarlo por completo.",
        fix: "Úsalo para dimensionar la operación y cierra por partes cuando el precio se acerque sin confirmación.",
      },
    ],
    related: [
      "soportes-y-resistencias",
      "velas-japonesas",
      "rupturas-y-rupturas-falsas",
      "divergencias",
    ],
    glossary: ["soporte", "resistencia", "volumen", "ruptura"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué confirma un doble techo?",
        options: [
          "El segundo toque de la misma zona",
          "El cierre por debajo de la línea de cuello",
          "Un máximo más alto que el anterior",
          "La reducción del número de velas",
        ],
        correct: 1,
        explanation:
          "Hasta que el precio cierra al otro lado del cuello, la figura sigue siendo una hipótesis sin validar.",
      },
      {
        id: "q2",
        question: "En un hombro-cabeza-hombro, el cuello:",
        options: [
          "Une los dos máximos de la figura",
          "Une los dos mínimos intermedios",
          "Se traza sobre la cabeza",
          "Es el máximo histórico del activo",
        ],
        correct: 1,
        explanation:
          "La línea de cuello conecta los valles entre hombro, cabeza y hombro, y actúa como nivel de invalidación.",
      },
      {
        id: "q3",
        question: "¿Qué papel juega el volumen en estos patrones?",
        options: [
          "Indica el precio objetivo de la figura",
          "El aumento en la ruptura da credibilidad a la figura",
          "No tiene ninguna importancia",
          "Marca el nivel exacto del cuello",
        ],
        correct: 1,
        explanation:
          "Un impulso con volumen en la ruptura muestra participación; sin él, la figura suele quedarse en ruptura falsa.",
      },
      {
        id: "q4",
        question: "¿Cómo se obtiene el objetivo de la figura?",
        options: [
          "Sumando el spread al precio de entrada",
          "Proyectando la altura de la figura desde el cuello",
          "Multiplicando el ATR por el número de velas",
          "Tomando el cierre de la sesión anterior",
        ],
        correct: 1,
        explanation:
          "Se mide la distancia entre el cuello y el extremo de la figura y se traslada en el sentido de la ruptura.",
      },
    ],
  },

  {
    slug: "atr-y-volatilidad",
    levelId: 4,
    order: 8,
    title: "ATR y volatilidad",
    shortTitle: "ATR y volatilidad",
    category: "indicadores",
    tags: ["ATR", "volatilidad", "stops", "tamaño de posición"],
    summary:
      "Qué mide el ATR, para qué sirve ajustar el stop y el tamaño de posición con él y cómo cambia la volatilidad entre mercados y momentos.",
    keywords: [
      "qué es el ATR",
      "rango verdadero medio",
      "volatilidad del mercado",
      "ajustar el stop con el ATR",
    ],
    readMinutes: 7,
    updatedAt: "2026-02-13",
    explanation: {
      intro:
        "El ATR mide cuánto se mueve un activo en promedio durante un periodo determinado. No indica dirección: solo cuantifica la amplitud habitual de las velas para que puedas adaptar tu operativa a ese ritmo.",
      paragraphs: [
        "Para calcularlo se toma el rango verdadero de cada vela, que no es solo la distancia entre su máximo y su mínimo, sino también la mayor de las distancias respecto al cierre anterior. Ese valor se promedia durante el periodo, normalmente 14 velas, y se obtiene una cifra en puntos o en precios del activo.",
        "Sus aplicaciones prácticas son tres. Sirve para colocar el stop a una distancia que el ruido normal no alcance, para ajustar el tamaño de posición cuando cambia la volatilidad y para comparar la amplitud de dos mercados distintos antes de operarlos con el mismo plan.",
        "La volatilidad no es constante. El ATR se expande durante las noticias y las aperturas, se contrae en periodos tranquilos y suele normalizarse después de cada pico. Tras una compresión larga de rangos suele venir expansión, pero eso no dice nada sobre el sentido en el que se producirá.",
        "Entre mercados la diferencia es grande. Un índice, un par de divisas menor y una cripto cotizan con amplitudes muy distintas, y comparar el valor absoluto del ATR de uno con otro sin ajustarlo no aporta información. Lo que importa es la relación entre el ATR y el nivel de precio.",
      ],
      bullets: [
        "Mide amplitud media del movimiento, sin indicar dirección.",
        "Sirve para dimensionar el stop y el tamaño de la posición.",
        "Crece con la volatilidad y se contrae en periodos tranquilos.",
        "Cada mercado y cada temporalidad tienen su propio ATR.",
      ],
    },
    technical: {
      term: "Rango verdadero medio (ATR)",
      body: "El rango verdadero amplía el rango de la vela para incluir los huecos entre sesiones: si el mercado abre muy lejos del cierre anterior, ese salto cuenta. Promediar esos valores durante 14 velas da una medida estable de cuánto se mueve el activo de forma habitual. El ATR no entra en ningún cálculo de dirección ni de valor.",
      formula:
        "TR = Mayor de (Máx − Mín, |Máx − Cierre previo|, |Mín − Cierre previo|) | ATR = Media de los TR",
      gloss:
        "Si el ATR de un activo es 1,6 puntos, una vela normal recorre en torno a esa distancia; un stop de 0,4 puntos se ejecuta con cualquier sacudida.",
    },
    example: {
      title: "Mismo riesgo, distinta volatilidad",
      narrative:
        "Dos activos cotizan en torno a 100, pero uno mueve 4 puntos por vela y el otro 1 punto. Un stop fijado a 2 puntos queda a media vela de distancia en el primero y a dos velas en el segundo. Para arriesgar lo mismo en ambos, la distancia del stop debe salir del ATR y el tamaño de la posición, a su vez, de esa distancia.",
      bullets: [
        "Activo con ATR de 4: un stop de 2 puntos se alcanza con facilidad.",
        "Activo con ATR de 1: ese mismo stop queda muy lejos del ruido.",
        "Regla práctica: stop igual a un multiplicador del ATR.",
        "Tamaño de posición en función de la distancia al stop.",
      ],
    },
    chart: buildPreset("volatilidad"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 112,
      outcome: "sl",
      narrative:
        "Compra en 100 con un ATR de 1,6 y un stop ajustado a 2,5 veces el ATR, es decir, en 96. El precio hizo una corrección normal de cinco puntos, tocó el stop y después continuó hasta 109 sin nosotros. Un multiplicador demasiado apretado saca de la operación antes de que la idea se desarrolle.",
      capital: 2_500,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Usar la misma distancia de stop en todos los mercados",
        why: "Lo que es una sacudida normal en un mercado puede ser un movimiento extremo en otro, así que el stop se ejecuta sin motivo real.",
        fix: "Calcula el stop a partir del ATR del activo y de la temporalidad que estás operando.",
      },
      {
        mistake: "Leer el ATR como una señal de dirección",
        why: "El ATR solo mide amplitud: un valor alto no dice si el precio sube ni si baja, solo que se mueve mucho.",
        fix: "Combínalo con la estructura del precio para decidir la dirección y úsalo únicamente para dimensionar.",
      },
      {
        mistake: "Mantener el tamaño tras un cambio de volatilidad",
        why: "Si la volatilidad se duplica y el tamaño sigue igual, el riesgo de cada operación también se duplica sin que tú lo decidieras.",
        fix: "Recalcula el tamaño cada vez que el ATR del activo cambie de forma notable.",
      },
    ],
    related: [
      "stop-loss",
      "tamano-de-posicion",
      "temporalidades",
      "velas-japonesas",
    ],
    glossary: ["atr", "volatilidad", "stop-loss", "riesgo"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué mide el ATR?",
        options: [
          "La amplitud media de las velas del periodo, sin indicar dirección",
          "El porcentaje de velas alcistas",
          "La distancia del precio hasta su media móvil",
          "El volumen medio negociado por vela",
        ],
        correct: 0,
        explanation:
          "El ATR promedia el rango verdadero de las velas: cuánto se mueve el activo, no hacia dónde.",
      },
      {
        id: "q2",
        question: "¿Para qué sirve el ATR a la hora de colocar el stop loss?",
        options: [
          "Para fijarlo siempre en el mismo número de puntos",
          "Para separarlo lo suficiente del ruido normal del mercado",
          "Para calcular el beneficio esperado",
          "Para elegir el broker adecuado",
        ],
        correct: 1,
        explanation:
          "Un stop basado en el ATR aguanta las sacudidas habituales y reduce las salidas por movimientos sin importancia.",
      },
      {
        id: "q3",
        question: "Si la volatilidad de un activo se duplica y mantienes el mismo tamaño de posición:",
        options: [
          "El riesgo por operación también se duplica",
          "El riesgo no varía en absoluto",
          "El stop se vuelve más amplio automáticamente",
          "El objetivo sube de precio",
        ],
        correct: 0,
        explanation:
          "Con el mismo tamaño y recorridos mayores, cada operación arriesga más dinero sin que lo hayas decidido.",
      },
      {
        id: "q4",
        question: "¿Qué NO puede decirte el ATR?",
        options: [
          "Cuánto se mueve el activo por vela",
          "Si el precio va a subir o a bajar",
          "Qué distancia de stop es razonable",
          "Cómo de tranquilo está el mercado",
        ],
        correct: 1,
        explanation:
          "El ATR es una medida pura de amplitud; la dirección siempre la aporta el análisis del precio.",
      },
    ],
  },
];
