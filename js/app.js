// ============================================================
// DIET DATA - Base amounts for 2500 kcal
// ============================================================
const BASE_KCAL = 2500;

// Breakfast options
// macros: [kcal, protein, carbs, fat] estimated at base 2500 kcal
const breakfastOptions = [
    {
        id: 'yogur-qfb',
        name: 'Yogur de proteínas / QFB con cereales',
        macros: [550, 42, 62, 14],
        items: [
            { text: 'Corn flakes / cereales sin azúcar', amount: 55, unit: 'g' },
            { text: 'Queso fresco batido', amount: 500, unit: 'g' },
            { text: 'Yogur 2% + proteína', amount: 200, unit: 'g', extra: '+ {10}g prot', extraBase: 10, isAlt: true },
            { text: 'Frutos secos / crema de cacahuete', amount: 25, unit: 'g' }
        ]
    },
    {
        id: 'tostadas',
        name: 'Tostadas',
        macros: [470, 28, 52, 17],
        items: [
            { text: 'Pan integral trigo/espelta/centeno', amount: 120, unit: 'g' },
            { text: 'Lomo', amount: 50, unit: 'g', extra: '+ {30}g queso semi/havarti light', extraBase: 30 },
            { text: 'Guacamole o aguacate', amount: 40, unit: 'g' }
        ]
    },
    {
        id: 'cereales-leche',
        name: 'Cereales con leche y proteína',
        macros: [430, 33, 50, 13],
        items: [
            { text: 'Corn flakes / cereales sin azúcar', amount: 45, unit: 'g' },
            { text: 'Leche semi (un vaso)', amount: 200, unit: 'ml' },
            { text: 'Whey protein', amount: 25, unit: 'g' },
            { text: 'Frutos secos / crema de cacahuete', amount: 25, unit: 'g' }
        ]
    },
    {
        id: 'tortitas',
        name: 'Tortitas de avena',
        macros: [340, 22, 30, 16],
        items: [
            { text: 'Harina de avena / copos de avena', amount: 45, unit: 'g' },
            { text: '2 Huevos + claras', amount: 100, unit: 'g' },
            { text: 'Frutos secos / crema de cacahuete', amount: 10, unit: 'g' }
        ]
    },
    {
        id: 'yogures-proteicos',
        name: 'Yogures proteicos',
        macros: [420, 25, 60, 8],
        items: [
            { text: '2 yogures proteicos LIDL', amount: null, unit: '' },
            { text: 'Cereales', amount: 15, unit: 'g' },
            { text: 'Miel', amount: 20, unit: 'g' },
            { text: 'Frutos secos', amount: 15, unit: 'g' },
            { text: 'Zumo de naranja', amount: 200, unit: 'ml' }
        ]
    },
    {
        id: 'bocadillo',
        name: 'Bocadillo de pollo/pavo y queso/guacamole',
        macros: [520, 38, 55, 16],
        items: [
            { text: 'Pan integral trigo/espelta/centeno', amount: 120, unit: 'g' },
            { text: 'Pollo / Pavo', amount: 100, unit: 'g' },
            { text: 'Queso', amount: 60, unit: 'g', extra: 'ó {80}g guacamole', extraBase: 80 }
        ]
    }
];

// n: [kcal, protein, carbs, fat] per 100g
const lunchCarbs = [
    { name: 'Arroz blanco', base: 130, n: [130, 2.7, 28, 0.3] },
    { name: 'Patata boniato', base: 590, altName: 'Precongelada', altBase: 370, n: [86, 1.6, 20, 0.1] },
    { name: 'Tortitas de arroz', base: 130, n: [385, 7, 83, 3] },
    { name: 'Pasta', base: 130, n: [360, 13, 72, 1.5] },
    { name: 'Pan', base: 180, n: [265, 9, 49, 3.2] },
    { name: 'Quinoa', base: 130, n: [368, 14, 64, 6] },
    { name: 'Cus-cus', base: 130, n: [376, 12.8, 77, 0.6] },
    { name: 'Gnocchis de patata', base: 260, n: [165, 4, 34, 1] },
    { name: 'Legumbres cocidas', base: 450, n: [115, 8, 18, 0.8] }
];

