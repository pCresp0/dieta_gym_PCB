# FUNDAMENTOS_NUTRICIONALES.md

## 1. Introducción 🚀

El propósito de esta documentación científica es establecer las bases termodinámicas, fisiológicas y nutricionales que rigen el algoritmo de nuestra aplicación deportiva. La recomposición corporal (pérdida de masa grasa simultánea a la ganancia o mantenimiento de masa muscular) es un proceso biológicamente viable, especialmente en principiantes, personas con sobrepeso o bajo condiciones dietéticas y de entrenamiento muy específicas [1]. Las directrices aquí documentadas se fundamentan en evidencia científica de alto rango, priorizando meta-análisis recientes y los posicionamientos oficiales de la International Society of Sports Nutrition (ISSN) [2-4].

📌 **Aplicación en la app:** Este documento es la "fuente de verdad" del código. El motor matemático de la app usará estas reglas para calcular de forma dinámica las kilocalorías, distribuir los macronutrientes, prescribir el *timing* y recomendar suplementos con evidencia contrastada.

---

## 2. Macronutrientes 🥩🌾🥑

Los macronutrientes constituyen los cimientos energéticos, estructurales y hormonales del organismo [2, 5]. 
*   **Proteínas:** Aportan los aminoácidos indispensables para la síntesis de nuevas proteínas musculares (MPS) y previenen el catabolismo del tejido magro en déficit [2].
*   **Carbohidratos:** Su función es preservar las reservas de glucógeno en las fibras musculares de tipo II, previniendo la fatiga neuromuscular durante los entrenamientos [5, 6].
*   **Grasas:** Son fundamentales para la síntesis de hormonas esteroideas y la protección del sistema inmunológico [5].
*   **Valor calórico:** 4 kcal/g para proteínas y carbohidratos, y 9 kcal/g para las grasas (Dato a completar: los documentos dan por sentada esta regla bioenergética universal para la cuadratura de dietas, aunque no la mencionan de forma explícita).

Un reparto adecuado es crítico: un déficit severo con baja proteína induce la degradación muscular, mientras que un superávit agresivo con exceso de grasas o azúcares promueve mayor tejido adiposo sin ventajas hipertróficas adicionales [7, 8].

📌 **Aplicación en la app:** El algoritmo cuadrará las calorías diarias multiplicando los gramos objetivo por su valor calórico (4/4/9). Se programará una jerarquía de asignación: 1º Proteína (según masa magra), 2º Grasas mínimas de seguridad, y 3º Carbohidratos para rellenar el presupuesto energético basado en la actividad del día.

---

## 3. Requerimientos por actividad 📊

La prescripción de macronutrientes debe individualizarse según el balance energético y la carga de entrenamiento [2, 5]:

| Perfil / Objetivo | Proteína (g/kg/día) | Carbohidratos (g/kg/día) | Grasas (g/kg/día o % TDEE) |
| :--- | :--- | :--- | :--- |
| **Sedentario** | Dato a completar | Dato a completar | Dato a completar |
| **Deportista Recreativo (Fitness general)** | 1.4 - 2.0 [2, 9] | 3.0 - 5.0 [10] | 25% - 35% del TDEE [11] |
| **Fuerza (Hipertrofia / Volumen)** | 1.6 - 2.2 [2, 12] | 5.0 - 8.0 [10, 11] | 1.0 - 1.5 [11] |
| **Fuerza (Déficit Calórico / Corte)** | 2.3 - 3.1 [2, 9] | 3.0 - 5.0 [5] | 0.5 - 1.0 (ó 20-25%) [5] |
| **Resistencia (Alto volumen / Doble sesión)** | 1.4 - 2.0 [2] | 8.0 - 12.0 [10, 11] | 1.0 - 1.5 [11] |

📌 **Aplicación en la app:** La aplicación utilizará el peso del usuario (en kg) y cruzará el objetivo seleccionado (Corte, Mantenimiento, Volumen) con el volumen de entrenamiento semanal para asignar dinámicamente los gramos objetivo desde esta tabla matriz.

