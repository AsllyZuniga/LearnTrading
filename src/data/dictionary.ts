import type { TermEntry } from "~/types";

/**
 * Diccionario de términos. Las definiciones son educativas y evitan cualquier
 * promesa de resultado. `relatedLessons` referencia slugs de lecciones.
 */
export const allTerms: TermEntry[] = [
  {
    slug: "accion",
    term: "Acción",
    aliases: ["stock", "equity"],
    category: "financiero",
    short: "Fracción de propiedad de una empresa que cotiza en bolsa.",
    definition:
      "Una acción es un valor que representa una parte del capital de una empresa. Quien la posee es accionista y tiene derechos económicos, como recibir dividendos, y, en muchos casos, derecho de voto.",
    extended:
      "En el mercado secundario, cuando compras una acción a otro inversor, el dinero va a ese vendedor y no a la empresa. La empresa solo recibe el importe cuando emite acciones nuevas, por ejemplo en una salida a bolsa. El precio refleja las expectativas sobre el negocio, no el beneficio ya comprobado, y por eso puede caer incluso cuando la empresa va bien.",
    example: {
      title: "Precio y capitalización",
      text: "Con 100 millones de acciones en circulación y una cotización de 20, la capitalización bursátil es 2.000 millones. Cambia el precio a 30 y la capitalización pasa a 3.000 millones, aunque el negocio sea idéntico.",
    },
    seeAlso: ["dividendo", "capitalizacion", "broker", "orden-a-mercado"],
    relatedLessons: ["que-son-las-acciones", "que-es-un-mercado-financiero"],
  },
  {
    slug: "volatilidad",
    term: "Volatilidad",
    aliases: ["vol"],
    category: "graficos",
    short: "Magnitud de las oscilaciones de precio de un activo en un periodo.",
    definition:
      "La volatilidad mide cuánto se mueve el precio. Un activo con volatilidad alta registra movimientos amplios en poco tiempo; uno con volatilidad baja se mueve poco y de forma más regular.",
    extended:
      "Se mide con la desviación típica de los retornos, y suele expresarse en porcentaje. Tiene dos efectos importantes: cuanto mayor es la volatilidad, más lejos hay que colocar el stop loss para que el ruido no lo active, y menor es el tamaño de posición que se puede arriesgar con el mismo capital. El ATR es un indicador habitual para estimarla.",
    example: {
      title: "El mismo riesgo, distinta distancia",
      text: "Con 1.000 de capital y un riesgo del 1 %, arriesgas 10. Si el stop está a 1 unidad de distancia, puedes tomar 10 unidades; si está a 5, solo 2. La volatilidad, no el capital, decide el tamaño.",
    },
    seeAlso: ["atr", "stop-loss", "apalancamiento", "drawdown"],
    relatedLessons: ["que-son-las-criptomonedas", "precio-volumen-y-liquidez"],
  },
  {
    slug: "liquidez",
    term: "Liquidez",
    aliases: ["liquididad"],
    category: "mercados",
    short: "Facilidad para comprar o vender un activo sin mover su precio.",
    definition:
      "La liquidez describe con qué rapidez se puede convertir un activo en dinero y viceversa, sin provocar un movimiento significativo del precio.",
    extended:
      "Un activo líquido tiene mucho volumen, muchos participantes y un spread estrecho. Un activo ilíquido se mueve mucho con órdenes pequeñas y puede no haber comprador en el nivel del stop loss, de modo que la ejecución real sea peor que la prevista. Es la razón principal por la que conviene operar en pares muy negociados.",
    example: {
      title: "Salida imposible",
      text: "Pides 1.000 unidades de un activo poco negotiado. Solo hay 50 disponibles al precio que quieres, así que el resto se ejecuta muy por debajo. El riesgo real de la operación era mayor del que asumías.",
    },
    seeAlso: ["spread", "volumen", "profundidad", "slippage"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-son-las-criptomonedas"],
  },
  {
    slug: "volumen",
    term: "Volumen",
    aliases: ["volume", "vol"],
    category: "graficos",
    short: "Cantidad de unidades negociadas durante un periodo.",
    definition:
      "El volumen es el número de contratos, acciones o unidades que se han cambiado de manos. Se usa como referencia para saber si un movimiento de precio tiene respaldo detrás.",
    extended:
      "Un precio que sube con mucho volumen sugiere una participación amplia; el mismo precio con volumen bajo puede ser un movimiento aislado. En Forex no existe un volumen centralizado, así que cada plataforma muestra únicamente el volumen de sus propios clientes. Fuera del mercado de divisas, el volumen suele estar publicado por los mercados.",
    seeAlso: ["liquidez", "volatilidad", "precio"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-son-las-acciones"],
  },
  {
    slug: "precio",
    term: "Precio",
    category: "mercados",
    short: "Valor al que se pacta cada operación en un mercado.",
    definition:
      "El precio es la cantidad de dinero que se paga por una unidad de un activo en una operación concreta. Nadie lo fija de forma directa: emerge del cruce entre órdenes de compra y de venta.",
    extended:
      "Cuando hay más órdenes de compra que de venta al mismo precio, los compradores compiten y el precio sube hasta equilibrarse. Cada operación tiene siempre un comprador y un vendedor, así que en el conjunto del mercado el dinero solo cambia de manos. El precio de un activo refleja expectativas, no el valor intrínseco comprobado.",
    seeAlso: ["bid", "ask", "spread", "volumen"],
    relatedLessons: ["que-es-un-mercado-financiero", "que-son-las-acciones"],
  },
  {
    slug: "mercado",
    term: "Mercado",
    aliases: ["mercado-financiero"],
    category: "mercados",
    short: "Lugar donde se compran y venden activos, con reglas y participantes definidos.",
    definition:
      "Un mercado financiero es el conjunto de normas, participantes e infraestructura que permiten pactar operaciones sobre un activo. El precio no lo decide nadie de forma individual: emerge del cruce entre órdenes.",
    extended:
      "En un mercado centralizado, como la bolsa, hay un punto único de encuentro de órdenes. En Forex, cada bróker monta su propio mercado con su propio precio, y por eso los precios de un bróker a otro pueden diferir ligeramente. Saber qué tipo de mercado estás mirando explica por qué dos gráficos del mismo activo no siempre coinciden.",
    seeAlso: ["precio", "liquidez", "broker", "orden-a-mercado"],
    relatedLessons: ["que-es-un-mercado-financiero", "que-es-un-broker"],
  },
  {
    slug: "spread",
    term: "Spread",
    aliases: ["horquilla"],
    category: "broker",
    short: "Diferencia entre el precio de compra (ask) y el de venta (bid).",
    definition:
      "El spread es la diferencia entre el precio al que puedes comprar (ask) y al que puedes vender (bid). Es el coste mínimo de entrar y salir de una posición, y se paga incluso si la operación termina en pérdidas.",
    extended:
      "En pares muy negociados puede ser de 0,1 pips; en activos poco líquidos puede superar los 50 pips. Como el spread se aplica en cada operación, multiplicado por muchas operaciones se convierte en uno de los costes más difíciles de detectar. Como referencia: si tu objetivo por operación son 20 pips y pagas 4 pips, has consumido el 20 % de tu recorrido.",
    example: {
      title: "El coste invisible",
      text: "Operar 100 veces al mes con 2 pips de spread son 200 pips pagados, ganes o pierdas. Con un objetivo de 20 pips por operación, eso equivale a 10 operaciones completas.",
    },
    seeAlso: ["bid", "ask", "comision", "liquidez"],
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
  },
  {
    slug: "broker",
    term: "Broker",
    aliases: ["corredor", "intermediario"],
    category: "broker",
    short: "Empresa que ejecuta tus órdenes en un mercado a cambio de un coste.",
    definition:
      "Un broker es el intermediario que conecta tus órdenes con el mercado. No te presta capital ni decide por ti: cobra un coste por ejecutar.",
    extended:
      "Algunos brokers son solo la plataforma que te da acceso al mercado, y otros son además contraparte, es decir, te compran o te venden directamente. En el primer caso dependes de la liquidez del mercado; en el segundo, del precio que te ofrezca el broker. Conviene comprobar si está regulado, qué estados financieros publica y cómo son sus costes.",
    seeAlso: ["comision", "spread", "margen", "regulacion"],
    relatedLessons: ["que-es-un-broker", "que-es-un-mercado-financiero"],
  },
  {
    slug: "bid",
    term: "Bid",
    aliases: ["precio de compra del mercado"],
    category: "broker",
    short: "Precio más alto que el mercado paga por tu compra.",
    definition:
      "El bid es la mejor oferta de compra disponible: el precio al que puedes vender en ese instante.",
    extended:
      "Cuando miras un gráfico, el bid es la referencia de la oferta. El ask está siempre por encima, y la distancia entre ambos es el spread. En una operación larga entras al ask y sales al bid, así que pagas el spread al entrar y al salir.",
    seeAlso: ["ask", "spread", "orden-a-mercado", "comision"],
    relatedLessons: ["que-es-un-broker", "que-significa-comprar-y-vender"],
  },
  {
    slug: "ask",
    term: "Ask",
    aliases: ["precio de venta del mercado"],
    category: "broker",
    short: "Precio más bajo que el mercado exige por tu venta.",
    definition:
      "El ask es la mejor oferta de venta disponible: el precio al que puedes comprar en ese instante.",
    extended:
      "Siempre está por encima del bid. En una operación corta, vendes al bid y compras al ask para cerrar, así que también pagas el spread dos veces, una en cada extremo.",
    seeAlso: ["bid", "spread", "orden-limitada", "slippage"],
    relatedLessons: ["que-es-un-broker", "que-significa-comprar-y-vender"],
  },
  {
    slug: "orden-a-mercado",
    term: "Orden a mercado",
    aliases: ["market order"],
    category: "operaciones",
    short: "Orden que se ejecuta al mejor precio disponible de inmediato.",
    definition:
      "Una orden a mercado prioriza la ejecución: se ejecuta al mejor precio disponible en ese instante, sin garantía de precio concreto.",
    extended:
      "Es útil cuando la prioridad es entrar o salir sí o sí, por ejemplo al activar un stop loss. En activos poco líquidos puede ejecutarse bastante peor del precio que viste en pantalla, porque no hay volumen suficiente en ese nivel. Por eso muchas entradas usan órdenes limitadas.",
    seeAlso: ["orden-limitada", "spread", "slippage", "stop-loss"],
    relatedLessons: ["que-significa-comprar-y-vender", "precio-volumen-y-liquidez"],
  },
  {
    slug: "orden-limitada",
    term: "Orden limitada",
    aliases: ["limit order"],
    category: "operaciones",
    short: "Orden que solo se ejecuta en tu precio o mejor.",
    definition:
      "Una orden limitada fija un precio máximo de compra o un precio mínimo de venta. Solo se ejecuta si el mercado alcanza ese nivel.",
    extended:
      "Prioriza el precio sobre la ejecución. El riesgo es que la orden no se ejecute nunca, sobre todo si el precio se aleja en la dirección contraria. También sirve para colocar un stop loss o un take profit: cuando se cumple el nivel, se convierten en órdenes a mercado.",
    seeAlso: ["orden-a-mercado", "stop-loss", "take-profit", "spread"],
    relatedLessons: ["que-significa-comprar-y-vender", "que-es-un-mercado-financiero"],
  },
  {
    slug: "stop-loss",
    term: "Stop loss",
    aliases: ["stop", "SL"],
    category: "gestion-riesgo",
    short: "Orden que cierra la posición cuando el precio alcanza un nivel adverso.",
    definition:
      "El stop loss es una orden que se activa automáticamente para limitar la pérdida de una posición. Define dónde se acepta que la hipótesis de la operación era incorrecta.",
    extended:
      "Es la parte más importante de la gestión de riesgo: convierte una pérdida ilimitada en una pérdida conocida y cuantificada. En una operación larga se coloca por debajo de la entrada; en una corta, por encima. En mercados poco líquidos puede ejecutarse peor de lo previsto, porque el precio puede saltar el nivel sin contraparte. Nunca debe usarse como forma de mover el error a otra distancia.",
    seeAlso: ["take-profit", "riesgo", "atr", "orden-limitada"],
    relatedLessons: ["que-significa-comprar-y-vender", "precio-volumen-y-liquidez"],
  },
  {
    slug: "take-profit",
    term: "Take profit",
    aliases: ["TP", "objetivo"],
    category: "operaciones",
    short: "Orden que cierra la posición al alcanzar el beneficio previsto.",
    definition:
      "El take profit es una orden que cierra la posición automáticamente cuando el precio alcanza el objetivo fijado de antemano.",
    extended:
      "Colocarlo es una decisión de disciplina: evita depender del momento exacto en que aparecesces una tentación de cerrar. La relación entre la distancia al objetivo y la distancia al stop loss determina el porcentaje de acierto necesario para no perder dinero.",
    example: {
      title: "Punto de equilibrio",
      text: "Si arriesgas 2 unidades y el objetivo está a 6, ganas 3 veces lo que pierdes: necesitas acertar el 25 % de las operaciones para no perder dinero.",
    },
    seeAlso: ["stop-loss", "riesgo-beneficio", "break-even", "orden-limitada"],
    relatedLessons: ["que-es-el-trading", "que-significa-comprar-y-vender"],
  },
  {
    slug: "apalancamiento",
    term: "Apalancamiento",
    aliases: ["leverage", "alavancaje"],
    category: "gestion-riesgo",
    short: "Operar con más capital del que tienes, prestado por el broker.",
    definition:
      "El apalancamiento permite controlar una posición mayor que tu capital, porque el broker bloquea una cantidad como garantía. Multiplica tanto el beneficio como la pérdida.",
    extended:
      "El error más común es pensar que el apalancamiento es el riesgo. No lo es: el riesgo lo determina el tamaño de posición. Con un apalancamiento de 50 puedes usar una posición mucho mayor de la que necesitarías, pero si calculas el tamaño con la misma regla de riesgo del 1 %, la pérdida real se mantiene en ese 1 %. El apalancamiento solo amplifica lo que ya hayas decidido.",
    example: {
      title: "Misma regla, distinto resultado",
      text: "Con 1.000 de capital y riesgo del 1 %, arriesgas 10 tanto con apalancamiento 1 como con 50. La diferencia aparece cuando alguien con apalancamiento alto abre una posición 50 veces mayor de lo que permite su riesgo.",
    },
    seeAlso: ["margen", "stop-loss", "riesgo", "volatilidad"],
    relatedLessons: ["que-es-forex", "que-es-un-broker"],
  },
  {
    slug: "margen",
    term: "Margen",
    category: "broker",
    short: "Garantía que bloquea el broker para permitir una operación apalancada.",
    definition:
      "El margen es la parte de tu capital que queda bloqueada como garantía mientras la posición está abierta.",
    extended:
      "Si el margen se agota, el broker cierra la posición automáticamente, aunque el mercado se mueva a tu favor después. Esa es la principal diferencia entre riesgo controlado y liquidación forzada. Muchos brokers permiten cambiar el nivel de margen requerido, y eso altera el resultado real de la estrategia.",
    seeAlso: ["apalancamiento", "liquidacion", "stop-loss", "broker"],
    relatedLessons: ["que-es-forex", "que-es-un-broker"],
  },
  {
    slug: "lote",
    term: "Lote",
    aliases: ["lot", "lotaje"],
    category: "operaciones",
    short: "Unidad de medida del tamaño de una posición en Forex.",
    definition:
      "El lote es la unidad estándar de tamaño en el mercado de divisas. Un lote estándar representa 100.000 unidades de la divisa base.",
    extended:
      "Un mini lote son 10.000 unidades y un micro lote 1.000. El tamaño del lote determina cuánto dinero mueve el precio: con un lote estándar de EUR/USD, cada pip de movimiento vale aproximadamente 10 dólares de tu cuenta. Por eso el tamaño se elige a partir del riesgo, y no al revés.",
    seeAlso: ["pip", "apalancamiento", "stop-loss", "spread"],
    relatedLessons: ["que-es-forex", "que-es-un-broker"],
  },
  {
    slug: "pip",
    term: "Pip",
    aliases: ["punto"],
    category: "operaciones",
    short: "Unidad de medida del movimiento de precio en Forex.",
    definition:
      "En pares con dólar como divisa de referencia, un pip es la cuarta cifra decimal del precio. Un movimiento de 1,0850 a 1,0860 son 10 pips.",
    extended:
      "El valor de un pip depende del tamaño de la posición: con un lote estándar de EUR/USD, un pip vale unos 10 dólares. Por eso el spread y el coste se comparan siempre en pips, y no en puntos de índice.",
    seeAlso: ["lote", "spread", "comision", "forex"],
    relatedLessons: ["que-es-forex", "que-es-un-broker"],
  },
  {
    slug: "forex",
    term: "Forex",
    aliases: ["divisas", "mercado de divisas"],
    category: "mercados",
    short: "Mercado de cambio de divisas, el más líquido del mundo por volumen.",
    definition:
      "El mercado de divisas es donde se cambian monedas. Se comercia siempre en pares: si compras EUR/USD, estás comprando euros y vendiendo dólares al mismo tiempo.",
    extended:
      "No existe un volumen centralizado: cada broker reporta su propia actividad, así que los volúmenes de distintas plataformas no son comparables. Opera prácticamente 24 horas, de lunes a viernes, y su actividad se organiza por sesiones: Asia, Londres y Nueva York. La combinación de apalancamiento y baja liquidez en horas asiáticas es una fuente clásica de pérdidas por stop.",
    seeAlso: ["par", "pip", "lote", "sesion", "broker"],
    relatedLessons: ["que-es-forex", "que-es-un-mercado-financiero"],
  },
  {
    slug: "par",
    term: "Par de divisas",
    aliases: ["currency pair"],
    category: "mercados",
    short: "Combinación de dos divisas en la que se expresa una cotización.",
    definition:
      "Un par relaciona dos divisas: la primera es la divisa base y la segunda la divisa de cotización. En EUR/USD, el precio indica cuántos dólares hacen falta para un euro.",
    extended:
      "Cuando compras un par, estás comprando la divisa base y vendiendo la de cotización. Al revés si vendes. En los pares con dólar como divisa de cotización, el pip se calcula en la cuarta cifra decimal; si el dólar está en la base, se calcula en la segunda.",
    seeAlso: ["forex", "pip", "bid", "ask"],
    relatedLessons: ["que-es-forex", "precio-volumen-y-liquidez"],
  },
  {
    slug: "sesion",
    term: "Sesión de mercado",
    aliases: ["session"],
    category: "mercados",
    short: "Periodo horario en el que un mercado concentra su actividad.",
    definition:
      "Una sesión es una franja horaria con una actividad característica. En Forex se distinguen Asia, Londres y Nueva York.",
    extended:
      "Cada sesión tiene su propio volumen y su propio carácter. El solapamiento entre Londres y Nueva York concentra la mayor parte del volumen diario, y también los movimientos más Bruscos. Operar con la volatilidad característica de Asia suele implicar spreads más amplios y movimientos menos marcados.",
    seeAlso: ["forex", "volumen", "liquidez", "spread"],
    relatedLessons: ["que-es-forex", "que-es-un-mercado-financiero"],
  },
  {
    slug: "soporte",
    term: "Soporte",
    aliases: ["support"],
    category: "graficos",
    short: "Zona de precio donde el suelo se ha formado por demanda previa.",
    definition:
      "Un soporte es una zona donde el precio ha rebotado varias veces, señal de que hubo compradores dispuestos a entrar en ese nivel.",
    extended:
      "Un soporte no es una línea exacta sino una zona. Sirve como referencia para colocar stops fuera de la zona, no exactamente encima, porque la liquidez suele ejecutarse antes. Cuando el soporte se rompe con volumen suele convertirse en resistencia, un comportamiento conocido como ruptura.",
    seeAlso: ["resistencia", "ruptura", "pip", "atr"],
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
  },
  {
    slug: "resistencia",
    term: "Resistencia",
    aliases: ["resistance"],
    category: "graficos",
    short: "Zona de precio donde el techo se ha formado por oferta previa.",
    definition:
      "Una resistencia es una zona donde el precio se ha detenido varias veces, señal de que hubo vendedores dispuestos a entrar.",
    extended:
      "Como el soporte, es una zona y no una línea exacta. Las resistencias relevantes suelen ser las que se han respetado varias veces y en las que ha habido más rechazos. Un nivel que se rompe y se retesta desde el otro lado deja de ser resistencia y pasa a actuar como soporte.",
    seeAlso: ["soporte", "ruptura", "atr", "pip"],
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
  },
  {
    slug: "tendencia",
    term: "Tendencia",
    aliases: ["trend"],
    category: "graficos",
    short: "Dirección dominante del precio durante un periodo.",
    definition:
      "Una tendencia es el sesgo del movimiento del precio: al alza, a la baja o lateral.",
    extended:
      "Se identifica con máximos y mínimos crecientes en una tendencia alcista, y decrecientes en una bajista. El objetivo de analizar un gráfico no es adivinar el movimiento siguiente, sino describir el sesgo actual y esperar que se mantenga. Operar contra una tendencia clara exige una justificación concreta.",
    seeAlso: ["soporte", "resistencia", "rsi", "macd"],
    relatedLessons: ["que-es-un-mercado-financiero", "que-significa-comprar-y-vender"],
  },
  {
    slug: "rsi",
    term: "RSI",
    aliases: ["índice de fuerza relativa"],
    category: "indicadores",
    short: "Indicador de momentum que mide la fuerza del movimiento reciente.",
    definition:
      "El RSI (Relative Strength Index) compara las subidas y las bajdas de los últimos periodos y oscila entre 0 y 100. Por encima de 70 se considera sobrecompra; por debajo de 30, sobreventa.",
    extended:
      "Es un indicador de momentum, no de dirección. En mercados con tendencia fuerte puede permanecer en zona de sobrecompra durante semanas mientras el precio sigue subiendo, por lo que interpretarlo como una señal de venta automática es un error frecuente. Un uso más prudente es buscar divergencias entre precio y RSI como aviso de debilidad.",
    seeAlso: ["macd", "divergencia", "sobrecompra", "atr"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "macd",
    term: "MACD",
    aliases: ["convergencia y divergencia de medias móviles"],
    category: "indicadores",
    short: "Indicador que compara dos medias móviles y su línea de señal.",
    definition:
      "El MACD es la diferencia entre una media rápida y una lenta, con una línea de señal y un histograma que muestra la distancia entre ambas.",
    extended:
      "Cuando el MACD cruza por encima de su señal, el momentum comprador toma el relevo; cuando cruza por debajo, ocurre lo contrario. Igual que el resto de indicadores, llega tarde: señala lo que ya ha ocurrido en el precio.",
    seeAlso: ["rsi", "medias-moviles", "divergencia", "tendencia"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "medias-moviles",
    term: "Medias móviles",
    aliases: ["moving average", "sma", "ema"],
    category: "indicadores",
    short: "Promedio del precio de los últimos periodos, útil para suavizar el ruido.",
    definition:
      "Una media móvil es el promedio de los precios de las últimas X velas. La SMA usa una media simple; la EMA pondera más los precios recientes.",
    extended:
      "Sirve para suavizar el ruido y para medir la dirección del sesgo. Cuando el precio está por encima de la media, la tendencia suele ser alcista; por debajo, bajista. El inconveniente es el retardo: en un giro brusco, la media señala el cambio después de que ya ha ocurrido.",
    seeAlso: ["macd", "rsi", "tendencia", "cruce"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "atr",
    term: "ATR",
    aliases: ["rango medio real"],
    category: "indicadores",
    short: "Indicador de volatilidad que mide el rango medio de las velas.",
    definition:
      "El ATR (Average True Range) es la media del rango máximo de cada periodo, y se usa como medida de volatilidad y para dimensionar stops.",
    extended:
      "No tiene dirección: solo mide cuánto se mueve el activo. Se utiliza para colocar el stop a una distancia proporcional al movimiento normal, en lugar de a una cantidad fija de pips que resulta arbitraria en cada situación.",
    example: {
      title: "Stop proporcional",
      text: "Con un ATR de 20 pips, un stop a 1 ATR deja margen para el ruido; un stop a 0,3 ATR se activa con facilidad.",
    },
    seeAlso: ["volatilidad", "stop-loss", "rsi", "tendencia"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-son-las-criptomonedas"],
  },
  {
    slug: "soporte-resistencia",
    term: "Soporte y resistencia",
    aliases: ["niveles"],
    category: "graficos",
    short: "Zonas de precio que se repiten por concentración de órdenes.",
    definition:
      "Son zonas donde el precio ha reaccionado varias veces por la concentración de órdenes de compra o de venta.",
    extended:
      "Se dibujan como zonas, no como líneas exactas. Las decisiones prácticas: colocar stops fuera de la zona, no dentro; y recordar que un nivel roto puede cambiar de función.",
    seeAlso: ["soporte", "resistencia", "ruptura", "pip"],
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
  },
  {
    slug: "ruptura",
    term: "Ruptura",
    aliases: ["breakout", "soplo"],
    category: "graficos",
    short: "Salida del precio de un rango o de un nivel relevante.",
    definition:
      "Una ruptura es el movimiento por el que el precio supera un máximo o un mínimo previo y continúa en esa dirección.",
    extended:
      "No todas las rupturas son válidas: la clave está en el volumen que acompaña y en el seguimiento posterior. Una ruptura sin volumen y con cierre rápido dentro del rango anterior suele ser un falso rompimiento. La gestión de una ruptura consiste en entrar tras confirmación y con un stop bajo el nivel roto.",
    seeAlso: ["soporte", "resistencia", "volumen", "atr"],
    relatedLessons: ["que-es-un-broker", "que-es-un-mercado-financiero"],
  },
  {
    slug: "temporalidad",
    term: "Temporalidad",
    aliases: ["timeframe", "marco temporal"],
    category: "graficos",
    short: "Intervalo de tiempo que representa cada vela.",
    definition:
      "La temporalidad es el periodo que cubre cada vela: 1 minuto, 5 minutos, 1 hora, 4 horas, 1 día.",
    extended:
      "Determina el ruido que se ve y la duración de la operación. En temporalidades muy cortas hay más operaciones, más costes y más influencia del ruido; en temporalidades largas, menos señales pero más contexto. Elegir temporalidad antes que estrategia es un error: cada sistema tiene la suya.",
    seeAlso: ["swing", "scalping", "volatilidad", "tendencia"],
    relatedLessons: ["que-es-un-broker", "que-es-un-mercado-financiero"],
  },
  {
    slug: "riesgo",
    term: "Riesgo",
    aliases: ["risk"],
    category: "gestion-riesgo",
    short: "Probabilidad de perder y magnitud de esa pérdida.",
    definition:
      "El riesgo es la incertidumbre sobre el resultado. En trading se mide casi siempre en dinero: cuánto puedes perder si la operación va en contra.",
    extended:
      "La unidad correcta es el riesgo por operación, no el tamaño de la posición. Una regla conservadora arriesga entre el 0,5 % y el 2 % del capital en cada operación. Con una relación riesgo/beneficio de 1:2, esa disciplina es lo que permite sobrevivir a una racha de pérdidas sin tener que abandonar el sistema.",
    seeAlso: ["stop-loss", "drawdown", "apalancamiento", "posicion"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "drawdown",
    term: "Drawdown",
    aliases: ["caída máxima"],
    category: "gestion-riesgo",
    short: "Descenso máximo desde un máximo hasta el siguiente mínimo.",
    definition:
      "El drawdown es la mayor caída del valor de una cuenta respecto a su máximo anterior. Se expresa como porcentaje.",
    extended:
      "Mide lo que se siente, que es distinto de lo que se calcula. Un drawdown del 20 % exige un 25 % de recuperación; uno del 50 %, un 100 %. Por eso limitar el riesgo por operación importa más que la rentabilidad media: el drawdown es lo que obliga a abandonar un sistema.",
    example: {
      title: "La matemática de recuperar",
      text: "Si pierdes un 10 %, necesitas un 11,1 % de ganancia para volver al punto de partida. Si pierdes un 50 %, necesitas un 100 %.",
    },
    seeAlso: ["riesgo", "racha-perdedora", "stop-loss", "psicologia"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "posicion",
    term: "Posición",
    aliases: ["exposición"],
    category: "operaciones",
    short: "Conjunto de unidades de un activo que tienes compradas o vendidas.",
    definition:
      "Una posición es tu exposición actual en un mercado. Se puede cerrar total o parcialmente en cualquier momento.",
    extended:
      "Cuando pasas de largo a corto, en realidad cierras la posición y abres la contraria: son dos decisiones separadas. El cierre se hace con la orden contraria, y en un activo largo, cerrar significa vender.",
    seeAlso: ["long", "short", "lote", "margen"],
    relatedLessons: ["que-significa-comprar-y-vender", "que-es-un-broker"],
  },
  {
    slug: "long",
    term: "Largo",
    aliases: ["posición larga", "compra"],
    category: "operaciones",
    short: "Posición que gana si el precio sube.",
    definition:
      "Una posición larga es aquella en la que compras un activo con la intención de venderlo más caro.",
    extended:
      "El stop loss va por debajo de la entrada y el objetivo por encima. El beneficio se calcula como salida menos entrada, multiplicado por el tamaño de la posición.",
    seeAlso: ["short", "stop-loss", "take-profit", "posicion"],
    relatedLessons: ["que-significa-comprar-y-vender", "que-es-forex"],
  },
  {
    slug: "short",
    term: "Corto",
    aliases: ["posición corta", "venta en corto"],
    category: "operaciones",
    short: "Posición que gana si el precio baja.",
    definition:
      "Una posición corta es aquella en la que vendes un activo con la intención de comprarlo más barato después.",
    extended:
      "Requiere que exista alguien que te preste el activo para venderlo, algo habitual en Forex, en futuros y en acciones con margen. El stop loss se coloca por encima de la entrada y el objetivo por debajo.",
    seeAlso: ["long", "stop-loss", "take-profit", "margen"],
    relatedLessons: ["que-significa-comprar-y-vender", "que-es-forex"],
  },
  {
    slug: "break-even",
    term: "Punto de equilibrio",
    aliases: ["breakeven"],
    category: "operaciones",
    short: "Precio o porcentaje de acierto en el que no se gana ni se pierde.",
    definition:
      "El punto de equilibrio es el nivel en el que el resultado neto de una estrategia es cero.",
    extended:
      "Con una relación riesgo/beneficio de 1:2, el punto de equilibrio está en el 33,3 % de aciertos. Mover el stop a break-even demasiado pronto protege el capital, pero reduce la tasa de acierto y puede convertir una estrategia ganadora en perdedora.",
    seeAlso: ["stop-loss", "take-profit", "riesgo-beneficio", "racha-perdedora"],
    relatedLessons: ["que-es-el-trading", "que-significa-comprar-y-vender"],
  },
  {
    slug: "riesgo-beneficio",
    term: "Relación riesgo/beneficio",
    aliases: ["risk reward", "R:R", "ratio"],
    category: "operaciones",
    short: "Proporción entre lo que puedes ganar y lo que puedes perder.",
    definition:
      "La relación riesgo/beneficio compara la distancia al objetivo con la distancia al stop loss.",
    extended:
      "Determina el porcentaje de acierto necesario: con 1:2 necesitas acertar el 33 % de las veces para no perder dinero; con 1:1, el 50 %. Permite evaluar si una estrategia tiene sentido antes de ejecutarla, con números en lugar de intenciones.",
    example: {
      title: "Qué exige cada ratio",
      text: "1:1 → 50 % de acierto. 1:2 → 33 %. 1:3 → 25 %. Un ratio peor exige más aciertos, no menos.",
    },
    seeAlso: ["break-even", "stop-loss", "take-profit", "estrategia"],
    relatedLessons: ["que-es-el-trading", "que-es-un-broker"],
  },
  {
    slug: "estrategia",
    term: "Estrategia",
    aliases: ["system", "sistema"],
    category: "estrategias",
    short: "Conjunto de reglas definidas para entrar, salir y controlar el riesgo.",
    definition:
      "Una estrategia es un procedimiento replicable: condiciones de entrada, de salida y un tamaño de posición.",
    extended:
      "Lo que separa una estrategia de una intención casual es que se puede describir por escrito y probar con datos. Si no puedes explicar cuándo entras, cuándo sales y cuánto arriesgas, no tienes una estrategia: tienes una intención.",
    seeAlso: ["backtesting", "margen", "psicologia", "trading"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "trading",
    term: "Trading",
    category: "fundamentos",
    short: "Comprar y vender activos financieros con intención de obtener beneficio.",
    definition:
      "El trading consiste en tomar decisiones sobre el precio de un activo para obtener un resultado distinto del movimiento del mercado.",
    extended:
      "Se diferencia de la inversión, que se centra en el valor a largo plazo de un negocio. En trading el horizonte va de minutos a días, y el resultado depende de la gestión del riesgo tanto como del acierto en la dirección.",
    seeAlso: ["inversion", "estrategia", "broker", "riesgo"],
    relatedLessons: ["que-es-el-trading", "que-es-forex"],
  },
  {
    slug: "inversion",
    term: "Inversión",
    category: "financiero",
    short: "Comprar un activo con un horizonte de largo plazo.",
    definition:
      "Invertir significa adquirir un activo y mantenerlo durante meses o años, con la mirada puesta en el negocio.",
    extended:
      "El criterio es el valor del negocio a lo largo del tiempo, no el movimiento del precio mañana. No es mejor ni peor que el trading: son objetivos distintos, y mezclarlos suele producir decisiones incoherentes.",
    seeAlso: ["accion", "trading", "dividendo", "diversificacion"],
    relatedLessons: ["que-son-las-acciones", "que-es-el-trading"],
  },
  {
    slug: "dividendo",
    term: "Dividendo",
    aliases: ["reparto de beneficios"],
    category: "financiero",
    short: "Parte del beneficio de una empresa que se reparte entre los accionistas.",
    definition:
      "El dividendo es la parte del beneficio que una empresa decide repartir en lugar de reinvertir.",
    extended:
      "No todas las empresas lo reparten: muchas reinvierten para crecer, y eso puede generar más valor a largo plazo. Un dividendo alto tampoco es mejor por sí solo; importa si se sostiene con el negocio.",
    seeAlso: ["accion", "inversion", "capitalizacion"],
    relatedLessons: ["que-son-las-acciones"],
  },
  {
    slug: "capitalizacion",
    term: "Capitalización bursátil",
    aliases: ["market cap"],
    category: "financiero",
    short: "Valor de mercado total de una empresa: precio por acción × acciones en circulación.",
    definition:
      "La capitalización bursátil es el precio de la acción multiplicado por el número de acciones en circulación.",
    extended:
      "Es la forma correcta de comparar empresas de tamaños distintos. Comparar solo el precio por acción no dice nada: una acción de 5 euros con mil millones de acciones vale más que una de 500 euros con mil acciones.",
    seeAlso: ["accion", "dividendo", "volumen"],
    relatedLessons: ["que-son-las-acciones", "precio-volumen-y-liquidez"],
  },
  {
    slug: "diversificacion",
    term: "Diversificación",
    aliases: ["cartera diversificada"],
    category: "gestion-riesgo",
    short: "Repartir la exposición entre activos y mercados distintos.",
    definition:
      "La diversificación reduce el impacto de un evento concreto al distribuir el capital entre posiciones no correlacionadas.",
    extended:
      "Su límite es la correlación: en una crisis muchos activos caen a la vez. Diversificar demasiado, por otra parte, dificulta el control del riesgo. Se combina con el control del riesgo por operación: ningún peso aislado debe poder determinar el resultado de la cuenta.",
    seeAlso: ["riesgo", "correlacion", "drawdown", "capital"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-el-trading"],
  },
  {
    slug: "capital",
    term: "Capital",
    aliases: ["cuenta", "patrimonio"],
    category: "gestion-riesgo",
    short: "Dinero disponible para operar.",
    definition:
      "El capital es el saldo con el que operas y la referencia para calcular el riesgo de cada operación.",
    extended:
      "Operar con dinero que no puedes permitirte perder cambia la manera de decidir. Por eso conviene separar el capital de la operativa del resto de tus finanzas y fijar por escrito un riesgo máximo por operación.",
    seeAlso: ["riesgo", "drawdown", "posicion", "diversificacion"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "comision",
    term: "Comisión",
    aliases: ["fee", "tarifa"],
    category: "broker",
    short: "Coste fijo que cobra el broker por operación.",
    definition:
      "La comisión es una cantidad que el broker cobra por cada operación, independientemente del resultado.",
    extended:
      "En Forex suele cobrarse por lote y turno. Junto con el spread determina el coste total de una estrategia: si el coste por operación es de 10 unidades y tu objetivo es de 15, estás jugando con un margen muy estrecho.",
    seeAlso: ["spread", "broker", "lote", "slippage"],
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
  },
  {
    slug: "slippage",
    term: "Slippage",
    aliases: ["deslizamiento"],
    category: "broker",
    short: "Diferencia entre el precio esperado y el precio real de ejecución.",
    definition:
      "El slippage es la distancia entre el precio que esperabas al enviar la orden y el precio al que se ejecuta realmente.",
    extended:
      "Aparece sobre todo con órdenes a mercado y en mercados poco líquidos, o durante noticias importantes. En un stop loss puede ampliar la pérdida: el precio salta el nivel y se ejecuta al siguiente precio disponible.",
    seeAlso: ["spread", "orden-a-mercado", "liquidez", "stop-loss"],
    relatedLessons: ["que-es-un-broker", "precio-volumen-y-liquidez"],
  },
  {
    slug: "psicologia",
    term: "Psicología del trading",
    aliases: ["disciplina", "mentalidad"],
    category: "psicologia",
    short: "Conjunto de hábitos y emociones que afectan a las decisiones.",
    definition:
      "La psicología del trading study cómo el miedo, la codicia y la impulsiveidad afectan al cumplimiento de las reglas.",
    extended:
      "Los datos de las operaciones muestran que la mayor parte del resultado depende de si se siguen las reglas, no de si la entrada era buena. Reducir el tamaño de la posición y tener un plan escrito son decisiones de psicología tanto como de riesgo.",
    seeAlso: ["fomo", "estrategia", "drawdown", "disciplina"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "fomo",
    term: "FOMO",
    aliases: ["miedo a perderse la oportunidad"],
    category: "psicologia",
    short: "Urgencia por entrar antes de que el precio se vaya.",
    definition:
      "El FOMO es el impulso de operar por ansiedad de perderse un movimiento, no por una condición de entrada.",
    extended:
      "Se nota más después de ver subir un activo. Las contramedidas prácticas son esperar a la sesión correspondiente, tener niveles escritos y aceptar que no toda oportunidad es una buena oportunidad.",
    seeAlso: ["psicologia", "estrategia", "revenge-trading", "disciplina"],
    relatedLessons: ["que-es-el-trading", "que-es-un-broker"],
  },
  {
    slug: "revenge-trading",
    term: "Operar para recuperar",
    aliases: ["revenge trading"],
    category: "psicologia",
    short: "Intentar recuperar una pérdida aumentando el riesgo.",
    definition:
      "Es aumentar el tamaño de la operación o la frecuencia justo después de una pérdida.",
    extended:
      "Es la causa más común de ruina del principiante. El daño real no es la pérdida inicial, sino el cambio de método después de ella. La regla que protege: tras una pérdida, el tamaño vuelve al tamaño original o baja.",
    seeAlso: ["fomo", "psicologia", "riesgo", "drawdown"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "disciplina",
    term: "Disciplina",
    category: "psicologia",
    short: "Cumplir las reglas aunque el resultado cercano incomode.",
    definition:
      "La disciplina es la capacidad de ejecutar el plan exactamente igual en una buena racha y en una mala.",
    extended:
      "Se construye con reglas escritas, tamaño de posición fijo y un registro de operaciones. El registro es la herramienta más eficaz: permite ver si los errores vienen de la estrategia o de la ejecución.",
    seeAlso: ["psicologia", "estrategia", "fomo", "registro"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "registro",
    term: "Registro de operaciones",
    aliases: ["journal", "diario de trading"],
    category: "psicologia",
    short: "Bitácora de cada operación tomada y del motivo de cada decisión.",
    definition:
      "El registro de operaciones documenta entrada, salida, riesgo, resultado y el motivo de la decisión.",
    extended:
      "Sin registro no hay forma de saber si un sistema funciona o si se está improvisando. Con unas pocas decenas de operaciones anotadas se empieza a ver con claridad dónde está el problema: en la estrategia, en el tamaño o en la disciplina.",
    seeAlso: ["disciplina", "backtesting", "estrategia", "psicologia"],
    relatedLessons: ["que-es-el-trading", "que-es-un-broker"],
  },
  {
    slug: "backtesting",
    term: "Backtesting",
    aliases: ["prueba histórica"],
    category: "estrategias",
    short: "Probar una estrategia con datos históricos antes de usarla en real.",
    definition:
      "El backtesting consiste en aplicar las reglas de una estrategia a datos pasados para ver cómo habría evolucionado.",
    extended:
      "Sirve para descartar estrategias antes de arriesgar capital, y para entender la distribución de resultados. Tiene límites: los datos pasados no garantizan el futuro, y una estrategia muy optimizada puede funcionar solo con los datos concretos que se usaron para ajustarla.",
    seeAlso: ["estrategia", "registro", "overfitting", "swing"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "overfitting",
    term: "Sobreajuste",
    aliases: ["optimización excesiva"],
    category: "estrategias",
    short: "Ajustar una estrategia hasta que encaje demasiado bien con los datos usados.",
    definition:
      "El sobreajuste ocurre al añadir tantas condiciones a un sistema que reproduce el pasado con precisión y falla en cualquier otro escenario.",
    extended:
      "Las señales de alarma son muchas reglas, parámetros muy exactos y resultados-frente a datos que el sistema nunca había visto. La solución es sencilla: reservar una parte de los datos para validar y comprobar que el resultado se mantiene.",
    seeAlso: ["backtesting", "estrategia", "registro"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "swing",
    term: "Swing trading",
    aliases: ["operación swing"],
    category: "estrategias",
    short: "Operaciones que se mantienen varios días.",
    definition:
      "El swing trading es una operativa de corto y medio plazo, con posiciones abiertas de días a semanas.",
    extended:
      "Exige menos operaciones que el intradía y, por tanto, paga menos costes, pero mantiene el capital expuesto durante más tiempo. Suele combinarse con el análisis técnico y con marcos temporales de 4 horas o diarios.",
    seeAlso: ["scalping", "temporalidad", "comision", "backtesting"],
    relatedLessons: ["que-es-el-trading", "que-es-un-broker"],
  },
  {
    slug: "scalping",
    term: "Scalping",
    aliases: ["operación de muy corto plazo"],
    category: "estrategias",
    short: "Operaciones muy cortas que buscan beneficios pequeños y repetidos.",
    definition:
      "El scalping son operaciones que duran segundos o pocos minutos, buscando muchos beneficios pequeños.",
    extended:
      "El coste es el factor decisivo: si el spread es de 3 pips y el objetivo son 5 pips, la mitad del recorrido se va en costes. Necesita mucha ejecución, baja latencia y un riesgo muy pequeño por operación.",
    seeAlso: ["spread", "comision", "temporalidad", "lote"],
    relatedLessons: ["que-es-el-trading", "que-es-un-broker"],
  },
  {
    slug: "criptomoneda",
    term: "Criptomoneda",
    aliases: ["cripto", "token", "altcoin"],
    category: "mercados",
    short: "Activo digital basado en una red descentralizada de registros.",
    definition:
      "Una criptomoneda es un activo digital cuyo registro de transacciones se mantiene en una red de servidores denominados nodos.",
    extended:
      "Bitcoin fue la primera; todo lo demás suele llamarse altcoins o tokens. Operan 24 horas, con volatilidad alta, regulación variable y liquidez desigual entre activos. Todo lo que se enseña aquí con datos cripto es ficticio y con fines educativos.",
    seeAlso: ["bitcoin", "blockchain", "liquidez", "volatilidad"],
    relatedLessons: ["que-son-las-criptomonedas", "que-es-forex"],
  },
  {
    slug: "bitcoin",
    term: "Bitcoin",
    aliases: ["BTC"],
    category: "mercados",
    short: "Primera criptomoneda, creada en 2009 y sin entidad central.",
    definition:
      "Bitcoin es una criptomoneda creada en 2009 por una persona o grupo no identificado bajo el seudónimo Satoshi Nakamoto.",
    extended:
      "Su diseño limita la emisión total y registra las transacciones en una cadena pública de bloques. No está regulado como un activo financiero tradicional, lo que implica riesgos distintos a los de una acción: no hay protección del accionista en el mismo sentido.",
    seeAlso: ["criptomoneda", "blockchain", "liquidez", "volatilidad"],
    relatedLessons: ["que-son-las-criptomonedas", "que-es-forex"],
  },
  {
    slug: "blockchain",
    term: "Blockchain",
    aliases: ["cadena de bloques", "tecnología blockchain"],
    category: "mercados",
    short: "Registro digital distribuido al que solo se puede añadir información.",
    definition:
      "Una blockchain es un libro de cuentas repartido entre miles de nodos, donde cada bloque referencia el anterior mediante un identificador criptográfico.",
    extended:
      "Modificar un bloque antiguo obligaría a recalcular todos los siguientes, lo que hace el fraude muy caro. No es una tecnología de trading en sí misma: es la infraestructura que permite que las transacciones cripto funcionen sin un intermediario central.",
    seeAlso: ["criptomoneda", "bitcoin", "liquidez"],
    relatedLessons: ["que-son-las-criptomonedas", "que-es-forex"],
  },
  {
    slug: "regulacion",
    term: "Regulación",
    aliases: ["supervisión"],
    category: "broker",
    short: "Conjunto de normas que supervisan a intermediarios y mercados.",
    definition:
      "La regulación es el marco de supervisión que obliga a los intermediarios a publicar información y proteger al cliente.",
    extended:
      "Comprobar la jurisdicción de un broker es una tarea básica: un intermediario no regulado puede operar en condiciones que tú no puedes verificar. La regulación no elimina el riesgo de mercado, pero hace verificables una parte importante de la información.",
    seeAlso: ["broker", "comision", "capital"],
    relatedLessons: ["que-es-un-broker", "que-es-un-mercado-financiero"],
  },
  {
    slug: "correlacion",
    term: "Correlación",
    category: "gestion-riesgo",
    short: "Grado en que dos activos se mueven en la misma dirección.",
    definition:
      "La correlación mide hasta qué punto el movimiento de un activo coincide con el de otro.",
    extended:
      "Sirve para construir carteras: combinar activos poco correlacionados reduce el riesgo total. En un mercado de tensión, muchas correlaciones suben a uno, y una cartera aparentemente diversificada empieza a caer a la vez.",
    seeAlso: ["diversificacion", "riesgo", "drawdown"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-el-trading"],
  },
  {
    slug: "sobrecompra",
    term: "Sobrecompra y sobreventa",
    aliases: ["zonas de sobrecompra", "sobreventa"],
    category: "indicadores",
    short: "Zonas de un indicador que señalan agotamiento, no dirección.",
    definition:
      "La sobrecompra indica que un activo ha subido mucho en poco tiempo; la sobreventa, que ha bajado mucho.",
    extended:
      "En un mercado con tendencia fuerte, estas zonas pueden mantenerse mucho tiempo, por lo que no son señales de entrada ni de salida por sí solas. Sirven como contexto junto a la estructura del precio.",
    seeAlso: ["rsi", "tendencia", "atr"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "divergencia",
    term: "Divergencia",
    aliases: ["divergencia de indicadores"],
    category: "indicadores",
    short: "Desacuerdo entre lo que hace el precio y lo que marca un indicador.",
    definition:
      "Una divergencia aparece cuando el precio hace un nuevo extremo y el indicador no lo confirma.",
    extended:
      "Una divergencia bajista es una señal de aviso de debilidad, no de venta inmediata. La confirmación llega con la ruptura del nivel estructural, no antes.",
    seeAlso: ["rsi", "macd", "tendencia"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "cruce",
    term: "Cruce de medias",
    aliases: ["golden cross", "death cross"],
    category: "indicadores",
    short: "Intersección de dos medias móviles de distinta velocidad.",
    definition:
      "Un cruce ocurre cuando una media rápida pasa por encima de una lenta, o al revés.",
    extended:
      "Se utiliza como confirmación de tendencia, nunca como señal aislada: los cruces ocurren con retraso y con frecuencia en mercados laterales.",
    seeAlso: ["medias-moviles", "macd", "tendencia"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "profundidad",
    term: "Profundidad de mercado",
    aliases: ["book de órdenes", "order book"],
    category: "mercados",
    short: "Conjunto de órdenes de compra y venta pendientes en un momento.",
    definition:
      "La profundidad muestra cuántas órdenes hay pendientes alrededor del precio actual, tanto por encima como por debajo.",
    extended:
      "Un libro con muchas órdenes grandes cerca del precio indica un mercado profundo. Si hay pocos niveles con volumen, una orden pequeña puede mover el precio más de lo previsto.",
    seeAlso: ["liquidez", "volumen", "spread", "orden-limitada"],
    relatedLessons: ["precio-volumen-y-liquidez", "que-es-un-mercado-financiero"],
  },
  {
    slug: "racha-perdedora",
    term: "Racha perdedora",
    aliases: ["serie de pérdidas", "streak"],
    category: "gestion-riesgo",
    short: "Serie consecutiva de operaciones con resultado negativo.",
    definition:
      "Una racha perdedora es una sucesión de pérdidas. Es inevitable: en cualquier sistema con expectativa positiva aparecen.",
    extended:
      "Lo importante es su frecuencia. En un sistema con 40 % de aciertos, es normal encadenar cinco pérdidas seguidas. Lo que no es normal es aumentar el tamaño para recuperarlas, y eso es lo que convierte una racha en una ruina.",
    seeAlso: ["drawdown", "riesgo", "revenge-trading", "psicologia"],
    relatedLessons: ["que-es-el-trading", "precio-volumen-y-liquidez"],
  },
  {
    slug: "liquidacion",
    term: "Liquidación",
    aliases: ["margin call", "cierre forzado"],
    category: "gestion-riesgo",
    short: "Cierre automático de la posición cuando el margen es insuficiente.",
    definition:
      "La liquidación es el cierre que ejecuta el broker cuando las pérdidas superan el margen bloqueado.",
    extended:
      "Puede ocurrir incluso con una posición acertada a medio plazo. Se evita con un tamaño de posición calculado sobre el riesgo y con un nivel de stop suficiente para la volatilidad del activo.",
    seeAlso: ["margen", "apalancamiento", "stop-loss", "atr"],
    relatedLessons: ["que-es-forex", "que-es-un-broker"],
  },
];

export const termMap = new Map(allTerms.map((term) => [term.slug, term]));

export function getTerm(slug: string | undefined): TermEntry | undefined {
  return slug ? termMap.get(slug) : undefined;
}

export function searchTerms(query: string): TermEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return allTerms;
  return allTerms.filter((term) => {
    const haystack = [term.term, term.short, term.definition, ...(term.aliases ?? [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function getTermsByCategory(): Map<string, TermEntry[]> {
  const grouped = new Map<string, TermEntry[]>();
  allTerms.forEach((term) => {
    const list = grouped.get(term.category) ?? [];
    list.push(term);
    grouped.set(term.category, list);
  });
  return grouped;
}