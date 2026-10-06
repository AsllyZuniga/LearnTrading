import type { Lesson } from "~/types";
import { buildPreset, buildScenario } from "../charts/presets";

export const level1Lessons: Lesson[] = [
  {
    slug: "que-es-el-trading",
    levelId: 1,
    order: 1,
    title: "¿Qué es el trading?",
    shortTitle: "¿Qué es el trading?",
    category: "fundamentos",
    tags: ["definición", "conceptos básicos", "principiantes"],
    summary:
      "Qué es realmente el trading, en qué consiste una operación, quién interviene y por qué nunca es una forma de ingreso fija.",
    keywords: ["qué es trading", "definición de trading", "cómo funciona el trading"],
    readMinutes: 6,
    updatedAt: "2026-01-14",
    explanation: {
      intro:
        "Trading es comprar y vender activos financieros con la intención de obter un beneficio cuando el precio se mueve a tu favor. Suena sencillo, y ahí empieza el error más común: creer que por eso el resultado es fácil de conseguir.",
      paragraphs: [
        "Una operación de trading tiene siempre tres momentos: una entrada (compras o vendes), un momento de salida y, entre ambos, un riesgo asumido. Que el precio suba o baje no es lo único que determina el resultado: también importa cuándo entras, cuánto compras y dónde dices que te has equivocado.",
        "En la práctica diaria, el trading se parece más a gestionar un riesgo repetido que a acertar una respuesta. Un operador profesional acepta perder muchas operaciones pequeñas y busca que las pocas ganadoras sean mayores que la suma de las pérdidas. Esa es la idea de riesgo/beneficio que verás en el nivel 3.",
        "Existe una diferencia importante entre operar e invertir. Invertir suele significar comprar un activo y mantenerlo durante meses o años, con la mirada puesta en el negocio. Operar significa entrar y salir en un plazo corto, de minutos a días, basándose en el precio.",
      ],
      bullets: [
        "Trading: decisiones sobre precio, con horizontes de minutos a días.",
        "Inversión: decisiones sobre el valor de un negocio, con horizontes largos.",
        "Activos típicos: divisas, acciones, materias primas y criptomonedas.",
      ],
    },
    technical: {
      term: "Operación de trading (trade)",
      body: "Una operación es la apertura de una posición, el mantenimiento de esa posición durante un tiempo y su cierre. Se mide por tres magnitudes: el precio de entrada, el precio de salida y el coste de transacción. El resultado de un trade es la diferencia entre entrada y salida multiplicada por el tamaño de la posición, menos los costes.",
      formula: "Resultado = (Precio de salida − Precio de entrada) × Tamaño de posición − Costes",
      gloss:
        "El tamaño de la posición es el número de unidades compradas o vendidas. Los costes incluyen el spread y las comisiones del broker.",
    },
    example: {
      title: "Una operación completa, paso a paso",
      narrative:
        "Imagina un activo inventado que cotiza a 100. Abres una posición compradora a 100, con un stop loss en 95 y un take profit en 110. Si el precio llega a 110 cierras y ganas 10 unidades por unidad comprada. Si baja a 95, el broker cierra la posición y pierdes 5. Si no ocurre ninguna de las dos cosas y cierras a 102, ganas 2.",
      bullets: [
        "Riesgo asumido: 5 unidades por unidad.",
        "Beneficio buscado: 10 unidades por unidad.",
        "Relación riesgo/beneficio: 2 : 1.",
      ],
    },
    chart: buildScenario("que-es-el-trading", {
      caption: "Ejemplo ficticio: los tres desenlaces de una operación",
      description:
        "Una misma entrada con dos desenlaces opuestos y un tercero intermedio. El resultado depende del precio de salida, no de la calidad de la idea.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 95,
      takeProfit: 110,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 95 y objetivo en 110. Si el precio llega al objetivo, la operación gana 10; si toca el stop, pierde 5. El gráfico de arriba muestra las tres rutas posibles.",
      capital: 1_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Creer que el trading es una fuente de ingresos estable",
        why: "El resultado depende del mercado y de tus decisiones. No hay un salario mensual garantizado.",
        fix: "Estudia primero con cuentas de demostración y con dinero que puedas permitirte perder por completo.",
      },
      {
        mistake: "Confundir actividad con resultado",
        why: "Abrir veinte operaciones al día no genera veinte resultados: genera más costes y más oportunidades de error.",
        fix: "Mide primero la calidad de tus decisiones (¿seguías tu plan?) antes que el dinero.",
      },
      {
        mistake: "Empezar por los mercados más difíciles",
        why: "La dinámica operativa de cada mercado es distinta y no se puede copiar de un mercado a otro.",
        fix: "Empieza con un solo mercado y una sola temporalidad hasta entender su dinámica.",
      },
    ],
    related: ["que-es-forex", "que-es-un-broker", "que-significa-comprar-y-vender"],
    glossary: ["trading", "spread", "pip", "lote", "stop-loss", "take-profit"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué define principalmente el resultado de una operación?",
        options: [
          "La calidad del broker que ejecuta la orden",
          "La diferencia entre el precio de entrada y el de salida, menos los costes",
          "El número de operaciones que ejecutas al mes",
          "El nombre del indicador que utilizas",
        ],
        correct: 1,
        explanation:
          "El resultado es la diferencia de precios multiplicada por el tamaño de la posición, menos los costes del broker.",
      },
      {
        id: "q2",
        question: "¿Cuál es la diferencia más importante entre trading e inversión?",
        options: [
          "La inversión nunca pierde dinero",
          "El trading se basa en el precio con plazos cortos; la inversión se basa en el valor del negocio a largo plazo",
          "El trading solo se hace en divisas",
          "La inversión requiere más capital",
        ],
        correct: 1,
        explanation:
          "La diferencia está en el horizonte temporal y en qué se analiza: precio frente a valor fundamental.",
      },
      {
        id: "q3",
        question: "Si abres una posición compradora en 100 y cierras en 105, ¿qué ocurre?",
        options: [
          "Pierdes 5 unidades por unidad comprada",
          "Ganas 5 unidades por unidad comprada, antes de contar costes",
          "No ocurre nada hasta que cierres el mes",
          "Ganas 105 unidades por unidad comprada",
        ],
        correct: 1,
        explanation:
          "En una posición compradora se gana si el precio de salida es mayor que el de entrada.",
      },
      {
        id: "q4",
        question: "¿Por qué una relación riesgo/beneficio favorable importa aunque aciertes pocas operaciones?",
        options: [
          "Porque permite operar con spreads más altos",
          "Porque un beneficio grande puede compensar varias pérdidas pequeñas",
          "Porque elimina el riesgo de la operación",
          "Porque garantiza que se ganará dinero a largo plazo",
        ],
        correct: 1,
        explanation:
          "Con una relación 1:3, tres pérdidas de 1 compensan un beneficio de 3. Aun así pueden existir rachas larguísimas de pérdidas.",
      },
    ],
  },

  {
    slug: "que-es-forex",
    levelId: 1,
    order: 2,
    title: "¿Qué es Forex?",
    shortTitle: "¿Qué es Forex?",
    category: "mercados",
    tags: ["divisas", "pares", "mercado más grande"],
    summary:
      "Qué es el mercado de divisas, cómo se forman los pares, quién participa y por qué es el mercado más grande por volumen.",
    keywords: ["qué es forex", "mercado de divisas", "pares de divisas"],
    readMinutes: 6,
    updatedAt: "2026-01-14",
    explanation: {
      intro:
        "Forex es el mercado donde se compran y venden divisas. No se comercia «el euro» de forma aislada: se comercia siempre un par, y el precio de ese par indica cuánto de la segunda divisa necesitas para comprar una de la primera.",
      paragraphs: [
        "Si el par EUR/USD vale 1,0850, significa que necesitas 1,0850 dólares para comprar un euro. Si compras el par, estás comprando euros con dólares; si lo vendes, estás vendiendo euros. La segunda divisa de cada par es siempre la referencia.",
        "Es el mercado más grande del mundo por volumen: cada día se mueven cientos de miles de millones de unidades de una sola divisa. Ese volumen enorme hace que los precios se muevan con mucha liquidez y, por tanto, que el coste de comprar y vender sea bajo en los pares más cotizados.",
        "El mercado está abierto prácticamente toda la semana, de domingo por la tarde a viernes por la tarde, aunque cada divisa tiene su propio horario de actividad. El precio de una divisa se mueve por datos económicos, decisiones de bancos centrales, flujos de inversión y, a veces, por liquidaciones abruptas.",
      ],
      bullets: [
        "Se opera siempre en pares: EUR/USD, GBP/JPY, USD/MXN.",
        "El precio indica cuántas unidades de la segunda divisa necesitas para una de la primera.",
        "Comprar un par significa comprar la divisa base y vender la divisa cotizada.",
        "El apalancamiento es habitual, por lo que el riesgo real es mayor de lo que parece.",
      ],
    },
    technical: {
      term: "Par de divisas y pip",
      body: "Un par de divisas se escribe siempre con dos códigos ISO de tres letras. La primera es la divisa base y la segunda la divisa cotizada. El pip es la cuarta cifra decimal en los pares donde el dólar va segundo y la segunda en los pares con yen. El pip es la unidad con la que se miden los movimientos y los stops.",
      formula: "Valor del pip = Tamaño del contrato × 0,0001 (o 0,01 si el yen va segundo)",
      gloss:
        "En un par como EUR/USD, un movimiento de 1,0850 a 1,0860 son 10 pips. En USD/JPY sería de 109,00 a 109,10.",
    },
    example: {
      title: "Leer un par y medir una distancia",
      narrative:
        "Supón que el EUR/USD está en 1,0850 y quieres comprar el par. Si tu stop loss está en 1,0820, la distancia al stop es de 30 pips. Si el take profit está en 1,0940, la distancia al objetivo es de 90 pips. La relación riesgo/beneficio es 3 : 1: por cada 30 pips de riesgo, aceptas 90 pips de recorrido esperado.",
      bullets: [
        "Entrada: 1,0850",
        "Stop loss: 1,0820 (30 pips de riesgo)",
        "Take profit: 1,0940 (90 pips de beneficio)",
        "Relación riesgo/beneficio: 3 : 1",
      ],
    },
    chart: buildPreset("escala-forex"),
    tradeExample: {
      instrument: "EUR/USD (ejemplo ficticio)",
      direction: "long",
      entry: 1.085,
      stopLoss: 1.082,
      takeProfit: 1.094,
      outcome: "tp",
      narrative:
        "Compra de EUR/USD en 1,0850 con stop en 1,0820 y objetivo en 1,0940. El riesgo es de 30 pips y el recorrido esperado de 90 pips. En una cuenta de 1 000 dólares, un lote estándar arriesga 300 dólares, así que el tamaño debe ajustarse para no superar el riesgo elegido.",
      capital: 1_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Pensar que comprar un par significa comprar la primera divisa tal cual",
        why: "Comprar EUR/USD es comprar euros y vender dólares simultáneamente.",
        fix: "Antes de operar, escribe en una frase qué estás comprando y qué estás vendiendo.",
      },
      {
        mistake: "Usar el apalancamiento máximo del broker",
        why: "Un apalancamiento alto multiplica las pérdidas igual que los beneficios, y puede vaciar la cuenta con un movimiento pequeño.",
        fix: "Calcula el tamaño de posición con el simulador y limita el riesgo por operación, no el apalancamiento.",
      },
      {
        mistake: "Ignorar el horario de los datos macro relevantes",
        why: "Publicaciones de datos macro relevantes pueden mover el precio cientos de pips en segundos.",
        fix: "Reduce el riesgo antes de publicaciones importantes o espera a que el mercado se estabilice.",
      },
    ],
    related: ["que-es-un-broker", "apalancamiento", "spread", "que-es-el-trading"],
    glossary: ["pip", "lote", "spread", "margen", "apalancamiento", "forex"],
    quiz: [
      {
        id: "q1",
        question: "Si EUR/USD está en 1,0850, ¿qué significa?",
        options: [
          "Un euro cuesta 1,0850 dólares",
          "Un dólar cuesta 1,0850 euros",
          "El euro ha subido un 8,85 %",
          "El par cotiza con 4 decimales",
        ],
        correct: 0,
        explanation:
          "El precio indica cuántas unidades de la divisa cotizada (USD) necesitas para comprar una de la divisa base (EUR).",
      },
      {
        id: "q2",
        question: "Comprar el par EUR/USD significa:",
        options: [
          "Comprar euros con dólares",
          "Vender euros con dólares",
          "Comprar dólares con euros",
          "Comprar acciones del EUR/USD",
        ],
        correct: 0,
        explanation:
          "Se compra la divisa base (EUR) y se vende la divisa cotizada (USD) de forma simultánea.",
      },
      {
        id: "q3",
        question: "En EUR/USD, ¿qué es un pip?",
        options: [
          "El 1 % del movimiento del par",
          "La variación del cuarto decimal, por ejemplo de 1,0850 a 1,0860",
          "El número de lotes de la operación",
          "El beneficio de la operación",
        ],
        correct: 1,
        explanation:
          "En los pares con dólar segundo, un pip es la cuarta cifra decimal: 1,0850 → 1,0860 son 10 pips.",
      },
      {
        id: "q4",
        question: "¿Por qué Forex es conocido por permitir apalancamiento?",
        options: [
          "Porque los precios de las divisas no cambian",
          "Porque el broker te presta el dinero de la operación y cobra intereses por ello",
          "Porque no hay spread en Forex",
          "Porque las ganancias están garantizadas por el banco central",
        ],
        correct: 1,
        explanation:
          "El apalancamiento implica ampliar la exposición con capital prestado, y por eso multiplica también el riesgo de pérdida.",
      },
    ],
  },

  {
    slug: "que-son-las-criptomonedas",
    levelId: 1,
    order: 3,
    title: "¿Qué son las criptomonedas?",
    shortTitle: "¿Qué son las criptomonedas",
    category: "mercados",
    tags: ["cripto", "blockchain", "bitcoin"],
    summary:
      "Qué es una criptomoneda, qué papel juega la blockchain, por qué se mueven las 24 horas y qué riesgos concretos tiene operar en ellas.",
    keywords: ["qué son las criptomonedas", "qué es bitcoin", "qué es blockchain"],
    readMinutes: 6,
    updatedAt: "2026-01-15",
    explanation: {
      intro:
        "Una criptomoneda es un activo digital que se apoya en una red descentralizada —una blockchain— para registrar y verificar sus transacciones sin depender de un banco central.",
      paragraphs: [
        "La idea central es que miles de ordenadores repartidos por el mundo guardan una copia idéntica del libro de cuentas. Cuando alguien paga, la operación se agrupa con otras en un bloque, ese bloque se comprueba y se añade a la cadena. Alterar algo ya escrito exigiría rehacer todos los bloques siguientes, lo que hace el fraude muy caro.",
        "Todo lo que no es bitcoin se llama altcoins o tokens. Se diferencian mucho: algunas buscan resolver problemas concretos de la tecnología, otras solo siguen una tendencia de mercado. No todas tienen una base tecnológica sólida y muchas son especulativas.",
        "El mercado cripto funciona las 24 horas, todos los días. No hay cierre, y eso tiene dos efectos: puedes operar cuando quieras, pero también no hay un momento tranquilo en el que el mercado «se asiente» ni una sesión oficial donde abrir.",
      ],
      bullets: [
        "Functionan 24/7, sin sesiones ni horarios de cierre.",
        "La volatilidad suele ser mayor que en acciones o en divisas.",
        "Hay miles de activos distintos y muchos de ellos son muy poco líquidos.",
        "Las perdidas pueden ser del 100 % del capital si el activo desaparece o se bloquea.",
      ],
    },
    technical: {
      term: "Blockchain y volatilidad",
      body: "Una blockchain es un registro distribuido al que solo se le puede añadir información: cada bloque referencia el anterior mediante un identificador criptográfico, de modo que modificar un bloque antiguo obligaría a recalcular todos los siguientes. En cripto, la volatilidad es alta porque hay poca regulación, muchos participantes apalancados y un mercado que nunca descansa.",
      formula: "Volatilidad = Amplitud de los movimientos de precio en un periodo",
      gloss:
        "Una criptomoneda muy volátil puede moverse un 15 % en un día sin que exista ninguna noticia relevante.",
    },
    example: {
      title: "El mismo concepto, dos mercados distintos",
      narrative:
        "En una acción, un movimiento del 10 % en un día es excepcional. En una criptomoneda pequeña, ese movimiento es habitual. Si compras al cierre del día siguiente, tu stop loss puede ejecutarse muy lejos del precio que habías calculado, porque entre el cierre y la apertura el mercado se movió.",
      bullets: [
        "Acción: sesión de 6 horas y cierre oficial.",
        "Cripto: 24 horas sin cierre.",
        "Consecuencia: el riesgo real suele ser mayor en cripto.",
      ],
    },
    chart: buildPreset("cripto-24h"),
    tradeExample: {
      instrument: "Activo cripto ficticio",
      direction: "long",
      entry: 42,
      stopLoss: 38,
      takeProfit: 52,
      outcome: "tp",
      narrative:
        "Entrada en 42 con stop en 38 (4 unidades de riesgo) y objetivo en 52 (10 unidades de recorrido). Con una relación 2,5 : 1, en una serie de 10 operaciones necesitas acertar al menos un 28,6 % para no perder dinero. En un activo de baja liquidez, el precio puede saltarse el nivel del stop y ejecutarse peor de lo previsto.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Comprar activos cripto sin comprobar su liquidez",
        why: "En activos poco líquidos no siempre hay comprador al precio que quieres, y la salida puede costar mucho más de lo previsto.",
        fix: "Prioriza los pares más líquidos y comprueba siempre el volumen antes de entrar.",
      },
      {
        mistake: "Usar el mismo tamaño de posición que en acciones",
        why: "La volatilidad cripto puede ejecutar tu stop lejos del precio calculado.",
        fix: "Reduce el tamaño y mide siempre la distancia en porcentaje, no en puntos.",
      },
      {
        mistake: "Confundir tecnología con oportunidad de inversión",
        why: "Que una tecnología exista no significa que su precio vaya a subir.",
        fix: "Estudia qué problema resuelve y quién lo usaría, por separado de cualquier gráfico.",
      },
    ],
    related: ["que-es-forex", "que-son-las-acciones", "volatilidad"],
    glossary: ["criptomoneda", "bitcoin", "volatilidad", "liquidez", "apalancamiento"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué función principal cumple una blockchain?",
        options: [
          "Hacer que los precios suban",
          "Registrar y verificar transacciones de forma descentralizada y difícil de alterar",
          "Sustituir a los bancos centrales en la emisión de dinero",
          "Garantizar el precio de los criptoactivos",
        ],
        correct: 1,
        explanation:
          "La blockchain es un libro de cuentas distribuido; no controla precios ni garantiza resultados.",
      },
      {
        id: "q2",
        question: "¿Qué diferencia operativa tiene el mercado cripto frente a las acciones?",
        options: [
          "Cierra todos los días a las 17:00",
          "Funciona 24 horas sin cierre",
          "No permite usar apalancamiento",
          "Solo se puede operar en euros",
        ],
        correct: 1,
        explanation:
          "El mercado cripto opera de forma continua, con lo que no existe una sesión de cierre oficial.",
      },
      {
        id: "q3",
        question: "¿Por qué la volatilidad en cripto suele ser mayor?",
        options: [
          "Porque el mercado está muy regulado",
          "Porque hay pocos participantes, poca regulación y muchas posiciones apalancadas",
          "Porque no hay gráficos",
          "Porque los brokers no permiten operar",
        ],
        correct: 1,
        explanation:
          "Poca regulación, muchos activos poco líquidos y mucho apalancamiento amplifican los movimientos.",
      },
      {
        id: "q4",
        question: "¿Qué significa que un activo cripto tenga poca liquidez?",
        options: [
          "Que no se puede comprar",
          "Que hay pocos compradores y vendedores, y por tanto el precio puede moverse mucho con poco volumen",
          "Que el precio es estable",
          "Que el broker cobra menos spread",
        ],
        correct: 1,
        explanation:
          "Con poca liquidez, entrar o salir con volumen moderado puede mover el precio y encarecer la operación.",
      },
    ],
  },

  {
    slug: "que-son-las-acciones",
    levelId: 1,
    order: 4,
    title: "¿Qué son las acciones?",
    shortTitle: "¿Qué son las acciones",
    category: "mercados",
    tags: ["acciones", "bolsa", "renta variable"],
    summary:
      "Qué representa una acción, por qué su precio puede caer, cómo se gana dinero con ellas y qué riesgos tiene operar en bolsa.",
    keywords: ["qué son las acciones", "qué es una acción de bolsa", "cómo funcionan las acciones"],
    readMinutes: 6,
    updatedAt: "2026-01-15",
    explanation: {
      intro:
        "Una acción es una unidad de propiedad de una parte de una empresa. Comprar una acción significa ser copropietario de una fracción de ese negocio, con los derechos que eso implica.",
      paragraphs: [
        "Cuando alguien compra acciones en bolsa, el dinero no va a la empresa: va al vendedor anterior. La empresa emite acciones por primera vez en una salida a bolsa (IPO) y obtiene capital; después, las acciones circulan entre inversores. Eso es un matiz importante, porque explica por qué el precio puede caer aunque la empresa vaya bien.",
        "Las empresas suelen pagar dividendos: parte del beneficio que se reparte entre los accionistas. No todos los negocios los reparten; muchas lo reinvierten para crecer.",
        "El precio de una acción lo determina la oferta y la demanda en cada momento. Si muchas personas quieren el mismo activo y hay pocos vendedores, el precio sube. El movimiento refleja, por tanto, las expectativas sobre el futuro de la empresa, no su valor actual comprobado.",
      ],
      bullets: [
        "Comprar una acción es comprar una fracción de propiedad de una empresa.",
        "El precio refleja expectativas, no el valor contable ni los beneficios actuales.",
        "El mercado funciona en sesiones con horario y cierre.",
        "Existen acciones de empresas pequeñas y poco líquidas, con spreads altos.",
      ],
    },
    technical: {
      term: "Cotización y capitalización bursátil",
      body: "La cotización es el precio de una acción en un momento dado. La capitalización bursátil es el precio de la acción multiplicado por el número de acciones en circulación. Una orden de compra se ejecuta contra la mejor oferta de venta disponible, y si el volumen necesario no está disponible, se ejecuta parcialmente o al siguiente precio disponible.",
      formula: "Capitalización = Precio de la acción × Número de acciones en circulación",
      gloss:
        "Por eso un stop loss en acciones pequeñas puede ejecutarse lejos del precio indicado si hay un hueco de liquidez.",
    },
    example: {
      title: "Precio, expectativas y capitalización",
      narrative:
        "Una empresa con 100 millones de acciones cotizando a 20 tiene una capitalización de 2.000 millones. Si el mercado pasa a creer que el negocio va a crecer, la cotización sube aunque todavía no hayan cambiado los beneficios. Si esas expectativas no se cumplen, el precio puede volver a caer con la misma rapidez.",
      bullets: [
        "Cotización: 20 por acción.",
        "Acciones en circulación: 100 millones.",
        "Capitalización: 2.000 millones.",
      ],
    },
    chart: buildPreset("entrada-ruptura"),
    tradeExample: {
      instrument: "Acción ficticia",
      direction: "long",
      entry: 100,
      stopLoss: 96.8,
      takeProfit: 106.4,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 96,80 y objetivo en 106,40: riesgo de 3,20 y recorrido de 6,40, es decir 2 : 1. Con un capital de 5.000 dólares y un riesgo del 1 %, el tamaño sería 15,625 acciones.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Comprar una acción solo porque ha subido mucho",
        why: "Que un activo esté muy alto o muy bajo en relación a su historia no dice nada sobre lo que hará después.",
        fix: "Necesitas un motivo para entrar y un nivel que defina tu error.",
      },
      {
        mistake: "Confundir el precio de la acción con el valor de la empresa",
        why: "El precio por acción depende de cuántas acciones existen en circulación.",
        fix: "Mira siempre la capitalización y los resultados, no solo el precio nominal.",
      },
      {
        mistake: "Ignorar la liquidez al elegir acciones",
        why: "En empresas pequeñas, el spread es amplio y el stop puede ejecutarse peor de lo previsto.",
        fix: "Comprueba el volumen medio diario y evita operar con tamaños grandes respecto a ese volumen.",
      },
    ],
    related: ["que-es-el-trading", "precio-volumen-y-liquidez", "diversificacion"],
    glossary: ["accion", "dividendo", "liquidez", "volumen", "capitalizacion", "spread"],
    quiz: [
      {
        id: "q1",
        question: "Comprar una acción significa:",
        options: [
          "Prestar dinero a la empresa",
          "Adquirir una parte de la propiedad de la empresa",
          "Comprar deuda de la empresa",
          "Firmar un contrato con el Estado",
        ],
        correct: 1,
        explanation:
          "Una acción es una fracción de propiedad con derechos económicos y de voto.",
      },
      {
        id: "q2",
        question: "Cuando alguien compra una acción en bolsa, ¿quién recibe el dinero?",
        options: [
          "La empresa",
          "El vendedor anterior de esa acción",
          "El Estado",
          "El banco central",
        ],
        correct: 1,
        explanation:
          "Fuera de la salida a bolsa, el dinero circula entre inversores. La empresa solo recibe capital cuando emite acciones nuevas.",
      },
      {
        id: "q3",
        question: "¿Qué es la capitalización bursátil?",
        options: [
          "El dinero que la empresa tiene en el banco",
          "El precio de la acción multiplicado por el número de acciones en circulación",
          "El beneficio anual de la empresa",
          "El tamaño del mercado",
        ],
        correct: 1,
        explanation: "Es el valor de mercado de todas las acciones en circulación.",
      },
      {
        id: "q4",
        question: "¿Por qué importa la liquidez de una acción?",
        options: [
          "Porque una acción ilíquida siempre sube más",
          "Porque si hay pocos compradores y vendedores, entrar o salir cuesta más y el stop puede ejecutarse peor",
          "Porque determina el color del gráfico",
          "Porque es lo único que determina el precio",
        ],
        correct: 1,
        explanation:
          "La liquidez afecta al coste real de operar y a la calidad de ejecución de tus órdenes.",
      },
    ],
  },

  {
    slug: "que-es-un-mercado-financiero",
    levelId: 1,
    order: 5,
    title: "¿Qué es un mercado financiero?",
    shortTitle: "¿Qué es un mercado financiero",
    category: "financiero",
    tags: ["mercados", "oferta y demanda", "precio"],
    summary:
      "Qué es un mercado, quién interviene en él, cómo se fija el precio y por qué existen lotes distintos con características distintas.",
    keywords: ["qué es un mercado financiero", "cómo se forma el precio", "mercado de capitales"],
    readMinutes: 6,
    updatedAt: "2026-01-15",
    explanation: {
      intro:
        "Un mercado financiero es un lugar —físico o electrónico— donde se intercambian activos y se fija su precio mediante la interacción entre oferta y demanda.",
      paragraphs: [
        "En un mercado real hay participantes con intereses distintos: quien quiere comprar, quien quiere vender, quien intermedia (el broker o el mercado), quien regula y quien informa. El precio no lo fija ningún regulador: emerge del cruce entre órdenes.",
        "El dinero no se crea ni se destruye en cada operación. Cuando compras una acción, alguien más la vende. Lo que cambia es quién la posee. Esa es una idea que cuesta interiorizar y que explica por qué el mercado en su conjunto no puede «subir» para todos a la vez.",
        "Según el plazo y el instrumento existen mercados distintos. Los de renta variable (acciones) son de largo plazo; los de futuros, de meses; los de divisas y el intradía, de minutos u horas. Cada uno tiene su propio ritmo, su propio coste y sus propios riesgos.",
      ],
      bullets: [
        "El precio lo fija el cruce entre órdenes de compra y venta.",
        "Cada operación tiene siempre una contraparte.",
        "El dinero cambia de manos: no se genera en cada compraventa.",
        "Cada mercado tiene su horario, su coste y su riesgo.",
      ],
    },
    technical: {
      term: "Mercado y formación de precio",
      body: "En la formación de precio por cruce de órdenes, cada orden limitada tiene un precio máximo (compra) o mínimo (venta) y una cantidad. El motor de negociación empareja órdenes compatibles: si no hay coincidencia exacta, la orden se ejecuta parcialmente contra la mejor contraparte disponible. El precio de referencia que ves en pantalla es el de la última operación o el del mejor par disponible.",
      formula: "Orden limitada: compra con precio máximo P / venta con precio mínimo P",
      gloss:
        "Una orden a mercado se ejecuta al mejor precio disponible en ese instante, sin garantía de precio.",
    },
    example: {
      title: "Oferta y demanda en la práctica",
      narrative:
        "Si hay 10.000 acciones vendidas y 25.000 demandadas al mismo precio, los compradores tienen que aceptar precios algo más altos para conseguir la acción. Ese es el mecanismo que empuja el precio al alza. Si la situación se invierte, el precio baja.",
      bullets: [
        "Más demanda que oferta → el precio sube.",
        "Más oferta que demanda → el precio baja.",
        "El precio se mueve hasta que las cantidades se equilibran.",
      ],
    },
    chart: buildPreset("rango"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 96,
      stopLoss: 93.5,
      takeProfit: 103,
      outcome: "tp",
      narrative:
        "En un mercado limitado entre 95 y 105, una entrada en 96 con stop en 93,50 y objetivo en 103 tiene 2,5 unidades de riesgo y 7 de recorrido. Si el precio nunca supera la parte alta del rango, la operación queda sin resultado hasta que se cierra.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Pensar que si el activo sube, todo el mundo gana",
        why: "En cada operación hay un comprador y un vendedor. Lo que sube es el precio del activo, no el resultado de todos.",
        fix: "Piensa en términos de tu propia operación: entrada, riesgo y salida.",
      },
      {
        mistake: "Confundir un mercado con una empresa concreta",
        why: "El mercado es el mecanismo de descubrimiento de precios; la empresa es solo uno de los participantes.",
        fix: "Estudia el gráfico como el resultado de miles de decisiones, no como el estado de ánimo de la empresa.",
      },
      {
        mistake: "Esperar que un mercado que funciona 24 horas también tenga un horario de bolsa",
        why: "Divisas y cripto funcionan de forma continua; las acciones tienen sesiones.",
        fix: "Consulta el horario del mercado concreto antes de planificar una operación.",
      },
    ],
    related: ["que-es-un-broker", "precio-volumen-y-liquidez", "que-son-las-acciones"],
    glossary: ["mercado", "orden-limitada", "orden-a-mercado", "spread", "liquidez"],
    quiz: [
      {
        id: "q1",
        question: "En un mercado financiero, ¿quién fija el precio?",
        options: [
          "El regulador financiero",
          "El cruce entre las órdenes de compra y venta",
          "El broker más grande",
          "El banco central del país",
        ],
        correct: 1,
        explanation:
          "El precio emerge del encuentro entre órdenes. Ninguna entidad lo fija de forma directa, aunque sí puede influir indirectamente.",
      },
      {
        id: "q2",
        question: "Si hay más órdenes de compra que de venta al mismo precio, ¿qué suele ocurrir?",
        options: [
          "El precio baja",
          "El precio sube",
          "El precio no cambia nunca",
          "Se cierra el mercado",
        ],
        correct: 1,
        explanation:
          "El exceso de demanda empuja el precio al alza hasta que se equilibra la oferta.",
      },
      {
        id: "q3",
        question: "¿Qué caracteriza a una orden limitada?",
        options: [
          "Se ejecuta siempre al instante",
          "Se ejecuta solo al precio indicado o mejor",
          "No tiene límite de precio",
          "Es gratis para el inversor",
        ],
        correct: 1,
        explanation:
          "Una orden limitada fija un precio máximo (compra) o mínimo (venta); si no hay contraparte, no se ejecuta.",
      },
      {
        id: "q4",
        question: "Al comprar una acción en bolsa, ¿el dinero va a la empresa?",
        options: [
          "Sí, siempre",
          "No, va a quien vende la acción",
          "Solo si la acción es nueva",
          "Depende del broker",
        ],
        correct: 1,
        explanation:
          "Solo en la emisión inicial (salida a bolsa) la empresa recibe el dinero. En el mercado secundario, se paga al vendedor.",
      },
    ],
  },

  {
    slug: "que-es-un-broker",
    levelId: 1,
    order: 6,
    title: "¿Qué es un broker?",
    shortTitle: "¿Qué es un broker",
    category: "broker",
    tags: ["broker", "intermediario", "comisiones"],
    summary:
      "Qué hace exactamente un broker, de dónde vienen tus precios, qué comisiones cobra y qué aspectos conviene revisar antes de elegir uno.",
    keywords: ["qué es un broker", "cómo funciona un broker", "elegir broker"],
    readMinutes: 6,
    updatedAt: "2026-01-16",
    explanation: {
      intro:
        "Un broker (corredor o intermediario) es la empresa a la que envías tus órdenes para que se ejecuten en un mercado. No te da dinero ni decide por ti: conecta tu orden con el mercado.",
      paragraphs: [
        "Hay brokers que son solo la plataforma que te da acceso al mercado y otros que además son ellos mismos tu contraparte, es decir, el broker es quien te compra o te vende directamente. Esto cambia algo importante: en el primer caso dependes de la liquidez del mercado; en el segundo, dependes del precio que te dé el broker.",
        "El coste de operar se compone de dos partes. El spread es la diferencia entre el precio al que puedes comprar (ask) y al que puedes vender (bid). Las comisiones son un coste fijo por operación que cobra el broker. Los dos se pagan aunque la operación termine en pérdidas.",
        "En.regulación importa: un broker regulado en una jurisdicción reconocida publica estados financieros y está sujeito a normas de protección al cliente. Un broker no regulado puede operar en condiciones que tú no puedes comprobar. Esta web es educativa y no recomienda ni clasifica ningún broker concreto.",
      ],
      bullets: [
        "El broker ejecuta tus órdenes: no inventa precios, salvo que sea contraparte.",
        "Pagas spread, comisiones y, si usas apalancamiento, una financiación nocturna (swap) por mantener la posición abierta.",
        "Los costes se aplican también cuando la operación pierde dinero.",
        "Comprueba si está regulado y en qué jurisdicción.",
      ],
    },
    technical: {
      term: "Bid, ask y spread",
      body: "El bid es el precio máximo que el mercado paga por tu compra: el precio al que puedes vender. El ask es el precio mínimo que el mercado exige: el precio al que puedes comprar. El spread es la diferencia entre ambos y representa el coste de entrar y salir de una posición de un vistazo.",
      formula: "Spread = Ask − Bid",
      gloss:
        "En pares muy líquidos el spread puede ser de 0,1 pips; en activos poco líquidos puede superar los 50 pips.",
    },
    example: {
      title: "El coste invisible de operar mucho",
      narrative:
        "Operar 100 veces al mes con un spread de 2 pips equivale a pagar 200 pips solo en costes, independientemente de si ganas o pierdes. Si tu objetivo por operación es de 20 pips, el coste se come el 10 % del resultado bruto antes de llegar a tu cuenta.",
      bullets: [
        "100 operaciones × 2 pips = 200 pips de coste.",
        "Beneficio bruto por operación: 20 pips.",
        "Coste equivalente a 10 operaciones completas.",
      ],
    },
    chart: buildScenario("que-es-un-broker", {
      entry: 1.085,
      stopLoss: 1.082,
      takeProfit: 1.094,
      caption: "Ejemplo ficticio: coste y recorrido en un par de divisas",
      description:
        "El recorrido de 90 pips hasta el objetivo se compara con los costes que se pagan al entrar y al salir. En operaciones cortas, el coste pesa mucho más.",
    }),
    tradeExample: {
      instrument: "EUR/USD (ejemplo ficticio)",
      direction: "short",
      entry: 1.085,
      stopLoss: 1.088,
      takeProfit: 1.076,
      outcome: "tp",
      narrative:
        "Venta en 1,0850 con stop en 1,0880 (30 pips de riesgo) y objetivo en 1,0760 (90 pips). Si el spread es de 1,5 pips, el coste real de la operación es de unos 91,5 pips: entrada y salida.",
      capital: 1_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Elegir broker solo por el spread más bajo",
        why: "Un spread muy bajo puede venir acompañado de ejecuciones de peor calidad o de condiciones que no entiendes.",
        fix: "Valora la estabilidad de la ejecución, la regulación y el soporte, no solo el número de un pips.",
      },
      {
        mistake: "Ignorar los costes de financiación nocturna",
        why: "Mantener una posición apalancada abierta varios días puede generar un coste diario acumulativo.",
        fix: "Suma ese coste al cálculo de la operación antes de decidir el tamaño.",
      },
      {
        mistake: "Depositar más dinero del que puedes permitirte perder",
        why: "Un mal mes con todo el capital en la cuenta no se puede recuperar con un mes bueno.",
        fix: "Opera solo con una parte del patrimonio y con cuentas separadas si es posible.",
      },
    ],
    related: ["spread", "comisiones", "que-es-forex", "apalancamiento"],
    glossary: ["broker", "bid", "ask", "spread", "comision", "margen"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué hace un broker?",
        options: [
          "Garantiza tus ganancias",
          "Ejecuta tus órdenes en el mercado a cambio de un coste",
          "Invierte tu dinero por ti",
          "Fija el precio de las divisas",
        ],
        correct: 1,
        explanation:
          "El broker intermedia y cobra un coste por ello: spread, comisión u otros. No garantiza nada.",
      },
      {
        id: "q2",
        question: "¿Qué es el bid?",
        options: [
          "El precio al que puedes comprar",
          "El precio al que puedes vender",
          "El precio de apertura de la sesión",
          "El coste de la comisión",
        ],
        correct: 1,
        explanation: "El bid es la oferta de compra del mercado: el precio al que puedes vender.",
      },
      {
        id: "q3",
        question: "Si el bid es 1,0848 y el ask es 1,0852, ¿cuál es el spread?",
        options: ["4 pips", "0,4 pips", "0,04 pips", "4 puntos porcentuales"],
        correct: 0,
        explanation: "1,0852 − 1,0848 = 0,0004, que equivale a 4 pips.",
      },
      {
        id: "q4",
        question: "¿Por qué conviene comprobar la regulación del broker?",
        options: [
          "Porque los brokers regulados nunca cobran comisión",
          "Porque determina si sus estados financieros y normas de protección al cliente son verificables",
          "Porque solo los regulados ofrecen demo",
          "Porque el regulador fija el spread",
        ],
        correct: 1,
        explanation:
          "La regulación permite verificar la solvencia y las normas de protección aplicables. No elimina el riesgo de mercado.",
      },
    ],
  },

  {
    slug: "que-significa-comprar-y-vender",
    levelId: 1,
    order: 7,
    title: "¿Qué significa comprar y vender?",
    shortTitle: "Comprar y vender",
    category: "fundamentos",
    tags: ["long", "short", "órdenes", "posición"],
    summary:
      "La diferencia entre estar comprado y estar vendido, qué hace una orden de mercado y una orden limitada, y qué significa cerrar una posición.",
    keywords: ["qué es ir en largo", "qué es ir en corto", "tipos de órdenes"],
    readMinutes: 6,
    updatedAt: "2026-01-16",
    explanation: {
      intro:
        "Comprar y vender en un mercado es cerrar dos órdenes opuestas al mismo tiempo. Si compras un activo, estás abriendo una posición larga; si lo vendes, una posición corta.",
      paragraphs: [
        "Estar en largo (long) significa que esperas que el precio suba: ganas si sube y pierdes si baja. Estar en corto (short) es lo contrario: ganas si el precio baja. La condición es que exista un prestamista que te preste el activo para venderlo, algo habitual en Forex, en futuros y en acciones con margen.",
        "Para pasar de largo a corto hay que cerrar primero la posición y abrir la contraria. En una plataforma esto ocurre en dos clics, pero conceptualmente son dos decisiones separadas.",
        "Las órdenes le dicen al mercado cómo y a qué precio quieres operar. Una orden a mercado se ejecuta al mejor precio disponible ahora mismo; una orden limitada solo se ejecuta si el mercado llega a tu precio. Elegir mal el tipo de orden cambia mucho el resultado real de una operación.",
      ],
      bullets: [
        "Largo: ganas si el precio sube, pierdes si baja.",
        "Corto: ganas si el precio baja, pierdes si sube.",
        "Orden a mercado: ejecución inmediata al mejor precio disponible.",
        "Orden limitada: se ejecuta solo a tu precio o mejor.",
      ],
    },
    technical: {
      term: "Posición y órdenes",
      body: "Una posición es la exposición que tienes en un activo. La orden a mercado prioriza la ejecución y acepta el precio disponible. La orden limitada fija un precio y prioriza el precio, con el riesgo de no ejecutarse. El stop loss y el take profit son órdenes limitadas condicionadas: se convierten en órdenes de mercado cuando se cumple el nivel.",
      formula:
        "Largo → beneficio = (Salida − Entrada) × Tamaño | Corto → beneficio = (Entrada − Salida) × Tamaño",
      gloss:
        "El cierre de una posición se hace con la orden contraria: si estabas comprado y vendes, te quedas plano.",
    },
    example: {
      title: "El mismo mercado, dos direcciones",
      narrative:
        "Con el precio en 100, si compras y el activo sube a 110, ganas 10 unidades. Si en cambio vendes ese mismo activo y sube a 110, pierdes 10. La dirección que eliges define por completo la lógica de la operación, no solo el nivel de entrada.",
      bullets: [
        "Largo en 100, salida en 110 → +10.",
        "Corto en 100, salida en 110 → −10.",
        "La entrada es la misma; cambia la hipótesis.",
      ],
    },
    chart: buildPreset("tendencia-bajista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "short",
      entry: 128,
      stopLoss: 131,
      takeProfit: 119,
      outcome: "tp",
      narrative:
        "Venta en 128 con stop en 131 (riesgo de 3 unidades) y objetivo en 119 (recorrido de 9 unidades). Relación 3 : 1. En una operación corta, el stop se coloca por encima de la entrada porque el error sería que el precio suba.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Usar órdenes a mercado cuando el spread es alto",
        why: "En activos poco líquidos, la orden a mercado puede ejecutarse muy lejos del precio que viste.",
        fix: "Usa órdenes limitadas y comprueba el spread antes de entrar.",
      },
      {
        mistake: "Colocar el stop loss en el lado equivocado",
        why: "En una operación corta, un stop por debajo de la entrada se ejecuta de inmediato.",
        fix: "En corto, el stop va por encima; en largo, por debajo.",
      },
      {
        mistake: "Cerrar la posición sin motivo ni plan",
        why: "Las decisiones improvisadas suelen empeorar la relación riesgo/beneficio original.",
        fix: "Define de antemano cuándo abres y cuándo cierras, y respétalo.",
      },
    ],
    related: ["que-es-el-trading", "stop-loss", "take-profit", "que-es-un-broker"],
    glossary: ["long", "short", "orden-a-mercado", "orden-limitada", "stop-loss"],
    quiz: [
      {
        id: "q1",
        question: "Si estás en una posición larga y el precio baja, ¿qué ocurre?",
        options: [
          "Ganas dinero",
          "Pierdes dinero",
          "No pasa nada hasta el cierre",
          "El broker te devuelve la posición",
        ],
        correct: 1,
        explanation: "En largo ganas si el precio sube y pierdes si baja.",
      },
      {
        id: "q2",
        question: "En una posición corta, ¿dónde debe colocarse el stop loss?",
        options: [
          "Por debajo de la entrada",
          "Por encima de la entrada",
          "Exactamente en la entrada",
          "En el máximo histórico del activo",
        ],
        correct: 1,
        explanation:
          "En corto, el error sería que el precio suba, así que el stop se coloca por encima de la entrada.",
      },
      {
        id: "q3",
        question: "¿Cuál es la diferencia entre una orden a mercado y una orden limitada?",
        options: [
          "La orden a mercado espera a tu precio; la limitada se ejecuta al instante",
          "La orden a mercado se ejecuta al mejor precio disponible; la limitada solo si el mercado alcanza tu precio",
          "Ambas son idénticas",
          "La orden limitada solo funciona en acciones",
        ],
        correct: 1,
        explanation:
          "La orden a mercado prioriza la ejecución; la limitada prioriza el precio.",
      },
      {
        id: "q4",
        question: "¿Cómo se pasa de una posición larga a una corta?",
        options: [
          "Con una sola orden",
          "Cerrando la larga y abriendo una corta",
          "Esperando a que el broker lo haga",
          "No se puede cambiar de dirección",
        ],
        correct: 1,
        explanation: "Son dos operaciones: cerrar la posición existente y abrir la contraria.",
      },
    ],
  },

  {
    slug: "precio-volumen-y-liquidez",
    levelId: 1,
    order: 8,
    title: "Precio, volumen y liquidez",
    shortTitle: "Precio, volumen y liquidez",
    category: "mercados",
    tags: ["precio", "volumen", "liquidez"],
    summary:
      "Qué son estos tres conceptos, cómo se relacionan entre sí y por qué son la base para entender cualquier gráfico de trading.",
    keywords: ["qué es el volumen", "qué es la liquidez", "precio y volumen"],
    readMinutes: 6,
    updatedAt: "2026-01-16",
    explanation: {
      intro:
        "El precio es lo que pagas, el volumen es cuánto se negocia y la liquidez es lo fácil que es comprar o vender. Los tres juntos explican casi todo lo que ocurre en un gráfico.",
      paragraphs: [
        "El volumen es la cantidad de contratos, acciones o unidades negociadas en un periodo. Sirve para confirmar movimientos: un precio que sube con mucho volumen tiene más respaldo detrás que un precio que sube con poco. En Forex, cada broker muestra el volumen de sus propios clientes, porque no existe un volumen centralizado del mercado de divisas.",
        "La liquidez describe con qué facilidad se puede convertir un activo en dinero sin mover el precio. Un activo muy líquido se compra y se vende de inmediato con una diferencia mínima entre precio de compra y de venta. Un activo ilíquido, en cambio, puede moverse mucho con una orden pequeña.",
        "El spread es la consecuencia práctica de la liquidez: cuanto más líquido es un mercado, menor suele ser el spread. Esa relación explica por qué los operadores suelen elegir activos líquidos y por qué las decisiones en mercados pequeños son mucho más caras.",
      ],
      bullets: [
        "Precio: el valor al que se pacta cada operación.",
        "Volumen: cuánto se negocia, no cuánto vale.",
        "Liquidez: facilidad para entrar y salir sin mover el precio.",
        "Spread bajo es un síntoma de liquidez alta.",
      ],
    },
    technical: {
      term: "Volumen y liquidez",
      body: "El volumen es una magnitud de cantidad negociada en un intervalo. La liquidez combina profundidad (cuánto volumen hay disponible cerca del precio) y amplitud (cuánto puede moverse el precio con una orden limitada). Un libro de órdenes con muchas órdenes grandes cerca del precio es un mercado profundo.",
      formula:
        "Amplitud ≈ (Volumen negociado / Volumen disponible cerca del precio) × 100 %",
      gloss:
        "Un mercado puede tener mucho volumen y aun así ser sensible si ese volumen está muy apartado del precio actual.",
    },
    example: {
      title: "Dos activos con el mismo gráfico",
      narrative:
        "Dos activos pueden mostrar una curva idéntica y comportarse de forma completamente distinta. Si uno negocia 50 millones de unidades al día y el otro 50.000, en el segundo una orden de 5.000 unidades ya mueve el precio. El gráfico no lo revela: los datos de volumen y liquidez sí.",
      bullets: [
        "Activo A: volumen alto, spread estrecho, salida fácil.",
        "Activo B: volumen bajo, spread amplio, salida costosa.",
        "Mismo aspecto gráfico, riesgo de ejecución muy distinto.",
      ],
    },
    chart: buildPreset("volatilidad"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 97,
      takeProfit: 109,
      outcome: "tp",
      narrative:
        "Entrada en 100 con stop en 97 y objetivo en 109: 3 unidades de riesgo y 9 de recorrido. Si el volumen se reduce justo al entrar, la ejecución puede empeorar. Por eso muchos operadores evitan entrar en las velas más largas, donde el volumen también es mayor.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Confundir volumen con valor",
        why: "El volumen mide unidades negociadas, no dinero. 100 acciones a 2 euros y 100 acciones a 200 euros son el mismo volumen.",
        fix: "Mira las unidades y, si lo necesitas, el volumen negociado en euros.",
      },
      {
        mistake: "Esperar que el volumen de Forex sea el volumen real del mercado",
        why: "Cada plataforma muestra el volumen de sus propios clientes, no el del mercado global.",
        fix: "Úsalo como referencia relativa dentro de tu propia plataforma, no como cifra absoluta.",
      },
      {
        mistake: "Ignorar la liquidez al elegir dónde colocar el stop",
        why: "En mercados poco líquidos, el precio puede atravesar tu stop sin que haya contraparte al nivel.",
        fix: "Coloca el stop donde tenga sentido la estructura del gráfico, no en un número redondo.",
      },
    ],
    related: ["que-es-un-mercado-financiero", "soporte", "volumen", "que-es-un-broker"],
    glossary: ["volumen", "liquidez", "spread", "profundidad"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué mide el volumen?",
        options: [
          "El precio del activo",
          "La cantidad de unidades negociadas",
          "La cantidad de dinero que tienes",
          "La cantidad de indicadores en el gráfico",
        ],
        correct: 1,
        explanation: "El volumen es una cantidad, no un precio.",
      },
      {
        id: "q2",
        question: "Un spread estrecho indica, normalmente:",
        options: [
          "Que el mercado es poco líquido",
          "Que el mercado es líquido",
          "Que el activo está sobrevaluado",
          "Que el broker no cobra comisión",
        ],
        correct: 1,
        explanation:
          "La diferencia entre precio de compra y de venta se reduce cuanto más fácil se puede negociar.",
      },
      {
        id: "q3",
        question: "En Forex, ¿por qué el volumen que ves en tu plataforma no es el volumen total del mercado?",
        options: [
          "Porque los bancos ocultan el volumen real",
          "Porque cada broker muestra el volumen de sus propios clientes",
          "Porque el volumen solo existe en cripto",
          "Porque el volumen cambia cada segundo",
        ],
        correct: 1,
        explanation:
          "El mercado de divisas no está centralizado, así que cada plataforma reporta su propia actividad.",
      },
      {
        id: "q4",
        question: "¿Qué caracteriza a un activo poco líquido?",
        options: [
          "Que se compra y vende al mismo precio con facilidad",
          "Que las órdenes pequeñas pueden mover mucho el precio",
          "Que tiene un volumen de negociación alto y constante",
          "Que su precio nunca cambia",
        ],
        correct: 1,
        explanation:
          "Con poca profundidad, una orden relativamente pequeña puede mover el precio y encarecer la salida.",
      },
    ],
  },
];