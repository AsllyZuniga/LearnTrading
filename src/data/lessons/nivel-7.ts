import type { Lesson } from "~/types";
import { buildPreset, buildScenario } from "../charts/presets";

export const level7Lessons: Lesson[] = [
  {
    slug: "fomo",
    levelId: 7,
    order: 1,
    title: "FOMO: el miedo a quedarse fuera",
    shortTitle: "FOMO",
    category: "psicologia",
    tags: ["fomo", "psicología", "emociones", "disciplina"],
    summary:
      "Qué es el FOMO, por qué aparece siempre después de que el precio se mueve y qué reglas concretas lo neutralizan antes de arruinar una operación.",
    keywords: ["qué es el fomo", "miedo a quedarse fuera", "entrar tarde", "fomo y disciplina"],
    readMinutes: 6,
    updatedAt: "2026-03-02",
    explanation: {
      intro:
        "FOMO es la sigla del miedo a quedarse fuera. En la práctica es la sensación urgente de que un movimiento se escapa y de que, si no entras ya, te perderás algo que todos los demás están aprovechando.",
      paragraphs: [
        "El FOMO casi nunca aparece con el mercado tranquilo: aparece cuando el precio ya ha subido varias velas seguidas, cuando los comentarios de otras personas repiten el mismo movimiento y cuando tu propia cuenta muestra lo que habrías ganado si hubieras entrado antes. Ese momento es el peor posible para decidir.",
        "La razón es directa. Cuando el precio ya ha recorrido buena parte del impulso, quien entra después asume una entrada más cara, un stop más lejos y una relación riesgo/beneficio mucho peor que la de quien planificó la operación con antelación. El FOMO no te hace llegar tarde por casualidad: te hace llegar tarde por definición.",
        "El mismo mecanismo funciona al revés. Si el precio cae con fuerza y sientes que tienes que vender antes de que empeore, estás persiguiendo el precio por incomodidad, no por análisis. En ambos sentidos la decisión nace de una molestia que quieres quitar cuanto antes.",
        "La defensa no es la fuerza de voluntad, sino la estructura: una lista de condiciones de entrada escrita con antelación, un número máximo de operaciones al día y una hora fija de revisión. Si la idea no cumplía las condiciones antes de mirar el gráfico, tampoco las cumple ahora.",
      ],
      bullets: [
        "Si la entrada se te ocurre cuando el precio ya corrió, es una reacción, no una señal.",
        "Perseguir el movimiento significa pagar el peor precio de toda la subida.",
        "Un límite de operaciones por sesión corta la espiral antes de que arranque.",
        "Mirar el precio sin plan es la forma más rápida de fabricar FOMO.",
      ],
    },
    technical: {
      term: "FOMO y sesgo de acción",
      body: "El FOMO es la versión emocional del sesgo de acción: la sensación de que hacer algo es mejor que no hacer nada. El cerebro penaliza más el perderse una oportunidad que el esperar en silencio, por eso la urgencia aparece justamente cuando el precio ya se ha movido. Medir la entrada contra una regla escrita convierte esa sensación en un sí o un no verificable.",
      formula: "Entrada válida = Criterio + Nivel + Momento (definidos antes de mirar el precio)",
      gloss:
        "Si no puedes señalar en el gráfico qué regla se cumple, no hay entrada aunque el precio esté corriendo.",
    },
    example: {
      title: "El precio que sube sin ti",
      narrative:
        "Un activo ficticio cierra cinco sesiones en verde y se coloca en 118 después de estar en 100. Ves el movimiento, notas que otros ya entraron y compras en 118 con la sensación de que aún queda recorrido. Lo que no ves es que tu entrada ya no tiene niveles: el soporte relevante quedó atrás, así que improvisas un stop en 114 y un objetivo en 126. Dos sesiones después el precio corrige hasta 114 y la posición se cierra en pérdida.",
      bullets: [
        "Entrada improvisada: 118, tras 18 unidades de subida.",
        "Stop sin fundamento técnico: 114.",
        "La operación no estaba en ningún plan previo.",
      ],
    },
    chart: buildPreset("tendencia-alcista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 118,
      stopLoss: 114,
      takeProfit: 126,
      outcome: "sl",
      narrative:
        "Compra en 118 después de una subida ya consumida, con stop en 114 y objetivo en 126. El riesgo es de 4 unidades y el recorrido de 8, pero la entrada llega tarde: el soporte de origen está lejos y cualquier corrección normal alcanza el stop. Con un capital de 3.000 y un riesgo del 1 %, el tamaño se calcula igual que en cualquier otra operación.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Entrar porque el precio ya subió mucho",
        why: "El movimiento que despierta tu atención ya está pagado: el recorrido fácil suele estar detrás.",
        fix: "Espera el retroceso hacia tu nivel o no operes esa idea en absoluto.",
      },
      {
        mistake: "Revisar el precio continuamente sin tarea pendiente",
        why: "Cuando miras el gráfico sin plan, cualquier vela larga se convierte en una razón para actuar.",
        fix: "Fija dos o tres horas de revisión al día y trabaja fuera de ellas.",
      },
      {
        mistake: "Agrandar la posición para aprovechar «lo que queda»",
        why: "Cuanto más tarde entras, más tamaño necesitas para que el movimiento te sirva, y el riesgo se dispara.",
        fix: "Mantén siempre el mismo tamaño calculado por riesgo, aunque el precio te tente.",
      },
    ],
    related: ["checklist-antes-de-operar", "riesgo-por-operacion", "disciplina-y-plan"],
    glossary: ["psicologia", "fomo", "disciplina", "riesgo"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuándo aparece el FOMO con más fuerza?",
        options: [
          "Cuando el mercado lleva varias sesiones sin movimiento",
          "Cuando el precio ya se ha movido y tú no has entrado",
          "Cuando el broker reduce el spread",
          "Cuando escribes tu plan de operaciones",
        ],
        correct: 1,
        explanation:
          "El FOMO se activa al ver un movimiento hecho y al compararte con quien ya entró, no con el mercado tranquilo.",
      },
      {
        id: "q2",
        question: "¿Por qué una entrada por FOMO suele tener peor relación riesgo/beneficio?",
        options: [
          "Porque el broker cobra más comisión en esos casos",
          "Porque entras más lejos de los niveles y el recorrido favorable restante es menor",
          "Porque el gráfico cambia de color",
          "Porque el stop deja de funcionar",
        ],
        correct: 1,
        explanation:
          "Al perseguir el precio te alejas de soportes y referencias, así que arriesgas más por un recorrido menor.",
      },
      {
        id: "q3",
        question: "¿Cuál es la defensa más eficaz contra el FOMO?",
        options: [
          "Mirar el gráfico hasta convencerte de que hay señal",
          "Tener condiciones de entrada escritas antes de abrir la plataforma",
          "Aumentar el tamaño para que valga la pena",
          "Operar solo los días con más noticias",
        ],
        correct: 1,
        explanation:
          "Una regla previa convierte la urgencia en una comprobación: o se cumple la condición o no hay entrada.",
      },
      {
        id: "q4",
        question: "El FOMO también puede aparecer en sentido contrario. ¿Cómo?",
        options: [
          "Sintiendo que hay que vender ya antes de que la caída empeore",
          "Sintiendo que hay que esperar el cierre del mes",
          "Sintiendo que hay que diversificar más",
          "Sintiendo que hay que estudiar más teoría",
        ],
        correct: 0,
        explanation:
          "Es el mismo mecanismo mirando hacia abajo: la prisa por actuar para aliviar una incomodidad, no por una señal.",
      },
    ],
  },

  {
    slug: "miedo-y-codicia",
    levelId: 7,
    order: 2,
    title: "Miedo y codicia: las dos caras de la emoción",
    shortTitle: "Miedo y codicia",
    category: "psicologia",
    tags: ["miedo", "codicia", "psicología", "emociones"],
    summary:
      "Cómo el miedo y la codicia distorsionan la lectura del gráfico y en qué decisiones concretas se traducen: cerrar pronto la ganancia y dejar correr la pérdida.",
    keywords: ["miedo y codicia", "emociones en trading", "aversion a la perdida", "gestión emocional"],
    readMinutes: 7,
    updatedAt: "2026-03-03",
    explanation: {
      intro:
        "Miedo y codicia son las dos emociones que más veces contaminan una decisión de trading. Aparecen en momentos opuestos y producen errores opuestos, pero comparten la misma raíz: la decisión se toma para sentirse mejor, no para respetar el plan.",
      paragraphs: [
        "El miedo se activa cuando hay una ganancia en pantalla. La idea de perder lo ya obtenido pesa más que la esperanza de ganar más, así que el operador cierra la posición en cuanto ve beneficio y se queda fuera del recorrido que su propio plan anticipaba. Es el error contrario al FOMO: entrar tarde por miedo a perderse y salir pronto por miedo a devolver.",
        "La codicia se activa en la dirección contraria. Cuando la operación va en contra, el operador borra mentalmente el objetivo y empieza a negociar con el mercado: «solo que suba un poco y salgo». El resultado habitual es que la pérdida pequeña se convierte en una pérdida grande justo donde el stop original habría cortado el daño.",
        "Los dos errores se retroalimentan. Quien cierra pronto las ganancias necesita operaciones muy acertadas para salir adelante, y quien deja correr las pérdidas destruye en una sola operación lo que varias ganadoras habrían aportado. El balance es negativo aunque la tasa de aciertos sea respetable.",
        "La solución no es eliminar las emociones, que no desaparecen, sino sacarlas del momento de la decisión: tamaños de posición que no asusten, stops escritos antes de entrar y objetivos que se tocan sin consultar el ánimo del día.",
      ],
      bullets: [
        "Miedo → cerrar la ganancia antes del objetivo previsto.",
        "Codicia → borrar el stop y esperar que el precio se recupere.",
        "Ambos errores se miden comparando la decisión tomada con la regla escrita.",
        "El tamaño demasiado grande amplifica cualquiera de los dos.",
      ],
    },
    technical: {
      term: "Aversión a la pérdida",
      body: "La aversión a la pérdida describe que una pérdida duele proporcionalmente más de lo que alegra una ganancia equivalente. En el gráfico se traduce en dos comportamientos medibles: cerrar posiciones rentables por encima de lo planeado y ampliar posiciones perdedoras por debajo del plan. Registrar ambas desviaciones en el diario permite verlas con números en lugar de con recuerdos.",
      formula: "Miedo → cierre temprano | Codicia → pérdida ampliada",
      gloss:
        "Ninguna de las dos decide sobre el gráfico: deciden sobre tu comodidad, y el mercado no negocia con ella.",
    },
    example: {
      title: "Una operación contada dos veces",
      narrative:
        "Compras un activo ficticio en 100 con stop en 97 y objetivo en 110. A las pocas velas el precio marca 104 y cierras con ganancia porque temes devolverla. Poco después el precio llega a 110 sin ti. En la siguiente operación, compras en 100 de nuevo, el precio baja a 96 y no cierras porque esperas que se recupere: el plan habría salido en 97 con 3 unidades de pérdida y acabas saliendo en 92 con 8.",
      bullets: [
        "Ganancia cerrada en 104 frente a un objetivo de 110.",
        "Pérdida ampliada hasta 92 frente a un stop de 97.",
        "Dos decisiones emocionales cuestan más que varios aciertos.",
      ],
    },
    chart: buildPreset("tendencia-bajista"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 97,
      takeProfit: 110,
      outcome: "open",
      narrative:
        "Posición compradora abierta en 100 con stop en 97 y objetivo en 110. Con el precio en 103, el miedo propone cerrar ya y la codicia propone subir el objetivo. El plan ya había decidido antes de entrar: el cierre lo pone el stop o el objetivo, no el ánimo de la tarde.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Cerrar la ganancia en cuanto aparece un beneficio cómodo",
        why: "Salir antes del objetivo obliga a acertar muchas más veces para compensar las pérdidas que siguen llegando.",
        fix: "Deja trabajar al plan y mueve el stop a break-even solo si tu regla lo permite.",
      },
      {
        mistake: "Borrar el stop después de entrar",
        why: "Es la marca exacta de la codicia: la operación deja de medirse y empieza a negociarse.",
        fix: "Si no aceptas la pérdida del stop, no aceptes la operación: usa un tamaño menor.",
      },
      {
        mistake: "Culpar al mercado de lo que decidió la emoción",
        why: "El mercado no rompió tu plan: tu plan se rompió en el momento en que lo cambiaste a mitad de camino.",
        fix: "Anota la decisión y la regla original, y compáralas la misma noche en el diario.",
      },
    ],
    related: ["stop-loss", "tamano-de-posicion", "rachas-de-perdidas", "disciplina-y-plan"],
    glossary: ["psicologia", "disciplina", "riesgo", "drawdown"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuál es el error típico del miedo durante una operación rentable?",
        options: [
          "Ampliar la posición para ganar más",
          "Cerrar antes de tiempo para no devolver la ganancia",
          "Dejar el stop donde estaba",
          "Esperar al objetivo del plan",
        ],
        correct: 1,
        explanation:
          "El miedo a perder lo obtenido provoca cierres tempranos que dejan el recorrido del plan sin recorrer.",
      },
      {
        id: "q2",
        question: "¿Cómo se manifiesta la codicia en una operación perdedora?",
        options: [
          "Cortando la pérdida en el stop previsto",
          "Reduciendo el tamaño de la posición",
          "Borrando el stop y esperando que se recupere",
          "Anotando la operación en el diario",
        ],
        correct: 2,
        explanation:
          "La codicia borra el límite de pérdida y convierte una pérdida planificada en una pérdida mucho mayor.",
      },
      {
        id: "q3",
        question: "¿Por qué cerrar pronto las ganancias y alargar las pérdidas es tan dañino?",
        options: [
          "Porque el broker lo penaliza",
          "Porque recorta las ganancias y multiplica las pérdidas, dejando la cuenta en números rojos con buena tasa de aciertos",
          "Porque impide usar indicadores",
          "Porque obliga a operar con apalancamiento",
        ],
        correct: 1,
        explanation:
          "Ese patrón invierte la relación riesgo/beneficio media y puede dejar la cuenta en negativo aun acertando la mayoría.",
      },
      {
        id: "q4",
        question: "La aversión a la pérdida, en la práctica, se traduce en:",
        options: [
          "Respetar siempre el stop y el objetivo",
          "Sentir más fuerte una pérdida que una ganancia del mismo tamaño",
          "Calcular mejor el tamaño de posición",
          "Operar con menos frecuencia",
        ],
        correct: 1,
        explanation:
          "Duele más perder 10 que alegrar ganar 10, y esa asimetría es la que empuja a los errores emocionales.",
      },
    ],
  },

  {
    slug: "revenge-trading",
    levelId: 7,
    order: 3,
    title: "Revenge trading: operar para vengarse",
    shortTitle: "Revenge trading",
    category: "psicologia",
    tags: ["revenge trading", "racha", "emociones", "límites"],
    summary:
      "Qué es el revenge trading, en qué consiste el ciclo que encadena operaciones perdedoras y cuál es el límite de parada que lo corta de raíz.",
    keywords: ["revenge trading", "operar para recuperar", "racha de perdidas", "parar de operar"],
    readMinutes: 6,
    updatedAt: "2026-03-04",
    explanation: {
      intro:
        "Revenge trading es abrir operaciones con el único objetivo de recuperar lo acabas de perder. La decisión no nace de una señal del gráfico: nace de una herida, y por eso cuanto más rápido entra la siguiente operación, peor suele ser.",
      paragraphs: [
        "El ciclo tiene forma conocida. Primero una pérdida respetable, después la sensación de que el mercado te debe algo, luego una entrada sin plan hecha en minutos y, al final, una segunda pérdida más grande que la primera porque el tamaño crece para «recuperar de una vez». En pocas sesiones, una mala operación se convierte en una mala semana.",
        "Lo grave no es la primera pérdida, que es parte normal de cualquier estrategia con racha perdedora. Lo grave es la segunda y la tercera, que se suman sin criterio y sin riesgo definido. Cada operación vengativa se toma con más prisa, con menos análisis y con un tamaño mayor que el anterior.",
        "El límite de parada es la única defensa que funciona cuando la emoción ya está encendida, porque se decide en un momento de calma. Un número concreto de pérdidas seguidas, una pérdida diaria máxima o dos operaciones al día: cualquiera de estas reglas corta el ciclo antes de que se dispare.",
        "Cuando la regla se cumple, la sesión termina. No se negocia con ella, no se espera «una última». Apagar la plataforma es parte del plan, igual que el stop lo es de la operación.",
      ],
      bullets: [
        "La primera pérdida es información; la segunda suele ser revancha.",
        "El tamaño crece operación tras operación para recuperar más rápido.",
        "El límite de parada se fija antes de empezar el día, en calma.",
        "Si se alcanza el límite, la sesión se cierra sin discusión.",
      ],
    },
    technical: {
      term: "Límite de pérdidas de sesión",
      body: "Un límite de pérdidas de sesión es una regla fija que termina la operativa del día cuando se alcanza. Puede expresarse en número de operaciones perdedoras consecutivas, en porcentaje del capital del día o en ambas. Al estar definida de antemano, su cumplimiento es automático: no requiere valorar el mercado ni discutir la última operación.",
      formula: "Pérdida repetida = Pérdida única × Número de repeticiones",
      gloss:
        "Tres operaciones vengativas de 2 unidades equivalen a una pérdida de 6 unidades decidida sin análisis.",
    },
    example: {
      title: "Una sesión que se pudre en diez minutos",
      narrative:
        "Pierdes 400 en tu primera operación porque el precio rompió un nivel que habías marcado mal. En vez de cerrar la plataforma, abres otra a los cuatro minutos con el doble de tamaño para recuperar. Esa tampoco funciona. A la tercera entrada ya llevas 1.100 de pérdida en un día que empezó con un riesgo previsto de 300. Ninguna de las tres entradas tenía condiciones de plan: las tres tenían una cuenta por rescatar.",
      bullets: [
        "Riesgo previsto para el día: 300.",
        "Pérdida real al cerrar: 1.100.",
        "Tres entradas sin condición de entrada verificable.",
      ],
    },
    chart: buildScenario("revenge-trading", {
      entry: 100,
      stopLoss: 96,
      takeProfit: 108,
      outcome: "sl",
      caption: "Ejemplo ficticio: la operación de revancha alcanza el stop",
      description:
        "Una entrada tomada para recuperar una pérdida anterior respeta el stop y suman una segunda pérdida. El daño no lo hace el mercado: lo hace operar sin plan.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 96,
      takeProfit: 108,
      outcome: "sl",
      narrative:
        "Segunda operación del día, abierta para compensar la anterior. Entrada en 100, stop en 96 y objetivo en 108: riesgo de 4 y recorrido de 8. El stop se alcanza y la pérdida del día sube. Con un límite diario de dos operaciones, la sesión habría terminado antes de abrirla.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Abrir otra operación en los minutos siguientes a una pérdida",
        why: "La decisión se toma con la emoción en su punto más alto y sin tiempo para comprobar ninguna condición.",
        fix: "Aplica la regla de las cinco minutos: plataforma cerrada y paseo antes de cualquier revisión.",
      },
      {
        mistake: "Aumentar el tamaño para recuperar de una vez",
        why: "Multiplica el daño si la operación falla y obliga a acertar de inmediato bajo presión.",
        fix: "Mantén el tamaño fijo por riesgo y acepta que la recuperación, si llega, llegará en varias operaciones.",
      },
      {
        mistake: "No fijar un límite diario de pérdidas",
        why: "Sin límite, cada operación vengativa se justifica con la anterior y la sesión no tiene punto final.",
        fix: "Escribe hoy tu límite diario y respétalo aunque solo hayas hecho una operación.",
      },
    ],
    related: ["riesgo-por-operacion", "rachas-de-perdidas", "limites-de-perdida", "disciplina-y-plan"],
    glossary: ["psicologia", "revenge-trading", "racha-perdedora", "disciplina", "riesgo"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué define a una operación de revenge trading?",
        options: [
          "Que se hace en una temporalidad pequeña",
          "Que se abre para recuperar una pérdida anterior, no por una señal del plan",
          "Que usa apalancamiento máximo",
          "Que se cierra el mismo día",
        ],
        correct: 1,
        explanation:
          "El motivo de la entrada es la pérdida anterior; si no hay señal planificada, no es una operación sino una reacción.",
      },
      {
        id: "q2",
        question: "¿Cuál es la consecuencia habitual del ciclo?",
        options: [
          "Una recuperación completa de lo perdido",
          "Pérdidas sucesivas cada vez mayores en pocas sesiones",
          "Una mejora progresiva del plan",
          "Menos operaciones al día",
        ],
        correct: 1,
        explanation:
          "El tamaño crece y el análisis se acorta, así que una mala racha emocional suele ampliarse muy rápido.",
      },
      {
        id: "q3",
        question: "¿Por qué el límite de parada debe decidirse antes de la sesión?",
        options: [
          "Para cumplir con el broker",
          "Porque en el momento de la pérdida ya no se decide con criterio",
          "Porque el mercado lo exige",
          "Para tener menos operaciones que anotar",
        ],
        correct: 1,
        explanation:
          "La regla escrita en calma es la única que resiste el momento caliente: después ya solo hay negociación.",
      },
      {
        id: "q4",
        question: "Si se alcanza el límite diario de pérdidas, ¿qué corresponde hacer?",
        options: [
          "Seguir hasta recuperar",
          "Reducir el tamaño y continuar",
          "Cerrar la sesión y revisar el plan fuera del mercado",
          "Duplicar el tamaño para compensar",
        ],
        correct: 2,
        explanation:
          "La sesión termina. La revisión se hace después, con el mercado fuera y sin posibilidad de nuevas entradas.",
      },
    ],
  },

  {
    slug: "sobreoperar",
    levelId: 7,
    order: 4,
    title: "Sobreoperar: la necesidad de hacer algo",
    shortTitle: "Sobreoperar",
    category: "psicologia",
    tags: ["sobreoperar", "frecuencia", "costes", "disciplina"],
    summary:
      "Por qué se abren demasiadas operaciones por aburrimiento o necesidad de acción, cómo se detecta contando y cómo se reduce sin perder foco.",
    keywords: ["sobreoperar", "operar demasiado", "frecuencia de operaciones", "costes del trading"],
    readMinutes: 6,
    updatedAt: "2026-03-05",
    explanation: {
      intro:
        "Sobreoperar es abrir más operaciones de las que tu plan contempla. No ocurre porque aparezcan muchas señales, sino porque la quietud resulta incómoda y la plataforma está a dos clics de distancia.",
      paragraphs: [
        "El aburrimiento es una causa tan frecuente como la emoción. Después de un par de horas sin movimiento, cualquier vela que se alarga parece una invitación. La operación que se abría «para no estar parado» no tiene nivel, ni stop razonable, ni tamaño calculado, y sin embargo ocupa espacio en el registro y dinero en la cuenta.",
        "El primer efecto son los costes. Cada operación paga spread o comisión, y esas salidas se acumulan de forma lineal mientras los beneficios no lo hacen. Un mes con muchas operaciones puede terminar en números rojos aunque la tasa de aciertos sea buena, simplemente porque la suma de costes se comió el margen.",
        "El segundo efecto es la dispersión. Con muchas posiciones abiertas a la vez, ninguna se vigila bien: el stop se amplía, el objetivo se mueve y las decisiones se apilan. La atención es un recurso limitado y sobreoperar lo reparte hasta dejarlo en migajas.",
        "La forma de detectarlo es contar. Apunta en tu diario el número de operaciones por día y compáralo con las que tu plan permite. La forma de reducirlo es subir el listón: lista de condiciones obligatorias, mínimo de operaciones planificadas con horas de antelación y un máximo diario escrito.",
      ],
      bullets: [
        "Cuenta las operaciones de la semana antes de juzgar sus resultados.",
        "Los costes crecen con la frecuencia, no con el acierto.",
        "Cada operación extra roba atención a las que ya están abiertas.",
        "Un máximo diario escrito vale más que la intención de «hoy no exagero».",
      ],
    },
    technical: {
      term: "Coste total de frecuencia",
      body: "El coste total de frecuencia es la suma de spread, comisiones y cualquier otro cargo de todas las operaciones realizadas en un periodo. Se calcula multiplicando el número de operaciones por su coste medio. Al compararlo con el beneficio bruto del periodo aparece el margen neto real, que es la cifra que efectivamente llega a la cuenta.",
      formula: "Coste total = Número de operaciones × Coste por operación",
      gloss:
        "Diez operaciones al mes con 2 de coste cada una suman 20: el plan necesita superar esa cifra antes de hablar de beneficios.",
    },
    example: {
      title: "El mes con muchas operaciones y pocas ideas",
      narrative:
        "Durante un mes ficticio se anotan 180 operaciones con un coste medio de 2. En otro mes se anotan 45 con el mismo coste. El primer mes paga 360 solo en costes y el segundo 90. Si las ideas buenas del mes fueron 30 en ambos casos, la diferencia de 270 sale directamente del resultado, sin que haya cambiado ni una sola señal.",
      bullets: [
        "180 operaciones × 2 = 360 de coste.",
        "45 operaciones × 2 = 90 de coste.",
        "Diferencia: 270 que no decide ninguna señal.",
      ],
    },
    chart: buildPreset("escala-forex"),
    tradeExample: {
      instrument: "Par de divisas ficticio",
      direction: "short",
      entry: 1.085,
      stopLoss: 1.087,
      takeProfit: 1.08,
      outcome: "sl",
      narrative:
        "Venta improvisada en 1,0850 con stop en 1,0870 y objetivo en 1,0800: 20 pips de riesgo por 50 de recorrido. La operación nació de la quietud, no de un nivel, y el stop se alcanza. Repetida diez veces al mes, el mismo impulso convierte la comisión en un gasto fijo considerable.",
      capital: 2_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Abrir una operación para «hacer algo» mientras el mercado no da señales",
        why: "La operación sin condiciones no tiene ventaja y sí tiene coste, así que solo resta.",
        fix: "Si tu lista de condiciones no se cumple, no hay operación: anota la idea y espera.",
      },
      {
        mistake: "Medir el mes solo por el resultado neto",
        why: "Un resultado positivo puede esconder una frecuencia tan alta que cualquier racha la destruya.",
        fix: "Revisa también operaciones por día, coste total y cumplimiento del plan.",
      },
      {
        mistake: "Operar varias temporalidades y varios mercados sin horario definido",
        why: "La superficie de decisión se multiplica y con ella la tentación de entrar en cualquiera de ellos.",
        fix: "Elige un mercado, una temporalidad y dos horas de revisión hasta consolidar la rutina.",
      },
    ],
    related: ["costes-de-una-operacion", "checklist-antes-de-operar", "que-es-el-trading"],
    glossary: ["psicologia", "disciplina", "comision", "registro"],
    quiz: [
      {
        id: "q1",
        question: "¿Cuál es la causa más habitual de sobreoperar?",
        options: [
          "Que aparezcan demasiadas señales válidas",
          "La necesidad de estar haciendo algo cuando el mercado está quieto",
          "Que el broker limite las operaciones",
          "Que el gráfico tenga muchas velas",
        ],
        correct: 1,
        explanation:
          "La quietud incomoda y la plataforma está cerca; las señales reales suelen ser mucho menos frecuentes.",
      },
      {
        id: "q2",
        question: "¿Por qué una tasa de aciertos buena puede convivir con un mes negativo?",
        options: [
          "Porque el mercado cambia de tendencia",
          "Porque la suma de costes de muchas operaciones consume el margen",
          "Porque el stop siempre falla",
          "Porque las comisiones solo se pagan al ganar",
        ],
        correct: 1,
        explanation:
          "El coste crece con cada operación, así que una frecuencia alta puede comerse el beneficio bruto.",
      },
      {
        id: "q3",
        question: "¿Qué dato conviene apuntar diariamente para detectar sobreoperación?",
        options: [
          "El número de operaciones realizadas",
          "El color de la vela preferida",
          "El saldo de la cuenta cada hora",
          "El número de indicadores abiertos",
        ],
        correct: 0,
        explanation:
          "El recuento diario, comparado con el máximo del plan, es la señal más directa de que la frecuencia se descontrola.",
      },
      {
        id: "q4",
        question: "¿Cuál es una medida eficaz para reducir la sobreoperación?",
        options: [
          "Mirar más mercados a la vez",
          "Fijar un máximo diario de operaciones y condiciones obligatorias de entrada",
          "Reducir el tamaño para poder operar más veces",
          "Quitar el stop loss para tener más oportunidades",
        ],
        correct: 1,
        explanation:
          "Un límite escrito y condiciones exigentes cortan el impulso antes de que se convierta en una orden.",
      },
    ],
  },

  {
    slug: "disciplina-y-plan",
    levelId: 7,
    order: 5,
    title: "Disciplina y plan: cumplir el proceso",
    shortTitle: "Disciplina y plan",
    category: "psicologia",
    tags: ["disciplina", "plan", "proceso", "rutina"],
    summary:
      "Cómo escribir un plan de trading, por qué hay que seguirlo aunque duela y cómo medir el cumplimiento del proceso en lugar del resultado de una operación suelta.",
    keywords: ["plan de trading", "disciplina en trading", "seguir el plan", "proceso vs resultado"],
    readMinutes: 7,
    updatedAt: "2026-03-06",
    explanation: {
      intro:
        "Un plan de trading es un texto corto que dice cuándo entras, cuándo no entras, cuánto arriesgas y dónde cierras. La disciplina no consiste en acertar más: consiste en que la operación que ejecutas se parezca a la que escribiste.",
      paragraphs: [
        "El plan se escribe en un momento de calma y se rompe en un momento de tensión. Por eso tiene que ser concreto: si dice «comprar en soportes fuertes», no sirve, porque en caliente todo soporte parece fuerte. Si dice «entrada en 100 solo si la vela cierra por encima de 101 con volumen medio superado», esa frase se puede cumplir o no cumplir, y eso ya es medible.",
        "Seguir el plan aunque duela incluye aceptar operaciones perdedoras que cumplían todas las condiciones. Una operación que respeta el plan y pierde es un buen resultado de proceso; una operación que rompe el plan y gana es un mal resultado de proceso, aunque el saldo del día suba. Mezclar las dos categorías es lo que impide aprender.",
        "La medición del cumplimiento es sencilla y no engaña: en cada operación anota si la entrada cumplía las condiciones, si el tamaño era el previsto y si los cierres se hicieron donde estaban escritos. Tres respuestas sí o no bastan para calcular el porcentaje de disciplina del día.",
        "Con el tiempo, ese porcentaje dice más sobre tu futuro que el resultado de cualquier operación suelta. Nadie puede controlar hacia dónde va el precio después de entrar; sí puede controlar qué reglas se aplican antes y durante la operación.",
      ],
      bullets: [
        "Un plan útil tiene condiciones que se pueden marcar como sí o no.",
        "Una operación disciplinada que pierde vale más que una improvisada que gana.",
        "Mide el cumplimiento del proceso, no el saldo de la tarde.",
        "Revisa el plan fuera del mercado, nunca a mitad de una operación.",
      ],
    },
    technical: {
      term: "Cumplimiento del proceso",
      body: "El cumplimiento del proceso es el porcentaje de operaciones que respetaron todas las reglas escritas en el plan. Se calcula dividiendo las operaciones conformes entre las totales del periodo. Es la única métrica que depende enteramente de ti, así que no se degrada por rachas del mercado ni mejora por suerte puntual.",
      formula: "Cumplimiento = Operaciones según el plan / Operaciones totales",
      gloss:
        "Por debajo del 80 % el problema no es el mercado: el plan o su ejecución necesitan ajustes.",
    },
    example: {
      title: "Dos operaciones, dos lecciones opuestas",
      narrative:
        "La primera operación cumple las condiciones, respeta el stop y cierra en pérdida: el proceso fue correcto y el mercado simplemente no cooperó. La segunda se abre sin señal, con el doble de tamaño y sin objetivo, y termina en ganancia. Si solo miras el saldo del día, repites la segunda; si miras el cumplimiento, repites la primera y corriges la segunda.",
      bullets: [
        "Operación 1: plan cumplido, resultado negativo.",
        "Operación 2: plan ignorado, resultado positivo.",
        "El diario decide cuál de las dos se repite.",
      ],
    },
    chart: buildPreset("entrada-ruptura"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 97.5,
      takeProfit: 105,
      outcome: "tp",
      narrative:
        "Entrada en 100 tras la ruptura confirmada, stop en 97,50 y objetivo en 105: riesgo de 2,5 y recorrido de 5. La operación se tomó porque cumplía las tres condiciones del plan. Si el precio saliera por el stop, el proceso seguiría siendo correcto: el resultado de una operación no valida ni invalida el plan.",
      capital: 5_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Escribir un plan con reglas que no se pueden comprobar",
        why: "Frases como «esperar una señal clara» no se pueden marcar como sí o no, así que nunca se incumplen ni se cumplen.",
        fix: "Traduce cada regla a un dato observable: precio, cierre de vela, volumen o número de operaciones.",
      },
      {
        mistake: "Juzgar el plan por una sola operación",
        why: "Una muestra de una operación no dice nada sobre una estrategia que necesita decenas de repeticiones.",
        fix: "Evalúa el plan con series completas y con el porcentaje de cumplimiento, no con el día de hoy.",
      },
      {
        mistake: "Modificar el plan en plena operación",
        why: "Cualquier cambio bajo presión responde al ánimo del momento, no a datos nuevos del mercado.",
        fix: "Las modificaciones se ensayan y se escriben cuando no hay ninguna posición abierta.",
      },
    ],
    related: ["checklist-antes-de-operar", "que-es-una-estrategia", "fomo", "riesgo-por-operacion"],
    glossary: ["disciplina", "psicologia", "riesgo", "registro"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué caracteriza a una regla útil de un plan?",
        options: [
          "Que sea flexible según el ánimo del día",
          "Que se pueda comprobar como cumplida o incumplida",
          "Que permita muchas interpretaciones",
          "Que se revise a mitad de la operación",
        ],
        correct: 1,
        explanation:
          "Una regla medible se puede marcar sí o no; por eso sirve para evaluar el proceso con datos.",
      },
      {
        id: "q2",
        question: "Una operación que cumple el plan y pierde es:",
        options: [
          "Una prueba de que el plan no sirve",
          "Un buen resultado de proceso con resultado negativo",
          "Señal de que hay que ampliar el tamaño",
          "Un motivo para dejar el stop",
        ],
        correct: 1,
        explanation:
          "El mercado no siempre coopera; lo que sí controlas es haber seguido tus reglas, y eso es lo que se evalúa.",
      },
      {
        id: "q3",
        question: "¿Cómo se calcula el cumplimiento del proceso?",
        options: [
          "Comparando tu saldo con el de otros operadores",
          "Dividiendo las operaciones según el plan entre las totales",
          "Sumando las ganancias y restando las pérdidas",
          "Contando los días en verde",
        ],
        correct: 1,
        explanation:
          "Es un porcentaje de operaciones conformes con las reglas escritas, independiente de si ganaron o perdieron.",
      },
      {
        id: "q4",
        question: "¿Cuándo conviene modificar el plan?",
        options: [
          "En plena operación si el precio va en contra",
          "Cada vez que aparece una pérdida",
          "Cuando no hay posiciones abiertas y hay datos de varias operaciones",
          "Nunca, un plan es definitivo",
        ],
        correct: 2,
        explanation:
          "Los cambios se toman con calma y con evidencia de una serie completa, nunca mientras la emoción decide.",
      },
    ],
  },

  {
    slug: "diario-de-trading",
    levelId: 7,
    order: 6,
    title: "Diario de trading: el registro que no miente",
    shortTitle: "Diario de trading",
    category: "psicologia",
    tags: ["diario", "registro", "revisión", "aprendizaje"],
    summary:
      "Qué campos anotar en el diario de operaciones, qué se aprende al revisarlo y por qué la memoria selectiva distorsiona lo que realmente ocurrió.",
    keywords: ["diario de trading", "registro de operaciones", "revisar operaciones", "memoria en trading"],
    readMinutes: 7,
    updatedAt: "2026-03-07",
    explanation: {
      intro:
        "Un diario de trading es el registro escrito de cada operación y de las razones que la justificaban. No es un listado de resultados: es la única forma de tener a la vista lo que hiciste, no lo que crees que hiciste.",
      paragraphs: [
        "La memoria del operador es selectiva y muy generosa. Recuerda con claridad la operación espectacular que casi cierras en el objetivo y olvida las seis improvisadas que se comieron el spread. También recuerda las pérdidas con un detalle desproporcionado, porque duelen más. Sin registro escrito, cualquier revisión se convierte en una negociación con el recuerdo.",
        "Los campos que interesan son pocos y concretos: fecha e instrumento, dirección, entrada, stop, objetivo, motivo de la entrada, tamaño, salida real, resultado y una nota sobre el cumplimiento del plan. Añadir una captura del gráfico en el momento de la entrada vale más que cualquier reflexión escrita semanas después.",
        "Al revisar el registro aparecen patrones que ninguna operación individual enseña: que la tercera operación del día es casi siempre mala, que las entradas sin motivo pierden más de lo que ganan, o que operar los viernes empeora el resultado medio. Esos patrones solo existen en la suma.",
        "El diario también sirve para ensayar. Antes de operar, se anota la idea y el nivel; después se comprueba si se cumplió. Con el tiempo, esa costumbre convierte la revisión en una rutina corta y útil en lugar de una tarea pendiente que siempre se aplaza.",
      ],
      bullets: [
        "Anota la idea antes de entrar, no después de salir.",
        "Reglas mínimas: entrada, stop, objetivo, motivo, salida y nota de cumplimiento.",
        "La memoria selectiva adorna lo bueno y agranda lo malo.",
        "Los patrones solo aparecen al sumar muchas operaciones.",
      ],
    },
    technical: {
      term: "Desviación entre plan y ejecución",
      body: "La desviación entre plan y ejecución mide la distancia entre lo que iba a hacerse y lo que se hizo. Puede calcularse en precio (dónde se colocó realmente el stop respecto al previsto), en tiempo (cuánto se esperó respecto a la señal) o en número de incumplimientos por operación. Cuanto mayor es la desviación, menos utilidad tienen los resultados como guía del futuro.",
      formula: "Desviación = Resultado real − Resultado previsto en el plan",
      gloss:
        "Dos operaciones con el mismo resultado pueden esconder desviaciones opuestas: una es ruido, la otra es un problema.",
    },
    example: {
      title: "Lo que dice el registro y lo que recuerdas",
      narrative:
        "Un mes ficticio acumula 40 operaciones. La memoria destaca dos grandes ganancias y las menciona en todas las conversaciones. El registro muestra que 22 entradas no cumplían ninguna condición de la lista y que esas 22 sumaron la mayor parte de las pérdidas. Al corregir solo ese punto, el resultado del mes cambia sin tocar la estrategia.",
      bullets: [
        "40 operaciones registradas.",
        "22 sin condición de entrada verificable.",
        "El cambio más rentable fue de proceso, no de mercado.",
      ],
    },
    chart: buildPreset("rango"),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 97,
      stopLoss: 95,
      takeProfit: 103,
      outcome: "breakeven",
      narrative:
        "Compra en 97 dentro del rango con stop en 95 y objetivo en 103. Al revisar el registro, la operación se cierra en el precio de entrada cuando la idea deja de cumplir sus condiciones. El resultado es plano, pero la anotación deja claro que el cierre respondió al plan y no al ánimo.",
      capital: 3_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Llevar el diario solo de memoria",
        why: "La memoria reordena los hechos y siempre favorece una versión más cómoda de lo ocurrido.",
        fix: "Anota en el momento, con captura del gráfico y antes de abrir la siguiente operación.",
      },
      {
        mistake: "Escribir únicamente el resultado de cada operación",
        why: "Un listado de cifras no explica por qué se ganó o se perdió, así que no permite corregir nada.",
        fix: "Registra también el motivo de la entrada y si se cumplieron las condiciones del plan.",
      },
      {
        mistake: "Revisar el diario una sola vez al mes",
        why: "Los errores se repiten durante semanas antes de que aparezca el patrón en la revisión.",
        fix: "Dedica diez minutos al final de cada sesión y un repaso largo solo el fin de semana.",
      },
    ],
    related: ["backtesting-y-overfitting", "disciplina-y-plan", "drawdown"],
    glossary: ["registro", "disciplina", "psicologia", "backtesting"],
    quiz: [
      {
        id: "q1",
        question: "¿Por qué la memoria no basta para revisar operaciones?",
        options: [
          "Porque la memoria es selectiva y recuerda sobre todo lo más emocional",
          "Porque la memoria no guarda números",
          "Porque el mercado cambia al recordarlo",
          "Porque el broker borra el historial",
        ],
        correct: 0,
        explanation:
          "El recuerdo adorna lo bueno y agranda lo malo; solo el registro escrito conserva los hechos tal como fueron.",
      },
      {
        id: "q2",
        question: "¿Qué campo es imprescindible anotar antes de entrar?",
        options: [
          "El saldo de la cuenta",
          "El motivo de la entrada y los niveles previstos",
          "La opinión de otros operadores",
          "El número de indicadores abiertos",
        ],
        correct: 1,
        explanation:
          "Sin el motivo y los niveles escritos de antemano, la revisión posterior no puede comparar plan con ejecución.",
      },
      {
        id: "q3",
        question: "¿Qué suelen revelar las revisiones de varias semanas?",
        options: [
          "Patrones repetitivos que ninguna operación individual muestra",
          "El precio exacto del siguiente día",
          "Qué broker tiene mejor ejecución",
          "Cuánto van a valer los activos el mes que viene",
        ],
        correct: 0,
        explanation:
          "Los hábitos perdedores solo aparecen al sumar muchas operaciones y observar la frecuencia de cada error.",
      },
      {
        id: "q4",
        question: "¿Qué añade el gráfico capturado en el momento de la entrada?",
        options: [
          "Un adorno visual para el diario",
          "La imagen real del mercado en ese instante, insustituible meses después",
          "El resultado de la operación",
          "La confirmación de que la operación ganará",
        ],
        correct: 1,
        explanation:
          "La captura conserva el contexto que el precio futuro borra, y permite revisar la decisión con la información de entonces.",
      },
    ],
  },

  {
    slug: "expectativas-realistas",
    levelId: 7,
    order: 7,
    title: "Expectativas realistas: qué es esperable",
    shortTitle: "Expectativas realistas",
    category: "psicologia",
    tags: ["expectativas", "riesgo", "aprendizaje", "capital"],
    summary:
      "Qué se puede y qué no se puede esperar de una actividad con riesgo de pérdida, sin promesas de rentabilidad, y por qué el trading es una habilidad que se entrena con dinero asequible.",
    keywords: ["expectativas realistas", "rentabilidad del trading", "riesgo de perdida", "trading como habilidad"],
    readMinutes: 7,
    updatedAt: "2026-03-09",
    explanation: {
      intro:
        "Tener expectativas realistas significa aceptar que el trading es una actividad con riesgo de pérdida, que no existe una rentabilidad garantizable y que la mejora llega por práctica supervisada, no por atajos. Cualquier promesa en contrario es una señal de alerta.",
      paragraphs: [
        "Lo primero que hay que aceptar es que perder operaciones es normal. Cualquier estrategia con un propósito razonable incluye rachas perdedoras, y ninguna regla evita que el mercado se mueva en tu contra durante semanas. Quien entra esperando ganar casi siempre termina operando con miedo, porque su plan depende de que el mercado se comporte como imagina.",
        "Lo segundo es el tiempo. Aprender a leer un gráfico, a calcular tamaños y a respetar un plan ocupa meses de estudio y práctica antes de que el dinero arriesgado tenga sentido. Durante ese periodo, el objetivo no es ganar: es ejecutar bien. Esperar un ingreso estable desde la primera semana es la forma más rápida de abandonar o de arruinar una cuenta.",
        "El capital importa por dos motivos. Si usas dinero que necesitas para vivir, cada operación se toma con presión y las decisiones se distorsionan. Y si el tamaño es grande respecto a tu patrimonio, una racha normal puede ser inasumible. La recomendación educativa de siempre: solo dinero que puedes permitirte perder por completo.",
        "El trading se entrena como cualquier habilidad. Se estudia, se practica con poco riesgo, se registra, se corrige y se repite. Quien sostiene lo contrario vende atajos. Esta plataforma no promete rentabilidades ni recomienda operar con ningún producto concreto: enseña el oficio y sus riesgos.",
      ],
      bullets: [
        "Las pérdidas son una parte prevista del proceso, no un fallo del principiante.",
        "Ninguna rentabilidad está garantizada ni es previsible.",
        "El aprendizaje ocupa meses; el ingreso inmediato no existe.",
        "Usa solo dinero que puedas perder por completo sin que cambie tu vida.",
      ],
    },
    technical: {
      term: "Resultado esperado",
      body: "El resultado esperado es la media ponderada de los desenlaces posibles de una estrategia: suma de las ganancias por su probabilidad menos las pérdidas por la suya, ya descontados costes. Es una cifra que se estima sobre muchas operaciones y que puede ser positiva sin que ninguna operación concreta esté garantizada. Con muestras pequeñas, el resultado observado se desvía mucho del esperado.",
      formula: "Resultado esperado = (Ganancia × Probabilidad de acierto) − (Pérdida × Probabilidad de fallo)",
      gloss:
        "Un resultado esperado positivo no significa que el mes siguiente vaya a serlo: describe el promedio de una serie larga.",
    },
    example: {
      title: "Lo que sí y lo que no se puede prometer",
      narrative:
        "Un plan ficticio arriesga 3 unidades para buscar 9 en una operación de cada cinco. En una serie larga, esas matemáticas describen un promedio concreto. Lo que no dice nada es qué ocurrirá en la operación número siete, ni garantiza que la serie salga a cuenta este mes. Esperar lo primero del promedio es tener expectativas rotas desde el primer día.",
      bullets: [
        "Riesgo por operación: 3 unidades.",
        "Objetivo por operación: 9 unidades.",
        "El promedio se cumple en series largas, nunca en una operación suelta.",
      ],
    },
    chart: buildScenario("expectativas-realistas", {
      entry: 100,
      stopLoss: 97,
      takeProfit: 111,
      outcome: "open",
      caption: "Ejemplo ficticio: la operación sigue abierta y abierta está",
      description:
        "Entrada con riesgo de 3 y recorrido previsto de 11. Mientras el precio no alcance ninguno de los dos niveles, no hay resultado: ni ganancia ni pérdida realizadas.",
    }),
    tradeExample: {
      instrument: "Activo ficticio",
      direction: "long",
      entry: 100,
      stopLoss: 97,
      takeProfit: 111,
      outcome: "open",
      narrative:
        "Entrada en 100 con stop en 97 y objetivo en 111: 3 unidades de riesgo por 11 de recorrido. La posición sigue abierta, así que no hay resultado que contar. Esperar que cada operación llegue al objetivo es exactamente el tipo de expectativa que quiebra un plan.",
      capital: 4_000,
      riskPct: 1,
    },
    mistakes: [
      {
        mistake: "Creer que se puede vivir del trading desde el primer mes",
        why: "La práctica necesaria lleva meses y ninguna estrategia garantiza ingresos en un plazo concreto.",
        fix: "Trata los primeros meses como formación con riesgo mínimo y metas de aprendizaje, no de rentabilidad.",
      },
      {
        mistake: "Arriesgar dinero que necesitas para gastos cotidianos",
        why: "La presión por ganar distorsiona cada decisión y convierte el plan en una obligación imposible.",
        fix: "Separa el capital de riesgo y usa exclusivamente dinero que puedas perder por completo.",
      },
      {
        mistake: "Medir el progreso por la rentabilidad de una semana",
        why: "Las series cortas dicen casi nada: el azar domina cualquier resultado que dure pocos días.",
        fix: "Evalúa el cumplimiento del plan y la calidad de las decisiones a lo largo de muchas operaciones.",
      },
    ],
    related: ["que-es-el-trading", "riesgo-por-operacion", "drawdown", "rachas-de-perdidas"],
    glossary: ["riesgo", "capital", "psicologia", "disciplina", "drawdown"],
    quiz: [
      {
        id: "q1",
        question: "¿Qué significa tener expectativas realistas en trading?",
        options: [
          "Esperar una rentabilidad fija todos los meses",
          "Aceptar que hay riesgo de pérdida y que ninguna ganancia está garantizada",
          "Confear en que el plan funcionará siempre",
          "Operar con el capital de tus gastos mensuales",
        ],
        correct: 1,
        explanation:
          "La realidad de la actividad incluye pérdidas y rachas; prometer resultados contrarios es engaño, no estrategia.",
      },
      {
        id: "q2",
        question: "¿Por qué el dinero con el que se opera importa tanto?",
        options: [
          "Porque a más dinero el broker cobra menos",
          "Porque si es dinero necesario, la presión distorsiona cada decisión",
          "Porque el mercado lo nota",
          "Porque los spreads suben con el tamaño",
        ],
        correct: 1,
        explanation:
          "Operar con dinero imprescindible añade presión y obliga a resultados que el mercado no puede garantizar.",
      },
      {
        id: "q3",
        question: "¿Cuál es el objetivo realista durante la fase de aprendizaje?",
        options: [
          "Duplicar la cuenta en un trimestre",
          "Ejecutar bien el proceso y acumular práctica con riesgo mínimo",
          "Superar el rendimiento de cualquier índice",
          "No perder nunca ninguna operación",
        ],
        correct: 1,
        explanation:
          "En formación, la métrica útil es la calidad de la ejecución; el dinero llega después, si es que llega.",
      },
      {
        id: "q4",
        question: "Un resultado esperado positivo, en una serie larga, significa:",
        options: [
          "Que cada operación individual dará beneficio",
          "Que el promedio de muchas operaciones, ya con costes, es ganador",
          "Que el mercado subirá el mes que viene",
          "Que se puede retirar capital cada semana",
        ],
        correct: 1,
        explanation:
          "Es una media estadística sobre muchas operaciones; no garantiza nada en el corto plazo ni elimina las pérdidas.",
      },
    ],
  },
];