---

## 4. Proteína 🥩

Para maximizar la hipertrofia muscular bajo balance energético neutro o positivo, la ISSN establece un rango de 1.6 a 2.2 g/kg/día [2, 12]. Durante fases de déficit calórico, se debe elevar a 2.3 - 3.1 g/kg/día para salvaguardar la masa libre de grasa [2, 9].
*   **Distribución y "Leucine Trigger":** Las dosis deben fraccionarse cada 3-4 horas (4 a 5 comidas diarias) [12, 13]. Para encender el complejo de señalización celular mTORC1, cada ingesta debe superar el "umbral de leucina", aportando entre 700 y 3000 mg de leucina libre (2.5 a 3 g en la práctica) [12, 14, 15]. Esto equivale a consumir raciones de 0.25 g/kg de peso o dosis absolutas de 20 a 40 gramos de proteína de alta calidad por comida [12, 14].
*   **Calidad (DIAAS):** Se evaluará la biodisponibilidad mediante la puntuación DIAAS en el íleon [16, 17]. Las proteínas animales (suero de leche, huevo, carnes) poseen DIAAS $\ge 100$ [16, 18, 19]. Las fuentes vegetales (excepto aislados de soja o guisante que puntúan 75-100) suelen tener DIAAS $<75$ por déficit de aminoácidos como metionina o lisina [18, 19]. Se soluciona combinando cereales con legumbres, o añadiendo una pequeña fracción (10-15g) de proteína animal a comidas vegetales para "completar" el perfil de aminoácidos [18, 19].
*   **Ventana Anabólica:** Es un mito que dure solo 30-45 minutos. La sensibilidad anabólica se prolonga al menos 24 horas tras el entrenamiento de fuerza [20].
*   **Pre-sueño:** Ingerir de 30 a 40g de caseína antes de dormir estimula la MPS nocturna sin frenar la lipólisis [21].

📌 **Aplicación en la app:** El algoritmo advertirá al usuario si alguna de sus comidas tiene menos de 20g de proteína (para asegurar el umbral de leucina) y sugerirá combinaciones vegetales o la adición de proteína *Whey* [12, 22] si la fuente es de bajo valor DIAAS.

---

## 5. Carbohidratos 🌾

Los carbohidratos son críticos para atenuar el vaciado de glucógeno, que puede depletarse hasta un 41% en fibras musculares tipo II durante entrenamientos vigorosos [6]. Su impacto varía según el *timing*:
*   **Pre-entrenamiento:** Priorizar hidratos de bajo a moderado índice glucémico (IG) para mantener la euglicemia estable [21, 23, 24].
*   **Durante:** En sesiones superiores a 60-70 minutos, aportar de 30 a 60 g/hora [21].
*   **Post-entrenamiento:** Para resíntesis ultrarrápida (menos de 4 horas de recuperación), se recomiendan hidratos de alto IG (1.2 g/kg/hora) combinados con proteína o cafeína [3, 21]. 
Cabe destacar que el Índice Glucémico (IG) tiene muy poco impacto real sobre la pérdida de grasa corporal o la hipertrofia si las proteínas y calorías diarias totales están controladas [25, 26].

📌 **Aplicación en la app:** La app modulará la carga de carbohidratos de forma diaria: los subirá en días de entrenamiento pesado (colocándolos estratégicamente peri-entrenamiento) y los reducirá a favor de las grasas en los días de descanso absoluto [27, 28].

---

## 6. Grasas 🥑

Durante restricciones calóricas severas, las grasas nunca deben descender del 20-25% del Gasto Energético Total o de 0.5 - 1.0 g/kg/día [5]. 
*   **Función:** Son innegociables para la síntesis de hormonas esteroideas (testosterona, etc.) y la salud inmunitaria [5].
*   **Aceite de Oliva Virgen Extra (AOVE):** Es la fuente lipídica prioritaria. Su dosis de 2 a 3 cucharadas soperas (30-45 mL/día) aporta *oleocantal*. Este compuesto fenólico inhibe las enzimas COX-1 y COX-2 de manera idéntica al ibuprofeno, mitigando la inflamación y reduciendo significativamente las agujetas (DOMS) post-esfuerzo [29, 30].

