# FUNDAMENTOS_NUTRICIONALES.md

## 1. Introducción 🚀

El propósito de esta documentación científica es establecer las bases termodinámicas, fisiológicas y nutricionales que rigen el algoritmo de nuestra aplicación deportiva. La recomposición corporal (pérdida de masa grasa simultánea a la ganancia o mantenimiento de masa muscular) es un proceso biológicamente viable, especialmente en principiantes, personas con sobrepeso o bajo condiciones dietéticas y de entrenamiento muy específicas [1]. Las directrices aquí documentadas se fundamentan en evidencia científica de alto rango, priorizando meta-análisis recientes y los posicionamientos oficiales de la International Society of Sports Nutrition (ISSN) [2-4].

📌 **Aplicación en la app:** Este documento es la "fuente de verdad" del código. El motor matemático de la app usará estas reglas para calcular de forma dinámica las kilocalorías, distribuir los macronutrientes, prescribir el _timing_ y recomendar suplementos con evidencia contrastada.

---

## 2. Macronutrientes 🥩🌾🥑

Los macronutrientes constituyen los cimientos energéticos, estructurales y hormonales del organismo [2, 5].

- **Proteínas:** Aportan los aminoácidos indispensables para la síntesis de nuevas proteínas musculares (MPS) y previenen el catabolismo del tejido magro en déficit [2].
- **Carbohidratos:** Su función es preservar las reservas de glucógeno en las fibras musculares de tipo II, previniendo la fatiga neuromuscular durante los entrenamientos [5, 6].
- **Grasas:** Son fundamentales para la síntesis de hormonas esteroideas y la protección del sistema inmunológico [5].
- **Valor calórico:** 4 kcal/g para proteínas y carbohidratos, y 9 kcal/g para las grasas (Dato a completar: los documentos dan por sentada esta regla bioenergética universal para la cuadratura de dietas, aunque no la mencionan de forma explícita).

Un reparto adecuado es crítico: un déficit severo con baja proteína induce la degradación muscular, mientras que un superávit agresivo con exceso de grasas o azúcares promueve mayor tejido adiposo sin ventajas hipertróficas adicionales [7, 8].

📌 **Aplicación en la app:** El algoritmo cuadrará las calorías diarias multiplicando los gramos objetivo por su valor calórico (4/4/9). Se programará una jerarquía de asignación: 1º Proteína (según masa magra), 2º Grasas mínimas de seguridad, y 3º Carbohidratos para rellenar el presupuesto energético basado en la actividad del día.

---

## 3. Requerimientos por actividad 📊

La prescripción de macronutrientes debe individualizarse según el balance energético y la carga de entrenamiento [2, 5]:

| Perfil / Objetivo                             | Proteína (g/kg/día) | Carbohidratos (g/kg/día) | Grasas (g/kg/día o % TDEE) |
| :-------------------------------------------- | :------------------ | :----------------------- | :------------------------- |
| **Sedentario**                                | Dato a completar    | Dato a completar         | Dato a completar           |
| **Deportista Recreativo (Fitness general)**   | 1.4 - 2.0 [2, 9]    | 3.0 - 5.0 [10]           | 25% - 35% del TDEE [11]    |
| **Fuerza (Hipertrofia / Volumen)**            | 1.6 - 2.2 [2, 12]   | 5.0 - 8.0 [10, 11]       | 1.0 - 1.5 [11]             |
| **Fuerza (Déficit Calórico / Corte)**         | 2.3 - 3.1 [2, 9]    | 3.0 - 5.0 [5]            | 0.5 - 1.0 (ó 20-25%) [5]   |
| **Resistencia (Alto volumen / Doble sesión)** | 1.4 - 2.0 [2]       | 8.0 - 12.0 [10, 11]      | 1.0 - 1.5 [11]             |

📌 **Aplicación en la app:** La aplicación utilizará el peso del usuario (en kg) y cruzará el objetivo seleccionado (Corte, Mantenimiento, Volumen) con el volumen de entrenamiento semanal para asignar dinámicamente los gramos objetivo desde esta tabla matriz.

---

## 4. Proteína 🥩