const lunchProteins = [
    { name: 'Pollo', base: 200, n: [110, 23, 0, 1.5] },
    { name: 'Pescado blanco', base: 250, n: [82, 18, 0, 0.8] },
    { name: 'Salmón', base: 125, n: [208, 20, 0, 13] },
    { name: 'Pavo', base: 220, n: [105, 24, 0, 1] },
    { name: 'Hamburguesa de pollo', base: 180, n: [150, 17, 4, 7] },
    { name: 'Huevo (2 completos) + claras', base: 100, unit: 'ml claras', n: [85, 11, 0.7, 4] },
    { name: 'Lomo adobado', base: 200, n: [150, 20, 1, 7] },
    { name: 'Ternera', base: 160, n: [155, 22, 0, 7] }
];

const dinnerCarbs = [
    { name: 'Arroz blanco', base: 100, n: [130, 2.7, 28, 0.3] },
    { name: 'Patata boniato', base: 450, altName: 'Precongelada', altBase: 300, n: [86, 1.6, 20, 0.1] },
    { name: 'Tortitas de arroz', base: 100, n: [385, 7, 83, 3] },
    { name: 'Pasta', base: 100, n: [360, 13, 72, 1.5] },
    { name: 'Pan', base: 140, n: [265, 9, 49, 3.2] },
    { name: 'Quinoa', base: 100, n: [368, 14, 64, 6] },
    { name: 'Cus-cus', base: 100, n: [376, 12.8, 77, 0.6] },
    { name: 'Gnocchis de patata', base: 200, n: [165, 4, 34, 1] },
    { name: 'Legumbres cocidas', base: 350, n: [115, 8, 18, 0.8] }
];

const dinnerProteins = [
    { name: 'Pollo', base: 200, n: [110, 23, 0, 1.5] },
    { name: 'Pescado blanco', base: 250, n: [82, 18, 0, 0.8] },
    { name: 'Pavo', base: 220, n: [105, 24, 0, 1] },
    { name: 'Hamburguesa de pollo', base: 180, n: [150, 17, 4, 7] },
    { name: 'Huevo (2 yemas) + claras', base: 100, unit: 'ml claras', n: [85, 11, 0.7, 4] },
    { name: 'Lomo adobado', base: 200, n: [150, 20, 1, 7] },
    { name: 'Ternera', base: 160, n: [155, 22, 0, 7] }
];

// Extras nutrition: [kcal, protein, carbs, fat] per 100g (aceite per 100ml)
const extrasNutr = {
    verduras: [25, 2, 4, 0.3],
    aceite: [900, 0, 0, 100],
    fruta: [80, 0.5, 20, 0.2]
};

const supplements = [
    { icon: '💪', title: 'Creatina', desc: '8g todos los días' },
    { icon: '🐟', title: 'Omega 3', desc: '2 pastillas (1 desayuno + 1 comida)' },
    { icon: '🧲', title: 'Magnesio', desc: '1 pastilla antes de dormir' },
    { icon: '⚡', title: 'Zinc', desc: '1 pastilla antes de dormir' },
    { icon: '😴', title: 'Melatonina', desc: 'Opcional, para favorecer el descanso' }
];

// ============================================================
// STATE
// ============================================================
let currentKcal = 2500;
let selections = {
    breakfast: null,
    lunchCarb: null,
    lunchProtein: null,
    dinnerCarb: null,
    dinnerProtein: null
};

// ============================================================
// SCALING
// ============================================================
function getRatio() {
    return currentKcal / BASE_KCAL;
}

