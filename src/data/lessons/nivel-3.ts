import type { Lesson } from "~/types";
import { buildPreset, buildScenario } from "../charts/presets";

export const level3Lessons: Lesson[] = [
  {
    slug: "entradas-y-ordenes",
    levelId: 3,
    order: 1,
    title: "Entradas y órdenes",
    shortTitle: "Entradas y órdenes",
    category: "operaciones",
    tags: ["órdenes", "entrada", "bid y ask", "ejecución"],
    summary:
      "Qué es una orden a mercado y una orden limitada, cómo se forman los precios de compra y de venta, y cuándo conviene usar cada tipo.",
    keywords: ["tipos de órdenes", "orden a mercado", "orden limitada", "precios bid y ask"],
    readMinutes: 6,
    updatedAt: "2026-01-27",
    explanation: {
      intro:
        "Toda operación empieza con una orden: le dices al mercado a qué precio quieres entrar y qué debe ocurrir después. Elegir mal el tipo de orden es una de las formas más rápidas de arruinar una idea bien analizada.",
      paragraphs: [
        "Una orden a mercado se ejecuta de inmediato al mejor precio disponible. Prioriza entrar, no el precio exacto: en un mercado líquido la diferencia con lo que ves en pantalla es mínima, pero en uno poco líquido o en un instante de alta volatilidad puede resultar notable.",
        "Una orden limitada, en cambio, solo se ejecuta si el mercado llega al precio que fijas o lo mejora. Protege tu precio a cambio de otro riesgo: si el precio no llega, la operación simplemente no existe. Muchos principiantes viven eso como un fallo, cuando en realidad es el mercado negándose a darte la entrada que pediste.",
        "En pantalla hay siempre dos precios. El bid es el precio al que puedes vender y el ask el precio al que puedes comprar; la diferencia entre ambos es el spread. Cuando compras a mercado te ejecutas en el ask y cuando vendes a mercado, en el bid.",
        "La elección depende de qué priorices en ese momento: si el precio ya está donde debe estar y no quieres que se te vaya, limitada; si la ruptura acaba de ocurrir y perder la vela significa perder la idea, a mercado. Ninguna de las dos es superior a la otra.",
      ],
      bullets: [
        "Orden a mercado: ejecución inmediata, precio no garantizado.",
        "Orden limitada: precio garantizado o mejor, ejecución no garantizada.",
        "Bid: precio al que puedes vender. Ask: precio al que puedes comprar.",
        "El spread es el coste implícito de cruzar de un lado al otro.",
      ],
    },
    technical: {
      term: "Órdenes de entrada: mercado y limitada",
      body: "Una orden lleva cuatro datos: dirección (compra o venta), cantidad, tipo (mercado o limitada) y, si la hay, un precio. La orden a mercado se envía con la instrucción de ejecutar contra la mejor contraparte disponible; la orden limitada viaja con un precio máximo de compra o mínimo de venta y solo se empareja si el mercado lo alcanza. Si la cantidad disponible es inferior a la pedida, la orden se ejecuta en parte y el resto queda pendiente.",
      formula: "Spread = Ask − Bid",
      gloss:
        "Si el bid está en 100,00 y el ask en 100,04, comprar a mercado te cuesta 100,04 y vender a mercado te paga 100,00.",
    },
    example: {
      title: "Dos entradas para la misma idea",
      narrative:
        "El precio rompe un nivel en 100 con la intención de subir hacia 106. Si envías una orden limitada en 100,02 y el precio se dispara a 100,60 sin tocar tu nivel, no entras y te quedas mirando la subida. Si envías una orden a mercado, entras cerca de 100,60: pagas peor precio, pero participas. La tercera opción, esperar un retroceso a 100,02, también es una orden limitada y a veces se ejecuta y a veces no.",
      bullets: [
        "Orden limitada en 100,02: mejor precio, ejecución incierta.",
        "Orden a mercado: ejecución segura, precio peor.",
        "Ninguna opción es superior: depende de la idea y del momento.",
      ],
    },
    chart: buildPreset("entrada-ruptura"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96.8,
      takeProfit: 106.4,
      outcome: "tp",
      narrative:
        "Compra a mercado en 100 con stop en 96,80 y objetivo en 106,40: 3,20 unidades de riesgo y 6,40 de recorrido, relación 2 : 1. Si en ese mismo instante el ask estuviera en 100,04, entrarías a mercado en 100,04 y el riesgo real sería de 3,24 en lugar de 3,20. La diferencia es pequeña, pero se repite en cada operación.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Mandar una orden a mercado con el spread muy abierto",
        why: "En un momento de poca liquidez el ask puede estar bastante por encima del último precio que viste en el gráfico.",
        fix: "Comprueba la anchura del spread antes de entrar y usa una orden limitada si la diferencia es grande.",
      },
      {
        mistake: "Creer que la orden limitada se ejecuta siempre",
        why: "Si el precio no llega a tu nivel, la operación no existe y puedes quedarte fuera de un movimiento que esperabas.",
        fix: "Decide de antemano cuánto estás dispuesto a esperar y qué harás si la orden no se llena.",
      },
      {
        mistake: "Cambiar el precio de la orden mientras el mercado se mueve",
        why: "Persiguir el precio convierte una decisión preparada en una reacción a lo que ves en pantalla.",
        fix: "Envía la orden con el precio ya elegido y no la toques hasta que se cumpla o desaparezca tu condición.",
      },
    ],
    related: ["que-significa-comprar-y-vender", "que-es-un-broker", "stop-loss"],
    glossary: ["orden-a-mercado", "orden-limitada", "bid", "ask", "spread"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuál es la diferencia principal entre una orden a mercado y una orden limitada?",
        options: [
          "La a mercado prioriza la ejecución; la limitada prioriza el precio",
          "La a mercado no se puede cancelar; la limitada tampoco",
          "La limitada siempre se ejecuta al instante",
          "Solo la orden a mercado sirve para vender",
        ],
        correct: 0,
        explanation:
          "La orden a mercado entra ya con precio disponible; la limitada exige un precio concreto y puede no llenarse.",
      },
      {
        id: "q2",
        question: "Si el bid es 100,00 y el ask es 100,05, ¿a qué precio compras con una orden a mercado?",
        options: ["A 100,00", "A 100,05", "A 100,025", "Al precio de apertura"],
        correct: 1,
        explanation:
          "Al comprar te ejecutas contra la mejor oferta de venta disponible, es decir, contra el ask.",
      },
      {
        id: "q3",
        question: "¿Cuándo tiene más sentido una orden limitada?",
        options: [
          "Cuando el precio ya se está alejando y no quieres perderte la vela",
          "Cuando tienes un nivel concreto de entrada y prefieres no pagar más que eso",
          "Cuando el mercado está muy quieto y no hay spread",
          "Cuando quieres entrar con el tamaño máximo posible",
        ],
        correct: 1,
        explanation:
          "La orden limitada fija el precio máximo que aceptas; si el mercado no llega, prefieres no entrar.",
      },
      {
        id: "q4",
        question: "¿Qué ocurre si envías una orden limitada de compra en 100 y el precio solo llega a 99,80?",
        options: [
          "Se ejecuta a 100 igualmente",
          "Se ejecuta a 99,80 porque es mejor precio para ti",
          "No se ejecuta mientras no llegue a tu nivel",
          "Se cancela y además pagas comisión",
        ],
        correct: 2,
        explanation:
          "La orden limitada de compra exige llegar al precio fijado o mejorarlo; si el precio queda por debajo, sigue pendiente.",
      },
    ],
  },

  {
    slug: "stop-loss",
    levelId: 3,
    order: 2,
    title: "Stop loss: poner el límite antes de entrar",
    shortTitle: "Stop loss",
    category: "operaciones",
    tags: ["stop loss", "riesgo", "estructura", "salida"],
    summary:
      "Para qué sirve colocar el stop antes de entrar, cómo se sitúa sobre la estructura del gráfico y qué es el deslizamiento al ejecutarlo.",
    keywords: ["qué es un stop loss", "dónde colocar el stop", "stop loss estructural"],
    readMinutes: 7,
    updatedAt: "2026-01-28",
    explanation: {
      intro:
        "El stop loss es la orden que cierra tu posición si el precio llega a un nivel que has elegido. Su función no es evitar perder: es decidir de antemano cuánto estás dispuesto a perder en cada operación.",
      paragraphs: [
        "Colocarlo antes de entrar cambia por completo la operación, porque la decisión ya está tomada cuando el precio empieza a moverse en tu contra. Sin stop, la pérdida crece mientras improvisas una justificación, y la salida llega tarde y en el peor momento.",
        "El sitio con sentido es el de la estructura: en una compra, algo por debajo del soporte que sostiene la idea; en una venta, algo por encima de la resistencia. Ese nivel es el punto en el que tu hipótesis deja de valer. Colocarlo en un número redondo o donde la pérdida resulte cómoda no dice nada sobre el mercado.",
        "La distancia al stop decide el riesgo de la operación, y de ahí sale el tamaño de la posición. Si el stop está demasiado cerca, el ruido normal lo alcanza sin que la idea falle; si está demasiado lejos, hay que reducir el tamaño hasta que la pérdida sea aceptable.",
        "Al activarse, el stop se convierte en orden de mercado. En una vela rápida o en un mercado poco líquido puede ejecutarse algo por debajo de lo previsto: ese exceso se llama deslizamiento. No es un fallo del broker, es la consecuencia de cómo se ejecutan las órdenes.",
      ],
      bullets: [
        "El stop define el error, no la esperanza de que el precio gire.",
        "Se sitúa donde la idea queda invalidada, no donde resulta cómodo.",
        "Distancia al stop multiplicada por el tamaño es el riesgo real.",
        "Al activarse se ejecuta a mercado y puede salir algo peor de lo previsto.",
      ],
    },
    technical: {
      term: "Stop loss y deslizamiento",
      body: "El stop loss es una orden condicionada: mientras no se alcanza el nivel permanece inactiva y, al tocarse, se envía como orden de mercado en la dirección contraria. Por eso su precio de ejecución no es exactamente el nivel fijado, sino el mejor precio disponible en ese instante. La diferencia entre el nivel marcado y el precio real de salida es el deslizamiento, y crece con la volatilidad y con la falta de contraparte.",
      formula: "Riesgo = Distancia al stop × Tamaño de la posición",
      gloss:
        "En una compra en 100 con stop en 95,50, cada unidad arriesga 4,50 antes de contar el coste de la operación.",
    },
    example: {
      title: "El stop detrás de la estructura",
      narrative:
        "Un activo forma un suelo en 97 y rebota hasta 100. Compras en 100 porque esperas que el rebote continúe. Si el precio vuelve a 97, el suelo ha fallado y la idea ya no sirve: el stop tiene sentido algo por debajo, digamos en 96,40. Colocarlo en 99 por miedo a perder mucho convierte cualquier vibración normal en una salida anticipada.",
      bullets: [
        "Suelo de la estructura: 97.",
        "Stop con margen: 96,40.",
        "Riesgo: 3,60 unidades por unidad comprada.",
        "Si el precio rompe 97 y sigue bajando, la operación ya se cerró.",
      ],
    },
    chart: buildPreset("stop-loss"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 95,
      takeProfit: 110,
      outcome: "sl",
      narrative:
        "Compra en 100 con stop en 95 y objetivo en 110. El precio toca 95 y la operación se cierra con 5 unidades de pérdida por unidad comprada. En la ejecución real la salida fue a 94,85 por deslizamiento: 5,15 en lugar de 5,00. El riesgo previsto y el riesgo real casi coinciden porque el stop estaba en un nivel con contraparte.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Colocar el stop en un número redondo",
        why: "Los números redondos no significan nada para el mercado y ahí suelen agruparse muchas órdenes, con lo que el precio las barre antes de girar.",
        fix: "Sitúa el stop detrás del soporte o la resistencia que sostiene la idea, con un pequeño margen.",
      },
      {
        mistake: "Acercar el stop para poder operar más grande",
        why: "Un stop muy cerca se activa con el ruido normal del precio y la operación muere sin que la idea haya fallado.",
        fix: "Fija primero la distancia que exige la estructura y calcula después el tamaño que encaja con tu riesgo.",
      },
      {
        mistake: "Ampliar el stop cuando el precio se acerca",
        why: "Ampliarlo retrasa la salida, pero duplica la pérdida que ya habías aceptado al entrar.",
        fix: "Si el precio se acerca sin romper el nivel, considera llevar la operación a punto de equilibrio en lugar de ampliar el riesgo.",
      },
    ],
    related: ["que-significa-comprar-y-vender", "soportes-y-resistencias", "break-even-y-salidas"],
    glossary: ["stop-loss", "slippage", "soporte", "resistencia"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuál es la función principal de un stop loss?",
        options: [
          "Aumentar el beneficio de la operación",
          "Limitar la pérdida a un nivel decidido antes de entrar",
          "Evitar pagar el spread",
          "Garantizar que el precio no baje",
        ],
        correct: 1,
        explanation:
          "El stop no mejora el resultado: fija de antemano la pérdida máxima y con ella el tamaño correcto de la posición.",
      },
      {
        id: "q2",
        question: "¿Dónde tiene sentido situarlo?",
        options: [
          "En el número redondo más cercano a la entrada",
          "Justo en el precio de entrada para no perder",
          "Donde la idea queda invalidada, detrás de la estructura",
          "A la distancia que permita operar el mayor tamaño",
        ],
        correct: 2,
        explanation:
          "El punto de invalidación es el único lugar con lógica: es donde tu hipótesis deja de estar viva.",
      },
      {
        id: "q3",
        question: "¿Qué es el deslizamiento?",
        options: [
          "La comisión que cobra el broker por ejecutar el stop",
          "La diferencia entre el nivel del stop y el precio real de ejecución",
          "El movimiento del precio antes de que coloques la orden",
          "El interés que se paga por mantener la posición",
        ],
        correct: 1,
        explanation:
          "Al activarse el stop se envía a mercado, así que puede salir algo peor del nivel marcado, sobre todo en velas rápidas.",
      },
      {
        id: "q4",
        question: "Si el stop que exige la estructura queda demasiado lejos, ¿qué haces?",
        options: [
          "Lo acercas hasta donde te resulte cómodo",
          "Esperas a ampliarlo cuando el precio se acerque",
          "Reducir el tamaño de la posición para que esa distancia sea aceptable",
          "Operas sin stop para aprovechar el recorrido",
        ],
        correct: 2,
        explanation:
          "La distancia la marca el mercado; quien se ajusta eres tú, y la herramienta para eso es el tamaño.",
      },
    ],
  },

  {
    slug: "take-profit-y-riesgo-beneficio",
    levelId: 3,
    order: 3,
    title: "Take profit y relación riesgo/beneficio",
    shortTitle: "Take profit y riesgo/beneficio",
    category: "operaciones",
    tags: ["take profit", "riesgo/beneficio", "salidas", "tasa de acierto"],
    summary:
      "Cómo se fija el objetivo de salida, cómo se mide la relación riesgo/beneficio y por qué una tasa de acierto baja puede ser rentable.",
    keywords: ["qué es el take profit", "relación riesgo beneficio", "ratio de beneficio"],
    readMinutes: 7,
    updatedAt: "2026-01-29",
    explanation: {
      intro:
        "El take profit es la orden que cierra tu posición con beneficio cuando el precio llega al nivel que fijaste. Sin él, una operación que estaba en positivo puede volver a negativa mientras decides.",
      paragraphs: [
        "El objetivo se elige antes de entrar y en un lugar con sentido: el siguiente nivel de resistencia en una compra, el siguiente soporte en una venta, o la extensión que marca tu plan. Elegirlo porque ese número te deja conforme repite el error del stop redondo, solo que en el lado de las ganancias.",
        "La relación riesgo/beneficio compara dos distancias: de la entrada al stop y de la entrada al objetivo. Si arriesgas 5 unidades para buscar 10, la relación es 1 : 2. Con 1 : 1 buscas lo mismo que arriesgas, y esa es la frontera a partir de la cual hace falta acertar más de la mitad de las veces para no perder dinero.",
        "Una tasa de acierto baja puede ser rentable con una relación alta. En diez operaciones con relación 1 : 2, cuatro aciertos suman 8 y seis pérdidas restan 6: resultado neto de 2 antes de costes. Con la misma serie y relación 1 : 1, los mismos cuatro aciertos suman 4 y las seis pérdidas restan 6: resultado de −2.",
        "No existe una relación mágica. Un objetivo muy lejano se alcanza pocas veces y una operación que nunca llega no paga; uno muy cercano apenas deja margen para cubrir los costes. La relación buena es la que el recorrido del precio permite de verdad.",
      ],
      bullets: [
        "Riesgo: distancia entre la entrada y el stop.",
        "Beneficio: distancia entre la entrada y el objetivo.",
        "Relación 1 : 2 significa dos unidades buscadas por cada una arriesgada.",
        "Con 1 : 2, acertar 4 de cada 10 operaciones ya deja beneficio antes de costes.",
      ],
    },
    technical: {
      term: "Relación riesgo/beneficio",
      body: "La relación riesgo/beneficio es el cociente entre el recorrido esperado hasta el objetivo y la distancia hasta el stop. Se calcula antes de entrar y no vuelve a modificarse durante la operación, porque hacerlo equivale a cambiar las reglas a mitad de partida. En la práctica también hay que descontar los costes, que restan recorrido al objetivo y añaden recorrido a la pérdida.",
      formula: "Relación = (Objetivo − Entrada) ÷ (Entrada − Stop)",
      gloss:
        "Con entrada en 100, stop en 95 y objetivo en 110, el riesgo es 5 y el beneficio 10: relación 1 : 2.",
    },
    example: {
      title: "Diez operaciones con relación 1 : 2",
      narrative:
        "Supón diez operaciones con relación 1 : 2 en las que aciertas cuatro y fallas seis. Cada acierto suma 2 puntos y cada fallo resta 1: ocho a favor, seis en contra, resultado neto de 2 puntos. Con la misma serie y relación 1 : 1, cuatro aciertos suman 4 y seis fallos restan 6: resultado de −2. El número de aciertos no cambia; cambia el reparto de cada resultado.",
      bullets: [
        "4 aciertos × 2 = +8.",
        "6 fallos × 1 = −6.",
        "Neto con 1 : 2 → +2 antes de costes.",
        "Neto con 1 : 1 → −2 antes de costes.",
      ],
    },
    chart: buildScenario("take-profit-y-riesgo-beneficio", {
      entry: 100,
      stopLoss: 95,
      takeProfit: 110,
      outcome: "tp",
      caption: "Ejemplo ficticio: riesgo 5 y objetivo 10",
      description:
        "La entrada en 100 con stop en 95 y objetivo en 110 dibuja una relación 1 : 2. Con ese reparto hace falta acertar más de una de cada tres operaciones para que la serie sea rentable antes de costes.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 95,
      takeProfit: 110,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 95 y objetivo en 110. El precio llega al objetivo y la operación gana 10 unidades por unidad comprada, el doble de lo arriesgado. En una serie de diez operaciones con esta relación, cuatro aciertos suman 40 y seis fallos restan 30: quedan 10 antes de costes, aunque se haya fallado la mayoría de las veces.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Fijar el objetivo después de entrar",
        why: "La emoción empuja a cobrar pronto cuando hay beneficio y a esperar de más cuando hay pérdida.",
        fix: "Escribe stop y objetivo antes de enviar la orden y no los cambies mientras la operación esté viva.",
      },
      {
        mistake: "Buscar objetivos muy lejanos solo por mejorar la cifra",
        why: "La relación en papel mejora, pero el precio llega pocas veces y una operación que no se cierra no paga nada.",
        fix: "Elige el objetivo en el siguiente nivel real del gráfico y ajusta el tamaño para que el riesgo siga siendo el previsto.",
      },
      {
        mistake: "Confundir la tasa de acierto con la rentabilidad",
        why: "Se puede acertar en la mayoría de las operaciones y perder dinero si cada fallo es mayor que cada acierto.",
        fix: "Mide la media de tus ganancias frente a la media de tus pérdidas, no solo cuántas veces aciertas.",
      },
    ],
    related: ["que-es-el-trading", "stop-loss", "tamano-de-posicion"],
    glossary: ["take-profit", "riesgo-beneficio", "stop-loss", "riesgo"],
    quiz: [
      {
        id: "q1",
        question: "Si arriesgas 3 puntos buscando 6, ¿qué relación riesgo/beneficio tienes?",
        options: ["1 : 1", "1 : 2", "2 : 1", "3 : 1"],
        correct: 1,
        explanation:
          "Se divide el recorrido buscado entre el riesgo asumido: 6 ÷ 3 = 2, es decir, relación 1 : 2.",
      },
      {
        id: "q2",
        question: "¿Qué mide la relación riesgo/beneficio?",
        options: [
          "Cuántas operaciones seguidas puedes perder",
          "La distancia entre el objetivo y la entrada, comparada con la distancia hasta el stop",
          "El porcentaje de capital que ganas al mes",
          "La velocidad a la que se mueve el precio",
        ],
        correct: 1,
        explanation:
          "Compara el recorrido que buscas con el recorrido que aceptas perder; no dice nada sobre la probabilidad de acierto.",
      },
      {
        id: "q3",
        question: "Con una relación 1 : 2, ¿qué tasa de acierto te deja sin perder antes de costes?",
        options: ["La mitad", "Un tercio", "El 90 %", "Ninguna, siempre se pierde"],
        correct: 1,
        explanation:
          "Por cada acierto de 2 hacen falta dos fallos de 1 para anularlo, así que con acertar más de un tercio se queda en positivo.",
      },
      {
        id: "q4",
        question: "¿Dónde conviene situar el take profit?",
        options: [
          "En el número que te resulte cómodo",
          "En un nivel con sentido del mercado y dentro del recorrido que el precio permite",
          "Siempre a diez veces el riesgo",
          "Donde el broker te sugiera",
        ],
        correct: 1,
        explanation:
          "El objetivo lo marca la estructura del gráfico; una relación bonita que el precio no alcanza no genera ningún resultado.",
      },
    ],
  },

  {
    slug: "tamano-de-posicion",
    levelId: 3,
    order: 4,
    title: "Tamaño de posición",
    shortTitle: "Tamaño de posición",
    category: "operaciones",
    tags: ["tamaño de posición", "lotes", "pips", "cálculo de riesgo"],
    summary:
      "Cómo se calcula cuántas unidades comprar o vender a partir del riesgo que decides asumir y de la distancia a tu stop.",
    keywords: ["cómo calcular el tamaño de posición", "tamaño de lote", "valor del pip"],
    readMinutes: 7,
    updatedAt: "2026-01-30",
    explanation: {
      intro:
        "El tamaño de posición es la cantidad que compras o vendes. No lo decide la confianza que tengas en la idea: se calcula a partir de dos datos que ya tienes, el riesgo que quieres asumir y la distancia hasta tu stop.",
      paragraphs: [
        "El primer paso es el riesgo en dinero. Si tu cuenta ficticia tiene 3.000 y decides arriesgar el 1 % en cada operación, tu pérdida máxima permitida es de 30. Ese número no cambia aunque una operación te parezca mejor que otra: es el límite que sostiene toda la serie.",
        "El segundo paso es la distancia al stop. Si el stop está a 40 pips de la entrada, cada pip que se mueve el precio en tu contra cuesta una cantidad proporcional a tu tamaño. Multiplicar la distancia por el valor del pip te da la pérdida de cada lote completo, y con ella se invierte el cálculo.",
        "El valor del pip depende del par y del tamaño que uses, y se consulta en la plataforma antes de operar. Si no lo sabes, no sabes cuánto arriesgas: es el dato que convierte una idea difusa en una cifra concreta. En los activos que no se operan por lotes se sustituye por el valor de cada punto o de cada unidad.",
        "El tamaño también es lo que te permite respetar la estructura. Con un stop alejado, un tamaño grande haría la pérdida inaceptable; reduciéndolo, la misma distancia resulta soportable y tu operación deja de depender de que el precio no respire.",
      ],
      bullets: [
        "Riesgo máximo = Capital × Riesgo por operación.",
        "Tamaño = Riesgo máximo ÷ (Distancia al stop × Valor del pip).",
        "Si no conoces el valor del pip, no conoces tu riesgo.",
        "El tamaño se calcula antes de enviar la orden, nunca después.",
      ],
    },
    technical: {
      term: "Tamaño de posición y valor del pip",
      body: "El tamaño de posición es el número de unidades, acciones o lotes que componen la operación. El valor del pip indica cuánto cambia el valor de esa posición por cada movimiento de un pip en el par elegido, y suele calcularse para un lote estándar para luego escalarlo en proporción. Multiplicar la distancia al stop por ese valor te da la pérdida de cada lote, de donde sale directamente el tamaño que encaja con tu riesgo.",
      formula: "Tamaño = Riesgo máximo ÷ (Distancia al stop × Valor del pip)",
      gloss:
        "Con 30 de riesgo permitido, un stop a 40 pips y un valor de pip de 8 por lote, el tamaño que encaja es de 0,09 lote.",
    },
    example: {
      title: "De la cuenta al lote",
      narrative:
        "Tu cuenta ficticia tiene 3.000 y decides arriesgar el 1 % en cada operación, es decir 30. El stop está a 40 pips de la entrada y el valor del pip en tu par es de 8 por lote completo. Cada lote arriesgaría 320, así que el tamaño que encaja es 30 ÷ 320 ≈ 0,09 lote. Redondeado a la baja, arriesgas 28,80: por debajo de tu límite y sin tocar el stop.",
      bullets: [
        "Riesgo permitido: 30 (1 % de 3.000).",
        "Riesgo por lote: 40 pips × 8 = 320.",
        "Tamaño elegido: 0,09 lote.",
        "Riesgo real: 0,09 × 320 = 28,80.",
      ],
    },
    chart: buildScenario("tamano-de-posicion", {
      entry: 100,
      stopLoss: 98,
      takeProfit: 106,
      outcome: "tp",
      caption: "Ejemplo ficticio: dos unidades de riesgo y seis de recorrido",
      description:
        "Con la entrada en 100 y el stop en 98, cada unidad comprada arriesga 2. Conocida esa cifra, el tamaño se ajusta para que la pérdida total coincida con el riesgo elegido.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 98,
      takeProfit: 106,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 98 y objetivo en 106: 2 unidades de riesgo y 6 de recorrido, relación 1 : 3. Con un capital de 4.000 y un riesgo del 1 %, el riesgo máximo es 40; como cada unidad arriesga 2, el tamaño que encaja es de 20 unidades. El precio llega al objetivo y la operación suma 120, tres veces el riesgo asumido.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Elegir primero el tamaño y ajustar el stop después",
        why: "El stop queda donde entra dinero en lugar de donde la idea falla, y la operación pierde su lógica.",
        fix: "Fija el stop por estructura, mide la distancia y calcula con ella el tamaño.",
      },
      {
        mistake: "Olvidar el valor del pip o del punto",
        why: "Sin ese dato el riesgo es una conjetura: dos pares con la misma distancia al stop pueden costar el triple.",
        fix: "Consulta el valor en la plataforma antes de operar y vuelve a comprobarlo si cambias de par o de tamaño.",
      },
      {
        mistake: "Agrandar el tamaño en las operaciones que más te gustan",
        why: "La convicción no altera la probabilidad; solo amplifica el error si la idea sale mal.",
        fix: "Aplica el mismo riesgo en todas las operaciones y deja que la relación riesgo/beneficio haga su trabajo.",
      },
    ],
    related: ["que-es-forex", "stop-loss", "apalancamiento-y-margen"],
    glossary: ["lote", "pip", "posicion", "capital", "stop-loss"],
    quiz: [
      {
        id: "q1",
        question: "¿Por qué se calcula el tamaño a partir de la distancia al stop?",
        options: [
          "Porque el broker lo exige siempre",
          "Porque esa distancia es lo que pierde cada unidad de la posición",
          "Porque cuanto más lejos esté el stop, más se gana",
          "Porque el tamaño determina el precio de entrada",
        ],
        correct: 1,
        explanation:
          "Multiplicar la distancia por el tamaño da la pérdida total, así que el tamaño se deduce de esa misma distancia.",
      },
      {
        id: "q2",
        question: "Cuenta de 2.000, riesgo del 1 %, stop a 25 pips y valor del pip de 10 por lote. ¿Qué tamaño encaja?",
        options: ["0,08 lote", "0,80 lote", "8 lotes", "2,50 lotes"],
        correct: 0,
        explanation:
          "Riesgo permitido 20; cada lote arriesga 25 × 10 = 250; el tamaño es 20 ÷ 250 = 0,08 lote.",
      },
      {
        id: "q3",
        question: "¿Qué ocurre si ignoras el valor del pip?",
        options: [
          "Nada, el riesgo lo fija el stop",
          "No sabes cuánto dinero arriesgas por cada movimiento del precio",
          "El broker ajusta el tamaño por ti",
          "La operación solo se puede hacer en acciones",
        ],
        correct: 1,
        explanation:
          "Sin ese valor, la distancia al stop no se traduce en dinero y el riesgo queda sin calcular.",
      },
      {
        id: "q4",
        question: "El stop que exige la estructura queda demasiado lejos para tu riesgo. ¿Qué haces?",
        options: [
          "Acercas el stop para conservar el tamaño",
          "Aumentas el riesgo por operación hasta que encaje",
          "Reducir el tamaño de la posición",
          "Operas sin stop y colocas uno más tarde",
        ],
        correct: 2,
        explanation:
          "La distancia la marca el mercado; la única variable que controlas tú es el tamaño, y con él el dinero en riesgo.",
      },
    ],
  },

  {
    slug: "apalancamiento-y-margen",
    levelId: 3,
    order: 5,
    title: "Apalancamiento y margen",
    shortTitle: "Apalancamiento y margen",
    category: "operaciones",
    tags: ["apalancamiento", "margen", "liquidación", "riesgo"],
    summary:
      "Qué es el apalancamiento, qué parte del capital retiene el broker como margen, por qué multiplican las pérdidas y qué es la liquidación forzosa.",
    keywords: ["qué es el apalancamiento", "qué es el margen", "liquidación forzosa"],
    readMinutes: 7,
    updatedAt: "2026-01-31",
    explanation: {
      intro:
        "El apalancamiento te permite operar con una exposición mayor que tu capital. El margen es la parte de ese capital que el broker retiene como garantía mientras la posición está abierta. Los dos van juntos: sin apalancamiento no habría margen que retener.",
      paragraphs: [
        "Con apalancamiento 10 : 1, 1.000 de capital sostienen una exposición de 10.000. El broker no te promete beneficio: te da la posibilidad de participar en una operación más grande y exige que mantengas esa garantía mientras dure. Si la operación va a tu favor, ganas sobre 10.000; si va en contra, pierdes sobre 10.000.",
        "Por eso el apalancamiento multiplica las pérdidas exactamente igual que multiplica los beneficios. Un movimiento del 1 % en contra sobre una exposición de 10.000 son 100 de pérdida, es decir el 10 % de esos 1.000 aportados. El porcentaje de movimiento no ha cambiado; lo que ha cambiado es cuánto representa respecto a tu cuenta.",
        "Si las pérdidas reducen el margen por debajo del mínimo exigido, el broker cierra posiciones por ti sin pedirte permiso. Ese cierre se llama liquidación forzosa y llega en el momento peor, porque se produce cuando el precio ya ha recorrido todo el camino en tu contra.",
        "La lección práctica es que el apalancamiento no es el riesgo. El riesgo lo fija el tamaño de la posición y la distancia al stop; el apalancamiento solo decide cuánto margen retiene el broker y cuánta parte de tu cuenta queda libre.",
      ],
      bullets: [
        "Apalancamiento 10 : 1 → 1.000 de margen sostienen 10.000 de exposición.",
        "Un movimiento del 1 % en contra se convierte en un 10 % de tu capital.",
        "Si el margen cae por debajo del mínimo, el broker cierra por ti.",
        "La liquidación forzosa deja la pérdida cerrada sin que tú decidas.",
      ],
    },
    technical: {
      term: "Apalancamiento, margen y liquidación",
      body: "El apalancamiento es la proporción entre la exposición total de la posición y el capital aportado. El margen es el capital que debes mantener depositado para sostener esa exposición y se calcula dividiendo la exposición entre el apalancamiento. Cuando las pérdidas reducen el margen por debajo del mínimo exigido, se desencadena el cierre automático conocido como liquidación forzosa.",
      formula: "Margen requerido = Exposición ÷ Apalancamiento",
      gloss:
        "Con apalancamiento 20 : 1, una posición de 20.000 exige 1.000 de margen; una caída del 5 % destruye ese margen por completo.",
    },
    example: {
      title: "El mismo movimiento con y sin apalancamiento",
      narrative:
        "Compras 100 unidades a 100 con 10.000 de tu propio dinero: si el activo cae un 10 %, pierdes 1.000, el 10 % de tu cuenta. Si repites la misma operación con apalancamiento 10 : 1, tu aportación es de 1.000 y la exposición sigue siendo 10.000: esa misma caída del 10 % borra tu aportación entera y el broker cierra la posición. El mercado se movió igual en los dos casos; cambió lo que tenías en juego.",
      bullets: [
        "Sin apalancamiento: caída del 10 % → pérdida del 10 % del capital.",
        "Con 10 : 1: la misma caída elimina el margen aportado.",
        "Lo que manda es la exposición, no la cantidad depositada.",
      ],
    },
    chart: buildScenario("apalancamiento-y-margen", {
      entry: 100,
      stopLoss: 96,
      takeProfit: 108,
      outcome: "sl",
      caption: "Ejemplo ficticio: cuatro unidades de riesgo con margen retenido",
      description:
        "La entrada en 100 con stop en 96 arriesga 4 por unidad. El apalancamiento solo determina cuánto margen retiene el broker por esa exposición; no altera la pérdida prevista si el tamaño está bien calculado.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 108,
      outcome: "sl",
      narrative:
        "Con 1.000 de capital y un riesgo elegido del 5 %, el riesgo máximo es de 50. La entrada en 100 con stop en 96 arriesga 4 por unidad, así que el tamaño es de 12,5 unidades y la exposición de 1.250. Con apalancamiento 5 : 1 el broker retiene 250 de margen. El precio llega a 96 y la pérdida es de 50, exactamente lo planeado: el apalancamiento no amplificó nada.",
      capital: 1_000,
      riskPct: 5,
    },
    mistakes: [
      {
        mistake: "Elegir el tamaño por el apalancamiento disponible",
        why: "El apalancamiento solo indica cuánta exposición puedes sostener, no cuánto deberías arriesgar en una sola operación.",
        fix: "Calcula el tamaño desde tu riesgo por operación y usa el apalancamiento únicamente para liberar margen.",
      },
      {
        mistake: "Ampliar el stop para evitar la liquidación",
        why: "Ampliar retrasa el cierre, pero aumenta exactamente la pérdida que te llevaba hacia esa liquidación.",
        fix: "Reduce el tamaño desde el principio y mantén un margen amplio entre tu stop y el nivel de liquidación.",
      },
      {
        mistake: "Creer que la liquidación depende de tu decisión",
        why: "Es un cierre automático e irreversible que ejecuta el broker en el momento en que el margen no alcanza.",
        fix: "Coloca tu stop antes de entrar y comprueba que la pérdida prevista queda muy lejos de tu margen mínimo.",
      },
    ],
    related: ["tamano-de-posicion", "stop-loss", "que-es-forex"],
    glossary: ["apalancamiento", "margen", "liquidacion", "capital"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué es el margen?",
        options: [
          "El beneficio que generas con la operación",
          "La parte de tu capital retenida como garantía de la exposición",
          "El coste que cobra el broker por cada orden",
          "La distancia entre la entrada y el stop",
        ],
        correct: 1,
        explanation:
          "El margen no es un coste ni una pérdida: es capital inmovilizado mientras la posición apalancada está abierta.",
      },
      {
        id: "q2",
        question: "Con apalancamiento 10 : 1 y 1.500 aportados, ¿qué exposición puedes sostener?",
        options: ["150", "1.500", "15.000", "150.000"],
        correct: 2,
        explanation: "La exposición es el capital aportado multiplicado por el apalancamiento: 1.500 × 10 = 15.000.",
      },
      {
        id: "q3",
        question: "¿Qué es la liquidación forzosa?",
        options: [
          "Un aviso que te pide añadir fondos",
          "El cierre automático de la posición cuando el margen cae por debajo del mínimo",
          "La retirada voluntaria de tu beneficio",
          "El pago de la comisión al cerrar la operación",
        ],
        correct: 1,
        explanation:
          "Cuando el margen deja de ser suficiente, el broker cierra posiciones por ti y la pérdida queda materializada.",
      },
      {
        id: "q4",
        question: "¿Qué amplifica de verdad las pérdidas en una cuenta apalancada?",
        options: [
          "El apalancamiento por sí solo, aunque el tamaño sea pequeño",
          "La exposición total de la posición respecto a tu capital",
          "El número de órdenes que envías al día",
          "La configuración de la plataforma",
        ],
        correct: 1,
        explanation:
          "Un apalancamiento alto con un tamaño mínimo apenas arriesga; el peligro aparece cuando la exposición es grande respecto a la cuenta.",
      },
    ],
  },

  {
    slug: "costes-de-una-operacion",
    levelId: 3,
    order: 6,
    title: "Costes de una operación",
    shortTitle: "Costes de operar",
    category: "operaciones",
    tags: ["spread", "comisión", "deslizamiento", "costes"],
    summary:
      "Qué costes reales tiene operar —spread, comisión y deslizamiento— y cómo se acumulan en operaciones pequeñas y frecuentes.",
    keywords: ["cuánto cuesta operar", "spread y comisión", "costes de una operación"],
    readMinutes: 6,
    updatedAt: "2026-02-01",
    explanation: {
      intro:
        "Abrir y cerrar una posición tiene precio. El spread, la comisión por lote y el deslizamiento se pagan siempre, tanto si la operación gana como si pierde, y aparecen antes de que veas un solo euro de beneficio.",
      paragraphs: [
        "El spread es la diferencia entre el precio al que puedes comprar y el al que puedes vender, y lo pagas al entrar y también al salir. En los pares más líquidos puede ser inferior a un pip; en activos poco líquidos o en momentos de baja actividad puede multiplicarse por diez sin aviso.",
        "La comisión es un coste fijo que se aplica por operación o por lote redondo. Algunos brokers la integran en un spread más amplio, así que comparar solo una de las dos cifras lleva a conclusiones erróneas: lo que importa es el coste total de cada ida y vuelta con tu tamaño habitual.",
        "El deslizamiento es la diferencia entre el nivel que tenías previsto y el precio al que realmente se ejecutó. Aparece sobre todo en velas rápidas, en noticias y en mercados con poca contraparte, y es más grave cuanto más pequeña es la operación que pretendías hacer.",
        "Todos estos costes pesan mucho más en operaciones pequeñas y frecuentes. Si buscas 15 pips y el coste total son 3, te has dejado el 20 % del bruto antes de empezar; si repites esa operación cien veces al mes, el desgaste acumulado equivale a veinte operaciones ganadoras completas.",
      ],
      bullets: [
        "Spread: diferencia entre el precio de compra y el de venta.",
        "Comisión: coste fijo por operación o por lote.",
        "Deslizamiento: diferencia entre el nivel previsto y la ejecución real.",
        "Los tres se pagan también en las operaciones perdedoras.",
      ],
    },
    technical: {
      term: "Coste total de una operación",
      body: "El coste de una operación es la suma del spread pagado al entrar y al salir, de la comisión que corresponda por lote y del deslizamiento producido en cada ejecución. Como la comisión suele fijarse por lote completo, solo tiene sentido compararla con el spread cuando el tamaño de la posición es conocido. Restar el coste total al recorrido hasta el objetivo da el beneficio neto real sobre el que conviene decidir.",
      formula: "Coste = (Spread de entrada + Spread de salida) × Tamaño + Comisión + Deslizamiento",
      gloss:
        "Con un spread de 2 pips y una comisión equivalente a 1 pip, cada operación cuesta 3 pips antes de mirar el resultado.",
    },
    example: {
      title: "Un objetivo pequeño contra un coste fijo",
      narrative:
        "Una estrategia intradía busca 15 pips por operación con un coste total de 3 pips. El beneficio bruto por acierto son 15, pero el neto son 12. Si el mes trae cien operaciones, el coste acumulado son 300 pips, el equivalente a veinte operaciones ganadoras completas. Reducirlo a sesenta operaciones con el mismo objetivo deja el coste en 180 pips sin tocar la idea de fondo.",
      bullets: [
        "Objetivo bruto: 15 pips.",
        "Coste por operación: 3 pips.",
        "Cien operaciones → 300 pips solo en costes.",
        "El coste no depende de si ganas o pierdes.",
      ],
    },
    chart: buildPreset("escala-forex"),
    tradeExample: {
      instrument: "EUR/USD (ejemplo ficticio)",
      direction: "short",
      entry: 1.085,
      stopLoss: 1.087,
      takeProfit: 1.079,
      outcome: "tp",
      narrative:
        "Venta en 1,0850 con stop en 1,0870 y objetivo en 1,0790: 20 pips de riesgo y 60 de recorrido, relación 1 : 3. Con capital de 2.000 y riesgo del 1 %, el riesgo máximo es 20; con un valor ficticio de pip de 10 por lote, el tamaño que encaja es 0,10 lote. El coste total de ida y vuelta fue de 3 pips, así que el beneficio neto pasó de 60 a 57 pips.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Comparar brokers solo por el spread anunciado",
        why: "Un spread mínimo puede venir acompañado de comisiones altas o de una ejecución peor que anula la ventaja.",
        fix: "Calcula el coste total de una ida y vuelta con tu tamaño habitual y compara esa cifra.",
      },
      {
        mistake: "Operar muchas veces con objetivos muy pequeños",
        why: "Cuanto menor es el recorrido buscado, mayor es el porcentaje que se lleva el coste fijo.",
        fix: "Comprueba que tu objetivo medio es varias veces el coste total antes de repetir la operación.",
      },
      {
        mistake: "Ignorar el deslizamiento en momentos de alta volatilidad",
        why: "En publicaciones intensas la ejecución real queda lejos del nivel previsto y el beneficio se evapora.",
        fix: "Resta un margen estimado al objetivo y evita las ventanas de noticias más delicadas.",
      },
    ],
    related: ["que-es-un-broker", "entradas-y-ordenes", "precio-volumen-y-liquidez"],
    glossary: ["spread", "comision", "slippage", "bid", "ask"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué es el spread?",
        options: [
          "La comisión que cobra el regulador",
          "La diferencia entre el precio al que puedes comprar y el al que puedes vender",
          "El interés por mantener la posición abierta",
          "El porcentaje de beneficio de la operación",
        ],
        correct: 1,
        explanation:
          "Es el coste implícito de cada ida y vuelta: pagas el ask al entrar y entregas el bid al salir.",
      },
      {
        id: "q2",
        question: "Si la operación termina en pérdidas, ¿se pagan los costes?",
        options: [
          "No, solo se pagan cuando hay beneficio",
          "Sí, se pagan igualmente",
          "Solo se paga el spread",
          "Los asume el broker",
        ],
        correct: 1,
        explanation:
          "El coste de la operación se paga al ejecutarla, sin importar el resultado final de la misma.",
      },
      {
        id: "q3",
        question: "Con un objetivo de 20 pips y un coste total de 4 pips, ¿qué parte del bruto se va en costes?",
        options: ["El 4 %", "El 10 %", "El 20 %", "El 50 %"],
        correct: 2,
        explanation: "4 de 20 son el 20 % del beneficio bruto, y esa proporción se repite en cada operación.",
      },
      {
        id: "q4",
        question: "¿Cuándo aparece el deslizamiento?",
        options: [
          "Cuando dejas la orden pendiente demasiado tiempo",
          "Cuando la ejecución real queda lejos del nivel que tenías previsto",
          "Cuando el broker cambia tu tamaño de posición",
          "Cuando cierras la operación con beneficio",
        ],
        correct: 1,
        explanation:
          "Suele producirse en velas rápidas o con poca contraparte, porque el stop se ejecuta contra el mejor precio disponible.",
      },
    ],
  },

  {
    slug: "break-even-y-salidas",
    levelId: 3,
    order: 7,
    title: "Break even y salidas",
    shortTitle: "Break even y salidas",
    category: "operaciones",
    tags: ["punto de equilibrio", "salidas", "gestión parcial", "plan"],
    summary:
      "Cómo se mueve el stop al punto de equilibrio, qué significa salir parcialmente y por qué no existe una única salida correcta.",
    keywords: ["qué es break even", "mover el stop a la entrada", "salidas parciales"],
    readMinutes: 7,
    updatedAt: "2026-02-02",
    explanation: {
      intro:
        "Llevar una operación a break even significa colocar el stop en el precio de entrada para que ya no pueda perder dinero. Es una forma de gestionar la salida, no una recompensa: cambia un tipo de riesgo por otro.",
      paragraphs: [
        "Mover el stop hasta la entrada elimina la pérdida monetaria, pero también activa con frecuencia operaciones que después se habrían desarrollado a tu favor. Es el coste de la tranquilidad: reduces la peor serie posible y a cambio recortas la mejor. Ninguna de las dos opciones es gratis.",
        "El punto de equilibrio real además no coincide exactamente con tu entrada. Al salir se paga el spread y, si procede, la comisión, así que dejar el stop clavado en tu precio de entrada puede acabar en una pérdida mínima en lugar de un cero.",
        "La salida parcial divide la posición en dos o más partes: una se cierra en un primer objetivo cercano y el resto sigue con el stop movido. Ese método reduce el resultado medio por operación, pero aumenta la probabilidad de capturar movimientos grandes, que son los que sostienen la cuenta durante las rachas malas.",
        "No hay una única salida correcta. Depende de la temporalidad, de la estructura, de los costes y de tu tolerancia a ver una ganancia evaporarse. Lo que sí es obligatorio es decidirla antes de entrar y no improvisarla con el ánimo del momento.",
      ],
      bullets: [
        "Break even: el stop pasa al precio de entrada.",
        "Salida parcial: cobras una parte y dejas correr el resto.",
        "Cada método cambia la distribución de resultados, no la calidad de la idea.",
        "La salida se decide antes de entrar, no durante la operación.",
      ],
    },
    technical: {
      term: "Punto de equilibrio y gestión parcial",
      body: "El punto de equilibrio es el precio al que la ganancia de la operación compensa exactamente su pérdida más los costes. Mover el stop hasta ese nivel convierte una operación con riesgo en una sin riesgo monetario, aunque la salida real pueda quedar algo por debajo por el spread. La gestión parcial divide el tamaño en dos o más salidas: una primera en un objetivo cercano y la segunda en un nivel más lejano, con el stop ya protegido.",
      formula: "Punto de equilibrio ≈ Entrada + (Costes ÷ Tamaño)",
      gloss:
        "Si entraste en 100 y los costes totales equivalen a 0,08 por unidad, el verdadero equilibrio está en 100,08.",
    },
    example: {
      title: "Dos formas de salir de la misma operación",
      narrative:
        "Compra en 100 con stop en 95 y primer objetivo en 105. En el plan A cierras todo en 105 y ganas 5. En el plan B cierras la mitad en 105, subes el stop a 100 y dejas correr la otra mitad hasta 112: la primera mitad gana 5, la segunda gana 12, y si el precio vuelve a 100 la segunda mitad no pierde nada. El plan B gana más cuando el movimiento continúa y menos si el precio se da la vuelta justo después del primer objetivo.",
      bullets: [
        "Plan A: entrada 100, salida 105 con toda la posición.",
        "Plan B: mitad en 105, mitad en 112 con stop en 100.",
        "El plan correcto depende del comportamiento esperado del precio.",
      ],
    },
    chart: buildScenario("break-even-y-salidas", {
      entry: 100,
      stopLoss: 95,
      takeProfit: 112,
      outcome: "open",
      caption: "Ejemplo ficticio: stop inicial, equilibrio y objetivo",
      description:
        "La entrada en 100 tiene el stop inicial en 95 y el objetivo en 112. Si el precio se aleja, el stop puede subir hasta 100 para eliminar el riesgo y la operación queda abierta pendiente de uno u otro nivel.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 95,
      takeProfit: 112,
      outcome: "open",
      narrative:
        "Compra en 100 con stop inicial en 95 y objetivo en 112. Tras alcanzar 106, el stop sube a 100 y se cierra la mitad de la posición: ya no puedes perder dinero y la mitad restante sigue abierta hacia 112. El gráfico muestra la operación todavía en curso, sin resultado definido.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Llevar la operación a break even inmediatamente después de entrar",
        why: "No deja respirar a la operación y el spread de salida puede cerrarla en rojo antes de que el precio se mueva.",
        fix: "Espera a que el precio se aleje lo suficiente como para cubrir los costes antes de subir el stop.",
      },
      {
        mistake: "Cerrar toda la posición en el primer objetivo",
        why: "Te priva de los movimientos grandes, que son los que pagan las rachas de aciertos bajos.",
        fix: "Combina una salida parcial con el resto de la posición corriendo con el stop ya protegido.",
      },
      {
        mistake: "Cambiar la salida sobre la marcha según el ánimo",
        why: "Sin un plan escrito decides con miedo cuando hay beneficio y con codicia cuando hay pérdida.",
        fix: "Escribe la salida completa en tu plan y solo admite cambios si cambia la estructura del mercado.",
      },
    ],
    related: ["stop-loss", "take-profit-y-riesgo-beneficio", "disciplina-y-plan"],
    glossary: ["break-even", "stop-loss", "take-profit", "riesgo-beneficio"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué significa llevar una operación a break even?",
        options: [
          "Cerrar la operación en el máximo histórico",
          "Colocar el stop en el precio de entrada para que ya no pueda perder",
          "Duplicar el tamaño para recuperar pérdidas",
          "Dejar la operación sin stop hasta el final",
        ],
        correct: 1,
        explanation:
          "El stop pasa al punto de entrada y desde ese momento el peor desenlace posible es no ganar nada.",
      },
      {
        id: "q2",
        question: "¿Cuál es el inconveniente de subir el stop demasiado pronto?",
        options: [
          "El broker cobra una comisión extra por moverlo",
          "La operación se cierra sin dar recorrido aunque la idea fuera buena",
          "Dejas de poder cerrar la posición a mano",
          "El precio deja de moverse",
        ],
        correct: 1,
        explanation:
          "Un stop muy pegado a la entrada se activa con el ruido normal y te saca antes de que la operación se desarrolle.",
      },
      {
        id: "q3",
        question: "¿Qué es una salida parcial?",
        options: [
          "Cerrar una parte de la posición y dejar el resto abierto",
          "Cerrar la operación en dos días distintos",
          "Reducir el riesgo ampliando el stop",
          "Abrir dos operaciones iguales a la vez",
        ],
        correct: 0,
        explanation:
          "Divides el tamaño en dos salidas: una cobrada en un objetivo cercano y otra que sigue corriendo con el stop protegido.",
      },
      {
        id: "q4",
        question: "¿Por qué el punto de equilibrio no es exactamente tu precio de entrada?",
        options: [
          "Porque el broker redondea los precios",
          "Porque al salir también se pagan el spread y, si procede, la comisión",
          "Porque el mercado nunca vuelve al mismo nivel",
          "Porque el stop no puede colocarse en la entrada",
        ],
        correct: 1,
        explanation:
          "Los costes de salida hacen que el equilibrio real quede algo por encima de la entrada en una compra.",
      },
    ],
  },

  {
    slug: "checklist-antes-de-operar",
    levelId: 3,
    order: 8,
    title: "Lista de comprobación antes de operar",
    shortTitle: "Lista de comprobación",
    category: "operaciones",
    tags: ["lista de comprobación", "plan", "rutina", "disciplina"],
    summary:
      "La comprobación previa a cualquier entrada: contexto, nivel válido, riesgo definido, costes conocidos y descarte de noticias inminentes.",
    keywords: ["qué comprobar antes de entrar", "lista de comprobación", "rutina de operativa"],
    readMinutes: 6,
    updatedAt: "2026-02-03",
    explanation: {
      intro:
        "Antes de enviar cualquier orden hay cinco comprobaciones que ocupan menos de un minuto y evitan la mayoría de los errores por descuido. Si una de ellas falla, no se opera.",
      paragraphs: [
        "La primera es el contexto: hay que saber si el mercado está en tendencia o en rango y en qué dirección manda la temporalidad superior. Operar contra ese contexto sin un motivo explícito convierte cualquier entrada en una apuesta contra el movimiento dominante.",
        "La segunda es el nivel. Tiene que existir un punto concreto —un soporte, una resistencia, una ruptura— que justifique el precio al que entras. La idea de que el precio está bajo o ha subido mucho no es un nivel, es una sensación.",
        "La tercera y la cuarta son el riesgo y los costes: stop, tamaño, cantidad en dinero arriesgada y coste total de la ida y vuelta, todos escritos antes de entrar. Si el objetivo neto tras los costes no merece la pena, la operación se descarta.",
        "La quinta es la ventana de noticias. Hay publicaciones que mueven el precio cientos de puntos en segundos; si una está a minutos de aparecer, el riesgo calculado deja de representar lo que realmente va a ocurrir.",
      ],
      bullets: [
        "Contexto: ¿tendencia o rango en la temporalidad superior?",
        "Nivel: ¿hay un punto concreto que justifica la entrada?",
        "Riesgo: ¿stop, tamaño y cantidad en dinero están escritos?",
        "Costes: ¿el objetivo neto sigue mereciendo la pena?",
        "Noticias: ¿alguna publicación importante en los próximos minutos?",
      ],
    },
    technical: {
      term: "Proceso y disciplina",
      body: "Una lista de comprobación convierte una decisión emocional en un proceso repetible. Cada punto debe poder responderse con un sí o un no, sin interpretaciones: si el mercado está en rango, la respuesta al contexto es rango; si el stop no está escrito, la respuesta es no. Registrar el resultado de cada comprobación permite revisar después si los fallos vinieron del análisis o de saltarte el proceso.",
      formula: "Entrada válida = Contexto + Nivel + Riesgo + Costes + Ventana libre de noticias",
      gloss: "Un no en cualquiera de los cinco puntos cancela la operación; no la pospone.",
    },
    example: {
      title: "Una operación que se descarta",
      narrative:
        "Un activo cotiza en un rango entre 95 y 105 y toca 97,30 con una vela alcista. El contexto es rango, así que comprar cerca del suelo es razonable. Pero falta el stop escrito, el spread está ancho porque acaba de abrir la sesión y en cuatro minutos hay un dato económico importante. Tres de las cinco comprobaciones fallan: no se opera y se espera a que pase el dato.",
      bullets: [
        "Contexto: rango, correcto.",
        "Nivel: suelo en 95, correcto.",
        "Riesgo y ventana de noticias: no cumplidos.",
        "Decisión: no operar.",
      ],
    },
    chart: buildPreset("rango"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 97,
      stopLoss: 94.5,
      takeProfit: 104,
      outcome: "open",
      narrative:
        "Con el precio en 97 dentro de un rango entre 95 y 105, la entrada en 97 con stop en 94,50 y objetivo en 104 deja 2,5 unidades de riesgo y 7 de recorrido. Las cinco comprobaciones se cumplen y la operación queda abierta, pendiente de que el precio llegue a uno u otro nivel.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Operar solo porque el precio ya está en el nivel",
        why: "Un nivel sin contexto y sin riesgo definido es una apuesta, no una operación preparada.",
        fix: "Completa las cinco comprobaciones aunque tengas prisa: el mercado seguirá ahí en la siguiente vela.",
      },
      {
        mistake: "Saltarse la lista cuando el precio se acelera",
        why: "La prisa es justo cuando más se necesitan las comprobaciones, porque la velocidad amplifica el error.",
        fix: "Si no da tiempo a comprobarlo todo, la operación se queda para la siguiente sesión.",
      },
      {
        mistake: "Revisar la lista después de entrar",
        why: "Una vez enviada la orden ya no evita nada; solo sirve para justificar una decisión tomada.",
        fix: "Guarda la lista junto a la plataforma y márcala antes de enviar la orden, no después.",
      },
    ],
    related: ["entradas-y-ordenes", "stop-loss", "tendencias-y-estructura"],
    glossary: ["disciplina", "registro", "riesgo", "estrategia"],
    quiz: [
      {
        id: "q1",
        question: "Si falta una de las cinco comprobaciones, ¿qué haces?",
        options: [
          "Operas con tamaño más pequeño",
          "No operas hasta que todas se cumplan",
          "Operas igualmente y colocas el stop después",
          "Pides confirmación a otros operadores",
        ],
        correct: 1,
        explanation:
          "El proceso solo funciona si es exacto: un no cancela la operación, sea cual sea el aspecto del gráfico.",
      },
      {
        id: "q2",
        question: "¿Por qué conviene revisar el calendario de noticias?",
        options: [
          "Porque las noticias cambian el nombre del activo",
          "Porque las publicaciones intensas pueden mover el precio mucho más allá de tu stop",
          "Porque el broker mejora el spread después del dato",
          "Porque los indicadores se recalculan",
        ],
        correct: 1,
        explanation:
          "En segundos el precio puede saltarse todos los niveles previstos, así que el riesgo calculado deja de ser válido.",
      },
      {
        id: "q3",
        question: "¿Qué se entiende por contexto en la lista?",
        options: [
          "El color de las velas de la última hora",
          "Si el mercado está en tendencia o en rango y hacia dónde mira la temporalidad superior",
          "El número de operaciones que llevas hoy",
          "El saldo de tu cuenta",
        ],
        correct: 1,
        explanation:
          "El contexto define el escenario dominante; todo lo demás se decide dentro de ese marco.",
      },
      {
        id: "q4",
        question: "¿Cuándo se marca la lista de comprobación?",
        options: [
          "Después de cerrar la operación",
          "Cuando el precio llega al take profit",
          "Antes de enviar la orden de entrada",
          "Solo los lunes por la mañana",
        ],
        correct: 2,
        explanation:
          "Su función es decidir si se entra; una vez dentro de la operación ya no puede cambiar nada.",
      },
    ],
  },
];