Para maximizar la hipertrofia muscular bajo balance energético neutro o positivo, la ISSN establece un rango de 1.6 a 2.2 g/kg/día [2, 12]. Durante fases de déficit calórico, se debe elevar a 2.3 - 3.1 g/kg/día para salvaguardar la masa libre de grasa [2, 9].

- **Distribución y "Leucine Trigger":** Las dosis deben fraccionarse cada 3-4 horas (4 a 5 comidas diarias) [12, 13]. Para encender el complejo de señalización celular mTORC1, cada ingesta debe superar el "umbral de leucina", aportando entre 700 y 3000 mg de leucina libre (2.5 a 3 g en la práctica) [12, 14, 15]. Esto equivale a consumir raciones de 0.25 g/kg de peso o dosis absolutas de 20 a 40 gramos de proteína de alta calidad por comida [12, 14].
- **Calidad (DIAAS):** Se evaluará la biodisponibilidad mediante la puntuación DIAAS en el íleon [16, 17]. Las proteínas animales (suero de leche, huevo, carnes) poseen DIAAS $\ge 100$ [16, 18, 19]. Las fuentes vegetales (excepto aislados de soja o guisante que puntúan 75-100) suelen tener DIAAS $<75$ por déficit de aminoácidos como metionina o lisina [18, 19]. Se soluciona combinando cereales con legumbres, o añadiendo una pequeña fracción (10-15g) de proteína animal a comidas vegetales para "completar" el perfil de aminoácidos [18, 19].
- **Ventana Anabólica:** Es un mito que dure solo 30-45 minutos. La sensibilidad anabólica se prolonga al menos 24 horas tras el entrenamiento de fuerza [20].
- **Pre-sueño:** Ingerir de 30 a 40g de caseína antes de dormir estimula la MPS nocturna sin frenar la lipólisis [21].

📌 **Aplicación en la app:** El algoritmo advertirá al usuario si alguna de sus comidas tiene menos de 20g de proteína (para asegurar el umbral de leucina) y sugerirá combinaciones vegetales o la adición de proteína _Whey_ [12, 22] si la fuente es de bajo valor DIAAS.

---

## 5. Carbohidratos 🌾

Los carbohidratos son críticos para atenuar el vaciado de glucógeno, que puede depletarse hasta un 41% en fibras musculares tipo II durante entrenamientos vigorosos [6]. Su impacto varía según el _timing_:

- **Pre-entrenamiento:** Priorizar hidratos de bajo a moderado índice glucémico (IG) para mantener la euglicemia estable [21, 23, 24].
- **Durante:** En sesiones superiores a 60-70 minutos, aportar de 30 a 60 g/hora [21].
- **Post-entrenamiento:** Para resíntesis ultrarrápida (menos de 4 horas de recuperación), se recomiendan hidratos de alto IG (1.2 g/kg/hora) combinados con proteína o cafeína [3, 21].
  Cabe destacar que el Índice Glucémico (IG) tiene muy poco impacto real sobre la pérdida de grasa corporal o la hipertrofia si las proteínas y calorías diarias totales están controladas [25, 26].

📌 **Aplicación en la app:** La app modulará la carga de carbohidratos de forma diaria: los subirá en días de entrenamiento pesado (colocándolos estratégicamente peri-entrenamiento) y los reducirá a favor de las grasas en los días de descanso absoluto [27, 28].

---

## 6. Grasas 🥑

Durante restricciones calóricas severas, las grasas nunca deben descender del 20-25% del Gasto Energético Total o de 0.5 - 1.0 g/kg/día [5].

- **Función:** Son innegociables para la síntesis de hormonas esteroideas (testosterona, etc.) y la salud inmunitaria [5].
- **Aceite de Oliva Virgen Extra (AOVE):** Es la fuente lipídica prioritaria. Su dosis de 2 a 3 cucharadas soperas (30-45 mL/día) aporta _oleocantal_. Este compuesto fenólico inhibe las enzimas COX-1 y COX-2 de manera idéntica al ibuprofeno, mitigando la inflamación y reduciendo significativamente las agujetas (DOMS) post-esfuerzo [29, 30].

📌 **Aplicación en la app:** El creador de dietas aplicará una regla estricta (`if fat < 20% TDEE -> override`) para proteger la salud hormonal. Asimismo, sugerirá sistemáticamente aliños con AOVE en crudo [31] para aprovechar el oleocantal.