function scaleAmount(base, ratio) {
    if (base === null || base === undefined) return null;
    var scaled = base * (ratio !== undefined ? ratio : getRatio());
    if (scaled < 10) return Math.round(scaled);
    return Math.round(scaled / 5) * 5;
}

// ============================================================
// MACROS CALCULATION
// ============================================================
function calculateSelectedMacros() {
    var ratio = getRatio();
    var t = { kcal: 0, protein: 0, carbs: 0, fat: 0 };
    var has = false;

    // Breakfast
    if (selections.breakfast !== null) {
        has = true;
        var m = breakfastOptions[selections.breakfast].macros;
        t.kcal += m[0] * ratio;
        t.protein += m[1] * ratio;
        t.carbs += m[2] * ratio;
        t.fat += m[3] * ratio;
    }

    function addFood(data, idx) {
        if (idx === null) return;
        has = true;
        var item = data[idx];
        var grams = scaleAmount(item.base, ratio);
        t.kcal += item.n[0] * grams / 100;
        t.protein += item.n[1] * grams / 100;
        t.carbs += item.n[2] * grams / 100;
        t.fat += item.n[3] * grams / 100;
    }

    function addExtras(hasCarb, hasProt) {
        if (!hasCarb && !hasProt) return;
        var vegG = scaleAmount(200, ratio);
        t.kcal += extrasNutr.verduras[0] * vegG / 100;
        t.protein += extrasNutr.verduras[1] * vegG / 100;
        t.carbs += extrasNutr.verduras[2] * vegG / 100;
        t.fat += extrasNutr.verduras[3] * vegG / 100;
        var oilMl = scaleAmount(5, ratio);
        t.kcal += extrasNutr.aceite[0] * oilMl / 100;
        t.fat += extrasNutr.aceite[3] * oilMl / 100;
        t.kcal += extrasNutr.fruta[0];
        t.protein += extrasNutr.fruta[1];
        t.carbs += extrasNutr.fruta[2];
        t.fat += extrasNutr.fruta[3];
    }

    addFood(lunchCarbs, selections.lunchCarb);
    addFood(lunchProteins, selections.lunchProtein);
    addExtras(selections.lunchCarb !== null, selections.lunchProtein !== null);

    addFood(dinnerCarbs, selections.dinnerCarb);
    addFood(dinnerProteins, selections.dinnerProtein);
    addExtras(selections.dinnerCarb !== null, selections.dinnerProtein !== null);

    return has ? t : null;
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderBreakfast() {
    var grid = document.getElementById('breakfast-grid');
    var ratio = getRatio();

    grid.innerHTML = breakfastOptions.map(function(option, idx) {
        var isSelected = selections.breakfast === idx;
        var itemsHtml = option.items.map(function(item) {
            var cls = item.isAlt ? ' class="alt-item"' : '';
            var content = item.text;

            if (item.amount !== null) {
                var scaled = scaleAmount(item.amount, ratio);
                content += ': <span class="amount">' + scaled + item.unit + '</span>';
            }

            if (item.extra) {
                var extraScaled = scaleAmount(item.extraBase, ratio);
                var extraText = item.extra.replace(/\{(\d+)\}/, extraScaled);
                content += ' <span style="color:#999">' + extraText + '</span>';
            }

            return '<li' + cls + '>' + content + '</li>';
        }).join('');

        return '<div class="breakfast-card' + (isSelected ? ' selected' : '') + '" data-index="' + idx + '">' +
            '<div class="breakfast-card-title">' + option.name + '</div>' +
            '<ul class="breakfast-card-items">' + itemsHtml + '</ul>' +
            '</div>';
    }).join('');
}

function renderMealTable(containerId, carbsData, proteinsData, carbSelection, proteinSelection, mealType) {
    var container = document.getElementById(containerId);
    var ratio = getRatio();

    var carbsRows = carbsData.map(function(item, idx) {
        var isSelected = carbSelection === idx;
        var scaled = scaleAmount(item.base, ratio);
        var unit = item.unit || 'g';
        var row = '<tr class="' + (isSelected ? 'selected' : '') + '" data-meal="' + mealType + '" data-type="carb" data-index="' + idx + '">' +
            '<td>' + item.name + '</td>' +
            '<td>' + scaled + ' ' + unit + '</td>' +
            '</tr>';

        if (item.altName) {
            var altScaled = scaleAmount(item.altBase, ratio);
            row += '<tr class="sub-row ' + (isSelected ? 'selected' : '') + '" data-meal="' + mealType + '" data-type="carb" data-index="' + idx + '">' +
                '<td>' + item.altName + '</td>' +
                '<td>' + altScaled + ' ' + unit + '</td>' +
                '</tr>';
        }
        return row;
    }).join('');

    var proteinRows = proteinsData.map(function(item, idx) {
        var isSelected = proteinSelection === idx;
        var scaled = scaleAmount(item.base, ratio);
        var unit = item.unit || 'g';
        return '<tr class="' + (isSelected ? 'selected' : '') + '" data-meal="' + mealType + '" data-type="protein" data-index="' + idx + '">' +
            '<td>' + item.name + '</td>' +
            '<td>' + scaled + ' ' + unit + '</td>' +
            '</tr>';
    }).join('');

    container.innerHTML =
        '<div class="meal-table-wrapper">' +
            '<div class="meal-table-header carbs">🌾 Hidratos de Carbono</div>' +
            '<table class="meal-table">' +
                '<tbody>' + carbsRows + '</tbody>' +
            '</table>' +
        '</div>' +
        '<div class="meal-table-wrapper">' +
            '<div class="meal-table-header protein">🥩 Proteínas</div>' +
            '<table class="meal-table">' +
                '<tbody>' + proteinRows +
                    '<tr class="note-row"><td colspan="2">Escurrir bien las latas de aceite de oliva</td></tr>' +
                '</tbody>' +
            '</table>' +
        '</div>';
}

function renderSupplements() {
    var list = document.getElementById('supplements-list');
    list.innerHTML = supplements.map(function(s) {
        return '<div class="supplement-card">' +
            '<span class="supplement-icon">' + s.icon + '</span>' +
            '<div class="supplement-text">' +
                '<strong>' + s.title + '</strong>' +
                s.desc +
            '</div>' +
        '</div>';
    }).join('');
}

function updateExtras() {
    var ratio = getRatio();
    var vegScaled = scaleAmount(200, ratio);
    var oilScaled = scaleAmount(5, ratio);

    document.querySelectorAll('.scaled-veg-lunch, .scaled-veg-dinner').forEach(function(el) {
        el.textContent = vegScaled;
    });
    document.querySelectorAll('.scaled-oil-lunch, .scaled-oil-dinner').forEach(function(el) {
        el.textContent = oilScaled;
    });
}

function renderNutritionSummary() {
    var container = document.getElementById('nutrition-summary');
    var macros = calculateSelectedMacros();

    if (!macros) {
        container.innerHTML = '';
        container.style.display = 'none';
        return;
    }

    container.style.display = '';
    var kcal = Math.round(macros.kcal);
    var p = Math.round(macros.protein);
    var c = Math.round(macros.carbs);
    var f = Math.round(macros.fat);
    var totalG = p + c + f;
    var pPct = totalG > 0 ? Math.round(p / totalG * 100) : 0;
    var cPct = totalG > 0 ? Math.round(c / totalG * 100) : 0;
    var fPct = totalG > 0 ? 100 - pPct - cPct : 0;

    var meals = [];
    if (selections.breakfast !== null) meals.push('Desayuno');
    if (selections.lunchCarb !== null || selections.lunchProtein !== null) meals.push('Almuerzo');
    if (selections.dinnerCarb !== null || selections.dinnerProtein !== null) meals.push('Cena');

    var complete = selections.breakfast !== null &&
                   selections.lunchCarb !== null && selections.lunchProtein !== null &&
                   selections.dinnerCarb !== null && selections.dinnerProtein !== null;

    var pKcal = p * 4;
    var cKcal = c * 4;
    var fKcal = f * 9;
    var fromMacros = pKcal + cKcal + fKcal;
    var pKcalPct = fromMacros > 0 ? Math.round(pKcal / fromMacros * 100) : 0;
    var cKcalPct = fromMacros > 0 ? Math.round(cKcal / fromMacros * 100) : 0;
    var fKcalPct = fromMacros > 0 ? 100 - pKcalPct - cKcalPct : 0;

    container.innerHTML =
        '<div class="nutrition-header">' +
            '<h3>📊 Resumen Nutricional Estimado</h3>' +
            '<span class="nutrition-meals">' + meals.join(' + ') + (complete ? '' : ' · Incompleto') + '</span>' +
        '</div>' +
        '<div class="nutrition-body">' +
            '<div class="nutrition-kcal">' +
                '<span class="nutrition-kcal-number">' + kcal + '</span>' +
                '<span class="nutrition-kcal-unit">kcal</span>' +
            '</div>' +
            '<div class="nutrition-ring">' +
                '<div class="ring-segment ring-protein" style="--pct:' + pKcalPct + ';--offset:0">' +
                    '<span class="ring-label">' + pKcalPct + '%</span>' +
                '</div>' +
                '<div class="ring-segment ring-carbs" style="--pct:' + cKcalPct + ';--offset:' + pKcalPct + '">' +
                    '<span class="ring-label">' + cKcalPct + '%</span>' +
                '</div>' +
                '<div class="ring-segment ring-fat" style="--pct:' + fKcalPct + ';--offset:' + (pKcalPct + cKcalPct) + '">' +
                    '<span class="ring-label">' + fKcalPct + '%</span>' +
                '</div>' +
            '</div>' +
            '<div class="nutrition-macros">' +
                '<div class="macro-bar-group">' +
                    '<div class="macro-info"><span class="macro-dot protein-dot"></span><span class="macro-name">Proteínas</span><strong>' + p + 'g</strong><span class="macro-pct">' + pPct + '%</span></div>' +
                    '<div class="macro-bar"><div class="macro-bar-fill protein-fill" style="width:' + pPct + '%"></div></div>' +
                '</div>' +
                '<div class="macro-bar-group">' +
                    '<div class="macro-info"><span class="macro-dot carbs-dot"></span><span class="macro-name">Carbohidratos</span><strong>' + c + 'g</strong><span class="macro-pct">' + cPct + '%</span></div>' +
                    '<div class="macro-bar"><div class="macro-bar-fill carbs-fill" style="width:' + cPct + '%"></div></div>' +
                '</div>' +
                '<div class="macro-bar-group">' +
                    '<div class="macro-info"><span class="macro-dot fat-dot"></span><span class="macro-name">Grasas</span><strong>' + f + 'g</strong><span class="macro-pct">' + fPct + '%</span></div>' +
                    '<div class="macro-bar"><div class="macro-bar-fill fat-fill" style="width:' + fPct + '%"></div></div>' +
                '</div>' +
            '</div>' +
        '</div>';
}

function renderAll() {
    renderBreakfast();
    renderMealTable('lunch-tables', lunchCarbs, lunchProteins, selections.lunchCarb, selections.lunchProtein, 'lunch');
    renderMealTable('dinner-tables', dinnerCarbs, dinnerProteins, selections.dinnerCarb, selections.dinnerProtein, 'dinner');
    renderSupplements();
    updateExtras();
    renderNutritionSummary();
}

// ============================================================
// TABS
// ============================================================
function activateTab(tabName) {
    document.querySelectorAll('.main-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });

    var btn = document.querySelector('.main-tab[data-tab="' + tabName + '"]');
    var panel = document.getElementById('tab-' + tabName);
    if (btn) btn.classList.add('active');
    if (panel) panel.classList.add('active');
}

function getDefaultTab() {
    var hour = new Date().getHours();
    if (hour < 11) return 'breakfast';
    if (hour < 17) return 'lunch';
    return 'dinner';
}

// ============================================================
// EVENT HANDLERS
// ============================================================

function updateKcal(value) {
    currentKcal = Math.max(1500, Math.min(3500, value));
    document.getElementById('kcal-display').textContent = currentKcal;
    document.getElementById('kcal-range').value = currentKcal;
    renderAll();
    updateCalculatorResults();
    saveState();
}

// Kcal slider
document.getElementById('kcal-range').addEventListener('input', function(e) {
    updateKcal(parseInt(e.target.value));
});

// Kcal buttons
document.getElementById('kcal-minus').addEventListener('click', function() {
    updateKcal(currentKcal - 100);
});

document.getElementById('kcal-plus').addEventListener('click', function() {
    updateKcal(currentKcal + 100);
});

// Breakfast card selection
document.getElementById('breakfast-grid').addEventListener('click', function(e) {
    var card = e.target.closest('.breakfast-card');
    if (!card) return;
    var idx = parseInt(card.dataset.index);
    selections.breakfast = selections.breakfast === idx ? null : idx;
    renderBreakfast();
    renderNutritionSummary();
    saveState();
});

// Meal table selection (lunch & dinner)
document.addEventListener('click', function(e) {
    var row = e.target.closest('tr[data-meal]');
    if (!row) return;

    var meal = row.dataset.meal;
    var type = row.dataset.type;
    var idx = parseInt(row.dataset.index);
    var key = meal === 'lunch'
        ? (type === 'carb' ? 'lunchCarb' : 'lunchProtein')
        : (type === 'carb' ? 'dinnerCarb' : 'dinnerProtein');

    selections[key] = selections[key] === idx ? null : idx;

    if (meal === 'lunch') {
        renderMealTable('lunch-tables', lunchCarbs, lunchProteins, selections.lunchCarb, selections.lunchProtein, 'lunch');
    } else {
        renderMealTable('dinner-tables', dinnerCarbs, dinnerProteins, selections.dinnerCarb, selections.dinnerProtein, 'dinner');
    }
    renderNutritionSummary();
    saveState();
});

// Section toggle (supplements)
document.querySelectorAll('[data-toggle]').forEach(function(header) {
    header.addEventListener('click', function(e) {
        if (e.target.closest('.tooltip-trigger')) return;
        var section = this.dataset.toggle;
        var body = document.getElementById(section + '-body') ||
                   document.getElementById(section + 's-body');
        if (body) body.classList.toggle('open');
    });
});

// Main tabs
document.querySelectorAll('.main-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        activateTab(this.dataset.tab);
    });
});

