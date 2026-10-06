import type { Lesson } from "~/types";
import { buildPreset } from "../charts/presets";

export const level2Lessons: Lesson[] = [
  {
    slug: "velas-japonesas",
    levelId: 2,
    order: 1,
    title: "Velas japonesas: anatomía de una vela",
    shortTitle: "Velas japonesas",
    category: "graficos",
    tags: ["velas japonesas", "gráficos", "cuerpo y mecha"],
    summary:
      "Qué representa cada parte de una vela japonesa y cómo se colorea una vela alcista o bajista en cualquier gráfico.",
    keywords: [
      "anatomía de una vela",
      "qué es una vela japonesa",
      "cuerpo y mecha de la vela",
      "vela alcista y bajista",
    ],
    readMinutes: 6,
    updatedAt: "2026-01-18",
    explanation: {
      intro:
        "Una vela japonesa resume cuatro precios de un periodo: la apertura, la máxima, la mínima y el cierre. De esos cuatro números salen el cuerpo y las mechas, y de ahí se colorea en alcista o bajista.",
      paragraphs: [
        "Cada vela cuenta lo que pasó durante un intervalo concreto, desde un minuto hasta un día entero. La apertura es el primer precio del periodo, el cierre el último, y las mechas marcan los extremos que el precio llegó a tocar por arriba y por abajo. El cuerpo es la distancia entre apertura y cierre: ahí se ve quién dominó al final.",
        "Si el cierre queda por encima de la apertura, la vela se pinta en color alcista; si queda por debajo, en color bajista. Ese color no dice nada sobre lo que hará el precio después: solo describe cómo terminó ese periodo concreto.",
        "Las mechas cuentan la historia del rechazo. Una mecha inferior larga significa que el precio llegó a bajar bastante y que hubo quien lo devolvió arriba antes del cierre. No explica por qué ocurrió ni garantiza que el movimiento se repita, pero señala dónde se agotó la presión.",
        "La misma vela puede significar cosas muy distintas según dónde aparezca. Un martillo al final de una caída larga informa de una cosa; el mismo martillo en mitad de un rango, casi nada. Por eso la lectura de la vela siempre va acompañada de la tendencia previa y de la zona en la que se formó.",
      ],
      bullets: [
        "Apertura: el precio con el que arranca el periodo.",
        "Máximo y mínimo: los extremos tocados dentro del periodo.",
        "Cierre: el precio final; su posición respecto a la apertura da el color.",
        "Mecha: el recorrido que el precio hizo y deshizo antes de cerrar.",
      ],
    },
    technical: {
      term: "OHLC: apertura, máximo, mínimo y cierre",
      body: "Las cuatro cifras de las que vive una vela son la apertura, el máximo, el mínimo y el cierre del periodo. El cuerpo mide la diferencia entre apertura y cierre. La mecha superior es la distancia entre el mayor de apertura y cierre y el máximo; la mecha inferior es la distancia entre el mínimo y el menor de apertura y cierre. Todas las figuras de este nivel se leen sobre esas cuatro cifras.",
      formula: "Cuerpo = |Cierre − Apertura|",
      gloss:
        "En una vela con cuerpo mínimo y mecha larga, apertura y cierre casi coinciden: el precio probó ambos lados y volvió al punto de partida.",
    },
    example: {
      title: "Dos velas, dos historias",
      narrative:
        "Imagina un activo ficticio que en una hora abre en 100, sube a 104, baja a 98 y cierra en 103. El cuerpo mide 3 unidades, de 100 a 103; la mecha superior, 1; la inferior, 2. Es una vela alcista con presión compradora al final. Si en cambio abriera en 103 y cerrara en 99, el cuerpo sería bajista de 4 unidades aunque el máximo del periodo hubiera sido 104: lo decisivo es dónde cierra, no dónde estuvo.",
      bullets: [
        "Apertura 100, máximo 104, mínimo 98, cierre 103: vela alcista.",
        "Cuerpo de 3, mecha superior de 1 y mecha inferior de 2.",
        "Cierre por debajo de la apertura: vela bajista, aunque el periodo subiera.",
      ],
    },
    chart: buildPreset("mechazo-rechazo"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 97.5,
      stopLoss: 95.4,
      takeProfit: 103,
      outcome: "tp",
      narrative:
        "Entrada en 97,50 después del rechazo con mecha larga, con stop en 95,40 por debajo del mínimo barrido y objetivo en 103,00. El riesgo es de 2,1 unidades y el recorrido buscado de 5,5: relación 2,6 : 1. La vela que justifica la entrada no garantiza nada por sí sola; el stop existe justo por si el rechazo no continúa.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Creer que una vela de color alcista predice una subida",
        why: "El color solo dice que el cierre quedó por encima de la apertura de ese periodo; no informa del siguiente periodo.",
        fix: "Lee la vela con contexto: tendencia previa, zona y temporalidad antes de sacar conclusiones.",
      },
      {
        mistake: "Mirar solo el cuerpo e ignorar las mechas",
        why: "Las mechas muestran los extremos que se rechazaron, y ahí suele estar la información que el cuerpo oculta.",
        fix: "Anota siempre máximo, mínimo, apertura y cierre de las velas clave que uses en tu análisis.",
      },
      {
        mistake: "Empezar a leer velas en marcos de un minuto",
        why: "En temporalidades muy pequeñas el ruido domina y el mismo dibujo aparece y desaparece en cuestión de minutos.",
        fix: "Acostúmbrate primero con marcos de una hora o diarios, donde cada vela tiene más significado.",
      },
    ],
    related: ["precio-volumen-y-liquidez", "que-es-el-trading", "temporalidades", "patrones-de-vela"],
    glossary: ["precio", "temporalidad", "volatilidad", "tendencia"],
    quiz: [
      {
        id: "q1",
        question: "El cuerpo de una vela representa la distancia entre:",
        options: [
          "El máximo y el mínimo del periodo",
          "La apertura y el cierre del periodo",
          "El volumen y el precio de cierre",
          "La primera y la última vela del día",
        ],
        correct: 1,
        explanation:
          "El cuerpo es la diferencia entre la apertura y el cierre; las mechas llegan hasta los extremos del periodo.",
      },
      {
        id: "q2",
        question: "Si una vela cierra por encima de su apertura, se colorea:",
        options: [
          "En color alcista, sin importar el máximo que tocó",
          "En color bajista, sin importar el mínimo que tocó",
          "En color alcista solo si el volumen es alto",
          "Del color que prefiera el usuario en la plataforma",
        ],
        correct: 0,
        explanation:
          "El color depende de la relación entre cierre y apertura; el máximo del periodo no cambia esa comparación.",
      },
      {
        id: "q3",
        question: "Una mecha inferior larga indica que:",
        options: [
          "El precio bajó y fue devuelto arriba antes del cierre",
          "El precio no llegó a bajar en ningún momento",
          "La vela es necesariamente una señal de reversa",
          "El mercado estuvo cerrado durante todo el periodo",
        ],
        correct: 0,
        explanation:
          "La mecha inferior registra el recorrido bajista que se deshizo antes de cerrar; es un registro, no una garantía.",
      },
      {
        id: "q4",
        question: "¿Qué NO se puede saber mirando una vela aislada?",
        options: [
          "El precio de apertura del periodo",
          "Lo que hará el precio en el siguiente periodo",
          "El máximo y el mínimo del periodo",
          "Si el cierre quedó por encima de la apertura",
        ],
        correct: 1,
        explanation:
          "Una vela describe un periodo ya terminado. Nada en ella obliga al precio a comportarse de cierta manera después.",
      },
    ],
  },
  {
    slug: "temporalidades",
    levelId: 2,
    order: 2,
    title: "Temporalidades: cómo cambia la lectura según el marco",
    shortTitle: "Temporalidades",
    category: "graficos",
    tags: ["temporalidades", "marcos de tiempo", "gráficos"],
    summary:
      "Qué es una temporalidad, para qué sirve cada marco de tiempo y por qué una vela aislada no permite sacar conclusiones.",
    keywords: [
      "qué es una temporalidad",
      "diferencia entre M5, H1 y D1",
      "temporalidades de trading",
      "cómo elegir el marco de tiempo",
    ],
    readMinutes: 6,
    updatedAt: "2026-01-19",
    explanation: {
      intro:
        "Una temporalidad es el periodo de tiempo que representa cada vela del gráfico. Una vela de H1 resume una hora de negociación; una de D1, un día entero. El mismo precio se dibuja de forma distinta según el marco que elijas.",
      paragraphs: [
        "Cada vela de un marco pequeño es material de construcción de las velas del marco grande: sesenta velas de cinco minutos componen una sola vela de una hora. Por eso el gráfico diario se ve ordenado y el de cinco minutos se ve agitado, aunque estén mostrando exactamente el mismo mercado.",
        "Los marcos sirven para cosas distintas. El de cinco minutos muestra el detalle de una sesión y resulta útil para quien opera muy corto; el de una hora da la estructura intermedia de la semana; el de diario enseña el panorama general, donde las zonas y las tendencias pesan mucho más.",
        "El error clásico es concluir de una sola vela pequeña. Una vela bajista de cinco minutos no cambia una tendencia diaria alcista: dentro de una hora puede ser simplemente el ruido normal de un retroceso que después continúa.",
        "Cambia el marco y cambia la historia: la misma tarde puede ser una tendencia nítida en M5 y un movimiento plano dentro de D1. Las dos lecturas son ciertas; lo que no se puede hacer es mezclarlas sin declarar en qué temporalidad se está mirando.",
      ],
      bullets: [
        "M5: detalle de la sesión; mucho ruido y decisiones muy frecuentes.",
        "H1: estructura intermedia; sirve para situarse dentro de la semana.",
        "D1: panorama general; las zonas importantes se ven con claridad.",
        "Ninguna vela aislada, por sí sola, cambia una tendencia.",
      ],
    },
    technical: {
      term: "Temporalidad y agrupación de velas",
      body: "La temporalidad es el intervalo que resume cada vela. Todo periodo inferior se agrupa dentro del superior: varios minutos forman una hora, varias horas forman un día. Cualquier conclusión sobre el precio debe declarar la temporalidad en la que se hizo, porque una afirmación válida en un marco puede ser falsa en otro.",
      formula: "1 vela D1 = suma de las velas de la sesión",
      gloss:
        "Si en M5 el precio cae con fuerza y en D1 la vela cierra plana, no hay contradicción: el marco pequeño solo detalló el interior de la vela grande.",
    },
    example: {
      title: "La misma tarde en dos marcos",
      narrative:
        "Un activo ficticio abre la sesión en 100, sube a 104 durante el día, retrocede a 101 y cierra en 103. En H1 la secuencia muestra una estructura intermedia clara de impulsos y pausas; en D1 es una sola vela alcista con mecha. Quien opera en cinco minutos habría visto decenas de cruces de precio; quien mira el diario ha visto una vela. Las dos descripciones son correctas y han ocurrido sobre el mismo gráfico.",
      bullets: [
        "El marco grande resume; el marco pequeño detalla.",
        "Lo que en M5 parece una tendencia, en D1 puede ser una sola vela.",
        "Antes de opinar, declara en qué temporalidad estás mirando.",
      ],
    },
    chart: buildPreset("escala-forex"),
    tradeExample: {
      instrument: "EUR/USD (ejemplo ficticio)",
      direction: "long",
      entry: 1.086,
      stopLoss: 1.0835,
      takeProfit: 1.091,
      outcome: "tp",
      narrative:
        "Compra en 1,0860 con stop en 1,0835 (25 pips de riesgo) y objetivo en 1,0910 (50 pips). La idea se decidió mirando la temporalidad de una hora, pero el stop se calculó con la estructura diaria para que el ruido de los marcos pequeños no lo alcance antes de tiempo. Relación riesgo/beneficio: 2 : 1.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Concluir de una vela suelta en un marco pequeño",
        why: "En marcos de minutos el ruido domina: la misma vela puede anularse por completo en la siguiente.",
        fix: "Declara la temporalidad y busca siempre la confirmación en un marco superior.",
      },
      {
        mistake: "Cambiar de marco hasta encontrar el que confirma lo que quieres",
        why: "Elegir el marco que da la razón es sesgo, no análisis, y hace que cualquier idea parezca válida.",
        fix: "Define antes de empezar qué marco usas para decidir y cuál solo para situarte en el contexto.",
      },
      {
        mistake: "Creer que el marco diario es más seguro por ser más lento",
        why: "Un marco grande tarda más en reaccionar, pero el riesgo depende del stop y del tamaño de posición, no del marco.",
        fix: "Cuida el tamaño de posición y el stop con la misma seriedad con la que eliges la temporalidad.",
      },
    ],
    related: ["velas-japonesas", "tendencias-y-estructura", "que-es-el-trading"],
    glossary: ["temporalidad", "sesion", "tendencia", "volatilidad"],
    quiz: [
      {
        id: "q1",
        question: "Una vela de temporalidad H1 resume:",
        options: [
          "Una hora de negociación",
          "Un día completo de negociación",
          "Cinco minutos de negociación",
          "Una semana de negociación",
        ],
        correct: 0,
        explanation: "H1 significa una hora: cada vela de ese marco resume ese intervalo de tiempo.",
      },
      {
        id: "q2",
        question: "¿Cuántas velas de cinco minutos forman una vela de una hora?",
        options: ["5", "12", "60", "100"],
        correct: 2,
        explanation:
          "Una hora tiene sesenta minutos, así que sesenta velas de M5 se agrupan dentro de una vela de H1.",
      },
      {
        id: "q3",
        question: "Una vela bajista en M5 dentro de una tendencia diaria alcista significa que:",
        options: [
          "La tendencia diaria ha terminado",
          "Probablemente es el ruido de un retroceso dentro de la estructura mayor",
          "Hay que abrir una posición corta de inmediato",
          "Nada: las velas pequeñas no significan nada",
        ],
        correct: 1,
        explanation:
          "El marco pequeño detalla el interior del marco grande; una vela corta no invalida una estructura diaria.",
      },
      {
        id: "q4",
        question: "El marco diario (D1) sirve principalmente para:",
        options: [
          "Ejecutar muchas operaciones al día",
          "Ver el panorama general y las zonas importantes",
          "Evitar el coste del spread",
          "Conocer el precio de apertura de la sesión siguiente",
        ],
        correct: 1,
        explanation:
          "El diario muestra la estructura amplia, donde las zonas y los extremos tienen más peso que el detalle intradía.",
      },
    ],
  },
  {
    slug: "tendencias-y-estructura",
    levelId: 2,
    order: 3,
    title: "Tendencias y estructura del precio",
    shortTitle: "Tendencias y estructura",
    category: "graficos",
    tags: ["tendencia", "estructura", "máximos y mínimos"],
    summary:
      "Cómo identificar una tendencia alcista, bajista o lateral por la secuencia de máximos y mínimos, y por qué no conviene operar contra la estructura.",
    keywords: [
      "qué es una tendencia",
      "máximos y mínimos crecientes",
      "tendencia alcista y bajista",
      "estructura del precio",
    ],
    readMinutes: 7,
    updatedAt: "2026-01-20",
    explanation: {
      intro:
        "Una tendencia describe la dirección dominante del precio. En una tendencia alcista los máximos y los mínimos suben; en una bajista bajan; en una lateral el precio oscila entre niveles parecidos sin decidirse.",
      paragraphs: [
        "La estructura se lee comparando los últimos extremos. Si cada retroceso se queda por encima del mínimo anterior y cada rebote supera el máximo anterior, la estructura es alcista. En la tendencia bajista ocurre al revés: los rebotes no alcanzan el máximo previo y las caídas sí superan el mínimo previo.",
        "La tendencia lateral, también llamada rango, no tiene dirección: el precio va y viene entre dos zonas. Operarla exige una lógica distinta a la de una tendencia, porque el impulso que la atraviesa simplemente no existe.",
        "Operar contra la estructura es pelearse con la fuerza que domina el mercado. No es imposible, pero exige señales mucho más exigentes y suele ser el error de quien cree que el precio ya subió o bajó demasiado y merece corregir.",
        "Una estructura deja de estar intacta cuando se rompe la secuencia: un mínimo por debajo del anterior dentro de una tendencia alcista avisa de que el impulso perdió fuerza. Eso no obliga a que el precio caiga; obliga a revisar la hipótesis con la que entraste.",
      ],
      bullets: [
        "Alcista: máximos y mínimos crecientes.",
        "Bajista: máximos y mínimos decrecientes.",
        "Lateral: el precio oscila entre dos zonas parecidas.",
        "El cambio de estructura se avisa con la rotura de un extremo, no con una vela suelta.",
      ],
    },
    technical: {
      term: "Estructura y cambio de carácter",
      body: "La estructura es la secuencia de extremos que deja el precio. Un impulso es el tramo que extiende la secuencia; una corrección es el tramo que la pausa sin romperla. El carácter del mercado es alcista mientras los mínimos crecientes se mantengan y bajista mientras los máximos decrecientes se mantengan. La ruptura de un extremo válido es el aviso de que ese carácter puede estar cambiando.",
      formula: "Alcista: Mínimo actual > Mínimo anterior y Máximo actual > Máximo anterior",
      gloss:
        "Cuando un retroceso rompe el último mínimo pero el siguiente rebote no supera el máximo, la estructura ya no está intacta y la operación pierde su premisa.",
    },
    example: {
      title: "Leer la secuencia antes que el color",
      narrative:
        "Un activo ficticio pasa de 100 a 106, retrocede a 103, vuelve a 109 y retrocede a 105. Cada mínimo es más alto que el anterior (100, 103, 105) y cada máximo también (106, 109): estructura alcista. Si el siguiente retroceso llegara hasta 102, la cadena de mínimos crecientes se rompería y tocaría revisar si la tendencia sigue viva o el mercado ha empezado a cambiar de carácter.",
      bullets: [
        "Mínimos: 100, 103 y 105, crecientes.",
        "Máximos: 106 y 109, también crecientes.",
        "Un cierre por debajo de 105 pondría la estructura en duda.",
      ],
    },
    chart: buildPreset("tendencia-alcista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 104.5,
      stopLoss: 102,
      takeProfit: 109.5,
      outcome: "tp",
      narrative:
        "Compra en 104,50 siguiendo la estructura alcista, con stop en 102,00 por debajo del último mínimo válido y objetivo en 109,50. Se arriesgan 2,5 unidades para buscar 5: relación 2 : 1. Si el precio cerrara por debajo de 102,00, la secuencia de mínimos crecientes se habría roto y la razón de la operación desaparecería.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Llamar tendencia a un par de velas de color alcista",
        why: "Dos o tres velas no forman una secuencia: la tendencia se define por extremos, no por el color de unas pocas velas.",
        fix: "Marca los dos últimos máximos y mínimos válidos antes de emitir cualquier juicio.",
      },
      {
        mistake: "Operar contra la estructura porque el precio está muy subido",
        why: "Estar alto o bajo es relativo; la estructura sigue intacta mientras la secuencia de extremos se mantenga.",
        fix: "Si quieres operar la corrección, espera a que la estructura se rompa de verdad y no antes.",
      },
      {
        mistake: "Ignorar la tendencia del marco superior",
        why: "Una estructura alcista en M5 puede ser apenas una corrección dentro de una bajista de D1.",
        fix: "Sitúa siempre tu marco de decisión dentro del marco mayor antes de planificar la operación.",
      },
    ],
    related: [
      "velas-japonesas",
      "soportes-y-resistencias",
      "lineas-de-tendencia",
      "impulso-y-correccion",
    ],
    glossary: ["tendencia", "soporte", "resistencia", "temporalidad"],
    quiz: [
      {
        id: "q1",
        question: "En una tendencia alcista se cumple que:",
        options: [
          "Los máximos y los mínimos son crecientes",
          "Los máximos y los mínimos son decrecientes",
          "El precio se queda siempre en el mismo nivel",
          "Los mínimos suben y los máximos bajan",
        ],
        correct: 0,
        explanation: "Esa es precisamente la definición de estructura alcista: extremos cada vez más altos.",
      },
      {
        id: "q2",
        question: "¿Qué indica que una estructura alcista pierde fuerza?",
        options: [
          "Un nuevo máximo más alto que el anterior",
          "Un retroceso que rompe el mínimo anterior",
          "Tres velas de color alcista seguidas",
          "Que el volumen aumente durante la subida",
        ],
        correct: 1,
        explanation:
          "La rotura del último mínimo válido rompe la secuencia de mínimos crecientes, que es lo que sostenía la lectura.",
      },
      {
        id: "q3",
        question: "Un mercado lateral se caracteriza por:",
        options: [
          "Máximos y mínimos crecientes",
          "Oscilar entre dos zonas sin dirección clara",
          "Caer sin pausas desde el inicio de la sesión",
          "Subir siempre con volumen creciente",
        ],
        correct: 1,
        explanation: "El rango es ausencia de dirección: el precio va y viene entre dos zonas que no se rompen.",
      },
      {
        id: "q4",
        question: "¿Por qué suele ser un error operar contra la estructura?",
        options: [
          "Porque siempre es mejor esperar a operar",
          "Porque implica pelearse con la fuerza dominante y exige señales mucho más exigentes",
          "Porque los brokers no permiten operar en contra",
          "Porque el spread se duplica en ese caso",
        ],
        correct: 1,
        explanation:
          "La estructura marca la dirección dominante; anticipar el giro sin confirmación es apostar contra la corriente.",
      },
    ],
  },
  {
    slug: "soportes-y-resistencias",
    levelId: 2,
    order: 4,
    title: "Soportes y resistencias: cómo se dibujan las zonas",
    shortTitle: "Soportes y resistencias",
    category: "graficos",
    tags: ["soportes", "resistencias", "zonas", "estructura"],
    summary:
      "Cómo se trazan las zonas de soporte y resistencia, qué hace que una zona sea fuerte y por qué se acaban rompiendo.",
    keywords: [
      "qué es un soporte",
      "qué es una resistencia",
      "cómo dibujar soportes y resistencias",
      "zonas de precio",
    ],
    readMinutes: 7,
    updatedAt: "2026-01-21",
    explanation: {
      intro:
        "Un soporte es una zona donde históricamente aparecieron compras con fuerza suficiente para detener una caída. Una resistencia es la zona donde aparecieron ventas que frenaron una subida. Las dos son el mismo concepto mirado desde lados opuestos.",
      paragraphs: [
        "No son líneas exactas sino bandas: el precio no respeta el decimal. Se dibujan uniendo varios rechazos parecidos en precio y, cuantos más toques acumule la zona, más creíble resulta. Un solo contacto no prueba nada; tres o más sí empiezan a contar una historia.",
        "Una zona fuerte reúne tres cosas: varios rechazos en niveles parecidos, volumen alto durante el choque y persistencia en el tiempo, es decir, el precio ha vuelto muchas veces sin poder superarla. Cuanto más participantes quedaron atrapados en la zona, más pesa su recuerdo dentro del precio.",
        "Cuando una zona se rompe, cambia de rol: la resistencia que cede suele convertirse en soporte en el siguiente intento, y el soporte roto, en resistencia. Por eso conviene pensar en zonas con nombre propio, no en líneas con un precio milimétrico.",
        "Las zonas se rompen tarde o temprano, sin excepción. Su valor no está en durar para siempre, sino en definir dónde tiene sentido revisar tu idea, dónde colocar el stop y dónde esperar una reacción del precio.",
      ],
      bullets: [
        "Soporte: zona que frenó caídas previas; resistencia: zona que frenó subidas.",
        "Se dibujan con varios toques en niveles parecidos, nunca con uno solo.",
        "Cuanto más toques y más volumen, más fuerte es la zona.",
        "Rompida una zona, suele cambiar de rol: de resistencia a soporte y al revés.",
      ],
    },
    technical: {
      term: "Zona de soporte y resistencia",
      body: "Una zona se define como una banda alrededor de los precios en los que se produjeron rechazos repetidos. La anchura de la banda depende de la volatilidad del activo: cuanto más se mueve el precio por minuto, más tolerancia necesita la zona. El concepto de polaridad dice que una zona rota cambia de lado, porque las órdenes que quedaron atrapadas del otro lado se liberan en el siguiente testeo.",
      formula: "Zona ≈ precios de los rechazos ± tolerancia por volatilidad",
      gloss:
        "La tolerancia no es caprichosa: se calcula con la amplitud habitual de las velas del activo que estás mirando.",
    },
    example: {
      title: "Dos toques, después la prueba",
      narrative:
        "Un activo ficticio sube a 110 y retrocede; vuelve a 110 y otra vez retrocede. Esos dos rechazos dibujan una resistencia en torno a 110. Baja hasta 100 y rellena dos veces allí: soporte en 100. En el tercer intento el precio cierra por encima de 110 con volumen alto. La zona cede y, en el siguiente retroceso, el precio la toca por arriba y continúa subiendo: la antigua resistencia está actuando como soporte.",
      bullets: [
        "Dos rechazos en 110: resistencia válida.",
        "Dos rechazos en 100: soporte válido.",
        "Tras la ruptura de 110, la zona cambia de rol.",
      ],
    },
    chart: buildPreset("soporte-resistencia"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100.8,
      stopLoss: 98.5,
      takeProfit: 109.5,
      outcome: "tp",
      narrative:
        "Compra en 100,80 cerca del soporte de 100, con stop en 98,50 por debajo de la zona y objetivo en 109,50, justo por debajo de la resistencia de 110. El riesgo es de 2,3 unidades y el recorrido de 8,7: relación 3,8 : 1. Fijar el objetivo antes de la resistencia evita depender de que la zona se rompa.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Dibujar la zona con un solo toque",
        why: "Un contacto aislado no prueba nada: puede ser ruido de unos minutos que no volverá a repetirse.",
        fix: "Busca al menos dos rechazos en la misma zona antes de darla por válida.",
      },
      {
        mistake: "Ajustar la línea al decimal exacto",
        why: "El mercado no opera con líneas perfectas; un ajuste milimétrico hace que pierdas la zona por un céntimo.",
        fix: "Define la zona como una banda con tolerancia y márcala como tal en el gráfico.",
      },
      {
        mistake: "Creer que una zona resistirá para siempre",
        why: "Toda zona se rompe tarde o temprano, y aferrarse a ella produce pérdidas evitables.",
        fix: "Si el precio cierra con claridad del otro lado, trata la zona como rota y revisa tu idea en lugar de defenderla.",
      },
    ],
    related: ["tendencias-y-estructura", "rupturas-y-rupturas-falsas", "precio-volumen-y-liquidez"],
    glossary: ["soporte", "resistencia", "soporte-resistencia", "ruptura"],
    quiz: [
      {
        id: "q1",
        question: "Un soporte es:",
        options: [
          "Una zona donde frenaron caídas previas",
          "Un indicador que mide el volumen negociado",
          "El precio máximo del activo en el año",
          "La comisión que cobra el broker",
        ],
        correct: 0,
        explanation: "El soporte es la zona en la que las compras detuvieron caídas anteriores.",
      },
      {
        id: "q2",
        question: "¿Qué hace más creíble una zona de precio?",
        options: [
          "Tocarla una única vez",
          "Varios rechazos con volumen en niveles parecidos",
          "Que el precio la toque con un decimal exacto",
          "Que tenga un número redondo",
        ],
        correct: 1,
        explanation:
          "La repetición y el volumen son las señales de que muchos participantes reconocen esa zona.",
      },
      {
        id: "q3",
        question: "Cuando una resistencia se rompe con claridad, suele:",
        options: [
          "Desaparecer por completo del gráfico",
          "Convertirse en soporte en el siguiente intento",
          "Aumentar automáticamente el spread",
          "Duplicar el volumen negociado",
        ],
        correct: 1,
        explanation:
          "Es el efecto de polaridad: la zona rota cambia de lado porque las órdenes atrapadas se liberan.",
      },
      {
        id: "q4",
        question: "¿Por qué las zonas se dibujan como bandas y no como líneas exactas?",
        options: [
          "Porque los gráficos no permiten líneas rectas",
          "Porque el precio no respeta el decimal y la volatilidad obliga a dar tolerancia",
          "Para que el gráfico se vea mejor",
          "Porque así se acierta siempre",
        ],
        correct: 1,
        explanation:
          "La tolerancia reconoce que los rechazos ocurren en una franja de precios, no en un punto milimétrico.",
      },
    ],
  },
  {
    slug: "rupturas-y-rupturas-falsas",
    levelId: 2,
    order: 5,
    title: "Rupturas y rupturas falsas",
    shortTitle: "Rupturas y falsas rupturas",
    category: "graficos",
    tags: ["rupturas", "falsas rupturas", "barrido de liquidez"],
    summary:
      "Qué distingue una ruptura válida de una falsa, qué es el barrido de liquidez y con qué se confirma la salida de una zona.",
    keywords: [
      "qué es una ruptura",
      "qué es una falsa ruptura",
      "barrido de liquidez",
      "cómo confirmar una ruptura",
    ],
    readMinutes: 7,
    updatedAt: "2026-01-22",
    explanation: {
      intro:
        "Una ruptura es el momento en que el precio abandona una zona que venía conteniéndolo. La dificultad está en distinguir una salida real de una falsa ruptura, que solo barre los niveles para devolverse enseguida.",
      paragraphs: [
        "La falsa ruptura ocurre cuando el precio supera el nivel por unos instantes y cierra otra vez dentro de la zona. Quienes entraron confiando en la salida quedan atrapados, y sus órdenes de protección alimentan el movimiento contrario que devuelve el precio al interior.",
        "El barrido de liquidez es el nombre que se da a ese episodio: justo detrás del nivel había órdenes agrupadas, los stops de quienes apostaban por la ruptura y las órdenes de quienes esperaban el nivel. El precio las ejecuta de un golpe y gira. Es la huella más clara de que la salida no fue genuina.",
        "Para confirmar una ruptura se observa, como mínimo, el cierre fuera de la zona, un volumen por encima de lo habitual y, con frecuencia, un retroceso que vuelve a testear el nivel desde el otro lado sin volver a entrar en la zona.",
        "Ninguna confirmación garantiza nada: reduce la probabilidad de caer en la trampa, no la elimina. Por eso la falsa ruptura también se puede estudiar a favor, esperando a que el precio vuelva dentro y muestre que el nivel sigue vigente.",
      ],
      bullets: [
        "Ruptura válida: cierre fuera de la zona, con volumen alto.",
        "Falsa ruptura: el precio toca fuera y vuelve a cerrar dentro.",
        "Barrido de liquidez: ejecución de órdenes agrupadas tras un nivel.",
        "El retroceso sobre el nivel roto mejora la relación riesgo/beneficio.",
      ],
    },
    technical: {
      term: "Ruptura, retest y barrido",
      body: "Una ruptura se confirma por el cierre, no por el extremo que la vela llegó a tocar. El retest es el retroceso que vuelve al nivel roto y comprueba si ahora actúa desde el otro lado. El barrido es la variante fallida: el precio perfora, no consolida fuera y regresa. La calidad de la ruptura se mide con cuatro variables: cierre, volumen, tiempo pasado fuera y comportamiento del retest.",
      formula: "Confirmación = Cierre fuera + Volumen alto + Retroceso que respeta la zona",
      gloss:
        "El retest también sirve para colocar el stop en un lugar lógico: detrás del nivel que acaba de cambiar de rol.",
    },
    example: {
      title: "Un nivel, dos desenlaces",
      narrative:
        "La resistencia está en 106,50. En el primer intento el precio la supera durante unas velas, cierra al día siguiente en 105,80 y cae hasta 99: falsa ruptura. En el segundo, cierra en 108,20 con volumen alto, retrocede a 106,30 sin volver al interior de la zona y continúa: ruptura confirmada. Lo que separa los dos intentos no es el extremo que tocaron, sino dónde cerraron y con qué volumen.",
      bullets: [
        "Primer intento: perfora 106,50 y cierra dentro: falsa ruptura.",
        "Segundo intento: cierra en 108,20 con volumen: confirmación.",
        "El retest en 106,30 respeta la zona convertida en soporte.",
      ],
    },
    chart: buildPreset("ruptura"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 107.5,
      stopLoss: 104.2,
      takeProfit: 116,
      outcome: "tp",
      narrative:
        "Entrada en 107,50 después del cierre por encima de la resistencia de 106,50, con stop en 104,20 por debajo del nivel roto y objetivo en 116,00. Se arriesgan 3,3 unidades para buscar 8,5: relación 2,6 : 1. Si el precio volviera a cerrar dentro del rango, la ruptura habría fallado y convendría salir antes de esperar al stop.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Entrar en el primer toque del nivel",
        why: "La mayoría de los primeros intentos fallan: entrar ahí es la forma más rápida de alimentar una falsa ruptura.",
        fix: "Espera el cierre fuera de la zona y, si puedes, el retroceso de confirmación.",
      },
      {
        mistake: "Confundir una mecha que perfora el nivel con una ruptura",
        why: "La mecha puede atravesar el nivel mientras el cierre se queda dentro: eso es un barrido, no una ruptura.",
        fix: "Juzga por el cierre de la vela, no por el extremo que llegó a tocar.",
      },
      {
        mistake: "Poner el stop pegado al nivel roto",
        why: "Ahí se agrupan las órdenes de todos los participantes y el barrido te incluye a ti dentro del recuento.",
        fix: "Da margen al stop calculándolo con la volatilidad del activo, no con el nivel exacto.",
      },
    ],
    related: ["soportes-y-resistencias", "patrones-de-vela", "impulso-y-correccion"],
    glossary: ["ruptura", "soporte-resistencia", "liquidez", "volumen"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué caracteriza una ruptura válida?",
        options: [
          "El precio toca el nivel durante un instante",
          "El cierre se produce fuera de la zona con volumen alto",
          "El nivel tiene un número redondo",
          "La vela tiene color alcista",
        ],
        correct: 1,
        explanation: "El cierre fuera y el volumen son las dos condiciones básicas de confirmación.",
      },
      {
        id: "q2",
        question: "Una falsa ruptura es:",
        options: [
          "Una ruptura confirmada por el volumen",
          "El precio supera el nivel y vuelve a cerrar dentro de la zona",
          "Un nivel muy lejano al precio actual",
          "Una zona que jamás se llega a tocar",
        ],
        correct: 1,
        explanation: "La marca de la falsa ruptura es el regreso al interior de la zona tras perforarla.",
      },
      {
        id: "q3",
        question: "El barrido de liquidez consiste en:",
        options: [
          "Aumentar el volumen negociado del mercado",
          "Ejecutar las órdenes agrupadas justo detrás de un nivel antes de girar",
          "Cerrar la sesión con una gran subida",
          "Reducir el spread del activo",
        ],
        correct: 1,
        explanation:
          "Las órdenes concentradas tras el nivel se ejecutan de una vez y dan al movimiento su combustible.",
      },
      {
        id: "q4",
        question: "¿Por qué conviene esperar el retroceso tras una ruptura?",
        options: [
          "Porque siempre ocurre sin falta",
          "Porque mejora la relación riesgo/beneficio y permite un stop con sentido",
          "Porque los brokers lo exigen por normativa",
          "Para pagar menos comisión",
        ],
        correct: 1,
        explanation:
          "Entrar en el retest acorta la distancia al stop y alarga la disponible hasta el objetivo.",
      },
    ],
  },
  {
    slug: "patrones-de-vela",
    levelId: 2,
    order: 6,
    title: "Patrones de vela: martillo, envolvente y mechazo",
    shortTitle: "Patrones de vela",
    category: "graficos",
    tags: ["patrones", "velas", "reversa", "confirmación"],
    summary:
      "Qué informan tres patrones de velas conocidos, en qué contexto tienen sentido y por qué ninguno garantiza una reversa.",
    keywords: [
      "patrón de vela martillo",
      "envolvente alcista",
      "mechazo de rechazo",
      "patrones de velas japonesas",
    ],
    readMinutes: 6,
    updatedAt: "2026-01-23",
    explanation: {
      intro:
        "Un patrón de vela es una forma reconocible que, según el lugar donde aparezca, sugiere que el vendedor o el comprador perdió fuerza. Sugerir no es garantizar: el patrón es una hipótesis que pide confirmación.",
      paragraphs: [
        "El martillo aparece tras una caída: cuerpo pequeño en la parte alta y mecha inferior larga. Informa de que el precio intentó bajar y hubo quien lo devolvió con decisión. La estrella fugaz es su versión invertida: aparece tras una subida, con mecha superior larga.",
        "La envolvente es un patrón de dos velas: una grande y la siguiente que casi la cubre por completo. Sugiere un cambio de inercia, porque la segunda vela anula el recorrido de la anterior y devuelve el control al bando contrario.",
        "El mechazo de rechazo se observa en una sola vela con una mecha muy larga: el precio barría una zona y volvió dentro antes de cerrar. Es la huella gráfica de un barrido de liquidez, con las ventas o compras atrapadas del lado equivocado.",
        "Los tres comparten la misma advertencia: sin contexto, es decir, sin saber dónde está el patrón respecto a la tendencia y a las zonas, y sin confirmación de la vela siguiente o del volumen, no son más que formas dibujadas.",
      ],
      bullets: [
        "Martillo: mecha inferior larga tras una caída; sugiere rechazo a la baja.",
        "Envolvente: la segunda vela cubre casi por completo a la anterior.",
        "Mechazo de rechazo: mecha larga que perfora una zona y vuelve dentro.",
        "Ninguno funciona igual en medio de un rango que al final de una tendencia.",
      ],
    },
    technical: {
      term: "Patrón de vela y confirmación",
      body: "Un patrón se define por la relación entre cuerpo y mecha y por el lugar que ocupa dentro de la estructura. La confirmación es la vela siguiente, que debe abrir y cerrar del lado que el patrón anticipa, idealmente con volumen. El contexto manda: el mismo martillo al final de una caída larga y cerca de un soporte tiene mucho más peso que en mitad de un rango plano donde ambas partes ganan por turnos.",
      formula: "Mecha inferior ≥ 2 × Cuerpo (regla habitual del martillo)",
      gloss:
        "La regla es orientativa: sirve para comparar velas entre sí, nunca para abrir una operación de forma automática.",
    },
    example: {
      title: "Un martillo con y sin contexto",
      narrative:
        "Un activo ficticio cae de 108 a 96 en una semana y en 96 aparece una vela con cuerpo de 1 unidad y mecha de 3. Después de esa caída larga, el martillo sugiere agotamiento del vendedor. Ahora coloca la misma vela en mitad de un rango entre 95 y 105: ahí casi no dice nada, porque ambas partes ganan por turnos. El patrón es idéntico; lo único que cambia es dónde aparece.",
      bullets: [
        "Caída de 108 a 96: el martillo tiene contexto.",
        "Mismo martillo dentro del rango: casi sin valor.",
        "La confirmación de la vela siguiente sigue siendo necesaria en los dos casos.",
      ],
    },
    chart: buildPreset("martillo"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 97,
      stopLoss: 94.8,
      takeProfit: 102,
      outcome: "sl",
      narrative:
        "Compra en 97,00 tras un martillo que parecía confirmado, con stop en 94,80 bajo la mecha y objetivo en 102,00. En este ejemplo el patrón no continuó: el precio siguió bajando hasta el stop y la operación perdió 2,2 unidades. Un patrón bien formado no obliga al mercado a girarse, y por eso el stop existía desde el principio.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Operar un patrón solo porque aparece en los libros",
        why: "Los patrones son probabilidades; sin contexto y sin confirmación, su tasa de acierto es modesta.",
        fix: "Pregunta siempre dónde aparece el patrón y qué haría falta para darlo por confirmado.",
      },
      {
        mistake: "Ignorar la tendencia previa",
        why: "Un martillo dentro de una caída fuerte suele ser solo una pausa; al final de la caída, en cambio, pesa mucho más.",
        fix: "Sitúa el patrón respecto a la estructura antes de darle importancia en tu plan.",
      },
      {
        mistake: "Buscar el patrón perfecto en cada vela",
        why: "Si flexibilizas la definición hasta encajar cualquier cosa, no estás reconociendo un patrón: estás justificando una entrada.",
        fix: "Define de antemano qué formas cuentan y respeta esa definición durante toda la sesión.",
      },
    ],
    related: ["velas-japonesas", "rupturas-y-rupturas-falsas", "temporalidades"],
    glossary: ["precio", "tendencia", "volumen", "volatilidad"],
    quiz: [
      {
        id: "q1",
        question: "El martillo aparece normalmente:",
        options: [
          "Tras una caída, con mecha inferior larga y cuerpo pequeño arriba",
          "En medio de un rango plano y lateral",
          "Solo en mercados que llevan semanas subiendo",
          "Después de una subida, con mecha superior larga",
        ],
        correct: 0,
        explanation: "Ese es el dibujo del martillo: rechazo de la baja con cierre en la parte alta de la vela.",
      },
      {
        id: "q2",
        question: "¿Qué es una envolvente?",
        options: [
          "Un patrón formado por una sola vela",
          "Un patrón de dos velas donde la segunda cubre casi por completo a la anterior",
          "Una media móvil sobre el gráfico",
          "Una orden de compra pendiente",
        ],
        correct: 1,
        explanation: "La envolvente es de dos velas: la segunda anula el recorrido de la primera.",
      },
      {
        id: "q3",
        question: "Un patrón de vela, por sí solo:",
        options: [
          "Garantiza la reversa del precio",
          "Es una hipótesis que necesita contexto y confirmación",
          "Sirve para calcular el tamaño de posición",
          "Indica el volumen exacto negociado",
        ],
        correct: 1,
        explanation:
          "Los patrones expresan una probabilidad; el contexto y la vela siguiente son lo que los respalda.",
      },
      {
        id: "q4",
        question: "¿Dónde pesa más un martillo?",
        options: [
          "En medio de un rango plano",
          "Al final de una caída larga y cerca de una zona de soporte",
          "En la primera vela de la sesión",
          "Da igual dónde aparezca, siempre vale lo mismo",
        ],
        correct: 1,
        explanation: "El contexto de agotamiento y la zona cercana son lo que dan significado a la forma.",
      },
    ],
  },
  {
    slug: "lineas-de-tendencia",
    levelId: 2,
    order: 7,
    title: "Líneas de tendencia: cómo trazarlas y cuándo se rompen",
    shortTitle: "Líneas de tendencia",
    category: "graficos",
    tags: ["líneas de tendencia", "tendencia", "trazado"],
    summary:
      "Cómo se traza una línea de tendencia, qué toques hacen que sea válida y qué ocurre cuando finalmente se rompe.",
    keywords: [
      "cómo trazar una línea de tendencia",
      "línea de tendencia válida",
      "ruptura de línea de tendencia",
    ],
    readMinutes: 7,
    updatedAt: "2026-01-24",
    explanation: {
      intro:
        "Una línea de tendencia une los extremos de una tendencia: en una alcista, los mínimos crecientes; en una bajista, los máximos decrecientes. Sirve para ver de un vistazo la pendiente que domina el precio y hasta cuándo parece dispuesto a respetarla.",
      paragraphs: [
        "Para trazarla hacen falta al menos dos puntos; con tres toques la línea gana mucha credibilidad. La pendiente importa tanto como los puntos: una línea casi vertical casi nunca se respeta, porque describe un movimiento demasiado rápido para sostenerse.",
        "Una línea válida se apoya en extremos claros, no en baches insignificantes. Si cualquier micro movimiento toca la línea, probablemente la estás trazando demasiado pegada al precio y estás viendo ruido en lugar de estructura.",
        "La línea se rompe cuando el precio cierra al otro lado con solidez. La primera ruptura no significa siempre cambio de tendencia: a veces es solo un alejamiento que después vuelve al interior sin romper la secuencia de extremos.",
        "Muchos operadores usan la ruptura de la línea como aviso para revisar la operación, no como señal automática de giro. La estructura de máximos y mínimos manda sobre la línea: si la secuencia sigue intacta, la tendencia continúa aunque la línea ceda.",
      ],
      bullets: [
        "Une al menos dos extremos consecutivos de la tendencia.",
        "Tres toques consecutivos dan mucha más credibilidad.",
        "Las pendientes extremas casi nunca se mantienen.",
        "La ruptura avisa; el cambio de estructura confirma.",
      ],
    },
    technical: {
      term: "Pendiente y línea de tendencia",
      body: "La pendiente mide el cambio del precio por unidad de tiempo. Una línea de tendencia válida mantiene una pendiente aproximadamente constante entre los toques, porque refleja un ritmo de avance sostenido. El ángulo se compara con la volatilidad habitual del activo: lo que en un mercado lento es una línea normal, en uno rápido sería apenas una línea plana.",
      formula: "Pendiente = Δ Precio / Δ Tiempo",
      gloss:
        "Una línea demasiado empinada se rompe por su propio ángulo, no por un cambio real del mercado convencido.",
    },
    example: {
      title: "Tres toques y después la duda",
      narrative:
        "Un activo ficticio hace mínimos en 100, 103 y 106: se traza la línea por debajo. En el cuarto retroceso el precio la toca en 109 y rebota: tres toques válidos. Después cierra en 108,20, por debajo de la línea, pero el siguiente mínimo llega a 107,50 y sigue por encima del mínimo anterior de 106. La línea se ha roto; la estructura, no. Son dos mensajes distintos y confundirlos suele salir caro.",
      bullets: [
        "Mínimos en 100, 103 y 106: línea trazada con tres apoyos.",
        "Cierre por debajo de la línea: ruptura de la línea.",
        "Mínimo posterior en 107,50: estructura aún intacta.",
      ],
    },
    chart: buildPreset("tendencia-bajista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "short",
      entry: 124,
      stopLoss: 126.8,
      takeProfit: 117,
      outcome: "tp",
      narrative:
        "Venta en 124,00 al rechazar la línea de tendencia bajista, con stop en 126,80 por encima del último máximo y objetivo en 117,00. Riesgo de 2,8 unidades y recorrido de 7: relación 2,5 : 1. Si el precio cerrara por encima de la línea y del máximo anterior, la estructura habría cambiado y habría que cerrar la posición.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Trazar la línea tocando cualquier mínimo que aparezca",
        why: "Si la línea pasa por todo, no informa de nada: no distingue la estructura del ruido de cada vela.",
        fix: "Une extremos claros y deja que la línea respire respecto al precio cotizado.",
      },
      {
        mistake: "Dar por válida la línea con un solo toque",
        why: "Un toque no prueba una pendiente: cualquiera puede unir dos puntos elegidos al azar.",
        fix: "Espera al segundo o al tercer toque antes de fiarte de la línea en tus decisiones.",
      },
      {
        mistake: "Tratar la primera ruptura como cambio de tendencia seguro",
        why: "Las roturas tempranas suelen ser desvíos dentro de la misma tendencia, no el giro anunciado.",
        fix: "Contrasta la ruptura con la secuencia de máximos y mínimos antes de girar la posición.",
      },
    ],
    related: ["tendencias-y-estructura", "soportes-y-resistencias", "impulso-y-correccion"],
    glossary: ["tendencia", "soporte", "resistencia", "ruptura"],
    quiz: [
      {
        id: "q1",
        question: "Una línea de tendencia alcista une:",
        options: [
          "Los mínimos crecientes de la tendencia",
          "Los máximos decrecientes de la tendencia",
          "La apertura y el cierre de cada día",
          "El volumen negociado en cada vela",
        ],
        correct: 0,
        explanation: "En alcista la línea se traza por debajo, apoyándose en los mínimos que van subiendo.",
      },
      {
        id: "q2",
        question: "¿Cuántos toques hacen creíble una línea de tendencia?",
        options: [
          "Uno solo basta",
          "Al menos dos y, con tres, gana credibilidad",
          "Diez toques obligatorios",
          "Ninguno: las líneas no sirven para nada",
        ],
        correct: 1,
        explanation:
          "Dos puntos dibujan la línea; el tercer toque empieza a demostrar que el mercado la reconoce.",
      },
      {
        id: "q3",
        question: "Una línea de tendencia demasiado empinada:",
        options: [
          "Es la más fiable de todas",
          "Casi nunca se respeta porque describe un movimiento demasiado rápido",
          "Debe operarse siempre en corto",
          "Se traza usando el volumen negociado",
        ],
        correct: 1,
        explanation: "Las pendientes extremas no son sostenibles y suelen romperse por el exceso de ángulo.",
      },
      {
        id: "q4",
        question: "Si la línea se rompe pero la secuencia de extremos sigue intacta:",
        options: [
          "La tendencia ha cambiado con seguridad",
          "Conviene contrastar: la ruptura avisa y la estructura confirma",
          "Hay que cerrar la cuenta de inmediato",
          "El gráfico está dibujado mal",
        ],
        correct: 1,
        explanation:
          "La estructura de extremos es el criterio principal; la línea es una ayuda visual secundaria.",
      },
    ],
  },
  {
    slug: "impulso-y-correccion",
    levelId: 2,
    order: 8,
    title: "Impulso y corrección: el pulso y el retroceso",
    shortTitle: "Impulso y corrección",
    category: "graficos",
    tags: ["impulso", "corrección", "pullback"],
    summary:
      "Qué es el impulso dentro de una tendencia, qué es un pullback y cómo distinguir una corrección de un cambio de tendencia.",
    keywords: [
      "qué es un pullback",
      "impulso y corrección",
      "corrección dentro de una tendencia",
      "diferencia entre pullback y giro",
    ],
    readMinutes: 7,
    updatedAt: "2026-01-25",
    explanation: {
      intro:
        "Los mercados no se mueven en línea recta: avanzan por impulsos y respiran con correcciones. El impulso es el tramo que va con la tendencia; la corrección es el retroceso que la pausa sin romperla.",
      paragraphs: [
        "En una tendencia alcista, el impulso sube con decisión y con volumen, mientras que la corrección baja más despacio, con menos volumen y sin llegar al mínimo anterior. Esa diferencia de carácter es lo que permite distinguir una pausa de un giro.",
        "El pullback es el nombre del retroceso que vuelve hacia una zona conocida: la línea de tendencia, una media móvil o el último soporte relevante. Muchos operadores esperan ese punto porque el stop queda más corto y la relación riesgo/beneficio mejora respecto a entrar en mitad del impulso.",
        "La señal de que la corrección se convirtió en cambio de tendencia es estructural: el retroceso supera el último extremo contrario y después ya no consigue marcar un extremo a favor. Hasta que eso ocurre, lo razonable es leerlo como una pausa.",
        "Operar el pullback dentro de la tendencia es una de las ideas más repetidas del análisis técnico. Su problema práctico es que a veces el retroceso no llega y el precio sigue sin ti: no entrar tampoco es un resultado negativo, es parte del plan.",
      ],
      bullets: [
        "Impulso: tramo rápido y con volumen, a favor de la tendencia.",
        "Corrección: retroceso lento y con menos volumen.",
        "Pullback: corrección que vuelve hacia una zona de interés.",
        "La estructura, no el tamaño del retroceso, decide si el giro es real.",
      ],
    },
    technical: {
      term: "Impulso, retroceso y pullback",
      body: "El impulso es el tramo que extiende la estructura; el retroceso es la pausa que la corrige sin romperla. Cuando el retroceso vuelve a una zona de interés (línea de tendencia, media móvil o soporte) se le llama pullback. Los retrocesos suelen medirse como fracción del impulso anterior: tercio, mitad o dos tercios son las referencias clásicas, pero ninguna fracción obliga al precio a detenerse ahí.",
      formula: "Retroceso típico = 33 % – 50 % del impulso anterior (orientativo)",
      gloss:
        "Medir el retroceso sirve para estimar dónde podría terminar, nunca para asegurarlo ni para operar de forma automática.",
    },
    example: {
      title: "Corrección o giro",
      narrative:
        "Un activo ficticio sube de 96 a 106 y retrocede hasta 103. El retroceso no llega al mínimo anterior de 96, así que la estructura se mantiene intacta y sigue siendo una corrección. Si en cambio bajara hasta 95, por debajo de 96, la secuencia de mínimos crecientes se habría roto y habría que hablar de cambio de tendencia, no de pausa.",
      bullets: [
        "Impulso: de 96 a 106.",
        "Corrección: de 106 a 103, sin romper 96.",
        "Cierre por debajo de 96: cambia la lectura.",
      ],
    },
    chart: buildPreset("pullback"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 103.5,
      stopLoss: 101.2,
      takeProfit: 108.5,
      outcome: "open",
      narrative:
        "Compra en 103,50 durante el retroceso hacia la media de 20 periodos, con stop en 101,20 por debajo del mínimo del pullback y objetivo en 108,50. La operación sigue abierta: hasta que el precio toque uno de los dos niveles no hay resultado, y esperar sin mover los niveles es parte del plan.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Llamar pullback a cualquier caída",
        why: "Si el retroceso rompe la estructura, ya no es una pausa: es un cambio de tendencia en marcha.",
        fix: "Comprueba si el último extremo contrario sigue intacto antes de etiquetarlo como corrección.",
      },
      {
        mistake: "Entrar a mitad del retroceso sin zona de referencia",
        why: "Sin un lugar claro donde pueda terminar la corrección, el stop es arbitrario y el tamaño de posición también.",
        fix: "Elige la zona de referencia (línea, media o soporte) antes de calcular la entrada.",
      },
      {
        mistake: "Persiguiendo un impulso que ya se fue",
        why: "Entrar al final del impulso deja poca distancia hasta el objetivo y mucha hasta el stop.",
        fix: "Espera el retroceso o no operes ese tramo: siempre habrá más impulsos.",
      },
    ],
    related: [
      "tendencias-y-estructura",
      "lineas-de-tendencia",
      "patrones-de-vela",
      "que-significa-comprar-y-vender",
    ],
    glossary: ["tendencia", "temporalidad", "riesgo-beneficio", "swing"],
    quiz: [
      {
        id: "q1",
        question: "El impulso dentro de una tendencia es:",
        options: [
          "El retroceso contra la tendencia",
          "El tramo que va a favor de la tendencia, rápido y con volumen",
          "Un error de dibujo del gráfico",
          "El cierre de la sesión",
        ],
        correct: 1,
        explanation: "El impulso es el tramo que extiende la estructura en el sentido de la tendencia.",
      },
      {
        id: "q2",
        question: "Un pullback es:",
        options: [
          "Un cambio de tendencia confirmado",
          "Un retroceso que vuelve hacia una zona de interés sin romper la estructura",
          "Una orden automática del broker",
          "Un indicador de momentum",
        ],
        correct: 1,
        explanation:
          "El pullback es la corrección que regresa a una zona conocida mientras la estructura sigue intacta.",
      },
      {
        id: "q3",
        question: "¿Cómo se distingue una corrección de un cambio de tendencia?",
        options: [
          "Por el color de las velas del retroceso",
          "Comprobando si el retroceso rompe el último extremo contrario",
          "Por el número de velas que tiene el impulso",
          "Mirando el spread del activo",
        ],
        correct: 1,
        explanation:
          "El criterio es estructural: si el retroceso rompe el extremo contrario, cambia la lectura del mercado.",
      },
      {
        id: "q4",
        question: "¿Cuál es una ventaja de esperar el pullback para entrar?",
        options: [
          "Garantiza un beneficio en la operación",
          "El stop queda más corto y la relación riesgo/beneficio mejora",
          "No hace falta preparar un plan",
          "Elimina los costes de transacción",
        ],
        correct: 1,
        explanation:
          "Entrar más cerca del extremo del retroceso acorta el riesgo y alarga el recorrido disponible hasta el objetivo.",
      },
    ],
  },
];