---

## 7. TDEE ⚙️

El Gasto Energético Diario Total (TDEE) en deportistas no puede ser medido de forma fidedigna por las fórmulas habituales de la población general:

- **Fórmulas:** La ecuación clásica de Mifflin-St Jeor reporta precisiones inferiores al 50% en atletas, ya que omite la masa libre de grasa (FFM) [32-34]. El estándar de oro predictivo es la **Fórmula de Cunningham**: $\text{REE} = 500 + 22 \times \text{FFM (kg)}$ [33-35].
- **Gasto Real por Entrenamiento:** El entrenamiento de fuerza pesado multiarticular (ej. sentadillas al 80% 1-RM) demanda entre 20 y 40 kcal/minuto [34, 36-38]. Una sesión intensa quema de 680 a 840 kcal netas [39-41].
- **EPOC (Efecto Afterburn):** Es un mito que el consumo de oxígeno post-ejercicio sea la clave para perder peso. El EPOC apenas supone un 6-15% del costo de la sesión (unas 15-35 kcal extra reales) [34, 42, 43].
- **NEAT y Termogénesis Adaptativa:** Durante el déficit calórico prolongado, el NEAT (movimientos espontáneos) cae de forma inconsciente. Además, la enzima D3 muscular reduce las hormonas tiroideas a nivel tisular (hipotiroidismo local), ralentizando severamente el metabolismo [44-46].

📌 **Aplicación en la app:** Si el usuario aporta su porcentaje de grasa o FFM, se usará _Cunningham_. La app sincronizará los pasos diarios del smartphone (NEAT) para ajustar dinámicamente el multiplicador de actividad (PAL) [44, 47] y evitar estancamientos metabólicos.

---

## 8. Objetivos calóricos 🎯

El ritmo de alteración del peso corporal define la calidad del tejido alterado:

- **Déficit Calórico:** Debe ser conservador. Un déficit moderado (300-500 kcal) que genere una pérdida del 0.5% al 1.0% del peso semanal es ideal [7, 48]. Déficits más agresivos destruyen aceleradamente la masa libre de grasa e inhiben la hipertrofia [7, 9].
- **Superávit Calórico:** El "dirty bulk" (+6000 kcal/día) añade grasa de forma desproporcionada (Tamaño del Efecto: 0.33 vs 0.03) frente a un superávit magro de solo 200-400 kcal ("lean bulk"), mientras que la diferencia en músculo ganado es marginal [8, 9].
- **Diet Breaks y Refeeds:** Periodos estructurados de neutralidad energética. Aplicar un _Diet Break_ (volver a mantenimiento durante 1-2 semanas tras meses de déficit) frena la caída del metabolismo basal. Los sujetos en dieta lineal sin descanso sufren una caída metabólica de $\sim 92$ kcal/día, mientras que quienes aplican _Diet Breaks_ solo caen $\sim 39$ kcal/día, resguardando la eficiencia tiroidea y mejorando la adherencia [46, 48-52].

📌 **Aplicación en la app:** El sistema establecerá topes de $\pm 300-500$ kcal. Cuando un usuario lleve 8-12 semanas en déficit continuo, recibirá una notificación automática sugiriendo activar el modo "Mantenimiento / Diet Break" durante 14 días para reiniciar su metabolismo.

---

## 9. Suplementación 💊

Las recomendaciones de suplementación se filtran rigurosamente por su máximo grado de validación científica en atletas:

