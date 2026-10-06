import type { Lesson } from "~/types";
import { buildPreset, buildScenario } from "../charts/presets";

export const level5Lessons: Lesson[] = [
  {
    slug: "que-es-una-estrategia",
    levelId: 5,
    order: 1,
    title: "¿Qué es una estrategia de trading?",
    shortTitle: "Qué es una estrategia",
    category: "estrategias",
    tags: ["estrategia", "reglas", "plan de trading"],
    summary:
      "Qué convierte a un conjunto de reglas en un método reproducible y por qué un presentimiento nunca puede ocupar su lugar.",
    keywords: ["qué es una estrategia", "reglas de trading", "plan de trading"],
    readMinutes: 6,
    updatedAt: "2026-02-14",
    explanation: {
      intro:
        "Una estrategia es un conjunto de reglas escrito antes de operar que define en qué contexto entras, qué condición te dispara la entrada, dónde colocas el stop, qué objetivo persigues y cómo gestionas la posición mientras está abierta. Si alguna de esas piezas depende del ánimo del momento, no es una estrategia: es una decisión improvisada con buena suerte.",
      paragraphs: [
        "La primera cualidad de una estrategia es que sea reproducible. Dos operadores que miren el mismo gráfico con las mismas reglas deben llegar a la misma decisión, aunque discrepen sobre si la estrategia es buena o mala. Para que eso ocurra, las condiciones tienen que ser observables: un cierre, un nivel, un volumen, una vela concreta, nunca una sensación.",
        "Toda estrategia completa se puede descomponer en seis piezas. El contexto dice qué mercado y qué estructura estás mirando. El disparador es la condición concreta que autoriza la entrada. La entrada fija el precio exacto. El stop define dónde se demuestra que la idea estaba mal. El objetivo o la salida progresiva marcan dónde se cobra. Y la gestión indica qué haces mientras la posición vive.",
        "Lo que separa a una estrategia de un presentimiento es la memoria. Un presentimiento no se puede revisar ni contar: si acierta, no queda registro de cuántas veces habría entrado y fallado. Una estrategia sí deja rastro, y por eso puede pasarse por datos pasados y evaluarse. Ese proceso es el backtesting que cerrará este nivel.",
        "Hay una séptima pieza que casi nunca se menciona: la estrategia también decide cuándo no operar. Sin contexto válido o sin disparador, no hay entrada, aunque el gráfico muestre algo parecido a una oportunidad.",
      ],
      bullets: [
        "Contexto: qué estructura se observa antes de mirar el disparador.",
        "Disparador: la condición concreta que autoriza la entrada.",
        "Stop y objetivo: los dos niveles que hacen la operación medible.",
        "Gestión: qué haces mientras la posición está abierta.",
      ],
    },
    technical: {
      term: "Regla reproducible",
      body: "Una regla es reproducible cuando solo admite una interpretación razonable. «Comprar cuando el precio esté barato» no lo es: cada persona leerá lo mismo y decidirá distinto. «Comprar cuando el cierre supere 105 en el gráfico de H4, con volumen por encima de la media de las últimas 20 velas» sí lo es, aunque luego se discuta si la condición es buena o mala. La reproducibilidad es la condición previa para medir cualquier cosa.",
      formula: "Resultado esperado = % de aciertos × Beneficio medio − % de fallos × Pérdida media",
      gloss:
        "Sin una regla reproducible, cualquier recuento de operaciones es una opinión disfrazada de medida.",
    },
    example: {
      title: "La misma idea escrita de dos formas",
      narrative:
        "«Entro si veo que el precio va a subir» no se puede auditar: mañana otra persona leerá esa frase y hará algo distinto. En cambio: «compro cuando el precio cierre por encima de 105 en H4, con stop en 101 y objetivo en 113» deja un registro que se puede revisar operación por operación. La segunda frase puede ser mala; la primera ni siquiera se puede juzgar.",
      bullets: [
        "Idea sin regla: imposible de medir o de comparar.",
        "Idea con regla: se puede contar, revisar y descartar.",
        "El valor no está en la idea, sino en la constancia con la que se aplica.",
      ],
    },
    chart: buildPreset("tendencia-alcista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 110,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 96 y objetivo en 110: 4 unidades de riesgo frente a 10 de recorrido, es decir una relación 2,5 : 1. Los números son idénticos para quien sigue una estrategia escrita y para quien entra por intuición; lo que cambia es la posibilidad de repetirlos y de medirlos.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Definir la estrategia mientras se opera",
        why: "Las reglas escritas después de conocer el resultado siempre parecen haber funcionado, porque se ajustan a un final ya sabido.",
        fix: "Escribe las seis piezas antes de la primera operación y no las toques durante toda la semana de prueba.",
      },
      {
        mistake: "Meter indicadores en lugar de reglas",
        why: "Tres indicadores no dicen ni cuándo entrar ni dónde está el error: solo describen el pasado del precio de otra forma.",
        fix: "Cada indicador que añadas debe traducirse en una condición de entrada, de salida o de no operar.",
      },
      {
        mistake: "Cambiar la estrategia tras dos operaciones perdedoras",
        why: "Dos operaciones no dicen nada sobre una regla; con tan pocos datos el sesgo de muestra arruina cualquier conclusión.",
        fix: "Acuerda de antemano un número mínimo de operaciones de prueba antes de juzgar y corregir.",
      },
    ],
    related: ["que-es-el-trading", "tamano-de-posicion", "checklist-antes-de-operar", "estrategia-de-ruptura"],
    glossary: ["estrategia", "disciplina", "riesgo", "stop-loss", "take-profit"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuál de estas señales es una regla de entrada reproducible?",
        options: [
          "Entrar cuando el precio se siente barato",
          "Comprar si el cierre supera 105 en H4 con volumen por encima de la media",
          "Entrar cuando el gráfico lo pida",
          "Entrar cuando el indicador lo indique",
        ],
        correct: 1,
        explanation:
          "Solo la segunda condición puede comprobarse de forma objetiva sobre un gráfico concreto.",
      },
      {
        id: "q2",
        question: "¿Qué distingue a una estrategia de un presentimiento?",
        options: [
          "La estrategia siempre gana dinero",
          "La estrategia se puede escribir, revisar y contar; el presentimiento no",
          "El presentimiento funciona mejor en temporalidades altas",
          "La estrategia elimina el riesgo",
        ],
        correct: 1,
        explanation:
          "La reproducibilidad es lo que permite medir; sin ella no existe recuento posible.",
      },
      {
        id: "q3",
        question: "¿Qué pieza de la estrategia dice dónde se ha equivocado la idea?",
        options: [
          "El objetivo",
          "El tamaño de la posición",
          "El stop loss",
          "El horario de operación",
        ],
        correct: 2,
        explanation:
          "El stop marca el nivel en el que la hipótesis queda invalidada y la posición se cierra.",
      },
      {
        id: "q4",
        question: "¿Por qué dos operaciones perdedoras no demuestran que la estrategia es mala?",
        options: [
          "Porque las pérdidas no se contabilizan",
          "Porque dos operaciones son una muestra demasiado pequeña",
          "Porque el broker ajusta los resultados",
          "Porque siempre hay que operar más veces",
        ],
        correct: 1,
        explanation:
          "Hacen falta decenas de operaciones con reglas fijas para que el recuento signifique algo.",
      },
    ],
  },

  {
    slug: "estrategia-de-ruptura",
    levelId: 5,
    order: 2,
    title: "Estrategia de ruptura",
    shortTitle: "Ruptura",
    category: "estrategias",
    tags: ["ruptura", "volumen", "confirmación"],
    summary:
      "Cómo operar la ruptura de una zona con volumen y confirmación, y por qué muchas rupturas terminan siendo falsas.",
    keywords: ["estrategia de ruptura", "cómo operar una ruptura", "rupturas falsas"],
    readMinutes: 7,
    updatedAt: "2026-02-14",
    explanation: {
      intro:
        "La estrategia de ruptura consiste en comprar cuando el precio supera con convicción una zona que venía conteniéndolo, y vender cuando la rompe por debajo. La idea es sencilla de entender; lo difícil es separar una ruptura real de una ruptura falsa.",
      paragraphs: [
        "Una zona deja de contener el precio cuando hay suficientes órdenes en el otro lado. Por eso los tres ingredientes clásicos son un nivel bien marcado, un volumen por encima de lo normal y una vela que cierre fuera de la zona. La mecha que solo la roza no confirma nada: el precio ha estado dentro del conflicto y puede volver a entrar enseguida.",
        "El error más frecuente es entrar en la primera vela que toca la zona. En ese momento la pelea entre compradores y vendedores sigue abierta y la reacción contraria es muy común. Esperar el cierre de la vela o el retesteo de la zona rota reduce el número de entradas, pero mejora la calidad de cada una.",
        "Las falsas rupturas no son un fallo del método: forman parte de su coste. Barrer los stops colocados justo detrás de un nivel es una mecánica habitual del precio. Por eso el stop se coloca ligeramente por dentro de la zona rota, nunca pegado al nivel que todos están mirando.",
        "Cuando la ruptura se produce con poco volumen y el precio regresa dentro de la zona en la vela siguiente, la operación se cancela. No hay señal que perseguir, y forzarla es convertir una condición opcional en una esperanza.",
      ],
      bullets: [
        "Nivel bien marcado: un suelo o un techo respetado varias veces.",
        "Cierre fuera de la zona con volumen por encima de la media.",
        "Stop con margen por dentro de la zona rota, no justo en el nivel.",
        "Retegeo de la zona rota: mejor entrada y mejor relación riesgo/beneficio.",
      ],
    },
    technical: {
      term: "Ruptura y retesteo",
      body: "Una ruptura es el cierre de una vela por fuera de una zona de soporte o resistencia respetada varias veces. El retesteo es el regreso del precio a esa zona poco después de romperla: lo que era resistencia suele actuar como soporte y al revés, al menos durante un tiempo. Operar el retesteo aporta un nivel de entrada y un nivel de salida claros, a cambio de aceptar que a veces el precio no vuelve y la operación no se abre.",
      formula: "Relación riesgo/beneficio = (Objetivo − Entrada) / (Entrada − Stop)",
      gloss:
        "Si la zona rota se recupera en la vela siguiente, la ruptura ha fallado y la operación no debe abrirse.",
    },
    example: {
      title: "Ruptura con volumen y ruptura sin él",
      narrative:
        "Un activo ficticio acumula rechazos en 105 durante tres semanas. Una mañana la vela cierra en 107 con un volumen un 60 % por encima de la media y al día siguiente vuelve a 105,80 sin recuperar la zona. Ese retesteo es la entrada: stop en 103,50 y objetivo en 112. En el caso contrario, la misma zona se perfora con volumen bajo y una mecha breve; el precio cierra otra vez dentro y no hay operación.",
      bullets: [
        "Zona: 105, respetada en tres ocasiones.",
        "Entrada en el retesteo: 105,80.",
        "Stop: 103,50 | Objetivo: 112 | Relación: 2,5 : 1.",
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
        "Entrada en 100 tras el cierre por encima de la zona, con stop en 96,80 y objetivo en 106,40. El riesgo es de 3,20 puntos y el recorrido buscado de 6,40, es decir una relación 1 : 2. Si la vela siguiente vuelve a cerrar dentro de la zona, la ruptura ha fallado y la posición se cierra sin esperar al stop.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Entrar con una mecha que solo perfora la zona",
        why: "La mecha no confirma nada: el precio puede cerrar dentro y dejar a los compradores atrapados en el peor lugar.",
        fix: "Exige un cierre fuera de la zona y, si puedes, un volumen por encima de la media de las velas recientes.",
      },
      {
        mistake: "Colocar el stop justo en el nivel roto",
        why: "Es el punto donde se agrupan las órdenes de salida, y el precio suele volver a ese punto antes de continuar.",
        fix: "Deja un margen por dentro de la zona y calcula el tamaño con esa distancia real, no con la distancia teórica.",
      },
      {
        mistake: "Perseguir una ruptura que ya recorrió el doble del riesgo",
        why: "Cuando entras tarde, la distancia al stop crece y la relación riesgo/beneficio se deteriora solo por la entrada.",
        fix: "Si no entraste a tiempo, espera un retesteo o deja pasar la operación y busca otra zona.",
      },
    ],
    related: ["rupturas-y-rupturas-falsas", "soportes-y-resistencias", "que-es-una-estrategia", "estrategia-de-rango"],
    glossary: ["ruptura", "soporte-resistencia", "volumen", "stop-loss"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué convierte a una zona en una resistencia válida?",
        options: [
          "Que haya sido respetada en varias ocasiones",
          "Que coincida con un número redondo",
          "Que el precio la haya tocado una sola vez",
          "Que aparezca marcada en un indicador",
        ],
        correct: 0,
        explanation:
          "Una zona gana importancia con los toques repetidos; un solo contacto no dice nada sobre ella.",
      },
      {
        id: "q2",
        question: "¿Cuál es la confirmación clásica de una ruptura?",
        options: [
          "Una mecha que perfora el nivel",
          "Un cierre fuera de la zona con volumen por encima de la media",
          "Un comentario en un foro",
          "Un nivel que no se tocaba desde hacía tiempo",
        ],
        correct: 1,
        explanation:
          "El cierre fuera de la zona con volumen es lo que separa la ruptura de un simple intento.",
      },
      {
        id: "q3",
        question: "¿Dónde se coloca el stop en una operación de ruptura?",
        options: [
          "Justo en el nivel roto",
          "Lo más lejos posible para que no se toque",
          "Con margen por dentro de la zona rota",
          "En el extremo opuesto del gráfico",
        ],
        correct: 2,
        explanation:
          "El nivel roto es el punto más transitado; dejar margen evita que el retesteo normal te saque.",
      },
      {
        id: "q4",
        question: "¿Qué indica una ruptura producida con volumen bajo?",
        options: [
          "Que la operación es prácticamente segura",
          "Que conviene aumentar el tamaño de la posición",
          "Que la señal es débil y la ruptura puede fallar",
          "Que el objetivo debe ampliarse",
        ],
        correct: 2,
        explanation:
          "Sin volumen detrás, la ruptura refleja poca convicción y es fácil que el precio vuelva a la zona.",
      },
    ],
  },

  {
    slug: "estrategia-de-pullback",
    levelId: 5,
    order: 3,
    title: "Estrategia de pullback",
    shortTitle: "Pullback",
    category: "estrategias",
    tags: ["pullback", "tendencia", "retroceso"],
    summary:
      "Entrar en la corrección de una tendencia validada en lugar de perseguir el impulso, esperando al retroceso que mejora el riesgo.",
    keywords: ["estrategia de pullback", "entrar en el retroceso", "pullback en tendencia"],
    readMinutes: 6,
    updatedAt: "2026-02-15",
    explanation: {
      intro:
        "Un pullback es la corrección que hace el precio contra la dirección de la tendencia antes de continuar. La estrategia consiste en esperar esa corrección para entrar, en lugar de comprar en pleno impulso cuando el stop inevitablemente queda demasiado lejos.",
      paragraphs: [
        "Para que tenga sentido esperar el retroceso, primero debe existir una tendencia validada: máximos y mínimos crecientes en la temporalidad que estás mirando, o un recorrido claro por encima de una media. Sin tendencia, lo que llamas retroceso es solo un rebote dentro de un rango, y la lógica de la estrategia no aplica.",
        "El impulso se persigue y el retroceso se espera. Comprar justo después de una vela larga significa aceptar un stop muy alejado y una relación riesgo/beneficio pobre desde el primer instante. Al entrar en la corrección, en cambio, el stop puede colocarse detrás del último mínimo formado durante ese retroceso.",
        "Hay dos maneras de esperar el retroceso: con una zona de precio, como el suelo anterior o un nivel de Fibonacci, o con una media móvil que actúa como soporte dinámico. Ambas buscan lo mismo: un punto concreto donde el precio demuestre que la corrección se ha agotado.",
        "El riesgo del método es que a veces la corrección no llega y el precio sigue sin ti. Perder una operación por esperar forma parte del coste de la disciplina, y compensa mucho menos que entrar sin estructura detrás.",
      ],
      bullets: [
        "Tendencia validada antes de mirar cualquier entrada.",
        "Espera en la zona marcada, nunca en pleno impulso.",
        "Stop detrás del mínimo del retroceso, no detrás de la entrada.",
        "Si la tendencia se rompe, la idea se anula aunque el precio esté más barato.",
      ],
    },
    technical: {
      term: "Retroceso y continuación",
      body: "Un retroceso es un movimiento contra la tendencia principal que no altera su estructura: en una tendencia alcista, el retroceso no llega a superar el mínimo anterior. La continuación es el nuevo impulso en la dirección original. Cuanto más profundo es el retroceso, mejor resulta la relación riesgo/beneficio; pero un retroceso excesivamente profundo también deja más dudas sobre si la tendencia sigue viva.",
      formula: "Relación riesgo/beneficio = (Objetivo − Entrada) / (Entrada − Stop)",
      gloss:
        "Un retroceso que supera el 100 % del tramo anterior deja de ser un retroceso: es un cambio de estructura.",
    },
    example: {
      title: "Impulso y corrección en el mismo gráfico",
      narrative:
        "Un activo ficticio sube de 96 a 112 en treinta velas y después corrige durante cinco hasta 107, sin perder el último mínimo relevante. Quien compró en 112 ve mermada su posición desde el principio; quien espera en 107 entra con stop en 104 y objetivo en 116. El activo es el mismo; cambia el punto de entrada y con él todo el cálculo.",
      bullets: [
        "Impulso: de 96 a 112.",
        "Corrección: hasta 107, sin romper la estructura.",
        "Entrada en la corrección con stop corto y recorrido amplio.",
      ],
    },
    chart: buildPreset("pullback"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 107,
      stopLoss: 104,
      takeProfit: 116,
      outcome: "tp",
      narrative:
        "Entrada en 107 durante la corrección, con stop en 104 y objetivo en 116: 3 unidades de riesgo frente a 9 de recorrido, una relación 3 : 1. Si el precio hubiera entrado en 112, el mismo stop en 104 habría arriesgado 8 unidades para el mismo recorrido, arruinando la relación antes de empezar.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Comprar en el impulso y llamarlo pullback",
        why: "Entrar tras una vela larga deja el stop muy lejos y convierte cualquier corrección normal en una pérdida.",
        fix: "Si la corrección no ha empezado, no hay pullback: espera a que el precio retroceda a tu zona.",
      },
      {
        mistake: "Esperar el retroceso en una tendencia ya agotada",
        why: "Un tramo demasiado extendido suele corregir con fuerza y terminar rompiendo la estructura que justificaba la idea.",
        fix: "Mide el recorrido del tramo y coloca el stop donde la estructura se demuestre inválida.",
      },
      {
        mistake: "Entrar en la corrección sin condición de confirmación",
        why: "Comprar a mitad de la caída funciona mientras el retroceso continúe, y no hay manera de saberlo sin una regla previa.",
        fix: "Define qué cierra la corrección: una vela de giro, el contacto con la media o un nivel de precio concreto.",
      },
    ],
    related: ["impulso-y-correccion", "medias-moviles", "lineas-de-tendencia", "que-es-una-estrategia"],
    glossary: ["tendencia", "medias-moviles", "riesgo-beneficio", "temporalidad"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué debe existir antes de buscar un pullback?",
        options: [
          "Una tendencia validada",
          "Un indicador en zona de sobreventa",
          "Un rango marcado previamente",
          "Un dato económico publicado",
        ],
        correct: 0,
        explanation:
          "Sin una tendencia clara, el retroceso es solo un rebote lateral y la estrategia pierde su lógica.",
      },
      {
        id: "q2",
        question: "¿Por qué es mejor entrar en la corrección que en el impulso?",
        options: [
          "Porque el precio siempre es más barato",
          "Porque el stop puede colocarse más cerca y mejora la relación riesgo/beneficio",
          "Porque la entrada siempre se ejecuta",
          "Porque el mercado cierra antes",
        ],
        correct: 1,
        explanation:
          "La ventaja no es el precio menor, sino la distancia al stop respecto al recorrido esperado.",
      },
      {
        id: "q3",
        question: "En una tendencia alcista, ¿qué significa que el retroceso supere el mínimo anterior?",
        options: [
          "Que la tendencia se ha reforzado",
          "Que la estructura ha cambiado y la idea pierde validez",
          "Que conviene aumentar el tamaño",
          "Que el objetivo debe subirse",
        ],
        correct: 1,
        explanation:
          "La estructura alcista se define por mínimos crecientes; si ese mínimo se pierde, la premisa deja de cumplirse.",
      },
      {
        id: "q4",
        question: "¿Cuál es el coste de esperar el retroceso?",
        options: [
          "Que a veces el precio sigue sin ti y la operación no se abre",
          "Que el spread se amplía automáticamente",
          "Que el stop se aleja",
          "Que la tendencia se acelera",
        ],
        correct: 0,
        explanation:
          "Esperar puede hacer que te pierdas movimientos; es el precio de mantener la relación riesgo/beneficio.",
      },
    ],
  },

  {
    slug: "estrategia-de-rango",
    levelId: 5,
    order: 4,
    title: "Estrategia de rango",
    shortTitle: "Rango",
    category: "estrategias",
    tags: ["rango", "soporte", "resistencia"],
    summary:
      "Comprar en el suelo y vender en el techo mientras el rango aguante, y por qué la estrategia falla en cuanto el precio rompe ese rango.",
    keywords: ["estrategia de rango", "mercado lateral", "operar en rango"],
    readMinutes: 6,
    updatedAt: "2026-02-16",
    explanation: {
      intro:
        "Cuando el precio no consigue direccionarse y oscila entre dos niveles, se dice que está en rango. La estrategia más directa es comprar cerca del suelo y vender cerca del techo, una y otra vez, mientras los dos límites sigan respetados.",
      paragraphs: [
        "Un rango se reconoce retrospectivamente: hace falta que el precio haya tocado el suelo y el techo varias veces antes de considerarlo confirmado. Antes de eso solo existe una zona por marcar, no una zona operable. Por eso conviene dibujar la banda y entrar únicamente en los rebotes que se produzcan dentro de ella.",
        "Dentro del rango la operación es simple: entrada cerca del soporte, stop justo por debajo del suelo y objetivo antes del techo. Cuanto más cerca del suelo entras, mejor es la relación riesgo/beneficio, y por eso no conviene anticipar: si el precio no llega a la zona marcada, simplemente no hay operación.",
        "El riesgo real de la estrategia está en el final del rango. Cuando el precio rompe uno de los límites, todas las posiciones largas abiertas cerca del suelo quedan mal situadas y la regla dice que hay que salir, no esperar a que vuelva. La esperanza de recuperación es el modo en que una estrategia sencilla se convierte en una pérdida grande.",
        "También existe la operación contraria: esperar la ruptura y trabajar la salida del rango, que es la estrategia de ruptura de la lección anterior. Las dos son legítimas, pero no se pueden mezclar dentro de la misma operación.",
      ],
      bullets: [
        "Marca el suelo y el techo después de dos toques, no antes.",
        "Entrada cerca del soporte con stop por debajo del suelo.",
        "Objetivo antes del techo, no exactamente en el límite.",
        "Si el precio cierra fuera del rango, la operación se cierra.",
      ],
    },
    technical: {
      term: "Rango o mercado lateral",
      body: "Un rango es una zona de precio delimitada por un soporte y una resistencia entre los que el precio oscila durante muchas velas. El ancho del rango es la distancia entre los dos niveles y marca el beneficio teórico máximo de cada ida y vuelta. Cuando el precio cierra de forma sostenida fuera de esos límites, el rango deja de existir y la estrategia se suspende hasta marcar una nueva banda.",
      formula: "Ancho del rango = Techo − Suelo | Riesgo = Entrada − Stop",
      gloss:
        "Cuanto más estrecho es el rango, más pesa el spread: un ancho de 4 puntos con un coste de 1 deja poco margen.",
    },
    example: {
      title: "Un rango de diez puntos y sus dos finales",
      narrative:
        "Un activo ficticio oscila entre 95 y 105 durante seis semanas. La operación clásica entra en 96, coloca el stop en 93,80 y apunta a 103,60, antes de llegar al techo. Si el precio alcanza el objetivo, la operación gana 7,6 con 2,2 de riesgo, más de 3 : 1. Si una vela cierra en 93,50, el rango se ha roto y la posición se cierra de inmediato.",
      bullets: [
        "Suelo: 95 | Techo: 105.",
        "Entrada: 96 | Stop: 93,80 | Objetivo: 103,60.",
        "Cierre fuera del rango: salida obligatoria.",
      ],
    },
    chart: buildPreset("rango"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 96,
      stopLoss: 93.8,
      takeProfit: 103.6,
      outcome: "tp",
      narrative:
        "Entrada en 96 cerca del suelo del rango, stop en 93,80 y objetivo en 103,60 antes del techo. El riesgo es de 2,2 puntos y el recorrido de 7,6, más de 3 : 1. Si el precio cierra por debajo de 95, la lógica del rango deja de cumplirse y la posición se cierra aunque el objetivo no se haya tocado.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Anticipar el rebote antes de llegar al suelo",
        why: "Si entras a mitad del camino, el stop se aleja y el objetivo se acorta: la relación riesgo/beneficio empeora sola.",
        fix: "Espera a que el precio toque la zona marcada; si no llega, esa operación no existe.",
      },
      {
        mistake: "Ignorar la ruptura del rango",
        why: "Cuando el precio cierra fuera de la zona, la lógica de la estrategia deja de cumplirse y las posiciones abiertas quedan sin defensa.",
        fix: "Cierra en el primer cierre fuera del rango y vuelve a evaluar desde cero, sin arrastrar la idea anterior.",
      },
      {
        mistake: "Operar un rango demasiado estrecho",
        why: "Con poco ancho, el spread y la comisión se comen una parte grande del recorrido disponible dentro de la banda.",
        fix: "Compara el ancho del rango con el coste total de la operación antes de abrir la posición.",
      },
    ],
    related: ["soportes-y-resistencias", "estrategia-de-ruptura", "que-es-una-estrategia"],
    glossary: ["soporte-resistencia", "tendencia", "stop-loss", "spread"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuándo conviene dar un rango por confirmado?",
        options: [
          "Antes de que el precio empiece a moverse",
          "Después de que el suelo y el techo hayan sido respetados varias veces",
          "En cuanto el precio toque un número redondo",
          "Cuando un indicador lo indique",
        ],
        correct: 1,
        explanation:
          "Hacen falta contactos repetidos en los dos límites; antes de eso solo hay una zona por observar.",
      },
      {
        id: "q2",
        question: "Si el precio cierra por debajo del suelo del rango, ¿qué toca hacer?",
        options: [
          "Aguantar la posición esperando que vuelva",
          "Comprar más barato para promediar",
          "Cerrar la posición y evaluar de nuevo",
          "Duplicar el tamaño antes de la siguiente vuelta",
        ],
        correct: 2,
        explanation:
          "El cierre fuera del rango invalida la premisa de comprar en el suelo; aguantar es cambiar de estrategia sin decirlo.",
      },
      {
        id: "q3",
        question: "¿Por qué falla la estrategia cuando se rompe el rango?",
        options: [
          "Porque el spread se amplía automáticamente",
          "Porque la lógica de comprar abajo y vender arriba deja de cumplirse",
          "Porque el mercado cierra durante la ruptura",
          "Porque el stop deja de funcionar",
        ],
        correct: 1,
        explanation:
          "La estrategia solo existe dentro de la banda; al romperse, ya no hay suelo ni techo que respetar.",
      },
      {
        id: "q4",
        question: "¿Qué busca una entrada cerca del suelo del rango?",
        options: [
          "Un objetivo pequeño con un stop largo",
          "Un riesgo corto frente a un recorrido hacia el techo",
          "Una operación sin stop",
          "El tamaño máximo permitido por el broker",
        ],
        correct: 1,
        explanation:
          "Entrar abajo acorta la distancia al stop y alarga la del objetivo, que es lo que mejora la relación.",
      },
    ],
  },

  {
    slug: "swing-trading",
    levelId: 5,
    order: 5,
    title: "Swing trading: operar a días",
    shortTitle: "Swing trading",
    category: "estrategias",
    tags: ["swing", "temporalidades altas", "gestión"],
    summary:
      "Mantener posiciones durante varios días trabajando en H4 o D1, con una estructura de operación clara y una gestión que aguante los cierres.",
    keywords: ["qué es el swing trading", "operar en gráficos diarios", "gestión de posiciones a días"],
    readMinutes: 7,
    updatedAt: "2026-02-17",
    explanation: {
      intro:
        "El swing trading consiste en mantener posiciones abiertas durante varios días con el objetivo de capturar un tramo de movimiento dentro de una tendencia o de un rango. Se trabaja principalmente en temporalidades de H4 y de diaria, y las decisiones se toman al cierre de las velas, no al ritmo del precio.",
      paragraphs: [
        "La lógica es directa: si el impulso dura varios días, no hace falta mirar el precio cada minuto. La operación se planifica sobre la vela de cierre, con entrada, stop y objetivo definidos antes de que empiece la sesión siguiente. Durante el resto del tiempo no hay decisiones que tomar.",
        "La estructura de una operación de swing incluye la zona de interés, como una tendencia validada o un soporte respetado; el disparador, que suele ser la vela de confirmación; y los dos niveles de salida. El tamaño de posición se calcula con la distancia al stop, que en estas temporalidades es considerablemente mayor que en el intradía.",
        "La gestión nocturna es la parte que más incomoda. Mantener una posición abierta cuando el mercado está cerrado implica aceptar que el precio puede abrir muy lejos de donde lo dejaste: un hueco por la mañana puede ejecutar el stop en un punto peor que el previsto. Ese riesgo se asume o se reduce con tamaños menores.",
        "El swing trading exige menos tiempo frente al pantalla que el intradía, pero más paciencia: la mayor parte del tiempo la posición simplemente está abierta y no ocurrirá nada que merezca una reacción.",
      ],
      bullets: [
        "Trabaja en H4 o en D1 y decide con el cierre de la vela.",
        "Define antes la zona, el disparador, el stop y el objetivo.",
        "El stop es mayor que en temporalidades cortas: ajusta el tamaño.",
        "Acepta que la posición quedará abierta durante los cierres del mercado.",
      ],
    },
    technical: {
      term: "Posición swing y riesgo nocturno",
      body: "Una posición swing se abre en una temporalidad alta y se mantiene varios días. El riesgo nocturno es la posibilidad de que el mercado reabra mucho más allá de tu stop, con una ejecución en un precio peor que el previsto. La financiación por mantener la posición abierta, el swap, también se acumula cada día y forma parte del coste real de la operación.",
      formula: "Coste por mantener = Swap diario × Número de días con la posición abierta",
      gloss:
        "Antes de abrir, comprueba si hay datos o eventos programados mientras la posición vaya a estar abierta.",
    },
    example: {
      title: "Una operación de tres días",
      narrative:
        "Un activo ficticio cierra en 100 en el gráfico diario tras confirmar una estructura alcista. Se abre una posición compradora con stop en 96 y objetivo en 112. Al día siguiente el precio sube a 104 y no hay nada que decidir. Al tercer día llega a 112, se cierra la posición y el resultado es de 12 unidades con 4 de riesgo. Toda la operación se decidió antes del primer cierre.",
      bullets: [
        "Entrada en 100 con stop en 96 y objetivo en 112.",
        "Riesgo de 4 unidades y recorrido de 12: relación 3 : 1.",
        "Tres días de duración con decisiones tomadas al cierre.",
      ],
    },
    chart: buildScenario("swing-trading", {
      entry: 100,
      stopLoss: 96,
      takeProfit: 112,
      outcome: "tp",
      caption: "Ejemplo ficticio de una operación de swing",
      description:
        "Entrada en 100 con stop en 96 y objetivo en 112 durante varios días. La posición se gestiona al cierre de cada vela de H4 o D1, sin mirar el precio entre medias.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 112,
      outcome: "tp",
      narrative:
        "Entrada en 100 sobre el cierre diario, stop en 96 y objetivo en 112. El riesgo es de 4 unidades y el recorrido de 12: relación 3 : 1. Durante los tres días de la operación no hubo decisiones que tomar fuera de los cierres, y el swap acumulado por mantener la posición suma al coste final.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Mirar el precio en temporalidades mínimas con una posición de días",
        why: "Cada fluctuación intradía invita a cerrar antes de tiempo y a romper el plan que se acordó al cierre.",
        fix: "Programa dos revisiones al cierre de la vela y no consultes el precio entre medias.",
      },
      {
        mistake: "Colocar el stop a la distancia de un gráfico de minutos",
        why: "En H4 o D1 los retrocesos normales superan con facilidad un stop corto y la operación muere sin que la idea falle.",
        fix: "Calcula el stop con la estructura de la temporalidad alta y reduce el tamaño en vez de acercarlo.",
      },
      {
        mistake: "Olvidar los eventos mientras la posición está abierta",
        why: "Un dato relevante publicado con el mercado cerrado puede abrir el precio muy lejos de tu stop y de tu cálculo.",
        fix: "Consulta el calendario antes de mantener la posición y decide si la reduces antes del evento.",
      },
    ],
    related: ["temporalidades", "tendencias-y-estructura", "tamano-de-posicion", "que-es-una-estrategia"],
    glossary: ["swing", "temporalidad", "posicion", "riesgo-beneficio", "registro"],
    quiz: [
      {
        id: "q1",
        question: "¿En qué temporalidades trabaja normalmente el swing trading?",
        options: [
          "M1 y M5",
          "H4 y D1",
          "Solo en el gráfico de ticks",
          "En semanal y mensual sin ninguna revisión",
        ],
        correct: 1,
        explanation:
          "El método se apoya en velas de H4 o diarias, donde los movimientos de varios días son legibles.",
      },
      {
        id: "q2",
        question: "¿Cuál es la principal incomodidad de mantener la posición por la noche?",
        options: [
          "El mercado cierra y la posición desaparece",
          "El precio puede abrir muy lejos del stop y ejecutarlo en un punto peor",
          "El spread se vuelve fijo",
          "El broker anula la operación",
        ],
        correct: 1,
        explanation:
          "El riesgo de reapertura es real: el stop puede cumplirse en un precio alejado del previsto.",
      },
      {
        id: "q3",
        question: "¿Cuándo se toman las decisiones en una operación de swing?",
        options: [
          "Al cierre de la vela de la temporalidad alta",
          "Cada minuto que pasa",
          "Únicamente los lunes",
          "En cuanto el precio se acerca al objetivo",
        ],
        correct: 0,
        explanation:
          "El cierre de la vela es el único momento con información nueva; el resto es ruido intra.",
      },
      {
        id: "q4",
        question: "Si la distancia al stop es mayor que en el intradía, ¿qué se ajusta primero?",
        options: [
          "El objetivo, para que sea mucho más lejano",
          "El tamaño de la posición, para mantener el riesgo",
          "La temporalidad, bajando a M5",
          "El broker que ejecuta la orden",
        ],
        correct: 1,
        explanation:
          "Se mantiene el riesgo económico igual reduciendo el tamaño, no ampliando el stop por comodidad.",
      },
    ],
  },

  {
    slug: "scalping",
    levelId: 5,
    order: 6,
    title: "Scalping: sesiones muy cortas",
    shortTitle: "Scalping",
    category: "estrategias",
    tags: ["scalping", "intradía", "costes"],
    summary:
      "Operar en temporalidades de minutos con objetivos pequeños, donde el coste pesa muchísimo y el margen de error queda reducido al mínimo.",
    keywords: ["qué es el scalping", "operar en temporalidades de minutos", "coste del scalping"],
    readMinutes: 6,
    updatedAt: "2026-02-18",
    explanation: {
      intro:
        "El scalping es abrir y cerrar posiciones en cuestión de minutos, sobre gráficos de M1 o M5, con objetivos muy pequeños. A cambio de un riesgo controlado en cada operación, exige muchas decisiones en poco tiempo y una disciplina con los costes casi perfecta.",
      paragraphs: [
        "El punto central del scalping no es el objetivo, es el coste. Si cada operación busca 4 puntos y el spread y la comisión suman 1,2, el margen bruto real es de 2,8: casi un tercio del recorrido se va antes de empezar a contar aciertos.",
        "Por eso en el scalping el instrumento se elige por su spread, no por su aspecto. Un activo con un recorrido medio pequeño y un spread amplio hace inviable el método, porque necesita moverse más de lo que el coste permite. La lista de instrumentos interesantes se reduce mucho.",
        "El margen de error es mínimo en los dos sentidos: una ejecución ligeramente peor de la prevista se lleva una parte importante del beneficio esperado, y una operación que se alarga más de lo previsto deja de ser scalping y se convierte en una posición con otro perfil y otra gestión.",
        "Es también el estilo con mayor desgaste: se toman muchas decisiones por sesión y la fatiga se paga con entradas improvisadas, que son precisamente las que la estrategia prohíbe.",
      ],
      bullets: [
        "Elige el instrumento por su spread, no por su aspecto.",
        "Suma spread y comisión antes de fijar el objetivo.",
        "Objetivo corto y stop definido: nunca se mueve el stop para evitar la pérdida.",
        "Rigor con el número de operaciones: más operaciones no es mejor resultado.",
      ],
    },
    technical: {
      term: "Coste por operación",
      body: "El coste por operación es la suma del spread y de la comisión, medida en unidades de precio. En operaciones cortas ese coste no se amortiza con el recorrido: se paga entero en cada ida y vuelta. Un método con objetivos de 4 puntos necesita que el coste sea una fracción pequeña del objetivo para que la cuenta salga adelante con una tasa de aciertos razonable.",
      formula: "Beneficio neto = Beneficio bruto − (Spread + Comisión) × Número de operaciones",
      gloss:
        "Si el coste de una ida y vuelta supera la cuarta parte del objetivo, la operación apenas tiene margen.",
    },
    example: {
      title: "El coste que no se ve en el gráfico",
      narrative:
        "Un activo ficticio cotiza con un spread de 0,4 puntos y una comisión equivalente a 0,2 por ida y vuelta: 0,6 puntos por operación. Se buscan operaciones de 4 puntos con un stop de 2. En una serie de diez operaciones con seis aciertos, el beneficio bruto es de 16 puntos, pero los costes suman 6 y dejan el neto en 10. Más de un tercio del recorrido bruto se fue en tarifas.",
      bullets: [
        "Objetivo: 4 puntos | Stop: 2 puntos.",
        "Coste de ida y vuelta: 0,6 puntos por operación.",
        "Diez operaciones: 16 puntos brutos y 10 netos.",
      ],
    },
    chart: buildPreset("volatilidad"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 99,
      takeProfit: 102,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 99 y objetivo en 102: 1 punto de riesgo frente a 2 de recorrido, relación 2 : 1. Si el spread es de 0,4 puntos, el coste se come el 40 % del riesgo asumido, así que con objetivos tan cortos el instrumento y el momento de la entrada pesan tanto como la señal.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Fijar un objetivo menor que el coste de la operación",
        why: "Si la ida y vuelta cuesta más de lo que se busca ganar, la operación pierde dinero incluso acertando la dirección.",
        fix: "Suma spread y comisión antes de decidir si el objetivo merece la pena.",
      },
      {
        mistake: "Abrir muchas operaciones porque el gráfico de minutos siempre muestra algo",
        why: "Cada entrada extra multiplica el coste y el número de decisiones, no la calidad del resultado.",
        fix: "Limita el número de operaciones por sesión y exige el disparador completo antes de entrar.",
      },
      {
        mistake: "Usar el mismo tamaño que en temporalidades altas",
        why: "En minutos, un stop corto con un tamaño grande convierte una racha normal en una pérdida difícil de recuperar.",
        fix: "Calcula el tamaño con la distancia al stop y revisa el riesgo total acumulado de la sesión.",
      },
    ],
    related: ["costes-de-una-operacion", "entradas-y-ordenes", "que-es-una-estrategia"],
    glossary: ["scalping", "spread", "comision", "slippage", "temporalidad"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué determina la viabilidad de una operación de scalping?",
        options: [
          "El color de la vela",
          "El coste de ida y vuelta frente al objetivo buscado",
          "El número de indicadores del gráfico",
          "El horario del broker",
        ],
        correct: 1,
        explanation:
          "Con objetivos cortos, el coste es la primera variable del cálculo, antes que la señal.",
      },
      {
        id: "q2",
        question: "Si el objetivo es de 4 puntos y el coste total es de 1,2, ¿qué ocurre?",
        options: [
          "El margen bruto real queda en 2,8 puntos",
          "La operación no tiene coste",
          "El objetivo pasa a ser de 5,2 puntos",
          "No hay que contar los costes",
        ],
        correct: 0,
        explanation:
          "El recorrido útil es el objetivo menos el coste: 4 − 1,2 = 2,8 puntos.",
      },
      {
        id: "q3",
        question: "¿Por qué se elige el instrumento por su spread en el scalping?",
        options: [
          "Porque los gráficos se ven mejor",
          "Porque con objetivos pequeños el coste pesa proporcionalmente muchísimo",
          "Porque el spread fija el precio de cierre",
          "Porque en ese estilo no hay comisión",
        ],
        correct: 1,
        explanation:
          "Cuanto más corto es el objetivo, mayor es el peso proporcional del coste de la operación.",
      },
      {
        id: "q4",
        question: "¿Qué es una señal de alarma clara en un scalping?",
        options: [
          "Un stop amplio",
          "Un objetivo menor que el coste de la operación",
          "Un spread de 0,1 puntos",
          "Una sesión con poco movimiento",
        ],
        correct: 1,
        explanation:
          "Si el objetivo no supera holgadamente al coste, la operación no tiene margen ni con muchas aciertos.",
      },
    ],
  },

  {
    slug: "backtesting-y-overfitting",
    levelId: 5,
    order: 7,
    title: "Backtesting y sobreajuste",
    shortTitle: "Backtesting",
    category: "estrategias",
    tags: ["backtesting", "registro", "sobreajuste"],
    summary:
      "Cómo probar una estrategia sobre datos pasados, qué debe registrarse en cada operación y cómo reconocer cuando las reglas solo valen para esa muestra.",
    keywords: ["qué es el backtesting", "cómo probar una estrategia", "qué es el sobreajuste"],
    readMinutes: 7,
    updatedAt: "2026-02-20",
    explanation: {
      intro:
        "El backtesting consiste en aplicar las reglas de una estrategia sobre datos históricos para contar cuántas operaciones habría hecho y cómo habrían terminado. Es la forma más barata de equivocarse antes de arriesgar dinero, y también la más fácil de engañarse a uno mismo.",
      paragraphs: [
        "Un backtesting honesto empieza por las reglas escritas. Si se modifican las condiciones mientras se repasa el histórico, el resultado no mide la estrategia: mide la capacidad de ajustar las reglas al dato ya conocido. Ese es exactamente el origen del sobreajuste.",
        "El sobreajuste aparece cuando una estrategia describe el pasado en lugar de anticipar el futuro. Se reconoce por reglas cargadas de ajustes: filtros para cada excepción, parámetros que solo funcionan con un valor exacto y curvas de resultado que empeoran de inmediato al añadir una operación más.",
        "El registro es la otra mitad del trabajo. Cada operación debe llevar fecha, contexto, entrada, stop, objetivo, salida, costes y una nota sobre si se siguió el plan. Sin ese diario, el recuento final no distingue una estrategia mala de una estrategia buena aplicada mal, ni de una mala estrategia que tuvo suerte.",
        "Los resultados pasados no garantizan resultados futuros: el mercado cambia, los spreads cambian y la liquidez cambia. El backtesting sirve para descartar ideas débiles antes de arriesgar capital, nunca para prometer rentabilidad.",
      ],
      bullets: [
        "Escribe las reglas antes de tocar el histórico y no las modifiques durante la prueba.",
        "Registra operación por operación, incluidos costes y señales descartadas.",
        "Desconfía de cualquier curva demasiado limpia o de parámetros únicos.",
        "Un buen resultado histórico es una condición necesaria, nunca una garantía.",
      ],
    },
    technical: {
      term: "Muestra y sobreajuste",
      body: "El sobreajuste ocurre cuando un modelo se ajusta a las peculiaridades de los datos con los que se construyó en lugar de a la estructura subyacente. En trading se detecta dividiendo los datos: se ajusta la estrategia en una parte del histórico y se valida sobre otra que no se usó. Si el resultado cae de forma fuerte en la segunda mitad, las reglas estaban memorizando el pasado.",
      formula: "Sesgo de sobreajuste = Resultado en ajuste − Resultado en validación",
      gloss:
        "Cuanto más parámetros se tocan, más fácil es encontrar una combinación que funcione solo sobre ese periodo.",
    },
    example: {
      title: "Dos estrategias con el mismo beneficio",
      narrative:
        "Dos estrategias ficticias dejan ambas 40 puntos en un año. La primera los gana con 120 operaciones repartidas por igual. La segunda los gana con 18 operaciones concentradas en dos meses y con siete filtros añadidos para evitar cada pérdida observada. Al validar sobre un periodo que no se usó para ajustar, la primera mantiene el resultado y la segunda cae a la mitad: estaba describiendo lo que ya había pasado.",
      bullets: [
        "Estrategia A: 120 operaciones repartidas en el año.",
        "Estrategia B: 18 operaciones y siete filtros.",
        "La validación independiente separa el método de la suerte.",
      ],
    },
    chart: buildScenario("backtesting-y-overfitting", {
      entry: 100,
      stopLoss: 97,
      takeProfit: 109,
      outcome: "open",
      caption: "Ejemplo ficticio de una operación de prueba sin cerrar",
      description:
        "Entrada en 100, stop en 97 y objetivo en 109. La operación queda abierta en el registro: incluir los casos sin resolver evita sesgar el recuento hacia las operaciones terminadas.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 97,
      takeProfit: 109,
      outcome: "open",
      narrative:
        "Operación de prueba sin cerrar: entrada en 100, stop en 97 y objetivo en 109, con 3 puntos de riesgo y 9 de recorrido. Al seguir abierta, no entra todavía en el recuento de resultados, y registrar también los casos sin resolver es lo que evita sesgar la muestra hacia las operaciones que terminaron bien.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Ajustar las reglas mientras se revisa el histórico",
        why: "Cada cambio hecho con el resultado ya a la vista convierte la prueba en una descripción del pasado.",
        fix: "Fija las reglas antes de empezar y guarda la versión probada con su fecha.",
      },
      {
        mistake: "Contar solo las operaciones que se ejecutaron",
        why: "Las señales que la estrategia habría dado y no se registran distorsionan la tasa de aciertos real.",
        fix: "Anota también las entradas descartadas y el motivo por el que se descartaron.",
      },
      {
        mistake: "Presentar el resultado histórico como expectativa futura",
        why: "El mercado que vas a operar no es el mismo que el que ya pasó y los costes reales suelen ser mayores que en la prueba.",
        fix: "Usa el backtesting para descartar ideas y calcula el resultado esperado con margen de error.",
      },
    ],
    related: ["que-es-una-estrategia", "checklist-antes-de-operar", "estrategia-de-pullback"],
    glossary: ["backtesting", "overfitting", "registro", "estrategia", "disciplina"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué es el backtesting?",
        options: [
          "Probar la estrategia sobre datos históricos",
          "Operar en cuenta real con poco dinero",
          "Ajustar los parámetros hasta que salgan ganancias",
          "Seguir las operaciones de otro operador",
        ],
        correct: 0,
        explanation:
          "Aplicar las reglas fijas al pasado es la manera de contar cuántas operaciones habría hecho.",
      },
      {
        id: "q2",
        question: "¿Cómo se reconoce el sobreajuste?",
        options: [
          "Cuando la estrategia tiene muy pocas operaciones",
          "Cuando las reglas funcionan en la muestra usada para ajustarlas y empeoran después",
          "Cuando el objetivo de cada operación es grande",
          "Cuando el stop es amplio",
        ],
        correct: 1,
        explanation:
          "La caída al validar fuera de la muestra usada es el síntoma clásico de haber memorizado el pasado.",
      },
      {
        id: "q3",
        question: "¿Qué debe registrarse en cada operación de prueba?",
        options: [
          "Solo el resultado final",
          "Fecha, contexto, niveles, salida, costes y si se siguió el plan",
          "Únicamente las operaciones ganadoras",
          "El nombre del broker utilizado",
        ],
        correct: 1,
        explanation:
          "Sin ese detalle no se puede separar la calidad de la estrategia de la calidad de su ejecución.",
      },
      {
        id: "q4",
        question: "¿Qué demuestra un buen resultado en el histórico?",
        options: [
          "Que la estrategia ganará dinero en el futuro",
          "Que la idea merece seguir estudiándose, sin ninguna garantía",
          "Que hay que aumentar el tamaño de posición",
          "Que el mercado se comportará igual",
        ],
        correct: 1,
        explanation:
          "Es una condición necesaria para seguir adelante, no una promesa sobre lo que va a ocurrir.",
      },
    ],
  },
];