// ============================================================
// PERSISTENCE (localStorage)
// ============================================================
function saveState() {
    try {
        localStorage.setItem('dietApp', JSON.stringify({
            kcal: currentKcal,
            selections: selections
        }));
    } catch (e) {}
}

function loadState() {
    try {
        var saved = localStorage.getItem('dietApp');
        if (saved) {
            var data = JSON.parse(saved);
            if (data.kcal >= 1500 && data.kcal <= 3500) {
                currentKcal = data.kcal;
            }
            if (data.selections) {
                selections = { breakfast: null, lunchCarb: null, lunchProtein: null, dinnerCarb: null, dinnerProtein: null };
                Object.keys(data.selections).forEach(function(k) {
                    if (k in selections) selections[k] = data.selections[k];
                });
            }
        }
    } catch (e) {}
}

// ============================================================
// BMR / TDEE CALCULATOR
// ============================================================

var tooltipData = {
    activity: {
        title: 'Factor de Actividad Diaria',
        body: '<p>Este factor refleja tu gasto calórico por <strong>actividad diaria sin contar el entreno</strong> (NEAT).</p>' +
            '<ul>' +
            '<li><strong>Sedentario (x1.2):</strong> Trabajo de oficina/sentado.</li>' +
            '<li><strong>Ligeramente activo (x1.375):</strong> Oficina pero caminas al trabajo, recados.</li>' +
            '<li><strong>Moderadamente activo (x1.55):</strong> Trabajo de pie o caminas >10k pasos/dia.</li>' +
            '<li><strong>Muy activo (x1.725):</strong> Trabajo fisico o en movimiento todo el dia.</li>' +
            '</ul>'
    },
    bmr: {
        title: 'Tasa Metabólica Basal (TMB)',
        body: '<p>Calorías que tu cuerpo necesita <strong>en reposo absoluto</strong>.</p>' +
            '<p>Formula de <strong>Mifflin-St Jeor</strong>:</p>' +
            '<p><strong>Hombres:</strong> (10 x peso) + (6.25 x altura) - (5 x edad) + 5</p>' +
            '<p><strong>Mujeres:</strong> (10 x peso) + (6.25 x altura) - (5 x edad) - 161</p>'
    },
    neat: {
        title: 'NEAT + Actividad Diaria',
        body: '<p>Energía gastada en actividades diarias <strong>sin ejercicio planificado</strong>.</p>' +
            '<p>Calorias diarias = TMB x Factor de actividad</p>' +
            '<p>Util para saber cuanto quemas en dias de descanso.</p>'
    },
    tdee: {
        title: 'Gasto Energético Total (TDEE)',
        body: '<p>Total de calorias que quemas al dia <strong>incluyendo el ejercicio</strong>.</p>' +
            '<p>TDEE = NEAT + (Calorias entreno x dias/semana / 7)</p>' +
            '<p>Si tu dieta esta por debajo del TDEE, estas en <strong>deficit calorico</strong>. Si esta por encima, en <strong>superavit</strong>.</p>'
    }
};