- **Creatina (Monohidrato):** Mejora la resíntesis de ATP (fosfágenos), la fuerza y el volumen celular intracelular [53, 54]. _Dosis:_ Protocolo de carga con $0.3$ g/kg/día por 5-7 días seguido de 3-5 g/día; o fase de mantenimiento lineal de $3$ g/día crónicos [4, 53, 55].
- **Omega-3 (EPA/DHA):** Modula la membrana celular. _Dosis:_ Altas cargas de 3200 mg/día (800 EPA / 2400 DHA) por 8 semanas atenúan las agujetas (DOMS) y reducen el consumo miocárdico de oxígeno submáximo [4, 56].
- **Magnesio:** Cofactor enzimático clave en la síntesis de ATP. _Dosis:_ 300 a 500 mg/día en formas orgánicas (Citrato o Quelato, por su altísima biodisponibilidad frente al óxido) [57-61]. Atenúa lactato, mejora la fuerza contráctil y optimiza la calidad del sueño profundo [57, 62].
- **Zinc:** Ayuda inmunitaria. _Dosis:_ 8 a 11 mg/día [58, 63]. Fórmulas comerciales como el **ZMA** (Zinc, Magnesio, B6) **no han demostrado científicamente eficacia para elevar hormonas anabólicas** (testosterona) en personas sin deficiencias previas [4, 63-65]. Consumos crónicos $>100$ mg/día de zinc son tóxicos y bajan el HDL [63, 66].
- **Melatonina:** Hormona cronobiótica y potente antioxidante celular. _Dosis:_ 6 a 10 mg pre-sueño mejoran de forma consistente el rendimiento de sprint anaeróbico al día siguiente, aceleran la recuperación percibida y reducen marcadores de daño muscular (CK y LDH) [4, 67, 68]. Carece de efecto ergogénico tomada pre-ejercicio [67].

📌 **Aplicación en la app:** La sección de "Suplementos" prescribirá únicamente protocolos validados. Alertará de evitar el consumo de zinc excesivo, desaconsejará el ZMA por falta de evidencia hipertrófica y pautará alarmas nocturnas para la Melatonina y el Magnesio.

---

## 10. Referencias 📚

1. **Jäger et al. (2017).** _International Society of Sports Nutrition Position Stand: protein and exercise._ Journal of the International Society of Sports Nutrition (JISSN) [69, 70].
2. **Kerksick et al. (2017).** _International Society of Sports Nutrition position stand: nutrient timing._ Journal of the International Society of Sports Nutrition (JISSN) [3].
3. **Poon et al. (2024).** _Effects of intermittent dieting with break periods on body composition and metabolic adaptation: a systematic review and meta-analysis._ Nutrition Reviews [71].
4. **Trexler et al. (2014).** _Metabolic adaptation to weight loss: implications for the athlete._ Journal of the International Society of Sports Nutrition (JISSN) [46].
5. **Ribas-Latre et al. (2019/2020).** _Effects of high vs. moderate energy intake on body composition in competitive male bodybuilders._ PMC [72].
6. **Zaromskyte et al. (2021).** _Evaluating the Leucine Trigger Hypothesis to Explain the Post-prandial Regulation of Muscle Protein Synthesis._ Frontiers in Nutrition [73, 74].
7. **Dominguez et al. (2025).** _The Importance of Vitamin D and Magnesium in Athletes._ Nutrients [62, 75].
8. **Guo et al. (2026).** _Timing-dependent effects of melatonin supplementation on exercise performance and exercise-induced muscle damage: a systematic review and meta-analysis._ Frontiers in Nutrition [76, 77].
9. **Banihashemi, B. (n.d.).** _Optimal Protein Intake for Athletic Performance and Muscle Growth._ Cardiac Longevity Clinic [12, 78].
10. **Erdile, J. (2026).** _Plant vs Animal Protein: 2026 Update._ BetterByDesign Nutrition Ltd. [79, 80].

## 1. PROTEÍNA Y SÍNTESIS PROTEICA MUSCULAR (MPS) 🥩🌱

La regulación de la síntesis de nuevas proteínas musculares depende de la cantidad, el momento y la composición de aminoácidos de la dieta.

### 🔹 Requerimientos en Volumen y en Déficit

- **Balance energético neutro o superávit:** Para maximizar la hipertrofia muscular y los cambios de composición corporal en individuos que entrenan fuerza, la ingesta óptima es de **1.4 a 2.0 g/kg de peso corporal al día**.
  - _Artículo científico asociado:_ `Campbell et al. (2017). International Society of Sports Nutrition position stand: protein and exercise. Journal of the International Society of Sports Nutrition (JISSN)`.
- **Déficit calórico:** Un déficit diario de $\sim 500$ kcal bloquea drásticamente la ganancia de masa magra. Para salvaguardar el músculo, es imperativo elevar el consumo proteico exógeno a un rango de **2.3 a 3.1 g/kg/día**.
  - _Artículos científicos asociados:_ `Campbell et al. (2017). JISSN` y `Murphy C, Koehler K. (2020/2021). Energy deficiency impairs resistance training gains in lean mass but not strength: A meta-analysis and meta-regression. Scand J Med Sci Sports`.

