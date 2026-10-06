import type { BlogPost } from "~/types";

/**
 * Artículos del blog. Todo el contenido es educativo, con datos ficticios y
 * sin promesas de rentabilidad. Los `sections` admiten párrafos, encabezados,
 * listas, citas, avisos y gráficos incrustados.
 */
export const allPosts: BlogPost[] = [
  {
    slug: "que-es-el-trading-y-como-funciona",
    title: "Qué es el trading y cómo funciona de verdad",
    excerpt:
      "Una definición sin humo: qué se compra, quién te compra, qué pagas y por qué la mayor parte de quienes empiezan pierden dinero.",
    category: "fundamentos",
    tags: ["qué es trading", "conceptos básicos", "riesgo"],
    readMinutes: 7,
    updatedAt: "2026-01-14",
    author: "Equipo editorial",
    relatedLessons: ["que-es-el-trading", "que-es-un-mercado-financiero", "que-es-un-broker"],
    relatedTerms: ["trading", "broker", "riesgo", "spread"],
    sections: [
      {
        kind: "paragraph",
        text: "El trading consiste en decidir si compras o vendes un activo financiero y cerrar esa posición más tarde. Suena mecánica, y ahí empieza el error: la decisión no está en el botón de comprar, está en qué nivel compras, dónde dices que te has equivocado y cuánto dinero estás dispuesto a perder si así ocurre.",
      },
      {
        kind: "heading",
        id: "cuatro-cosas",
        text: "Las cuatro cosas que hay que entender",
      },
      {
        kind: "list",
        items: [
          "Precio: lo que pagas, y lo que alguien paga por lo que vendes.",
          "Intermediario: el broker ejecuta tu orden a cambio de un coste.",
          "Riesgo: la cantidad de dinero que aceptas perder si la hipótesis falla.",
          "Disciplina: la capacidad de repetir el mismo procedimiento cuando toca perder.",
        ],
      },
      {
        kind: "paragraph",
        text: "Si una de estas cuatro piezas falla, el sistema no funciona. Un análisis excelente sin un stop definido sigue siendo una apuesta; un plan sencillo y repetible, en cambio, se puede medir y mejorar.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "Aviso importante",
        text: "En Trading Academy no damos señales ni Recomendamos brokers. Todo lo que se explica aquí es material educativo y los datos de cualquier ejemplo son inventados.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "por-que-se-pierde",
        text: "Por qué la mayoría pierde dinero",
      },
      {
        kind: "paragraph",
        text: "La respuesta corta es el coste. Cada operación paga spread y comisión aunque salga bien. Un sistema con un 60 % de aciertos y 2 pips de spread por operación puede perder dinero si su recorrido medio es de 5 pips.",
      },
      {
        kind: "quote",
        text: "La rentabilidad no viene de acertar más, sino de que cuando te equivocas pierdes menos.",
      },
      {
        kind: "paragraph",
        text: "Esa frase es la definición operativa del control de riesgo. Elijes el nivel de error antes de entrar y respetas ese nivel aunque el precio se acerque y luego se dé la vuelta. El resto es práctica.",
      },
    ],
  },
  {
    slug: "forex-para-principiantes-guia-sin-promesas",
    title: "Forex para principiantes: qué necesitas saber antes de abrir una cuenta",
    excerpt:
      "Qué es realmente el mercado de divisas, por qué tiene el mayor volumen del mundo y qué costes se pagan aunque la operación salga bien.",
    category: "mercados",
    tags: ["forex", "divisas", "pares"],
    readMinutes: 8,
    updatedAt: "2026-01-15",
    author: "Equipo editorial",
    relatedLessons: ["que-es-forex", "que-es-un-broker", "precio-volumen-y-liquidez"],
    relatedTerms: ["forex", "pip", "lote", "spread", "apalancamiento"],
    sections: [
      {
        kind: "paragraph",
        text: "El mercado de divisas es el mercado más líquido del mundo en volumen negociado. Esa liquidez trae una consecuencia práctica: los costes son bajos en activos muy negociados y muy altos en los que no lo son.",
      },
      {
        kind: "heading",
        id: "pares",
        text: "Todo se opera en pares",
      },
      {
        kind: "paragraph",
        text: "Cuando compras EUR/USD estás comprando euros y vendiendo dólares al mismo tiempo. No existe la posibilidad de tener exposure únicamente a una divisa: cada posición tiene dos lados.",
      },
      {
        kind: "list",
        items: [
          "EUR/USD: el par más negociado del mundo y el habitual para empezar.",
          "GBP/USD: más volatilidad que el euro.",
          "USD/JPY: muy sensible a las diferencias de tipos de interés.",
        ],
      },
      {
        kind: "heading",
        id: "costes",
        text: "Los costes que se pagan siempre",
      },
      {
        kind: "paragraph",
        text: "El spread se paga al entrar y al salir. La comisión se cobra por lote y turno. Con apalancamiento, mantener la posición abierta un día puede generar un coste de financiación. Todo ello se paga también cuando la operación termina en pérdidas.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "Sobre el apalancamiento",
        text: "El apalancamiento no aumenta por sí solo el riesgo de una posición bien calculada; el riesgo lo decide el tamaño. El apalancamiento combinado con un tamaño alto sí amplifica las pérdidas con rapidez.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "horarios",
        text: "Las sesiones importan",
      },
      {
        kind: "paragraph",
        text: "Asia, Londres y Nueva York tienen volumen y carácter distintos. El solapamiento entre Londres y Nueva York concentra la mayor parte del volumen diario. Operar a deshora suele significar spreads más amplios y movimientos menos marcados.",
      },
    ],
  },
  {
    slug: "bitcoin-que-es-y-por-que-se-mueve",
    title: "Qué es Bitcoin y por qué su precio se mueve así",
    excerpt:
      "Qué es un activo digital: qué es una blockchain, qué mueve el precio y por qué el riesgo es mayor que en otros mercados.",
    category: "mercados",
    tags: ["bitcoin", "cripto", "blockchain"],
    readMinutes: 7,
    updatedAt: "2026-01-15",
    author: "Equipo editorial",
    relatedLessons: ["que-son-las-criptomonedas", "precio-volumen-y-liquidez"],
    relatedTerms: ["bitcoin", "criptomoneda", "blockchain", "volatilidad"],
    sections: [
      {
        kind: "paragraph",
        text: "Bitcoin es un activo digital cuyo registro de transacciones se mantiene en miles de ordenadores repartidos por el mundo. Cada bloque referencia el anterior mediante un identificador criptográfico, de modo que modificar algo antiguo obligaría a recalcular todo lo que viene detrás.",
      },
      {
        kind: "heading",
        id: "movimiento",
        text: "Qué mueve el precio",
      },
      {
        kind: "list",
        items: [
          "Oferta y demanda: si todos quieren comprar y hay pocos vendedores, el precio sube.",
          "Liquidez desigual: algunos pares tienen volumen y otros casi no lo tienen.",
          "Noticia y sentimiento: un titular puede mover el mercado en segundos.",
          "Apalancamiento: posiciones muy apalancadas amplifican el movimiento en cualquier dirección.",
        ],
      },
      {
        kind: "paragraph",
        text: "Al operar cripto hay que tener en cuenta que el mercado no cierra: no hay un momento de calma en el que el precio se asiente. El stop loss se calcula con esa idea en mente.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "Datos ficticios",
        text: "Todos los gráficos y precios cripto de este sitio son inventados con fines didácticos. No son datos de mercado reales.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "conclusion",
        text: "Qué llevar de esta lectura",
      },
      {
        kind: "paragraph",
        text: "Cripto es un mercado con alta volatilidad y riesgos operativos adicionales a los de las acciones tradicionales. Entender la infraestructura sirve, pero la decisión de operar depende de la gestión del riesgo, que es exactamente igual que en el resto de mercados.",
      },
    ],
  },
  {
    slug: "como-elegir-broker-sin-promesas",
    title: "Cómo elegir broker sin promesas ni letra pequeña",
    excerpt:
      "Los cuatro aspectos que conviene revisar: regulación, costes totales, calidad de ejecución y soporte. Sin recomendar ninguno en concreto.",
    category: "broker",
    tags: ["broker", "comisiones", "regulación"],
    readMinutes: 6,
    updatedAt: "2026-01-16",
    author: "Equipo editorial",
    relatedLessons: ["que-es-un-broker", "que-es-forex"],
    relatedTerms: ["broker", "spread", "comision", "regulacion", "slippage"],
    sections: [
      {
        kind: "paragraph",
        text: "Elegir intermediario no debería ser una decisión de marketing. Existen cuatro aspectos objetivos que puedes verificar por tu cuenta, y ninguno de ellos consiste en buscar el spread más bajo.",
      },
      {
        kind: "heading",
        id: "regulacion",
        text: "1. Regulación y jurisdicción",
      },
      {
        kind: "paragraph",
        text: "Un intermediario regulado en una jurisdicción reconocida está obligado a publicar estados financieros y a seguir normas de protección al cliente. Un intermediario no regulado puede operar en condiciones que no puedes comprobar. Esta web no clasifica ni recomienda ningún broker.",
      },
      {
        kind: "heading",
        id: "costes",
        text: "2. Coste total",
      },
      {
        kind: "list",
        items: [
          "Spread en los pares que operas habitualmente, no el mínimo teórico.",
          "Comisión por lote y por turno.",
          "Financiación nocturna si mantienes posiciones abiertas.",
          "Coste de retirada, si la hay.",
        ],
      },
      {
        kind: "heading",
        id: "ejecucion",
        text: "3. Calidad de ejecución",
      },
      {
        kind: "paragraph",
        text: "Un spread bajo no compensa ejecuciones pésimas. Revisa si permite órdenes limitadas, si hay slippage frecuente y cómo se comporta el stop loss en las horas de menor liquidez.",
      },
      {
        kind: "quote",
        text: "El broker más barato en papel puede ser el más caro en la práctica si ejecuta mal.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "soporte",
        text: "4. Soporte y claridad",
      },
      {
        kind: "paragraph",
        text: "Un buen soporte responde preguntas concretas sobre margen, financiación y ejecución. Y una plataforma clara, con los costes visibles, reduce la posibilidad de error por descuido.",
      },
    ],
  },
  {
    slug: "que-es-el-stop-loss-y-por-que-es-todo",
    title: "Qué es el stop loss y por qué importa más que la entrada",
    excerpt:
      "El nivel que define tu error es la parte más importante de una operación. Una mirada a cómo se coloca bien y qué lo hace fracasar.",
    category: "gestion-riesgo",
    tags: ["stop loss", "riesgo", "gestión"],
    readMinutes: 7,
    updatedAt: "2026-01-16",
    author: "Equipo editorial",
    relatedLessons: ["que-significa-comprar-y-vender", "precio-volumen-y-liquidez"],
    relatedTerms: ["stop-loss", "take-profit", "atr", "slippage", "liquidez"],
    sections: [
      {
        kind: "paragraph",
        text: "El stop loss es una orden que se activa automáticamente para cerrar la posición cuando el precio alcanza un nivel adverso. Su función no es ganar dinero: es convertir una pérdida ilimitada en una pérdida conocida.",
      },
      {
        kind: "heading",
        id: "donde",
        text: "Dónde colocarlo",
      },
      {
        kind: "list",
        items: [
          "En largo, por debajo de la entrada. En corto, por encima.",
          "Fuera de las zonas de soporte y resistencia, no dentro.",
          "A una distancia proporcional a la volatilidad, por ejemplo entre 1 y 1,5 ATR.",
          "Nunca en un número redondo: ahí se acumulan muchas órdenes.",
        ],
      },
      {
        kind: "paragraph",
        text: "La distancia del stop determina el tamaño de la posición. Con 1.000 de capital y riesgo del 1 %, arriesgas 10. Si el stop está a 2 unidades, tomas 5 unidades; si está a 10, solo 1.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "El error más caro",
        text: "Quitar el stop o moverlo más lejos para evitar una pérdida es la forma más rápida de convertir un mal día en una pérdida grande. El stop no se mueve: se acepta.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "fallos",
        text: "Por qué falla un stop",
      },
      {
        kind: "paragraph",
        text: "En mercados poco líquidos el precio puede saltar el nivel sin que exista contraparte, y la ejecución ocurre más lejos de lo previsto. Es el slippage. También ocurre con noticias: el precio se mueve varios pips en un segundo y todos los stops se ejecutan en la misma oferta disponible.",
      },
      {
        kind: "paragraph",
        text: "La mitigación no es quitar el stop, sino reducir el tamaño de la posición y operar en activos líquidos.",
      },
    ],
  },
  {
    slug: "como-calcular-el-tamano-de-tu-posicion",
    title: "Cómo calcular el tamaño de tu posición",
    excerpt:
      "La fórmula que decide cuánto compras, con capital, riesgo y distancia al stop loss. Sin fórmulas difíciles y sin adivinar.",
    category: "gestion-riesgo",
    tags: ["tamaño de posición", "riesgo", "capital"],
    readMinutes: 6,
    updatedAt: "2026-01-17",
    author: "Equipo editorial",
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
    relatedTerms: ["posicion", "riesgo", "stop-loss", "capital", "lote"],
    sections: [
      {
        kind: "paragraph",
        text: "El tamaño de posición no se elige por intuición. Sale de una fórmula de tres variables: cuánto capital tienes, qué porcentaje estás dispuesto a perder y a qué distancia está tu stop loss.",
      },
      {
        kind: "heading",
        id: "formula",
        text: "La fórmula",
      },
      {
        kind: "list",
        items: [
          "Riesgo en dinero = Capital × (Riesgo % / 100).",
          "Tamaño = Riesgo en dinero ÷ Distancia al stop loss.",
        ],
      },
      {
        kind: "paragraph",
        text: "Ejemplo: con 5.000 de capital y un riesgo del 1 %, arriesgas 50. Si la entrada es 100 y el stop está en 97, la distancia es 3, así que el tamaño es 50 ÷ 3 = 16,67 unidades.",
      },
      {
        kind: "paragraph",
        text: "Si el stop estuviera en 99, la distancia sería 1 y el tamaño sería de 50 unidades. Un stop más cercano no significa más riesgo: significa más tamaño. El riesgo sigue siendo 50.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Herramienta",
        text: "El simulador de este sitio hace exactamente estos cálculos con datos ficticios, y avisa cuando el riesgo o la relación riesgo/beneficio son poco razonables.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "errores",
        text: "Errores habituales",
      },
      {
        kind: "list",
        items: [
          "Fijar primero el tamaño y después el stop.",
          "Subir el riesgo después de una racha de pérdidas.",
          "Arriesgar un porcentaje que suene conservador pero que en la práctica no puedes sostener emocionalmente.",
        ],
      },
    ],
  },
  {
    slug: "psicologia-del-trading-habitos-basicos",
    title: "Psicología del trading: los cinco hábitos que más dinero cuestan",
    excerpt:
      "FOMO, operar para recuperar, mover el stop y sobreoperar. Los errores más comunes tienen todos la misma raíz: falta de reglas escritas.",
    category: "psicologia",
    tags: ["psicología", "FOMO", "disciplina"],
    readMinutes: 7,
    updatedAt: "2026-01-17",
    author: "Equipo editorial",
    relatedLessons: ["que-es-el-trading", "que-es-un-broker"],
    relatedTerms: ["psicologia", "fomo", "revenge-trading", "disciplina", "registro"],
    sections: [
      {
        kind: "paragraph",
        text: "La psicología del trading no consiste en mantener la calma, sino en tener un procedimiento que no depende del estado de ánimo. Los errores más caros aparecen casi siempre en los dos extremos: después de una racha de pérdidas o después de una de ganancias.",
      },
      {
        kind: "heading",
        id: "cinco",
        text: "Los cinco hábitos caros",
      },
      {
        kind: "list",
        items: [
          "Operar para recuperar: aumentar el tamaño justo después de perder.",
          "Mover el stop: alejarlo porque no quieres aceptar la pérdida.",
          "Sobreoperar: abrir más operaciones de las que permite el plan.",
          "Entrar por FOMO: comprar porque el activo ya ha subido, no por una condición.",
          "No registrar: operar sin datos impide saber qué repetir y qué corregir.",
        ],
      },
      {
        kind: "callout",
        tone: "risk",
        title: "El patrón común",
        text: "Todos estos errores aparecen cuando el riesgo se decide en el momento de la operación. Cuando el riesgo está decidido de antemano, la decisión se vuelve mecánica.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "soluciones",
        text: "Qué hacer en su lugar",
      },
      {
        kind: "paragraph",
        text: "Escribe las reglas antes de la sesión: qué condiciones compran, dónde va el stop, cuánto arriesgas. Anota cada operación en un registro. Y después de una pérdida, vuelve al tamaño original o bájalo; nunca lo subas.",
      },
      {
        kind: "quote",
        text: "La disciplina no es la capacidad de acertar. Es la de repetir el mismo procedimiento aunque aciertes poco.",
      },
    ],
  },
  {
    slug: "como-leer-una-vela-japonesa",
    title: "Cómo leer una vela japonesa sin adivinar",
    excerpt:
      "Apertura, máximo, mínimo y cierre: cuatro precios que resumen lo que pasó en un periodo. Y por qué el cuerpo importa más que la mecha.",
    category: "graficos",
    tags: ["velas", "gráficos", "análisis técnico"],
    readMinutes: 6,
    updatedAt: "2026-01-18",
    author: "Equipo editorial",
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
    relatedTerms: ["temporalidad", "volatilidad", "tendencia", "soporte", "resistencia"],
    sections: [
      {
        kind: "paragraph",
        text: "Cada vela resume cuatro precios de un periodo: apertura, máximo, mínimo y cierre. Con eso se puede saber si el periodo terminó arriba o abajo, cuánto se movió y cuánto se rechazó el precio en los extremos.",
      },
      {
        kind: "heading",
        id: "partes",
        text: "Qué significa cada parte",
      },
      {
        kind: "list",
        items: [
          "Cuerpo: distancia entre apertura y cierre. Muestra la dirección del periodo.",
          "Mecha superior: zona de precio rechazada por arriba.",
          "Mecha inferior: zona de precio rechazada por abajo.",
          "Volumen: cuántas unidades se negociaron en ese periodo.",
        ],
      },
      {
        kind: "paragraph",
        text: "Una mecha larga indica que el precio fue a una zona y fue rechazado. Eso aporta información sobre las zonas donde hay oferta o demanda, y es la base de muchas estructuras de precio.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Temporalidad",
        text: "La misma vela tiene un significado distinto en una temporalidad de 5 minutos que en una diaria. Antes de interpretar nada, decide en qué marco temporal estás trabajando.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "lectura",
        text: "Un método de lectura simple",
      },
      {
        kind: "list",
        items: [
          "Identifica la tendencia: máximos y mínimos crecientes o decrecientes.",
          "Localiza las zonas donde el precio ha reaccionado varias veces.",
          "Mira dónde se rechaza el precio dentro de la zona.",
          "Solo entonces tiene sentido discutir entradas y objetivos.",
        ],
      },
    ],
  },
  {
    slug: "indicadores-explicados-rsi-macd-y-medias",
    title: "RSI, MACD y medias móviles explicados sin humo",
    excerpt:
      "Qué mide cada indicador, qué no mide y por qué usarlos como señales de entrada automáticas suele llevar a errores.",
    category: "indicadores",
    tags: ["RSI", "MACD", "medias móviles"],
    readMinutes: 8,
    updatedAt: "2026-01-18",
    author: "Equipo editorial",
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
    relatedTerms: ["rsi", "macd", "medias-moviles", "sobrecompra", "divergencia", "cruce"],
    sections: [
      {
        kind: "paragraph",
        text: "Un indicador es una traducción matemática del precio. Es útil cuando responde a una pregunta concreta y es irrelevante cuando se usa como botón de compra.",
      },
      {
        kind: "heading",
        id: "rsi",
        text: "RSI: fuerza del movimiento reciente",
      },
      {
        kind: "paragraph",
        text: "El RSI oscila entre 0 y 100. Por encima de 70 se suele considerar sobrecompra y por debajo de 30 sobreventa. El problema: en un mercado con tendencia fuerte puede quedarse semanas en zona de sobrecompra mientras el precio sigue subiendo.",
      },
      {
        kind: "heading",
        id: "macd",
        text: "MACD: dirección y fuerza",
      },
      {
        kind: "paragraph",
        text: "El MACD compara una media rápida con una lenta y añade una línea de señal. Cuando la cruza, el momentum cambia. Llega tarde, como todos los indicadores: describe lo que ya ha ocurrido.",
      },
      {
        kind: "heading",
        id: "medias",
        text: "Medias móviles: dirección suavizada",
      },
      {
        kind: "paragraph",
        text: "Una media móvil suaviza el ruido y mide el sesgo. El precio por encima de la media indica sesgo alcista; por debajo, bajista. Su inconveniente es el retardo en los giros bruscos.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "El error común",
        text: "Poner un indicador en un gráfico no añade información si el precio y el volumen ya están ahí. Añade تأكيد, no conocimiento.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "uso",
        text: "Cómo usarlos con criterio",
      },
      {
        kind: "list",
        items: [
          "Un indicador por pregunta: ¿fuerza? ¿dirección? ¿distancia a la media?",
          "Confirma con precio y volumen, nunca al revés.",
          "Valida en un conjunto de casos antes de usarlo en decisiones reales.",
        ],
      },
    ],
  },
  {
    slug: "spread-comisiones-y-costes-ocultos",
    title: "Spread, comisiones y los costes ocultos que nadie mira",
    excerpt:
      "Los costes no aparecen en la cuenta de resultados, pero deciden si un sistema rentable sobrevive. Una revisión completa.",
    category: "broker",
    tags: ["spread", "comisiones", "costes"],
    readMinutes: 6,
    updatedAt: "2026-01-19",
    author: "Equipo editorial",
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
    relatedTerms: ["spread", "comision", "pip", "lote", "slippage", "liquidez"],
    sections: [
      {
        kind: "paragraph",
        text: "El coste de operar aparece repartido en varios sitios. Sumados, deciden si un sistema que parece rentable al final del mes sigue siéndolo después de costes.",
      },
      {
        kind: "heading",
        id: "lista",
        text: "Todos los costes",
      },
      {
        kind: "list",
        items: [
          "Spread: diferencia entre compra y venta, se paga dos veces.",
          "Comisión por lote y turno.",
          "Financiación nocturna si mantienes la posición abierta.",
          "Slippage: diferencia entre el precio esperado y el ejecutado.",
          "Coste de conversión si operas en divisas distintas a la de tu cuenta.",
        ],
      },
      {
        kind: "paragraph",
        text: "La forma más sencilla de ver el impacto es comparar el coste por operación con el objetivo de beneficio. Si pagas 4 pips y buscas 10, has consumido el 40 % del recorrido.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "Coste y frecuencia",
        text: "Un coste pequeño por operación se vuelve grande con frecuencia. 100 operaciones al mes con 2 pips son 200 pips, ganes o pierdas.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "reduccion",
        text: "Cómo reducir el impacto",
      },
      {
        kind: "list",
        items: [
          "Opera activos líquidos con spreads estrechos.",
          "Reduce la frecuencia de operaciones innecesarias.",
          "Incluye el coste en el cálculo de la relación riesgo/beneficio.",
          "Registra el coste real de cada operación en tu diario.",
        ],
      },
    ],
  },
  {
    slug: "backtesting-guia-practica-para-principiantes",
    title: "Backtesting: prueba tu estrategia antes de arriesgar dinero",
    excerpt:
      "Cómo validar una estrategia con datos históricos, qué límites tiene el método y cómo evitar el error de optimizar de más.",
    category: "estrategias",
    tags: ["backtesting", "estrategia", "validación"],
    readMinutes: 7,
    updatedAt: "2026-01-19",
    author: "Equipo editorial",
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
    relatedTerms: ["backtesting", "overfitting", "estrategia", "registro"],
    sections: [
      {
        kind: "paragraph",
        text: "Probar una estrategia con datos históricos, el backtesting, permite descartar ideas antes de arriesgar capital. Es la herramienta más barata de que dispone quien empieza, y la que más se usa mal.",
      },
      {
        kind: "heading",
        id: "pasos",
        text: "Los pasos básicos",
      },
      {
        kind: "list",
        items: [
          "Escribe las reglas de forma tan precisa que otro pueda aplicarlas.",
          "Aplica esas reglas vela a vela sobre datos históricos.",
          "Registra entrada, salida, riesgo y resultado de cada caso.",
          "Calcula el porcentaje de acierto, el ratio y el drawdown máximo.",
        ],
      },
      {
        kind: "paragraph",
        text: "El resultado importante no es el porcentaje de acierto, sino la distribución: cuánto ganas cuando aciertas, cuánto pierdes cuando fallas y cuál es la peor racha.",
      },
      {
        kind: "callout",
        tone: "risk",
        title: "El riesgo del backtesting",
        text: "Si añades condiciones hasta que la estrategia encaje perfectamente con los datos usados, no has encontrado una estrategia: has encontrado un sobreajuste. Reserva una parte de los datos para validar.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "errores",
        text: "Errores frecuentes",
      },
      {
        kind: "list",
        items: [
          "Usar datos que incluyen el futuro en la propia vela.",
          "Contar el precio ideal de ejecución sin incluir los costes.",
          "Probar con los mismos datos con los que se ajustó el sistema.",
          "Buscar el resultado perfecto en lugar de entender la distribución.",
        ],
      },
    ],
  },
  {
    slug: "errores-que-todo-principiante-comete",
    title: "Los errores que todo principiante comete (y cómo evitarlos)",
    excerpt:
      "Un catálogo razonado de los fallos más frecuentes: sobreoperar, mover el stop, ignorar el spread, operar sin plan y esperar señales.",
    category: "psicologia",
    tags: ["errores", "principiantes", "disciplina"],
    readMinutes: 7,
    updatedAt: "2026-01-20",
    author: "Equipo editorial",
    relatedLessons: ["que-es-el-trading", "que-es-un-broker", "precio-volumen-y-liquidez"],
    relatedTerms: ["psicologia", "fomo", "revenge-trading", "disciplina", "racha-perdedora"],
    sections: [
      {
        kind: "paragraph",
        text: "Los errores de principiante tienen algo en común: se concentran en el exceso de operación, los cambios de método y el desconocimiento de los costes. Ninguno se corrige con información de una etiqueta.",
      },
      {
        kind: "heading",
        id: "catalogo",
        text: "El catálogo",
      },
      {
        kind: "list",
        items: [
          "Sobreoperar: abrir más operaciones de las que permite el plan.",
          "Mover el stop: alejarlo para no aceptar la pérdida.",
          "Ignorar el spread: descubrir después que el coste era el 40 % del objetivo.",
          "Operar sin plan: entrar «porque parece que baja».",
          "Esperar señales: el gráfico solo confirma lo que ya ha ocurrido.",
          "Depositar más de lo que puedes perder: cambia la manera de decidir.",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Cómo evitar la mayoría",
        text: "Reduce el riesgo por operación al 1 %, opera un solo activo muy líquido y anota cada operación en un registro. Con eso desaparecen la mayoría de los errores de la lista.",
      },
      { kind: "ad" },
      {
        kind: "heading",
        id: "cierre",
        text: "Lo que separa a quien mejora",
      },
      {
        kind: "paragraph",
        text: "No es el número de operaciones, ni el acierto de la última semana. Es tener un procedimiento escrito, respetarlo durante meses y registrar los resultados. El resto son detalles de ejecución.",
      },
    ],
  },
];

export const postMap = new Map(allPosts.map((post) => [post.slug, post]));

export function getPost(slug: string | undefined): BlogPost | undefined {
  return slug ? postMap.get(slug) : undefined;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allPosts.filter((post) => post.category === category);
}