📌 **Aplicación en la app:** El creador de dietas aplicará una regla estricta (`if fat < 20% TDEE -> override`) para proteger la salud hormonal. Asimismo, sugerirá sistemáticamente aliños con AOVE en crudo [31] para aprovechar el oleocantal.

---

## 7. TDEE ⚙️

El Gasto Energético Diario Total (TDEE) en deportistas no puede ser medido de forma fidedigna por las fórmulas habituales de la población general:
*   **Fórmulas:** La ecuación clásica de Mifflin-St Jeor reporta precisiones inferiores al 50% en atletas, ya que omite la masa libre de grasa (FFM) [32-34]. El estándar de oro predictivo es la **Fórmula de Cunningham**: $\text{REE} = 500 + 22 \times \text{FFM (kg)}$ [33-35].
*   **Gasto Real por Entrenamiento:** El entrenamiento de fuerza pesado multiarticular (ej. sentadillas al 80% 1-RM) demanda entre 20 y 40 kcal/minuto [34, 36-38]. Una sesión intensa quema de 680 a 840 kcal netas [39-41].
*   **EPOC (Efecto Afterburn):** Es un mito que el consumo de oxígeno post-ejercicio sea la clave para perder peso. El EPOC apenas supone un 6-15% del costo de la sesión (unas 15-35 kcal extra reales) [34, 42, 43]. 
*   **NEAT y Termogénesis Adaptativa:** Durante el déficit calórico prolongado, el NEAT (movimientos espontáneos) cae de forma inconsciente. Además, la enzima D3 muscular reduce las hormonas tiroideas a nivel tisular (hipotiroidismo local), ralentizando severamente el metabolismo [44-46].

📌 **Aplicación en la app:** Si el usuario aporta su porcentaje de grasa o FFM, se usará *Cunningham*. La app sincronizará los pasos diarios del smartphone (NEAT) para ajustar dinámicamente el multiplicador de actividad (PAL) [44, 47] y evitar estancamientos metabólicos.

---

## 8. Objetivos calóricos 🎯

El ritmo de alteración del peso corporal define la calidad del tejido alterado:
*   **Déficit Calórico:** Debe ser conservador. Un déficit moderado (300-500 kcal) que genere una pérdida del 0.5% al 1.0% del peso semanal es ideal [7, 48]. Déficits más agresivos destruyen aceleradamente la masa libre de grasa e inhiben la hipertrofia [7, 9].
*   **Superávit Calórico:** El "dirty bulk" (+6000 kcal/día) añade grasa de forma desproporcionada (Tamaño del Efecto: 0.33 vs 0.03) frente a un superávit magro de solo 200-400 kcal ("lean bulk"), mientras que la diferencia en músculo ganado es marginal [8, 9].
*   **Diet Breaks y Refeeds:** Periodos estructurados de neutralidad energética. Aplicar un *Diet Break* (volver a mantenimiento durante 1-2 semanas tras meses de déficit) frena la caída del metabolismo basal. Los sujetos en dieta lineal sin descanso sufren una caída metabólica de $\sim 92$ kcal/día, mientras que quienes aplican *Diet Breaks* solo caen $\sim 39$ kcal/día, resguardando la eficiencia tiroidea y mejorando la adherencia [46, 48-52].

📌 **Aplicación en la app:** El sistema establecerá topes de $\pm 300-500$ kcal. Cuando un usuario lleve 8-12 semanas en déficit continuo, recibirá una notificación automática sugiriendo activar el modo "Mantenimiento / Diet Break" durante 14 días para reiniciar su metabolismo.

---

## 9. Suplementación 💊