var trainBurnPerMin = {
    strength: [5, 6.5, 8],
    cardio: [8, 10, 12],
    hiit: [9, 11.5, 14],
    mixed: [7, 9, 11]
};

function calculateBMR() {
    var sex = document.getElementById('calc-sex').value;
    var age = parseFloat(document.getElementById('calc-age').value);
    var height = parseFloat(document.getElementById('calc-height').value);
    var weight = parseFloat(document.getElementById('calc-weight').value);

    if (!age || !height || !weight) return null;

    if (sex === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

function calculateTDEE() {
    var bmr = calculateBMR();
    if (!bmr) return null;

    var activityFactor = parseFloat(document.getElementById('calc-activity').value);
    if (!activityFactor) return null;

    var neat = bmr * activityFactor;
    var trains = document.getElementById('calc-trains').value === 'yes';
    var trainingExtra = 0;

    if (trains) {
        var type = document.getElementById('calc-train-type').value;
        var days = parseInt(document.getElementById('calc-train-days').value);
        var duration = parseInt(document.getElementById('calc-train-duration').value);
        var intensity = document.getElementById('calc-train-intensity').value;

        var intensityIdx = intensity === 'low' ? 0 : intensity === 'medium' ? 1 : 2;
        var burnPerMin = trainBurnPerMin[type][intensityIdx];
        var sessionCals = burnPerMin * duration;
        trainingExtra = (sessionCals * days) / 7;
    }

    return { bmr: Math.round(bmr), neat: Math.round(neat), tdee: Math.round(neat + trainingExtra) };
}

function updateCalculatorResults() {
    var result = calculateTDEE();
    var resultsDiv = document.getElementById('calc-results');

    if (!result) {
        resultsDiv.style.display = 'none';
        return;
    }

    resultsDiv.style.display = '';
    document.getElementById('result-bmr').textContent = result.bmr;
    document.getElementById('result-neat').textContent = result.neat;
    document.getElementById('result-tdee').textContent = result.tdee;

    var diff = currentKcal - result.tdee;
    var pct = diff / result.tdee * 100;

    var marker = document.getElementById('balance-bar-marker');
    var pos = Math.max(0, Math.min(100, 50 + (pct / 30 * 50)));
    marker.style.left = pos + '%';

    var verdict = document.getElementById('balance-verdict');
    if (diff < -100) {
        var absDiff = Math.abs(diff);
        verdict.className = 'balance-verdict deficit';
        verdict.innerHTML = '📉 <strong>Déficit de ' + absDiff + ' kcal/día</strong> (' + Math.abs(pct).toFixed(1) + '%) — Ideal para perder grasa';
    } else if (diff > 100) {
        verdict.className = 'balance-verdict surplus';
        verdict.innerHTML = '📈 <strong>Superávit de +' + diff + ' kcal/día</strong> (+' + pct.toFixed(1) + '%) — Ganarás peso';
    } else {
        verdict.className = 'balance-verdict maintenance';
        verdict.innerHTML = '⚖️ <strong>Mantenimiento</strong> (±' + Math.abs(diff) + ' kcal) — Peso estable';
    }

    saveCalcState();
}

function toggleTrainingDetails() {
    var trains = document.getElementById('calc-trains').value === 'yes';
    var details = document.getElementById('calc-training-details');
    if (trains) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
    updateCalculatorResults();
}

function openTooltip(key) {
    var data = tooltipData[key];
    if (!data) return;
    document.getElementById('tooltip-title').textContent = data.title;
    document.getElementById('tooltip-body').innerHTML = data.body;
    document.getElementById('tooltip-overlay').style.display = '';
}

function closeTooltip() {
    document.getElementById('tooltip-overlay').style.display = 'none';
}

document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.tooltip-trigger');
    if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        openTooltip(trigger.dataset.tooltip);
        return;
    }
    if (e.target.id === 'tooltip-overlay') {
        closeTooltip();
        return;
    }
    if (e.target.id === 'tooltip-close' || e.target.closest('#tooltip-close')) {
        closeTooltip();
        return;
    }
});