### 🔹 La Hipótesis del "Umbral de Leucina" (Leucine Trigger)

- **Mecanismo:** La leucina es el aminoácido esencial que actúa como "interruptor" para encender el complejo enzimático mTORC1, disparando la síntesis proteica. Cada ingesta debe contener entre **700 y 3000 mg de leucina** (equivalente a 20-40 g de proteína de alta calidad) para superar este umbral.
- **Diferencia por edad (Matriz alimentaria):** En adultos jóvenes que consumen comidas completas (matriz compleja), no es necesario un pico ultrarrápido de leucina en sangre para estimular la MPS. Sin embargo, en **adultos mayores (sarcopenia)**, debido a la resistencia anabólica, sí se requieren dosis aisladas de digestión rápida (como el suero de leche) para "forzar" la activación.
  - _Artículo científico asociado:_ `Zaromskyte, G., et al. (2021). Evaluating the Leucine Trigger Hypothesis to Explain the Post-prandial Regulation of Muscle Protein Synthesis in Young and Older Adults: A Systematic Review. Frontiers in Nutrition`.

### 🔹 Calidad Proteica: Animal vs. Vegetal (Escala DIAAS)

- La calidad proteica se evalúa científicamente mediante el **DIAAS** (Digestibilidad de Aminoácidos Indispensables en el Íleon). Las proteínas animales (suero, huevo, carne) tienen un $\text{DIAAS} \ge 100$ y activan el eje mTORC1 a menores dosis.
- Las fuentes vegetales suelen tener menor digestibilidad y un perfil bajo en leucina (solo un 6-8% de su peso), requiriendo mezclas (ej. cereales y legumbres) o dosis absolutas mayores por comida.
  - _Artículos científicos asociados:_ `FAO Food and Nutrition Paper (2013). Dietary protein quality evaluation in human nutrition` y `Honors Thesis / Sports Medicine (2023). Plant and animal protein sources for athletic populations: quality, DIAAS, and muscle adaptations`.

---

## 2. MONOHIDRATO DE CREATINA ⚡

Es la ayuda ergogénica legal más validada de la historia para el rendimiento anaeróbico.

### 🔹 Mecanismos a Nivel Celular

- **Aumento de reservas:** La creatina se almacena en el músculo esquelético. Su suplementación oral eleva las concentraciones intramusculares de fosfocreatina y creatina libre en un **15% al 40%**.
- **Resíntesis de ATP:** Actúa como donante rápido de grupos fosfato para regenerar el ATP (Trifosfato de Adenosina) durante contracciones explosivas (sprints, levantamiento de pesas), retrasando el fallo muscular.
- **Efectos hipertróficos:** Aumenta el volumen de entrenamiento tolerable y promueve el volumen celular intracelular (arrastre de agua al interior de la célula), lo cual es una señal anabólica mecánica.
  - _Artículo científico asociado:_ `Kreider, R. B., et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. JISSN`.

### 🔹 Protocolos de Dosificación

- **Carga Rápida:** $0.3$ g/kg de peso corporal al día (dividido en 4 tomas) durante 5 a 7 días, seguido de mantenimiento.
- **Lineal (Crónica):** Mantenimiento continuo de **3 a 5 gramos al día**. Ambos protocolos logran la saturación completa del músculo.
  - _Artículo científico asociado:_ `Kreider, R. B., et al. (2017). JISSN`.

---

## 3. MAGNESIO (Mg) 🧠🦴

El magnesio no es solo un electrolito, es un modulador fundamental del metabolismo celular.

### 🔹 Función Bioquímica: El Complejo Mg-ATP

- El magnesio participa en más de 600 reacciones enzimáticas. Su función más crítica es que **todo el ATP biológicamente activo en el cuerpo debe estar unido a un ion de magnesio** (formando el complejo celular Mg-ATP) para ser utilizado como energía durante la contracción muscular.
  - _Artículo científico asociado:_ `Kleczkowski, L.A.; Igamberdiev, A.U. (2023). Magnesium and cell energetics: At the junction of metabolism of adenylate and non-adenylate nucleotides. J. Plant Physiol`. y `Dominguez, L. J., et al. (2025). The Importance of Vitamin D and Magnesium in Athletes. Nutrients (MDPI)`.