Las recomendaciones de suplementación se filtran rigurosamente por su máximo grado de validación científica en atletas:
*   **Creatina (Monohidrato):** Mejora la resíntesis de ATP (fosfágenos), la fuerza y el volumen celular intracelular [53, 54]. *Dosis:* Protocolo de carga con $0.3$ g/kg/día por 5-7 días seguido de 3-5 g/día; o fase de mantenimiento lineal de $3$ g/día crónicos [4, 53, 55].
*   **Omega-3 (EPA/DHA):** Modula la membrana celular. *Dosis:* Altas cargas de 3200 mg/día (800 EPA / 2400 DHA) por 8 semanas atenúan las agujetas (DOMS) y reducen el consumo miocárdico de oxígeno submáximo [4, 56].
*   **Magnesio:** Cofactor enzimático clave en la síntesis de ATP. *Dosis:* 300 a 500 mg/día en formas orgánicas (Citrato o Quelato, por su altísima biodisponibilidad frente al óxido) [57-61]. Atenúa lactato, mejora la fuerza contráctil y optimiza la calidad del sueño profundo [57, 62].
*   **Zinc:** Ayuda inmunitaria. *Dosis:* 8 a 11 mg/día [58, 63]. Fórmulas comerciales como el **ZMA** (Zinc, Magnesio, B6) **no han demostrado científicamente eficacia para elevar hormonas anabólicas** (testosterona) en personas sin deficiencias previas [4, 63-65]. Consumos crónicos $>100$ mg/día de zinc son tóxicos y bajan el HDL [63, 66].
*   **Melatonina:** Hormona cronobiótica y potente antioxidante celular. *Dosis:* 6 a 10 mg pre-sueño mejoran de forma consistente el rendimiento de sprint anaeróbico al día siguiente, aceleran la recuperación percibida y reducen marcadores de daño muscular (CK y LDH) [4, 67, 68]. Carece de efecto ergogénico tomada pre-ejercicio [67].

📌 **Aplicación en la app:** La sección de "Suplementos" prescribirá únicamente protocolos validados. Alertará de evitar el consumo de zinc excesivo, desaconsejará el ZMA por falta de evidencia hipertrófica y pautará alarmas nocturnas para la Melatonina y el Magnesio.

---

## 10. Referencias 📚

1. **Jäger et al. (2017).** *International Society of Sports Nutrition Position Stand: protein and exercise.* Journal of the International Society of Sports Nutrition (JISSN) [69, 70].
2. **Kerksick et al. (2017).** *International Society of Sports Nutrition position stand: nutrient timing.* Journal of the International Society of Sports Nutrition (JISSN) [3].
3. **Poon et al. (2024).** *Effects of intermittent dieting with break periods on body composition and metabolic adaptation: a systematic review and meta-analysis.* Nutrition Reviews [71].
4. **Trexler et al. (2014).** *Metabolic adaptation to weight loss: implications for the athlete.* Journal of the International Society of Sports Nutrition (JISSN) [46].
5. **Ribas-Latre et al. (2019/2020).** *Effects of high vs. moderate energy intake on body composition in competitive male bodybuilders.* PMC [72].
6. **Zaromskyte et al. (2021).** *Evaluating the Leucine Trigger Hypothesis to Explain the Post-prandial Regulation of Muscle Protein Synthesis.* Frontiers in Nutrition [73, 74].
7. **Dominguez et al. (2025).** *The Importance of Vitamin D and Magnesium in Athletes.* Nutrients [62, 75].
8. **Guo et al. (2026).** *Timing-dependent effects of melatonin supplementation on exercise performance and exercise-induced muscle damage: a systematic review and meta-analysis.* Frontiers in Nutrition [76, 77].
9. **Banihashemi, B. (n.d.).** *Optimal Protein Intake for Athletic Performance and Muscle Growth.* Cardiac Longevity Clinic [12, 78].
10. **Erdile, J. (2026).** *Plant vs Animal Protein: 2026 Update.* BetterByDesign Nutrition Ltd. [79, 80].

📌 **Aplicación en la app:** En el panel "Ciencia" se incluirán enlaces DOI directos a todos estos estudios, dotando al algoritmo de transparencia clínica absoluta ante preparadores físicos, nutricionistas o usuarios avanzados.