['calc-sex', 'calc-age', 'calc-height', 'calc-weight', 'calc-activity',
 'calc-trains', 'calc-train-type', 'calc-train-days', 'calc-train-duration', 'calc-train-intensity'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
        el.addEventListener('change', function() {
            if (id === 'calc-trains') {
                toggleTrainingDetails();
            } else {
                updateCalculatorResults();
            }
        });
        if (el.type === 'number') {
            el.addEventListener('input', updateCalculatorResults);
        }
    }
});

function saveCalcState() {
    try {
        var calcData = {};
        ['calc-sex', 'calc-age', 'calc-height', 'calc-weight', 'calc-activity',
         'calc-trains', 'calc-train-type', 'calc-train-days', 'calc-train-duration', 'calc-train-intensity'].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) calcData[id] = el.value;
        });
        localStorage.setItem('dietAppCalc', JSON.stringify(calcData));
    } catch (e) {}
}

function loadCalcState() {
    try {
        var saved = localStorage.getItem('dietAppCalc');
        if (saved) {
            var data = JSON.parse(saved);
            Object.keys(data).forEach(function(id) {
                var el = document.getElementById(id);
                if (el && data[id]) el.value = data[id];
            });
            toggleTrainingDetails();
        }
    } catch (e) {}
}

// ============================================================
// INIT
// ============================================================
function init() {
    loadState();
    loadCalcState();
    document.getElementById('kcal-display').textContent = currentKcal;
    document.getElementById('kcal-range').value = currentKcal;
    renderAll();
    updateCalculatorResults();

    // Auto-select tab based on time of day
    activateTab(getDefaultTab());
}

document.addEventListener('DOMContentLoaded', init);