### 🔹 Requerimientos y Pérdidas en Deportistas

- La ingesta base general es de 300-400 mg/día. Sin embargo, el ejercicio intenso exacerba la pérdida de magnesio por sudor y orina. Se establece que **los atletas requieren entre un 10% y un 20% extra de magnesio diario** (llegando a 400-500 mg/día).
- **Estrés oxidativo y lactato:** La suplementación con magnesio disminuye el daño del ADN de los linfocitos de sangre periférica, atenúa la acumulación de lactato y previene arritmias post-esfuerzo.
  - _Artículos científicos asociados:_ `Bohl, C.H.; Volpe, S.L. (2002). Magnesium and exercise. Crit. Rev. Food Sci. Nutr` y `Petrovic, J., et al. (2016). Magnesium Supplementation Diminishes Peripheral Blood Lymphocyte DNA Oxidative Damage in Athletes... Oxid. Med. Cell Longev`.

---

## 4. ZINC Y LA AUSENCIA DE EVIDENCIA DEL ZMA 🛡️

El Zinc es un oligoelemento crucial para la síntesis de hormonas, pero su uso en el fitness está plagado de mitos comerciales.

### 🔹 Toxicidad por Exceso

- Las dosis fisiológicas recomendadas son de **8 mg/día en mujeres y 11 mg/día en hombres** (fácilmente obtenibles con dietas de carne, legumbres y frutos secos).
- A diferencia del magnesio, el Zinc presenta riesgos de toxicidad severos. El consumo crónico superior a **100 mg al día** disminuye la inmunidad celular, baja el colesterol HDL y altera la absorción de hierro y cobre en el intestino.
  - _Artículo científico asociado:_ `WebMD Clinical Review / Australian Institute of Sport (2013). ZMA supplements: effects on testosterone, strength, and clinical safety`.

### 🔹 ZMA (Zinc + Magnesio Aspartato)

- **Mito de la testosterona:** Múltiples revisiones han demostrado que el ZMA **carece de base científica sólida** para aumentar la testosterona, el IGF-1 o la hipertrofia muscular en personas sanas que no partan de una deficiencia clínica previa de Zinc.
  - _Artículo científico asociado:_ `Journal of the International Society of Sports Nutrition. Effects of Zinc Magnesium Aspartate (ZMA) Supplementation on Training Adaptations and Markers of Anabolism and Catabolism`.

---

## 5. MELATONINA (RECUPERACIÓN Y DAÑO MUSCULAR) 💤

Aunque conocida para el sueño, posee propiedades antioxidantes agudas para deportistas.

### 🔹 Impacto en el Rendimiento y Daño Muscular

- La suplementación nocturna con **6 a 10 mg de melatonina** mejora consistentemente el rendimiento de alta intensidad al día siguiente (ej. sprints repetidos).
- Actúa reduciendo la fuga de la enzima Creatina Quinasa (CK) al torrente sanguíneo, limitando de manera significativa el dolor muscular de aparición tardía (DOMS) tras entrenamientos extenuantes.
  - _Artículos científicos asociados:_
    1. `Guo, J., et al. (2026). Timing-dependent effects of melatonin supplementation on exercise performance and exercise-induced muscle damage: a systematic review and meta-analysis. Frontiers in Nutrition`.
    2. `Mahdi, N., et al. (2025). Melatonin supplementation enhances next-day high-intensity exercise performance and recovery in trained males: a placebo-controlled crossover study. Sports`.
    3. `Pedroso, L.d.C., et al. (2026). Acute Effects of Different Melatonin Doses on Performance and Psychophysiological Responses During Exhaustive Cycling Exercise: A Double-Blind Crossover Study. Nutrients (MDPI)`.

📌 **Aplicación en la app:** En el panel "Ciencia" se incluirán enlaces DOI directos a todos estos estudios, dotando al algoritmo de transparencia clínica absoluta ante preparadores físicos, nutricionistas o usuarios avanzados.
